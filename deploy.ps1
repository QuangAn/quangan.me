# ============================================================
# Deploy toàn bộ: Git push + Vercel production + SQL Supabase
# Cách chạy (từ thư mục dự án):  .\deploy.ps1
# Bỏ qua bước SQL:               .\deploy.ps1 -SkipSql
# ============================================================
param([switch]$SkipSql)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "== [1/3] Git commit & push ==" -ForegroundColor Cyan
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "Add admin panel: dashboard, leads, orders, API/webhook settings"
    if ($LASTEXITCODE -ne 0) { throw "git commit that bai" }
} else {
    Write-Host "Khong co thay doi moi de commit - bo qua." -ForegroundColor Yellow
}
git push origin main
if ($LASTEXITCODE -ne 0) { throw "git push that bai" }

Write-Host ""
Write-Host "== [2/3] Vercel production deploy ==" -ForegroundColor Cyan
# Neu repo da ket noi GitHub <-> Vercel thi buoc push o tren da tu trigger deploy.
# Lenh duoi day deploy truc tiep de chac chan (khong hai neu chay ca hai).
vercel --prod
if ($LASTEXITCODE -ne 0) { throw "vercel deploy that bai" }

if (-not $SkipSql) {
    Write-Host ""
    Write-Host "== [3/3] Chay SQL len Supabase ==" -ForegroundColor Cyan
    node scripts/run-sql.mjs
    if ($LASTEXITCODE -ne 0) { throw "Chay SQL that bai - xem huong dan o tren" }
}

Write-Host ""
Write-Host "HOAN TAT! Code da push, deploy da chay, SQL da cap nhat." -ForegroundColor Green
