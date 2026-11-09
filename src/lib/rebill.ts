// Cliente mínimo de la API de Rebill (https://docs.rebill.com/api). Solo servidor: usa la clave secreta.
// Variables: REBILL_SECRET_KEY (sk_...), REBILL_MOCK=1 para datos de demostración (solo en local).
import { env, esDev } from './auth';

const BASE = 'https://api.rebill.com';

export type Pago = {
  id: string; fecha: string; monto: number; moneda: string; estado: string;
  descripcion: string; email: string; suscripcionId?: string | null;
};
export type Suscripcion = {
  id: string; nombre: string; estado: string; detalle?: string; monto: number; moneda: string;
  proximoCobro?: string | null;
};
export type Cobro = { id: string; titulo: string; monto: number | null; moneda: string; url: string; vence?: string | null };

export class ErrorRebill extends Error {
  constructor(public estado: number, public cuerpo: unknown, msg?: string) {
    super(msg ?? `Rebill respondió ${estado}`);
  }
}

export const modoDemo = () => esDev() && env('REBILL_MOCK') === '1';
export const configurado = () => modoDemo() || !!env('REBILL_SECRET_KEY');

async function rb<T = any>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const key = env('REBILL_SECRET_KEY');
  if (!key) throw new Error('Falta REBILL_SECRET_KEY en las variables de entorno.');
  const r = await fetch(BASE + path, {
    method: init.method ?? 'GET',
    headers: { 'x-api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: init.body ? JSON.stringify(init.body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });
  const texto = await r.text();
  let cuerpo: unknown = texto;
  try { cuerpo = texto ? JSON.parse(texto) : null; } catch { /* queda como texto */ }
  if (!r.ok) throw new ErrorRebill(r.status, cuerpo);
  return cuerpo as T;
}

// La documentación pública no detalla los nombres exactos de los filtros de búsqueda.
// Se prueban variantes razonables y se recuerda la primera que funciona (por instancia).
// Además, cada resultado se vuelve a filtrar por mail del lado nuestro: un filtro ignorado nunca
// puede mostrarle pagos de otra persona a un cliente.
const ganadoras = new Map<string, number>();

function paginas(limit: number) {
  return [
    { limit, offset: 0 },
    { pagination: { limit, offset: 0 } },
    { limit, page: 1 },
  ];
}

async function buscar(
  ruta: string, filtros: Record<string, unknown>[], limit: number,
  pertenece: (r: any) => boolean, puedeVerificar: (r: any) => boolean,
): Promise<any[]> {
  const variantes = filtros.flatMap((f) => paginas(limit).map((p) => ({ ...f, ...p })));
  const orden = ganadoras.has(ruta) ? [ganadoras.get(ruta)!, ...variantes.keys()] : [...variantes.keys()];
  let ultimo: unknown = null;
  for (const i of orden) {
    try {
      const res = await rb<{ records?: any[] }>(ruta, { method: 'POST', body: variantes[i] });
      const filas = res?.records ?? [];
      const verificables = filas.filter(puedeVerificar);
      if (verificables.some((r) => !pertenece(r))) { ultimo = new Error('filtro ignorado'); continue; }
      ganadoras.set(ruta, i);
      return filas.filter(pertenece);
    } catch (e) {
      ultimo = e;
      if (e instanceof ErrorRebill && e.estado !== 400 && e.estado !== 422) throw e;
    }
  }
  throw ultimo instanceof Error ? ultimo : new Error('No se pudo consultar Rebill');
}

const mismoMail = (a?: string | null, b?: string) => !!a && a.toLowerCase() === b?.toLowerCase();

export async function clienteExiste(email: string): Promise<boolean> {
  if (modoDemo()) return DEMO.clientes.includes(email.toLowerCase());
  const filas = await buscar(
    '/v3/payments/search',
    [{ customer: { email } }, { customerEmail: email }, { email }],
    1, (r) => mismoMail(r.customer?.email, email), (r) => !!r.customer?.email,
  ).catch(() => []);
  if (filas.length) return true;
  const subs = await buscar(
    '/v3/subscriptions/search',
    [{ customer: { email } }, { customerEmail: email }],
    1, (r) => mismoMail(r.customer?.email, email), (r) => !!r.customer?.email,
  ).catch(() => []);
  if (subs.length) return true;
  // Cliente nuevo que todavía no pagó: alcanza con tener un cobro pendiente a su nombre.
  return (await cobrosPendientes(email).catch(() => [])).length > 0;
}

export async function pagosDe(email: string): Promise<Pago[]> {
  if (modoDemo()) return DEMO.pagos.filter((p) => p.email === email.toLowerCase());
  const filas = await buscar(
    '/v3/payments/search',
    [
      { customer: { email }, sortBy: 'created_at', sortOrder: 'DESC' },
      { customerEmail: email, sortBy: 'created_at', sortOrder: 'DESC' },
      { email },
    ],
    50, (r) => mismoMail(r.customer?.email, email), (r) => !!r.customer?.email,
  );
  return filas.map((r) => ({
    id: r.id, fecha: r.createdAt, monto: Number(r.amount), moneda: r.currency ?? 'ARS',
    estado: r.status, descripcion: r.description ?? '', email, suscripcionId: r.subscriptionId ?? null,
  }));
}

export async function suscripcionesDe(email: string): Promise<Suscripcion[]> {
  if (modoDemo()) return DEMO.suscripciones;
  const filas = await buscar(
    '/v3/subscriptions/search',
    [{ customer: { email } }, { customerEmail: email }],
    20, (r) => mismoMail(r.customer?.email, email), (r) => !!r.customer?.email,
  );
  return filas.map((r) => ({
    id: r.id, nombre: r.name ?? r.plan?.title?.[0]?.text ?? r.plan?.title ?? 'Suscripción',
    estado: r.statusDetail === 'defaulted' ? 'defaulted' : r.status,
    monto: Number(r.amount), moneda: r.currency ?? 'ARS', proximoCobro: r.nextChargeDate ?? null,
  }));
}

// "Cobros pendientes": links de pago activos que creamos con el mail del cliente en metadata.
export async function cobrosPendientes(email: string): Promise<Cobro[]> {
  if (modoDemo()) return DEMO.cobros;
  const filas = await buscar(
    '/v3/payment-links/search',
    [{ metadataKey: 'clientEmail', metadataValue: email.toLowerCase() }],
    50,
    (r) => mismoMail(r.metadata?.clientEmail, email), (r) => !!r.metadata?.clientEmail,
  );
  return filas
    .filter((r) => r.status === 'active' && (!r.expirationDate || new Date(r.expirationDate) > new Date()))
    .map((r) => ({
      id: r.id,
      titulo: (Array.isArray(r.title) ? (r.title.find((t: any) => t.language === 'es') ?? r.title[0])?.text : r.title) ?? 'Cobro',
      monto: r.prices?.[0]?.amount != null ? Number(r.prices[0].amount) : null,
      moneda: r.prices?.[0]?.currency ?? 'ARS', url: r.url, vence: r.expirationDate ?? null,
    }));
}

// El pago tiene que ser del cliente que lo pide (o un admin): se verifica antes de pedir el comprobante.
export async function comprobante(pagoId: string, email: string, esAdmin: boolean): Promise<{ url: string; numero?: string } | null> {
  if (!/^pay_[A-Za-z0-9_-]{4,80}$/.test(pagoId) && !modoDemo()) return null;
  if (modoDemo()) return DEMO.pagos.some((p) => p.id === pagoId && p.email === email) ? { url: '/admin/invoices?demo=comprobante', numero: 'A000000123' } : null;
  const p = await rb<any>(`/v3/payments/${pagoId}`);
  if (!esAdmin && !mismoMail(p?.customer?.email, email)) return null;
  const r = await rb<{ invoiceUrl: string; invoiceNumber?: string }>(`/v3/payments/${pagoId}/invoice`);
  return r?.invoiceUrl ? { url: r.invoiceUrl, numero: r.invoiceNumber } : null;
}

export async function crearCobro(d: {
  email: string; titulo: string; monto: number; nombre?: string; origen: string;
}): Promise<{ url: string; id: string }> {
  if (modoDemo()) return { url: 'https://pay.rebill.com/demo/pl_demo', id: 'pl_demo' };
  const email = d.email.toLowerCase();
  const nombreCompleto = d.nombre && /\S+\s+\S+/.test(d.nombre) ? d.nombre.trim() : undefined;
  const cuerpo: Record<string, unknown> = {
    title: [{ text: d.titulo, language: 'es' }],
    paymentMethods: [{ methods: ['card', 'bank_transfer'], currency: 'ARS' }],
    prices: [{ amount: d.monto, currency: 'ARS', isDefault: true }],
    prefilledFields: { customer: { email, language: 'es', ...(nombreCompleto ? { fullName: nombreCompleto } : {}) } },
    metadata: { clientEmail: email, concepto: d.titulo },
    redirectUrls: { approved: `${d.origen}/admin/invoices?pago=ok` },
    expirationDate: new Date(Date.now() + 30 * 864e5).toISOString(),
  };
  const crear = (extra: Record<string, unknown>) => rb<any>('/v3/payment-links', { method: 'POST', body: { ...cuerpo, ...extra } });
  // Un solo uso: evita que el mismo link se pague dos veces. Si la API no reconoce el campo, se crea igual.
  const r = await crear({ isSingleUse: true }).catch((e) => {
    if (e instanceof ErrorRebill && (e.estado === 400 || e.estado === 422)) return crear({});
    throw e;
  });
  return { url: r.url, id: r.id };
}

export async function diagnostico() {
  const out: Record<string, unknown> = { modo: modoDemo() ? 'demo' : env('REBILL_SECRET_KEY') ? (env('REBILL_SECRET_KEY')!.startsWith('sk_') ? 'clave sk_ cargada' : 'la clave no empieza con sk_') : 'sin clave' };
  if (modoDemo() || !env('REBILL_SECRET_KEY')) return out;
  for (const [k, ruta] of [['organizacion', '/v3/organization'], ['organizacion (alt)', '/v3/organizations/me']] as const) {
    try { const o = await rb<any>(ruta); out[k] = { ok: true, nombre: o?.name ?? o?.alias, sandbox: o?.isSandbox ?? o?.sandbox }; break; }
    catch (e) { out[k] = e instanceof ErrorRebill ? { estado: e.estado } : String(e); }
  }
  for (const [k, ruta] of [['pagos', '/v3/payments/search'], ['suscripciones', '/v3/subscriptions/search'], ['links de pago', '/v3/payment-links/search']] as const) {
    try { const r = await rb<any>(ruta, { method: 'POST', body: { limit: 1, offset: 0 } }); out[k] = { ok: true, total: r?.pagination?.totalItems ?? r?.records?.length }; }
    catch (e) { out[k] = e instanceof ErrorRebill ? { estado: e.estado, detalle: e.cuerpo } : String(e); }
  }
  out['filtro ganador por ruta'] = Object.fromEntries(ganadoras);
  return out;
}

const hoy = Date.now();
const dia = 864e5;
const DEMO = {
  clientes: ['cliente@demo.com', 'tomascurtelo@gmail.com'],
  pagos: [
    { id: 'pay_demo1', fecha: new Date(hoy - 5 * dia).toISOString(), monto: 150000, moneda: 'ARS', estado: 'approved', descripcion: 'Gestión mensual · Activa', email: 'cliente@demo.com', suscripcionId: 'sub_demo' },
    { id: 'pay_demo2', fecha: new Date(hoy - 35 * dia).toISOString(), monto: 150000, moneda: 'ARS', estado: 'approved', descripcion: 'Gestión mensual · Activa', email: 'cliente@demo.com', suscripcionId: 'sub_demo' },
    { id: 'pay_demo3', fecha: new Date(hoy - 40 * dia).toISOString(), monto: 990000, moneda: 'ARS', estado: 'approved', descripcion: 'Diseño y configuración de tienda', email: 'cliente@demo.com' },
    { id: 'pay_demo4', fecha: new Date(hoy - 65 * dia).toISOString(), monto: 150000, moneda: 'ARS', estado: 'rejected', descripcion: 'Gestión mensual · Activa', email: 'cliente@demo.com', suscripcionId: 'sub_demo' },
  ] as Pago[],
  suscripciones: [{ id: 'sub_demo', nombre: 'Gestión mensual · Activa', estado: 'active', monto: 150000, moneda: 'ARS', proximoCobro: new Date(hoy + 25 * dia).toISOString() }] as Suscripcion[],
  cobros: [{ id: 'pl_demo', titulo: 'Google Ads · primer mes', monto: 308000, moneda: 'ARS', url: 'https://pay.rebill.com/demo/pl_demo', vence: new Date(hoy + 12 * dia).toISOString() }] as Cobro[],
};
