export default function ProjectHighlights() {
  const essentials = [
    { k: 'Clear Titles', v: 'Legal documentation and approvals for worry‑free ownership.' },
    { k: 'Prime Corridors', v: 'Near growth zones, airport connectivity and ORR access.' },
  ]
  const lifestyle = [
    { k: 'Green Living', v: 'Tree‑lined avenues and nature‑first layouts.' },
    { k: 'Ready Infrastructure', v: 'Roads, lighting and water provisions in place.' },
  ]
  const location = [
    'KYKK Road – Keesragutta – Yadagirigutta – Kolanupaka – Komaravelli belt',
    '15 Acres Bus Complex near Saidapur',
    'Vedic City; Siddha Kshetra Dhammam at Masaipet',
    'Telangana Police Training Centre & Armed Reserve Police HQ at Saidapur',
    'Veda Patashala – 16 Acres',
    'ISKCON Temple',
    'Regional Ring Road (RRR)',
  ]
  const featuresLeft = [
    'Premium Locations',
    'Government Approved layouts',
    'Grand Entrance Arches',
    'Compound Walls',
    'High Security',
    '60ft, 40ft & 33ft Wide Roads',
    'Avenue Plantation',
    'Children Play Parks',
    'Green Open Spaces',
    'Meeting Rooms',
    'Drip Irrigation Systems',
  ]
  const featuresRight = [
    '6 Lakhs Liters Water Tanks',
    'Underground Drainage System',
    'Fruits Plantation',
    'Affordable Pricing',
    'EMI Flexibility',
    'Banks Loans Availability',
    'Active Electricity Poles',
    'Waterline System',
    'Proximity to ORR and RRR',
    'Resort with outdoor activities',
  ]

  return (
    <section id="highlights" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Project Highlights Section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Project Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need for investment confidence and everyday comfort.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Essentials</h3>
              </div>
              <ul className="space-y-4">
                {essentials.map(i => (
                  <li key={i.k} className="text-gray-800">
                    <div className="font-semibold text-gray-900 mb-1">{i.k}</div>
                    <div className="text-gray-600">{i.v}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Lifestyle</h3>
              </div>
              <ul className="space-y-4">
                {lifestyle.map(i => (
                  <li key={i.k} className="text-gray-800">
                    <div className="font-semibold text-gray-900 mb-1">{i.k}</div>
                    <div className="text-gray-600">{i.v}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Amenities & Features</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <ul className="space-y-3 text-gray-800">
                {featuresLeft.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3 text-gray-800">
                {featuresRight.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Location Highlights Section */}
        <div className="border-t border-gray-200 pt-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Location Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Strategic positioning near key infrastructure and upcoming developments</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Surrounding Upcoming Development Projects</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {location.map((item, index) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-800 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


