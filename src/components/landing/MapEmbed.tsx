export default function MapEmbed() {
  // Query-based embed (previous version)
  const src = 'https://www.google.com/maps?q=SP%20Developers%20Hyderabad%20C961%20Mohan%20shraddha%20complex%20near%20Metro%20Station%20Ngri&output=embed'
  return (
    <section id="location" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Visit our office or explore our project locations</p>
        </div>
        <div className="overflow-hidden rounded-3xl border-2 border-gray-200 shadow-xl">
          <iframe
            src={src}
            width="100%"
            height="480"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Map location of SP Developers"
          />
        </div>
      </div>
    </section>
  )
}


