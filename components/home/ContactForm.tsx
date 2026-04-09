'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

type FieldErrors = {
  name?: string
  email?: string
  phone?: string
  meddelande?: string
}

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '070-424 03 83', href: 'tel:0704240383' },
  { icon: Mail, label: 'E-post', value: 'robertonebygg@gmail.com', href: 'mailto:robertonebygg@gmail.com' },
  { icon: MapPin, label: 'Adress', value: 'Alsteråvägen 69, 384 40 Ålem', href: null },
  { icon: Clock, label: 'Tillgänglig', value: 'Mån–Fre, 07:00–17:00', href: null },
]

function validatePhone(value: string): string | undefined {
  if (!value) return undefined
  const cleaned = value.replace(/[\s\-().+]/g, '')
  if (!/^\d{7,15}$/.test(cleaned)) return 'Ange ett giltigt telefonnummer'
  return undefined
}

function validateEmail(value: string): string | undefined {
  if (!value) return 'E-post krävs'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ange en giltig e-postadress'
  return undefined
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})

  function validate(data: FormData): FieldErrors {
    const errs: FieldErrors = {}
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const meddelande = data.get('meddelande') as string

    if (!name?.trim()) errs.name = 'Namn krävs'
    const emailErr = validateEmail(email)
    if (emailErr) errs.email = emailErr
    const phoneErr = validatePhone(phone)
    if (phoneErr) errs.phone = phoneErr
    if (!meddelande?.trim()) errs.meddelande = 'Meddelande krävs'
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'Ny kontaktförfrågan – Robertone Bygg',
          cc: 'robertonebygg@gmail.com',
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('meddelande'),
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (error?: string) =>
    `border-gray-200 focus-visible:ring-brand-accent/50 focus-visible:border-brand-accent/50${error ? ' border-red-400 focus-visible:ring-red-300 focus-visible:border-red-400' : ''}`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
      {/* Contact info panel */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <p className="text-brand-accent/70 leading-relaxed">
          Hör av dig så återkommer vi med en kostnadsfri rådgivning och offert.
          Vi ser fram emot att höra om ditt projekt!
        </p>

        <div className="flex flex-col gap-5 mt-2">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-brand-accent/50 uppercase tracking-wider font-medium mb-0.5">
                  {label}
                </span>
                {href ? (
                  <a href={href} className="text-brand-accent font-medium hover:text-brand-medium transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="text-brand-accent font-medium">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="lg:col-span-3">
        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-green-800">Tack för ditt meddelande!</p>
            <p className="mt-2 text-green-700">Vi återkommer till dig så snart som möjligt.</p>
          </div>
        ) : (
          <form
            name="Kontakt"
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-xl border border-brand-accent/10 shadow-sm p-8 flex flex-col gap-5"
          >
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name" className="text-sm font-medium text-brand-accent">
                  Namn <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Ditt namn"
                  className={fieldClass(errors.name)}
                  onChange={() => errors.name && setErrors(e => ({ ...e, name: undefined }))}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-phone" className="text-sm font-medium text-brand-accent">
                  Telefonnummer <span className="text-brand-accent/40 font-normal">(valfritt)</span>
                </Label>
                <Input
                  id="contact-phone"
                  type="text"
                  inputMode="tel"
                  name="phone"
                  placeholder="070-000 00 00"
                  className={fieldClass(errors.phone)}
                  onChange={() => errors.phone && setErrors(e => ({ ...e, phone: undefined }))}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email" className="text-sm font-medium text-brand-accent">
                E-post <span className="text-red-400">*</span>
              </Label>
              <Input
                id="contact-email"
                type="email"
                name="email"
                placeholder="din@epost.se"
                className={fieldClass(errors.email)}
                onChange={() => errors.email && setErrors(e => ({ ...e, email: undefined }))}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message" className="text-sm font-medium text-brand-accent">
                Meddelande <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="contact-message"
                name="meddelande"
                placeholder="Beskriv ditt projekt – vad behöver du hjälp med?"
                rows={5}
                className={`${fieldClass(errors.meddelande)} resize-none`}
                onChange={() => errors.meddelande && setErrors(e => ({ ...e, meddelande: undefined }))}
              />
              {errors.meddelande && <p className="text-xs text-red-500">{errors.meddelande}</p>}
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Något gick fel. Försök igen eller kontakta oss direkt per telefon.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === 'sending'}
              className="bg-brand-accent hover:bg-brand-dark text-white font-semibold px-8 py-5 tracking-wide w-full sm:w-fit cursor-pointer transition-all duration-200 hover:scale-[1.02] shadow-md"
            >
              {status === 'sending' ? 'Skickar...' : 'Skicka meddelande'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
