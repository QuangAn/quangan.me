/**
 * Types cho tài liệu học (khu vực học viên /hoc).
 * Toàn bộ nội dung bài học nằm trong config/course — component chỉ render.
 */

/** Khối nội dung trong một bài học. */
export type LessonBlock =
  | {
      /** Thẻ nội dung: đoạn văn + danh sách (ul hoặc ol). */
      type: "card";
      title: string;
      body?: string[];
      list?: string[];
      /** true → danh sách đánh số thứ tự. */
      ordered?: boolean;
    }
  | {
      /** Prompt mẫu cho học viên copy gửi AI. */
      type: "prompt";
      title: string;
      intro?: string;
      prompt: string;
      /** Nhãn nút copy, mặc định "Copy prompt". */
      copyLabel?: string;
    }
  | {
      /** Lệnh terminal / đoạn mã ngắn. */
      type: "code";
      title?: string;
      code: string;
      note?: string;
    }
  | {
      /** Ghi chú nổi bật. */
      type: "note";
      tone: "info" | "success" | "warning";
      label?: string;
      content: string;
    }
  | {
      /** Câu hỏi thường gặp / lỗi thường gặp (thu gọn được). */
      type: "faq";
      title?: string;
      items: { question: string; answer: string }[];
    }
  | {
      /** Lưới file/document (vd bộ hồ sơ dự án cho AI). */
      type: "files";
      title?: string;
      items: { emoji: string; name: string; description: string }[];
    }
  | {
      /** Nút link ngoài (trang tải phần mềm, dịch vụ...). */
      type: "links";
      title?: string;
      items: { label: string; href: string }[];
    };

/** Một bài học trong module. */
export interface CourseLesson {
  id: string;
  title: string;
  description: string;
  /** Thời lượng ước tính, vd "8 phút". */
  duration: string;
  /** Tiêu đề video bài học (hiện placeholder khi chưa gắn videoUrl). */
  videoLabel?: string;
  /** Link video (YouTube embed) — gắn sau khi quay xong. */
  videoUrl?: string;
  /** Cột nội dung chính. */
  main: LessonBlock[];
  /** Cột phụ bên phải (ghi chú, lỗi thường gặp). */
  aside?: LessonBlock[];
}

/** Một module trong tài liệu khóa học. */
export interface CourseDocModule {
  id: string;
  order: number;
  /** Tiêu đề đầy đủ hiển thị ở đầu module. */
  title: string;
  /** Tiêu đề ngắn cho sidebar. */
  shortTitle: string;
  /** Mô tả ngắn dưới tiêu đề sidebar. */
  tagline: string;
  /** Mô tả module hiển thị ở phần đầu. */
  description: string;
  duration: string;
  level: string;
  /** Kết quả học viên đạt được sau module. */
  outcome: string;
  lessons: CourseLesson[];
}
