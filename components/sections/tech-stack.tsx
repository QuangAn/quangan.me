import { techStack } from "@/config/tech";

export function TechStack() {
  // Nhân đôi danh sách để dải chạy lặp liền mạch
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-labelledby="tech-heading"
      className="border-y border-white/5 bg-secondary/30 py-12"
    >
      <div className="container">
        <p
          id="tech-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
        >
          Học &amp; thực hành trên bộ công cụ AI và nền tảng hiện đại
        </p>
      </div>

      <div className="group marquee-mask relative mt-6 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {items.map((tool, i) => (
            <span
              key={`${tool.name}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-2 text-sm ring-1 ring-inset ring-white/5"
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent"
              />
              <span className="font-semibold">{tool.name}</span>
              <span className="text-xs text-muted-foreground">{tool.hint}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
