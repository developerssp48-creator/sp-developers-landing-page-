const items = [
  { title: 'Clear Titles', desc: 'DTCP/RERA aligned approvals for worry-free ownership.' },
  { title: 'Prime Corridors', desc: 'Near growth zones, airport connectivity and ORR access.' },
  { title: 'Green Living', desc: 'Tree-lined avenues and nature-first layouts.' },
  { title: 'Ready Infrastructure', desc: 'Roads, lighting and water provisions in place.' },
]

export default function Highlights() {
  return (
    <section id="highlights" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Project Highlights</h2>
        <p className="mt-2 max-w-2xl text-gray-600">Designed to balance investment value with everyday quality of life.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


