import { useState } from "react";
import { Compass, Bot, Sparkles, Plug, ExternalLink, Star, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { COMMUNITY_RESOURCES } from "../../data/communityResources";
import type {
  CommunityResourceCategory,
  CommunityResourceData,
} from "../../types/content";

const CATEGORY_ICONS: Record<CommunityResourceCategory, LucideIcon> = {
  Directorio: Compass,
  Agentes: Bot,
  Skills: Sparkles,
  MCPs: Plug,
};

const INITIAL_VISIBLE = 3;

function formatStars(stars: number) {
  return stars >= 1000 ? `${Math.round(stars / 100) / 10}k` : `${stars}`;
}

function ResourceCard({
  resource,
  index,
}: {
  resource: CommunityResourceData;
  index: number;
}) {
  const Icon = CATEGORY_ICONS[resource.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
    >
      <Card className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
            <Icon className="size-4.5" strokeWidth={1.75} />
          </span>
          <div className="flex items-center gap-2">
            {resource.stars && (
              <span className="flex items-center gap-1 text-xs text-ink-500">
                <Star className="size-3 fill-current" />
                {formatStars(resource.stars)}
              </span>
            )}
            <Badge variant="outline">{resource.category}</Badge>
          </div>
        </div>

        <h3 className="mt-4 text-base font-semibold text-ink-50">
          {resource.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
          {resource.description}
        </p>

        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-400 hover:text-brand-300"
        >
          Visitar
          <ExternalLink className="size-3.5" />
        </a>
      </Card>
    </motion.div>
  );
}

export function CommunityResourcesSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? COMMUNITY_RESOURCES
    : COMMUNITY_RESOURCES.slice(0, INITIAL_VISIBLE);

  return (
    <SectionContainer id="comunidad">
      <SectionHeading
        eyebrow="Comunidad"
        title="Más directorios para explorar"
        description="Webs conocidas donde navegar agentes, skills y MCPs de la comunidad, con su comando de instalación listo para copiar."
      />

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((resource, index) => (
          <ResourceCard key={resource.id} resource={resource} index={index} />
        ))}
      </motion.div>

      {!showAll && COMMUNITY_RESOURCES.length > INITIAL_VISIBLE && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm text-ink-300 transition-colors hover:text-brand-400"
          >
            Ver más
            <ChevronDown className="size-4" />
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
