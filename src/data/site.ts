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
  // PENDIENTE: link de Cal.com (o Google Calendar) para la llamada de intro
  calendario: '',
  // PENDIENTE: endpoint del formulario (Tally, Formspree, etc.).
  // Si queda vacío, el formulario abre WhatsApp con las respuestas.
  formulario: '',
};

// PENDIENTE: links de pago de Mercado Pago (únicos) y suscripciones (mensuales)
export const pagos = {
  lanzamiento: '',
  rediseno: '',
  cargaBloque: '',
  gestion: '',
};

export const moneda = 'USD';
export const notaPrecios =
  'Precios de referencia en dólares. Se cobran en pesos al tipo de cambio del día. El plan de Tienda Nube, las apps y la pauta publicitaria los paga la marca directo.';

export const rubros = [
  'Moda y accesorios',
  'Deco, muebles y textiles',
  'Dietética y productos naturales',
  'Vinos y bebidas',
  'Accesorios para mascotas',
  'Arte y diseño',
];

export const lanzamiento = {
  nombre: 'Lanzamiento Ecommerce',
  precio: 790,
  bajada: 'Tu tienda en Tienda Nube, diseñada a medida y lista para vender.',
  incluye: [
    'Diseño de home a medida, con propuesta y una ronda de cambios',
    'Categorías y páginas institucionales',
    'Políticas de cambios, devoluciones, envíos y botón de arrepentimiento',
    'Configuración de pagos, envíos, dominio, WhatsApp y redes',
    'Hasta 10 productos de muestra cargados',
    'Capacitación de 1 hora, grabada para que la vuelvas a ver',
    'Una ronda de ajustes dentro de los 14 días posteriores al lanzamiento',
  ],
};

export const unicos = [
  {
    nombre: 'Rediseño Ecommerce',
    precio: '650',
    unidad: '',
    detalle:
      'Para tiendas que ya venden y necesitan verse mejor. Home a medida, categorías ordenadas y un diagnóstico de la configuración actual con recomendaciones.',
  },
  {
    nombre: 'Carga de productos',
    precio: '100',
    unidad: 'por bloque de 50',
    detalle:
      'Hasta 79 productos es un bloque; de 80 a 129, dos. Cada producto incluye hasta 15 variantes: una remera en 4 talles y 3 colores cuenta como uno.',
  },
  {
    nombre: 'Edición de fotos con IA',
    precio: '4',
    unidad: 'por foto',
    detalle: 'Fondo limpio o ambientado, a partir de las fotos que ya tenés.',
  },
  {
    nombre: 'Mini identidad',
    precio: '200',
    unidad: '',
    detalle: 'Logo prolijo, paleta y tipografías para marcas que recién arrancan.',
  },
  {
    nombre: 'Tarea adicional',
    precio: '45',
    unidad: 'bloque de 2 horas',
    detalle: 'Configuraciones, banners extra o cambios fuera del alcance original.',
  },
];

export const mensuales = [
  {
    nombre: 'Gestión ecommerce',
    precio: '150',
    detalle:
      'Hasta 50 productos trabajados por mes, dos banners nuevos, aumentos de precio masivos sin límite e informe mensual.',
  },
  {
    nombre: 'Google Ads y Google My Business',
    precio: '250',
    detalle: 'Campañas de búsqueda y Shopping, tu ficha de Google al día e informe de resultados.',
  },
  {
    nombre: 'Email marketing',
    precio: '150',
    detalle: 'Carrito abandonado automatizado y newsletters mensuales.',
  },
  {
    nombre: 'Meta Ads',
    precio: 'desde 310',
    detalle: 'Campañas en Instagram y Facebook gestionadas por el equipo.',
  },
  {
    nombre: 'TikTok Ads',
    precio: 'desde 310',
    detalle: 'Campañas en TikTok gestionadas por el equipo.',
  },
];

export const proceso = [
  {
    titulo: 'Aplicás',
    texto: 'Completás un formulario corto sobre tu marca, tu catálogo y dónde vendés hoy.',
  },
  {
    titulo: 'Charlamos 20 minutos',
    texto: 'Vemos si somos un buen equipo y qué plan te conviene.',
  },
  {
    titulo: 'Propuesta y pago',
    texto: 'Te mando alcance, precio cerrado y fechas. Se abona el 100% para reservar tu lugar.',
  },
  {
    titulo: 'Me pasás el material',
    texto: 'Accesos, logo, fotos y catálogo en nuestra planilla. El plazo arranca cuando está todo.',
  },
  {
    titulo: 'Diseño y armado',
    texto: 'Ves avances en un tablero compartido y aprobás la home antes de construirla.',
  },
  {
    titulo: 'Lanzamiento',
    texto: 'Publicamos, te capacito y tenés 14 días para mandar una lista única de ajustes.',
  },
  {
    titulo: 'Crecer',
    texto: 'Si querés seguir, sumás un plan mensual de gestión o marketing.',
  },
];

export const requisitos = [
  {
    titulo: 'Inscripción en ARCA',
    texto: 'La necesitás para cobrar online y para registrar tu dominio .com.ar.',
  },
  {
    titulo: 'Catálogo ordenado',
    texto: 'Nombre, precio, stock y descripción de cada producto. Te damos una planilla modelo.',
  },
  {
    titulo: 'Fotos de producto',
    texto: 'Si no las tenés, las resolvemos con el extra de edición con IA.',
  },
  {
    titulo: 'Un canal de atención',
    texto: 'WhatsApp Business y un mail. La atención a tus clientes la hace tu marca.',
  },
];

export const casos = [
  {
    marca: 'Veta',
    rubro: 'Indumentaria seleccionada',
    trabajo: 'Rediseño en Tienda Nube con identidad propia: encabezado de marca, banner principal y categorías con íconos.',
    url: 'https://vdveta.com.ar/',
    color: '#5F6F52',
    tinta: '#FFFBF8',
  },
  {
    marca: 'Pasto',
    rubro: 'Almacén natural',
    trabajo: 'Tienda online de almacén natural: productos de despensa, frescos, vinos y bienestar.',
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
    p: '¿Por qué se paga el 100% por adelantado?',
    r: 'Porque reserva tu lugar en la agenda y nos deja enfocarnos en el trabajo y no en la cobranza. Podés pagar con tarjeta en cuotas por Mercado Pago.',
  },
  {
    p: '¿El dominio queda a mi nombre?',
    r: 'Siempre. Lo registrás con tu clave fiscal y nos das acceso para configurarlo. Es tuyo desde el primer día.',
  },
  {
    p: '¿Cómo se cuentan los productos con muchas variantes?',
    r: 'Cada producto incluye hasta 15 variantes. Si tiene más, cada 15 extra cuenta como un producto: una lana en 50 colores son 4 productos.',
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
