import type { PainPoint, SolutionStep, Outcome } from "@/types";

/** Section: Pain Points - nỗi đau của người muốn có website. */
export const painPoints: PainPoint[] = [
  {
    icon: "compass",
    title: "Không biết bắt đầu từ đâu",
    description:
      "Muốn có website nhưng đứng trước quá nhiều công cụ, thuật ngữ và lựa chọn nên mãi không bắt đầu được.",
  },
  {
    icon: "code",
    title: "Không biết code",
    description:
      "Nghĩ rằng phải học lập trình nhiều tháng mới làm được web, trong khi bạn chỉ cần một trang bán hàng đơn giản.",
  },
  {
    icon: "coins",
    title: "Thuê người làm quá tốn kém",
    description:
      "Báo giá làm website từ vài triệu đến vài chục triệu, sửa một chút cũng mất phí và phải chờ đợi.",
  },
  {
    icon: "lock",
    title: "Sợ bị phụ thuộc",
    description:
      "Làm xong website là bị lệ thuộc bên thiết kế. Muốn đổi giá, đổi ảnh, thêm mục cũng phải nhờ người khác.",
  },
  {
    icon: "help",
    title: "Dùng AI nhưng ra lệnh sai",
    description:
      "Đã thử ChatGPT hay công cụ AI nhưng không biết mô tả thế nào cho đúng nên kết quả lộn xộn, không dùng được.",
  },
  {
    icon: "globe",
    title: "Không biết đưa web lên mạng",
    description:
      "Làm được bản demo trên máy nhưng loay hoay không biết cách đưa website lên Internet cho khách xem.",
  },
];

/** Section: Solution - cách khóa học giải quyết vấn đề (4 bước). */
export const solutionSteps: SolutionStep[] = [
  {
    icon: "message",
    step: "01",
    title: "Mô tả ý tưởng",
    description:
      "Bạn nói cho AI biết mình muốn gì bằng ngôn ngữ đời thường, không cần thuật ngữ kỹ thuật.",
  },
  {
    icon: "wand",
    step: "02",
    title: "Ra lệnh đúng cách",
    description:
      "Bạn học công thức ra lệnh để AI tạo giao diện, nội dung và tính năng đúng như mong muốn.",
  },
  {
    icon: "check",
    step: "03",
    title: "Kiểm tra & chỉnh sửa",
    description:
      "Bạn học cách xem lại kết quả, yêu cầu AI sửa cho đến khi website đẹp và chạy đúng.",
  },
  {
    icon: "upload",
    step: "04",
    title: "Đưa lên Internet",
    description:
      "Bạn deploy website lên mạng với tên miền riêng, gửi link cho khách hàng chỉ trong vài phút.",
  },
];

/** Section: Outcomes - sau khóa học bạn làm được gì. */
export const outcomes: Outcome[] = [
  {
    icon: "rocket",
    title: "Tạo landing page bán hàng",
    description: "Trang giới thiệu sản phẩm, dịch vụ có nút kêu gọi hành động rõ ràng.",
  },
  {
    icon: "building",
    title: "Tạo website doanh nghiệp",
    description: "Trang giới thiệu công ty, dịch vụ và form liên hệ chuyên nghiệp.",
  },
  {
    icon: "cart",
    title: "Tạo website bán hàng",
    description: "Danh mục sản phẩm, chi tiết sản phẩm và luồng mua hàng cơ bản.",
  },
  {
    icon: "calendar",
    title: "Tạo website đặt lịch",
    description: "Website booking cho spa, salon, phòng khám hoặc dịch vụ tư vấn.",
  },
  {
    icon: "dashboard",
    title: "Tạo dashboard quản trị",
    description: "Giao diện quản trị với bảng, biểu đồ và bộ lọc dễ dùng.",
  },
  {
    icon: "users",
    title: "Tạo CRM khách hàng",
    description: "Hệ thống quản lý khách hàng, ghi chú và lịch chăm sóc.",
  },
  {
    icon: "globe",
    title: "Đưa web lên với domain riêng",
    description: "Deploy website lên Internet, gắn tên miền và bật HTTPS.",
  },
  {
    icon: "wallet",
    title: "Nhận dự án để kiếm tiền",
    description: "Đóng gói dịch vụ, báo giá và bàn giao website cho khách.",
  },
];
