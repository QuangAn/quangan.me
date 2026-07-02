import { Gift } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { bonuses } from "@/config/bonuses";

export function Bonuses() {
  return (
    <Section id="bonuses">
      <SectionHeading
        eyebrow="Quà tặng kèm"
        title={
          <span className="inline-flex items-center gap-3">
            <Gift className="h-8 w-8 text-primary" aria-hidden /> Tài nguyên tặng kèm
          </span>
        }
        description="Không chỉ là bài học. Bạn nhận thêm bộ công cụ giúp làm việc nhanh hơn và tự tin nhận dự án."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bonuses.map((bonus, index) => (
          <Reveal key={bonus.title} delay={(index % 3) * 0.06}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] p-6 ring-1 ring-inset ring-white/5">
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary shadow-sm ring-1 ring-inset ring-white/10">
                <Icon name={bonus.icon} className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-semibold">{bonus.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {bonus.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
