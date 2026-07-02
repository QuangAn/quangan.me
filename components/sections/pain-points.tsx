import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { painPoints } from "@/config/pain-points";

/** Màu icon riêng cho từng pain point để dễ phân biệt (xoay vòng theo thứ tự). */
const ICON_TONES = [
  "bg-rose-500/10 text-rose-400 ring-rose-400/20",
  "bg-orange-500/10 text-orange-400 ring-orange-400/20",
  "bg-amber-500/10 text-amber-400 ring-amber-400/20",
  "bg-fuchsia-500/10 text-fuchsia-400 ring-fuchsia-400/20",
  "bg-violet-500/10 text-violet-400 ring-violet-400/20",
  "bg-sky-500/10 text-sky-400 ring-sky-400/20",
];

export function PainPoints() {
  return (
    <Section id="pain-points" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Vấn đề thường gặp"
        title="Bạn muốn có website nhưng luôn bị mắc kẹt?"
        description="Đây là những rào cản khiến nhiều người mãi chưa có được website cho riêng mình. Nếu bạn thấy mình trong đó, khóa học này dành cho bạn."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.05}>
            <article className="group h-full card-surface card-hover p-6">
              <span
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ${
                  ICON_TONES[index % ICON_TONES.length]
                }`}
              >
                <Icon name={point.icon} className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
