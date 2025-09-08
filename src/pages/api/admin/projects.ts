import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { verifySession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.sp_token
  const session = token ? verifySession(token) : null
  if (!session || session.role !== 'ADMIN') return res.status(401).json({ error: 'unauthorized' })

  if (req.method === 'GET') {
    const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } })
    return res.status(200).json(projects)
  }

  if (req.method === 'POST') {
    const { name, description, imageUrl, location } = req.body || {}
    if (!name) return res.status(400).json({ error: 'name required' })
    const project = await prisma.project.create({ data: { name, description, imageUrl, location } })
    return res.status(201).json(project)
  }

  return res.status(405).end()
}


