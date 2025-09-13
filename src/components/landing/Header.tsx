"use client"

import { useState } from 'react'
import Image from 'next/image'

const links = [
  { href: '/about', label: 'About' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '#enquire', label: 'Enquire' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-2 sm:py-3">
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/logo.png" alt="SP Developers" width={300} height={75} className="h-12 sm:h-14 lg:h-16 w-auto" />
          <span className="sr-only">SP Developers</span>
        </a>

        <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/919704229406?text=Hi, I'd like to schedule a site visit for Sky Land Organic Farm." target="_blank" rel="noopener noreferrer" className="rounded-md bg-spBlue px-3 lg:px-4 py-1.5 lg:py-2 text-white shadow hover:bg-spBlueDark text-xs lg:text-sm">Book Visit</a>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-1.5 sm:px-3 sm:py-2 text-gray-700"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 sm:px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-base font-medium text-gray-800 py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/919704229406?text=Hi, I'd like to schedule a site visit for Sky Land Organic Farm." target="_blank" rel="noopener noreferrer" className="rounded-md bg-spBlue px-4 py-2 text-white shadow mt-2" onClick={() => setOpen(false)}>Book Visit</a>
          </div>
        </div>
      )}
    </header>
  )
}


