import type { NavLink } from "@/types";

/**
 * Cấu hình tổng thể cho website. Đổi nội dung ở đây thay vì sửa trong component.
 */
export const siteConfig = {
  name: "AI Website Builder",
  shortName: "AI Web Builder",
  domain: "ai-website-builder.vercel.app",
  url: "https://ai-website-builder.vercel.app",
  locale: "vi_VN",
  tagline: "Tự tạo Website, Landing Page và Web App bằng AI",
  description:
    "Khóa học AI Website Builder giúp người không biết code tự tạo website, landing page và web app bằng AI. Không cần lập trình, không cần thuê developer, chỉ cần biết dùng máy tính.",
  keywords: [
    "khóa học AI",
    "tạo website bằng AI",
    "AI website builder",
    "học làm website không cần code",
    "landing page AI",
    "no code",
    "vibe coding",
    "tự tạo web app",
  ],
  contact: {
    email: "quangan.507e@gmail.com",
    phone: "0987 159 846",
    zalo: "0987 159 846",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  // Người hướng dẫn / chủ khóa học (thông tin thật).
  owner: {
    name: "Ngô Quang An",
    title: "Lập trình viên 10 năm — 5 năm tại công ty Singapore",
    bio: "10 năm kinh nghiệm (5 năm làm cho công ty Singapore), đã làm qua hầu hết các mã nguồn mở (open source) phổ biến cho web.",
  },
  // Message chính hiển thị nhiều nơi
  coreMessage: [
    "Không cần biết lập trình.",
    "Không cần thuê Developer.",
    "Chỉ cần biết sử dụng máy tính.",
  ],
} as const;

export const navLinks: NavLink[] = [
  { label: "Vấn đề", href: "#pain-points" },
  { label: "Giải pháp", href: "#solution" },
  { label: "Chương trình học", href: "#modules" },
  { label: "Dự án mẫu", href: "#projects" },
  { label: "Học phí", href: "#pricing" },
  { label: "Hỏi đáp", href: "#faq" },
];

/** Con số tạo niềm tin ở khu vực hero. */
export const heroStats = [
  { value: "8", label: "Module thực chiến" },
  { value: "30 phút", label: "Có landing page đầu tiên" },
  { value: "0 dòng", label: "Code phải tự viết tay" },
  { value: "100%", label: "Học qua dự án thật" },
] as const;

/** Hàng "pill" ngay dưới tiêu đề hero: bạn tự tạo được gì. */
export const heroCapabilities = [
  { icon: "rocket" as const, label: "Landing Page" },
  { icon: "cart" as const, label: "Web bán hàng" },
  { icon: "calendar" as const, label: "Web đặt lịch" },
  { icon: "dashboard" as const, label: "Dashboard & CRM" },
];

/** Điểm nhấn nhanh dưới hero (trust bar). */
export const heroHighlights = [
  { icon: "zap" as const, text: "Học bằng dự án thật" },
  { icon: "clock" as const, text: "Học theo tốc độ của bạn" },
  { icon: "shield" as const, text: "Lộ trình rõ ràng từng bước" },
  { icon: "lifebuoy" as const, text: "Hỗ trợ trong suốt khóa" },
];

/** Giá khởi điểm hiển thị ở hero (giá thật, không bịa neo giá giảm). */
export const heroOffer = {
  price: "1.990.000đ",
  note: "Giá khai giảng",
};
