/**
 * Cấu hình thanh toán chuyển khoản tự động qua SePay (https://sepay.vn).
 *
 * Luồng hoạt động:
 * 1. Khách đăng ký gói học → hệ thống tạo đơn hàng với mã chuyển khoản duy nhất.
 * 2. Trang thanh toán hiển thị mã QR VietQR (qr.sepay.vn) kèm nội dung chuyển khoản.
 * 3. SePay theo dõi tài khoản ngân hàng, gửi webhook về /api/sepay/webhook khi có tiền vào.
 * 4. Webhook đối soát mã + số tiền, đánh dấu đơn đã thanh toán — trang tự cập nhật.
 */
export const paymentConfig = {
  /**
   * Tài khoản nhận tiền — hiển thị cho khách và dùng tạo mã QR.
   * Có thể ghi đè bằng biến môi trường SEPAY_BANK_CODE, SEPAY_ACCOUNT_NUMBER,
   * SEPAY_ACCOUNT_NAME (xem lib/payment.ts). Tên chủ TK viết in hoa, không dấu.
   */
  bank: {
    bankCode: "ACB",
    accountNumber: "0000000000",
    accountName: "NGO QUANG AN",
  },

  /** Tiền tố mã chuyển khoản — in hoa, không dấu, đủ khác biệt để đối soát. */
  transferPrefix: "AWB",

  /** Đơn chưa thanh toán hết hạn sau số giờ này (khách vẫn có thể liên hệ để mở lại). */
  orderExpiryHours: 24,
} as const;

/** Nội dung hiển thị trên trang thanh toán. */
export const paymentPageContent = {
  qrTitle: "Quét mã QR để thanh toán",
  qrSubtitle: "Xác nhận tự động qua SePay — thường dưới 1 phút sau khi chuyển khoản",
  transferTitle: "Hoặc chuyển khoản thủ công",
  transferSubtitle: "Nhập đúng nội dung chuyển khoản để hệ thống tự xác nhận",
  guideTitle: "Hướng dẫn thanh toán",
  guideSteps: [
    "Mở app ngân hàng bất kỳ và quét mã QR — thông tin được điền sẵn.",
    "Kiểm tra số tiền và nội dung chuyển khoản (mã đơn hàng của bạn).",
    "Xác nhận chuyển khoản trong app ngân hàng.",
    "Trang này tự động cập nhật khi hệ thống nhận được tiền — không cần tải lại.",
  ],
  contentWarning:
    "Vui lòng giữ nguyên nội dung chuyển khoản để hệ thống tự động xác nhận. Nếu sửa nội dung, đơn sẽ cần đối soát thủ công.",
  supportNote:
    "Đã chuyển khoản nhưng chưa được xác nhận sau 5 phút? Nhắn Zalo kèm ảnh chụp giao dịch, chúng tôi xử lý ngay.",
  successTitle: "Thanh toán thành công!",
  successMessage:
    "Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ qua Zalo/email trong hôm nay để bàn giao tài khoản học và hướng dẫn bắt đầu.",
  expiredTitle: "Đơn hàng đã hết hạn thanh toán",
  expiredMessage:
    "Đừng lo — bạn chỉ cần đăng ký lại, hoặc nhắn Zalo để chúng tôi hỗ trợ mở lại đơn này.",
} as const;
