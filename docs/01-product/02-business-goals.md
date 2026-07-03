# 02 — Business Goals (Mục tiêu kinh doanh)

> **Tài liệu định hướng kinh doanh.** Trả lời câu hỏi: *Dự án này kiếm tiền bằng cách nào? Thành công trông như thế nào? Đo bằng chỉ số gì?* Đây là cơ sở để mọi quyết định về tính năng, thiết kế và ưu tiên đều phục vụ một mục tiêu chung: **tăng doanh thu bán khóa học một cách bền vững và trung thực.**

| Thuộc tính | Giá trị |
|---|---|
| **Mô hình** | Bán khóa học online (digital product, one-time payment) |
| **Kênh bán** | Landing page chuyển đổi + thanh toán tự động (SePay) |
| **Sản phẩm bán** | 2 gói: Tự Học (1.990.000đ), Kèm Cặp 1-1 (6.990.000đ) |
| **North Star Metric** | Số đơn hàng **đã thanh toán** / tháng |
| **Phiên bản** | 1.0 · Cập nhật 2026-07-03 |

> ⚠️ **Về số liệu:** Toàn bộ con số mục tiêu (target) trong tài liệu này là **khung mẫu để chủ khóa học điền theo thực tế**, không phải số liệu đã đạt được. Nơi nào là giả định đều được đánh dấu rõ. Tuyệt đối không dùng các số này như thành tích đã có.

---

## Mục tiêu

- Xác định rõ **mô hình kinh doanh** và **dòng doanh thu** của dự án.
- Đưa ra **bộ chỉ số (KPI)** đo lường sức khỏe kinh doanh của landing page.
- Định nghĩa **phễu chuyển đổi (conversion funnel)** để biết cần cải thiện khâu nào.
- Thiết lập **mục tiêu (OKR)** làm chuẩn ưu tiên công việc.
- Đảm bảo mọi tính năng đều **truy vết được về một mục tiêu kinh doanh** (tránh làm tính năng "cho vui").

---

## Phạm vi

**Trong phạm vi:**

- Mô hình doanh thu, cơ cấu gói, đòn bẩy tăng trưởng.
- KPI kinh doanh + KPI sản phẩm (product metrics).
- Phễu chuyển đổi và điểm rơi (drop-off).
- Khung OKR mẫu theo quý.

**Ngoài phạm vi:**

- Chiến lược marketing/ads chi tiết → thuộc kế hoạch marketing riêng (chưa nằm trong docs kỹ thuật).
- Cách cài đặt tracking cụ thể (GA4/Pixel) → [`../14-deployment/Analytics.md`](../14-deployment/Analytics.md).
- Tính năng cụ thể của từng gói → [`05-features.md`](05-features.md).

---

## Chi tiết

### 1. Mô hình kinh doanh

Đây là mô hình **bán sản phẩm số trả tiền một lần (one-time digital product)** qua landing page trực tiếp (Direct Response), **không qua trung gian**:

```
Traffic (ads/organic/social)
        │
        ▼
  Landing page  ──►  Popup đăng ký  ──►  Tạo đơn  ──►  QR SePay  ──►  Tự xác nhận  ──►  (Giao khóa học)
        │
        └──►  Lead tư vấn (Zalo/điện thoại) cho khách chưa sẵn sàng mua
```

**Hai con đường doanh thu:**

1. **Tự phục vụ (self-serve):** khách tự chọn gói → thanh toán QR → nhận khóa học. Tối ưu cho **Gói Tự Học** (giá thấp, quyết định nhanh).
2. **Tư vấn rồi chốt (assisted):** khách nhắn Zalo/gọi điện, chủ khóa học tư vấn → chốt. Phù hợp **Gói Kèm Cặp 1-1** (giá cao, cần thuyết phục).

### 2. Cơ cấu sản phẩm & giá

| Gói | Giá | Vai trò kinh doanh |
|---|---|---|
| **Gói Tự Học** | 1.990.000đ | *Entry / volume* — dễ quyết định, tạo số lượng đơn, mở rộng tệp khách |
| **Gói Kèm Cặp 1-1** | 6.990.000đ | *Premium / margin* — biên lợi nhuận cao, giá trị cảm nhận cao nhờ mentor 1-1 |
| **Đào tạo đội nhóm / doanh nghiệp** | Liên hệ | *Custom* — không niêm yết, chốt qua tư vấn riêng (Zalo) |

**Đòn bẩy giá trị (value framing):** thay vì neo giá giảm giả tạo, dự án nhấn mạnh **tiết kiệm thực**: "tiết kiệm ~2 triệu/năm tiền tool + hàng chục triệu tiền thuê dev". Đây là cách tăng chuyển đổi **trung thực**, đúng giá trị người dùng đề cao.

### 3. Đòn bẩy tăng trưởng (Growth Levers)

Doanh thu = **Traffic × Tỷ lệ chuyển đổi × Giá trị đơn trung bình (AOV)**. Ba đòn bẩy:

| Đòn bẩy | Cách tác động | Việc liên quan trong dự án |
|---|---|---|
| **Traffic** | Nhiều người vào trang hơn | SEO cơ bản (sitemap, OG, metadata), tốc độ tải, chia sẻ social |
| **Tỷ lệ chuyển đổi (CVR)** | % người xem → mua | Copywriting, thiết kế section, CTA rõ, popup đăng ký mượt, trust (testimonial, cam kết) |
| **AOV** | Tiền/đơn cao hơn | Đẩy Gói Kèm Cặp 1-1, gói doanh nghiệp, bán thêm (bonus/upsell) |

### 4. Bộ chỉ số (KPI)

**KPI kinh doanh (business):**

| Chỉ số | Định nghĩa | Nguồn dữ liệu |
|---|---|---|
| **Đơn đã thanh toán / tháng** (⭐ North Star) | Số order có `status = paid` | Bảng `orders` (Supabase) |
| **Doanh thu / tháng** | Tổng `price_value` của đơn đã thanh toán | Bảng `orders` |
| **AOV** | Doanh thu ÷ số đơn đã thanh toán | Tính từ `orders` |
| **Tỷ trọng gói cao cấp** | % đơn Kèm Cặp 1-1 / tổng đơn | Bảng `orders` (theo `plan_id`) |

**KPI sản phẩm/phễu (product):**

| Chỉ số | Định nghĩa |
|---|---|
| **Conversion Rate (CVR)** | Đơn đã thanh toán ÷ lượt truy cập landing |
| **Checkout Start Rate** | Số lần mở popup đăng ký ÷ lượt truy cập |
| **Order Creation Rate** | Số đơn tạo ÷ số lần mở popup |
| **Payment Success Rate** | Đơn `paid` ÷ đơn `pending` đã tạo |
| **Lead → Sale** | Đơn từ khách đã tư vấn ÷ tổng lead tư vấn |

> Ghi chú: một số chỉ số phễu cần **cài đặt analytics** (GA4/Pixel + event tracking) mới đo được. Các chỉ số dựa trên `orders` thì **đã có sẵn dữ liệu** trong Supabase và admin panel.

### 5. Phễu chuyển đổi (Conversion Funnel)

```
100  Lượt truy cập landing
 │   ▼  (Hook hero, cuộn xem nội dung)
 ??  Cuộn tới bảng giá / bấm CTA
 │   ▼  (Mở popup đăng ký)
 ??  Mở popup chọn gói
 │   ▼  (Điền đủ thông tin bắt buộc)
 ??  Tạo đơn thành công (pending)
 │   ▼  (Quét QR, chuyển khoản)
 ??  Đơn đã thanh toán (paid)  ← North Star
```

Ở mỗi bậc có **điểm rơi (drop-off)**. Nguyên tắc tối ưu: **đo trước, sửa bậc rơi nhiều nhất trước**, không tối ưu cảm tính. `??` là chỗ chủ khóa học điền số thật khi có dữ liệu.

### 6. Khung OKR mẫu (theo quý)

> Đây là **mẫu để điền**, không phải mục tiêu đã cam kết.

**Objective 1 — Biến landing thành cỗ máy bán hàng ổn định.**
- KR1: Đạt `___` đơn đã thanh toán/tháng.
- KR2: Payment Success Rate ≥ `___`%.
- KR3: Thời gian tải trang (LCP) < 2.5s trên mobile.

**Objective 2 — Tăng giá trị mỗi khách.**
- KR1: Tỷ trọng Gói Kèm Cặp 1-1 đạt `___`% tổng đơn.
- KR2: Thêm `___` đơn gói doanh nghiệp/quý.

**Objective 3 — Nền tảng đo lường được.**
- KR1: Cài đặt đầy đủ analytics + event phễu.
- KR2: Dashboard admin hiển thị đủ 4 KPI kinh doanh.

---

## Checklist

- [ ] Đã xác định **North Star Metric** = đơn đã thanh toán/tháng.
- [ ] Hiểu **2 con đường doanh thu** (self-serve vs tư vấn).
- [ ] Nắm vai trò kinh doanh của từng gói (volume vs margin).
- [ ] Biết công thức tăng trưởng: Traffic × CVR × AOV.
- [ ] Có bộ **KPI kinh doanh** đo được ngay từ bảng `orders`.
- [ ] Có bộ **KPI phễu** (cần analytics) đã liệt kê.
- [ ] Có **phễu chuyển đổi** với các điểm rơi cần đo.
- [ ] Có **khung OKR** để điền mục tiêu theo quý.
- [ ] Mọi số liệu mục tiêu đều được đánh dấu là "mẫu", không phải thành tích.

---

## Best Practices

- **Mỗi tính năng phải map về một KPI:** trước khi làm, hỏi "việc này tăng Traffic, CVR hay AOV?". Nếu không trả lời được → cân nhắc bỏ.
- **Đo được rồi mới tối ưu:** không đoán bậc phễu nào rơi nhiều; cài tracking, nhìn số, rồi sửa.
- **Trung thực trong marketing:** dùng giá trị thật (tiết kiệm tool/thuê dev) thay vì neo giá ảo hay số học viên bịa. Điều này khớp giá trị chủ khóa học đề cao và bền vững hơn về lâu dài.
- **Một North Star duy nhất:** tránh tối ưu nhiều chỉ số mâu thuẫn. Ưu tiên đơn đã thanh toán.
- **Tách chỉ số "phù phiếm" (vanity) khỏi chỉ số hành động:** lượt xem đơn thuần là vanity; đơn thanh toán và CVR mới đáng ra quyết định.
- **Review KPI định kỳ:** đặt lịch xem số hằng tuần/tháng qua admin panel để kịp điều chỉnh.

---

## Ví dụ

**Ví dụ 1 — Ưu tiên tính năng dựa trên mục tiêu:**

> Đề xuất: "thêm hiệu ứng động cho footer". → Map KPI: không tác động Traffic/CVR/AOV rõ ràng → **hạ ưu tiên**.
> Đề xuất: "rút gọn form popup còn 2 field bắt buộc". → Map KPI: tăng **Order Creation Rate** → **ưu tiên cao**.

**Ví dụ 2 — Đọc phễu để hành động:**

> Số liệu (giả định): 1000 lượt xem → 120 mở popup → 40 tạo đơn → 12 thanh toán.
> Bậc rơi lớn nhất: mở popup → tạo đơn (120 → 40, mất 67%). → Hành động: đơn giản hóa form, thêm trust ngay trong popup, hiển thị QR nhanh hơn.

**Ví dụ 3 — Tăng AOV:**

> Khách chọn Gói Tự Học. Trong bước tư vấn Zalo, giới thiệu quyền lợi mentor 1-1 → nâng cấp lên Gói Kèm Cặp → AOV tăng từ 1.99tr lên 6.99tr.

---

## Những lỗi thường gặp

| Lỗi | Hậu quả | Cách tránh |
|---|---|---|
| Tối ưu chỉ số phù phiếm (lượt xem) | Tưởng tốt nhưng doanh thu không tăng | Bám North Star = đơn thanh toán |
| Bịa số học viên/doanh thu để marketing | Mất uy tín, rủi ro pháp lý/đạo đức | Dùng giá trị & con số thật |
| Làm tính năng không gắn KPI | Lãng phí thời gian, phân tán nguồn lực | Bắt buộc map mỗi việc về 1 đòn bẩy |
| Không cài tracking nhưng vẫn "tối ưu" | Sửa mù, không biết đúng sai | Cài analytics + event phễu trước |
| Neo giá giảm ảo (giá gạch cao vống) | Phản tác dụng với khách tinh ý | Dùng framing tiết kiệm thật |
| Bỏ quên gói cao cấp | Bỏ lỡ biên lợi nhuận lớn | Có kịch bản đẩy Kèm Cặp 1-1 & doanh nghiệp |

---

## Gợi ý cải tiến

- **Dashboard KPI trực tiếp trong admin:** hiển thị 4 KPI kinh doanh (đơn/tháng, doanh thu, AOV, tỷ trọng gói) ngay trên [`/admin`](../07-pages/) để review nhanh.
- **Event tracking phễu:** thêm event `open_checkout`, `create_order`, `paid` để đo đủ 5 bậc phễu (xem [`../14-deployment/Analytics.md`](../14-deployment/Analytics.md)).
- **Cohort theo nguồn traffic:** gắn `source`/`utm` vào đơn để biết kênh nào ra tiền (đã có ý tưởng `source` ở lead).
- **A/B test có kiểm soát:** thử biến thể headline/CTA, đo CVR chênh lệch trước khi chốt.
- **Upsell/bonus tự động:** sau khi thanh toán Gói Tự Học, gợi ý nâng cấp trong email/portal để tăng AOV.
- **Bảng mục tiêu sống (living targets):** đặt file riêng cập nhật số thật hằng tháng, tách khỏi tài liệu khung này để giữ tính ổn định.

---

> **Trước:** [`01-project-overview.md`](01-project-overview.md) · **Tiếp theo:** [`03-user-personas.md`](03-user-personas.md) — chân dung người dùng chi tiết.
> **Liên quan:** [`../12-ai/PROJECT_STATUS.md`](../12-ai/PROJECT_STATUS.md) (trạng thái động), [`05-features.md`](05-features.md) (tính năng theo gói).
