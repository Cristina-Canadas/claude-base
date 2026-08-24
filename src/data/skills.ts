import type { SkillItem } from "../types/content";

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    id: "react-best-practices",
    name: "react-best-practices",
    category: "Frontend",
    description:
      "Guía de más de 40 reglas para optimizar el rendimiento de aplicaciones React y Next.js: bundles, renderizado y cuellos de botella.",
    usefulness:
      "Útil al revisar el rendimiento de una app React o refactorizar componentes lentos.",
    installCommand:
      "npx claude-code-templates@latest --skill web-development/react-best-practices --yes",
  },
  {
    id: "tailwind-design-system",
    name: "tailwind-design-system",
    category: "Frontend",
    description:
      "Construye design systems listos para producción con Tailwind CSS: tokens, variantes de componentes y accesibilidad.",
    usefulness:
      "Ideal al montar o mantener el sistema de diseño de un proyecto con Tailwind.",
    installCommand:
      "npx claude-code-templates@latest --skill web-development/tailwind-design-system --yes",
  },
  {
    id: "nextjs-app-router-patterns",
    name: "nextjs-app-router-patterns",
    category: "Frontend",
    description:
      "Patrones completos para el App Router de Next.js 14+, Server Components y desarrollo full-stack moderno.",
    usefulness:
      "Útil al estructurar rutas, layouts o server components en un proyecto Next.js.",
    installCommand:
      "npx claude-code-templates@latest --skill web-development/nextjs-app-router-patterns --yes",
  },
  {
    id: "web-performance-optimization",
    name: "web-performance-optimization",
    category: "Frontend",
    description:
      "Optimiza el rendimiento web: velocidad de carga, Core Web Vitals, tamaño de bundle y estrategias de caché.",
    usefulness:
      "Cuando el sitio va lento o hay que mejorar las métricas de Core Web Vitals.",
    installCommand:
      "npx claude-code-templates@latest --skill web-development/web-performance-optimization --yes",
  },

  // Backend
  {
    id: "api-design-principles",
    name: "api-design-principles",
    category: "Backend",
    description:
      "Principios de diseño de APIs REST y GraphQL para construir interfaces intuitivas y mantenibles.",
    usefulness: "Al diseñar los endpoints de una API nueva o revisar una existente.",
    installCommand:
      "npx claude-code-templates@latest --skill development/api-design-principles --yes",
  },
  {
    id: "nodejs-backend-patterns",
    name: "nodejs-backend-patterns",
    category: "Backend",
    description:
      "Guía completa para construir backends Node.js escalables y listos para producción.",
    usefulness: "Al levantar o estructurar el backend de un proyecto en Node.js.",
    installCommand:
      "npx claude-code-templates@latest --skill development/nodejs-backend-patterns --yes",
  },
  {
    id: "fastapi-pro",
    name: "fastapi-pro",
    category: "Backend",
    description:
      "Construye APIs asíncronas de alto rendimiento con FastAPI, SQLAlchemy 2.0 y Pydantic V2.",
    usefulness: "En proyectos backend en Python que usan FastAPI.",
    installCommand:
      "npx claude-code-templates@latest --skill development/fastapi-pro --yes",
  },
  {
    id: "microservices-patterns",
    name: "microservices-patterns",
    category: "Backend",
    description:
      "Patrones de arquitectura de microservicios: límites de servicio, comunicación y resiliencia.",
    usefulness:
      "Al diseñar un sistema distribuido o dividir un backend en microservicios.",
    installCommand:
      "npx claude-code-templates@latest --skill development/microservices-patterns --yes",
  },

  // Base de datos
  {
    id: "database-architect",
    name: "database-architect",
    category: "Base de datos",
    description:
      "Diseña la capa de datos desde cero: selección de tecnología, modelado de esquemas y arquitectura escalable.",
    usefulness: "Al definir la base de datos de un proyecto nuevo.",
    installCommand:
      "npx claude-code-templates@latest --skill database/database-architect --yes",
  },
  {
    id: "postgresql-optimization",
    name: "postgresql-optimization",
    category: "Base de datos",
    description:
      "Optimiza PostgreSQL: tuning de consultas, estrategias de indexado y análisis de rendimiento.",
    usefulness: "Ante consultas lentas o al preparar PostgreSQL para producción.",
    installCommand:
      "npx claude-code-templates@latest --skill database/postgresql-optimization --yes",
  },
  {
    id: "database-migration",
    name: "database-migration",
    category: "Base de datos",
    description:
      "Gestiona migraciones de esquema y datos con Sequelize, TypeORM o Prisma, con estrategias de rollback.",
    usefulness: "Al versionar cambios de esquema o hacer despliegues sin downtime.",
    installCommand:
      "npx claude-code-templates@latest --skill database/database-migration --yes",
  },
  {
    id: "sql-pro",
    name: "sql-pro",
    category: "Base de datos",
    description:
      "SQL moderno para bases de datos cloud-native: optimización OLTP/OLAP y consultas avanzadas.",
    usefulness: "Al escribir o afinar consultas SQL complejas.",
    installCommand: "npx claude-code-templates@latest --skill database/sql-pro --yes",
  },

  // Testing
  {
    id: "playwright-skill",
    name: "playwright",
    category: "Testing",
    description:
      "Automatiza un navegador real desde la terminal: navegación, formularios, capturas y extracción de datos.",
    usefulness:
      "Para depurar flujos de UI o automatizar tareas de navegador desde Claude Code.",
    installCommand:
      "npx claude-code-templates@latest --skill development/playwright --yes",
  },
  {
    id: "e2e-testing-patterns",
    name: "e2e-testing-patterns",
    category: "Testing",
    description:
      "Construye suites de tests end-to-end fiables, rápidas y mantenibles.",
    usefulness: "Al montar la cobertura end-to-end de una aplicación.",
    installCommand:
      "npx claude-code-templates@latest --skill development/e2e-testing-patterns --yes",
  },
  {
    id: "tdd-workflow",
    name: "tdd-workflow",
    category: "Testing",
    description: "Flujo de Test-Driven Development: ciclo RED-GREEN-REFACTOR.",
    usefulness: "Al desarrollar una función siguiendo TDD desde el primer test.",
    installCommand:
      "npx claude-code-templates@latest --skill development/tdd-workflow --yes",
  },

  // Documentos y PDF
  {
    id: "pdf-processing-pro",
    name: "pdf-processing-pro",
    category: "PDF y documentos",
    description:
      "Procesamiento de PDF de nivel productivo: formularios, tablas, OCR y validación en lote.",
    usefulness:
      "Al automatizar flujos de PDF a gran volumen o con validaciones estrictas.",
    installCommand:
      "npx claude-code-templates@latest --skill document-processing/pdf-processing-pro --yes",
  },
  {
    id: "pdf",
    name: "pdf",
    category: "PDF y documentos",
    description:
      "Lee, extrae, combina, divide o rellena archivos PDF, incluyendo OCR sobre PDFs escaneados.",
    usefulness: "Para cualquier tarea sobre un archivo PDF: leerlo, editarlo o generarlo.",
    installCommand:
      "npx claude-code-templates@latest --skill document-processing/pdf --yes",
  },
  {
    id: "docx",
    name: "docx",
    category: "PDF y documentos",
    description:
      "Crea, lee y edita documentos Word (.docx): tablas de contenido, cabeceras y plantillas.",
    usefulness: "Al generar informes, memorandos o plantillas en formato Word.",
    installCommand:
      "npx claude-code-templates@latest --skill document-processing/docx --yes",
  },
  {
    id: "xlsx",
    name: "xlsx",
    category: "PDF y documentos",
    description:
      "Crea, lee y corrige hojas de cálculo (.xlsx, .csv): fórmulas, formato y limpieza de datos.",
    usefulness:
      "Al trabajar con datos tabulares que deben entregarse como hoja de cálculo.",
    installCommand:
      "npx claude-code-templates@latest --skill document-processing/xlsx --yes",
  },

  // Seguridad
  {
    id: "security-audit",
    name: "security-audit",
    category: "Seguridad",
    description:
      "Auditoría de seguridad integral: testing de aplicaciones web, seguridad de APIs y hardening.",
    usefulness: "Antes de un lanzamiento importante o una revisión de seguridad completa.",
    installCommand:
      "npx claude-code-templates@latest --skill security/security-audit --yes",
  },
  {
    id: "api-security-testing",
    name: "api-security-testing",
    category: "Seguridad",
    description:
      "Testing de seguridad para APIs REST y GraphQL: autenticación, autorización y rate limiting.",
    usefulness: "Al validar la seguridad de una API antes de exponerla.",
    installCommand:
      "npx claude-code-templates@latest --skill security/api-security-testing --yes",
  },
  {
    id: "sql-injection-testing",
    name: "sql-injection-testing",
    category: "Seguridad",
    description:
      "Técnicas para identificar y explotar vulnerabilidades de inyección SQL en distintos motores de base de datos.",
    usefulness:
      "En pruebas de penetración autorizadas sobre una aplicación con base de datos.",
    installCommand:
      "npx claude-code-templates@latest --skill security/sql-injection-testing --yes",
  },
  {
    id: "top-web-vulnerabilities",
    name: "top-web-vulnerabilities",
    category: "Seguridad",
    description:
      "Taxonomía de las vulnerabilidades web más comunes, con causas, impacto y mitigación alineada con OWASP.",
    usefulness: "Como referencia al revisar o explicar fallos de seguridad de una aplicación.",
    installCommand:
      "npx claude-code-templates@latest --skill security/top-web-vulnerabilities --yes",
  },

  // DevOps
  {
    id: "docker-expert",
    name: "docker-expert",
    category: "DevOps",
    description:
      "Optimiza Dockerfiles y builds multi-stage, y gestiona la seguridad y orquestación con Docker Compose.",
    usefulness: "Al dockerizar una app o resolver problemas de tamaño y seguridad de imágenes.",
    installCommand:
      "npx claude-code-templates@latest --skill development/docker-expert --yes",
  },
  {
    id: "kubernetes-architect",
    name: "kubernetes-architect",
    category: "DevOps",
    description:
      "Arquitectura de infraestructura cloud-native e integración de GitOps con ArgoCD o Flux.",
    usefulness: "Al diseñar el despliegue de una app sobre Kubernetes con GitOps.",
    installCommand:
      "npx claude-code-templates@latest --skill development/kubernetes-architect --yes",
  },
  {
    id: "github-actions-creator",
    name: "github-actions-creator",
    category: "DevOps",
    description:
      "Crea workflows de GitHub Actions: CI/CD, tests, despliegue, linting y escaneo de seguridad.",
    usefulness: "Al montar o ampliar el pipeline de CI/CD del proyecto.",
    installCommand:
      "npx claude-code-templates@latest --skill development/github-actions-creator --yes",
  },

  // Diseño
  {
    id: "figma",
    name: "figma",
    category: "Diseño",
    description:
      "Trae contexto de diseño, capturas y variables desde Figma y las traduce a código de producción.",
    usefulness: "Al implementar un diseño de Figma directamente como código.",
    installCommand:
      "npx claude-code-templates@latest --skill creative-design/figma --yes",
  },
  {
    id: "ui-design-system",
    name: "ui-design-system",
    category: "Diseño",
    description:
      "Kit de sistema de diseño UI: tokens, documentación de componentes y cálculos responsive.",
    usefulness: "Para mantener la consistencia visual y el traspaso diseño-desarrollo.",
    installCommand:
      "npx claude-code-templates@latest --skill creative-design/ui-design-system --yes",
  },
  {
    id: "accessibility-auditor-skill",
    name: "accessibility-auditor",
    category: "Diseño",
    description:
      "Especialista en accesibilidad web: cumplimiento WCAG, ARIA y diseño inclusivo.",
    usefulness: "Al auditar una interfaz para cumplir WCAG 2.1 AA/AAA.",
    installCommand:
      "npx claude-code-templates@latest --skill creative-design/accessibility-auditor --yes",
  },
  {
    id: "tailwind-patterns",
    name: "tailwind-patterns",
    category: "Diseño",
    description:
      "Principios de Tailwind CSS v4: configuración CSS-first, container queries y tokens de diseño.",
    usefulness: "Al adoptar o migrar un proyecto a los patrones modernos de Tailwind v4.",
    installCommand:
      "npx claude-code-templates@latest --skill creative-design/tailwind-patterns --yes",
  },

  // Productividad
  {
    id: "code-review-excellence",
    name: "code-review-excellence",
    category: "Productividad",
    description:
      "Convierte las code reviews en una oportunidad de aprendizaje con feedback constructivo y sistemático.",
    usefulness: "Al revisar el código de otra persona o mejorar la cultura de revisión del equipo.",
    installCommand:
      "npx claude-code-templates@latest --skill productivity/code-review-excellence --yes",
  },
  {
    id: "debugging-strategies",
    name: "debugging-strategies",
    category: "Productividad",
    description: "Estrategias sistemáticas para depurar sin depender de la prueba y error.",
    usefulness: "Ante un bug difícil de rastrear que necesita un enfoque metódico.",
    installCommand:
      "npx claude-code-templates@latest --skill productivity/debugging-strategies --yes",
  },
  {
    id: "writing-plans",
    name: "writing-plans",
    category: "Productividad",
    description:
      "Convierte una spec o unos requisitos en un plan de implementación antes de tocar código.",
    usefulness: "Al planificar una tarea multi-paso antes de empezar a programar.",
    installCommand:
      "npx claude-code-templates@latest --skill productivity/writing-plans --yes",
  },
  {
    id: "performance-optimizer-skill",
    name: "performance-optimizer",
    category: "Productividad",
    description:
      "Detecta y corrige cuellos de botella de rendimiento en código, bases de datos y APIs, midiendo antes y después.",
    usefulness: "Cuando hay que demostrar con datos la mejora de rendimiento tras una optimización.",
    installCommand:
      "npx claude-code-templates@latest --skill productivity/performance-optimizer --yes",
  },

  // Git
  {
    id: "commit-smart",
    name: "commit-smart",
    category: "Git",
    description:
      "Analiza los cambios en staging y genera commits semánticos explicando el porqué, no solo el qué.",
    usefulness: "Para escribir mensajes de commit consistentes sin pensarlos manualmente.",
    installCommand: "npx claude-code-templates@latest --skill git/commit-smart --yes",
  },
  {
    id: "git-context-controller",
    name: "git-context-controller",
    category: "Git",
    description:
      "Gestiona la memoria del agente como un sistema de archivos versionado para proyectos multi-sesión.",
    usefulness: "En proyectos largos donde hace falta recuperar contexto entre sesiones distintas.",
    installCommand:
      "npx claude-code-templates@latest --skill git/git-context-controller --yes",
  },

  // Lenguajes
  {
    id: "typescript-pro-skill",
    name: "typescript-pro",
    category: "Lenguajes",
    description: "TypeScript avanzado: tipos genéricos, decoradores y patrones de nivel enterprise.",
    usefulness: "Al resolver problemas complejos de tipado en un proyecto TypeScript.",
    installCommand:
      "npx claude-code-templates@latest --skill development/typescript-pro --yes",
  },
  {
    id: "python-pro-skill",
    name: "python-pro",
    category: "Lenguajes",
    description:
      "Python 3.12+ moderno: async, rendimiento y buenas prácticas de producción con uv, ruff y pydantic.",
    usefulness: "En proyectos Python que buscan seguir las prácticas más actuales del ecosistema.",
    installCommand:
      "npx claude-code-templates@latest --skill development/python-pro --yes",
  },
  {
    id: "golang-pro-skill",
    name: "golang-pro",
    category: "Lenguajes",
    description:
      "Go 1.21+ moderno: concurrencia avanzada, rendimiento y microservicios listos para producción.",
    usefulness: "En proyectos backend o de infraestructura escritos en Go.",
    installCommand:
      "npx claude-code-templates@latest --skill development/golang-pro --yes",
  },

  // Automatización
  {
    id: "github-actions-templates",
    name: "github-actions-templates",
    category: "Automatización",
    description:
      "Patrones de workflows de GitHub Actions listos para producción: test, build y despliegue.",
    usefulness: "Como punto de partida para el pipeline de CI/CD de un proyecto nuevo.",
    installCommand:
      "npx claude-code-templates@latest --skill workflow-automation/github-actions-templates --yes",
  },
  {
    id: "n8n-workflow-patterns",
    name: "n8n-workflow-patterns",
    category: "Automatización",
    description: "Patrones de arquitectura probados para construir workflows en n8n.",
    usefulness: "Al automatizar procesos con n8n de forma robusta y mantenible.",
    installCommand:
      "npx claude-code-templates@latest --skill workflow-automation/n8n-workflow-patterns --yes",
  },
  {
    id: "zapier-make-patterns",
    name: "zapier-make-patterns",
    category: "Automatización",
    description:
      "Cuándo usar Zapier o Make, y cómo construir automatizaciones no-code fiables sin caer en sus límites.",
    usefulness: "Al automatizar un proceso de negocio sin escribir código, eligiendo la herramienta adecuada.",
    installCommand:
      "npx claude-code-templates@latest --skill workflow-automation/zapier-make-patterns --yes",
  },
];
