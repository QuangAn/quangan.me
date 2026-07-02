import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { CheckoutButton } from "@/components/checkout-dialog";
import { outcomes } from "@/config/pain-points";

export function Outcomes() {
  return (
    <Section id="outcomes" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Kết quả đạt được"
        title="Sau khóa học, bạn sẽ tự tay làm được những gì?"
        description="8 năng lực cụ thể, mỗi năng lực gắn với một sản phẩm thật bạn có thể mang ra dùng ngay cho công việc hoặc để nhận dự án."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((outcome, index) => (
          <Reveal key={outcome.title} delay={(index % 4) * 0.05}>
            <article className="card-surface card-hover group flex h-full flex-col gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-[hsl(var(--accent-strong))] ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon name={outcome.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold leading-snug">
                {outcome.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <CheckoutButton variant="gradient" size="lg">
          Tôi muốn làm được như vậy <ArrowRight className="h-4 w-4" />
        </CheckoutButton>
      </Reveal>
    </Section>
  );
}
