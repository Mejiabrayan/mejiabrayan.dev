import type { APIRoute } from 'astro';
import { turso } from '../../lib/turso';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    await turso.execute({
      sql: 'INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)',
      args: [data.name, data.email, data.message]
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to save message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
