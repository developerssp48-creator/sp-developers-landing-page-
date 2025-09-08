import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { setSessionCookie } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { phone } = req.body || {}
  if (!phone) return res.status(400).json({ error: 'phone required' })
  const user = await prisma.user.findUnique({ where: { phone: String(phone) } })
  if (!user) return res.status(404).json({ error: 'user not found' })
  if (user.role === 'AGENT') {
    const agent = await prisma.agent.findFirst({ where: { phone: user.phone } })
    await setSessionCookie({ userId: user.id, role: 'AGENT', agentId: agent?.id })
  } else if (user.role === 'ADMIN') {
    await setSessionCookie({ userId: user.id, role: 'ADMIN' })
  } else {
    await setSessionCookie({ userId: user.id, role: 'USER' })
  }
  return res.status(200).json({ ok: true })
}


