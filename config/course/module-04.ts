import type { CourseDocModule } from "@/types/course";

/** Module 4: Website doanh nghiệp nhiều trang — bản tinh gọn, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module04: CourseDocModule = {
  id: "module-4",
  order: 4,
  title: "Module 4: Tạo Website doanh nghiệp nhiều trang",
  shortTitle: "04. Website doanh nghiệp",
  tagline: "Nhiều trang · Menu điều hướng · Form liên hệ",
  description:
    "Nâng cấp từ landing page 1 trang (Module 3) lên website nhiều trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ — có menu chung và form nhận khách. Vẫn đúng quy trình Module 2, chỉ khác là nhiều trang hơn. Mỗi bài có 1 prompt để bạn copy dùng ngay.",
  outcome:
    "Có website doanh nghiệp 4 trang chạy được trên máy bạn: menu điều hướng chung, form liên hệ, giao diện đồng nhất — dạng web được thuê làm nhiều nhất.",
  lessons: [
    {
      id: "m4-b1",
      title: "Bài 4.1 — Website doanh nghiệp khác landing page thế nào?",
      description: "Hiểu rõ sản phẩm sắp làm: nhiều trang, một menu chung.",
      duration: "6 phút",
      videoLabel: "1 trang bán 1 thứ vs nhiều trang tạo uy tín",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hình dung website doanh nghiệp: nhiều trang nối với nhau bằng một menu chung.",
        },
        {
          type: "card",
          title: "Landing page vs website doanh nghiệp",
          list: [
            "Landing page (Module 3): một trang, tập trung một mục tiêu — như tờ rơi một mặt.",
            "Website doanh nghiệp: nhiều trang (Trang chủ, Giới thiệu, Dịch vụ, Liên hệ) — như cuốn brochure lật được nhiều trang.",
            "Điểm chung: khách vào, hiểu công ty, rồi bấm liên hệ. Điểm khác: giờ có menu để đi giữa các trang.",
          ],
        },
        {
          type: "card",
          title: "4 trang chuẩn — mỗi trang một nhiệm vụ",
          ordered: true,
          list: [
            "Trang chủ: công ty làm gì, dịch vụ nổi bật, lý do chọn, nút liên hệ.",
            "Giới thiệu: câu chuyện công ty, đội ngũ, giá trị — để khách tin.",
            "Dịch vụ: liệt kê từng dịch vụ, mỗi cái một mô tả rõ.",
            "Liên hệ: form nhận thông tin khách, số điện thoại, địa chỉ, bản đồ.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nghĩ nhiều trang là khó gấp bốn — thật ra vẫn đúng một quy trình, chỉ lặp lại cho từng trang.",
            "Nhồi hết mọi thứ vào Trang chủ, ba trang kia bỏ trống.",
            "Mỗi trang một kiểu menu, khách bấm loạn — menu phải giống nhau ở mọi trang.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Tin tốt",
          content:
            "Quy trình không đổi — vẫn vòng lặp bạn vừa chạy ở Module 3: brief → bộ 6 tài liệu → AI đọc & lập kế hoạch → bạn duyệt → code từng phần → kiểm tra → commit. Chỉ khác: nhiều trang hơn.",
        },
        {
          type: "card",
          title: "Ví dụ hợp để thực hành",
          list: [
            "Công ty thiết kế nội thất.",
            "Văn phòng luật / kế toán.",
            "Trung tâm tiếng Anh.",
            "Công ty vận chuyển.",
            "Xưởng may, xưởng in.",
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Phân biệt được landing page và website nhiều trang.",
            "✓ Nhớ 4 trang và nhiệm vụ mỗi trang.",
            "✓ Biết menu phải giống nhau ở mọi trang.",
          ],
        },
      ],
    },
    {
      id: "m4-b2",
      title: "Bài 4.2 — Chuẩn bị Business Brief",
      description: "Điền một tờ khai ngắn để AI hiểu đúng công ty ngay từ đầu.",
      duration: "8 phút",
      videoLabel: "Điền tờ khai công ty, đỡ AI đoán trật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một Business Brief điền sẵn — như tờ khai công ty để AI khỏi đoán.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Copy mẫu Business Brief bên dưới, dán vào một file text (hoặc để sẵn trong ghi chú).",
            "Điền từng dòng cho công ty của bạn — thật hay tưởng tượng đều được.",
            "Chưa nghĩ ra thì dựa vào ví dụ ở cột phải mà phóng tác.",
            "Điền xong giữ lại: bài 4.3 sẽ dán nguyên brief này cho AI.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — mẫu Business Brief để điền",
          intro:
            "Đây là mẫu để bạn ĐIỀN (không phải để gửi AI ngay). Copy về, điền vào sau mỗi dấu hai chấm:",
          copyLabel: "Copy mẫu Business Brief",
          prompt: `Tên công ty:

Lĩnh vực hoạt động:

Các dịch vụ (liệt kê 3-6):
1.
2.
3.

Khách hàng mục tiêu:

Lý do khách nên chọn (3 điểm):
1.
2.
3.

Màu chủ đạo mong muốn:

Phong cách (chuyên nghiệp / thân thiện / sang trọng...):

Các trang cần có: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ

Thông tin liên hệ (SĐT / Zalo / Email / Địa chỉ):`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Điền sơ sài kiểu “công ty nội thất, làm đẹp” — AI thiếu thông tin, ra chung chung.",
            "Bỏ trống phần dịch vụ và lý do chọn — đây là ruột của cả website.",
            "Chờ có công ty thật mới làm — cứ lấy công ty tưởng tượng để tập trước.",
          ],
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
            "Chưa có công ty thật? Làm cho một công ty tưởng tượng hoặc cho người quen — đây chính là dạng dự án bạn có thể nhận làm dịch vụ sau này.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Điền đủ tên, lĩnh vực, dịch vụ, khách hàng.",
            "✓ Có 3 lý do chọn và màu/phong cách mong muốn.",
            "✓ Giữ lại brief để dùng ở bài 4.3.",
          ],
        },
      ],
    },
    {
      id: "m4-b3",
      title: "Bài 4.3 — Tạo bộ tài liệu cho website doanh nghiệp",
      description: "Vẫn 6 file quen thuộc, chỉ khác PRD mô tả nhiều trang.",
      duration: "10 phút",
      videoLabel: "Dựng bộ hồ sơ dự án cho web nhiều trang",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có bộ 6 file để AI đọc một lần là hiểu cả dự án — giống Module 2, chỉ khác PRD mô tả 4 trang.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Tạo thư mục riêng cho dự án (vd noi-that-nha-xinh), mở bằng VS Code (File → Open Folder), bấm “Yes, I trust the authors”.",
            "Mở Terminal (Ctrl + `), gõ claude rồi Enter — khung chat với Claude hiện ra ngay trong Terminal.",
            "Dán prompt bên dưới vào khung chat đó (nhớ thay chỗ [Dán Business Brief] bằng brief đã điền ở bài 4.2).",
            "Claude hỏi cho phép tạo file thì bấm đồng ý. Nhìn cột file bên trái VS Code sẽ thấy 6 file .md hiện ra.",
          ],
        },
        {
          type: "files",
          title: "Bộ 6 file lõi (giống Module 2)",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án: công ty gì, làm cho ai." },
            { emoji: "🎯", name: "PRD.md", description: "Mô tả TỪNG trang trong 4 trang — “đề bài” chính." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Màu, phong cách; menu + footer giống nhau mọi trang." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu form liên hệ cần lưu — để dành Module 7." },
            { emoji: "✅", name: "TASKS.md", description: "Chia việc theo từng trang, làm lần lượt." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật cho AI (nó TỰ đọc mỗi phiên)." },
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng cả bộ tài liệu một phát",
          intro: "Dán vào khung chat Claude đang mở trong Terminal, sau khi đã thay brief vào cuối:",
          copyLabel: "Copy prompt tạo tài liệu",
          prompt: `Bạn là Product Manager kiêm Senior Frontend. Tôi muốn làm website doanh nghiệp NHIỀU TRANG. Dựa trên Business Brief cuối prompt này, hãy tạo đủ 6 file tài liệu:

- PROJECT.md — giới thiệu dự án: công ty gì, làm cho ai
- PRD.md — mô tả rõ TỪNG trang (Trang chủ, Giới thiệu, Dịch vụ, Liên hệ): mỗi trang gồm những khu vực nào, hiển thị nội dung gì
- UI_UX_SPEC.md — màu sắc, phong cách, bố cục; nhấn mạnh MENU điều hướng và FOOTER phải giống nhau ở mọi trang
- DATABASE.md — dữ liệu form liên hệ cần lưu sau này (họ tên, SĐT, dịch vụ quan tâm, lời nhắn)
- TASKS.md — chia việc theo từng trang, đánh số thứ tự, mỗi task nhỏ và kiểm tra được
- CLAUDE.md — luật: đọc tài liệu trước, làm từng task, không tự thêm tính năng ngoài tài liệu, trả lời tiếng Việt, báo cáo ngắn sau mỗi bước

Yêu cầu chung: viết tiếng Việt dễ hiểu cho người không biết code; chưa cần đăng nhập, chưa cần kết nối database; ưu tiên đẹp trên điện thoại.

Business Brief:
[Dán Business Brief đã điền ở bài 4.2 vào đây]`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nhận 6 file xong không mở PRD.md đọc lại — thiếu trang hoặc thiếu khu vực mà không biết.",
            "Bỏ DATABASE.md vì “giờ chưa lưu gì” — rồi Module 7 hụt hẫng.",
            "Quên dán brief, để AI tự đoán ra công ty chung chung.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Đọc lại PRD.md ngay",
          content:
            "PRD giờ mô tả 4 trang. Mở PRD.md đọc lướt: thiếu trang nào hoặc thiếu khu vực nào thì bảo AI bổ sung TRƯỚC khi code.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có đủ 6 file .md trong cột file VS Code.",
            "✓ PRD.md mô tả rõ cả 4 trang.",
            "✓ Đã đọc lướt, chỉnh chỗ chưa đúng ý.",
          ],
        },
      ],
    },
    {
      id: "m4-b4",
      title: "Bài 4.4 — Dựng khung website (menu + 4 trang trống)",
      description: "AI đọc tài liệu, lập kế hoạch, rồi dựng bộ khung có menu chạy được.",
      duration: "12 phút",
      videoLabel: "Khung nhà: menu + footer + 4 phòng còn trống",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content:
            "Có bộ khung website: 4 trang trống + menu chung bấm chuyển đúng trang. Như xây nhà xong phần khung, chưa bày đồ.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Bật Plan Mode: bấm Shift + Tab tới khi thấy dòng “plan mode” gần ô chat.",
            "Dán prompt “Đọc & lập kế hoạch” bên dưới. AI chỉ ĐỌC và ĐỀ XUẤT, chưa đụng file.",
            "Đọc kế hoạch: thiếu/thừa gì thì bảo chỉnh ngay lúc này.",
            "Ưng rồi → bấm Shift + Tab lần nữa để thoát Plan Mode, rồi dán prompt “Dựng khung”.",
            "Xong, nhờ AI “chạy web lên cho tôi xem thử” — AI đưa link dạng http://localhost:…, giữ Ctrl bấm vào để mở. Bấm từng mục menu, thu nhỏ cửa sổ (hoặc xem trên điện thoại) để thử nút 3 gạch.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — đọc tài liệu & lập kế hoạch",
          intro: "Bật Plan Mode (Shift + Tab) rồi dán vào khung chat Claude:",
          copyLabel: "Copy prompt Lập kế hoạch",
          prompt: `Hãy đọc các tài liệu dự án (PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md).

Sau đó:
1. Tóm tắt lại dự án bằng vài câu để tôi chắc bạn hiểu đúng.
2. Hỏi lại nếu còn điểm chưa rõ.
3. Đề xuất kế hoạch làm theo từng bước, đúng thứ tự trong TASKS.md.

CHƯA code gì cả. Trình kế hoạch xong thì dừng chờ tôi duyệt.`,
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng khung website",
          intro: "Sau khi duyệt kế hoạch, thoát Plan Mode (Shift + Tab) rồi dán:",
          copyLabel: "Copy prompt Dựng khung",
          prompt: `Kế hoạch đã ổn. Hãy bắt đầu Task 1: dựng khung website.

Yêu cầu:
- Tạo đủ 4 trang: Trang chủ, Giới thiệu, Dịch vụ, Liên hệ (nội dung tạm để trống).
- Menu điều hướng hiển thị ở MỌI trang, bấm vào chuyển đúng trang.
- Footer giống nhau ở mọi trang.
- Trên điện thoại, menu thu gọn thành nút 3 gạch, mở/đóng được.

Làm xong: chạy web lên cho tôi xem, hướng dẫn tôi bấm thử menu. Nếu tôi bảo ổn thì: nếu dự án chưa có Git thì khởi tạo giúp tôi, rồi commit kèm ghi chú: xong-khung-website.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ Plan Mode, cho AI code luôn — sai hướng thì phải đập đi làm lại.",
            "Không thử nút 3 gạch trên màn hình nhỏ, tưởng menu đã xong.",
            "Khung chạy ổn mà quên commit, tới lúc hỏng không có đường lùi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Khung đạt khi…",
          content:
            "Bấm từng mục menu chuyển đúng trang, không lỗi đỏ trong Terminal, nút 3 gạch trên điện thoại mở/đóng được — là khung đã đạt, commit rồi qua bài 4.5.",
        },
        {
          type: "note",
          tone: "info",
          label: "Nhắc lại Module 2",
          content:
            "Esc để dừng ngay khi thấy AI đi sai hướng. Và đừng bảo AI “đọc CLAUDE.md” — nó tự đọc mỗi phiên.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đủ 4 trang trống, menu bấm chuyển đúng.",
            "✓ Menu mobile (nút 3 gạch) mở/đóng được.",
            "✓ Đã commit khung website.",
          ],
        },
      ],
    },
    {
      id: "m4-b5",
      title: "Bài 4.5 — Làm Trang chủ",
      description: "Trang khách nhìn đầu tiên — quyết định ở lại hay rời đi.",
      duration: "15 phút",
      videoLabel: "Trang chủ: ấn tượng 5 giây đầu",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Trang chủ đầy nội dung, dẫn khách bấm tới trang Liên hệ.",
        },
        {
          type: "card",
          title: "Trang chủ chuẩn gồm",
          ordered: true,
          list: [
            "Hero: một câu nói rõ công ty làm gì + nút CTA (vd “Nhận tư vấn”).",
            "Dịch vụ nổi bật: 3–6 dịch vụ, mỗi cái một thẻ ngắn.",
            "Lý do chọn chúng tôi: 3–4 điểm mạnh lấy từ Business Brief.",
            "CTA cuối trang: mời khách liên hệ.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt “Làm Trang chủ” bên dưới vào khung chat Claude.",
            "Xong, nhờ AI “chạy web lên cho tôi xem”, cuộn hết Trang chủ, bấm thử nút CTA xem có dẫn tới trang Liên hệ không.",
            "Xem trên điện thoại: chữ không tràn, thẻ dịch vụ không vỡ.",
            "Ưng rồi bảo AI commit kèm ghi chú: xong-trang-chu.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — làm Trang chủ",
          intro: "Dán vào khung chat Claude (cùng phiên đang mở):",
          copyLabel: "Copy prompt Trang chủ",
          prompt: `Hãy làm tiếp task: hoàn thiện Trang chủ theo PRD.md.

Yêu cầu:
- Hero: tiêu đề nói thẳng lợi ích cho khách, mô tả ngắn, nút CTA dẫn tới trang Liên hệ.
- Khu dịch vụ nổi bật: mỗi dịch vụ một thẻ có tên + mô tả ngắn.
- Khu "Lý do chọn chúng tôi": dùng các điểm mạnh trong Business Brief.
- CTA cuối trang mời khách liên hệ.
- Giữ đúng màu và phong cách trong UI_UX_SPEC.md; đẹp trên cả máy tính và điện thoại.

Làm xong chạy web lên cho tôi xem và dừng lại, báo bạn đã làm gì.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Để tiêu đề hero chỉ ghi tên công ty — khách không hiểu bạn giúp được gì.",
            "Viết đoạn văn dài lê thê, khách lười đọc bỏ đi.",
            "Quên kiểm tra nút CTA có dẫn đúng trang Liên hệ không.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo tiêu đề hero",
          content:
            "Nói thẳng lợi ích: “Thiết kế nội thất chung cư trọn gói — bàn giao đúng hẹn” thay vì chỉ ghi tên công ty.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Chưa có ảnh thật thì sao?",
              answer:
                "Bảo AI dùng ảnh placeholder (ảnh tạm giữ chỗ) trước. Có ảnh thật thì thay file trong thư mục, hoặc nhờ AI thay giúp.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Hero có tiêu đề lợi ích + nút CTA.",
            "✓ Có khu dịch vụ nổi bật và lý do chọn.",
            "✓ CTA dẫn đúng trang Liên hệ, đã commit.",
          ],
        },
      ],
    },
    {
      id: "m4-b6",
      title: "Bài 4.6 — Trang Giới thiệu & trang Dịch vụ",
      description: "Hai trang tạo uy tín — làm lần lượt từng trang một.",
      duration: "18 phút",
      videoLabel: "Kể chuyện công ty và bày dịch vụ",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hoàn thiện trang Giới thiệu và trang Dịch vụ — làm xong trang này mới sang trang kia.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt “Trang Giới thiệu”, đợi AI xong, nhờ chạy web lên xem, kiểm tra rồi commit kèm ghi chú: xong-trang-gioi-thieu.",
            "Xong mới dán prompt “Trang Dịch vụ” — đừng gộp hai trang một lần.",
            "Kiểm tra trang Dịch vụ: nút “Nhận tư vấn” cuối mỗi dịch vụ có dẫn tới trang Liên hệ không.",
            "Ưng rồi commit kèm ghi chú: xong-trang-dich-vu.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — trang Giới thiệu",
          intro: "Dán vào khung chat Claude:",
          copyLabel: "Copy prompt Giới thiệu",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Giới thiệu theo PRD.md.

Trang gồm:
- Câu chuyện ngắn về công ty (vì sao thành lập, phục vụ ai).
- Giá trị / cam kết với khách hàng.
- Đội ngũ hoặc năng lực (dùng ảnh placeholder cũng được).
- CTA mời khách xem dịch vụ hoặc liên hệ.

Giọng văn chuyên nghiệp, đáng tin, không phô trương. Làm xong chạy web lên cho tôi xem.`,
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — trang Dịch vụ",
          intro: "Chỉ dán sau khi trang Giới thiệu đã ổn:",
          copyLabel: "Copy prompt Dịch vụ",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Dịch vụ theo PRD.md.

Yêu cầu:
- Mỗi dịch vụ một khối riêng: tên, mô tả, lợi ích chính, ảnh minh họa (placeholder được).
- Cuối mỗi dịch vụ có nút "Nhận tư vấn" dẫn tới trang Liên hệ.
- Bố cục dễ quét nhanh bằng mắt, tránh đoạn văn quá dài.

Làm xong chạy web lên cho tôi xem.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Gộp cả hai trang vào một prompt — sai một chỗ là rối cả hai.",
            "Viết trang Dịch vụ thành đoạn văn dài, khách khó quét nhanh.",
            "Quên nút “Nhận tư vấn”, khách xem xong không biết bấm đâu để liên hệ.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Một prompt một trang",
          content:
            "Làm xong trang này, xem kết quả, ưng rồi mới sang trang kia. Gộp nhiều trang là công thức gây rối.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Trang Giới thiệu có câu chuyện + giá trị + CTA.",
            "✓ Trang Dịch vụ: mỗi dịch vụ một khối, có nút Nhận tư vấn.",
            "✓ Đã commit từng trang.",
          ],
        },
      ],
    },
    {
      id: "m4-b7",
      title: "Bài 4.7 — Trang Liên hệ & form nhận khách",
      description: "Nơi biến người xem thành khách hàng tiềm năng.",
      duration: "12 phút",
      videoLabel: "Form liên hệ: nơi thu về khách thật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Trang Liên hệ có form nhận thông tin khách, bấm gửi hiện lời cảm ơn.",
        },
        {
          type: "card",
          title: "Làm ngay",
          ordered: true,
          list: [
            "Dán prompt “Trang Liên hệ” bên dưới vào khung chat Claude.",
            "Xong, nhờ AI chạy web lên, nhập thử họ tên + SĐT + chọn dịch vụ, bấm Gửi.",
            "Kiểm tra: có hiện dòng “Cảm ơn bạn, chúng tôi sẽ liên hệ trong 24 giờ” không.",
            "Xem trên điện thoại: form dễ nhập, ô không tràn. Ưng rồi commit kèm ghi chú: xong-trang-lien-he.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — trang Liên hệ",
          intro: "Dán vào khung chat Claude:",
          copyLabel: "Copy prompt Liên hệ",
          prompt: `Hãy làm tiếp task: hoàn thiện trang Liên hệ theo PRD.md và DATABASE.md.

Trang gồm:
- Form liên hệ: họ tên, số điện thoại, dịch vụ quan tâm (chọn từ danh sách), lời nhắn.
- Sau khi bấm Gửi, hiện dòng: "Cảm ơn bạn, chúng tôi sẽ liên hệ trong 24 giờ".
- Thông tin liên hệ: số điện thoại, Zalo, email, địa chỉ.
- Bản đồ (nhúng Google Maps hoặc ảnh placeholder).

Lưu ý:
- CHƯA cần kết nối database — thiết kế form đúng các trường trong DATABASE.md để Module 7 nối Supabase.
- Form dễ nhập trên điện thoại.

Làm xong chạy web lên cho tôi thử gửi form.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Đặt trường form khác với DATABASE.md — Module 7 nối Supabase sẽ lệch.",
            "Bấm Gửi mà không hiện lời cảm ơn, khách tưởng lỗi rồi bỏ đi.",
            "Form nhiều ô bắt buộc rườm rà, khách ngại điền.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao có “dịch vụ quan tâm”?",
          content:
            "Khách chọn sẵn dịch vụ thì bạn biết ngay họ cần gì, tư vấn nhanh hơn — dữ liệu này rất giá trị khi lưu vào Supabase ở Module 7.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Form đủ trường theo DATABASE.md.",
            "✓ Bấm Gửi hiện lời cảm ơn.",
            "✓ Có SĐT/Zalo/email/địa chỉ, đã commit.",
          ],
        },
      ],
    },
    {
      id: "m4-b8",
      title: "Bài 4.8 — Rà soát toàn trang & bài tập cuối",
      description: "Kiểm tra như một khách hàng thật trước khi coi là xong.",
      duration: "12 phút",
      videoLabel: "Đi một vòng cả website như khách lạ",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Đi một vòng cả website như khách lạ, tìm và vá chỗ chưa đạt.",
        },
        {
          type: "card",
          title: "Làm ngay — tự đi một vòng",
          ordered: true,
          list: [
            "Nhờ AI “chạy web lên cho tôi xem”, mở Trang chủ như thể bạn là khách lần đầu.",
            "Bấm từng mục menu ở cả máy tính và điện thoại — có chuyển đúng trang không.",
            "Bấm mọi nút CTA — có dẫn tới trang Liên hệ không. Gửi thử form xem có lời cảm ơn.",
            "Ghi lại chỗ nào chưa đạt, rồi dán prompt “Rà soát” bên dưới để AI tự soát và vá.",
          ],
        },
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Menu bấm đúng trang ở cả máy tính và điện thoại.",
            "4 trang đều có nội dung, không còn khu vực trống.",
            "Màu sắc, font chữ đồng nhất giữa các trang.",
            "Mọi nút CTA đều dẫn tới trang Liên hệ.",
            "Form gửi được và hiện thông báo cảm ơn.",
            "Xem trên điện thoại không vỡ giao diện.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — rà soát tổng thể",
          intro: "Dán vào khung chat Claude để AI tự soát và sửa từng điểm:",
          copyLabel: "Copy prompt Rà soát",
          prompt: `Hãy tự rà soát toàn bộ website theo checklist:
1. Menu điều hướng hoạt động đúng ở mọi trang.
2. Nội dung mỗi trang khớp với PRD.md.
3. Giao diện đồng nhất theo UI_UX_SPEC.md.
4. Các nút CTA đều dẫn tới trang Liên hệ.
5. Hiển thị tốt trên điện thoại.

Liệt kê những điểm CHƯA đạt, rồi sửa từng điểm một. Sửa xong tóm tắt ngắn các thay đổi để tôi kiểm tra. Nếu tôi bảo ổn thì commit kèm ghi chú: hoan-thien-website.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chỉ xem trên máy tính, quên thử điện thoại — nơi hay vỡ giao diện nhất.",
            "Sửa xong không kiểm tra lại, đè lỗi mới lên lỗi cũ.",
            "Coi là xong mà quên commit bản hoàn thiện.",
          ],
        },
      ],
      aside: [
        {
          type: "card",
          title: "Bài tập",
          body: [
            "Tự làm một website doanh nghiệp mới từ đầu (không xem lại video) cho một trong các đề:",
          ],
          list: [
            "Văn phòng luật.",
            "Trung tâm ngoại ngữ.",
            "Công ty sửa chữa nhà.",
            "Phòng khám nha khoa.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn làm được website nhiều trang có menu điều hướng và form liên hệ — đây là dạng website được thuê làm nhiều nhất, giá phổ biến từ 3–10 triệu đồng mỗi dự án.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đã đi trọn một vòng như khách lạ.",
            "✓ Vá hết điểm trong checklist hoàn thiện.",
            "✓ Đã commit bản hoàn thiện + làm bài tập.",
          ],
        },
      ],
    },
  ],
};
