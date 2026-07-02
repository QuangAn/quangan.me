"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** Độ trễ animation (giây) - dùng để tạo hiệu ứng lần lượt. */
  delay?: number;
  /** Khoảng dịch chuyển ban đầu theo trục Y (px). */
  y?: number;
  /**
   * Khi true: animate ngay lúc mount thay vì chờ cuộn vào màn hình.
   * Dùng cho nội dung above-the-fold (hero) để không bị trống trên mobile
   * và cải thiện cảm giác tốc độ / LCP.
   */
  immediate?: boolean;
}

/**
 * Bọc nội dung với hiệu ứng fade + trượt lên.
 * Tôn trọng prefers-reduced-motion thông qua Framer Motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  immediate = false,
  ...props
}: RevealProps) {
  const animateProps = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" } as const,
      };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...animateProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
