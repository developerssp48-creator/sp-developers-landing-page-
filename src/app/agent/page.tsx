import { prisma } from '@/lib/prisma'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function AgentDashboard() {
  // For now, show global agent stats. Later, scope by authenticated agent.
  const [agentsCount, referralsCount] = await Promise.all([
    prisma.agent.count(),
    prisma.referral.count(),
  ])

  const latestReferrals = await prisma.referral.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: { user: true, agent: true },
  })

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Agent Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat label="Agents" value={agentsCount} />
        <Stat label="Referrals" value={referralsCount} />
      </div>
      <section>
        <h2 className="font-semibold mb-2">Latest Referrals</h2>
        <div className="overflow-x-auto rounded border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left">Agent</th>
                <th className="px-3 py-2 text-left">User</th>
                <th className="px-3 py-2 text-left">Code</th>
                <th className="px-3 py-2 text-left">Source</th>
                <th className="px-3 py-2 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {latestReferrals.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-3 py-2">{r.agent.name} ({r.agent.code})</td>
                  <td className="px-3 py-2">{r.user.name} ({r.user.phone})</td>
                  <td className="px-3 py-2">{r.executiveCode}</td>
                  <td className="px-3 py-2">{r.source}</td>
                  <td className="px-3 py-2">{new Date(r.createdAt).toLocaleString()}</td>
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


