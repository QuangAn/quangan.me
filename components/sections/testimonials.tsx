import { Quote, Star } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/config/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Cảm nhận học viên"
        title="Nhiều người không biết code đã làm được"
        description="Những chia sẻ từ học viên sau khi hoàn thành khóa học và tự tạo được website đầu tiên của mình."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={(index % 3) * 0.06}>
            <figure className="card-surface card-hover flex h-full flex-col p-6">
              <Quote className="h-8 w-8 text-primary/25" aria-hidden="true" />
              <span
                role="img"
                aria-label="Đánh giá 5 trên 5 sao"
                className="mt-3 flex gap-0.5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </span>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {item.avatarInitials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
