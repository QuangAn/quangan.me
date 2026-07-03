"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Loader, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { pricingPlans } from "@/config/pricing";
import type { StudentAccount } from "@/types";

export interface AccountFormValues {
  full_name: string;
  email: string;
  phone: string;
  plan_id: string;
  send_email: boolean;
}

interface AccountFormModalProps {
  mode: "create" | "edit";
  account?: StudentAccount | null;
  /** Trả về mã lỗi (chuỗi) nếu thất bại, hoặc null nếu thành công. */
  onSubmit: (values: AccountFormValues) => Promise<string | null>;
  onClose: () => void;
}

/** Lớp phủ + khung modal dùng chung cho admin (theme slate tối). */
function ModalShell({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Đóng"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-700 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/** Form thêm mới / chỉnh sửa tài khoản học viên. */
export function AccountFormModal({
  mode,
  account,
  onSubmit,
  onClose,
}: AccountFormModalProps) {
  const [values, setValues] = useState<AccountFormValues>({
    full_name: account?.full_name ?? "",
    email: account?.email ?? "",
    phone: account?.phone ?? "",
    plan_id: account?.plan_id ?? pricingPlans[0].id,
    send_email: true,
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof AccountFormValues, value: string | boolean) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const err = await onSubmit(values);
    if (err) {
      setError(err);
      setSubmitting(false);
    } else {
      onClose();
    }
  }

  return (
    <ModalShell
      title={mode === "create" ? "Thêm tài khoản học viên" : "Sửa tài khoản"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
        <div className="space-y-1.5">
          <Label htmlFor="acc-name" className="text-slate-300">
            Họ và tên <span className="text-red-400">*</span>
          </Label>
          <Input
            id="acc-name"
            value={values.full_name}
            onChange={(e) => set("full_name", e.target.value)}
            placeholder="Nguyễn Văn A"
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="acc-email" className="text-slate-300">
            Email <span className="text-red-400">*</span>
          </Label>
          <Input
            id="acc-email"
            type="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="email@cua-hoc-vien.com"
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="acc-phone" className="text-slate-300">
            Số điện thoại
          </Label>
          <Input
            id="acc-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="09xx xxx xxx"
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="acc-plan" className="text-slate-300">
            Gói học <span className="text-red-400">*</span>
          </Label>
          <select
            id="acc-plan"
            value={values.plan_id}
            onChange={(e) => set("plan_id", e.target.value)}
            className="h-11 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {pricingPlans.map((plan) => (
              <option key={plan.id} value={plan.id} className="bg-slate-900">
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        {mode === "create" && (
          <label className="flex items-start gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={values.send_email}
              onChange={(e) => set("send_email", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-900"
            />
            <span>
              Gửi email cấp mật khẩu tạm cho học viên ngay bây giờ
              <span className="mt-0.5 block text-xs text-slate-500">
                Bỏ chọn nếu muốn cấp mật khẩu sau bằng nút &quot;Đặt lại &amp;
                gửi&quot;.
              </span>
            </span>
          </label>
        )}

        {mode === "edit" && (
          <p className="text-xs text-slate-500">
            Sửa thông tin không đổi mật khẩu học viên. Dùng &quot;Đặt lại &amp;
            gửi&quot; nếu cần cấp lại mật khẩu.
          </p>
        )}

        {error && (
          <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-1">
          <Button type="button" variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button
            type="submit"
            disabled={submitting}
            className="bg-gradient-to-r from-indigo-600 to-cyan-600"
          >
            {submitting && <Loader className="h-4 w-4 animate-spin" />}
            {mode === "create" ? "Tạo tài khoản" : "Lưu thay đổi"}
          </Button>
        </div>
      </form>
    </ModalShell>
  );
}

interface ConfirmDialogProps {
  title: string;
  message: React.ReactNode;
  confirmLabel: string;
  /** Class cho nút xác nhận (mặc định tông đỏ cho hành động xóa). */
  confirmClassName?: string;
  onConfirm: () => Promise<void>;
  onClose: () => void;
}

/** Hộp thoại xác nhận hành động cần cân nhắc (xóa, khóa tài khoản...). */
export function ConfirmDialog({
  title,
  message,
  confirmLabel,
  confirmClassName = "bg-red-600 text-white hover:bg-red-500",
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  const [busy, setBusy] = useState(false);

  async function handleConfirm() {
    setBusy(true);
    await onConfirm();
    // Component do parent gỡ bỏ sau khi onConfirm xong.
  }

  return (
    <ModalShell title={title} onClose={busy ? () => {} : onClose}>
      <div className="space-y-5 px-6 py-5">
        <div className="text-sm text-slate-300">{message}</div>
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            disabled={busy}
            onClick={onClose}
          >
            Hủy
          </Button>
          <Button
            type="button"
            disabled={busy}
            onClick={handleConfirm}
            className={confirmClassName}
          >
            {busy && <Loader className="h-4 w-4 animate-spin" />}
            {confirmLabel}
          </Button>
        </div>
      </div>
    </ModalShell>
  );
}
