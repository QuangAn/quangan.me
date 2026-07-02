import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Check } from "lucide-react";
import { roadmap } from "@/config/roadmap";

export function Roadmap() {
  return (
    <Section id="roadmap" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Lộ trình học"
        title="4 chặng đưa bạn từ người mới đến thành thạo"
        description="Một con đường rõ ràng, đi tuần tự. Bạn luôn biết mình đang ở đâu và bước tiếp theo cần làm gì."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Đường dọc timeline */}
        <div
          aria-hidden
          className="absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-1/2"
        />
        <div className="space-y-8">
          {roadmap.map((phase, index) => (
            <Reveal key={phase.phase} delay={index * 0.06}>
              <div
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Chấm mốc */}
                <span
                  aria-hidden
                  className="absolute left-5 top-1 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-secondary bg-primary text-xs font-bold text-primary-foreground sm:left-1/2"
                >
                  {index + 1}
                </span>

                <div className="flex-1 sm:px-8">
                  <div
                    className={`card-surface p-6 ${
                      index % 2 === 1 ? "sm:text-right" : ""
                    } ml-12 sm:ml-0`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {phase.phase}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">
                      {phase.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                    <ul
                      className={`mt-4 grid gap-2 ${
                        index % 2 === 1 ? "sm:justify-items-end" : ""
                      }`}
                    >
                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check
                            aria-hidden
                            className="h-4 w-4 shrink-0 text-primary"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden flex-1 sm:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
