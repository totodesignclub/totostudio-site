// ─────────────────────────────────────────────────────────────
// Toto &Co · datos editables de la web
// Todo lo que cambia seguido (links, precios, contacto) vive acá.
// Los valores marcados con PENDIENTE son placeholders.
// ─────────────────────────────────────────────────────────────

export const contacto = {
  email: 'hola@toto-co.com',
  whatsapp: '5491173512215', // sin + ni espacios, formato wa.me
  whatsappVisible: '+54 9 11 7351-2215',
  tiktok: 'totodesign.studio', // sin @
};

export const links = {
  // PENDIENTE: link público de Cal.com (ej. https://cal.com/toto-studio/consulta).
  // Si queda vacío, "Agendá consulta gratis" lleva al formulario.
  calendario: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ23eA80YC7V9Bsb3zbOED76DSjykGriUQk6qnbWMFIHgOw-a-N6-Twzja-EL6guwc9xtpvbtqII',
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

export const notaPrecios = 'El plan de Tienda Nube, las apps y la pauta publicitaria los paga la marca directo.';

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
    { icono: 'home', texto: 'Home diseñada a medida para tu marca' },
    { icono: 'paginas', texto: 'Categorías, páginas y políticas' },
    { icono: 'pagos', texto: 'Pagos, envíos, dominio, WhatsApp y redes' },
    { icono: 'productos', texto: '10 productos de muestra cargados' },
    { icono: 'video', texto: 'Capacitación de 1 hora grabada' },
    { icono: 'ajustes', texto: '14 días de ajustes después del lanzamiento' },
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
  { marca: 'Pasto', rubro: 'Almacén natural', url: 'https://pasto.com.ar/', slug: 'pasto', dominio: 'pasto.com.ar', color: '#E7EBD8', tinta: '#2E3A1F' },
  { marca: 'Danco', rubro: 'Industria B2B', url: 'https://www.danco.com.ar/', slug: 'danco', dominio: 'danco.com.ar', color: '#1C2B45', tinta: '#F1F3FA' },
  { marca: 'Tentak', rubro: 'Software gastronómico', url: 'https://tentak.framer.website/', slug: 'tentak', dominio: 'tentak.com', color: '#FFE3D3', tinta: '#7A2E0E' },
  { marca: 'Fixi', rubro: 'Servicios para el hogar', url: 'https://fixijobs.netlify.app/', slug: 'fixi', dominio: 'fixijobs.com', color: '#DDF4E7', tinta: '#0F5132' },
  { marca: 'Finerio Connect', rubro: 'Open finance', url: 'https://finerioconnect.com/en', slug: 'finerio', dominio: 'finerioconnect.com', color: '#E6E3FF', tinta: '#2C1F8F' },
];

// ── Quién soy ─────────────────────────────────────────────────
export const quienSoy = {
  nombre: 'Tomi',
  rol: 'Diseñador de producto digital · Buenos Aires',
  parrafos: [
    'Vengo del mundo del diseño digital. De entender por qué hacemos clic, por qué abandonamos una página y qué hace que una experiencia se sienta bien.',
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
    r: 'Porque reserva tu lugar en la agenda y nos deja enfocarnos en el trabajo y no en la cobranza. Te indicamos los medios de pago disponibles al momento de contratar.',
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

// ── Página /marketing ─────────────────────────────────────────
// borrador: true muestra un aviso arriba y marca la página como noindex.
export const paginaMarketing = {
  borrador: false,
  hero: {
    bajada:
      'Armamos la estrategia, la bajamos a cada canal y la gestionamos mes a mes. Vos ves en qué se trabaja y qué resultados trae.',
    puntos: [
      'Primero la estrategia, después las herramientas',
      'Cuentas, píxeles y medición a tu nombre',
      'Informe mensual claro, sin vueltas',
    ],
    canales: ['Google', 'Instagram', 'Facebook', 'TikTok', 'Email'],
  },
  nota: 'La inversión en anuncios se paga directo a Google, Meta y TikTok. Los servicios mensuales se pagan por adelantado, mes a mes.',
};

export const pasosMarketing = [
  { n: '01', titulo: 'Estrategia', texto: 'Definimos a quién le hablás, qué ofrecés mejor y qué número querés mover.' },
  { n: '02', titulo: 'Voz y mensaje', texto: 'Tono de voz, pilares de contenido y mensajes clave, para sonar siempre como tu marca.' },
  { n: '03', titulo: 'Configuración', texto: 'Cuentas, píxeles y medición listos para empezar sin perder datos.' },
  { n: '04', titulo: 'Gestión y mejora', texto: 'Publicamos, optimizamos y te mostramos cada mes qué funcionó y qué ajustamos.' },
];

// `servicio` es el id de un concepto facturable de `marketing` (arriba).
// Si es null, usa `factura` como texto propio.
export const canalesMarketing: {
  id: string; icono: string; nombre: string; gancho: string; explica: string; puntos: string[];
  servicio: 'google' | 'email' | 'social' | null; factura?: string; chip: string;
}[] = [
  {
    id: 'mybusiness', icono: 'mybusiness', nombre: 'Google My Business', chip: 'My Business',
    gancho: 'Tu ficha de Google: lo primero que ve quien te busca.',
    explica: 'Es el cuadro que aparece en Google y en Maps con tu nombre, fotos, horarios, ubicación y reseñas.',
    puntos: [
      'Creación o recuperación de la ficha, y verificación',
      'Categorías, datos de contacto, horarios y servicios',
      'Fotos, publicaciones y respuesta a reseñas',
    ],
    servicio: 'google',
  },
  {
    id: 'googleads', icono: 'googleads', nombre: 'Google Ads', chip: 'Google Ads',
    gancho: 'Anuncios que aparecen cuando alguien ya está buscando lo que ofrecés.',
    explica: 'Armamos las campañas de punta a punta: qué buscan tus clientes, cómo se escribe cada anuncio y adónde llegan.',
    puntos: [
      'Palabras clave y estructura de campañas',
      'Textos en búsqueda: títulos, descripciones y extensiones',
      'Anuncios en sitios web de la red de Google, con imagen y texto',
      'Medición de llamadas, mensajes y ventas',
    ],
    servicio: 'google',
  },
  {
    id: 'organica', icono: 'organica', nombre: 'Búsqueda orgánica', chip: 'Búsqueda orgánica',
    gancho: 'Aparecer en Google sin pagar cada clic.',
    explica: 'Trabajamos tu sitio para que Google lo entienda y lo muestre, y para que las respuestas con IA puedan citarte.',
    puntos: [
      'Palabras clave, títulos y descripciones que invitan al clic',
      'Contenido claro y estructurado, y velocidad de carga',
      'Search Console, indexación y seguimiento mensual',
      'Sin promesas de posiciones: te mostramos la evolución',
    ],
    servicio: null, factura: 'Se cotiza según el proyecto',
  },
  {
    id: 'instagram', icono: 'instagram', nombre: 'Anuncios en Instagram', chip: 'Instagram',
    gancho: 'Que te descubran en el feed, las historias y los reels.',
    explica: 'Piezas pensadas para que se vean bien en el celular y frenen el scroll.',
    puntos: [
      'Piezas gráficas y guiones de reels',
      'Públicos por intereses, zona y remarketing',
      'Pruebas de creatividades y optimización del presupuesto',
    ],
    servicio: 'social',
  },
  {
    id: 'facebook', icono: 'facebook', nombre: 'Anuncios en Facebook', chip: 'Facebook',
    gancho: 'Llegá a tu zona y a quienes ya te visitaron.',
    explica: 'Campañas con segmentación fina para generar consultas y recuperar visitas.',
    puntos: [
      'Segmentación por zona, edad e intereses',
      'Formularios de contacto y mensajes por WhatsApp o Messenger',
      'Remarketing a quienes visitaron tu web o tu perfil',
    ],
    servicio: 'social',
  },
  {
    id: 'tiktok', icono: 'tiktok', nombre: 'Anuncios en TikTok', chip: 'TikTok',
    gancho: 'Video corto para llegar a quienes todavía no te conocen.',
    explica: 'Ideas y campañas con el lenguaje de la plataforma, sin que parezca publicidad de otra época.',
    puntos: [
      'Ideas y guiones de video según tu marca',
      'Campañas en TikTok Ads',
      'Píxel y medición de resultados',
    ],
    servicio: 'social',
  },
  {
    id: 'email', icono: 'email', nombre: 'Email marketing', chip: 'Email',
    gancho: 'Hablale directo a quienes ya te conocen.',
    explica: 'Tu lista de contactos es un canal propio: no depende de ningún algoritmo.',
    puntos: [
      'Armado y limpieza de tu lista de contactos',
      'Diseño de newsletters y campañas',
      'Automatizaciones: bienvenida y seguimiento',
      'Reportes de aperturas y clics',
    ],
    servicio: 'email',
  },
];

// Qué se factura: texto propio de esta página; el precio sale de `marketing`.
export const conceptosMarketing = [
  { id: 'google', texto: 'Campañas en Google y tu ficha siempre al día.' },
  { id: 'social', texto: 'Campañas en Instagram, Facebook o TikTok gestionadas por el equipo.' },
  { id: 'email', texto: 'Newsletters y automatizaciones todos los meses.' },
];

export const preguntasMarketing = [
  {
    p: '¿La inversión en anuncios está incluida?',
    r: 'No. La pauta se paga directo a Google, Meta o TikTok, con tu cuenta y tu tarjeta. Nosotros cobramos la gestión.',
  },
  {
    p: '¿Puedo contratar un solo canal?',
    r: 'Sí. Podés empezar por el que más te importa, por ejemplo Google, y sumar los demás cuando quieras.',
  },
  {
    p: '¿Cuánto tarda en verse resultados?',
    r: 'Depende del canal. Con anuncios se ven señales en las primeras semanas; la búsqueda orgánica es de mediano plazo. No prometemos posiciones ni ventas: te mostramos los números todos los meses.',
  },
  {
    p: '¿Hay un compromiso mínimo?',
    r: 'Los servicios mensuales se contratan por un mínimo de 3 meses, pagados por adelantado cada mes.',
  },
];
