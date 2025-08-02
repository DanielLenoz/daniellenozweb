import Image from "next/image";
import AsideContent from "./asideContent";
import PrincipalContent from "./principalContent";
import { Globe, Users } from "lucide-react";

export default function MainContent({
  project,
  categoryIcon,
}: {
  project: any;
  categoryIcon: any;
}) {
  const CategoryIcon =
    categoryIcon.find((item: any) => item.title === project.category)?.icon ||
    Globe;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-4 py-20">
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
        </div>

        <section className="relative z-10 mx-auto max-w-6xl">
          <section className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3">
                <CategoryIcon className="h-8 w-8 text-blue-400" />
              </div>
            </div>

            {/* AQUÍ PUEDES USAR: TextGenerateEffect o TypewriterEffect */}
            <h1 className="mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              {project.title}
            </h1>

            {/* AQUÍ PUEDES USAR: TextGenerateEffect de Aceternity UI */}
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
              {project.longDescription}
            </p>

            <p className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              <span>Equipo: {project.team}</span>
            </p>
          </section>

          {/* Imagen principal */}
          <article className="group relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image?.full || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={320}
              quality={100}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        </section>
      </section>

      {/* Contenido principal */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-3">
        <PrincipalContent project={project} />
        <AsideContent project={project} />
      </section>
    </main>
  );
}
