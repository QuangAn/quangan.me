import type { CourseDocModule } from "@/types/course";

/** Module 6: Website đặt lịch — bản tinh gọn, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module06: CourseDocModule = {
  id: "module-6",
  order: 6,
  title: "Module 6: Tạo Website đặt lịch",
  shortTitle: "06. Website đặt lịch",
  tagline: "Chọn dịch vụ · chọn ngày giờ · xác nhận",
  description:
    "Làm web app đặt lịch đầu tiên của bạn — cho spa, salon, phòng khám, tư vấn: khách chọn dịch vụ, chọn ngày giờ, điền thông tin và thấy màn hình xác nhận. Mỗi bài có 1 prompt để bạn copy dán thẳng vào Claude.",
  outcome:
    "Làm được luồng đặt lịch nhiều bước chạy mượt trên điện thoại — web app thực thụ đầu tiên của bạn, sẵn sàng để Module 7 gắn database thật.",
  lessons: [
    {
      id: "m6-b1",
      title: "Bài 6.1 — Luồng đặt lịch hoạt động thế nào?",
      description: "Hiểu 4 bước khách đi qua và các phần website cần có.",
      duration: "6 phút",
      videoLabel: "Đặt lịch như bấm số thứ tự ở phòng khám",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hình dung rõ 4 bước khách đi qua trước khi bắt tay làm.",
        },
        {
          type: "card",
          title: "4 bước khách đi qua (như đi cắt tóc)",
          ordered: true,
          list: [
            "Chọn dịch vụ — vd: chăm sóc da 60 phút, 350.000đ.",
            "Chọn ngày và khung giờ còn trống.",
            "Điền tên + số điện thoại.",
            "Thấy màn hình “Đặt lịch thành công”.",
          ],
        },
        {
          type: "card",
          title: "Vậy website gồm những phần nào",
          list: [
            "Trang giới thiệu + danh sách dịch vụ kèm giá và thời lượng.",
            "Khối đặt lịch: chọn dịch vụ → chọn ngày → chọn giờ → điền thông tin.",
            "Màn hình xác nhận sau khi đặt.",
            "Thông tin liên hệ + giờ mở cửa.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nhảy vào bảo AI “làm web đặt lịch” mà chưa hình dung 4 bước.",
            "Quên màn hình xác nhận — khách bấm gửi xong không biết đã đặt được chưa.",
            "Định lưu lịch thật ngay bây giờ; việc đó để Module 7, giờ làm luồng trước.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Đề phù hợp để thực hành",
          list: [
            "Spa, salon tóc, nail.",
            "Phòng khám, nha khoa.",
            "Studio chụp ảnh.",
            "Gia sư, tư vấn 1-1.",
            "Sân cầu lông, phòng gym.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Module này làm giao diện + luồng",
          content:
            "Lịch hẹn sẽ lưu thật vào database và chống đặt trùng giờ ở Module 7. Ở đây làm luồng đặt lịch mượt và dễ dùng trước.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nói được 4 bước khách đi qua khi đặt lịch.",
            "✓ Biết website cần trang giới thiệu, khối đặt lịch, màn hình xác nhận.",
            "✓ Chọn được một đề để làm suốt module.",
          ],
        },
      ],
    },
    {
      id: "m6-b2",
      title: "Bài 6.2 — Chuẩn bị Booking Brief",
      description: "Điền dịch vụ, giá, thời lượng, giờ mở cửa — càng rõ AI càng đỡ đoán.",
      duration: "10 phút",
      videoLabel: "Điền tờ khai dịch vụ trước khi gọi AI",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có một Booking Brief điền sẵn — như tờ thực đơn của cơ sở, để AI biết chính xác bạn bán dịch vụ gì.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Tạo thư mục riêng cho dự án (vd booking-website), mở trong VS Code, mở Terminal (Ctrl + `) gõ claude — đúng như bài 2.2.",
            "Copy mẫu Booking Brief dưới đây ra một file text và điền cho đầy đủ.",
            "Điền càng cụ thể càng tốt: liệt kê hết dịch vụ, ghi rõ thời lượng và giá từng cái.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — mẫu Booking Brief",
          intro:
            "Đây là mẫu để bạn ĐIỀN (chưa dán vào AI). Copy ra file text, điền xong để đó — bài 6.3 sẽ dán nguyên bản đã điền cho AI:",
          copyLabel: "Copy mẫu Booking Brief",
          prompt: `Tên cơ sở: [tên]

Lĩnh vực (spa/salon/phòng khám/tư vấn...): [lĩnh vực]

Danh sách dịch vụ (tên | thời lượng | giá):
1.
2.
3.

Giờ mở cửa (vd: 9:00 - 20:00, nghỉ Chủ nhật): [giờ]

Mỗi khung giờ cách nhau bao lâu (vd: 30 phút hoặc 60 phút): [khoảng cách]

Khách hàng mục tiêu: [ai]

Màu chủ đạo mong muốn: [màu]

Số điện thoại/Zalo nhận lịch hẹn: [số]`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Ghi giá mà quên thời lượng — khách luôn muốn biết mất bao lâu.",
            "Bỏ trống giờ mở cửa, sau này khung giờ AI tạo ra sai bét.",
            "Liệt kê thiếu dịch vụ rồi lại nhờ AI sửa đi sửa lại từng cái.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ đã điền",
          body: [
            "Tên: Mộc An Spa.",
            "Dịch vụ: chăm sóc da 60 phút — 350.000đ; gội đầu dưỡng sinh 45 phút — 180.000đ; massage body 90 phút — 450.000đ.",
            "Giờ mở cửa: 9:00–20:00, nghỉ thứ Hai.",
            "Khung giờ: mỗi 30 phút.",
            "Màu: xanh lá nhạt, be, trắng.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Chưa cần đủ hết",
          content: "Điền tới đâu làm tới đó; thiếu dịch vụ có thể bổ sung vào file dữ liệu sau.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có thư mục riêng, đã mở VS Code + gõ claude.",
            "✓ Booking Brief điền đủ dịch vụ, giá, thời lượng.",
            "✓ Ghi rõ giờ mở cửa và khoảng cách khung giờ.",
          ],
        },
      ],
    },
    {
      id: "m6-b3",
      title: "Bài 6.3 — Bộ tài liệu cho website đặt lịch",
      description: "Dựng 6 file, trong đó DATABASE.md mô tả rõ dữ liệu lịch hẹn — chìa khóa cho Module 7.",
      duration: "15 phút",
      videoLabel: "Bộ hồ sơ dự án cho web đặt lịch",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Dựng bộ 6 file quen thuộc, nhưng lần này DATABASE.md phải mô tả rõ hai loại dữ liệu: dịch vụ và lịch hẹn.",
        },
        {
          type: "files",
          title: "Vẫn là bộ 6 file lõi (như Module 2) — điểm nhấn cho web đặt lịch",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu cơ sở và mục tiêu website." },
            { emoji: "🎯", name: "PRD.md", description: "Luồng đặt lịch 4 bước — “đề bài” chính." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Màu sắc; luôn rõ khách đang ở bước mấy." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu DỊCH VỤ + LỊCH HẸN — nền cho Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc, AI làm lần lượt." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật cho AI (nó TỰ đọc mỗi phiên)." },
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Mở file Booking Brief đã điền ở bài 6.2, copy toàn bộ nội dung.",
            "Dán prompt bên dưới vào khung chat Claude đang mở trong Terminal, thay [Dán Booking Brief...] bằng brief thật.",
            "Claude hỏi cho phép tạo file thì bấm đồng ý — nhìn cột file bên trái VS Code sẽ thấy 6 file .md hiện ra.",
            "Mở DATABASE.md đọc kỹ (xem lưu ý bên phải), thiếu trường nào bảo AI bổ sung ngay.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng cả bộ tài liệu đặt lịch",
          intro:
            "Dán vào khung chat Claude đang mở trong Terminal. Nhớ thay dòng cuối bằng Booking Brief thật đã điền ở bài 6.2:",
          copyLabel: "Copy prompt Dựng tài liệu",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Tôi muốn làm website đặt lịch bằng AI. Dựa trên Booking Brief dưới đây, hãy tạo đủ 6 file tài liệu:

- PROJECT.md — giới thiệu cơ sở và mục tiêu website
- PRD.md — mô tả rõ luồng đặt lịch 4 bước: chọn dịch vụ → chọn ngày → chọn giờ → điền thông tin → xác nhận
- UI_UX_SPEC.md — màu sắc, phong cách; các bước đặt lịch phải rõ đang ở bước mấy
- DATABASE.md — mô tả 2 loại dữ liệu: DỊCH VỤ (tên, thời lượng, giá) và LỊCH HẸN (tên khách, SĐT, dịch vụ, ngày, giờ, ghi chú, trạng thái)
- TASKS.md — chia công việc thành các bước nhỏ, đánh số thứ tự
- CLAUDE.md — luật làm việc: làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời bằng tiếng Việt, báo cáo ngắn gọn sau mỗi bước

Yêu cầu thêm:
- Danh sách dịch vụ và khung giờ để trong file dữ liệu riêng, dễ chỉnh
- Khung giờ tạo tự động theo giờ mở cửa trong brief
- Chưa cần đăng nhập, chưa cần database — Module 7 sẽ kết nối
- Ưu tiên thao tác trên điện thoại (khách đặt lịch chủ yếu bằng điện thoại)

Viết bằng tiếng Việt, đơn giản, dễ hiểu cho người không biết code.

Booking Brief:
[Dán Booking Brief đã điền ở bài 6.2 vào đây]`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nhận 6 file xong không đọc DATABASE.md, tới Module 7 mới phát hiện thiếu trường.",
            "Quên yêu cầu để dịch vụ trong file dữ liệu riêng — sau này sửa giá phải lục code.",
            "Bỏ dòng “ưu tiên điện thoại”, ra giao diện chỉ đẹp trên máy tính.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Đọc kỹ DATABASE.md",
          content:
            "Lịch hẹn phải có đủ: dịch vụ, ngày, giờ, tên, SĐT, trạng thái (chờ xác nhận / đã xác nhận / đã hủy). Thiếu trường nào, bảo AI bổ sung ngay từ giờ.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có đủ 6 file .md trong thư mục.",
            "✓ DATABASE.md có cả DỊCH VỤ và LỊCH HẸN đủ trường.",
            "✓ Dịch vụ + khung giờ nằm trong file dữ liệu riêng.",
          ],
        },
      ],
    },
    {
      id: "m6-b4",
      title: "Bài 6.4 — Trang giới thiệu và bảng dịch vụ",
      description: "Khách phải hiểu rõ dịch vụ và giá trước khi đặt.",
      duration: "15 phút",
      videoLabel: "Trang chính + bảng giá dịch vụ",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có trang chính giới thiệu cơ sở và bảng dịch vụ để khách chọn.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Bấm Shift + Tab tới khi thấy dòng “plan mode” gần ô chat, rồi bảo AI đọc tài liệu và lập kế hoạch (prompt Lập kế hoạch — bài 2.4).",
            "Kế hoạch ổn thì bấm Shift + Tab lần nữa để thoát plan mode, rồi dán prompt bên dưới để AI dựng trang chính.",
            "Xong, nhờ AI “chạy web lên cho tôi xem thử”, mở trên trình duyệt bấm thử nút “Đặt lịch ngay”.",
            "Chạy ổn thì để AI commit kèm ghi chú: xong-trang-chinh.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng trang chính",
          intro:
            "Sau khi AI đã đọc tài liệu và bạn duyệt kế hoạch (thoát plan mode), dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt Trang chính",
          prompt: `Hãy làm task tiếp theo: trang chính của website đặt lịch.

Gồm:
- Hero: tên cơ sở, mô tả ngắn, nút "Đặt lịch ngay"
- Danh sách dịch vụ: mỗi dịch vụ hiển thị tên, thời lượng, giá, nút "Chọn dịch vụ này"
- Khu giới thiệu không gian/đội ngũ (dùng ảnh placeholder)
- Giờ mở cửa và địa chỉ ở cuối trang

Dữ liệu dịch vụ lấy từ file dữ liệu riêng. Bấm "Đặt lịch ngay" hoặc "Chọn dịch vụ này" sẽ cuộn/chuyển đến khối đặt lịch.

Xong thì chạy web lên cho tôi xem thử rồi DỪNG, báo bạn đã làm gì.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Cho AI code luôn, bỏ bước Shift + Tab xem kế hoạch trước.",
            "Ghi giá mà quên thời lượng bên cạnh — khách khó quyết định.",
            "Gõ cứng dịch vụ vào giao diện thay vì lấy từ file dữ liệu riêng.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo hiển thị",
          content:
            "Ghi rõ thời lượng bên cạnh giá (vd “60 phút — 350.000đ”). Khách đặt lịch luôn muốn biết mất bao lâu.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Trang chính có hero + nút “Đặt lịch ngay”.",
            "✓ Mỗi dịch vụ hiện tên, thời lượng, giá, nút chọn.",
            "✓ Bấm nút cuộn/chuyển được tới khối đặt lịch.",
          ],
        },
      ],
    },
    {
      id: "m6-b5",
      title: "Bài 6.5 — Khối chọn ngày và khung giờ",
      description: "Trái tim của website đặt lịch: chọn ngày, chọn giờ còn trống.",
      duration: "20 phút",
      videoLabel: "Chọn ngày giờ như lấy vé xem phim",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Làm bước chọn ngày và khung giờ — giống chọn ghế xem phim: ngày nghỉ và giờ đã qua thì không cho bấm.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude đang mở trong Terminal để AI làm bước chọn ngày giờ.",
            "Xong, nhờ AI “chạy web lên cho tôi xem”, thử chọn một ngày rồi bấm một khung giờ — khung được chọn phải nổi bật rõ.",
            "Kiểm tra trên điện thoại: nút giờ phải đủ to để bấm bằng ngón tay, giờ đã qua trong hôm nay phải mờ/khóa.",
            "Chạy ổn thì để AI commit kèm ghi chú: xong-chon-ngay-gio.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bước chọn ngày giờ",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt Chọn ngày giờ",
          prompt: `Hãy làm task tiếp theo: bước chọn ngày và khung giờ.

Yêu cầu:
- Hiển thị 7 ngày tới để khách chọn (ẩn những ngày nghỉ theo brief)
- Chọn ngày xong hiện các khung giờ theo giờ mở cửa (vd 9:00, 9:30, 10:00...)
- Khung giờ đã qua trong ngày hôm nay phải bị vô hiệu hóa, không cho bấm
- Khách bấm chọn một khung giờ, khung được chọn phải nổi bật rõ
- Có nút quay lại để đổi dịch vụ
- Thao tác dễ trên điện thoại: nút giờ đủ to để bấm bằng ngón tay

Xong thì chạy web lên cho tôi xem thử rồi DỪNG, báo bạn đã làm gì.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên chặn giờ đã qua — khách đặt được lịch 8h sáng lúc đã 3h chiều.",
            "Nút giờ quá nhỏ, trên điện thoại bấm nhầm liên tục.",
            "Không có nút quay lại, khách chọn nhầm dịch vụ là kẹt luôn.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Thắc mắc hay gặp",
          items: [
            {
              question: "Giờ đã qua vẫn chọn được?",
              answer:
                "Dán vào khung chat với Claude: “Khung giờ trước thời điểm hiện tại của ngày hôm nay phải bị vô hiệu hóa, không cho bấm.”",
            },
            {
              question: "Muốn nghỉ trưa 12:00–13:30?",
              answer:
                "Bảo AI thêm khoảng nghỉ vào file dữ liệu khung giờ: “Không tạo khung giờ trong khoảng 12:00–13:30.”",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Chọn ngày hiện đúng khung giờ theo giờ mở cửa.",
            "✓ Giờ đã qua và ngày nghỉ bị khóa.",
            "✓ Khung đang chọn nổi bật, nút đủ to trên điện thoại.",
          ],
        },
      ],
    },
    {
      id: "m6-b6",
      title: "Bài 6.6 — Form xác nhận và màn hình thành công",
      description: "Chốt lịch rõ ràng để khách yên tâm đã đặt được.",
      duration: "15 phút",
      videoLabel: "Bước xác nhận: khách thấy rõ mình đã chọn gì",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Làm bước cuối: khách thấy tóm tắt trước khi gửi, và sau khi gửi biết chắc lịch đã được ghi nhận — như hóa đơn tạm tính rồi phiếu xác nhận.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude đang mở trong Terminal.",
            "Xong, nhờ AI chạy web lên, thử điền SĐT thiếu số xem có bị chặn gửi không.",
            "Điền đủ và bấm gửi, xem màn hình thành công có hiện lại đủ dịch vụ, ngày, giờ không.",
            "Chạy ổn thì để AI commit kèm ghi chú: xong-buoc-xac-nhan.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bước xác nhận đặt lịch",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt Xác nhận",
          prompt: `Hãy làm task tiếp theo: bước xác nhận đặt lịch.

Yêu cầu:
- Hiển thị tóm tắt: dịch vụ đã chọn, ngày, giờ, giá
- Form điền: họ tên, số điện thoại, ghi chú (không bắt buộc)
- Kiểm tra số điện thoại hợp lệ mới cho gửi (9–11 chữ số; bỏ qua khoảng trắng, chấp nhận đầu +84)
- Sau khi gửi, hiện màn hình thành công: "Đặt lịch thành công! Chúng tôi sẽ gọi xác nhận trong ít phút." kèm lại toàn bộ thông tin lịch hẹn
- Có nút "Đặt thêm lịch khác" để quay về đầu
- Chưa lưu database — nhưng thiết kế dữ liệu gửi đi đúng theo DATABASE.md

Xong thì chạy web lên cho tôi xem thử rồi DỪNG, báo bạn đã làm gì.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ phần tóm tắt trước khi gửi — khách không biết mình đặt gì.",
            "Không kiểm tra SĐT, nhận về những số điện thoại sai không gọi lại được.",
            "Gửi xong không có màn hình thành công, khách bấm gửi lại nhiều lần.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Hai điểm quyết định niềm tin",
          content:
            "Khách luôn nhìn thấy mình đã chọn gì trước khi bấm gửi, và sau khi gửi biết chắc lịch đã ghi nhận. Hai điểm này quyết định khách có tin tưởng hay không.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có tóm tắt dịch vụ, ngày, giờ, giá trước khi gửi.",
            "✓ SĐT sai bị chặn gửi.",
            "✓ Màn hình thành công hiện đủ thông tin + nút đặt thêm.",
          ],
        },
      ],
    },
    {
      id: "m6-b7",
      title: "Bài 6.7 — Chống đặt trùng giờ (hiểu trước, Module 7 làm thật)",
      description: "Vì sao cần database mới xử lý được trùng lịch.",
      duration: "8 phút",
      videoLabel: "Vì sao website chưa tự biết giờ nào đã có người đặt",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Hiểu vì sao website hiện tại chưa thể chống đặt trùng giờ — và Module 7 giải quyết ra sao.",
        },
        {
          type: "card",
          title: "Hiểu đơn giản (như cuốn sổ hẹn)",
          body: [
            "Hiện tại lịch hẹn chưa được lưu ở đâu cả, nên website không biết khung giờ nào đã có người đặt — giống như quán chưa có cuốn sổ ghi lịch chung.",
            "Muốn khung giờ đã đặt tự biến mất với khách sau, mọi lịch hẹn phải ghi vào một chỗ chung — đó chính là database (Supabase) ở Module 7.",
          ],
        },
        {
          type: "card",
          title: "Sau Module 7, website sẽ",
          list: [
            "Lưu mỗi lịch hẹn vào Supabase.",
            "Tự ẩn khung giờ đã có người đặt.",
            "Có trang quản trị để bạn xem và xác nhận lịch.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Tưởng website hiện tại đã tự chống trùng giờ — chưa đâu, phải có database.",
            "Cố ép AI “chống trùng giờ” ngay bây giờ khi chưa có nơi lưu — chỉ tốn công.",
            "Nghĩ chưa có database thì không nhận lịch được; thực ra vẫn nhận rồi gọi xác nhận tay.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Tạm thời vận hành thế nào?",
          content:
            "Trước khi có database, bạn nhận lịch qua form rồi gọi xác nhận thủ công. Nhiều cơ sở nhỏ vận hành như vậy giai đoạn đầu — hoàn toàn ổn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Giải thích được vì sao chưa chống trùng giờ được.",
            "✓ Biết Module 7 dùng Supabase để lưu và ẩn giờ đã đặt.",
            "✓ Yên tâm giai đoạn đầu nhận lịch + gọi xác nhận tay vẫn ổn.",
          ],
        },
      ],
    },
    {
      id: "m6-b8",
      title: "Bài 6.8 — Rà soát và bài tập cuối Module 6",
      description: "Đặt thử 3 lịch liên tiếp như khách thật, rồi tự làm một web mới.",
      duration: "12 phút",
      videoLabel: "Test luồng đặt lịch như một khách thật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Tự đóng vai khách đặt thử 3 lịch liên tiếp trên điện thoại, soát hết luồng trước khi coi như xong.",
        },
        {
          type: "card",
          title: "Làm ngay — đặt thử như khách thật",
          ordered: true,
          list: [
            "Nhờ AI “chạy web lên cho tôi xem”, mở trên điện thoại (hoặc thu nhỏ cửa sổ như màn hình điện thoại).",
            "Đặt trọn 3 lịch khác nhau, mỗi lần đi hết 4 bước tới màn hình thành công.",
            "Vừa làm vừa dò theo Checklist hoàn thiện bên dưới; chỗ nào sai thì báo lỗi theo prompt Sửa lỗi (bài 2.6).",
            "Mọi mục đạt thì để AI commit kèm ghi chú: xong-module-6.",
          ],
        },
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Chọn được dịch vụ, thấy rõ giá và thời lượng.",
            "Chọn ngày → hiện đúng khung giờ, giờ đã qua bị khóa.",
            "Bước xác nhận tóm tắt đúng những gì đã chọn.",
            "SĐT sai bị chặn.",
            "Màn hình thành công hiển thị đủ thông tin lịch.",
            "Cả luồng thao tác mượt trên điện thoại.",
          ],
        },
        {
          type: "card",
          title: "Bài tập — tự làm một web đặt lịch mới",
          body: ["Chọn một đề, đi lại trọn quy trình từ Booking Brief (bài 6.2) tới xác nhận:"],
          list: [
            "Salon tóc nam.",
            "Phòng khám nha khoa.",
            "Studio chụp ảnh em bé.",
            "Lớp yoga theo buổi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn làm được luồng đặt lịch nhiều bước — web app thực thụ đầu tiên của bạn, và là nền để Module 7 biến nó thành phần mềm có dữ liệu thật.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đặt thử trọn 3 lịch, đủ 4 bước, không kẹt chỗ nào.",
            "✓ Mọi mục trong Checklist hoàn thiện đều đạt.",
            "✓ Làm lại được một web đặt lịch mới cho đề bài tập.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Bước kế tiếp",
          content: "Qua Module 7, bạn gắn Supabase để lịch hẹn lưu thật và tự chống đặt trùng giờ.",
        },
      ],
    },
  ],
};
