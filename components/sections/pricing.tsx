import { Check, Flame, Lightbulb } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { CheckoutButton } from "@/components/checkout-dialog";
import { cn } from "@/lib/utils";
import {
  pricingPlans,
  pricingGuarantees,
  enterpriseNote,
} from "@/config/pricing";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Học phí"
        title="Đầu tư một lần, dùng được cả đời"
        description="Hai hình thức học rõ ràng: tự học theo lộ trình có sẵn, hoặc được kèm 1-1 đến khi hoàn thiện dự án của riêng bạn. Rẻ hơn rất nhiều so với thuê làm một website."
      />

      <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 sm:grid-cols-2">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08} className="flex">
            <div
              className={cn(
                "relative flex w-full flex-col rounded-3xl p-7",
                plan.highlighted
                  ? "premium-dark text-white ring-1 ring-primary/40 shadow-[0_30px_80px_-24px_rgba(124,58,237,0.5)] lg:-translate-y-3"
                  : "card-surface",
              )}
            >
              {plan.badge ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="solid" className="shadow-md">
                    {plan.badge}
                  </Badge>
                </div>
              ) : null}

              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-1.5 min-h-[40px] text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-5">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold tracking-tight tabular-nums sm:text-[2.75rem]">
                    {plan.price}
                  </span>
                  {plan.discount ? (
                    <span className="mb-1.5 rounded-full bg-amber-400/15 px-2 py-0.5 text-xs font-bold text-amber-300 ring-1 ring-inset ring-amber-400/30">
                      {plan.discount}
                    </span>
                  ) : null}
                </div>
                {plan.originalPrice ? (
                  <span className="text-sm text-muted-foreground line-through">
                    Giá gốc {plan.originalPrice}
                  </span>
                ) : null}
              </div>

              {plan.seatsLeft ? (
                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                  <Flame className="h-3.5 w-3.5" aria-hidden /> Chỉ còn{" "}
                  {plan.seatsLeft} suất ưu đãi khai giảng
                </p>
              ) : null}

              <CheckoutButton
                planId={plan.id}
                variant={plan.highlighted ? "gradient" : "outline"}
                size="lg"
                className={cn(
                  "mt-6 w-full",
                  !plan.highlighted &&
                    "border-white/15 bg-white/[0.03] hover:bg-white/[0.06]",
                )}
              >
                {plan.cta}
              </CheckoutButton>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <ul className="grid gap-3">
                  {plan.features.map((feature) => (
                    <FeatureItem
                      key={feature}
                      text={feature}
                      highlighted={plan.highlighted}
                    />
                  ))}
                </ul>

                {plan.featureGroups?.map((group) => (
                  <div
                    key={group.title}
                    className={cn(
                      "rounded-2xl border p-4",
                      plan.highlighted
                        ? "border-white/10 bg-white/[0.04]"
                        : "border-border bg-secondary/40",
                    )}
                  >
                    <p className="mb-3 flex items-center gap-2 text-sm font-bold">
                      {group.icon ? (
                        <Icon
                          name={group.icon}
                          className={cn(
                            "h-4 w-4",
                            plan.highlighted ? "text-accent" : "text-primary",
                          )}
                        />
                      ) : null}
                      {group.title}
                    </p>
                    <ul
                      className={cn(
                        "grid gap-2.5",
                        group.grid && "sm:grid-cols-2 sm:gap-x-4",
                      )}
                    >
                      {group.items.map((item) => (
                        <FeatureItem
                          key={item}
                          text={item}
                          highlighted={plan.highlighted}
                        />
                      ))}
                    </ul>
                  </div>
                ))}

                {plan.valueNote ? (
                  <div
                    className={cn(
                      "flex items-start gap-2 rounded-xl p-3 text-sm font-medium",
                      plan.highlighted
                        ? "bg-white/10 text-white"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <span>{plan.valueNote}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {pricingGuarantees.map((item) => (
          <span
            key={item.text}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon name={item.icon} className="h-5 w-5 text-primary" />
            {item.text}
          </span>
        ))}
      </Reveal>

      <Reveal className="mt-8 text-center text-sm text-muted-foreground">
        {enterpriseNote.text}{" "}
        <a
          href={enterpriseNote.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          {enterpriseNote.cta}
        </a>
      </Reveal>
    </Section>
  );
}

/** Một dòng tính năng: dấu tick + nội dung, đổi màu theo card nổi bật. */
function FeatureItem({
  text,
  highlighted,
}: {
  text: string;
  highlighted?: boolean;
}) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          highlighted ? "bg-white/15 text-white" : "bg-primary/10 text-primary",
        )}
      >
        <Check className="h-3 w-3" />
      </span>
      <span className={highlighted ? "text-white/85" : "text-muted-foreground"}>
        {text}
      </span>
    </li>
  );
}
