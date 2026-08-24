import type { AgentItem } from "../types/content";

export const AGENTS: AgentItem[] = [
  {
    id: "frontend-developer",
    name: "frontend-developer",
    category: "Frontend",
    description:
      "Construye aplicaciones frontend completas en React, Vue o Angular, desde la arquitectura hasta la integración con el backend.",
    whenToUse:
      "Al levantar una app frontend nueva de principio a fin o modernizar una existente.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/frontend-developer --yes",
  },
  {
    id: "react-specialist",
    name: "react-specialist",
    category: "React",
    description:
      "Optimiza aplicaciones React existentes: rendimiento, hooks avanzados y arquitecturas de estado complejas.",
    whenToUse:
      "Cuando una app React va lenta, tiene re-renders innecesarios o necesitas migrar a versiones nuevas de React.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/react-specialist --yes",
  },
  {
    id: "ui-designer",
    name: "ui-designer",
    category: "UI",
    description:
      "Diseña sistemas de diseño, librerías de componentes y la estética visual de la interfaz.",
    whenToUse:
      "Al crear un design system desde cero o dar un lavado de cara visual a un producto existente.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/ui-designer --yes",
  },
  {
    id: "accessibility-tester",
    name: "accessibility-tester",
    category: "Accesibilidad",
    description:
      "Audita el cumplimiento de WCAG 2.2 y detecta barreras de accesibilidad combinando herramientas automáticas y revisión manual.",
    whenToUse:
      "Antes de dar por cerrada una pantalla o componente nuevo, o para justificar el cumplimiento legal.",
    installCommand:
      "npx claude-code-templates@latest --agent accessibility/accessibility-tester --yes",
  },
  {
    id: "test-generator",
    name: "test-generator",
    category: "Testing",
    description:
      "Analiza los cambios de código y genera casos de test siguiendo las convenciones ya existentes en el proyecto.",
    whenToUse:
      "Después de implementar o modificar una función crítica que necesita cobertura de tests.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/test-generator --yes",
  },
  {
    id: "web-vitals-optimizer",
    name: "web-vitals-optimizer",
    category: "Rendimiento",
    description:
      "Optimiza las Core Web Vitals: LCP, CLS y la capacidad de respuesta ante interacciones.",
    whenToUse:
      "Cuando el rendimiento percibido o el posicionamiento SEO se ven afectados por métricas de carga bajas.",
    installCommand:
      "npx claude-code-templates@latest --agent performance-testing/web-vitals-optimizer --yes",
  },
  {
    id: "code-architect",
    name: "code-architect",
    category: "Arquitectura",
    description:
      "Analiza el código existente y entrega un plano de arquitectura con los archivos y componentes a crear o modificar.",
    whenToUse:
      "Al planificar una feature nueva o un cambio estructural importante.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/code-architect --yes",
  },
  {
    id: "devops-engineer",
    name: "devops-engineer",
    category: "DevOps",
    description:
      "Automatiza pipelines de CI/CD, aprovisionamiento de infraestructura y despliegues en la nube.",
    whenToUse:
      "Al configurar el primer despliegue o automatizar el pipeline de integración continua.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/devops-engineer --yes",
  },

  // Backend
  {
    id: "backend-architect",
    name: "backend-architect",
    category: "Backend",
    description:
      "Diseña arquitecturas backend escalables: APIs, microservicios y sistemas distribuidos.",
    whenToUse:
      "Al diseñar un servicio desde cero o dividir un monolito en microservicios.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/backend-architect --yes",
  },
  {
    id: "backend-developer",
    name: "backend-developer",
    category: "Backend",
    description:
      "Construye sistemas backend seguros y de alto rendimiento con Node.js, Python o Go.",
    whenToUse:
      "Al implementar la lógica de servidor, endpoints o integraciones con la base de datos.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/backend-developer --yes",
  },
  {
    id: "fullstack-developer",
    name: "fullstack-developer",
    category: "Backend",
    description:
      "Desarrolla features completas de principio a fin: base de datos, API y frontend con un stack TypeScript moderno.",
    whenToUse:
      "Cuando una funcionalidad necesita tocar toda la pila, de la base de datos a la interfaz.",
    installCommand:
      "npx claude-code-templates@latest --agent development-team/fullstack-developer --yes",
  },

  // Base de datos
  {
    id: "database-architect",
    name: "database-architect",
    category: "Base de datos",
    description:
      "Diseña el modelo de datos y la arquitectura de bases de datos escalables.",
    whenToUse:
      "Al definir el esquema de una base de datos nueva o replantear uno existente.",
    installCommand:
      "npx claude-code-templates@latest --agent database/database-architect --yes",
  },
  {
    id: "postgres-pro",
    name: "postgres-pro",
    category: "Base de datos",
    description:
      "Experto en PostgreSQL: tuning de rendimiento, replicación y copias de seguridad.",
    whenToUse:
      "Ante problemas de rendimiento en PostgreSQL o al planificar su infraestructura.",
    installCommand:
      "npx claude-code-templates@latest --agent database/postgres-pro --yes",
  },
  {
    id: "nosql-specialist",
    name: "nosql-specialist",
    category: "Base de datos",
    description:
      "Especialista en bases de datos NoSQL: documentales, clave-valor, column-family y de grafos.",
    whenToUse:
      "Al elegir o modelar una base de datos NoSQL para el proyecto.",
    installCommand:
      "npx claude-code-templates@latest --agent database/nosql-specialist --yes",
  },
  {
    id: "database-optimizer",
    name: "database-optimizer",
    category: "Base de datos",
    description:
      "Optimiza consultas, índices y planes de ejecución para lograr tiempos de respuesta mínimos.",
    whenToUse:
      "Cuando las consultas van lentas o hay que revisar los índices de una tabla.",
    installCommand:
      "npx claude-code-templates@latest --agent database/database-optimizer --yes",
  },

  // QA
  {
    id: "qa-expert",
    name: "qa-expert",
    category: "QA",
    description:
      "Diseña estrategias de calidad: planificación de tests, automatización y métricas de calidad.",
    whenToUse:
      "Al definir el plan de pruebas de un proyecto o mejorar el proceso de QA.",
    installCommand:
      "npx claude-code-templates@latest --agent development-tools/qa-expert --yes",
  },
  {
    id: "playwright-tester",
    name: "playwright-tester",
    category: "QA",
    description:
      "Explora la web como lo haría un usuario real y genera tests E2E con Playwright y TypeScript.",
    whenToUse:
      "Para crear o mejorar tests end-to-end basados en los flujos reales de la app.",
    installCommand:
      "npx claude-code-templates@latest --agent development-tools/playwright-tester --yes",
  },
  {
    id: "test-automator",
    name: "test-automator",
    category: "QA",
    description:
      "Diseña frameworks de automatización de tests y los integra en el pipeline de CI/CD.",
    whenToUse:
      "Al montar la automatización de tests desde cero o escalar la cobertura existente.",
    installCommand:
      "npx claude-code-templates@latest --agent development-tools/test-automator --yes",
  },
  {
    id: "debugger",
    name: "debugger",
    category: "QA",
    description:
      "Diagnostica bugs complejos analizando el comportamiento del sistema hasta dar con la causa raíz.",
    whenToUse:
      "Ante un bug difícil de reproducir o que requiere una investigación profunda.",
    installCommand:
      "npx claude-code-templates@latest --agent development-tools/debugger --yes",
  },

  // Lenguajes
  {
    id: "python-pro",
    name: "python-pro",
    category: "Lenguajes",
    description:
      "Desarrolla código Python idiomático, tipado y listo para producción.",
    whenToUse:
      "En proyectos de backend, scripts o pipelines de datos escritos en Python.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/python-pro --yes",
  },
  {
    id: "typescript-pro",
    name: "typescript-pro",
    category: "Lenguajes",
    description:
      "Domina el sistema de tipos avanzado de TypeScript en proyectos full-stack.",
    whenToUse:
      "Al reforzar el tipado de un proyecto o resolver problemas complejos de tipos.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/typescript-pro --yes",
  },
  {
    id: "golang-pro",
    name: "golang-pro",
    category: "Lenguajes",
    description:
      "Construye sistemas concurrentes y eficientes en Go: microservicios, CLIs y programas de sistema.",
    whenToUse: "En proyectos backend o de infraestructura escritos en Go.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/golang-pro --yes",
  },
  {
    id: "vue-expert",
    name: "vue-expert",
    category: "Lenguajes",
    description:
      "Domina la Composition API de Vue 3 y el ecosistema moderno de Vue.",
    whenToUse: "Al construir o refactorizar una aplicación Vue 3.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/vue-expert --yes",
  },
  {
    id: "nextjs-developer",
    name: "nextjs-developer",
    category: "Lenguajes",
    description:
      "Desarrolla aplicaciones Next.js con App Router, server components y despliegue en producción.",
    whenToUse:
      "En proyectos Next.js que necesitan SEO, rendimiento o SSR bien resueltos.",
    installCommand:
      "npx claude-code-templates@latest --agent programming-languages/nextjs-developer --yes",
  },

  // Cloud
  {
    id: "cloud-architect",
    name: "cloud-architect",
    category: "Cloud",
    description:
      "Diseña arquitecturas cloud escalables y seguras en AWS, Azure o GCP.",
    whenToUse:
      "Al planificar la infraestructura cloud de un proyecto o una migración multi-nube.",
    installCommand:
      "npx claude-code-templates@latest --agent devops-infrastructure/cloud-architect --yes",
  },
  {
    id: "kubernetes-specialist",
    name: "kubernetes-specialist",
    category: "Cloud",
    description:
      "Diseña y gestiona clústeres de Kubernetes en producción con foco en seguridad y fiabilidad.",
    whenToUse: "Al desplegar o escalar cargas de trabajo sobre Kubernetes.",
    installCommand:
      "npx claude-code-templates@latest --agent devops-infrastructure/kubernetes-specialist --yes",
  },
  {
    id: "terraform-specialist",
    name: "terraform-specialist",
    category: "Cloud",
    description:
      "Automatiza infraestructura como código y gestiona el estado con Terraform.",
    whenToUse:
      "Al definir o versionar la infraestructura del proyecto con Terraform.",
    installCommand:
      "npx claude-code-templates@latest --agent devops-infrastructure/terraform-specialist --yes",
  },
  {
    id: "sre-engineer",
    name: "sre-engineer",
    category: "Cloud",
    description:
      "Vela por la fiabilidad del sistema: SLIs/SLOs, presupuestos de error y guardias de operación.",
    whenToUse:
      "Al definir objetivos de fiabilidad o mejorar la operación en producción.",
    installCommand:
      "npx claude-code-templates@latest --agent devops-infrastructure/sre-engineer --yes",
  },

  // Seguridad
  {
    id: "security-auditor",
    name: "security-auditor",
    category: "Seguridad",
    description:
      "Realiza auditorías de seguridad y evalúa el cumplimiento normativo.",
    whenToUse:
      "Antes de un lanzamiento importante o para justificar el cumplimiento ante terceros.",
    installCommand:
      "npx claude-code-templates@latest --agent security/security-auditor --yes",
  },
  {
    id: "penetration-tester",
    name: "penetration-tester",
    category: "Seguridad",
    description:
      "Realiza pruebas de intrusión éticas sobre webs, redes, APIs e infraestructura.",
    whenToUse:
      "Para validar de forma activa las defensas de seguridad de la aplicación.",
    installCommand:
      "npx claude-code-templates@latest --agent security/penetration-tester --yes",
  },
  {
    id: "api-security-audit",
    name: "api-security-audit",
    category: "Seguridad",
    description:
      "Detecta y corrige vulnerabilidades de autenticación, autorización y protección de datos en APIs REST.",
    whenToUse:
      "Antes de exponer una API nueva o al revisar la seguridad de una existente.",
    installCommand:
      "npx claude-code-templates@latest --agent security/api-security-audit --yes",
  },

  // IA
  {
    id: "prompt-engineer",
    name: "prompt-engineer",
    category: "IA",
    description:
      "Diseña y optimiza prompts para Claude, buscando resultados consistentes con el menor coste posible.",
    whenToUse:
      "Al construir o mejorar un flujo basado en prompts hacia un modelo de Claude.",
    installCommand:
      "npx claude-code-templates@latest --agent ai-specialists/prompt-engineer --yes",
  },
  {
    id: "llm-architect",
    name: "llm-architect",
    category: "IA",
    description:
      "Diseña sistemas basados en LLMs en producción: arquitectura, fine-tuning y pipelines RAG.",
    whenToUse:
      "Al integrar un modelo de lenguaje en un producto real, más allá de un prototipo.",
    installCommand:
      "npx claude-code-templates@latest --agent ai-specialists/llm-architect --yes",
  },
  {
    id: "model-evaluator",
    name: "model-evaluator",
    category: "IA",
    description:
      "Compara y evalúa modelos de IA para elegir el más adecuado según coste y rendimiento.",
    whenToUse: "Al decidir qué modelo usar para un caso de uso concreto.",
    installCommand:
      "npx claude-code-templates@latest --agent ai-specialists/model-evaluator --yes",
  },

  // Documentación
  {
    id: "technical-writer",
    name: "technical-writer",
    category: "Documentación",
    description:
      "Redacta documentación técnica clara: referencias de API, guías de usuario y tutoriales.",
    whenToUse:
      "Al documentar una funcionalidad nueva o mejorar la documentación existente.",
    installCommand:
      "npx claude-code-templates@latest --agent documentation/technical-writer --yes",
  },
  {
    id: "api-documenter",
    name: "api-documenter",
    category: "Documentación",
    description:
      "Genera documentación de API de alta calidad, con especificación OpenAPI y ejemplos de uso.",
    whenToUse:
      "Al documentar una API nueva o mantener actualizada la existente.",
    installCommand:
      "npx claude-code-templates@latest --agent documentation/api-documenter --yes",
  },
  {
    id: "diagram-architect",
    name: "diagram-architect",
    category: "Documentación",
    description:
      "Genera diagramas técnicos (Mermaid, PlantUML, ASCII) a partir de arquitecturas, ERDs o flujos.",
    whenToUse:
      "Para visualizar la arquitectura del proyecto, un ERD o un diagrama de flujo.",
    installCommand:
      "npx claude-code-templates@latest --agent documentation/diagram-architect --yes",
  },

  // PDF y OCR
  {
    id: "document-structure-analyzer",
    name: "document-structure-analyzer",
    category: "PDF y OCR",
    description:
      "Analiza la estructura de un documento e identifica su jerarquía de contenido y elementos visuales.",
    whenToUse:
      "Antes de extraer texto de un PDF o documento escaneado complejo.",
    installCommand:
      "npx claude-code-templates@latest --agent ocr-extraction-team/document-structure-analyzer --yes",
  },
  {
    id: "visual-analysis-ocr",
    name: "visual-analysis-ocr",
    category: "PDF y OCR",
    description:
      "Extrae texto de imágenes y PDFs preservando el formato y la jerarquía visual original.",
    whenToUse:
      "Al convertir un PDF o una imagen escaneada en texto estructurado.",
    installCommand:
      "npx claude-code-templates@latest --agent ocr-extraction-team/visual-analysis-ocr --yes",
  },
  {
    id: "ocr-quality-assurance",
    name: "ocr-quality-assurance",
    category: "PDF y OCR",
    description:
      "Valida que el texto corregido por OCR sea fiel al documento original.",
    whenToUse:
      "Como última revisión de un proceso de OCR antes de dar el texto por bueno.",
    installCommand:
      "npx claude-code-templates@latest --agent ocr-extraction-team/ocr-quality-assurance --yes",
  },

  // API
  {
    id: "api-architect",
    name: "api-architect",
    category: "API",
    description:
      "Diseña APIs REST y GraphQL de nivel productivo, con seguridad, versionado y resiliencia.",
    whenToUse:
      "Al diseñar una API nueva o decidir entre REST, GraphQL o gRPC.",
    installCommand:
      "npx claude-code-templates@latest --agent api-graphql/api-architect --yes",
  },
  {
    id: "graphql-architect",
    name: "graphql-architect",
    category: "API",
    description:
      "Diseña esquemas GraphQL y arquitecturas de grafo distribuidas con Apollo Federation.",
    whenToUse:
      "En proyectos GraphQL que necesitan federación entre varios servicios.",
    installCommand:
      "npx claude-code-templates@latest --agent api-graphql/graphql-architect --yes",
  },
];
