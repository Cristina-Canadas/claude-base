import { Terminal } from "lucide-react";

const GITHUB_URL = "https://github.com/tu-usuario/claude-base";

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                <Terminal className="size-4.5" strokeWidth={2} />
              </span>
              <span className="font-semibold tracking-tight text-ink-50">
                Claude Base
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Una guía visual y centro de recursos para iniciar cualquier
              proyecto con Claude Code de forma ordenada y siguiendo siempre
              un mismo estándar.
            </p>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 text-sm text-ink-200 transition-colors hover:border-brand-500 hover:text-brand-400"
          >
            <GithubIcon className="size-4" />
            Repositorio en GitHub
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Claude Base. Todos los derechos reservados.</p>
          <p className="max-w-xl md:text-right">
            Claude Base es un proyecto independiente creado por la
            comunidad. No es un producto oficial de Anthropic ni está
            afiliado a Anthropic, PBC.
          </p>
        </div>
      </div>
    </footer>
  );
}
