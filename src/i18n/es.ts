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
    subtitulo: 'Web apps para hoteles, restaurantes y pequeñas empresas, de la base de datos a la interfaz. Software que ya está en uso, no solo en GitHub.',
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
    lead: 'Del primer boceto al sistema en línea. Hablas directamente con quien escribe el código.',
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
    lead: 'Dos ya funcionan a diario en un hotel real y el tercero está en la recta final. Uno de ellos se vendió y se convirtió en producto.',
    outros: 'Otros proyectos',
    verOnline: 'Ver en línea',
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
        resumo: 'Empezó como una guía digital vendida a un hotel y se convirtió en producto. Cada versión resolvió el límite de la anterior.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Vendido al Swan Novo Hamburgo, donde está en uso en unas 160 habitaciones. El huésped la abre con un código QR y encuentra todo en acordeones, en 4 idiomas.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Reescrito en TypeScript para otro hotel de la cadena, con minibar y guía de canales SKY con búsqueda en modales y teléfonos interactivos.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: 'El producto white-label: un solo código que se convierte en la guía de cualquier hotel cambiando un archivo de configuración tipado. Tres hoteles más de la cadena están en aprobación.',
      },
      leadManager: {
        nome: 'Lead Manager',
        gancho: 'El área comercial de eventos dejó la planilla y ganó números para mostrar a la dirección.',
        resumo: 'CRM del área de eventos del hotel, usado a diario por el equipo y el gerente general. Embudo de propuestas, historial del cliente por teléfono, e-mail o CNPJ, ingresos mensuales en 3 capas, exportación a Excel, CSV y PDF y opt-out de privacidad.',
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'Del menú en el celular al pedido en la cocina, en tiempo real.',
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
    lead: 'Trabajo en hotelería desde 2019. Conozco al huésped perdido, el menú que nadie entiende y el cliente que se pierde en una planilla. Convierto eso en software.',
    itens: [
      {
        t: 'Ya vendí software',
        d: 'Una guía digital que hice fue comprada por el Swan Novo Hamburgo y está en uso. De ella nacieron una versión en TypeScript y un producto white-label, ahora en aprobación para tres hoteles más de la cadena.',
      },
      {
        t: 'De la base de datos a la interfaz',
        d: 'En Lead Manager e Irius me encargo de todo: base de datos Postgres en Supabase con Row Level Security, login, archivos, datos en tiempo real y la interfaz en React y TypeScript.',
      },
      {
        t: 'Clientes reales, plazos reales',
        d: 'Soy coordinador de eventos. Plazos cortos y clientes exigentes son parte de mi rutina, y llevo esa calma y esa escucha a cada proyecto.',
      },
      {
        t: 'Hablo el idioma de tus clientes',
        d: 'Portugués nativo, inglés y español fluidos. Pasé 3 años atendiendo a huéspedes de todo el mundo en los barcos de Norwegian Cruise Line.',
      },
    ],
  },

  contato: {
    chamada: '¿Tienes un proyecto en mente?',
    lead: 'Cuéntame qué necesitas y te respondo con un plan y un presupuesto. También estoy abierto a puestos de desarrollador full-stack.',
    email: 'Enviar e-mail',
  },
  social: { email: 'E-mail' },
  rodape: '© {{ano}} {{nome}}. Hecho con React, TypeScript, i18next y CSS Modules.',
}

export default es
