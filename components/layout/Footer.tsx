import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const navLinks = [
  { href: '/', label: 'Hem' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/tidigare-projekt', label: 'Tidigare projekt' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white">
      <div className="px-[10vw] py-16 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black tracking-wider">ROBERTO<span className="text-brand-medium">NEBYGG</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Din lokala snickare i Kalmar. Etablerat 2015 med fokus på kvalitet och nöjda kunder.
            </p>
            <a
              href="https://www.facebook.com/robertmarius.gherac"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm">Facebook</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigering
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:0704240383" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm group">
                <Phone className="w-4 h-4 shrink-0 text-brand-medium group-hover:text-white transition-colors" />
                070-424 03 83
              </a>
              <a href="mailto:robertonebygg@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm group">
                <Mail className="w-4 h-4 shrink-0 text-brand-medium group-hover:text-white transition-colors" />
                robertonebygg@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 text-brand-medium mt-0.5" />
                <span>Alsteråvägen 69<br />384 40 Ålem</span>
              </div>
            </div>
          </div>

          {/* Badge + org */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Om företaget
            </p>
            <p className="text-sm text-white/60 mb-1">
              <span className="text-white/40">Org.nr: </span>800908-3653
            </p>
            <p className="text-sm text-white/60 mb-2">
              <span className="text-white/40">Skatteregistrering: </span>Innehar F-skatt
            </p>
            <div className="mt-4 w-44">
              <Image
                src="https://www.kvalitetspartner.se/wp-content/uploads/2025/01/Guldsigill-2025.png"
                alt="Kvalitetspartner Guldsigill 2025"
                width={176}
                height={176}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="px-[10vw] py-5 max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Robertonebygg. Alla rättigheter förbehållna.
        </p>
        <p className="text-white/30 text-xs">
          Skapad av{' '}
          <a
            href="https://www.linkedin.com/in/tiberius-gh/"
            className="hover:text-white/70 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiberius Gherac
          </a>
        </p>
      </div>
    </footer>
  )
}
