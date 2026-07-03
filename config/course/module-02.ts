import type { CourseDocModule } from "@/types/course";

/** Module 2: Làm việc với AI đúng cách — tư duy, tránh lỗi tốn token, quy trình giao việc. */
export const module02: CourseDocModule = {
  id: "module-2",
  order: 2,
  title: "Module 2: Làm việc với AI sao cho trúng ý và đỡ tốn",
  shortTitle: "02. Làm việc với AI",
  tagline: "Hiểu AI · Tránh lỗi tốn token · Quy trình giao việc",
  description:
    "Trước khi bắt tay làm website thật ở Module 3, mình muốn bạn hiểu AI hoạt động ra sao, tránh mấy thói quen khiến nó làm sai và ngốn token, rồi nắm cái quy trình giao việc mà bạn sẽ dùng đi dùng lại cả khóa — cuối bài có luôn một prompt tạo sẵn cả bộ hồ sơ dự án.",
  outcome:
    "Hiểu cách AI làm việc, tránh được các lỗi tốn token hay gặp, và có sẵn quy trình + prompt mẫu để giao việc cho AI ở mọi module sau.",
  lessons: [
    {
      id: "m2-b1",
      title: "AI thật ra là ai? Hiểu đúng để giao việc cho trúng",
      description:
        "4 điều về AI — hiểu rồi thì lỗi nào của người mới bạn cũng đoán được vì sao.",
      duration: "10 phút",
      videoLabel: "AI không phải Google, cũng chẳng phải lập trình viên",
      main: [
        {
          type: "card",
          title: "Bài này chưa làm web đâu — nhưng đừng bỏ qua",
          body: [
            "Cả module này mình chưa đụng tới website. Bạn đang tập cách “nói chuyện” với AI cho đúng, để sang Module 3 lúc làm thật thì mọi thứ chạy mượt và đỡ tốn.",
            "Chỉ cần thấm 4 điều dưới đây thôi, sau này gặp lỗi gì bạn cũng tự hiểu được vì sao nó xảy ra.",
          ],
        },
        {
          type: "card",
          title: "1. AI giống một trợ lý cực giỏi nhưng hay quên",
          body: [
            "Bạn cứ tưởng tượng mình thuê được một bạn trợ lý siêu giỏi, làm gì cũng nhanh. Có điều cứ mỗi lần bạn mở một cửa sổ chat MỚI là bạn ấy quên sạch — quên bạn là ai, quên luôn dự án đang làm, y như hai người mới gặp lần đầu.",
            "Nên đừng trông đợi AI “nhớ chuyện hôm qua”. Mỗi lần ngồi vào làm, bạn phải đưa lại thông tin cho nó.",
          ],
        },
        {
          type: "card",
          title: "2. AI làm việc trên một cái bàn có hạn — token nằm ở đây",
          body: [
            "Hình dung AI làm việc trên một mặt bàn. Mọi câu bạn gõ và mọi thứ nó viết ra đều bày lên cái bàn đó. Mà bàn thì chỉ rộng có chừng ấy, và mỗi lần bạn nhấn Enter, nó đọc lại từ đầu tới cuối cả cái bàn rồi mới trả lời.",
          ],
          list: [
            "Lượng chữ trên bàn được đong bằng một đơn vị gọi là token.",
            "Chat càng dài thì bàn càng chật, câu trả lời vừa chậm đi vừa tốn hơn.",
            "Bàn mà bừa bộn thì AI dễ bỏ sót đúng cái quan trọng giữa mớ lộn xộn.",
          ],
        },
        {
          type: "card",
          title: "3. Chỗ nào bạn nói lửng, AI sẽ tự đoán",
          body: [
            "Bạn ra tiệm bảo “may cho em cái áo đẹp đẹp”, thợ sẽ tự đoán kiểu, tự đoán màu, tự đoán cỡ — rồi giao cho bạn một cái áo may khéo thật nhưng chẳng đúng ý.",
            "AI y chang vậy. Bạn nói mơ hồ thì nó cứ tự tin mà đoán, rồi làm sai. Chịu khó nói rõ ngay từ đầu là nó làm trúng, mình đỡ phải sửa tới sửa lui.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "4. Chat kéo càng dài, AI càng lơ mơ",
          content:
            "Ngồi trò chuyện lâu quá thì AI hay quên mất điều bạn dặn lúc đầu và trả lời lạc đi đâu ấy. Gặp lúc đó, dọn bàn làm lại từ đầu nhanh hơn nhiều so với ngồi cãi cho nó hiểu.",
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Sao phải học mấy cái này trước?",
          content:
            "Chưa cần biết gì về code đâu. Chỉ cần nhớ ba điều: AI giỏi nhưng hay quên, làm trên cái bàn có hạn, và hay đoán. Ba điều này giải thích được gần hết mẹo trong cả khóa.",
        },
        {
          type: "card",
          title: "4 điều gói lại",
          list: [
            "Mở chat mới là AI quên sạch.",
            "Bàn làm việc (token) có hạn, giữ cho gọn.",
            "Nói lửng thì AI đoán, mà đoán thì hay trật.",
            "Chat dài quá thì AI lơ mơ, nên làm lại cho khỏe.",
          ],
        },
        {
          type: "faq",
          title: "Thắc mắc hay gặp",
          items: [
            {
              question: "Sao cùng một câu mà hai lần AI trả lời khác nhau vậy?",
              answer:
                "Bình thường thôi. AI không phải cái máy tính bấm ra một đáp số cố định — mỗi lần nó “nghĩ” lại một kiểu. Chưa ưng thì cứ bảo làm lại, hoặc tả kỹ hơn cho nó.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b2",
      title: "Mấy thói quen khiến bạn tốn token mà không hay",
      description: "Toàn lỗi làm AI vừa sai vừa ngốn tài nguyên — mà tránh được hết.",
      duration: "10 phút",
      videoLabel: "Càng làm càng tốn mà kết quả vẫn chưa ưng, vì đâu?",
      main: [
        {
          type: "card",
          title: "Nhắc lại một câu từ bài trước",
          body: [
            "Nhớ nhé: mỗi lần bạn nhấn Enter, AI đọc lại cả cuộc trò chuyện từ đầu. Cho nên cái gì thừa trên bàn cũng bị “tính tiền” lại ở mọi câu về sau.",
            "Mấy thói quen dưới đây tốn kém, mà tốn cũng chỉ vì đúng một lý do này thôi.",
          ],
        },
        {
          type: "card",
          title: "Lỗi 1 — Ôm một cửa sổ chat cho cả ngày",
          body: [
            "Làm xong cái menu, bạn quay sang hỏi cách chỉnh ảnh, xong lại hỏi tiếp giá tên miền — tất cả trong cùng một chat. Mỗi câu mới, AI phải lôi cả buổi sáng chẳng liên quan ra đọc lại.",
            "Cách làm gọn hơn: xong một việc thì gõ /clear (bài sau chỉ cho) để dọn bàn, coi việc mới như một cuộc trò chuyện mới.",
          ],
        },
        {
          type: "card",
          title: "Lỗi 2 — Cứ dán cả file mỗi lần hỏi",
          body: [
            "Bạn copy nguyên một file dài dán vào chat để hỏi, rồi mấy câu sau lại dán lại lần nữa. Mỗi lần như vậy file đó bị tính tiền lại từ đầu — hỏi qua hỏi lại 20 lượt là bạn trả tiền cho nó 20 lần.",
            "Thay vào đó, chỉ cần nhắc TÊN file thôi, để AI tự mở ra đọc. File nằm sẵn trong thư mục dự án rồi, nó với tay là tới.",
          ],
        },
        {
          type: "card",
          title: "Lỗi 3 — Nói kiểu “làm đẹp hơn đi”",
          body: [
            "“Làm đẹp hơn”, “nhìn chưa ổn, sửa lại” — kiểu này AI phải đoán bạn muốn gì, đoán trật, bạn lại sửa, nó lại đoán tiếp… mỗi vòng như vậy đều ăn token.",
            "Nói thẳng ra bạn muốn gì sẽ nhanh hơn nhiều: “phóng to cái tiêu đề, đổi nút sang màu cam, giãn các mục ra cho thoáng” — và cho nó biết thế nào là xong.",
          ],
        },
        {
          type: "card",
          title: "Còn hai lỗi nữa, nói nhanh",
          list: [
            "Nhồi năm sáu việc vào một câu: chỉ cần sai một chỗ là kéo hỏng cả chùm, sửa lại phải gánh token của cả sáu. Tốt nhất một tin nhắn lo một việc thôi.",
            "Cãi qua cãi lại cả chục lượt trong một chat đã rối: mỗi lượt lại gửi kèm hết mấy lần thử sai trước đó. Thử ba lượt không xong thì /clear rồi tả lại từ đầu cho sạch.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Kiểu phí phạm nặng nhất",
          content:
            "Bắt AI đọc đi đọc lại cùng một file qua chục lượt là cách đốt token nhanh nhất — mà tránh được dễ ợt. Cứ mở đúng thư mục dự án (bài sau chỉ) là AI tự đọc file, bạn khỏi dán tay.",
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Hai câu người mới hay cãi",
          items: [
            {
              question: "Dán cả file cho chắc ăn, có sao đâu?",
              answer:
                "AI đọc được file trong thư mục dự án mà. Dán tay vừa tốn token, vừa dễ lệch với bản thật đang nằm trên máy bạn.",
            },
            {
              question: "Ráng cãi thêm vài lượt, biết đâu nó hiểu?",
              answer:
                "Chat càng dài AI càng lơ mơ. Dọn bàn rồi tả lại cho rõ gần như lúc nào cũng nhanh hơn ngồi cãi tiếp.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Sao biết chat đã “dài”?",
          content:
            "Khi bạn đã qua lại cả chục lượt, hoặc thấy AI bắt đầu quên điều dặn lúc đầu — đó là lúc nên dọn bàn (/clear).",
        },
      ],
    },
    {
      id: "m2-b3",
      title: "Vì sao AI hay làm sai ý — và cách nói cho nó hiểu",
      description: "Khoanh vùng cho gọn, bám đúng yêu cầu, đừng để AI tự chế.",
      duration: "9 phút",
      videoLabel: "Nói thế nào để AI làm đúng cái bạn cần",
      main: [
        {
          type: "card",
          title: "5 kiểu nói khiến AI làm trật (và nói lại cho đúng)",
          list: [
            "Bảo trống không “web bị lỗi, sửa đi” thì AI lục tung cả dự án, sửa luôn cả chỗ đang chạy ngon. Nói rõ ra: “chỉ sửa cái nút Gửi trong file form liên hệ thôi, chỗ khác đừng đụng”.",
            "Để AI tự tiện thêm tính năng thì website cứ phình ra, lệch khỏi ý bạn, tốn token đẻ ra rồi lại tốn token dọn. Dặn trước: “chỉ làm đúng phần tôi liệt kê, muốn thêm gì phải hỏi tôi”.",
            "Đang làm dở mà bạn đổi ý liên tục thì công nửa chừng đổ sông đổ biển. Chốt xong yêu cầu rồi hẵng cho làm; muốn đổi lớn thì dừng lại, tả lại từ đầu.",
            "Gõ vài từ khóa cụt lủn như tra Google (“form Supabase”) thì nhận lại câu trả lời chung chung. Giao việc cho AI như giao cho một cộng sự: kể bối cảnh, nói việc cần làm, dặn cái gì không được đụng.",
            "Viết một prompt 500 chữ lan man thì yêu cầu quan trọng bị chôn mất, mà cả đoạn đó còn bị gửi lại mỗi lượt. Ba dòng gọn là đủ: đang làm gì, cần làm gì, xong trông ra sao.",
          ],
        },
        {
          type: "card",
          title: "Công thức một prompt gọn mà đủ",
          ordered: true,
          list: [
            "Bối cảnh: một câu cho AI biết bạn đang làm gì.",
            "Việc cần làm: càng cụ thể càng đỡ phải đoán.",
            "Ràng buộc: chỗ nào KHÔNG được đụng vào.",
            "Xong là thế nào: để cả bạn và AI cùng biết lúc nào coi như đạt.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Coi AI như cộng sự, đừng coi như Google",
          content:
            "Google trả về mấy trang có sẵn cho bạn chọn. Còn AI thì TỰ TAY làm ra cái mới theo lời bạn — nên lời bạn càng rõ, nó làm càng trúng. Mà làm xong nhớ rà lại, đừng vội tin 100%.",
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Khoanh vùng cũng là tiết kiệm",
          content:
            "Bảo AI “đi dò lỗi khắp dự án” là nó lôi cả đống file lên bàn (rồi bị tính tiền ở mọi lượt sau), trong khi lỗi thường chỉ nằm gọn trong một file. Chỉ đúng file cho nó thì sửa vừa nhanh vừa rẻ.",
        },
        {
          type: "card",
          title: "“Xong là thế nào” — vài ví dụ cho dễ hình dung",
          list: [
            "Bấm nút xong thì hiện chữ “Đã gửi”.",
            "Mở trên điện thoại chữ không bị tràn ra ngoài màn hình.",
            "Ảnh sản phẩm hiện đủ, không bị vỡ nét.",
          ],
        },
      ],
    },
    {
      id: "m2-b4",
      title: "Quy trình giao việc cho AI — cái vòng bạn lặp lại cả khóa",
      description: "Một vòng quen tay, module nào cũng xoay quanh nó.",
      duration: "9 phút",
      videoLabel: "Vòng lặp: brief → tài liệu → duyệt kế hoạch → làm từng việc → kiểm tra",
      main: [
        {
          type: "card",
          title: "Trước tiên, “brief” là gì đã?",
          body: [
            "Brief là bản mô tả ngắn gọn bạn muốn gì, giống cái đề bài ấy. Mọi việc với AI đều bắt đầu từ một cái brief cho rõ ràng.",
            "Ví dụ brief cho quán cafe: “Website giới thiệu một quán cafe nhỏ, có menu với form đặt bàn, phong cách ấm áp, xem trên điện thoại phải đẹp.”",
          ],
        },
        {
          type: "card",
          title: "Vòng lặp giao việc",
          ordered: true,
          list: [
            "Viết một cái brief ngắn — bạn muốn gì.",
            "Nhờ AI biến brief đó thành bộ tài liệu dự án (bài sau chỉ).",
            "Cho AI đọc tài liệu, tóm tắt lại và đề xuất kế hoạch — khoan code vội.",
            "Bạn xem kế hoạch, thấy chỗ nào chưa ổn thì chỉnh.",
            "Cho AI làm đúng MỘT việc thôi.",
            "Bạn kiểm tra kết quả — chạy thử, ngó lên màn hình.",
            "Sai thì bảo nó sửa đúng chỗ; đúng thì lưu lại (commit) rồi qua việc kế.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "6 “prompt lõi” bạn sẽ gặp lại suốt khóa",
          content:
            "Khởi động · Đọc & lập kế hoạch · Giao task · Sửa lỗi · Chỉnh giao diện · Rà soát. Khỏi học thuộc — chỉ cần biết lần nào làm với AI cũng xoay quanh sáu kiểu prompt này. Mấy module sau mình sẽ gọi tên chúng khi cần.",
        },
        {
          type: "card",
          title: "Mấy điều đừng quên",
          list: [
            "Luôn khởi đầu bằng một cái brief.",
            "Một tin nhắn chỉ lo một việc.",
            "Xem kế hoạch xong rồi mới cho code.",
            "Làm bước nào kiểm bước đó, đừng để dồn tới cuối.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo nhỏ: dán đúng dòng lỗi, đừng tả lại",
          content:
            "Lúc chạy thử mà ra lỗi, cứ COPY nguyên dòng báo lỗi trong Terminal dán cho AI — đừng ngồi tả lại bằng lời. Dán đúng cái lỗi thì nó sửa trúng ngay, khỏi phải đoán.",
        },
        {
          type: "card",
          title: "Module 2 với Module 3 khác nhau chỗ nào?",
          body: [
            "Ở đây bạn HIỂU cái quy trình và có sẵn prompt trong tay. Qua Module 3, bạn sẽ CHẠY THẬT nó lần đầu để ra một landing page ngay trên máy mình.",
          ],
        },
      ],
    },
    {
      id: "m2-b5",
      title: "Mở dự án và để AI tạo cả bộ hồ sơ chỉ bằng một prompt",
      description: "Mở thư mục cho an toàn, rồi để AI dựng luôn cả bộ tài liệu.",
      duration: "11 phút",
      videoLabel: "Mở thư mục + một prompt “Khởi động” dựng cả bộ tài liệu",
      main: [
        {
          type: "card",
          title: "Mở dự án cho đúng (nhắc nhanh từ Module 1)",
          ordered: true,
          list: [
            "Tạo một thư mục RIÊNG cho dự án, ví dụ cafe-website. Mỗi dự án một thư mục để AI khỏi lẫn file lung tung.",
            "Mở VS Code, vào File → Open Folder, chọn đúng thư mục đó.",
            "Lần đầu mở, VS Code hỏi có tin thư mục này không — bấm “Yes, I trust the authors”.",
            "Mở Terminal (menu Terminal → New Terminal, hoặc bấm Ctrl + `), gõ claude rồi Enter — như hồi Module 1.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Hai điều mới cần nhớ",
          content:
            "Một là mỗi dự án một thư mục riêng. Hai là AI chỉ “nhìn thấy” mấy file nằm trong thư mục bạn đang mở — nên mở đúng thư mục thì nó tự đọc được file, bạn khỏi phải dán tay (nhớ cái lỗi tốn token ở bài trước chứ?).",
        },
        {
          type: "files",
          title: "Bộ hồ sơ dự án — lúc nào cũng đủ 6 file",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án: làm cho ai, để làm gì." },
            { emoji: "🎯", name: "PRD.md", description: "Website gồm những trang nào, mỗi trang có gì." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Nhìn ra sao: màu mè, phong cách, bố cục." },
            { emoji: "🗂", name: "DATABASE.md", description: "Cần lưu dữ liệu gì — dọn sẵn cho Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc, AI làm lần lượt từng cái." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật làm việc cho AI (nó tự đọc mỗi phiên)." },
          ],
        },
        {
          type: "prompt",
          title: "Prompt “Khởi động” — một phát ra đủ 6 file",
          intro:
            "Cả bộ chỉ cần MỘT prompt. Bạn thay đúng phần trong [ngoặc] bằng brief của mình, còn lại giữ nguyên:",
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
          label: "DATABASE.md — đừng có bỏ",
          content:
            "Cứ tạo DATABASE.md kể cả khi giờ chưa lưu dữ liệu gì. Nó là bản mô tả để tới Module 7 mình nối được với Supabase. Bỏ nó là hụt mất “lời hẹn” với mấy module sau.",
        },
        {
          type: "card",
          title: "Thử ngay cho vui: bảo AI nhắc lại (30 giây)",
          body: [
            "AI tạo xong, bạn gõ thử: “Liệt kê 6 file bạn vừa tạo, mỗi file nói về cái gì.”",
            "Nó tóm đúng ý bạn nghĩa là đã hiểu dự án — và đây là lần đầu bạn thấy AI làm việc dựa trên tài liệu của CHÍNH BẠN.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "AI tự tạo file trong thư mục",
          content:
            "Claude Code sẽ tự đẻ ra 6 file này ngay trong thư mục dự án, bạn không phải copy dán gì hết. Ngó cột danh sách file bên trái VS Code là thấy chúng hiện ra.",
        },
        {
          type: "faq",
          title: "Hỏi nhanh",
          items: [
            {
              question: "Không thấy hộp hỏi “trust” thì sao?",
              answer: "Nó chỉ hiện lần đầu mở một thư mục mới thôi. Không thấy cũng chẳng sao.",
            },
            {
              question: "Landing page đơn giản có cần đủ 6 file không?",
              answer:
                "Có nha. Cứ đủ 6 file cho đồng bộ với mấy module sau. File nào chưa dùng tới thì để mô tả ngắn gọn, không thừa đâu.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b6",
      title: "Chuyện CLAUDE.md tự đọc và vài lệnh giúp đỡ tốn",
      description: "Mấy lệnh gõ thẳng trong khung chat, giữ cái bàn cho gọn.",
      duration: "9 phút",
      videoLabel: "/clear, @file và vì sao đừng bảo AI “đọc CLAUDE.md”",
      main: [
        {
          type: "note",
          tone: "warning",
          label: "Hiểu lầm phổ biến nhất",
          content:
            "Bạn KHÔNG bao giờ cần gõ “hãy đọc CLAUDE.md”. Claude Code tự đọc file này mỗi khi mở phiên rồi. Gõ thêm câu đó chỉ tốn token vô ích. Việc của bạn chỉ là viết luật cho gọn vào file thôi (ráng dưới ~200 dòng).",
        },
        {
          type: "card",
          title: "3 lệnh gõ thẳng trong khung chat",
          list: [
            "/clear — làm xong một việc, chuyển qua việc KHÁC không liên quan thì gõ cái này để dọn sạch bàn, bắt đầu lại từ đầu. Đây là lệnh tiết kiệm token đáng nhớ nhất.",
            "@ rồi tên file — đưa đúng MỘT file cho AI xem (gõ @ xong chọn file). Cách này nhanh và rẻ hơn để nó tự đi lục tìm.",
            "/compact — vẫn đang làm cùng một việc mà chat lỡ dài quá, gõ cái này để AI tóm gọn lại phần đã nói, giữ mạch mà bàn nhẹ đi.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "/clear hay /compact?",
          content:
            "Việc MỚI, chẳng liên quan gì → /clear (xóa hẳn). Cùng một việc mà chat dài quá → /compact (tóm gọn, giữ mạch). Nhớ cho dễ: đổi việc thì clear, cùng việc thì compact.",
        },
        {
          type: "card",
          title: "Xem mình đã xài hết bao nhiêu",
          body: [
            "Muốn biết phiên này đã tiêu tốn cỡ nào thì gõ /usage (vài bản dùng /cost). Con số đó giúp bạn nhận ra thói quen nào đang ngốn token để mà chỉnh lại.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Cốt lõi là chất lượng, không chỉ tiền",
          content:
            "Kể cả bạn xài gói trả tháng (không tính tiền theo lượt), giữ cái bàn cho gọn vẫn cho ra kết quả TỐT HƠN và nhanh hơn. Tiết kiệm tiền chỉ là phần thưởng kèm thêm.",
        },
        {
          type: "faq",
          title: "Hỏi nhanh về CLAUDE.md",
          items: [
            {
              question: "Có phải nhắc AI “đọc CLAUDE.md” mỗi lần không?",
              answer: "Không. Nó tự đọc mỗi phiên rồi. Nhắc thêm chỉ tốn token.",
            },
            {
              question: "CLAUDE.md nên viết dài cỡ nào?",
              answer:
                "Càng gọn càng tốt, ráng dưới ~200 dòng. Dài quá vừa tốn token mỗi tin nhắn, vừa làm AI khó theo cho hết.",
            },
          ],
        },
      ],
    },
    {
      id: "m2-b7",
      title: "Xem kế hoạch trước khi cho làm, và cách quay lại khi lỡ",
      description: "Plan Mode, phím Esc, và tấm lưới đỡ khi lỡ tay sai.",
      duration: "9 phút",
      videoLabel: "Shift+Tab để lập kế hoạch, Esc để dừng, và cách quay lại",
      main: [
        {
          type: "card",
          title: "Plan Mode — bắt AI trình kế hoạch trước khi đụng vào",
          body: [
            "Với việc lớn hoặc rối rối, bạn nhấn Shift + Tab để chuyển Claude Code sang chế độ lập kế hoạch (Plan Mode).",
            "Ở chế độ này AI chỉ ĐỌC dự án rồi ĐỀ XUẤT kế hoạch thôi, chưa đụng vào file nào hết. Bạn xem, gật đầu hoặc chỉnh lại, rồi mới cho nó bắt tay làm.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Đây là cách rẻ nhất để khỏi làm lại",
          content:
            "Chỉnh hướng đi lúc nó mới là KẾ HOẠCH thì vừa nhanh vừa rẻ. Chứ để AI code sai cả loạt rồi mới phát hiện, phải đập đi làm lại thì vừa mất công vừa tốn token.",
        },
        {
          type: "card",
          title: "Esc — thấy sai là dừng liền",
          body: [
            "Đang chạy mà bạn thấy AI đi sai hướng, nhấn Esc để nó dừng ngay, rồi gõ lại yêu cầu cho đúng.",
            "Đừng ngồi chờ nó làm cho xong một thứ mà bạn biết chắc sẽ bỏ — chờ vậy là ném token qua cửa sổ.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Tấm lưới đỡ khi lỡ tay",
          content:
            "Claude Code cho phép hoàn tác mấy thay đổi file mà nó vừa làm (thường là gõ /rewind, hoặc nhấn Esc hai lần để mở lịch sử). Nhưng cái này KHÔNG thay được Git đâu — nên xong một việc chạy ổn thì nhớ lưu lại (xem thẻ bên).",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Lưu lại = cái “điểm save” trong game",
          body: [
            "Commit nói cho vui là bấm nút “lưu điểm” cho code, y như save game. Có điểm lưu thì lỡ bước sau hỏng, mình còn đường quay về.",
            "Chưa cần học Git sâu đâu (Module 8 sẽ dạy kỹ). Giờ chỉ cần nhờ AI: “Nếu dự án chưa có Git thì khởi tạo giúp tôi, rồi lưu lại (commit) kèm ghi chú: xong-form-dat-ban.”",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Đừng lộn hai kiểu nhấn Esc",
          content:
            "Nhấn Esc MỘT lần là dừng việc AI đang làm. Nhấn Esc HAI lần (lúc khung chat trống) là mở lịch sử để quay lại. Tùy bản Claude Code cách gọi có thể hơi khác — bạn cứ thử trong lúc học là quen.",
        },
      ],
    },
    {
      id: "m2-b8",
      title: "Gói lại thành thói quen — tấm bảng dán cạnh máy",
      description: "Buộc hết mọi thứ lại thành phản xạ dùng mỗi ngày.",
      duration: "8 phút",
      videoLabel: "Sợi chỉ đỏ xuyên suốt cả Module 2",
      main: [
        {
          type: "card",
          title: "Sợi chỉ đỏ",
          body: [
            "Tất cả những gì học ở module này gói gọn lại trong một câu:",
            "Chat ngắn, việc nhỏ, prompt rõ, dọn bàn cho thường, kiểm tra sau mỗi bước, và nhớ lưu điểm (commit). Vừa cho kết quả ngon nhất, vừa tốn ít token nhất.",
          ],
        },
        {
          type: "card",
          title: "Ngó qua trước khi nhấn Enter",
          list: [
            "Việc này là cuộc trò chuyện MỚI hay làm tiếp cái cũ? (mới, khác việc thì /clear)",
            "Prompt đã đủ cụ thể, đã nói rõ “xong là thế nào” chưa?",
            "Tin nhắn này có đúng một việc thôi chứ?",
            "Việc lớn thì đã Shift + Tab xem kế hoạch trước chưa?",
            "Xong rồi mình sẽ kiểm tra bằng cách nào?",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Bước kế tiếp",
          content:
            "Xong phần chuẩn bị rồi! Qua Module 3, bạn sẽ chạy đúng cái quy trình này lần đầu để có một landing page thật ngay trên máy.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Bảng ❌/✅ 30 giây (đáng in ra dán cạnh máy)",
          list: [
            "❌ Một chat cả ngày → ✅ /clear khi đổi việc",
            "❌ Dán cả file → ✅ dùng @tên-file",
            "❌ Nhồi nhiều việc một lúc → ✅ một tin nhắn một việc",
            "❌ “Làm đẹp hơn” → ✅ nói cụ thể + nói rõ xong là sao",
            "❌ Để AI tự thêm tính năng → ✅ “muốn thêm gì hỏi tôi trước”",
            "❌ Bỏ qua Plan Mode → ✅ Shift + Tab xem trước",
            "❌ Quên lưu điểm → ✅ commit sau mỗi việc xong",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "In ra xài trong tuần đầu",
          content:
            "Tấm bảng này đáng in ra dán cạnh màn hình. Tuần đầu cứ làm theo, vài bữa là thành phản xạ.",
        },
      ],
    },
  ],
};
