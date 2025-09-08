import Link from 'next/link'

type ProjectCard = {
  name: string
  location: string
  image: string
  slug: string
  status: 'completed' | 'in-progress'
}

const projects: ProjectCard[] = [
  { name: 'Sky Land', location: 'Kolanupaka, Alair', image: '/layout/skyland-master.png', slug: 'sky-land', status: 'in-progress' },
  { name: 'Green Country II', location: 'Keesara', image: '/projects/layout-1.jpg', slug: 'green-country-ii', status: 'completed' },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">Our Properties</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Curated layouts inspired by nature and planned for strong appreciation.</p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto px-4 sm:px-0">
          {projects.map((p) => (
            <Link key={p.name} href={`/projects/${p.slug}`} className="group">
              <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  {/* Enhanced Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 ${
                      p.status === 'completed' 
                        ? 'bg-green-500 text-white border-green-600' 
                        : 'bg-orange-500 text-white border-orange-600'
                    }`}>
                      {p.status === 'completed' ? '✓ COMPLETED' : '🚧 IN PROGRESS'}
                    </span>
                  </div>
                  {/* Offer Badge for Sky Land */}
                  {p.slug === 'sky-land' && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold shadow-lg border-2 bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-600 animate-pulse">
                        <span className="hidden sm:inline">🔥 BUY 2 GET 1 FREE</span>
                        <span className="sm:hidden">🔥 OFFER</span>
                      </span>
                    </div>
                  )}
                  {/* EMI Badge for Sky Land */}
                  {p.slug === 'sky-land' && (
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold shadow-lg border-2 bg-green-500 text-white border-green-600">
                        <span className="hidden sm:inline">💳 EMI AVAILABLE</span>
                        <span className="sm:hidden">💳 EMI</span>
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.location}</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                      View Details
                      <svg className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


