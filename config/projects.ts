import type { DemoProject, Audience } from "@/types";

/** Section: Demo Projects - dự án mẫu học viên sẽ tự làm được. */
export const projects: DemoProject[] = [
  {
    icon: "rocket",
    title: "Landing page ra mắt sản phẩm",
    description:
      "Trang giới thiệu sản phẩm mới với hình ảnh, lợi ích và nút đăng ký nhận ưu đãi.",
    tags: ["Marketing", "Bán hàng"],
  },
  {
    icon: "store",
    title: "Website shop thời trang",
    description:
      "Cửa hàng online trưng bày sản phẩm theo danh mục, có trang chi tiết và liên hệ đặt mua.",
    tags: ["Bán hàng", "Chủ shop"],
  },
  {
    icon: "scissors",
    title: "Website đặt lịch spa & salon",
    description:
      "Khách chọn dịch vụ, chọn giờ và để lại thông tin đặt lịch nhanh chóng.",
    tags: ["Dịch vụ", "Booking"],
  },
  {
    icon: "building",
    title: "Website giới thiệu doanh nghiệp",
    description:
      "Trang công ty chuyên nghiệp với dịch vụ, dự án đã làm và form liên hệ hợp tác.",
    tags: ["Doanh nghiệp", "Uy tín"],
  },
  {
    icon: "dashboard",
    title: "Dashboard quản lý bán hàng",
    description:
      "Bảng điều khiển hiển thị doanh thu, đơn hàng và số liệu quan trọng theo thời gian.",
    tags: ["Quản trị", "Số liệu"],
  },
  {
    icon: "users",
    title: "CRM chăm sóc khách hàng",
    description:
      "Quản lý danh sách khách, trạng thái và nhắc lịch chăm sóc để không bỏ sót ai.",
    tags: ["CRM", "Chăm sóc"],
  },
];

/** Section: Audience - khóa học này dành cho ai. */
export const audiences: Audience[] = [
  {
    icon: "store",
    title: "Chủ shop online",
    description:
      "Tự làm website bán hàng, cập nhật sản phẩm và khuyến mãi mà không phụ thuộc ai.",
  },
  {
    icon: "scissors",
    title: "Chủ spa, salon, quán ăn",
    description:
      "Có website đặt lịch và giới thiệu dịch vụ để khách tin tưởng và đặt chỗ dễ dàng.",
  },
  {
    icon: "briefcase",
    title: "Chủ doanh nghiệp nhỏ",
    description:
      "Xây dựng hình ảnh chuyên nghiệp trên Internet với chi phí gần như bằng không.",
  },
  {
    icon: "target",
    title: "Freelancer",
    description:
      "Thêm một kỹ năng kiếm tiền: nhận làm website cho khách bằng AI, giao nhanh.",
  },
  {
    icon: "megaphone",
    title: "Marketer",
    description:
      "Tự dựng landing page cho chiến dịch mà không cần chờ đội kỹ thuật hỗ trợ.",
  },
  {
    icon: "graduation",
    title: "Sinh viên & người mới",
    description:
      "Bắt đầu với công nghệ theo cách dễ nhất, tạo sản phẩm thật ngay từ buổi đầu.",
  },
];
