import { prisma } from '@/lib/prisma'
export const dynamic = 'force-dynamic'
export const revalidate = 0
import { setSessionCookie } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="w-full max-w-md rounded bg-white p-6 shadow" action={async (formData) => {
        'use server'
        const phone = String(formData.get('phone') || '')
        if (!phone) return

        // Determine role based on existing agent record or fallback to USER
        const existingAgent = await prisma.agent.findFirst({ where: { phone } })
        const role = existingAgent ? 'AGENT' : 'USER'

        // Create the user if it does not exist
        const user = await prisma.user.upsert({
          where: { phone },
          update: { role },
          create: { name: phone, phone, role, referredById: existingAgent?.id ?? null, directSignup: true },
        })

        if (user.role === 'AGENT') {
          const agent = await prisma.agent.findFirst({ where: { phone: user.phone } })
          await setSessionCookie({ userId: user.id, role: 'AGENT', agentId: agent?.id })
          redirect('/agent')
        }

        if (user.role === 'ADMIN') {
          await setSessionCookie({ userId: user.id, role: 'ADMIN' })
          redirect('/admin')
        }

        await setSessionCookie({ userId: user.id, role: 'USER' })
        redirect('/customer')
      }}>
        <h1 className="text-xl font-bold">Login</h1>
        <input name="phone" placeholder="Phone" className="mt-4 w-full rounded border px-3 py-2" />
        <button className="btn-primary mt-4 w-full" type="submit">Login</button>
        <p className="mt-3 text-xs text-gray-500">Use 9000000000 to login as seeded Agent.</p>
      </form>
    </div>
  )
}


