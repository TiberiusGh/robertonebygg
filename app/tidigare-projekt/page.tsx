import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProjectArticle from '@/components/projekter/ProjectArticle'
import ContactForm from '@/components/home/ContactForm'
import { projects } from '@/lib/projects'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Tidigare projekt – Robertonebygg',
  description:
    'Se ett urval av projekt vi har genomfört – altanbyggnation, badrumsrenovering, takbyten och mer.',
}

export default function TidigareProjeketPage() {
  return (
    <main>
      <Hero
        imageSrc="/images/hero/tidigare_projekt.webp"
        imageAlt="Tidigare projekt – Robertonebygg"
        title="Tidigare projekt"
        subtitle="Ett urval av uppdrag vi fått förtroendet att genomföra. Varje projekt utförs med samma noggrannhet och engagemang."
        badge={`${projects.length} genomförda projekt`}
        ctaHref="#kontakt"
        ctaLabel="Begär offert"
      />

      <section className="w-full px-[10vw] py-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
            Vårt arbete
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-14">
            Tidigare projekt
          </h2>

          <div className="flex flex-col">
            {projects.map((project, i) => (
              <ProjectArticle key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-brand-accent/5" />

      <section className="w-full px-[10vw] py-24 bg-brand-light" id="kontakt">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
            Intresserad?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-14">
            Starta ditt projekt
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
