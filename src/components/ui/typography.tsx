import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3;
  children: ReactNode;
}

export function Heading({
  level = 2,
  className,
  children,
  ...props
}: HeadingProps) {
  const base =
    "font-semibold tracking-tight text-foreground scroll-m-20 leading-tight";

  const variants: Record<number, string> = {
    1: "text-4xl sm:text-5xl md:text-6xl",
    2: "text-2xl sm:text-3xl md:text-4xl",
    3: "text-xl sm:text-2xl",
  };

  const headingClassName = cn(base, variants[level] ?? variants[2], className);

  if (level === 1) {
    return (
      <h1 className={headingClassName} {...props}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={headingClassName} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={headingClassName} {...props}>
      {children}
    </h2>
  );
}

export interface SubheadingProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Subheading({
  className,
  children,
  ...props
}: SubheadingProps) {
  return (
    <p
      className={cn(
        "max-w-xl text-sm sm:text-base text-muted leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.22em] text-primary/80",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

