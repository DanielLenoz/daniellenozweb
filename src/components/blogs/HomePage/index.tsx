'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from 'app/supabase/client'
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { DataType } from 'app/supabase/database.types'
import './carrusel.model.css'

export const HomePage = () => {
  const [blogs, setBlogs] = useState<DataType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let { data: Blogs, error } = await supabase
        .from('Blogs')
        .select('*')
        .limit(3)

      if (Blogs) {
        setBlogs(Blogs)
      } else {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchData() // Call the function to fetch data on component mount
  }, [])

  return (
    <>
      <Swiper
        spaceBetween={0}
        effect={'fade'}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper skeleton mb-3 min-h-[150px] w-full bg-gray-300 shadow  md:min-h-[350px]"
      >
        {blogs?.map((blog: DataType) => (
          <SwiperSlide className="object-cover  " key={blog.title}>
            <article className=" relative grid place-items-center">
              <Image
                className="max-h-[400px] object-cover sm:hidden"
                src={blog.img?.small || '/path/to/default/image.jpg'}
                alt={blog.title}
                width={635}
                height={374}
                quality={100}
              />
              <Image
                className="hidden max-h-[400px] object-cover sm:block"
                src={blog.img?.full || '/path/to/default/image.jpg'}
                alt={blog.title}
                width={1440}
                height={400}
                quality={100}
              />
              <article className=" absolute z-10 grid justify-items-center gap-5">
                <h1 className="  rounded-lg px-2 text-center font-titleSubtitle text-3xl font-extrabold uppercase italic text-white shadow-2xl shadow-segundaryDark drop-shadow-2xl  sm:text-5xl ">
                  {blog.title}
                </h1>
                <button className=" rounded-2xl bg-segundaryDark px-4 py-1 font-textSegundary text-base font-medium text-white hover:bg-tertiary md:text-lg">
                  <Link href={`/Blogs/${encodeURIComponent(blog.title)}`}>
                    Leer mas
                  </Link>
                </button>
              </article>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
