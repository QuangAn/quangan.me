import type { CourseDocModule } from "@/types/course";

/** Module 8: Đưa website lên Internet + nhận dự án kiếm tiền. */
export const module08: CourseDocModule = {
  id: "module-8",
  order: 8,
  title: "Module 8: Đưa website lên Internet & nhận dự án đầu tiên",
  shortTitle: "08. Lên Internet & kiếm tiền",
  tagline: "GitHub → Vercel → tên miền → khách hàng",
  description:
    "Đưa website lên Internet với tên miền riêng bằng GitHub + Vercel, biết cách cập nhật website sau khi đã chạy, và bắt đầu nhận dự án làm website để kiếm thêm thu nhập.",
  outcome: "Website chạy trên Internet với tên miền riêng + lộ trình nhận dự án đầu tiên",
  lessons: [
    {
      id: "m8-b1",
      title: "Tổng quan: từ máy tính lên Internet",
      description: "Hiểu 3 mảnh ghép: GitHub, Vercel, tên miền.",
      duration: "6 phút",
      videoLabel: "Bức tranh toàn cảnh deploy website",
      main: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          list: [
            "GitHub: kho chứa code trên mạng — như Google Drive cho code.",
            "Vercel: máy chủ chạy website — lấy code từ GitHub và phát cho cả thế giới xem.",
            "Tên miền: địa chỉ dễ nhớ (vd: mocanspa.vn) thay cho địa chỉ mặc định dài ngoằng.",
          ],
        },
        {
          type: "card",
          title: "Luồng hoạt động",
          ordered: true,
          list: [
            "Đẩy code từ máy lên GitHub.",
            "Kết nối Vercel với GitHub — Vercel tự build và chạy website.",
            "Gắn tên miền riêng vào Vercel.",
            "Về sau: sửa code → đẩy lên GitHub → Vercel tự cập nhật website.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Chi phí",
          content:
            "GitHub và Vercel miễn phí cho dự án cá nhân/nhỏ. Chỉ tên miền tốn phí, khoảng 200.000–700.000đ/năm tùy đuôi (.com, .vn...).",
        },
      ],
    },
    {
      id: "m8-b2",
      title: "Đưa code lên GitHub",
      description: "Nhờ AI làm cùng — không cần thuộc lệnh git.",
      duration: "15 phút",
      videoLabel: "Đẩy project lên GitHub",
      main: [
        {
          type: "card",
          title: "Tạo repository trên GitHub",
          ordered: true,
          list: [
            "Đăng nhập github.com.",
            "Bấm dấu + góc trên phải → New repository.",
            "Đặt tên (vd: landing-cafe), chọn Private.",
            "Bấm Create repository — giữ tab này mở.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt nhờ AI đẩy code",
          prompt: `Tôi muốn đưa project này lên GitHub.
Tôi đã tạo repository trống tại: [dán link repository của bạn]

Hãy:
1. Kiểm tra project đã có file .gitignore chưa — đảm bảo file .env KHÔNG bị đẩy lên GitHub
2. Chạy các lệnh git cần thiết để đẩy toàn bộ code lên repository trên
3. Giải thích ngắn từng lệnh đang làm gì
4. Xác nhận code đã lên thành công`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Tuyệt đối không đẩy file .env",
          content:
            "File .env chứa key kết nối Supabase. AI sẽ kiểm tra .gitignore giúp bạn — nhưng hãy tự xem lại trên GitHub: nếu thấy file .env trong repository, yêu cầu AI gỡ ngay và đổi key mới trong Supabase.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Git hỏi tên và email?",
              answer:
                "Lần đầu dùng git sẽ cần khai báo. Nói với AI: “Hãy cấu hình git với tên [tên bạn] và email [email GitHub của bạn]”.",
            },
          ],
        },
      ],
    },
    {
      id: "m8-b3",
      title: "Deploy website bằng Vercel",
      description: "Vài cú click — website chạy trên Internet.",
      duration: "15 phút",
      videoLabel: "Deploy lên Vercel từ GitHub",
      main: [
        {
          type: "card",
          title: "Các bước",
          ordered: true,
          list: [
            "Đăng nhập vercel.com bằng tài khoản GitHub.",
            "Bấm Add New → Project.",
            "Chọn repository vừa đẩy lên → Import.",
            "Ở mục Environment Variables: thêm các biến trong file .env (URL và anon key của Supabase).",
            "Bấm Deploy và chờ 1–2 phút.",
            "Nhận link dạng ten-project.vercel.app — website đã chạy trên Internet!",
          ],
        },
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra",
          content:
            "Mở link Vercel trên điện thoại (dùng 4G, không dùng WiFi nhà) và nhờ một người bạn mở thử — ai cũng xem được là deploy thành công.",
        },
      ],
      aside: [
        {
          type: "faq",
          items: [
            {
              question: "Deploy báo lỗi build?",
              answer:
                "Copy toàn bộ log lỗi trong Vercel gửi AI: “Deploy trên Vercel bị lỗi, đây là log: [dán log]. Hãy sửa và hướng dẫn tôi đẩy lại.”",
            },
            {
              question: "Website chạy nhưng form không lưu dữ liệu?",
              answer:
                "Thường do quên thêm Environment Variables trên Vercel. Vào Settings → Environment Variables, thêm đủ rồi bấm Redeploy.",
            },
          ],
        },
      ],
    },
    {
      id: "m8-b4",
      title: "Gắn tên miền riêng",
      description: "Từ ten-project.vercel.app thành thương-hiệu-của-bạn.vn.",
      duration: "15 phút",
      videoLabel: "Mua và trỏ tên miền về Vercel",
      main: [
        {
          type: "card",
          title: "Mua tên miền",
          ordered: true,
          list: [
            "Chọn nhà cung cấp: Mắt Bão, PA Việt Nam, Tenten (tên miền .vn) hoặc Namecheap, Cloudflare (tên miền .com).",
            "Tìm tên miền theo tên thương hiệu — ngắn, dễ đọc, không dấu.",
            "Thanh toán và sở hữu tên miền.",
          ],
        },
        {
          type: "card",
          title: "Trỏ tên miền về Vercel",
          ordered: true,
          list: [
            "Trong Vercel: mở project → Settings → Domains → nhập tên miền → Add.",
            "Vercel hiện ra các bản ghi DNS cần khai báo (dạng A hoặc CNAME).",
            "Vào trang quản lý tên miền → mục DNS → thêm đúng các bản ghi đó.",
            "Chờ 5 phút đến vài giờ để DNS cập nhật.",
            "Vercel tự cấp HTTPS (ổ khóa bảo mật) — không cần làm gì thêm.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Bí quyết chọn tên miền",
          content:
            "Ngắn — dễ đọc qua điện thoại — không gây nhầm chính tả. Khách phải gõ lại được tên miền sau khi chỉ nghe bạn nói một lần.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Đã trỏ DNS mà chưa vào được?",
              answer:
                "DNS có thể mất tới 24–48 giờ để lan ra toàn cầu, thường chỉ vài phút tới vài giờ. Kiểm tra lại bản ghi đã nhập đúng chưa rồi kiên nhẫn chờ.",
            },
          ],
        },
      ],
    },
    {
      id: "m8-b5",
      title: "Cập nhật website sau khi đã lên mạng",
      description: "Quy trình sửa — đẩy — tự cập nhật, dùng mãi về sau.",
      duration: "10 phút",
      videoLabel: "Quy trình cập nhật website đang chạy",
      main: [
        {
          type: "card",
          title: "Quy trình 3 bước",
          ordered: true,
          list: [
            "Sửa website trên máy như bình thường (nhờ AI sửa, chạy thử localhost).",
            "Ưng ý rồi, nhờ AI đẩy thay đổi lên GitHub.",
            "Vercel tự phát hiện và cập nhật website trong 1–2 phút. Xong.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt cập nhật website",
          prompt: `Tôi vừa sửa xong và đã chạy thử ổn trên máy.
Hãy đẩy toàn bộ thay đổi lên GitHub với mô tả ngắn gọn về những gì đã sửa.
Nhắc tôi kiểm tra website thật sau 2 phút.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Nguyên tắc an toàn",
          content:
            "Luôn chạy thử trên máy trước khi đẩy lên. Website đang có khách xem — đừng đẩy thẳng thứ chưa kiểm tra.",
        },
      ],
    },
    {
      id: "m8-b6",
      title: "Checklist trước khi bàn giao hoặc chạy quảng cáo",
      description: "Rà soát lần cuối như một người làm dịch vụ chuyên nghiệp.",
      duration: "12 phút",
      videoLabel: "Checklist nghiệm thu website",
      main: [
        {
          type: "card",
          title: "Checklist nghiệm thu",
          list: [
            "Mở nhanh trên điện thoại dùng 4G (không phải WiFi nhà).",
            "Mọi nút bấm, menu, link đều hoạt động.",
            "Form gửi thử — dữ liệu vào Supabase, thông báo cảm ơn hiện đúng.",
            "Số điện thoại/Zalo bấm gọi được trên điện thoại.",
            "Tiêu đề tab trình duyệt đúng tên thương hiệu (không còn “My App”).",
            "Không còn nội dung mẫu/ảnh placeholder nào sót lại.",
            "HTTPS hoạt động (có ổ khóa trên trình duyệt).",
          ],
        },
        {
          type: "prompt",
          title: "Prompt tối ưu SEO cơ bản",
          prompt: `Hãy tối ưu SEO cơ bản cho website này:
1. Tiêu đề và mô tả (title, description) đúng cho từng trang, có từ khóa chính
2. Ảnh có mô tả (alt text)
3. Kiểm tra website hiển thị đẹp khi chia sẻ link qua Zalo/Facebook (Open Graph)
4. Tốc độ tải: chỉ ra những gì đang làm chậm và tối ưu

Giải thích ngắn gọn từng thay đổi.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Vì sao checklist quan trọng?",
          content:
            "Khách trả tiền không đánh giá code — họ đánh giá những gì bấm được, đọc được, nhìn thấy được. Checklist này chính là uy tín của bạn.",
        },
      ],
    },
    {
      id: "m8-b7",
      title: "Nhận dự án đầu tiên: đóng gói dịch vụ và báo giá",
      description: "Biến kỹ năng thành thu nhập.",
      duration: "20 phút",
      videoLabel: "Đóng gói dịch vụ làm website",
      main: [
        {
          type: "card",
          title: "Đóng gói thành 3 gói dịch vụ",
          list: [
            "Gói Landing Page: 1 trang giới thiệu/bán hàng + form liên hệ — làm trong 1–3 ngày.",
            "Gói Website doanh nghiệp: 4–5 trang + form — làm trong 3–7 ngày.",
            "Gói Web App: bán hàng/đặt lịch + quản trị + CRM — làm trong 1–2 tuần.",
          ],
        },
        {
          type: "card",
          title: "Nguyên tắc báo giá cho người mới",
          list: [
            "Báo giá theo giá trị mang lại (khách nhận đơn/lịch hẹn qua web), không theo số giờ ngồi làm.",
            "2–3 dự án đầu có thể lấy giá mềm đổi lấy feedback và sản phẩm demo — nhưng đừng làm miễn phí.",
            "Báo giá luôn kèm phạm vi rõ: mấy trang, mấy lần chỉnh sửa, bàn giao gồm những gì.",
            "Tách riêng chi phí khách tự trả: tên miền, các dịch vụ trả phí (nếu có).",
          ],
        },
        {
          type: "card",
          title: "Kênh tìm khách đầu tiên",
          list: [
            "Người quen có cửa hàng/dịch vụ — nguồn dễ nhất và thật nhất.",
            "Đăng sản phẩm demo lên Facebook cá nhân + các nhóm ngành (spa, F&B, bất động sản...).",
            "Nhóm freelancer: các group việc làm freelance trên Facebook, chợ dịch vụ như vLance.",
            "Chính website của bạn: làm một trang giới thiệu dịch vụ bằng đúng kỹ năng vừa học.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Lợi thế của bạn",
          content:
            "Tốc độ. Việc trước đây mất vài tuần thuê ngoài, bạn làm bằng AI trong vài ngày — vừa nhanh vừa chủ động chỉnh sửa không giới hạn theo ý khách.",
        },
      ],
    },
    {
      id: "m8-b8",
      title: "Quy trình làm việc với khách và tổng kết khóa học",
      description: "Chuyên nghiệp từ nhận brief đến bàn giao.",
      duration: "15 phút",
      videoLabel: "Quy trình nhận dự án chuyên nghiệp + tổng kết",
      main: [
        {
          type: "card",
          title: "Quy trình 6 bước với khách",
          ordered: true,
          list: [
            "Nhận yêu cầu: cho khách điền đúng mẫu Brief bạn đã học (Module 3–6).",
            "Báo giá + chốt phạm vi bằng tin nhắn rõ ràng (số trang, số lần sửa, thời hạn).",
            "Nhận cọc 30–50% trước khi bắt đầu.",
            "Làm bản nháp → gửi khách xem qua link Vercel → nhận góp ý, chỉnh theo số lần đã chốt.",
            "Bàn giao: gắn tên miền của khách, giao tài khoản quản trị, hướng dẫn dùng.",
            "Nhận phần còn lại + xin feedback/giới thiệu khách mới.",
          ],
        },
        {
          type: "card",
          title: "Bạn đã đi hết hành trình",
          list: [
            "Module 1–2: chuẩn bị công cụ, quy trình làm việc với AI.",
            "Module 3: landing page đầu tiên.",
            "Module 4–6: website doanh nghiệp, bán hàng, đặt lịch.",
            "Module 7: dữ liệu thật, dashboard, CRM.",
            "Module 8: lên Internet, tên miền, nhận dự án.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Bước tiếp theo",
          content:
            "Chọn một đề bài thật (của bạn hoặc người quen), làm trọn vẹn từ brief đến tên miền trong tuần này. Sản phẩm thật đầu tiên chính là tấm danh thiếp tốt nhất của bạn. Cần hỗ trợ, nhắn Zalo cho người hướng dẫn bất cứ lúc nào.",
        },
      ],
    },
  ],
};
