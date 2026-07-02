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

## SQL
Xem file `supabase/schema.sql`.
