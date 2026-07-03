# Admin Panel Setup Guide

Trang quản lý admin để theo dõi đăng ký, đơn hàng, và cài đặt API/webhook.

## ✨ Tính năng

- **Dashboard** - Xem tổng quan đăng ký, doanh số, học viên và tình trạng đơn hàng
- **Quản lý Đăng ký** - Xem danh sách học viên, tìm kiếm, xuất dữ liệu CSV
- **Quản lý Đơn hàng** - Theo dõi trạng thái thanh toán, mã chuyển khoản
- **Tài khoản học viên** - Tự động cấp tài khoản + gửi email khi thanh toán; đặt lại mật khẩu, khóa/mở tài khoản
- **Cài đặt** - Quản lý API keys, webhook URLs, thông tin tài khoản ngân hàng

## 🚀 Cài đặt

### 1. Cập nhật biến môi trường

Thêm các biến sau vào `.env.local`:

```bash
# Admin Panel
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
ADMIN_SECRET_KEY=your_secure_admin_key

# Thông tin ngân hàng (hiển thị cho khách)
BANK_CODE=ACB
BANK_ACCOUNT_NUMBER=1234567890
BANK_ACCOUNT_NAME=NGUYEN VAN A

# Webhook URL
SEPAY_WEBHOOK_URL=https://yourdomain.com/api/sepay/webhook

# Tài khoản học viên (tự cấp khi thanh toán)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
STUDENT_SESSION_SECRET=chuoi_ngau_nhien_dai_tu_dat   # bỏ trống = dùng SUPABASE_SERVICE_ROLE_KEY

# Gửi email (Resend — https://resend.com)
RESEND_API_KEY=re_xxx        # bỏ trống = KHÔNG gửi email thật (vẫn tạo tài khoản)
EMAIL_FROM=AI Website Builder <no-reply@yourdomain.com>
```

### 2. Tạo Database Table

Chạy toàn bộ `supabase/schema.sql` trong Supabase SQL Editor (idempotent, tạo cả
`admin_settings` và `student_accounts`), hoặc chạy `node scripts/run-sql.mjs`.
Riêng bảng tài khoản học viên:

```sql
create table if not exists public.student_accounts (
  id uuid primary key default gen_random_uuid(),
  order_id uuid unique references public.orders (id),
  email text not null,
  full_name text not null,
  phone text,
  plan_id text not null,
  plan_name text,
  password_hash text not null,          -- scrypt$N$r$p$salt$hash (KHÔNG lưu mật khẩu gốc)
  must_change_password boolean not null default true,
  status text not null default 'active' check (status in ('active', 'disabled')),
  welcome_email_status text not null default 'pending'
    check (welcome_email_status in ('pending', 'sent', 'failed', 'skipped')),
  welcome_email_error text,
  welcome_email_sent_at timestamptz,
  last_login_at timestamptz,
  password_changed_at timestamptz,   -- vô hiệu hóa session cũ khi đổi mật khẩu
  created_at timestamptz not null default now()
);

alter table public.student_accounts enable row level security;
create unique index if not exists student_accounts_email_key
  on public.student_accounts (lower(email));
```

### 3. Build & Deploy

```bash
npm run build
npm run start
```

Truy cập: `https://yourdomain.com/admin`

## 🔐 Bảo mật

### Đăng nhập Admin

1. Nhập mật khẩu `NEXT_PUBLIC_ADMIN_PASSWORD` trên trang `/admin/login`
2. Token được lưu trong `localStorage` với tên `admin_token`
3. Mỗi request API gửi token trong header `Authorization: Bearer {token}`

### Bảo vệ API Routes

Tất cả API routes (`/api/admin/*`) đều kiểm tra token:

```typescript
const authHeader = req.headers.get("authorization");
const token = authHeader?.replace("Bearer ", "");

if (token !== process.env.ADMIN_SECRET_KEY) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
```

### Khuyến nghị

- ✅ Dùng **mật khẩu mạnh** (16+ ký tự, kết hợp chữ số + ký tự đặc biệt)
- ✅ **Bật HTTPS** trong production
- ✅ **Thay đổi mật khẩu định kỳ**
- ✅ **Không commit** `.env.local` lên Git
- ❌ **Không chia sẻ** mật khẩu admin
- ❌ **Không dùng mật khẩu đơn giản** như "123456" hoặc "admin"

## 📊 Pages

### `/admin`
Dashboard tổng quan với:
- Số lượng đăng ký, đơn hàng
- Doanh số thanh toán
- Danh sách đăng ký gần đây
- Danh sách đơn hàng gần đây

### `/admin/leads`
Quản lý học viên:
- Tìm kiếm theo tên, SĐT, email
- Phân trang (20 mục/trang)
- **Xuất CSV** - Download danh sách đầy đủ

**Cột hiển thị:**
- Họ tên
- Số điện thoại (clickable `tel:` link)
- Email (clickable `mailto:` link)
- Mục tiêu học
- Ngày đăng ký

### `/admin/orders`
Quản lý đơn hàng:
- Tìm kiếm theo tên, SĐT, mã CK
- Lọc theo trạng thái: Tất cả / Chờ thanh toán / Đã thanh toán / Hết hạn
- Copy mã chuyển khoản (1-click)

**Cột hiển thị:**
- Mã đơn (#1000, #1001, ...)
- Khách hàng + SĐT
- Mã chuyển khoản (copy icon)
- Số tiền
- Trạng thái (badge)
- Ngày tạo

**Trạng thái:**
- 🟠 **Chờ thanh toán** (pending) - Chưa nhận tiền
- 🟢 **Đã thanh toán** (paid) - Đã xác nhận
- 🔴 **Hết hạn** (expired) - Quá thời gian chờ

### `/admin/settings`
Cài đặt kết nối:
- **Webhook URL** - Copy để cấu hình SePay
- **Thông tin ngân hàng** - Hiển thị, copy từng trường
- **SePay API Key** - Lưu trữ
- **SePay Webhook URL** - Lưu trữ

> **Lưu ý:** Thông tin ngân hàng tải từ `.env.local`. Để thay đổi, cập nhật env rồi deploy lại.

### `/admin/accounts`
Quản lý tài khoản học viên:
- Tìm kiếm theo email, tên, số điện thoại
- Lọc theo trạng thái: Tất cả / Đang hoạt động / Đã khóa
- Cột **Email cấp TK**: trạng thái gửi email (Đã gửi / Gửi lỗi / Chưa gửi)
- **Đặt lại & gửi** — tạo mật khẩu tạm mới và gửi lại email cho học viên
- **Khóa / Mở khóa** — vô hiệu hóa hoặc mở lại tài khoản (tài khoản khóa không đăng nhập được)

## 🎓 Tự động cấp tài khoản học viên

Luồng hoạt động khi khách thanh toán thành công:

1. SePay gửi webhook → hệ thống đánh dấu đơn `paid` (idempotent).
2. Ngay sau đó tạo tài khoản trong `student_accounts` với **mật khẩu tạm** (băm bằng scrypt).
   - Idempotent theo `order_id`: webhook gửi lại không tạo trùng.
   - Nếu email đã có tài khoản (mua thêm gói) → **nâng cấp gói**, giữ nguyên mật khẩu cũ.
3. Gửi email chứa thông tin đăng nhập + link `/hoc/dang-nhap` (qua Resend).
   - Chưa cấu hình `RESEND_API_KEY` → bỏ qua gửi, đánh dấu `skipped`; admin gửi lại sau.
4. Học viên đăng nhập tại `/hoc/dang-nhap`, được nhắc đổi mật khẩu, rồi vào `/hoc` học tài liệu.

**Khu vực học** (`/hoc`) hiển thị các chương trong `config/course-content.ts`, lọc theo gói
(`minPlan`). Dán link tài liệu thật (Google Drive/YouTube/PDF...) vào `resourceUrl` từng bài.

> **Bảo mật:** chỉ lưu **hash** mật khẩu, không bao giờ lưu/hiển thị mật khẩu gốc. Muốn cấp lại
> cho học viên → dùng nút **Đặt lại & gửi** (sinh mật khẩu mới và email lại).

## 🔗 API Routes

### GET `/api/admin/stats`
Lấy thống kê dashboard.

**Header:**
```
Authorization: Bearer {ADMIN_SECRET_KEY}
```

**Response:**
```json
{
  "totalLeads": 42,
  "totalOrders": 15,
  "totalRevenue": 15000000,
  "pendingOrders": 3,
  "paidOrders": 12,
  "totalStudents": 12,
  "recentLeads": [...],
  "recentOrders": [...]
}
```

### GET `/api/admin/leads`
Lấy danh sách đăng ký.

**Query Parameters:**
- `limit` (default: 50)
- `offset` (default: 0)
- `search` - Tìm kiếm full_name, phone, email

**Response:**
```json
{
  "data": [{ id, full_name, phone, email, ... }],
  "total": 42,
  "limit": 50,
  "offset": 0
}
```

### GET `/api/admin/orders`
Lấy danh sách đơn hàng.

**Query Parameters:**
- `limit` (default: 50)
- `offset` (default: 0)
- `status` - "all", "pending", "paid", "expired"
- `search` - Tìm kiếm full_name, phone, email, transfer_code

### GET `/api/admin/accounts`
Lấy danh sách tài khoản học viên (không bao giờ trả `password_hash`).

**Query Parameters:**
- `limit` (default: 20, tối đa 100)
- `offset` (default: 0)
- `status` - "all", "active", "disabled"
- `search` - Tìm kiếm full_name, email, phone

### POST `/api/admin/accounts/{id}`
Thao tác trên một tài khoản học viên.

**Body:**
```json
{ "action": "reset_password" }
```
hoặc
```json
{ "action": "set_status", "status": "disabled" }
```

### GET `/api/admin/settings`
Lấy cài đặt admin.

### POST `/api/admin/settings`
Lưu cài đặt admin.

**Body:**
```json
{
  "sepay_api_key": "...",
  "sepay_webhook_url": "...",
  "bank_account_number": "...",
  "bank_account_name": "...",
  "bank_code": "..."
}
```

## 🛠️ Troubleshooting

### ❓ Quên mật khẩu?
Cập nhật `NEXT_PUBLIC_ADMIN_PASSWORD` trong `.env.local` rồi redeploy.

### ❓ Không thể đăng nhập?
1. Xác nhận `NEXT_PUBLIC_ADMIN_PASSWORD` trong `.env.local`
2. Xóa `admin_token` từ DevTools Console:
   ```javascript
   localStorage.removeItem('admin_token')
   ```
3. Thử lại

### ❓ API routes trả 401?
1. Kiểm tra `ADMIN_SECRET_KEY` trong `.env.local`
2. Xác nhận token được gửi trong header: `Authorization: Bearer {token}`

### ❓ Admin settings không lưu được?
1. Kiểm tra `admin_settings` table tồn tại trong Supabase
2. Xác nhận `SUPABASE_SERVICE_ROLE_KEY` đúng
3. Kiểm tra RLS policy cho phép (hoặc tắt RLS cho table này)

## 📝 Notes

- Admin panel chỉ hiển thị dữ liệu, không có tính năng xóa/sửa
- Dữ liệu được load theo real-time (không cache)
- CSV export lấy TẤT CẢ dữ liệu (không giới hạn trang)
- Token lưu trên browser, sẽ mất khi clear cache/cookies

## 🚀 Tiếp theo

- [ ] Thêm tính năng edit/delete leads
- [ ] Gửi email thông báo đơn hàng mới
- [ ] Biểu đồ thống kê (chart, revenue trend)
- [ ] Export đơn hàng sang Excel
- [ ] 2FA / TOTP authentication
- [ ] Audit log
