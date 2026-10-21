import type { Mensagens } from './pt'

const en: Mensagens = {
  meta: {
    titulo: 'Vanov Moretto | Front-end Developer',
    descricao: 'Vanov Moretto, front-end developer (React and TypeScript) on the way to full-stack.',
  },
  nav: { rotulo: 'Main navigation', projetos: 'Projects', sobre: 'About', contato: 'Contact' },
  tema: { rotulo: 'Light theme', escuro: 'Dark theme', claro: 'Light theme' },
  idioma: { rotulo: 'Language', escolher: 'Choose language' },

  hero: {
    selo: 'Open to opportunities in tech',
    cargo: 'Front-end developer',
    subtitulo: 'Interfaces in React and TypeScript. Full-stack on the way.',
    verProjetos: 'See projects',
    orbita: 'Technologies I use',
    nucleo: 'My stack',
    dica: 'Hover over or tap a technology',
    legendaFront: 'Front-end, every day',
    legendaBack: 'Back-end, growing',
  },

  stack: {
    React: ['Astrolábio', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    TypeScript: ['Astrolábio Gen', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    JavaScript: ['Astrolábio'],
    i18next: ['Astrolábio (4 languages)', 'Digital Concierge', 'RestMenu (3 languages)', 'This portfolio'],
    'CSS Modules': ['Astrolábio', 'Digital Concierge', 'RestMenu', 'This portfolio'],
    Vite: ['Astrolábio', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    Firebase: ['Coworking: auth, Firestore and Cloud Functions'],
    'Node.js': ['Coworking Cloud Functions', 'myCRM (coming soon)'],
    Supabase: ['myCRM (coming soon)'],
  },

  projetos: {
    titulo: 'Projects',
    lead: 'One of them was sold, is in use and became a product. The others solve problems I see up close at work.',
    outros: 'Other projects',
    verOnline: 'Live demo',
    codigo: 'Code',
    captura: 'Screenshot of {{nome}}',
    status: {
      producao: 'In production',
      concluido: 'Completed',
      venda: 'Available for hotels',
      andamento: 'In progress',
      breve: 'Coming soon',
      antigo: '',
    },
    itens: {
      astrolabio: {
        nome: 'Astrolábio',
        gancho: 'The astrolabe guided sailors by the stars. This one guides guests through the hotel.',
        resumo: 'It started as a digital guide sold to a hotel and became a product. Each version solved the limits of the one before.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Sold to Swan Novo Hamburgo, where it is live. Everything a guest needs, in accordions, in 4 languages.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Rewritten in TypeScript for another hotel in the chain, with the minibar and SKY TV guide in modals and an interactive phone list.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: "The white-label product: one codebase that becomes any hotel's guide by swapping a typed config file, with colors, contacts and sections toggled by feature flags. It's the demo I show to interested hotels.",
      },
      mycrm: {
        nome: 'myCRM',
        gancho: 'So event prospecting stops getting lost in a spreadsheet.',
        resumo: "A CRM for a hotel's events team: monthly KPIs, revenue by sector (room rental, lodging, F&B, coffee break), a calendar of events and deadlines, and recorded loss reasons. Next step: a Supabase database.",
      },
      restmenu: {
        nome: 'RestMenu',
        gancho: 'A refined menu that fits in your pocket.',
        resumo: 'Digital menu for the Irius Gastronomia restaurant in 3 languages, with category tabs, opening hours and directions. Also designed for hotel room service.',
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
    lead: 'I work in events, so I know the lost hotel guest, the menu nobody understands and the leads that vanish inside a spreadsheet. I turn that into interfaces.',
    itens: [
      {
        t: "I've already sold software",
        d: 'A digital guide I built was bought by Swan Novo Hamburgo and is live. It led to a TypeScript version for another hotel in the chain and, later, a white-label product ready for any hotel.',
      },
      {
        t: 'Real clients, real deadlines',
        d: 'In events, tight deadlines and demanding clients are routine. I bring that calm under pressure, and that habit of listening, into a team.',
      },
      {
        t: 'Now, the server side',
        d: "I've used Firebase (auth, database and Cloud Functions) in Coworking. Now I'm moving myCRM to Supabase, to organize the prospecting in my own job.",
      },
    ],
  },

  contato: {
    chamada: 'Shall we build something together?',
    lead: "I'm open to junior front-end and full-stack developer roles. Reach out wherever works best for you.",
  },
  social: { email: 'Email' },
  rodape: '© {{ano}} {{nome}}. Built with React, TypeScript, i18next and CSS Modules.',
}

export default en
