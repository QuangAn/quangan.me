import { siteConfig } from "@/config/site";

/** URL gốc của site để dựng link tuyệt đối trong email. */
export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, "");
}

/** Link trang đăng nhập khu vực học. */
export function getStudentLoginUrl(): string {
  return `${getSiteUrl()}/hoc/dang-nhap`;
}

const zaloHref = `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`;

interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

/** Bọc nội dung trong khung HTML email đơn giản, tương thích client email. */
function layout(bodyHtml: string): string {
  return `<!doctype html>
<html lang="vi">
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#6d28d9,#0891b2);padding:24px 32px;">
          <span style="color:#ffffff;font-size:20px;font-weight:bold;">${siteConfig.name}</span>
        </td></tr>
        <tr><td style="padding:32px;">
          ${bodyHtml}
        </td></tr>
        <tr><td style="padding:20px 32px;background:#f1f5f9;color:#64748b;font-size:12px;">
          Cần hỗ trợ? Nhắn Zalo <a href="${zaloHref}" style="color:#0891b2;">${siteConfig.contact.zalo}</a>.
          Email này được gửi tự động, vui lòng không trả lời trực tiếp.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const btn = (href: string, label: string) =>
  `<a href="${href}" style="display:inline-block;background:linear-gradient(135deg,#6d28d9,#0891b2);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:9999px;font-weight:bold;">${label}</a>`;

interface WelcomeParams {
  fullName: string;
  email: string;
  password: string;
  planName: string;
}

/** Email cấp tài khoản kèm mật khẩu tạm (khi thanh toán thành công / đặt lại). */
export function buildWelcomeEmail(params: WelcomeParams): EmailContent {
  const loginUrl = getStudentLoginUrl();
  const subject = `Tài khoản học "${params.planName}" của bạn đã sẵn sàng`;

  const html = layout(`
    <h1 style="margin:0 0 8px;font-size:22px;">Chào ${escapeHtml(params.fullName)},</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
      Cảm ơn bạn đã đăng ký <strong>${escapeHtml(params.planName)}</strong>.
      Tài khoản học của bạn đã được kích hoạt. Đăng nhập để bắt đầu học ngay:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
      <tr><td style="padding:16px 20px;font-size:14px;color:#334155;">
        <div style="margin-bottom:8px;">Email đăng nhập: <strong>${escapeHtml(params.email)}</strong></div>
        <div>Mật khẩu tạm: <strong style="font-family:monospace;font-size:16px;">${escapeHtml(params.password)}</strong></div>
      </td></tr>
    </table>
    <p style="margin:0 0 24px;">${btn(loginUrl, "Vào học ngay")}</p>
    <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
      Vì lý do bảo mật, hãy đổi mật khẩu tạm sang mật khẩu của riêng bạn sau khi đăng nhập lần đầu.
      Nếu nút trên không bấm được, mở link: <a href="${loginUrl}" style="color:#0891b2;">${loginUrl}</a>
    </p>
  `);

  const text = [
    `Chào ${params.fullName},`,
    "",
    `Cảm ơn bạn đã đăng ký ${params.planName}. Tài khoản học của bạn đã được kích hoạt.`,
    "",
    `Trang đăng nhập: ${loginUrl}`,
    `Email đăng nhập: ${params.email}`,
    `Mật khẩu tạm: ${params.password}`,
    "",
    "Hãy đổi mật khẩu sau khi đăng nhập lần đầu.",
    `Hỗ trợ Zalo: ${siteConfig.contact.zalo}`,
  ].join("\n");

  return { subject, html, text };
}

interface UpgradeParams {
  fullName: string;
  email: string;
  planName: string;
}

/**
 * Email khi học viên đã có tài khoản mua thêm gói (nâng cấp) — KHÔNG kèm mật
 * khẩu để tránh ghi đè mật khẩu học viên đang dùng.
 */
export function buildUpgradeEmail(params: UpgradeParams): EmailContent {
  const loginUrl = getStudentLoginUrl();
  const subject = `Bạn đã được mở quyền học "${params.planName}"`;

  const html = layout(`
    <h1 style="margin:0 0 8px;font-size:22px;">Chào ${escapeHtml(params.fullName)},</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#334155;">
      Chúng tôi đã mở thêm quyền học <strong>${escapeHtml(params.planName)}</strong> cho tài khoản
      <strong>${escapeHtml(params.email)}</strong>. Đăng nhập bằng mật khẩu bạn đang dùng để xem nội dung mới:
    </p>
    <p style="margin:0 0 24px;">${btn(loginUrl, "Vào học ngay")}</p>
    <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
      Quên mật khẩu? Nhắn Zalo ${siteConfig.contact.zalo} để được cấp lại.
    </p>
  `);

  const text = [
    `Chào ${params.fullName},`,
    "",
    `Chúng tôi đã mở thêm quyền học ${params.planName} cho tài khoản ${params.email}.`,
    `Đăng nhập: ${loginUrl}`,
    "",
    `Quên mật khẩu? Nhắn Zalo ${siteConfig.contact.zalo}.`,
  ].join("\n");

  return { subject, html, text };
}

/** Escape ký tự HTML để tránh vỡ layout / injection trong email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
