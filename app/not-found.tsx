import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-light flex items-center justify-center px-[10vw]">
      <div className="text-center max-w-lg">
        <p className="text-brand-medium font-bold text-sm uppercase tracking-widest mb-4">404</p>
        <h1 className="text-5xl sm:text-6xl font-black text-brand-accent mb-6">
          Sidan hittades inte
        </h1>
        <p className="text-brand-accent/60 text-lg mb-10">
          Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till startsidan för att
          hitta det du söker.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-accent hover:bg-brand-dark text-white px-8 py-4 text-lg font-semibold transition-colors"
          >
            Gå till startsidan
          </Link>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-md border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-white px-8 py-4 text-lg font-semibold transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </main>
  )
}
