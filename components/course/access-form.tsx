"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, KeyRound, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { courseAccessContent } from "@/config/course";
import { siteConfig } from "@/config/site";

const zaloHref = `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`;

/**
 * Form nhập mã kích hoạt (mã đơn hàng). Chuyển tới /hoc/[mã] —
 * việc kiểm tra đơn đã thanh toán hay chưa diễn ra ở server.
 */
export function CourseAccessForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const normalized = code.trim().toUpperCase();
    if (!normalized) return;
    setSubmitting(true);
    router.push(`/hoc/${encodeURIComponent(normalized)}`);
  };

  return (
    <div className="card-surface mx-auto w-full max-w-md rounded-3xl p-8 sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
        <GraduationCap className="h-7 w-7" aria-hidden />
      </span>
      <h1 className="mt-5 text-center text-2xl font-extrabold">
        {courseAccessContent.enterTitle}
      </h1>
      <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
        {courseAccessContent.enterDescription}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="activation-code">Mã kích hoạt</Label>
          <Input
            id="activation-code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder={courseAccessContent.enterPlaceholder}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className="uppercase tracking-widest"
            required
          />
        </div>
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full"
          disabled={submitting}
        >
          <KeyRound className="h-4 w-4" aria-hidden />
          {submitting ? "Đang kiểm tra..." : courseAccessContent.enterButton}
        </Button>
      </form>

      <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
        {courseAccessContent.enterHelp}{" "}
        <a
          href={zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          Zalo {siteConfig.contact.zalo}
        </a>
      </p>
    </div>
  );
}
