"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ExternalLink, Loader, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { adminFetch } from "@/lib/admin-auth";
import { ConfirmDialog } from "@/components/admin/account-form-modal";
import { CourseModuleEditor } from "@/components/admin/course-module-editor";
import type { CourseDocModule } from "@/types/course";

type AdminCourseReason = "not-configured" | "db-error";

export default function AdminCoursePage() {
  const [modules, setModules] = useState<CourseDocModule[]>([]);
  const [persisted, setPersisted] = useState(true);
  const [reason, setReason] = useState<AdminCourseReason | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<CourseDocModule | null>(null);

  const fetchModules = useCallback(async (selectId?: string) => {
    try {
      const res = await adminFetch("/api/admin/course");
      if (!res.ok) throw new Error("Không tải được tài liệu.");
      const data = await res.json();
      const list: CourseDocModule[] = data.data ?? [];
      setModules(list);
      setPersisted(data.persisted !== false);
      setReason(data.persisted === false ? (data.reason ?? "db-error") : null);
      setActiveId((current) => {
        if (selectId && list.some((m) => m.id === selectId)) return selectId;
        if (current && list.some((m) => m.id === current)) return current;
        return list[0]?.id ?? null;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không tải được tài liệu.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const handleCreate = async () => {
    setError("");
    setCreating(true);
    try {
      const res = await adminFetch("/api/admin/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Module mới" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Không tạo được module.");
      await fetchModules(data.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không tạo được module.");
    } finally {
      setCreating(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setError("");
    try {
      const res = await adminFetch(`/api/admin/course/${deleteTarget.id}`, {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Không xóa được module.");
      await fetchModules();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Không xóa được module.");
    } finally {
      setDeleteTarget(null);
    }
  };

  const activeModule = modules.find((m) => m.id === activeId) ?? null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">Tài liệu khóa học</h1>
          <p className="text-slate-400">
            Quản lý module, bài học và video học viên xem tại{" "}
            <Link
              href="/hoc"
              target="_blank"
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
            >
              /hoc <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
        <Button
          onClick={handleCreate}
          disabled={creating}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600"
        >
          {creating ? (
            <Loader className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Thêm module
        </Button>
      </div>

      {!persisted && (
        <div className="rounded border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-300">
          {reason === "db-error" ? (
            <>
              Đang hiển thị nội dung mặc định (giống hệt học viên xem tại /hoc) vì
              chưa đọc được cơ sở dữ liệu tài liệu. Thường do bảng{" "}
              <code className="rounded bg-amber-500/15 px-1">course_modules</code>{" "}
              chưa được tạo. Hãy deploy (push lên nhánh <code>main</code>) để chạy
              migration tạo bảng, hoặc chạy thủ công{" "}
              <code className="rounded bg-amber-500/15 px-1">supabase/schema.sql</code>{" "}
              trong Supabase → SQL Editor. Sau khi bảng có, tải lại trang là chỉnh
              sửa lưu được.
            </>
          ) : (
            <>
              Chưa cấu hình cơ sở dữ liệu (Supabase). Bạn đang xem nội dung mặc
              định — các thay đổi sẽ không lưu được cho tới khi cấu hình xong.
            </>
          )}
        </div>
      )}

      {error && (
        <div className="rounded border border-red-500/20 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader className="h-6 w-6 animate-spin text-cyan-400" />
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-[280px_1fr]">
          {/* Danh sách module */}
          <Card className="border-slate-700 bg-slate-800/50 p-3">
            <nav className="space-y-1.5">
              {modules.map((m, index) => {
                const active = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    className={`flex w-full items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left transition ${
                      active
                        ? "border-indigo-500/50 bg-indigo-500/15"
                        : "border-transparent hover:bg-slate-700/50"
                    }`}
                  >
                    <BookOpen
                      className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-indigo-300" : "text-slate-500"}`}
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-white">
                        {m.shortTitle || m.title || `Module ${index + 1}`}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {m.lessons.length} bài học
                      </span>
                    </span>
                  </button>
                );
              })}
              {modules.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-slate-500">
                  Chưa có module nào.
                </p>
              )}
            </nav>
          </Card>

          {/* Trình sửa module */}
          <div className="min-w-0">
            {activeModule ? (
              <CourseModuleEditor
                key={activeModule.id}
                module={activeModule}
                onSaved={() => fetchModules(activeModule.id)}
                onRequestDelete={() => setDeleteTarget(activeModule)}
              />
            ) : (
              <Card className="border-slate-700 bg-slate-800/50 p-10 text-center text-slate-400">
                Chọn một module bên trái để sửa, hoặc bấm &quot;Thêm module&quot;.
              </Card>
            )}
          </div>
        </div>
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Xóa module tài liệu"
          message={
            <>
              Xóa module{" "}
              <span className="font-semibold text-white">
                {deleteTarget.title}
              </span>{" "}
              cùng toàn bộ bài học bên trong? Hành động này không thể hoàn tác.
            </>
          }
          confirmLabel="Xóa"
          onConfirm={confirmDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
