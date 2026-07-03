import type { CourseDocModule } from "@/types/course";

/** Module 1: Chuẩn bị máy tính để AI làm website. */
export const module01: CourseDocModule = {
  id: "module-1",
  order: 1,
  title: "Module 1: Chuẩn bị máy tính để AI làm website",
  shortTitle: "01. Chuẩn bị máy tính",
  tagline: "Cài công cụ, từng bước một",
  description:
    "Không cần biết code. Mục tiêu của module này là cài đủ công cụ để AI có thể làm website ngay trên máy của bạn.",
  outcome: "Máy tính đã sẵn sàng để AI làm website",
  lessons: [
    {
      id: "m1-b1",
      title: "Hiểu trước: Vì sao cần cài các công cụ này?",
      description: "Giải thích bằng ngôn ngữ đời thường trước khi bắt đầu.",
      duration: "4 phút",
      videoLabel: "Tổng quan bộ công cụ",
      main: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Muốn AI làm website trên máy tính, bạn cần chuẩn bị một “bàn làm việc” cho AI. Mỗi công cụ dưới đây là một món đồ trên bàn làm việc đó:",
          ],
          list: [
            "VS Code: nơi mở và xem project website.",
            "Terminal: nơi gõ lệnh để chạy website.",
            "Git: nơi lưu lại các phiên bản code — lỡ hỏng còn quay lại được.",
            "Node.js: “động cơ” để chạy các website hiện đại.",
            "Claude Code: trợ lý AI làm việc trực tiếp trong project của bạn.",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Kết quả mong muốn",
          content:
            "Cuối module này, bạn mở được VS Code, mở được Terminal và kiểm tra được Git + Node đã cài thành công.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Không cần hiểu sâu",
          body: [
            "Ở bước này bạn chỉ cần cài đúng và kiểm tra chạy được. Các khái niệm kỹ thuật sẽ được giải thích dần trong quá trình làm dự án thật.",
          ],
        },
      ],
    },
    {
      id: "m1-b2",
      title: "Cài VS Code",
      description: "Phần mềm để mở, xem và sửa website.",
      duration: "7 phút",
      videoLabel: "Cài VS Code trên Windows",
      main: [
        {
          type: "card",
          title: "Cách cài",
          ordered: true,
          list: [
            "Bấm link tải VS Code bên dưới.",
            "Chọn bản phù hợp với máy của bạn (Windows hoặc macOS).",
            "Mở file vừa tải về.",
            "Bấm Next đến khi hoàn tất.",
            "Mở VS Code lên để kiểm tra.",
          ],
        },
        {
          type: "links",
          items: [
            { label: "⬇ Tải VS Code", href: "https://code.visualstudio.com/download" },
          ],
        },
        {
          type: "card",
          title: "Kiểm tra đã cài đúng",
          body: [
            "Bạn mở được cửa sổ VS Code là đạt. Giao diện thường có thanh công cụ bên trái và vùng soạn thảo lớn ở giữa.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Lỗi thường gặp",
          items: [
            {
              question: "Không biết chọn bản nào?",
              answer:
                "Dùng Windows thì chọn bản Windows. Dùng Mac thì chọn bản macOS. VS Code hoàn toàn miễn phí, không có bản trả phí.",
            },
            {
              question: "Mở lên thấy nhiều nút quá?",
              answer:
                "Không sao. Bạn chỉ cần biết mở thư mục project và mở Terminal. Các phần khác sẽ học dần khi cần.",
            },
          ],
        },
      ],
    },
    {
      id: "m1-b3",
      title: "Mở Terminal trong VS Code",
      description: "Terminal là nơi gõ lệnh để chạy website.",
      duration: "5 phút",
      videoLabel: "Cách mở Terminal trong VS Code",
      main: [
        {
          type: "card",
          title: "Cách mở Terminal",
          ordered: true,
          list: [
            "Mở VS Code.",
            "Nhìn lên thanh menu trên cùng.",
            "Bấm Terminal.",
            "Bấm New Terminal.",
            "Một khung gõ lệnh sẽ hiện ra ở phía dưới màn hình.",
          ],
        },
        {
          type: "code",
          title: "Phím tắt",
          code: "Ctrl + `",
          note: "Dấu ` thường nằm dưới phím ESC trên bàn phím.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Terminal giống như ô chat với máy tính. Bạn gõ lệnh, máy tính trả kết quả.",
          ],
        },
        {
          type: "note",
          tone: "warning",
          label: "Lưu ý",
          content:
            "Nếu chưa quen, chỉ copy đúng lệnh trong bài học, không tự gõ các lệnh lạ.",
        },
      ],
    },
    {
      id: "m1-b4",
      title: "Cài Git",
      description: "Git giúp lưu phiên bản website — lỡ sai còn quay lại được.",
      duration: "8 phút",
      videoLabel: "Cài Git và kiểm tra",
      main: [
        {
          type: "card",
          title: "Cách cài",
          ordered: true,
          list: [
            "Bấm link tải Git bên dưới.",
            "Tải bản Windows hoặc Mac.",
            "Mở file cài đặt.",
            "Cứ để mặc định và bấm Next đến khi xong.",
            "Cài xong thì tắt hẳn VS Code và mở lại.",
          ],
        },
        {
          type: "links",
          items: [{ label: "⬇ Tải Git", href: "https://git-scm.com/downloads" }],
        },
        {
          type: "code",
          title: "Lệnh kiểm tra",
          code: "git --version",
          note: "Nếu hiện ra số phiên bản, ví dụ “git version 2.x.x”, là thành công.",
        },
      ],
      aside: [
        {
          type: "faq",
          title: "Nếu bị lỗi",
          items: [
            {
              question: "Gõ git --version nhưng báo lỗi?",
              answer:
                "Hãy tắt hẳn VS Code rồi mở lại. Nếu vẫn lỗi, khởi động lại máy tính rồi thử lại lần nữa.",
            },
            {
              question: "Git dùng để làm gì?",
              answer:
                "Nó giống lịch sử chỉnh sửa của website. Khi website hỏng, bạn có thể quay về phiên bản trước đó.",
            },
          ],
        },
      ],
    },
    {
      id: "m1-b5",
      title: "Cài Node.js",
      description: "Node.js giúp chạy các website hiện đại như React, Next.js.",
      duration: "8 phút",
      videoLabel: "Cài Node.js bản LTS",
      main: [
        {
          type: "card",
          title: "Cách cài",
          ordered: true,
          list: [
            "Bấm link tải Node.js bên dưới.",
            "Chọn bản LTS (bản ổn định).",
            "Mở file cài đặt.",
            "Bấm Next đến khi xong.",
            "Khởi động lại VS Code.",
          ],
        },
        {
          type: "links",
          items: [{ label: "⬇ Tải Node.js", href: "https://nodejs.org/en/download" }],
        },
        {
          type: "code",
          title: "Lệnh kiểm tra",
          code: "node -v\nnpm -v",
          note: "Cả hai lệnh đều hiện số phiên bản là thành công.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "LTS là gì?",
          body: [
            "Bạn chỉ cần hiểu LTS là bản ổn định, ít lỗi nhất — phù hợp cho người mới học và cả dự án thật.",
          ],
        },
      ],
    },
    {
      id: "m1-b6",
      title: "Cài Claude Code",
      description: "Trợ lý AI đọc project và sửa code trực tiếp trên máy bạn.",
      duration: "10 phút",
      videoLabel: "Cài và đăng nhập Claude Code",
      main: [
        {
          type: "card",
          title: "Cách cài",
          ordered: true,
          list: [
            "Đăng ký tài khoản Claude tại claude.ai (nếu chưa có).",
            "Mở Terminal trong VS Code.",
            "Copy lệnh cài đặt bên dưới, dán vào Terminal và bấm Enter.",
            "Chờ cài xong, gõ lệnh claude rồi bấm Enter.",
            "Làm theo hướng dẫn trên màn hình để đăng nhập tài khoản Claude.",
          ],
        },
        {
          type: "code",
          title: "Lệnh cài đặt",
          code: "npm install -g @anthropic-ai/claude-code",
          note: "Cài xong, gõ “claude” trong Terminal để mở trợ lý AI.",
        },
        {
          type: "prompt",
          title: "Prompt kiểm tra",
          intro: "Sau khi đăng nhập thành công, gửi thử prompt này cho Claude Code:",
          prompt:
            "Hãy kiểm tra giúp tôi máy tính hiện tại đã sẵn sàng để làm website chưa (Git, Node.js). Nếu thiếu công cụ nào, hãy chỉ rõ tôi cần làm gì tiếp theo.",
        },
      ],
      aside: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Claude Code giống một trợ lý AI ngồi ngay trong thư mục website. Nó có thể đọc file, sửa file và tạo thêm file mới theo yêu cầu của bạn.",
          ],
        },
        {
          type: "links",
          items: [{ label: "Trang chủ Claude Code", href: "https://claude.ai/code" }],
        },
      ],
    },
    {
      id: "m1-b7",
      title: "Tạo tài khoản GitHub, Supabase, Vercel",
      description: "Ba tài khoản miễn phí sẽ dùng ở các module sau.",
      duration: "12 phút",
      videoLabel: "Tạo 3 tài khoản cần thiết",
      main: [
        {
          type: "card",
          title: "Dùng để làm gì?",
          list: [
            "GitHub: kho lưu code của bạn trên mạng.",
            "Supabase: nơi lưu dữ liệu như khách hàng, đơn hàng, lịch hẹn.",
            "Vercel: nơi đưa website lên Internet cho mọi người xem.",
          ],
        },
        {
          type: "links",
          items: [
            { label: "Đăng ký GitHub", href: "https://github.com/signup" },
            { label: "Đăng ký Supabase", href: "https://supabase.com/dashboard/sign-up" },
            { label: "Đăng ký Vercel", href: "https://vercel.com/signup" },
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Gợi ý",
          content:
            "Nên dùng cùng một email cho cả 3 tài khoản để dễ quản lý. Với Vercel, chọn đăng nhập bằng GitHub để sau này deploy nhanh hơn.",
        },
      ],
    },
  ],
};
