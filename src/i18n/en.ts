import type { Mensagens } from './pt'

const en: Mensagens = {
  meta: {
    titulo: 'Vanov Moretto | Custom software and websites',
    descricao: 'Vanov Moretto, full-stack developer. Custom software and websites for small businesses, already in use at hotels and restaurants.',
  },
  nav: { rotulo: 'Main navigation', projetos: 'Projects', servicos: 'Services', sobre: 'About', orcamento: 'Get a quote' },
  tema: { rotulo: 'Light theme', escuro: 'Dark theme', claro: 'Light theme' },
  idioma: { rotulo: 'Language', escolher: 'Choose language' },

  faixa: [
    'Available for new projects',
    'Custom software and websites',
    'I work in Portuguese, English and Spanish',
    'Guest guide in use at Swan Hotels',
  ],

  hero: {
    titulo: 'Custom software and websites for your business.',
    intro: "I'm Vanov Moretto, a full-stack developer. I build software that already runs in hotels and restaurants: a guest guide, a sales CRM and a menu with real-time orders.",
    pergunta: 'What do you need?',
    pedir: 'Get a quote',
    verProjetos: 'See projects',
    vitrine: 'Verto and Diretório de Serviços, two of my systems in use today',
    prova: [
      'Guest guide in use in about 160 rooms at Swan Novo Hamburgo',
      'Hired by the Swan chain for 3 more hotels',
      'Events CRM used every day by a sales team',
    ],
  },

  necessidades: {
    site: 'Website or landing page',
    sistema: 'Custom system',
    cardapio: 'Digital menu',
    guia: 'Guest guide',
    outro: 'Something else',
  },

  stack: {
    React: ['Diretório de Serviços', 'Verto', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Diretório de Serviços', 'Digital Concierge', 'Verto', 'Irius Gastronomia', 'This portfolio'],
    'Tailwind CSS': ['Verto'],
    JavaScript: ['Astrolábio (version 1)', 'Painter Robot'],
    'CSS Modules': ['Diretório de Serviços', 'Digital Concierge', 'Irius Gastronomia', 'This portfolio'],
    i18next: ['Diretório de Serviços (4 languages)', 'Irius (3 languages)', 'This portfolio (3 languages)'],
    Vite: ['Every project since 2025'],
    Supabase: ['Verto: sign-in, files and security', 'Irius: real-time orders'],
    PostgreSQL: ['Verto', 'Irius Gastronomia'],
    Firebase: ['Coworking'],
    'Node.js': ['Coworking'],
  },

  projetos: {
    titulo: 'Projects that are already working',
    lead: "They aren't exercises: each one solves a real problem for a business, and the people using them are the team there.",
    outros: 'Other work',
    verOnline: 'Live demo',
    codigo: 'Code',
    queroNoHotel: 'I want it for my hotel',
    queroMensagem: "Hi Vanov! I saw Digital Concierge in your portfolio and I'd like to know how to get the digital guide for my hotel.",
    captura: 'Screenshot of {{nome}}',
    status: {
      producao: 'In production',
      aprovado: 'Approved by the chain',
      desenvolvimento: 'In development',
      uso: 'In daily use',
      venda: 'Available for hotels',
      final: 'Final stage',
      cliente: 'Paying client',
      estudo: 'Study project',
    },
    diretorio: {
      nome: 'Diretório de Serviços',
      gancho: "Swan Hotels' guest guide, on the phone, from the QR code in the room.",
      resumo: "Wi-Fi, phone numbers, opening hours, menus, services and hotel policies in 4 languages. It started as Astrolábio, sold to Swan Novo Hamburgo, and the chain hired the app for three more hotels.",
      unidadesTitulo: 'Hotels in the chain',
      unidades: [
        { nome: 'Novo Hamburgo', detalhe: 'Astrolábio, the first version' },
        { nome: 'Porto Alegre', detalhe: 'Swan Generation' },
        { nome: 'Caxias do Sul', detalhe: 'Swan Caxias' },
        { nome: 'Rio Grande', detalhe: 'Swan Rio Grande' },
      ],
      comoFunciona: "One codebase builds each hotel's site, with its own colors, logo and content. Texts and prices live in files the hotel team updates without coding.",
      entregasTitulo: 'Beyond the code',
      entregas: ['Illustrated maintenance manual', '2-hour training for the team', '90-day warranty'],
      concierge: {
        nome: 'Digital Concierge',
        resumo: "The same idea as a product for any hotel: a ready-made guide, adapted to each one's colors and information.",
      },
      telas: "Screens from Swan Caxias's Diretório de Serviços: home, breakfast and restaurant",
    },
    itens: {
      leadManager: {
        nome: 'Verto',
        gancho: 'From the quote request to the event invoice, with no spreadsheet in between.',
        resumo: "A CRM for a hotel's events department, used every day by its team. It recognizes returning clients and shows their history, follows each proposal until it closes, flags when a WhatsApp follow-up is overdue and moves closed events into the billing sheet. It also has conversion and revenue dashboards, a post-event satisfaction survey and LGPD-compliant mailing. The live demo uses fictional data and signs in with one click.",
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: "An order placed on the guest's phone shows up in the kitchen right away.",
        resumo: "The hotel restaurant's digital menu in 3 languages, with room-service orders, payment by PIX or card and a live board for the front desk and kitchen. The owner edits dishes and prices without touching code.",
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page for a robot that paints building facades.',
        resumo: 'My first paid job: the product page for an industrial machine.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Book a room in a few clicks.',
        resumo: 'Sign-in, bookings and an e-mail to the venue. Modernized in 2026.',
      },
    },
  },

  servicos: {
    titulo: 'What I do for you',
    lead: 'I take care of the whole project, and you talk directly to me the entire time.',
    itens: [
      {
        t: 'Custom systems',
        d: 'CRMs, dashboards with charts, admin areas and Excel and PDF reports, shaped around how your business works.',
        exemplo: 'Like Verto',
      },
      {
        t: 'Hotels and restaurants',
        d: 'QR-code guest guides, digital menus, room-service ordering and bookings. I work at a hotel, so I know the operation.',
        exemplo: 'Like Diretório de Serviços',
      },
      {
        t: 'Websites and landing pages',
        d: 'Fast, designed for phones first, in as many languages as you need.',
        exemplo: 'Like this portfolio',
      },
      {
        t: 'Databases and sign-in',
        d: 'User accounts, files and real-time data, with security set up in the database itself.',
        exemplo: 'Like Irius Gastronomia',
      },
    ],
    processoTitulo: 'How I work',
    processo: [
      { t: 'Fixed scope and price', d: "Before I start, we agree on what's included, the deadline and the price." },
      { t: 'You follow along', d: "Frequent updates and a link to test while I'm building." },
      { t: 'The system is yours', d: "You get documented code and I train your team to use it. You're never locked in to me." },
    ],
  },

  sobre: {
    titulo: 'I know the operation from the inside',
    lead: "I've worked in hospitality since 2019, so I see a business's day-to-day problems up close. Several of my projects started that way.",
    foto: 'Photo of Vanov Moretto',
    itens: [
      {
        t: "I've already sold software",
        d: 'The digital guide I built for Swan Novo Hamburgo became Diretório de Serviços, which the chain hired for three more hotels.',
      },
      {
        t: 'I handle the whole system',
        d: 'From the database to the screen: sign-in, files, real-time data and the interface your team uses.',
      },
      {
        t: 'Used to tight deadlines',
        d: "I'm an events coordinator and deal with tight deadlines and demanding clients every day.",
      },
      {
        t: 'I work in three languages',
        d: 'Native Portuguese, fluent English and Spanish. I spent 3 years serving guests from all over the world on Norwegian Cruise Line ships.',
      },
    ],
    stackTitulo: 'Tools I use',
    orbita: 'Technologies I use',
    nucleo: 'My stack',
    dica: 'Hover over or tap a technology',
    legendaFront: 'Interface',
    legendaBack: 'Data and server',
  },

  orcamento: {
    titulo: 'Tell me what you need',
    lead: "It takes a minute. The message opens ready in your WhatsApp or e-mail, and I'll reply with a plan and a price.",
    nome: 'Your name',
    nomeExemplo: 'John Smith',
    negocio: 'Your business',
    negocioExemplo: 'Company name or industry',
    precisa: 'What you need',
    prazo: 'When you need it',
    prazos: { semPressa: 'No rush', mes: 'Within a month', urgente: "It's urgent" },
    detalhes: 'Tell me a bit more',
    detalhesExemplo: 'Tell me how I can help',
    enviarWhatsapp: 'Send on WhatsApp',
    enviarEmail: 'Send by e-mail',
    faltam: "Add your name and a few words about what you need so I can get back to you.",
    ou: 'Prefer another channel?',
    mensagem: {
      abertura: "Hi Vanov! I'd like a quote.",
      nome: 'Name',
      negocio: 'Business',
      precisa: 'I need',
      prazo: 'Deadline',
      detalhes: 'Details',
      assunto: 'Quote request',
    },
  },

  contato: {
    endereco: 'hello@vanovmoretto.com',
    whatsappMensagem: "Hi Vanov! I saw your portfolio and I'd like to talk about a project.",
  },
  social: { email: 'Email', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Full-stack developer.',
}

export default en
