import type { APIRoute } from 'astro';
import { turso } from '../../lib/turso';

export const GET: APIRoute = async () => {
  try {
    // Attempt to query the database
    const result = await turso.execute('SELECT 1 as test');
    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Database connection failed' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
