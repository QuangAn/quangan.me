import { createHmac, timingSafeEqual } from "node:crypto";
import type { PlanId } from "@/types";

/** Tên cookie chứa session học viên. */
export const STUDENT_COOKIE = "student_session";

/** Session sống 30 ngày. */
export const STUDENT_SESSION_MAX_AGE = 60 * 60 * 24 * 30;

export interface StudentSessionPayload {
  sub: string; // id tài khoản học viên
  email: string;
  plan: PlanId;
  iat: number;
  exp: number;
}

/**
 * Bí mật ký session. Ưu tiên STUDENT_SESSION_SECRET; nếu chưa đặt thì dùng
 * SUPABASE_SERVICE_ROLE_KEY (bí mật server có sẵn). Không có → không ký được
 * (fail closed: học viên không đăng nhập được cho tới khi cấu hình).
 */
function getSecret(): string | null {
  return (
    process.env.STUDENT_SESSION_SECRET ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    null
  );
}

function sign(body: string, secret: string): string {
  return createHmac("sha256", secret).update(body).digest("base64url");
}

/** Tạo token session đã ký (JWT-lite HMAC). Trả null nếu thiếu bí mật. */
export function createStudentSessionToken(input: {
  sub: string;
  email: string;
  plan: PlanId;
}): string | null {
  const secret = getSecret();
  if (!secret) return null;

  const now = Math.floor(Date.now() / 1000);
  const payload: StudentSessionPayload = {
    sub: input.sub,
    email: input.email,
    plan: input.plan,
    iat: now,
    exp: now + STUDENT_SESSION_MAX_AGE,
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body, secret)}`;
}

/** Xác thực token session; trả payload nếu hợp lệ & chưa hết hạn, ngược lại null. */
export function verifyStudentSessionToken(
  token: string | undefined | null,
): StudentSessionPayload | null {
  if (!token) return null;
  const secret = getSecret();
  if (!secret) return null;

  const dot = token.indexOf(".");
  if (dot <= 0) return null;

  const body = token.slice(0, dot);
  const providedSig = token.slice(dot + 1);
  const expectedSig = sign(body, secret);

  const a = Buffer.from(providedSig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  let payload: StudentSessionPayload;
  try {
    payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as StudentSessionPayload;
  } catch {
    return null;
  }

  if (
    typeof payload?.sub !== "string" ||
    typeof payload?.exp !== "number" ||
    payload.exp < Math.floor(Date.now() / 1000)
  ) {
    return null;
  }
  return payload;
}
