"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { adminFetch } from "@/lib/admin-auth";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  KeyRound,
  Lock,
  Unlock,
  Loader,
  MailCheck,
  MailWarning,
  MailX,
  Mail,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";
import {
  AccountFormModal,
  ConfirmDialog,
  type AccountFormValues,
} from "@/components/admin/account-form-modal";
import type { StudentAccount, WelcomeEmailStatus } from "@/types";

const pageSize = 20;

const emailStatusMeta: Record<
  WelcomeEmailStatus,
  { label: string; className: string; Icon: typeof Mail }
> = {
  sent: {
    label: "Đã gửi",
    className: "text-green-400",
    Icon: MailCheck,
  },
  failed: {
    label: "Gửi lỗi",
    className: "text-red-400",
    Icon: MailX,
  },
  skipped: {
    label: "Chưa gửi",
    className: "text-amber-400",
    Icon: MailWarning,
  },
  pending: {
    label: "Đang chờ",
    className: "text-slate-400",
    Icon: Mail,
  },
};

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<StudentAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [actingId, setActingId] = useState<string | null>(null);
  const [formMode, setFormMode] = useState<"create" | "edit" | null>(null);
  const [editing, setEditing] = useState<StudentAccount | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<StudentAccount | null>(null);
  const [lockTarget, setLockTarget] = useState<StudentAccount | null>(null);

  const fetchAccounts = useCallback(async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        limit: pageSize.toString(),
        offset: (page * pageSize).toString(),
        ...(search && { search }),
        ...(status && { status }),
      });

      const response = await adminFetch(`/api/admin/accounts?${params}`);
      if (!response.ok) throw new Error("Failed to fetch accounts");

      const data = await response.json();
      setAccounts(data.data ?? []);
      setTotal(data.total ?? 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không tải được dữ liệu");
    } finally {
      setIsLoading(false);
    }
  }, [page, search, status]);

  useEffect(() => {
    fetchAccounts();
  }, [fetchAccounts]);

  const runAction = async (
    id: string,
    body: Record<string, unknown>,
    successMsg: string,
  ) => {
    try {
      setActingId(id);
      setMessage("");
      setError("");
      const response = await adminFetch(`/api/admin/accounts/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Thao tác thất bại");

      let msg = successMsg;
      if (body.action === "reset_password" && data.emailStatus) {
        msg =
          data.emailStatus === "sent"
            ? "Đã đặt lại mật khẩu và gửi email cho học viên."
            : "Đã đặt lại mật khẩu, nhưng email chưa gửi được (kiểm tra cấu hình email).";
      }
      setMessage(msg);
      await fetchAccounts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Thao tác thất bại");
    } finally {
      setActingId(null);
    }
  };

  /** Gửi form thêm/sửa. Trả về thông báo lỗi (string) hoặc null nếu thành công. */
  const submitAccount = async (
    values: AccountFormValues,
  ): Promise<string | null> => {
    setMessage("");
    setError("");
    const isEdit = formMode === "edit" && editing;
    const url = isEdit
      ? `/api/admin/accounts/${editing.id}`
      : "/api/admin/accounts";
    const method = isEdit ? "PATCH" : "POST";
    const body = isEdit
      ? {
          full_name: values.full_name,
          email: values.email,
          phone: values.phone,
          plan_id: values.plan_id,
        }
      : {
          full_name: values.full_name,
          email: values.email,
          phone: values.phone,
          plan_id: values.plan_id,
          send_email: values.send_email,
        };

    try {
      const response = await adminFetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) return data.error || "Thao tác thất bại.";

      if (isEdit) {
        setMessage("Đã cập nhật tài khoản.");
      } else if (data.emailStatus === "sent") {
        setMessage("Đã tạo tài khoản và gửi email đăng nhập cho học viên.");
      } else if (data.emailStatus === "skipped") {
        setMessage(
          "Đã tạo tài khoản (chưa gửi email). Bấm “Đặt lại & gửi” để cấp mật khẩu cho học viên.",
        );
      } else {
        setMessage(
          "Đã tạo tài khoản, nhưng email chưa gửi được (kiểm tra cấu hình email).",
        );
      }
      await fetchAccounts();
      return null;
    } catch (err) {
      return err instanceof Error ? err.message : "Không kết nối được máy chủ.";
    }
  };

  const confirmLock = async () => {
    if (!lockTarget) return;
    const next = lockTarget.status === "active" ? "disabled" : "active";
    await runAction(
      lockTarget.id,
      { action: "set_status", status: next },
      next === "disabled" ? "Đã khóa tài khoản." : "Đã mở khóa tài khoản.",
    );
    setLockTarget(null);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setMessage("");
    setError("");
    try {
      const response = await adminFetch(`/api/admin/accounts/${deleteTarget.id}`, {
        method: "DELETE",
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Không xóa được.");
      setMessage("Đã xóa tài khoản học viên.");
      await fetchAccounts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không xóa được.");
    } finally {
      setDeleteTarget(null);
    }
  };

  const formatDate = (date: string | null) =>
    date ? new Date(date).toLocaleString("vi-VN") : "—";

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Tài khoản học viên
          </h1>
          <p className="text-slate-400">
            {total} tài khoản • tự cấp khi thanh toán thành công
          </p>
        </div>
        <Button
          onClick={() => {
            setEditing(null);
            setFormMode("create");
          }}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600"
        >
          <Plus className="w-4 h-4" />
          Thêm tài khoản
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400">
          {error}
        </div>
      )}
      {message && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded text-green-400">
          {message}
        </div>
      )}

      {/* Filters */}
      <Card className="border-slate-700 bg-slate-800/50 p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
          <Input
            placeholder="Tìm theo email, tên, số điện thoại..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="pl-10 bg-slate-900/50 border-slate-700"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["all", "active", "disabled"].map((s) => (
            <Button
              key={s}
              variant={status === s ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setStatus(s);
                setPage(0);
              }}
              className={
                status === s ? "bg-gradient-to-r from-indigo-600 to-cyan-600" : ""
              }
            >
              {s === "all" ? "Tất cả" : s === "active" ? "Đang hoạt động" : "Đã khóa"}
            </Button>
          ))}
        </div>
      </Card>

      {/* Table */}
      <Card className="border-slate-700 bg-slate-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Học viên
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Gói
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Nguồn
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Email cấp TK
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Đăng nhập gần nhất
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Trạng thái
                </th>
                <th className="text-right py-4 px-6 text-sm font-medium text-slate-400">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500">
                    Đang tải...
                  </td>
                </tr>
              ) : accounts.length > 0 ? (
                accounts.map((acc) => {
                  const meta = emailStatusMeta[acc.welcome_email_status];
                  const EmailIcon = meta.Icon;
                  const busy = actingId === acc.id;
                  return (
                    <tr
                      key={acc.id}
                      className="border-b border-slate-700 hover:bg-slate-900/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-sm">
                        <div className="text-white">{acc.full_name}</div>
                        <div className="text-xs text-slate-500">{acc.email}</div>
                        {acc.must_change_password && (
                          <span className="mt-1 inline-block text-[11px] text-amber-400">
                            Chưa đổi mật khẩu tạm
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-300">
                        {acc.plan_name ?? acc.plan_id}
                      </td>
                      <td className="py-4 px-6 text-sm">
                        {acc.order_number ? (
                          <span className="text-slate-300">
                            Đơn #{acc.order_number}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-500">Tạo tay</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-sm">
                        <span
                          className={`inline-flex items-center gap-1.5 ${meta.className}`}
                        >
                          <EmailIcon className="w-4 h-4" />
                          {meta.label}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-400">
                        {formatDate(acc.last_login_at)}
                      </td>
                      <td className="py-4 px-6 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            acc.status === "active"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }`}
                        >
                          {acc.status === "active" ? "Hoạt động" : "Đã khóa"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={busy}
                            onClick={() =>
                              runAction(
                                acc.id,
                                { action: "reset_password" },
                                "Đã đặt lại mật khẩu.",
                              )
                            }
                            title="Đặt lại mật khẩu và gửi lại email"
                          >
                            {busy ? (
                              <Loader className="w-4 h-4 animate-spin" />
                            ) : (
                              <KeyRound className="w-4 h-4" />
                            )}
                            <span className="hidden sm:inline">Đặt lại & gửi</span>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={busy}
                            onClick={() => setLockTarget(acc)}
                            title={
                              acc.status === "active"
                                ? "Khóa tài khoản"
                                : "Mở khóa tài khoản"
                            }
                          >
                            {acc.status === "active" ? (
                              <Lock className="w-4 h-4" />
                            ) : (
                              <Unlock className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={busy}
                            onClick={() => {
                              setEditing(acc);
                              setFormMode("edit");
                            }}
                            title="Sửa thông tin"
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            disabled={busy}
                            onClick={() => setDeleteTarget(acc)}
                            title="Xóa tài khoản"
                            className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-500">
                    Chưa có tài khoản học viên nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between p-6 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Trang {page + 1} / {totalPages} • Tổng cộng {total} mục
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => setPage(page + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>

      <Card className="border-slate-700 bg-slate-800/50 p-6 text-sm text-slate-300">
        <p className="mb-2">
          <strong>Ghi chú:</strong> Tài khoản được tạo tự động khi đơn hàng
          chuyển sang <span className="text-green-400">đã thanh toán</span>, kèm
          email gửi thông tin đăng nhập. Nếu cột &quot;Email cấp TK&quot; báo
          lỗi/chưa gửi, hãy cấu hình email (RESEND_API_KEY) rồi bấm
          &quot;Đặt lại &amp; gửi&quot; để gửi lại cho học viên. Bạn cũng có thể
          bấm <span className="text-white">&quot;Thêm tài khoản&quot;</span> để
          tạo thủ công.
        </p>
      </Card>

      {formMode && (
        <AccountFormModal
          mode={formMode}
          account={editing}
          onSubmit={submitAccount}
          onClose={() => {
            setFormMode(null);
            setEditing(null);
          }}
        />
      )}

      {lockTarget && (
        <ConfirmDialog
          title={
            lockTarget.status === "active"
              ? "Khóa tài khoản học viên"
              : "Mở khóa tài khoản học viên"
          }
          message={
            lockTarget.status === "active" ? (
              <>
                Khóa tài khoản{" "}
                <span className="font-semibold text-white">
                  {lockTarget.email}
                </span>
                ? Học viên sẽ không đăng nhập được cho tới khi mở lại.
              </>
            ) : (
              <>
                Mở khóa tài khoản{" "}
                <span className="font-semibold text-white">
                  {lockTarget.email}
                </span>
                ? Học viên sẽ đăng nhập lại được.
              </>
            )
          }
          confirmLabel={lockTarget.status === "active" ? "Khóa" : "Mở khóa"}
          confirmClassName="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white"
          onConfirm={confirmLock}
          onClose={() => setLockTarget(null)}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Xóa tài khoản học viên"
          message={
            <>
              Xóa vĩnh viễn tài khoản{" "}
              <span className="font-semibold text-white">
                {deleteTarget.email}
              </span>
              ? Học viên sẽ không đăng nhập được nữa. Hành động này không thể hoàn
              tác.
            </>
          }
          confirmLabel="Xóa"
          onConfirm={confirmDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
