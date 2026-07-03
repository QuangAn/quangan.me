/**
 * Nội dung hiển thị ở khu vực học viên (portal /hoc, trang đăng nhập, email
 * cấp tài khoản). Sửa chữ ở đây thay vì trong component/email.
 */
export const studentPortalContent = {
  loginTitle: "Đăng nhập khu vực học",
  loginSubtitle: "Dùng email và mật khẩu đã được gửi sau khi bạn thanh toán.",
  portalTitle: "Khu vực học tập",
  portalSubtitle: "Chọn một chương để bắt đầu học. Tài liệu được cập nhật liên tục.",
  changePasswordTitle: "Đổi mật khẩu",
  changePasswordSubtitle:
    "Đặt mật khẩu mới để bảo mật tài khoản của bạn (tối thiểu 8 ký tự).",
  mustChangeBanner:
    "Bạn đang dùng mật khẩu tạm do hệ thống cấp. Hãy đổi sang mật khẩu của riêng bạn.",
  comingSoon: "Sắp cập nhật",
  supportNote:
    "Cần hỗ trợ? Nhắn Zalo cho chúng tôi để được trợ giúp nhanh nhất.",
} as const;

/** Độ dài tối thiểu của mật khẩu học viên tự đặt. */
export const MIN_PASSWORD_LENGTH = 8;

/** Nhãn hiển thị cho từng loại tài nguyên bài học. */
export const lessonTypeLabels = {
  video: "Video",
  doc: "Tài liệu",
  download: "Tải về",
  link: "Liên kết",
} as const;
