// Webhook de privacidad de Tienda Nube. No almacenamos datos personales de clientes finales,
// por lo que solo confirmamos la recepción con HTTP 200.
export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
