"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, GraduationCap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { studentPortalContent } from "@/config/student";

/** Form đăng nhập khu vực học viên. */
export function StudentLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        mustChangePassword?: boolean;
      };
      if (res.ok && data.ok) {
        router.replace(data.mustChangePassword ? "/hoc/doi-mat-khau" : "/hoc");
        router.refresh();
        return;
      }
      setError(data.error ?? "Đăng nhập không thành công.");
    } catch {
      setError("Không kết nối được máy chủ. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md">
      <div className="card-surface rounded-3xl p-8">
        <div className="mb-6 text-center">
          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
            <GraduationCap className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="text-2xl font-extrabold">
            {studentPortalContent.loginTitle}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {studentPortalContent.loginSubtitle}
          </p>
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="student-email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="student-email"
              type="email"
              autoComplete="email"
              placeholder="ban@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="student-password"
              className="text-sm font-medium text-foreground"
            >
              Mật khẩu
            </label>
            <Input
              id="student-password"
              type="password"
              autoComplete="current-password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="lg"
            disabled={loading || !email || !password}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Đang đăng nhập...
              </>
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </form>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {studentPortalContent.supportNote}
      </p>
    </div>
  );
}
