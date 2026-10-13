// ─────────────────────────────────────────────────────────────
// Toto Studio · datos editables de la web
// Todo lo que cambia seguido (links, precios, contacto) vive acá.
// Los valores marcados con PENDIENTE son placeholders.
// ─────────────────────────────────────────────────────────────

export const contacto = {
  email: 'totodesignclub@gmail.com',
  whatsapp: '5491164679917', // sin + ni espacios, formato wa.me
  whatsappVisible: '+54 9 11 6467-9917',
  tiktok: 'totodesign.studio', // sin @
};

export const links = {
  // PENDIENTE: link público de Cal.com (ej. https://cal.com/toto-studio/consulta).
  // Si queda vacío, "Agendá consulta gratis" lleva al formulario.
  calendario: 'https://cal.com/tomas-curtelo-ljyjsx/30min',
  formulario: 'https://tally.so/r/Zj4K8y',
};

// ── Precios ───────────────────────────────────────────────────
// Los precios se cargan en USD y la web los muestra en pesos.
// Para actualizar: cambiá tipoDeCambio y la fecha.
export const tipoDeCambio = 1540; // dólar oficial BNA venta
export const fechaCambio = '9/10/2026';
const redondeo = 1000; // redondea a miles de pesos

export const pesos = (usd: number) => Math.round((usd * tipoDeCambio) / redondeo) * redondeo;
export const ars = (usd: number) => '$ ' + pesos(usd).toLocaleString('es-AR');

export const notaPrecios = `Precios en pesos al tipo de cambio oficial del ${fechaCambio}. El plan de Tienda Nube, las apps y la pauta publicitaria los paga la marca directo.`;

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  bajada:
    'Creamos tiendas online con las tendencias del 2026. Diseño personalizado, configuración completa y soporte continuo.',
  plataformas: ['Tienda Nube', 'Shopify'],
  puntos: [
    'Diseño 100% enfocado en tu usuario',
    'Configuración completa y optimizada',
    'Soporte y capacitación incluida',
  ],
};

// ── Precio ────────────────────────────────────────────────────
export const lanzamiento = {
  nombre: 'Lanzamiento Ecommerce',
  usd: 790,
  bajada: 'Tu tienda diseñada a medida y lista para vender.',
  incluye: [
    'Home diseñada a medida para tu marca',
    'Categorías, páginas y políticas',
    'Pagos, envíos, dominio, WhatsApp y redes',
    '10 productos de muestra cargados',
    'Capacitación de 1 hora grabada',
    '14 días de ajustes después del lanzamiento',
  ],
};

export const rediseno = {
  nombre: 'Rediseño',
  usd: 650,
  bajada: 'Para tiendas que ya venden y necesitan verse y funcionar mejor.',
};

export const descuentoRediseno = Math.round((1 - rediseno.usd / lanzamiento.usd) * 100);

export const extras = [
  { id: 'carga', nombre: 'Carga de productos', usd: 100, unidad: 'cada 50 productos', cantidad: 'bloques' },
  { id: 'fotos', nombre: 'Edición de fotos con IA', usd: 4, unidad: 'por foto', cantidad: 'fotos' },
  { id: 'identidad', nombre: 'Mini identidad de marca', usd: 200, unidad: 'pago único' },
];

export const marketing = [
  {
    id: 'gestion',
    nombre: 'Gestión ecommerce',
    usd: 150,
    desde: false,
    texto: 'Hasta 50 productos trabajados por mes, dos banners nuevos, aumentos de precio masivos e informe mensual.',
  },
  {
    id: 'google',
    nombre: 'Google Ads y My Business',
    usd: 250,
    desde: false,
    texto: 'Campañas de búsqueda y Shopping, y tu ficha de Google al día.',
  },
  {
    id: 'email',
    nombre: 'Email marketing',
    usd: 150,
    desde: false,
    texto: 'Carrito abandonado automatizado y newsletters mensuales.',
  },
  {
    id: 'social',
    nombre: 'Meta Ads o TikTok Ads',
    usd: 310,
    desde: true,
    texto: 'Campañas en Instagram, Facebook o TikTok gestionadas por el equipo.',
  },
];

// ── Diseños realizados ────────────────────────────────────────
export const casos = [
  {
    marca: 'Veta',
    rubro: 'Indumentaria seleccionada',
    trabajo: 'Rediseño en Tienda Nube con identidad propia.',
    url: 'https://vdveta.com.ar/',
    color: '#5F6F52',
    tinta: '#FFFBF8',
  },
  {
    marca: 'Pasto',
    rubro: 'Almacén natural',
    trabajo: 'Tienda de despensa, frescos, vinos y bienestar.',
    url: 'https://pasto.com.ar/',
    color: '#E7EBD8',
    tinta: '#2E3A1F',
  },
  {
    marca: 'Danco',
    rubro: 'Industria B2B',
    trabajo: 'Web institucional con consultas por WhatsApp.',
    url: 'https://www.danco.com.ar/',
    color: '#1C2B45',
    tinta: '#F1F3FA',
  },
];

// ── Quién soy ─────────────────────────────────────────────────
export const quienSoy = {
  nombre: 'Tomi',
  rol: 'Diseñador de producto digital · Buenos Aires',
  parrafos: [
    'Vengo del diseño de producto digital: años pensando cómo la gente usa una pantalla, dónde se traba y qué la hace volver. Hoy aplico eso a tiendas online.',
    'Me ocupo de la estrategia, el diseño y la parte técnica, integraciones incluidas. Vos te ocupás de tu marca y de tus clientes.',
  ],
};

// ── Preguntas ─────────────────────────────────────────────────
export const preguntas = [
  {
    p: '¿Trabajan con Tienda Nube o con Shopify?',
    r: 'Con las dos. Para la mayoría de las marcas argentinas recomendamos Tienda Nube: pagos, envíos y soporte local. Si vendés afuera o necesitás algo más a medida, Shopify.',
  },
  {
    p: '¿Qué plan de Tienda Nube necesito?',
    r: 'Recomendamos el plan Esencial: permite dominio propio, cualquier plantilla y estilos personalizados. Lo pagás directo a Tienda Nube.',
  },
  {
    p: '¿Qué necesito para empezar?',
    r: 'Estar inscripto en ARCA, tener tu catálogo ordenado (nombre, precio, stock y descripción) y un canal de atención como WhatsApp Business. Si no tenés fotos de producto, las resolvemos con la edición con IA.',
  },
  {
    p: '¿Por qué se paga el 100% por adelantado?',
    r: 'Porque reserva tu lugar en la agenda y nos deja enfocarnos en el trabajo y no en la cobranza. Podés pagar con tarjeta en cuotas por Mercado Pago.',
  },
  {
    p: '¿Cómo se cuenta la carga de productos?',
    r: 'Por bloques de 50: hasta 79 productos es un bloque, de 80 a 129 son dos. Cada producto incluye hasta 15 variantes; si tiene más, cada 15 extra cuenta como un producto.',
  },
  {
    p: '¿El dominio queda a mi nombre?',
    r: 'Siempre. Lo registrás con tu clave fiscal y nos das acceso para configurarlo. Es tuyo desde el primer día.',
  },
  {
    p: '¿Qué pasa después del lanzamiento?',
    r: 'Tenés 14 días para mandar una lista de ajustes. Después cerramos el proyecto con un mail de entrega. Si querés seguir creciendo, sumás la gestión mensual o un servicio de marketing.',
  },
  {
    p: '¿Atienden a mis clientes?',
    r: 'No. La atención la hace tu marca, que es quien mejor conoce sus productos. Te dejamos WhatsApp y mail configurados.',
  },
];
