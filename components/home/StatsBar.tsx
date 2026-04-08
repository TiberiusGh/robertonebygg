const stats = [
  { value: '30+', label: 'Års branscherfarenhet' },
  { value: '2015', label: 'Etablerat' },
  { value: '100%', label: 'Nöjd kund-garanti' },
  { value: 'Kalmar län', label: 'Verksamhetsområde' },
]

export default function StatsBar() {
  return (
    <div className="w-full bg-brand-accent text-white">
      <div className="max-w-screen-xl mx-auto px-[10vw] py-8">
        <div className="grid grid-cols-4 gap-2 sm:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-lg sm:text-3xl md:text-4xl font-black text-brand-medium whitespace-nowrap">
                {stat.value}
              </span>
              <span className="text-[9px] sm:text-sm text-white/70 tracking-wide uppercase font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
