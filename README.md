# Claude Base

Landing page de una sola página (en español) que documenta buenas prácticas para trabajar con **Claude Code**: comandos, agentes, skills, un flujo de trabajo recomendado y recursos de la comunidad. No tiene backend — es contenido estático renderizado en el cliente con React y Vite.

🔗 **Demo:** [claude-base-livid.vercel.app](https://claude-base-livid.vercel.app/)

## Contenido de la página

La web se compone de las siguientes secciones, en este orden:

1. **Hero** — presentación del proyecto.
2. **Flujo recomendado** — ocho pasos para arrancar un proyecto nuevo con Claude Code, en un carrusel horizontal con arrastre e inercia.
3. **Comandos esenciales** — slash commands de Claude Code, con comando de copia rápida.
4. **Agentes recomendados** — catálogo filtrable de subagentes reales, con su comando de instalación (`npx claude-code-templates@latest --agent ...`), extraídos del proyecto community [Claude Code Templates](https://aitmpl.com/).
5. **Skills útiles** — mismo formato que Agentes, pero para skills instalables.
6. **Guía rápida** — comparativa de cuándo usar un agente y cuándo usar una skill, con enlaces a la documentación oficial.
7. **Comunidad** — otros directorios y repositorios conocidos del ecosistema (webs con comandos de instalación y algunos repos de GitHub destacados).
8. **Centro de buenas prácticas** — hábitos que evitan los problemas más comunes al trabajar con Claude Code.

## Stack técnico

- **[React 19](https://react.dev/)** + **[Vite](https://vite.dev/)** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** para los estilos (tema definido inline en `src/index.css`, sin `tailwind.config.js`)
- **[Framer Motion](https://motion.dev/)** para las animaciones (scroll-reveal, carrusel con inercia, flotación del icono del Hero, etc.)
- **[React Router](https://reactrouter.com/)** para el enrutado (una única ruta `/` más un catch-all 404)
- **[lucide-react](https://lucide.dev/)** para los iconos
- **[oxlint](https://oxc.rs/)** como linter

## Arquitectura

El proyecto sigue una separación estricta entre contenido y presentación:

```
src/
├── types/content.ts       # tipos que definen la forma de cada tipo de contenido
├── data/*.ts               # datos reales (arrays de objetos), sin JSX
├── components/
│   ├── sections/*.tsx      # un componente por bloque de la página; mapean su data/*.ts
│   ├── ui/*.tsx             # primitivas reutilizables (Card, Badge, Button, SectionHeading...)
│   └── layout/*.tsx         # Navbar, Footer, Layout, SectionContainer
├── pages/Home.tsx          # compone todas las secciones en orden
└── router.tsx               # configuración de react-router
```

Para añadir una sección de contenido nueva: define el tipo en `content.ts`, crea el archivo de datos en `data/`, construye el componente en `components/sections/` y añádelo a `Home.tsx`.

Algunos elementos llevan un flag (`isTemplate`, `isExample`) para distinguir contenido oficial verificado de convenciones propias del proyecto o ejemplos inventados — se muestran con una etiqueta "Plantilla propia" en la interfaz.

## Comandos

```bash
npm install       # instala las dependencias
npm run dev       # arranca el servidor de desarrollo
npm run build     # comprueba tipos (tsc -b) y genera el build de producción
npm run lint      # ejecuta oxlint
npm run preview   # sirve el build de producción en local
```

No hay suite de tests configurada en este proyecto.

## Despliegue

Desplegado en [Vercel](https://vercel.com/), detectado automáticamente como proyecto Vite (`npm run build`, carpeta de salida `dist`).

## Aviso

Claude Base es un proyecto independiente creado por la comunidad. No es un producto oficial de Anthropic ni está afiliado a Anthropic, PBC.
