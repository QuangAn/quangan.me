import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

interface IconProps {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
}

/** Render một icon lucide theo tên đã khai báo trong config. */
export function Icon({ name, className, ...props }: IconProps) {
  const LucideIcon = getIcon(name);
  return (
    <LucideIcon className={cn("h-6 w-6", className)} aria-hidden {...props} />
  );
}
