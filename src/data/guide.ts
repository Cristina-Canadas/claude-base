import { Bot, Sparkles } from "lucide-react";
import type { GuideCardData } from "../types/content";

export const GUIDE_CARDS: GuideCardData[] = [
  {
    id: "agentes",
    icon: Bot,
    title: "Agentes",
    tagline:
      "Definen QUIÉN hace el trabajo: un asistente con su propio contexto, sus propias herramientas y sus propios permisos, aislado de la conversación principal.",
    location: ".claude/agents/<nombre>.md",
    invocation:
      "Automáticamente cuando la tarea encaja con su descripción, invocándolo por su nombre, o directamente con @carpeta/nombre-del-agente.",
    whenToUse: [
      "Tareas ruidosas (logs, exploración de código) que no deben llenar la conversación principal.",
      "Cuando quieres limitar qué herramientas puede usar, por ejemplo un revisor de solo lectura.",
      "Para lanzar varias investigaciones en paralelo sin mezclar resultados entre sí.",
    ],
    docsUrl: "https://code.claude.com/docs/es/sub-agents",
  },
  {
    id: "skills",
    icon: Sparkles,
    title: "Skills",
    tagline:
      "Definen QUÉ sabe hacer Claude: instrucciones reutilizables que se cargan en la conversación actual solo cuando hacen falta.",
    location: ".claude/skills/<nombre>/SKILL.md",
    invocation:
      "Automáticamente cuando el contexto encaja con su descripción, escribiendo /nombre-skill, o directamente con @carpeta/nombre-de-la-skill.",
    whenToUse: [
      "Cuando repites las mismas instrucciones o el mismo checklist una y otra vez en el chat.",
      "Para sacar contenido largo del CLAUDE.md sin que ocupe contexto hasta que se usa de verdad.",
      "Al compartir un procedimiento con todo el equipo a través del propio repositorio.",
    ],
    docsUrl: "https://code.claude.com/docs/es/skills",
  },
];
