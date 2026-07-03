// Admin authentication helpers

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("admin_token");
}

export function setAdminToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("admin_token", token);
}

export function clearAdminToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("admin_token");
}

export function createAuthHeader(): Record<string, string> {
  const token = getAdminToken();
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

/**
 * Fetch với token admin tự động. Khi nhận 401 → xóa token và redirect về trang
 * đăng nhập (token hết hạn hoặc bị vô hiệu hóa do đổi secret server).
 */
export async function adminFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = getAdminToken();
  if (!token) {
    if (typeof window !== "undefined") window.location.href = "/admin/login";
    throw new Error("Phiên đăng nhập hết hạn");
  }
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.status === 401) {
    clearAdminToken();
    if (typeof window !== "undefined") window.location.href = "/admin/login";
    throw new Error("Phiên đăng nhập hết hạn. Đang chuyển về trang đăng nhập...");
  }
  return res;
}
