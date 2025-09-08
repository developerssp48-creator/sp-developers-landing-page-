"use client"

import { useEffect, useRef, useState } from 'react'

export default function LayoutViewer() {
  const [scale, setScale] = useState(1)
  const [fitScale, setFitScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [natural, setNatural] = useState({ w: 1800, h: 1200 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  function onWheel(e: React.WheelEvent<HTMLDivElement>) {
    // Disable wheel zoom when at fit
    if (scale <= fitScale) {
      e.preventDefault()
      return
    }
    e.preventDefault()
    const delta = -e.deltaY
    const next = Math.min(3, Math.max(fitScale, scale + delta * 0.0015))
    zoomAround(e.clientX, e.clientY, next)
  }

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
  }
  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!dragging.current || scale <= fitScale) return
    setTranslate(t => clampTranslate({ x: t.x + (e.clientX - last.current.x), y: t.y + (e.clientY - last.current.y) }, scale))
    last.current = { x: e.clientX, y: e.clientY }
  }
  function onMouseUp() { dragging.current = false }

  // Fit image within container
  useEffect(() => {
    function fitToContainer() {
      const el = containerRef.current
      if (!el) return
      const baseWidth = natural.w
      const baseHeight = natural.h
      const padding = 60 // Balanced padding for good fit
      const availableW = el.clientWidth - padding
      const availableH = el.clientHeight - padding
      const s = Math.min(availableW / baseWidth, availableH / baseHeight, 1)
      setFitScale(s)
      setScale(s)
      setTranslate({
        x: Math.max(0, (el.clientWidth - baseWidth * s) / 2),
        y: Math.max(0, (el.clientHeight - baseHeight * s) / 2),
      })
    }
    fitToContainer()
    window.addEventListener('resize', fitToContainer)
    return () => window.removeEventListener('resize', fitToContainer)
  }, [natural])

  function zoomAround(clientX: number, clientY: number, nextScale: number) {
    const el = containerRef.current
    if (!el) {
      setScale(nextScale)
      return
    }
    const rect = el.getBoundingClientRect()
    const anchorX = clientX - rect.left
    const anchorY = clientY - rect.top
    const contentX = (anchorX - translate.x) / scale
    const contentY = (anchorY - translate.y) / scale
    const newTranslate = clampTranslate({ x: anchorX - contentX * nextScale, y: anchorY - contentY * nextScale }, nextScale)
    setTranslate(newTranslate)
    setScale(nextScale)
  }

  function clampTranslate(tr: { x: number; y: number }, sc: number) {
    const el = containerRef.current
    if (!el) return tr
    const viewW = el.clientWidth
    const viewH = el.clientHeight
    const contentW = natural.w * sc
    const contentH = natural.h * sc
    // If content smaller than viewport, center; else clamp edges
    const minX = Math.min(0, viewW - contentW)
    const maxX = Math.max(0, viewW - contentW)
    const minY = Math.min(0, viewH - contentH)
    const maxY = Math.max(0, viewH - contentH)
    const clampedX = contentW <= viewW ? (viewW - contentW) / 2 : Math.min(0, Math.max(minX, tr.x))
    const clampedY = contentH <= viewH ? (viewH - contentH) / 2 + 20 : Math.min(20, Math.max(minY, tr.y))
    return { x: clampedX, y: clampedY }
  }

  function panBy(dx: number, dy: number) {
    setTranslate(t => clampTranslate({ x: t.x + dx, y: t.y + dy }, scale))
  }

  return (
    <section id="layout" className="bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Master Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Interactive layout viewer - zoom, pan, and explore individual plots with precision.</p>
        </div>
        <div
          ref={containerRef}
          className="mt-6 overflow-hidden rounded-3xl border-2 border-gray-200 bg-white shadow-2xl"
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseUp}
          onMouseUp={onMouseUp}
          style={{ 
            cursor: scale > fitScale ? (dragging.current ? 'grabbing' : 'grab') : 'zoom-in', 
            height: '75vh', 
            minHeight: '600px', 
            position: 'relative' 
          }}
        >
          <div style={{ transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`, transformOrigin: '0 0' }}>
            <picture>
              <source srcSet="/layout/skyland-master.png" type="image/png" />
              <img
                src="/layout/skyland-master.svg"
                alt="Master plan layout"
                className="select-none pointer-events-none max-w-none"
                style={{
                  display: 'block',
                  width: `${natural.w}px`,
                  height: 'auto',
                }}
                ref={imgRef}
                onLoad={() => {
                  const img = imgRef.current
                  if (img && img.naturalWidth && img.naturalHeight) {
                    setNatural({ w: img.naturalWidth, h: img.naturalHeight })
                    // Force a re-fit after image loads
                    setTimeout(() => {
                      const el = containerRef.current
                      if (!el) return
                      const baseWidth = img.naturalWidth
                      const baseHeight = img.naturalHeight
                      const padding = 60
                      const availableW = el.clientWidth - padding
                      const availableH = el.clientHeight - padding
                      const s = Math.min(availableW / baseWidth, availableH / baseHeight, 1)
                      setFitScale(s)
                      setScale(s)
                      setTranslate({
                        x: Math.max(0, (el.clientWidth - baseWidth * s) / 2),
                        y: Math.max(0, (el.clientHeight - baseHeight * s) / 2),
                      })
                    }, 100)
                  }
                }}
              />
            </picture>
          </div>
          {/* Compact Control Panel */}
          <div className="pointer-events-auto absolute top-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-3">
              {/* Compact Pan Controls */}
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => panBy(0, 120)}
                  title="Pan Up"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <button 
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => panBy(-120, 0)}
                  title="Pan Left"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => panBy(120, 0)}
                  title="Pan Right"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <button 
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => panBy(0, -120)}
                  title="Pan Down"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Compact Zoom Controls */}
              <div className="flex items-center gap-1 border-t border-gray-200 pt-2">
                <button 
                  className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => {
                    const el = containerRef.current
                    const rect = el?.getBoundingClientRect()
                    const cx = rect ? rect.left + rect.width / 2 : 0
                    const cy = rect ? rect.top + rect.height / 2 : 0
                    zoomAround(cx, cy, Math.max(fitScale, scale - 0.2))
                  }}
                  title="Zoom Out"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button 
                  className="w-8 h-8 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors duration-200" 
                  onClick={() => {
                    const el = containerRef.current
                    const rect = el?.getBoundingClientRect()
                    const cx = rect ? rect.left + rect.width / 2 : 0
                    const cy = rect ? rect.top + rect.height / 2 : 0
                    zoomAround(cx, cy, Math.min(3, scale + 0.2))
                  }}
                  title="Zoom In"
                >
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button 
                  className="px-2 py-1 rounded-lg bg-green-100 hover:bg-green-200 text-green-700 text-xs font-medium transition-colors duration-200" 
                  onClick={() => { setScale(fitScale); setTranslate(clampTranslate({ x: 0, y: 0 }, fitScale)); }}
                  title="Fit to Screen"
                >
                  Fit
                </button>
                <span className="px-2 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium">
                  {Math.round((scale / fitScale) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            💡 <strong>Tip:</strong> Use mouse wheel to zoom, drag to pan, or use the controls in the top-right corner
          </p>
        </div>
      </div>
    </section>
  )
}


