import Link from "next/link";
import { Clock, Lock, MessageCircle, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courseAccessContent } from "@/config/course";
import { siteConfig } from "@/config/site";

const zaloHref = `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`;

export type AccessDeniedReason = "not-found" | "pending" | "expired";

interface AccessDeniedProps {
  reason: AccessDeniedReason;
  /** Mã đơn — dùng cho nút "Tiếp tục thanh toán" khi đơn còn pending. */
  code?: string;
}

const content = {
  "not-found": {
    icon: SearchX,
    title: courseAccessContent.notFoundTitle,
    message: courseAccessContent.notFoundMessage,
  },
  pending: {
    icon: Lock,
    title: courseAccessContent.pendingTitle,
    message: courseAccessContent.pendingMessage,
  },
  expired: {
    icon: Clock,
    title: courseAccessContent.expiredTitle,
    message: courseAccessContent.expiredMessage,
  },
} as const;

/** Màn hình khi mã kích hoạt chưa hợp lệ / đơn chưa thanh toán / đơn hết hạn. */
export function AccessDenied({ reason, code }: AccessDeniedProps) {
  const { icon: Icon, title, message } = content[reason];

  return (
    <div className="card-surface mx-auto w-full max-w-md rounded-3xl p-8 text-center sm:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold">{title}</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{message}</p>

      <div className="mt-7 flex flex-col justify-center gap-3">
        {reason === "pending" && code ? (
          <Button asChild variant="gradient" size="lg">
            <Link href={`/thanh-toan/${code}`}>{courseAccessContent.pendingCta}</Link>
          </Button>
        ) : null}
        {reason === "expired" ? (
          <Button asChild variant="gradient" size="lg">
            <Link href="/#pricing">{courseAccessContent.expiredCta}</Link>
          </Button>
        ) : null}
        {reason === "not-found" ? (
          <Button asChild variant="gradient" size="lg">
            <Link href="/hoc">Nhập lại mã kích hoạt</Link>
          </Button>
        ) : null}
        <Button asChild variant="outline" size="lg">
          <a href={zaloHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            {courseAccessContent.supportLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
