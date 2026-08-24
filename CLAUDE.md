# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React/Vite site (content in Spanish) documenting Claude Code best practices: commands, subagents, skills, workflow practices, a checklist, and resources. There is no backend — it's static content rendered client-side.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then build with Vite
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build

There is no test suite configured in this project.

## Architecture

The entire site is one route (`/`, plus a catch-all 404) rendered through a strict content/presentation split:

- **`src/types/content.ts`** — the single source of truth for content shapes (`CommandItem`, `AgentItem`, `SkillItem`, `PracticeItem`, `ChecklistItemData`, `ResourceItem`, `TimelineStepData`, etc.). Add new fields here first.
- **`src/data/*.ts`** — plain data arrays/objects conforming to those types (e.g. `commands.ts`, `agents.ts`, `skills.ts`, `practices.ts`, `checklist.ts`, `resources.ts`, `timeline.ts`). This is where content edits happen — no JSX lives here.
- **`src/components/sections/*.tsx`** — one section per page block (`Hero`, `AboutSection`, `TimelineSection`, `CommandsSection`, `AgentsSection`, `SkillsSection`, `PracticesSection`, `ChecklistSection`, `ResourcesSection`). Each imports its matching data file from `src/data/` and maps over it; they don't hold content directly. `src/pages/Home.tsx` composes all sections in order.
- **`src/components/ui/*.tsx`** — shared presentational primitives (`Card`, `Badge`, `Button`, `CodeBlock`, `SectionHeading`, `TerminalWindow`) used across sections.
- **`src/components/layout/*.tsx`** — page chrome: `Layout` (wraps `Navbar` + `Outlet` + `Footer`), `SectionContainer` (the standard scroll-reveal wrapper every section uses).
- **`src/router.tsx`** — `createBrowserRouter` with `Layout` as root and `Home`/`NotFound` as children.

When adding a new content section: add the type to `content.ts`, add the data file under `data/`, build the section component under `components/sections/`, then wire it into `Home.tsx`.

Some data items carry a flag to distinguish official Claude Code behavior from project-specific convention (e.g. `CommandItem.isTemplate`, `ResourceItem.isExample`) — these render a "Plantilla propia"/example badge in the UI so invented examples aren't mistaken for verified facts. Preserve this distinction when adding similar content.

### Styling

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` — theme is defined inline in `src/index.css` under `@theme`). Custom design tokens:
- `brand-{50-900}` — orange accent scale
- `ink-{50-950}` — near-black neutral scale (used instead of Tailwind's default `gray`/`black`)
- `font-sans` (Inter) / `font-mono` (JetBrains Mono)

Animations use `framer-motion` (`motion.div`/`motion.section`), notably the scroll-reveal pattern in `SectionContainer` — reuse it rather than adding new IntersectionObserver logic.

Icons come from `lucide-react`.
