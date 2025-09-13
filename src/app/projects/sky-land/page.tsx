import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Phone, Mail, Calendar, Users, Home, TreePine } from 'lucide-react'
import Footer from '../../../components/landing/Footer'

export default function SkyLandPage() {
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
              <Link href="/projects/green-country-ii" className="text-gray-600 hover:text-gray-900">
                Green Country II
              </Link>
              <Link href="#enquire" className="btn-primary">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
                <TreePine className="w-4 h-4" />
                Premium Plots
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Sky Land Organic Farm
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium plots in the heart of Kolanupaka, Alair. Experience modern living with nature's tranquility.
              </p>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Kolanupaka, Alair</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Ready for Sale</span>
                </div>
              </div>
              {/* Download Options */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/downloads/sky-land/sky%20land%20brouchure.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  📄 Download Brochure
                </a>
                <a
                  href="/downloads/sky-land/LAYOUT%202.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  🗺️ Download Layout
                </a>
                <a
                  href="/downloads/sky-land/EMI_OPTIONS.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  💳 Download EMI Options
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/layout/skyland-master.png"
                  alt="Sky Land Master Plan"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About Sky Land Properties</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Sky Land Properties represents the pinnacle of development in Kolanupaka, Alair. 
                  Strategically located along the Warangal Highway, this premium project offers thoughtfully 
                  planned plots that combine modern amenities with natural beauty.
                </p>
                <p>
                  Our master-planned community features wide roads, green spaces, and essential infrastructure 
                  to ensure a comfortable and convenient lifestyle. Each plot is designed to maximize natural 
                  light and ventilation while providing privacy and security.
                </p>
                <p>
                  With clear titles and all necessary approvals in place, Sky Land Properties offers a 
                  secure investment opportunity in one of Hyderabad's fastest-growing corridors.
                </p>
              </div>

              {/* Key Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    'Government Approved Layout',
                    'Wide 30ft & 40ft Roads',
                    'Underground Drainage',
                    'Water Supply System',
                    'Electricity Infrastructure',
                    'Green Open Spaces',
                    'Security & CCTV',
                    'Children Play Area',
                    'Avenue Plantation',
                    'Compound Wall',
                    'Grand Entrance',
                    'Parking Facilities'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offers & Finance Options */}
              <div className="mt-12">
                <div className="relative overflow-hidden rounded-3xl border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 p-8 md:p-10 shadow-2xl ring-4 ring-yellow-200">
                  {/* Animated background elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30 animate-bounce"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-red-400 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-spin"></div>
                  
                  <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="flex-1 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-black text-white shadow-lg animate-pulse border-2 border-white">
                        🔥🔥 LIMITED TIME OFFER 🔥🔥
                      </div>
                      <h3 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                        <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                          Buy 2 Plots, Get 1 Plot
                        </span>
                        <br />
                        <span className="text-6xl md:text-7xl font-black text-red-600 animate-pulse">
                          FREE!
                        </span>
                      </h3>
                      <p className="mt-4 text-xl text-gray-800 font-bold">
                        🎯 Special launch offer - Save up to 33% on your investment
                      </p>
                      <p className="mt-3 text-base text-gray-700 font-medium">
                        ⚡ Limited period only - Don't miss this incredible opportunity!
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        *Terms and conditions apply. Valid for limited period only.
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                      <div className="rounded-2xl bg-white px-8 py-6 text-center shadow-xl ring-4 ring-green-200 border-4 border-green-100">
                        <div className="text-lg font-black text-green-600 uppercase tracking-wider">💰 Finance Option</div>
                        <div className="mt-3 text-2xl font-black text-green-700">EMI Facility Available</div>
                        <div className="mt-2 text-sm text-gray-700 font-medium">Flexible monthly payment plans</div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <a href="tel:+914048905362" className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                          📞 Call Now - Get Instant Quote
                        </a>
                        <a href="https://wa.me/914048905362" target="_blank" className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-4 px-8 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
                          💬 WhatsApp - Quick Response
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMI Payment Options */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">EMI Payment Options</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {/* 12 Months */}
                  <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">12 Months · ₹5,650 × 121 = ₹6,83,650</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Booking Amount</span><span className="font-semibold">₹11,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Allotment Amount</span><span className="font-semibold">₹55,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">EMI per month (10,000 × 12M)</span><span className="font-semibold">₹1,20,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Special EMI (6th Month)</span><span className="font-semibold">₹50,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Balance within EMI period</span><span className="font-semibold">₹4,47,000</span></div>
                    </div>
                  </div>

                  {/* 18 Months */}
                  <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">18 Months · ₹5,800 × 121 = ₹7,01,800</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Booking Amount</span><span className="font-semibold">₹11,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Allotment Amount</span><span className="font-semibold">₹55,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">EMI per month (10,000 × 18M)</span><span className="font-semibold">₹1,80,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Every 6th Month Spl. EMI (2 × 40,000)</span><span className="font-semibold">₹80,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Balance within EMI period</span><span className="font-semibold">₹3,75,800</span></div>
                    </div>
                  </div>

                  {/* 24 Months */}
                  <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">24 Months · ₹6,000 × 121 = ₹7,26,000</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Booking Amount</span><span className="font-semibold">₹11,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Allotment Amount</span><span className="font-semibold">₹55,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">EMI per month (10,000 × 24M)</span><span className="font-semibold">₹2,40,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Every 6th Month Spl. EMI (3 × 30,000)</span><span className="font-semibold">₹90,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Balance within EMI period</span><span className="font-semibold">₹3,30,000</span></div>
                    </div>
                  </div>

                  {/* 30 Months */}
                  <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">30 Months · ₹6,200 × 121 = ₹7,50,200</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Booking Amount</span><span className="font-semibold">₹11,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Allotment Amount</span><span className="font-semibold">₹55,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">EMI per month (10,000 × 30M)</span><span className="font-semibold">₹3,00,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Every 6th Month Spl. EMI (4 × 30,000)</span><span className="font-semibold">₹1,20,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Balance within EMI period</span><span className="font-semibold">₹2,64,200</span></div>
                    </div>
                  </div>

                  {/* 36 Months */}
                  <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">36 Months · ₹6,400 × 121 = ₹7,74,400</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Booking Amount</span><span className="font-semibold">₹11,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Allotment Amount</span><span className="font-semibold">₹55,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">EMI per month (10,000 × 36M)</span><span className="font-semibold">₹3,60,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Every 6th Month Spl. EMI (5 × 30,000)</span><span className="font-semibold">₹1,50,000</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Balance within EMI period</span><span className="font-semibold">₹2,34,400</span></div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">Note: East Face charges ₹200/sq.yd; any corner ₹300/sq.yd. Registration expenses as per company policy.</p>
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
                    <span className="font-medium">Kolanupaka, Alair</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plot Sizes</span>
                    <span className="font-medium">Starting from 121 sq yards</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-medium text-green-600">₹5,799/sq yard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Plots</span>
                    <span className="font-medium">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium text-green-600">Ready for Sale</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get More Information</h3>
                <p className="text-gray-600 mb-6">
                  Contact our sales team for detailed information, site visits, and pricing.
                </p>
                <div className="space-y-3">
                  <a href="tel:+914048905362" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Phone className="w-5 h-5" />
                    <span>+91 40 48905362</span>
                  </a>
                  <a href="mailto:spdevelopers2909@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                    <Mail className="w-5 h-5" />
                    <span>spdevelopers2909@gmail.com</span>
                  </a>
                </div>
                <a href="https://wa.me/919704229406?text=Hi, I'd like to schedule a site visit for Sky Land Organic Farm." target="_blank" rel="noopener noreferrer" className="w-full mt-4 btn-primary text-center block">
                  Schedule Site Visit
                </a>
                <div className="mt-4 space-y-2">
                  <a
                    href="/downloads/sky-land/sky%20land%20brouchure.pdf"
                    download
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    📄 Download Brochure
                  </a>
                  <a
                    href="/downloads/sky-land/LAYOUT%202.pdf"
                    download
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    🗺️ Download Layout
                  </a>
                  <a
                    href="/downloads/sky-land/EMI_OPTIONS.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gray-100 hover:bg-gray-200 text-center text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    💳 Download EMI Options
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-600 mb-4">
                  Sky Land Properties is strategically located in Kolanupaka, Alair, 
                  providing excellent connectivity to Hyderabad and surrounding areas.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=Kolanupaka+Alair+Hyderabad&output=embed"
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

      {/* Master Plan Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Master Plan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the detailed layout of Sky Land Properties with our interactive master plan
            </p>
          </div>
          <div className="rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden">
            <Image
              src="/layout/skyland-master.png"
              alt="Sky Land Master Plan"
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
