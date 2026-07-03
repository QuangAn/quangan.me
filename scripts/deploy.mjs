/**
 * Ship 1 lệnh: chạy SQL lên Supabase → commit → push lên main (Vercel tự deploy).
 *
 * Cách chạy:
 *   npm run deploy                       # dùng commit message mặc định (kèm timestamp)
 *   npm run deploy -- -m "Nội dung..."   # tự đặt commit message
 *   npm run deploy -- --no-sql           # bỏ qua bước chạy SQL
 *   npm run deploy -- --no-deploy        # chỉ commit, KHÔNG push (không deploy)
 *   npm run deploy -- --branch develop   # đổi nhánh deploy (mặc định: main)
 *
 * Ghi chú:
 *  - Vercel gắn với nhánh main → push lên main là tự động deploy.
 *  - Luôn fetch + rebase trước khi push để tránh xung đột với session song song.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);

function flag(name) {
  return argv.includes(name);
}
function opt(...names) {
  for (const name of names) {
    const i = argv.indexOf(name);
    if (i !== -1 && argv[i + 1]) return argv[i + 1];
  }
  return null;
}

const skipSql = flag("--no-sql");
const skipDeploy = flag("--no-deploy");
const branch = opt("--branch") || "main";
const message =
  opt("-m", "--message") ||
  `chore: deploy ${new Date().toISOString().replace("T", " ").slice(0, 16)}`;

/** Chạy 1 lệnh, in ra realtime; trả về true nếu thành công. */
function run(cmd, args, { allowFail = false } = {}) {
  const res = spawnSync(cmd, args, { cwd: root, stdio: "inherit", shell: false });
  if (res.status !== 0 && !allowFail) {
    console.error(`\n✖ Lỗi khi chạy: ${cmd} ${args.join(" ")}`);
    process.exit(res.status || 1);
  }
  return res.status === 0;
}

/** Lấy stdout của 1 lệnh git (không in ra). */
function gitOut(args) {
  const res = spawnSync("git", args, { cwd: root, encoding: "utf8" });
  return (res.stdout || "").trim();
}

// ── Bước 1: SQL lên Supabase ────────────────────────────────────────────────
if (skipSql) {
  console.log("• Bỏ qua bước SQL (--no-sql).");
} else {
  console.log("① Chạy SQL lên Supabase…");
  run("node", [join(root, "scripts", "run-sql.mjs")]);
}

// ── Bước 2: Commit thay đổi ─────────────────────────────────────────────────
console.log("\n② Commit thay đổi…");
if (gitOut(["status", "--porcelain"]) === "") {
  console.log("• Không có thay đổi nào để commit.");
} else {
  run("git", ["add", "-A"]);
  run("git", ["commit", "-m", message]);
  console.log(`• Đã commit: "${message}"`);
}

// ── Bước 3: Push lên main → Vercel deploy ───────────────────────────────────
if (skipDeploy) {
  console.log("\n• Bỏ qua bước deploy (--no-deploy).");
  process.exit(0);
}

console.log(`\n③ Đồng bộ + push lên "${branch}" (Vercel tự deploy)…`);
// Fetch + rebase để không đè commit của session song song.
run("git", ["fetch", "origin", branch], { allowFail: true });
if (gitOut(["rev-parse", "--verify", `origin/${branch}`])) {
  run("git", ["rebase", `origin/${branch}`]);
}
run("git", ["push", "origin", `HEAD:${branch}`]);

console.log(`\n✔ Xong. Đã push lên origin/${branch} — Vercel đang build & deploy.`);
