// Captura previews de los sitios de clientes en el build (Vercel tiene salida a internet).
// Si falla, la web muestra la tarjeta de color de cada marca.
import { mkdir, writeFile } from 'node:fs/promises';

const sitios = {
  pasto: 'https://pasto.com.ar/',
  danco: 'https://www.danco.com.ar/',
  tentak: 'https://tentak.framer.website/',
  fixi: 'https://fixijobs.netlify.app/',
  finerio: 'https://finerioconnect.com/en',
};

const espera = (ms) => new Promise((r) => setTimeout(r, ms));
const shot = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=900&vpw=1440&vph=1080`;

async function capturar(slug, url) {
  for (let i = 0; i < 8; i++) {
    try {
      const res = await fetch(shot(url), { redirect: 'manual', signal: AbortSignal.timeout(15000) });
      const tipo = res.headers.get('content-type') || '';
      if (res.status === 200 && tipo.includes('jpeg')) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 15000) {
          await writeFile(`public/previews/${slug}.jpg`, buf);
          console.log(`preview ok: ${slug} (${Math.round(buf.length / 1024)} KB)`);
          return;
        }
      }
    } catch {}
    await espera(6000);
  }
  console.log(`preview no disponible: ${slug}`);
}

await mkdir('public/previews', { recursive: true });
await Promise.all(Object.entries(sitios).map(([s, u]) => capturar(s, u)));
