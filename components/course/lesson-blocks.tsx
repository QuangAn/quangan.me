import { ExternalLink } from "lucide-react";
import { CopyButton } from "@/components/course/copy-button";
import { cn } from "@/lib/utils";
import type { LessonBlock } from "@/types/course";

/** Một mục "tránh → nên": có ❌ (việc nên tránh) đứng trước ✅ (việc nên làm). */
const DODONT_RE = /❌.*✅/u;

/** Tách mục do/don't thành vế "tránh" (trái) và vế "nên" (phải). */
function splitDoDont(item: string) {
  const at = item.indexOf("✅");
  const right = at >= 0 ? item.slice(at + 1).trim() : "";
  const left = (at >= 0 ? item.slice(0, at) : item)
    // bỏ ❌ đầu dòng và mũi tên nối ngay trước ✅ (giữ nguyên mũi tên trong phần giải thích)
    .replace(/^\s*❌\s*/u, "")
    .replace(/\s*(→|➜|=>|->)\s*$/u, "")
    .trim();
  return { left, right };
}

/** Màu sắc theo tone của khối ghi chú. */
const noteTones = {
  info: "border-primary/50 bg-primary/10 text-foreground",
  success: "border-emerald-400/50 bg-emerald-400/10 text-emerald-100",
  warning: "border-amber-400/50 bg-amber-400/10 text-amber-100",
} as const;

/** Render một khối nội dung bài học theo type. */
export function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "card": {
      const list = block.list ?? [];
      // Danh sách "❌ tránh → ✅ nên" → bảng do/don't gọn gàng, bỏ chấm bullet thừa.
      const isDoDont =
        !block.ordered && list.length > 0 && list.every((i) => DODONT_RE.test(i));
      return (
        <div className="rounded-2xl border border-white/[0.06] bg-secondary/30 p-5">
          <h4 className="text-sm font-bold">{block.title}</h4>
          {block.body?.map((paragraph) => (
            <p key={paragraph} className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {isDoDont ? (
            <ul className="mt-3 divide-y divide-white/[0.06] overflow-hidden rounded-xl border border-white/[0.06]">
              {list.map((item) => {
                const { left, right } = splitDoDont(item);
                return (
                  <li key={item} className="px-3.5 py-2.5 text-sm leading-relaxed">
                    <p className="flex items-start gap-2 text-rose-300">
                      <span aria-hidden className="mt-px shrink-0 font-bold">
                        ✕
                      </span>
                      <span>
                        <span className="sr-only">Tránh: </span>
                        {left}
                      </span>
                    </p>
                    <p className="mt-1 flex items-start gap-2 text-emerald-300">
                      <span aria-hidden className="mt-px shrink-0 font-bold">
                        ✓
                      </span>
                      <span>
                        <span className="sr-only">Nên: </span>
                        {right}
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : block.list ? (
            block.ordered ? (
              <ol className="mt-3 space-y-2">
                {block.list.map((item, index) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-3 space-y-2">
                {block.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </div>
      );
    }

    case "prompt":
      return (
        <div className="rounded-2xl border border-primary/20 bg-secondary/30 p-5">
          <h4 className="text-sm font-bold">{block.title}</h4>
          {block.intro ? (
            <p className="mt-2 text-sm text-muted-foreground">{block.intro}</p>
          ) : null}
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-white/[0.06] bg-background/70 p-4 text-[13px] leading-relaxed text-foreground/90">
            {block.prompt}
          </pre>
          <div className="mt-3">
            <CopyButton text={block.prompt} label={block.copyLabel} />
          </div>
        </div>
      );

    case "code":
      return (
        <div className="rounded-2xl border border-white/[0.06] bg-secondary/30 p-5">
          {block.title ? <h4 className="text-sm font-bold">{block.title}</h4> : null}
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-xl border border-accent/15 bg-background/70 p-4 font-mono text-[13px] leading-relaxed text-accent-strong">
            {block.code}
          </pre>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <CopyButton text={block.code} label="Copy lệnh" />
            {block.note ? (
              <p className="text-xs text-muted-foreground">{block.note}</p>
            ) : null}
          </div>
        </div>
      );

    case "note":
      return (
        <div className={cn("rounded-2xl border-l-4 p-4 text-sm leading-relaxed", noteTones[block.tone] ?? noteTones.info)}>
          {block.label ? <b>{block.label}: </b> : null}
          {block.content}
        </div>
      );

    case "faq":
      return (
        <div className="space-y-2">
          {block.title ? <h4 className="text-sm font-bold">{block.title}</h4> : null}
          {(block.items ?? []).map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-white/[0.06] bg-secondary/30 px-4 py-3"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="mr-1.5 inline-block text-accent transition-transform group-open:rotate-90">
                  ▸
                </span>
                {item.question}
              </summary>
              <p className="mt-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      );

    case "files":
      return (
        <div className="rounded-2xl border border-white/[0.06] bg-secondary/30 p-5">
          {block.title ? <h4 className="mb-3 text-sm font-bold">{block.title}</h4> : null}
          <div className="grid gap-2.5 sm:grid-cols-2">
            {(block.items ?? []).map((file) => (
              <div
                key={file.name}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-background/50 p-3.5"
              >
                <span className="mt-0.5 shrink-0 text-lg leading-none" aria-hidden>
                  {file.emoji}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">{file.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {file.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "links":
      return (
        <div>
          {block.title ? <h4 className="mb-2 text-sm font-bold">{block.title}</h4> : null}
          <div className="flex flex-wrap gap-2">
            {(block.items ?? []).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary/85"
              >
                {link.label}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      );

    // Khối lạ (đã được lọc ở biên chuẩn hóa) — không render gì, không crash.
    default:
      return null;
  }
}
