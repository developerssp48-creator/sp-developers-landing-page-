import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

type Session = { userId: string; role: 'USER' | 'AGENT' | 'ADMIN'; agentId?: string }

const COOKIE_NAME = 'sp_token'

export function signSession(session: Session) {
  const secret = process.env.JWT_SECRET || 'dev-secret'
  return jwt.sign(session, secret, { expiresIn: '7d' })
}

export function verifySession(token: string): Session | null {
  try {
    const secret = process.env.JWT_SECRET || 'dev-secret'
    return jwt.verify(token, secret) as Session
  } catch {
    return null
  }
}

export async function getServerSession(): Promise<Session | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return null
  return verifySession(token)
}

export async function setSessionCookie(session: Session) {
  const token = signSession(session)
  ;(await cookies()).set(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax', path: '/' })
}

export async function clearSessionCookie() {
  ;(await cookies()).delete(COOKIE_NAME)
}


