import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Läs om hur Robertonebygg hanterar dina personuppgifter i enlighet med GDPR.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-brand-accent mb-4">{title}</h2>
    <div className="text-brand-accent/70 leading-relaxed space-y-3">{children}</div>
  </section>
)

export default function IntegritetspolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-[10vw]">
      <div className="max-w-3xl mx-auto">
        <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">Juridik</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-brand-accent mb-4">Integritetspolicy</h1>
        <p className="text-brand-accent/50 text-sm mb-14">Senast uppdaterad: april 2026</p>

        <Section title="1. Personuppgiftsansvarig">
          <p>
            Robertonebygg, org.nr {siteConfig.orgNr}, är personuppgiftsansvarig för behandlingen av
            dina personuppgifter. Kontaktuppgifter:{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-accent underline">
              {siteConfig.email}
            </a>
            , {siteConfig.phoneDisplay}.
          </p>
        </Section>

        <Section title="2. Vilka uppgifter samlar vi in?">
          <p>
            Via kontaktformuläret på vår webbplats samlar vi in följande personuppgifter som du
            frivilligt uppger:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer (om du anger det)</li>
            <li>Innehållet i ditt meddelande</li>
          </ul>
          <p>
            Via omdömesformuläret samlar vi in namn och texten i ditt omdöme.
          </p>
        </Section>

        <Section title="3. Varför behandlar vi dina uppgifter?">
          <p>Vi behandlar dina personuppgifter för att:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Besvara din förfrågan och ge dig offert (rättslig grund: berättigat intresse)</li>
            <li>Hantera omdömen om vår verksamhet (rättslig grund: berättigat intresse)</li>
          </ul>
        </Section>

        <Section title="4. Hur länge sparar vi dina uppgifter?">
          <p>
            Uppgifter från kontaktformuläret sparas så länge det är nödvändigt för att besvara din
            förfrågan och genomföra eventuellt uppdrag, dock inte längre än 24 månader.
          </p>
          <p>
            Omdömen kan publiceras på webbplatsen och sparas tills de tas bort på begäran.
          </p>
        </Section>

        <Section title="5. Delas dina uppgifter med tredje part?">
          <p>
            Dina uppgifter delas med Netlify Inc. som hanterar vår webbhosting och formulärdata.
            Netlify agerar som personuppgiftsbiträde och behandlar uppgifterna enligt sina egna
            dataskyddspolicyer. Inga uppgifter säljs eller delas i marknadsföringssyfte.
          </p>
        </Section>

        <Section title="6. Dina rättigheter">
          <p>Du har rätt att:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Begära tillgång till de uppgifter vi har om dig</li>
            <li>Begära rättelse av felaktiga uppgifter</li>
            <li>Begära radering av dina uppgifter</li>
            <li>Invända mot behandlingen</li>
            <li>Lämna klagomål till Integritetsskyddsmyndigheten (IMY) på{' '}
              <a href="https://www.imy.se" className="text-brand-accent underline" target="_blank" rel="noopener noreferrer">
                imy.se
              </a>
            </li>
          </ul>
          <p>
            Kontakta oss på{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-accent underline">
              {siteConfig.email}
            </a>{' '}
            för att utöva dina rättigheter.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Denna webbplats använder inga spårningscookies eller analysverktyg. Inga
            tredjepartscookies placeras utan ditt samtycke.
          </p>
        </Section>

        <div className="pt-8 border-t border-gray-100">
          <Link href="/" className="text-brand-accent hover:text-brand-medium underline transition-colors">
            ← Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </main>
  )
}
