import type { CheckoutFormValues } from "@/types";

export type CheckoutFieldErrors = Partial<
  Record<"full_name" | "phone" | "email", string>
>;

export type SubmitCheckoutResult =
  | { ok: true; orderCode: string }
  | { ok: false; error: string };

const PHONE_REGEX = /^[0-9+\-\s().]{8,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate form đăng ký mua khóa học. Email bắt buộc (dùng để bàn giao
 * tài khoản học sau khi thanh toán).
 */
export function validateCheckout(
  values: CheckoutFormValues,
): CheckoutFieldErrors {
  const errors: CheckoutFieldErrors = {};

  if (!values.full_name.trim()) {
    errors.full_name = "Vui lòng nhập họ và tên.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại Zalo.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Số điện thoại chưa hợp lệ.";
  }

  if (!values.email.trim()) {
    errors.email = "Vui lòng nhập email để nhận thông tin khóa học.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Email chưa hợp lệ.";
  }

  return errors;
}

/** Gửi đăng ký lên server, nhận về mã đơn hàng để chuyển tới trang thanh toán. */
export async function submitCheckout(
  values: CheckoutFormValues,
): Promise<SubmitCheckoutResult> {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await res.json()) as {
      ok?: boolean;
      orderCode?: string;
      error?: string;
    };

    if (res.ok && data.ok && data.orderCode) {
      return { ok: true, orderCode: data.orderCode };
    }
    return {
      ok: false,
      error: data.error ?? "Không thể tạo đơn hàng. Vui lòng thử lại.",
    };
  } catch {
    return {
      ok: false,
      error: "Không thể kết nối máy chủ. Vui lòng kiểm tra mạng và thử lại.",
    };
  }
}
