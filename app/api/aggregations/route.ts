import { NextResponse } from 'next/server'
import { cachedFetch, getJson } from '@/lib/http'

type Project = { id: string; name: string; score?: number }
type Person = { id: string; name: string }
type Nft = { id: string; name: string }

export async function GET() {
  const OLYM3_API_BASE = process.env.OLYM3_API_BASE ?? 'https://api.olym3.xyz'
  const JSABC_API_BASE = process.env.JSABC_API_BASE ?? 'https://jsabc.xyz/api'
  const AIJUDGE_API_BASE = process.env.AIJUDGE_API_BASE ?? 'https://aijudge.olym3.xyz/api'

  try {
    const [projects, people, nfts] = await Promise.all([
      cachedFetch('projects', () => getJson<Project[]>(`${AIJUDGE_API_BASE}/projects`).catch(() => [])),
      cachedFetch('people', () => getJson<Person[]>(`${JSABC_API_BASE}/people`).catch(() => [])),
      cachedFetch('nfts', () => getJson<Nft[]>(`${OLYM3_API_BASE}/query-nfts`).catch(() => [])),
    ])
    return NextResponse.json({ projects, people, nfts }, { status: 200, headers: { 'Cache-Control': 'public, max-age=60, s-maxage=60' } })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 })
  }
}


