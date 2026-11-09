// Sesión y link de acceso por mail, firmados con HMAC (sin base de datos).
// Variables: AUTH_SECRET (32+ caracteres), ADMIN_EMAILS (separadas por coma), RESEND_API_KEY, AUTH_FROM.
import { createHmac, timingSafeEqual } from 'node:crypto';

export const env = (k: string): string | undefined =>
  process.env[k] ?? ((import.meta.env as Record<string, string | undefined>)[k] || undefined);

export const esDev = () => import.meta.env.DEV === true;

const secreto = (): string => {
  const s = env('AUTH_SECRET');
  if (s && s.length >= 32) return s;
  if (esDev()) return 'dev-secret-solo-para-local-0123456789abcdef';
  throw new Error('Falta AUTH_SECRET (mínimo 32 caracteres) en las variables de entorno.');
};

const b64u = (b: Buffer) => b.toString('base64url');
const firma = (cuerpo: string) => b64u(createHmac('sha256', secreto()).update(cuerpo).digest());

type Carga = { t: 'sesion' | 'enlace'; e: string; x: number };

export function firmar(t: Carga['t'], email: string, segundos: number): string {
  const c: Carga = { t, e: email.toLowerCase(), x: Math.floor(Date.now() / 1000) + segundos };
  const cuerpo = b64u(Buffer.from(JSON.stringify(c)));
  return `${cuerpo}.${firma(cuerpo)}`;
}

export function verificar(token: string | undefined | null, t: Carga['t']): string | null {
  if (!token || token.length > 1000) return null;
  const [cuerpo, sig] = token.split('.');
  if (!cuerpo || !sig) return null;
  const esperada = Buffer.from(firma(cuerpo));
  const recibida = Buffer.from(sig);
  if (esperada.length !== recibida.length || !timingSafeEqual(esperada, recibida)) return null;
  try {
    const c = JSON.parse(Buffer.from(cuerpo, 'base64url').toString()) as Carga;
    if (c.t !== t || c.x < Date.now() / 1000 || typeof c.e !== 'string') return null;
    return c.e;
  } catch {
    return null;
  }
}

export const COOKIE = 'toto_sesion';
export const DURACION_SESION = 60 * 60 * 24 * 7;
export const DURACION_ENLACE = 60 * 15;

export const esAdmin = (email: string) =>
  (env('ADMIN_EMAILS') ?? '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean).includes(email.toLowerCase());

export const emailValido = (s: string) => /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(s) && s.length <= 254;

// Límite simple por instancia (mejor esfuerzo): 5 pedidos de link cada 10 min por mail e IP.
const intentos = new Map<string, number[]>();
export function limitar(clave: string, max = 5, ventanaMs = 600_000): boolean {
  const ahora = Date.now();
  const recientes = (intentos.get(clave) ?? []).filter((t) => ahora - t < ventanaMs);
  if (recientes.length >= max) return false;
  recientes.push(ahora);
  intentos.set(clave, recientes);
  return true;
}

export async function enviarEnlace(email: string, url: string): Promise<'enviado' | 'sin-servicio'> {
  const clave = env('RESEND_API_KEY');
  if (!clave) return 'sin-servicio';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${clave}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env('AUTH_FROM') ?? 'Toto &Co <hola@toto-co.com>',
      to: [email],
      subject: 'Tu acceso a Toto &Co',
      html: `<div style="font-family:system-ui,sans-serif;max-width:32rem;margin:auto;color:#0b132b">
        <h2 style="font-weight:500">Entrá a tu panel</h2>
        <p>Usá este botón para ver tus pagos y comprobantes. El enlace vence en 15 minutos y es solo para vos.</p>
        <p><a href="${url}" style="display:inline-block;background:#0b132b;color:#fff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:600">Entrar</a></p>
        <p style="color:#4f5776;font-size:14px">Si no lo pediste, ignorá este mail.</p></div>`,
    }),
  });
  if (!r.ok) throw new Error(`Resend respondió ${r.status}`);
  return 'enviado';
}
