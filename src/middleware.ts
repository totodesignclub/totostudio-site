import { defineMiddleware } from 'astro:middleware';
import { COOKIE, verificar, esAdmin } from './lib/auth';

const PUBLICAS = ['/admin/login', '/admin/verify'];

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname } = ctx.url;
  if (!pathname.startsWith('/admin')) return next();

  const email = verificar(ctx.cookies.get(COOKIE)?.value, 'sesion');
  ctx.locals.email = email;
  ctx.locals.admin = email ? esAdmin(email) : false;

  if (!email && !PUBLICAS.some((p) => pathname === p || pathname === p + '/')) {
    return ctx.redirect('/admin/login');
  }
  const res = await next();
  res.headers.set('Cache-Control', 'private, no-store');
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  res.headers.set('Referrer-Policy', 'no-referrer');
  return res;
});
