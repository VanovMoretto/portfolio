import type { Mensagens } from './pt'

const es: Mensagens = {
  meta: {
    titulo: 'Vanov Moretto | Sistemas y sitios a medida',
    descricao: 'Vanov Moretto, desarrollador full-stack. Sistemas y sitios a medida para pequeñas empresas, ya en uso en hoteles y restaurantes.',
  },
  nav: { rotulo: 'Navegación principal', projetos: 'Proyectos', servicos: 'Servicios', sobre: 'Sobre mí', orcamento: 'Pedir presupuesto' },
  tema: { rotulo: 'Tema claro', escuro: 'Tema oscuro', claro: 'Tema claro' },
  idioma: { rotulo: 'Idioma', escolher: 'Elegir idioma' },

  faixa: [
    'Disponible para nuevos proyectos',
    'Sistemas y sitios a medida',
    'Atiendo en portugués, inglés y español',
    'Guía del huésped en uso en la red Swan Hotéis',
  ],

  hero: {
    titulo: 'Sistemas y sitios a medida para tu negocio.',
    intro: 'Soy Vanov Moretto, desarrollador full-stack. Hago software que ya funciona en hoteles y restaurantes: guía del huésped, CRM de ventas y menú con pedidos en tiempo real.',
    pergunta: '¿Qué necesitas?',
    pedir: 'Pedir presupuesto',
    verProjetos: 'Ver proyectos',
    vitrine: 'Verto y Diretório de Serviços, dos de mis sistemas en uso hoy',
    prova: [
      'Guía del huésped en uso en unas 160 habitaciones del Swan Novo Hamburgo',
      'Contratado por la red Swan para 3 hoteles más',
      'CRM de eventos usado todos los días por un equipo comercial',
    ],
  },

  necessidades: {
    site: 'Sitio o landing page',
    sistema: 'Sistema a medida',
    cardapio: 'Menú digital',
    guia: 'Guía del huésped',
    outro: 'Otra cosa',
  },

  stack: {
    React: ['Diretório de Serviços', 'Verto', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Diretório de Serviços', 'Digital Concierge', 'Verto', 'Irius Gastronomia', 'Este portafolio'],
    'Tailwind CSS': ['Verto'],
    JavaScript: ['Astrolábio (versión 1)', 'Painter Robot'],
    'CSS Modules': ['Diretório de Serviços', 'Digital Concierge', 'Irius Gastronomia', 'Este portafolio'],
    i18next: ['Diretório de Serviços (4 idiomas)', 'Irius (3 idiomas)', 'Este portafolio (3 idiomas)'],
    Vite: ['Todos los proyectos desde 2025'],
    Supabase: ['Verto: login, archivos y seguridad', 'Irius: pedidos en tiempo real'],
    PostgreSQL: ['Verto', 'Irius Gastronomia'],
    Firebase: ['Coworking'],
    'Node.js': ['Coworking'],
  },

  projetos: {
    titulo: 'Proyectos que ya están funcionando',
    lead: 'No son ejercicios: cada uno resuelve un problema real de un negocio, y quien lo usa es el equipo de allí.',
    outros: 'Otros trabajos',
    verOnline: 'Ver en línea',
    codigo: 'Código',
    queroNoHotel: 'Lo quiero en mi hotel',
    queroMensagem: '¡Hola, Vanov! Vi el Digital Concierge en tu portafolio y quiero saber cómo tener la guía digital en mi hotel.',
    captura: 'Captura de pantalla de {{nome}}',
    status: {
      producao: 'En producción',
      aprovado: 'Aprobado por la red',
      desenvolvimento: 'En desarrollo',
      uso: 'En uso diario',
      venda: 'Disponible para hoteles',
      final: 'Recta final',
      cliente: 'Cliente que paga',
      estudo: 'Proyecto de estudio',
    },
    diretorio: {
      nome: 'Diretório de Serviços',
      gancho: 'La guía del huésped de la red Swan Hotéis, en el celular, con el código QR de la habitación.',
      resumo: 'Wi-Fi, teléfonos, horarios, menús, servicios y políticas del hotel en 4 idiomas. Empezó como el Astrolábio, vendido al Swan Novo Hamburgo, y la red contrató la app para tres hoteles más.',
      unidadesTitulo: 'Hoteles de la red',
      unidades: [
        { nome: 'Novo Hamburgo', detalhe: 'Astrolábio, la primera versión' },
        { nome: 'Porto Alegre', detalhe: 'Swan Generation' },
        { nome: 'Caxias do Sul', detalhe: 'Swan Caxias' },
        { nome: 'Rio Grande', detalhe: 'Swan Rio Grande' },
      ],
      comoFunciona: 'Un solo código genera el sitio de cada hotel, con sus propios colores, logo y contenido. Los textos y precios están en archivos que el equipo del hotel actualiza sin programar.',
      entregasTitulo: 'Además del código',
      entregas: ['Manual de mantenimiento con imágenes', 'Capacitación de 2 horas para el equipo', 'Garantía de 90 días'],
      concierge: {
        nome: 'Digital Concierge',
        resumo: 'La misma idea como producto para cualquier hotel: una guía lista, adaptada a los colores y la información de cada uno.',
      },
      telas: 'Pantallas del Diretório de Serviços del Swan Caxias: inicio, desayuno y restaurante',
    },
    itens: {
      leadManager: {
        nome: 'Verto',
        gancho: 'Del pedido de presupuesto a la facturación del evento, sin planillas de por medio.',
        resumo: 'CRM del área de eventos de un hotel, usado todos los días por el equipo. Reconoce al cliente que vuelve y muestra su historial, sigue cada propuesta hasta el cierre, avisa cuando falta un seguimiento por WhatsApp y lleva el evento cerrado a la planilla de facturación. También tiene paneles de conversión e ingresos, encuesta de satisfacción posevento y mailing que respeta la LGPD. La demo en línea usa datos ficticios y entra con un clic.',
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'El pedido que el huésped hace en el celular aparece al instante en la cocina.',
        resumo: 'Menú digital del restaurante del hotel en 3 idiomas, con pedidos de room service, pago con PIX o tarjeta y un panel en vivo para recepción y cocina. El dueño edita platos y precios sin tocar código.',
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page para un robot que pinta fachadas.',
        resumo: 'Mi primer trabajo pago: la página de presentación de un producto industrial.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Reservar una sala en pocos clics.',
        resumo: 'Login, reservas y aviso por e-mail al espacio. Modernizado en 2026.',
      },
    },
  },

  servicos: {
    titulo: 'Lo que hago por ti',
    lead: 'Me encargo de todo el proyecto, y hablas directamente conmigo durante todo el proceso.',
    itens: [
      {
        t: 'Sistemas a medida',
        d: 'CRMs, paneles con gráficos, áreas de administración e informes en Excel y PDF, a la manera en que trabaja tu negocio.',
        exemplo: 'Como el Verto',
      },
      {
        t: 'Hoteles y restaurantes',
        d: 'Guía del huésped con código QR, menú digital, pedidos de room service y reservas. Trabajo en un hotel y conozco la operación.',
        exemplo: 'Como el Diretório de Serviços',
      },
      {
        t: 'Sitios y landing pages',
        d: 'Rápidos, pensados primero para el celular, en todos los idiomas que necesites.',
        exemplo: 'Como este portafolio',
      },
      {
        t: 'Base de datos y login',
        d: 'Registro de usuarios, archivos y datos en tiempo real, con la seguridad configurada en la propia base.',
        exemplo: 'Como el Irius Gastronomia',
      },
    ],
    processoTitulo: 'Cómo trabajo',
    processo: [
      { t: 'Alcance y precio cerrados', d: 'Antes de empezar, acordamos qué incluye, el plazo y el valor.' },
      { t: 'Sigues todo de cerca', d: 'Actualizaciones frecuentes y un enlace para probar mientras construyo.' },
      { t: 'El sistema es tuyo', d: 'Entrego el código documentado y capacito a tu equipo. Nunca quedas atado a mí.' },
    ],
  },

  sobre: {
    titulo: 'Conozco la operación desde adentro',
    lead: 'Trabajo en hotelería desde 2019 y veo de cerca los problemas del día a día de un negocio. Varios de mis proyectos nacieron así.',
    foto: 'Foto de Vanov Moretto',
    itens: [
      {
        t: 'Ya vendí software',
        d: 'La guía digital que hice para el Swan Novo Hamburgo se convirtió en el Diretório de Serviços, contratado por la red para tres hoteles más.',
      },
      {
        t: 'Me encargo de todo el sistema',
        d: 'De la base de datos a la pantalla: login, archivos, datos en tiempo real y la interfaz que usa tu equipo.',
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
    stackTitulo: 'Herramientas que uso',
    orbita: 'Tecnologías que uso',
    nucleo: 'Mi stack',
    dica: 'Pasa el mouse o toca una tecnología',
    legendaFront: 'Interfaz',
    legendaBack: 'Datos y servidor',
  },

  orcamento: {
    titulo: 'Cuéntame qué necesitas',
    lead: 'Toma un minuto. El mensaje sale listo en tu WhatsApp o e-mail, y te respondo con un plan y un valor.',
    nome: 'Tu nombre',
    nomeExemplo: 'Juan Pérez',
    negocio: 'Tu negocio',
    negocioExemplo: 'Nombre de la empresa o rubro',
    precisa: 'Qué necesitas',
    prazo: 'Para cuándo',
    prazos: { semPressa: 'Sin apuro', mes: 'En hasta 1 mes', urgente: 'Es urgente' },
    detalhes: 'Cuéntame un poco más',
    detalhesExemplo: 'Escribe aquí cómo puedo ayudarte',
    enviarWhatsapp: 'Enviar por WhatsApp',
    enviarEmail: 'Enviar por e-mail',
    faltam: 'Completa tu nombre y cuéntame un poco de lo que necesitas para poder responderte.',
    ou: '¿Prefieres otro canal?',
    mensagem: {
      abertura: '¡Hola, Vanov! Quiero un presupuesto.',
      nome: 'Nombre',
      negocio: 'Negocio',
      precisa: 'Necesito',
      prazo: 'Plazo',
      detalhes: 'Detalles',
      assunto: 'Pedido de presupuesto',
    },
  },

  contato: {
    endereco: 'hello@vanovmoretto.com',
    whatsappMensagem: '¡Hola, Vanov! Vi tu portafolio y quiero hablar sobre un proyecto.',
  },
  social: { email: 'E-mail', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Desarrollador full-stack.',
}

export default es
