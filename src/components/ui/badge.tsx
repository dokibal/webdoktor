import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide";

  const variants: Record<BadgeVariant, string> = {
    default:
      "border-transparent bg-primary/10 text-primary shadow-sm backdrop-blur-sm",
    outline: "border-border text-muted bg-background/80",
  };

  return (
    <span
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}

