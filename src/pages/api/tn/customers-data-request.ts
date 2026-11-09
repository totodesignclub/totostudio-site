import type { APIRoute } from 'astro';

export const prerender = false;

// Webhook de privacidad de Tienda Nube. No almacenamos datos personales de clientes finales,
// por lo que solo confirmamos la recepción con HTTP 200.
export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'content-type': 'application/json' } });
