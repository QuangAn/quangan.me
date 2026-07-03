import { randomUUID } from "node:crypto";
import type { CourseLesson, LessonBlock } from "@/types/course";

/**
 * Chuẩn hóa dữ liệu bài học/khối nội dung tài liệu khóa học.
 *
 * Nội dung này do admin nhập tự do (kể cả JSON thô ở phần nâng cao) rồi lưu vào
 * jsonb Supabase và render cho học viên tại /hoc. Nếu để lọt khối sai định dạng
 * (thiếu trường, sai kiểu, type lạ) thì trang học viên có thể crash. Hàm này
 * được gọi ở CẢ hai biên: khi ghi (admin lưu) và khi đọc (render /hoc) nên dù
 * dữ liệu vào bằng đường nào (API, seed, sửa trực tiếp DB) cũng luôn an toàn.
 * Chỉ dùng ở server.
 */

const asString = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

const asStringArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];

const asArray = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

/** Chỉ cho phép URL http(s) — chặn javascript:/data: trong iframe/href. */
export function safeUrl(v: unknown): string {
  const s = asString(v).trim();
  if (!s) return "";
  try {
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:" ? s : "";
  } catch {
    return "";
  }
}

/** Chuẩn hóa một khối theo `type`; trả null nếu không hợp lệ → bị loại bỏ. */
function normalizeBlock(raw: unknown): LessonBlock | null {
  if (typeof raw !== "object" || raw === null) return null;
  const b = raw as Record<string, unknown>;
  const title = asString(b.title);

  switch (b.type) {
    case "card": {
      const cardTitle = title;
      if (!cardTitle) return null;
      const body = asStringArray(b.body);
      const list = asStringArray(b.list);
      return {
        type: "card",
        title: cardTitle,
        ...(body.length ? { body } : {}),
        ...(list.length ? { list } : {}),
        ...(b.ordered === true ? { ordered: true } : {}),
      };
    }
    case "prompt": {
      const prompt = asString(b.prompt);
      if (!prompt) return null;
      const intro = asString(b.intro);
      const copyLabel = asString(b.copyLabel);
      return {
        type: "prompt",
        title,
        prompt,
        ...(intro ? { intro } : {}),
        ...(copyLabel ? { copyLabel } : {}),
      };
    }
    case "code": {
      const code = asString(b.code);
      if (!code) return null;
      const note = asString(b.note);
      return {
        type: "code",
        code,
        ...(title ? { title } : {}),
        ...(note ? { note } : {}),
      };
    }
    case "note": {
      const content = asString(b.content);
      if (!content) return null;
      const tone =
        b.tone === "success" || b.tone === "warning" ? b.tone : "info";
      const label = asString(b.label);
      return {
        type: "note",
        tone,
        content,
        ...(label ? { label } : {}),
      };
    }
    case "faq": {
      const items = asArray(b.items)
        .map((it) => {
          const o = (it ?? {}) as Record<string, unknown>;
          return { question: asString(o.question), answer: asString(o.answer) };
        })
        .filter((it) => it.question || it.answer);
      return { type: "faq", items, ...(title ? { title } : {}) };
    }
    case "files": {
      const items = asArray(b.items)
        .map((it) => {
          const o = (it ?? {}) as Record<string, unknown>;
          return {
            emoji: asString(o.emoji),
            name: asString(o.name),
            description: asString(o.description),
          };
        })
        .filter((it) => it.name || it.description);
      return { type: "files", items, ...(title ? { title } : {}) };
    }
    case "links": {
      const items = asArray(b.items)
        .map((it) => {
          const o = (it ?? {}) as Record<string, unknown>;
          return { label: asString(o.label), href: safeUrl(o.href) };
        })
        .filter((it) => it.label && it.href);
      return { type: "links", items, ...(title ? { title } : {}) };
    }
    default:
      return null;
  }
}

function normalizeBlocks(raw: unknown): LessonBlock[] {
  return asArray(raw)
    .map(normalizeBlock)
    .filter((b): b is LessonBlock => b !== null);
}

/** Chuẩn hóa mảng bài học gửi từ admin hoặc đọc từ DB về dạng an toàn để render. */
export function normalizeLessons(raw: unknown): CourseLesson[] {
  return asArray(raw).map((item) => {
    const l = (item ?? {}) as Record<string, unknown>;
    const lesson: CourseLesson = {
      id: asString(l.id) || `lesson-${randomUUID()}`,
      title: asString(l.title),
      description: asString(l.description),
      duration: asString(l.duration),
      main: normalizeBlocks(l.main),
    };
    const videoLabel = asString(l.videoLabel);
    if (videoLabel) lesson.videoLabel = videoLabel;
    const videoUrl = safeUrl(l.videoUrl);
    if (videoUrl) lesson.videoUrl = videoUrl;
    const aside = normalizeBlocks(l.aside);
    if (aside.length) lesson.aside = aside;
    return lesson;
  });
}
