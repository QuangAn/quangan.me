import { createHmac, timingSafeEqual } from "node:crypto";

/** Session admin sống 7 ngày. */
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7;

interface AdminSessionPayload {
  role: "admin";
  iat: number;
  exp: number;
}

/**
 * Bí mật ký session admin. Ưu tiên ADMIN_SESSION_SECRET; fallback ADMIN_SECRET_KEY
 * rồi SUPABASE_SERVICE_ROLE_KEY. Không có → không ký được (fail closed).
 */
function getSecret(): string | null {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    null
  );
}

function sign(body: string, secret: string): string {
  return createHmac("sha256", secret).update(body).digest("base64url");
}

/** Tạo token session admin đã ký (JWT-lite HMAC). Null nếu thiếu bí mật. */
export function createAdminSessionToken(): string | null {
  const secret = getSecret();
  if (!secret) return null;

  const now = Math.floor(Date.now() / 1000);
  const payload: AdminSessionPayload = {
    role: "admin",
    iat: now,
    exp: now + ADMIN_SESSION_MAX_AGE,
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body, secret)}`;
}

/** Xác thực token session admin (chữ ký + hạn + role). */
export function verifyAdminSessionToken(
  token: string | undefined | null,
): boolean {
  if (!token) return false;
  const secret = getSecret();
  if (!secret) return false;

  const dot = token.indexOf(".");
  if (dot <= 0) return false;

  const body = token.slice(0, dot);
  const providedSig = token.slice(dot + 1);
  const expectedSig = sign(body, secret);

  const a = Buffer.from(providedSig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  let payload: AdminSessionPayload;
  try {
    payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8"),
    ) as AdminSessionPayload;
  } catch {
    return false;
  }

  return (
    payload?.role === "admin" &&
    typeof payload.exp === "number" &&
    payload.exp >= Math.floor(Date.now() / 1000)
  );
}

/** So khớp mật khẩu admin với ADMIN_PASSWORD (constant-time, phía server). */
export function verifyAdminPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
