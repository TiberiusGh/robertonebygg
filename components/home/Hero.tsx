import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

type HeroProps = {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
  badge?: string
  ctaHref?: string
  ctaLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  badge,
  ctaHref = '#kontakt',
  ctaLabel = 'Kontakta oss',
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* Gradient overlay – darker at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Content – anchored toward the bottom third */}
      <div className="absolute inset-x-0 bottom-0 pb-24 px-[10vw] text-white z-10 select-none">
        {badge && (
          <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 text-sm px-4 py-1.5 rounded-full font-normal tracking-wide">
            {badge}
          </Badge>
        )}

        <h1 className="text-4xl sm:text-6xl font-bold pb-6 leading-tight drop-shadow-lg max-w-3xl">
          {title}
        </h1>
        <p className="text-base sm:text-lg pb-8 max-w-xl text-white/85 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={ctaHref}
            className="inline-block px-8 py-4 rounded-md bg-brand-accent hover:bg-brand-dark text-white text-lg font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-lg"
          >
            {ctaLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-block px-8 py-4 rounded-md border-2 border-white/70 hover:border-white text-white text-lg font-semibold tracking-wide transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
