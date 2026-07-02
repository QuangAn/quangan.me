# TASKS - AI Website Builder

## Task 1 - Project Setup
- Tạo project Next.js App Router + TypeScript
- Cài Tailwind CSS
- Cài shadcn/ui
- Cài Framer Motion
- Cài Supabase client
- Cấu hình ESLint, Prettier
- Tạo cấu trúc thư mục chuẩn
- Chạy dev và build thử

Acceptance:
- `pnpm dev` chạy được
- `pnpm build` không lỗi

## Task 2 - Config Data
Tạo các file config:
- `config/site.ts`
- `config/modules.ts`
- `config/projects.ts`
- `config/pricing.ts`
- `config/faqs.ts`
- `config/bonuses.ts`
- `config/testimonials.ts`

Acceptance:
- Dữ liệu landing page lấy từ config
- Không hard-code danh sách lớn trong component

## Task 3 - Layout & Design System
- Tạo layout tổng thể
- Tạo typography scale
- Tạo container
- Tạo button styles
- Tạo section wrapper
- Tạo gradient/background hiện đại

Acceptance:
- Giao diện nhất quán
- Responsive mobile-first

## Task 4 - Landing Page Sections
Tạo các section:
- Hero
- Pain Points
- Solution
- Outcomes
- Modules
- Projects
- Audience
- Roadmap
- Bonuses
- Instructor
- Testimonials
- Pricing
- FAQ
- Lead CTA
- Footer

Acceptance:
- Landing page đầy đủ nội dung tiếng Việt
- CTA rõ ràng
- Mobile đẹp

## Task 5 - Supabase Schema
- Tạo thư mục `supabase`
- Tạo file SQL schema cho bảng `course_leads`
- Tạo RLS policy phù hợp cho insert public

Acceptance:
- Có file SQL chạy được trong Supabase SQL Editor

## Task 6 - Supabase Client
- Tạo `lib/supabase/client.ts`
- Dùng env variables
- Không hard-code URL/key
- Tạo `.env.example`

Acceptance:
- Supabase client hoạt động
- Build không lỗi khi thiếu env trong local nếu xử lý phù hợp

## Task 7 - Lead Form
- Tạo form đăng ký tư vấn
- Validate field bắt buộc
- Submit dữ liệu vào Supabase
- Loading state
- Success state
- Error state

Acceptance:
- Submit thành công lưu vào Supabase
- UI thông báo rõ ràng

## Task 8 - SEO
- Cấu hình metadata
- Tạo Open Graph
- Tạo robots
- Tạo sitemap
- Tối ưu heading structure

Acceptance:
- Có title/description rõ ràng
- SEO cơ bản hoàn chỉnh

## Task 9 - Motion & Polish
- Thêm animation nhẹ bằng Framer Motion
- Hover states
- Smooth scrolling
- Micro interactions

Acceptance:
- Animation mượt, không rối
- Không ảnh hưởng performance

## Task 10 - README & Deploy Guide
- Viết README
- Hướng dẫn cài đặt
- Hướng dẫn Supabase
- Hướng dẫn env
- Hướng dẫn deploy Vercel
- Hướng dẫn gắn domain

Acceptance:
- Người khác clone project làm theo README chạy được

## Task 11 - Final QA
- Chạy lint
- Chạy build
- Test responsive
- Test form
- Sửa lỗi

Acceptance:
- Website production-ready
