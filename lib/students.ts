import { getSupabaseServiceClient } from "@/lib/supabase/server";
import {
  generatePassword,
  hashPassword,
  verifyPassword,
} from "@/lib/auth/password";
import { sendEmail, type SendEmailResult } from "@/lib/email";
import { buildUpgradeEmail, buildWelcomeEmail } from "@/lib/email/templates";
import { getPlanRank } from "@/lib/course";
import type {
  Order,
  StudentAccount,
  StudentAccountStatus,
  StudentSessionUser,
  WelcomeEmailStatus,
} from "@/types";
import type { SupabaseClient } from "@supabase/supabase-js";

// Mã Postgres khi vi phạm unique constraint (trùng order_id/email).
const PG_UNIQUE_VIOLATION = "23505";

/** Cột trả về cho admin — KHÔNG bao giờ gồm password_hash. */
const PUBLIC_COLUMNS =
  "id, order_id, email, full_name, phone, plan_id, plan_name, must_change_password, status, welcome_email_status, welcome_email_error, welcome_email_sent_at, last_login_at, created_at";

export interface ProvisionResult {
  ok: boolean;
  accountId?: string;
  outcome?: "created" | "upgraded" | "already_exists";
  emailStatus?: WelcomeEmailStatus;
  error?: string;
}

function mapEmailStatus(result: SendEmailResult): WelcomeEmailStatus {
  if (result.status === "sent") return "sent";
  if (result.status === "skipped") return "skipped";
  return "failed";
}

/** Ghi lại trạng thái gửi email cấp tài khoản để đối soát trong admin. */
async function recordEmailStatus(
  supabase: SupabaseClient,
  accountId: string,
  result: SendEmailResult,
): Promise<WelcomeEmailStatus> {
  const status = mapEmailStatus(result);
  await supabase
    .from("student_accounts")
    .update({
      welcome_email_status: status,
      welcome_email_error: result.status === "failed" ? result.error : null,
      welcome_email_sent_at:
        result.status === "sent" ? new Date().toISOString() : null,
    })
    .eq("id", accountId);
  return status;
}

/**
 * Hash giả để cân bằng thời gian phản hồi khi email không tồn tại / bị khóa
 * (chống dò email qua timing khi đăng nhập). Tính một lần rồi cache.
 */
let dummyHashPromise: Promise<string> | null = null;
function getDummyHash(): Promise<string> {
  if (!dummyHashPromise) {
    dummyHashPromise = hashPassword("timing-equalizer-not-a-real-password");
  }
  return dummyHashPromise;
}

interface ExistingAccount {
  id: string;
  order_id: string | null;
  plan_id: string;
  plan_name: string | null;
}

/**
 * Gắn đơn mới vào tài khoản đã tồn tại (theo email) và nâng cấp gói nếu gói mới
 * cao hơn — KHÔNG hạ cấp, KHÔNG đổi mật khẩu. Gửi email thông báo quyền học.
 */
async function upgradeExistingAccount(
  supabase: SupabaseClient,
  existing: ExistingAccount,
  order: Pick<Order, "id" | "full_name" | "plan_id" | "plan_name">,
  email: string,
): Promise<ProvisionResult> {
  const useNewPlan = getPlanRank(order.plan_id) > getPlanRank(existing.plan_id);
  const effectivePlanName = useNewPlan
    ? order.plan_name
    : existing.plan_name ?? order.plan_name;

  const update: Record<string, unknown> = {
    plan_id: useNewPlan ? order.plan_id : existing.plan_id,
    plan_name: effectivePlanName,
  };
  if (!existing.order_id) update.order_id = order.id;
  await supabase.from("student_accounts").update(update).eq("id", existing.id);

  const emailResult = await sendEmail({
    to: email,
    ...buildUpgradeEmail({
      fullName: order.full_name,
      email,
      planName: effectivePlanName,
    }),
  });
  const emailStatus = await recordEmailStatus(supabase, existing.id, emailResult);
  return { ok: true, accountId: existing.id, outcome: "upgraded", emailStatus };
}

/**
 * Cấp tài khoản học viên cho một đơn đã thanh toán. Idempotent theo `order_id`
 * (webhook có thể gọi lại). Nếu email đã có tài khoản → nâng cấp gói và gửi
 * email thông báo (không đổi mật khẩu cũ). Không ném lỗi — luôn trả kết quả.
 */
export async function provisionStudentForOrder(
  order: Pick<
    Order,
    "id" | "email" | "full_name" | "phone" | "plan_id" | "plan_name"
  >,
): Promise<ProvisionResult> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const email = (order.email ?? "").trim().toLowerCase();
  if (!email) return { ok: false, error: "order-missing-email" };

  // 1) Đã có tài khoản cho chính đơn này → không tạo lại (webhook retry).
  const { data: byOrder } = await supabase
    .from("student_accounts")
    .select("id")
    .eq("order_id", order.id)
    .maybeSingle();
  if (byOrder) {
    return {
      ok: true,
      accountId: (byOrder as { id: string }).id,
      outcome: "already_exists",
    };
  }

  // 2) Email đã có tài khoản (mua trước đó) → nâng cấp gói, giữ nguyên mật khẩu.
  //    Chỉ nâng lên gói cao hơn, KHÔNG hạ cấp (vd đã mua 1-1 rồi mua lại Tự Học).
  const { data: byEmail } = await supabase
    .from("student_accounts")
    .select("id, order_id, plan_id, plan_name")
    .eq("email", email)
    .maybeSingle();
  if (byEmail) {
    return upgradeExistingAccount(
      supabase,
      byEmail as ExistingAccount,
      order,
      email,
    );
  }

  // 3) Tạo tài khoản mới với mật khẩu tạm.
  const tempPassword = generatePassword();
  const passwordHash = await hashPassword(tempPassword);

  const { data: inserted, error: insertError } = await supabase
    .from("student_accounts")
    .insert({
      order_id: order.id,
      email,
      full_name: order.full_name,
      phone: order.phone ?? null,
      plan_id: order.plan_id,
      plan_name: order.plan_name,
      password_hash: passwordHash,
      must_change_password: true,
      status: "active",
      welcome_email_status: "pending",
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    if (insertError?.code === PG_UNIQUE_VIOLATION) {
      // Đua giữa hai webhook. Phân biệt hai ràng buộc unique:
      // - trùng order_id → chính đơn này đã được cấp (retry) → đã tồn tại.
      // - trùng lower(email) → đơn KHÁC cùng email chạy song song → gắn đơn + nâng cấp,
      //   thay vì báo thành công mù (đơn thứ 2 sẽ không bị bỏ sót email).
      const { data: retryByOrder } = await supabase
        .from("student_accounts")
        .select("id")
        .eq("order_id", order.id)
        .maybeSingle();
      if (retryByOrder) {
        return {
          ok: true,
          accountId: (retryByOrder as { id: string }).id,
          outcome: "already_exists",
        };
      }
      const { data: retryByEmail } = await supabase
        .from("student_accounts")
        .select("id, order_id, plan_id, plan_name")
        .eq("email", email)
        .maybeSingle();
      if (retryByEmail) {
        return upgradeExistingAccount(
          supabase,
          retryByEmail as ExistingAccount,
          order,
          email,
        );
      }
      return { ok: true, outcome: "already_exists" };
    }
    console.error(
      "[students] Không tạo được tài khoản:",
      insertError?.message,
    );
    return { ok: false, error: insertError?.message ?? "insert-failed" };
  }

  const accountId = (inserted as { id: string }).id;
  const emailResult = await sendEmail({
    to: email,
    ...buildWelcomeEmail({
      fullName: order.full_name,
      email,
      password: tempPassword,
      planName: order.plan_name,
    }),
  });
  const emailStatus = await recordEmailStatus(supabase, accountId, emailResult);

  return { ok: true, accountId, outcome: "created", emailStatus };
}

export type StudentLoginUser = StudentSessionUser;

/** Xác thực đăng nhập học viên. Trả null nếu sai / tài khoản bị khóa. */
export async function verifyStudentLogin(
  emailRaw: string,
  password: string,
): Promise<StudentLoginUser | null> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return null;

  const email = emailRaw.trim().toLowerCase();
  if (!email || !password) return null;

  const { data } = await supabase
    .from("student_accounts")
    .select(
      "id, email, full_name, plan_id, plan_name, password_hash, status, must_change_password",
    )
    .eq("email", email)
    .maybeSingle();

  const row = data as
    | (StudentSessionUser & { password_hash: string; status: string })
    | null;
  if (!row || row.status !== "active") {
    // Vẫn băm để thời gian phản hồi đồng đều → không lộ email nào là học viên.
    await verifyPassword(password, await getDummyHash());
    return null;
  }

  const ok = await verifyPassword(password, row.password_hash);
  if (!ok) return null;

  await supabase
    .from("student_accounts")
    .update({ last_login_at: new Date().toISOString() })
    .eq("id", row.id);

  return {
    id: row.id,
    email: row.email,
    full_name: row.full_name,
    plan_id: row.plan_id,
    plan_name: row.plan_name,
    must_change_password: row.must_change_password,
  };
}

/**
 * Lấy học viên cho phiên đăng nhập ở portal. Trả null nếu tài khoản bị khóa,
 * không tồn tại, hoặc session được cấp TRƯỚC lần đổi/đặt lại mật khẩu gần nhất
 * (đổi mật khẩu → vô hiệu hóa mọi session cũ). `tokenIatSeconds` là thời điểm
 * cấp token (giây, epoch).
 */
export async function getStudentForSession(
  id: string,
  tokenIatSeconds: number,
): Promise<StudentSessionUser | null> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return null;

  const { data } = await supabase
    .from("student_accounts")
    .select(
      "id, email, full_name, plan_id, plan_name, status, must_change_password, password_changed_at",
    )
    .eq("id", id)
    .maybeSingle();

  const row = data as
    | (StudentSessionUser & {
        status: string;
        password_changed_at: string | null;
      })
    | null;
  if (!row || row.status !== "active") return null;

  if (row.password_changed_at) {
    const changedAtSec = Math.floor(
      new Date(row.password_changed_at).getTime() / 1000,
    );
    if (tokenIatSeconds < changedAtSec) return null;
  }

  return {
    id: row.id,
    email: row.email,
    full_name: row.full_name,
    plan_id: row.plan_id,
    plan_name: row.plan_name,
    must_change_password: row.must_change_password,
  };
}

/** Học viên tự đổi mật khẩu (cần mật khẩu hiện tại). */
export async function changeStudentPassword(
  id: string,
  currentPassword: string,
  newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const { data } = await supabase
    .from("student_accounts")
    .select("password_hash, status")
    .eq("id", id)
    .maybeSingle();

  const row = data as { password_hash: string; status: string } | null;
  if (!row || row.status !== "active") return { ok: false, error: "not-found" };

  const ok = await verifyPassword(currentPassword, row.password_hash);
  if (!ok) return { ok: false, error: "wrong-current-password" };

  const hash = await hashPassword(newPassword);
  await supabase
    .from("student_accounts")
    .update({
      password_hash: hash,
      must_change_password: false,
      password_changed_at: new Date().toISOString(),
    })
    .eq("id", id);

  return { ok: true };
}

export interface ListStudentsParams {
  limit: number;
  offset: number;
  status?: string;
  search?: string;
}

/** Danh sách tài khoản học viên cho admin (không kèm password_hash). */
export async function listStudentAccounts(
  params: ListStudentsParams,
): Promise<{ data: StudentAccount[]; total: number }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { data: [], total: 0 };

  let query = supabase
    .from("student_accounts")
    .select(PUBLIC_COLUMNS, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(params.offset, params.offset + params.limit - 1);

  if (params.status && params.status !== "all") {
    query = query.eq("status", params.status);
  }
  if (params.search) {
    const term = params.search.replace(/[%,]/g, "");
    query = query.or(
      `full_name.ilike.%${term}%,email.ilike.%${term}%,phone.ilike.%${term}%`,
    );
  }

  const { data, count, error } = await query;
  if (error) {
    console.error("[students] Không đọc được danh sách:", error.message);
    return { data: [], total: 0 };
  }
  return {
    data: (data as unknown as StudentAccount[]) ?? [],
    total: count ?? 0,
  };
}

/** Đặt lại mật khẩu (tạo mật khẩu tạm mới) và gửi lại email cho học viên. */
export async function resetStudentPasswordAndEmail(
  id: string,
): Promise<{ ok: boolean; emailStatus?: WelcomeEmailStatus; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const { data } = await supabase
    .from("student_accounts")
    .select("email, full_name, plan_name")
    .eq("id", id)
    .maybeSingle();

  const row = data as
    | { email: string; full_name: string; plan_name: string | null }
    | null;
  if (!row) return { ok: false, error: "not-found" };

  const tempPassword = generatePassword();
  const hash = await hashPassword(tempPassword);
  await supabase
    .from("student_accounts")
    .update({
      password_hash: hash,
      must_change_password: true,
      password_changed_at: new Date().toISOString(),
    })
    .eq("id", id);

  const emailResult = await sendEmail({
    to: row.email,
    ...buildWelcomeEmail({
      fullName: row.full_name,
      email: row.email,
      password: tempPassword,
      planName: row.plan_name ?? "Khóa học",
    }),
  });
  const emailStatus = await recordEmailStatus(supabase, id, emailResult);

  return { ok: true, emailStatus };
}

/** Bật/khóa tài khoản học viên. Tài khoản khóa không đăng nhập được. */
export async function setStudentStatus(
  id: string,
  status: StudentAccountStatus,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return { ok: false, error: "supabase-not-configured" };

  const { error } = await supabase
    .from("student_accounts")
    .update({ status })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

/** Đếm tổng số tài khoản học viên (cho dashboard). */
export async function countStudentAccounts(): Promise<number> {
  const supabase = getSupabaseServiceClient();
  if (!supabase) return 0;
  const { count } = await supabase
    .from("student_accounts")
    .select("id", { count: "exact", head: true });
  return count ?? 0;
}
