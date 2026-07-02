"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CheckoutModal } from "@/components/checkout-modal";
import { Button, type ButtonProps } from "@/components/ui/button";
import { pricingPlans } from "@/config/pricing";
import type { PlanId } from "@/types";

/** Gói mặc định khi mở popup từ CTA chung (không gắn với gói cụ thể). */
const DEFAULT_PLAN_ID: PlanId =
  pricingPlans.find((p) => p.highlighted)?.id ?? pricingPlans[0].id;

type CheckoutDialogContextValue = {
  /** Mở popup đăng ký; truyền planId để chọn sẵn gói, bỏ trống = gói mặc định. */
  openCheckout: (planId?: PlanId) => void;
};

const CheckoutDialogContext =
  createContext<CheckoutDialogContextValue | null>(null);

/**
 * Provider bọc toàn trang: giữ trạng thái popup đăng ký khóa học và render
 * CheckoutModal duy nhất. Mọi nút CTA dùng CheckoutButton để mở popup này.
 */
export function CheckoutDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [planId, setPlanId] = useState<PlanId | null>(null);

  const openCheckout = useCallback(
    (id?: PlanId) => setPlanId(id ?? DEFAULT_PLAN_ID),
    [],
  );
  const closeCheckout = useCallback(() => setPlanId(null), []);
  const value = useMemo(() => ({ openCheckout }), [openCheckout]);

  return (
    <CheckoutDialogContext.Provider value={value}>
      {children}
      <CheckoutModal
        open={planId !== null}
        initialPlanId={planId ?? DEFAULT_PLAN_ID}
        onClose={closeCheckout}
      />
    </CheckoutDialogContext.Provider>
  );
}

export function useCheckoutDialog(): CheckoutDialogContextValue {
  const ctx = useContext(CheckoutDialogContext);
  if (!ctx) {
    throw new Error(
      "useCheckoutDialog phải được dùng bên trong CheckoutDialogProvider",
    );
  }
  return ctx;
}

interface CheckoutButtonProps extends ButtonProps {
  /** Gói được chọn sẵn khi mở popup; bỏ trống = gói mặc định. */
  planId?: PlanId;
}

/** Nút CTA mở popup đăng ký — nhận đủ props của Button (variant, size...). */
export function CheckoutButton({
  planId,
  onClick,
  ...props
}: CheckoutButtonProps) {
  const { openCheckout } = useCheckoutDialog();

  return (
    <Button
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openCheckout(planId);
      }}
    />
  );
}
