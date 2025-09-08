import { prisma } from '@/lib/prisma'

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <form className="rounded bg-white p-4 shadow" action={async (formData) => {
        'use server'
        const name = String(formData.get('name') || '')
        const description = String(formData.get('description') || '')
        const imageUrl = String(formData.get('imageUrl') || '')
        const location = String(formData.get('location') || '')
        if (!name) return
        await prisma.project.create({ data: { name, description: description || null, imageUrl: imageUrl || null, location: location || null } })
      }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input name="name" placeholder="Project name" className="rounded border px-3 py-2" />
          <input name="location" placeholder="Location" className="rounded border px-3 py-2" />
          <input name="imageUrl" placeholder="Image URL" className="rounded border px-3 py-2" />
          <input name="description" placeholder="Short description" className="rounded border px-3 py-2 md:col-span-2" />
        </div>
        <button className="btn-primary mt-3" type="submit">Create</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded bg-white p-4 shadow">
            {p.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.imageUrl} alt={p.name} className="h-40 w-full object-cover rounded" />
            ) : (
              <div className="h-40 w-full rounded bg-gray-100" />
            )}
            <div className="mt-3 font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">{p.location ?? '-'}</div>
            <div className="text-sm mt-1">{p.description ?? ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


