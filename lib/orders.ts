import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { paymentConfig } from "@/config/payment";
import { getPlanById } from "@/config/pricing";
import type {
  CheckoutFormValues,
  Order,
  OrderStatus,
  PublicOrder,
} from "@/types";

/** Payload SePay gửi về webhook khi có giao dịch ngân hàng. */
export interface SepayWebhookPayload {
  id: number;
  gateway?: string;
  transactionDate?: string;
  accountNumber?: string;
  subAccount?: string | null;
  code?: string | null;
  content?: string | null;
  transferType?: "in" | "out";
  transferAmount?: number;
  accumulated?: number;
  referenceCode?: string;
  description?: string;
}

export type CreateOrderResult =
  | { ok: true; orderCode: string }
  | { ok: false; error: string };

const TRANSFER_CODE_LENGTH = 6;
// Bỏ ký tự dễ nhầm (0/O, 1/I/L) để khách gõ tay không sai
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
// Mã Postgres khi vi phạm unique constraint (trùng transfer_code)
const PG_UNIQUE_VIOLATION = "23505";

const CONFIG_MISSING_ERROR =
  "Hệ thống thanh toán chưa được cấu hình. Vui lòng liên hệ Zalo để được hỗ trợ đăng ký.";

/** Sinh mã chuyển khoản ngẫu nhiên, vd "AWB7K2M4QX". */
export function generateTransferCode(): string {
  const random = new Uint32Array(TRANSFER_CODE_LENGTH);
  crypto.getRandomValues(random);
  let suffix = "";
  for (let i = 0; i < TRANSFER_CODE_LENGTH; i++) {
    suffix += CODE_ALPHABET[random[i] % CODE_ALPHABET.length];
  }
  return `${paymentConfig.transferPrefix}${suffix}`;
}

/**
 * Tạo đơn hàng cho gói học: lưu lead (để đội tư vấn theo dõi kể cả khi khách
 * chưa chuyển khoản) rồi tạo bản ghi đơn hàng với mã chuyển khoản duy nhất.
 */
export async function createOrder(
  values: CheckoutFormValues,
): Promise<CreateOrderResult> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    return { ok: false, error: CONFIG_MISSING_ERROR };
  }

  const plan = getPlanById(values.plan_id);
  if (!plan) {
    return { ok: false, error: "Gói học không hợp lệ. Vui lòng thử lại." };
  }

  const fullName = values.full_name.trim();
  const phone = values.phone.trim();
  const email = values.email.trim();

  // Lead lỗi không chặn việc tạo đơn — đơn hàng mới là dữ liệu chính
  const { data: lead } = await supabase
    .from("course_leads")
    .insert({
      full_name: fullName,
      phone,
      email: email || null,
      learning_goal: `Đăng ký ${plan.name}`,
      source: "checkout",
    })
    .select("id")
    .single();

  const expiresAt = new Date(
    Date.now() + paymentConfig.orderExpiryHours * 60 * 60 * 1000,
  ).toISOString();

  // Thử lại vài lần nếu trúng mã chuyển khoản đã tồn tại (xác suất rất thấp)
  for (let attempt = 0; attempt < 3; attempt++) {
    const transferCode = generateTransferCode();
    const { error } = await supabase.from("orders").insert({
      plan_id: plan.id,
      plan_name: plan.name,
      amount: plan.priceValue,
      transfer_code: transferCode,
      status: "pending",
      full_name: fullName,
      phone,
      email: email || null,
      lead_id: lead?.id ?? null,
      expires_at: expiresAt,
    });

    if (!error) {
      return { ok: true, orderCode: transferCode };
    }
    if (error.code !== PG_UNIQUE_VIOLATION) {
      console.error("[orders] Không thể tạo đơn hàng:", error.message);
      return {
        ok: false,
        error: "Không thể tạo đơn hàng lúc này. Vui lòng thử lại sau ít phút.",
      };
    }
  }

  return {
    ok: false,
    error: "Không thể tạo đơn hàng lúc này. Vui lòng thử lại sau ít phút.",
  };
}

/** Lấy đơn hàng theo mã chuyển khoản (mã đơn công khai trên URL). */
export async function getOrderByCode(code: string): Promise<Order | null> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("orders")
    .select(
      "id, order_number, plan_id, plan_name, amount, transfer_code, status, full_name, phone, email, paid_at, expires_at, created_at",
    )
    .eq("transfer_code", code.trim().toUpperCase())
    .maybeSingle();

  if (error) {
    console.error("[orders] Không thể đọc đơn hàng:", error.message);
    return null;
  }
  return (data as Order) ?? null;
}

/**
 * Trạng thái hiệu lực của đơn: đơn pending quá hạn hiển thị là expired.
 * Không ghi đè trong DB — nếu khách chuyển khoản trễ, webhook vẫn xác nhận được.
 */
export function effectiveStatus(order: Pick<Order, "status" | "expires_at">): OrderStatus {
  if (
    order.status === "pending" &&
    new Date(order.expires_at).getTime() < Date.now()
  ) {
    return "expired";
  }
  return order.status;
}

/** Rút gọn đơn hàng về các trường an toàn để đưa xuống client. */
export function toPublicOrder(order: Order): PublicOrder {
  return {
    order_number: order.order_number,
    plan_id: order.plan_id,
    plan_name: order.plan_name,
    amount: order.amount,
    transfer_code: order.transfer_code,
    status: effectiveStatus(order),
    full_name: order.full_name,
    paid_at: order.paid_at,
    expires_at: order.expires_at,
  };
}

/**
 * Tìm mã chuyển khoản trong nội dung giao dịch. Ngân hàng thường chèn thêm
 * chữ quanh nội dung gốc nên phải dò bằng regex thay vì so sánh bằng.
 */
export function extractTransferCode(
  payload: Pick<SepayWebhookPayload, "code" | "content" | "description">,
): string | null {
  const haystack = [payload.code, payload.content, payload.description]
    .filter(Boolean)
    .join(" ")
    .toUpperCase();
  const pattern = new RegExp(
    `${paymentConfig.transferPrefix}[A-Z0-9]{${TRANSFER_CODE_LENGTH}}`,
  );
  return haystack.match(pattern)?.[0] ?? null;
}

/**
 * Đánh dấu đơn đã thanh toán (idempotent — chỉ cập nhật đơn đang pending,
 * webhook SePay có thể gửi lại nhiều lần).
 */
export async function markOrderPaid(
  orderId: string,
  payload: SepayWebhookPayload,
): Promise<boolean> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return false;

  const { data, error } = await supabase
    .from("orders")
    .update({
      status: "paid",
      paid_at: new Date().toISOString(),
      paid_amount: payload.transferAmount ?? null,
      sepay_transaction_id: payload.id,
      sepay_reference_code: payload.referenceCode ?? null,
    })
    .eq("id", orderId)
    .eq("status", "pending")
    .select("id");

  if (error) {
    console.error("[orders] Không thể đánh dấu đã thanh toán:", error.message);
    return false;
  }
  return (data?.length ?? 0) > 0;
}

/** Ghi nhật ký giao dịch SePay (bỏ qua nếu đã ghi — webhook retry). */
export async function logSepayTransaction(
  payload: SepayWebhookPayload,
  orderId: string | null,
): Promise<void> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return;

  const { error } = await supabase.from("sepay_transactions").upsert(
    {
      sepay_id: payload.id,
      gateway: payload.gateway ?? null,
      transaction_date: payload.transactionDate ?? null,
      account_number: payload.accountNumber ?? null,
      sub_account: payload.subAccount ?? null,
      code: payload.code ?? null,
      content: payload.content ?? null,
      transfer_type: payload.transferType ?? null,
      transfer_amount: payload.transferAmount ?? null,
      accumulated: payload.accumulated ?? null,
      reference_code: payload.referenceCode ?? null,
      description: payload.description ?? null,
      order_id: orderId,
    },
    { onConflict: "sepay_id", ignoreDuplicates: true },
  );

  if (error) {
    console.error("[orders] Không thể ghi log giao dịch:", error.message);
  }
}
