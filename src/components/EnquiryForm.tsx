"use client"
import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = {
  compact?: boolean
  theme?: 'light' | 'dark'
}

export default function EnquiryForm({ compact = false, theme = 'dark' }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const phone = String(formData.get('phone') || '')
    const email = String(formData.get('email') || '')
    const mode = String(formData.get('mode') || 'direct')
    const agentCode = String(formData.get('agentCode') || '')
    const executiveCode = String(formData.get('executiveCode') || '')
    const note = String(formData.get('note') || '')

    // Basic validation
    if (!name || !phone) {
      setStatus('error')
      setMessage('Please provide your name and phone number.')
      return
    }
    if (mode === 'agent' && (!agentCode || !executiveCode)) {
      setStatus('error')
      setMessage('Please provide both Agent Code and Executive Code.')
      return
    }

    setStatus('submitting')
    setMessage('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          direct: mode === 'direct',
          agentCode: agentCode || undefined,
          executiveCode: executiveCode || undefined,
          source: 'landing',
          note: note || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to submit')
      setStatus('success')
      setMessage('Thank you! Our team will contact you shortly.')
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setMessage(err?.message || 'Something went wrong. Please try again.')
    }
  }

  const isLight = theme === 'light'
  const [modeValue, setModeValue] = useState<'direct' | 'agent'>('direct')
  useEffect(() => {
    if (status === 'success') {
      const t = setTimeout(() => setStatus('idle'), 3500)
      return () => clearTimeout(t)
    }
  }, [status])
  const cardBase = isLight
    ? 'bg-white/95 border border-gray-100 shadow-2xl backdrop-blur-sm'
    : 'bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl'
  const inputBase = isLight
    ? 'w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300/40'
    : 'w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 text-[15px] placeholder-white/70 shadow-sm focus:border-white focus:ring-2 focus:ring-white/30'
  const selectBase = inputBase.replace('placeholder-gray-400', '')
  const spacing = compact ? 'p-5 max-w-sm' : 'p-8 max-w-xl'

  return (
    <div className={`relative w-full ${spacing} rounded-2xl ${cardBase}`} id="enquire">
      {status === 'success' && (
        <div className="pointer-events-none absolute right-4 top-4 rounded-md bg-green-600/90 px-3 py-2 text-sm font-medium text-white shadow-md" role="status" aria-live="polite">
          Submitted! We will call you shortly.
        </div>
      )}
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl font-extrabold tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>Quick Enquiry</h2>
        <span className={`hidden md:inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${isLight ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' : 'bg-white/10 text-white ring-1 ring-white/20'}`}>Response in 10 mins</span>
      </div>
      <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={onSubmit}>
        <div className="md:col-span-1">
          <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Name</label>
          <input name="name" className={inputBase} placeholder="Your Name" autoComplete="name" required />
        </div>
        <div className="md:col-span-1">
          <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Phone</label>
          <input name="phone" className={inputBase} placeholder="10-digit number" inputMode="tel" pattern="^[0-9]{10}$" required />
        </div>
        <div className="md:col-span-2">
          <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Email (optional)</label>
          <input name="email" className={inputBase} placeholder="you@example.com" autoComplete="email" type="email" />
        </div>
        <div className="md:col-span-2">
          <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-800' : 'text-white'}`}>How did you reach us?</label>
          <div className="relative">
            <select name="mode" className={`${selectBase} ${isLight ? '' : 'text-white'} appearance-none pr-10`} value={modeValue} onChange={(e) => setModeValue(e.target.value as 'direct' | 'agent')}>
              <option className="text-black" value="direct">I came directly</option>
              <option className="text-black" value="agent">I have a marketing executive code</option>
            </select>
            <ChevronDown className={`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none ${isLight ? 'text-gray-400' : 'text-white/70'}`} />
          </div>
        </div>
        {modeValue === 'agent' && (
          <>
            <div className="md:col-span-1">
              <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Agent Code</label>
              <input name="agentCode" className={inputBase} placeholder="e.g. AG1234" />
            </div>
            <div className="md:col-span-1">
              <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Executive Code</label>
              <input name="executiveCode" className={inputBase} placeholder="e.g. EX9876" />
            </div>
          </>
        )}
        <div className="md:col-span-2">
          <label className={`mb-1 block text-sm font-medium ${isLight ? 'text-gray-700' : 'text-white'}`}>Message (optional)</label>
          <textarea name="note" className={`${inputBase} min-h-[90px]`} placeholder="Tell us what you’re looking for (plot size, location, budget)..." />
        </div>
        <div className="md:col-span-2">
          <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 font-bold text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-70" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
          <p className={`mt-3 text-xs ${isLight ? 'text-gray-500' : 'text-white/80'}`}>We respect your privacy. Your details are safe with us.</p>
        </div>
      </form>
      {status === 'error' && (
        <p className={`mt-2 text-sm ${isLight ? 'text-red-600' : 'text-red-200'}`} role="alert">{message}</p>
      )}
    </div>
  )
}


