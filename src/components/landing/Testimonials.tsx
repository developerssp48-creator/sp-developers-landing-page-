type Testimonial = { name: string; quote: string; role: string }

const testimonials: Testimonial[] = [
  { name: 'Ajay Kumar', role: 'Home Buyer', quote: 'Best budget-friendly plots with EMI facility. Developments going well.' },
  { name: 'Shiva', role: 'Investor', quote: 'Affordable prices and strong developments. Trusted company.' },
  { name: 'Mohan Das', role: 'Plot Owner', quote: 'My plot appreciated quickly. Helpful guidance from the team.' },
]

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase()
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-spBlue text-white font-semibold">
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real feedback from customers who invested with us.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <StarRow />
              <blockquote className="mt-4 text-gray-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </figcaption>
              <svg className="absolute -top-3 -right-3 h-8 w-8 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8V11.17A5.17 5.17 0 0 0 7.17 6Zm9.66 0A5.17 5.17 0 0 0 11.66 11.17V22h8V11.17A5.17 5.17 0 0 0 16.83 6Z"/></svg>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


