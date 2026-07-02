import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { solutionSteps } from "@/config/pain-points";

export function Solution() {
  return (
    <Section id="solution">
      <SectionHeading
        eyebrow="Giải pháp"
        title={
          <>
            Dùng AI như một{" "}
            <span className="text-gradient">trợ lý thiết kế & lập trình</span>
          </>
        }
        description="Bạn không học code theo kiểu truyền thống. Bạn học cách mô tả đúng, ra lệnh đúng, kiểm tra đúng và đưa website lên Internet — chỉ với 4 bước lặp đi lặp lại."
      />

      <div className="relative mt-14">
        {/* Đường nối các bước trên desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />
        <ol className="grid gap-6 lg:grid-cols-4">
          {solutionSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <li className="card-surface relative flex h-full flex-col items-start gap-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-3xl font-extrabold text-white/10">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
