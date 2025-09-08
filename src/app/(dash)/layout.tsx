import Link from 'next/link'
import '../globals.css'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-6">
          <Link className="font-extrabold text-spBlue" href="/">SP Developers</Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/admin">Admin</Link>
            <Link href="/agent">Agent</Link>
            <Link href="/customer">Customer</Link>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  )
}


