import Link from 'next/link'
import { prisma } from '@/lib/prisma'
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function CustomerProjectsGrid() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' }, include: { plots: true } })
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <Link href={`/customer/projects/${p.id}`} key={p.id} className="rounded bg-white p-4 shadow block">
            {p.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.imageUrl} alt={p.name} className="h-40 w-full object-cover rounded" />
            ) : (
              <div className="h-40 w-full rounded bg-gray-100" />
            )}
            <div className="mt-3 font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">{p.location ?? '-'}</div>
            <div className="text-sm mt-1">{p.description ?? ''}</div>
            <div className="text-xs mt-2">{p.plots.length} plots</div>
          </Link>
        ))}
      </div>
    </div>
  )
}


