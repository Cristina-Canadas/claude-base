import type { ReactNode } from "react";

type Variant = "brand" | "outline" | "muted" | "warning";

const variantStyles: Record<Variant, string> = {
  brand: "bg-brand-500/15 text-brand-400",
  outline: "bg-transparent text-ink-300",
  muted: "bg-ink-800 text-ink-400",
  warning: "bg-amber-500/10 text-amber-400",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
