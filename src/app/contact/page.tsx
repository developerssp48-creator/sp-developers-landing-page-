export default function ContactPage() {
  const mapSrc = 'https://www.google.com/maps?q=SP+Developers+NGRI+Metro+Hyderabad&output=embed'
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact Us</h1>
          <p className="mt-2 text-gray-600">We’d love to hear from you. Reach us using the details below or visit our office.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 grid gap-8 lg:grid-cols-2">
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Address</h2>
            <p className="mt-2 text-gray-700">
              Metro pillar no C961, Mohan Shraddha Complex, Flat No.504, 5th Floor,<br />
              Near NGRI Metro Station, Habsiguda, Hyderabad, Telangana 500007
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
            <a href="tel:+914048905362" className="mt-2 block text-blue-600 hover:underline">+91 40 48905362</a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Email</h2>
            <a href="mailto:spdevelopers2909@gmail.com" className="mt-2 block text-blue-600 hover:underline">spdevelopers2909@gmail.com</a>
          </div>
          <div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=SP%20Developers%20C961%20Mohan%20Shraddha%20Complex%20near%20NGRI%20Metro%20Station%20Hyderabad" target="_blank" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700">Get Directions</a>
          </div>
        </section>

        <section>
          <div className="rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden">
            <iframe
              src={mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </div>
  )
}



