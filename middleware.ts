import { NextRequest, NextResponse } from 'next/server'

const RATE_LIMIT = 60 // requests per minute per IP
const buckets = new Map<string, { count: number; resetAt: number }>()

export function middleware(req: NextRequest) {
  const ip = req.ip ?? req.headers.get('x-forwarded-for') ?? 'unknown'
  const now = Date.now()
  const key = `${ip}`
  const bucket = buckets.get(key) ?? { count: 0, resetAt: now + 60_000 }
  if (now > bucket.resetAt) {
    bucket.count = 0
    bucket.resetAt = now + 60_000
  }
  bucket.count += 1
  buckets.set(key, bucket)

  if (bucket.count > RATE_LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*']
}


