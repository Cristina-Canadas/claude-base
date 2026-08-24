import { motion } from "framer-motion";

interface TerminalWindowProps {
  lines: string[];
  title?: string;
  className?: string;
}

export function TerminalWindow({ lines, title = "terminal", className = "" }: TerminalWindowProps) {
  return (
    <div
      className={`w-full max-w-md overflow-hidden rounded-xl border border-ink-800 bg-ink-950 shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-ink-800 bg-ink-900/60 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-ink-400">{title}</span>
      </div>

      <div className="space-y-3 px-5 py-6 font-mono text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={`${i}-${line}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.35, duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="select-none text-brand-500">$</span>
            <span className="text-ink-100">{line}</span>
          </motion.div>
        ))}

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            delay: 0.5 + lines.length * 0.35,
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.15,
          }}
          className="inline-block h-4 w-2 bg-brand-500 align-middle"
        />
      </div>
    </div>
  );
}
