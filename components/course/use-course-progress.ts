"use client";

import { useCallback, useEffect, useState } from "react";

/** Khóa lưu tiến độ trong localStorage (đổi hậu tố nếu cấu trúc thay đổi). */
const STORAGE_KEY = "hoc:completed-lessons:v1";

/** Tạo khóa duy nhất cho một bài học (gộp id module để tránh trùng). */
export function lessonKey(moduleId: string, lessonId: string) {
  return `${moduleId}::${lessonId}`;
}

/**
 * Theo dõi các bài học đã hoàn thành, lưu ngay trên máy học viên (localStorage).
 * Không cần đăng nhập server — mỗi trình duyệt giữ tiến độ riêng.
 */
export function useCourseProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  // Đọc localStorage sau khi mount để không lệch hydrate (server không có localStorage).
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const ids = raw ? (JSON.parse(raw) as unknown) : null;
      if (Array.isArray(ids)) {
        setCompleted(new Set(ids.filter((v): v is string => typeof v === "string")));
      }
    } catch {
      // localStorage không dùng được (chế độ riêng tư…) → bỏ qua, tiến độ để trống.
    }
    setReady(true);
  }, []);

  const toggle = useCallback((key: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { completed, ready, toggle };
}
