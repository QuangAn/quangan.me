import { paymentConfig } from "@/config/payment";
import type { BankInfo } from "@/types";

/**
 * Thông tin tài khoản nhận tiền — ưu tiên biến môi trường (dễ đổi khi deploy),
 * fallback về config/payment.ts. Chỉ gọi ở phía server.
 */
export function getBankInfo(): BankInfo {
  return {
    bankCode: process.env.SEPAY_BANK_CODE || paymentConfig.bank.bankCode,
    accountNumber:
      process.env.SEPAY_ACCOUNT_NUMBER || paymentConfig.bank.accountNumber,
    accountName:
      process.env.SEPAY_ACCOUNT_NAME || paymentConfig.bank.accountName,
  };
}

/**
 * URL ảnh mã QR VietQR do SePay sinh — app ngân hàng quét là điền sẵn
 * số tài khoản, số tiền và nội dung chuyển khoản (mã đơn hàng).
 */
export function buildSepayQrUrl(
  bank: BankInfo,
  amount: number,
  transferCode: string,
): string {
  const params = new URLSearchParams({
    acc: bank.accountNumber,
    bank: bank.bankCode,
    amount: String(amount),
    des: transferCode,
    template: "compact",
  });
  return `https://qr.sepay.vn/img?${params.toString()}`;
}
