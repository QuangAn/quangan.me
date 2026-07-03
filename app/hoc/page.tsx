import { redirect } from "next/navigation";
import Link from "next/link";
import { KeyRound } from "lucide-react";
import { getStudentFromCookie } from "@/lib/student-server";
import { studentPortalContent } from "@/config/student";
import { CourseView } from "@/components/course/course-view";

export const dynamic = "force-dynamic";

/**
 * Portal học viên đã đăng nhập: hiển thị toàn bộ tài liệu khóa học (8 module)
 * ngay trong layout /hoc (đã có header + đăng xuất). Nội dung lấy từ config/course.
 */
export default async function HocPortalPage() {
  const user = await getStudentFromCookie();
  if (!user) {
    redirect("/hoc/dang-nhap");
  }

  return (
    <div className="space-y-6">
      {user.must_change_password && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm text-amber-200">
          <span>{studentPortalContent.mustChangeBanner}</span>
          <Link
            href="/hoc/doi-mat-khau"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3 py-1.5 font-semibold text-amber-100 transition hover:bg-amber-400/30"
          >
            <KeyRound className="h-4 w-4" aria-hidden />
            Đổi mật khẩu
          </Link>
        </div>
      )}

      <CourseView studentName={user.full_name} showChrome={false} />
    </div>
  );
}
