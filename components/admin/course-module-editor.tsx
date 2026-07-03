"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  GripVertical,
  Loader,
  Plus,
  Trash2,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminFetch } from "@/lib/admin-auth";
import type { CourseDocModule, CourseLesson } from "@/types/course";

/** Bài học ở dạng form: main/aside giữ dưới dạng chuỗi JSON để sửa nâng cao. */
interface DraftLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoLabel: string;
  videoUrl: string;
  mainText: string;
  asideText: string;
}

interface DraftModule {
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  outcome: string;
  lessons: DraftLesson[];
}

function toDraftLesson(lesson: CourseLesson): DraftLesson {
  return {
    id: lesson.id,
    title: lesson.title ?? "",
    description: lesson.description ?? "",
    duration: lesson.duration ?? "",
    videoLabel: lesson.videoLabel ?? "",
    videoUrl: lesson.videoUrl ?? "",
    mainText: JSON.stringify(lesson.main ?? [], null, 2),
    asideText: lesson.aside?.length ? JSON.stringify(lesson.aside, null, 2) : "",
  };
}

function toDraft(module: CourseDocModule): DraftModule {
  return {
    title: module.title,
    shortTitle: module.shortTitle,
    tagline: module.tagline,
    description: module.description,
    duration: module.duration,
    level: module.level,
    outcome: module.outcome,
    lessons: module.lessons.map(toDraftLesson),
  };
}

const textareaClass =
  "w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500";

interface CourseModuleEditorProps {
  module: CourseDocModule;
  /** Gọi sau khi lưu thành công để cha refetch (đồng bộ sidebar). */
  onSaved: () => void;
  onRequestDelete: () => void;
}

/** Trình sửa một module tài liệu: thông tin module + danh sách bài học. */
export function CourseModuleEditor({
  module,
  onSaved,
  onRequestDelete,
}: CourseModuleEditorProps) {
  const initial = useMemo(() => toDraft(module), [module]);
  const [draft, setDraft] = useState<DraftModule>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const setField = <K extends keyof DraftModule>(
    key: K,
    value: DraftModule[K],
  ) => setDraft((prev) => ({ ...prev, [key]: value }));

  const setLesson = (index: number, patch: Partial<DraftLesson>) =>
    setDraft((prev) => ({
      ...prev,
      lessons: prev.lessons.map((l, i) => (i === index ? { ...l, ...patch } : l)),
    }));

  const addLesson = () =>
    setDraft((prev) => ({
      ...prev,
      lessons: [
        ...prev.lessons,
        {
          id: `lesson-${crypto.randomUUID()}`,
          title: "Bài học mới",
          description: "",
          duration: "",
          videoLabel: "",
          videoUrl: "",
          mainText: "[]",
          asideText: "",
        },
      ],
    }));

  const removeLesson = (index: number) =>
    setDraft((prev) => ({
      ...prev,
      lessons: prev.lessons.filter((_, i) => i !== index),
    }));

  const moveLesson = (index: number, dir: -1 | 1) =>
    setDraft((prev) => {
      const target = index + dir;
      if (target < 0 || target >= prev.lessons.length) return prev;
      const lessons = [...prev.lessons];
      [lessons[index], lessons[target]] = [lessons[target], lessons[index]];
      return { ...prev, lessons };
    });

  /** Ghép draft → payload, parse JSON main/aside. Trả về payload hoặc lỗi. */
  const buildPayload = (): { lessons: CourseLesson[] } | { errorMsg: string } => {
    const lessons: CourseLesson[] = [];
    for (let i = 0; i < draft.lessons.length; i++) {
      const l = draft.lessons[i];
      let main: unknown;
      let aside: unknown = [];
      try {
        main = JSON.parse(l.mainText || "[]");
      } catch {
        return { errorMsg: `Bài ${i + 1}: JSON "Nội dung chính" không hợp lệ.` };
      }
      if (l.asideText.trim()) {
        try {
          aside = JSON.parse(l.asideText);
        } catch {
          return { errorMsg: `Bài ${i + 1}: JSON "Cột phụ" không hợp lệ.` };
        }
      }
      if (!Array.isArray(main) || !Array.isArray(aside)) {
        return { errorMsg: `Bài ${i + 1}: Nội dung phải là mảng JSON ([...]).` };
      }
      const lesson: CourseLesson = {
        id: l.id,
        title: l.title.trim(),
        description: l.description.trim(),
        duration: l.duration.trim(),
        main: main as CourseLesson["main"],
      };
      if (l.videoLabel.trim()) lesson.videoLabel = l.videoLabel.trim();
      if (l.videoUrl.trim()) lesson.videoUrl = l.videoUrl.trim();
      if ((aside as unknown[]).length > 0) {
        lesson.aside = aside as CourseLesson["aside"];
      }
      lessons.push(lesson);
    }
    return { lessons };
  };

  const handleSave = async () => {
    setError("");
    setMessage("");
    if (!draft.title.trim()) {
      setError("Tiêu đề module không được để trống.");
      return;
    }
    const payload = buildPayload();
    if ("errorMsg" in payload) {
      setError(payload.errorMsg);
      return;
    }

    setSaving(true);
    try {
      const res = await adminFetch(`/api/admin/course/${module.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: draft.title,
          shortTitle: draft.shortTitle,
          tagline: draft.tagline,
          description: draft.description,
          duration: draft.duration,
          level: draft.level,
          outcome: draft.outcome,
          lessons: payload.lessons,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Không lưu được thay đổi.");
      setMessage("Đã lưu thay đổi.");
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không lưu được thay đổi.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
          {error}
        </div>
      )}
      {message && (
        <div className="rounded border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
          {message}
        </div>
      )}

      {/* Thông tin module */}
      <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Tiêu đề module" required>
            <Input
              value={draft.title}
              onChange={(e) => setField("title", e.target.value)}
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
          <Field label="Tiêu đề ngắn (sidebar)">
            <Input
              value={draft.shortTitle}
              onChange={(e) => setField("shortTitle", e.target.value)}
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
          <Field label="Tagline (mô tả ngắn sidebar)">
            <Input
              value={draft.tagline}
              onChange={(e) => setField("tagline", e.target.value)}
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
          <Field label="Thời lượng">
            <Input
              value={draft.duration}
              onChange={(e) => setField("duration", e.target.value)}
              placeholder="45–60 phút"
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
          <Field label="Độ khó">
            <Input
              value={draft.level}
              onChange={(e) => setField("level", e.target.value)}
              placeholder="Dễ"
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
          <Field label="Kết quả đạt được">
            <Input
              value={draft.outcome}
              onChange={(e) => setField("outcome", e.target.value)}
              className="border-slate-700 bg-slate-900/50 text-white"
            />
          </Field>
        </div>
        <Field label="Mô tả module">
          <textarea
            value={draft.description}
            onChange={(e) => setField("description", e.target.value)}
            rows={2}
            className={textareaClass}
          />
        </Field>
      </div>

      {/* Danh sách bài học */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Bài học ({draft.lessons.length})
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addLesson}
          >
            <Plus className="h-4 w-4" />
            Thêm bài học
          </Button>
        </div>

        {draft.lessons.length === 0 && (
          <p className="rounded-lg border border-dashed border-slate-700 p-6 text-center text-sm text-slate-500">
            Chưa có bài học. Bấm &quot;Thêm bài học&quot; để bắt đầu.
          </p>
        )}

        {draft.lessons.map((lesson, index) => (
          <LessonRow
            key={lesson.id}
            lesson={lesson}
            index={index}
            total={draft.lessons.length}
            onChange={(patch) => setLesson(index, patch)}
            onMove={(dir) => moveLesson(index, dir)}
            onRemove={() => removeLesson(index)}
          />
        ))}
      </div>

      {/* Hành động */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onRequestDelete}
          className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
        >
          <Trash2 className="h-4 w-4" />
          Xóa module
        </Button>
        <Button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600"
        >
          {saving && <Loader className="h-4 w-4 animate-spin" />}
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-slate-300">
        {label}
        {required && <span className="text-red-400"> *</span>}
      </Label>
      {children}
    </div>
  );
}

function LessonRow({
  lesson,
  index,
  total,
  onChange,
  onMove,
  onRemove,
}: {
  lesson: DraftLesson;
  index: number;
  total: number;
  onChange: (patch: Partial<DraftLesson>) => void;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 space-y-3">
      <div className="flex items-start gap-3">
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-bold text-indigo-300">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <Input
            value={lesson.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Tiêu đề bài học"
            className="border-slate-700 bg-slate-900/50 font-semibold text-white"
          />
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => onMove(-1)}
            disabled={index === 0}
            title="Lên"
            className="rounded p-1.5 text-slate-400 transition hover:bg-slate-700 hover:text-white disabled:opacity-30"
          >
            <GripVertical className="h-4 w-4 -rotate-90" />
          </button>
          <button
            type="button"
            onClick={() => onMove(1)}
            disabled={index === total - 1}
            title="Xuống"
            className="rounded p-1.5 text-slate-400 transition hover:bg-slate-700 hover:text-white disabled:opacity-30"
          >
            <GripVertical className="h-4 w-4 rotate-90" />
          </button>
          <button
            type="button"
            onClick={onRemove}
            title="Xóa bài học"
            className="rounded p-1.5 text-red-400 transition hover:bg-red-500/10"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Mô tả ngắn">
          <Input
            value={lesson.description}
            onChange={(e) => onChange({ description: e.target.value })}
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </Field>
        <Field label="Thời lượng">
          <Input
            value={lesson.duration}
            onChange={(e) => onChange({ duration: e.target.value })}
            placeholder="8 phút"
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </Field>
        <Field label="Nhãn video">
          <Input
            value={lesson.videoLabel}
            onChange={(e) => onChange({ videoLabel: e.target.value })}
            placeholder="Tiêu đề hiển thị khi chưa có video"
            className="border-slate-700 bg-slate-900/50 text-white"
          />
        </Field>
        <Field label="Link video (YouTube embed)">
          <div className="relative">
            <Video className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input
              value={lesson.videoUrl}
              onChange={(e) => onChange({ videoUrl: e.target.value })}
              placeholder="https://www.youtube.com/embed/..."
              className="border-slate-700 bg-slate-900/50 pl-9 text-white"
            />
          </div>
        </Field>
      </div>

      <button
        type="button"
        onClick={() => setShowAdvanced((v) => !v)}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-slate-200"
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`}
        />
        Nội dung chi tiết (nâng cao — JSON)
      </button>

      {showAdvanced && (
        <div className="space-y-3 rounded-xl border border-slate-700 bg-slate-900/40 p-3">
          <p className="text-xs text-slate-500">
            Định dạng khối nội dung (mảng JSON). Loại khối hỗ trợ: card, prompt,
            code, note, faq, files, links. Để trống cột phụ nếu không dùng.
          </p>
          <Field label="Nội dung chính (main)">
            <textarea
              value={lesson.mainText}
              onChange={(e) => onChange({ mainText: e.target.value })}
              rows={8}
              spellCheck={false}
              className={`${textareaClass} font-mono text-xs`}
            />
          </Field>
          <Field label="Cột phụ (aside)">
            <textarea
              value={lesson.asideText}
              onChange={(e) => onChange({ asideText: e.target.value })}
              rows={5}
              spellCheck={false}
              placeholder="[]"
              className={`${textareaClass} font-mono text-xs`}
            />
          </Field>
        </div>
      )}
    </div>
  );
}
