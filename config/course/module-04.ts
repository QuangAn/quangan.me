import type { CourseDocModule } from "@/types/course";

/** Module 4: Tạo Website doanh nghiệp. */
export const module04: CourseDocModule = {
  id: "module-4",
  order: 4,
  title: "Module 4: Tạo Website doanh nghiệp nhiều trang",
  shortTitle: "04. Website doanh nghiệp",
  tagline: "Nhiều trang + menu điều hướng",
  description:
    "Nâng cấp từ landing page 1 trang lên website nhiều trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ — có menu điều hướng và bố cục chuyên nghiệp.",
  duration: "120–150 phút",
  level: "Trung bình",
  outcome: "Có website doanh nghiệp nhiều trang chạy được, kèm form liên hệ",
  lessons: [
    {
      id: "m4-b1",
      title: "Website doanh nghiệp khác landing page thế nào?",
      description: "Hiểu rõ sản phẩm sắp làm trước khi bắt đầu.",
      duration: "6 phút",
      videoLabel: "Landing page vs website doanh nghiệp",
      main: [
        {
          type: "card",
          title: "Khác nhau ở 3 điểm",
          list: [
            "Nhiều trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ — thay vì một trang duy nhất.",
            "Menu điều hướng: khách bấm menu để di chuyển giữa các trang.",
            "Mục tiêu: tạo uy tín và cung cấp thông tin đầy đủ về công ty, thay vì chỉ tập trung bán một thứ.",
          ],
        },
        {
          type: "card",
          title: "Cấu trúc chuẩn của website doanh nghiệp",
          ordered: true,
          list: [
            "Trang chủ: tóm tắt công ty làm gì, dịch vụ nổi bật, lý do chọn, CTA liên hệ.",
            "Giới thiệu: câu chuyện công ty, đội ngũ, giá trị.",
            "Dịch vụ: danh sách dịch vụ, mỗi dịch vụ có mô tả rõ.",
            "Liên hệ: form liên hệ, số điện thoại, địa chỉ, bản đồ.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ phù hợp để thực hành",
          list: [
            "Công ty thiết kế nội thất.",
            "Văn phòng luật / kế toán.",
            "Công ty vận chuyển.",
            "Trung tâm tiếng Anh.",
            "Xưởng may, xưởng in.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Tin tốt",
          content:
            "Quy trình làm hoàn toàn giống Module 3: brief → bộ document → AI đọc → lập kế hoạch → code từng task. Chỉ khác là website có nhiều trang hơn.",
        },
      ],
    },
    {
      id: "m4-b2",
      title: "Chuẩn bị Business Brief",
      description: "Mô tả công ty rõ ràng để AI hiểu đúng ngay từ đầu.",
      duration: "10 phút",
      videoLabel: "Điền Business Brief",
      main: [
        {
          type: "prompt",
          title: "Mẫu Business Brief",
          copyLabel: "Copy mẫu",
          prompt: `Tên công ty:

Lĩnh vực hoạt động:

Công ty cung cấp những dịch vụ nào (liệt kê 3-6 dịch vụ):
1.
2.
3.

Khách hàng mục tiêu:

Điểm mạnh/lý do khách nên chọn (3 điểm):
1.
2.
3.

Màu chủ đạo mong muốn:

Phong cách giao diện (chuyên nghiệp/thân thiện/sang trọng...):

Các trang cần có: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ

Thông tin liên hệ (SĐT/Zalo/Email/Địa chỉ):`,
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ đã điền",
          body: [
            "Tên: Nội thất Nhà Xinh Décor.",
            "Dịch vụ: thiết kế nội thất chung cư, thi công trọn gói, tư vấn cải tạo.",
            "Khách hàng: gia đình trẻ mua chung cư lần đầu.",
            "Phong cách: sang trọng, tối giản, màu be + nâu gỗ.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Mẹo",
          content:
            "Chưa có công ty thật? Hãy làm cho một công ty tưởng tượng hoặc cho người quen — đây chính là dạng dự án bạn có thể nhận làm dịch vụ sau này.",
        },
      ],
    },
    {
      id: "m4-b3",
      title: "Tạo bộ document cho website doanh nghiệp",
      description: "Bộ hồ sơ quen thuộc, thêm phần mô tả nhiều trang.",
      duration: "15 phút",
      videoLabel: "Tạo bộ document website doanh nghiệp",
      main: [
        {
          type: "prompt",
          title: "Prompt tạo đủ document",
          prompt: `Bạn là Product Manager + Senior Frontend Developer.

Tôi muốn tạo website doanh nghiệp nhiều trang bằng AI.

Dựa trên Business Brief dưới đây, hãy tạo đầy đủ 6 file document:

1. PROJECT.md — giới thiệu dự án
2. PRD.md — mô tả rõ TỪNG TRANG: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ. Mỗi trang cần liệt kê các khu vực và nội dung hiển thị
3. UI_UX_SPEC.md — màu sắc, phong cách, bố cục; menu điều hướng và footer phải giống nhau ở mọi trang
4. DATABASE.md — mô tả dữ liệu form liên hệ cần lưu sau này (họ tên, SĐT, dịch vụ quan tâm, lời nhắn)
5. TASKS.md — chia việc theo từng trang, mỗi task nhỏ và kiểm tra được
6. CLAUDE.md — luật làm việc: đọc document trước, làm từng task, không tự ý thêm tính năng

Yêu cầu chung:
- Viết tiếng Việt dễ hiểu cho người không biết code
- Website chưa cần đăng nhập, chưa cần kết nối database
- Ưu tiên hiển thị đẹp trên điện thoại

Business Brief:
[Dán Business Brief đã điền ở đây]`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Điểm mới so với Module 3",
          content:
            "PRD.md bây giờ mô tả nhiều trang. Hãy đọc lại PRD.md sau khi AI tạo — nếu thiếu trang nào hoặc thiếu khu vực nào, yêu cầu AI bổ sung trước khi code.",
        },
      ],
    },
    {
      id: "m4-b4",
      title: "AI đọc document, lập kế hoạch và dựng khung website",
      description: "Khung website = menu + footer + các trang trống.",
      duration: "15 phút",
      videoLabel: "Dựng khung website nhiều trang",
      main: [
        {
          type: "prompt",
          title: "Prompt đọc document và lập kế hoạch",
          prompt: `Hãy đọc toàn bộ document trong project (PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md, CLAUDE.md).

Sau đó:
1. Tóm tắt lại bạn hiểu dự án như thế nào
2. Hỏi lại tôi nếu còn điểm chưa rõ
3. Đề xuất kế hoạch làm từng bước

Không viết code ở bước này.`,
        },
        {
          type: "prompt",
          title: "Prompt dựng khung (sau khi duyệt kế hoạch)",
          prompt: `Hãy bắt đầu Task 1: dựng khung website.

Yêu cầu:
- Tạo đủ các trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ (nội dung tạm thời để trống)
- Menu điều hướng hiển thị ở mọi trang, bấm vào chuyển đúng trang
- Footer giống nhau ở mọi trang
- Trên điện thoại, menu thu gọn thành nút 3 gạch
- Làm xong hướng dẫn tôi chạy thử và bấm thử menu`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra khung đạt chưa",
          content:
            "Chạy thử website, bấm từng mục trên menu. Chuyển đúng trang, không lỗi, menu mobile mở/đóng được — là khung đã đạt.",
        },
      ],
    },
    {
      id: "m4-b5",
      title: "Làm Trang chủ tạo ấn tượng đầu tiên",
      description: "Trang quan trọng nhất — khách quyết định ở lại hay rời đi tại đây.",
      duration: "20 phút",
      videoLabel: "Hoàn thiện Trang chủ",
      main: [
        {
          type: "card",
          title: "Trang chủ chuẩn gồm",
          ordered: true,
          list: [
            "Hero: công ty làm gì + nút CTA (Nhận tư vấn / Xem dịch vụ).",
            "Dịch vụ nổi bật: 3–6 dịch vụ chính, mỗi dịch vụ một thẻ.",
            "Lý do chọn chúng tôi: 3–4 điểm mạnh.",
            "Con số ấn tượng hoặc dự án đã làm (nếu có).",
            "CTA cuối trang: mời khách liên hệ.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt làm Trang chủ",
          prompt: `Hãy làm tiếp task: hoàn thiện Trang chủ theo PRD.md.

Yêu cầu:
- Hero có tiêu đề rõ công ty làm gì, mô tả ngắn và nút CTA dẫn đến trang Liên hệ
- Khu dịch vụ nổi bật: mỗi dịch vụ một thẻ, có tên và mô tả ngắn
- Khu "Lý do chọn chúng tôi" với các điểm mạnh trong Business Brief
- CTA cuối trang mời khách liên hệ
- Giữ đúng màu sắc và phong cách trong UI_UX_SPEC.md
- Đẹp trên cả máy tính và điện thoại`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo nội dung",
          content:
            "Tiêu đề hero nên nói thẳng lợi ích cho khách, ví dụ “Thiết kế nội thất chung cư trọn gói — bàn giao đúng hẹn” thay vì chỉ ghi tên công ty.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Chưa có ảnh thật thì làm sao?",
              answer:
                "Yêu cầu AI dùng ảnh placeholder trước. Khi có ảnh thật, chỉ cần thay file ảnh trong thư mục — hoặc nhờ AI thay giúp.",
            },
          ],
        },
      ],
    },
    {
      id: "m4-b6",
      title: "Làm trang Giới thiệu và trang Dịch vụ",
      description: "Hai trang tạo uy tín cho doanh nghiệp.",
      duration: "20 phút",
      videoLabel: "Hoàn thiện trang Giới thiệu và Dịch vụ",
      main: [
        {
          type: "prompt",
          title: "Prompt trang Giới thiệu",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Giới thiệu theo PRD.md.

Trang gồm:
- Câu chuyện ngắn về công ty (vì sao thành lập, phục vụ ai)
- Giá trị/cam kết với khách hàng
- Đội ngũ hoặc năng lực (có thể dùng ảnh placeholder)
- CTA mời khách xem dịch vụ hoặc liên hệ

Giọng văn chuyên nghiệp, đáng tin, không phô trương.`,
        },
        {
          type: "prompt",
          title: "Prompt trang Dịch vụ",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Dịch vụ theo PRD.md.

Yêu cầu:
- Mỗi dịch vụ một khối riêng: tên, mô tả, lợi ích chính, ảnh minh họa
- Cuối mỗi dịch vụ có nút "Nhận tư vấn" dẫn đến trang Liên hệ
- Bố cục dễ quét nhanh bằng mắt, không viết đoạn văn quá dài`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Kiểm soát phạm vi",
          content:
            "Mỗi prompt chỉ làm một trang. Xem kết quả, ưng rồi mới sang trang tiếp theo — đừng gộp nhiều trang vào một lần.",
        },
      ],
    },
    {
      id: "m4-b7",
      title: "Làm trang Liên hệ với form nhận thông tin khách",
      description: "Nơi biến người xem thành khách hàng tiềm năng.",
      duration: "15 phút",
      videoLabel: "Trang Liên hệ và form",
      main: [
        {
          type: "prompt",
          title: "Prompt trang Liên hệ",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Liên hệ theo PRD.md và DATABASE.md.

Trang gồm:
- Form liên hệ: họ tên, số điện thoại, dịch vụ quan tâm (chọn từ danh sách), lời nhắn
- Sau khi bấm gửi, hiển thị: "Cảm ơn bạn, chúng tôi sẽ liên hệ trong 24 giờ"
- Thông tin liên hệ: số điện thoại, Zalo, email, địa chỉ
- Bản đồ (có thể nhúng Google Maps hoặc dùng ảnh placeholder)

Lưu ý:
- Chưa cần kết nối database — thiết kế form theo DATABASE.md để Module 7 kết nối Supabase
- Form dễ nhập trên điện thoại`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao có mục “dịch vụ quan tâm”?",
          content:
            "Khi khách chọn sẵn dịch vụ, bạn biết ngay khách cần gì và tư vấn nhanh hơn — dữ liệu này sẽ rất giá trị khi lưu vào Supabase ở Module 7.",
        },
      ],
    },
    {
      id: "m4-b8",
      title: "Rà soát toàn trang và bài tập cuối Module 4",
      description: "Kiểm tra như một khách hàng thật trước khi coi là xong.",
      duration: "15 phút",
      videoLabel: "Checklist rà soát website doanh nghiệp",
      main: [
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Menu bấm đúng trang ở cả máy tính và điện thoại.",
            "4 trang đều có nội dung, không còn khu vực trống.",
            "Màu sắc, font chữ đồng nhất giữa các trang.",
            "Mọi nút CTA đều dẫn đến trang Liên hệ.",
            "Form gửi được và hiện thông báo cảm ơn.",
            "Xem trên điện thoại không vỡ giao diện.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt rà soát tổng thể",
          prompt: `Hãy tự rà soát toàn bộ website theo checklist:
1. Menu điều hướng hoạt động đúng ở mọi trang
2. Nội dung mỗi trang khớp với PRD.md
3. Giao diện đồng nhất theo UI_UX_SPEC.md
4. Các nút CTA đều hoạt động
5. Hiển thị tốt trên điện thoại

Liệt kê những điểm chưa đạt và sửa từng điểm một. Sau khi sửa xong, tóm tắt các thay đổi.`,
        },
        {
          type: "card",
          title: "Bài tập",
          body: [
            "Tự làm một website doanh nghiệp mới từ đầu (không xem lại video) cho một trong các đề sau:",
          ],
          list: [
            "Văn phòng luật.",
            "Trung tâm ngoại ngữ.",
            "Công ty sửa chữa nhà.",
            "Phòng khám nha khoa.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn làm được website nhiều trang có menu điều hướng — đây là dạng website được thuê làm nhiều nhất, giá phổ biến từ 3–10 triệu đồng mỗi dự án.",
        },
      ],
    },
  ],
};
