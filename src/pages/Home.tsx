import { Hero } from "../components/sections/Hero";
import { TimelineSection } from "../components/sections/TimelineSection";
import { CommandsSection } from "../components/sections/CommandsSection";
import { AgentsSection } from "../components/sections/AgentsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { GuideSection } from "../components/sections/GuideSection";
import { CommunityResourcesSection } from "../components/sections/CommunityResourcesSection";
import { PracticesSection } from "../components/sections/PracticesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TimelineSection />
      <CommandsSection />
      <AgentsSection />
      <SkillsSection />
      <GuideSection />
      <CommunityResourcesSection />
      <PracticesSection />
    </main>
  );
}
