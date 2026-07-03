/**
 * Lớp gửi email không phụ thuộc nhà cung cấp. Hiện dùng Resend qua REST
 * (không thêm npm package). Khi chưa cấu hình RESEND_API_KEY, hàm trả về
 * trạng thái "skipped" và ghi log — luồng thanh toán vẫn chạy bình thường,
 * chủ khóa học có thể gửi lại email từ trang admin sau khi nối provider.
 */

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export type SendEmailResult =
  | { status: "sent"; id: string | null }
  | { status: "skipped"; reason: string }
  | { status: "failed"; error: string };

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Địa chỉ người gửi. Cấu hình EMAIL_FROM, vd: `Tên <no-reply@domain.com>`. */
export function getEmailFrom(): string {
  return process.env.EMAIL_FROM || "AI Website Builder <onboarding@resend.dev>";
}

/** Đã cấu hình đủ để gửi email thật chưa. */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      `[email] RESEND_API_KEY chưa cấu hình — bỏ qua gửi tới ${input.to} ("${input.subject}").`,
    );
    return { status: "skipped", reason: "RESEND_API_KEY chưa cấu hình" };
  }

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: getEmailFrom(),
        to: [input.to],
        subject: input.subject,
        html: input.html,
        text: input.text,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`[email] Resend lỗi ${res.status}: ${body}`);
      return { status: "failed", error: `Resend HTTP ${res.status}` };
    }

    const data = (await res.json().catch(() => ({}))) as { id?: string };
    return { status: "sent", id: data.id ?? null };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown";
    console.error(`[email] Không gửi được email: ${msg}`);
    return { status: "failed", error: msg };
  }
}
