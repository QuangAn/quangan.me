import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import { deleteCourseModule, updateCourseModule } from "@/lib/course-docs";
import { normalizeLessons } from "@/lib/course-normalize";

export const runtime = "nodejs";

const asString = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

/** PATCH /api/admin/course/[id] — cập nhật một module tài liệu. */
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
  const b = (body ?? {}) as Record<string, unknown>;

  const title = asString(b.title).trim();
  if (b.title !== undefined && !title) {
    return NextResponse.json(
      { error: "Tiêu đề module không được để trống." },
      { status: 400 },
    );
  }

  const result = await updateCourseModule(id, {
    ...(b.title !== undefined ? { title } : {}),
    ...(b.shortTitle !== undefined ? { shortTitle: asString(b.shortTitle) } : {}),
    ...(b.tagline !== undefined ? { tagline: asString(b.tagline) } : {}),
    ...(b.description !== undefined
      ? { description: asString(b.description) }
      : {}),
    ...(b.duration !== undefined ? { duration: asString(b.duration) } : {}),
    ...(b.level !== undefined ? { level: asString(b.level) } : {}),
    ...(b.outcome !== undefined ? { outcome: asString(b.outcome) } : {}),
    ...(b.lessons !== undefined ? { lessons: normalizeLessons(b.lessons) } : {}),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Không lưu được thay đổi." },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}

/** DELETE /api/admin/course/[id] — xóa một module tài liệu. */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const result = await deleteCourseModule(id);
  if (!result.ok) {
    return NextResponse.json(
      { error: "Không xóa được module." },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}
