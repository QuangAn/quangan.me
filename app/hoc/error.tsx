"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCw } from "lucide-react";

/**
 * Ranh giới lỗi cho khu vực học /hoc. Nếu một bài học có dữ liệu bất thường làm
 * render lỗi, chỉ hiện thông báo này thay vì trắng cả trang — học viên vẫn thoát
 * ra được và admin biết để sửa nội dung.
 */
export default function HocError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[/hoc] render error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-white/10 bg-card p-8 text-center">
      <AlertTriangle className="mx-auto h-10 w-10 text-amber-400" aria-hidden />
      <h2 className="mt-4 text-lg font-bold">Không hiển thị được tài liệu</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Có lỗi khi tải nội dung bài học. Vui lòng thử lại; nếu vẫn lỗi, hãy nhắn
        Zalo để được hỗ trợ.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/85"
        >
          <RotateCw className="h-4 w-4" aria-hidden />
          Thử lại
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
