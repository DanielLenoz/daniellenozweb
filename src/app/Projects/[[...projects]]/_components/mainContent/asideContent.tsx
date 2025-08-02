import { DataType } from "app/supabase/database.types";
import { ExternalLink, Github } from "lucide-react";

export default function AsideContent({ project }: { project: DataType }) {
  return (
    <aside className="sticky top-24 h-fit space-y-8 rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6">
      {/* Información del proyecto */}

      <h3 className="mb-6 text-xl font-bold text-white">
        Información del Proyecto
      </h3>

      <article className="space-y-4">
        <article>
          <span className="text-sm text-gray-400">Equipo</span>
          <p className="font-medium text-white">{project.team}</p>
        </article>
      </article>

      <section className="mt-8 space-y-3">
        {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
        <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <a
            className="flex items-center justify-center gap-2 px-4 py-2"
            href={project.links?.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Demo en Vivo
          </a>
        </button>

        {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
        <button className="w-full rounded-lg border-2 border-white/20 bg-transparent text-white hover:bg-white/10">
          <a
            className="flex items-center justify-center gap-2 px-4 py-2"
            href={project.links?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            Ver en GitHub
          </a>
        </button>
      </section>
    </aside>
  );
}
