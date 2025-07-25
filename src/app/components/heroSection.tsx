"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import styles from "./styles.module.css";
// import { Button } from "@/components/ui/button";
export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden py-20"
    >
      {/* Fondo base simple con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      {/* Ondas sutiles animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="animate-pulse-slow absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-pulse-slow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cyan-500/5 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Líneas geométricas animadas */}
      <div className="absolute inset-0">
        <div className="animate-shimmer absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div
          className="animate-shimmer absolute bottom-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-shimmer absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="animate-shimmer absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Efecto de mouse mejorado */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Contenido principal */}
      <section className="relative z-10 mx-auto max-w-5xl px-4 py-1 text-center">
        <section className="mb-8">
          {/* Título principal con animación de aparición */}
          <article
            className={`${styles["animate-fade-in-up"]} mb-6`}
            style={{ animationDelay: "0.2s" }}
          >
            <p
              className={`${styles["animate-glow"]} mb-4 text-sm font-medium tracking-wider text-blue-400 uppercase`}
            >
              ✨ Bienvenido a mi universo digital
            </p>
            <h1
              className={`${styles["animate-text-shimmer"]} mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl`}
            >
              Daniel Rodriguez
            </h1>
          </article>

          {/* Subtítulo animado */}
          <section
            className={`${styles["animate-fade-in-up"]} mb-8 flex items-center text-2xl text-gray-300 md:text-4xl lg:text-5xl`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="animate-pulse text-blue-400">
              Desarrollador Full Stack Es el hombre mas hermoso que he visto, y
              lo amo muchooooooo te quiero mucho mi corazón ruar asjjasjsjas no
              existe nadie como el, es el mejor del mundo
            </p>
            <span className="mx-4 text-gray-500">•</span>
            <p
              className="animate-pulse text-purple-400"
              style={{ animationDelay: "1s" }}
            >
              Creador Digital
            </p>
          </section>

          {/* Descripción con efecto de escritura */}
          <p
            className="animate-fade-in-up mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl"
            style={{ animationDelay: "0.6s" }}
          >
            Desarrollador Full Stack con{" "}
            <span
              className={`${styles["animate-glow"]} font-semibold text-blue-400`}
            >
              2 años de experiencia
            </span>
            , especializado en crear interfaces dinámicas, accesibles y
            responsivas con{" "}
            <span className="font-semibold text-cyan-400">React</span>,{" "}
            <span className="font-semibold text-purple-400">Next.js</span> y
            tecnologías modernas.
          </p>
        </section>

        {/* Botones con animaciones mejoradas */}
        <section
          className="animate-fade-in-up mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          style={{ animationDelay: "0.8s" }}
        >
          <button className="group flex items-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-8 py-3 text-white transition-all duration-500 hover:scale-110 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 hover:shadow-2xl hover:shadow-blue-500/25">
            <span className="mr-3 text-lg font-semibold">
              Explorar Proyectos
            </span>
            <ArrowDown className="h-5 w-5 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" />
          </button>
          <button className="group flex items-center rounded-full border-2 border-white/30 bg-transparent px-8 py-3 text-white backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-white/50 hover:bg-white/10">
            <Download className="mr-3 h-5 w-5 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" />
            <span className="text-lg font-semibold">Descargar CV</span>
          </button>
        </section>

        {/* Enlaces sociales con efectos avanzados */}
        <section
          className="animate-fade-in-up mb-12 flex justify-center space-x-8"
          style={{ animationDelay: "1s" }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/DanielLenoz",
              label: "GitHub",
              color: "hover:bg-gray-700/30 hover:shadow-gray-500/20",
              gradient: "from-gray-600 to-gray-800",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/",
              label: "LinkedIn",
              color: "hover:bg-blue-600/30 hover:shadow-blue-500/20",
              gradient: "from-blue-600 to-blue-800",
            },
            {
              icon: Mail,
              href: "mailto:danielstivenxx@gmail.com",
              label: "Email",
              color: "hover:bg-purple-600/30 hover:shadow-purple-500/20",
              gradient: "from-purple-600 to-purple-800",
            },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={`rounded-full border-2 border-white/20 p-4 text-gray-400 transition-all duration-500 hover:scale-125 hover:border-white/50 hover:text-white ${social.color} group animate-bounce-in backdrop-blur-sm hover:shadow-2xl`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                aria-label={social.label}
              >
                <Icon className="h-7 w-7 transition-all duration-300 group-hover:scale-110" />
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                />
              </a>
            );
          })}
        </section>
      </section>
    </section>
  );
}
