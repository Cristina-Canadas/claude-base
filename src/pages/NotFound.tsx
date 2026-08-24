import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center text-ink-50">
      <Compass className="size-10 text-brand-500" strokeWidth={1.5} />
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <p className="max-w-sm text-sm text-ink-400">
        Esta ruta no existe en Claude Base.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-600"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
