import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const mapLink = 'https://www.google.com/maps/dir/?api=1&destination=SP%20Developers%20C961%20Mohan%20Shraddha%20Complex%20near%20NGRI%20Metro%20Station%20Hyderabad'
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="SP Developers" className="h-12 w-auto" />
            <p className="mt-4 text-sm text-gray-300">Farm Plots + Farm Life for sale at very attractive prices! Begin your journey towards a more wholesome lifestyle by investing in your very own farm!</p>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/SPDevelopersOfficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/spdevelopersofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://x.com/spdevelopersoff" target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold"><a href="#projects" className="hover:underline">Our Projects</a></h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="/projects/green-country-ii" className="hover:text-white">Green Country II</a></li>
              <li><a href="/projects/sky-land" className="hover:text-white">Sky Land Organic Farm</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold"><a href="/contact" className="hover:underline">Contact</a></h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="/contact" className="hover:text-white">Address</a></li>
              <li><a href="/contact" className="hover:text-white">Phone</a></li>
              <li><a href="/contact" className="hover:text-white">Email</a></li>
              <li><a href="/contact" className="hover:text-white">Map</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><a href="#top">Home</a></li>
              <li><a href="#projects">Our Projects</a></li>
              <li><a href="#enquire">Enquire</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} SP Developers</p>
          <div className="text-sm text-gray-400">Hyderabad • +91 9704229406 • spdevelopers2909@gmail.com</div>
        </div>
      </div>
    </footer>
  )
}


