import { useState } from "react";
import { Check, Copy, Bot, Terminal, ChevronDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { AGENTS } from "../../data/agents";
import type { AgentCategory, AgentItem } from "../../types/content";

const CATEGORIES: AgentCategory[] = [
  "Frontend",
  "React",
  "UI",
  "Accesibilidad",
  "Testing",
  "Rendimiento",
  "Arquitectura",
  "DevOps",
  "Backend",
  "Base de datos",
  "QA",
  "Lenguajes",
  "Cloud",
  "Seguridad",
  "IA",
  "Documentación",
  "PDF y OCR",
  "API",
];

function CopyRow({ value, ariaLabel }: { value: string; ariaLabel: string }) {
  const { copied, copy } = useCopyToClipboard();
  return (
    <div className="mt-2 flex items-center justify-between gap-3 rounded-lg border border-ink-800 bg-ink-950 px-3 py-2">
      <code className="min-w-0 truncate font-mono text-xs text-ink-200">{value}</code>
      <button
        type="button"
        onClick={() => copy(value)}
        aria-label={ariaLabel}
        className="flex shrink-0 items-center gap-1 rounded-md p-1 text-ink-500 transition-colors hover:bg-ink-800 hover:text-ink-50"
      >
        {copied ? (
          <Check className="size-3.5 text-brand-400" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}

function getDocsUrl(installCommand?: string) {
  const match = installCommand?.match(/--agent\s+(\S+)/);
  return match ? `https://aitmpl.com/component/agent/${match[1]}` : undefined;
}

function AgentCard({ agent }: { agent: AgentItem }) {
  const docsUrl = getDocsUrl(agent.installCommand);

  return (
    <Card className="flex h-full min-w-0 flex-col">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
          <Bot className="size-4.5" strokeWidth={1.75} />
        </span>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{agent.category}</Badge>
          {docsUrl && (
            <a
              href={docsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver documentación del agente"
              title="Ver documentación del agente"
              className="flex size-7 shrink-0 items-center justify-center rounded-md text-ink-500 transition-colors hover:bg-ink-800 hover:text-brand-400"
            >
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>

      <code className="mt-4 font-mono text-sm font-semibold text-ink-50">
        {agent.name}
      </code>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">
        {agent.description}
      </p>

      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          Cuándo utilizarlo
        </span>
        <p className="mt-1 text-sm leading-relaxed text-ink-300">
          {agent.whenToUse}
        </p>
      </div>

      {agent.installCommand && (
        <div className="mt-4 flex-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Instalación
          </span>
          <CopyRow value={agent.installCommand} ariaLabel="Copiar comando de instalación" />
        </div>
      )}
    </Card>
  );
}

const INITIAL_VISIBLE = 6;

export function AgentsSection() {
  const [active, setActive] = useState<AgentCategory | "Todos">("Todos");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered =
    active === "Todos" ? AGENTS : AGENTS.filter((a) => a.category === active);
  const visible = filtered.slice(0, visibleCount);

  function handleCategoryChange(category: AgentCategory | "Todos") {
    setActive(category);
    setVisibleCount(INITIAL_VISIBLE);
  }

  return (
    <SectionContainer id="agentes" className="border-t border-ink-900">
      <SectionHeading
        eyebrow="Biblioteca"
        title="Agentes recomendados"
        description="Ejemplos de agentes por especialidad, listos para adaptar a tu propio equipo. Filtra por categoría para encontrar el que necesitas."
      />

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-ink-800 bg-ink-900/40 px-4 py-3">
        <Terminal className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={1.75} />
        <p className="text-sm leading-relaxed text-ink-400">
          <span className="font-medium text-ink-200">Cómo se usan: </span>
          copia el comando de <strong className="font-medium text-ink-300">Instalación</strong> y
          pégalo en tu terminal para añadir el agente al proyecto. Los agentes vienen del proyecto
          community{" "}
          <a
            href="https://aitmpl.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand-400 underline decoration-brand-500/40 underline-offset-2 hover:text-brand-300"
          >
            Claude Code Templates
          </a>
          .
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {(["Todos", ...CATEGORIES] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === category
                ? "border-brand-500 bg-brand-500/15 text-brand-400"
                : "border-ink-800 text-ink-400 hover:border-ink-700 hover:text-ink-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((agent) => (
          <motion.div key={agent.id} layout className="min-w-0">
            <AgentCard agent={agent} />
          </motion.div>
        ))}
      </motion.div>

      {visibleCount < filtered.length && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}
            className="flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm text-ink-300 transition-colors hover:text-brand-400"
          >
            Ver más agentes
            <ChevronDown className="size-4" />
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
