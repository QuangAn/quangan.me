"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CheckoutButton } from "@/components/checkout-dialog";
import { heroOffer } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Thanh CTA dính đáy màn hình, chỉ hiện trên mobile.
 * Hiện sau khi cuộn qua hero và ẩn khi footer đã vào tầm nhìn
 * để không che nội dung cuối trang.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > 560;
      const footer = document.querySelector("footer");
      let reachedFooter = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        reachedFooter = rect.top < window.innerHeight * 0.9;
      }
      setVisible(scrolledPastHero && !reachedFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 p-3 backdrop-blur-lg transition-all duration-300 lg:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-tight">
            Bắt đầu tạo website bằng AI
          </p>
          <p className="truncate text-xs text-muted-foreground">
            Chỉ từ {heroOffer.price} · {heroOffer.note}
          </p>
        </div>
        <CheckoutButton
          variant="gradient"
          size="sm"
          className="shrink-0 shadow-glow"
          tabIndex={visible ? 0 : -1}
        >
          Đăng ký ngay <ArrowRight className="h-4 w-4" />
        </CheckoutButton>
      </div>
    </div>
  );
}
