import { NextResponse } from "next/server";
import { effectiveStatus, getOrderByCode } from "@/lib/orders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/orders/[code]/status — trang thanh toán polling để biết đơn đã
 * được xác nhận chưa. Chỉ trả trạng thái, không lộ thông tin cá nhân.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;
  const order = await getOrderByCode(code);

  if (!order) {
    return NextResponse.json(
      { ok: false, error: "Không tìm thấy đơn hàng." },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      status: effectiveStatus(order),
      paid_at: order.paid_at,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
