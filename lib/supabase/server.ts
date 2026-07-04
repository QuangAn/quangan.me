import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let serviceClient: SupabaseClient | null = null;

/**
 * Client Supabase dùng service role key — bỏ qua RLS.
 * CHỈ được import trong code chạy trên server (API route, server component).
 * Tuyệt đối không import vào client component.
 */
export function getSupabaseServiceClient(): SupabaseClient | null {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  if (!serviceClient) {
    try {
      serviceClient = createClient(supabaseUrl, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
    } catch (err) {
      // URL/khóa sai định dạng khiến createClient ném đồng bộ. Trả null (coi như
      // chưa cấu hình) thay vì để lỗi lan ra và làm sập trang gọi tới.
      console.error(
        "[supabase] Không tạo được service client (kiểm tra NEXT_PUBLIC_SUPABASE_URL):",
        err instanceof Error ? err.message : err,
      );
      return null;
    }
  }

  return serviceClient;
}
