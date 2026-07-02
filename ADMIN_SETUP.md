# Admin Panel Setup Guide

Trang quản lý admin để theo dõi đăng ký, đơn hàng, và cài đặt API/webhook.

## ✨ Tính năng

- **Dashboard** - Xem tổng quan đăng ký, doanh số, và tình trạng đơn hàng
- **Quản lý Đăng ký** - Xem danh sách học viên, tìm kiếm, xuất dữ liệu CSV
- **Quản lý Đơn hàng** - Theo dõi trạng thái thanh toán, mã chuyển khoản
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
```

### 2. Tạo Database Table

Chạy SQL sau trong Supabase SQL Editor:

```sql
create table if not exists public.admin_settings (
  id text primary key default '1',
  sepay_api_key text,
  sepay_webhook_url text,
  bank_account_number text,
  bank_account_name text,
  bank_code text,
  updated_at timestamptz not null default now()
);

alter table public.admin_settings enable row level security;
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
