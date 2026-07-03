import type { CourseDocModule } from "@/types/course";

/** Module 2: Cách làm việc với AI để tạo website. */
export const module02: CourseDocModule = {
  id: "module-2",
  order: 2,
  title: "Module 2: Cách làm việc với AI để tạo website",
  shortTitle: "02. Làm việc với AI",
  tagline: "Bộ hồ sơ dự án + prompt mẫu",
  description:
    "Học cách giao việc cho AI: tạo bộ hồ sơ dự án (document) trước, để AI hiểu đúng và code đúng ngay từ đầu.",
  outcome: "Có bộ document đầu tiên và biết quy trình giao việc cho AI",
  lessons: [
    {
      id: "m2-b1",
      title: "AI không tự biết bạn muốn gì",
      description: "Muốn AI làm đúng, bạn phải giao việc rõ.",
      duration: "5 phút",
      videoLabel: "Vì sao AI hay làm sai?",
      main: [
        {
          type: "card",
          title: "Ví dụ dễ hiểu",
          body: [
            "Nếu bạn nói với thợ xây: “Anh xây cho em một cái nhà”, họ sẽ không biết nhà mấy tầng, mấy phòng, màu gì, phong cách nào.",
            "AI cũng vậy. Nếu bạn chỉ nói “làm website cho tôi”, AI sẽ phải tự đoán — và thường đoán sai ý bạn.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Quy tắc",
          content: "AI làm tốt hơn khi có mục tiêu rõ, ví dụ rõ và tài liệu rõ.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Người học cần nhớ",
          list: [
            "Không cần prompt dài.",
            "Nhưng prompt phải rõ.",
            "Không giao quá nhiều việc trong một lần.",
          ],
        },
      ],
    },
    {
      id: "m2-b2",
      title: "Bộ hồ sơ dự án cho AI",
      description: "Thay vì thuật ngữ khó hiểu, hãy coi đây là bản mô tả dự án.",
      duration: "8 phút",
      videoLabel: "Bộ hồ sơ dự án gồm những gì?",
      main: [
        {
          type: "files",
          title: "Chỉ cần 5–6 file ban đầu",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án." },
            { emoji: "🎯", name: "PRD.md", description: "Website cần làm gì." },
            { emoji: "🎨", name: "UI_UX.md", description: "Giao diện nhìn như thế nào." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc AI cần làm." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật làm việc cho AI." },
            { emoji: "🗂", name: "DATA.md", description: "Chỉ dùng khi cần lưu dữ liệu." },
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Không cần tạo tất cả ngay",
          content:
            "Với landing page đơn giản, chỉ cần PROJECT.md, UI_UX.md, TASKS.md và CLAUDE.md là đủ để bắt đầu.",
        },
      ],
    },
    {
      id: "m2-b3",
      title: "Tạo thư mục project đầu tiên",
      description: "Ví dụ thực hành: website quán cafe.",
      duration: "7 phút",
      videoLabel: "Tạo thư mục và mở bằng VS Code",
      main: [
        {
          type: "card",
          title: "Các bước",
          ordered: true,
          list: [
            "Ra màn hình Desktop.",
            "Tạo thư mục mới tên cafe-website.",
            "Mở VS Code.",
            "Chọn File → Open Folder.",
            "Chọn thư mục cafe-website.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Kết quả",
          body: [
            "VS Code đang mở đúng thư mục dự án. Đây là nơi AI sẽ tạo các file website.",
          ],
        },
      ],
    },
    {
      id: "m2-b4",
      title: "Tạo PROJECT.md",
      description: "File giới thiệu dự án cho AI.",
      duration: "8 phút",
      videoLabel: "Tạo file PROJECT.md",
      main: [
        {
          type: "card",
          title: "PROJECT.md cần ghi gì?",
          list: [
            "Dự án là website gì.",
            "Làm cho ai xem.",
            "Mục tiêu chính là gì.",
            "Phong cách mong muốn.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt tạo file",
          prompt: `Hãy tạo file PROJECT.md cho dự án website quán cafe.

Thông tin:
- Website cho một quán cafe nhỏ
- Mục tiêu: giới thiệu quán, menu, hình ảnh, thông tin đặt bàn
- Khách hàng: người trẻ, dân văn phòng, gia đình
- Phong cách: ấm áp, hiện đại, dễ xem trên điện thoại

Hãy viết nội dung đơn giản, dễ hiểu cho người không biết code.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Hiểu đơn giản",
          content:
            "PROJECT.md giống tờ giấy giới thiệu dự án cho AI đọc trước khi bắt tay vào làm.",
        },
      ],
    },
    {
      id: "m2-b5",
      title: "Tạo PRD.md",
      description: "File ghi website cần có những phần nào.",
      duration: "8 phút",
      videoLabel: "Tạo PRD.md",
      main: [
        {
          type: "card",
          title: "PRD.md nên có",
          list: [
            "Các trang cần làm.",
            "Các khu vực trên từng trang.",
            "Nút bấm cần có.",
            "Thông tin khách cần nhìn thấy.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt tạo file",
          prompt: `Hãy tạo file PRD.md cho website quán cafe.

Website cần có:
- Trang chủ
- Khu giới thiệu quán
- Menu đồ uống
- Gallery hình ảnh
- Form đặt bàn
- Thông tin liên hệ

Hãy viết rõ từng phần cần hiển thị, nhưng dùng ngôn ngữ dễ hiểu cho người mới.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Hiểu đơn giản",
          content: "PRD.md trả lời câu hỏi: “Website này cần làm được gì?”",
        },
      ],
    },
    {
      id: "m2-b6",
      title: "Tạo UI_UX.md",
      description: "File mô tả giao diện website.",
      duration: "8 phút",
      videoLabel: "Tạo UI_UX.md",
      main: [
        {
          type: "card",
          title: "UI/UX cần ghi gì?",
          list: [
            "Màu sắc chủ đạo.",
            "Cảm giác giao diện mang lại.",
            "Bố cục từng phần.",
            "Ưu tiên hiển thị trên điện thoại.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt tạo file",
          prompt: `Hãy tạo file UI_UX.md cho website quán cafe.

Yêu cầu giao diện:
- Phong cách hiện đại, ấm áp
- Màu nâu, kem, trắng
- Dễ đọc trên điện thoại
- Nút đặt bàn nổi bật
- Hình ảnh đồ uống cần đẹp và rõ

Hãy mô tả bố cục từng phần để AI có thể code đúng hơn.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Hiểu đơn giản",
          content:
            "UI_UX.md trả lời câu hỏi: “Website nhìn như thế nào và dùng có dễ không?”",
        },
      ],
    },
    {
      id: "m2-b7",
      title: "Tạo TASKS.md và CLAUDE.md",
      description: "Danh sách việc cần làm và luật làm việc cho AI.",
      duration: "10 phút",
      videoLabel: "Tạo TASKS.md và CLAUDE.md",
      main: [
        {
          type: "prompt",
          title: "TASKS.md — giúp AI làm từng bước, không làm lung tung",
          prompt: `Hãy tạo file TASKS.md cho website quán cafe.
Chia công việc thành từng bước nhỏ:
1. Tạo cấu trúc file
2. Tạo giao diện trang chủ
3. Tạo menu đồ uống
4. Tạo gallery
5. Tạo form đặt bàn
6. Tối ưu mobile
7. Kiểm tra lỗi`,
        },
        {
          type: "prompt",
          title: "CLAUDE.md — giống nội quy làm việc cho AI",
          prompt: `Hãy tạo file CLAUDE.md cho dự án này.
Yêu cầu AI:
- Luôn đọc PROJECT.md, PRD.md, UI_UX.md, TASKS.md trước khi code
- Làm từng bước nhỏ
- Không tự ý thêm tính năng ngoài tài liệu
- Sau mỗi bước phải giải thích đã làm gì
- Code sạch, dễ sửa, tối ưu mobile`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Quan trọng",
          content:
            "TASKS.md giúp AI biết làm theo thứ tự. CLAUDE.md giúp AI giữ kỷ luật khi code.",
        },
      ],
    },
    {
      id: "m2-b8",
      title: "Prompt để AI bắt đầu code",
      description: "Sau khi có document, mới yêu cầu AI tạo website.",
      duration: "8 phút",
      videoLabel: "Yêu cầu AI đọc document và bắt đầu code",
      main: [
        {
          type: "prompt",
          title: "Prompt bắt đầu",
          prompt: `Hãy đọc toàn bộ các file document trong project:
- PROJECT.md
- PRD.md
- UI_UX.md
- TASKS.md
- CLAUDE.md

Sau đó hãy tóm tắt lại bạn hiểu dự án như thế nào.
Chưa code vội.
Sau khi tôi xác nhận, bạn mới bắt đầu làm bước 1 trong TASKS.md.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Vì sao chưa code ngay?",
          content:
            "Để kiểm tra AI đã hiểu đúng chưa. Nếu hiểu sai, sửa trước khi code sẽ tiết kiệm rất nhiều thời gian.",
        },
      ],
    },
    {
      id: "m2-b9",
      title: "Khi AI làm sai thì sửa thế nào?",
      description: "Không xóa hết, không làm lại từ đầu.",
      duration: "7 phút",
      videoLabel: "Cách yêu cầu AI sửa lỗi",
      main: [
        {
          type: "prompt",
          title: "Cách nói với AI",
          prompt: `Phần này đang chưa đúng:
[Mô tả lỗi hoặc dán ảnh chụp màn hình]

Tôi muốn sửa thành:
[Mô tả mong muốn]

Hãy chỉ sửa đúng phần này, không thay đổi các phần khác.`,
        },
      ],
      aside: [
        {
          type: "card",
          title: "Nguyên tắc",
          list: [
            "Nói rõ phần sai.",
            "Nói rõ muốn sửa thành gì.",
            "Yêu cầu AI không sửa lan sang phần khác.",
          ],
        },
      ],
    },
  ],
};
