import { paymentConfig } from "@/config/payment";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
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
 * Lấy thông tin ngân hàng — ưu tiên admin_settings (DB), fallback về env vars / config.
 * Dùng ở server component / API route để admin có thể sửa từ UI mà không cần deploy lại.
 */
export async function getBankInfoDynamic(): Promise<BankInfo> {
  const supabase = getSupabaseServiceClient();
  if (supabase) {
    const { data } = await supabase
      .from("admin_settings")
      .select("bank_code, bank_account_number, bank_account_name")
      .eq("id", "1")
      .maybeSingle();

    if (data) {
      const fallback = getBankInfo();
      return {
        bankCode: data.bank_code || fallback.bankCode,
        accountNumber: data.bank_account_number || fallback.accountNumber,
        accountName: data.bank_account_name || fallback.accountName,
      };
    }
  }
  return getBankInfo();
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
