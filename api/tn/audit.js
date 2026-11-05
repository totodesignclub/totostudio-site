// TEMPORAL: auditoría de peso/medidas de productos de Más Lanas (solo lectura). Borrar al terminar.
export default async function handler(req, res) {
  const token = process.env.TN_TOKEN_MASLANAS;
  const store = process.env.TN_STORE_MASLANAS;
  if (!token || !store) return res.status(500).json({ error: 'Faltan variables TN_TOKEN_MASLANAS / TN_STORE_MASLANAS' });
  const headers = { Authentication: `bearer ${token}`, 'User-Agent': 'Gestion Toto&Co (dev@toto-co.com)' };
  const rows = [];
  let total = 0;
  for (let page = 1; page <= 10; page++) {
    const r = await fetch(`https://api.tiendanube.com/v1/${store}/products?per_page=200&page=${page}&fields=id,name,variants`, { headers });
    if (r.status === 404) break;
    if (!r.ok) return res.status(502).json({ error: 'API Tienda Nube', status: r.status, body: (await r.text()).slice(0, 300) });
    const list = await r.json();
    if (!list.length) break;
    for (const p of list) {
      total++;
      const name = typeof p.name === 'object' ? p.name.es || Object.values(p.name)[0] : p.name;
      for (const v of p.variants || []) {
        const w = Number(v.weight), wd = Number(v.width), h = Number(v.height), d = Number(v.depth);
        const issues = [];
        if (!w) issues.push('sin peso');
        else if (w >= 10) issues.push('peso >= 10 kg');
        if (!wd || !h || !d) issues.push('faltan medidas');
        if (Math.max(wd || 0, h || 0, d || 0) >= 60) issues.push('medida >= 60 cm');
        rows.push({ product_id: p.id, variant_id: v.id, name, sku: v.sku, weight_kg: v.weight, width_cm: v.width, height_cm: v.height, depth_cm: v.depth, issues });
      }
    }
    if (list.length < 200) break;
  }
  const flagged = rows.filter((r) => r.issues.length);
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ products: total, variants: rows.length, flagged: flagged.length, flaggedRows: flagged });
}
