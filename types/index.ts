import type { LucideIcon } from "lucide-react";

/** Tên icon hợp lệ, ánh xạ tới lucide-react qua lib/icons.ts */
export type IconName =
  | "rocket"
  | "building"
  | "cart"
  | "calendar"
  | "dashboard"
  | "users"
  | "globe"
  | "wallet"
  | "sparkles"
  | "zap"
  | "shield"
  | "clock"
  | "message"
  | "wand"
  | "check"
  | "upload"
  | "store"
  | "scissors"
  | "briefcase"
  | "megaphone"
  | "graduation"
  | "trending"
  | "gift"
  | "file"
  | "palette"
  | "lifebuoy"
  | "code"
  | "lock"
  | "help"
  | "coins"
  | "target"
  | "layers"
  | "compass";

export type { LucideIcon };

export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: IconName;
  title: string;
  description: string;
}

export interface SolutionStep {
  icon: IconName;
  step: string;
  title: string;
  description: string;
}

export interface Outcome {
  icon: IconName;
  title: string;
  description: string;
}

export interface CourseModule {
  order: number;
  icon: IconName;
  title: string;
  result: string;
  lessons: string[];
}

export interface DemoProject {
  icon: IconName;
  title: string;
  description: string;
  tags: string[];
}

export interface Audience {
  icon: IconName;
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  points: string[];
}

export interface Bonus {
  icon: IconName;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatarInitials: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingFeatureGroup {
  title: string;
  icon?: IconName;
  items: string[];
  /** Hiển thị các item dạng lưới 2 cột (cho danh sách ngắn). */
  grid?: boolean;
}

/** Mã định danh gói học — dùng cho checkout và đơn hàng. */
export type PlanId = "tu-hoc" | "kem-cap-1-1";

export interface PricingPlan {
  id: PlanId;
  name: string;
  badge?: string;
  price: string;
  /** Giá trị số (VND) — dùng để tạo đơn hàng và mã QR thanh toán. */
  priceValue: number;
  originalPrice?: string;
  /** Nhãn phần trăm giảm giá, vd "-33%". */
  discount?: string;
  /** Số suất còn lại (tạo cảm giác khan hiếm). */
  seatsLeft?: number;
  description: string;
  features: string[];
  /** Nhóm tính năng có tiêu đề (vd "Chỉ có ở gói này", "Cam kết đầu ra"). */
  featureGroups?: PricingFeatureGroup[];
  /** Dòng nhấn mạnh giá trị/tiết kiệm hiển thị cuối card. */
  valueNote?: string;
  cta: string;
  highlighted?: boolean;
}

/** Trạng thái đơn hàng thanh toán. */
export type OrderStatus = "pending" | "paid" | "expired";

/** Giá trị form đăng ký mua khóa học (checkout modal). */
export interface CheckoutFormValues {
  plan_id: PlanId;
  full_name: string;
  phone: string;
  email: string;
}

/** Đơn hàng — ánh xạ bảng `orders` trên Supabase. */
export interface Order {
  id: string;
  order_number: number;
  plan_id: PlanId;
  plan_name: string;
  amount: number;
  transfer_code: string;
  status: OrderStatus;
  full_name: string;
  phone: string;
  email: string | null;
  paid_at: string | null;
  expires_at: string;
  created_at: string;
}

/** Thông tin đơn hàng an toàn để hiển thị công khai trên trang thanh toán. */
export interface PublicOrder {
  order_number: number;
  plan_id: PlanId;
  plan_name: string;
  amount: number;
  transfer_code: string;
  status: OrderStatus;
  full_name: string;
  paid_at: string | null;
  expires_at: string;
}

/** Thông tin tài khoản nhận chuyển khoản (hiển thị cho khách). */
export interface BankInfo {
  bankCode: string;
  accountNumber: string;
  accountName: string;
}

/** Trạng thái gửi email cấp tài khoản học viên. */
export type WelcomeEmailStatus = "pending" | "sent" | "failed" | "skipped";

/** Trạng thái tài khoản học viên. */
export type StudentAccountStatus = "active" | "disabled";

/** Tài khoản học viên — ánh xạ bảng `student_accounts` trên Supabase. */
export interface StudentAccount {
  id: string;
  order_id: string | null;
  email: string;
  full_name: string;
  phone: string | null;
  plan_id: PlanId;
  plan_name: string | null;
  must_change_password: boolean;
  status: StudentAccountStatus;
  welcome_email_status: WelcomeEmailStatus;
  welcome_email_error: string | null;
  welcome_email_sent_at: string | null;
  last_login_at: string | null;
  created_at: string;
  /** Số đơn hàng đã cấp tài khoản (null = admin tạo tay). Chỉ có ở list admin. */
  order_number?: number | null;
}

/** Thông tin học viên rút gọn lưu trong session (an toàn để dùng ở portal). */
export interface StudentSessionUser {
  id: string;
  email: string;
  full_name: string;
  plan_id: PlanId;
  plan_name: string | null;
  must_change_password: boolean;
}

/** Loại tài nguyên của một bài học trong portal. */
export type LessonType = "video" | "doc" | "download" | "link";

/** Một bài học/tài liệu trong khu vực học. */
export interface CourseLesson {
  title: string;
  type?: LessonType;
  duration?: string;
  /** Link tài liệu (Google Drive, YouTube, PDF...). Bỏ trống = "sắp cập nhật". */
  resourceUrl?: string;
}

/** Một chương/module trong khu vực học, có thể giới hạn theo gói. */
export interface CourseSection {
  order: number;
  icon: IconName;
  title: string;
  summary: string;
  /** Gói tối thiểu để xem chương này. Bỏ trống = mọi gói đều xem được. */
  minPlan?: PlanId;
  lessons: CourseLesson[];
}
