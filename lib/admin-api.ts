import type { NextRequest } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { verifyAdminSessionToken } from "@/lib/admin-session";

/**
 * Xác thực request admin qua header `Authorization: Bearer <token>`.
 * Chấp nhận:
 *  1) token session admin đã ký (do /api/admin/login cấp) — cách chính, dùng cho UI.
 *  2) ADMIN_SECRET_KEY thô — chỉ để tooling/CLI gọi API (không còn lộ ra client).
 * Fail closed nếu thiếu cấu hình / token sai.
 */
export function isAuthorizedAdmin(req: NextRequest): boolean {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return false;

  if (verifyAdminSessionToken(token)) return true;

  const secret = process.env.ADMIN_SECRET_KEY;
  if (secret && token.length === secret.length) {
    try {
      return timingSafeEqual(Buffer.from(token), Buffer.from(secret));
    } catch {
      return false;
    }
  }
  return false;
}
