import { Hero } from "../components/sections/Hero";
import { TimelineSection } from "../components/sections/TimelineSection";
import { CommandsSection } from "../components/sections/CommandsSection";
import { AgentsSection } from "../components/sections/AgentsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { PracticesSection } from "../components/sections/PracticesSection";
import { ChecklistSection } from "../components/sections/ChecklistSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimelineSection />
      <CommandsSection />
      <AgentsSection />
      <SkillsSection />
      <PracticesSection />
      <ChecklistSection />
    </main>
  );
}
