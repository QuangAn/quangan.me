import type { CourseSection } from "@/types";

/**
 * Nội dung khu vực học (portal /hoc). Học viên đăng nhập sau khi thanh toán
 * sẽ thấy các chương dưới đây, lọc theo gói đã mua.
 *
 * Cách dùng: dán link tài liệu thật vào `resourceUrl` của từng bài
 * (Google Drive, YouTube, PDF, Notion...). Bài chưa có link sẽ hiển thị
 * "Sắp cập nhật". KHÔNG hard-code nội dung lớn trong component — chỉ sửa ở đây.
 */
export const courseSections: CourseSection[] = [
  {
    order: 1,
    icon: "rocket",
    title: "Bắt đầu — Landing Page đầu tiên",
    summary:
      "Làm quen công cụ AI và xuất bản landing page đầu tiên chỉ trong buổi học đầu.",
    lessons: [
      { title: "Giới thiệu lộ trình & cách học hiệu quả", type: "video" },
      { title: "Cài đặt công cụ AI tạo website", type: "doc" },
      { title: "Công thức mô tả để AI hiểu đúng ý", type: "doc" },
      { title: "Xuất bản landing page đầu tiên", type: "video" },
    ],
  },
  {
    order: 2,
    icon: "building",
    title: "Website doanh nghiệp",
    summary: "Dựng website giới thiệu công ty, dịch vụ và form liên hệ.",
    lessons: [
      { title: "Cấu trúc website doanh nghiệp chuẩn", type: "video" },
      { title: "Trang giới thiệu, dịch vụ, liên hệ", type: "video" },
      { title: "Thêm form liên hệ nhận thông tin khách", type: "doc" },
    ],
  },
  {
    order: 3,
    icon: "cart",
    title: "Website bán hàng",
    summary: "Danh mục sản phẩm, trang chi tiết và nút mua hàng.",
    lessons: [
      { title: "Trình bày sản phẩm hấp dẫn", type: "video" },
      { title: "Danh mục & trang chi tiết sản phẩm", type: "video" },
      { title: "Nút mua hàng và kêu gọi hành động", type: "doc" },
    ],
  },
  {
    order: 4,
    icon: "calendar",
    title: "Website đặt lịch",
    summary: "Booking cho spa, salon, phòng khám, tư vấn.",
    lessons: [
      { title: "Luồng đặt lịch cho khách", type: "video" },
      { title: "Chọn dịch vụ, ngày giờ, thông tin", type: "video" },
      { title: "Nhận thông báo lịch hẹn", type: "doc" },
    ],
  },
  {
    order: 5,
    icon: "dashboard",
    title: "Dashboard quản trị",
    summary: "Giao diện quản trị với bảng, biểu đồ và bộ lọc.",
    lessons: [
      { title: "Bố cục một dashboard dễ nhìn", type: "video" },
      { title: "Hiển thị số liệu bằng bảng và thẻ", type: "video" },
      { title: "Biểu đồ trực quan cơ bản", type: "doc" },
    ],
  },
  {
    order: 6,
    icon: "users",
    title: "CRM khách hàng",
    summary: "Quản lý khách hàng, ghi chú và lịch chăm sóc.",
    lessons: [
      { title: "Quản lý danh sách khách hàng", type: "video" },
      { title: "Trạng thái và phân loại khách", type: "video" },
      { title: "Nhắc lịch follow-up khách hàng", type: "doc" },
    ],
  },
  {
    order: 7,
    icon: "globe",
    title: "Đưa website lên Internet",
    summary: "Deploy lên Vercel, gắn tên miền riêng và bật HTTPS.",
    lessons: [
      { title: "Deploy website chỉ với vài cú click", type: "video" },
      { title: "Mua và gắn tên miền riêng", type: "doc" },
      { title: "Bật HTTPS bảo mật miễn phí", type: "doc" },
    ],
  },
  {
    order: 8,
    icon: "wallet",
    title: "Nhận dự án & kiếm tiền",
    summary: "Đóng gói dịch vụ, báo giá, tìm khách và bàn giao website.",
    lessons: [
      { title: "Đóng gói dịch vụ làm website", type: "video" },
      { title: "Cách báo giá và chốt khách", type: "doc" },
      { title: "Quy trình bàn giao chuyên nghiệp", type: "download" },
    ],
  },
  {
    order: 9,
    icon: "zap",
    title: "Kèm cặp 1-1 — Quyền lợi riêng",
    summary:
      "Dành riêng cho học viên gói Kèm Cặp 1-1: buổi học trực tiếp, dự án thật và hỗ trợ tận tay.",
    minPlan: "kem-cap-1-1",
    lessons: [
      { title: "Đặt lịch buổi kèm 1-1 với mentor", type: "link" },
      { title: "Nhóm học viên kín (Zalo/Telegram)", type: "link" },
      { title: "Thư viện prompt nâng cao & template dự án", type: "download" },
      { title: "Tư vấn thương mại hóa sản phẩm", type: "doc" },
    ],
  },
];
