const steps = [
  {
    number: '01',
    title: 'Kontakt',
    description:
      'Hör av dig via formuläret, telefon eller e-post. Berätta kort om vad du planerar så bokar vi in ett besök.',
  },
  {
    number: '02',
    title: 'Besiktning & offert',
    description:
      'Vi tittar på platsen, lyssnar på dina önskemål och tar fram en tydlig offert utan dolda avgifter.',
  },
  {
    number: '03',
    title: 'Utförande',
    description:
      'Vi påbörjar arbetet enligt överenskommen tidsplan. Du får löpande uppdateringar och är alltid välkommen att ställa frågor.',
  },
  {
    number: '04',
    title: 'Slutbesiktning',
    description:
      'Vi går igenom det färdiga arbetet tillsammans med dig. Projekt är inte klart förrän du är 100 % nöjd.',
  },
]

export default function HowWeWork() {
  return (
    <section className="w-full px-[10vw] py-24 bg-brand-light">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-brand-medium font-semibold text-sm uppercase tracking-widest mb-4">
          Vår process
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-brand-accent leading-tight mb-14 max-w-xl">
          Så här arbetar vi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line between steps (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(100%-0px)] w-6 h-px bg-brand-accent/20 z-10" />
              )}

              <div className="bg-white rounded-2xl p-7 border border-brand-accent/10 flex flex-col gap-4 h-full hover:shadow-sm transition-shadow">
                <span className="text-5xl font-black text-brand-accent/10 leading-none select-none">
                  {step.number}
                </span>
                <div className="w-8 h-1 rounded-full bg-brand-medium" />
                <h3 className="text-lg font-bold text-brand-accent">{step.title}</h3>
                <p className="text-sm text-brand-accent/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
