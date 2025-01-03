'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from 'app/outComponents/lib/utils'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'
import { RiGithubFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'transition delay-75 duration-300 ease-in-out',
        hovered !== null &&
          hovered !== index &&
          'scale-[0.90] blur-sm transition delay-75 duration-300 ease-in-out',
      )}
    >
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        className="relative grid max-h-[246] max-w-[390] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl shadow-gray-500 "
      >
        <Image
          src={card.img?.small || '/path/to/default/image.jpg'}
          width={400}
          height={300}
          alt={card?.title}
          quality={100}
        />

        <article className=" absolute grid max-w-60 gap-2 rounded-2xl bg-mygradiente p-2 sm:max-w-80">
          <h2 className=" text-center font-titleSubtitle text-2xl font-semibold text-black md:text-3xl">
            {card.title}
          </h2>
          <button>
            <Link
              className="rounded-lg bg-segundaryDark px-2 py-1 text-center font-textPrimary text-base font-medium text-white hover:bg-tertiary md:text-lg"
              href={`/Works/${encodeURIComponent(card.title)}`}
            >
              Mas Información
            </Link>
          </button>
        </article>
        <article>
          <div className="group absolute -bottom-[10px] -left-[10px] grid items-center justify-items-center">
            <a
              className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
              href={card.Links?.github}
              target="_blank"
            >
              <RiGithubFill className="h-6 w-6 fill-segundaryDark" />
            </a>
            <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente "></div>
          </div>
          <div className="group absolute -bottom-[10px] -right-[10px] grid items-center justify-items-center">
            <a
              className=" z-10 grid h-9 w-9 items-center justify-center rounded-full  bg-mygradiente"
              href={card.Links?.website}
              target="_blank"
            >
              <CiGlobe className="h-6 w-6 fill-segundaryDark" />
            </a>
            <div className=" absolute h-24 w-24 rounded-full group-hover:animate-pulse group-hover:bg-mygradiente"></div>
          </div>
        </article>
      </ScrollAnimation>
    </div>
  ),
)

Card.displayName = 'Card'

type Card = {
  id: number
  title: string
  Links?: {
    github?: string
    website?: string
  }
  img?: {
    small?: string
    full?: string
  }
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  console.log(cards)

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </>
  )
}
