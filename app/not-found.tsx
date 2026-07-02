import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Trang 404 chung — dùng cả khi mã đơn hàng thanh toán không tồn tại. */
export default function NotFound() {
  return (
    <main className="container flex min-h-dvh flex-col items-center justify-center gap-5 py-20 text-center">
      <p className="text-6xl font-extrabold text-gradient">404</p>
      <div className="space-y-1.5">
        <h1 className="text-xl font-bold">Không tìm thấy trang</h1>
        <p className="text-sm text-muted-foreground">
          Đường dẫn không tồn tại hoặc đơn hàng không đúng mã.
        </p>
      </div>
      <Button asChild variant="gradient" size="lg">
        <Link href="/">Về trang chủ</Link>
      </Button>
    </main>
  );
}
