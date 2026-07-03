import { redirect } from "next/navigation";
import Link from "next/link";
import { ExternalLink, KeyRound, PlayCircle } from "lucide-react";
import { getStudentFromCookie } from "@/lib/student-server";
import { getSectionsForPlan } from "@/lib/course";
import { getIcon } from "@/lib/icons";
import { lessonTypeLabels, studentPortalContent } from "@/config/student";
import type { CourseLesson } from "@/types";

export const dynamic = "force-dynamic";

export default async function HocPortalPage() {
  const user = await getStudentFromCookie();
  if (!user) {
    redirect("/hoc/dang-nhap");
  }

  const sections = getSectionsForPlan(user.plan_id);

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-muted-foreground">
          Xin chào, {user.full_name} 👋
        </p>
        <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
          <span className="text-gradient">
            {studentPortalContent.portalTitle}
          </span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          {studentPortalContent.portalSubtitle}
        </p>
        {user.plan_name && (
          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Gói của bạn: {user.plan_name}
          </span>
        )}
      </div>

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

      <div className="space-y-5">
        {sections.map((section) => {
          const Icon = getIcon(section.icon);
          return (
            <section key={section.order} className="card-surface rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h2 className="text-lg font-bold">
                    Chương {section.order}. {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {section.summary}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {section.lessons.map((lesson, index) => (
                  <LessonRow key={index} lesson={lesson} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {studentPortalContent.supportNote}
      </p>
    </div>
  );
}

/** Một dòng bài học: có link thì bấm mở, chưa có thì "Sắp cập nhật". */
function LessonRow({ lesson }: { lesson: CourseLesson }) {
  const typeLabel = lesson.type ? lessonTypeLabels[lesson.type] : null;

  const inner = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/60 text-primary">
        <PlayCircle className="h-4 w-4" aria-hidden />
      </span>
      <span className="flex-1 text-sm">{lesson.title}</span>
      {typeLabel && (
        <span className="rounded-full border border-white/10 bg-secondary/50 px-2 py-0.5 text-[11px] text-muted-foreground">
          {typeLabel}
        </span>
      )}
      {lesson.duration && (
        <span className="text-[11px] text-muted-foreground">
          {lesson.duration}
        </span>
      )}
    </>
  );

  if (lesson.resourceUrl) {
    return (
      <li>
        <a
          href={lesson.resourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-secondary/30 p-3 transition hover:border-primary/40 hover:bg-white/[0.03]"
        >
          {inner}
          <ExternalLink
            className="h-4 w-4 text-muted-foreground transition group-hover:text-primary"
            aria-hidden
          />
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 rounded-xl border border-white/5 bg-secondary/20 p-3 opacity-70">
      {inner}
      <span className="text-[11px] italic text-muted-foreground">
        {studentPortalContent.comingSoon}
      </span>
    </li>
  );
}
