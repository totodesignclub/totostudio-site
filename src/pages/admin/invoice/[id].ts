import type { APIRoute } from 'astro';
import { comprobante } from '../../../lib/rebill';

export const prerender = false;

// Comprobante de un pago: solo para el dueño del pago (o un admin).
export const GET: APIRoute = async ({ params, locals }) => {
  if (!locals.email) return new Response(null, { status: 302, headers: { Location: '/admin/login' } });
  try {
    const c = await comprobante(params.id ?? '', locals.email, locals.admin);
    if (!c) return new Response('No encontrado', { status: 404 });
    return new Response(null, { status: 302, headers: { Location: c.url } });
  } catch (e: any) {
    // 409 payment_not_paid: el pago no se cobró, no hay comprobante.
    const msg = e?.estado === 409 ? 'Este pago no tiene comprobante porque no fue cobrado.' : 'No pudimos traer el comprobante. Probá de nuevo.';
    return new Response(msg, { status: e?.estado === 409 ? 409 : 502 });
  }
};
