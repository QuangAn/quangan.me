import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import {
  resetStudentPasswordAndEmail,
  setStudentStatus,
} from "@/lib/students";

export const runtime = "nodejs";

/**
 * POST /api/admin/accounts/[id] — hành động trên một tài khoản học viên.
 * Body: { action: "reset_password" } hoặc { action: "set_status", status }.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Dữ liệu gửi lên không hợp lệ." },
      { status: 400 },
    );
  }

  const { action, status } = (body ?? {}) as {
    action?: unknown;
    status?: unknown;
  };

  if (action === "reset_password") {
    const result = await resetStudentPasswordAndEmail(id);
    if (!result.ok) {
      const code = result.error === "not-found" ? 404 : 500;
      return NextResponse.json(
        { error: "Không đặt lại được mật khẩu." },
        { status: code },
      );
    }
    return NextResponse.json({ ok: true, emailStatus: result.emailStatus });
  }

  if (action === "set_status") {
    if (status !== "active" && status !== "disabled") {
      return NextResponse.json(
        { error: "Trạng thái không hợp lệ." },
        { status: 400 },
      );
    }
    const result = await setStudentStatus(id, status);
    if (!result.ok) {
      return NextResponse.json(
        { error: "Không cập nhật được trạng thái." },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true, status });
  }

  return NextResponse.json({ error: "Hành động không hợp lệ." }, { status: 400 });
}
