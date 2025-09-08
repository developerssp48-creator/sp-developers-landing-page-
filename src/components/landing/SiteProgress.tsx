"use client"

import { useEffect, useRef, useState } from 'react'

// Place your images in public/site-progress as 1.jpg, 2.jpg, ...
const images = [
  '/site-progress/1.jpg',
  '/site-progress/2.jpg',
  '/site-progress/3.jpg',
  '/site-progress/4.jpg',
  '/site-progress/5.jpg',
  '/site-progress/6.jpg',
  '/site-progress/7.jpg',
  '/site-progress/drip-irrigation-system.jpeg',
  '/site-progress/garden-farm-field-rows-fruit-600nw-2556694827.webp',
  '/site-progress/istockphoto-152119001-612x612.jpg',
  '/site-progress/trees-Gros-Michel-banana.webp',
]

export default function SiteProgress() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })
  const [current, setCurrent] = useState(0)
  // Mark the first image as loaded so we never show a white frame initially
  const [loaded, setLoaded] = useState<boolean[]>(() => {
    const arr = Array(images.length).fill(false) as boolean[]
    if (arr.length > 0) arr[0] = true
    return arr
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">Site Progress</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">Witness the development journey of our projects</p>
        </div>
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-xl bg-gray-100 mx-4 sm:mx-0 h-[300px] sm:h-[400px] lg:h-[600px]">
          {images.map((src, i) => (
            <button
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${current === i ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => setLightbox({ open: true, index: i })}
            >
              <img
                src={src}
                alt="site progress"
                className="h-full w-full object-cover"
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'auto' as any}
                onLoad={() => setLoaded((arr) => { const n = [...arr]; n[i] = true; return n })}
                onError={() => setLoaded((arr) => { const n = [...arr]; n[i] = true; return n })}
                style={{ visibility: loaded[i] || current === i ? 'visible' : 'hidden' }}
              />
            </button>
          ))}
        </div>
        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4" onClick={() => setLightbox({ open: false, index: 0 })}>
            <div className="relative max-w-[95vw] max-h-[95vh]">
              <img src={images[lightbox.index]} alt="progress large" className="max-h-[80vh] sm:max-h-[85vh] w-auto rounded shadow-2xl" />
              <div className="absolute inset-x-0 -bottom-8 sm:-bottom-12 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
                <button className="rounded-md bg-white/90 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox(s => ({ open: true, index: (s.index + images.length - 1) % images.length })) }}>Prev</button>
                <button className="rounded-md bg-white/90 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox(s => ({ open: true, index: (s.index + 1) % images.length })) }}>Next</button>
                <button className="rounded-md bg-white/90 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm shadow" onClick={(e) => { e.stopPropagation(); setLightbox({ open: false, index: 0 }) }}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


