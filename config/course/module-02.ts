import type { CourseDocModule } from "@/types/course";

/** Module 2: Quy trình làm việc với AI — bản tinh gọn, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module02: CourseDocModule = {
  id: "module-2",
  order: 2,
  title: "Module 2: Quy trình làm việc với AI",
  shortTitle: "02. Làm việc với AI",
  tagline: "Hiểu AI · Chuẩn bị hồ sơ · Giao việc & sửa lỗi",
  description:
    "Học cách làm việc với AI cho đúng trước khi làm web thật ở Module 3: AI nghĩ sao, chuẩn bị hồ sơ, giao việc, sửa lỗi, tiết kiệm token. Mỗi bài có 1 prompt để bạn copy dùng ngay.",
  outcome:
    "Hiểu cách AI làm việc, biết chuẩn bị dự án + bộ tài liệu, giao việc và sửa lỗi rõ ràng, tiết kiệm token — và có sẵn 8 prompt chuẩn để dùng lại mãi.",
  lessons: [
    {
      id: "m2-b1",
      title: "Bài 2.1 — AI hoạt động như thế nào?",
      description: "3 điều phải nhớ về AI để giao việc cho đúng.",
      duration: "7 phút",
      videoLabel: "AI không phải Google, cũng chẳng phải lập trình viên",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Nhớ 3 điều về AI để giao việc cho đúng.",
        },
        {
          type: "card",
          title: "AI làm được gì — không được gì",
          list: [
            "Làm được: viết code, dựng giao diện, viết nội dung, tìm & sửa lỗi — rất nhanh.",
            "Không được: tự đoán ý trong đầu bạn, tự nhớ phiên chat trước, tự biết lúc nào mình sai.",
          ],
        },
        {
          type: "card",
          title: "3 điều phải nhớ (và việc của bạn)",
          ordered: true,
          list: [
            "Hay quên: mở chat mới là quên sạch dự án → mỗi phiên nhắc lại bối cảnh.",
            "Hay đoán: bạn nói lửng thì nó tự đoán, mà đoán hay trật → nói rõ ràng ngay từ đầu.",
            "Hay tự tin sai: luôn trả lời chắc nịch kể cả khi sai → xong việc luôn kiểm tra lại.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — đặt 3 nguyên tắc cho AI",
          intro:
            "Chưa cài Claude cũng được — cứ lưu lại. Bài 2.2 sẽ mở Claude; rồi dán prompt này vào ô chat ở đầu mỗi lần làm việc mới (mỗi lần như vậy gọi là một “phiên”):",
          copyLabel: "Copy prompt 3 nguyên tắc",
          prompt: `Từ giờ khi làm việc với tôi trong dự án này, hãy luôn theo 3 nguyên tắc:
1. Yêu cầu chưa rõ thì HỎI LẠI trước khi làm — đừng tự đoán.
2. Chỗ nào không chắc, nói thẳng "chỗ này tôi không chắc" thay vì trả lời cho có.
3. Làm xong, tóm tắt ngắn bạn vừa làm gì để tôi kiểm tra.

Trả lời bằng tiếng Việt, ngắn gọn. Bạn đã nắm chưa?`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Mở chat mới mà không nhắc lại bối cảnh, tưởng AI nhớ như người.",
            "Nói lửng rồi trách “sao nó làm sai”, trong khi phần thiếu là mình chưa nói.",
            "Thấy AI trả lời tự tin là tin ngay, không kiểm tra.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Thắc mắc hay gặp",
          items: [
            {
              question: "Sao cùng một câu mà hai lần AI trả lời khác nhau?",
              answer:
                "Bình thường thôi — AI không bấm ra một đáp số cố định như máy tính. Chưa ưng thì bảo làm lại, hoặc tả kỹ hơn.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nhớ 3 điều: hay quên, hay đoán, hay tự tin sai.",
            "✓ Biết việc của mình: nhắc bối cảnh, nói rõ, luôn kiểm tra.",
          ],
        },
      ],
    },
    {
      id: "m2-b2",
      title: "Bài 2.2 — Chuẩn bị dự án",
      description: "Chuẩn bị 4 thứ và mở thư mục dự án trước khi gọi AI.",
      duration: "8 phút",
      videoLabel: "Chuẩn bị 15 phút, đỡ hàng giờ sửa tới sửa lui",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Chuẩn bị 4 thứ trước khi bảo AI làm — để nó khỏi đoán.",
        },
        {
          type: "card",
          title: "4 việc cần chuẩn bị",
          ordered: true,
          list: [
            "Mục tiêu: web làm cho ai, để làm gì (1–2 câu).",
            "Yêu cầu: cần trang nào, mỗi trang có gì, có cần form / đặt lịch / bán hàng không.",
            "Nội dung & ảnh: tên, giới thiệu, menu/sản phẩm, số điện thoại, ảnh… gom vào một chỗ.",
            "Thư mục riêng: mỗi dự án một thư mục (vd cafe-website) để AI khỏi lẫn file.",
          ],
        },
        {
          type: "card",
          title: "Mở dự án trong VS Code",
          ordered: true,
          list: [
            "VS Code → File → Open Folder → chọn thư mục dự án vừa tạo.",
            "Hỏi có tin thư mục không → bấm “Yes, I trust the authors”.",
            "Mở Terminal (Ctrl + `), gõ claude rồi Enter.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nhờ AI phỏng vấn để ra brief",
          intro:
            "Dán prompt dưới vào Claude Code (cửa sổ vừa mở ở Terminal) để AI hỏi ngược cho rõ rồi tự tóm thành brief (bản tóm tắt yêu cầu dự án — cho ai, cần trang gì, phong cách nào):",
          copyLabel: "Copy prompt làm brief",
          prompt: `Tôi muốn làm một website nhưng ý tưởng còn sơ sài: [mô tả 1–2 câu, vd: web quán cafe nhỏ, có menu và cho khách đặt bàn].

Hãy đóng vai Product Manager, phỏng vấn tôi để làm rõ dự án. Hỏi TỪNG câu một (chờ tôi trả lời rồi mới hỏi tiếp): đối tượng khách, các trang cần có, phong cách, nội dung sẵn có, mục tiêu chính.

Đủ thông tin thì tóm lại thành một bản brief ngắn, LƯU vào file BRIEF.txt trong thư mục dự án để tôi dùng lại ở bài sau. Chưa làm gì thêm.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bảo AI làm luôn, không chuẩn bị gì.",
            "Yêu cầu sơ sài kiểu “làm web bán hàng” — thiếu thông tin, ra chung chung.",
            "Mở cả ổ đĩa hoặc để chung mọi dự án một thư mục khiến AI lẫn file.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Chưa cần đủ hết",
          content: "Chuẩn bị tới đâu làm tới đó, thiếu bổ sung dần vào tài liệu ở bài sau.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Viết được mục tiêu + liệt kê trang/tính năng.",
            "✓ Gom sẵn nội dung, ảnh chính.",
            "✓ Có thư mục riêng, đã mở trong VS Code.",
          ],
        },
      ],
    },
    {
      id: "m2-b3",
      title: "Bài 2.3 — Bộ tài liệu dự án",
      description: "6 file hồ sơ AI đọc trước khi làm — và 1 prompt dựng cả bộ.",
      duration: "9 phút",
      videoLabel: "Bộ hồ sơ dự án: AI đọc gì, thiếu thì sao",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có bộ 6 file để AI đọc một lần là hiểu cả dự án, khỏi phải giải thích lại mỗi phiên.",
        },
        {
          type: "files",
          title: "Bộ 6 file lõi — dùng cho MỌI dự án trong khóa",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án: làm cho ai, mục tiêu gì." },
            { emoji: "🎯", name: "PRD.md", description: "Gồm trang nào, mỗi trang có gì — “đề bài” chính." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Màu sắc, phong cách, bố cục." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu cần lưu — dọn sẵn cho Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc, AI làm lần lượt." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật cho AI (nó TỰ đọc mỗi phiên)." },
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Bạn không phải tự viết",
          content:
            "6 file này AI tạo hết bằng prompt cuối bài — ở đây chỉ cần hiểu mỗi file dùng để làm gì.",
        },
        {
          type: "card",
          title: "Thiếu mỗi file thì sao",
          list: [
            "Thiếu PRD → AI tự đoán tính năng, làm dư hoặc thiếu.",
            "Thiếu UI_UX_SPEC → mỗi trang một kiểu, màu mè lộn xộn.",
            "Thiếu DATABASE → tới Module 7 muốn lưu dữ liệu phải dựng lại từ đầu.",
            "Thiếu TASKS → dễ “làm cả web một lần” rồi rối.",
            "Thiếu CLAUDE → AI làm theo thói quen mặc định, dễ lan man.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Khi nào cập nhật?",
          content:
            "Thực tế đổi thì tài liệu đổi: thêm/bớt trang → sửa PRD; đổi màu → sửa UI_UX_SPEC; xong việc → đánh dấu trong TASKS.",
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng cả bộ tài liệu bằng một phát",
          intro:
            "Dán vào Claude đang mở trong Terminal (bài 2.2). Chạy xong, nhìn cột file bên trái VS Code sẽ thấy 6 file .md hiện ra — Claude hỏi cho phép tạo file thì bấm đồng ý:",
          copyLabel: "Copy prompt Khởi động",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Dựa trên brief dưới đây, hãy tạo đủ 6 file tài liệu cho dự án:

- PROJECT.md — giới thiệu dự án: làm cho ai, mục tiêu gì
- PRD.md — các trang và phần cần có
- UI_UX_SPEC.md — màu sắc, phong cách, bố cục
- DATABASE.md — dữ liệu cần lưu (kể cả khi giờ chưa dùng đến)
- TASKS.md — chia công việc thành các bước nhỏ, đánh số thứ tự
- CLAUDE.md — luật làm việc: làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời bằng tiếng Việt, báo cáo ngắn gọn sau mỗi bước

Viết bằng tiếng Việt, đơn giản, dễ hiểu cho người không biết code.

Brief của dự án nằm trong file BRIEF.txt — hãy đọc file đó trước khi tạo tài liệu.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ bước làm tài liệu, bảo AI code luôn cho “nhanh”.",
            "Bỏ DATABASE.md vì “landing page lưu gì đâu” — rồi Module 7 hụt hẫng.",
            "Để AI tự viết hết mà không đọc lại, tài liệu không đúng ý mình.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "API.md & README.md?",
          content:
            "Hai file mở rộng: API.md (kết nối dịch vụ ngoài) và README.md (hướng dẫn chạy dự án). Dự án lớn mới cần, để dành Module 7. Người mới nắm 6 file lõi là đủ.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Biết mỗi file trong 6 file dùng để làm gì.",
            "✓ Chạy được prompt Khởi động ra đủ 6 file.",
            "✓ Đọc lướt lại, chỉnh cho đúng ý mình.",
          ],
        },
      ],
    },
    {
      id: "m2-b4",
      title: "Bài 2.4 — Quy trình làm việc với AI",
      description: "Vòng lặp chuẩn: AI đọc → lập kế hoạch → bạn duyệt → mới code.",
      duration: "8 phút",
      videoLabel: "Ý tưởng → tài liệu → kế hoạch → làm từng phần → kiểm tra",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Nắm quy trình xương sống lặp lại ở MỌI dự án. Như xây nhà: có bản vẽ, duyệt, rồi mới xây từng phần và nghiệm thu.",
        },
        {
          type: "card",
          title: "Quy trình chuẩn — từ ý tưởng đến code",
          ordered: true,
          list: [
            "Ý tưởng → brief ngắn.",
            "Brief → bộ tài liệu (bài 2.2 & 2.3).",
            "AI đọc tài liệu và tóm tắt lại — để chắc nó hiểu đúng.",
            "AI lập kế hoạch làm từng bước — CHƯA code.",
            "Bạn duyệt kế hoạch, chỉnh chỗ chưa ổn ngay lúc này.",
            "Làm từng phần nhỏ, xong phần nào kiểm tra phần đó.",
            "Đúng thì lưu lại (commit) rồi qua việc kế; cuối cùng mới deploy.",
          ],
        },
        {
          type: "card",
          title: "2 phím cần nhớ",
          list: [
            "Shift + Tab → bật Plan Mode: bấm tới khi thấy dòng báo “plan mode” gần ô chat. AI chỉ ĐỌC và ĐỀ XUẤT kế hoạch, chưa đụng file.",
            "Duyệt xong → bấm Shift + Tab lần nữa để thoát Plan Mode, rồi bảo AI bắt đầu làm (prompt “Bắt đầu Task 1” ở bài 2.8).",
            "Esc → dừng ngay khi thấy AI đi sai hướng, khỏi chờ nó làm xong thứ sẽ bỏ.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bảo AI đọc & lập kế hoạch",
          intro: "Nhấn Shift + Tab (Plan Mode) rồi dán:",
          copyLabel: "Copy prompt Lập kế hoạch",
          prompt: `Hãy đọc toàn bộ tài liệu dự án (PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md).

Sau đó:
1. Tóm tắt lại dự án bằng vài câu để tôi chắc bạn hiểu đúng.
2. Đề xuất kế hoạch làm theo từng bước, đúng thứ tự trong TASKS.md.

CHƯA code gì cả. Trình kế hoạch xong thì dừng lại chờ tôi duyệt.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bảo AI “làm cả website đi” trong một câu — bỏ hết bước ở giữa.",
            "Cho code ngay, không xem kế hoạch — sai thì phải đập đi làm lại.",
            "Làm một mạch không kiểm tra, cuối cùng rối không biết hỏng từ đâu.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nhớ các bước theo đúng thứ tự.",
            "✓ Biết Shift + Tab (Plan Mode) và Esc (dừng).",
            "✓ Chỉ code khi kế hoạch đã được duyệt.",
          ],
        },
      ],
    },
    {
      id: "m2-b5",
      title: "Bài 2.5 — Giao việc cho AI",
      description: "Công thức 1 prompt gọn mà đủ: bối cảnh · việc · ràng buộc · xong-là-sao.",
      duration: "8 phút",
      videoLabel: "Giao việc như giao cho cộng sự, đừng ra lệnh cụt lủn",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Giao việc cho AI như giao cho cộng sự mới. Nói rõ tới đâu, nó làm trúng tới đó.",
        },
        {
          type: "card",
          title: "Công thức một prompt gọn mà đủ",
          ordered: true,
          list: [
            "Bối cảnh: một câu cho AI biết bạn đang làm gì.",
            "Việc cần làm: càng cụ thể càng đỡ phải đoán.",
            "Ràng buộc: chỗ nào KHÔNG được đụng.",
            "Xong là thế nào: dấu hiệu coi như đạt.",
          ],
        },
        {
          type: "card",
          title: "Ví dụ đúng và sai",
          list: [
            "❌ “Làm cái form liên hệ.” → ✅ “Trong file trang liên hệ, thêm form Tên, SĐT, Lời nhắn; bấm Gửi hiện chữ Đã gửi.”",
            "❌ “Làm đẹp hơn đi.” → ✅ “Đổi màu nút chính sang tím, bo góc mềm hơn, chữ to hơn chút. Giữ nguyên bố cục.”",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — khung giao một task",
          intro:
            "Điền các chỗ [ngoặc] — mỗi việc gồm 4 phần: bối cảnh, việc, ràng buộc, xong-là-sao. Chưa biết tên file thì cứ tả (vd “file trang liên hệ”), AI tự tìm:",
          copyLabel: "Copy khung giao task",
          prompt: `Bối cảnh: [đang làm trang/tính năng gì].

Việc cần làm: [mô tả cụ thể].

Ràng buộc: chỉ sửa file [tên file hoặc mô tả, vd: file trang liên hệ]; KHÔNG đụng phần khác; không tự thêm tính năng ngoài yêu cầu.

Xong là thế nào: [dấu hiệu coi như đạt — vd: bấm nút hiện chữ "Đã gửi"; xem trên điện thoại chữ không tràn].`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Gõ vài từ khóa cụt như tra Google rồi mong AI hiểu ý.",
            "Nhồi nhiều việc vào một câu — sai một chỗ là hỏng cả chùm.",
            "Không nói “xong là thế nào”, AI làm xong chẳng biết đã đạt chưa.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Một tin nhắn, một việc",
          content: "Việc lớn thì cắt thành nhiều việc nhỏ, giao lần lượt — dễ kiểm tra, sai cũng gọn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nhớ 4 phần: bối cảnh, việc, ràng buộc, xong-là-sao.",
            "✓ Một tin nhắn chỉ giao một việc.",
            "✓ Luôn nói rõ “xong là thế nào”.",
          ],
        },
      ],
    },
    {
      id: "m2-b6",
      title: "Bài 2.6 — Kiểm tra & sửa lỗi",
      description: "Kiểm tra sau mỗi việc và báo lỗi để AI sửa đúng chỗ.",
      duration: "7 phút",
      videoLabel: "Sai ở đâu · muốn gì · file nào được sửa",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Biết kiểm tra kết quả và báo lỗi để AI sửa đúng chỗ — thay vì “sai rồi, làm lại” khiến nó đập đi xây lại lung tung.",
        },
        {
          type: "card",
          title: "Kiểm tra sau mỗi việc",
          list: [
            "Giao diện: bố cục đúng ý chưa, trên điện thoại chữ có tràn không, ảnh có vỡ nét không.",
            "Chức năng: bấm thử nút, gửi thử form, click thử link — chạy đúng không.",
            "Có dòng đỏ trong Terminal nghĩa là đang lỗi — xử lý ngay.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — báo lỗi & sửa đúng phạm vi",
          intro:
            "Báo lỗi cần đủ: sai ở đâu (có dòng đỏ thì DÁN nguyên văn) · đúng ra phải sao · sửa file nào · không đụng chỗ đang chạy tốt. Điền [ngoặc]:",
          copyLabel: "Copy prompt Sửa lỗi",
          prompt: `Sai ở đâu: [mô tả chỗ lỗi — trang nào, nút nào; có dòng báo lỗi màu đỏ thì dán nguyên văn vào đây].

Đúng ra phải: [kết quả mong muốn].

Chỉ được sửa: file [tên file liên quan].

KHÔNG được đụng: các trang/tính năng đang chạy tốt.

Trước khi sửa, nói ngắn bạn định sửa gì rồi mới làm.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nói trống không “sai rồi / xấu quá / làm lại” — AI sửa lan man.",
            "Cãi qua lại chục lượt trong chat đã rối — nên gõ /clear (dọn sạch chat, học ở bài 2.7) rồi tả lại từ đầu.",
            "Không commit (lưu điểm) trước, tới lúc AI sửa hỏng thì không có đường lùi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Commit = “điểm save” trong game",
          content:
            "Commit = lưu một “điểm save” cho code. Trước việc quan trọng, nhờ AI: “Nếu chưa có Git thì khởi tạo giúp tôi, rồi commit kèm ghi chú: xong-form-lien-he.” Lỡ hỏng, nhờ AI: “quay lại commit gần nhất giúp tôi.”",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Kiểm tra cả giao diện lẫn chức năng sau mỗi việc.",
            "✓ Báo lỗi: sai ở đâu + file được sửa + dán dòng lỗi.",
            "✓ Chạy ổn thì commit trước khi qua việc kế.",
          ],
        },
      ],
    },
    {
      id: "m2-b7",
      title: "Bài 2.7 — Tối ưu Token",
      description: "Giữ “bàn làm việc” của AI luôn gọn để chạy nhanh, đúng và đỡ tốn.",
      duration: "8 phút",
      videoLabel: "Token, context, session và mấy lệnh dọn bàn",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Hiểu token/context/session ở mức người mới cần, và biết “dọn bàn” để AI chạy nhanh, đúng hơn, đỡ tốn.",
        },
        {
          type: "card",
          title: "3 từ, hiểu qua cái bàn làm việc",
          list: [
            "Mọi câu bạn gõ và AI viết đều bày lên một cái bàn; mỗi lần Enter nó đọc lại cả bàn.",
            "Token: đơn vị đong chữ — “tốn token” là bàn đang nhiều chữ.",
            "Context: tất cả những gì đang trên bàn — AI chỉ biết đúng chừng đó, ngoài ra không.",
            "Session: một buổi làm việc — mở phiên mới là bàn trống, AI quên sạch phiên cũ.",
          ],
        },
        {
          type: "card",
          title: "Lệnh giữ bàn gọn",
          body: [
            "Mấy lệnh này gõ THẲNG vào khung chat với Claude (chỗ bạn trò chuyện với AI) rồi Enter — không phải lệnh Terminal thường.",
          ],
          list: [
            "/clear — đổi sang việc KHÁC không liên quan thì dọn sạch bàn.",
            "/compact — cùng một việc mà chat lỡ dài thì tóm gọn, giữ mạch mà bàn nhẹ đi.",
            "Gõ @ rồi chọn tên file (danh sách hiện ra để chọn) — chỉ đúng file cho AI đọc, nhẹ hơn nhiều so với để nó tự đi lục cả dự án.",
            "Đừng gõ “đọc CLAUDE.md” — Claude Code TỰ đọc mỗi phiên rồi (giữ file dưới ~200 dòng).",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — tóm gọn trước khi /clear",
          intro: "Muốn mở phiên mới mà không mất mạch? Gõ prompt này, chép câu tóm tắt sang phiên mới rồi mới /clear:",
          copyLabel: "Copy prompt Tóm gọn phiên",
          prompt: `Tôi sắp mở phiên chat mới. Trước khi tôi /clear, hãy tóm tắt ngắn để tôi dán sang phiên mới:
1. Dự án đang làm gì, tới đâu rồi.
2. Việc vừa xong và việc đang làm dở.
3. Điểm cần lưu ý để không làm sai ở phiên sau.

Viết gọn khoảng 10 dòng.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Ôm một chat cả ngày, hết việc này nhảy việc kia — bàn ngày càng chật.",
            "Nghĩ “tốn token” chỉ là chuyện tiền. Bàn gọn cho kết quả TỐT hơn, không chỉ rẻ hơn.",
            "Cùng một việc mà chat quá dài không chịu /compact, để AI lú dần.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Xem đã tốn bao nhiêu",
          content:
            "Gõ /usage (vài bản là /cost) để xem phiên đã tiêu cỡ nào. Lỡ tay thì cách an toàn nhất vẫn là commit thường xuyên (bài 2.6) để có đường lùi.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nói được token, context, session bằng lời của mình.",
            "✓ Phân biệt /clear (đổi việc) và /compact (cùng việc).",
            "✓ Không cần bảo AI “đọc CLAUDE.md”.",
          ],
        },
      ],
    },
    {
      id: "m2-b8",
      title: "Bài 2.8 — Thực hành",
      description: "Ghép mọi thứ: đi trọn quy trình một lần, tới Task 1 chạy được.",
      duration: "10 phút",
      videoLabel: "Thực hành: từ brief tới task đầu tiên chạy được",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Ghép các bài lại: đi trọn quy trình MỘT LẦN cho dự án của bạn, tới khi Task 1 chạy được.",
        },
        {
          type: "card",
          title: "Làm ngay — 6 bước (dùng lại prompt các bài trước)",
          ordered: true,
          list: [
            "Tạo thư mục riêng, mở VS Code, mở Terminal gõ claude (bài 2.2).",
            "Chạy prompt “làm brief” (bài 2.2) để AI phỏng vấn và tóm ra brief.",
            "Chạy prompt “Khởi động” (bài 2.3) → AI đọc BRIEF.txt và tạo đủ 6 file.",
            "Mở 6 file đọc lướt, chỉnh chỗ chưa đúng ý.",
            "Shift + Tab (Plan Mode), chạy prompt “Đọc & lập kế hoạch” (bài 2.4); đọc kế hoạch, thiếu/thừa thì bảo chỉnh.",
            "Kế hoạch ưng → chạy prompt bên dưới để AI làm Task 1. Xong, nhờ AI “chạy web lên cho tôi xem thử”, kiểm tra như bài 2.6 rồi để AI commit. Tới đây là ĐẠT — chưa cần làm hết web.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — bắt đầu Task 1",
          intro: "Sau khi kế hoạch được duyệt:",
          copyLabel: "Copy prompt Bắt đầu Task 1",
          prompt: `Kế hoạch đã ổn. Bây giờ hãy bắt đầu Task 1 trong TASKS.md.

Chỉ làm đúng Task 1. Làm xong thì chạy web lên cho tôi xem thử và DỪNG lại, báo bạn đã làm gì + cần tôi kiểm tra gì. Nếu tôi bảo ổn thì commit giúp tôi kèm ghi chú: xong-task-1.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ bước duyệt kế hoạch, cho AI làm luôn cả loạt task.",
            "Nhận 6 file xong không đọc, cứ thế cho code tiếp.",
            "Làm xong Task 1 không kiểm tra, không commit rồi lao sang task kế.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Bảng ❌ / ✅ (in ra dán cạnh máy)",
          list: [
            "❌ Một chat cả ngày → ✅ /clear khi đổi việc",
            "❌ Dán cả file → ✅ dùng @tên-file",
            "❌ Nhồi nhiều việc → ✅ một tin nhắn một việc",
            "❌ “Làm đẹp hơn” → ✅ nói cụ thể + xong-là-sao",
            "❌ Bỏ qua Plan Mode → ✅ Shift + Tab xem trước",
            "❌ “Sai rồi, làm lại” → ✅ sai ở đâu + file được sửa",
            "❌ Quên lưu điểm → ✅ commit sau mỗi việc",
          ],
        },
        {
          type: "card",
          title: "Tự chấm — đạt nếu…",
          list: [
            "✓ Có brief rõ + đủ 6 file trong thư mục.",
            "✓ AI đưa kế hoạch từng bước và bạn đã duyệt.",
            "✓ Task 1 chạy được, đã kiểm tra và commit.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Bước kế tiếp",
          content: "Qua Module 3, bạn chạy đúng quy trình này để ra một landing page thật hoàn chỉnh.",
        },
      ],
    },
  ],
};
