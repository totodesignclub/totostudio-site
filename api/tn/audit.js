// TEMPORAL (solo lectura): resumen de peso/medidas por producto. Borrar al terminar.
export default async function handler(req, res) {
  const token = process.env.TN_TOKEN_MASLANAS, store = process.env.TN_STORE_MASLANAS;
  if (!token || !store) return res.status(500).json({ error: 'faltan variables' });
  const headers = { Authentication: `bearer ${token}`, 'User-Agent': 'Gestion Toto&Co (dev@toto-co.com)' };
  const out = [];
  for (let page = 1; page <= 10; page++) {
    const r = await fetch(`https://api.tiendanube.com/v1/${store}/products?per_page=200&page=${page}&fields=id,name,handle,variants`, { headers });
    if (r.status === 404) break;
    if (!r.ok) return res.status(502).json({ error: r.status });
    const list = await r.json();
    for (const p of list) {
      const name = typeof p.name === 'object' ? p.name.es || Object.values(p.name)[0] : p.name;
      const combos = {};
      for (const v of p.variants || []) {
        const k = `${v.weight}kg|${v.width}x${v.height}x${v.depth}cm`;
        combos[k] = (combos[k] || 0) + 1;
      }
      out.push({ id: p.id, name, handle: p.handle?.es || Object.values(p.handle || {})[0], combos });
    }
    if (list.length < 200) break;
  }
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(out);
}
