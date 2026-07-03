import { randomUUID } from "node:crypto";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { courseModules as configModules } from "@/config/course";
import { normalizeLessons } from "@/lib/course-normalize";
import type { CourseDocModule, CourseLesson } from "@/types/course";
import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Nguồn dữ liệu tài liệu khóa học cho khu vực học /hoc.
 *
 * Nội dung gốc nằm trong config/course (8 module). Để admin sửa/thêm được lúc
 * chạy (Vercel không ghi được file), nội dung được lưu ở bảng `course_modules`
 * trên Supabase. Lần đầu admin mở tab "Tài liệu", bảng tự seed từ config nên
 * không mất gì. Khi bảng chưa cấu hình / còn trống, hệ thống fallback về config
 * → học viên luôn thấy tài liệu.
 */

/** Một hàng trong bảng course_modules (snake_case). */
interface CourseModuleRow {
  id: string;
  sort_order: number;
  title: string;
  short_title: string;
  tagline: string;
  description: string;
  outcome: string;
  lessons: CourseLesson[];
}

const SELECT_COLUMNS =
  "id, sort_order, title, short_title, tagline, description, outcome, lessons";

/** Các trường một module có thể ghi (admin gửi lên khi tạo/sửa). */
export interface CourseModuleInput {
  title?: string;
  shortTitle?: string;
  tagline?: string;
  description?: string;
  outcome?: string;
  sortOrder?: number;
  lessons?: CourseLesson[];
}

/** Row DB → kiểu dùng chung ở UI. */
function rowToModule(row: CourseModuleRow): CourseDocModule {
  return {
    id: row.id,
    order: row.sort_order,
    title: row.title,
    shortTitle: row.short_title,
    tagline: row.tagline,
    description: row.description,
    outcome: row.outcome,
    // Chuẩn hóa ở biên đọc: dù dữ liệu vào DB bằng đường nào cũng an toàn render.
    lessons: normalizeLessons(row.lessons),
  };
}

/** Module config → hàng để seed vào DB (giữ nguyên id "module-1"…). */
function moduleToRow(m: CourseDocModule): Record<string, unknown> {
  return {
    id: m.id,
    sort_order: m.order,
    title: m.title,
    short_title: m.shortTitle,
    tagline: m.tagline,
    description: m.description,
    outcome: m.outcome,
    lessons: m.lessons,
  };
}

/**
 * Danh sách module tài liệu cho học viên (/hoc). Đọc từ DB; nếu DB chưa cấu
 * hình, lỗi, hoặc còn trống → trả về nội dung config để học viên luôn có tài
 * liệu xem.
 */
export async function listCourseModules(): Promise<CourseDocModule[]> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return configModules;

  const { data, error } = await supabase
    .from("course_modules")
    .select(SELECT_COLUMNS)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("[course-docs] Không đọc được tài liệu:", error.message);
    return configModules;
  }
  const rows = (data ?? []) as unknown as CourseModuleRow[];
  if (rows.length === 0) return configModules;
  return rows.map(rowToModule);
}

/**
 * Seed toàn bộ module config vào DB khi bảng trống. Lưu ý: bảng trống được coi
 * là trạng thái "khôi phục mặc định" — nếu admin xóa hết module thì lần mở tab
 * kế tiếp sẽ nạp lại bộ config. Để giữ một số module tùy biến, hãy giữ lại ít
 * nhất một module (đừng xóa sạch). Dùng upsert(ignoreDuplicates) để hai request
 * đầu tiên chạy song song không đụng khóa chính (id "module-1"…"module-8").
 */
async function seedIfEmpty(supabase: SupabaseClient): Promise<void> {
  const { count, error } = await supabase
    .from("course_modules")
    .select("id", { count: "exact", head: true });
  if (error) throw new Error(error.message);
  if ((count ?? 0) > 0) return;

  const rows = configModules.map(moduleToRow);
  const { error: insertError } = await supabase
    .from("course_modules")
    .upsert(rows, { onConflict: "id", ignoreDuplicates: true });
  if (insertError) throw new Error(insertError.message);
}

/**
 * Danh sách module cho admin: seed từ config nếu bảng trống rồi trả về bản DB
 * (để admin sửa được). Nếu chưa cấu hình Supabase → trả về config (chỉ xem).
 */
export async function listCourseModulesForAdmin(): Promise<{
  data: CourseDocModule[];
  persisted: boolean;
}> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { data: configModules, persisted: false };

  await seedIfEmpty(supabase);

  const { data, error } = await supabase
    .from("course_modules")
    .select(SELECT_COLUMNS)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);

  const rows = (data ?? []) as unknown as CourseModuleRow[];
  return { data: rows.map(rowToModule), persisted: true };
}

/** Chỉ giữ các trường được truyền vào, map camelCase → cột DB. */
function inputToRow(input: CourseModuleInput): Record<string, unknown> {
  const row: Record<string, unknown> = {};
  if (input.title !== undefined) row.title = input.title.trim();
  if (input.shortTitle !== undefined) row.short_title = input.shortTitle.trim();
  if (input.tagline !== undefined) row.tagline = input.tagline;
  if (input.description !== undefined) row.description = input.description;
  if (input.outcome !== undefined) row.outcome = input.outcome;
  if (input.sortOrder !== undefined) row.sort_order = input.sortOrder;
  if (input.lessons !== undefined) row.lessons = input.lessons;
  return row;
}

/** Admin tạo một module mới (đặt cuối danh sách). */
export async function createCourseModule(
  input: CourseModuleInput,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  // Đảm bảo đã seed để không "mất" các module config khi tạo cái đầu tiên.
  try {
    await seedIfEmpty(supabase);
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "seed-failed" };
  }

  const { data: last } = await supabase
    .from("course_modules")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextOrder = ((last as { sort_order: number } | null)?.sort_order ?? 0) + 1;

  const id = `module-${randomUUID()}`;
  const title = (input.title ?? "").trim() || "Module mới";
  const row = {
    ...moduleToRow({
      id,
      order: nextOrder,
      title,
      shortTitle: (input.shortTitle ?? "").trim() || title,
      tagline: input.tagline ?? "",
      description: input.description ?? "",
      outcome: input.outcome ?? "",
      lessons: input.lessons ?? [],
    }),
  };

  const { error } = await supabase.from("course_modules").insert(row);
  if (error) return { ok: false, error: error.message };
  return { ok: true, id };
}

/** Admin sửa một module (chỉ cập nhật trường được truyền). */
export async function updateCourseModule(
  id: string,
  input: CourseModuleInput,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const update = inputToRow(input);
  if (Object.keys(update).length === 0) return { ok: true };
  update.updated_at = new Date().toISOString();

  const { error } = await supabase
    .from("course_modules")
    .update(update)
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

/** Admin xóa một module. */
export async function deleteCourseModule(
  id: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const { error } = await supabase
    .from("course_modules")
    .delete()
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
