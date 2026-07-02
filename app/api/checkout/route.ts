import { NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";
import { validateCheckout } from "@/lib/checkout";
import { isPlanId } from "@/config/pricing";
import type { CheckoutFormValues } from "@/types";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 200;

/** Ép body về CheckoutFormValues hợp lệ, trả null nếu sai định dạng. */
function parseBody(body: unknown): CheckoutFormValues | null {
  if (typeof body !== "object" || body === null) return null;
  const record = body as Record<string, unknown>;
  const { plan_id, full_name, phone, email } = record;

  if (
    typeof plan_id !== "string" ||
    typeof full_name !== "string" ||
    typeof phone !== "string" ||
    typeof email !== "string"
  ) {
    return null;
  }
  if (!isPlanId(plan_id)) return null;
  if (
    full_name.length > MAX_FIELD_LENGTH ||
    phone.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH
  ) {
    return null;
  }

  return { plan_id, full_name, phone, email };
}

/** POST /api/checkout — tạo đơn hàng, trả về mã đơn để chuyển tới trang thanh toán. */
export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const values = parseBody(raw);
  if (!values) {
    return NextResponse.json(
      { ok: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const fieldErrors = validateCheckout(values);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: Object.values(fieldErrors)[0] },
      { status: 400 },
    );
  }

  const result = await createOrder(values);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, orderCode: result.orderCode });
}
