import { Sparkles, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutButton } from "@/components/checkout-dialog";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  siteConfig,
  heroStats,
  heroHighlights,
  heroOffer,
  heroCapabilities,
} from "@/config/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-32 lg:pb-24"
    >
      {/* Nền trang trí */}
      <div className="mesh-hero pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[size:44px_44px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          <Reveal immediate>
            <Badge variant="outline" className="gap-2 py-1.5 pl-1.5 pr-3 shadow-soft backdrop-blur">
              <span className="flex h-6 items-center gap-1 rounded-full bg-primary px-2 text-[11px] font-bold text-primary-foreground">
                <Sparkles className="h-3 w-3" /> AI
              </span>
              Khóa học tạo website bằng AI cho người mới
            </Badge>
          </Reveal>

          <Reveal immediate delay={0.06}>
            <h1 className="text-balance text-[2.25rem] font-extrabold leading-[1.28] tracking-tight sm:text-[3rem] lg:text-[3.75rem]">
              Tự tạo <span className="text-gradient">Website</span>, Landing Page
              và Web App bằng <span className="text-gradient">AI</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.09} className="w-full">
            <ul className="flex flex-wrap gap-2.5">
              {heroCapabilities.map((cap) => (
                <li
                  key={cap.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/50 px-3.5 py-2 text-sm font-medium ring-1 ring-inset ring-white/5 backdrop-blur"
                >
                  <Icon name={cap.icon} className="h-4 w-4 text-primary" />
                  {cap.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal immediate delay={0.12}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.coreMessage.join(" ")} Sau khóa học, bạn có thể tự tạo
              website cho công việc, kinh doanh hoặc nhận dự án kiếm thêm thu
              nhập.
            </p>
          </Reveal>

          <Reveal immediate delay={0.15} className="w-full">
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 ring-1 ring-inset ring-white/5">
              <span className="text-sm text-muted-foreground">Chỉ từ</span>
              <span className="text-2xl font-extrabold tracking-tight text-foreground">
                {heroOffer.price}
              </span>
              <span className="text-xs text-muted-foreground">
                · {heroOffer.note}
              </span>
            </div>
          </Reveal>

          <Reveal immediate delay={0.18} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row">
              <CheckoutButton variant="gradient" size="lg" className="shadow-glow">
                Đăng ký ngay <ArrowRight className="h-4 w-4" />
              </CheckoutButton>
              <Button asChild variant="outline" size="lg" className="bg-background/70 backdrop-blur">
                <a href="#roadmap">
                  <Play className="h-4 w-4" /> Xem lộ trình học
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delay={0.21} className="w-full">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {heroHighlights.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon name={item.icon} className="h-4 w-4 text-primary" />
                  {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Mockup trực quan */}
        <Reveal immediate delay={0.2} y={28} className="relative">
          <HeroVisual />
        </Reveal>
      </div>

      {/* Dải số liệu */}
      <div className="container mt-12 lg:mt-20">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-card lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-card px-4 py-6 text-center"
              >
                <dt className="text-2xl font-extrabold text-gradient sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/** Khối minh họa "cửa sổ trình duyệt" đang được AI tạo ra. */
function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-transparent to-accent/25 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
            {siteConfig.domain}
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-2/3 rounded-full bg-foreground/80" />
              <div className="h-2 w-1/3 rounded-full bg-muted-foreground/30" />
            </div>
          </div>
          <div className="h-24 rounded-xl bg-gradient-to-br from-primary/15 via-secondary to-accent/15" />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-lg bg-secondary p-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20" />
                <div className="h-1.5 w-full rounded-full bg-muted-foreground/20" />
                <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/20" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3">
            <div className="h-2.5 w-24 rounded-full bg-white/70" />
            <div className="h-7 w-20 rounded-full bg-white/90" />
          </div>
        </div>
      </div>

      {/* Thẻ nổi mô phỏng prompt AI */}
      <div className="animate-float absolute -bottom-5 -left-4 hidden max-w-[210px] rounded-xl border border-border bg-card/95 p-3 shadow-card backdrop-blur sm:block">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <p className="text-xs font-medium leading-tight text-muted-foreground">
            &ldquo;Tạo cho tôi landing page bán mỹ phẩm...&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
