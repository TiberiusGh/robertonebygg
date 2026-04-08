'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Kan jag använda ROT-avdrag?',
    a: 'Ja, i de flesta fall. ROT-avdrag gäller för reparation, om- och tillbyggnad av din bostad och ger dig 30 % rabatt på arbetskostnaden (max 50 000 kr/år). Vi hanterar ansökan åt dig direkt till Skatteverket.',
  },
  {
    q: 'Hur lång tid tar ett badrumsrenoveringsprojekt?',
    a: 'Det beror på badrumsytans storlek och vad som ska göras. En komplett renovering med kakel, sanitet och ytskikt tar vanligtvis 2–4 veckor. Vi går igenom tidsplanen med dig inför offerten så att du vet exakt vad som gäller.',
  },
  {
    q: 'Vad kostar en altan?',
    a: 'Priset varierar beroende på storlek, material och konstruktion. En enklare altan i tryckimpregnerat trä kan börja runt 50 000–80 000 kr inkl. material, medan en större altan med poolintegration eller kompositmaterial kostar mer. Vi ger alltid en kostnadsfri offert.',
  },
  {
    q: 'Tar ni uppdrag i hela Kalmar län?',
    a: 'Ja, vi är verksamma i hela Kalmar län – från Kalmar stad till kommunerna Nybro, Oskarshamn, Torsås, Borgholm och omkringliggande områden.',
  },
  {
    q: 'Hur lång framförhållning behöver ni?',
    a: 'Det varierar med säsong och hur belagda vi är. I allmänhet bör du räkna med 2–6 veckor från offert till projektstart. Kontakta oss gärna tidigt i planeringen – vi hjälper dig säkerställa att arbetet kan utföras när det passar dig.',
  },
  {
    q: 'Behöver jag bygglov för mitt projekt?',
    a: 'Det beror på vad du planerar. Attefallsåtgärder och enklare altaner kräver ofta bara en anmälan, medan tillbyggnader och nybyggnation normalt kräver bygglov från kommunen. Vi hjälper dig bedöma vad som gäller just ditt projekt.',
  },
  {
    q: 'Innehar ni F-skattsedel och försäkringar?',
    a: 'Ja. Vi innehar F-skattsedel, vilket krävs för att du som privatperson ska slippa ta ansvar för arbetsgivaravgifter. Vi är även försäkrade för det arbete vi utför.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full px-[10vw] py-24 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left label */}
          <div className="lg:col-span-2">
            <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
              Vanliga frågor
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-4">
              Frågor & svar
            </h2>
            <p className="text-brand-accent/60 leading-relaxed">
              Hittar du inte svaret du söker? Kontakta oss direkt – vi svarar alltid inom ett par timmar.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-brand-accent/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-brand-accent group-hover:text-brand-medium transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent/50 group-hover:border-brand-medium group-hover:text-brand-medium transition-colors mt-0.5">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 text-brand-accent/65 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
