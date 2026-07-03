import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import { listStudentAccounts } from "@/lib/students";

export const runtime = "nodejs";

function clampInt(raw: string | null, fallback: number, min: number, max: number) {
  const n = parseInt(raw ?? "", 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

/** GET /api/admin/accounts — danh sách tài khoản học viên (có phân trang/tìm kiếm). */
export async function GET(req: NextRequest) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limit = clampInt(searchParams.get("limit"), 20, 1, 100);
  const offset = clampInt(searchParams.get("offset"), 0, 0, 1_000_000);
  const status = searchParams.get("status") || "";
  const search = searchParams.get("search") || "";

  const { data, total } = await listStudentAccounts({
    limit,
    offset,
    status,
    search,
  });

  return NextResponse.json({ data, total, limit, offset });
}
