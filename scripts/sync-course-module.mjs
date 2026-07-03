/**
 * Đồng bộ MỘT module tài liệu khóa học từ config/course → bảng Supabase
 * `course_modules`. Chỉ upsert đúng 1 row (theo id, ví dụ "module-2"), KHÔNG
 * đụng vào các module khác — an toàn để đẩy bản viết lại lên production mà không
 * mất tùy biến ở những module còn lại.
 *
 * Vì sao cần script này: /hoc đọc nội dung từ DB trước, chỉ seed từ config khi
 * bảng RỖNG (xem lib/course-docs.ts). Khi bảng đã có row cũ, sửa file config
 * KHÔNG tự lên live — phải cập nhật row DB, và đó là việc script này làm.
 *
 * Nguồn dữ liệu là chính file config/course/module-0N.ts (không chép tay) nên
 * không bao giờ lệch với nội dung khóa học.
 *
 * Yêu cầu (trong .env.local hoặc biến môi trường — hợp cả khi chạy trên CI):
 *   NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=eyJ...   (Dashboard → Settings → API → service_role)
 *
 * Cách chạy:
 *   node scripts/sync-course-module.mjs            # đồng bộ Module 2 (mặc định)
 *   node scripts/sync-course-module.mjs 3          # đồng bộ Module 3
 *   node scripts/sync-course-module.mjs --dry-run  # chỉ in ra, KHÔNG ghi DB
 *   npm run course:sync                            # = Module 2
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const dryRun = argv.includes("--dry-run");
const moduleNumber = Number(argv.find((a) => /^\d+$/.test(a)) ?? "2");

if (!Number.isInteger(moduleNumber) || moduleNumber < 1) {
  console.error(`✖ Số module không hợp lệ: "${moduleNumber}". Ví dụ hợp lệ: 2`);
  process.exit(1);
}

const padded = String(moduleNumber).padStart(2, "0");
const configFile = join(root, "config", "course", `module-${padded}.ts`);
const exportName = `module${padded}`;

// ── Đọc .env.local (nếu có) rồi để process.env đè lên (ưu tiên CI) ───────────
function loadEnv(file) {
  const env = {};
  try {
    for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
      if (line.trim().startsWith("#")) continue;
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    /* .env.local không tồn tại — dựa vào process.env */
  }
  return env;
}
const env = { ...loadEnv(join(root, ".env.local")), ...process.env };

/**
 * Nạp object module từ file .ts của config. File chỉ dùng 1 dòng `import type`
 * và 1 annotation `: CourseDocModule` — bóc cả hai đi là còn lại JS thuần
 * (object literal), import động qua data URL. Không chép tay ⇒ không lệch nguồn.
 */
async function loadModuleFromConfig() {
  let src;
  try {
    src = readFileSync(configFile, "utf8");
  } catch {
    console.error(`✖ Không đọc được file config: ${configFile}`);
    process.exit(1);
  }
  const js = src
    // Bỏ mọi dòng `import type ... ;` (chỉ dùng lúc biên dịch).
    .replace(/^\s*import\s+type\s+[^\n]*;\s*$/gm, "")
    // Bỏ annotation kiểu trên export: `export const moduleNN: CourseDocModule =`.
    .replace(
      /export\s+const\s+(module\d+)\s*:\s*CourseDocModule\s*=/,
      "export const $1 =",
    );

  const dataUrl =
    "data:text/javascript;charset=utf-8," + encodeURIComponent(js);
  let ns;
  try {
    ns = await import(dataUrl);
  } catch (err) {
    console.error(
      `✖ Không nạp được nội dung từ ${configFile}:`,
      err instanceof Error ? err.message : err,
    );
    process.exit(1);
  }
  const mod = ns[exportName];
  if (!mod || typeof mod !== "object") {
    console.error(`✖ Không tìm thấy export "${exportName}" trong ${configFile}.`);
    process.exit(1);
  }
  return mod;
}

/** Module config (camelCase) → hàng DB (snake_case). Khớp lib/course-docs.ts. */
function moduleToRow(m) {
  return {
    id: m.id,
    sort_order: m.order,
    title: m.title,
    short_title: m.shortTitle,
    tagline: m.tagline,
    description: m.description,
    outcome: m.outcome,
    lessons: m.lessons,
    updated_at: new Date().toISOString(),
  };
}

const mod = await loadModuleFromConfig();
const row = moduleToRow(mod);
const lessonCount = Array.isArray(mod.lessons) ? mod.lessons.length : 0;
const sizeKb = (Buffer.byteLength(JSON.stringify(mod.lessons ?? []), "utf8") / 1024).toFixed(1);

console.log(`\nModule cần đồng bộ:`);
console.log(`  id          : ${row.id}`);
console.log(`  sort_order  : ${row.sort_order}`);
console.log(`  title       : ${row.title}`);
console.log(`  số bài học  : ${lessonCount}`);
console.log(`  cỡ lessons  : ${sizeKb} KB (jsonb)\n`);

if (dryRun) {
  console.log("• --dry-run: chỉ kiểm tra, KHÔNG ghi vào DB. Nội dung đọc từ config OK.");
  process.exit(0);
}

// ── Kết nối Supabase bằng service role, upsert đúng 1 row ────────────────────
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(`
✖ Thiếu cấu hình Supabase để ghi DB.

Cần 2 biến (trong .env.local hoặc môi trường CI):
  NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co   ${supabaseUrl ? "✓ đã có" : "✗ THIẾU"}
  SUPABASE_SERVICE_ROLE_KEY=eyJ...                             ${serviceRoleKey ? "✓ đã có" : "✗ THIẾU"}

→ Lấy service_role key: Supabase Dashboard → Settings → API.
→ Chỉ dùng ở máy/CI tin cậy — key này bỏ qua RLS.
→ Muốn kiểm tra trước mà không cần key: node scripts/sync-course-module.mjs --dry-run
`);
  // Exit 2 = thiếu cấu hình (khác exit 1 = lỗi thật), khớp quy ước run-sql.mjs.
  process.exit(2);
}

const { createClient } = await import("@supabase/supabase-js");
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

console.log(`→ Đang upsert đúng row id="${row.id}" (không đụng module khác)…`);
const { error } = await supabase
  .from("course_modules")
  .upsert(row, { onConflict: "id" });

if (error) {
  console.error(`✖ Upsert lỗi: ${error.message}`);
  if (/does not exist|schema cache|relation/.test(error.message)) {
    console.error(
      "  Bảng course_modules có thể chưa được tạo — chạy `npm run db:push` trước.",
    );
  }
  process.exit(1);
}

// Đọc lại để xác nhận đã ghi đúng.
const { data: check, error: readErr } = await supabase
  .from("course_modules")
  .select("id, sort_order, title, updated_at, lessons")
  .eq("id", row.id)
  .maybeSingle();

if (readErr || !check) {
  console.error(
    `⚠ Đã upsert nhưng không đọc lại được để xác nhận: ${readErr?.message ?? "không có row"}`,
  );
  process.exit(1);
}

const savedLessons = Array.isArray(check.lessons) ? check.lessons.length : 0;
console.log(`\n✔ Xong. Row "${check.id}" đã cập nhật:`);
console.log(`  title      : ${check.title}`);
console.log(`  số bài học : ${savedLessons} (khớp config: ${savedLessons === lessonCount ? "✓" : "✗"})`);
console.log(`  updated_at : ${check.updated_at}`);
console.log(`\nHọc viên vào /hoc sẽ thấy bản Module ${moduleNumber} mới ngay (không cần deploy lại code).`);
