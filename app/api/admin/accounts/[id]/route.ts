import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import {
  deleteStudentAccount,
  resetStudentPasswordAndEmail,
  setStudentStatus,
  studentAdminErrorMessage,
  studentAdminErrorStatus,
  updateStudentAccount,
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
    return NextResponse.json({
      ok: true,
      emailStatus: result.emailStatus,
      password: result.password,
    });
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

/** PATCH /api/admin/accounts/[id] — sửa thông tin tài khoản học viên. */
export async function PATCH(
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

  const { full_name, phone, email, plan_id } = (body ?? {}) as Record<
    string,
    unknown
  >;

  const result = await updateStudentAccount(id, {
    ...(typeof full_name === "string" ? { full_name } : {}),
    ...(typeof phone === "string" ? { phone } : {}),
    ...(typeof email === "string" ? { email } : {}),
    ...(typeof plan_id === "string" ? { plan_id } : {}),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: studentAdminErrorMessage(result.error) },
      { status: studentAdminErrorStatus(result.error) },
    );
  }

  return NextResponse.json({ ok: true });
}

/** DELETE /api/admin/accounts/[id] — xóa vĩnh viễn tài khoản học viên. */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const result = await deleteStudentAccount(id);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Không xóa được tài khoản." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
