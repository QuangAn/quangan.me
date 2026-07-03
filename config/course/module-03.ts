import type { CourseDocModule } from "@/types/course";

/** Module 3: Có Landing Page đầu tiên sau 30 phút. */
export const module03: CourseDocModule = {
  id: "module-3",
  order: 3,
  title: "Module 3: Có Landing Page đầu tiên sau 30 phút",
  shortTitle: "03. Landing Page đầu tiên",
  tagline: "Thực hành trọn quy trình",
  description:
    "Dùng lại đúng quy trình ở Module 2: có ý tưởng, tạo đủ bộ document cho AI, để AI đọc tài liệu, lập kế hoạch rồi mới bắt đầu code landing page.",
  outcome: "Có landing page chạy được trên máy của bạn",
  lessons: [
    {
      id: "m3-b1",
      title: "Hiểu đúng: Landing Page là gì?",
      description: "Giải thích đơn giản để người chưa biết code cũng hiểu.",
      duration: "5 phút",
      videoLabel: "Landing Page là gì và dùng để làm gì?",
      main: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Landing Page là một trang web tập trung vào một mục tiêu rõ ràng: giới thiệu sản phẩm, nhận tư vấn, nhận đăng ký, đặt lịch hoặc bán một dịch vụ cụ thể.",
          ],
          list: [
            "Khách vào trang.",
            "Đọc thông tin chính.",
            "Hiểu lợi ích.",
            "Bấm nút liên hệ, đăng ký hoặc mua hàng.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Kết quả sau bài",
          content:
            "Bạn hiểu landing page không phải website phức tạp, mà là một trang bán hàng/tư vấn đơn giản, tập trung vào một mục tiêu.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ dễ hiểu",
          list: [
            "Trang giới thiệu khóa học.",
            "Trang đặt lịch spa.",
            "Trang bán một sản phẩm mỹ phẩm.",
            "Trang giới thiệu quán cafe.",
            "Trang nhận khách tư vấn thiết kế nhà.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Không học code ở bài này",
          content: "Mục tiêu là hiểu mình sắp tạo ra sản phẩm gì.",
        },
      ],
    },
    {
      id: "m3-b2",
      title: "Chuẩn bị ý tưởng Landing Page",
      description: "Trước khi yêu cầu AI code, hãy viết rõ mình muốn làm trang gì.",
      duration: "8 phút",
      videoLabel: "Điền Landing Brief trước khi làm",
      main: [
        {
          type: "card",
          title: "Landing Brief là gì?",
          body: [
            "Landing Brief là bản mô tả ngắn để AI hiểu bạn muốn làm trang web cho ai, bán gì, màu gì, nội dung gì và khách cần bấm vào đâu.",
          ],
        },
        {
          type: "prompt",
          title: "Mẫu Landing Brief",
          copyLabel: "Copy mẫu",
          prompt: `Tên landing page:

Lĩnh vực:

Sản phẩm hoặc dịch vụ chính:

Khách hàng mục tiêu:

Màu chủ đạo mong muốn:

Phong cách giao diện:

Nội dung nút kêu gọi hành động:

Số điện thoại/Zalo:

Địa chỉ/Facebook nếu có:

3 lợi ích chính muốn nhấn mạnh:
1.
2.
3.`,
        },
      ],
      aside: [
        {
          type: "card",
          title: "Ví dụ đã điền",
          body: [
            "Tên: Landing page quán cafe Mây.",
            "Khách hàng: người trẻ, dân văn phòng, gia đình.",
            "Mục tiêu: khách xem menu và đặt bàn qua Zalo.",
            "Màu: nâu, kem, xanh lá nhẹ.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Mẹo",
          content:
            "Người mới nên bắt đầu bằng spa, cafe, shop mỹ phẩm hoặc khóa học online vì nội dung dễ hình dung.",
        },
      ],
    },
    {
      id: "m3-b3",
      title: "Tạo thư mục dự án Landing Page",
      description: "Mỗi website nên có một thư mục riêng để tránh lẫn file.",
      duration: "6 phút",
      videoLabel: "Tạo thư mục và mở bằng VS Code",
      main: [
        {
          type: "card",
          title: "Cách làm",
          ordered: true,
          list: [
            "Ra màn hình Desktop.",
            "Tạo thư mục mới, ví dụ: landing-cafe.",
            "Mở VS Code.",
            "Chọn File → Open Folder.",
            "Chọn thư mục landing-cafe.",
            "Mở Terminal trong VS Code bằng Terminal → New Terminal.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Kết quả",
          content:
            "VS Code đang mở đúng thư mục landing page và Terminal đã sẵn sàng.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Vì sao phải tạo thư mục riêng?",
          body: [
            "Vì AI sẽ tạo nhiều file trong project. Nếu để lẫn với file khác, bạn rất dễ rối và khó sửa lỗi.",
          ],
        },
        {
          type: "faq",
          items: [
            {
              question: "Không thấy Terminal trong VS Code?",
              answer:
                "Nhìn thanh menu trên cùng, chọn Terminal rồi chọn New Terminal. Hoặc dùng phím tắt Ctrl + ` trên Windows.",
            },
          ],
        },
      ],
    },
    {
      id: "m3-b4",
      title: "Tạo đầy đủ bộ document cho AI",
      description: "Dùng lại đúng bộ hồ sơ đã học ở Module 2, không nhảy thẳng vào code.",
      duration: "15 phút",
      videoLabel: "Tạo bộ document cho landing page",
      main: [
        {
          type: "files",
          title: "Bộ document cần tạo",
          items: [
            { emoji: "📄", name: "PROJECT.md", description: "Giới thiệu dự án." },
            { emoji: "🎯", name: "PRD.md", description: "Website cần làm gì." },
            { emoji: "🎨", name: "UI_UX_SPEC.md", description: "Giao diện nhìn như thế nào." },
            { emoji: "🗂", name: "DATABASE.md", description: "Dữ liệu cần lưu." },
            { emoji: "✅", name: "TASKS.md", description: "Danh sách việc AI cần làm." },
            { emoji: "🤖", name: "CLAUDE.md", description: "Luật làm việc cho AI." },
          ],
        },
        {
          type: "prompt",
          title: "Prompt tạo đủ document",
          prompt: `Bạn là Product Manager + Senior Frontend Developer.

Tôi muốn tạo một landing page đầu tiên bằng AI.

Dựa trên Landing Brief dưới đây, hãy tạo đầy đủ 6 file document cho project:

1. PROJECT.md
2. PRD.md
3. UI_UX_SPEC.md
4. DATABASE.md
5. TASKS.md
6. CLAUDE.md

Yêu cầu:
- Viết bằng tiếng Việt dễ hiểu cho người không biết code
- Không dùng thuật ngữ khó nếu không cần thiết
- Landing page chưa cần đăng nhập
- Landing page chưa cần database phức tạp
- Nếu có form liên hệ thì DATABASE.md chỉ mô tả dữ liệu cần lưu sau này
- TASKS.md phải chia việc thành từng bước nhỏ để AI làm lần lượt
- CLAUDE.md phải quy định AI không tự ý làm ngoài phạm vi document

Landing Brief:
[Dán Landing Brief đã điền ở đây]`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Quan trọng",
          content:
            "Dù landing page đơn giản, vẫn nên tạo đủ bộ document để hình thành quy trình làm việc đúng với AI.",
        },
        {
          type: "card",
          title: "Cách lưu file",
          ordered: true,
          list: [
            "Yêu cầu AI tạo từng file.",
            "Trong VS Code, bấm New File.",
            "Đặt đúng tên file, ví dụ PROJECT.md.",
            "Dán nội dung AI tạo vào file.",
            "Lưu lại bằng Ctrl + S.",
          ],
        },
      ],
    },
    {
      id: "m3-b5",
      title: "Hiểu nhanh từng file document",
      description: "Không cần học thuật ngữ, chỉ cần biết mỗi file giúp AI hiểu phần nào.",
      duration: "10 phút",
      videoLabel: "Giải thích bộ document bằng ví dụ xây nhà",
      main: [
        {
          type: "card",
          title: "Giải thích dễ hiểu",
          list: [
            "PROJECT.md: tờ giới thiệu dự án. Trang này làm cho ai, mục tiêu là gì.",
            "PRD.md: danh sách thứ website cần có. Ví dụ hero, lợi ích, dịch vụ, form.",
            "UI_UX_SPEC.md: website nhìn như thế nào. Màu gì, phong cách gì, dễ dùng ra sao.",
            "DATABASE.md: nếu có form, sau này cần lưu họ tên, số điện thoại, nhu cầu.",
            "TASKS.md: việc cần làm theo thứ tự. AI làm từng task, không làm lan man.",
            "CLAUDE.md: luật làm việc. AI phải đọc document, hỏi lại nếu chưa rõ, không tự ý phá cấu trúc.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Tư duy cần nhớ",
          content:
            "Bộ document giống bản thiết kế trước khi xây nhà. Có bản thiết kế thì AI làm đúng hơn, sửa dễ hơn.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Landing Page có cần DATABASE.md không?",
              answer:
                "Có, nhưng viết đơn giản. Ví dụ: nếu sau này lưu form liên hệ thì cần họ tên, số điện thoại, nhu cầu. Module này chưa cần kết nối Supabase.",
            },
            {
              question: "Có cần API không?",
              answer:
                "Module 3 chưa cần API riêng. Người mới chỉ cần có landing page chạy được và form hiển thị được.",
            },
          ],
        },
      ],
    },
    {
      id: "m3-b6",
      title: "Để AI đọc toàn bộ document trước khi code",
      description: "Bước bắt buộc để AI hiểu dự án trước khi bắt đầu làm.",
      duration: "8 phút",
      videoLabel: "Yêu cầu Claude đọc document và tóm tắt",
      main: [
        {
          type: "prompt",
          title: "Prompt bắt AI đọc document",
          prompt: `Hãy đọc toàn bộ các file document trong project:

- PROJECT.md
- PRD.md
- UI_UX_SPEC.md
- DATABASE.md
- TASKS.md
- CLAUDE.md

Sau đó hãy làm 3 việc:
1. Tóm tắt lại bạn hiểu dự án này như thế nào
2. Chỉ ra điểm nào còn chưa rõ cần hỏi lại tôi
3. Đề xuất kế hoạch thực hiện theo từng bước

Không viết code ở bước này.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Không code ngay",
          content:
            "Nếu AI vừa đọc document vừa code luôn, bạn sẽ khó kiểm soát. Hãy bắt AI tóm tắt và lập kế hoạch trước.",
        },
        {
          type: "card",
          title: "Khi nào được sang bước tiếp?",
          body: [
            "Khi AI tóm tắt đúng ý tưởng, đúng mục tiêu, đúng cấu trúc landing page và không còn câu hỏi quan trọng.",
          ],
        },
      ],
    },
    {
      id: "m3-b7",
      title: "Cho AI lập kế hoạch trước khi code",
      description: "AI sẽ làm từng bước, không làm tất cả một lúc.",
      duration: "7 phút",
      videoLabel: "Kiểm tra kế hoạch AI đưa ra",
      main: [
        {
          type: "card",
          title: "Kế hoạch tốt nên có",
          ordered: true,
          list: [
            "Tạo cấu trúc project.",
            "Tạo giao diện landing page cơ bản.",
            "Thêm hero section.",
            "Thêm lợi ích/sản phẩm/dịch vụ.",
            "Thêm feedback hoặc bằng chứng.",
            "Thêm form liên hệ.",
            "Tối ưu mobile.",
            "Chạy thử và sửa lỗi.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chỉnh kế hoạch",
          prompt: `Kế hoạch này hơi khó với người mới.
Hãy chia lại TASKS thành các bước nhỏ hơn.
Mỗi bước chỉ làm một việc rõ ràng.
Sau mỗi bước phải có cách kiểm tra kết quả.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu",
          content:
            "Bạn không bị choáng. Mỗi lần chỉ yêu cầu AI làm một việc nhỏ và kiểm tra được ngay.",
        },
      ],
    },
    {
      id: "m3-b8",
      title: "Cho AI bắt đầu code Task 1",
      description: "Bắt đầu tạo landing page nhưng vẫn kiểm soát theo document.",
      duration: "12 phút",
      videoLabel: "Yêu cầu Claude Code bắt đầu Task 1",
      main: [
        {
          type: "prompt",
          title: "Prompt bắt đầu code",
          prompt: `Dựa trên toàn bộ document trong project và kế hoạch đã thống nhất.

Hãy bắt đầu thực hiện Task 1 trong TASKS.md.

Yêu cầu:
- Chỉ làm Task 1
- Không tự ý làm sang Task khác
- Sau khi làm xong, hãy nói rõ đã tạo/sửa những file nào
- Hướng dẫn tôi cách chạy thử để kiểm tra`,
        },
        {
          type: "note",
          tone: "warning",
          label: "Quy tắc",
          content:
            "Không yêu cầu AI “làm hết website” ngay từ đầu. Làm từng task sẽ ít lỗi và dễ sửa hơn.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Kết quả mong muốn",
          body: [
            "Project bắt đầu có file website đầu tiên, ví dụ index.html hoặc cấu trúc web app tùy công nghệ AI chọn.",
          ],
        },
      ],
    },
    {
      id: "m3-b9",
      title: "Chạy Landing Page trên máy tính",
      description: "Bạn cần biết mở website của mình ở đâu.",
      duration: "10 phút",
      videoLabel: "Chạy website bằng Terminal",
      main: [
        {
          type: "card",
          title: "Cách chạy thường gặp",
          body: ["Nếu AI tạo project dùng Node.js, trong Terminal thường chạy:"],
        },
        {
          type: "code",
          title: "Lệnh chạy website",
          code: "npm install\nnpm run dev",
          note: "Sau đó mở link hiện trong Terminal, thường là http://localhost:3000 hoặc http://localhost:5173.",
        },
        {
          type: "note",
          tone: "success",
          label: "Kết quả",
          content: "Bạn thấy landing page đầu tiên của mình chạy trên trình duyệt.",
        },
      ],
      aside: [
        {
          type: "faq",
          items: [
            {
              question: "Lệnh npm install báo lỗi?",
              answer:
                "Copy toàn bộ lỗi trong Terminal và gửi lại cho AI bằng prompt sửa lỗi ở bài 13.",
            },
            {
              question: "Không thấy link localhost?",
              answer: "Hỏi AI project này chạy bằng lệnh nào và cần mở cổng nào.",
            },
            {
              question: "Website mở ra trắng?",
              answer:
                "Thường do lỗi code. Copy lỗi trong Terminal hoặc Console gửi AI sửa.",
            },
          ],
        },
      ],
    },
    {
      id: "m3-b10",
      title: "Nhìn Landing Page và gọi tên từng phần",
      description: "Biết website gồm những khối nào để yêu cầu AI sửa đúng chỗ.",
      duration: "8 phút",
      videoLabel: "Gọi tên các phần trên landing page",
      main: [
        {
          type: "card",
          title: "Một landing page cơ bản gồm",
          ordered: true,
          list: [
            "Hero: phần đầu tiên, nói rõ bạn bán gì.",
            "Lợi ích: vì sao khách nên quan tâm.",
            "Sản phẩm/Dịch vụ: bạn cung cấp cái gì.",
            "Bằng chứng: feedback, hình ảnh thật, cam kết.",
            "FAQ: câu hỏi thường gặp.",
            "CTA/Form: nơi khách liên hệ, đăng ký hoặc đặt lịch.",
            "Footer: thông tin cuối trang.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Mẹo",
          content:
            "Khi muốn sửa, hãy nói rõ tên phần. Ví dụ: “sửa phần Hero”, “thêm FAQ”, “đổi nút CTA”.",
        },
      ],
    },
    {
      id: "m3-b11",
      title: "Chỉnh logo, màu, nội dung và ảnh",
      description: "Biến landing page mẫu thành landing page của chính bạn.",
      duration: "15 phút",
      videoLabel: "Yêu cầu AI chỉnh giao diện",
      main: [
        {
          type: "card",
          title: "Những thứ nên chỉnh trước",
          list: [
            "Tiêu đề chính ở đầu trang.",
            "Màu chủ đạo.",
            "Nút kêu gọi hành động.",
            "Ảnh sản phẩm hoặc ảnh dịch vụ.",
            "Số điện thoại, Zalo, địa chỉ.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt sửa giao diện",
          prompt: `Hãy chỉnh landing page theo yêu cầu sau:

1. Đổi màu chủ đạo thành [màu bạn muốn]
2. Đổi tiêu đề chính thành: [tiêu đề mới]
3. Đổi nút CTA thành: [nội dung nút]
4. Cập nhật số điện thoại/Zalo: [số của bạn]
5. Cập nhật nội dung theo PROJECT.md và PRD.md
6. Giữ nguyên cấu trúc hiện tại, chỉ chỉnh phần cần thiết
7. Tối ưu để xem đẹp trên điện thoại`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Lưu ý",
          content:
            "Luôn nói rõ “giữ nguyên cấu trúc hiện tại” nếu bạn chỉ muốn sửa nhẹ. Nếu không, AI có thể thay đổi cả layout.",
        },
      ],
    },
    {
      id: "m3-b12",
      title: "Thêm form liên hệ và nút CTA",
      description: "Giúp landing page có thể nhận khách hàng tiềm năng.",
      duration: "10 phút",
      videoLabel: "Thêm form liên hệ",
      main: [
        {
          type: "card",
          title: "Form đơn giản nên có",
          list: [
            "Họ tên.",
            "Số điện thoại.",
            "Nhu cầu hoặc lời nhắn.",
            "Nút gửi thông tin.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt thêm form",
          prompt: `Hãy thêm form liên hệ vào landing page.

Form gồm:
- Họ tên
- Số điện thoại
- Nhu cầu tư vấn
- Nút gửi thông tin

Yêu cầu:
- Form ngắn gọn, dễ nhập trên điện thoại
- Sau khi bấm gửi, hiển thị thông báo: "Cảm ơn bạn, chúng tôi sẽ liên hệ sớm"
- Chưa cần kết nối database ở module này
- Nhưng hãy thiết kế form theo DATABASE.md để sau này dễ lưu vào Supabase
- Không làm hỏng các phần giao diện hiện có`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Module này chưa kết nối database",
          content:
            "DATABASE.md chỉ giúp AI chuẩn bị đúng dữ liệu cho các module sau.",
        },
      ],
    },
    {
      id: "m3-b13",
      title: "Sửa lỗi thường gặp khi làm Landing Page",
      description: "Biết cách đưa lỗi cho AI sửa, không hoảng khi website lỗi.",
      duration: "10 phút",
      videoLabel: "Copy lỗi và gửi lại cho AI",
      main: [
        {
          type: "card",
          title: "Các lỗi hay gặp",
          list: [
            "Website trắng màn hình.",
            "Lệnh npm run dev báo lỗi.",
            "Ảnh không hiện.",
            "Nút bấm không hoạt động.",
            "Mobile bị vỡ giao diện.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt sửa lỗi",
          prompt: `Tôi đang gặp lỗi khi chạy landing page.

Lỗi hiển thị là:
[Dán lỗi trong Terminal hoặc mô tả lỗi trên màn hình]

Tôi vừa làm thao tác này trước khi lỗi xảy ra:
[Mô tả thao tác]

Hãy phân tích nguyên nhân, chỉ rõ file cần sửa và sửa theo cách an toàn nhất.
Yêu cầu:
- Đọc lại PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md, CLAUDE.md trước khi sửa
- Không thay đổi những phần không liên quan
- Sau khi sửa xong, hướng dẫn tôi cách kiểm tra lại`,
        },
      ],
      aside: [
        {
          type: "faq",
          items: [
            {
              question: "Website trắng màn hình?",
              answer:
                "Thường do lỗi JavaScript hoặc import sai file. Hãy copy lỗi trong Terminal hoặc Console gửi cho AI.",
            },
            {
              question: "Ảnh không hiện?",
              answer:
                "Thường do sai đường dẫn ảnh. Hãy hỏi AI kiểm tra đường dẫn file ảnh.",
            },
            {
              question: "Nút bấm không chạy?",
              answer: "Yêu cầu AI kiểm tra phần xử lý click hoặc link của nút.",
            },
          ],
        },
      ],
    },
    {
      id: "m3-b14",
      title: "Hoàn thiện và bài tập cuối Module 3",
      description: "Tự tạo một landing page khác bằng đúng quy trình document.",
      duration: "15 phút",
      videoLabel: "Tổng kết quy trình Module 3",
      main: [
        {
          type: "card",
          title: "Checklist hoàn thiện",
          list: [
            "Có đủ 6 file document.",
            "AI đã đọc document trước khi code.",
            "AI đã lập kế hoạch.",
            "Landing page chạy được trên máy.",
            "Hero rõ ràng.",
            "Có lợi ích nổi bật.",
            "Có sản phẩm/dịch vụ.",
            "Có nút CTA.",
            "Có form liên hệ.",
            "Xem ổn trên điện thoại.",
            "Không còn lỗi khi chạy website.",
          ],
        },
        {
          type: "card",
          title: "Bài tập",
          body: [
            "Không xem lại video, hãy tự tạo một landing page mới theo một trong các đề sau:",
          ],
          list: [
            "Landing page cho spa.",
            "Landing page cho quán cafe.",
            "Landing page cho khóa học online.",
            "Landing page cho shop mỹ phẩm.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt bài tập",
          prompt: `Tôi muốn tự luyện lại Module 3.
Hãy đóng vai người hướng dẫn và chỉ giao từng bước, không làm thay toàn bộ.

Đề bài của tôi là:
[Tên landing page muốn làm]

Yêu cầu quy trình:
1. Bắt đầu bằng Landing Brief
2. Tạo đủ 6 document: PROJECT.md, PRD.md, UI_UX_SPEC.md, DATABASE.md, TASKS.md, CLAUDE.md
3. Đọc document và tóm tắt lại
4. Lập kế hoạch
5. Chỉ khi tôi đồng ý mới bắt đầu code từng task`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn có website đầu tiên chạy được và nắm chắc quy trình: ý tưởng → bộ document → AI đọc tài liệu → AI lập kế hoạch → AI code → chạy thử → chỉnh sửa → hoàn thiện.",
        },
      ],
    },
  ],
};
