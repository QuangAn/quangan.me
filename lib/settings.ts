import { getSupabaseServiceClient } from "@/lib/supabase/server";
import type { AdminSettings } from "@/types/admin";

/** Chỉ dùng chung một bản ghi cài đặt duy nhất. */
const SETTINGS_ID = "1";

/**
 * Đọc cài đặt admin (thông tin ngân hàng, webhook, API key) từ Supabase.
 * Trả về null nếu chưa cấu hình Supabase hoặc chưa có bản ghi nào.
 * CHỈ gọi ở phía server.
 */
export async function getAdminSettings(): Promise<AdminSettings | null> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("admin_settings")
    .select("*")
    .eq("id", SETTINGS_ID)
    .maybeSingle();

  if (error) {
    console.warn("[settings] Không đọc được admin_settings:", error.message);
    return null;
  }

  return (data as AdminSettings | null) ?? null;
}

/** Các trường admin được phép chỉnh sửa và lưu. */
export type AdminSettingsInput = Partial<
  Pick<
    AdminSettings,
    | "sepay_api_key"
    | "sepay_webhook_url"
    | "bank_account_number"
    | "bank_account_name"
    | "bank_code"
  >
>;

/**
 * Ghi (upsert) cài đặt admin vào Supabase — luôn dùng chung bản ghi id='1'.
 * Chỉ những trường có mặt trong `patch` mới được cập nhật.
 * CHỈ gọi ở phía server, sau khi đã xác thực admin.
 */
export async function upsertAdminSettings(
  patch: AdminSettingsInput,
): Promise<AdminSettings> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) {
    throw new Error("Supabase chưa được cấu hình");
  }

  const { data, error } = await supabase
    .from("admin_settings")
    .upsert(
      {
        id: SETTINGS_ID,
        ...patch,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    )
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as AdminSettings;
}
