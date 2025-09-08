export default function ContactStrip() {
  return (
    <section id="contact" className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8 grid gap-6 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Address</h3>
          <p className="mt-2 text-sm">
            Metro pillar no C961, Mohan Shraddha Complex, Flat No.504, 5th Floor,<br />
            Near NGRI Metro Station, Habsiguda, Hyderabad, Telangana 500007
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Location</h3>
          <a href="https://www.google.com/maps/dir/?api=1&destination=SP%20Developers%20C961%20Mohan%20Shraddha%20Complex%20near%20NGRI%20Metro%20Station%20Hyderabad" target="_blank" className="mt-2 inline-block text-sm text-blue-300 hover:text-white underline">Get Directions</a>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Phone</h3>
          <a href="tel:+914048905362" className="mt-2 block text-sm hover:text-white">+91 40 48905362</a>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400">Email</h3>
          <a href="mailto:spdevelopers2909@gmail.com" className="mt-2 block text-sm hover:text-white">spdevelopers2909@gmail.com</a>
        </div>
      </div>
    </section>
  )
}


