import { NextResponse } from "next/server";
import {
  extractTransferCode,
  getOrderByCode,
  logSepayTransaction,
  markOrderPaid,
  type SepayWebhookPayload,
} from "@/lib/orders";

export const runtime = "nodejs";

/**
 * POST /api/sepay/webhook — SePay gọi khi tài khoản ngân hàng có giao dịch.
 *
 * Quy tắc phản hồi của SePay: trả HTTP 200/201 kèm {"success": true} là đã
 * nhận thành công; mã khác sẽ khiến SePay gửi lại (retry tối đa 7 lần / 5 giờ).
 * Vì vậy: các trường hợp "không khớp đơn nào" vẫn trả success để không bị
 * retry vô ích — giao dịch đã được ghi log để đối soát thủ công.
 */
export async function POST(request: Request) {
  const apiKey = process.env.SEPAY_WEBHOOK_API_KEY;
  if (!apiKey) {
    // Chưa cấu hình key → từ chối mọi webhook thay vì nhận mù
    console.error("[sepay] Thiếu SEPAY_WEBHOOK_API_KEY — từ chối webhook.");
    return NextResponse.json(
      { success: false, message: "Webhook chưa được cấu hình" },
      { status: 500 },
    );
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Apikey ${apiKey}`) {
    return NextResponse.json(
      { success: false, message: "Sai API key" },
      { status: 401 },
    );
  }

  let payload: SepayWebhookPayload;
  try {
    payload = (await request.json()) as SepayWebhookPayload;
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

  await markOrderPaid(order.id, payload);
  return NextResponse.json({ success: true });
}
