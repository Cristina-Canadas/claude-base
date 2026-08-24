import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { Button } from "../ui/Button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: relativeX, y: relativeY });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(242,96,12,0.14),transparent_60%)]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-ink-900/60 px-4 py-1.5 text-xs text-ink-300"
          >
            <TerminalIcon className="size-3.5 text-brand-400" />
            Una metodología para empezar con Claude Code
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink-50 sm:text-5xl lg:text-6xl"
          >
            Empieza cada proyecto con{" "}
            <span className="text-brand-500">Claude Code</span> siguiendo un
            estándar.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-400"
          >
            Claude Base reúne comandos, agentes, skills y buenas prácticas en
            un mismo lugar para que cada proyecto arranque de forma
            ordenada, rápida y consistente.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button
              variant="primary"
              href="#flujo"
              icon={<ArrowRight className="size-4" />}
            >
              Empezar
            </Button>
            <Button variant="secondary" href="#comandos">
              Explorar comandos
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center overflow-visible lg:justify-end"
        >
          <div
            ref={wrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px] lg:translate-x-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(242,96,12,0.35),transparent_70%)] blur-2xl" />
            <motion.img
              src="/Claude_AI_symbol.svg.webp"
              alt="Símbolo de Claude AI"
              animate={{
                x: tilt.x * 40,
                y: tilt.y * 40,
                rotate: tilt.x * 12,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative w-full drop-shadow-[0_35px_60px_rgba(242,96,12,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
