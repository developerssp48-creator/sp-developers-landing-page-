import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const [usersCount, agentsCount, plotsCount, bookingsCount] = await Promise.all([
    prisma.user.count(),
    prisma.agent.count(),
    prisma.plot.count(),
    prisma.booking.count(),
  ])

  const latestLeads = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    select: { name: true, phone: true, executiveCode: true, directSignup: true, createdAt: true },
  })

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Users" value={usersCount} />
        <Stat label="Agents" value={agentsCount} />
        <Stat label="Plots" value={plotsCount} />
        <Stat label="Bookings" value={bookingsCount} />
      </div>
      <section>
        <h2 className="font-semibold mb-2">Latest Leads</h2>
        <div className="overflow-x-auto rounded border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left">Name</th>
                <th className="px-3 py-2 text-left">Phone</th>
                <th className="px-3 py-2 text-left">Mode</th>
                <th className="px-3 py-2 text-left">Code</th>
                <th className="px-3 py-2 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {latestLeads.map((l, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 py-2">{l.name}</td>
                  <td className="px-3 py-2">{l.phone}</td>
                  <td className="px-3 py-2">{l.directSignup ? 'Direct' : 'Referred'}</td>
                  <td className="px-3 py-2">{l.executiveCode ?? '-'}</td>
                  <td className="px-3 py-2">{new Date(l.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  )
}


