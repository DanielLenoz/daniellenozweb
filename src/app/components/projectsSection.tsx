"use client";

import { useEffect, useState } from "react";
import { Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "app/supabase/client";
import type { DataType } from "../../supabase/database.types";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [projects, setProjects] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from Supabase on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from("Projects").select("*");

        console.log("Fetched projects:", data);

        if (error) {
          setError(error.message);
        } else if (data) {
          setProjects(data as DataType[]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-6xl bg-gradient-to-b from-transparent to-gray-900/20 px-4 py-20"
    >
      <section className="mb-16 text-center">
        {/* AQUÍ PUEDES USAR: TextGenerateEffect de Aceternity UI */}
        <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Mis Proyectos
        </h2>
        {/* AQUÍ PUEDES USAR: TextGenerateEffect de Aceternity UI */}
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          Una selección de mis trabajos más recientes, donde combino creatividad
          y tecnología para crear experiencias digitales memorables.
        </p>
      </section>

      {/* AQUÍ PUEDES USAR: InteractiveGrid de ReactBits para toda la grilla */}
      <section className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          /* AQUÍ PUEDES USAR: CardHoverEffect o MorphingCard */
          <section
            key={index}
            className="group overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 transition-all duration-500 hover:border-white/20"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <section className="relative overflow-hidden">
              {/* AQUÍ PUEDES USAR: BackgroundGradient de Aceternity UI para envolver la imagen */}
              <Image
                src={project.image?.full || "/file.svg"}
                alt={project.title}
                width={500}
                height={200}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <section
                className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                  hoveredProject === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <section className="absolute right-4 bottom-4 left-4 flex gap-2">
                  <button className="rounded-lg bg-blue-600 hover:bg-blue-700">
                    <Link
                      href={project.links?.website || "#"}
                      className="flex items-center gap-2 px-4 py-0.5"
                    >
                      {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
                      <Eye className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </button>
                  {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
                  <button className="rounded-lg border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-black">
                    <Link
                      href={project.links?.github || "#"}
                      className="flex items-center gap-2 px-4 py-0.5"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </button>
                </section>
              </section>
            </section>

            <article className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <section className="mb-4 flex flex-wrap gap-2">
                {}
                {project.technologies?.map((techObj, techIndex) => (
                  <p
                    key={techIndex}
                    className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-sm text-blue-300"
                  >
                    {typeof techObj === "string" ? techObj : techObj.tech}
                  </p>
                ))}
              </section>

              <section className="flex gap-3">
                {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
                <button className="h-10 w-full rounded-lg border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-black">
                  <Link
                    href={`/proyecto/${project.id}`}
                    className="flex items-center justify-center gap-2 px-4 py-0.5"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalles
                  </Link>
                </button>
                {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
                <button className="rounded-lg border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-black">
                  <Link
                    href={project.links?.github || "#"}
                    className="flex items-center gap-2 px-3 py-0.5"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </button>
              </section>
            </article>
          </section>
        ))}
      </section>
    </section>
  );
}
