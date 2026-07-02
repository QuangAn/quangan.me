import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Tiêu đề section dùng chung: eyebrow + H2 + mô tả, có animation reveal. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-2xl items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Badge variant="default">{eyebrow}</Badge> : null}
      <h2 className="text-balance text-[1.875rem] font-bold leading-[1.25] tracking-tight sm:text-[2.25rem] lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
