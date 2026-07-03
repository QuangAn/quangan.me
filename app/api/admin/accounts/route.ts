import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import {
  createStudentAccount,
  listStudentAccounts,
  studentAdminErrorMessage,
  studentAdminErrorStatus,
} from "@/lib/students";

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

/** POST /api/admin/accounts — admin tạo thủ công một tài khoản học viên. */
export async function POST(req: NextRequest) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const {
    email,
    full_name,
    phone,
    plan_id,
    send_email,
  } = (body ?? {}) as Record<string, unknown>;

  const result = await createStudentAccount({
    email: typeof email === "string" ? email : "",
    full_name: typeof full_name === "string" ? full_name : "",
    phone: typeof phone === "string" ? phone : null,
    plan_id: typeof plan_id === "string" ? plan_id : "",
    sendEmail: send_email !== false,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: studentAdminErrorMessage(result.error) },
      { status: studentAdminErrorStatus(result.error) },
    );
  }

  return NextResponse.json({
    ok: true,
    id: result.accountId,
    emailStatus: result.emailStatus,
  });
}
