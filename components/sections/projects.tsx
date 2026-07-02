import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/config/projects";

export function Projects() {
  return (
    <Section id="projects" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Dự án mẫu"
        title="Những sản phẩm bạn sẽ tự làm được"
        description="Đây là các loại website và web app học viên tạo ra trong khóa học. Bạn hoàn toàn có thể dùng chúng cho việc kinh doanh của mình hoặc làm cho khách hàng."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 0.06}>
            <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
              {/* Ảnh minh họa dạng gradient + icon */}
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-card to-accent/15">
                <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-primary shadow-lg ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-110">
                  <Icon name={project.icon} className="h-8 w-8" />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
