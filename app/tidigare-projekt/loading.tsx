export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero skeleton */}
      <div className="h-screen bg-gray-200 animate-pulse" />

      <section className="w-full px-[10vw] py-24 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-12 w-72 bg-gray-200 rounded animate-pulse mb-14" />

          <div className="flex flex-col gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden grid grid-cols-1 xl:grid-cols-2 border border-gray-100">
                <div className="h-72 xl:h-80 bg-gray-200 animate-pulse" />
                <div className="p-8 flex flex-col gap-4">
                  <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
                  <div className="h-7 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
