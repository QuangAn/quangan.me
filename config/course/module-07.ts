import type { CourseDocModule } from "@/types/course";

/** Module 7: Supabase — lưu dữ liệu thật, Dashboard quản trị & CRM. Bản tinh gọn, mỗi bài kết bằng 1 prompt copy dùng ngay. */
export const module07: CourseDocModule = {
  id: "module-7",
  order: 7,
  title: "Module 7: Biến website thành phần mềm với Supabase — Dashboard & CRM",
  shortTitle: "07. Supabase, Dashboard & CRM",
  tagline: "Lưu dữ liệu thật · Trang quản trị · Chăm khách",
  description:
    "Nối website với Supabase để lưu khách hàng, đơn hàng, lịch hẹn thật; làm trang đăng nhập, dashboard quản trị và CRM chăm khách. Mỗi bài có 1 prompt để bạn copy dán thẳng vào Claude.",
  outcome:
    "Website lưu dữ liệu thật, có trang đăng nhập, dashboard và CRM để bạn quản lý — chuyển từ “web để xem” thành “phần mềm để dùng”, và có sẵn prompt chuẩn dùng lại mãi.",
  lessons: [
    {
      id: "m7-b1",
      title: "Bài 7.1 — Supabase là gì?",
      description: "Một hình dung đúng, không cần thuật ngữ.",
      duration: "6 phút",
      videoLabel: "Supabase là gì và giải quyết việc gì?",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Hiểu Supabase làm gì cho website — đủ để yên tâm dùng ở các bài sau.",
        },
        {
          type: "card",
          title: "Hình dung: cái tủ hồ sơ trên mây",
          body: [
            "Supabase là một cái tủ hồ sơ đặt trên mây cho website của bạn. Mỗi ngăn kéo là một bảng: ngăn khách hàng, ngăn đơn hàng, ngăn lịch hẹn.",
            "Khách điền form trên web → thông tin tự rơi vào đúng ngăn. Bạn mở tủ ra xem bất cứ lúc nào, từ bất cứ đâu — kể cả trên điện thoại.",
          ],
        },
        {
          type: "card",
          title: "Có Supabase, website của bạn sẽ",
          list: [
            "Lưu form liên hệ, đơn hàng, lịch hẹn THẬT — tắt máy vẫn còn, không mất.",
            "Ẩn khung giờ đã có người đặt (bài toán còn nợ từ Module 6, giải ở bài 7.8).",
            "Có trang quản trị riêng để bạn xem và xử lý dữ liệu.",
            "Miễn phí ở gói khởi đầu — đủ dùng cho gần hết dự án nhỏ.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Đây là bước “lên trình”",
          content:
            "Trước module này bạn làm web-để-xem. Sau module này bạn làm phần-mềm-để-dùng — cũng là thứ giúp bạn báo giá dự án cao hơn hẳn.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Hình dung được Supabase như tủ hồ sơ trên mây, mỗi bảng là một ngăn.",
            "✓ Biết 4 việc Supabase giúp website làm được.",
          ],
        },
      ],
    },
    {
      id: "m7-b2",
      title: "Bài 7.2 — Tạo project Supabase đầu tiên",
      description: "Từng bước trên trang Supabase, có gì bấm nấy, lấy 2 khóa kết nối.",
      duration: "12 phút",
      videoLabel: "Tạo project Supabase và lấy khóa kết nối",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Tạo xong một project Supabase và lấy được 2 khóa để website kết nối.",
        },
        {
          type: "card",
          title: "Làm ngay — tạo project",
          ordered: true,
          list: [
            "Mở trình duyệt, đăng nhập supabase.com (tài khoản đã tạo ở Module 1).",
            "Bấm nút New Project (màu xanh).",
            "Đặt tên project, vd: cafe-website.",
            "Tạo mật khẩu database → lưu lại cẩn thận vào ghi chú (lỡ quên sẽ phải đặt lại).",
            "Chọn region (nơi đặt máy chủ) là Singapore — gần Việt Nam nhất, web chạy nhanh hơn — rồi bấm tạo.",
            "Chờ 1–2 phút để project khởi tạo. Xong sẽ vào thẳng màn hình chính của project.",
          ],
        },
        {
          type: "card",
          title: "Làm ngay — lấy 2 khóa kết nối",
          body: [
            "Trong project, nhìn menu bên trái: bấm Settings (hình bánh răng) → API. Bạn sẽ thấy 2 thứ cần copy để dùng ở bài 7.3:",
          ],
          ordered: true,
          list: [
            "Project URL — địa chỉ tủ hồ sơ của bạn. Bấm nút copy bên cạnh.",
            "anon public key — chìa khóa công khai cho website dùng. Bấm copy.",
            "Dán tạm cả 2 vào một file ghi chú, lát nữa cần đến.",
          ],
        },
        {
          type: "links",
          items: [{ label: "Mở Supabase Dashboard", href: "https://supabase.com/dashboard" }],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên lưu mật khẩu database, sau này cần thì bí.",
            "Copy nhầm service_role key thay vì anon key (xem cảnh báo bên phải).",
            "Copy thiếu vài ký tự đầu/cuối của key → tới bài 7.3 kết nối báo lỗi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Quan trọng về bảo mật",
          content:
            "Website CHỈ dùng anon public key. TUYỆT ĐỐI đừng copy service_role key vào code hay gửi cho ai — key đó có toàn quyền với dữ liệu của bạn, lộ ra là mất sạch.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Tạo xong project, đã lưu mật khẩu database.",
            "✓ Copy được Project URL và anon public key.",
            "✓ Biết KHÔNG dùng service_role key cho website.",
          ],
        },
      ],
    },
    {
      id: "m7-b3",
      title: "Bài 7.3 — Nối form vào Supabase",
      description: "Dùng project đặt lịch (hoặc bán hàng) đã làm để lưu dữ liệu thật.",
      duration: "20 phút",
      videoLabel: "Kết nối form với Supabase",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Khách điền form → dữ liệu chạy thẳng vào Supabase, đúng “ngăn hồ sơ” của nó.",
        },
        {
          type: "note",
          tone: "info",
          label: "Nhớ lại từ Module 2",
          content:
            "Mở lại project cũ trong VS Code, mở Terminal (Ctrl + `), gõ claude rồi Enter. Đây là cái “khung chat với Claude” mà cả module sẽ dán prompt vào.",
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nối form vào Supabase",
          intro:
            "Bấm Shift + Tab tới khi thấy dòng “plan mode” gần ô chat (để AI trình cách làm trước, chưa đụng file), rồi dán prompt này vào khung chat Claude đang mở trong Terminal. Chỗ [ngoặc] điền 2 khóa đã copy ở bài 7.2:",
          copyLabel: "Copy prompt nối Supabase",
          prompt: `Tôi muốn nối website này với Supabase để lưu dữ liệu thật.

Thông tin kết nối:
- Project URL: [dán Project URL]
- anon key: [dán anon public key]

Yêu cầu:
1. Đọc lại DATABASE.md để biết cần những bảng dữ liệu nào.
2. Viết các lệnh SQL tạo bảng để tôi dán vào SQL Editor của Supabase — kèm giải thích ngắn từng bảng.
3. Bật Row Level Security cho mọi bảng: chỉ cho phép form công khai THÊM dữ liệu, KHÔNG cho đọc công khai.
4. Lưu URL và key vào file môi trường (.env), KHÔNG viết thẳng vào code.
5. Sửa form để khi khách bấm gửi, dữ liệu được lưu vào Supabase.
6. Xong thì hướng dẫn tôi cách kiểm tra dữ liệu đã vào bảng.`,
        },
        {
          type: "note",
          tone: "info",
          label: "Duyệt kế hoạch rồi mới làm",
          content:
            "Ở plan mode AI mới chỉ TRÌNH cách làm, chưa viết gì. Đọc thấy ổn thì bấm Shift + Tab lần nữa để thoát plan mode, gõ “Ổn rồi, làm đi” — lúc này AI mới viết đoạn SQL thật và sửa form.",
        },
        {
          type: "card",
          title: "Làm ngay — khi AI đưa đoạn SQL",
          ordered: true,
          list: [
            "Mở project Supabase trên trình duyệt → menu trái bấm SQL Editor.",
            "Bấm New query, dán TOÀN BỘ đoạn SQL AI vừa viết.",
            "Bấm Run (hoặc Ctrl + Enter). Thấy chữ Success là bảng đã tạo xong.",
            "Quay lại VS Code bảo AI: “Tôi chạy SQL xong rồi, làm tiếp bước sửa form đi.”",
            "Test gửi form thấy dữ liệu vào bảng → nhờ AI commit kèm ghi chú: xong-noi-supabase (điểm save như Module 2).",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Bỏ bước chạy SQL, sửa form luôn → gửi form báo “bảng không tồn tại”.",
            "Dán key vào thẳng code thay vì file .env — vừa lỗi vừa lộ khóa.",
            "Sửa .env xong quên chạy lại web — bảo AI: “tắt web đang chạy rồi chạy lại giúp tôi” — không thì tưởng vẫn lỗi.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Khoảnh khắc quan trọng",
          content:
            "Điền thử form trên web → mở Supabase → Table Editor → thấy đúng dòng dữ liệu vừa gửi. Đó là lúc website của bạn chính thức thành phần mềm.",
        },
        {
          type: "faq",
          title: "Lỗi hay gặp",
          items: [
            {
              question: "Gửi form báo lỗi kết nối?",
              answer:
                "Soi lại URL và anon key trong .env: thừa dấu cách, thiếu ký tự đầu/cuối là hỏng. Sửa xong bảo AI: “tắt web đang chạy rồi chạy lại giúp tôi”. Vẫn lỗi thì dán nguyên văn dòng lỗi đỏ cho AI, dặn chỉ sửa file .env và chỗ kết nối Supabase.",
            },
            {
              question: "Gửi thành công nhưng bảng trống?",
              answer:
                "Thường do quên chạy SQL tạo bảng, hoặc Row Level Security chưa cho THÊM dữ liệu. Copy dòng lỗi (nếu có) dán cho AI kiểm tra.",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Chạy SQL tạo bảng, thấy Success.",
            "✓ Key nằm trong .env, không nằm trong code.",
            "✓ Gửi form thật → thấy dòng mới trong Table Editor.",
          ],
        },
      ],
    },
    {
      id: "m7-b4",
      title: "Bài 7.4 — Xem & quản lý dữ liệu trong Supabase",
      description: "Table Editor dùng như Excel — nhưng vì sao vẫn chưa đủ tiện.",
      duration: "10 phút",
      videoLabel: "Dùng Table Editor của Supabase",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Biết xem, sửa, xóa, lọc, xuất dữ liệu ngay trong Supabase — như dùng một bảng Excel online.",
        },
        {
          type: "card",
          title: "Làm ngay — trong Table Editor",
          body: ["Menu trái Supabase → Table Editor → chọn bảng. Bạn làm được ngay:"],
          list: [
            "Xem mọi dòng khách gửi lên.",
            "Sửa trực tiếp một ô — bấm vào ô, gõ giá trị mới, Enter (y như sửa ô Excel).",
            "Xóa dòng rác hoặc dữ liệu test: chọn dòng → Delete.",
            "Lọc và tìm theo cột (nút Filter phía trên).",
            "Xuất ra file CSV để mở bằng Excel (nút Export).",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Sửa/xóa lung tung ngay trên dữ liệu thật, không phân biệt dòng test và dòng khách thật.",
            "Tưởng phải mở Supabase mỗi lần xem đơn — mệt mà thiếu chuyên nghiệp.",
            "Xuất CSV rồi sửa trong Excel, tưởng Supabase tự cập nhật (không, CSV chỉ là bản chép ra).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Vì sao vẫn chưa đủ",
          content:
            "Mở Supabase xem đơn khá lích kích, lại không tiện đưa cho nhân viên. Các bài sau sẽ dựng dashboard quản trị ngay trên website của bạn — gọn và pro hơn nhiều.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Biết xem, sửa, xóa, lọc dữ liệu trong Table Editor.",
            "✓ Biết xuất CSV để mở bằng Excel.",
            "✓ Hiểu vì sao cần dashboard riêng ở bài sau.",
          ],
        },
      ],
    },
    {
      id: "m7-b5",
      title: "Bài 7.5 — Trang đăng nhập cho quản trị",
      description: "Khóa cửa khu quản lý — chỉ mình bạn được vào.",
      duration: "20 phút",
      videoLabel: "Trang đăng nhập với Supabase Auth",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có một cánh cửa khóa: mọi trang /admin đều bắt đăng nhập, chưa đăng nhập là bị đẩy về trang login.",
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — tạo trang đăng nhập",
          intro:
            "Dán vào khung chat Claude đang mở trong Terminal. Nên bật plan mode (Shift + Tab) để xem AI định làm gì trước, ổn thì Shift + Tab thoát rồi bảo làm:",
          copyLabel: "Copy prompt trang đăng nhập",
          prompt: `Hãy thêm khu vực quản trị có đăng nhập cho website này.

Yêu cầu:
1. Dùng Supabase Auth, đăng nhập bằng email + mật khẩu.
2. Tạo trang /admin/login với form đăng nhập gọn gàng.
3. Mọi trang bắt đầu bằng /admin đều bắt buộc đăng nhập — chưa đăng nhập thì chuyển về /admin/login.
4. Có nút đăng xuất.
5. KHÔNG có chức năng tự đăng ký công khai — tài khoản quản trị chỉ tạo tay trong Supabase.
6. Hướng dẫn tôi cách tạo tài khoản quản trị đầu tiên (Authentication → Users → Add user).`,
        },
        {
          type: "card",
          title: "Làm ngay — tạo tài khoản quản trị của bạn",
          ordered: true,
          list: [
            "Mở Supabase trên trình duyệt → menu trái Authentication → Users.",
            "Bấm Add user → Create new user.",
            "Điền email + mật khẩu của bạn (đây là mật khẩu để đăng nhập /admin, khác mật khẩu database).",
            "Bấm tạo. Giờ vào /admin/login đăng nhập thử — vào được là xong.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Để form tự đăng ký công khai → ai cũng vào xem được dữ liệu khách.",
            "Quên tạo tài khoản trong Supabase rồi thắc mắc “sao đăng nhập không được”.",
            "Đặt mật khẩu quá dễ đoán cho khu chứa dữ liệu khách hàng.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Vì sao không cho tự đăng ký?",
          content:
            "Khu quản trị là nơi xem dữ liệu khách hàng. Ai cũng đăng ký được thì ai cũng xem được — nên tài khoản chỉ tạo tay, cấp cho đúng người cần.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Có trang /admin/login, mọi trang /admin bắt đăng nhập.",
            "✓ Tạo được tài khoản quản trị trong Supabase.",
            "✓ Đăng nhập/đăng xuất chạy đúng.",
          ],
        },
      ],
    },
    {
      id: "m7-b6",
      title: "Bài 7.6 — Dashboard quản trị",
      description: "Mở một trang là thấy ngay hôm nay có gì mới, cái gì chưa xử lý.",
      duration: "25 phút",
      videoLabel: "Dựng dashboard quản trị",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Có trang /admin: mở ra là thấy số liệu hôm nay + bảng đơn mới nhất, đổi trạng thái ngay tại chỗ.",
        },
        {
          type: "card",
          title: "Dashboard tốt trả lời 3 câu",
          body: ["Như cái bảng thông báo ở quầy lễ tân: liếc một cái là nắm tình hình."],
          ordered: true,
          list: [
            "Hôm nay có bao nhiêu đơn / lịch hẹn / liên hệ mới?",
            "Cái nào chưa xử lý?",
            "Tuần này tăng hay giảm?",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — dựng dashboard",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt dashboard",
          prompt: `Hãy tạo trang /admin (dashboard quản trị) đọc dữ liệu từ Supabase.

Gồm:
1. 3–4 thẻ số liệu trên cùng: tổng hôm nay, tổng tuần này, số chưa xử lý.
2. Bảng dữ liệu mới nhất với các cột quan trọng: tên khách, SĐT, nội dung, thời gian, trạng thái.
3. Bấm vào một dòng xem được chi tiết đầy đủ.
4. Nút đổi trạng thái ngay trên bảng (vd: Chờ xử lý → Đã xử lý).
5. Bộ lọc theo trạng thái và ô tìm kiếm theo tên/SĐT.
6. Biểu đồ cột đơn giản: số lượng theo 7 ngày gần nhất.

Giao diện gọn gàng, dễ đọc, dùng tốt trên cả điện thoại.`,
        },
        {
          type: "card",
          title: "Làm ngay — kiểm tra dashboard",
          ordered: true,
          list: [
            "Nhờ AI “chạy web lên cho tôi xem”, mở /admin.",
            "Ra ngoài website điền form bằng một tên mới → quay lại /admin xem có hiện dòng mới không.",
            "Bấm đổi trạng thái một dòng, xem thẻ số liệu có nhảy đúng không.",
            "Thu nhỏ cửa sổ như màn điện thoại — bảng không tràn, đọc được là đạt. Ổn thì nhờ AI commit: xong-dashboard.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Nhồi cả dashboard + CRM vào một prompt — rối, nên tách bài 7.7 riêng.",
            "Không test bằng dữ liệu thật, thấy trang có là tưởng xong.",
            "Bỏ qua kiểm tra trên điện thoại, khách/nhân viên xem mobile lại vỡ.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Dấu hiệu chạy đúng",
          content:
            "Điền form ngoài web bằng tên mới → dashboard hiện ngay dòng đó, đổi trạng thái được, thẻ số liệu tăng đúng — là dashboard đã sống.",
        },
        {
          type: "faq",
          title: "Lỗi hay gặp",
          items: [
            {
              question: "Dashboard trắng, không có dữ liệu?",
              answer:
                "Thường do Row Level Security đang chặn đọc. Dán cho AI: “Dashboard chỉ đọc được khi đã đăng nhập — hãy thêm policy cho phép người dùng đã đăng nhập đọc dữ liệu.”",
            },
          ],
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ /admin có thẻ số liệu + bảng đơn mới nhất.",
            "✓ Đổi trạng thái và lọc/tìm chạy được.",
            "✓ Đã test bằng dữ liệu thật, xem tốt trên điện thoại.",
          ],
        },
      ],
    },
    {
      id: "m7-b7",
      title: "Bài 7.7 — CRM mini: chăm khách có hệ thống",
      description: "Biến danh sách liên hệ thành một quy trình không sót khách.",
      duration: "25 phút",
      videoLabel: "Xây CRM mini trên nền dashboard",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Nâng dashboard thành CRM: mỗi khách có trạng thái chăm sóc, ghi chú và ngày hẹn gọi lại.",
        },
        {
          type: "card",
          title: "CRM — hiểu đơn giản",
          body: [
            "CRM giống cuốn sổ chăm khách của người bán hàng giỏi: ai đang quan tâm, gọi chưa, hẹn gọi lại hôm nào, chốt được chưa. Không có sổ này, khách rơi rụng vì… quên.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — nâng cấp thành CRM",
          intro: "Dán vào khung chat Claude đang mở trong Terminal:",
          copyLabel: "Copy prompt CRM",
          prompt: `Hãy nâng cấp khu quản trị thành CRM mini:

1. Mỗi khách có trạng thái chăm sóc: Mới → Đã liên hệ → Tiềm năng → Đã chốt → Không có nhu cầu.
2. Bấm vào khách xem được trang chi tiết: thông tin + toàn bộ lịch sử ghi chú.
3. Thêm được ghi chú mới cho từng khách (vd: "Gọi 15/7, khách hẹn tuần sau").
4. Đặt được ngày hẹn liên hệ lại; danh sách "Cần liên hệ hôm nay" hiện ngay đầu trang CRM.
5. Bảng khách lọc được theo trạng thái chăm sóc.

Cần thêm bảng gì trong Supabase thì viết SQL cho tôi chạy, kèm giải thích ngắn.`,
        },
        {
          type: "card",
          title: "Làm ngay — nếu AI đưa SQL mới",
          ordered: true,
          list: [
            "AI có thể cần thêm bảng ghi chú → nó sẽ đưa đoạn SQL.",
            "Vào Supabase → SQL Editor → New query → dán → Run → thấy Success.",
            "Quay lại VS Code báo AI đã chạy xong để nó làm tiếp phần giao diện.",
            "Test: thêm một ghi chú cho khách, đặt ngày hẹn hôm nay, xem có nhảy vào “Cần liên hệ hôm nay” không. Ổn thì commit: xong-crm.",
          ],
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Ghi chú vào Excel riêng thay vì vào CRM → mỗi máy một bản, loạn.",
            "Đặt quá nhiều trạng thái rối rắm, cuối cùng chẳng ai cập nhật.",
            "Làm xong không dùng mỗi ngày — CRM chỉ có giá trị khi được cập nhật đều.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Dùng CRM mỗi ngày 15 phút",
          content:
            "Sáng mở CRM → xem “Cần liên hệ hôm nay” → gọi/nhắn từng khách → ghi kết quả → cập nhật trạng thái. Mỗi ngày 15 phút, không sót khách nào.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Mỗi khách có trạng thái chăm sóc + ghi chú.",
            "✓ Đặt được ngày hẹn, có danh sách “Cần liên hệ hôm nay”.",
            "✓ Lọc khách theo trạng thái chạy được.",
          ],
        },
      ],
    },
    {
      id: "m7-b8",
      title: "Bài 7.8 — Chống đặt trùng giờ",
      description: "Giải bài toán còn nợ từ Module 6: ẩn khung giờ đã có người đặt.",
      duration: "15 phút",
      videoLabel: "Ẩn khung giờ đã có người đặt",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Khung giờ đã có người đặt sẽ tự biến mất, hai khách không thể đặt trùng một giờ.",
        },
        {
          type: "card",
          title: "Bài này dành cho website đặt lịch",
          body: [
            "Nếu bạn làm website bán hàng thì lướt qua bài này cũng được. Đây là phần đã hẹn giải ở Module 6 — giờ có Supabase lưu lịch hẹn rồi nên làm được.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — chống trùng lịch",
          intro: "Dán vào khung chat Claude đang mở trong Terminal (mở đúng project website đặt lịch):",
          copyLabel: "Copy prompt chống trùng lịch",
          prompt: `Website đặt lịch của tôi đã lưu lịch hẹn vào Supabase. Bây giờ hãy chống đặt trùng giờ:

1. Khi khách chọn ngày, chỉ hiển thị khung giờ CHƯA có ai đặt (kiểm tra bảng lịch hẹn, bỏ qua lịch đã hủy).
2. Nếu hai khách bấm gửi cùng một khung giờ gần như cùng lúc, chỉ MỘT người thành công — người còn lại nhận thông báo "Khung giờ vừa có người đặt, vui lòng chọn giờ khác".
3. Trong trang quản trị, khi hủy một lịch thì khung giờ đó được trả lại cho khách khác đặt.

Giải thích ngắn gọn cách bạn xử lý để tôi hiểu.`,
        },
        {
          type: "card",
          title: "Sai lầm người mới hay mắc",
          list: [
            "Quên tính tới lịch đã hủy → khung giờ trống mà vẫn bị ẩn.",
            "Chỉ ẩn trên giao diện, chưa chặn ở tầng dữ liệu → hai người vẫn đặt trùng được.",
            "Không test lại sau khi hủy lịch, tưởng khung giờ tự hiện lại (phải kiểm tra).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Cách kiểm tra",
          content:
            "Đặt thử lịch 9:00 → mở lại trang đặt lịch của ngày đó, khung 9:00 phải biến mất. Vào quản trị hủy lịch → khung 9:00 hiện trở lại. Đúng vậy là đạt.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Khung giờ đã đặt bị ẩn khi khách chọn ngày.",
            "✓ Hai khách không đặt trùng được một giờ.",
            "✓ Hủy lịch thì khung giờ được trả lại.",
          ],
        },
      ],
    },
    {
      id: "m7-b9",
      title: "Bài 7.9 — Bảo mật & bài tập cuối Module 7",
      description: "Dữ liệu khách hàng là tài sản — khóa cửa cẩn thận rồi tổng kết.",
      duration: "15 phút",
      videoLabel: "Checklist bảo mật + tổng kết",
      main: [
        {
          type: "note",
          tone: "success",
          label: "Mục tiêu bài này",
          content: "Rà soát 5 điểm bảo mật bắt buộc và hoàn thiện trọn bộ một website thành phần mềm thật.",
        },
        {
          type: "card",
          title: "Checklist bảo mật bắt buộc",
          ordered: true,
          list: [
            "Mọi bảng đều bật Row Level Security.",
            "Form công khai CHỈ được thêm dữ liệu, không đọc được dữ liệu người khác.",
            "Chỉ tài khoản đã đăng nhập mới đọc/sửa được dữ liệu trong quản trị.",
            "URL và key nằm trong file .env, không nằm trong code.",
            "service_role key không xuất hiện ở bất cứ đâu trong giao diện.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt chuẩn — tự kiểm tra bảo mật",
          intro: "Dán vào khung chat Claude đang mở trong Terminal, để AI tự soi giúp:",
          copyLabel: "Copy prompt rà soát bảo mật",
          prompt: `Hãy rà soát bảo mật cho project này:
1. Liệt kê các bảng trong Supabase và policy hiện tại của từng bảng.
2. Kiểm tra key có bị viết thẳng trong code không.
3. Kiểm tra người CHƯA đăng nhập có cách nào đọc được dữ liệu khách hàng không.
4. Chỉ ra rủi ro và sửa từng điểm, giải thích dễ hiểu cho người không biết code.`,
        },
        {
          type: "card",
          title: "Bài tập cuối module",
          body: ["Chọn website tâm đắc nhất (bán hàng hoặc đặt lịch) và hoàn thiện trọn bộ:"],
          list: [
            "Form lưu dữ liệu thật vào Supabase (bài 7.3).",
            "Trang quản trị có đăng nhập (bài 7.5).",
            "Dashboard có số liệu + bảng + đổi trạng thái (bài 7.6).",
            "CRM có ghi chú và hẹn liên hệ lại (bài 7.7).",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn đã có một phần mềm hoàn chỉnh: khách gửi dữ liệu — bạn quản lý, chăm sóc, chốt đơn ngay trên website của mình. Đây là mức nhiều freelancer đang được trả giá cao để làm.",
        },
        {
          type: "card",
          title: "Checklist cuối bài",
          list: [
            "✓ Qua đủ 5 điểm bảo mật, đã chạy prompt rà soát.",
            "✓ Một website hoàn thiện trọn 4 phần trên.",
            "✓ Đã commit lại “điểm save” cuối cùng của module.",
          ],
        },
      ],
    },
  ],
};
