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
    subtitulo: 'Web apps for hotels, restaurants and small businesses, from the database to the interface. Software that is already in use, not just sitting on GitHub.',
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
    lead: 'From the first sketch to a live product. You talk directly to the person writing the code.',
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
    lead: 'Two of them run every day at a real hotel and the third is in its final stage. One was sold and became a product.',
    outros: 'Other projects',
    verOnline: 'Live demo',
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
        resumo: 'It started as a digital guide sold to a hotel and became a product. Each version solved the limits of the one before.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Sold to Swan Novo Hamburgo, where it is live in about 160 rooms. Guests open it from a QR code and find everything in accordions, in 4 languages.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Rewritten in TypeScript for another hotel in the chain, with the minibar and a searchable SKY TV guide in modals and an interactive phone list.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: "The white-label product: one codebase that becomes any hotel's guide by swapping a typed config file. Three more hotels in the chain are in approval.",
      },
      leadManager: {
        nome: 'Lead Manager',
        gancho: 'Event sales left the spreadsheet behind and got numbers to show the board.',
        resumo: "Sales CRM for the hotel's events team, used every day by the team and the general manager. Proposal pipeline, client history matched by phone, email or company ID, monthly revenue in 3 layers, Excel, CSV and PDF exports and privacy opt-out.",
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'From the menu on your phone to the order in the kitchen, in real time.',
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
    lead: "I've worked in hospitality since 2019. I know the lost hotel guest, the menu nobody understands and the client who vanishes inside a spreadsheet. I turn that into software.",
    itens: [
      {
        t: "I've already sold software",
        d: 'A digital guide I built was bought by Swan Novo Hamburgo and is live. It led to a TypeScript version and a white-label product, now in approval for three more hotels in the chain.',
      },
      {
        t: 'From the database to the interface',
        d: 'In Lead Manager and Irius I handle everything: a Postgres database on Supabase with Row Level Security, auth, file storage, real-time data and the React and TypeScript interface.',
      },
      {
        t: 'Real clients, real deadlines',
        d: "I'm an events coordinator. Tight deadlines and demanding clients are part of my routine, and I bring that calm and that habit of listening to every project.",
      },
      {
        t: "I speak your clients' language",
        d: 'Native Portuguese, fluent English and Spanish. I spent 3 years serving guests from all over the world on Norwegian Cruise Line ships.',
      },
    ],
  },

  contato: {
    chamada: 'Have a project in mind?',
    lead: "Tell me what you need and I'll reply with a plan and a quote. I'm also open to full-stack developer roles.",
    email: 'Send an email',
  },
  social: { email: 'Email' },
  rodape: '© {{ano}} {{nome}}. Built with React, TypeScript, i18next and CSS Modules.',
}

export default en
