import Image from 'next/image'
import { Metadata } from 'next'
import { supabase } from 'app/supabase/client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { RiGithubFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'
import { Modules } from 'app/components/shared/Porfolio/Modules'
import { TracingBeam } from 'app/components/aceternityUI/tracing-beam'

export const metadata: Metadata = {
  title: 'DanielCreator: Proyectos',
  description: 'proyectos y trabajos sobre paginas web dinamicas y estaticas',
  keywords: [
    'landing page',
    'wed dynamic',
    'paginas estaticas',
    'paginas dinamicas',
    'servicios web',
    'portafolio',
    'daniel',
    'rodriguez',
    'proyectos',
    'trabajos',
  ],
}

interface Works {
  params: {
    works: string[]
  }
}

export default async function Works(props: Works) {
  const { works } = props.params

  let { data: Projects, error } = await supabase.from('Projects').select('*')

  const decodedTitle = decodeURIComponent(works[0])

  const filterWorks = Projects?.filter((data) => data.title == decodedTitle)

  return (
    <main className="grid gap-3 px-2 pb-2 md:px-32">
      {filterWorks?.map((project) => {
        return (
          <>
            <Image
              className="block rounded-2xl sm:hidden"
              key={project.id}
              src={project.img?.small}
              width={1200}
              height={320}
              alt={project?.title}
              quality={100}
            />
            <Image
              className="hidden rounded-2xl sm:block"
              src={project.img?.full}
              width={1200}
              height={320}
              alt={project?.title}
              quality={100}
            />

            <section className="mb-1 grid gap-2 md:hidden">
              <h1 className=" font-titleSubtitle text-2xl font-semibold md:text-4xl">
                {project.title}
              </h1>

              <section className="flex">
                {project.imgFrameworks.map((img: { img: string }) => {
                  return (
                    <Image
                      className="mr-[-24px] "
                      key={null}
                      src={img?.img}
                      width={60}
                      height={80}
                      alt={project?.title}
                      quality={100}
                    />
                  )
                })}
              </section>
              <section className="grid gap-1 font-textPrimary text-base font-normal md:text-lg">
                <MDXRemote source={project.content} />
              </section>
              <article className="flex justify-between font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                <p>{project.hastag}</p>
                <time itemProp="datePublished" dateTime={project.created_at}>
                  {project.created_at}
                </time>
              </article>

              <article className="flex flex-wrap gap-2 font-textPrimary text-base font-medium md:text-lg ">
                <button className="rounded-2xl bg-segundaryDark px-2  py-1 shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-tertiary">
                  <a
                    className="flex items-center text-white"
                    href={project.Links.github}
                    target="_blank"
                  >
                    <RiGithubFill className="mr-1 h-6 w-6 fill-white" />
                    Repositorio
                  </a>
                </button>
                <button className="rounded-2xl bg-segundaryDark px-2 py-1 shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-tertiary">
                  <a
                    className="flex items-center text-white"
                    href={project.Links.website}
                    target="_blank"
                  >
                    <CiGlobe className="mr-1 h-6 w-6 fill-white" />
                    Pagina web
                  </a>
                </button>
              </article>
            </section>
            <TracingBeam className=" hidden md:block">
              <section className="mb-1 grid gap-2 ">
                <h1 className=" font-titleSubtitle text-2xl font-semibold md:text-4xl">
                  {project.title}
                </h1>

                <section className="flex">
                  {project.imgFrameworks.map((img: { img: string }) => {
                    return (
                      <Image
                        className="mr-[-24px] "
                        key={null}
                        src={img?.img}
                        width={60}
                        height={80}
                        alt={project?.title}
                        quality={100}
                      />
                    )
                  })}
                </section>
                <section className="grid gap-1 font-textPrimary text-base font-normal md:text-lg">
                  <MDXRemote source={project.content} />
                </section>
                <article className="flex justify-between font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                  <p>{project.hastag}</p>
                  <time itemProp="datePublished" dateTime={project.created_at}>
                    {project.created_at}
                  </time>
                </article>

                <article className="flex flex-wrap gap-2 font-textPrimary text-base font-medium md:text-lg ">
                  <button className="rounded-2xl bg-segundaryDark px-2  py-1 shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-tertiary">
                    <a
                      className="flex items-center text-white"
                      href={project.Links.github}
                      target="_blank"
                    >
                      <RiGithubFill className="mr-1 h-6 w-6 fill-white" />
                      Repositorio
                    </a>
                  </button>
                  <button className="rounded-2xl bg-segundaryDark px-2 py-1 shadow-lg shadow-gray-500 hover:bg-tertiary hover:shadow-tertiary">
                    <a
                      className="flex items-center text-white"
                      href={project.Links.website}
                      target="_blank"
                    >
                      <CiGlobe className="mr-1 h-6 w-6 fill-white" />
                      Pagina web
                    </a>
                  </button>
                </article>
              </section>
            </TracingBeam>
          </>
        )
      })}
      <section className="grid gap-3">
        <h1 className="pt-2 text-center font-titleSubtitle text-2xl font-semibold md:text-3xl">
          Continúa explorando más de mis trabajos
        </h1>
        <Modules />
      </section>
    </main>
  )
}
