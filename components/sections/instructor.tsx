import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { instructor } from "@/config/instructor";

export function Instructor() {
  return (
    <Section id="instructor" className="bg-secondary/40">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
            <div className="card-surface rounded-3xl p-8 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-3xl font-extrabold text-white shadow-lg ring-1 ring-inset ring-white/10">
                {instructor.avatarInitials}
              </div>
              <p className="mt-5 text-xl font-bold">{instructor.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {instructor.role}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="flex flex-col gap-4">
            <Badge variant="default">Người hướng dẫn</Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Học từ người trực tiếp làm sản phẩm
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {instructor.bio}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {instructor.highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="card-surface h-full rounded-2xl p-5">
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-white/10">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1 text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
