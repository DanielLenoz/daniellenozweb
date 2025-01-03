'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { cn } from 'app/outComponents/lib/utils'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll'

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
        'relative grid max-h-[572px] max-w-[387px] items-center justify-items-center overflow-hidden rounded-2xl shadow-xl shadow-slate-500 transition delay-75 duration-300 ease-in-out',
        hovered !== null &&
          hovered !== index &&
          'scale-[0.90] blur-sm transition delay-75 duration-300 ease-in-out',
      )}
    >
      <ScrollAnimation animateIn="fadeIn">
        <Image
          className="rounded-2xl "
          src={card.img?.small || '/path/to/default/image.jpg'}
          alt={card.title}
          width={390}
          height={230}
          quality={100}
        />
        <article className="grid gap-1 p-1">
          <h2 className=" text-center font-titleSubtitle text-2xl font-semibold ">
            {card.title}
          </h2>
          <p className=" font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
            {card.hastag}
          </p>
          <p className=" font-textSegundary text-base font-normal md:text-lg">
            {card.description}
          </p>
          <article className=" flex justify-between font-textSegundary text-base font-medium text-segundaryDark dark:text-segundary md:text-lg">
            <Link href={`/Blogs/${encodeURIComponent(card.title)}`}>
              Leer mas
            </Link>
            <time itemProp="datePublished" dateTime={card.created_at}>
              {card.created_at}
            </time>
          </article>
        </article>
      </ScrollAnimation>
    </div>
  ),
)

Card.displayName = 'Card'

type Card = {
  title: string
  created_at?: string
  description?: string
  hastag?: string[]
  id: number
  img?: {
    small?: string
    full?: string
  }
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

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
