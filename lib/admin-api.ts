import type { NextRequest } from "next/server";

/**
 * Xác thực request admin qua header `Authorization: Bearer <ADMIN_SECRET_KEY>`.
 * Fail closed: nếu chưa cấu hình ADMIN_SECRET_KEY thì mọi request đều bị từ chối.
 */
export function isAuthorizedAdmin(req: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET_KEY;
  if (!secret) return false;
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  return token === secret;
}
