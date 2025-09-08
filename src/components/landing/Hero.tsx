import EnquiryForm from '@/components/EnquiryForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-spBlue to-spBlueDark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid items-start gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur">
              <span className="font-semibold">SP Developers</span>
              <span className="opacity-80 hidden sm:inline">Rooted in trust. Built for life.</span>
              <span className="opacity-80 sm:hidden">Trusted & Reliable</span>
            </p>
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              Live closer to nature. Invest smarter near Warangal Highway.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90">
              Thoughtfully planned open plots with clear titles, strong growth corridors, and amenities designed for everyday wellness.
            </p>
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-white/90">
              <li>• Clear titles and approval-aligned layouts</li>
              <li>• ORR and Airport connectivity</li>
              <li>• Ready infrastructure and amenities</li>
            </ul>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <a className="btn-primary w-full sm:w-auto text-center" href="#enquire">Book a Site Visit</a>
              <a className="inline-flex items-center font-semibold text-white/90 hover:text-white text-sm sm:text-base" href="#highlights">See Highlights →</a>
            </div>
          </div>

          <div className="lg:justify-self-end mt-8 lg:mt-0">
            <EnquiryForm compact theme="light" />
          </div>
        </div>
      </div>
    </section>
  )
}


