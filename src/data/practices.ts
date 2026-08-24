import {
  Target,
  Scissors,
  Footprints,
  GitBranch,
  Filter,
  Eye,
  NotebookPen,
} from "lucide-react";
import type { PracticeItem } from "../types/content";

export const PRACTICES: PracticeItem[] = [
  {
    id: "define-objetivo",
    icon: Target,
    title: "Define primero el objetivo",
    description:
      "Explica qué quieres construir y para quién antes de pedir cualquier otra cosa.",
  },
  {
    id: "divide-tareas",
    icon: Scissors,
    title: "Divide las tareas grandes",
    description:
      "Rompe el trabajo en piezas pequeñas y concretas en lugar de pedir todo de una vez.",
  },
  {
    id: "paso-a-paso",
    icon: Footprints,
    title: "Trabaja paso a paso",
    description:
      "Avanza de forma incremental y valida cada paso antes de continuar con el siguiente.",
  },
  {
    id: "usa-git",
    icon: GitBranch,
    title: "Utiliza Git antes de cambios importantes",
    description:
      "Haz commit del estado actual antes de refactorizar o de pedir cambios grandes.",
  },
  {
    id: "no-sobrecargar-contexto",
    icon: Filter,
    title: "No pidas demasiado contexto en una sola petición",
    description:
      "Un exceso de información dispersa dificulta que Claude priorice lo importante.",
  },
  {
    id: "revisa-codigo",
    icon: Eye,
    title: "Revisa siempre el código generado",
    description:
      "Nunca des por bueno un cambio sin entenderlo y comprobarlo tú mismo.",
  },
  {
    id: "documenta-decisiones",
    icon: NotebookPen,
    title: "Documenta las decisiones importantes",
    description:
      "Deja constancia del porqué de una decisión técnica, no solo del qué se hizo.",
  },
];
