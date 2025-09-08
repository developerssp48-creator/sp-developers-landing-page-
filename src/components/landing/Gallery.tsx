"use client"

import { useState } from 'react'

// Drop your images in public/gallery as sp-g-*.jpg
const images = [
  '/gallery/sp-g-1.jpg',
  '/gallery/sp-g-3.jpg',
  '/gallery/sp-g-4.jpg',
  '/gallery/sp-g-5.jpg',
  '/gallery/sp-g-6.jpg',
  '/gallery/sp-g-7.jpg',
  '/gallery/sp-g-8.jpg',
  '/gallery/sp-g-9.jpg',
  '/gallery/sp-g-10.jpg',
  '/gallery/sp-g-11.jpg',
  '/gallery/sp-g-12.jpg',
  '/gallery/sp-g-13.jpg',
  '/gallery/sp-g-14.jpg',
  '/gallery/sp-g-15.jpg',
  '/gallery/sp-g-18.jpg',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })

  return (
    <section id="gallery" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A glimpse into community life and green spaces.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => setLightbox({ open: true, index: idx })}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={src} alt="gallery" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </button>
          ))}
        </div>
        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setLightbox({ open: false, index: 0 })}>
            <div className="relative w-full max-w-5xl">
              <img src={images[lightbox.index]} alt="gallery large" className="max-h-[85vh] w-full rounded-lg object-contain shadow-2xl" />
              <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-4">
                <button className="rounded-md bg-white/90 px-3 py-2 text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox(s => ({ open: true, index: (s.index + images.length - 1) % images.length })) }}>Prev</button>
                <button className="rounded-md bg-white/90 px-3 py-2 text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox(s => ({ open: true, index: (s.index + 1) % images.length })) }}>Next</button>
                <button className="rounded-md bg-white/90 px-3 py-2 text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox({ open: false, index: 0 }) }}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


