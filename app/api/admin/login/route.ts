import { NextRequest, NextResponse } from "next/server";
import {
  createAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/admin-session";

export const runtime = "nodejs";

/**
 * POST /api/admin/login — kiểm mật khẩu admin PHÍA SERVER (so với ADMIN_PASSWORD)
 * rồi trả về token session đã ký. Mật khẩu không bao giờ ra client.
 */
export async function POST(req: NextRequest) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Admin chưa cấu hình mật khẩu (ADMIN_PASSWORD)." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const { password } = (body ?? {}) as { password?: unknown };
  if (typeof password !== "string" || !verifyAdminPassword(password)) {
    return NextResponse.json(
      { ok: false, error: "Mật khẩu không chính xác." },
      { status: 401 },
    );
  }

  const token = createAdminSessionToken();
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "Hệ thống chưa cấu hình bí mật session admin." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, token });
}
