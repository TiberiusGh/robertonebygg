'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function TestimonialForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'Nytt omdöme – Robertone Bygg',
          cc: 'robertonebygg@gmail.com',
          name: formData.get('name'),
          message: formData.get('omdome'),
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="py-8">
        <p className="text-xl font-semibold">Tack för ditt omdöme!</p>
        <p className="mt-2 text-muted-foreground">Vi uppskattar din feedback.</p>
      </div>
    )
  }

  return (
    <form
      name="Omdome"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 flex-1"
    >
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} />

      <div className="flex flex-col gap-2">
        <Label htmlFor="review-name" className="text-lg">Namn</Label>
        <Input
          id="review-name"
          type="text"
          name="name"
          placeholder="Ditt namn"
          required
          className="py-6 text-lg border-brand-accent/30 focus-visible:ring-brand-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="review-text" className="text-lg">Omdöme</Label>
        <Textarea
          id="review-text"
          name="omdome"
          placeholder="Dela dina erfarenheter..."
          required
          rows={4}
          className="text-lg border-brand-accent/30 focus-visible:ring-brand-accent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">Något gick fel. Försök igen.</p>
      )}

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="bg-brand-accent hover:bg-brand-dark text-white text-lg px-8 py-6 tracking-wider w-fit cursor-pointer"
      >
        {status === 'sending' ? 'Skickar...' : 'Skicka omdöme'}
      </Button>
    </form>
  )
}
