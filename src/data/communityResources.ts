import type { CommunityResourceData } from "../types/content";

export const COMMUNITY_RESOURCES: CommunityResourceData[] = [
  // Primeras 3: webs navegables con comando de instalación
  {
    id: "aitmpl",
    title: "aitmpl.com",
    description:
      "Marketplace visual de Claude Code Templates: agentes, skills, comandos, hooks y MCPs, cada uno con su comando npx listo para copiar. Es la fuente de los agentes y skills de este sitio.",
    url: "https://aitmpl.com/",
    category: "Directorio",
  },
  {
    id: "skillsagentes",
    title: "skillsagentes.com",
    description:
      "Directorio en español con más de 1.800 skills y 116 servidores MCP catalogados, cada uno con su comando de instalación.",
    url: "https://skillsagentes.com/",
    category: "Directorio",
  },
  {
    id: "ccmarket",
    title: "ccmarket.dev",
    description:
      "Más de 150 subagentes especializados para Claude Code, listos para copiar como snippet de instalación y guardar en ~/.claude/agents/.",
    url: "https://www.ccmarket.dev/",
    category: "Agentes",
  },

  // Resto: se revelan al pulsar "Ver más"
  {
    id: "awesomeclaude",
    title: "awesomeclaude.ai",
    description:
      "Catálogo de cientos de skills de la comunidad organizadas por categoría: documentos, desarrollo, datos, seguridad y más.",
    url: "https://awesomeclaude.ai/awesome-claude-skills",
    category: "Skills",
  },
  {
    id: "smithery",
    title: "smithery.ai",
    description:
      "Marketplace de servidores MCP instalables mediante su propia CLI, o ejecutables ya alojados en su infraestructura.",
    url: "https://smithery.ai/",
    category: "MCPs",
  },
  {
    id: "glama",
    title: "glama.ai",
    description:
      "Registro de servidores MCP con más de 77.000 catalogados, filtrables por lenguaje, categoría y tipo de hosting.",
    url: "https://glama.ai/mcp/servers",
    category: "MCPs",
  },
  {
    id: "mcp-so",
    title: "mcp.so",
    description:
      "Uno de los directorios de servidores MCP más grandes, con miles de servidores catalogados y actualizados constantemente.",
    url: "https://mcp.so/",
    category: "MCPs",
  },
  {
    id: "awesome-claude-code",
    title: "hesreallyhim/awesome-claude-code",
    description:
      "Lista curada a mano de skills, agentes, status lines, herramientas de desarrollo y plugins para Claude Code.",
    url: "https://github.com/hesreallyhim/awesome-claude-code",
    category: "Directorio",
    stars: 52900,
  },
  {
    id: "voltagent-subagents",
    title: "VoltAgent/awesome-claude-code-subagents",
    description:
      "Colección de más de 100 subagentes especializados de Claude Code, organizados por categoría de desarrollo.",
    url: "https://github.com/VoltAgent/awesome-claude-code-subagents",
    category: "Agentes",
    stars: 24600,
  },
  {
    id: "wshobson-agents",
    title: "wshobson/agents",
    description:
      "Marketplace de agentes y plugins compatible con Claude Code, Codex, Cursor, OpenCode y GitHub Copilot.",
    url: "https://github.com/wshobson/agents",
    category: "Agentes",
    stars: 39000,
  },
  {
    id: "superpowers",
    title: "obra/superpowers",
    description:
      "El framework de skills más popular para Claude Code: impone una metodología de desarrollo estricta con TDD obligatorio.",
    url: "https://github.com/obra/superpowers",
    category: "Skills",
    stars: 276800,
  },
  {
    id: "composio-skills",
    title: "ComposioHQ/awesome-claude-skills",
    description:
      "Lista curada de skills y recursos para personalizar los flujos de trabajo de Claude.",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    category: "Skills",
    stars: 73100,
  },
  {
    id: "mcp-servers",
    title: "modelcontextprotocol/servers",
    description:
      "Repositorio oficial de servidores MCP de referencia, mantenido por la organización del propio Model Context Protocol.",
    url: "https://github.com/modelcontextprotocol/servers",
    category: "MCPs",
    stars: 89800,
  },
];
