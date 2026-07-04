# Spec viết nội dung bài học (để đưa cho ChatGPT)

File này KHÔNG được import — nó chỉ là tài liệu tham chiếu.
Nội dung bài học thật nằm ở `config/course/module-XX.ts` và được render bởi
`components/course/lesson-blocks.tsx`. ChatGPT phải xuất ra **object đúng schema**
dưới đây, **KHÔNG viết HTML**.

---

## 1) Prompt để dán vào ChatGPT

> Copy nguyên khối dưới đây, thay phần `[...]`, và dán 1 bài mẫu có sẵn (vd `m2-b1`)
> vào chỗ "Bài mẫu" để nó bắt chước giọng + cấu trúc.

```
Bạn là biên tập viên khóa học "AI Website Builder" (dạy người KHÔNG biết code tự làm
website bằng AI). Viết nội dung MỘT bài học bằng tiếng Việt, giọng gần gũi, thủ thỉ,
dùng ví dụ đời thường, câu ngắn dễ đọc. Người học là chủ shop / freelancer / người mới.

YÊU CẦU ĐẦU RA:
- Xuất DUY NHẤT một object JSON đúng type `CourseLesson` bên dưới. KHÔNG viết HTML,
  KHÔNG markdown, KHÔNG giải thích gì thêm ngoài object.
- Dùng dấu ngoặc kép, escape đúng chuẩn JSON.

TYPE:
CourseLesson = {
  id: string;              // vd "m3-b1" = module 3, bài 1
  title: string;
  description: string;     // 1 câu tóm bài
  duration: string;        // vd "9 phút"
  videoLabel: string;      // tiêu đề video, 1 dòng
  main: Block[];           // cột chính
  aside: Block[];          // cột phụ bên phải (ghi chú, checklist)
}

Block là MỘT trong các dạng sau (dùng đúng field, không thêm field lạ):
- { "type":"note", "tone":"info"|"success"|"warning", "label":string, "content":string }
- { "type":"card", "title":string, "body"?:string[], "list"?:string[], "ordered"?:boolean }
- { "type":"prompt", "title":string, "intro"?:string, "prompt":string, "copyLabel"?:string }
- { "type":"code", "title"?:string, "code":string, "note"?:string }
- { "type":"faq", "title"?:string, "items":[{"question":string,"answer":string}] }
- { "type":"files", "title"?:string, "items":[{"emoji":string,"name":string,"description":string}] }
- { "type":"links", "title"?:string, "items":[{"label":string,"href":string}] }

MỖI BLOCK DÙNG KHI NÀO:
- note: nhấn mạnh 1 ý. tone "success" = mục tiêu/động viên, "info" = mẹo/giải thích,
  "warning" = cảnh báo đừng làm sai.
- card: thẻ nội dung chính. "body" = các đoạn văn; "list" = gạch đầu dòng;
  thêm "ordered":true nếu là các BƯỚC theo thứ tự.
- prompt: prompt mẫu cho học viên copy gửi AI (có nút Copy). "prompt" là nội dung copy.
- code: lệnh terminal / đoạn mã ngắn (có nút Copy).
- faq: câu hỏi thường gặp, thu gọn được.
- files: lưới file/tài liệu (mỗi item có emoji).
- links: nút link ngoài (trang tải phần mềm, dịch vụ...).

QUY ƯỚC BẮT BUỘC (giữ đồng bộ với các module khác):
1. main[] MỞ ĐẦU bằng: { "type":"note","tone":"success","label":"Mục tiêu bài này","content":"..." }
2. main[] có 1 card tiêu đề "Sai lầm người mới hay mắc" (list các lỗi hay gặp).
3. aside[] KẾT THÚC bằng card "Checklist cuối bài", mỗi dòng list bắt đầu bằng "✓ ".
4. Mục "tránh → nên" viết dạng: "❌ [việc nên tránh] → ✅ [việc nên làm]"
   (hệ thống tự render thành bảng do/don't — cứ viết đúng mẫu này trong "list").
5. Không bịa số liệu, không hứa điều không có thật.

ĐỘ DÀI: main khoảng 5–7 block, aside khoảng 2–4 block. Viết vừa đủ, không lan man.

Bài mẫu để bắt chước giọng + cấu trúc (KHÔNG chép nội dung, chỉ học cách trình bày):
[DÁN NGUYÊN OBJECT 1 BÀI CÓ SẴN, VD m2-b1, VÀO ĐÂY]

CHỦ ĐỀ BÀI CẦN VIẾT:
- Module: [số + tên module]
- Bài: [tên bài]
- id: [vd "m3-b1"]
- Cần dạy được điều gì: [liệt kê 3-5 ý chính bạn muốn có]
```

---

## 2) Cách render của từng block (để ChatGPT chọn đúng loại)

| type | Hiển thị ra sao |
|------|-----------------|
| `note` | Hộp có viền màu trái theo `tone` (info=tím, success=xanh lá, warning=vàng); `label` in đậm đứng trước `content`. |
| `card` `body` | Tiêu đề đậm + các đoạn văn. |
| `card` `list` | Gạch đầu dòng; nếu `ordered:true` → đánh số 1·2·3. |
| `card` list "❌…→✅…" | Tự đổi thành **bảng do/don't** (không cần làm gì thêm). |
| `prompt` | Khối `<pre>` + **nút Copy** — dùng cho prompt học viên gửi AI. |
| `code` | Khối mã monospace + **nút "Copy lệnh"** — dùng cho lệnh terminal. |
| `faq` | Danh sách câu hỏi bấm mở/gập. |
| `files` | Lưới 2 cột, mỗi ô có emoji + tên + mô tả. |
| `links` | Các nút bo tròn, mở tab mới. |

Bố cục trang: `main` là cột chính (rộng), `aside` là cột phụ bên phải (ghi chú, FAQ, checklist).
Trên điện thoại `aside` xuống dưới `main`.

---

## 3) Sau khi ChatGPT trả kết quả — ghép vào web

**Cách A — thêm 1 bài vào module có sẵn:** dán object `CourseLesson` vào mảng `lessons`
của `config/course/module-XX.ts`.

**Cách B — tạo module mới:** bọc các bài trong khung này:

```ts
import type { CourseDocModule } from "@/types/course";

export const module03: CourseDocModule = {
  id: "module-3",
  order: 3,
  title: "Module 3: ...",
  shortTitle: "03. ...",
  tagline: "... · ... · ...",
  description: "...",
  outcome: "...",
  lessons: [
    /* dán các object CourseLesson từ ChatGPT vào đây */
  ],
};
```

**Cách C — dán vào admin:** vào `/admin/course`, tạo/sửa module, dán JSON các bài.

Sau khi ghép, chạy `pnpm build` (hoặc nhờ Claude Code) để chắc object hợp lệ TypeScript,
rồi soát lại giọng văn cho khớp các module trước.

---

## 4) Ví dụ ngắn một `CourseLesson` hợp lệ

```json
{
  "id": "m3-b1",
  "title": "Tên bài",
  "description": "Một câu tóm bài.",
  "duration": "8 phút",
  "videoLabel": "Tiêu đề video ngắn gọn",
  "main": [
    { "type": "note", "tone": "success", "label": "Mục tiêu bài này",
      "content": "Sau bài này bạn làm được ..." },
    { "type": "card", "title": "Ý chính 1",
      "body": ["Đoạn giải thích bằng ví dụ đời thường.", "Chốt lại một câu."] },
    { "type": "card", "title": "Các bước làm", "ordered": true,
      "list": ["Bước 1 ...", "Bước 2 ...", "Bước 3 ..."] },
    { "type": "prompt", "title": "Prompt mẫu", "intro": "Copy và thay phần trong [ngoặc]:",
      "copyLabel": "Copy prompt", "prompt": "Bạn hãy ...\n\n[phần cần thay]" },
    { "type": "card", "title": "Sai lầm người mới hay mắc",
      "list": ["Lỗi 1 ...", "Lỗi 2 ...", "Lỗi 3 ..."] }
  ],
  "aside": [
    { "type": "note", "tone": "info", "label": "Mẹo nhỏ", "content": "..." },
    { "type": "card", "title": "Checklist cuối bài",
      "list": ["✓ Làm được A.", "✓ Hiểu vì sao B.", "✓ Nhớ nguyên tắc C."] }
  ]
}
```
