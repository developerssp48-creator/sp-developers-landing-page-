import EnquiryForm from '@/components/EnquiryForm'
import Hero from '@/components/landing/Hero'
import ProjectHighlights from '@/components/landing/ProjectHighlights'
import Gallery from '@/components/landing/Gallery'
import Footer from '@/components/landing/Footer'
import Projects from '@/components/landing/Projects'
import Testimonials from '@/components/landing/Testimonials'
import ContactStrip from '@/components/landing/ContactStrip'
import SiteProgress from '@/components/landing/SiteProgress'
import About from '@/components/landing/About'
import LayoutViewer from '@/components/landing/LayoutViewer'
import MapEmbed from '@/components/landing/MapEmbed'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <div className="space-y-0">
        <About />
        <Projects />
        <SiteProgress />
        <ProjectHighlights />
        <LayoutViewer />
        <Gallery />
        <Testimonials />
        <MapEmbed />
        <ContactStrip />
      </div>
      <Footer />
    </main>
  )
}


