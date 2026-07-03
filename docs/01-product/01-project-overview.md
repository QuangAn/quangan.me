# 01 — Project Overview (Tổng quan dự án)

> **Tài liệu gốc — đọc đầu tiên.** Đây là điểm khởi đầu cho mọi người (con người hoặc AI) tham gia dự án. Sau khi đọc file này, người đọc phải trả lời được: *Dự án này là gì? Bán cái gì cho ai? Hệ thống gồm những phần nào? Đang ở giai đoạn nào?*

| Thuộc tính | Giá trị |
|---|---|
| **Tên dự án** | AI Website Builder — Landing page bán khóa học |
| **Loại sản phẩm** | Website bán khóa học (course sales / conversion landing) có thanh toán tự động |
| **Chủ sở hữu** | Ngô Quang An — Lập trình viên 10 năm (5 năm tại công ty Singapore) |
| **Ngôn ngữ nội dung** | Tiếng Việt (locale `vi_VN`) |
| **Trạng thái** | Đang phát triển — đã có landing page + thanh toán SePay + admin panel |
| **Phiên bản tài liệu** | 1.0 |
| **Cập nhật** | 2026-07-03 |

---

## Mục tiêu

Cung cấp một **bức tranh tổng thể duy nhất** về dự án để:

- AI và lập trình viên hiểu ngay **bản chất sản phẩm** mà không phải đọc code.
- Thống nhất **định nghĩa sản phẩm** giữa các tài liệu con (PRD, kiến trúc, database, UI).
- Làm **mỏ neo (anchor)** cho toàn bộ hệ thống document: mọi file khác đều triển khai chi tiết từ đây.
- Giảm token cho các session sau: đọc 1 file là đủ ngữ cảnh để tiếp tục.

Tài liệu này **không** đi sâu vào cách triển khai (đó là việc của thư mục `03-architecture`, `04-database`, `05-api`). Nó chỉ trả lời câu hỏi **"WHAT & WHY"**, chưa phải **"HOW"**.

---

## Phạm vi

**Nằm trong phạm vi tài liệu này:**

- Định nghĩa sản phẩm, thông điệp cốt lõi (core message).
- Đối tượng người dùng ở mức khái quát.
- Danh sách năng lực (capabilities) chính của hệ thống hiện tại.
- Kiến trúc tổng quan ở mức "một đoạn văn".
- Trạng thái hiện tại và ranh giới giai đoạn.

**Ngoài phạm vi (đã có tài liệu riêng):**

- Business goals & KPI → [`02-business-goals.md`](02-business-goals.md)
- Chân dung người dùng chi tiết → [`03-user-personas.md`](03-user-personas.md)
- Hành trình người dùng → [`04-user-journey.md`](04-user-journey.md)
- Danh sách tính năng đầy đủ → [`05-features.md`](05-features.md)
- Ranh giới in-scope / out-scope chi tiết → [`06-scope.md`](06-scope.md)
- Yêu cầu kỹ thuật → thư mục [`../03-architecture`](../03-architecture/) và [`../04-database`](../04-database/)

---

## Chi tiết

### 1. Sản phẩm là gì?

**AI Website Builder** là một **website bán khóa học** (không phải công cụ tạo web). Sản phẩm bán là một **khóa học online** dạy người **không biết lập trình** cách dùng AI để tự tạo:

- Landing Page
- Website doanh nghiệp
- Website bán hàng
- Website đặt lịch (booking)
- Dashboard quản trị
- CRM khách hàng
- Web app có tích hợp AI

Bản thân **website này** đóng vai trò **landing page chuyển đổi (conversion landing page)**: thu hút → thuyết phục → chốt đơn → thu tiền tự động.

### 2. Thông điệp cốt lõi (Core Message)

> **Tự tạo Website, Landing Page và Web App bằng AI.**
> Không cần biết lập trình.
> Không cần thuê Developer.
> Chỉ cần biết sử dụng máy tính.

Đây là kim chỉ nam cho toàn bộ nội dung marketing, thiết kế và copywriting. Mọi section trên trang đều phục vụ củng cố thông điệp này.

### 3. Ai là người dùng?

Hệ thống phục vụ **2 nhóm người dùng** khác nhau:

| Nhóm | Vai trò | Nơi tương tác |
|---|---|---|
| **Khách hàng tiềm năng** (chủ shop, freelancer, marketer, chủ doanh nghiệp nhỏ, người chưa biết code) | Xem landing page → đăng ký mua khóa học → thanh toán | Trang chủ `/`, popup đăng ký, trang thanh toán `/thanh-toan/[code]` |
| **Quản trị viên** (chủ khóa học — Ngô Quang An) | Theo dõi lead, đơn hàng, cấu hình API/webhook | Khu vực `/admin` (có đăng nhập) |

Chi tiết chân dung xem [`03-user-personas.md`](03-user-personas.md).

### 4. Hệ thống gồm những phần nào? (Năng lực hiện tại)

Đây là **hiện trạng thực tế của codebase** (không phải kế hoạch):

1. **Landing page chuyển đổi** — ~15 section: Hero, Pain Points, Solution, Outcomes, Modules (8 module), Projects, Audience, Roadmap, Bonuses, Instructor, Testimonials, Pricing, FAQ, CTA, Footer.
2. **Popup đăng ký dùng chung** — mọi nút CTA đều mở chung một modal chọn gói + điền thông tin.
3. **Hai gói học phí** — Gói Tự Học (1.990.000đ) và Gói Kèm Cặp 1-1 (6.990.000đ).
4. **Tạo đơn hàng** — lưu vào Supabase (bảng `orders`) với mã chuyển khoản duy nhất.
5. **Thanh toán tự động SePay** — trang `/thanh-toan/[code]` hiển thị QR VietQR; webhook SePay tự xác nhận khi tiền vào; trang tự cập nhật trạng thái (polling, không cần F5).
6. **Admin panel** (`/admin`) — dashboard thống kê, quản lý lead, quản lý đơn hàng, cấu hình API/webhook. Có lớp xác thực riêng.
7. **SEO cơ bản** — sitemap, robots, Open Graph, metadata.

> **Lưu ý về roadmap:** Theo định hướng dự án, sau khi thanh toán thành công sẽ **tự cấp tài khoản học viên + gửi email + mở portal học `/hoc`**. Phần này thuộc lộ trình đang triển khai — xem [`07-roadmap.md`](07-roadmap.md) để biết trạng thái chính xác.

### 5. Kiến trúc tổng quan (một đoạn)

Ứng dụng **Next.js 15 (App Router) + TypeScript strict**, giao diện **Tailwind CSS + shadcn/ui (Radix)**, animation **Framer Motion**. Toàn bộ nội dung landing tách vào thư mục `config/` (không hard-code trong component). Dữ liệu (đơn hàng, giao dịch, lead) lưu ở **Supabase (PostgreSQL)**, chỉ truy cập qua **server với service role key** — client không nối trực tiếp DB. Thanh toán qua **SePay** (VietQR + webhook). Triển khai trên **Vercel**. Chi tiết xem [`../03-architecture/Architecture.md`](../03-architecture/Architecture.md).

### 6. Tech stack tóm tắt

| Hạng mục | Công nghệ |
|---|---|
| Framework | Next.js 15 (App Router) |
| Ngôn ngữ | TypeScript (strict) |
| Giao diện | Tailwind CSS + shadcn/ui (Radix) |
| Animation | Framer Motion |
| Backend/DB | Supabase (PostgreSQL) |
| Thanh toán | SePay (VietQR + webhook) |
| Icon | lucide-react |
| Deploy | Vercel |
| Package manager | npm (dự án tương thích pnpm) |

Chi tiết & lý do chọn xem [`../03-architecture/Technology-Stack.md`](../03-architecture/Technology-Stack.md).

### 7. Định hướng thiết kế

Dự án dùng **dark theme (nền tối)** với tông **tím/indigo + điểm nhấn cyan**. Học **cấu trúc** và **luồng bán hàng** từ trang tham khảo (khoahocbigman.com/vibe-coding-ai) nhưng **giữ bản sắc màu sắc, câu chữ, thiết kế riêng** — tuyệt đối không sao chép. Chi tiết xem [`../06-uiux/Color-System.md`](../06-uiux/Color-System.md).

---

## Checklist

Người đọc file này xong cần nắm được:

- [ ] Sản phẩm là **website bán khóa học**, không phải công cụ tạo web.
- [ ] Thông điệp cốt lõi: "Tự tạo web bằng AI — không cần biết code".
- [ ] Có 2 nhóm người dùng: **khách mua** và **admin**.
- [ ] Landing page có ~15 section, mọi CTA mở chung 1 popup đăng ký.
- [ ] Có **2 gói giá** thật (1.990.000đ và 6.990.000đ).
- [ ] Thanh toán **tự động qua SePay** (QR + webhook), không thanh toán thủ công.
- [ ] Có **admin panel** ở `/admin`.
- [ ] Stack: Next.js 15 + TS + Tailwind + Supabase + Vercel.
- [ ] Nội dung nằm trong `config/`, dữ liệu chỉ qua server.
- [ ] Biết tìm chi tiết ở tài liệu con nào (qua các liên kết ở trên).

---

## Best Practices

- **Một nguồn sự thật (single source of truth):** khi mô tả sản phẩm ở bất kỳ tài liệu nào, phải nhất quán với file này. Nếu file này sai/cũ, sửa ở đây trước rồi mới lan ra nơi khác.
- **Phản ánh hiện trạng, không phản ánh mong muốn:** phần "Năng lực hiện tại" mô tả những gì code đã có; kế hoạch tương lai để ở roadmap. Không trộn lẫn.
- **Không bịa số liệu:** mọi con số (giá, thời lượng, số học viên...) phải là dữ liệu thật hoặc ghi rõ "nội dung mẫu".
- **Ngắn gọn ở mức tổng quan:** file này là bản đồ, không phải chi tiết. Chi tiết luôn để ở tài liệu con và liên kết tới.
- **Cập nhật khi định nghĩa sản phẩm thay đổi:** thêm gói, đổi mô hình bán, thêm nhóm người dùng → cập nhật ngay để tránh lệch pha giữa các session AI.

---

## Ví dụ

**Ví dụ 1 — Onboarding một AI session mới:**

> *"Đọc `docs/01-product/01-project-overview.md` để hiểu dự án, sau đó đọc `docs/MASTER_INDEX.md` để biết thứ tự các tài liệu tiếp theo cần đọc cho task đang làm."*

**Ví dụ 2 — Trả lời nhanh "elevator pitch":**

> *"AI Website Builder là landing page bán khóa học dạy người không biết code tự tạo website bằng AI. Khách xem trang → bấm đăng ký → chọn 1 trong 2 gói → thanh toán chuyển khoản qua QR SePay → hệ thống tự xác nhận. Chủ khóa học quản lý đơn/lead qua trang /admin. Xây bằng Next.js 15, Supabase, deploy Vercel."*

**Ví dụ 3 — Khi có mâu thuẫn tài liệu:**

> PRD cũ ghi "chưa cần thanh toán online" nhưng code đã có SePay. → Đây là dấu hiệu PRD cũ đã lỗi thời; file overview này (mục "Năng lực hiện tại") mới phản ánh đúng hiện trạng. Cần đồng bộ lại PRD.

---

## Những lỗi thường gặp

| Lỗi | Hậu quả | Cách tránh |
|---|---|---|
| Nhầm sản phẩm là "công cụ tạo web" | Định hướng sai toàn bộ tính năng | Nhớ: sản phẩm bán là **khóa học**; website là landing bán khóa học |
| Dùng PRD cũ làm chuẩn (ghi "non-goal: thanh toán, admin") | Thiết kế thiếu các phần đã tồn tại | Lấy mục "Năng lực hiện tại" của file này làm chuẩn hiện trạng |
| Bịa số học viên / đánh giá để tăng thuyết phục | Mất uy tín, sai giá trị dự án | Chỉ dùng số thật; testimonial mẫu phải ghi rõ là mẫu |
| Đổi tông màu về light/teal | Lệch bản sắc thương hiệu đã chốt | Giữ dark theme tím/indigo + cyan |
| Copy câu chữ/thiết kế từ trang tham khảo | Vi phạm bản quyền, mất khác biệt | Chỉ học cấu trúc & luồng, tự viết nội dung |
| Để tài liệu con mâu thuẫn với file này | AI hiểu sai, hỏi lại nhiều lần | Coi file này là nguồn sự thật, đồng bộ khi có thay đổi |

---

## Gợi ý cải tiến

- **Đồng bộ PRD:** cập nhật `PRD.md` (mục "Non-goals") cho khớp hiện trạng đã có thanh toán + admin, tránh nguồn tài liệu mâu thuẫn.
- **Thêm sơ đồ ngữ cảnh (context diagram):** một sơ đồ Mermaid mô tả 3 khối chính (Khách hàng ↔ Landing/Checkout ↔ Supabase/SePay ↔ Admin) đặt ngay đầu file để nắm hệ thống trong 5 giây.
- **Bảng phiên bản định nghĩa sản phẩm:** ghi lại mốc thay đổi lớn (thêm gói, thêm portal học viên) để truy vết quyết định.
- **Liên kết trạng thái động:** trỏ tới [`../12-ai/PROJECT_STATUS.md`](../12-ai/PROJECT_STATUS.md) như nguồn cập nhật "đang làm gì" theo thời gian thực, giữ file overview này ổn định lâu dài.
- **One-pager marketing tách riêng:** cân nhắc bản rút gọn 1 trang cho mục đích giới thiệu đối tác, khác với bản kỹ thuật này.

---

> **Tiếp theo trong `01-product`:** [`02-business-goals.md`](02-business-goals.md) — mục tiêu kinh doanh & chỉ số đo lường.
> **Bản đồ toàn hệ thống:** [`../MASTER_INDEX.md`](../MASTER_INDEX.md) *(tạo ở bước cuối)*.
