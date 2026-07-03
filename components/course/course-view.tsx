"use client";

import { useState } from "react";
import Link from "next/link";
<<<<<<< HEAD
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Gauge,
  MessageCircle,
  PlayCircle,
  Target,
} from "lucide-react";
=======
import { ArrowLeft, ChevronDown, MessageCircle, PlayCircle, Target } from "lucide-react";
>>>>>>> e7d51c0f0b0ad2a93f1966b058fa90b47148e10a
import { LessonBlockView } from "@/components/course/lesson-blocks";
import { lessonKey, useCourseProgress } from "@/components/course/use-course-progress";
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
  /**
   * Danh sách module hiển thị. Mặc định lấy từ config/course; trang /hoc truyền
   * bản đã lưu trong DB (admin sửa được).
   */
  modules?: CourseDocModule[];
}

/** Tiến độ hoàn thành của một module (số bài đã học / tổng số bài). */
function getModuleStats(module: CourseDocModule, completed: Set<string>) {
  const total = module.lessons.length;
  const done = module.lessons.reduce(
    (n, l) => (completed.has(lessonKey(module.id, l.id)) ? n + 1 : n),
    0,
  );
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

/**
 * Khu vực học: sidebar chọn module, danh sách bài học dạng accordion.
 * Theo dõi tiến độ ngay trên máy học viên (localStorage) để cảm giác học có
 * mục tiêu, có giá trị — thay cho hiển thị "số phút" từng bài.
 */
export function CourseView({
  studentName,
  showChrome = true,
  modules = courseModules,
}: CourseViewProps) {
  const [activeModuleId, setActiveModuleId] = useState(modules[0]?.id ?? "");
  const { completed, toggle } = useCourseProgress();
  const activeModule =
    modules.find((m) => m.id === activeModuleId) ?? modules[0];

  const selectModule = (id: string) => {
    setActiveModuleId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);
  const doneLessons = modules.reduce(
    (n, m) => n + getModuleStats(m, completed).done,
    0,
  );
  const overallPercent = totalLessons
    ? Math.round((doneLessons / totalLessons) * 100)
    : 0;

  const body = (
    <div
      className={cn(
        "grid items-start gap-8 lg:grid-cols-[300px_1fr]",
        showChrome && "container pb-20 pt-8",
      )}
    >
      <ModuleSidebar
        modules={modules}
        activeModuleId={activeModuleId}
        completed={completed}
        onSelect={selectModule}
      />

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

            <div className="mt-6 max-w-md">
              <div className="flex items-center justify-between text-xs font-semibold text-white/80">
                <span>Tiến độ học của bạn</span>
                <span className="tabular-nums">
                  {doneLessons}/{totalLessons} bài · {overallPercent}%
                </span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={overallPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Tiến độ toàn khóa học"
                className="mt-2 h-2 overflow-hidden rounded-full bg-white/15"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-500 ease-out"
                  style={{ width: `${overallPercent}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {activeModule ? (
          <ModuleContent
            key={activeModule.id}
            module={activeModule}
            completed={completed}
            onToggleLesson={toggle}
          />
        ) : (
          <p className="mt-6 rounded-3xl border border-dashed border-white/15 p-10 text-center text-sm text-muted-foreground">
            Tài liệu đang được cập nhật. Vui lòng quay lại sau.
          </p>
        )}
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
  modules,
  activeModuleId,
  completed,
  onSelect,
}: {
  modules: CourseDocModule[];
  activeModuleId: string;
  completed: Set<string>;
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-24">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {modules.length} Module
      </p>
      <nav
        aria-label="Danh sách module"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {modules.map((module) => {
          const active = module.id === activeModuleId;
          const stats = getModuleStats(module, completed);
          const finished = stats.total > 0 && stats.done === stats.total;
          return (
            <button
              key={module.id}
              type="button"
              onClick={() => onSelect(module.id)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "w-56 shrink-0 rounded-2xl border px-4 py-3 text-left transition lg:w-full",
                active
                  ? "border-primary/50 bg-primary/15 text-foreground shadow-glow"
                  : "border-white/10 bg-card text-muted-foreground hover:border-white/20 hover:text-foreground",
              )}
            >
              <span className="flex items-center gap-2">
                <span className={cn("min-w-0 flex-1 truncate text-sm font-bold", active && "text-primary")}>
                  {module.shortTitle}
                </span>
                {finished && (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                )}
              </span>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                {module.tagline}
              </span>
              <span className="mt-2.5 flex items-center gap-2">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className={cn(
                      "block h-full rounded-full transition-[width] duration-500 ease-out",
                      finished
                        ? "bg-emerald-400"
                        : "bg-gradient-to-r from-primary to-accent",
                    )}
                    style={{ width: `${stats.percent}%` }}
                  />
                </span>
                <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">
                  {stats.done}/{stats.total}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

/** Nội dung một module: phần đầu + danh sách bài học accordion. */
function ModuleContent({
  module,
  completed,
  onToggleLesson,
}: {
  module: CourseDocModule;
  completed: Set<string>;
  onToggleLesson: (key: string) => void;
}) {
  // Mặc định mở bài đầu tiên của module
  const [openLessonId, setOpenLessonId] = useState<string | null>(
    module.lessons[0]?.id ?? null,
  );
  const stats = getModuleStats(module, completed);

  return (
    <section className="mt-6">
      <div className="card-surface rounded-3xl p-6 sm:p-7">
        <h2 className="text-xl font-extrabold sm:text-2xl">{module.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <MetaPill icon={<Target className="h-3.5 w-3.5" aria-hidden />} text={`Kết quả: ${module.outcome}`} />
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-background/40 p-4">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-muted-foreground">Tiến độ module này</span>
            <span className="tabular-nums text-foreground">
              {stats.done}/{stats.total} bài · {stats.percent}%
            </span>
          </div>
          <div
            role="progressbar"
            aria-valuenow={stats.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Tiến độ ${module.shortTitle}`}
            className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"
          >
            <div
              className={cn(
                "h-full rounded-full transition-[width] duration-500 ease-out",
                stats.done === stats.total && stats.total > 0
                  ? "bg-emerald-400"
                  : "bg-gradient-to-r from-primary to-accent",
              )}
              style={{ width: `${stats.percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3.5">
        {module.lessons.map((lesson, index) => {
          const key = lessonKey(module.id, lesson.id);
          return (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              index={index}
              open={openLessonId === lesson.id}
              complete={completed.has(key)}
              onToggle={() =>
                setOpenLessonId((current) => (current === lesson.id ? null : lesson.id))
              }
              onToggleComplete={() => onToggleLesson(key)}
            />
          );
        })}
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

/** Một bài học dạng accordion, kèm nút đánh dấu đã học xong. */
function LessonCard({
  lesson,
  index,
  open,
  complete,
  onToggle,
  onToggleComplete,
}: {
  lesson: CourseLesson;
  index: number;
  open: boolean;
  complete: boolean;
  onToggle: () => void;
  onToggleComplete: () => void;
}) {
  return (
    <article
      className={cn(
        "card-surface overflow-hidden rounded-2xl transition-colors",
        complete && "border-emerald-400/30",
      )}
    >
      <div className="flex items-center gap-3.5 px-4 py-4 sm:px-5">
        <button
          type="button"
          onClick={onToggleComplete}
          aria-pressed={complete}
          aria-label={
            complete
              ? `Bỏ đánh dấu bài ${index + 1}`
              : `Đánh dấu bài ${index + 1} đã học xong`
          }
          title={complete ? "Đã học xong — bấm để bỏ đánh dấu" : "Bấm để đánh dấu đã học xong"}
          className={cn(
            "group/badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition",
            complete
              ? "bg-emerald-500/90 text-white shadow-glow"
              : "bg-primary/15 text-primary hover:bg-primary/25",
          )}
        >
          {complete ? (
            <Check className="h-5 w-5" aria-hidden />
          ) : (
            <>
              <span className="group-hover/badge:hidden">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Check className="hidden h-5 w-5 group-hover/badge:block" aria-hidden />
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <span className="min-w-0 flex-1">
            <h3 className="text-[15px] font-bold leading-snug sm:text-base">{lesson.title}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{lesson.description}</p>
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-background/40 px-4 py-5 sm:px-5">
          {lesson.videoUrl ? (
            <div className="mb-5 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={lesson.videoUrl}
                title={lesson.videoLabel ?? lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // Không cho khung video điều hướng trang cha (chống chuyển hướng
                // độc hại nếu lỡ dán nhầm URL); URL đã được lọc chỉ còn http(s).
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
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

          <div className="mt-6 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onToggleComplete}
              aria-pressed={complete}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition",
                complete
                  ? "bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25"
                  : "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90",
              )}
            >
              {complete ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Đã hoàn thành — bấm để bỏ đánh dấu
                </>
              ) : (
                <>
                  <Check className="h-4 w-4" aria-hidden />
                  Đánh dấu đã học xong
                </>
              )}
            </button>
          </div>
        </div>
      ) : null}
    </article>
  );
}
