"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
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

/** ID phần tử để cuộn mượt tới đầu một bài học khi điều hướng. */
function lessonDomId(moduleId: string, lessonId: string) {
  return `lesson-${moduleId}-${lessonId}`;
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

/** Bài học chưa hoàn thành đầu tiên (theo thứ tự module → bài) để "học tiếp". */
function findNextLesson(modules: CourseDocModule[], completed: Set<string>) {
  for (const m of modules) {
    for (const l of m.lessons) {
      if (!completed.has(lessonKey(m.id, l.id))) {
        return { moduleId: m.id, lessonId: l.id, lessonTitle: l.title };
      }
    }
  }
  return null;
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
  const [openLessonId, setOpenLessonId] = useState<string | null>(
    modules[0]?.lessons[0]?.id ?? null,
  );
  const { completed, toggle } = useCourseProgress();

  const activeIndex = Math.max(
    0,
    modules.findIndex((m) => m.id === activeModuleId),
  );
  const activeModule = modules[activeIndex] ?? modules[0];
  const nextModule = modules[activeIndex + 1] ?? null;

  /** Cuộn mượt tới đầu một bài sau khi DOM đã cập nhật. */
  const scrollToLesson = (moduleId: string, lessonId: string) => {
    if (typeof document === "undefined") return;
    requestAnimationFrame(() => {
      document
        .getElementById(lessonDomId(moduleId, lessonId))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const selectModule = (id: string) => {
    setActiveModuleId(id);
    const target = modules.find((m) => m.id === id);
    setOpenLessonId(target?.lessons[0]?.id ?? null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Mở đúng một bài (có thể ở module khác) và cuộn tới nó. */
  const openLesson = (moduleId: string, lessonId: string) => {
    setActiveModuleId(moduleId);
    setOpenLessonId(lessonId);
    scrollToLesson(moduleId, lessonId);
  };

  const toggleLessonOpen = (lessonId: string) =>
    setOpenLessonId((current) => (current === lessonId ? null : lessonId));

  const totalLessons = modules.reduce((n, m) => n + m.lessons.length, 0);
  const doneLessons = modules.reduce(
    (n, m) => n + getModuleStats(m, completed).done,
    0,
  );
  const overallPercent = totalLessons
    ? Math.round((doneLessons / totalLessons) * 100)
    : 0;
  const nextUp = useMemo(
    () => findNextLesson(modules, completed),
    [modules, completed],
  );

  const body = (
    <div
      className={cn(
        "grid items-start gap-8 lg:grid-cols-[300px_1fr]",
        showChrome && "container pb-20 pt-8",
      )}
    >
      <ModuleSidebar
        modules={modules}
        activeModuleId={activeModule?.id ?? ""}
        completed={completed}
        onSelect={selectModule}
      />

      <main className="min-w-0">
        <section className="premium-dark relative overflow-hidden rounded-3xl border border-white/10 px-6 py-8 text-white sm:px-8">
          <div className="noise absolute inset-0" aria-hidden />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold">
              <Sparkles className="h-3.5 w-3.5 text-accent-strong" aria-hidden />
              {courseContent.badge}
            </span>
            <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Xin chào, {studentName} 👋
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

            {nextUp ? (
              <button
                type="button"
                onClick={() => openLesson(nextUp.moduleId, nextUp.lessonId)}
                className="group mt-5 flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3 text-left transition hover:border-white/30 hover:bg-white/[0.12]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <PlayCircle className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.08em] text-white/60">
                    {doneLessons > 0 ? "Tiếp tục học" : "Bắt đầu học"}
                  </span>
                  <span className="block truncate text-sm font-bold text-white">
                    {nextUp.lessonTitle}
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
            ) : (
              <div className="mt-5 flex max-w-md items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-emerald-100">
                <Trophy className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden />
                <p className="text-sm font-bold">
                  Bạn đã hoàn thành toàn bộ khóa học. Xuất sắc! 🎉
                </p>
              </div>
            )}
          </div>
        </section>

        {activeModule ? (
          <ModuleContent
            key={activeModule.id}
            module={activeModule}
            moduleIndex={activeIndex}
            totalModules={modules.length}
            completed={completed}
            openLessonId={openLessonId}
            nextModule={nextModule}
            onToggleOpen={toggleLessonOpen}
            onToggleLesson={toggle}
            onOpenLesson={openLesson}
            onSelectModule={selectModule}
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
        {modules.map((module, index) => {
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
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums",
                    finished
                      ? "bg-emerald-500/20 text-emerald-300"
                      : active
                        ? "bg-primary/25 text-primary"
                        : "bg-white/10 text-muted-foreground",
                  )}
                >
                  {finished ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    index + 1
                  )}
                </span>
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate text-sm font-bold",
                    active && "text-primary",
                  )}
                >
                  {module.shortTitle}
                </span>
              </span>
              <span className="mt-0.5 block truncate pl-7 text-xs text-muted-foreground">
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
  moduleIndex,
  totalModules,
  completed,
  openLessonId,
  nextModule,
  onToggleOpen,
  onToggleLesson,
  onOpenLesson,
  onSelectModule,
}: {
  module: CourseDocModule;
  moduleIndex: number;
  totalModules: number;
  completed: Set<string>;
  openLessonId: string | null;
  nextModule: CourseDocModule | null;
  onToggleOpen: (lessonId: string) => void;
  onToggleLesson: (key: string) => void;
  onOpenLesson: (moduleId: string, lessonId: string) => void;
  onSelectModule: (id: string) => void;
}) {
  const stats = getModuleStats(module, completed);
  const finished = stats.total > 0 && stats.done === stats.total;

  return (
    <section className="mt-6">
      <div className="card-surface rounded-3xl p-6 sm:p-7">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-strong">
          Module {moduleIndex + 1} / {totalModules}
        </span>
        <h2 className="mt-1.5 text-xl font-extrabold sm:text-2xl">{module.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <MetaPill
            icon={<Target className="h-3.5 w-3.5" aria-hidden />}
            text={`Kết quả: ${module.outcome}`}
          />
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
                finished
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
          const nextLesson = module.lessons[index + 1] ?? null;
          const prevLesson = module.lessons[index - 1] ?? null;
          return (
            <LessonCard
              key={lesson.id}
              domId={lessonDomId(module.id, lesson.id)}
              lesson={lesson}
              index={index}
              total={module.lessons.length}
              open={openLessonId === lesson.id}
              complete={completed.has(key)}
              onToggle={() => onToggleOpen(lesson.id)}
              onToggleComplete={() => onToggleLesson(key)}
              onPrev={
                prevLesson
                  ? () => onOpenLesson(module.id, prevLesson.id)
                  : undefined
              }
              onNext={
                nextLesson
                  ? () => {
                      if (!completed.has(key)) onToggleLesson(key);
                      onOpenLesson(module.id, nextLesson.id);
                    }
                  : undefined
              }
            />
          );
        })}
      </div>

      {finished ? (
        <ModuleDoneCard
          nextModule={nextModule}
          onSelectModule={onSelectModule}
        />
      ) : null}
    </section>
  );
}

/** Card chúc mừng khi học xong toàn bộ bài trong module. */
function ModuleDoneCard({
  nextModule,
  onSelectModule,
}: {
  nextModule: CourseDocModule | null;
  onSelectModule: (id: string) => void;
}) {
  return (
    <div className="mt-4 flex flex-col items-start gap-4 rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.08] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <p className="text-base font-extrabold text-emerald-100">
            Hoàn thành module — làm tốt lắm! 🎉
          </p>
          <p className="mt-0.5 text-sm text-emerald-200/80">
            {nextModule
              ? "Sẵn sàng cho module tiếp theo chưa?"
              : "Đây là module cuối cùng của khóa học."}
          </p>
        </div>
      </div>
      {nextModule ? (
        <button
          type="button"
          onClick={() => onSelectModule(nextModule.id)}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
        >
          Học module tiếp theo
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      ) : (
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500/15 px-5 py-2.5 text-sm font-bold text-emerald-200">
          <Trophy className="h-4 w-4" aria-hidden />
          Hoàn thành khóa học
        </span>
      )}
    </div>
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
  domId,
  lesson,
  index,
  total,
  open,
  complete,
  onToggle,
  onToggleComplete,
  onPrev,
  onNext,
}: {
  domId: string;
  lesson: CourseLesson;
  index: number;
  total: number;
  open: boolean;
  complete: boolean;
  onToggle: () => void;
  onToggleComplete: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  return (
    <article
      id={domId}
      className={cn(
        "card-surface scroll-mt-24 overflow-hidden rounded-2xl transition-colors",
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
          title={
            complete
              ? "Đã học xong — bấm để bỏ đánh dấu"
              : "Bấm để đánh dấu đã học xong"
          }
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition",
            complete
              ? "border-emerald-400 bg-emerald-500/90 text-white shadow-glow"
              : "border-white/20 text-transparent hover:border-primary hover:text-primary/70",
          )}
        >
          <Check className="h-4 w-4" aria-hidden />
        </button>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <span className="min-w-0 flex-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              Bài {index + 1}
              <span className="opacity-50"> / {total}</span>
            </span>
            <h3 className="text-[15px] font-bold leading-snug sm:text-base">
              {lesson.title}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              {lesson.description}
            </p>
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

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            {onPrev ? (
              <button
                type="button"
                onClick={onPrev}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:border-white/25 hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Bài trước
              </button>
            ) : (
              <span />
            )}

            {onNext ? (
              <button
                type="button"
                onClick={onNext}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90",
                  complete
                    ? "bg-white/10 text-foreground hover:bg-white/15"
                    : "bg-gradient-to-r from-primary to-accent",
                )}
              >
                {complete ? "Học bài tiếp theo" : "Hoàn thành & học tiếp"}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
            ) : (
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
            )}
          </div>
        </div>
      ) : null}
    </article>
  );
}
