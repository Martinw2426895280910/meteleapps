import { CatalogItem, BusinessItem } from '../types';

export const WHATSAPP_NUMBER = "5493772430935";
export const DISPLAY_PHONE = "3772 430935";
export const DISPLAY_PHONE_INTL = "+54 9 3772 43-0935";

export const createWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'catalogo-digital',
    title: 'Catálogo digital',
    emoji: '🛍️',
    category: 'ventas',
    tag: 'Ventas 24/7',
    description: 'Muestra tus productos organizados por categorías con fotos, descripciones y precios actualizados.',
    benefit: 'Tus clientes eligen lo que quieren sin tener que esperar a que respondas un mensaje con fotos sueltas.',
    popularFor: 'Tiendas de ropa, perfumerías, reposterías, ferreterías',
    features: ['Filtros por categorías', 'Buscador instantáneo', 'Precios en tiempo real', 'Fotos en alta calidad']
  },
  {
    id: 'pedidos-online',
    title: 'Pedidos online',
    emoji: '📦',
    category: 'ventas',
    tag: 'Automatización',
    description: 'Permite a tus clientes realizar compras y pedidos desde su celular sin intermediarios ni comisiones.',
    benefit: 'Recibes el pedido limpio, con dirección, método de pago y detalle exacto directo a tu WhatsApp.',
    popularFor: 'Comercios, rotiserías, distribuidores, emprendimientos',
    features: ['Sin comisiones por venta', 'Confirmación inmediata', 'Envío a WhatsApp o panel', 'Control de stock básico']
  },
  {
    id: 'reserva-turnos',
    title: 'Reserva de turnos',
    emoji: '📅',
    category: 'turnos',
    tag: 'Ahorro de Tiempo',
    description: 'Organiza la agenda de tu negocio y permite a tus clientes elegir días y horarios disponibles.',
    benefit: 'Se terminaron los audios interminables coordinando un turno. El cliente elige y queda reservado.',
    popularFor: 'Peluquerías, barberías, manicuristas, médicos, estética',
    features: ['Días y horarios configurables', 'Bloqueo de turnos ocupados', 'Recordatorio automático', 'Multi-profesional']
  },
  {
    id: 'whatsapp-directo',
    title: 'WhatsApp directo',
    emoji: '💬',
    category: 'comunicacion',
    tag: 'Conversión Rápida',
    description: 'Botón de contacto inmediato con un mensaje predeterminado según el producto o servicio consultado.',
    benefit: 'Sabes exactamente qué producto o servicio quiere tu cliente antes de empezar la conversación.',
    popularFor: 'Todos los negocios y prestadores de servicios',
    features: ['Mensaje inteligente pre-armado', 'Un solo clic sin agendar número', 'Redirección a asesores específicos']
  },
  {
    id: 'registro-clientes',
    title: 'Registro de clientes',
    emoji: '👥',
    category: 'gestion',
    tag: 'Base de Datos',
    description: 'Base de datos ordenada para enviar promociones, saludar por cumpleaños y mantener el contacto activo.',
    benefit: 'El activo más valioso de tu negocio: tu propia lista de clientes sin depender del algoritmo de Instagram.',
    popularFor: 'Comercios, gimnasios, salones, clínicas',
    features: ['Datos de contacto y fechas clave', 'Historial de compras', 'Segmentación de clientes fieles']
  },
  {
    id: 'presupuestos',
    title: 'Presupuestos',
    emoji: '💰',
    category: 'gestion',
    tag: 'Cotizaciones',
    description: 'Generación automática de cotizaciones personalizadas y detalladas para tus clientes.',
    benefit: 'Genera presupuestos profesionales en segundos con tu logo y condiciones de entrega.',
    popularFor: 'Talleres mecánicos, carpinterías, imprentas, servicios del hogar',
    features: ['Cálculo de materiales y mano de obra', 'Exportación clara para enviar', 'Aceptación rápida']
  },
  {
    id: 'comprobantes-pedidos',
    title: 'Comprobantes y pedidos',
    emoji: '🧾',
    category: 'gestion',
    tag: 'Control Exacto',
    description: 'Emisión de notas de pedido claras y ordenadas para un control exacto de entregas y pagos.',
    benefit: 'Evita confusiones y malentendidos con comprobantes digitales claros con número de orden.',
    popularFor: 'Rotiserías, tiendas, talleres, mayoristas',
    features: ['Número de orden único', 'Detalle de ítems y totales', 'Estado: pendiente, en preparación, entregado']
  },
  {
    id: 'promociones-descuentos',
    title: 'Promociones y descuentos',
    emoji: '🎁',
    category: 'fidelizacion',
    tag: 'Más Ventas',
    description: 'Sección destacada en la app para ofertas especiales, combos y liquidaciones por tiempo limitado.',
    benefit: 'Incentiva compras por impulso destacando tus mejores ofertas ni bien abren la app.',
    popularFor: 'Indumentaria, gastronomía, calzados, bazar',
    features: ['Banners llamativos', 'Temporizadores de oferta', 'Etiquetas de % de descuento']
  },
  {
    id: 'cupones-digitales',
    title: 'Cupones digitales',
    emoji: '🎟️',
    category: 'fidelizacion',
    tag: 'Atracción',
    description: 'Códigos de descuento exclusivos para fidelizar clientes actuales y captar nuevos compradores.',
    benefit: 'Lanza campañas virales en redes invitando a canjear un cupón directo en tu mini app.',
    popularFor: 'Locales a la calle, delivery, eventos, estética',
    features: ['Cupones con fecha de caducidad', 'Límite de usos', 'Descuento fijo o porcentual']
  },
  {
    id: 'puntos-fidelizacion',
    title: 'Sistema de puntos y fidelización',
    emoji: '⭐',
    category: 'fidelizacion',
    tag: 'Recurrencia',
    description: 'Recompensa a tus clientes recurrentes con puntos acumulables canjeables por premios o descuentos.',
    benefit: 'Logra que tus clientes siempre vuelvan a comprarte a vos en lugar de ir con tu competencia.',
    popularFor: 'Cafeterías, lavaderos, barberías, heladerías, pet shops',
    features: ['Acumulación por compra', 'Catálogo de premios', 'Tarjeta digital de fidelidad']
  },
  {
    id: 'novedades-promociones',
    title: 'Novedades y promociones',
    emoji: '📢',
    category: 'comunicacion',
    tag: 'Lanzamientos',
    description: 'Canal directo de avisos dinámicos en la app con tus últimos lanzamientos y cambios de temporada.',
    benefit: 'Comunica sin pagar publicidad: todos los que tengan tu mini app verán tus últimas novedades.',
    popularFor: 'Indumentaria, pastelerías, centros de formación',
    features: ['Pop-up o cintillo destacado', 'Actualización al instante', 'Enlace directo a comprar']
  },
  {
    id: 'ubicacion-como-llegar',
    title: 'Ubicación y cómo llegar',
    emoji: '📍',
    category: 'comunicacion',
    tag: 'GPS y Mapa',
    description: 'Mapa interactivo integrado con botón directo para abrir Google Maps, Waze o Uber en un solo toque.',
    benefit: 'Ningún cliente se pierde buscando tu dirección o estacionamiento.',
    popularFor: 'Locales comerciales, consultorios, talleres, salones de fiesta',
    features: ['Apertura en Google Maps con 1 toque', 'Horarios de atención', 'Indicaciones de acceso']
  },
  {
    id: 'galeria-productos-trabajos',
    title: 'Galería de productos y trabajos',
    emoji: '📸',
    category: 'ventas',
    tag: 'Portafolio Visual',
    description: 'Muestra fotos de alta calidad de tus trabajos terminados, platos, cortes o transformaciones de clientes.',
    benefit: 'Una imagen vale más que mil palabras: demuestra tu profesionalismo con un book digital impecable.',
    popularFor: 'Fotógrafos, tatuadores, barberos, manicuristas, arquitectos',
    features: ['Fotos organizadas por álbumes', 'Vista ampliada tipo carrusel', 'Botón "¿Querés algo así?"']
  },
  {
    id: 'redes-sociales',
    title: 'Botones de redes sociales',
    emoji: '🔗',
    category: 'comunicacion',
    tag: 'Omnicanalidad',
    description: 'Conexión directa en un toque con tu Instagram, TikTok, Facebook, WhatsApp y perfil de Google.',
    benefit: 'Centraliza todos tus perfiles en un único link profesional y fácil de recordar.',
    popularFor: 'Todo tipo de profesional y marca',
    features: ['Iconos oficiales estilizados', 'Apertura directa en app nativa', 'Sin enlaces rotos']
  },
  {
    id: 'formularios-contacto',
    title: 'Formularios de contacto',
    emoji: '📋',
    category: 'comunicacion',
    tag: 'Consultas Claras',
    description: 'Recibe consultas ordenadas directamente en tu correo o WhatsApp con los datos que tú necesitas.',
    benefit: 'Olvídate de clientes que preguntan "info" sin decir qué necesitan. Pides exactamente los datos clave.',
    popularFor: 'Inmobiliarias, aseguradoras, abogados, constructores',
    features: ['Campos personalizados', 'Validación de teléfono/email', 'Notificación al instante']
  },
  {
    id: 'panel-estadisticas',
    title: 'Panel de consultas y estadísticas',
    emoji: '📊',
    category: 'gestion',
    tag: 'Métricas',
    description: 'Conoce qué productos, servicios o promociones son los más vistos y solicitados por tu clientela.',
    benefit: 'Toma decisiones basadas en lo que la gente realmente quiere y busca en tu negocio.',
    popularFor: 'Negocios en crecimiento, franquicias, comercios',
    features: ['Productos más cliqueados', 'Horarios pico de visita', 'Cantidad de clics a WhatsApp']
  },
  {
    id: 'encuestas-clientes',
    title: 'Encuestas a clientes',
    emoji: '📝',
    category: 'gestion',
    tag: 'Calidad',
    description: 'Mide la satisfacción, recolecta sugerencias y testimonios positivos para compartir en tus redes.',
    benefit: 'Detecta a tiempo cualquier detalle en la atención y consigue reseñas 5 estrellas.',
    popularFor: 'Gastronomía, clínicas estéticas, talleres mecánicos',
    features: ['Preguntas rápidas de 1 a 5 estrellas', 'Caja de comentarios libre', 'Filtro de quejas privadas']
  },
  {
    id: 'avisos-recordatorios',
    title: 'Avisos y recordatorios',
    emoji: '🔔',
    category: 'turnos',
    tag: 'Cero Ausencias',
    description: 'Recordatorios automáticos de turnos, vencimientos de membresías o avisos de promociones.',
    benefit: 'Reduce el ausentismo hasta un 70%. Tu cliente no olvidará su turno ni su cuota.',
    popularFor: 'Salones, consultorios, veterinarias, gimnasios',
    features: ['Avisos 24hs antes por WhatsApp', 'Confirmación o cancelación fácil', 'Reprogramación']
  },
  {
    id: 'calculadoras-cotizadores',
    title: 'Calculadoras y cotizadores',
    emoji: '🧮',
    category: 'ventas',
    tag: 'Respuesta Instantánea',
    description: 'Herramientas para que el cliente calcule el valor de su servicio, cuotas o presupuesto en segundos.',
    benefit: 'Da precios al instante sin perder tiempo calculando a mano en medio de tu jornada laboral.',
    popularFor: 'Inmobiliarias, préstamos, colocadores de pisos, fletes',
    features: ['Fórmulas a medida', 'Cálculo de cuotas con interés', 'Envío de cotización con 1 clic']
  },
  {
    id: 'agenda-digital',
    title: 'Agenda digital',
    emoji: '🗓️',
    category: 'turnos',
    tag: 'Organización Total',
    description: 'Calendario sincronizado para tu equipo y tus clientes con vista diaria, semanal y mensual.',
    benefit: 'Visualiza en cualquier momento desde tu propio celular quién viene hoy y qué servicio solicitó.',
    popularFor: 'Peluquerías, estudios fotográficos, canchas deportivas, médicos',
    features: ['Vista de citas del día', 'Colores por tipo de servicio o profesional', 'Disponibilidad en tiempo real']
  },
  {
    id: 'listas-precios',
    title: 'Listas de precios',
    emoji: '🏷️',
    category: 'ventas',
    tag: 'Siempre al Día',
    description: 'Listas interactivas con buscador rápido, filtros por rubro y actualización en tiempo real.',
    benefit: 'Cambias el precio una sola vez y todos tus clientes lo ven actualizado de inmediato. Cero PDF desfasados.',
    popularFor: 'Ferreterías, mayoristas, distribuidores, almacenes',
    features: ['Actualización inmediata', 'Buscador ultraveloz', 'Descarga o visualización directa']
  },
  {
    id: 'menu-digital',
    title: 'Menú digital',
    emoji: '🍔',
    category: 'ventas',
    tag: 'Gastronomía QR',
    description: 'Carta interactiva para gastronomía con fotos apetitosas, opciones de agregados y código QR para mesas.',
    benefit: 'Tus comensales ven la foto del plato, eligen bebidas, arman su pedido y te lo envían a la cocina.',
    popularFor: 'Bares, restaurantes, cervecerías, cafeterías, hamburgueserías',
    features: ['Secciones (entradas, principales, tragos)', 'Opciones de agregados y salsas', 'Generador de QR para mesas']
  },
  {
    id: 'reservas-consultas',
    title: 'Reservas y consultas',
    emoji: '🏨',
    category: 'turnos',
    tag: 'Turismo y Mesas',
    description: 'Disponibilidad de habitaciones, mesas, cabañas o turnos con opción de pago de seña.',
    benefit: 'Gestiona la ocupación de tus plazas o mesas sin dobles reservas ni confusiones.',
    popularFor: 'Hoteles, cabañas, campings, canchas de fútbol, pádel',
    features: ['Check-in / Check-out', 'Cantidad de personas', 'Confirmación con comprobante de seña']
  },
  {
    id: 'fichas-servicios',
    title: 'Fichas de servicios',
    emoji: '💇',
    category: 'turnos',
    tag: 'Detalle Claro',
    description: 'Detalle de cada servicio ofrecido: duración, precio, profesional a cargo y requisitos previos.',
    benefit: 'El cliente sabe exactamente qué incluye cada servicio y cuánto tiempo le tomará.',
    popularFor: 'Peluquerías, estéticas, psicólogos, consultores, mecánicos',
    features: ['Duración estimada', 'Qué incluye y qué no', 'Profesional asignado']
  },
  {
    id: 'planes-membresias',
    title: 'Planes y membresías',
    emoji: '🏋️',
    category: 'fidelizacion',
    tag: 'Ingreso Recurrente',
    description: 'Gestión de cuotas mensuales, pases diarios, combos de clases y suscripciones recurrentes.',
    benefit: 'Automatiza el cobro mensual y ten control exacto de quién tiene su cuota al día.',
    popularFor: 'Gimnasios, academias de baile, box de crossfit, clubes',
    features: ['Pases mensuales, trimestrales y anuales', 'Estado de cuota activo/vencido', 'Acceso a beneficios del plan']
  },
  {
    id: 'inscripciones-cursos',
    title: 'Inscripciones para cursos',
    emoji: '🎓',
    category: 'gestion',
    tag: 'Educación',
    description: 'Formulario de inscripción, cupos disponibles en vivo, temarios descargables y confirmación de pago.',
    benefit: 'Llena tus talleres y capacitaciones sin responder cien veces las mismas dudas.',
    popularFor: 'Profesores, academias, capacitadores, talleres de oficio',
    features: ['Contador de cupos restantes', 'Temario y fechas', 'Formulario directo con comprobante']
  },
  {
    id: 'solicitud-servicios',
    title: 'Solicitud de servicios',
    emoji: '🚗',
    category: 'ventas',
    tag: 'Auxilio y Envíos',
    description: 'Formulario ágil para pedidos de auxilio mecánico, remises, traslados, fletes o servicios a domicilio.',
    benefit: 'El cliente solicita el servicio enviando su ubicación GPS, modelo del vehículo o urgencia con un botón.',
    popularFor: 'Remises, grúas, auxilio 24hs, electricistas, cerrajeros',
    features: ['Compartir ubicación actual', 'Selección de origen y destino', 'Prioridad de urgencia']
  },
  {
    id: 'carrito-productos',
    title: 'Carrito de productos',
    emoji: '🛒',
    category: 'ventas',
    tag: 'Checkout Fácil',
    description: 'Carrito de compras con resumen detallado, selector de cantidad y envío automático a WhatsApp.',
    benefit: 'Facilidad de compra idéntica a una app grande pero en segundos y directo a tu teléfono.',
    popularFor: 'Cualquier negocio con venta de productos físicos',
    features: ['Suma automática de totales', 'Cálculo de envío estimado', 'Envío limpio y ordenado a WhatsApp']
  }
];

export const BUSINESS_LIST: BusinessItem[] = [
  {
    id: 'peluqueria',
    name: 'Peluquería / Barbería',
    question: '¿Peluquería?',
    emoji: '💈',
    badge: 'Turnos y Estilo',
    solution: 'Reserva de turnos 24/7 sin audios, galería de cortes, recordatorios automáticos por WhatsApp y ficha de servicios con precios claros.',
    recommendedFeatures: ['Reserva de turnos', 'Fichas de servicios', 'Galería de productos y trabajos', 'Avisos y recordatorios', 'WhatsApp directo'],
    sampleAppPreview: {
      title: 'Barbería & Salón VIP',
      subtitle: 'Elegí tu servicio y horario en 30 segundos',
      items: [
        { name: 'Corte Degradé + Barba', detail: '45 min • Incluye toalla caliente', price: '$8.500' },
        { name: 'Corte Clásico / Niño', detail: '30 min • Con estilista a elección', price: '$6.000' },
        { name: 'Alisado / Colorimetría', detail: '90 min • Diagnóstico previo', price: '$18.000' }
      ]
    }
  },
  {
    id: 'rotiseria',
    name: 'Rotisería / Gastronomía',
    question: '¿Rotisería?',
    emoji: '🍕',
    badge: 'Delivery y Menú',
    solution: 'Menú digital interactivo con fotos irresistibles, carrito de compras, opciones de empanadas/pizzas y pedidos directo a cocina por WhatsApp sin comisiones.',
    recommendedFeatures: ['Menú digital', 'Pedidos online', 'Carrito de productos', 'Promociones y descuentos', 'Ubicación y cómo llegar'],
    sampleAppPreview: {
      title: 'La Cocina Criolla',
      subtitle: 'Comida casera al instante en tu puerta',
      items: [
        { name: 'Docena de Empanadas Caseras', detail: 'Carne cortada a cuchillo / Jamón y queso', price: '$12.000' },
        { name: 'Pizza Especial Fugazzeta Rellena', detail: '8 porciones • Mucha muzzarella', price: '$10.500' },
        { name: 'Milanesa Napolitana con Papas', detail: 'Para 2 personas abundante', price: '$14.000' }
      ]
    }
  },
  {
    id: 'gimnasio',
    name: 'Gimnasio / Fitness',
    question: '¿Gimnasio?',
    emoji: '🏋️',
    badge: 'Membresías y Clases',
    solution: 'Control de planes y cuotas, reserva de cupos para clases (Crossfit, Spinning, Funcional), rutinas en PDF y recordatorios de vencimiento de abono.',
    recommendedFeatures: ['Planes y membresías', 'Reserva de turnos', 'Avisos y recordatorios', 'Sistema de puntos y fidelización', 'WhatsApp directo'],
    sampleAppPreview: {
      title: 'PowerFit Gym',
      subtitle: 'Entrena a tu máximo nivel',
      items: [
        { name: 'Pase Libre Musculación', detail: 'Acceso ilimitado lun a sáb', price: '$22.000 / mes' },
        { name: 'Pase Full + Clases Grupales', detail: 'Spinning, HIIT y Funcional', price: '$28.000 / mes' },
        { name: 'Pase Diario', detail: 'Entrenamiento completo por 1 día', price: '$3.500' }
      ]
    }
  },
  {
    id: 'profesor',
    name: 'Profesor particular / Academia',
    question: '¿Profesor particular?',
    emoji: '🧑‍🏫',
    badge: 'Cursos e Inscripciones',
    solution: 'Inscripción online con cupos en vivo, agenda de clases particulares, temario de exámenes y cobro de aranceles ordenado.',
    recommendedFeatures: ['Inscripciones para cursos', 'Agenda digital', 'Reserva de turnos', 'Formularios de contacto', 'Listas de precios'],
    sampleAppPreview: {
      title: 'Clases Particulares & Apoyo',
      subtitle: 'Matemática, Física y Química',
      items: [
        { name: 'Clase Individual Personalizada (1h)', detail: 'Presencial o Virtual por Meet', price: '$7.000' },
        { name: 'Pack Preparación Examen Final (4 clases)', detail: 'Incluye material práctico y modelos', price: '$24.000' },
        { name: 'Curso Grupal de Ingreso Universitario', detail: 'Cupos limitados • Inicio marzo', price: '$35.000' }
      ]
    }
  },
  {
    id: 'comercio',
    name: 'Comercio / Tienda',
    question: '¿Comercio?',
    emoji: '🏪',
    badge: 'Catálogo y Ventas',
    solution: 'Catálogo digital completo con fotos y categorías, carrito de compras, listas de precios actualizadas y botón de WhatsApp directo.',
    recommendedFeatures: ['Catálogo digital', 'Carrito de productos', 'Listas de precios', 'Promociones y descuentos', 'Ubicación y cómo llegar'],
    sampleAppPreview: {
      title: 'Tienda Urbana Store',
      subtitle: 'Prendas y accesorios de tendencia',
      items: [
        { name: 'Remera Oversize Heavy Cotton', detail: 'Talles S al XXL • 100% algodón', price: '$16.500' },
        { name: 'Pantalón Cargo Unisex', detail: 'Bolsillos laterales • Varios colores', price: '$32.000' },
        { name: 'Gorra Trucker Bordada', detail: 'Broche regulable importada', price: '$9.500' }
      ]
    }
  },
  {
    id: 'manicurista',
    name: 'Manicurista / Estética',
    question: '¿Manicurista?',
    emoji: '💅',
    badge: 'Turnos y Nail Art',
    solution: 'Reserva de turnos interactiva, galería con tus mejores diseños y sets de uñas, lista de precios detallada y recordatorios anti-olvido.',
    recommendedFeatures: ['Reserva de turnos', 'Galería de productos y trabajos', 'Fichas de servicios', 'Avisos y recordatorios', 'Cupones digitales'],
    sampleAppPreview: {
      title: 'Glam Nails Studio',
      subtitle: 'Uñas esculpidas y semipermanente',
      items: [
        { name: 'Esmaltado Semipermanente', detail: 'Incluye manicuría rusa y exfoliación', price: '$9.000' },
        { name: 'Kapping Gel + Nail Art', detail: 'Refuerzo de uña natural con diseño', price: '$13.500' },
        { name: 'Esculpidas en Polygel (Largo 2)', detail: 'Extensión con terminación premium', price: '$18.000' }
      ]
    }
  },
  {
    id: 'pasteleria',
    name: 'Pastelería / Repostería',
    question: '¿Pastelería?',
    emoji: '🍰',
    badge: 'Tortas y Mesas Dulces',
    solution: 'Catálogo tentador de tortas, postres y desayunos, selector de fecha de entrega con anticipación y cotizador de eventos especiales.',
    recommendedFeatures: ['Catálogo digital', 'Pedidos online', 'Galería de productos y trabajos', 'Presupuestos', 'Comprobantes y pedidos'],
    sampleAppPreview: {
      title: 'Dulce Tentación Repostería',
      subtitle: 'Pastelería artesanal para celebrar',
      items: [
        { name: 'Torta Chocotorta Especial (2kg)', detail: 'Decoración con bombones y dulce de leche', price: '$22.000' },
        { name: 'Box Desayuno Cumpleaños', detail: 'Taza, alfajores, brownies y jugo', price: '$19.500' },
        { name: 'Lemon Pie Clásico Merengue Suizo', detail: 'Masa sableé crocante y crema de limón', price: '$15.000' }
      ]
    }
  },
  {
    id: 'taller',
    name: 'Taller mecánico / Reparaciones',
    question: '¿Taller?',
    emoji: '🔧',
    badge: 'Presupuestos y Turnos',
    solution: 'Generación rápida de presupuestos, solicitud de turnos para service o diagnóstico, y aviso de vehículo listo por WhatsApp.',
    recommendedFeatures: ['Presupuestos', 'Reserva de turnos', 'Solicitud de servicios', 'Comprobantes y pedidos', 'Ubicación y cómo llegar'],
    sampleAppPreview: {
      title: 'Taller Mecánico & Frenos',
      subtitle: 'Mecánica integral de confianza',
      items: [
        { name: 'Service Completo (Aceite y Filtros)', detail: 'Incluye revisión de 25 puntos clave', price: 'Desde $45.000' },
        { name: 'Escaneo Computarizado / Diagnóstico', detail: 'Detección de fallas y reporte en PDF', price: '$15.000' },
        { name: 'Cambio de Pastillas de Freno', detail: 'Mano de obra + purgado de circuito', price: '$28.000' }
      ]
    }
  },
  {
    id: 'inmobiliaria',
    name: 'Inmobiliaria / Bienes raíces',
    question: '¿Inmobiliaria?',
    emoji: '🏠',
    badge: 'Propiedades y Visitas',
    solution: 'Catálogo de propiedades en venta y alquiler con fotos, filtros por zona y ambientes, cotizador de expensas y formulario de tasación.',
    recommendedFeatures: ['Catálogo digital', 'Galería de productos y trabajos', 'Formularios de contacto', 'Calculadoras y cotizadores', 'WhatsApp directo'],
    sampleAppPreview: {
      title: 'Propiedades del Este',
      subtitle: 'Encontrá tu próximo hogar o inversión',
      items: [
        { name: 'Depto 2 Ambientes con Balcón', detail: 'Centro • Luminoso • Bajas expensas', price: 'USD 65.000' },
        { name: 'Casa 3 Dormitorios con Parque y Pileta', detail: 'Barrio Residencial • Cochera doble', price: 'USD 140.000' },
        { name: 'Local Comercial sobre Avenida', detail: '80m2 • Gran vidriera y depósito', price: '$350.000 / mes' }
      ]
    }
  },
  {
    id: 'veterinaria',
    name: 'Veterinaria / Pet Shop',
    question: '¿Veterinaria?',
    emoji: '🐶',
    badge: 'Mascotas y Cuidados',
    solution: 'Turnos para consultas y peluquería canina, recordatorio de vacunas y desparasitaciones, catálogo de alimentos y accesorios con delivery.',
    recommendedFeatures: ['Reserva de turnos', 'Avisos y recordatorios', 'Catálogo digital', 'Pedidos online', 'WhatsApp directo'],
    sampleAppPreview: {
      title: 'Clínica Veterinaria San Roque',
      subtitle: 'Cuidado amoroso para tu mascota',
      items: [
        { name: 'Consulta Clínica General', detail: 'Revisión completa, peso y libreta sanitaria', price: '$9.500' },
        { name: 'Baño y Corte Sanitario Canino', detail: 'Incluye corte de uñas y limpieza de oídos', price: '$12.000' },
        { name: 'Alimento Premium Adulto 15kg', detail: 'Envío sin cargo a domicilio', price: '$38.000' }
      ]
    }
  },
  {
    id: 'farmacia',
    name: 'Farmacia / Salud',
    question: '¿Farmacia?',
    emoji: '💊',
    badge: 'Recetas y Turnos',
    solution: 'Recepción rápida de recetas por foto vía WhatsApp, catálogo de perfumería y dermocosmética, y cronograma de farmacias de turno.',
    recommendedFeatures: ['WhatsApp directo', 'Catálogo digital', 'Avisos y recordatorios', 'Ubicación y cómo llegar', 'Listas de precios'],
    sampleAppPreview: {
      title: 'Farmacia Central & Cuidado',
      subtitle: 'Enviá tu receta por WhatsApp y retirás sin fila',
      items: [
        { name: 'Envío de Receta Médica', detail: 'Subí la foto y te preparamos la orden', price: 'Sin cargo' },
        { name: 'Protector Solar FPS 50 Dermocosmética', detail: 'Toque seco para todo tipo de piel', price: '$21.000' },
        { name: 'Kit Primeros Auxilios Familiar', detail: 'Gasas, alcohol, apósitos y cinta', price: '$8.500' }
      ]
    }
  },
  {
    id: 'fotografo',
    name: 'Fotógrafo / Audiovisual',
    question: '¿Fotógrafo?',
    emoji: '📸',
    badge: 'Portfolio y Reservas',
    solution: 'Portfolio en alta resolución sin comprimir, cotizador de coberturas (15 años, bodas, newborn) y reserva de fechas con seña.',
    recommendedFeatures: ['Galería de productos y trabajos', 'Presupuestos', 'Reserva de turnos', 'Fichas de servicios', 'Redes sociales'],
    sampleAppPreview: {
      title: 'Luz & Arte Fotografía',
      subtitle: 'Capturando momentos inolvidables',
      items: [
        { name: 'Sesión Estudio Cumpleaños / Smash Cake', detail: '1 hora • 25 fotos editadas en alta resolución', price: '$35.000' },
        { name: 'Cobertura Fiesta de 15 Años Full', detail: 'Civil, previa, fiesta y backstage', price: 'Consultar' },
        { name: 'Book Profesional para Marcas / Modelos', detail: '10 fotos retocadas para redes', price: '$28.000' }
      ]
    }
  },
  {
    id: 'transporte',
    name: 'Remis / Transporte / Fletes',
    question: '¿Remis o transporte?',
    emoji: '🚗',
    badge: 'Viajes y Tarifas',
    solution: 'Pedido de autos al instante con envío de ubicación actual, tabla de tarifas fijas a aeropuertos o ciudades vecinas y reserva de viajes programados.',
    recommendedFeatures: ['Solicitud de servicios', 'Listas de precios', 'WhatsApp directo', 'Calculadoras y cotizadores', 'Agenda digital'],
    sampleAppPreview: {
      title: 'Remises Express & Traslados',
      subtitle: 'Viajes seguros y puntuales las 24 horas',
      items: [
        { name: 'Viaje Urbano Inmediato', detail: 'Envía tu ubicación y te asignamos móvil', price: 'Por taxímetro / tarifa' },
        { name: 'Traslado al Aeropuerto / Terminal', detail: 'Reserva programada con baúl amplio', price: '$18.000 fijo' },
        { name: 'Flete Chico / Envíos de Paquetes', detail: 'Reparto en el día con seguimiento', price: 'Desde $7.000' }
      ]
    }
  },
  {
    id: 'profesional',
    name: 'Profesional independiente',
    question: '¿Profesional independiente?',
    emoji: '🧑‍⚕️',
    badge: 'Consultoría y Citas',
    solution: 'Para abogados, contadores, psicólogos y médicos: agenda de consultas presenciales o virtuales, cobro de honorarios y ficha de servicios.',
    recommendedFeatures: ['Reserva de turnos', 'Fichas de servicios', 'Formularios de contacto', 'Presupuestos', 'WhatsApp directo'],
    sampleAppPreview: {
      title: 'Estudio Jurídico & Contable',
      subtitle: 'Asesoramiento legal e impositivo',
      items: [
        { name: 'Consulta Inicial de Diagnóstico (45 min)', detail: 'Presencial u online por videollamada', price: '$18.000' },
        { name: 'Gestión de Monotributo y AFIP', detail: 'Inscripción y control mensual', price: '$15.000 / mes' },
        { name: 'Redacción de Contratos de Alquiler', detail: 'Revisión y cláusulas de garantía', price: 'A convenir' }
      ]
    }
  },
  {
    id: 'servicios',
    name: 'Prestador de servicios',
    question: '¿Prestador de servicios?',
    emoji: '🛠️',
    badge: 'Visitas y Cotizaciones',
    solution: 'Para electricistas, plomeros, cerrajeros, pintores y técnicos de aire acondicionado: botón de urgencias, cotizador de mano de obra y fotos de trabajos.',
    recommendedFeatures: ['Solicitud de servicios', 'Presupuestos', 'Galería de productos y trabajos', 'WhatsApp directo', 'Ubicación y cómo llegar'],
    sampleAppPreview: {
      title: 'Soluciones del Hogar 24hs',
      subtitle: 'Plomería, Gas y Climatización',
      items: [
        { name: 'Instalación de Aire Split', detail: 'Incluye materiales hasta 3 metros y vacío', price: '$65.000' },
        { name: 'Urgencia 24hs Destapaciones / Fugas', detail: 'Llegamos en menos de 45 minutos', price: 'A coordinar' },
        { name: 'Mantenimiento Preventivo y Limpieza', detail: 'Revisión y carga de gas refrigerante', price: '$35.000' }
      ]
    }
  }
];

export const PILL_PILLARS = [
  { icon: 'Smartphone', label: 'APPS A MEDIDA', desc: 'Pensadas 100% para celular' },
  { icon: 'Globe', label: 'PÁGINAS WEB Y LANDING', desc: 'Rápidas y de alto impacto' },
  { icon: 'Bot', label: 'AUTOMATIZACIONES Y CHATBOTS', desc: 'Respuestas automáticas inteligentes' },
  { icon: 'Megaphone', label: 'REDES SOCIALES Y PUBLICIDAD', desc: 'Campañas para conseguir clientes' },
  { icon: 'TrendingUp', label: 'DISEÑO & MARKETING DIGITAL', desc: 'Identidad visual y ventas' },
];
