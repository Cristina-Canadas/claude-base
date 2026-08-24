import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  showBackground?: boolean;
}

export function SectionContainer({
  id,
  children,
  className = "",
  showBackground = true,
}: SectionContainerProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      {showBackground && (
        <img
          src="/Claude_AI_symbol.svg.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-8 h-[90vw] max-h-[900px] min-h-[500px] w-[90vw] max-w-[900px] min-w-[500px] -translate-x-1/2 select-none opacity-[0.18] blur-2xl"
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 py-24"
      >
        {children}
      </motion.div>
    </section>
  );
}
