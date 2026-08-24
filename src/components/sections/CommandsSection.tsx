import { Check, Copy, ExternalLink } from "lucide-react";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { COMMAND_GROUPS, COMMANDS } from "../../data/commands";
import type { CommandItem } from "../../types/content";

const ALL_COMMANDS_URL = "https://code.claude.com/docs/es/commands";

function CommandCard({ command }: { command: CommandItem }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <Card className="flex min-w-0 flex-col">
      <div className="flex items-start justify-between gap-3">
        <code className="font-mono text-sm font-semibold text-ink-50">
          {command.name}
        </code>
        {command.isTemplate && (
          <Badge variant="warning" className="shrink-0">
            Plantilla propia
          </Badge>
        )}
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
        {command.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-ink-800 bg-ink-950 px-3 py-2">
        <code className="min-w-0 truncate font-mono text-xs text-ink-200">
          {command.example}
        </code>
        <button
          type="button"
          onClick={() => copy(command.example)}
          aria-label="Copiar comando"
          className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs text-ink-400 transition-colors hover:bg-ink-800 hover:text-ink-50"
        >
          {copied ? (
            <Check className="size-3.5 text-brand-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>
    </Card>
  );
}

export function CommandsSection() {
  return (
    <SectionContainer id="comandos">
      <SectionHeading
        eyebrow="Biblioteca"
        title="Comandos esenciales"
        description="Los slash commands de Claude Code que se repiten al arrancar cualquier proyecto."
      />

      <div className="mt-16 space-y-16">
        {COMMAND_GROUPS.map((group) => (
          <div key={group.category}>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                <group.icon className="size-4.5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-50">
                  {group.title}
                </h3>
                <p className="text-xs text-ink-500">{group.description}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COMMANDS.filter((c) => c.category === group.category).map(
                (command) => (
                  <CommandCard key={command.id} command={command} />
                ),
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                variant="secondary"
                href={ALL_COMMANDS_URL}
                target="_blank"
                rel="noreferrer"
                icon={<ExternalLink className="size-4" />}
              >
                Ver todos los comandos
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
