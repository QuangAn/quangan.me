# DATABASE DESIGN

## Table: course_leads

Mục đích: lưu thông tin người đăng ký tư vấn khóa học.

| Column | Type | Required | Description |
|---|---|---|---|
| id | uuid | yes | Primary key |
| full_name | text | yes | Họ tên |
| phone | text | yes | Số điện thoại |
| email | text | no | Email |
| learning_goal | text | no | Mục tiêu học |
| note | text | no | Ghi chú |
| source | text | no | Nguồn lead |
| created_at | timestamptz | yes | Thời gian tạo |

## RLS
Bật Row Level Security.
Cho phép public insert vào bảng course_leads.
Không cho public select/update/delete.

## Table: student_accounts

Mục đích: tài khoản học viên, tự cấp khi đơn hàng chuyển sang `paid`.

| Column | Type | Required | Description |
|---|---|---|---|
| id | uuid | yes | Primary key |
| order_id | uuid | no | Đơn hàng kích hoạt (unique — idempotent với webhook retry) |
| email | text | yes | Email đăng nhập (lưu lowercase, unique theo `lower(email)`) |
| full_name | text | yes | Họ tên |
| phone | text | no | Số điện thoại |
| plan_id | text | yes | Mã gói đã mua |
| plan_name | text | no | Tên gói |
| password_hash | text | yes | Hash scrypt (`scrypt$N$r$p$salt$hash`) — KHÔNG lưu mật khẩu gốc |
| must_change_password | boolean | yes | true khi còn dùng mật khẩu tạm |
| status | text | yes | `active` \| `disabled` |
| welcome_email_status | text | yes | `pending` \| `sent` \| `failed` \| `skipped` |
| welcome_email_error | text | no | Lỗi gửi email (nếu có) |
| welcome_email_sent_at | timestamptz | no | Thời điểm gửi email thành công |
| last_login_at | timestamptz | no | Lần đăng nhập gần nhất |
| created_at | timestamptz | yes | Thời gian tạo |

### RLS
Bật Row Level Security. **Không** tạo policy public — mọi truy cập đi qua
service role ở server (API routes). Đăng nhập/đổi mật khẩu xử lý phía server.

## SQL
Xem file `supabase/schema.sql`.
