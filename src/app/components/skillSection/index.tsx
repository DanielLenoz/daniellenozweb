"use client";

import { useState } from "react";
import { technologies } from "./technologies"; // Assuming you have a JSON file with your tech stack
import { Code2, Globe, Box, Layers } from "lucide-react";

export function SkillsSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2";
      case "small":
      default:
        return "col-span-1";
    }
  };

  return (
    <section id="habilidades" className="mx-auto max-w-7xl px-4 py-10">
      <section className="mb-16 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Stack Tecnológico
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          Herramientas y tecnologías que domino para crear experiencias
          digitales completas y escalables
        </p>
      </section>

      {/* Bento Grid Layout */}
      <section className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          const isHovered = hoveredTech === tech.name;

          return (
            <section
              key={index}
              className={`${getSizeClasses(tech.size)} group relative cursor-pointer overflow-hidden border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 transition-all duration-500 hover:border-white/30`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <section className="relative z-10 flex h-full flex-col justify-between p-4">
                {/* Efecto de brillo en hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <article className="flex items-start justify-between">
                  <article
                    className={`rounded-lg bg-gradient-to-r p-2 ${tech.color} bg-opacity-20 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`h-6 w-6 text-white ${tech.size === "large" ? "md:h-8 md:w-8" : ""}`}
                    />
                  </article>

                  {tech.size !== "small" && (
                    <span className="rounded-full bg-gray-800/50 px-2 py-1 text-xs text-gray-400">
                      {tech.experience}
                    </span>
                  )}
                </article>

                <article className="mt-auto">
                  <h3
                    className={`mb-1 font-semibold text-white ${tech.size === "large" ? "text-lg md:text-xl" : "text-sm md:text-base"}`}
                  >
                    {tech.name}
                  </h3>

                  {tech.size !== "small" && (
                    <>
                      <p className="mb-2 text-xs text-gray-400">
                        {tech.category}
                      </p>
                      {tech.size === "large" && (
                        <p className="text-sm leading-relaxed text-gray-300">
                          {tech.description}
                        </p>
                      )}
                    </>
                  )}

                  {tech.size === "small" && (
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  )}
                </article>

                {/* Indicador de hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${tech.color} transition-all duration-300 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </section>
            </section>
          );
        })}
      </section>

      {/* Estadísticas actualizadas */}
      <section className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {[
          { number: "16+", label: "Tecnologías dominadas", icon: Code2 },
          { number: "2+", label: "Años de experiencia", icon: Globe },
          { number: "15+", label: "Proyectos completados", icon: Box },
          { number: "B2", label: "Nivel de inglés", icon: Layers },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <section
              key={index}
              className="group rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                <Icon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                {stat.number}
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </section>
          );
        })}
      </section>
    </section>
  );
}
