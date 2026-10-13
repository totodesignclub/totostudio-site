// ─────────────────────────────────────────────────────────────
// Toto Studio · datos editables de la web
// Todo lo que cambia seguido (links, precios, contacto) vive acá.
// Los valores marcados con PENDIENTE son placeholders.
// ─────────────────────────────────────────────────────────────

export const contacto = {
  email: 'totodesignclub@gmail.com', // PENDIENTE: pasar a hola@totostudio.site
  whatsapp: '5491164679917', // sin + ni espacios, formato wa.me
  whatsappVisible: '+54 9 11 6467-9917',
  instagram: '', // PENDIENTE: usuario sin @, ej. 'totostudio'
};

export const links = {
  // PENDIENTE: link de Cal.com (o Google Calendar) para la llamada de intro.
  // Si queda vacío, los botones "Agendar llamada" llevan al formulario.
  calendario: '',
  // PENDIENTE: endpoint del formulario (Tally, Formspree, etc.).
  // Si queda vacío, el formulario abre WhatsApp con las respuestas.
  formulario: '',
};

// ── Precios ───────────────────────────────────────────────────
// Los precios se cargan en USD y la web los muestra en pesos.
// Para actualizar: cambiá tipoDeCambio y la fecha.
export const tipoDeCambio = 1540; // dólar oficial BNA venta
export const fechaCambio = '9/10/2026';
const redondeo = 1000; // redondea a miles de pesos

export const ars = (usd: number) =>
  '$ ' + (Math.round((usd * tipoDeCambio) / redondeo) * redondeo).toLocaleString('es-AR');

export const notaPrecios = `Precios en pesos argentinos al tipo de cambio oficial del ${fechaCambio}. El plan de Tienda Nube, las apps y la pauta publicitaria los paga la marca directo.`;

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  titulo: 'Diseñamos la experiencia de tu ecommerce.',
  bajada:
    'Diseño de tiendas online con las tendencias del 2026. Personalización, configuración completa y soporte continuo.',
  puntos: [
    'Diseño 100% enfocado en tu usuario',
    'Configuración completa y optimizada',
    'Soporte y capacitación incluida',
  ],
};

export const rubros = [
  'Moda y accesorios',
  'Deco y textiles',
  'Dietética y natural',
  'Vinos y bebidas',
  'Mascotas',
  'Arte y diseño',
];

// ── Cómo funciona ─────────────────────────────────────────────
export const pasos = [
  {
    titulo: 'Charlamos',
    texto:
      'Completás un formulario corto y agendamos 20 minutos para conocer tu marca. Te paso una propuesta con precio cerrado y fecha de lanzamiento.',
  },
  {
    titulo: 'Diseñamos y configuramos',
    texto:
      'Me pasás logo, fotos y catálogo. Diseño la home pensando en tu cliente, la apruebás y configuro pagos, envíos, dominio y políticas.',
  },
  {
    titulo: 'Lanzás y te acompañamos',
    texto:
      'Publicamos la tienda, te capacito para que la manejes y tenés 14 días de ajustes. Si querés seguir creciendo, sumás un plan mensual.',
  },
];

// ── Beneficios ────────────────────────────────────────────────
export const beneficios = [
  {
    icono: 'usuario',
    titulo: 'Pensado para tu cliente',
    texto: 'Cada decisión de diseño busca que encuentre rápido lo que quiere y compre sin vueltas.',
  },
  {
    icono: 'precio',
    titulo: 'Precio cerrado',
    texto: 'Sabés cuánto pagás antes de empezar. Sin horas extra ni sorpresas a mitad de camino.',
  },
  {
    icono: 'config',
    titulo: 'Todo configurado',
    texto: 'Pagos, envíos, dominio, WhatsApp, redes y políticas listos para vender desde el día uno.',
  },
  {
    icono: 'llave',
    titulo: 'Todo a tu nombre',
    texto: 'El dominio y la tienda son tuyos. Administrás productos y pedidos sin depender de nadie.',
  },
  {
    icono: 'capacitacion',
    titulo: 'Capacitación grabada',
    texto: 'Una hora para aprender a manejar tu tienda, grabada para que la vuelvas a ver cuando quieras.',
  },
  {
    icono: 'soporte',
    titulo: 'Soporte continuo',
    texto: 'Planes mensuales para mantener la tienda al día, cargar productos y hacer campañas.',
  },
];

// ── Planes ────────────────────────────────────────────────────
export const planes = [
  {
    nombre: 'Lanzamiento',
    usd: 790,
    periodo: 'pago único',
    bajada: 'Tu primera tienda en Tienda Nube, diseñada a medida y lista para vender.',
    incluye: [
      'Home diseñada a medida para tu marca',
      'Categorías, páginas y políticas',
      'Pagos, envíos, dominio, WhatsApp y redes',
      '10 productos de muestra cargados',
      'Capacitación de 1 hora grabada',
      '14 días de ajustes después del lanzamiento',
    ],
    destacado: true,
  },
  {
    nombre: 'Rediseño',
    usd: 650,
    periodo: 'pago único',
    bajada: 'Para tiendas que ya venden y necesitan verse y funcionar mejor.',
    incluye: [
      'Home rediseñada a medida',
      'Categorías y páginas reordenadas',
      'Diagnóstico de tu configuración actual',
      'Capacitación de 1 hora grabada',
      '14 días de ajustes',
    ],
    destacado: false,
  },
  {
    nombre: 'Gestión mensual',
    usd: 150,
    periodo: 'por mes',
    bajada: 'Tu tienda al día sin que tengas que ocuparte.',
    incluye: [
      'Hasta 50 productos trabajados por mes',
      'Dos banners nuevos por mes',
      'Aumentos de precio masivos sin límite',
      'Informe mensual',
    ],
    destacado: false,
  },
];

export const extras = [
  { nombre: 'Carga de productos', usd: 100, unidad: 'cada 50 productos' },
  { nombre: 'Edición de fotos con IA', usd: 4, unidad: 'por foto' },
  { nombre: 'Mini identidad de marca', usd: 200, unidad: '' },
  { nombre: 'Google Ads y My Business', usd: 250, unidad: 'por mes' },
  { nombre: 'Email marketing', usd: 150, unidad: 'por mes' },
  { nombre: 'Meta Ads o TikTok Ads', usd: 310, unidad: 'por mes, desde' },
  { nombre: 'Tarea adicional', usd: 45, unidad: 'bloque de 2 horas' },
];

// ── Casos ─────────────────────────────────────────────────────
export const casos = [
  {
    marca: 'Veta',
    rubro: 'Indumentaria seleccionada',
    trabajo: 'Rediseño en Tienda Nube: encabezado de marca, banner principal y categorías con íconos.',
    url: 'https://vdveta.com.ar/',
    color: '#5F6F52',
    tinta: '#FFFBF8',
  },
  {
    marca: 'Pasto',
    rubro: 'Almacén natural',
    trabajo: 'Tienda online de almacén natural: despensa, frescos, vinos y bienestar.',
    url: 'https://pasto.com.ar/',
    color: '#E7EBD8',
    tinta: '#2E3A1F',
  },
  {
    marca: 'Danco',
    rubro: 'Industria B2B',
    trabajo: 'Web institucional para una empresa de válvulas industriales, con consultas por WhatsApp.',
    url: 'https://www.danco.com.ar/',
    color: '#1C2B45',
    tinta: '#F1F3FA',
  },
];

// ── Preguntas ─────────────────────────────────────────────────
export const preguntas = [
  {
    p: '¿Por qué Tienda Nube?',
    r: 'Porque te da hosting, seguridad, pagos, envíos y soporte propio. Vos administrás productos y pedidos sin depender de nadie, y yo me enfoco en que la tienda se vea y venda bien.',
  },
  {
    p: '¿Qué plan de Tienda Nube necesito?',
    r: 'Recomendamos el plan Esencial: permite dominio propio, cualquier plantilla y estilos personalizados. Lo pagás directo a Tienda Nube.',
  },
  {
    p: '¿Qué necesito para empezar?',
    r: 'Estar inscripto en ARCA, tener tu catálogo ordenado (nombre, precio, stock y descripción) y un canal de atención como WhatsApp Business. Si no tenés fotos de producto, las resolvemos con el extra de edición con IA.',
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
    r: 'Tenés 14 días para mandar una lista de ajustes. Después cerramos el proyecto con un mail de entrega. Si querés seguir, hay planes mensuales o tareas adicionales.',
  },
  {
    p: '¿Atienden a mis clientes?',
    r: 'No. La atención la hace tu marca, que es quien mejor conoce sus productos. Te dejamos WhatsApp y mail configurados.',
  },
];
