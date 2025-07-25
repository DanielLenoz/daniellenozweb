"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Code, Palette } from "lucide-react";

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: "Frontend Developer y Diseñador UI",
      company: "Freelance",
      period: "Jun 2021 - Presente",
      location: "Remoto",
      type: "Freelance",
      description:
        "Desarrollo de sitios web dinámicos y adaptativos utilizando React y Next.js, logrando interfaces rápidas y escalables que mejoraron la experiencia del usuario.",
      achievements: [
        "Desarrollo de sitios web dinámicos con React y Next.js",
        "Exploración en nuevas tecnologías (Python, FastAPI)",
        "Gestión de proyectos colaborativos con clientes",
        "Enfoque en soluciones rápidas y escalables",
      ],
      technologies: ["React", "Next.js", "JavaScript", "CSS", "UI/UX"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Diseñador y Desarrollador Web",
      company: "Espíritu Santo Palabra y Fuego",
      period: "Jul 2023 - Presente",
      location: "Colombia",
      type: "Proyecto",
      description:
        "Diseño y desarrollo de la página web oficial con Next.js, mejorando la accesibilidad y estética para los usuarios.",
      achievements: [
        "Desarrollo de página web oficial con Next.js",
        "Mejora en accesibilidad y experiencia de usuario",
        "Implementación de plataforma para gestión de eventos",
        "Sistema integral para noticias y eventos",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Coordinador Audiovisual y Logístico",
      company: "Eventos Profesionales",
      period: "Sep 2024 - Oct 2024",
      location: "Colombia",
      type: "Temporal",
      description:
        "Coordinación logística y soporte administrativo en eventos profesionales, logrando experiencias fluidas para asistentes y organizadores.",
      achievements: [
        "Coordinación de equipo audiovisual",
        "Implementación de flyers optimizados",
        "Manejo de plataformas de transmisión en vivo",
        "Soporte logístico y administrativo",
      ],
      technologies: ["Gestión de Proyectos", "Coordinación", "Logística"],
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const education = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Konrad Lorenz",
      period: "2023 - 2024",
      description:
        "Conocimientos fundamentales en programación, análisis de sistemas y desarrollo de software en Java y Python",
    },
    {
      title: "Desarrollo Web y Diseño",
      institution: "Platzi",
      period: "2021 - 2025",
      description:
        "Formación continua en desarrollo web, Python, FastAPI, React, Next.js y metodologías de diseño",
    },
    {
      title: "Educación Certificada",
      institution: "Politécnico de Suramericana",
      period: "Último Semestre",
      description: "Formación técnica especializada",
    },
  ];

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-6xl bg-gradient-to-b from-transparent to-gray-900/20 px-4 py-5"
    >
      <article className="mb-16 text-center">
        <h2 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Experiencia Profesional
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          Mi trayectoria profesional en desarrollo web y diseño, construyendo
          soluciones innovadoras y experiencias digitales excepcionales.
        </p>
      </article>

      {/* Timeline de Experiencia */}
      <section className="relative">
        {/* Línea vertical */}
        <div className="absolute left-4 h-full w-0.5 transform rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2 md:-translate-x-1/2"></div>

        <article className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;

            return (
              <article
                key={index}
                className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
                onMouseEnter={() => setActiveExperience(index)}
              >
                {/* Punto en la línea */}
                <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 transform md:left-1/2 md:-translate-x-1/2">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center border-4 border-black transition-all duration-300 ${activeExperience === index ? "scale-125 shadow-lg" : ""}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Card de experiencia */}
                <section
                  className={`ml-16 w-full md:ml-0 md:w-5/12 ${isLeft ? "" : "md:mr-16"} rounded-2xl border-1 border-transparent bg-gradient-to-br from-gray-900/80 to-gray-800/80 transition-all duration-500 hover:border-white/20 ${activeExperience === index ? "scale-105 border-white/30" : ""} group p-6`}
                >
                  <section className="mb-4 grid justify-items-start">
                    <p
                      className={`rounded-2xl bg-gradient-to-r px-3 font-bold ${exp.color} mb-2 border-none text-white`}
                    >
                      {exp.type}
                    </p>
                    <h3 className="mb-1 text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="font-medium text-blue-400">{exp.company}</p>
                  </section>

                  <section className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </section>

                  <p className="mb-4 leading-relaxed text-gray-300">
                    {exp.description}
                  </p>

                  <section className="mb-4 space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <article
                        key={achIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></div>
                        <p className="text-sm text-gray-400">{achievement}</p>
                      </article>
                    ))}
                  </section>

                  <article className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </article>
                </section>
              </article>
            );
          })}
        </article>
      </section>

      {/* Sección de Educación */}
      <section className="mt-20">
        <h3 className="mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          Educación
        </h3>

        <section className="grid gap-6 md:grid-cols-3">
          {education.map((edu, index) => (
            <section
              key={index}
              className="group mb-4 rounded-2xl border-2 border-transparent bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <article className="mb-4">
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {edu.title}
                </h4>
                <p className="mb-1 font-medium text-blue-400">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-400">{edu.period}</p>
              </article>
              <p className="text-sm leading-relaxed text-gray-300">
                {edu.description}
              </p>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
}
