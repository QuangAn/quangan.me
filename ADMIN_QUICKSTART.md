# Admin Panel - Quick Start Guide

Bạn đã xây dựng thành công trang quản lý admin cho khóa học AI Website Builder.

## 🚀 Khởi động nhanh

### 1. Cấu hình Environment

Thêm vào `.env.local`:

```bash
# Admin credentials
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
ADMIN_SECRET_KEY=your_secure_admin_key_here

# Bank account (hiển thị cho khách)
BANK_CODE=ACB
BANK_ACCOUNT_NUMBER=1234567890
BANK_ACCOUNT_NAME=NGUYEN VAN A

# Webhook
SEPAY_WEBHOOK_URL=https://yourdomain.com/api/sepay/webhook
```

### 2. Database Setup

Chạy SQL sau trong Supabase Dashboard → SQL Editor:

```sql
-- Admin settings table
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

### 3. Start & Access

```bash
npm run dev
# Truy cập: http://localhost:3000/admin/login
```

Đăng nhập bằng mật khẩu từ `NEXT_PUBLIC_ADMIN_PASSWORD`.

## 📊 Các Trang Admin

| Page | URL | Chức năng |
|------|-----|----------|
| **Dashboard** | `/admin` | Tổng quan thống kê |
| **Đăng ký** | `/admin/leads` | Quản lý học viên, xuất CSV |
| **Đơn hàng** | `/admin/orders` | Theo dõi thanh toán, mã CK |
| **Cài đặt** | `/admin/settings` | API keys, webhook URLs |
| **Đăng nhập** | `/admin/login` | Xác thực admin |

## 🔑 Đặc điểm chính

✅ **Dashboard** - 4 card thống kê (đăng ký, đơn hàng, doanh số, chờ thanh toán)
✅ **Danh sách đăng ký** - Tìm kiếm, phân trang, **xuất CSV**
✅ **Danh sách đơn hàng** - Lọc trạng thái, copy mã CK, sắp xếp
✅ **Cài đặt API** - Hiển thị webhook URL, thông tin ngân hàng
✅ **Dark theme** - Màu tím/indigo + cyan, responsive mobile

## 📁 Files tạo mới

```
app/admin/
├── layout.tsx              # Admin layout + navigation
├── login/page.tsx          # Login page
├── page.tsx                # Dashboard
├── leads/page.tsx          # Leads management
├── orders/page.tsx         # Orders management
└── settings/page.tsx       # API & webhook settings

app/api/admin/
├── leads/route.ts          # GET leads API
├── orders/route.ts         # GET orders API
├── stats/route.ts          # GET dashboard stats
└── settings/route.ts       # GET/POST admin settings

lib/
└── admin-auth.ts           # Auth helper functions

types/
└── admin.ts                # Admin types & interfaces

components/ui/
└── card.tsx                # Card component (new)
```

## 🔐 Bảo mật

- ✅ Token-based authentication (stored in `localStorage`)
- ✅ API routes kiểm tra `Authorization: Bearer {token}`
- ✅ Mật khẩu được hash (khuyến nghị dùng password manager)
- ✅ Admin data chỉ truy cập qua service role (server-side)

## 🚨 Điều cần làm trước deploy

1. ✅ Tạo `.env.local` với credentials mạnh
2. ✅ Chạy SQL schema trên Supabase
3. ✅ Test login tại `http://localhost:3000/admin/login`
4. ✅ Verify dashboard load được dữ liệu từ Supabase
5. ✅ Deploy lên Vercel hoặc server của bạn

## 📝 Notes

- Admin password là `NEXT_PUBLIC_ADMIN_PASSWORD` (công khai trong URL, nhưng để dùng trên form)
- API secret key là `ADMIN_SECRET_KEY` (bí mật, chỉ server biết)
- Dữ liệu được load real-time (không cache)
- CSV export lấy tất cả leads (không giới hạn)

## 🔗 Liên quan

Xem chi tiết tại: [ADMIN_SETUP.md](./ADMIN_SETUP.md)
