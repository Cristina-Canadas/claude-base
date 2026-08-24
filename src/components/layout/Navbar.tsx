import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#flujo", label: "Flujo" },
  { href: "#comandos", label: "Comandos" },
  { href: "#agentes", label: "Agentes" },
  { href: "#skills", label: "Skills" },
  { href: "#guia", label: "Guía" },
  { href: "#comunidad", label: "Comunidad" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-800 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/Claude_AI_symbol.svg.webp"
            alt="Claude AI"
            className="size-8"
          />
          <span className="font-semibold tracking-tight text-ink-50">
            Claude Base
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-300 transition-colors hover:text-ink-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#comandos"
          className="hidden rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600 md:inline-flex"
        >
          Empezar
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
          className="text-ink-50 md:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink-800 bg-ink-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-ink-300 transition-colors hover:text-ink-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#comandos"
                onClick={() => setMenuOpen(false)}
                className="inline-flex rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white"
              >
                Empezar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
