import { prisma } from '@/lib/prisma'

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const project = await prisma.project.findUnique({ where: { id: params.id }, include: { plots: true } })
  if (!project) return <div className="text-red-600">Project not found</div>
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageUrl} alt={project.name} className="h-48 w-80 object-cover rounded" />
        ) : (
          <div className="h-48 w-80 rounded bg-gray-100" />
        )}
        <div>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <div className="text-gray-600">{project.location ?? '-'}</div>
          <p className="mt-2 max-w-2xl">{project.description ?? ''}</p>
        </div>
      </div>
      <h2 className="font-semibold">Available Plots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.plots.map((p) => (
          <form key={p.id} className="rounded bg-white p-4 shadow" action={async () => {
            'use server'
            await prisma.booking.create({ data: { userId: project.id /* placeholder */, plotId: p.id, amountToken: 10000, status: 'PENDING' } })
          }}>
            <div className="font-semibold">Plot {p.plotNumber}</div>
            <div className="text-sm text-gray-600 mt-1">{p.sizeSqYds} sq.yds</div>
            <div className="mt-2 font-bold">₹{p.pricePerSqYd}/sq.yd</div>
            <div className="mt-1 text-xs">Status: {p.status}</div>
            <button className="btn-primary mt-3" type="submit">Book Token</button>
          </form>
        ))}
      </div>
    </div>
  )
}


