# Toto &Co · web

Sitio en Astro (una página) para toto-co.com (totostudio.site redirige acá).

## Correr en tu compu
    npm install
    npm run dev

## Publicar en Vercel
1. Subí esta carpeta al repo `totodesignclub/totostudio-site`.
2. En Vercel: Add New → Project → importá el repo (detecta Astro solo).
3. En el proyecto: Settings → Domains → agregá `toto-co.com`.

## Qué completar (todo en `src/data/site.ts`)
- `contacto.email` → cuando tengas hola@toto-co.com
- `contacto.instagram` → usuario sin @
- `links.formulario` → endpoint de Tally/Formspree. Si queda vacío, el formulario abre WhatsApp con las respuestas.
- `links.calendario` → link de Cal.com (se abre después de enviar el formulario)
- `pagos.*` → links de Mercado Pago (todavía no se muestran en la web; se mandan con la propuesta)
- Precios, servicios, preguntas y casos también se editan ahí.
