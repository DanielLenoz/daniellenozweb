'use client'
import Image from 'next/image'
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './carrusel.model.css'

interface CertificateSectionsProps {
  title: string | null
  data: { img: { img: string; alt: string }[] } | null
}

export const CertificateSections: React.FC<CertificateSectionsProps> = ({
  title,
  data,
}) => {
  const image = data?.img

  return (
    <>
      <h1 className=" mb-1 font-titleSubtitle text-2xl font-semibold md:text-3xl">
        {title}
      </h1>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper mb-3 w-full"
      >
        {image?.map(({ img, alt }: { img: string; alt: string }) => (
          <SwiperSlide
            className="flex items-center justify-center object-cover"
            key={alt}
          >
            <Image
              className=" h-auto w-auto"
              src={img}
              alt={alt}
              width={290}
              height={240}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
