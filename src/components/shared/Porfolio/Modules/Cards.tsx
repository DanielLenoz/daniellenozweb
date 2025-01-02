import Image from 'next/image'
import Link from 'next/link'
import { CiGlobe } from 'react-icons/ci'
import { RiGithubFill } from 'react-icons/ri'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'
import { DataType } from 'app/supabase/database.types'

export const Cards = ({ Works }: { Works: DataType[]}) => {
  return (
    <section className="flex flex-wrap justify-center gap-2">
      {Works?.map((Works) => {
        return (
          <ScrollAnimation
            key={Works.id}
            animateIn="fadeIn"
            animateOut="fadeOut"
            className=" relative grid max-h-[246] max-w-[390] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl shadow-gray-500 "
          >
            <Image
              src={Works.img?.small || '/path/to/default/image.jpg'}
              width={400}
              height={300}
              alt={Works?.title}
              quality={100}
            />

            <article className=" absolute grid max-w-60 gap-2 rounded-2xl bg-mygradiente p-2 sm:max-w-80">
              <h2 className=" text-center font-titleSubtitle text-2xl font-semibold text-black md:text-3xl">
                {Works.title}
              </h2>
              <button>
                <Link
                  className="rounded-lg bg-segundaryDark px-2 py-1 text-center font-textPrimary text-base font-medium text-white hover:bg-tertiary md:text-lg"
                  href={`/Works/${encodeURIComponent(Works.title)}`}
                >
                  Mas Información
                </Link>
              </button>
            </article>
            <article>
              <div className="group absolute -bottom-[10px] -left-[10px] grid items-center justify-items-center">
                <a
                  className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
                  href={Works.links?.github}
                  target="_blank"
                >
                  <RiGithubFill className="h-6 w-6 fill-segundaryDark" />
                </a>
                <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente "></div>
              </div>
              <div className="group absolute -bottom-[10px] -right-[10px] grid items-center justify-items-center">
                <a
                  className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
                  href={Works.links?.website}
                  target="_blank"
                >
                  <CiGlobe className="h-6 w-6 fill-segundaryDark" />
                </a>
                <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente"></div>
              </div>
            </article>
          </ScrollAnimation>
        )
      })}
    </section>
  )
}
