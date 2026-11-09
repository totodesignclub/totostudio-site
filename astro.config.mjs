import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Sitio estático; solo /admin y /api corren con servidor (prerender = false en cada página).
export default defineConfig({
  site: 'https://toto-co.com',
  adapter: vercel(),
  build: { inlineStylesheets: 'always' },
  redirects: { '/servicios': '/servicios-ecommerce' },
  security: { checkOrigin: true },
});
