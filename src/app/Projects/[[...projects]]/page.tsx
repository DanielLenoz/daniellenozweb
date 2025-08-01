import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Code,
  Palette,
  Database,
  Globe,
} from "lucide-react";
import { supabase } from "app/supabase/client";

const projectsData = {
  "ecommerce-moderno": {
    title: "E-commerce Moderno",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.",
    longDescription:
      "Una plataforma de e-commerce completa desarrollada con las últimas tecnologías web. Incluye un sistema de autenticación robusto, carrito de compras persistente, integración con pasarelas de pago, panel de administración para gestión de productos e inventario, y un diseño completamente responsivo.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    duration: "3 meses",
    team: "2 desarrolladores",
    category: "E-commerce",
    features: [
      "Sistema de autenticación completo",
      "Carrito de compras persistente",
      "Integración con Stripe para pagos",
      "Panel de administración",
      "Gestión de inventario en tiempo real",
      "Diseño responsivo y accesible",
      "Optimización SEO",
      "Sistema de reseñas y calificaciones",
    ],
    challenges: [
      "Implementación de pagos seguros con Stripe",
      "Optimización de rendimiento para catálogos grandes",
      "Sincronización de inventario en tiempo real",
      "Diseño de UX intuitiva para el proceso de compra",
    ],
    learnings: [
      "Integración avanzada de APIs de pago",
      "Optimización de bases de datos para e-commerce",
      "Implementación de patrones de diseño escalables",
      "Testing automatizado para aplicaciones críticas",
    ],
  },
  "dashboard-analytics": {
    title: "Dashboard Analytics",
    description:
      "Panel de control interactivo con visualización de datos en tiempo real y métricas avanzadas.",
    longDescription:
      "Un dashboard completo para análisis de datos empresariales con visualizaciones interactivas, métricas en tiempo real y reportes personalizables. Diseñado para ayudar a las empresas a tomar decisiones basadas en datos.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: [
      "React",
      "D3.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Chart.js",
    ],
    liveUrl: "#",
    githubUrl: "#",
    duration: "4 meses",
    team: "3 desarrolladores",
    category: "Analytics",
    features: [
      "Visualizaciones interactivas con D3.js",
      "Métricas en tiempo real",
      "Reportes personalizables",
      "Filtros avanzados de datos",
      "Exportación de reportes",
      "Dashboard personalizable",
      "Alertas automáticas",
      "API REST completa",
    ],
    challenges: [
      "Optimización de consultas para grandes volúmenes de datos",
      "Implementación de actualizaciones en tiempo real",
      "Diseño de visualizaciones complejas",
      "Manejo eficiente de memoria para datasets grandes",
    ],
    learnings: [
      "Técnicas avanzadas de visualización de datos",
      "Optimización de rendimiento en aplicaciones de datos",
      "Arquitectura de microservicios",
      "Implementación de WebSockets para tiempo real",
    ],
  },
  "app-gestion-tareas": {
    title: "App de Gestión de Tareas",
    description:
      "Aplicación colaborativa para gestión de proyectos con funciones de tiempo real y notificaciones.",
    longDescription:
      "Una aplicación web progresiva (PWA) para gestión de tareas y proyectos colaborativos. Incluye funcionalidades de tiempo real, notificaciones push, trabajo offline y sincronización automática.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: [
      "Vue.js",
      "Firebase",
      "Tailwind CSS",
      "PWA",
      "Vuex",
      "Firebase Auth",
    ],
    liveUrl: "#",
    githubUrl: "#",
    duration: "2 meses",
    team: "1 desarrollador",
    category: "Productividad",
    features: [
      "Gestión de tareas y proyectos",
      "Colaboración en tiempo real",
      "Notificaciones push",
      "Trabajo offline (PWA)",
      "Sincronización automática",
      "Sistema de roles y permisos",
      "Calendario integrado",
      "Reportes de productividad",
    ],
    challenges: [
      "Implementación de funcionalidad offline",
      "Sincronización de datos en tiempo real",
      "Optimización para dispositivos móviles",
      "Gestión de estados complejos",
    ],
    learnings: [
      "Desarrollo de Progressive Web Apps",
      "Arquitectura de aplicaciones offline-first",
      "Gestión de estados con Vuex",
      "Integración completa con Firebase",
    ],
  },
  "portfolio-creativo": {
    title: "Portfolio Creativo",
    description:
      "Sitio web portfolio con animaciones avanzadas y efectos visuales impresionantes.",
    longDescription:
      "Un portfolio personal con animaciones avanzadas, efectos 3D y transiciones fluidas. Desarrollado para mostrar proyectos de manera visualmente impactante y crear una experiencia de usuario memorable.",
    image: "/placeholder.svg?height=600&width=1200",
    technologies: [
      "React",
      "Framer Motion",
      "Three.js",
      "GSAP",
      "Next.js",
      "Styled Components",
    ],
    liveUrl: "#",
    githubUrl: "#",
    duration: "1.5 meses",
    team: "1 desarrollador",
    category: "Portfolio",
    features: [
      "Animaciones avanzadas con Framer Motion",
      "Efectos 3D con Three.js",
      "Transiciones fluidas entre páginas",
      "Diseño completamente responsivo",
      "Optimización de rendimiento",
      "SEO optimizado",
      "Modo oscuro/claro",
      "Galería interactiva de proyectos",
    ],
    challenges: [
      "Optimización de animaciones para rendimiento",
      "Implementación de efectos 3D complejos",
      "Balance entre creatividad y usabilidad",
      "Compatibilidad cross-browser",
    ],
    learnings: [
      "Animaciones web avanzadas",
      "Desarrollo con Three.js",
      "Optimización de rendimiento en animaciones",
      "Principios de diseño de experiencia de usuario",
    ],
  },
};

interface Projects {
  params: {
    projects: string[];
  };
}

export default async function Projects(props: Projects) {
  const { projects } = props.params;

  const { data: Projects, error } = await supabase.from("Projects").select("*");
  const decodedTitle = decodeURIComponent(projects[0]);

  const filteredProject = Projects?.filter(
    (data) => data.title == decodedTitle,
  );

  const categoryIcon = [
    { title: "Todo | Proyecto personal", icon: Globe },
    { title: "FakeShoppi | Proyecto personal", icon: Database },
    { title: "Jurassic | Proyecto personal", icon: Target },
    { title: "Portfolio", icon: Palette },
  ];

  return (
    <>
      {filteredProject?.map((project, index) => {
        console.log("data:", Projects);

        const CategoryIcon =
          categoryIcon.find((item) => item.title === project.category)?.icon ||
          Globe;

        return (
          <>
            <header
              className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-transparent px-4 py-4 backdrop-blur-md"
              key={index}
            >
              <button className="rounded-lg p-2 text-white hover:border-1 hover:bg-white/10">
                <Link href="/#proyectos" className="flex items-center">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver a Proyectos
                </Link>
              </button>
              <article className="flex gap-4">
                <button className="rounded-lg border-2 border-white/20 bg-transparent p-2 text-white hover:bg-white/10">
                  <a
                    href={project.links?.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Demo
                  </a>
                </button>
                <button className="rounded-lg border-2 border-white/20 bg-transparent p-2 text-white hover:bg-white/10">
                  <a
                    href={project.links?.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </a>
                </button>
              </article>
            </header>

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
                {/* Contenido principal */}
                <section className="space-y-12 lg:col-span-2">
                  {/* Tecnologías */}
                  {/* AQUÍ PUEDES USAR: CardHoverEffect o MorphingCard */}
                  <section className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                      <Code className="h-6 w-6 text-blue-400" />
                      Tecnologías Utilizadas
                    </h2>
                    <section className="flex flex-wrap gap-3">
                      {project.technologies?.map(
                        (techObj: string, index: number) => (
                          <div
                            key={index}
                            className="rounded-lg border-1 border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 text-blue-300"
                          >
                            {techObj}
                          </div>
                        ),
                      )}
                    </section>
                  </section>

                  {/* Características */}
                  {/* AQUÍ PUEDES USAR: CardHoverEffect de Aceternity UI */}
                  <section className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                      <Target className="h-6 w-6 text-green-400" />
                      Características Principales
                    </h2>
                    {/* AQUÍ PUEDES USAR: InteractiveGrid de ReactBits */}
                    <article className="grid gap-1 md:grid-cols-2">
                      {project.features.map(
                        (feature: string, index: number) => (
                          <section
                            key={index}
                            className="flex items-start gap-4"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                            <p className="text-gray-300">{feature}</p>
                          </section>
                        ),
                      )}
                    </article>
                  </section>

                  {/* Desafíos */}
                  {/* AQUÍ PUEDES USAR: CardHoverEffect de Aceternity UI */}
                  <section className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                      <Target className="h-6 w-6 text-orange-400" />
                      Desafíos Superados
                    </h2>
                    <article className="space-y-4">
                      {project.challenges.map(
                        (challenge: string, index: number) => (
                          <article
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400" />
                            <p className="text-gray-300">{challenge}</p>
                          </article>
                        ),
                      )}
                    </article>
                  </section>

                  {/* Aprendizajes */}
                  {/* AQUÍ PUEDES USAR: CardHoverEffect de Aceternity UI */}
                  <section className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                      <Lightbulb className="h-6 w-6 text-yellow-400" />
                      Aprendizajes Clave
                    </h2>
                    <section className="space-y-4">
                      {project.learnings.map(
                        (learning: string, index: number) => (
                          <article
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-400" />
                            <p className="text-gray-300">{learning}</p>
                          </article>
                        ),
                      )}
                    </section>
                  </section>
                </section>

                {/* Sidebar */}
                <aside className="sticky top-24 h-fit space-y-8 rounded-lg border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6">
                  {/* Información del proyecto */}
                  {/* AQUÍ PUEDES USAR: BackgroundGradient de Aceternity UI */}

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
              </section>
            </main>
          </>
        );
      })}

      {/* Footer */}
      <footer className="mx-auto max-w-6xl border-t border-white/10 px-4 py-12 text-center">
        <p className="mb-6 text-gray-400">
          ¿Te interesa este proyecto o tienes alguna pregunta?
        </p>
        <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-extrabold text-white hover:from-blue-700 hover:to-purple-700">
          <Link href="/#contacto">
            {/* AQUÍ PUEDES USAR: GlowingButton de ReactBits */}
            Hablemos del Proyecto
          </Link>
        </button>
      </footer>
    </>
  );
}
