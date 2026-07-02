import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

/** Wrapper section chuẩn: padding dọc nhất quán + container căn giữa. */
export function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", className)}
      {...props}
    >
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
