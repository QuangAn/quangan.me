import type { CourseDocModule } from "@/types/course";
import { module01 } from "./module-01";
import { module02 } from "./module-02";
import { module03 } from "./module-03";
import { module04 } from "./module-04";
import { module05 } from "./module-05";
import { module06 } from "./module-06";
import { module07 } from "./module-07";
import { module08 } from "./module-08";

/** Toàn bộ tài liệu khóa học — chỉ học viên đã kích hoạt mới xem được. */
export const courseModules: CourseDocModule[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
];

/** Nội dung chung của khu vực học. */
export const courseContent = {
  badge: "Tài liệu khóa học",
  heroTitle: "Mở bài học, xem video và làm theo từng bước",
  heroDescription:
    "Mỗi lần tập trung vào một module. Mỗi bài có video thao tác, các bước làm, lệnh kiểm tra và prompt mẫu để copy — bạn chỉ cần làm theo thứ tự.",
  sidebarTitle: "8 Module",
  videoPlaceholderPrefix: "🎥 Video:",
  videoPlaceholderNote: "Video đang được cập nhật",
} as const;

/** Nội dung các màn hình kiểm soát truy cập khu vực học. */
export const courseAccessContent = {
  enterTitle: "Khu vực học viên",
  enterDescription:
    "Nhập mã kích hoạt để vào học. Mã kích hoạt chính là mã đơn hàng (dạng AWB…) trong nội dung chuyển khoản khi bạn đăng ký.",
  enterPlaceholder: "Ví dụ: AWB7K2M4Q",
  enterButton: "Vào học ngay",
  enterHelp:
    "Không nhớ mã? Nhắn Zalo kèm số điện thoại đã đăng ký, chúng tôi gửi lại ngay.",
  notFoundTitle: "Không tìm thấy mã kích hoạt",
  notFoundMessage:
    "Mã bạn nhập không đúng hoặc chưa tồn tại. Kiểm tra lại mã trong nội dung chuyển khoản, hoặc nhắn Zalo để được hỗ trợ.",
  pendingTitle: "Đơn hàng chưa được kích hoạt",
  pendingMessage:
    "Đơn của bạn đã được tạo nhưng chưa nhận được thanh toán. Hoàn tất chuyển khoản để mở khóa toàn bộ tài liệu — hệ thống kích hoạt tự động trong khoảng 1 phút.",
  pendingCta: "Tiếp tục thanh toán",
  expiredTitle: "Đơn hàng đã hết hạn",
  expiredMessage:
    "Đơn của bạn đã quá hạn thanh toán. Đăng ký lại hoặc nhắn Zalo để chúng tôi mở lại đơn giúp bạn.",
  expiredCta: "Đăng ký lại",
  supportLabel: "Hỗ trợ qua Zalo",
} as const;
