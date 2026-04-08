'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import React from 'react'
import { testimonials, type Testimonial, type Platform } from '@/lib/testimonials'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

/* ── Platform logos ─────────────────────────────────── */
const GoogleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const FacebookLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const platformMeta: Record<Platform, { label: string; Logo: () => React.ReactElement }> = {
  google: { label: 'Google', Logo: GoogleLogo },
  facebook: { label: 'Facebook', Logo: FacebookLogo },
  site: { label: 'Robertonebygg', Logo: () => <span className="text-brand-medium font-bold text-xs">R</span> },
}

/* ── Stars ──────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

/* ── Single card ────────────────────────────────────── */
function TestimonialCard({ card }: { card: Testimonial }) {
  const { label, Logo } = platformMeta[card.platform]

  return (
    <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 select-none">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar with initials */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: card.avatarColor }}
          >
            {card.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-brand-accent text-sm leading-tight">{card.name}</span>
            {card.location && (
              <span className="text-xs text-gray-400">{card.location}</span>
            )}
          </div>
        </div>
        {/* Platform badge */}
        <div className="flex items-center gap-1.5 bg-gray-50 rounded-full px-2.5 py-1 shrink-0">
          <Logo />
          <span className="text-xs text-gray-500 font-medium">{label}</span>
        </div>
      </div>

      {/* Stars */}
      <Stars rating={card.rating} />

      {/* Message */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        &ldquo;{card.message}&rdquo;
      </p>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-auto">{card.date}</p>
    </div>
  )
}

/* ── Main export ────────────────────────────────────── */
export default function TestimonialsMarquee() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))

  return (
    <div className="px-[10vw] mt-8">
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <TestimonialCard card={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="static translate-y-0 border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent" />
          <CarouselNext className="static translate-y-0 border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent" />
        </div>
      </Carousel>
    </div>
  )
}
