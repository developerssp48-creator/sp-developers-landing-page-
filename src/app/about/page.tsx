import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SP Developers',
  description: 'Trusted Real estate Care by SP Developers — precision-led real estate by N. Shiv Raj.',
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Trusted Real estate Care</h1>
        <p className="mt-4 text-lg text-gray-700">
          SP Developers is a premier real estate firm founded by <strong>N. Shiv Raj</strong>, an experienced Geospatial
          Information Scientist and Technologist. With a strong foundation in engineering and geospatial technology, we
          bring a unique approach to real estate development, ensuring precision and excellence in every project.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Our Journey</h2>
          <p className="mt-3 text-gray-700">
            Our first completed project <strong>Green County</strong> at Keesara Bomalaramaram stands as a testament to our
            commitment to quality and customer satisfaction.
          </p>
          <p className="mt-3 text-gray-700">
            Currently, we are successfully developing an ongoing project <strong>Skyland Properties</strong> at Alair
            Kolanupaka, located along the Warangal Highway, offering premium plots with excellent infrastructure. Our
            focus is on providing thoughtfully planned residential and commercial spaces that meet the highest standards
            of safety, comfort, and value.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">What We Stand For</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              <li>Precision-led planning using geospatial insights</li>
              <li>Transparent, client-first processes</li>
              <li>Timely project delivery with uncompromised quality</li>
              <li>Long-term value, safety and comfort for families</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Our Promise</h3>
            <p className="mt-3 text-gray-700">
              SP Developers combines innovation, reliability, and expertise to create spaces that enhance the quality of
              life for our customers. We strive to build lasting relationships by offering customer‑centric services and
              delivering projects on time—shaping the future of real estate, one project at a time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}



