import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { CHECKLIST_ITEMS } from "../../data/checklist";

export function ChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const total = CHECKLIST_ITEMS.length;
  const done = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((done / total) * 100);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <SectionContainer id="checklist" className="border-t border-ink-900">
      <SectionHeading
        eyebrow="Checklist"
        title="Checklist inicial"
        description="Repasa estos puntos antes de empezar a construir en serio. Es solo una guía visual: no se guarda entre sesiones."
        align="center"
      />

      <Card className="mx-auto mt-12 max-w-2xl" hover={false}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-ink-50">
              {done} de {total} completados
            </p>
            <p className="text-xs text-ink-500">
              {progress === 100
                ? "Listo para empezar a desarrollar."
                : "Sigue repasando el entorno antes de arrancar."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setChecked({})}
            className="flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1.5 text-xs text-ink-400 transition-colors hover:border-brand-500 hover:text-brand-400"
          >
            <RotateCcw className="size-3.5" />
            Reiniciar
          </button>
        </div>

        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink-800">
          <motion.div
            className="h-full rounded-full bg-brand-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <ul className="mt-8 space-y-1">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = Boolean(checked[item.id]);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors hover:bg-ink-800/60"
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                      isChecked
                        ? "border-brand-500 bg-brand-500"
                        : "border-ink-700"
                    }`}
                  >
                    {isChecked && <Check className="size-3.5 text-white" />}
                  </span>
                  <span
                    className={`text-sm transition-colors ${
                      isChecked
                        ? "text-ink-500 line-through"
                        : "text-ink-200"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </Card>
    </SectionContainer>
  );
}
