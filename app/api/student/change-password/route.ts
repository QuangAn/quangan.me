import { NextRequest, NextResponse } from "next/server";
import { changeStudentPassword } from "@/lib/students";
import {
  STUDENT_COOKIE,
  STUDENT_SESSION_MAX_AGE,
  createStudentSessionToken,
  verifyStudentSessionToken,
} from "@/lib/auth/student-session";
import { MIN_PASSWORD_LENGTH } from "@/config/student";

export const runtime = "nodejs";

/** POST /api/student/change-password — học viên tự đổi mật khẩu. */
export async function POST(req: NextRequest) {
  const token = req.cookies.get(STUDENT_COOKIE)?.value;
  const payload = verifyStudentSessionToken(token);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Phiên đăng nhập đã hết hạn." },
      { status: 401 },
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

  const { currentPassword, newPassword } = (body ?? {}) as {
    currentPassword?: unknown;
    newPassword?: unknown;
  };
  if (typeof currentPassword !== "string" || typeof newPassword !== "string") {
    return NextResponse.json(
      { ok: false, error: "Vui lòng nhập đầy đủ thông tin." },
      { status: 400 },
    );
  }
  if (newPassword.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json(
      {
        ok: false,
        error: `Mật khẩu mới tối thiểu ${MIN_PASSWORD_LENGTH} ký tự.`,
      },
      { status: 400 },
    );
  }

  const result = await changeStudentPassword(
    payload.sub,
    currentPassword,
    newPassword,
  );
  if (!result.ok) {
    const message =
      result.error === "wrong-current-password"
        ? "Mật khẩu hiện tại không đúng."
        : "Không đổi được mật khẩu. Vui lòng thử lại.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });

  // Đổi mật khẩu vô hiệu hóa mọi session cũ (kể cả cookie bị đánh cắp). Cấp lại
  // token mới cho chính trình duyệt này để người dùng không bị đăng xuất.
  const newToken = createStudentSessionToken({
    sub: payload.sub,
    email: payload.email,
    plan: payload.plan,
  });
  if (newToken) {
    res.cookies.set(STUDENT_COOKIE, newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: STUDENT_SESSION_MAX_AGE,
    });
  }

  return res;
}
