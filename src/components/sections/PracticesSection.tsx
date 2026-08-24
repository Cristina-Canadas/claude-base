import { motion } from "framer-motion";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { PRACTICES } from "../../data/practices";

export function PracticesSection() {
  return (
    <SectionContainer id="practicas" className="border-t border-ink-900">
      <SectionHeading
        eyebrow="Centro de buenas prácticas"
        title="Hábitos que marcan la diferencia"
        description="Pequeñas reglas que evitan la mayoría de los problemas al trabajar con Claude Code."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICES.map((practice, index) => (
          <motion.div
            key={practice.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
          >
            <Card className="h-full">
              <practice.icon
                className="size-6 text-brand-500"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 text-lg font-semibold text-ink-50">
                {practice.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {practice.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
