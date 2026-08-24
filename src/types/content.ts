import type { LucideIcon } from "lucide-react";

export type CommandCategory = "claude";

export interface CommandItem {
  id: string;
  name: string;
  description: string;
  example: string;
  category: CommandCategory;
  /** True when this is a project convention/template rather than an official command. */
  isTemplate?: boolean;
}

export interface CommandGroup {
  category: CommandCategory;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type AgentCategory =
  | "Frontend"
  | "React"
  | "UI"
  | "Accesibilidad"
  | "Testing"
  | "Rendimiento"
  | "Arquitectura"
  | "DevOps"
  | "Backend"
  | "Base de datos"
  | "QA"
  | "Lenguajes"
  | "Cloud"
  | "Seguridad"
  | "IA"
  | "Documentación"
  | "PDF y OCR"
  | "API";

export interface AgentItem {
  id: string;
  name: string;
  category: AgentCategory;
  description: string;
  whenToUse: string;
  installCommand?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  usefulness: string;
  installCommand?: string;
}

export interface PracticeItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineStepData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  code?: string;
}

export interface GuideCardData {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  location: string;
  invocation: string;
  whenToUse: string[];
  docsUrl: string;
}

export type CommunityResourceCategory = "Directorio" | "Agentes" | "Skills" | "MCPs";

export interface CommunityResourceData {
  id: string;
  title: string;
  description: string;
  url: string;
  category: CommunityResourceCategory;
  /** GitHub star count at time of writing, for repos only. */
  stars?: number;
}
