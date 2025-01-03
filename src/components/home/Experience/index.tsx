import React from 'react'
import { Timeline } from 'app/components/aceternityUI/timeline'

export const Experience = () => {
  const data = [
    {
      title: 'Jun 2021 - Presente',
      content: (
        <div>
          <h2 className="pb-2 font-titleSubtitle text-2xl font-semibold md:text-3xl ">
            Frontend Developer y Diseñador UI Freelance
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>
              Desarrollé sitios web dinámicos y adaptativos utilizando React y
              Next.js,
            </span>{' '}
            logrando interfaces rápidas y escalables que mejoraron la
            experiencia del usuario.
          </p>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            {' '}
            Exploración en nuevas tecnologías (Python, FastAPI, etc.) para
            integrarlos en proyectos futuros,{' '}
            <span>enfocándome en soluciones rápidas y escalables.</span>
          </p>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>
              Lideré la gestión de proyectos colaborativos con clientes,
            </span>{' '}
            desde la conceptualización hasta la entrega final, asegurando el
            cumplimiento de plazos y objetivos.
          </p>
        </div>
      ),
    },
    {
      title: 'Jul 2023 - Presente',
      content: (
        <div>
          <h2 className="pb-2 font-titleSubtitle text-2xl font-semibold md:text-3xl ">
            Diseñador y Desarrollador del Sitio Web Oficial de “Espíritu Santo
            Palabra y Fuego”
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>Desarrollé sitios web dinámicos y adaptativos </span>
            utilizando React y Next.js, logrando interfaces rápidas y escalables
            que mejoraron la experiencia del usuario.
          </p>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>
              Implementé una plataforma integral para la gestión de eventos y
              noticias.
            </span>
          </p>
        </div>
      ),
    },
    {
      title: 'Sep 2024 – Oct 2024',
      content: (
        <div>
          <h2 className="pb-2 font-titleSubtitle text-2xl font-semibold md:text-3xl ">
            Coordinador Audiovisual y Logístico - Eventos Profesionales
          </h2>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>Aporte y trabaje en el equipo</span> de audiovisuales, para la
            implementación de flayes en un tiempo optimizado y manejo de
            plataformas para la transmisión del evento en vivo . Evento
            <span>Avivamiento con un Río</span>
          </p>
          <p className=" font-textPrimary text-base font-normal md:text-lg">
            <span>
              Coordinación logística y soporte a la parte administrativa
            </span>{' '}
            en el evento <span>Encuentro</span>, logrando una experiencia
            fluida para asistentes y organizadores.
          </p>
        </div>
      ),
    },
  ]
  return (
    <section className="w-full">
      <h1 className="text-center font-titleSubtitle text-3xl font-semibold md:text-4xl ">
        Experiencia
      </h1>
      <Timeline data={data} />
    </section>
  )
}
