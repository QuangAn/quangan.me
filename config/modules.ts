import type { CourseModule } from "@/types";

/** Section: Course Modules - 8 module thực chiến của khóa học. */
export const modules: CourseModule[] = [
  {
    order: 1,
    icon: "rocket",
    title: "Có Landing Page đầu tiên sau 30 phút",
    result: "Bạn tạo được một landing page đơn giản, đẹp và responsive bằng AI.",
    lessons: [
      "Làm quen công cụ AI tạo website",
      "Công thức mô tả để AI hiểu đúng ý",
      "Chỉnh màu sắc, nội dung, hình ảnh",
      "Xuất bản landing page đầu tiên",
    ],
  },
  {
    order: 2,
    icon: "building",
    title: "Tự tạo Website doanh nghiệp",
    result: "Bạn tạo được website giới thiệu công ty, dịch vụ và form liên hệ.",
    lessons: [
      "Cấu trúc một website doanh nghiệp chuẩn",
      "Trang giới thiệu, dịch vụ, liên hệ",
      "Thêm form liên hệ nhận thông tin khách",
      "Tối ưu bố cục cho chuyên nghiệp",
    ],
  },
  {
    order: 3,
    icon: "cart",
    title: "Tự tạo Website bán hàng",
    result:
      "Bạn tạo được website có danh mục, chi tiết sản phẩm và nút mua hàng.",
    lessons: [
      "Trình bày sản phẩm hấp dẫn",
      "Danh mục và trang chi tiết sản phẩm",
      "Nút mua hàng và kêu gọi hành động",
      "Kết nối liên hệ đặt hàng",
    ],
  },
  {
    order: 4,
    icon: "calendar",
    title: "Tự tạo Website đặt lịch",
    result: "Bạn tạo được website booking cho spa, salon, phòng khám, tư vấn.",
    lessons: [
      "Luồng đặt lịch cho khách",
      "Chọn dịch vụ, ngày giờ, thông tin",
      "Nhận thông báo lịch hẹn",
      "Tùy biến cho từng ngành dịch vụ",
    ],
  },
  {
    order: 5,
    icon: "dashboard",
    title: "Tự tạo Dashboard quản trị",
    result: "Bạn tạo được giao diện quản trị với bảng, biểu đồ và bộ lọc.",
    lessons: [
      "Bố cục một dashboard dễ nhìn",
      "Hiển thị số liệu bằng bảng và thẻ",
      "Biểu đồ trực quan cơ bản",
      "Bộ lọc và tìm kiếm dữ liệu",
    ],
  },
  {
    order: 6,
    icon: "users",
    title: "Tự tạo CRM khách hàng",
    result:
      "Bạn tạo được hệ thống quản lý khách hàng, ghi chú và lịch chăm sóc.",
    lessons: [
      "Quản lý danh sách khách hàng",
      "Trạng thái và phân loại khách",
      "Ghi chú và lịch sử chăm sóc",
      "Nhắc lịch follow-up khách hàng",
    ],
  },
  {
    order: 7,
    icon: "globe",
    title: "Đưa website lên Internet với tên miền riêng",
    result: "Bạn biết deploy lên Vercel, gắn domain và cấu hình HTTPS.",
    lessons: [
      "Deploy website chỉ với vài cú click",
      "Mua và gắn tên miền riêng",
      "Bật HTTPS bảo mật miễn phí",
      "Cập nhật website sau khi đã lên mạng",
    ],
  },
  {
    order: 8,
    icon: "wallet",
    title: "Biết cách nhận dự án và kiếm tiền",
    result:
      "Bạn biết đóng gói dịch vụ, báo giá, tìm khách và bàn giao website.",
    lessons: [
      "Đóng gói dịch vụ làm website",
      "Cách báo giá và chốt khách",
      "Kênh tìm khách hàng đầu tiên",
      "Quy trình bàn giao chuyên nghiệp",
    ],
  },
];
