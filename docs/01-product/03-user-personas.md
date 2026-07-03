# 03 — User Personas (Chân dung người dùng)

> Tài liệu mô hình hoá các nhóm người dùng thật của khóa học **AI Website Builder**: họ là ai, muốn gì, sợ gì, và ta thuyết phục họ mua như thế nào — để mọi quyết định nội dung, thiết kế và bán hàng đều bám vào con người thật thay vì cảm tính.

| Thuộc tính | Giá trị |
|---|---|
| Tên tài liệu | User Personas — Chân dung người dùng |
| Phiên bản | 1.0 |
| Cập nhật | 2026-07-03 |
| Chủ sản phẩm | Ngô Quang An |
| Trạng thái | Đang dùng |
| Liên quan | 01-overview, 02-business-goals, 04-user-journey, 05-features |

> ⚠️ **Lưu ý trung thực:** Persona trong tài liệu này là **mô hình hoá** dựa trên 6 nhóm đối tượng thật của sản phẩm (từ `config`). Mọi chi tiết nhân khẩu (tuổi, giới tính, thu nhập), tên riêng, câu quote và mọi con số minh họa đều là **giả định/mẫu**, KHÔNG phải thống kê thật. Không dùng bất kỳ số liệu nào ở đây như bằng chứng định lượng.

---

## Mục tiêu

- Biến 6 nhóm đối tượng trừu tượng thành **chân dung cụ thể** để cả đội (content, thiết kế, bán hàng) hình dung chung một người khi ra quyết định.
- Gắn mỗi persona với **pain point thật**, **objection**, **trigger mua** và **gói sản phẩm** phù hợp — làm nền cho user journey (04) và ưu tiên tính năng (05).
- Chỉ rõ **anti-persona** (ai KHÔNG phù hợp) để landing page chủ động loại nhầm lead, tránh hoàn tiền và đánh giá xấu.
- Cung cấp **ma trận & bản đồ định vị** để phân luồng thông điệp/kênh chốt đúng người, đúng lúc.
- Giữ vững cam kết **TRUNG THỰC**: không hợp thức hoá bất kỳ số liệu bịa nào.

## Phạm vi

**Trong phạm vi:**
- 6 buyer persona tiêu biểu (gộp từ 6 nhóm đối tượng thật).
- 1 admin/owner persona (người vận hành `/admin`, không phải khách mua).
- 1 anti-persona với 2 biến thể tách tên riêng (Tuấn — muốn thành dev; Khoa — chỉ cần trang tĩnh dựng-1-lần).
- Ma trận pain → objection → cách trả lời; ma trận persona → gói → kênh chốt; bản đồ 2 trục.

**Ngoài phạm vi:**
- Số liệu định lượng về thị phần, quy mô tệp, tỉ lệ chuyển đổi thật (chưa có dữ liệu).
- Thiết kế UI, copy landing chi tiết, cấu hình kỹ thuật (thuộc tài liệu khác).
- Kịch bản hành trình từng bước (thuộc 04-user-journey).

## Chi tiết

> **Quy ước đánh số:** các tiểu mục trong phần "Chi tiết" dùng tiền tố **số-tài-liệu** (`3.x` cho file `03`) theo template chuẩn của cả series `01`–`05`, để tham chiếu chéo giữa các file được rõ ràng. Các H2 khung cố định (Mục tiêu, Phạm vi, Checklist, Best Practices…) không đánh số vì lặp giống nhau ở mọi file.

### 3.1. Persona là gì và dùng để làm gì trong dự án này

**Persona** là một chân dung bán-hư-cấu đại diện cho một nhóm người dùng có chung mục tiêu, bối cảnh và rào cản. Persona không nhằm mô tả một cá nhân có thật, mà nhằm **nén hành vi của cả một nhóm** thành một hình mẫu dễ ghi nhớ, để mọi người trong dự án cùng "nói về một người".

Trong dự án **AI Website Builder** — một landing page bán khóa học dạy người **không biết code** tự tạo website/web app bằng AI — persona đóng bốn vai trò cụ thể:

1. **Định hướng nội dung landing:** mỗi section (hero, pain points, solution, pricing, FAQ, testimonial) phải trả lời trúng nỗi đau và objection của ít nhất một persona.
2. **Phân luồng bán hàng:** quyết định persona nào nên đi **Self-serve QR** (mua nhanh) và persona nào cần **Tư vấn Zalo** (gói cao, cần trấn an).
3. **Ưu tiên tính năng & dự án mẫu:** chọn dự án mẫu và outcome nào đưa lên trước, vì chúng phục vụ persona giá trị nhất.
4. **Bảo vệ định vị:** anti-persona giúp landing nói rõ "khóa học KHÔNG dành cho ai", tránh thu hút nhầm và giữ đúng core message *"Không cần biết lập trình — chỉ cần biết dùng máy tính."*

Persona ở đây được suy ra trực tiếp từ 6 nhóm đối tượng, 6 pain point, 8 outcome và 6 dự án mẫu có thật trong config — nên chúng là **công cụ ra quyết định**, không phải trang trí.

---

### 3.2. Bảng tóm tắt tất cả persona

| Persona | Nhóm | Mục tiêu chính | Gói phù hợp | Kênh chốt |
|---|---|---|---|---|
| **Ngọc** — Chủ shop online | 1. Chủ shop | Web bán hàng riêng, tự cập nhật sản phẩm/giá, hết lệ thuộc sàn & bên thiết kế | Tự Học (up: Kèm 1-1) | Self-serve QR |
| **Thu Hà** — Chủ spa/salon/quán ăn | 2. Dịch vụ địa phương | Web đặt lịch để khách tự chọn dịch vụ/giờ, giảm trả lời tin nhắn thủ công | Kèm 1-1 | Tư vấn Zalo |
| **Bảo** — Chủ doanh nghiệp nhỏ | 3. Chủ DN nhỏ | Hình ảnh chuyên nghiệp trên Internet, tự chủ cập nhật, chi phí gần 0 | Kèm 1-1 *(1 người: Tự Học)* | Zalo (đội) / QR (cá nhân) |
| **Minh Quân** — Freelancer | 4. Freelancer | Thêm dịch vụ làm web bằng AI, giữ trọn khách, tăng đơn giá | Kèm 1-1 *(vào Tự Học → nâng cấp)* | Self-serve QR |
| **Đức Anh** — Marketer | 5. Marketer | Tự dựng landing cho campaign trong ngày, không chờ team kỹ thuật | Tự Học (up: Kèm 1-1) | Self-serve QR |
| **Hoàng Long** — Sinh viên / người mới | 6. Sinh viên & người mới | Kỹ năng thực chiến, ra sản phẩm thật cho CV, nhận job nhỏ kiếm thêm | Tự Học | Self-serve QR (Zalo nếu cần hỏi) |
| **Ngô Quang An** — Admin/Owner | Vận hành nội bộ | Nắm sức khỏe kinh doanh, không bỏ lỡ lead, chốt Kèm 1-1, giữ TRUNG THỰC | Không mua (người bán) | — |
| **Tuấn (a) & Khoa (b)** — Anti-persona *(2 biến thể riêng)* | Ngoài mục tiêu | (a) Tuấn: học code chuyên nghiệp · (b) Khoa: chỉ cần trang tĩnh dựng-1-lần | Không gói nào | Định hướng ra ngoài |

---

### 3.3. Hồ sơ chi tiết từng buyer persona (Primary)

Sáu persona dưới đây là các buyer persona tiêu biểu, mỗi persona đại diện cho một trong 6 nhóm đối tượng thật. Mỗi persona có **một tên riêng duy nhất** để cả đội tham chiếu không lẫn.

> **Ghi chú tên riêng ↔ testimonial mẫu:** Một số persona được gợi ý tên từ testimonial mẫu trong `config` để hai bên nhất quán — persona chủ shop **Ngọc** lấy từ testimonial **Ngọc Trâm** (chủ shop mỹ phẩm). Persona và testimonial là hai loại nội dung khác nhau: persona là **mô hình hoá** nhóm đối tượng, testimonial là **nội dung mẫu** minh họa (đều gắn nhãn "giả định/mẫu").

#### Persona 1 — Ngọc · Chủ shop mỹ phẩm & thời trang online

> *Persona này được gợi ý từ testimonial mẫu **Ngọc Trâm** trong `config`; ở tài liệu persona gọi ngắn là **Ngọc**.*

| Trường | Nội dung |
|---|---|
| **Định vị** | Chủ shop bán qua Facebook/Shopee, muốn "nhà riêng" trên Internet, tự chủ hoàn toàn thay vì lệ thuộc sàn và bên thiết kế. |
| **Bối cảnh** | Bán tốt nhưng phụ thuộc thuật toán, phí sàn và tư vấn thủ công cả ngày. Đã hỏi giá thuê làm web, thấy đắt và sợ mỗi lần đổi sản phẩm lại phải nhờ, trả phí. |
| **Tech comfort** | Trung bình — thạo điện thoại, Canva, ads cơ bản, quản lý fanpage; chưa từng động vào code. |
| **Mục tiêu** | Web bán hàng riêng theo danh mục, trông uy tín; tự cập nhật sản phẩm/giá/khuyến mãi; giảm phụ thuộc sàn; có dashboard & CRM để chăm khách quay lại. |
| **JTBD** | "Khi shop đã đủ lớn nhưng vẫn sống nhờ sàn, tôi muốn tự dựng web bán hàng riêng để chuyên nghiệp hơn và không lệ thuộc ai." |
| **Pain** | Thuê web đắt, sửa mất phí phải chờ; sợ phụ thuộc bên thiết kế; nghĩ phải học code nhiều tháng; không biết bắt đầu; không biết đưa web lên mạng. |
| **Objections** | "Bận bán hàng cả ngày, không rành công nghệ, theo nổi không?"; "Nhỡ làm ra web xấu?"; "Web AI có bán được thật không?"; "1.990.000đ có đáng?" |
| **Triggers** | Vừa nhận báo giá thuê web cao ngất; bực vì mỗi lần đổi giá phải nhờ; thấy dự án mẫu "web shop thời trang"; cam kết "hỗ trợ đến khi ra sản phẩm đầu tiên". |
| **Sản phẩm giúp gì** | Kho dự án mẫu web shop thời trang; bộ prompt ra lệnh đúng; học deploy domain + HTTPS; dự án dashboard & CRM; tự chủ cập nhật mọi lúc. |
| **Gói** | **Tự Học (1.990.000đ)** — nhu cầu rõ, quyết định nhanh; up-sell **Kèm 1-1** nếu muốn web shop hoàn chỉnh có giỏ hàng. |

> *"Mình định thuê làm web mất mấy triệu, mỗi lần đổi sản phẩm lại phải nhờ và chờ. Mình chỉ muốn tự làm, tự sửa, không phụ thuộc ai."* (câu minh họa)

#### Persona 2 — Thu Hà · Chủ spa/salon nhỏ (mở rộng: quán ăn/cà phê)

| Trường | Nội dung |
|---|---|
| **Định vị** | Chủ dịch vụ địa phương ngập trong tin nhắn đặt lịch thủ công, muốn web đặt lịch + giới thiệu dịch vụ để trông uy tín và khách tự đặt chỗ. |
| **Bối cảnh** | Đông khách nhưng đặt lịch chạy hết qua tin nhắn/điện thoại, dễ trùng giờ, bỏ sót khách. Chưa có website nên khách mới khó tìm và chưa đủ tin. |
| **Tech comfort** | Thấp đến trung bình — "không rành công nghệ", dùng Zalo/Facebook chốt lịch; ngại mọi thứ nghe kỹ thuật. |
| **Mục tiêu** | Web đặt lịch để khách tự chọn dịch vụ/giờ; trang giới thiệu + bảng giá chuyên nghiệp; trông uy tín hơn đối thủ với chi phí gần 0; không bỏ sót khách/lịch. |
| **JTBD** | "Khi khách nhắn đặt lịch dồn dập và dễ trùng giờ, tôi muốn web để khách tự chọn dịch vụ và giờ, để đỡ trả lời thủ công và không bỏ sót ai." |
| **Pain** | Nghĩ phải biết code mới làm được web; không biết bắt đầu; thuê web tốn kém & phụ thuộc; sợ dùng AI ra lệnh sai; không biết deploy. |
| **Objections** | "Không rành máy tính, làm nổi web đặt lịch không?"; "Form đặt lịch tự làm chạy đúng không?"; "6.990.000đ là lớn với cơ sở nhỏ?"; "Bận việc quán, không có thời gian mày mò?" |
| **Triggers** | Một ngày quá tải tin nhắn, trùng giờ, mất khách; thấy dự án mẫu "web đặt lịch spa & salon"; mentor kèm 1-1 qua TeamViewer/UltraViewer; cam kết sửa lỗi trọn đời. |
| **Sản phẩm giúp gì** | Dự án mẫu web đặt lịch spa/salon; mentor kèm 1-1 lộ trình cá nhân hóa; trang dịch vụ + bảng giá chuyên nghiệp; prompt cho form đặt lịch; deploy + cam kết sửa lỗi trọn đời. |
| **Gói** | **Kèm 1-1 (6.990.000đ)** — tech comfort thấp, cần web đặt lịch chạy thật; cần tư vấn Zalo để chốt. |

> *"Mình không rành công nghệ, chỉ mong có một trang để khách tự đặt lịch, đỡ phải trả lời tin nhắn cả ngày. Mình cần người cầm tay chỉ đến khi nó chạy được."* (câu minh họa)

#### Persona 3 — Bảo · Chủ doanh nghiệp nhỏ

| Trường | Nội dung |
|---|---|
| **Định vị** | Chủ DN nhỏ cần website giới thiệu chuyên nghiệp, không muốn phụ thuộc bên thiết kế cho mọi thay đổi nhỏ. |
| **Bối cảnh** | DN đã hoạt động nhưng chưa có website tử tế (hoặc trang cũ lỗi thời). Khách/đối tác tìm Google trước khi tin — thiếu web làm giảm uy tín. |
| **Tech comfort** | Trung bình — thạo email, Zalo, Excel cơ bản, mạng xã hội; ngại công cụ kỹ thuật mới và deploy. |
| **Mục tiêu** | Website DN chuyên nghiệp tạo niềm tin; tự cập nhật thông tin/dịch vụ/ảnh; kiểm soát chi phí; về lâu dài mở rộng dashboard/CRM. |
| **JTBD** | "Khi khách/đối tác tìm DN trên mạng, tôi muốn họ thấy một website chỉn chu để tin tưởng và liên hệ." |
| **Pain** | Thuê web tốn kém & sửa mất phí; sợ phụ thuộc bên thiết kế; không biết bắt đầu; nghĩ làm web là việc phức tạp ngoài tầm. |
| **Objections** | "Bận điều hành, có đủ thời gian tự học?"; "Web AI có đủ chuyên nghiệp để đối tác tin?"; "Lớn tuổi, không rành công nghệ, theo nổi?"; "Bỏ tiền học có thật sự rẻ hơn thuê ngoài?" |
| **Triggers** | Bị hỏi "website công ty đâu"; vừa nhận báo giá web đắt; cần sửa thông tin trang cũ mà phải chờ & mất phí; muốn chủ động kiểm soát hình ảnh DN. |
| **Sản phẩm giúp gì** | Học tự tạo website DN chuẩn (giới thiệu, dịch vụ, form liên hệ); tự cập nhật mọi lúc; deploy domain + HTTPS chi phí gần 0; mở rộng dashboard/CRM khi DN lớn dần. |
| **Gói** | **Kèm 1-1 (6.990.000đ)** — bận & ngại kỹ thuật, cần mentor kèm tận tay ra web dùng được. Nếu tự tin thời gian & muốn tiết kiệm: **Tự Học**. Nếu đào tạo cả đội → **gói Doanh nghiệp** (Zalo). |

> *"Tôi chỉ cần đổi số điện thoại hay thêm một dịch vụ mà cũng phải nhờ người, chờ mấy hôm và mất phí — như vậy quá bất tiện."* (câu minh họa)

#### Persona 4 — Minh Quân · Freelancer thiết kế/nội dung

| Trường | Nội dung |
|---|---|
| **Định vị** | Freelancer đã có khách sẵn, muốn thêm dòng dịch vụ làm website bằng AI để giữ trọn khách, tăng thu nhập, giao nhanh. |
| **Bối cảnh** | Nhận job thiết kế/nội dung, khách hay hỏi "làm luôn website được không". Trước giờ phải từ chối hoặc thuê lại người khác → mất phần lời, mất kiểm soát tiến độ. |
| **Tech comfort** | Khá thoải mái với công cụ số (phần mềm thiết kế/quản lý dự án); chưa từng động vào code hay deploy. |
| **Mục tiêu** | Thêm dịch vụ "làm web/landing" vào gói freelance; rút ngắn thời gian làm để nhận nhiều job hơn; tự chủ toàn quy trình để không chia lời; bàn giao chuyên nghiệp. |
| **JTBD** | "Khi khách hỏi làm luôn website, tôi muốn tự nhận và làm được, để không mất khách và không mất phần lời." |
| **Pain** | Nghĩ phải học code nhiều tháng; dùng AI ra lệnh sai không dám giao khách; làm demo được nhưng không biết deploy; phải thuê lại người → tốn chi phí, mất kiểm soát. |
| **Objections** | "Học AI có tự tin giao khách thật hay chỉ làm bài mẫu?"; "6.990.000đ có hoàn vốn nhanh?"; "AI làm ra có bị na ná, khách chê?"; "Có dạy báo giá & tìm khách không?" |
| **Triggers** | Vừa phải từ chối một job web; thấy đồng nghiệp đã nhận thêm dịch vụ web; cần dòng thu nhập thêm ổn định; có khách sẵn đang chờ báo giá. |
| **Sản phẩm giúp gì** | Module đóng gói dịch vụ, báo giá, tìm khách đầu tiên, quy trình bàn giao; công thức ra lệnh AI + prompt mẫu; deploy Vercel + domain + HTTPS; kho dự án mẫu tái sử dụng cho nhiều loại khách. |
| **Gói** | **Kèm 1-1 (6.990.000đ)** *(gói chính)* — làm cho khách thật cần cam kết đầu ra & tư vấn thương mại hóa; hoàn vốn chỉ sau 1–2 job. Xuống thang: người đã quen tự học có thể **vào Tự Học** rồi nâng cấp. |

> *"Khách sẵn có rồi, mình chỉ thiếu một kỹ năng để nhận trọn job thay vì đẩy phần website cho người khác."* (câu minh họa)

#### Persona 5 — Đức Anh · Nhân viên/Chuyên viên Marketing

| Trường | Nội dung |
|---|---|
| **Định vị** | Marketer chạy nhiều chiến dịch, chán chờ đội kỹ thuật dựng landing; muốn tự chủ tốc độ và biến kỹ năng thành lợi thế nghề nghiệp/thu nhập thêm. |
| **Bối cảnh** | Mỗi chiến dịch cần một landing riêng nhưng phải xếp hàng chờ team/agency, làm chậm nhịp campaign và không chủ động A/B test. |
| **Tech comfort** | Khá — thạo GA, Meta/Google Ads, Canva, no-code cơ bản; đã thử ChatGPT nhưng chưa biết ra lệnh để AI dựng cả một landing dùng được. |
| **Mục tiêu** | Tự dựng landing từng chiến dịch trong ngày; chủ động chỉnh sửa & A/B test; nâng giá trị bản thân + mở thu nhập từ nhận dự án landing; ra lệnh AI đúng công thức. |
| **JTBD** | "Khi cần tung campaign mới, tôi muốn tự dựng landing ngay trong ngày, để không bị team làm chậm nhịp và tự chủ tối ưu." |
| **Pain** | Chờ đội kỹ thuật làm chậm campaign; thử AI nhưng kết quả lộn xộn; làm demo được nhưng không biết deploy để chạy ads; thuê ngoài tốn kém & sửa phải chờ. |
| **Objections** | "Tự dựng landing bằng AI có thật nhanh hơn chờ team?"; "Landing tự làm có đủ tốc độ & chuyển đổi để chạy ads?"; "Đã dùng AI ra kết quả tệ, khóa học dạy gì khác?"; "Có tự tin nhận làm cho khách & báo giá?" |
| **Triggers** | Một campaign trễ vì chờ landing, mất thời điểm vàng; thấy dự án mẫu "landing ra mắt sản phẩm"; outcome "nhận dự án kiếm tiền"; bộ prompt + công thức ra lệnh đúng. |
| **Sản phẩm giúp gì** | Dự án mẫu landing + công thức 4 bước; bộ prompt ra lệnh đúng; deploy domain + HTTPS trong vài phút để gắn tracking & chạy ads; outcome đóng gói–báo giá–bàn giao; tự chủ A/B test. |
| **Gói** | **Tự Học (1.990.000đ)** — tự học nhanh, ROI rõ; up-sell **Kèm 1-1** nếu muốn web app/dashboard phức tạp hoặc làm dịch vụ landing chuyên nghiệp. |

> *"Mình không muốn chờ team kỹ thuật cho mỗi chiến dịch nữa. Chỉ cần ra lệnh AI đúng công thức là tự dựng landing trong ngày và tối ưu ngay."* (câu minh họa)

#### Persona 6 — Hoàng Long · Sinh viên / người mới bắt đầu

| Trường | Nội dung |
|---|---|
| **Định vị** | Sinh viên/người mới, ngân sách hạn chế, muốn học một kỹ năng số thực chiến để ra sản phẩm thật, làm đẹp CV và nhận job nhỏ kiếm thêm. |
| **Bối cảnh** | Muốn kỹ năng thực chiến cho CV/portfolio và thu nhập khi còn đi học, nhưng thấy học code truyền thống quá dài và khó. Cần con đường vào công nghệ dễ tiếp cận. |
| **Tech comfort** | Cao ở mức người dùng — nhanh nhạy laptop, điện thoại, mạng xã hội, công cụ mới; chưa có nền tảng lập trình hay deploy. |
| **Mục tiêu** | Học kỹ năng thực chiến không phải học code nhiều tháng; ra sản phẩm thật cho CV/phỏng vấn; nhận vài job nhỏ; tạo lợi thế so với bạn cùng lứa. |
| **JTBD** | "Khi muốn vào công nghệ nhưng ngại học code dài, mình muốn một cách dễ tiếp cận để bắt đầu ngay mà không nản." |
| **Pain** | Không biết bắt đầu; nghĩ phải học code nhiều tháng; dùng AI ra lệnh sai; làm demo được nhưng không có link để show. |
| **Objections** | "1.990.000đ với sinh viên là khoản đáng kể, có đáng?"; "Người mới hoàn toàn theo được à?"; "Học xong có nhận được job nhỏ để kiếm lại tiền học?"; "Tự học bí thì có ai hỗ trợ?" |
| **Triggers** | Chuẩn bị làm CV/xin thực tập cần kỹ năng nổi bật; thấy bạn bè đã tự làm web & nhận job nhỏ; muốn kiếm thêm khi đi học; có thời gian rảnh để tập trung học. |
| **Sản phẩm giúp gì** | "Có landing đầu tiên sau 30 phút" — ra sản phẩm thật ngay buổi đầu; lộ trình 4 chặng · 8 module từ số 0 + prompt mẫu; deploy + domain cho link show CV; nhóm hỗ trợ + module nhận job nhỏ đầu tiên. |
| **Gói** | **Tự Học (1.990.000đ)** — phù hợp túi tiền, có lộ trình + kho dự án mẫu + prompt + nhóm hỗ trợ để tự đi từ số 0 đến job nhỏ đầu tiên. |

> *"Mình bắt đầu từ số 0, chỉ muốn làm ra được sản phẩm thật để có cái bỏ vào CV và nhận job nhỏ kiếm thêm."* (câu minh họa)

---

### 3.4. Admin/Owner persona

#### Ngô Quang An · Chủ khóa học & Người vận hành `/admin`

Đây là **persona vận hành nội bộ** — không phải khách mua, mà là người bán và quản trị toàn bộ hệ thống. Mọi tính năng `/admin` phải phục vụ đúng nhu cầu của anh.

| Trường | Nội dung |
|---|---|
| **Định vị** | Lập trình viên 10 năm (5 năm ở công ty Singapore) tự bán khóa học; vừa mentor vừa vận hành backend; chốt gói cao qua tư vấn 1-1. Admin duy nhất của `/admin`. |
| **Bối cảnh** | Tự tay xây website và vận hành toàn bộ khâu sau bán: theo dõi lead từ form, xác nhận đơn qua SePay, cấu hình API key/webhook, tư vấn 1-1 cho khách phân vân giữa 2 gói. Không có team sale/CSKH riêng. |
| **Tech comfort** | Rất cao — thoải mái env variables, webhook, HTTPS, deploy Vercel, đọc trạng thái đơn paid/pending/expired. Không cần UI "cầm tay", cần **dữ liệu chính xác + thao tác nhanh**. |
| **Mục tiêu** | Nắm nhanh 4 chỉ số/ngày (tổng lead, tổng đơn, doanh số đã thanh toán, đơn chờ); không bỏ lỡ lead nóng; chốt nhiều Kèm 1-1 biên cao; vận hành thanh toán trơn tru; **giữ TRUNG THỰC** (không số bịa); export lead CSV. |
| **JTBD** | "Khi mở `/admin` buổi sáng, tôi muốn thấy ngay 4 chỉ số và danh sách đăng ký/đơn gần đây, để biết hôm nay cần ưu tiên liên hệ ai." |
| **Pain** | Là admin duy nhất — dashboard rối/thiếu chỉ số là mất lead nóng; dễ nhầm khi đối soát paid/pending/expired; áp lực chốt Kèm 1-1 chỉ bằng tư vấn thủ công; cấu hình webhook sai là đơn không tự chuyển paid; cám dỗ "làm đẹp số" nhưng đặt TRUNG THỰC lên trên. |
| **Objections** | Từ chối mọi tính năng khuyến khích hiển thị số liệu bịa/gây hiểu nhầm; e ngại dashboard "màu mè" làm chậm thao tác; không muốn phụ thuộc dịch vụ ngoài dễ vỡ. |
| **Triggers** | Lead nóng vừa đổ về; có tiền chuyển khoản cần đối soát; khách nhắn Zalo hỏi so sánh 2 gói (cơ hội chốt Kèm 1-1); setup lần đầu/đổi cổng thanh toán. |
| **Sản phẩm giúp gì** | Dashboard 4 chỉ số cốt lõi + danh sách gần đây; trang Leads có tìm kiếm + export CSV; trang Orders lọc paid/pending/expired; trang Settings quản lý SePay API key/webhook/thông tin ngân hàng từ env; landing dùng dữ liệu thật + nhãn "giả định/mẫu" cho testimonial. |
| **Gói** | **Không mua** — là người bán. Trọng tâm: chốt **Kèm 1-1 (6.990.000đ)** qua tư vấn; để **Tự Học** chạy tự động như phễu volume; định tuyến nhu cầu đội nhóm/DN sang Zalo. |

> *"Tôi không cần dashboard hào nhoáng — tôi cần biết lead nào vừa vào, ai đã chuyển tiền, ai đang phân vân để gọi tư vấn. Và tuyệt đối không có con số bịa nào trên trang của tôi."* (câu minh họa)

---

### 3.5. Anti-persona: ai KHÔNG phù hợp

#### Tuấn (biến thể a) · Người muốn thành lập trình viên chuyên nghiệp — & Khoa (biến thể b) · Người chỉ tìm tool dựng-1-lần

Anti-persona gồm **hai biến thể động cơ khác nhau**, tách tên riêng để mỗi biến thể sắc nét khi viết copy "không dành cho ai". Việc nhận diện họ giúp landing chủ động loại nhầm lead, tránh hoàn tiền và đánh giá xấu.

| Biến thể | Họ muốn gì | Vì sao KHÔNG phù hợp | Cách định hướng |
|---|---|---|---|
| **Tuấn (a) — Muốn thành dev chuyên nghiệp** | Nắm thuật toán, cấu trúc dữ liệu, ngôn ngữ lập trình; tự viết & bảo trì codebase; vượt phỏng vấn kỹ thuật đi làm dev. | Khóa học **chủ đích bỏ qua** đào tạo nghề code; chỉ dạy dùng AI để RA SẢN PHẨM website nhanh. Họ muốn tự tay viết code, không thấy giá trị ở "ra lệnh AI đúng cách". | Giới thiệu tới **chương trình đào tạo lập trình bài bản** (khóa CS/bootcamp dev). Landing khẳng định lại core message để họ tự nhận ra không đúng nhu cầu. |
| **Khoa (b) — Chỉ cần một trang tĩnh dựng-1-lần** | Một trang web tĩnh dựng trong 10 phút, dùng một lần, **không muốn học kỹ năng**, không muốn trả phí. | Đây là **khóa học có phí** (1.990.000đ / 6.990.000đ) với lộ trình 8 module dạy **tự chủ tạo nhiều loại web/web app bằng AI** (landing, web bán hàng, đặt lịch, dashboard, CRM) và deploy domain riêng — không phải một sản phẩm dùng-1-lần cho ai không muốn học. | Nếu **chỉ** cần một trang tĩnh dựng-1-lần và không muốn học kỹ năng, họ hợp với một **website builder kéo-thả** hơn. Nhưng landing tái khẳng định: ai muốn **tự chủ tạo nhiều loại web/web app và tự sửa mãi về sau** thì khóa học mới là lựa chọn đúng — không định vị công cụ kéo-thả như một thay thế tương đương cho khóa học. |

**Cơ chế loại nhầm trên landing:**
- Dùng section **"Khóa học DÀNH cho ai / KHÔNG dành cho ai"** để nói thẳng ngay từ đầu.
- Dùng **FAQ** để tái khẳng định: đây là khóa dạy *tự chủ tạo nhiều loại web/web app thật bằng AI cho người không biết code* (deploy domain riêng, tự sửa mãi về sau), không phải đào tạo nghề lập trình, cũng không phải một tool kéo-thả dựng-1-lần.
- Nguyên tắc: **định hướng họ ra ngoài** thay vì cố ép bán — vì ép bán khả năng cao dẫn tới hoàn tiền và đánh giá tiêu cực, dù sản phẩm không hề hứa hẹn điều họ tìm.

---

### 3.6. Ma trận: Pain → Objection → Cách sản phẩm trả lời

Bám sát 6 pain point thật. "Objection" = câu phản đối khách tự nói trong đầu ngay trước khi bấm mua. "Cách trả lời" = bằng chứng/quyền lợi có thật (không hứa suông).

| # | Pain point (thật) | Objection khách tự nói | Cách sản phẩm trả lời (bằng chứng thật) | Nơi đặt trên landing |
|---|---|---|---|---|
| 1 | **Không biết bắt đầu từ đâu** | "Rối quá, chắc lại bỏ dở như mấy lần trước." | Lộ trình dựng sẵn **4 chặng · 8 module** đi từ số 0 → nhận dự án đầu tiên. Chỉ làm theo từng bước, không phải tự chọn tool. | Roadmap + Modules; pill hero "Lộ trình rõ ràng từng bước" |
| 2 | **Không biết code** | "Tôi không phải dân IT, học không nổi đâu." | Thiết kế riêng cho người chưa biết code (FAQ #1). Quy trình 4 bước: mô tả ý tưởng → ra lệnh đúng → kiểm tra & sửa → deploy. Hero: "0 dòng code phải tự viết tay". | Solution (4 bước) + FAQ #1 |
| 3 | **Thuê người làm quá tốn kém** | "1.990.000đ có đáng không? Hay tôi thuê quách cho xong?" | Neo giá trị THẬT: học 1 lần, tự làm nhiều web; tiết kiệm hàng chục triệu tiền thuê dev + tiền tool/năm. Web deploy **miễn phí** (Vercel), chỉ tốn tên miền vài trăm nghìn/năm (FAQ #7). | Pricing (valueNote) + FAQ #7 |
| 4 | **Sợ bị phụ thuộc bên thiết kế** | "Làm xong có tự sửa được không, hay lại phải chạy đi nhờ?" | Cốt lõi khóa học là **tự chủ**: tự cập nhật sản phẩm/giá/ảnh bất cứ lúc nào. Testimonial mẫu: "tự sửa giá và thêm sản phẩm bất cứ lúc nào". | Pain Points + Testimonials |
| 5 | **Dùng AI nhưng ra lệnh sai** | "Tôi thử ChatGPT rồi, ra toàn thứ vô dụng." | Dạy **công thức ra lệnh** (bước 02 Solution) + **bộ prompt mẫu** cho từng loại website (quyền lợi gói Tự Học). Không để khách tự mò. | Solution bước 02 + feature list Pricing |
| 6 | **Không biết đưa web lên mạng** | "Làm xong trên máy thì cũng vô ích nếu không ai xem được." | Bước 04 Solution: **deploy domain riêng + HTTPS trong vài phút**. Outcome "đưa web lên với domain riêng". Deploy free qua Vercel (FAQ #7). | Solution bước 04 + Outcomes |

**Đòn bẩy chốt cross-cut mọi objection:** cam kết *"hỗ trợ đến khi làm được sản phẩm đầu tiên"* + *"lộ trình & dự án mẫu dùng trọn đời"* + *"cập nhật miễn phí"* — thứ hạ rào cản rủi ro mạnh nhất; nên đặt ngay dưới bảng giá và lặp lại ở FAQ.

---

### 3.7. Ma trận: Persona → Gói → Kênh chốt

Gói: **Tự Học** (1.990.000đ, entry/volume, quyết định nhanh) · **Kèm 1-1** (6.990.000đ, premium/margin, cần tư vấn) · **Doanh nghiệp** (không niêm yết, Zalo). Kênh: **Self-serve QR** (SePay VietQR, xác nhận tự động) vs **Tư vấn Zalo**.

> **Thống nhất tên gói:** toàn tài liệu dùng **"Kèm 1-1"** làm tên chuẩn cho gói 6.990.000đ (không xen kẽ "Kèm Cặp 1-1").

| Persona-nhóm | Gói chính | Up-sell | Lý do khớp gói | Kênh chốt |
|---|---|---|---|---|
| **1. Chủ shop online** | Tự Học | Kèm 1-1 (web shop có giỏ hàng) | Nhu cầu rõ, dự án mẫu phủ đúng; cần tự chủ cập nhật; quyết định nhanh vì đau ví thuê ngoài. | **Self-serve QR** |
| **2. Spa/salon/quán ăn** | Kèm 1-1 | — | Cần web đặt lịch chạy thật, ít rành công nghệ → cần mentor + hỗ trợ TeamViewer/UltraViewer; cam kết đầu ra hạ rủi ro. | **Tư vấn Zalo** |
| **3. Chủ DN nhỏ** | Tự Học *(1 người)* / Doanh nghiệp *(cả đội)* | Kèm 1-1 hoặc gói đội nhóm | Muốn hình ảnh chuyên nghiệp chi phí gần 0. 1 người tự làm → Tự Học đủ; đào tạo nhân sự → gói đội nhóm. | **Zalo** (đội) · **QR** (cá nhân) |
| **4. Freelancer** | Kèm 1-1 | Xuống thang: Tự Học (tự tin, muốn tiết kiệm) | Làm web cho khách thật → cần cam kết đầu ra & tư vấn thương mại hóa (đóng gói–báo giá–bàn giao); hoàn vốn sau 1–2 job. | **Self-serve QR** *(mở đường Zalo nếu hỏi trước)* |
| **5. Marketer** | Tự Học | Kèm 1-1 (dự án phức tạp/tích hợp) | Chỉ cần landing cho campaign, không chờ team; thoải mái công nghệ cao, tự dựng theo công thức prompt. | **Self-serve QR** |
| **6. Sinh viên & người mới** | Tự Học | — (giữ Kèm 1-1 làm mục tiêu tương lai) | Ngân sách nhạy, bắt đầu từ 0 nhưng chấp nhận tự mò + nhóm hỗ trợ; giá 1.990.000đ vừa ngưỡng. | **Self-serve QR** (Zalo nếu cần hỏi) |

**Quy tắc phân luồng kênh:**
- **Gói Tự Học → mặc định Self-serve QR.** Giá thấp, quyết định nhanh — đừng chèn bước tư vấn làm chậm chuyển đổi. Zalo chỉ là phao cứu hộ.
- **Gói Kèm 1-1 → ưu tiên nút "Đăng ký ngay" nhưng mở rộng đường Zalo.** Giá cao + cá nhân hóa ⇒ nhiều người cần hỏi trước. CTA phụ "Tư vấn qua Zalo" cạnh nút mua.
- **Doanh nghiệp/đội nhóm → chỉ Zalo** (không niêm yết giá).
- **Spa/salon là ngoại lệ:** dù không phải gói doanh nghiệp, vẫn đẩy về Zalo vì rào cản công nghệ + kỳ vọng "chạy được thật".

---

### 3.8. Bản đồ 2 trục: Sẵn sàng mua × Thoải mái công nghệ

Trục X = **Mức thoải mái công nghệ** (thấp ↔ cao). Trục Y = **Mức sẵn sàng mua** (cao ↔ thấp).

```
                THOẢI MÁI CÔNG NGHỆ THẤP        │        THOẢI MÁI CÔNG NGHỆ CAO
              ┌──────────────────────────────┬──────────────────────────────┐
   SẴN SÀNG   │  Ô A — "Trấn an & cầm tay"    │  Ô B — "Chốt nhanh, đừng cản" │
   MUA CAO    │  • Chủ shop online            │  • Freelancer                 │
              │  • Chủ spa/salon/quán ăn      │  • Marketer                   │
              ├──────────────────────────────┼──────────────────────────────┤
   SẴN SÀNG   │  Ô C — "Gỡ sợ hãi trước"      │  Ô D — "Cho lý do & ROI"      │
   MUA THẤP   │  • Người mới ngại công nghệ   │  • Sinh viên (ngân sách nhạy) │
              │  • Chủ DN nhỏ còn lưỡng lự    │  • Dev/marketer đang so sánh  │
              └──────────────────────────────┴──────────────────────────────┘
```

> **Cách đọc bản đồ:** hai trục biểu diễn **TRẠNG THÁI tâm lý tại một thời điểm**, không phải danh sách 6 buyer persona chính thức. Cùng một persona có thể rơi vào ô khác nhau tùy mức sẵn sàng lúc đó — ví dụ **Bảo (Chủ DN nhỏ)** khi đã quyết thì ở ô A/B, nhưng khi *còn lưỡng lự* rơi xuống ô C (ghi là "Chủ DN nhỏ còn lưỡng lự"), **không mâu thuẫn** với gói mặc định Kèm 1-1 ở bảng 3.2/3.7 — đó chỉ là biến thể trạng thái. Các nhãn như "Người mới ngại công nghệ" hay "Dev/marketer đang so sánh" là **trạng thái tâm lý** (không phải persona mới) dùng để chọn thông điệp.

| Ô | Persona điển hình | Tâm lý | Thông điệp gợi ý | CTA & kênh |
|---|---|---|---|---|
| **A. Sẵn sàng cao × Công nghệ thấp** | Chủ shop, spa/salon/quán ăn | Muốn web NGAY nhưng sợ "tôi không rành máy móc". | *"Không cần biết code — chỉ cần biết dùng máy tính. Có mentor cầm tay đến khi web chạy được."* Nhấn hỗ trợ TeamViewer/UltraViewer + cam kết đầu ra. | Đẩy **Kèm 1-1**, CTA "Tư vấn qua Zalo" nổi bật hơn nút mua. |
| **B. Sẵn sàng cao × Công nghệ cao** | Freelancer, Marketer | Đã tin làm được, chỉ tính ROI & tốc độ. | *"Tự dựng landing page trong 30 phút, không chờ ai. Nhận dự án kiếm tiền ngay module cuối."* Nhấn tốc độ + kiếm tiền. | **Tự Học** + **Self-serve QR**. Giảm ma sát, đừng bắt tư vấn. |
| **C. Sẵn sàng thấp × Công nghệ thấp** | Người mới ngại công nghệ, chủ DN nhỏ lưỡng lự | "Liệu tôi có làm nổi không? Mua rồi bỏ phí thì sao?" | *"Bắt đầu từ số 0 vẫn theo được — hỗ trợ đến khi bạn làm được sản phẩm đầu tiên."* Nhấn guarantees + FAQ để gỡ sợ. | Nuôi bằng FAQ + lời chứng, rồi mời **Zalo hỏi trước**; chốt Tự Học khi đã yên tâm. |
| **D. Sẵn sàng thấp × Công nghệ cao** | Sinh viên nhạy ngân sách, người so sánh tự học free vs khóa | "Tôi tự Google/YouTube được, trả tiền làm gì?" | *"Đỡ hàng tháng mò mẫm: lộ trình 8 module + bộ prompt mẫu, dùng trọn đời, cập nhật miễn phí."* Nhấn tiết kiệm thời gian + prompt chuẩn + giá 1.990.000đ là ngưỡng thấp. | **Tự Học** + **Self-serve QR**; dùng giá "khai giảng" (giá thật) làm lý do hành động sớm. |

**Nguyên tắc vận hành bản đồ:**
- **Ưu tiên nguồn lực theo ô B > A > D > C.** B chốt rẻ & nhanh (self-serve); A giá trị cao/đơn (đáng thời gian tư vấn Zalo).
- **Landing phục vụ cả 4 ô cùng lúc:** hero + Solution 4 bước hạ rào công nghệ (cột trái); Pricing + Outcomes/kiếm tiền đánh ROI (cột phải); FAQ + guarantees kéo hàng dưới lên hàng trên.
- **Mobile CTA bar** hiển thị đồng thời 2 đường: "Đăng ký ngay" (self-serve) và "Zalo tư vấn" — để mỗi ô tự chọn kênh phù hợp.

---

## Checklist

- [ ] Mỗi buyer persona được gắn với ít nhất 1 section landing trả lời trúng pain & objection.
- [ ] Mọi số liệu/tên/quote đều gắn nhãn "giả định/mẫu"; không có số học viên/%/doanh thu bịa.
- [ ] Section "DÀNH cho ai / KHÔNG dành cho ai" phản ánh đúng cả hai biến thể anti-persona: (a) Tuấn — muốn thành dev chuyên nghiệp, và (b) Khoa — chỉ cần trang tĩnh dựng-1-lần, không muốn học kỹ năng.
- [ ] Gói Tự Học mặc định Self-serve QR; Gói Kèm 1-1 có thêm CTA "Tư vấn Zalo".
- [ ] Spa/salon và nhu cầu đội nhóm/DN được định tuyến sang Zalo.
- [ ] Testimonial mẫu trong `config` ghi rõ là nội dung mẫu, và mối liên hệ persona ↔ testimonial nhất quán: **Ngọc Trâm** → persona **Ngọc** (chủ shop); **Minh Quân**, **Thu Hà**, **Đức Anh**, **Hoàng Long** trùng tên persona tương ứng; **Bảo Ngân** là testimonial minh họa cho persona chủ DN nhỏ (**Bảo**). Tên không trùng gốc giữa hai persona khác nhóm.
- [ ] `/admin` cung cấp đủ 4 chỉ số + Leads (CSV) + Orders (lọc trạng thái) + Settings cho owner persona.
- [ ] 6 pain point thật đều xuất hiện trong ma trận 3.6 với cách trả lời có bằng chứng thật.

## Best Practices

- **Một persona, một quyết định:** khi tranh luận nội dung/thiết kế, hãy hỏi "phục vụ persona nào, ô nào trên bản đồ?".
- **Bám config, không tô vẽ:** persona chỉ mở rộng từ 6 nhóm/6 pain/8 outcome/6 dự án mẫu có thật; không bịa thêm nhu cầu.
- **Trung thực trước chuyển đổi:** thà nói thật kèm nhãn "mẫu" còn hơn số đẹp mà bịa — đúng giá trị cốt lõi của chủ khóa học.
- **Phân luồng theo giá:** giá thấp → giảm ma sát (QR); giá cao → thêm đường trấn an (Zalo). Đừng bắt mọi người đi cùng một cửa.
- **Chủ động loại nhầm lead:** anti-persona không phải để bỏ qua — dùng nó để viết phần "không dành cho ai", tiết kiệm chi phí hoàn tiền/hỗ trợ.
- **Persona là tài liệu sống:** cập nhật khi có dữ liệu hành vi thật (từ `/admin`), đổi phiên bản khi thay đổi lớn.

## Ví dụ

**Ví dụ 1 — Chọn kênh cho một lead chủ shop (Ô A → B ranh giới):**
Ngọc (chủ shop) tự tin dùng Canva/ads nhưng đau ví thuê web. Nhu cầu rõ, quyết định nhanh ⇒ đưa thẳng **Tự Học + Self-serve QR**, không chèn tư vấn. Chỉ hiện "Zalo hỏi trước" như phao cứu hộ.

**Ví dụ 2 — Nâng gói đúng nhu cầu (không ép):**
Thu Hà (spa) ít rành công nghệ, cần web đặt lịch chạy thật. Thay vì để mặc định mua gói rẻ, tư vấn Zalo nâng lên **Kèm 1-1** vì mentor + cam kết đầu ra chính là thứ gỡ nỗi sợ — đúng nhu cầu, không phải bán ép.

**Ví dụ 3 — Xử lý anti-persona:**
Một người tìm "học lập trình để đi làm dev" bấm nhầm quảng cáo. Landing đọc phần "KHÔNG dành cho ai" ⇒ tự rời đi và (lý tưởng) được gợi ý tới bootcamp dev. Kết quả: không tốn chi phí hỗ trợ, không rủi ro đánh giá xấu.

## Những lỗi thường gặp

- **Bịa số để "tăng uy tín"** (số học viên, %, doanh thu) — vi phạm giá trị cốt lõi; luôn dùng dữ liệu thật hoặc nhãn "giả định/mẫu".
- **Ép mọi persona vào một gói/một kênh** — làm chậm người mua nhanh (QR) hoặc bỏ rơi người cần trấn an (Zalo).
- **Bỏ qua anti-persona** — thu hút nhầm lead, tăng hoàn tiền và đánh giá tiêu cực.
- **Coi testimonial mẫu như bằng chứng thật** — phải ghi rõ là nội dung mẫu minh họa persona.
- **Persona quá loãng** — tạo hàng chục chân dung vụn; giữ tối đa 6 buyer persona tiêu biểu để không mất trọng tâm.
- **Nhầm admin/owner là khách mua** — Ngô Quang An là người bán; `/admin` phục vụ vận hành, không phải phễu chuyển đổi.
- **Đối xử persona như tài liệu tĩnh** — không cập nhật khi có dữ liệu hành vi thật từ hệ thống.

## Gợi ý cải tiến

- **Gắn số hiệu lead theo persona/nguồn** trong `/admin` để sau này đo persona nào chuyển đổi tốt nhất (thay giả định bằng dữ liệu thật).
- **Thêm bộ lọc theo gói/nguồn lead** ở trang Leads để owner phân nhóm & tư vấn đúng gói nhanh hơn.
- **Bản đồ hành trình riêng cho ô A và ô B** (04-user-journey) vì hai nhóm này khác nhau rõ về kênh và tốc độ quyết định.
- **A/B test thông điệp hero** giữa "hạ rào công nghệ" (cột trái) và "ROI/kiếm tiền" (cột phải) để biết ô nào chiếm ưu thế trong lưu lượng thật.
- **Tín hiệu quan tâm gói cao** (ví dụ: click "Tư vấn Zalo", xem lâu ở Kèm 1-1) để owner ưu tiên gọi lead nóng — hỗ trợ mục tiêu chốt biên cao.
- **Rà soát định kỳ anti-persona** theo từ khóa quảng cáo thực tế để tinh chỉnh phần "không dành cho ai".

---

*Trước: [02-business-goals.md](./02-business-goals.md) · Tiếp theo: [04-user-journey.md](./04-user-journey.md) · Liên quan: [01-project-overview.md](./01-project-overview.md), [05-features.md](./05-features.md)*
