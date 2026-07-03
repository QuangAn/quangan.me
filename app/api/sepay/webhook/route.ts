import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import {
  extractTransferCode,
  getOrderByCode,
  logSepayTransaction,
  markOrderPaid,
  type SepayWebhookPayload,
} from "@/lib/orders";
import { provisionStudentForOrder } from "@/lib/students";

export const runtime = "nodejs";

// Cửa sổ chấp nhận lệch thời gian (chống replay) — theo khuyến nghị SePay: ±5 phút.
const TIMESTAMP_TOLERANCE_SECONDS = 300;

/** So sánh chuỗi constant-time (tránh dò qua thời gian phản hồi). */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    timingSafeEqual(bufA, bufA);
    return false;
  }
  return timingSafeEqual(bufA, bufB);
}

/**
 * Xác thực HMAC-SHA256 theo chuẩn SePay:
 *   - Header  X-SePay-Signature: sha256=<hex>
 *   - Header  X-SePay-Timestamp: <unix giây>
 *   - Ký      HMAC_SHA256(secret, "{timestamp}.{raw_body}") -> hex
 * Secret dùng nguyên văn (kể cả tiền tố whsec_).
 */
function verifyHmacSignature(
  request: Request,
  rawBody: string,
  secret: string,
): boolean {
  const signature = request.headers.get("x-sepay-signature");
  const timestampHeader = request.headers.get("x-sepay-timestamp");
  if (!signature || !timestampHeader) return false;

  const timestamp = Number(timestampHeader);
  if (!Number.isFinite(timestamp)) return false;

  // Chống replay: từ chối nếu timestamp lệch quá cửa sổ cho phép.
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (Math.abs(nowSeconds - timestamp) > TIMESTAMP_TOLERANCE_SECONDS) {
    return false;
  }

  const expected =
    "sha256=" +
    createHmac("sha256", secret)
      .update(`${timestamp}.${rawBody}`)
      .digest("hex");

  return safeEqual(expected, signature);
}

/** Xác thực API Key: header Authorization: Apikey <key>. */
function verifyApiKey(request: Request, apiKey: string): boolean {
  return request.headers.get("authorization") === `Apikey ${apiKey}`;
}

/**
 * POST /api/sepay/webhook — SePay gọi khi tài khoản ngân hàng có giao dịch.
 *
 * Quy tắc phản hồi của SePay: trả HTTP 200/201 kèm {"success": true} là đã
 * nhận thành công; mã khác sẽ khiến SePay gửi lại (retry tối đa 7 lần / 5 giờ).
 * Vì vậy: các trường hợp "không khớp đơn nào" vẫn trả success để không bị
 * retry vô ích — giao dịch đã được ghi log để đối soát thủ công.
 */
export async function POST(request: Request) {
  const secret = process.env.SEPAY_WEBHOOK_SECRET;
  const apiKey = process.env.SEPAY_WEBHOOK_API_KEY;

  // Chưa cấu hình phương thức xác thực nào → từ chối thay vì nhận mù.
  if (!secret && !apiKey) {
    console.error(
      "[sepay] Thiếu SEPAY_WEBHOOK_SECRET / SEPAY_WEBHOOK_API_KEY — từ chối webhook.",
    );
    return NextResponse.json(
      { success: false, message: "Webhook chưa được cấu hình" },
      { status: 500 },
    );
  }

  // Đọc RAW body để tính HMAC — KHÔNG dùng request.json() rồi stringify lại
  // (re-serialize sẽ làm lệch chữ ký).
  const rawBody = await request.text();

  const authorized = Boolean(
    (secret && verifyHmacSignature(request, rawBody, secret)) ||
      (apiKey && verifyApiKey(request, apiKey)),
  );
  if (!authorized) {
    return NextResponse.json(
      { success: false, message: "Xác thực webhook thất bại" },
      { status: 401 },
    );
  }

  let payload: SepayWebhookPayload;
  try {
    payload = JSON.parse(rawBody) as SepayWebhookPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Payload không hợp lệ" },
      { status: 400 },
    );
  }

  if (typeof payload?.id !== "number") {
    return NextResponse.json(
      { success: false, message: "Payload thiếu id giao dịch" },
      { status: 400 },
    );
  }

  // Chỉ quan tâm tiền vào; tiền ra vẫn ghi log rồi bỏ qua
  if (payload.transferType !== "in") {
    await logSepayTransaction(payload, null);
    return NextResponse.json({ success: true });
  }

  const transferCode = extractTransferCode(payload);
  const order = transferCode ? await getOrderByCode(transferCode) : null;
  await logSepayTransaction(payload, order?.id ?? null);

  if (!order) {
    // Không khớp đơn nào — đã có log để đối soát tay
    return NextResponse.json({ success: true });
  }

  if (order.status === "paid") {
    // Webhook retry cho đơn đã thanh toán — idempotent
    return NextResponse.json({ success: true });
  }

  const amount = Number(payload.transferAmount ?? 0);
  if (amount < order.amount) {
    // Chuyển thiếu tiền — giữ pending, chủ khóa học đối soát thủ công qua log
    console.warn(
      `[sepay] Đơn ${order.transfer_code} nhận ${amount} < ${order.amount} — cần đối soát.`,
    );
    return NextResponse.json({ success: true });
  }

  const marked = await markOrderPaid(order.id, payload);

  // Chỉ cấp tài khoản khi lần này chính là lần chuyển pending → paid
  // (markOrderPaid idempotent, chỉ trả true ở lần đầu). Lỗi cấp tài khoản
  // KHÔNG được làm SePay retry — đơn đã ghi nhận thanh toán, chủ khóa học
  // gửi lại email từ trang admin nếu cần.
  if (marked) {
    try {
      const result = await provisionStudentForOrder(order);
      if (!result.ok) {
        console.error(
          `[sepay] Cấp tài khoản thất bại cho đơn ${order.transfer_code}: ${result.error}`,
        );
      }
    } catch (error) {
      console.error(
        `[sepay] Lỗi cấp tài khoản cho đơn ${order.transfer_code}:`,
        error,
      );
    }
  }

  return NextResponse.json({ success: true });
}
