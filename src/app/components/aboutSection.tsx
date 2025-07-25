"use client";

import { Code, Palette, Rocket, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Desarrollo Full Stack",
      description:
        "Experiencia completa en frontend y backend con tecnologías modernas",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description:
        "Creación de interfaces intuitivas y experiencias de usuario excepcionales",
    },
    {
      icon: Rocket,
      title: "Optimización",
      description: "Enfoque en rendimiento y mejores prácticas de desarrollo",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo efectivo en equipos ágiles y comunicación clara",
    },
  ];

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-4 py-20">
      <article className="mb-16 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Sobre mí
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          Soy un desarrollador apasionado por crear soluciones digitales
          innovadoras. Con más de 3 años de experiencia, me especializo en
          construir aplicaciones web modernas que combinan funcionalidad
          excepcional con diseño atractivo.
        </p>
      </article>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <section
              key={index}
              className="group border-1 rounded-2xl border-transparent  bg-gradient-to-br from-gray-900/50 to-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <article className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                  <Icon className="h-8 w-8 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </article>
            </section>
          );
        })}
      </div>
    </section>
  );
}
