import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import HowWeWork from '@/components/home/HowWeWork'
import RotAvdrag from '@/components/home/RotAvdrag'
import FaqSection from '@/components/home/FaqSection'
import TestimonialsMarquee from '@/components/home/TestimonialsMarquee'
import TestimonialForm from '@/components/home/TestimonialForm'
import ContactForm from '@/components/home/ContactForm'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <main>
      <Hero
        imageSrc="/images/hero/index_hero.webp"
        imageAlt="Robertonebygg – din lokala snickare i Kalmar"
        title="Din Lokala Snickare"
        subtitle="Renovering, snickeri och byggtjänster i Kalmar. Över 30 års erfarenhet och ett ständigt fokus på kundens önskemål."
        badge="Etablerat 2015 · Kalmar län"
        ctaHref="#kontakt"
        ctaLabel="Begär offert"
        secondaryHref="/tidigare-projekt"
        secondaryLabel="Se våra projekt"
      />

      <StatsBar />

      {/* Om oss */}
      <section className="w-full px-[10vw] py-24 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
              Om oss
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-8">
              Hantverkare du kan lita på
            </h2>
            <p className="text-brand-accent/70 text-lg leading-relaxed mb-6">
              Vi utför alla sorters byggtjänster – nybyggnation, tillbyggnad, renovering av kök,
              badrum, tak och mycket mer. Vårt verksamhetsområde täcker hela Kalmar län.
            </p>
            <p className="text-brand-accent/70 text-lg leading-relaxed">
              Vi anser oss vara klara först när kunden är 100% nöjd.
            </p>
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Personlig service', desc: 'Korta beslutsvägar och tät dialog genom hela projektet.' },
              { title: 'Kvalitetsgaranti', desc: 'Vi lämnar inte projektet förrän du är helt nöjd.' },
              { title: 'Lång erfarenhet', desc: 'Över 30 år i branschen med hundratals genomförda uppdrag.' },
              { title: 'Hela Kalmar län', desc: 'Vi tar uppdrag i hela länet – alltid med samma engagemang.' },
            ].map((f) => (
              <div key={f.title} className="bg-brand-light rounded-xl p-5 border border-brand-accent/10">
                <div className="w-2 h-2 rounded-full bg-brand-medium mb-3" />
                <p className="font-semibold text-brand-accent mb-1">{f.title}</p>
                <p className="text-sm text-brand-accent/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-brand-accent/5" />

      {/* Tjänster */}
      <ServicesGrid />

      {/* Hur vi arbetar */}
      <HowWeWork />

      {/* ROT-avdrag */}
      <RotAvdrag />

      <Separator className="bg-brand-accent/5" />

      {/* Omdöme */}
      <section className="w-full py-24 bg-white">
        <div className="px-[10vw] max-w-screen-xl mx-auto mb-12">
          <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
            Vad våra kunder säger
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="md:max-w-lg">
              <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-4">
                Omdöme
              </h2>
              <p className="text-brand-accent/70 leading-relaxed">
                Vi är stolta över det arbete vi utför och de relationer vi bygger med våra kunder.
                Har du arbetat med oss? Dela gärna din erfarenhet.
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              <TestimonialForm />
            </div>
          </div>
        </div>
        <TestimonialsMarquee />
      </section>

      <Separator className="bg-brand-accent/5" />

      {/* FAQ */}
      <FaqSection />

      <Separator className="bg-brand-accent/5" />

      {/* Kontakt */}
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
