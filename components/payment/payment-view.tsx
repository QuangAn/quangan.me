"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  GraduationCap,
  Landmark,
  MessageCircle,
  QrCode,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyField } from "@/components/payment/copy-field";
import { cn, formatVnd } from "@/lib/utils";
import { paymentPageContent } from "@/config/payment";
import { siteConfig } from "@/config/site";
import type { BankInfo, OrderStatus, PublicOrder } from "@/types";

interface PaymentViewProps {
  order: PublicOrder;
  bank: BankInfo;
  qrUrl: string;
}

/** Chu kỳ hỏi trạng thái đơn hàng (ms). */
const POLL_INTERVAL = 4000;

const zaloHref = `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`;

/**
 * Trang thanh toán: QR chuyển khoản + thông tin thủ công, tự polling
 * trạng thái — khi SePay xác nhận tiền vào, giao diện chuyển sang thành công.
 */
export function PaymentView({ order, bank, qrUrl }: PaymentViewProps) {
  const [status, setStatus] = useState<OrderStatus>(order.status);
  const [paidAt, setPaidAt] = useState<string | null>(order.paid_at);

  const checkStatus = useCallback(async () => {
    try {
      const res = await fetch(`/api/orders/${order.transfer_code}/status`, {
        cache: "no-store",
      });
      if (!res.ok) return;
      const data = (await res.json()) as {
        ok: boolean;
        status?: OrderStatus;
        paid_at?: string | null;
      };
      if (data.ok && data.status) {
        setStatus(data.status);
        setPaidAt(data.paid_at ?? null);
      }
    } catch {
      // Mất mạng tạm thời — lần polling sau sẽ thử lại
    }
  }, [order.transfer_code]);

  // Polling tới khi đơn được xác nhận (kể cả khi đã quá hạn —
  // khách chuyển trễ vẫn được ghi nhận)
  useEffect(() => {
    if (status === "paid") return;
    const timer = setInterval(checkStatus, POLL_INTERVAL);
    return () => clearInterval(timer);
  }, [status, checkStatus]);

  return (
    <div className="min-h-dvh">
      {/* Header tối giản cho trang thanh toán */}
      <header className="border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {siteConfig.shortName}
          </Link>
          <a
            href={zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Hỗ trợ: {siteConfig.contact.zalo}
          </a>
        </div>
      </header>

      <main className="container max-w-5xl pb-20 pt-8 sm:pt-12">
        {status === "paid" ? (
          <SuccessPanel order={order} paidAt={paidAt} />
        ) : (
          <>
            <OrderSummary order={order} status={status} />

            {status === "expired" ? (
              <ExpiredPanel />
            ) : (
              <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
                <QrPanel order={order} qrUrl={qrUrl} />
                <TransferPanel order={order} bank={bank} />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

/** Dải tóm tắt đơn hàng phía trên. */
function OrderSummary({
  order,
  status,
}: {
  order: PublicOrder;
  status: OrderStatus;
}) {
  return (
    <div className="card-surface flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:px-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Đơn hàng #{order.order_number}
        </p>
        <h1 className="mt-0.5 text-lg font-bold sm:text-xl">
          {order.plan_name}
        </h1>
        <p className="text-sm text-muted-foreground">
          Học viên: {order.full_name}
        </p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-extrabold tabular-nums text-gradient sm:text-3xl">
          {formatVnd(order.amount)}
        </p>
        <p
          className={cn(
            "mt-1 flex items-center justify-end gap-1.5 text-xs font-semibold",
            status === "expired" ? "text-destructive" : "text-amber-300",
          )}
        >
          {status === "expired" ? (
            <>Đơn đã hết hạn</>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              Đang chờ thanh toán — tự động xác nhận
            </>
          )}
        </p>
      </div>
    </div>
  );
}

/** Cột trái: mã QR + hướng dẫn. */
function QrPanel({ order, qrUrl }: { order: PublicOrder; qrUrl: string }) {
  return (
    <section aria-labelledby="qr-title" className="card-surface overflow-hidden rounded-3xl">
      <div className="premium-dark border-b border-white/10 px-6 py-5 text-center text-white">
        <h2
          id="qr-title"
          className="flex items-center justify-center gap-2 text-lg font-bold"
        >
          <QrCode className="h-5 w-5 text-accent" aria-hidden />
          {paymentPageContent.qrTitle}
        </h2>
        <p className="mt-1 text-sm text-white/75">
          {paymentPageContent.qrSubtitle}
        </p>
      </div>

      <div className="px-6 py-6">
        <div className="mx-auto w-fit rounded-2xl border-2 border-dashed border-primary/40 p-3">
          {/* Nền trắng để app ngân hàng quét QR chuẩn trên theme tối */}
          <div className="rounded-xl bg-white p-3">
            <Image
              src={qrUrl}
              alt={`Mã QR chuyển khoản ${formatVnd(order.amount)} — nội dung ${order.transfer_code}`}
              width={280}
              height={280}
              unoptimized
              priority
              className="h-auto w-[240px] sm:w-[280px]"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-secondary/40 p-4">
          <p className="mb-3 text-sm font-bold">
            {paymentPageContent.guideTitle}
          </p>
          <ol className="space-y-2.5">
            {paymentPageContent.guideSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <RefreshCw className="h-3.5 w-3.5 animate-spin [animation-duration:3s]" aria-hidden />
          Trang tự động cập nhật khi nhận được thanh toán
        </p>
      </div>
    </section>
  );
}

/** Cột phải: thông tin chuyển khoản thủ công. */
function TransferPanel({
  order,
  bank,
}: {
  order: PublicOrder;
  bank: BankInfo;
}) {
  return (
    <section
      aria-labelledby="transfer-title"
      className="card-surface rounded-3xl p-6"
    >
      <h2 id="transfer-title" className="flex items-center gap-2 text-lg font-bold">
        <Landmark className="h-5 w-5 text-primary" aria-hidden />
        {paymentPageContent.transferTitle}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {paymentPageContent.transferSubtitle}
      </p>

      <div className="mt-5 space-y-4">
        <CopyField label="Ngân hàng" value={bank.bankCode} />
        <CopyField label="Số tài khoản" value={bank.accountNumber} />
        <CopyField label="Chủ tài khoản" value={bank.accountName} />
        <CopyField
          label="Số tiền"
          value={formatVnd(order.amount)}
          copyValue={String(order.amount)}
        />
        <CopyField
          label="Nội dung chuyển khoản (bắt buộc)"
          value={order.transfer_code}
          highlight
        />
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-amber-400/25 bg-amber-400/10 p-3 text-sm text-amber-200">
        <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        <span>{paymentPageContent.contentWarning}</span>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-secondary/40 p-3 text-sm text-muted-foreground">
        {paymentPageContent.supportNote}{" "}
        <a
          href={zaloHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Zalo {siteConfig.contact.zalo}
        </a>
      </div>
    </section>
  );
}

/** Màn hình khi thanh toán được xác nhận. */
function SuccessPanel({
  order,
  paidAt,
}: {
  order: PublicOrder;
  paidAt: string | null;
}) {
  return (
    <div className="card-surface mx-auto max-w-xl rounded-3xl p-8 text-center sm:p-10">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-glow">
        <CheckCircle2 className="h-9 w-9" aria-hidden />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold sm:text-3xl">
        {paymentPageContent.successTitle}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {paymentPageContent.successMessage}
      </p>

      <dl className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-secondary/40 p-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Đơn hàng</dt>
          <dd className="font-semibold">#{order.order_number}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Gói học</dt>
          <dd className="font-semibold">{order.plan_name}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Số tiền</dt>
          <dd className="font-bold tabular-nums text-accent-strong">
            {formatVnd(order.amount)}
          </dd>
        </div>
        {paidAt ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Thời gian</dt>
            <dd className="font-semibold">
              {new Date(paidAt).toLocaleString("vi-VN")}
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="gradient" size="lg">
          <Link href="/hoc/dang-nhap">
            <GraduationCap className="h-4 w-4" aria-hidden />
            Vào học ngay
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={zaloHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chưa nhận được email? Nhắn Zalo
          </a>
        </Button>
      </div>
    </div>
  );
}

/** Màn hình khi đơn quá hạn thanh toán. */
function ExpiredPanel() {
  return (
    <div className="card-surface mx-auto mt-8 max-w-xl rounded-3xl p-8 text-center sm:p-10">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/15 text-destructive">
        <Clock className="h-8 w-8" aria-hidden />
      </span>
      <h1 className="mt-5 text-2xl font-extrabold">
        {paymentPageContent.expiredTitle}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {paymentPageContent.expiredMessage}
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild variant="gradient" size="lg">
          <Link href="/#pricing">Đăng ký lại</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={zaloHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Nhắn Zalo hỗ trợ
          </a>
        </Button>
      </div>
    </div>
  );
}
