'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X } from 'lucide-react'

type LightboxProps = {
  images: string[]
  currentIndex: number
  open: boolean
  onClose: () => void
  onNavigate: (index: number) => void
  alt: string
}

export default function Lightbox({ images, currentIndex, open, onClose, onNavigate, alt }: LightboxProps) {
  // Scroll lock + keyboard navigation
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(Math.max(0, currentIndex - 1))
      if (e.key === 'ArrowRight') onNavigate(Math.min(images.length - 1, currentIndex + 1))
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [open, currentIndex, images.length, onNavigate, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image — stop click propagation so clicking the image doesn't close */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`${alt} – bild ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors cursor-pointer z-10"
        aria-label="Stäng"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1) }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors cursor-pointer z-10"
          aria-label="Föregående bild"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1) }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors cursor-pointer z-10"
          aria-label="Nästa bild"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Counter + dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onNavigate(i) }}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Bild ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-white/60 text-xs tabular-nums">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>,
    document.body
  )
}
