import type { CourseDocModule } from "@/types/course";

/** Module 3: Có Landing Page đầu tiên sau 30 phút — chạy đúng quy trình Module 2, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module03: CourseDocModule = {
  id: "module-3",
  order: 3,
  title: "Module 3: Có Landing Page đầu tiên sau 30 phút",
  shortTitle: "03. Landing Page đầu tiên",
  tagline: "Từ ý tưởng → tài liệu → chạy được thật",
  description:
    "Chạy đúng quy trình đã học ở Module 2 cho một dự án thật: brief → 6 file tài liệu → AI đọc & lập kế hoạch → code từng phần → chạy lên xem, chỉnh giao diện, thêm form, sửa lỗi. Cuối module bạn có landing page chạy được trên máy. Mỗi bài kèm 1 prompt copy dùng ngay.",
  outcome:
    "Có một landing page thật chạy được trên máy: hero rõ ràng, lợi ích, dịch vụ, form liên hệ, đẹp trên điện thoại — và thành thạo quy trình để tự làm trang thứ hai.",
  lessons: [
    {
      id: "m3-b1",
      title: "Bài 3.1 — Landing Page là gì?",
      description: "Hiểu mình sắp làm ra cái gì, trước khi bắt tay.",
      duration: "5 phút",
      videoLabel: "Một trang, một mục tiêu — vậy thôi",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hiểu landing page chỉ là MỘT trang gọn, hướng khách tới MỘT hành động.",
        },
        {
          type: "card",
          title: "Landing page trong một câu",
          body: [
            "Giống một tờ rơi đẹp trên mạng: khách vào, đọc nhanh, rồi bấm một nút. Không có menu chằng chịt, không nhiều trang con — chỉ một trang lo đúng một việc.",
          ],
          list: [
            "Khách vào trang.",
            "Đọc thông tin chính, hiểu lợi ích.",
            "Bấm nút: gọi, nhắn Zalo, đăng ký hoặc mua.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nghĩ phải làm cả website nhiều trang mới “xịn” — landing một trang là đủ bán.",
            "Nhồi mọi thứ vào trang, khách đọc mệt rồi thoát.",
            "Quên đặt một nút hành động rõ ràng — khách thích mà không biết bấm đâu.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Vài landing page quen thuộc",
          list: [
            "Trang giới thiệu một khóa học.",
            "Trang đặt lịch spa.",
            "Trang bán một sản phẩm mỹ phẩm.",
            "Trang giới thiệu quán cafe + đặt bàn.",
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nói được landing page là một trang, một mục tiêu.",
            "✓ Hình dung được trang mình muốn hướng khách làm gì.",
          ],
        },
      ],
    },
    {
      id: "m3-b2",
      title: "Bài 3.2 — Chuẩn bị ý tưởng (Landing Brief)",
      description: "Điền brief ngắn để AI khỏi phải đoán trang của bạn.",
      duration: "8 phút",
      videoLabel: "Điền brief 5 phút, đỡ sửa cả buổi",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một Landing Brief điền sẵn để dán cho AI ở bài sau.",
        },
        {
          type: "card",
          title: "Landing Brief là gì",
          body: [
            "Là bản khai ngắn: trang làm cho ai, bán gì, màu gì, khách bấm vào đâu. Nhớ bài 2.5 ở Module 2 — bạn nói rõ tới đâu, AI làm trúng tới đó.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Mở Notepad (hoặc Ghi chú), copy mẫu ở prompt bên dưới vào.",
            "Điền từng dòng cho dự án của bạn — thiếu ý nào để trống cũng được.",
            "Lưu lại, lát nữa dán nguyên mẫu đã điền cho AI ở bài 3.4.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — mẫu Landing Brief để điền",
          intro:
            "Đây là mẫu để BẠN điền tay (chưa gửi AI vội). Copy vào Notepad rồi điền vào sau mỗi dấu hai chấm:",
          copyLabel: "Copy mẫu Landing Brief",
          prompt: `Tên landing page:
Lĩnh vực:
Sản phẩm / dịch vụ chính:
Khách hàng mục tiêu:
Màu chủ đạo mong muốn:
Phong cách giao diện (vd: hiện đại, ấm cúng, tối giản):
Nút kêu gọi hành động (vd: Đặt bàn, Đăng ký tư vấn):
Số điện thoại / Zalo:
Địa chỉ / Facebook (nếu có):
3 lợi ích chính muốn nhấn mạnh:
1.
2.
3.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ trống gần hết rồi mong AI tự nghĩ ra — nó sẽ đoán, thường trật.",
            "Viết dài dòng cả đoạn văn — brief cần gọn, đúng ý là được.",
            "Chọn đề quá khó ở lần đầu; nên bắt đầu với cafe, spa, shop hoặc khóa học cho dễ hình dung.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ đã điền",
          list: [
            "Tên: Landing page quán cafe Mây.",
            "Khách: dân văn phòng, người trẻ, gia đình.",
            "Mục tiêu: xem menu và đặt bàn qua Zalo.",
            "Màu: nâu, kem, xanh lá nhẹ.",
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có file brief đã điền, lưu sẵn trong Notepad.",
            "✓ Chọn được một đề dễ hình dung để làm.",
          ],
        },
      ],
    },
    {
      id: "m3-b3",
      title: "Bài 3.3 — Tạo thư mục dự án & mở Claude",
      description: "Một dự án một thư mục, mở trong VS Code, bật Claude ở Terminal.",
      duration: "6 phút",
      videoLabel: "Dọn chỗ làm việc trước khi gọi AI",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có thư mục riêng cho landing page, đã mở trong VS Code và bật Claude sẵn.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Ra Desktop, tạo một thư mục mới, đặt tên gọn không dấu — vd landing-cafe.",
            "Mở VS Code → File → Open Folder → chọn thư mục landing-cafe.",
            "Hỏi có tin thư mục không → bấm “Yes, I trust the authors”.",
            "Mở Terminal (Ctrl + `), gõ claude rồi Enter — khung chat với Claude hiện ra ngay trong Terminal.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Mở cả Desktop hoặc ổ đĩa thay vì đúng một thư mục — AI lẫn file.",
            "Đặt tên thư mục có dấu hoặc khoảng trắng, dễ sinh lỗi vặt.",
            "Để chung nhiều dự án một thư mục rồi rối, không biết file nào của trang nào.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao mỗi dự án một thư mục?",
          content:
            "Như mỗi món hồ sơ để một cặp riêng: AI mở đúng cặp, không lôi nhầm giấy tờ dự án khác vào.",
        },
        {
          type: "faq",
          title: "Thắc mắc hay gặp",
          items: [
            {
              question: "Không thấy Terminal trong VS Code?",
              answer:
                "Nhìn menu trên cùng → Terminal → New Terminal. Hoặc bấm Ctrl + ` (phím dấu huyền, ngay dưới phím Esc).",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có thư mục riêng tên gọn, không dấu.",
            "✓ VS Code đang mở đúng thư mục đó.",
            "✓ Gõ claude trong Terminal, thấy khung chat với Claude.",
          ],
        },
      ],
    },
    {
      id: "m3-b4",
      title: "Bài 3.4 — Tạo bộ 6 file tài liệu",
      description: "Dán brief cho AI dựng cả bộ hồ sơ — đừng nhảy thẳng vào code.",
      duration: "15 phút",
      videoLabel: "Một prompt ra đủ 6 file tài liệu",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có đủ 6 file tài liệu cho landing page, tạo bằng một prompt.",
        },
        {
          type: "files",
          title: "Bộ 6 file — giống hệt Module 2, giờ dùng cho trang thật",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án: làm cho ai, mục tiêu gì." },
            { emoji: "🎯", name: "PRD.md", description: "Trang gồm phần nào: hero, lợi ích, dịch vụ, form…" },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Màu sắc, phong cách, bố cục." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu form cần lưu — dọn sẵn cho Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc, AI làm lần lượt." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật cho AI (nó TỰ đọc mỗi phiên)." },
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Mở lại brief đã điền ở bài 3.2, copy toàn bộ.",
            "Dán prompt bên dưới vào khung chat Claude đang mở trong Terminal, thay chỗ [Dán Landing Brief…] bằng brief của bạn.",
            "Claude hỏi cho phép tạo file thì bấm đồng ý; nhìn cột file bên trái VS Code sẽ thấy lần lượt 6 file .md hiện ra.",
            "Mở lướt từng file, chỗ nào chưa đúng ý thì bảo AI: “sửa PRD.md, thêm phần…”.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng cả bộ tài liệu",
          intro: "Dán vào khung chat Claude đang mở trong Terminal, nhớ thay phần Landing Brief ở cuối:",
          copyLabel: "Copy prompt tạo tài liệu",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Tôi muốn làm một landing page đầu tiên bằng AI. Dựa trên Landing Brief dưới đây, hãy tạo đủ 6 file tài liệu cho dự án:

- PROJECT.md — giới thiệu dự án: làm cho ai, mục tiêu gì
- PRD.md — các phần landing page cần có (hero, lợi ích, dịch vụ, bằng chứng, form…)
- UI_UX_SPEC.md — màu sắc, phong cách, bố cục
- DATABASE.md — nếu có form thì mô tả dữ liệu cần lưu sau này (họ tên, SĐT, nhu cầu)
- TASKS.md — chia việc thành các bước nhỏ, đánh số thứ tự
- CLAUDE.md — luật làm việc: làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời bằng tiếng Việt, báo cáo ngắn sau mỗi bước

Yêu cầu: viết tiếng Việt dễ hiểu cho người không biết code; landing page chưa cần đăng nhập, chưa cần database phức tạp.

Landing Brief:
[Dán Landing Brief đã điền ở bài 3.2 vào đây]`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ bước tài liệu, bảo AI code luôn cho “nhanh”.",
            "Bỏ DATABASE.md vì “landing lưu gì đâu” — rồi Module 7 hụt hẫng.",
            "Nhận đủ 6 file mà không đọc lại, tài liệu không đúng ý mình.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Bạn không phải tự gõ file",
          content:
            "AI tạo hết. Nếu Claude in nội dung ra chat thay vì tạo file, cứ bảo: “tạo giúp tôi thành file .md trong thư mục dự án”.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Cột file bên trái có đủ 6 file .md.",
            "✓ Đọc lướt, chỉnh chỗ chưa đúng ý.",
            "✓ Không tự thêm file lạ ngoài 6 file.",
          ],
        },
      ],
    },
    {
      id: "m3-b5",
      title: "Bài 3.5 — Mỗi file tài liệu để làm gì?",
      description: "Hiểu nhanh vai trò 6 file bằng ví dụ xây nhà.",
      duration: "10 phút",
      videoLabel: "6 file = bản thiết kế trước khi xây",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Nói được mỗi file trong 6 file lo phần nào, để sau này biết sửa file nào.",
        },
        {
          type: "card",
          title: "6 file, hiểu qua chuyện xây nhà",
          body: [
            "Bộ tài liệu giống bản thiết kế trước khi xây: có bản vẽ thì thợ (AI) làm đúng hơn, muốn đổi chỗ nào cũng biết lật đúng trang.",
          ],
          list: [
            "PROJECT.md — tờ giới thiệu: nhà này xây cho ai, để làm gì.",
            "PRD.md — danh sách phòng: trang cần hero, lợi ích, dịch vụ, form…",
            "UI_UX_SPEC.md — phong cách nội thất: màu gì, cảm giác nào, bố cục ra sao.",
            "DATABASE.md — kho chứa đồ: nếu có form thì sau này lưu họ tên, SĐT, nhu cầu.",
            "TASKS.md — trình tự thi công: làm phần nào trước, phần nào sau.",
            "CLAUDE.md — nội quy công trường: bám tài liệu, chưa rõ thì hỏi, không tự phá cấu trúc.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Học thuộc thuật ngữ mà quên: chỉ cần biết file nào lo việc gì.",
            "Coi DATABASE.md là thừa ở landing — nó dọn đường cho Module 7.",
            "Không đụng lại tài liệu khi đổi ý, để code một đằng tài liệu một nẻo.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Thắc mắc hay gặp",
          items: [
            {
              question: "Landing page có cần DATABASE.md không?",
              answer:
                "Có, nhưng viết đơn giản — chỉ liệt kê dữ liệu form sẽ lưu sau này (họ tên, SĐT, nhu cầu). Module này chưa kết nối Supabase.",
            },
            {
              question: "Có cần API không?",
              answer:
                "Module 3 chưa cần. Người mới chỉ cần landing page chạy được và form hiển thị được là đạt.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nói được vai trò từng file bằng lời của mình.",
            "✓ Biết muốn đổi màu thì sửa UI_UX_SPEC.md, đổi phần thì sửa PRD.md.",
          ],
        },
      ],
    },
    {
      id: "m3-b6",
      title: "Bài 3.6 — Cho AI đọc tài liệu trước khi code",
      description: "Bắt AI đọc và tóm tắt để chắc nó hiểu đúng dự án.",
      duration: "8 phút",
      videoLabel: "Đọc trước, hiểu đúng, rồi mới bàn kế hoạch",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "AI đọc 5 file tài liệu và tóm tắt đúng dự án trước khi làm bất cứ gì.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Bấm Shift + Tab tới khi thấy dòng “plan mode” gần ô chat (chế độ AI chỉ đọc & đề xuất, chưa đụng file).",
            "Dán prompt bên dưới vào khung chat Claude trong Terminal.",
            "Đọc bản tóm tắt AI đưa ra: nếu tóm đúng ý bạn thì qua bài 3.7; sai chỗ nào bảo nó sửa lại hiểu biết ngay.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bảo AI đọc & tóm tắt",
          intro: "Đang ở plan mode, dán vào khung chat Claude:",
          copyLabel: "Copy prompt đọc tài liệu",
          prompt: `Hãy đọc các file tài liệu trong dự án: PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md. (CLAUDE.md bạn tự đọc rồi, không cần liệt kê.)

Sau đó làm 3 việc:
1. Tóm tắt lại bạn hiểu dự án này thế nào — cho tôi chắc bạn hiểu đúng.
2. Chỉ ra điểm nào còn chưa rõ, cần hỏi lại tôi.
3. Đề xuất kế hoạch làm theo từng bước, đúng thứ tự trong TASKS.md.

CHƯA viết code. Trình xong thì dừng chờ tôi duyệt.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Cho AI vừa đọc vừa code luôn — mất kiểm soát ngay từ đầu.",
            "Lướt qua bản tóm tắt cho xong, không kiểm nó hiểu đúng chưa.",
            "Bỏ qua câu AI hỏi lại, để nó tự đoán phần còn thiếu.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Khi nào được sang bài sau?",
          content:
            "Khi AI tóm đúng mục tiêu, đúng các phần của trang, và không còn câu hỏi quan trọng nào.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đã bật plan mode (Shift + Tab).",
            "✓ AI tóm tắt đúng dự án của bạn.",
            "✓ Đã trả lời hết câu AI hỏi lại.",
          ],
        },
      ],
    },
    {
      id: "m3-b7",
      title: "Bài 3.7 — Duyệt kế hoạch từng bước",
      description: "Xem kế hoạch AI đề xuất, chia nhỏ để làm không bị choáng.",
      duration: "7 phút",
      videoLabel: "Một kế hoạch dễ thở cho người mới",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một kế hoạch chia nhỏ, mỗi bước một việc, kiểm tra được ngay.",
        },
        {
          type: "card",
          title: "Kế hoạch tốt thường gồm",
          ordered: true,
          list: [
            "Dựng cấu trúc dự án.",
            "Trang trắng chạy được đã.",
            "Thêm hero (phần đầu trang).",
            "Thêm lợi ích / sản phẩm / dịch vụ.",
            "Thêm bằng chứng (feedback, ảnh thật).",
            "Thêm form liên hệ.",
            "Tối ưu cho điện thoại.",
            "Chạy thử và sửa lỗi.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Đọc kế hoạch AI đưa; bước nào gộp nhiều việc quá, thấy khó theo thì bảo chia nhỏ.",
            "Nếu kế hoạch ổn: bấm Shift + Tab lần nữa để thoát plan mode, rồi sang bài 3.8 giao Task 1.",
            "Nếu chưa ổn: dán prompt bên dưới để AI chia lại cho dễ thở.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — chia nhỏ kế hoạch cho dễ theo",
          intro: "Kế hoạch còn to với người mới thì dán vào khung chat Claude:",
          copyLabel: "Copy prompt chia nhỏ kế hoạch",
          prompt: `Kế hoạch này hơi to với người mới. Hãy chia lại TASKS trong TASKS.md thành các bước nhỏ hơn:
- Mỗi bước chỉ làm MỘT việc rõ ràng.
- Sau mỗi bước, ghi kèm cách tôi tự kiểm tra kết quả.

Cập nhật lại TASKS.md rồi trình cho tôi xem, CHƯA code.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Cho code ngay, không xem kế hoạch — sai thì đập đi làm lại.",
            "Ôm một bước quá to rồi rối, không biết hỏng từ đâu.",
            "Không nhờ AI ghi cách kiểm tra, làm xong chẳng biết đã đạt chưa.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Esc để dừng",
          content:
            "Đang plan mode mà thấy AI đi lạc hướng, bấm Esc dừng ngay, khỏi chờ nó trình xong thứ bạn sẽ bỏ.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Kế hoạch chia nhỏ, mỗi bước một việc.",
            "✓ Mỗi bước có cách kiểm tra.",
            "✓ Đã thoát plan mode, sẵn sàng giao Task 1.",
          ],
        },
      ],
    },
    {
      id: "m3-b8",
      title: "Bài 3.8 — Cho AI làm Task 1",
      description: "Bắt đầu code, nhưng chỉ đúng một task và có kiểm tra.",
      duration: "12 phút",
      videoLabel: "Task đầu tiên — chỉ một việc thôi",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "AI làm xong Task 1 trong TASKS.md, có file website đầu tiên trong dự án.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Đã thoát plan mode (bài 3.7) — giờ AI được phép sửa file.",
            "Dán prompt bên dưới vào khung chat Claude trong Terminal.",
            "AI xin phép tạo/sửa file thì bấm đồng ý; xong nó báo đã tạo file nào và cách chạy thử (làm ở bài 3.9).",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bắt đầu Task 1",
          intro: "Kế hoạch đã duyệt, dán vào khung chat Claude:",
          copyLabel: "Copy prompt Task 1",
          prompt: `Kế hoạch đã ổn. Bây giờ hãy làm ĐÚNG Task 1 trong TASKS.md, không đụng Task khác.

Làm xong thì:
1. Nói rõ bạn đã tạo/sửa những file nào.
2. Hướng dẫn tôi cách chạy thử để kiểm tra.

Rồi DỪNG lại chờ tôi.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bảo AI “làm hết website đi” — bỏ hết bước kiểm tra ở giữa.",
            "Để AI tự nhảy sang Task 2, 3 khi Task 1 chưa được xem.",
            "Không đọc phần AI báo đã sửa file gì, mất dấu thay đổi.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Kết quả mong muốn",
          body: [
            "Dự án bắt đầu có file website đầu tiên — có thể là index.html hoặc cấu trúc web app tùy công nghệ AI chọn. Chưa cần đẹp, chạy được là đạt.",
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ AI chỉ làm đúng Task 1.",
            "✓ Có file website đầu tiên trong dự án.",
            "✓ AI đã báo file đã sửa + cách chạy thử.",
          ],
        },
      ],
    },
    {
      id: "m3-b9",
      title: "Bài 3.9 — Chạy landing page lên xem",
      description: "Mở website của bạn trên trình duyệt và lưu điểm đầu tiên.",
      duration: "10 phút",
      videoLabel: "Lần đầu thấy trang mình chạy thật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Thấy landing page của bạn chạy trên trình duyệt, rồi commit lưu điểm.",
        },
        {
          type: "card",
          title: "Cách dễ nhất — nhờ AI chạy giúp",
          body: [
            "Gõ thẳng vào khung chat Claude: “Chạy web lên cho tôi xem thử.” AI sẽ chạy và đưa link. Muốn tự gõ lệnh thì mở một Terminal MỚI: menu Terminal → New Terminal (khung này không có chat Claude), rồi gõ 2 lệnh dưới.",
          ],
        },
        {
          type: "code",
          title: "Lệnh chạy website (gõ trong Terminal mới, không phải khung chat Claude)",
          code: "npm install\nnpm run dev",
          note: "Rồi mở link hiện trong Terminal — thường là http://localhost:3000 hoặc http://localhost:5173. Giữ Ctrl và bấm vào link để mở nhanh. Nếu dự án chỉ là một file index.html thì không cần npm — cứ nhờ AI “chạy web lên cho tôi xem” hoặc mở thẳng file index.html bằng trình duyệt.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Chạy web lên, mở link, xem trang hiện đúng không.",
            "Xem thử trên điện thoại: trong Chrome bấm F12, chọn biểu tượng điện thoại/máy tính bảng để giả lập màn hình nhỏ.",
            "Chạy ổn thì nhờ AI lưu điểm: “Nếu chưa có Git thì khởi tạo giúp tôi, rồi commit kèm ghi chú: xong-task-1.”",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — chạy web & lưu điểm",
          intro: "Dán vào khung chat Claude trong Terminal:",
          copyLabel: "Copy prompt chạy & commit",
          prompt: `Hãy chạy web lên cho tôi xem thử và cho tôi link để mở trên trình duyệt.

Nếu chạy ổn, hãy: nếu dự án chưa có Git thì khởi tạo giúp tôi, rồi commit lại kèm ghi chú "xong-task-1" để tôi có điểm lưu quay về.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chạy được rồi mà không commit — lỡ hỏng thì không có đường lùi.",
            "Chỉ xem trên máy tính, quên xem điện thoại (đa số khách vào bằng điện thoại).",
            "Thấy dòng đỏ trong Terminal nhưng kệ, để lỗi dồn lại.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Commit = điểm save game",
          content:
            "Mỗi commit là một điểm lưu. Lỡ AI sửa hỏng, nhờ nó: “quay lại commit gần nhất giúp tôi” là về lại chỗ đang chạy tốt.",
        },
        {
          type: "faq",
          title: "Chạy bị lỗi?",
          items: [
            {
              question: "npm install báo lỗi hoặc không thấy link localhost?",
              answer:
                "Copy nguyên văn dòng đỏ trong Terminal, mang sang bài 3.13 dùng prompt sửa lỗi. Hoặc hỏi AI: “dự án này chạy bằng lệnh nào?”.",
            },
            {
              question: "Website mở ra trắng trơn?",
              answer:
                "Thường do lỗi code. Copy dòng đỏ trong Terminal (hoặc mở Console trong trình duyệt bằng F12) gửi AI theo bài 3.13.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Thấy landing page chạy trên trình duyệt.",
            "✓ Xem thử trên khung điện thoại.",
            "✓ Đã commit “xong-task-1”.",
          ],
        },
      ],
    },
    {
      id: "m3-b10",
      title: "Bài 3.10 — Gọi tên từng phần của trang",
      description: "Biết tên các khối để yêu cầu AI sửa đúng chỗ.",
      duration: "8 phút",
      videoLabel: "Đặt tên đúng thì sửa đúng",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Gọi đúng tên từng khối trên trang, để bảo AI sửa trúng chỗ.",
        },
        {
          type: "card",
          title: "Một landing page cơ bản, từ trên xuống",
          ordered: true,
          list: [
            "Hero — phần đầu tiên, nói rõ bạn bán gì.",
            "Lợi ích — vì sao khách nên quan tâm.",
            "Sản phẩm / Dịch vụ — bạn cung cấp cái gì.",
            "Bằng chứng — feedback, ảnh thật, cam kết.",
            "FAQ — câu hỏi thường gặp.",
            "CTA / Form — nơi khách liên hệ, đăng ký, đặt lịch.",
            "Footer — thông tin cuối trang.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nói “sửa cái ở trên đầu ấy” — AI đoán sai khối.",
            "Không biết tên phần nên tả vòng vo, mất thời gian qua lại.",
            "Bảo “đổi hết đi” trong khi chỉ muốn sửa một khối.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo giao việc",
          content:
            "Gọi thẳng tên phần: “sửa phần Hero”, “thêm FAQ”, “đổi nút CTA” — như bài 2.5, nói tới đâu AI trúng tới đó.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nhìn trang, chỉ ra được đâu là Hero, đâu là CTA.",
            "✓ Biết gọi tên phần khi muốn AI sửa.",
          ],
        },
      ],
    },
    {
      id: "m3-b11",
      title: "Bài 3.11 — Chỉnh màu, tiêu đề, nội dung, ảnh",
      description: "Biến trang mẫu thành trang của chính bạn.",
      duration: "15 phút",
      videoLabel: "Từ trang mẫu sang trang của bạn",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Trang đã mang màu, tiêu đề, nội dung và liên hệ đúng của bạn.",
        },
        {
          type: "card",
          title: "Nên chỉnh trước những thứ này",
          list: [
            "Tiêu đề chính ở đầu trang (trong Hero).",
            "Màu chủ đạo.",
            "Nút kêu gọi hành động (CTA).",
            "Ảnh sản phẩm / dịch vụ.",
            "Số điện thoại, Zalo, địa chỉ.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude, điền các chỗ [trong ngoặc].",
            "AI sửa xong, nhờ nó “chạy web lên cho tôi xem” rồi kiểm tra trên cả máy tính và khung điện thoại.",
            "Ưng thì commit: nhờ AI commit kèm ghi chú “chinh-giao-dien”.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — chỉnh giao diện",
          intro: "Dán vào khung chat Claude trong Terminal, điền [trong ngoặc]:",
          copyLabel: "Copy prompt chỉnh giao diện",
          prompt: `Hãy chỉnh landing page theo yêu cầu sau:
1. Đổi màu chủ đạo thành [màu bạn muốn].
2. Đổi tiêu đề chính (Hero) thành: [tiêu đề mới].
3. Đổi nút CTA thành: [nội dung nút].
4. Cập nhật số điện thoại / Zalo: [số của bạn].
5. Cập nhật nội dung cho khớp PROJECT.md và PRD.md.

Ràng buộc: GIỮ NGUYÊN cấu trúc và bố cục hiện tại, chỉ chỉnh phần cần thiết; đảm bảo xem đẹp trên điện thoại. Xong thì báo tôi đã sửa file nào.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên câu “giữ nguyên cấu trúc”, AI đổi luôn cả layout.",
            "Đổi mười thứ trong một câu, sai một chỗ khó lần ra.",
            "Chỉnh xong không commit, lỡ hỏng phải làm lại từ đầu.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Muốn sửa nhẹ thì khóa cấu trúc",
          content:
            "Chỉ đổi màu/chữ mà không muốn xô layout thì luôn thêm “giữ nguyên cấu trúc hiện tại” vào prompt.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Màu, tiêu đề, CTA, liên hệ đã đúng của bạn.",
            "✓ Xem lại đẹp trên điện thoại.",
            "✓ Đã commit sau khi chỉnh.",
          ],
        },
      ],
    },
    {
      id: "m3-b12",
      title: "Bài 3.12 — Thêm form liên hệ & nút CTA",
      description: "Cho trang biết nhận khách hàng tiềm năng.",
      duration: "10 phút",
      videoLabel: "Form nhận khách — chưa cần database",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Trang có form liên hệ chạy được, bấm gửi hiện lời cảm ơn.",
        },
        {
          type: "card",
          title: "Form đơn giản nên có",
          list: [
            "Họ tên.",
            "Số điện thoại.",
            "Nhu cầu / lời nhắn.",
            "Nút gửi thông tin.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt bên dưới vào khung chat Claude trong Terminal.",
            "AI xong, chạy web lên, nhập thử vài dòng rồi bấm Gửi — phải hiện chữ cảm ơn.",
            "Chạy ổn thì commit kèm ghi chú “them-form-lien-he”.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — thêm form liên hệ",
          intro: "Dán vào khung chat Claude trong Terminal:",
          copyLabel: "Copy prompt thêm form",
          prompt: `Hãy thêm form liên hệ vào landing page, gồm: Họ tên, Số điện thoại, Nhu cầu tư vấn, và nút Gửi thông tin.

Yêu cầu:
- Form ngắn gọn, dễ nhập trên điện thoại.
- Bấm Gửi thì hiện thông báo: "Cảm ơn bạn, chúng tôi sẽ liên hệ sớm".
- CHƯA cần kết nối database ở module này, nhưng thiết kế các trường form theo DATABASE.md để sau này dễ lưu vào Supabase.
- Không làm hỏng các phần giao diện hiện có.

Xong thì báo tôi đã sửa file nào và cách chạy thử.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Cố kết nối database ngay ở Module 3 — để dành Module 7.",
            "Form quá nhiều ô, khách ngại nhập trên điện thoại.",
            "Không thử bấm Gửi, không biết thông báo cảm ơn có hiện không.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao chưa lưu mà vẫn theo DATABASE.md?",
          content:
            "Để các trường form khớp sẵn với dữ liệu sẽ lưu ở Module 7 — sau này nối Supabase là chạy, khỏi làm lại form.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Form có đủ họ tên, SĐT, nhu cầu, nút gửi.",
            "✓ Bấm Gửi hiện lời cảm ơn.",
            "✓ Các phần cũ vẫn nguyên vẹn, đã commit.",
          ],
        },
      ],
    },
    {
      id: "m3-b13",
      title: "Bài 3.13 — Sửa lỗi không hoảng",
      description: "Đưa lỗi cho AI đúng cách, sửa gọn đúng chỗ.",
      duration: "10 phút",
      videoLabel: "Copy dòng đỏ, đưa AI, xong",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Biết dán lỗi cho AI để nó sửa đúng chỗ, không đập đi làm lại lung tung.",
        },
        {
          type: "card",
          title: "Lỗi hay gặp khi làm landing page",
          list: [
            "Website trắng màn hình.",
            "npm run dev báo lỗi đỏ.",
            "Ảnh không hiện.",
            "Nút bấm không phản ứng.",
            "Xem trên điện thoại bị vỡ giao diện.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Bôi đen dòng đỏ trong Terminal (hoặc mở Console trình duyệt bằng F12), copy nguyên văn.",
            "Dán prompt bên dưới vào khung chat Claude, dán dòng lỗi vào đúng chỗ [ngoặc].",
            "AI báo định sửa gì rồi mới sửa; xong chạy lại kiểm tra, ổn thì commit.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — báo lỗi & sửa đúng phạm vi",
          intro: "Dán vào khung chat Claude trong Terminal, điền [trong ngoặc]:",
          copyLabel: "Copy prompt sửa lỗi",
          prompt: `Tôi đang gặp lỗi khi chạy landing page.

Dòng lỗi (dán nguyên văn dòng đỏ trong Terminal hoặc Console):
[Dán lỗi vào đây]

Trước khi lỗi xảy ra tôi vừa làm: [mô tả thao tác].

Yêu cầu:
- CHỈ tập trung vào đúng file gây lỗi; KHÔNG đọc lại toàn bộ tài liệu.
- KHÔNG đụng các phần đang chạy tốt.
- Nói ngắn bạn định sửa gì trước khi sửa; sửa xong hướng dẫn tôi kiểm tra lại.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chỉ nói “bị lỗi rồi” mà không dán dòng đỏ — AI mò lung tung.",
            "Bảo AI “đọc lại hết 6 tài liệu để sửa” — tốn token, dễ sửa lan man.",
            "Chưa commit trước khi sửa, hỏng thêm thì không lùi được.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Gặp đúng lỗi này thì…",
          items: [
            {
              question: "Website trắng màn hình?",
              answer:
                "Thường do lỗi JavaScript hoặc import sai file. Copy dòng đỏ trong Terminal hoặc Console (F12) gửi AI theo prompt trên.",
            },
            {
              question: "Ảnh không hiện?",
              answer: "Thường do sai đường dẫn ảnh. Nhờ AI kiểm tra lại đường dẫn file ảnh.",
            },
            {
              question: "Nút bấm không chạy?",
              answer: "Nhờ AI kiểm tra phần xử lý click hoặc link của nút đó.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Biết copy dòng đỏ từ Terminal / Console.",
            "✓ Prompt sửa lỗi chỉ nhắm đúng file, không quét cả tài liệu.",
            "✓ Sửa xong chạy lại và commit.",
          ],
        },
      ],
    },
    {
      id: "m3-b14",
      title: "Bài 3.14 — Hoàn thiện & bài tập cuối module",
      description: "Soát lại trang và tự làm một landing page thứ hai.",
      duration: "15 phút",
      videoLabel: "Chốt trang một, luyện trang hai",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Soát lại landing page cho hoàn chỉnh, rồi tự làm một trang mới từ đầu.",
        },
        {
          type: "card",
          title: "Checklist hoàn thiện landing page",
          list: [
            "Có đủ 6 file tài liệu.",
            "AI đã đọc tài liệu và lập kế hoạch trước khi code.",
            "Landing page chạy được trên máy.",
            "Hero rõ ràng; có lợi ích; có sản phẩm/dịch vụ.",
            "Có nút CTA và form liên hệ (bấm Gửi hiện cảm ơn).",
            "Xem đẹp trên điện thoại; không còn dòng đỏ khi chạy.",
            "Đã commit ở các mốc quan trọng.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay — luyện trang thứ hai",
          body: [
            "Không xem lại video, tự làm một landing page mới theo một trong các đề: spa, quán cafe, khóa học online, shop mỹ phẩm. Dùng prompt bên dưới để AI hướng dẫn từng bước.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — tự luyện lại cả quy trình",
          intro: "Dán vào khung chat Claude trong một thư mục dự án MỚI:",
          copyLabel: "Copy prompt bài tập",
          prompt: `Tôi muốn tự luyện lại quy trình Module 3. Hãy đóng vai người hướng dẫn: chỉ giao TỪNG bước và chờ tôi làm xong mới sang bước kế, KHÔNG làm thay toàn bộ.

Đề của tôi: [tên landing page muốn làm].

Quy trình cần theo:
1. Cùng tôi làm Landing Brief.
2. Tạo đủ 6 tài liệu: PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md, CLAUDE.md.
3. Đọc tài liệu và tóm tắt lại cho tôi duyệt.
4. Lập kế hoạch từng bước.
5. Chỉ khi tôi đồng ý mới bắt đầu code từng task, xong mỗi task thì dừng cho tôi kiểm tra.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Luyện lại mà bỏ brief, nhảy thẳng vào code như cũ.",
            "Để AI làm thay hết, không tự đi lại các bước.",
            "Làm trang mới chung thư mục trang cũ, lẫn file.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Bạn đã đi trọn một vòng",
          content:
            "Ý tưởng → 6 tài liệu → AI đọc & lập kế hoạch → code từng task → chạy thử → chỉnh & sửa lỗi → hoàn thiện. Đây là vòng lặp bạn dùng cho MỌI dự án sau.",
        },
        {
          type: "note",
          tone: "info",
          label: "Bước kế tiếp",
          content: "Module 4 sẽ nâng landing page 1 trang này lên website doanh nghiệp nhiều trang, có menu điều hướng.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Trang một qua hết checklist hoàn thiện.",
            "✓ Đã thử tự làm trang thứ hai theo quy trình.",
          ],
        },
      ],
    },
  ],
};
