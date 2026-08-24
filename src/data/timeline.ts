import {
  FolderPlus,
  Terminal,
  Sparkles,
  Target,
  FileText,
  Bot,
  ListChecks,
  Rocket,
} from "lucide-react";
import type { TimelineStepData } from "../types/content";

export const TIMELINE_STEPS: TimelineStepData[] = [
  {
    id: "crear-proyecto",
    icon: FolderPlus,
    title: "Crear el proyecto",
    description:
      "Crea la carpeta del proyecto e inicializa el repositorio Git desde el principio.",
    code: "mkdir mi-proyecto && cd mi-proyecto && git init",
  },
  {
    id: "abrir-claude-code",
    icon: Terminal,
    title: "Abrir Claude Code",
    description:
      "Inicia Claude Code dentro de la carpeta del proyecto para empezar a trabajar con contexto desde el primer momento.",
    code: "claude",
  },
  {
    id: "ejecutar-init",
    icon: Sparkles,
    title: "Ejecutar /init",
    description:
      "Genera automáticamente un primer CLAUDE.md analizando la estructura del repositorio.",
    code: "/init",
  },
  {
    id: "definir-objetivo",
    icon: Target,
    title: "Definir el objetivo del proyecto",
    description:
      "Explica en una o dos frases qué vas a construir y para quién, antes de pedir cualquier otra cosa. Un objetivo claro evita retrabajo más adelante.",
  },
  {
    id: "configurar-contexto",
    icon: FileText,
    title: "Configurar el contexto",
    description:
      "Ajusta el CLAUDE.md con el stack, las convenciones del equipo, la estructura de carpetas y cualquier restricción importante.",
  },
  {
    id: "instalar-agentes",
    icon: Bot,
    title: "Instalar agentes y skills",
    description:
      "Añade únicamente los agentes y skills que este proyecto concreto vaya a necesitar, en lugar de instalar todo por defecto.",
  },
  {
    id: "revisar-checklist",
    icon: ListChecks,
    title: "Revisar la checklist",
    description:
      "Repasa la checklist inicial para confirmar que el entorno, la arquitectura y las dependencias están listos.",
  },
  {
    id: "comenzar-desarrollo",
    icon: Rocket,
    title: "Comenzar el desarrollo",
    description:
      "Empieza a construir paso a paso, dividiendo el trabajo en tareas pequeñas y revisables.",
    code: "npm install",
  },
];
