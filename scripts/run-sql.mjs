/**
 * Chạy toàn bộ file .sql trong thư mục supabase/ lên Supabase
 * qua Management API (không cần cài psql hay supabase CLI).
 *
 * Yêu cầu trong .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
 *   SUPABASE_ACCESS_TOKEN=sbp_...   (tạo tại https://supabase.com/dashboard/account/tokens)
 *
 * Cách chạy:  node scripts/run-sql.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

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

const accessToken = env.SUPABASE_ACCESS_TOKEN;
const ref = (env.NEXT_PUBLIC_SUPABASE_URL || "").match(
  /https:\/\/([a-z0-9]+)\.supabase\.co/
)?.[1];

if (!accessToken || !ref) {
  console.error(`
✖ Thiếu cấu hình để chạy SQL tự động.

Cần 2 biến trong .env.local:
  NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co   ${ref ? "✓ đã có" : "✗ THIẾU"}
  SUPABASE_ACCESS_TOKEN=sbp_...                                ${accessToken ? "✓ đã có" : "✗ THIẾU"}

→ Tạo Access Token tại: https://supabase.com/dashboard/account/tokens
→ Hoặc chạy thủ công: copy nội dung supabase/schema.sql vào
  Supabase Dashboard → SQL Editor → Run.
`);
  // Exit 2 = "thiếu cấu hình" (khác exit 1 = SQL chạy lỗi) để deploy.mjs
  // phân biệt: thiếu token thì bỏ qua SQL, còn lỗi SQL thật thì dừng.
  process.exit(2);
}

const sqlDir = join(root, "supabase");
const files = readdirSync(sqlDir)
  .filter((f) => f.endsWith(".sql"))
  .sort();

if (files.length === 0) {
  console.log("Không tìm thấy file .sql nào trong supabase/");
  process.exit(0);
}

let failed = false;

for (const file of files) {
  const query = readFileSync(join(sqlDir, file), "utf8");
  process.stdout.write(`→ Đang chạy ${file} ... `);

  const res = await fetch(
    `https://api.supabase.com/v1/projects/${ref}/database/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  if (res.ok) {
    console.log("✓ OK");
  } else {
    failed = true;
    console.log("✗ LỖI");
    console.error(`  HTTP ${res.status}: ${await res.text()}`);
  }
}

if (failed) {
  console.error("\n✖ Có file SQL chạy lỗi — xem chi tiết ở trên.");
  process.exit(1);
}
console.log("\n✔ Đã chạy xong toàn bộ SQL lên Supabase.");
