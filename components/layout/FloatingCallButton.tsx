'use client'

import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-brand-accent text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg hover:bg-brand-dark transition-colors md:hidden"
      aria-label="Ring oss"
    >
      <Phone className="w-5 h-5 shrink-0" />
      <span className="text-sm font-semibold">{siteConfig.phoneDisplay}</span>
    </a>
  )
}
