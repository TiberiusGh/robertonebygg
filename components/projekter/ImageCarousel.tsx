'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

type ImageCarouselProps = {
  images: string[]
  alt: string
  onImageClick: (index: number) => void
}

export default function ImageCarousel({ images, alt, onImageClick }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  function scrollTo(index: number) {
    if (!scrollRef.current) return
    const clampedIndex = Math.max(0, Math.min(index, images.length - 1))
    const containerWidth = scrollRef.current.clientWidth
    scrollRef.current.scrollTo({ left: clampedIndex * containerWidth, behavior: 'smooth' })
    setCurrent(clampedIndex)
  }

  function handleScroll() {
    if (!scrollRef.current) return
    const containerWidth = scrollRef.current.clientWidth
    const idx = Math.round(scrollRef.current.scrollLeft / containerWidth)
    setCurrent(idx)
  }

  return (
    <div className="relative">
      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-72 xl:h-full xl:min-h-80"
        style={{ scrollbarWidth: 'none' }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="snap-start shrink-0 w-full relative cursor-pointer"
            onClick={() => onImageClick(i)}
          >
            <Image
              src={src}
              alt={`${alt} – bild ${i + 1}`}
              fill
              className="object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Prev button */}
      {current > 0 && (
        <button
          onClick={() => scrollTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-md cursor-pointer hover:bg-brand-accent transition-colors"
          aria-label="Föregående bild"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {current < images.length - 1 && (
        <button
          onClick={() => scrollTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-md cursor-pointer hover:bg-brand-accent transition-colors"
          aria-label="Nästa bild"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/50'}`}
              aria-label={`Gå till bild ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
