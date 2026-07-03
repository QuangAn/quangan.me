import { NextRequest, NextResponse } from "next/server";
import { verifyStudentLogin } from "@/lib/students";
import {
  STUDENT_COOKIE,
  STUDENT_SESSION_MAX_AGE,
  createStudentSessionToken,
} from "@/lib/auth/student-session";

export const runtime = "nodejs";

/** POST /api/student/login — xác thực và đặt cookie session học viên. */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const { email, password } = (body ?? {}) as {
    email?: unknown;
    password?: unknown;
  };
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return NextResponse.json(
      { ok: false, error: "Vui lòng nhập email và mật khẩu." },
      { status: 400 },
    );
  }

  const user = await verifyStudentLogin(email, password);
  if (!user) {
    return NextResponse.json(
      { ok: false, error: "Email hoặc mật khẩu không đúng." },
      { status: 401 },
    );
  }

  const token = createStudentSessionToken({
    sub: user.id,
    email: user.email,
    plan: user.plan_id,
  });
  if (!token) {
    console.error(
      "[student-login] Thiếu STUDENT_SESSION_SECRET/SUPABASE_SERVICE_ROLE_KEY — không ký được session.",
    );
    return NextResponse.json(
      {
        ok: false,
        error: "Hệ thống chưa cấu hình đăng nhập. Vui lòng liên hệ hỗ trợ.",
      },
      { status: 500 },
    );
  }

  const res = NextResponse.json({
    ok: true,
    mustChangePassword: user.must_change_password,
  });
  res.cookies.set(STUDENT_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: STUDENT_SESSION_MAX_AGE,
  });
  return res;
}
