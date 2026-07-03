"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Clock, Gauge, MessageCircle, PlayCircle, Target } from "lucide-react";
import { LessonBlockView } from "@/components/course/lesson-blocks";
import { cn } from "@/lib/utils";
import { courseContent, courseModules } from "@/config/course";
import { siteConfig } from "@/config/site";
import type { CourseDocModule, CourseLesson } from "@/types/course";

const zaloHref = `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`;

interface CourseViewProps {
  /** Tên học viên hiển thị trên header. */
  studentName: string;
  /**
   * true (mặc định) → tự render header + container đầy đủ (dùng cho trang /hoc/[mã]).
   * false → chỉ render nội dung, để nhúng vào layout đã có header/container sẵn
   * (vd portal học viên đăng nhập tại /hoc).
   */
  showChrome?: boolean;
}

/**
 * Khu vực học: sidebar chọn module, danh sách bài học dạng accordion.
 * Toàn bộ nội dung lấy từ config/course.
 */
export function CourseView({ studentName, showChrome = true }: CourseViewProps) {
  const [activeModuleId, setActiveModuleId] = useState(courseModules[0].id);
  const activeModule =
    courseModules.find((m) => m.id === activeModuleId) ?? courseModules[0];

  const selectModule = (id: string) => {
    setActiveModuleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const body = (
    <div
      className={cn(
        "grid items-start gap-8 lg:grid-cols-[300px_1fr]",
        showChrome && "container pb-20 pt-8",
      )}
    >
      <ModuleSidebar activeModuleId={activeModuleId} onSelect={selectModule} />

      <main className="min-w-0">
        <section className="premium-dark relative overflow-hidden rounded-3xl border border-white/10 px-6 py-8 text-white sm:px-8">
          <div className="noise absolute inset-0" aria-hidden />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold">
              {courseContent.badge}
            </span>
            <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              {courseContent.heroTitle}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
              {courseContent.heroDescription}
            </p>
          </div>
        </section>

        <ModuleContent key={activeModule.id} module={activeModule} />
      </main>
    </div>
  );

  // Nhúng vào layout khác (portal đăng nhập đã có header + container riêng)
  if (!showChrome) {
    return body;
  }

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {siteConfig.shortName}
          </Link>
          <p className="hidden truncate text-sm text-muted-foreground sm:block">
            Học viên: <span className="font-semibold text-foreground">{studentName}</span>
          </p>
          <a
            href={zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Hỗ trợ Zalo
          </a>
        </div>
      </header>

      {body}
    </div>
  );
}

/** Sidebar chọn module: dọc trên desktop, cuộn ngang trên mobile. */
function ModuleSidebar({
  activeModuleId,
  onSelect,
}: {
  activeModuleId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-24">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {courseContent.sidebarTitle}
      </p>
      <nav
        aria-label="Danh sách module"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {courseModules.map((module) => {
          const active = module.id === activeModuleId;
          return (
            <button
              key={module.id}
              type="button"
              onClick={() => onSelect(module.id)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-2xl border px-4 py-3 text-left transition lg:w-full",
                active
                  ? "border-primary/50 bg-primary/15 text-foreground shadow-glow"
                  : "border-white/10 bg-card text-muted-foreground hover:border-white/20 hover:text-foreground",
              )}
            >
              <span className={cn("block text-sm font-bold", active && "text-primary")}>
                {module.shortTitle}
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {module.tagline}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

/** Nội dung một module: phần đầu + danh sách bài học accordion. */
function ModuleContent({ module }: { module: CourseDocModule }) {
  // Mặc định mở bài đầu tiên của module
  const [openLessonId, setOpenLessonId] = useState<string | null>(
    module.lessons[0]?.id ?? null,
  );

  return (
    <section className="mt-6">
      <div className="card-surface rounded-3xl p-6 sm:p-7">
        <h2 className="text-xl font-extrabold sm:text-2xl">{module.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <MetaPill icon={<Clock className="h-3.5 w-3.5" aria-hidden />} text={`Thời gian: ${module.duration}`} />
          <MetaPill icon={<Gauge className="h-3.5 w-3.5" aria-hidden />} text={`Độ khó: ${module.level}`} />
          <MetaPill icon={<Target className="h-3.5 w-3.5" aria-hidden />} text={`Kết quả: ${module.outcome}`} />
        </div>
      </div>

      <div className="mt-4 space-y-3.5">
        {module.lessons.map((lesson, index) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            index={index}
            open={openLessonId === lesson.id}
            onToggle={() =>
              setOpenLessonId((current) => (current === lesson.id ? null : lesson.id))
            }
          />
        ))}
      </div>
    </section>
  );
}

function MetaPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
      <span className="text-accent">{icon}</span>
      {text}
    </span>
  );
}

/** Một bài học dạng accordion. */
function LessonCard({
  lesson,
  index,
  open,
  onToggle,
}: {
  lesson: CourseLesson;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="card-surface overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3.5 px-4 py-4 text-left sm:px-5"
      >
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-extrabold",
            open ? "bg-gradient-to-br from-primary to-accent text-white" : "bg-primary/15 text-primary",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <h3 className="text-[15px] font-bold leading-snug sm:text-base">{lesson.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{lesson.description}</p>
        </span>
        <span className="flex items-center gap-2">
          <span className="hidden rounded-full bg-secondary/70 px-2.5 py-1 text-xs font-semibold text-muted-foreground sm:inline">
            {lesson.duration}
          </span>
          <ChevronDown
            className={cn("h-5 w-5 text-muted-foreground transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </span>
      </button>

      {open ? (
        <div className="border-t border-white/10 bg-background/40 px-4 py-5 sm:px-5">
          {lesson.videoUrl ? (
            <div className="mb-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={lesson.videoUrl}
                title={lesson.videoLabel ?? lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full"
              />
            </div>
          ) : lesson.videoLabel ? (
            <div className="mb-5 grid aspect-video place-items-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-6 text-center">
              <div>
                <PlayCircle className="mx-auto h-10 w-10 text-primary" aria-hidden />
                <p className="mt-2 text-sm font-bold text-foreground">
                  {courseContent.videoPlaceholderPrefix} {lesson.videoLabel}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {courseContent.videoPlaceholderNote}
                </p>
              </div>
            </div>
          ) : null}

          <div
            className={cn(
              "grid gap-4",
              lesson.aside?.length ? "lg:grid-cols-[1.25fr_0.75fr]" : "",
            )}
          >
            <div className="min-w-0 space-y-4">
              {lesson.main.map((block, blockIndex) => (
                <LessonBlockView key={blockIndex} block={block} />
              ))}
            </div>
            {lesson.aside?.length ? (
              <div className="min-w-0 space-y-4">
                {lesson.aside.map((block, blockIndex) => (
                  <LessonBlockView key={blockIndex} block={block} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}
