import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: "var(--color-brand-500)" } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl border border-ink-800 bg-ink-900/60 p-6 transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}
