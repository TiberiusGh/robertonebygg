'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail, X } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const navLinks = [
  { href: '/', label: 'Hem' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/tidigare-projekt', label: 'Tidigare projekt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href) ?? false

  return (
    <nav
      className={`fixed top-0 text-white w-full px-[10vw] py-4 transition-all duration-300 ease-in-out z-30 ${
        scrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-nowrap justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="sm:text-2xl text-xl font-black tracking-wider select-none group-hover:text-stone-200 transition-colors">
            ROBERTO<span className="text-brand-medium group-hover:text-brand-medium/80">NEBYGG</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-white/15 text-white'
                    : 'hover:bg-white/10 text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Phone number */}
          <li className="ml-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.phoneDisplay}
            </a>
          </li>

          <li className="ml-2">
            <Link
              href="/#kontakt"
              className="block bg-brand-medium hover:bg-brand-medium/80 text-white rounded-md px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-md"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden bg-white/10 hover:bg-white/20 rounded-md p-2 transition-colors cursor-pointer border-none"
            aria-label="Öppna navigeringsmeny"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-dark text-white border-none w-72 pt-8 pb-8 flex flex-col" showCloseButton={false}>
            {/* Close button */}
            <div className="flex justify-between items-center px-6 mb-6">
              <span className="text-lg font-black tracking-wider select-none">
                ROBERTO<span className="text-brand-medium">NEBYGG</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Stäng meny"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-1 px-4 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-white/15 text-white'
                        : 'hover:bg-white/10 text-white/80 hover:text-white'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#kontakt"
                  className="flex justify-center bg-brand-medium hover:bg-brand-medium/80 text-white rounded-lg px-4 py-3 text-base font-semibold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>

            <div className="px-8 pt-6 border-t border-white/10 mt-auto flex flex-col gap-3 text-white/60 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
