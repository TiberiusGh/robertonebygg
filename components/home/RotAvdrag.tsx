import { Percent, FileCheck, Phone } from 'lucide-react'
import Link from 'next/link'

export default function RotAvdrag() {
  return (
    <section className="w-full px-[10vw] py-20 bg-brand-accent">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">

          {/* Left: heading */}
          <div className="lg:w-2/5 shrink-0">
            <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
              Spara pengar
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Använd ditt ROT-avdrag
            </h2>
            <p className="text-white/60 leading-relaxed">
              Du kan få tillbaka 30&nbsp;% av arbetskostnaden direkt på skattsedeln –
              vi hjälper dig med ansökan.
            </p>
          </div>

          {/* Right: 3 info cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Percent className="w-7 h-7 text-brand-medium mb-3" />
              <p className="text-white font-bold text-lg mb-1">30 % rabatt</p>
              <p className="text-white/55 text-sm leading-relaxed">
                På alla arbetskostnader vid renovering, om- eller tillbyggnad.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <FileCheck className="w-7 h-7 text-brand-medium mb-3" />
              <p className="text-white font-bold text-lg mb-1">Vi sköter ansökan</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Du behöver inte göra något extra – vi ansöker direkt till Skatteverket.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 border border-white/10">
              <Phone className="w-7 h-7 text-brand-medium mb-3" />
              <p className="text-white font-bold text-lg mb-1">Fråga oss</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Vet du inte om ditt projekt kvalificerar? Hör av dig så berättar vi mer.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-white/35 text-xs">
          * ROT-avdrag gäller för reparation, om- och tillbyggnad av bostad. Maxbelopp 50 000 kr per person och år.
          Läs mer på{' '}
          <a
            href="https://www.skatteverket.se/privat/fastigheterochbostad/rotavdrag.4.2e56d4ba1202f95012680006254.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            skatteverket.se
          </a>
          .
        </p>
      </div>
    </section>
  )
}
