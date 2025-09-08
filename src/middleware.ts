import { NextResponse, type NextRequest } from 'next/server'

function decodeRoleFromJwt(token: string): 'USER' | 'AGENT' | 'ADMIN' | null {
  try {
    const parts = token.split('.')
    if (parts.length < 2) return null
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    // atob is available in edge runtime; Buffer fallback for node
    const json = (globalThis as any).atob ? atob(base64) : Buffer.from(base64, 'base64').toString('utf8')
    const payload = JSON.parse(json)
    return payload.role ?? null
  } catch {
    return null
  }
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const token = req.cookies.get('sp_token')?.value
  const role = token ? decodeRoleFromJwt(token) : null

  const adminRoutes = ['/admin']
  const agentRoutes = ['/agent']
  const customerRoutes = ['/customer']

  if (adminRoutes.includes(url.pathname)) {
    if (role !== 'ADMIN') return NextResponse.redirect(new URL('/login', url))
  }
  if (agentRoutes.includes(url.pathname)) {
    if (role !== 'AGENT') return NextResponse.redirect(new URL('/login', url))
  }
  if (customerRoutes.includes(url.pathname)) {
    if (role !== 'USER') return NextResponse.redirect(new URL('/login', url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/agent', '/customer'],
}


