import type { CourseDocModule } from "@/types/course";

/** Module 6: Tạo Website đặt lịch. */
export const module06: CourseDocModule = {
  id: "module-6",
  order: 6,
  title: "Module 6: Tạo Website đặt lịch",
  shortTitle: "06. Website đặt lịch",
  tagline: "Chọn dịch vụ → ngày giờ → xác nhận",
  description:
    "Làm website booking cho spa, salon, phòng khám, dịch vụ tư vấn: khách chọn dịch vụ, chọn ngày giờ và gửi thông tin đặt lịch.",
  duration: "120–150 phút",
  level: "Trung bình",
  outcome: "Có website đặt lịch với luồng chọn dịch vụ, ngày giờ hoàn chỉnh",
  lessons: [
    {
      id: "m6-b1",
      title: "Luồng đặt lịch hoạt động thế nào?",
      description: "Hiểu 4 bước khách trải qua khi đặt lịch.",
      duration: "6 phút",
      videoLabel: "Luồng đặt lịch từ đầu đến cuối",
      main: [
        {
          type: "card",
          title: "4 bước của khách",
          ordered: true,
          list: [
            "Chọn dịch vụ (vd: chăm sóc da 60 phút — 350.000đ).",
            "Chọn ngày và khung giờ còn trống.",
            "Điền tên + số điện thoại.",
            "Nhận màn hình xác nhận “Đặt lịch thành công”.",
          ],
        },
        {
          type: "card",
          title: "Website cần những phần nào?",
          list: [
            "Trang giới thiệu + danh sách dịch vụ kèm giá và thời lượng.",
            "Khối đặt lịch: chọn dịch vụ → chọn ngày → chọn giờ → điền thông tin.",
            "Màn hình xác nhận sau khi đặt.",
            "Thông tin liên hệ + giờ mở cửa.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ phù hợp để thực hành",
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
            "Lịch hẹn sẽ lưu thật vào database và chống đặt trùng giờ ở Module 7. Ở đây tập trung làm luồng đặt lịch mượt và dễ dùng trước.",
        },
      ],
    },
    {
      id: "m6-b2",
      title: "Chuẩn bị Booking Brief",
      description: "Dịch vụ, giá, thời lượng, giờ mở cửa — càng rõ càng tốt.",
      duration: "10 phút",
      videoLabel: "Điền Booking Brief",
      main: [
        {
          type: "prompt",
          title: "Mẫu Booking Brief",
          copyLabel: "Copy mẫu",
          prompt: `Tên cơ sở:

Lĩnh vực (spa/salon/phòng khám/tư vấn...):

Danh sách dịch vụ (tên | thời lượng | giá):
1.
2.
3.

Giờ mở cửa (vd: 9:00 - 20:00, nghỉ Chủ nhật):

Mỗi khung giờ cách nhau bao lâu (vd: 30 phút hoặc 60 phút):

Khách hàng mục tiêu:

Màu chủ đạo mong muốn:

Số điện thoại/Zalo nhận lịch hẹn:`,
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
          ],
        },
      ],
    },
    {
      id: "m6-b3",
      title: "Tạo bộ document cho website đặt lịch",
      description: "DATABASE.md mô tả rõ dữ liệu lịch hẹn — chìa khóa cho Module 7.",
      duration: "15 phút",
      videoLabel: "Tạo bộ document website đặt lịch",
      main: [
        {
          type: "prompt",
          title: "Prompt tạo đủ document",
          prompt: `Bạn là Product Manager + Senior Frontend Developer.

Tôi muốn tạo website đặt lịch bằng AI.

Dựa trên Booking Brief dưới đây, hãy tạo đầy đủ 6 file document:

1. PROJECT.md — giới thiệu cơ sở và mục tiêu website
2. PRD.md — mô tả rõ luồng đặt lịch 4 bước: chọn dịch vụ → chọn ngày → chọn giờ → điền thông tin → xác nhận
3. UI_UX_SPEC.md — màu sắc, phong cách; các bước đặt lịch phải rõ đang ở bước mấy
4. DATABASE.md — mô tả 2 loại dữ liệu: DỊCH VỤ (tên, thời lượng, giá) và LỊCH HẸN (tên khách, SĐT, dịch vụ, ngày, giờ, ghi chú, trạng thái)
5. TASKS.md — chia việc từng bước nhỏ
6. CLAUDE.md — luật làm việc cho AI

Yêu cầu:
- Danh sách dịch vụ và khung giờ để trong file dữ liệu riêng, dễ chỉnh
- Khung giờ tạo tự động theo giờ mở cửa trong brief
- Chưa cần đăng nhập, chưa cần database — Module 7 sẽ kết nối
- Ưu tiên thao tác trên điện thoại (khách đặt lịch chủ yếu bằng điện thoại)

Booking Brief:
[Dán Booking Brief đã điền ở đây]`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Đọc kỹ DATABASE.md sau khi AI tạo",
          content:
            "Lịch hẹn phải có đủ: dịch vụ, ngày, giờ, tên, SĐT, trạng thái (chờ xác nhận / đã xác nhận / đã hủy). Thiếu trường nào, yêu cầu AI bổ sung ngay từ giờ.",
        },
      ],
    },
    {
      id: "m6-b4",
      title: "Dựng trang giới thiệu và bảng dịch vụ",
      description: "Khách phải hiểu rõ dịch vụ và giá trước khi đặt.",
      duration: "15 phút",
      videoLabel: "Trang giới thiệu + bảng giá dịch vụ",
      main: [
        {
          type: "prompt",
          title: "Prompt dựng trang chính",
          intro: "Sau khi AI đọc document và bạn duyệt kế hoạch:",
          prompt: `Hãy làm task tiếp theo: trang chính của website đặt lịch.

Gồm:
- Hero: tên cơ sở, mô tả ngắn, nút "Đặt lịch ngay"
- Danh sách dịch vụ: mỗi dịch vụ hiển thị tên, thời lượng, giá, nút "Chọn dịch vụ này"
- Khu giới thiệu không gian/đội ngũ (ảnh placeholder)
- Giờ mở cửa và địa chỉ ở cuối trang

Dữ liệu dịch vụ lấy từ file dữ liệu riêng. Bấm "Đặt lịch ngay" hoặc "Chọn dịch vụ này" sẽ cuộn/chuyển đến khối đặt lịch.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo",
          content:
            "Ghi rõ thời lượng bên cạnh giá (vd “60 phút — 350.000đ”). Khách đặt lịch luôn muốn biết mất bao lâu.",
        },
      ],
    },
    {
      id: "m6-b5",
      title: "Làm khối chọn ngày và khung giờ",
      description: "Trái tim của website đặt lịch.",
      duration: "20 phút",
      videoLabel: "Giao diện chọn ngày giờ",
      main: [
        {
          type: "prompt",
          title: "Prompt làm bước chọn ngày giờ",
          prompt: `Hãy làm task tiếp theo: bước chọn ngày và khung giờ.

Yêu cầu:
- Hiển thị 7 ngày tới để khách chọn (ẩn những ngày nghỉ theo brief)
- Chọn ngày xong hiện các khung giờ theo giờ mở cửa (vd 9:00, 9:30, 10:00...)
- Khung giờ đã qua trong ngày hôm nay phải bị ẩn hoặc làm mờ
- Khách bấm chọn một khung giờ, khung được chọn phải nổi bật rõ
- Có nút quay lại để đổi dịch vụ
- Thao tác dễ trên điện thoại: nút giờ đủ to để bấm bằng ngón tay`,
        },
      ],
      aside: [
        {
          type: "faq",
          items: [
            {
              question: "Giờ đã qua vẫn chọn được?",
              answer:
                "Nói với AI: “Khung giờ trước thời điểm hiện tại của ngày hôm nay phải bị vô hiệu hóa, không cho bấm.”",
            },
            {
              question: "Muốn nghỉ trưa 12:00–13:30?",
              answer:
                "Yêu cầu AI thêm khoảng nghỉ vào file dữ liệu khung giờ: “Không tạo khung giờ trong khoảng 12:00–13:30.”",
            },
          ],
        },
      ],
    },
    {
      id: "m6-b6",
      title: "Form xác nhận và màn hình đặt lịch thành công",
      description: "Chốt lịch rõ ràng để khách yên tâm.",
      duration: "15 phút",
      videoLabel: "Hoàn thiện bước xác nhận",
      main: [
        {
          type: "prompt",
          title: "Prompt bước xác nhận",
          prompt: `Hãy làm task tiếp theo: bước xác nhận đặt lịch.

Yêu cầu:
- Hiển thị tóm tắt: dịch vụ đã chọn, ngày, giờ, giá
- Form điền: họ tên, số điện thoại, ghi chú (không bắt buộc)
- Kiểm tra SĐT đủ 10 số mới cho gửi
- Sau khi gửi, hiện màn hình thành công: "Đặt lịch thành công! Chúng tôi sẽ gọi xác nhận trong ít phút." kèm lại toàn bộ thông tin lịch hẹn
- Có nút "Đặt thêm lịch khác" để quay về đầu
- Chưa lưu database — thiết kế dữ liệu gửi đi đúng theo DATABASE.md`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Trải nghiệm tốt là gì?",
          content:
            "Khách luôn nhìn thấy mình đã chọn gì trước khi bấm gửi, và sau khi gửi biết chắc lịch đã được ghi nhận. Đó là hai điểm quyết định khách có tin tưởng hay không.",
        },
      ],
    },
    {
      id: "m6-b7",
      title: "Chống đặt trùng giờ — hiểu trước để Module 7 làm thật",
      description: "Vì sao cần database mới xử lý được trùng lịch.",
      duration: "8 phút",
      videoLabel: "Vì sao cần database để chống trùng giờ?",
      main: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Hiện tại lịch hẹn chưa được lưu ở đâu cả, nên website không biết khung giờ nào đã có người đặt.",
            "Muốn khung giờ đã đặt tự động biến mất với khách sau, mọi lịch hẹn phải được lưu vào một chỗ chung — đó chính là database (Supabase) ở Module 7.",
          ],
        },
        {
          type: "card",
          title: "Sau Module 7, website sẽ",
          list: [
            "Lưu mỗi lịch hẹn vào Supabase.",
            "Ẩn khung giờ đã có người đặt.",
            "Có trang quản trị để bạn xem và xác nhận lịch.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Tạm thời vận hành thế nào?",
          content:
            "Trước khi có database, bạn có thể nhận lịch qua form + gọi xác nhận thủ công. Nhiều cơ sở nhỏ vận hành như vậy giai đoạn đầu — hoàn toàn ổn.",
        },
      ],
    },
    {
      id: "m6-b8",
      title: "Rà soát và bài tập cuối Module 6",
      description: "Đặt thử 3 lịch liên tiếp như khách thật.",
      duration: "12 phút",
      videoLabel: "Test luồng đặt lịch",
      main: [
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
          title: "Bài tập",
          body: ["Tự làm một website đặt lịch mới cho một trong các đề:"],
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
            "Bạn làm được luồng đặt lịch nhiều bước — dạng web app thực thụ đầu tiên của bạn, và là nền tảng để Module 7 biến nó thành phần mềm có dữ liệu thật.",
        },
      ],
    },
  ],
};
