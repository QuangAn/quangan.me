"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

/** Nút copy nội dung prompt/lệnh vào clipboard, báo "Đã copy" trong 1.5s. */
export function CopyButton({ text, label = "Copy prompt", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Trình duyệt chặn clipboard — học viên bôi đen copy thủ công
      window.alert("Không copy được tự động. Hãy bôi đen nội dung và copy thủ công.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3.5 py-1.5 text-xs font-bold text-primary transition hover:bg-primary/25",
        copied && "border-emerald-400/40 bg-emerald-400/15 text-emerald-300",
        className,
      )}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5" aria-hidden />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden />
      )}
      {copied ? "Đã copy" : label}
    </button>
  );
}
