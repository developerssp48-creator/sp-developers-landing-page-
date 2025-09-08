import { prisma } from '@/lib/prisma'

export default async function CustomerDashboard() {
  // Stats (placeholder values until full scoping by session)
  const [availablePlots, myBookings, registeredPlots] = await Promise.all([
    prisma.plot.count({ where: { status: 'AVAILABLE' } }),
    prisma.booking.count(),
    prisma.booking.count({ where: { status: 'CONFIRMED' } }),
  ])

  const recentActivity = [
    { id: 1, label: 'Payment received for Plot #5', time: '2 hours ago', color: 'bg-emerald-500' },
    { id: 2, label: 'Document uploaded successfully', time: '1 day ago', color: 'bg-blue-500' },
    { id: 3, label: 'Plot booking confirmed', time: '3 days ago', color: 'bg-amber-500' },
  ]

  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        <p className="text-sm text-gray-600">Overview of your investments and activities</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard title="Available Plots" value={availablePlots} icon="📍" />
        <KpiCard title="My Booked Plots" value={myBookings} icon="🏷️" />
        <KpiCard title="Registered Plots" value={registeredPlots} icon="🧾" />
        <KpiCard title="Outstanding Payments" value={'₹2.5L'} icon="💳" />
      </div>

      {/* Quick Actions */}
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="mb-3 font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActionButton label="Pay Now" icon="💳" href="#" />
          <ActionButton label="View Layout" icon="📍" href="/customer/projects" />
          <ActionButton label="Download Agreement" icon="⬇️" href="#" />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="mb-3 font-semibold">Recent Activity</h2>
        <ul className="space-y-3">
          {recentActivity.map((a) => (
            <li key={a.id} className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${a.color}`} />
              <span className="flex-1 text-sm">{a.label}</span>
              <span className="text-xs text-gray-500">{a.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function KpiCard({ title, value, icon }: { title: string; value: number | string; icon: string }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">{title}</div>
        <div className="text-lg">{icon}</div>
      </div>
      <div className="mt-3 text-3xl font-bold">{value}</div>
    </div>
  )
}

function ActionButton({ label, icon, href }: { label: string; icon: string; href: string }) {
  return (
    <a href={href} className="flex items-center justify-center gap-3 rounded-lg border bg-gray-50 px-6 py-5 text-sm font-semibold hover:bg-gray-100">
      <span>{icon}</span>
      <span>{label}</span>
    </a>
  )
}


