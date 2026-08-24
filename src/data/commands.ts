import { Sparkles } from "lucide-react";
import type { CommandItem, CommandGroup } from "../types/content";

export const COMMAND_GROUPS: CommandGroup[] = [
  {
    category: "claude",
    title: "Comandos de Claude Code",
    description: "Slash commands para gestionar la sesión y el contexto.",
    icon: Sparkles,
  },
];

export const COMMANDS: CommandItem[] = [
  {
    id: "claude-init",
    name: "/init",
    description:
      "Analiza el repositorio y genera un CLAUDE.md inicial con el contexto del proyecto.",
    example: "/init",
    category: "claude",
  },
  {
    id: "claude-clear",
    name: "/clear",
    description:
      "Limpia el historial de la conversación actual para continuar con contexto limpio.",
    example: "/clear",
    category: "claude",
  },
  {
    id: "claude-compact",
    name: "/compact",
    description:
      "Resume la conversación para liberar espacio de contexto sin perder el hilo.",
    example: "/compact",
    category: "claude",
  },
  {
    id: "claude-review",
    name: "/review",
    description: "Pide a Claude que revise el código o los cambios pendientes.",
    example: "/review",
    category: "claude",
  },
  {
    id: "claude-permissions",
    name: "/permissions",
    description:
      "Gestiona qué acciones puede ejecutar Claude sin pedir confirmación.",
    example: "/permissions",
    category: "claude",
  },
  {
    id: "claude-model",
    name: "/model",
    description: "Cambia el modelo de Claude usado en la sesión actual.",
    example: "/model",
    category: "claude",
  },
];
