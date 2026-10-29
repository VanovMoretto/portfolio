import type { Mensagens } from './pt'

const en: Mensagens = {
  meta: {
    titulo: 'Vanov Moretto | Full-Stack React Developer',
    descricao: 'Vanov Moretto, full-stack developer (React, TypeScript and Supabase). Web apps for hotels, restaurants and small businesses.',
  },
  nav: { rotulo: 'Main navigation', servicos: 'Services', projetos: 'Projects', sobre: 'About', contato: 'Contact' },
  tema: { rotulo: 'Light theme', escuro: 'Dark theme', claro: 'Light theme' },
  idioma: { rotulo: 'Language', escolher: 'Choose language' },

  hero: {
    selo: 'Available for freelance projects',
    cargo: 'Full-Stack React Developer',
    subtitulo: "I build web apps for hotels, restaurants and small businesses. Some of them are already part of a hotel's daily routine.",
    contratar: "Let's talk",
    verProjetos: 'See projects',
    numeros: {
      quartos: 'hotel rooms using my digital guide',
      hoteis: 'more hotels in the chain in approval',
      idiomas: 'languages in the guest guide',
    },
    orbita: 'Technologies I use',
    nucleo: 'My stack',
    dica: 'Hover over or tap a technology',
    legendaFront: 'Front-end',
    legendaBack: 'Back-end and data',
  },

  stack: {
    React: ['Astrolábio', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Digital Concierge', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'This portfolio'],
    'Tailwind CSS': ['Lead Manager: the whole app'],
    JavaScript: ['Astrolábio v1', 'Painter Robot'],
    'CSS Modules': ['Astrolábio', 'Digital Concierge', 'Irius Gastronomia', 'This portfolio'],
    i18next: ['Astrolábio (4 languages)', 'Irius (3 languages)', 'This portfolio (3 languages)'],
    Vite: ['Every project since 2025'],
    Supabase: ['Lead Manager: Auth, Storage and RLS', 'Irius: real-time orders'],
    PostgreSQL: ['Lead Manager: 15 migrations, views and RLS', 'Irius: security definer functions'],
    Firebase: ['Coworking: Auth, Firestore and Cloud Functions'],
    'Node.js': ['Coworking Cloud Functions'],
  },

  servicos: {
    titulo: 'What I can build for you',
    lead: 'I take care of the whole project, and you talk directly to me the entire time.',
    itens: [
      {
        t: 'Web apps and dashboards',
        d: 'Custom tools in React and TypeScript: CRMs, dashboards with charts, admin panels and Excel and PDF exports.',
      },
      {
        t: 'Hotels and restaurants',
        d: 'QR code guest guides, digital menus, room-service ordering and bookings. I work at a hotel, so I know how the operation runs.',
      },
      {
        t: 'Supabase back ends',
        d: 'Postgres database, auth, file uploads and real-time data, with security enforced in the database (Row Level Security).',
      },
      {
        t: 'Multilingual sites and landing pages',
        d: 'Fast, mobile-first interfaces in as many languages as you need, with light and dark themes and accessibility in mind.',
      },
    ],
    processoTitulo: 'How I work',
    processo: [
      { t: 'Clear scope and price', d: 'Before I start, we agree on what is included, the deadline and the cost.' },
      { t: 'You see the progress', d: 'Frequent updates and a link to try things out while I build.' },
      { t: 'Your code, documented', d: "You get the code with a README, so you're never locked in." },
    ],
  },

  projetos: {
    titulo: 'Projects',
    lead: 'Two of them run every day at a hotel and the third is in its final stage. One was sold and became a product.',
    outros: 'Other projects',
    verOnline: 'Live demo',
    queroNoHotel: 'I want it for my hotel',
    queroMensagem: "Hi Vanov! I saw Digital Concierge in your portfolio and I'd like to know how to get the digital guide for my hotel.",
    codigo: 'Code',
    restrito: 'Internal tool with real hotel data',
    captura: 'Screenshot of {{nome}}',
    status: {
      producao: 'In production',
      uso: 'In daily use',
      concluido: 'Completed',
      venda: 'Available for hotels',
      final: 'Final stage',
      andamento: 'In progress',
      breve: 'Coming soon',
      antigo: 'Study project',
      cliente: 'Paid client work',
    },
    itens: {
      astrolabio: {
        nome: 'Astrolábio',
        gancho: 'The astrolabe guided sailors by the stars. This one guides guests through the hotel.',
        resumo: 'It started as a digital guide sold to a hotel. It now has three versions, one of them ready to be sold to other hotels.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'A digital guest guide sold to Swan Novo Hamburgo, in use in about 160 rooms and available in 4 languages.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'A new version, rewritten in TypeScript with its own visual identity, built for another hotel in the chain.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: "The white-label product: one codebase that becomes any hotel's guide by swapping a typed config file. Three more hotels in the chain are in approval.",
      },
      leadManager: {
        nome: 'Lead Manager',
        gancho: 'Event sales left the spreadsheet behind and got numbers to show the board.',
        resumo: "Sales CRM for the hotel's events team, used every day by the team and the general manager. Proposal pipeline, client history matched by phone, email or company ID, monthly revenue in 3 layers, Excel, CSV and PDF exports and privacy opt-out. The live demo uses sample data and opens with one click.",
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: "An order placed on the guest's phone shows up in the kitchen right away.",
        resumo: "Digital menu for the hotel's restaurant in 3 languages, with room-service ordering, PIX or card payment and a live board for front desk and kitchen with sound alerts and thermal receipts. The owner edits dishes and prices without touching code.",
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page for a robot that paints building facades.',
        resumo: 'My first paid job: the product page for an industrial robot, with sections for solutions, hiring and FAQs.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Book a room in a few clicks.',
        resumo: 'My first full-stack project: sign-in with Firebase Auth, bookings in Firestore and a Cloud Function that validates each request on the server and emails the venue. Modernized in 2026 to React 19, TypeScript and Vite.',
      },
    },
  },

  sobre: {
    titulo: 'I know the operation from the inside',
    lead: "I've worked in hospitality since 2019, so I see a hotel's day-to-day problems up close. Several of my projects started that way.",
    itens: [
      {
        t: "I've already sold software",
        d: 'A digital guide I built was bought by Swan Novo Hamburgo and is live. It led to a TypeScript version and a white-label product, now in approval for three more hotels in the chain.',
      },
      {
        t: 'I handle the whole system',
        d: 'In Lead Manager and Irius I handle everything: a Postgres database on Supabase with Row Level Security, auth, file storage, real-time data and the React and TypeScript interface.',
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
  },

  contato: {
    chamada: 'Have a project in mind?',
    lead: "Tell me what you need and I'll reply with a plan and a quote. I'm also open to full-stack developer roles.",
    email: 'Send an email',
    whatsapp: 'Message me on WhatsApp',
    whatsappMensagem: "Hi Vanov! I saw your portfolio and I'd like to talk about a project.",
  },
  social: { email: 'Email', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Built with React, TypeScript, i18next and CSS Modules.',
}

export default en
