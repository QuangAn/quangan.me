import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CheckoutButton } from "@/components/checkout-dialog";
import { modules } from "@/config/modules";

/** Dải màu gradient cho thumbnail, xoay vòng theo thứ tự module. */
const THUMB_HUES = [
  "from-violet-600/50 to-fuchsia-600/30",
  "from-indigo-600/50 to-cyan-500/30",
  "from-cyan-500/50 to-blue-600/30",
  "from-fuchsia-600/50 to-violet-600/30",
  "from-blue-600/50 to-indigo-600/30",
  "from-purple-600/50 to-pink-600/30",
  "from-teal-500/50 to-cyan-600/30",
  "from-violet-600/50 to-indigo-600/30",
];

export function Modules() {
  return (
    <Section id="modules">
      <SectionHeading
        eyebrow="Chương trình học"
        title="8 module thực chiến, đi từ số 0 đến kiếm tiền"
        description="Mỗi module đi kèm dự án mẫu và hướng dẫn từng bước để bạn làm theo. Học đến đâu có sản phẩm đến đó, không lý thuyết dài dòng."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {modules.map((module, index) => (
          <Reveal key={module.order} delay={(index % 2) * 0.06}>
            <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
              {/* Thumbnail 16:9 */}
              <div className="relative aspect-video overflow-hidden bg-background">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    THUMB_HUES[(module.order - 1) % THUMB_HUES.length]
                  }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:22px_22px] opacity-30" />
                <span
                  aria-hidden
                  className="absolute right-3 top-1 select-none text-7xl font-black leading-none text-white/10 tabular-nums"
                >
                  {module.order}
                </span>

                {/* Icon module */}
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur">
                  <Icon name={module.icon} className="h-6 w-6" />
                </span>

                {/* Badge dưới thumbnail */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    Module {module.order}
                  </span>
                  <span className="rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white/90 backdrop-blur">
                    {module.lessons.length} bước thực hành
                  </span>
                </div>
              </div>

              {/* Nội dung */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">
                  {module.title}
                </h3>

                <p className="mt-3 rounded-xl bg-secondary/60 px-4 py-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Kết quả:{" "}
                  </span>
                  {module.result}
                </p>

                <ul className="mt-4 grid gap-2">
                  {module.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-col items-center gap-3">
        <p className="text-center text-sm text-muted-foreground">
          Không chắc nên bắt đầu từ đâu? Để chuyên gia tư vấn lộ trình phù hợp
          với bạn.
        </p>
        <CheckoutButton variant="gradient" size="lg">
          Nhận tư vấn lộ trình <ArrowRight className="h-4 w-4" />
        </CheckoutButton>
      </Reveal>
    </Section>
  );
}
