import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import {
  createCourseModule,
  listCourseModulesForAdmin,
} from "@/lib/course-docs";
import { courseModules as configModules } from "@/config/course";

export const runtime = "nodejs";

/** GET /api/admin/course — danh sách module tài liệu (tự seed từ config nếu trống). */
export async function GET(req: NextRequest) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, persisted, reason } = await listCourseModulesForAdmin();
    return NextResponse.json({ data, persisted, reason });
  } catch (err) {
    // listCourseModulesForAdmin đã tự fallback về config nên nhánh này gần như
    // không xảy ra; nếu vẫn lỗi ngoài dự kiến, trả nội dung config (đúng bằng
    // những gì học viên xem ở /hoc) để banner "db-error" không nói sai sự thật.
    console.error("[admin/course] GET lỗi:", err);
    return NextResponse.json(
      { data: configModules, persisted: false, reason: "db-error" },
      { status: 200 },
    );
  }
}

/** POST /api/admin/course — tạo module mới. */
export async function POST(req: NextRequest) {
  if (!isAuthorizedAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const { title } = (body ?? {}) as { title?: unknown };

  const result = await createCourseModule({
    title: typeof title === "string" ? title : undefined,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Không tạo được module." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: result.id });
}
