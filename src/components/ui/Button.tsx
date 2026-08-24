import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_0_0_1px_rgba(242,96,12,0.4)]",
  secondary:
    "bg-transparent text-ink-50 border border-ink-700 hover:border-brand-500 hover:text-brand-400",
  ghost: "bg-transparent text-ink-300 hover:text-ink-50",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

interface ButtonProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
  /** Renders as an <a> when provided, otherwise as a <button>. */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
      {icon}
    </motion.button>
  );
}
