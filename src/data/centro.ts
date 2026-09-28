// =====================================================================
//  CONTENIDO Y MARCA DEL SITIO DE SALUD Y AROMA
//  Todos los textos, datos de contacto, servicios, precios, fotos y
//  colores del sitio viven aquí. Para actualizar el sitio basta con
//  editar este archivo y las fotos de src/assets/fotos/; los
//  componentes de src/components/ solo leen estos datos.
// =====================================================================

export const centro = {
  nombre: "Salud y Aroma",
  // Dominio final del cliente (se usa para SEO). 
  sitio: "https://saludyaroma.com",

  // ---------- Contacto ----------
  direccion: "Cra. 56 #4-26",
  localidad: "Puente Aranda",
  ciudad: "Bogotá",
  region: "Bogotá D.C.", // departamento o distrito, para los datos de Google
  telefono: "310 862 7593",
  whatsapp: "573108627593", // con indicativo 57, sin espacios ni +
  mensajeWhatsapp: "Hola, Salud y Aroma. Quiero agendar una cita.",
  instagram: "https://www.instagram.com/esteticasaludyaroma",

  horarios: [
    { dias: "Lunes a viernes", horas: "8:00 a. m. a 6:00 p. m." },
    { dias: "Sábados", horas: "8:00 a. m. a 1:00 p. m." },
  ],
  // Resumen de días de atención que aparece en la portada.
  resumenHorario: "Lunes a sábado",

  // ---------- Portada ----------
  // Frase corta que engancha. Déjala en "" para ocultarla.
  gancho: "Agenda tu valoración de depilación láser",
  titulo: "Tu piel, cuidada por manos que conoces",
  // Descripción para Google (ideal: 140 a 160 caracteres).
  descripcionSeo:
    "Centro de estética en Puente Aranda, Bogotá: depilación láser, maquillaje permanente, cejas, faciales y moldeo corporal. Agenda tu valoración por WhatsApp.",
  subtitulo:
    "Depilación láser, maquillaje permanente y tratamientos de belleza en Puente Aranda, con equipos especializados y una atención que te hace sentir en casa.",

  // ---------- FOTOS ----------
  // Cada "foto" es el nombre de un archivo en src/assets/fotos/ (sin extensión).
  // Si el archivo no existe, la página muestra un recuadro con el nombre que falta.
  // foco: qué parte de la foto se conserva al recortar ("50% 30%" = centro, arriba).
  // ilustrativa: true muestra la etiqueta "Imagen ilustrativa" sobre la foto.
  // Portada: si "video" tiene valor, se usa el video; si no, la foto.
  // Se buscan en public/videos/: portada.webm, portada.mp4, portada-poster.webp
  // y, para celular, portada-movil.mp4 (recorte vertical).
  // La foto se sigue usando como imagen al compartir la página en redes.
  portada: { foto: "portada", foco: "60% 30%", video: "/videos/portada", focoVideo: "66% 50%" },

  // ---------- Servicios ----------
  // Precios vigentes por sesión; actualízalos aquí cuando cambien.
  notaPrecios: "Precios de referencia por sesión. El valor final se confirma en tu valoración.",
  servicios: [
    {
      nombre: "Depilación láser",
      descripcion:
        "Reduce el vello de forma progresiva con equipo láser. Empezamos con una valoración de tu piel.",
      precio: "Desde $60.000 por sesión",
      foto: "depilacion-laser",
      alt: "Mano de mujer sobre su rodilla, con la piel de las piernas suave y sin vello",
      foco: "45% 50%",
    },
    {
      nombre: "Maquillaje permanente",
      descripcion:
        "Cejas y delineado diseñados según la forma de tu rostro, para que te veas lista desde que despiertas.",
      precio: "$80.000",
      foto: "maquillaje-permanente",
      alt: "Primer plano de un ojo con pestañas largas y definidas",
      foco: "42% 50%",
    },
    {
      nombre: "Diseño de cejas con hilo",
      descripcion: "Definimos la forma de tus cejas con hilo, una técnica precisa y suave con la piel.",
      precio: "$20.000",
      foto: "cejas-hilo",
      alt: "Especialista con guantes negros perfilando una ceja con la técnica de hilo",
      foco: "62% 45%",
    },
    {
      nombre: "Tratamiento facial",
      descripcion: "Limpieza e hidratación según tu tipo de piel, para que se sienta cuidada y fresca.",
      precio: "Desde $70.000 por sesión",
      foto: "tratamiento-facial",
      alt: "Imagen ilustrativa de un rostro antes y después de un tratamiento facial",
      foco: "50% 40%",
      ilustrativa: true,
    },
    {
      nombre: "Pestañas",
      descripcion: "Realza tu mirada con pestañas definidas y un acabado natural.",
      precio: "Desde $50.000",
      foto: "pestanas",
      alt: "Imagen ilustrativa de unos ojos antes y después de un tratamiento de pestañas",
      foco: "50% 50%",
      ilustrativa: true,
    },
    {
      nombre: "Moldeo corporal",
      descripcion: "Tratamientos corporales con aparatología, siempre con una valoración inicial.",
      precio: "Desde $60.000 por sesión",
      foto: "moldeo-corporal",
      alt: "Silueta de una mujer en ropa deportiva con líneas de luz alrededor de la cintura",
      foco: "50% 42%",
    },
  ],

  // ---------- Resalta tu mirada ----------
  mirada: {
    titulo: "Resalta tu mirada",
    texto: "Maquillaje permanente, cejas y pestañas pensados para la forma de tu rostro.",
    foto: "portada",
    alt: "Mujer con cejas definidas y piel luminosa, con las manos junto a las sienes",
    foco: "50% 35%",
  },

  // ---------- Nuestro trabajo (galería con fotos REALES del centro) ----------
  galeria: [
    { foto: "trabajo-1", etiqueta: "Procedimiento de depilación láser" },
    { foto: "trabajo-2", etiqueta: "Resultado de cejas" },
    { foto: "trabajo-3", etiqueta: "Delineado permanente" },
    { foto: "trabajo-4", etiqueta: "Equipo láser" },
    { foto: "trabajo-5", etiqueta: "Cabina de atención" },
    { foto: "trabajo-6", etiqueta: "Resultado de maquillaje" },
  ],

  // ---------- Franja de bienestar ----------
  bienestar: {
    titulo: "Un momento solo para ti",
    texto: "Masajes con piedras calientes y tratamientos de bienestar, a pocos pasos de tu casa.",
    foto: "masajes-piedras",
    alt: "Mujer relajada recibiendo un masaje con piedras calientes en la espalda",
    foco: "40% 50%",
  },

  // ---------- Por qué elegirnos ----------
  // iconos disponibles: https://icones.js.org/collection/lucide
  diferenciadores: [
    {
      icono: "lucide:scan-face",
      titulo: "Equipos especializados",
      texto: "Contamos con maquinaria para varios tratamientos, en un mismo lugar.",
    },
    {
      icono: "lucide:hand-heart",
      titulo: "Atención personalizada",
      texto: "Cada tratamiento empieza escuchando lo que tu piel necesita.",
    },
    {
      icono: "lucide:message-circle-heart",
      titulo: "Seguimiento cercano",
      texto: "Estamos pendientes de ti antes, durante y después de cada sesión.",
    },
  ],
  fotoNosotros: {
    foto: "crema-facial",
    alt: "Mujer aplicándose crema hidratante en la mejilla con los ojos cerrados",
    foco: "58% 45%",
  },

  // ---------- Equipo ----------
  equipo: [
    { nombre: "Olga Sabogal", rol: "Propietaria", foto: "equipo-olga" },
    { nombre: "Angélica", rol: "Terapeuta", foto: "equipo-angelica" },
  ],

  // ---------- Producto ----------
  // Déjalo en null para ocultar la sección.
  producto: {
    titulo: "Para tu cuidado en casa",
    nombre: "Loción despigmentadora magistral",
    descripcion: "Con extracto de corteza de sauce. Pregunta por ella en tu próxima cita y te orientamos sobre cómo usarla.",
    foto: "producto-locion",
    alt: "Frasco ámbar de loción despigmentadora magistral con tapa dorada",
    mensajeWhatsapp: "Hola, quiero información sobre la loción despigmentadora.",
  },

  // ---------- Testimonios ----------
  testimonios: [
    {
      nombre: "Katherine",
      texto:
        "Tienen varios servicios diferentes con maquinaria. Angélica, la terapeuta, es súper amable, y la propietaria, Olga, siempre está pendiente de ti.",
    },
  ],

  // ---------- Ubicación ----------
  fotoFachada: "local-fachada",

  // ---------- Marca ----------
  colores: {
    primario: "#9C2A7E", // ciruela: marca, títulos y botón principal
    acento: "#C1EF62", // verde: solo detalles que atraen la mirada (10 %)
    fondo: "#FFFFFF",
    tinte: "#F7F0EC", // nude cálido para secciones alternas
    vino: "#240E10", // fondo de la portada (igual al fondo de la foto principal)
    tinta: "#3D0F31", // texto principal
    textoSuave: "#5B3A52",
    borde: "#ECE4EA",
  },
  fuentes: {
    titulos: "Bodoni Moda",
    texto: "Figtree",
    // Ambas vienen incluidas en el proyecto (paquetes @fontsource, importados en Base.astro).
  },

  mostrarCreditos: true, // "Hecho por Código Lengua" en el pie
};

// ---------- Valores derivados (no se editan: se calculan de los datos de arriba) ----------
// Usuario de Instagram a partir de la URL, p. ej. "@esteticasaludyaroma".
export const usuarioInstagram = `@${centro.instagram.split("/").filter(Boolean).pop()}`;
// Enlace de WhatsApp con el mensaje inicial ya escrito.
export const enlaceWhatsApp = `https://wa.me/${centro.whatsapp}?text=${encodeURIComponent(
  centro.mensajeWhatsapp,
)}`;
export const direccionCompleta = `${centro.direccion}, ${centro.localidad}, ${centro.ciudad}`;
// Abre Google Maps con la ruta hasta el centro.
export const enlaceComoLlegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  direccionCompleta,
)}`;
// Mapa embebido (iframe) de la sección Ubicación.
export const enlaceMapa = `https://www.google.com/maps?q=${encodeURIComponent(
  `${centro.nombre}, ${direccionCompleta}`,
)}&output=embed`;
