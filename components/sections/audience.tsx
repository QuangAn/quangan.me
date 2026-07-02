import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { audiences } from "@/config/projects";

export function Audience() {
  return (
    <Section id="audience">
      <SectionHeading
        eyebrow="Dành cho ai"
        title="Khóa học này phù hợp với bạn nếu..."
        description="Bạn không cần nền tảng công nghệ. Chỉ cần bạn muốn có website và sẵn sàng làm theo hướng dẫn từng bước."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 0.06}>
            <article className="card-surface card-hover flex h-full items-start gap-4 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-white/10">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
