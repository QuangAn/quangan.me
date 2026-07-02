"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyFieldProps {
  label: string;
  /** Giá trị hiển thị cho người dùng. */
  value: string;
  /** Giá trị thực khi copy (vd số tiền không có dấu chấm). Mặc định = value. */
  copyValue?: string;
  /** Nhấn mạnh field quan trọng (vd nội dung chuyển khoản). */
  highlight?: boolean;
}

/** Ô thông tin chuyển khoản kèm nút copy nhanh. */
export function CopyField({
  label,
  value,
  copyValue,
  highlight,
}: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Trình duyệt chặn clipboard — người dùng vẫn copy tay được
    }
  }

  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <div
        className={cn(
          "flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5",
          highlight
            ? "border-accent/40 bg-accent-soft/60 ring-1 ring-inset ring-accent/20"
            : "border-white/10 bg-secondary/50",
        )}
      >
        <span
          className={cn(
            "min-w-0 break-all text-sm font-bold tabular-nums",
            highlight && "text-accent-strong",
          )}
        >
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Sao chép ${label}`}
          className="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs font-semibold text-muted-foreground transition hover:bg-white/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent" />
              Đã chép
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}
