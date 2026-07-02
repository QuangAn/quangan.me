"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  Gift,
  Loader2,
  Lock,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, formatVnd } from "@/lib/utils";
import { pricingPlans } from "@/config/pricing";
import {
  submitCheckout,
  validateCheckout,
  type CheckoutFieldErrors,
} from "@/lib/checkout";
import type { PlanId } from "@/types";

interface CheckoutModalProps {
  open: boolean;
  initialPlanId: PlanId;
  onClose: () => void;
}

interface FormValues {
  full_name: string;
  phone: string;
  email: string;
}

const initialValues: FormValues = { full_name: "", phone: "", email: "" };

/** Số quyền lợi hiển thị trong box "Bạn sẽ nhận được". */
const MAX_BENEFITS = 5;

/**
 * Modal đăng ký mua khóa học: chọn gói → điền thông tin → tạo đơn hàng
 * → chuyển sang trang thanh toán QR tự động.
 */
export function CheckoutModal({
  open,
  initialPlanId,
  onClose,
}: CheckoutModalProps) {
  const router = useRouter();
  const [planId, setPlanId] = useState<PlanId>(initialPlanId);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<CheckoutFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const plan = pricingPlans.find((p) => p.id === planId) ?? pricingPlans[0];

  // Đồng bộ gói được chọn từ pricing card mỗi lần mở modal
  useEffect(() => {
    if (open) {
      setPlanId(initialPlanId);
      setServerError(null);
      setErrors({});
    }
  }, [open, initialPlanId]);

  // Khoá cuộn trang + đóng bằng phím Escape khi modal mở
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const update =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);

    const checkoutValues = { plan_id: plan.id, ...values };
    const fieldErrors = validateCheckout(checkoutValues);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const result = await submitCheckout(checkoutValues);

    if (result.ok) {
      // Giữ trạng thái loading trong lúc chuyển trang
      router.push(`/thanh-toan/${result.orderCode}`);
    } else {
      setSubmitting(false);
      setServerError(result.error);
    }
  }

  const benefits = plan.features.slice(0, MAX_BENEFITS);
  const remaining = plan.features.length - benefits.length;

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label="Đóng"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
            tabIndex={-1}
            className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/10 bg-card shadow-elevated outline-none"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Header: gói đang chọn + giá */}
            <div className="premium-dark sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 text-white sm:px-6">
              <h2
                id="checkout-title"
                className="flex items-center gap-2 text-base font-bold sm:text-lg"
              >
                <Zap className="h-5 w-5 text-accent" aria-hidden />
                {plan.name}
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xl font-extrabold tabular-nums text-accent-strong sm:text-2xl">
                  {plan.price}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Đóng cửa sổ đăng ký"
                  className="rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-5 px-5 py-5 sm:px-6">
              {/* Tabs chọn gói */}
              <div
                role="radiogroup"
                aria-label="Chọn gói học"
                className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-secondary/60 p-2"
              >
                {pricingPlans.map((p) => {
                  const selected = p.id === plan.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setPlanId(p.id)}
                      className={cn(
                        "flex flex-col items-center gap-0.5 rounded-xl px-3 py-2.5 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        selected
                          ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                      )}
                    >
                      <span className="text-xs font-semibold sm:text-sm">
                        {p.name}
                      </span>
                      <span className="text-sm font-extrabold tabular-nums">
                        {p.price}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quyền lợi của gói đang chọn */}
              <div className="rounded-2xl border border-white/10 bg-secondary/40 p-4">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  <Gift className="h-4 w-4 text-accent" aria-hidden />
                  Bạn sẽ nhận được
                </p>
                <ul className="grid gap-2">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                  {remaining > 0 ? (
                    <li className="pl-6 text-xs text-muted-foreground">
                      + {remaining} quyền lợi khác (xem tại bảng giá)
                    </li>
                  ) : null}
                </ul>
              </div>

              {/* Form thông tin */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="checkout-full-name">
                    Họ và tên <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-full-name"
                    name="full_name"
                    autoComplete="name"
                    placeholder="Nguyễn Văn A"
                    value={values.full_name}
                    onChange={update("full_name")}
                    aria-invalid={Boolean(errors.full_name)}
                  />
                  {errors.full_name ? (
                    <p className="text-xs text-destructive">
                      {errors.full_name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="checkout-phone">
                    Số điện thoại Zalo{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="09xx xxx xxx"
                    value={values.phone}
                    onChange={update("phone")}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone ? (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="checkout-email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="email@cua-ban.com"
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                {serverError ? (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                ) : null}

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Đang tạo đơn hàng...
                    </>
                  ) : (
                    <>Đăng ký — {formatVnd(plan.priceValue)}</>
                  )}
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    Thông tin được bảo mật
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                    Thanh toán xác nhận tự động
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
