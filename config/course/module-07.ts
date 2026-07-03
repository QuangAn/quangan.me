import type { CourseDocModule } from "@/types/course";

/** Module 7: Supabase — lưu dữ liệu thật, Dashboard quản trị & CRM. */
export const module07: CourseDocModule = {
  id: "module-7",
  order: 7,
  title: "Module 7: Biến website thành phần mềm với Supabase — Dashboard & CRM",
  shortTitle: "07. Supabase, Dashboard & CRM",
  tagline: "Lưu dữ liệu thật + trang quản trị",
  description:
    "Kết nối website với Supabase để lưu khách hàng, đơn hàng, lịch hẹn thật; tạo trang đăng nhập, dashboard quản trị và CRM chăm sóc khách hàng.",
  duration: "180–240 phút",
  level: "Nâng cao (vẫn không cần biết code)",
  outcome: "Website lưu dữ liệu thật, có dashboard quản trị và CRM khách hàng",
  lessons: [
    {
      id: "m7-b1",
      title: "Supabase là gì — hiểu đơn giản",
      description: "Không cần thuật ngữ, chỉ cần một hình dung đúng.",
      duration: "6 phút",
      videoLabel: "Supabase là gì và giải quyết việc gì?",
      main: [
        {
          type: "card",
          title: "Hiểu đơn giản",
          body: [
            "Supabase giống một tủ hồ sơ trên mây cho website của bạn. Mỗi ngăn kéo là một bảng dữ liệu: ngăn đựng khách hàng, ngăn đựng đơn hàng, ngăn đựng lịch hẹn.",
            "Khi khách điền form trên website, thông tin được cất vào đúng ngăn. Bạn mở tủ ra xem bất cứ lúc nào, từ bất cứ đâu.",
          ],
        },
        {
          type: "card",
          title: "Có Supabase, website của bạn sẽ",
          list: [
            "Lưu form liên hệ, đơn hàng, lịch hẹn thật — không mất dữ liệu.",
            "Ẩn khung giờ đã có người đặt (bài toán Module 6).",
            "Có trang quản trị riêng để xem và xử lý dữ liệu.",
            "Miễn phí ở gói khởi đầu — đủ dùng cho hầu hết dự án nhỏ.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Đây là bước “lên trình”",
          content:
            "Trước module này bạn làm website-để-xem. Sau module này bạn làm được phần mềm-để-dùng. Đây cũng là kỹ năng giúp báo giá dự án cao hơn hẳn.",
        },
      ],
    },
    {
      id: "m7-b2",
      title: "Tạo project Supabase đầu tiên",
      description: "Từng bước trên trang Supabase, có gì bấm nấy.",
      duration: "12 phút",
      videoLabel: "Tạo project Supabase và lấy khóa kết nối",
      main: [
        {
          type: "card",
          title: "Các bước",
          ordered: true,
          list: [
            "Đăng nhập supabase.com (tài khoản đã tạo ở Module 1).",
            "Bấm New Project.",
            "Đặt tên project (vd: cafe-website).",
            "Tạo mật khẩu database — lưu lại cẩn thận.",
            "Chọn region Singapore (gần Việt Nam nhất) rồi bấm tạo.",
            "Chờ 1–2 phút để project khởi tạo xong.",
          ],
        },
        {
          type: "card",
          title: "Lấy 2 khóa kết nối",
          body: [
            "Vào Settings → API trong project, bạn sẽ thấy 2 thứ website cần để kết nối:",
          ],
          list: [
            "Project URL — địa chỉ tủ hồ sơ của bạn.",
            "anon public key — chìa khóa cho website dùng.",
          ],
        },
        {
          type: "links",
          items: [{ label: "Mở Supabase Dashboard", href: "https://supabase.com/dashboard" }],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Quan trọng về bảo mật",
          content:
            "Chỉ dùng anon public key cho website. KHÔNG bao giờ copy service_role key vào code giao diện hoặc gửi cho người khác — key đó có toàn quyền với dữ liệu của bạn.",
        },
      ],
    },
    {
      id: "m7-b3",
      title: "Cho AI kết nối form vào Supabase",
      description: "Dùng project đặt lịch (hoặc bán hàng) đã làm để kết nối thật.",
      duration: "20 phút",
      videoLabel: "Kết nối form với Supabase",
      main: [
        {
          type: "prompt",
          title: "Prompt kết nối Supabase",
          prompt: `Tôi muốn kết nối website này với Supabase để lưu dữ liệu thật.

Thông tin kết nối (tôi sẽ cung cấp khi bạn cần):
- Project URL: [dán Project URL]
- anon key: [dán anon public key]

Yêu cầu:
1. Đọc lại DATABASE.md để biết cần những bảng dữ liệu nào
2. Viết cho tôi các lệnh SQL tạo bảng để tôi dán vào SQL Editor của Supabase — kèm giải thích ngắn từng bảng
3. Bật Row Level Security cho mọi bảng, chỉ cho phép thêm dữ liệu từ form công khai, không cho đọc công khai
4. Lưu URL và key vào file môi trường (.env), KHÔNG viết thẳng vào code
5. Sửa form để khi khách bấm gửi, dữ liệu được lưu vào Supabase
6. Sau khi xong, hướng dẫn tôi cách kiểm tra dữ liệu đã vào bảng`,
        },
        {
          type: "card",
          title: "Cách chạy SQL mà AI đưa",
          ordered: true,
          list: [
            "Vào project Supabase → SQL Editor.",
            "Dán toàn bộ đoạn SQL AI viết.",
            "Bấm Run.",
            "Thấy Success là bảng đã được tạo.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Khoảnh khắc quan trọng",
          content:
            "Điền thử form trên website → mở Supabase → Table Editor → thấy dòng dữ liệu vừa gửi. Đó là lúc website của bạn chính thức trở thành phần mềm.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Gửi form báo lỗi kết nối?",
              answer:
                "Kiểm tra lại URL và anon key trong file .env có đúng không (thừa dấu cách, thiếu ký tự). Sửa xong phải tắt và chạy lại npm run dev.",
            },
            {
              question: "Gửi thành công nhưng bảng trống?",
              answer:
                "Thường do quên chạy SQL tạo bảng, hoặc Row Level Security chưa có quyền thêm dữ liệu. Copy lỗi (nếu có) gửi AI kiểm tra.",
            },
          ],
        },
      ],
    },
    {
      id: "m7-b4",
      title: "Xem và quản lý dữ liệu trong Supabase",
      description: "Thao tác với Table Editor — như dùng Excel.",
      duration: "10 phút",
      videoLabel: "Dùng Table Editor của Supabase",
      main: [
        {
          type: "card",
          title: "Những gì bạn làm được ngay trong Supabase",
          list: [
            "Xem mọi dòng dữ liệu khách gửi lên (Table Editor).",
            "Sửa trực tiếp một ô dữ liệu — như sửa ô Excel.",
            "Xóa dòng rác hoặc dữ liệu test.",
            "Lọc và tìm kiếm theo cột.",
            "Xuất dữ liệu ra file CSV để mở bằng Excel.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Nhưng thao tác vậy chưa tiện",
          content:
            "Mỗi lần muốn xem đơn phải mở Supabase khá lích kích. Các bài tiếp theo sẽ làm dashboard quản trị ngay trên website của bạn — chuyên nghiệp và tiện hơn nhiều.",
        },
      ],
    },
    {
      id: "m7-b5",
      title: "Tạo trang đăng nhập cho quản trị",
      description: "Chỉ mình bạn được vào khu vực quản lý.",
      duration: "20 phút",
      videoLabel: "Trang đăng nhập với Supabase Auth",
      main: [
        {
          type: "prompt",
          title: "Prompt tạo trang đăng nhập",
          prompt: `Hãy thêm khu vực quản trị có đăng nhập cho website này.

Yêu cầu:
1. Dùng Supabase Auth với đăng nhập bằng email + mật khẩu
2. Tạo trang /admin/login với form đăng nhập gọn gàng
3. Mọi trang bắt đầu bằng /admin đều bắt buộc đăng nhập — chưa đăng nhập thì chuyển về trang login
4. Có nút đăng xuất
5. KHÔNG có chức năng tự đăng ký công khai — tài khoản quản trị chỉ tạo tay trong Supabase
6. Hướng dẫn tôi cách tạo tài khoản quản trị đầu tiên trong Supabase Dashboard (Authentication → Users → Add user)`,
        },
        {
          type: "card",
          title: "Tạo tài khoản quản trị của bạn",
          ordered: true,
          list: [
            "Vào Supabase → Authentication → Users.",
            "Bấm Add user → Create new user.",
            "Điền email + mật khẩu của bạn.",
            "Bấm tạo — giờ đăng nhập được vào /admin/login.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "warning",
          label: "Vì sao không cho tự đăng ký?",
          content:
            "Khu quản trị là nơi xem dữ liệu khách hàng. Nếu ai cũng đăng ký được thì ai cũng xem được — nên tài khoản chỉ tạo tay, cấp cho đúng người cần.",
        },
      ],
    },
    {
      id: "m7-b6",
      title: "Dashboard quản trị: số liệu và bảng dữ liệu",
      description: "Mở một trang là thấy ngay hôm nay có gì mới.",
      duration: "25 phút",
      videoLabel: "Dựng dashboard quản trị",
      main: [
        {
          type: "card",
          title: "Dashboard tốt trả lời được 3 câu hỏi",
          list: [
            "Hôm nay có bao nhiêu đơn/lịch hẹn/liên hệ mới?",
            "Cái nào chưa xử lý?",
            "Xu hướng tuần này tăng hay giảm?",
          ],
        },
        {
          type: "prompt",
          title: "Prompt dựng dashboard",
          prompt: `Hãy tạo trang /admin (dashboard quản trị) đọc dữ liệu từ Supabase.

Gồm:
1. 3-4 thẻ số liệu trên cùng: tổng số hôm nay, tổng tuần này, số chưa xử lý
2. Bảng dữ liệu mới nhất: các cột quan trọng (tên khách, SĐT, nội dung, thời gian, trạng thái)
3. Bấm vào một dòng xem được chi tiết đầy đủ
4. Nút đổi trạng thái ngay trên bảng (vd: Chờ xử lý → Đã xử lý)
5. Bộ lọc theo trạng thái và ô tìm kiếm theo tên/SĐT
6. Biểu đồ cột đơn giản: số lượng theo 7 ngày gần nhất

Giao diện gọn gàng, dễ đọc, dùng tốt trên cả điện thoại.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra",
          content:
            "Điền form ngoài website bằng một tên mới → vào dashboard thấy ngay dòng mới, đổi trạng thái được, số liệu thẻ tăng đúng — là dashboard đã hoạt động.",
        },
        {
          type: "faq",
          items: [
            {
              question: "Dashboard trắng, không có dữ liệu?",
              answer:
                "Thường do Row Level Security đang chặn đọc. Nói với AI: “Dashboard chỉ đọc được dữ liệu khi đã đăng nhập — hãy thêm policy cho phép người dùng đã đăng nhập đọc dữ liệu.”",
            },
          ],
        },
      ],
    },
    {
      id: "m7-b7",
      title: "CRM mini: chăm sóc khách hàng có hệ thống",
      description: "Biến danh sách liên hệ thành quy trình chăm khách.",
      duration: "25 phút",
      videoLabel: "Xây CRM mini trên nền dashboard",
      main: [
        {
          type: "card",
          title: "CRM — hiểu đơn giản",
          body: [
            "CRM là sổ chăm sóc khách hàng: ai đang quan tâm, đã gọi chưa, hẹn gọi lại khi nào, chốt được hay chưa. Không có CRM, khách rơi rụng vì… quên.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt nâng cấp thành CRM",
          prompt: `Hãy nâng cấp khu quản trị thành CRM mini:

1. Mỗi khách hàng có trạng thái chăm sóc: Mới → Đã liên hệ → Tiềm năng → Đã chốt → Không có nhu cầu
2. Bấm vào khách xem được trang chi tiết: thông tin + toàn bộ lịch sử ghi chú
3. Thêm được ghi chú mới cho từng khách (vd: "Gọi 15/7, khách hẹn tuần sau")
4. Đặt được ngày hẹn liên hệ lại; danh sách "Cần liên hệ hôm nay" hiện ngay đầu trang CRM
5. Bảng khách lọc được theo trạng thái chăm sóc

Cần thêm bảng gì trong Supabase thì viết SQL cho tôi chạy, kèm giải thích.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "info",
          label: "Quy trình dùng CRM mỗi ngày",
          content:
            "Sáng mở CRM → xem “Cần liên hệ hôm nay” → gọi/nhắn từng khách → ghi chú kết quả → cập nhật trạng thái. Mỗi ngày 15 phút, không sót khách nào.",
        },
      ],
    },
    {
      id: "m7-b8",
      title: "Chống đặt trùng giờ cho website đặt lịch",
      description: "Giải bài toán còn nợ từ Module 6.",
      duration: "15 phút",
      videoLabel: "Ẩn khung giờ đã có người đặt",
      main: [
        {
          type: "prompt",
          title: "Prompt chống trùng lịch",
          prompt: `Website đặt lịch của tôi đã lưu lịch hẹn vào Supabase.
Bây giờ hãy chống đặt trùng giờ:

1. Khi khách chọn ngày, chỉ hiển thị khung giờ CHƯA có ai đặt (kiểm tra trong bảng lịch hẹn, bỏ qua lịch đã hủy)
2. Nếu hai khách bấm gửi cùng một khung giờ gần như cùng lúc, chỉ một người thành công — người còn lại nhận thông báo "Khung giờ vừa có người đặt, vui lòng chọn giờ khác"
3. Trong trang quản trị, lịch bị hủy sẽ trả lại khung giờ đó cho khách khác đặt

Giải thích ngắn gọn cách bạn xử lý để tôi hiểu.`,
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kiểm tra",
          content:
            "Đặt thử một lịch 9:00 → mở lại trang đặt lịch, khung 9:00 của ngày đó phải biến mất. Vào quản trị hủy lịch → khung 9:00 hiện trở lại.",
        },
      ],
    },
    {
      id: "m7-b9",
      title: "Bảo mật cơ bản và bài tập cuối Module 7",
      description: "Dữ liệu khách hàng là tài sản — khóa cửa cẩn thận.",
      duration: "15 phút",
      videoLabel: "Checklist bảo mật + tổng kết",
      main: [
        {
          type: "card",
          title: "Checklist bảo mật bắt buộc",
          list: [
            "Mọi bảng đều bật Row Level Security.",
            "Form công khai chỉ được THÊM dữ liệu, không đọc được dữ liệu người khác.",
            "Chỉ tài khoản đăng nhập mới đọc/sửa được dữ liệu trong quản trị.",
            "URL và key nằm trong file .env, không nằm trong code.",
            "service_role key không xuất hiện ở bất cứ đâu trong giao diện.",
          ],
        },
        {
          type: "prompt",
          title: "Prompt tự kiểm tra bảo mật",
          prompt: `Hãy rà soát bảo mật cho project này:
1. Liệt kê các bảng trong Supabase và policy hiện tại của từng bảng
2. Kiểm tra key có bị viết thẳng trong code không
3. Kiểm tra người chưa đăng nhập có cách nào đọc được dữ liệu khách hàng không
4. Chỉ ra rủi ro và sửa từng điểm, giải thích dễ hiểu cho người không biết code`,
        },
        {
          type: "card",
          title: "Bài tập",
          body: [
            "Chọn website tâm đắc nhất của bạn (bán hàng hoặc đặt lịch) và hoàn thiện trọn bộ:",
          ],
          list: [
            "Form lưu dữ liệu thật vào Supabase.",
            "Trang quản trị có đăng nhập.",
            "Dashboard có số liệu + bảng + đổi trạng thái.",
            "CRM có ghi chú và hẹn liên hệ lại.",
          ],
        },
      ],
      aside: [
        {
          type: "note",
          tone: "success",
          label: "Kết quả cuối module",
          content:
            "Bạn đã có một phần mềm hoàn chỉnh: khách gửi dữ liệu — bạn quản lý, chăm sóc, chốt đơn trên chính website của mình. Đây là mức nhiều freelancer chuyên nghiệp đang được trả giá cao để làm.",
        },
      ],
    },
  ],
};
