import { LRUCache } from 'lru-cache'

const cache = new LRUCache<string, any>({ max: 500, ttl: 1000 * 60 })

export async function cachedFetch<T>(key: string, fn: () => Promise<T>, ttlMs = 60_000): Promise<T> {
  const cached = cache.get(key) as T | undefined
  if (cached) return cached
  const value = await fn()
  cache.set(key, value, { ttl: ttlMs })
  return value
}

export function getJson<T>(input: string, init?: RequestInit): Promise<T> {
  return fetch(input, init).then(async (r) => {
    if (!r.ok) {
      const txt = await r.text().catch(() => '')
      throw new Error(`HTTP ${r.status}: ${txt}`)
    }
    return r.json() as Promise<T>
  })
}


