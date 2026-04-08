import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FloatingCallButton from '@/components/layout/FloatingCallButton'
import { siteConfig } from '@/lib/site'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s – ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/hero/index_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Robertonebygg – Din Lokala Snickare i Kalmar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/hero/index_hero.webp'],
  },
  icons: {
    icon: [
      { url: '/images/icons/favicon16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/icons/favicon32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icons/favicon96.png', sizes: '96x96', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: '2015',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alsteråvägen 69',
    addressLocality: 'Ålem',
    postalCode: '384 40',
    addressCountry: 'SE',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Kalmar län',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  sameAs: [siteConfig.facebook],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-[family-name:var(--font-outfit)] touch-manipulation min-w-[350px] cursor-default`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
