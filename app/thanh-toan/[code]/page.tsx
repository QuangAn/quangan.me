import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentView } from "@/components/payment/payment-view";
import { getOrderByCode, toPublicOrder } from "@/lib/orders";
import { buildSepayQrUrl, getBankInfoDynamic } from "@/lib/payment";

// Luôn đọc trạng thái đơn mới nhất từ Supabase
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thanh toán khóa học",
  robots: { index: false, follow: false },
};

interface PaymentPageProps {
  params: Promise<{ code: string }>;
}

export default async function PaymentPage({ params }: PaymentPageProps) {
  const { code } = await params;
  const order = await getOrderByCode(code);

  if (!order) {
    notFound();
  }

  const bank = await getBankInfoDynamic();
  const qrUrl = buildSepayQrUrl(bank, order.amount, order.transfer_code);

  return (
    <PaymentView order={toPublicOrder(order)} bank={bank} qrUrl={qrUrl} />
  );
}
