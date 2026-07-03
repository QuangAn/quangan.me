import type { CourseDocModule } from "@/types/course";

/** Module 2: Làm việc với AI đúng cách — tư duy, tránh lỗi tốn token, quy trình giao việc. */
export const module02: CourseDocModule = {
  id: "module-2",
  order: 2,
  title: "Module 2: Làm việc với AI đúng cách — kết quả tốt hơn, đỡ tốn token",
  shortTitle: "02. Làm việc với AI",
  tagline: "Tư duy đúng · Tránh lỗi tốn token · Quy trình giao việc chuẩn",
  description:
    "Trước khi bắt tay làm website, hãy hiểu AI thật sự hoạt động thế nào, tránh những thói quen khiến AI làm sai và đốt token, rồi nắm quy trình giao việc chuẩn — kèm bộ hồ sơ dự án tạo chỉ bằng một prompt.",
  outcome:
    "Hiểu cách AI hoạt động, tránh được các lỗi đốt token phổ biến, và có quy trình + prompt mẫu để giao việc cho AI ở mọi module sau.",
  lessons: [
    {
      id: "m2-b1",
      title: "AI thật ra là ai? Hiểu để giao việc đúng",
      description: "4 sự thật về AI giải thích gần như mọi lỗi người mới hay mắc.",
      duration: "10 phút",
      videoLabel: "AI không phải Google, cũng không phải lập trình viên",
      main: [
        {
          type: "card",
          title: "Đây là bài chuẩn bị — và là bài quan trọng",
          body: [
            "Module này chưa xây website. Bạn đang học cách “nói chuyện” với AI cho đúng — để đến Module 3, khi bắt tay làm thật, mọi thứ chạy trơn và ít tốn kém.",
            "Hiểu 4 điều dưới đây, bạn tránh được gần hết lỗi mà người mới hay mắc phải.",
          ],
        },
        {
          type: "card",
          title: "1. AI giống một trợ lý siêu giỏi nhưng mất trí nhớ",
          body: [
            "Hình dung bạn thuê một trợ lý cực giỏi, làm gì cũng nhanh. Nhưng mỗi lần bạn mở một cuộc trò chuyện MỚI, họ quên sạch bạn là ai và dự án là gì — như vừa gặp một người lạ.",
            "Vì vậy: đừng cho rằng AI “nhớ hôm qua”. Bạn phải đưa lại thông tin cho nó trong mỗi phiên làm việc.",
          ],
        },
        {
          type: "card",
          title: "2. AI làm việc trên một “mặt bàn” có hạn (token là đây)",
          body: [
            "Mọi thứ bạn gõ vào và mọi thứ AI viết ra đều nằm trên một mặt bàn làm việc chung. Mặt bàn đó có giới hạn, và mỗi lần bạn nhấn Enter, AI đọc lại TOÀN BỘ mặt bàn từ đầu rồi mới trả lời.",
          ],
          list: [
            "Lượng chữ trên mặt bàn được đo bằng đơn vị gọi là token.",
            "Chat càng dài, mặt bàn càng đầy → mỗi câu trả lời vừa chậm hơn, vừa tốn hơn.",
            "Bàn càng bừa, AI càng dễ bỏ sót thứ quan trọng giữa đống lộn xộn.",
          ],
        },
        {
          type: "card",
          title: "3. AI luôn đoán chỗ bạn bỏ trống",
          body: [
            "Nói với thợ may “may cho tôi cái áo đẹp đẹp”, họ sẽ tự đoán kiểu, màu, cỡ — rồi giao một cái áo khéo nhưng sai ý bạn.",
            "AI y hệt: bạn nói mơ hồ, nó tự tin đoán và làm sai. Nói rõ ngay từ đầu = AI làm trúng, bạn đỡ phải làm lại.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "4. Chat càng dài, AI càng “trôi”",
          content:
            "Cuộc trò chuyện kéo dài khiến AI dễ quên điều bạn dặn lúc đầu và trả lời lạc hướng. Khi đó, dọn bàn làm lại từ đầu nhanh hơn nhiều so với cố cãi cho AI hiểu.",
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Vì sao học cái này trước?",
          content:
            "Chưa cần nhớ gì về code. Chỉ cần thấm 3 điều: AI giỏi nhưng mất trí nhớ, làm trên mặt bàn có hạn, và hay đoán. Ba điều này giải thích mọi mẹo trong cả khóa.",
        },
        {
          type: "card",
          title: "4 điều cần nhớ",
          list: [
            "AI quên sạch mỗi cuộc trò chuyện mới.",
            "Mặt bàn (token) có hạn — giữ cho gọn.",
            "Nói mơ hồ → AI đoán → làm sai.",
            "Chat quá dài → AI trôi → nên làm lại.",
          ],
        },
        {
          type: "faq",
          title: "Thắc mắc thường gặp",
          items: [
            {
              question: "Sao cùng một câu mà 2 lần AI trả lời khác nhau?",
              answer:
                "Bình thường. AI không phải máy tính bỏ túi cho ra một đáp án cố định — nó “sáng tạo” lại mỗi lần. Chưa ưng thì cứ bảo nó làm lại, hoặc mô tả rõ hơn.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b2",
      title: "5 thói quen đốt token nhiều nhất (và cách sửa)",
      description: "Những lỗi khiến AI vừa làm sai vừa ngốn tài nguyên.",
      duration: "10 phút",
      videoLabel: "Vì sao càng làm càng tốn mà kết quả không ưng",
      main: [
        {
          type: "card",
          title: "Nhắc lại nguyên lý (từ bài trước)",
          body: [
            "Mỗi lần bạn nhấn Enter, AI đọc lại toàn bộ cuộc trò chuyện từ đầu. Vì vậy mọi thứ thừa trên mặt bàn đều bị “tính tiền” lại ở MỌI câu sau.",
            "Năm thói quen dưới đây tốn kém đều vì cùng một lý do này.",
          ],
        },
        {
          type: "card",
          title: "Lỗi 1 — Một cuộc trò chuyện cho cả ngày",
          body: [
            "Làm menu xong, bạn quay sang hỏi cách sửa ảnh, rồi hỏi tiếp giá tên miền — tất cả trong một chat. Mỗi câu mới, AI phải đọc lại cả buổi sáng chẳng liên quan.",
            "❌ Sai: giữ một chat khổng lồ cho mọi việc.  ✅ Đúng: xong một việc thì gõ /clear (học ở bài sau) để dọn bàn — việc mới là một cuộc trò chuyện mới.",
          ],
        },
        {
          type: "card",
          title: "Lỗi 2 — Dán lại cả file mỗi lần hỏi",
          body: [
            "Bạn copy nguyên một file dài dán vào chat để hỏi, rồi vài câu sau lại dán lại. File đó bị tính tiền LẠI mỗi lượt — hỏi qua lại 20 lần là trả tiền cho nó 20 lần.",
            "❌ Sai: dán cả file vào chat.  ✅ Đúng: chỉ nói TÊN file, để AI tự mở đọc (nó ngồi sẵn trong thư mục dự án rồi).",
          ],
        },
        {
          type: "card",
          title: "Lỗi 3 — Prompt mơ hồ kiểu “làm đẹp hơn đi”",
          body: [
            "“Làm đẹp hơn”, “chưa ổn lắm sửa lại” — AI phải đoán bạn muốn gì, đoán sai, bạn lại sửa, nó lại đoán… mỗi vòng đều tốn token.",
            "❌ Sai: “làm đẹp hơn”.  ✅ Đúng: nói cụ thể — “phóng to tiêu đề, đổi nút sang màu cam, thêm khoảng cách giữa các mục” + cho biết thế nào là xong.",
          ],
        },
        {
          type: "card",
          title: "2 lỗi tốn kém khác (xem nhanh)",
          list: [
            "❌ Nhồi 5–6 việc trong một câu → sai một chỗ kéo hỏng cả, sửa phải gánh token cả 6.  ✅ Một tin nhắn = một việc.",
            "❌ Cãi qua cãi lại chục lượt trong một chat đã rối → mỗi lượt gửi lại tất cả lần thử sai.  ✅ 3 lượt không xong thì /clear và mô tả lại từ đầu cho sạch.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Kiểu lãng phí lớn nhất",
          content:
            "Bắt AI đọc đi đọc lại cùng một file qua nhiều lượt là cách đốt token nhanh nhất — và hoàn toàn tránh được. Mở đúng thư mục dự án (bài sau) là AI tự đọc file, bạn khỏi dán tay.",
        },
      ],
      aside: [
        {
          type: "faq",
          title: "2 câu người mới hay cãi lại",
          items: [
            {
              question: "Dán cả file cho chắc, có sao đâu?",
              answer:
                "AI tự đọc được file trong thư mục dự án. Dán tay vừa tốn token, vừa dễ lệch so với bản thật trên máy.",
            },
            {
              question: "Cãi thêm vài lượt biết đâu nó hiểu?",
              answer:
                "Chat càng dài AI càng trôi. Dọn bàn rồi mô tả lại rõ ràng gần như luôn nhanh hơn cãi tiếp.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Khi nào biết chat đã “dài”?",
          content:
            "Khi bạn đã trao đổi qua lại cả chục lượt, hoặc thấy AI bắt đầu quên điều bạn dặn lúc đầu — đó là lúc nên dọn bàn (/clear).",
        },
      ],
    },
    {
      id: "m2-b3",
      title: "5 thói quen khiến AI làm sai ý bạn",
      description: "Khoanh vùng, bám yêu cầu, đừng để AI tự chế.",
      duration: "9 phút",
      videoLabel: "Nói thế nào để AI làm đúng thứ bạn cần",
      main: [
        {
          type: "card",
          title: "❌ → ✅ (5 lỗi làm sai ý)",
          list: [
            "❌ “Web bị lỗi, sửa đi” → AI lục cả dự án, sửa cả chỗ đang chạy tốt.  ✅ “Chỉ sửa nút Gửi trong file form liên hệ, chỗ khác đừng đụng.”",
            "❌ Để AI tự ý thêm tính năng → website phình to, lệch yêu cầu, tốn token sinh ra rồi tốn token gỡ.  ✅ “Chỉ làm đúng phần tôi liệt kê; muốn thêm gì phải hỏi tôi trước.”",
            "❌ Đổi ý liên tục khi AI đang làm dở → công một nửa bỏ phí.  ✅ Chốt yêu cầu rồi mới cho làm; đổi lớn thì dừng lại, mô tả lại từ đầu.",
            "❌ Gõ vài từ khóa như tìm Google (“form Supabase”) → nhận trả lời chung chung.  ✅ Giao việc như cho cộng sự: bối cảnh + việc cần làm + ràng buộc.",
            "❌ Prompt 500 chữ lan man → yêu cầu quan trọng bị chôn, lại bị gửi lại mỗi lượt.  ✅ 3 dòng gọn: bối cảnh — việc cần làm — kết quả mong đợi.",
          ],
        },
        {
          type: "card",
          title: "Công thức một prompt tốt",
          ordered: true,
          list: [
            "Bối cảnh: một câu về việc đang làm.",
            "Việc cần làm: càng cụ thể càng tốt.",
            "Ràng buộc: chỗ nào KHÔNG được đụng vào.",
            "“Xong nghĩa là gì”: để bạn và AI cùng biết khi nào đạt.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Coi AI là cộng sự, không phải Google",
          content:
            "Google trả về trang có sẵn. AI thì TỰ LÀM ra thứ mới theo lời bạn — nên lời bạn càng rõ, kết quả càng trúng. Và luôn rà lại việc AI làm, đừng tin 100% ngay.",
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Khoanh vùng = tiết kiệm",
          content:
            "Bảo AI “đi tìm lỗi khắp dự án” khiến nó nạp hàng loạt file vào mặt bàn (rồi bị tính tiền ở mọi lượt sau), trong khi lỗi thường chỉ nằm ở một file. Chỉ đúng file thì sửa nhanh và rẻ.",
        },
        {
          type: "card",
          title: "Ví dụ “xong nghĩa là gì”",
          list: [
            "Bấm nút xong hiện thông báo “Đã gửi”.",
            "Trên điện thoại chữ không bị tràn ra ngoài.",
            "Ảnh sản phẩm hiện đủ, không vỡ nét.",
          ],
        },
      ],
    },
    {
      id: "m2-b4",
      title: "Quy trình giao việc chuẩn (6 prompt bạn dùng cả khóa)",
      description: "Một vòng lặp lặp đi lặp lại ở mọi module sau.",
      duration: "9 phút",
      videoLabel: "Vòng lặp: brief → tài liệu → duyệt kế hoạch → làm 1 việc → kiểm tra",
      main: [
        {
          type: "card",
          title: "Trước hết: “brief” là gì?",
          body: [
            "Brief = bản mô tả ngắn bạn muốn gì (giống tờ đề bài). Mọi việc với AI đều bắt đầu từ một brief rõ ràng.",
            "Ví dụ brief cho quán cafe: “Website giới thiệu quán cafe nhỏ, có menu và form đặt bàn, phong cách ấm áp, xem tốt trên điện thoại.”",
          ],
        },
        {
          type: "card",
          title: "Vòng lặp giao việc chuẩn",
          ordered: true,
          list: [
            "Viết brief ngắn (bạn muốn gì).",
            "Cho AI biến brief thành bộ tài liệu dự án (bài sau).",
            "Cho AI đọc tài liệu, tóm tắt và đề xuất kế hoạch — CHƯA code.",
            "Bạn duyệt kế hoạch, sửa nếu cần.",
            "Cho AI làm ĐÚNG một việc (một task).",
            "Bạn kiểm tra kết quả (chạy thử / xem trên màn hình).",
            "Sai thì bảo AI sửa đúng chỗ; đúng thì lưu lại (commit) rồi sang việc tiếp.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "6 “prompt lõi” bạn sẽ gặp lại suốt khóa",
          content:
            "Khởi động · Đọc & lập kế hoạch · Giao task · Sửa lỗi · Chỉnh giao diện · Rà soát. Không cần học thuộc — chỉ cần biết mỗi lần làm việc với AI đều xoay quanh 6 kiểu prompt này. Các module sau sẽ gọi tên chúng.",
        },
        {
          type: "card",
          title: "Nguyên tắc vàng",
          list: [
            "Luôn bắt đầu từ một brief.",
            "Một tin nhắn = một việc.",
            "Duyệt kế hoạch trước khi cho code.",
            "Kiểm tra sau mỗi bước, đừng dồn đến cuối.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo: dán đúng lỗi, đừng tả lại",
          content:
            "Khi kiểm tra thấy lỗi, hãy COPY nguyên dòng báo lỗi trong Terminal dán cho AI — đừng tả lại bằng lời. Dán đúng lỗi thì AI sửa trúng, khỏi phải đoán.",
        },
        {
          type: "card",
          title: "Module 2 khác Module 3 chỗ nào?",
          body: [
            "Ở đây bạn HIỂU quy trình và có sẵn prompt trong tay. Sang Module 3, bạn CHẠY THẬT quy trình này lần đầu để ra một landing page trên máy.",
          ],
        },
      ],
    },
    {
      id: "m2-b5",
      title: "Mở dự án & tạo bộ hồ sơ 6 file bằng MỘT prompt",
      description: "Mở thư mục an toàn, rồi để AI tạo cả bộ tài liệu.",
      duration: "11 phút",
      videoLabel: "Mở thư mục + một prompt “Khởi động” tạo cả bộ tài liệu",
      main: [
        {
          type: "card",
          title: "Mở dự án đúng cách (nhắc nhanh từ Module 1)",
          ordered: true,
          list: [
            "Tạo một thư mục RIÊNG cho dự án, ví dụ cafe-website (mỗi dự án một thư mục để AI không lẫn file).",
            "Mở VS Code → File → Open Folder → chọn thư mục đó.",
            "Lần đầu mở, VS Code hỏi có tin cậy thư mục không → bấm “Yes, I trust the authors”.",
            "Mở Terminal (menu Terminal → New Terminal, hoặc Ctrl + `) rồi gõ claude và Enter — như đã làm ở Module 1.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "2 điều mới cần nhớ",
          content:
            "① Mỗi dự án một thư mục riêng. ② AI chỉ “nhìn thấy” các file trong thư mục bạn đang mở — nên mở đúng thư mục là AI tự đọc được file, bạn khỏi dán tay (nhớ lỗi đốt token ở bài trước).",
        },
        {
          type: "files",
          title: "Bộ hồ sơ dự án — luôn đủ 6 file",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án: làm cho ai, mục tiêu gì." },
            { emoji: "🎯", name: "PRD.md", description: "Website cần có những trang và phần nào." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Giao diện nhìn ra sao: màu, phong cách, bố cục." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu cần lưu — chuẩn bị sẵn cho Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc AI làm lần lượt." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật làm việc cho AI (AI tự đọc mỗi phiên)." },
          ],
        },
        {
          type: "prompt",
          title: "Prompt “Khởi động” — tạo cả 6 file bằng một lần",
          intro:
            "Chỉ cần MỘT prompt cho cả bộ. Thay đúng phần trong [ngoặc] bằng brief của bạn, phần còn lại giữ nguyên:",
          copyLabel: "Copy prompt Khởi động",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Dựa trên brief dưới đây, hãy tạo đủ 6 file tài liệu cho dự án:

- PROJECT.md — giới thiệu dự án
- PRD.md — các trang và phần cần có
- UI_UX_SPEC.md — màu sắc, phong cách, bố cục
- DATABASE.md — dữ liệu cần lưu (kể cả khi giờ chưa dùng đến)
- TASKS.md — chia công việc thành các bước nhỏ, đánh số thứ tự
- CLAUDE.md — luật làm việc: làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời bằng tiếng Việt, báo cáo ngắn gọn sau mỗi bước

Viết bằng tiếng Việt, đơn giản, dễ hiểu cho người không biết code.

Brief của tôi:
[Dán brief của bạn vào đây — ví dụ: website quán cafe nhỏ, có menu và form đặt bàn, phong cách ấm áp, xem tốt trên điện thoại]`,
        },
        {
          type: "note",
          tone: "warning",
          label: "DATABASE.md — đừng bao giờ bỏ",
          content:
            "Luôn tạo DATABASE.md kể cả khi chưa lưu dữ liệu gì. Nó là bản mô tả để đến Module 7 nối được với Supabase. Bỏ nó là hụt “hợp đồng” với các module sau.",
        },
        {
          type: "card",
          title: "Kiểm tra ngay: cho AI nhắc lại (thử 30 giây)",
          body: [
            "Sau khi AI tạo xong, gõ thử: “Liệt kê 6 file bạn vừa tạo và mỗi file nói về gì.”",
            "Nếu AI tóm đúng ý bạn, nghĩa là nó đã hiểu dự án — đây là lần đầu bạn thấy AI làm việc theo tài liệu của CHÍNH MÌNH.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "AI tự tạo file trong thư mục",
          content:
            "Claude Code sẽ tự tạo 6 file này ngay trong thư mục dự án — bạn không phải copy dán tay. Nhìn danh sách file bên trái VS Code là thấy chúng hiện ra.",
        },
        {
          type: "faq",
          title: "Hỏi nhanh",
          items: [
            {
              question: "Không thấy hộp thoại hỏi “trust”?",
              answer: "Nó chỉ hiện lần đầu mở một thư mục mới. Không hiện cũng không sao.",
            },
            {
              question: "Landing page đơn giản có cần đủ 6 file không?",
              answer:
                "Có. Luôn đủ 6 file để đồng bộ với các module sau. File nào chưa dùng thì cứ để mô tả ngắn, không thừa.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b6",
      title: "Bí mật CLAUDE.md tự nạp & 3 lệnh tiết kiệm token",
      description: "Những lệnh gõ trong khung chat giúp giữ mặt bàn gọn.",
      duration: "9 phút",
      videoLabel: "/clear, @file và vì sao đừng bảo AI “đọc CLAUDE.md”",
      main: [
        {
          type: "note",
          tone: "warning",
          label: "Hiểu lầm phổ biến nhất",
          content:
            "Bạn KHÔNG bao giờ cần gõ “hãy đọc CLAUDE.md”. Claude Code tự đọc file này mỗi khi mở phiên làm việc. Gõ thêm câu đó chỉ tốn token vô ích. Việc của bạn chỉ là viết luật ngắn gọn vào file (nên dưới ~200 dòng).",
        },
        {
          type: "card",
          title: "3 lệnh gõ ngay trong khung chat",
          list: [
            "/clear — xong một việc, chuyển sang việc KHÁC không liên quan → dọn sạch mặt bàn, bắt đầu lại. Đây là lệnh tiết kiệm token quan trọng nhất.",
            "@ + tên file — đưa đúng MỘT file cho AI xem (gõ @ rồi chọn file). Nhanh và rẻ hơn để AI tự đi lục tìm.",
            "/compact — khi VẪN đang làm cùng một việc nhưng chat đã quá dài → AI tóm gọn lại lịch sử, giữ mạch mà nhẹ bàn hơn.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "/clear hay /compact?",
          content:
            "Việc MỚI, không liên quan → /clear (xóa hẳn). Cùng một việc, chat quá dài → /compact (tóm gọn, giữ mạch). Nhớ đơn giản: đổi việc thì clear, cùng việc thì compact.",
        },
        {
          type: "card",
          title: "Xem mình đã dùng bao nhiêu",
          body: [
            "Muốn biết phiên này đã tiêu tốn bao nhiêu, gõ /usage (một số phiên bản dùng /cost). Con số này giúp bạn nhận ra thói quen nào đang đốt token để chỉnh lại.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Mấu chốt: chất lượng, không chỉ tiền",
          content:
            "Dù bạn dùng gói trả tháng (không tính tiền theo lượt), giữ mặt bàn gọn vẫn cho kết quả TỐT HƠN và nhanh hơn. Tiết kiệm tiền chỉ là phần thưởng kèm theo.",
        },
        {
          type: "faq",
          title: "Hỏi nhanh về CLAUDE.md",
          items: [
            {
              question: "Có phải nhắc AI “đọc CLAUDE.md” mỗi lần không?",
              answer: "Không. Nó tự đọc mỗi phiên. Nhắc thêm chỉ tốn token.",
            },
            {
              question: "CLAUDE.md nên dài bao nhiêu?",
              answer:
                "Càng ngắn gọn càng tốt, nên dưới ~200 dòng. Dài quá vừa tốn token mỗi tin nhắn, vừa khiến AI khó tuân thủ.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b7",
      title: "Duyệt kế hoạch trước, dừng đúng lúc & lưới an toàn",
      description: "Plan Mode, phím Esc và cách hoàn tác khi lỡ sai.",
      duration: "9 phút",
      videoLabel: "Shift+Tab để lập kế hoạch, Esc để dừng, và cách quay lại",
      main: [
        {
          type: "card",
          title: "Plan Mode — bắt AI trình kế hoạch trước khi sửa",
          body: [
            "Với việc lớn hoặc phức tạp, nhấn Shift + Tab để chuyển Claude Code sang chế độ lập kế hoạch (Plan Mode).",
            "Ở chế độ này AI chỉ ĐỌC dự án và ĐỀ XUẤT kế hoạch — chưa đụng vào file nào. Bạn xem, duyệt hoặc chỉnh, rồi mới cho nó bắt tay làm.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Đây là cách rẻ nhất để tránh làm lại",
          content:
            "Sửa hướng đi khi nó mới chỉ là KẾ HOẠCH thì rẻ và nhanh. Để AI code sai cả loạt rồi mới phát hiện, phải đập đi làm lại — vừa mất thời gian vừa tốn token.",
        },
        {
          type: "card",
          title: "Esc — dừng ngay khi thấy sai",
          body: [
            "Đang chạy mà thấy AI đi SAI hướng, nhấn Esc để dừng lại ngay, rồi gõ lại yêu cầu cho đúng.",
            "Đừng ngồi chờ nó làm xong một thứ bạn biết chắc sẽ bỏ — đó là token ném đi.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Lưới an toàn khi lỡ sai",
          content:
            "Claude Code cho phép hoàn tác các thay đổi file mà nó vừa làm (thường bằng lệnh /rewind, hoặc nhấn Esc hai lần để mở lịch sử). Nhưng nó KHÔNG thay thế cho Git — nên xong một việc chạy ổn, hãy lưu lại (xem thẻ bên).",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Lưu lại = “điểm save” của game",
          body: [
            "Commit nghĩa là bấm nút “lưu điểm” cho code — giống save game. Có điểm lưu là có đường quay lại nếu bước sau hỏng.",
            "Chưa cần học Git sâu (Module 8 dạy kỹ). Giờ chỉ cần nhờ AI: “Nếu dự án chưa có Git thì khởi tạo giúp tôi, rồi lưu lại (commit) với ghi chú: xong-form-dat-ban.”",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Đừng nhầm hai kiểu nhấn Esc",
          content:
            "Nhấn Esc MỘT lần = dừng việc AI đang làm. Nhấn Esc HAI lần (khi khung trống) = mở lịch sử để quay lại. Tùy phiên bản Claude Code cách gọi có thể hơi khác — cứ thử trong lúc học.",
        },
      ],
    },
    {
      id: "m2-b8",
      title: "Ghép lại thành một thói quen + checklist tự nhắc",
      description: "Buộc tất cả lại thành phản xạ dùng mỗi ngày.",
      duration: "8 phút",
      videoLabel: "Sợi chỉ đỏ của cả Module 2",
      main: [
        {
          type: "card",
          title: "Sợi chỉ đỏ",
          body: [
            "Tất cả những gì bạn học ở module này gói lại thành một câu:",
            "Chat ngắn + việc nhỏ + prompt rõ + dọn bàn thường xuyên + kiểm tra mỗi bước + lưu điểm (commit). Vừa cho kết quả tốt nhất, vừa tốn ít token nhất.",
          ],
        },
        {
          type: "card",
          title: "Checklist trước khi nhấn Enter",
          list: [
            "Việc này là cuộc trò chuyện MỚI hay tiếp tục? (mới, khác việc → /clear)",
            "Prompt đã cụ thể và có “xong nghĩa là gì” chưa?",
            "Tin nhắn này chỉ có MỘT việc chứ?",
            "Việc lớn → đã nhấn Shift + Tab để duyệt kế hoạch chưa?",
            "Xong rồi mình sẽ kiểm tra bằng cách nào?",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Bước tiếp theo",
          content:
            "Xong phần chuẩn bị! Ở Module 3, bạn sẽ chạy đúng quy trình này lần đầu để có một landing page thật ngay trên máy.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Bảng ❌/✅ 30 giây (đáng in ra dán cạnh máy)",
          list: [
            "❌ Một chat cả ngày → ✅ /clear khi đổi việc",
            "❌ Dán cả file → ✅ dùng @tên-file",
            "❌ Nhồi nhiều việc → ✅ một tin nhắn một việc",
            "❌ “Làm đẹp hơn” → ✅ nói cụ thể + tiêu chí xong",
            "❌ Cho AI tự thêm tính năng → ✅ “hỏi tôi trước”",
            "❌ Bỏ qua Plan Mode → ✅ Shift + Tab duyệt trước",
            "❌ Quên lưu điểm → ✅ commit sau mỗi việc xong",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "In ra dùng trong tuần đầu",
          content:
            "Bảng này đáng in ra dán cạnh màn hình. Tuần đầu làm theo, vài hôm là thành phản xạ.",
        },
      ],
    },
  ],
};
