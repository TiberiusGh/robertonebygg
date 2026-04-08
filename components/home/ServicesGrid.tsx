import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { services } from '@/lib/services'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  return (
    <section className="w-full px-[10vw] py-24 bg-brand-light">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-3">
              Vad vi erbjuder
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight">
              Vi kan hjälpa dig med
            </h2>
          </div>
          <Link
            href="/tidigare-projekt"
            className="flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-medium transition-colors shrink-0"
          >
            Se tidigare projekt <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Card
              key={service.label}
              className="relative h-56 overflow-hidden group border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-default rounded-xl p-0"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                  {service.label}
                </p>
              </div>
            </Card>
          ))}

          {/* "Och mycket mer" card */}
          <Card className="h-56 bg-brand-accent border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl flex flex-col items-center justify-center gap-3 group cursor-default p-0">
            <p className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
              Och mycket mer
            </p>
            <Link
              href="/#kontakt"
              className="text-brand-medium text-sm font-medium hover:text-white transition-colors flex items-center gap-1"
            >
              Kontakta oss <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
