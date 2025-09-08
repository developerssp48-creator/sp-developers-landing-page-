import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Calendar, Users, Home, TreePine } from 'lucide-react'
import Footer from '../../../components/landing/Footer'

export default function GreenCountryIIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 hover:text-gray-900">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/projects/sky-land" className="text-gray-600 hover:text-gray-900">
                Sky Land
              </Link>
              <Link href="#enquire" className="btn-primary">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-6">
                <TreePine className="w-4 h-4" />
                Eco-Friendly Plots
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Green Country II
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience sustainable living in our eco-friendly plots at Keesara Bomalaramaram. 
                A perfect blend of modern amenities and environmental consciousness.
              </p>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Keesara Bomalaramaram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Project Completed</span>
                </div>
              </div>
              {/* Download Options */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/downloads/green-country-ii/Green%20Country%20III%20Broucher%202.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  📄 Download Brochure
                </a>
                <a
                  href="/downloads/green-country-ii/Green%20Country%20III%20Broucher%202.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  🗺️ Download Layout
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/projects/layout-1.jpg"
                  alt="Green Country II Layout"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About Green Country II</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Green Country II is our flagship eco-friendly residential project located in the 
                  rapidly developing area of Keesara Bomalaramaram, Hyderabad. This project represents our commitment 
                  to sustainable development and environmental responsibility.
                </p>
                <p>
                  Designed with modern living in mind, Green Country II features thoughtfully planned 
                  plots with emphasis on green spaces, energy efficiency, and community living. 
                  Our development includes extensive landscaping, rainwater harvesting, and solar-ready infrastructure.
                </p>
                <p>
                  With excellent connectivity to Hyderabad's IT corridor and upcoming infrastructure projects, 
                  Green Country II offers both a peaceful lifestyle and strong investment potential.
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    'Government Approved Layout',
                    'Wide 40ft & 60ft Roads',
                    'Rainwater Harvesting',
                    'Solar Panel Ready',
                    'Underground Cabling',
                    'Green Belt Development',
                    '24/7 Security',
                    'Community Center',
                    'Fruit Tree Plantation',
                    'Perimeter Fencing',
                    'Modern Entrance Gate',
                    'Electric Vehicle Charging'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environmental Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Environmental Features</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Sustainable Living</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Rainwater harvesting system</li>
                      <li>• Solar panel infrastructure</li>
                      <li>• LED street lighting</li>
                      <li>• Waste management system</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Green Spaces</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• 30% green cover</li>
                      <li>• Fruit tree plantation</li>
                      <li>• Community gardens</li>
                      <li>• Walking trails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">Keesara Bomalaramaram</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plot Sizes</span>
                    <span className="font-medium">Starting from 121 sq yards</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-medium text-green-600">₹5,499/sq yard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Plots</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium text-green-600">Project Completed</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get More Information</h3>
                <p className="text-gray-600 mb-6">
                  Contact our sales team for detailed information, site visits, and pricing.
                </p>
                <div className="space-y-3">
                  <a href="tel:+914048905362" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
                    <Phone className="w-5 h-5" />
                    <span>+91 40 48905362</span>
                  </a>
                  <a href="mailto:spdevelopers2909@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-green-600">
                    <Mail className="w-5 h-5" />
                    <span>spdevelopers2909@gmail.com</span>
                  </a>
                </div>
                <button className="w-full mt-4 btn-primary bg-green-600 hover:bg-green-700">
                  Schedule Site Visit
                </button>
                <div className="mt-4 space-y-2">
                  <a
                    href="/downloads/green-country-ii/Green%20Country%20III%20Broucher%202.pdf"
                    download
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    📄 Download Brochure
                  </a>
                  <a
                    href="/downloads/green-country-ii/Green%20Country%20III%20Broucher%202.pdf"
                    download
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    🗺️ Download Layout
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-600 mb-4">
                  Green Country II is strategically located in Keesara Bomalaramaram, providing excellent 
                  connectivity to Hyderabad's IT corridor and upcoming infrastructure.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Keesara+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Layout</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the detailed layout of Green Country II with our comprehensive site plan
            </p>
          </div>
          <div className="rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden">
            <Image
              src="/projects/layout-1.jpg"
              alt="Green Country II Layout"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
