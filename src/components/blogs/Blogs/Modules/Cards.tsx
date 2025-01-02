import Image from 'next/image'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.compat.css'
import { DataType } from 'app/supabase/database.types'

export const Cards = ({ Blogs }: { Blogs: DataType[] }) => {
  return (
    <section className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {Blogs?.map((blog) => {
        return (
          <ScrollAnimation
            key={blog.title}
            animateIn="fadeIn"
            className=" relative grid max-h-[572px] max-w-[387px] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl shadow-slate-500 "
          >
            <Image
              className="rounded-2xl "
              src={blog.img?.small || '/path/to/default/image.jpg'}
              alt={blog.title}
              width={390}
              height={230}
              quality={100}
            />
            <article className="grid gap-1 p-1">
              <h2 className=" text-center font-titleSubtitle text-2xl font-semibold ">
                {blog.title}
              </h2>
              <p className=" font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                {blog.hastag}
              </p>
              <p className=" font-textSegundary text-base font-normal md:text-lg">
                {blog.description}
              </p>
              <article className=" flex justify-between font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
                <Link href={`/Blogs/${encodeURIComponent(blog.title)}`}>
                  Leer mas
                </Link>
                <time itemProp="datePublished" dateTime={blog.createdAt}>
                  {blog.createdAt}
                </time>
              </article>
            </article>
          </ScrollAnimation>
        )
      })}
    </section>
  )
}
