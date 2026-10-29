import type { Mensagens } from './pt'

const es: Mensagens = {
  meta: {
    titulo: 'Vanov Moretto | Desarrollador Full-Stack React',
    descricao: 'Vanov Moretto, desarrollador full-stack (React, TypeScript y Supabase). Web apps para hoteles, restaurantes y pequeñas empresas.',
  },
  nav: { rotulo: 'Navegación principal', servicos: 'Servicios', projetos: 'Proyectos', sobre: 'Sobre mí', contato: 'Contacto' },
  tema: { rotulo: 'Tema claro', escuro: 'Tema oscuro', claro: 'Tema claro' },
  idioma: { rotulo: 'Idioma', escolher: 'Elegir idioma' },

  hero: {
    selo: 'Disponible para proyectos freelance',
    cargo: 'Desarrollador Full-Stack React',
    subtitulo: 'Desarrollo web apps para hoteles, restaurantes y pequeñas empresas. Algunas ya forman parte del día a día de un hotel.',
    contratar: 'Hablemos',
    verProjetos: 'Ver proyectos',
    numeros: {
      quartos: 'habitaciones con mi guía digital en uso',
      hoteis: 'hoteles de la cadena en aprobación',
      idiomas: 'idiomas en la guía del huésped',
    },
    orbita: 'Tecnologías que uso',
    nucleo: 'Mi stack',
    dica: 'Pasa el mouse o toca una tecnología',
    legendaFront: 'Front-end',
    legendaBack: 'Back-end y datos',
  },

  stack: {
    React: ['Astrolábio', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Digital Concierge', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'Este portafolio'],
    'Tailwind CSS': ['Lead Manager: todo el sistema'],
    JavaScript: ['Astrolábio v1', 'Painter Robot'],
    'CSS Modules': ['Astrolábio', 'Digital Concierge', 'Irius Gastronomia', 'Este portafolio'],
    i18next: ['Astrolábio (4 idiomas)', 'Irius (3 idiomas)', 'Este portafolio (3 idiomas)'],
    Vite: ['Todos los proyectos desde 2025'],
    Supabase: ['Lead Manager: Auth, Storage y RLS', 'Irius: pedidos en tiempo real'],
    PostgreSQL: ['Lead Manager: 15 migraciones, vistas y RLS', 'Irius: funciones security definer'],
    Firebase: ['Coworking: Auth, Firestore y Cloud Functions'],
    'Node.js': ['Cloud Functions del Coworking'],
  },

  servicos: {
    titulo: 'Lo que hago por ti',
    lead: 'Me encargo de todo el proyecto, y hablas directamente conmigo durante todo el proceso.',
    itens: [
      {
        t: 'Web apps y paneles',
        d: 'Sistemas a medida en React y TypeScript: CRMs, dashboards con gráficos, paneles de administración y exportación a Excel y PDF.',
      },
      {
        t: 'Hoteles y restaurantes',
        d: 'Guía digital del huésped con código QR, menú digital, pedidos de room service y reservas. Trabajo en un hotel y conozco la operación.',
      },
      {
        t: 'Back-end con Supabase',
        d: 'Base de datos Postgres, login, carga de archivos y datos en tiempo real, con la seguridad en la base de datos (Row Level Security).',
      },
      {
        t: 'Sitios multilingües y landing pages',
        d: 'Interfaces rápidas y mobile-first, en todos los idiomas que necesites, con tema claro y oscuro y accesibilidad.',
      },
    ],
    processoTitulo: 'Cómo trabajo',
    processo: [
      { t: 'Alcance y precio cerrados', d: 'Antes de empezar, acordamos qué incluye, el plazo y el valor.' },
      { t: 'Sigues todo el avance', d: 'Actualizaciones frecuentes y un enlace para probar mientras construyo.' },
      { t: 'Tu código, documentado', d: 'Entrego el código con README. Nunca quedas atado a mí.' },
    ],
  },

  projetos: {
    titulo: 'Proyectos',
    lead: 'Dos ya funcionan a diario en un hotel y el tercero está en la recta final. Uno de ellos se vendió y se convirtió en producto.',
    outros: 'Otros proyectos',
    verOnline: 'Ver en línea',
    queroNoHotel: 'Lo quiero en mi hotel',
    queroMensagem: '¡Hola, Vanov! Vi el Digital Concierge en tu portafolio y quiero saber cómo tener la guía digital en mi hotel.',
    codigo: 'Código',
    restrito: 'Uso interno, con datos reales del hotel',
    captura: 'Captura de pantalla de {{nome}}',
    status: {
      producao: 'En producción',
      uso: 'En uso diario',
      concluido: 'Terminado',
      venda: 'Disponible para hoteles',
      final: 'Recta final',
      andamento: 'En desarrollo',
      breve: 'Próximamente',
      antigo: 'Proyecto de estudio',
      cliente: 'Cliente de pago',
    },
    itens: {
      astrolabio: {
        nome: 'Astrolábio',
        gancho: 'El astrolabio guiaba a los navegantes por el cielo. Este guía al huésped por el hotel.',
        resumo: 'Empezó como una guía digital vendida a un hotel. Hoy tiene tres versiones, una de ellas lista para venderse a otros hoteles.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Guía digital del huésped vendida al Swan Novo Hamburgo, en uso en unas 160 habitaciones y disponible en 4 idiomas.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Una nueva versión, reescrita en TypeScript y con identidad visual propia, hecha para otro hotel de la cadena.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: 'El producto white-label: un solo código que se convierte en la guía de cualquier hotel cambiando un archivo de configuración tipado. Tres hoteles más de la cadena están en aprobación.',
      },
      leadManager: {
        nome: 'Lead Manager',
        gancho: 'El área comercial de eventos dejó la planilla y ganó números para mostrar a la dirección.',
        resumo: 'CRM del área de eventos del hotel, usado a diario por el equipo y el gerente general. Embudo de propuestas, historial del cliente por teléfono, e-mail o CNPJ, ingresos mensuales en 3 capas, exportación a Excel, CSV y PDF y opt-out de privacidad. La demo en línea usa datos ficticios y se abre con 1 clic.',
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'El pedido que el huésped hace en el celular aparece al instante en la cocina.',
        resumo: 'Menú digital del restaurante del hotel en 3 idiomas, con pedidos de room service, pago con PIX o tarjeta y un panel en vivo para recepción y cocina, con alerta sonora y ticket térmico. El dueño edita platos y precios sin tocar código.',
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page para un robot que pinta fachadas.',
        resumo: 'Mi primer trabajo pagado: la página de presentación de un producto industrial, con secciones de soluciones, contratación y preguntas frecuentes.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Reservar una sala en pocos clics.',
        resumo: 'Mi primer full-stack: login con Firebase Auth, reservas en Firestore y una Cloud Function que valida cada pedido en el servidor y avisa al espacio por e-mail. Modernizado en 2026 a React 19, TypeScript y Vite.',
      },
    },
  },

  sobre: {
    titulo: 'Conozco la operación por dentro',
    lead: 'Trabajo en hotelería desde 2019 y veo de cerca los problemas del día a día de un hotel. Varios de mis proyectos nacieron así.',
    itens: [
      {
        t: 'Ya vendí software',
        d: 'Una guía digital que hice fue comprada por el Swan Novo Hamburgo y está en uso. De ella nacieron una versión en TypeScript y un producto white-label, ahora en aprobación para tres hoteles más de la cadena.',
      },
      {
        t: 'Me encargo de todo el sistema',
        d: 'En Lead Manager e Irius me encargo de todo: base de datos Postgres en Supabase con Row Level Security, login, archivos, datos en tiempo real y la interfaz en React y TypeScript.',
      },
      {
        t: 'Acostumbrado a plazos cortos',
        d: 'Soy coordinador de eventos y trato todos los días con plazos ajustados y clientes exigentes.',
      },
      {
        t: 'Atiendo en tres idiomas',
        d: 'Portugués nativo, inglés y español fluidos. Pasé 3 años atendiendo a huéspedes de todo el mundo en los barcos de Norwegian Cruise Line.',
      },
    ],
  },

  contato: {
    chamada: '¿Tienes un proyecto en mente?',
    lead: 'Cuéntame qué necesitas y te respondo con un plan y un presupuesto. También estoy abierto a puestos de desarrollador full-stack.',
    email: 'Enviar e-mail',
    whatsapp: 'Escríbeme por WhatsApp',
    whatsappMensagem: '¡Hola, Vanov! Vi tu portafolio y quiero hablar sobre un proyecto.',
  },
  social: { email: 'E-mail', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Hecho con React, TypeScript, i18next y CSS Modules.',
}

export default es
