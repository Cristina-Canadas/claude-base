import { Check, ExternalLink, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { GUIDE_CARDS } from "../../data/guide";
import type { GuideCardData } from "../../types/content";

function GuideCard({ card, index }: { card: GuideCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="flex h-full flex-col">
        <span className="flex size-11 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
          <card.icon className="size-5" strokeWidth={1.75} />
        </span>

        <h3 className="mt-4 text-xl font-bold text-ink-50">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-400">
          {card.tagline}
        </p>

        <div className="mt-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Dónde vive
          </span>
          <code className="mt-2 block truncate rounded-lg border border-ink-800 bg-ink-950 px-3 py-2 font-mono text-xs text-ink-200">
            {card.location}
          </code>
        </div>

        <div className="mt-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Cómo se invoca
          </span>
          <p className="mt-1 text-sm leading-relaxed text-ink-300">
            {card.invocation}
          </p>
        </div>

        <div className="mt-5 flex-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
            Cuándo usarlo
          </span>
          <ul className="mt-2 space-y-2">
            {card.whenToUse.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink-300">
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={card.docsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300"
        >
          Leer la documentación oficial
          <ExternalLink className="size-3.5" />
        </a>
      </Card>
    </motion.div>
  );
}

export function GuideSection() {
  return (
    <SectionContainer id="guia" showBackground={false}>
      <SectionHeading
        eyebrow="Guía rápida"
        title="Cómo trabajar con agentes y skills"
        description="Resuelven problemas distintos y no compiten entre sí. Así se diferencian y así se combinan."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {GUIDE_CARDS.map((card, index) => (
          <GuideCard key={card.id} card={card} index={index} />
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-ink-800 bg-ink-900/40 px-4 py-3">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={1.75} />
        <p className="text-sm leading-relaxed text-ink-400">
          <span className="font-medium text-ink-200">La diferencia clave: </span>
          una skill es el <span className="text-ink-200">qué</span> (el procedimiento) y un agente
          es el <span className="text-ink-200">quién</span> (quién lo ejecuta y con qué contexto).
          Un agente puede incluso precargar skills concretas para arrancar ya con ese conocimiento.
        </p>
      </div>
    </SectionContainer>
  );
}
