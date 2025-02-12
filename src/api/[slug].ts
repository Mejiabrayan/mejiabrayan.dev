import { createClient } from '@libsql/client'
import type { APIRoute } from 'astro'

const client = createClient({
  url: import.meta.env.TURSO_DATABASE_URL,
  authToken: import.meta.env.TURSO_AUTH_TOKEN
})

// Rate limiting map
const rateLimit = new Map<string, number>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 5

export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params
  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  
  try {
    // Basic rate limiting
    const now = Date.now()
    const userKey = `${ip}:${slug}`
    const userLastRequest = rateLimit.get(userKey) || 0
    
    if (now - userLastRequest < RATE_LIMIT_WINDOW) {
      return new Response(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    rateLimit.set(userKey, now)

    // Increment view count with timestamp
    await client.execute({
      sql: `INSERT INTO page_views (slug, views, last_viewed) 
            VALUES (?, 1, datetime('now'))
            ON CONFLICT(slug) DO UPDATE 
            SET views = views + 1,
                last_viewed = datetime('now')
            RETURNING views`,
      args: [slug as string]
    })

    // Get updated count
    const { rows } = await client.execute({
      sql: 'SELECT views FROM page_views WHERE slug = ?',
      args: [slug as string]
    })

    return new Response(JSON.stringify({ views: rows[0].views }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  } catch (error) {
    console.error('View count error:', error)
    return new Response(JSON.stringify({ error: 'Failed to update views' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}