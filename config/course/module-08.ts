import type { CourseDocModule } from "@/types/course";

/** Module 8: Đưa website lên Internet + nhận dự án đầu tiên — bản tinh gọn, mỗi bài thao tác kết bằng 1 prompt copy dùng ngay. */
export const module08: CourseDocModule = {
  id: "module-8",
  order: 8,
  title: "Module 8: Đưa website lên Internet & nhận dự án đầu tiên",
  shortTitle: "08. Lên Internet & kiếm tiền",
  tagline: "GitHub → Vercel → tên miền → khách hàng",
  description:
    "Đưa website đang chạy trên máy lên Internet với tên miền riêng bằng GitHub + Vercel, biết cập nhật web sau khi đã lên, rà soát trước khi bàn giao, rồi đóng gói kỹ năng thành dịch vụ kiếm tiền. Bài nào có thao tác với AI đều kèm 1 prompt copy dùng ngay.",
  outcome:
    "Website chạy thật trên Internet với tên miền riêng, biết cập nhật an toàn, có checklist nghiệm thu và lộ trình nhận dự án đầu tiên.",
  lessons: [
    {
      id: "m8-b1",
      title: "Bài 8.1 — Từ máy tính lên Internet",
      description: "3 mảnh ghép: GitHub, Vercel, tên miền — hiểu trước khi làm.",
      duration: "6 phút",
      videoLabel: "Bức tranh toàn cảnh: đưa web ra cho cả thế giới xem",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hiểu 3 mảnh ghép đưa web lên mạng, để các bài sau làm khỏi bỡ ngỡ.",
        },
        {
          type: "card",
          title: "3 mảnh ghép — hiểu qua ví dụ đời thường",
          list: [
            "GitHub: kho chứa code trên mạng — như Google Drive nhưng dành cho code.",
            "Vercel: máy chủ chạy web — lấy code từ GitHub rồi phát cho cả thế giới xem, như một cửa hàng luôn mở cửa.",
            "Tên miền: địa chỉ dễ nhớ (vd mocanspa.vn) thay cho địa chỉ mặc định dài ngoằng — như biển hiệu cửa hàng thay cho tọa độ GPS.",
          ],
        },
        {
          type: "card",
          title: "Luồng hoạt động — bạn sẽ đi đúng 4 bước này",
          ordered: true,
          list: [
            "Đẩy code từ máy lên GitHub (bài 8.2).",
            "Nối Vercel với GitHub — Vercel tự dựng và chạy web (bài 8.3).",
            "Gắn tên miền riêng vào Vercel (bài 8.4).",
            "Về sau: sửa code → đẩy lên GitHub → Vercel tự cập nhật web (bài 8.5).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Chi phí",
          content:
            "GitHub và Vercel miễn phí cho dự án cá nhân/nhỏ. Chỉ tên miền tốn phí, khoảng 200.000–700.000đ/năm tùy đuôi (.com, .vn…).",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nói được GitHub, Vercel, tên miền mỗi thứ làm gì.",
            "✓ Nhớ luồng 4 bước từ máy lên Internet.",
          ],
        },
      ],
    },
    {
      id: "m8-b2",
      title: "Bài 8.2 — Đưa code lên GitHub",
      description: "Nhờ AI đẩy code hộ — bạn không cần thuộc lệnh git nào.",
      duration: "15 phút",
      videoLabel: "Đẩy dự án lên GitHub cùng AI",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Đưa toàn bộ code dự án lên GitHub, để bài sau Vercel lấy về chạy.",
        },
        {
          type: "card",
          title: "Làm ngay — tạo kho chứa (repository) trên GitHub",
          ordered: true,
          list: [
            "Vào github.com và đăng nhập (chưa có tài khoản thì đăng ký, miễn phí).",
            "Bấm dấu + góc trên phải màn hình → chọn New repository.",
            "Đặt tên kho (vd landing-cafe), chọn Private (chỉ mình bạn thấy).",
            "Bấm Create repository. Trang hiện ra có một đường link — giữ tab này mở, lát nữa dán vào prompt.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nhờ AI đẩy code lên GitHub",
          intro:
            "Dán vào khung chat Claude trong Terminal, mở ở đúng thư mục dự án (mới bật máy thì: mở VS Code đúng thư mục → Terminal → gõ claude). Claude xin phép chạy lệnh thì bấm đồng ý. Thay chỗ [dán link repository của bạn] bằng link kho vừa tạo:",
          copyLabel: "Copy prompt Đẩy lên GitHub",
          prompt: `Tôi muốn đưa dự án này lên GitHub. Tôi đã tạo sẵn một kho trống tại: [dán link repository của bạn].

Hãy:
1. Kiểm tra dự án đã có file .gitignore chưa, đảm bảo file .env KHÔNG bị đẩy lên GitHub.
2. Chạy các lệnh git cần thiết để đẩy toàn bộ code lên kho ở trên.
3. Nói ngắn từng lệnh đang làm gì.
4. Xác nhận code đã lên thành công.`,
        },
        {
          type: "note",
          tone: "info",
          label: "Kiểm tra",
          content:
            "Xong, F5 lại tab GitHub — bạn sẽ thấy các file dự án hiện lên. Đó là dấu hiệu code đã lên mạng.",
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chọn Public rồi lộ code cho người lạ — cứ để Private cho an toàn.",
            "Không tự mở GitHub xem lại, lỡ file .env lọt lên mà không biết.",
            "Tưởng phải học thuộc lệnh git — không cần, cứ để AI chạy hộ.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Tuyệt đối không đẩy file .env",
          content:
            "File .env chứa key kết nối Supabase — lộ ra là người khác dùng được. AI đã kiểm tra .gitignore giúp, nhưng bạn tự mở tab GitHub xem lại: thấy file .env trong kho thì bảo AI gỡ ngay và vào Supabase đổi key mới.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Git hỏi tên và email?",
              answer:
                "Lần đầu dùng git cần khai báo một lần. Nhắn AI: “Hãy cấu hình git với tên [tên bạn] và email [email GitHub của bạn].”",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Tạo được kho Private trên GitHub.",
            "✓ AI đẩy code xong, F5 tab GitHub thấy file hiện lên.",
            "✓ Đã tự kiểm tra không có file .env trong kho.",
          ],
        },
      ],
    },
    {
      id: "m8-b3",
      title: "Bài 8.3 — Deploy bằng Vercel",
      description: "Vài cú bấm — web từ máy bạn chạy thật trên Internet.",
      duration: "15 phút",
      videoLabel: "Đưa web lên chạy thật bằng Vercel",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một đường link web chạy thật trên Internet, ai mở cũng xem được.",
        },
        {
          type: "card",
          title: "Làm ngay — deploy trên Vercel",
          ordered: true,
          list: [
            "Vào vercel.com, bấm đăng nhập bằng tài khoản GitHub (Continue with GitHub).",
            "Bấm Add New → Project.",
            "Tìm kho bạn vừa đẩy ở bài 8.2 → bấm Import. Kho Private có thể chưa hiện ra — bấm dòng “Adjust GitHub App Permissions” để cấp quyền cho Vercel là thấy.",
            "Mở mục Environment Variables, thêm các biến trong file .env: mở file .env ở cột file bên trái VS Code (không thấy thì nhờ AI “mở nội dung file .env cho tôi xem”), rồi copy y hệt từng dòng TÊN và GIÁ TRỊ (URL và anon key của Supabase) sang Vercel.",
            "Bấm Deploy và chờ 1–2 phút, màn hình chạy các dòng dựng web.",
            "Xong sẽ hiện link dạng ten-du-an.vercel.app — bấm vào là thấy web của bạn chạy trên mạng!",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Kiểm tra",
          content:
            "Mở link Vercel trên điện thoại bằng 4G (tắt WiFi nhà cho chắc), nhờ thêm một người bạn mở thử. Ai cũng xem được nghĩa là deploy thành công.",
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên thêm Environment Variables → web chạy nhưng form không lưu được dữ liệu.",
            "Nhập thiếu hoặc sai một biến so với file .env → Supabase không kết nối.",
            "Thấy báo lỗi build là hoảng — cứ copy log gửi AI sửa, chuyện thường.",
          ],
        },
      ],
      aside: [
        {
          type: "faq",
          items: [
            {
              question: "Deploy báo lỗi build (chữ đỏ)?",
              answer:
                "Copy nguyên văn phần log lỗi trong Vercel, dán vào chat Claude trong Terminal: “Deploy trên Vercel bị lỗi, đây là log: [dán log]. Hãy sửa và hướng dẫn tôi đẩy lại.” Sửa xong đẩy lại lên GitHub, Vercel tự deploy lại.",
            },
            {
              question: "Web chạy nhưng form không lưu dữ liệu?",
              answer:
                "Hầu như luôn do quên Environment Variables. Vào project trên Vercel → Settings → Environment Variables, thêm đủ các biến rồi bấm Redeploy.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đã nhập đủ Environment Variables từ file .env.",
            "✓ Có link ten-du-an.vercel.app mở được.",
            "✓ Mở thử trên điện thoại 4G, form gửi thử vào được Supabase.",
          ],
        },
      ],
    },
    {
      id: "m8-b4",
      title: "Bài 8.4 — Gắn tên miền riêng",
      description: "Từ ten-du-an.vercel.app thành thuong-hieu-cua-ban.vn.",
      duration: "15 phút",
      videoLabel: "Mua tên miền và trỏ về Vercel",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Web của bạn chạy bằng tên miền thương hiệu, không còn đuôi .vercel.app.",
        },
        {
          type: "card",
          title: "Làm ngay — mua tên miền",
          ordered: true,
          list: [
            "Chọn nơi bán: Mắt Bão, PA Việt Nam, Tenten (tên miền .vn) hoặc Namecheap, Cloudflare (tên miền .com).",
            "Gõ tìm tên theo thương hiệu — ngắn, dễ đọc, không dấu.",
            "Thanh toán để sở hữu tên miền. Giữ tài khoản trang này để lát vào khai báo DNS.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay — trỏ tên miền về Vercel",
          ordered: true,
          list: [
            "Trong Vercel: mở project → Settings → Domains → gõ tên miền → bấm Add.",
            "Vercel hiện ra vài dòng bản ghi DNS cần khai báo (dạng A hoặc CNAME) — đây là “địa chỉ” chỉ tên miền về đúng web.",
            "Vào trang quản lý tên miền (nơi vừa mua) → mục DNS → thêm đúng từng bản ghi Vercel vừa đưa.",
            "Chờ DNS cập nhật: thường vài phút tới vài giờ.",
            "Vercel tự cấp HTTPS (ổ khóa bảo mật cạnh địa chỉ) — bạn không phải làm gì thêm.",
          ],
        },
        {
          type: "note",
          tone: "info",
          label: "Kiểm tra",
          content:
            "Gõ tên miền vào trình duyệt thấy web hiện lên, cạnh địa chỉ có hình ổ khóa nhỏ — là xong.",
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nhập sai một bản ghi DNS rồi tưởng hỏng — kiểm tra lại từng dòng cho khớp Vercel.",
            "Vừa thêm DNS đã sốt ruột, chưa chờ đủ giờ để nó lan ra.",
            "Chọn tên miền dài, khó đọc — khách nghe một lần không gõ lại được.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Bí quyết chọn tên miền",
          content:
            "Ngắn — dễ đọc qua điện thoại — không gây nhầm chính tả. Thử đọc tên miền cho một người nghe: họ gõ lại đúng ngay là được.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Đã trỏ DNS mà chưa vào được?",
              answer:
                "DNS có thể mất tới 24–48 giờ để lan ra toàn cầu, nhưng thường chỉ vài phút tới vài giờ. Kiểm tra lại các bản ghi đã nhập đúng chưa rồi kiên nhẫn chờ.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đã mua và sở hữu tên miền.",
            "✓ Đã thêm đúng bản ghi DNS Vercel đưa ra.",
            "✓ Gõ tên miền vào được web, có ổ khóa HTTPS.",
          ],
        },
      ],
    },
    {
      id: "m8-b5",
      title: "Bài 8.5 — Cập nhật web sau khi đã lên mạng",
      description: "Vòng lặp sửa → đẩy → Vercel tự cập nhật, dùng mãi về sau.",
      duration: "10 phút",
      videoLabel: "Quy trình cập nhật web đang chạy thật",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Nắm vòng lặp cập nhật web đang chạy mà không sợ làm hỏng bản khách đang xem.",
        },
        {
          type: "card",
          title: "Quy trình 3 bước — nhớ để dùng mãi",
          ordered: true,
          list: [
            "Sửa web trên máy như bình thường (nhờ AI sửa, rồi nhờ AI chạy web lên xem thử trên máy).",
            "Xem ưng rồi, nhờ AI đẩy thay đổi lên GitHub.",
            "Vercel tự phát hiện và cập nhật web trong 1–2 phút. Xong — không cần đụng vào Vercel.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — đẩy bản cập nhật lên mạng",
          intro:
            "Sau khi sửa và xem thử trên máy ổn rồi, dán vào khung chat Claude trong Terminal:",
          copyLabel: "Copy prompt Cập nhật web",
          prompt: `Tôi vừa sửa xong và đã chạy thử ổn trên máy.

Hãy đẩy toàn bộ thay đổi lên GitHub, kèm mô tả ngắn gọn những gì tôi vừa sửa.

Nhắc tôi mở web thật kiểm tra lại sau khoảng 2 phút.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Sửa trên máy chưa chạy thử đã đẩy lên — khách đang xem gặp ngay lỗi.",
            "Sửa nhiều thứ một lúc rồi đẩy chung, lỗi không biết do đâu.",
            "Đẩy xong không mở web thật kiểm tra lại.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Nguyên tắc an toàn",
          content:
            "Luôn chạy thử trên máy trước khi đẩy. Web đang có khách xem — đừng đẩy thẳng thứ chưa kiểm tra.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Thuộc vòng lặp: sửa máy → xem thử → đẩy → Vercel tự cập nhật.",
            "✓ Chỉ đẩy khi đã chạy thử ổn trên máy.",
            "✓ Đẩy xong mở web thật kiểm tra lại.",
          ],
        },
      ],
    },
    {
      id: "m8-b6",
      title: "Bài 8.6 — Rà soát trước khi bàn giao",
      description: "Checklist nghiệm thu như một người làm dịch vụ chuyên nghiệp.",
      duration: "12 phút",
      videoLabel: "Rà soát lần cuối trước khi giao khách hoặc chạy quảng cáo",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một checklist rà soát lần cuối, để giao web không sót lỗi khách sẽ thấy ngay.",
        },
        {
          type: "card",
          title: "Làm ngay — checklist nghiệm thu",
          ordered: true,
          list: [
            "Mở web trên điện thoại bằng 4G (không phải WiFi nhà) — tải nhanh, chữ không tràn.",
            "Bấm thử mọi nút, menu, link — tất cả đều chạy đúng.",
            "Gửi thử form — dữ liệu vào Supabase, thông báo cảm ơn hiện đúng.",
            "Bấm số điện thoại/Zalo trên điện thoại — gọi/mở được ngay.",
            "Xem tiêu đề tab trình duyệt đúng tên thương hiệu (không còn “My App” hay tên mặc định).",
            "Rà lại không còn chữ mẫu hay ảnh placeholder nào sót lại.",
            "Cạnh địa chỉ web có ổ khóa HTTPS.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nhờ AI tối ưu SEO cơ bản",
          intro:
            "SEO cơ bản = giúp web dễ được tìm thấy và hiện đẹp khi chia sẻ link. Dán vào khung chat Claude trong Terminal:",
          copyLabel: "Copy prompt Tối ưu SEO",
          prompt: `Hãy tối ưu SEO cơ bản cho website này:
1. Tiêu đề và mô tả (title, description) đúng cho từng trang, có từ khóa chính.
2. Ảnh có mô tả (alt text).
3. Web hiển thị đẹp khi chia sẻ link qua Zalo/Facebook (Open Graph).
4. Tốc độ tải: chỉ ra chỗ nào đang làm chậm và tối ưu.

Nói ngắn gọn từng thay đổi bạn vừa làm. Xong thì chạy web lên cho tôi xem thử.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Chỉ thử trên máy tính, quên mở điện thoại 4G như khách thật.",
            "Bỏ sót chữ mẫu / ảnh placeholder — khách nhìn thấy là mất uy tín.",
            "Rà xong không commit lại, lỡ sửa hỏng không có đường lùi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao checklist quan trọng?",
          content:
            "Khách trả tiền không đánh giá code — họ đánh giá thứ bấm được, đọc được, nhìn thấy được. Checklist này chính là uy tín của bạn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Đã rà đủ 7 mục nghiệm thu trên điện thoại 4G.",
            "✓ Đã nhờ AI tối ưu SEO cơ bản.",
            "✓ Không còn nội dung mẫu / ảnh placeholder nào sót.",
          ],
        },
      ],
    },
    {
      id: "m8-b7",
      title: "Bài 8.7 — Nhận dự án đầu tiên: đóng gói & báo giá",
      description: "Biến kỹ năng vừa học thành dịch vụ có giá.",
      duration: "20 phút",
      videoLabel: "Đóng gói dịch vụ làm web và tìm khách đầu tiên",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Đóng gói kỹ năng thành gói dịch vụ rõ ràng và biết chỗ tìm khách đầu tiên.",
        },
        {
          type: "card",
          title: "Đóng gói thành 3 gói dịch vụ",
          list: [
            "Gói Landing Page: 1 trang giới thiệu/bán hàng + form liên hệ — làm 1–3 ngày.",
            "Gói Web doanh nghiệp: 4–5 trang + form — làm 3–7 ngày.",
            "Gói Web App: bán hàng/đặt lịch + trang quản trị + CRM — làm 1–2 tuần.",
          ],
        },
        {
          type: "card",
          title: "Nguyên tắc báo giá cho người mới",
          list: [
            "Báo theo giá trị mang lại (khách nhận thêm đơn/lịch hẹn qua web), không tính theo số giờ ngồi làm.",
            "2–3 dự án đầu có thể lấy giá mềm để đổi lấy feedback và sản phẩm demo — nhưng đừng làm miễn phí.",
            "Luôn kèm phạm vi rõ: mấy trang, được sửa mấy lần, bàn giao gồm những gì.",
            "Tách riêng chi phí khách tự trả: tên miền, các dịch vụ trả phí (nếu có).",
          ],
        },
        {
          type: "card",
          title: "Kênh tìm khách đầu tiên",
          list: [
            "Người quen có cửa hàng/dịch vụ — nguồn dễ nhất và thật nhất.",
            "Đăng sản phẩm demo lên Facebook cá nhân + nhóm theo ngành (spa, F&B, bất động sản…).",
            "Nhóm freelancer trên Facebook, chợ dịch vụ như vLance.",
            "Chính web của bạn: làm một trang giới thiệu dịch vụ bằng đúng kỹ năng vừa học — vừa là quảng cáo vừa là bằng chứng.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Lợi thế của bạn",
          content:
            "Tốc độ. Việc trước đây thuê ngoài mất vài tuần, bạn làm bằng AI trong vài ngày — vừa nhanh vừa chủ động chỉnh sửa theo ý khách.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Viết được 3 gói dịch vụ kèm phạm vi rõ.",
            "✓ Nắm nguyên tắc báo giá theo giá trị, có phạm vi.",
            "✓ Chọn được ít nhất 1 kênh để tìm khách đầu tiên.",
          ],
        },
      ],
    },
    {
      id: "m8-b8",
      title: "Bài 8.8 — Làm việc với khách & tổng kết khóa",
      description: "Quy trình chuyên nghiệp từ nhận brief đến bàn giao.",
      duration: "15 phút",
      videoLabel: "Quy trình nhận dự án chuyên nghiệp + tổng kết hành trình",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một quy trình 6 bước làm việc với khách, để nhận dự án gọn gàng và được trả tiền đủ.",
        },
        {
          type: "card",
          title: "Quy trình 6 bước với khách",
          ordered: true,
          list: [
            "Nhận yêu cầu: cho khách điền đúng mẫu brief bạn đã học (giống prompt phỏng vấn làm brief ở Module 2).",
            "Báo giá + chốt phạm vi bằng tin nhắn rõ ràng: số trang, số lần sửa, thời hạn.",
            "Nhận cọc 30–50% trước khi bắt đầu.",
            "Làm bản nháp → gửi khách xem qua link Vercel → nhận góp ý, chỉnh đúng số lần đã chốt.",
            "Bàn giao: gắn tên miền của khách (bài 8.4), giao tài khoản quản trị, hướng dẫn dùng.",
            "Nhận nốt phần còn lại + xin feedback và nhờ giới thiệu khách mới.",
          ],
        },
        {
          type: "card",
          title: "Bạn đã đi hết hành trình",
          list: [
            "Module 1–2: chuẩn bị công cụ và quy trình làm việc với AI.",
            "Module 3: landing page đầu tiên.",
            "Module 4–6: web doanh nghiệp, bán hàng, đặt lịch.",
            "Module 7: dữ liệu thật, dashboard, CRM.",
            "Module 8: lên Internet, tên miền, nhận dự án.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Nhớ nguyên tắc lõi từ Module 2",
          content:
            "Làm cho khách vẫn theo đúng vòng lặp: brief → tài liệu → AI lập kế hoạch → bạn duyệt → làm từng phần → kiểm tra → commit. Khách khó tính tới đâu, quy trình này vẫn giữ bạn không rối.",
        },
        {
          type: "note",
          tone: "success",
          label: "Bước tiếp theo",
          content:
            "Chọn một đề bài thật (của bạn hoặc người quen), làm trọn từ brief đến tên miền ngay tuần này. Sản phẩm thật đầu tiên chính là tấm danh thiếp tốt nhất của bạn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Nhớ quy trình 6 bước, có nhận cọc trước khi làm.",
            "✓ Chốt phạm vi (số trang, số lần sửa) bằng tin nhắn rõ.",
            "✓ Chọn được một đề bài thật để làm trọn tuần này.",
          ],
        },
      ],
    },
  ],
};
