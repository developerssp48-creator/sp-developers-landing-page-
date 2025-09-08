import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	try {
		const { name, phone, email, direct, executiveCode, agentCode, source } = req.body || {}

		if (!name || !phone) {
			return res.status(400).json({ error: 'name and phone are required' })
		}

		let agent = null as null | { id: string }
		if (!direct && executiveCode && agentCode) {
			agent = await prisma.agent.findUnique({ where: { code: String(agentCode) }, select: { id: true } })
			if (!agent) {
				return res.status(400).json({ error: 'Invalid agentCode' })
			}
		}

		const user = await prisma.user.upsert({
			where: { phone: String(phone) },
			update: {
				name: String(name),
				email: email ? String(email) : null,
				directSignup: Boolean(direct ?? true),
				executiveCode: executiveCode ? String(executiveCode) : null,
				referredById: agent ? agent.id : null,
			},
			create: {
				name: String(name),
				phone: String(phone),
				email: email ? String(email) : null,
				role: 'USER',
				directSignup: Boolean(direct ?? true),
				executiveCode: executiveCode ? String(executiveCode) : null,
				referredById: agent ? agent.id : null,
			},
		})

		if (!Boolean(direct) && agent && executiveCode) {
			await prisma.referral.create({
				data: {
					userId: user.id,
					agentId: agent.id,
					executiveCode: String(executiveCode),
					source: String(source ?? 'landing'),
				},
			})
		}

		return res.status(200).json({ ok: true, userId: user.id })
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error: 'Internal server error' })
	}
}
