# AI Website Builder — Landing Page bán khóa học

Landing page chuyển đổi cao cho khóa học **AI Website Builder** — dạy người không biết code tự tạo website, landing page và web app bằng AI. Mọi nút CTA mở chung **một popup đăng ký** (chọn gói + điền thông tin), đơn hàng lưu vào **Supabase**, **thanh toán chuyển khoản tự động qua SePay** (QR VietQR + webhook xác nhận) và sẵn sàng deploy lên **Vercel**.

> Tự tạo Website, Landing Page và Web App bằng AI. Không cần biết lập trình. Không cần thuê Developer. Chỉ cần biết sử dụng máy tính.

---

## 1. Công nghệ sử dụng

| Hạng mục       | Công nghệ                          |
| -------------- | ---------------------------------- |
| Framework      | Next.js 15 (App Router)            |
| Ngôn ngữ       | TypeScript (strict)                |
| Giao diện      | Tailwind CSS + shadcn/ui (Radix)   |
| Animation      | Framer Motion                      |
| Backend/DB     | Supabase (PostgreSQL)              |
| Thanh toán     | SePay (VietQR + webhook tự động)   |
| Icon           | lucide-react                       |
| Deploy         | Vercel                             |

---

## 2. Yêu cầu môi trường

- **Node.js** >= 18.18 (khuyến nghị 20+)
- **npm** (đi kèm Node). Dự án cũng tương thích **pnpm** nếu bạn thích.

Kiểm tra nhanh:

```bash
node -v
npm -v
```

---

## 3. Chạy dự án ở local

```bash
# 1. Cài dependencies
npm install

# 2. Tạo file biến môi trường
cp .env.example .env.local
# (Windows PowerShell) Copy-Item .env.example .env.local

# 3. Điền thông tin Supabase vào .env.local (xem mục 4)

# 4. Chạy môi trường phát triển
npm run dev
```

Mở trình duyệt tại **http://localhost:3000**.

> Website vẫn **chạy và build được** khi chưa cấu hình Supabase. Trong trường hợp đó,
> popup đăng ký sẽ hiển thị thông báo lỗi thân thiện thay vì tạo đơn hàng.

### Các lệnh có sẵn

| Lệnh             | Mô tả                                   |
| ---------------- | --------------------------------------- |
| `npm run dev`    | Chạy server phát triển (hot reload)     |
| `npm run build`  | Build bản production                    |
| `npm run start`  | Chạy bản production đã build            |
| `npm run lint`   | Kiểm tra ESLint                         |
| `npm run format` | Format code bằng Prettier               |

> Dùng pnpm? Thay `npm run` bằng `pnpm` (vd: `pnpm dev`, `pnpm build`).

---

## 4. Cấu hình Supabase

### Bước 1 — Tạo project

1. Đăng nhập [supabase.com](https://supabase.com) và tạo project mới.
2. Chờ project khởi tạo xong.

### Bước 2 — Tạo bảng dữ liệu

1. Vào **SQL Editor** trong dashboard Supabase.
2. Mở file [`supabase/schema.sql`](supabase/schema.sql) trong dự án.
3. Copy toàn bộ nội dung, dán vào SQL Editor và bấm **Run**.

Script sẽ tạo 3 bảng và bật **Row Level Security (RLS)**:

- `orders` — đơn hàng mua khóa học. **Không có policy public** — chỉ server (service role) truy cập.
- `sepay_transactions` — nhật ký giao dịch SePay gửi về, phục vụ đối soát.
- `course_leads` — bảng lead của form tư vấn cũ; website hiện **không còn dùng**
  (đã thay bằng popup đăng ký), giữ lại trong schema để không mất dữ liệu cũ.

### Bước 3 — Lấy khóa kết nối

Vào **Project Settings → API**, copy:

- **Project URL**
- **service_role key** (dùng cho đăng ký + thanh toán — tuyệt đối không lộ ra client)

### Bước 4 — Điền vào `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

Khởi động lại `npm run dev`. Bấm **Đăng ký ngay**, gửi thử thông tin và kiểm tra
đơn hàng trong **Table Editor → orders**.

---

## 4b. Cấu hình thanh toán tự động SePay

Khách bấm **Đăng ký ngay** ở bảng giá → chọn gói, điền thông tin → hệ thống tạo
đơn hàng và chuyển tới trang `/thanh-toan/<mã đơn>` hiển thị **mã QR VietQR**.
Khách quét QR chuyển khoản → SePay phát hiện tiền vào tài khoản → gọi webhook
→ đơn tự chuyển sang **đã thanh toán**, trang tự cập nhật (không cần F5).

### Bước 1 — Tạo tài khoản SePay và liên kết ngân hàng

1. Đăng ký tại [sepay.vn](https://sepay.vn) và liên kết tài khoản ngân hàng nhận tiền
   (ACB, MBBank, VietinBank, ... theo danh sách SePay hỗ trợ).
2. Chờ SePay xác nhận liên kết — từ lúc này SePay đọc được biến động số dư.

### Bước 2 — Khai báo tài khoản nhận tiền cho website

Sửa `paymentConfig.bank` trong [`config/payment.ts`](config/payment.ts)
(mã ngân hàng, số tài khoản, tên chủ TK **in hoa không dấu**), hoặc ghi đè bằng
biến môi trường:

```env
SEPAY_BANK_CODE=ACB
SEPAY_ACCOUNT_NUMBER=1234567890
SEPAY_ACCOUNT_NAME=NGUYEN VAN A
```

### Bước 3 — Cấu hình webhook trên SePay

1. Vào SePay Dashboard → **Tích hợp Webhooks → Thêm webhook**.
2. **URL nhận:** `https://<domain-cua-ban>/api/sepay/webhook`
3. **Kiểu chứng thực:** chọn **API Key**, đặt một chuỗi bí mật ngẫu nhiên.
4. Thêm chuỗi đó vào `.env.local` (và Vercel):

```env
SEPAY_WEBHOOK_API_KEY=chuoi-bi-mat-cua-ban
```

> Webhook chỉ chấp nhận request có header `Authorization: Apikey <key>` đúng.
> Thiếu `SEPAY_WEBHOOK_API_KEY` thì endpoint từ chối mọi request (an toàn mặc định).

### Bước 4 — Test luồng thanh toán

1. `npm run dev`, mở trang chủ → bảng giá → **Đăng ký ngay** → điền form.
2. Kiểm tra đơn xuất hiện trong **Table Editor → orders** (status `pending`).
3. Giả lập SePay gọi webhook (thay mã `AWBXXXXXX` bằng nội dung chuyển khoản của đơn):

```bash
curl -X POST http://localhost:3000/api/sepay/webhook \
  -H "Authorization: Apikey chuoi-bi-mat-cua-ban" \
  -H "Content-Type: application/json" \
  -d '{"id":1,"gateway":"ACB","transferType":"in","transferAmount":1990000,"content":"AWBXXXXXX","referenceCode":"FT123"}'
```

4. Trang thanh toán tự chuyển sang **"Thanh toán thành công"** trong vài giây.
5. Khi lên production: chuyển khoản thật 1 giao dịch nhỏ để nghiệm thu end-to-end
   (có thể tạo thêm một gói giá thấp tạm thời để test, sau đó xóa).

### Cách hệ thống đối soát

- Mỗi đơn có **mã chuyển khoản duy nhất** (vd `AWB7K2M4Q`) đặt trong nội dung CK.
- Webhook tìm mã này trong nội dung giao dịch, so số tiền `>=` giá gói rồi mới
  đánh dấu **paid** (idempotent — SePay retry không gây trùng).
- Giao dịch không khớp / chuyển thiếu tiền vẫn được ghi vào `sepay_transactions`
  để đối soát thủ công trong Supabase.

---

## 5. Cấu trúc thư mục

```
.
├─ app/
│  ├─ page.tsx              # Trang chủ (landing page)
│  ├─ thanh-toan/[code]/    # Trang thanh toán QR theo mã đơn hàng
│  └─ api/
│     ├─ checkout/          # POST tạo đơn hàng
│     ├─ sepay/webhook/     # SePay gọi khi có giao dịch ngân hàng
│     └─ orders/[code]/status/  # Trang thanh toán polling trạng thái
├─ components/
│  ├─ sections/             # 15 section của landing page (Hero, Pricing, FAQ, ...)
│  ├─ payment/              # Trang thanh toán: QR, copy field, trạng thái
│  ├─ ui/                   # UI primitives kiểu shadcn (button, input, accordion, ...)
│  ├─ navbar.tsx            # Header + menu mobile
│  ├─ checkout-dialog.tsx   # Provider + nút CTA mở popup đăng ký dùng chung
│  ├─ checkout-modal.tsx    # Modal chọn gói + đăng ký mua
│  ├─ reveal.tsx            # Wrapper animation Framer Motion
│  ├─ section.tsx           # Wrapper section + container
│  └─ icon.tsx              # Render icon theo tên
├─ config/                  # TOÀN BỘ nội dung landing page (đổi text tại đây)
│  ├─ site.ts               # Brand, nav, contact, hero stats
│  ├─ payment.ts            # Tài khoản nhận tiền + nội dung trang thanh toán
│  ├─ modules.ts            # 8 module khóa học
│  ├─ projects.ts           # Dự án mẫu + đối tượng học viên
│  ├─ pricing.ts            # Bảng giá (id gói + giá số dùng cho thanh toán)
│  ├─ faqs.ts               # Câu hỏi thường gặp
│  ├─ bonuses.ts            # Quà tặng kèm
│  ├─ testimonials.ts       # Cảm nhận học viên
│  ├─ roadmap.ts            # Lộ trình học
│  ├─ instructor.ts         # Thông tin giảng viên
│  └─ pain-points.ts        # Pain points, solution steps, outcomes
├─ lib/
│  ├─ supabase/server.ts    # Supabase client phía server (service role)
│  ├─ checkout.ts           # Validate + submit đăng ký mua (client)
│  ├─ orders.ts             # Tạo đơn, đối soát, đánh dấu thanh toán (server)
│  ├─ payment.ts            # Thông tin ngân hàng + build URL QR SePay
│  ├─ icons.ts              # Registry ánh xạ tên icon -> lucide
│  └─ utils.ts              # Helper cn(), formatVnd()
├─ types/                   # Kiểu dữ liệu dùng chung
├─ supabase/schema.sql      # SQL tạo bảng + RLS
└─ .env.example             # Mẫu biến môi trường
```

### Đổi nội dung ở đâu?

Toàn bộ chữ, module, giá, FAQ... nằm trong thư mục **`config/`**. Sửa tại đó,
không cần đụng vào component. Component chỉ đọc dữ liệu từ config.

---

## 6. Deploy lên Vercel

### Bước 1 — Đưa code lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: AI Website Builder landing page"
git branch -M main
git remote add origin <URL-repo-cua-ban>
git push -u origin main
```

### Bước 2 — Import vào Vercel

1. Đăng nhập [vercel.com](https://vercel.com) → **Add New → Project**.
2. Chọn repo vừa push. Vercel tự nhận diện Next.js (không cần chỉnh gì).

### Bước 3 — Thêm biến môi trường

Trong **Project Settings → Environment Variables**, thêm:

| Name                            | Value                                        |
| ------------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Project URL của Supabase                     |
| `SUPABASE_SERVICE_ROLE_KEY`     | service_role key (cho đăng ký + thanh toán)  |
| `SEPAY_WEBHOOK_API_KEY`         | chuỗi bí mật trùng với cấu hình webhook SePay |
| `SEPAY_BANK_CODE`               | (tuỳ chọn) ghi đè mã ngân hàng               |
| `SEPAY_ACCOUNT_NUMBER`          | (tuỳ chọn) ghi đè số tài khoản               |
| `SEPAY_ACCOUNT_NAME`            | (tuỳ chọn) ghi đè tên chủ tài khoản          |

Sau đó bấm **Deploy**. Deploy xong, cập nhật URL webhook trên SePay thành
`https://<domain>/api/sepay/webhook`.

### Bước 4 — Gắn tên miền riêng (tùy chọn)

1. Vào **Project Settings → Domains**.
2. Nhập domain của bạn (vd: `khoahoc.com`) và bấm **Add**.
3. Cập nhật bản ghi DNS theo hướng dẫn của Vercel (thường là `A` hoặc `CNAME`).
4. Vercel tự cấp **HTTPS** miễn phí sau khi DNS trỏ đúng.

> Nhớ cập nhật `siteConfig.url` trong [`config/site.ts`](config/site.ts) thành
> domain thật để SEO (Open Graph, sitemap, canonical) chính xác.

---

## 7. Tùy chỉnh thương hiệu

- **Màu sắc:** chỉnh biến CSS trong [`app/globals.css`](app/globals.css) (`--primary`, `--accent`, ...).
- **Font:** đổi trong [`app/layout.tsx`](app/layout.tsx) (đang dùng Be Vietnam Pro).
- **Nội dung & CTA:** chỉnh trong thư mục `config/`.
- **Thông tin liên hệ:** `siteConfig.contact` trong `config/site.ts`.

---

## 8. Ghi chú

- Testimonials và thông tin giảng viên hiện là **nội dung mẫu** — hãy thay bằng
  thông tin thật trước khi phát hành.
- **Trước khi nhận tiền thật:** thay số tài khoản mẫu trong
  [`config/payment.ts`](config/payment.ts) bằng tài khoản đã liên kết SePay.
- Toàn bộ dữ liệu (đơn hàng, giao dịch) chỉ đi qua server với service role key —
  client không truy cập trực tiếp Supabase.
- Xem lộ trình phát triển tiếp theo (thanh toán, portal học viên, admin) trong
  [`ROADMAP.md`](ROADMAP.md).

---

Xây dựng bằng ❤️ với Next.js, Tailwind CSS, shadcn/ui & Supabase.
