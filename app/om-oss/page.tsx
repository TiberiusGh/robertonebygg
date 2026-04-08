import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ContactForm from '@/components/home/ContactForm'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Om oss – Robertonebygg',
  description:
    'Lär känna Robertonebygg – ett heltjänstföretag inom byggbranschen med lång erfarenhet i Kalmar län.',
}

export default function OmOssPage() {
  return (
    <main>
      <Hero
        imageSrc="/images/hero/om_oss.webp"
        imageAlt="Om oss – Robertonebygg"
        title="Om oss"
        subtitle="Lär känna oss. Vi är ett heltjänstföretag inom byggbranschen med lång erfarenhet och ett stort hjärta för snickeri."
        badge="Etablerat 2015 · Kalmar"
        ctaHref="#kontakt"
        ctaLabel="Kontakta oss"
      />

      <section className="w-full px-[10vw] py-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
            Vilka är vi?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-12 max-w-2xl">
            Ett byggföretag med hjärta för hantverket
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-6 text-brand-accent/75 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-brand-accent">Robertonebygg</span> är en enskild firma med ett
                stort hjärta för snickeri och byggnation. Vi är ett heltjänstföretag inom byggbranschen med
                mångsidig kompetens och lång erfarenhet av både mindre och större projekt.
              </p>
              <p>
                Oavsett om det gäller nybyggnation, renovering, tillbyggnad, kök, badrum, måleri, kakel eller
                tak – utför vi varje uppdrag med samma noggrannhet och yrkesstolthet.
              </p>
              <p>
                Vi arbetar främst med privatpersoner, men tar även uppdrag åt företag och föreningar. Vårt
                verksamhetsområde sträcker sig över hela Kalmar län, och vi strävar alltid efter att skapa goda
                och långsiktiga kundrelationer.
              </p>
              <p>
                Som ett mindre företag erbjuder vi en personlig service med korta beslutsvägar och tät dialog.
                Vi lyssnar noggrant på våra kunders önskemål och förutsättningar, och anpassar varje lösning
                efter just deras behov.
              </p>
              <p>
                För oss är ett projekt inte avslutat förrän kunden är helt nöjd. Det är så vi bygger både hus
                och förtroende – ett uppdrag i taget.
              </p>
            </div>

            {/* Sidebar facts */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Grundat', value: '2015' },
                { label: 'Erfarenhet', value: '30+ år' },
                { label: 'Verksamhetsområde', value: 'Kalmar län' },
                { label: 'Kundnöjdhet', value: '100% garanti' },
                { label: 'Skatteregistrering', value: 'Innehar F-skatt' },
                { label: 'Org.nummer', value: '800908-3653' },
              ].map((fact) => (
                <div key={fact.label} className="bg-brand-light rounded-xl p-5 border border-brand-accent/10">
                  <p className="text-xs text-brand-accent/40 uppercase tracking-wider font-medium mb-1">
                    {fact.label}
                  </p>
                  <p className="text-xl font-bold text-brand-accent">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-brand-accent/5" />

      <section className="w-full px-[10vw] py-24 bg-brand-light" id="kontakt">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
            Kom i kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-14">
            Kontakta oss
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
