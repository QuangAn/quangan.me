"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MIN_PASSWORD_LENGTH, studentPortalContent } from "@/config/student";

/** Form đổi mật khẩu của học viên (cần mật khẩu hiện tại). */
export function ChangePasswordForm() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      setError(`Mật khẩu mới tối thiểu ${MIN_PASSWORD_LENGTH} ký tự.`);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/student/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        setDone(true);
        setTimeout(() => {
          router.replace("/hoc");
          router.refresh();
        }, 1200);
        return;
      }
      setError(data.error ?? "Không đổi được mật khẩu.");
    } catch {
      setError("Không kết nối được máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-6 max-w-md">
      <div className="card-surface rounded-3xl p-8">
        <h1 className="text-2xl font-extrabold">
          {studentPortalContent.changePasswordTitle}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {studentPortalContent.changePasswordSubtitle}
        </p>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            {error}
          </div>
        )}
        {done && (
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
            Đổi mật khẩu thành công! Đang chuyển về khu vực học...
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="current-password"
              className="text-sm font-medium text-foreground"
            >
              Mật khẩu hiện tại
            </label>
            <Input
              id="current-password"
              type="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              disabled={loading || done}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="new-password"
              className="text-sm font-medium text-foreground"
            >
              Mật khẩu mới
            </label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loading || done}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-foreground"
            >
              Xác nhận mật khẩu mới
            </label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading || done}
              required
            />
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="lg"
            disabled={loading || done}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Đang lưu...
              </>
            ) : (
              "Đổi mật khẩu"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
