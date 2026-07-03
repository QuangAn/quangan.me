import { cookies } from "next/headers";
import {
  STUDENT_COOKIE,
  verifyStudentSessionToken,
} from "@/lib/auth/student-session";
import { getStudentForSession } from "@/lib/students";
import type { StudentSessionUser } from "@/types";

/**
 * Đọc session học viên từ cookie ở server component / route handler.
 * Xác thực chữ ký token rồi tải lại tài khoản từ DB (đảm bảo tài khoản còn
 * hoạt động, và session chưa bị vô hiệu do đổi mật khẩu). Chỉ dùng ở server.
 */
export async function getStudentFromCookie(): Promise<StudentSessionUser | null> {
  const store = await cookies();
  const token = store.get(STUDENT_COOKIE)?.value;
  const payload = verifyStudentSessionToken(token);
  if (!payload) return null;
  return getStudentForSession(payload.sub, payload.iat);
}
