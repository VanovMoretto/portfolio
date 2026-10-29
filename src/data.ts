export const perfil = {
  nome: 'Vanov Moretto',
  github: 'https://github.com/VanovMoretto',
  linkedin: 'https://www.linkedin.com/in/vanovmoretto/',
  email: 'vanovmoretto@gmail.com',
  whatsapp: '5514991190427',
  whatsappVisivel: '+55 14 99119-0427',
}

export const linkWhatsApp = (mensagem: string) => `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(mensagem)}`

export type Tech = { nome: string; cor: string }

export const front: Tech[] = [
  { nome: 'React', cor: '#61dafb' },
  { nome: 'TypeScript', cor: '#4b8bf5' },
  { nome: 'Tailwind CSS', cor: '#38bdf8' },
  { nome: 'JavaScript', cor: '#f7df1e' },
  { nome: 'CSS Modules', cor: '#a78bfa' },
  { nome: 'i18next', cor: '#26a69a' },
  { nome: 'Vite', cor: '#c084fc' },
]

export const back: Tech[] = [
  { nome: 'Supabase', cor: '#3ecf8e' },
  { nome: 'PostgreSQL', cor: '#6b9fd8' },
  { nome: 'Firebase', cor: '#ffca28' },
  { nome: 'Node.js', cor: '#7ec26f' },
]

const extras: Tech[] = [
  { nome: 'CSS', cor: '#a78bfa' },
  { nome: 'Recharts', cor: '#f472b6' },
  { nome: 'Realtime', cor: '#3ecf8e' },
]
export const corDa = (nome: string) => [...front, ...back, ...extras].find((t) => t.nome === nome)?.cor ?? '#7fb0ff'

// números do hero: só fatos que dá para comprovar
export const numeros = [
  { id: 'quartos', valor: '160' },
  { id: 'hoteis', valor: '+3' },
  { id: 'idiomas', valor: '4' },
] as const

export type NumeroId = (typeof numeros)[number]['id']

export type Status = 'producao' | 'uso' | 'concluido' | 'venda' | 'final' | 'andamento' | 'breve' | 'antigo' | 'cliente'

export type ProjetoId =
  | 'astrolabio'
  | 'astrolabioV1'
  | 'astrolabioGen'
  | 'digitalConcierge'
  | 'leadManager'
  | 'restmenu'
  | 'coworking'
  | 'painterRobot'

export type Etapa = { id: ProjetoId; status: Status; repo?: string; demo?: string; pedido?: boolean }

export type Projeto = {
  id: ProjetoId
  tags: string[]
  status: Status
  repo?: string
  demo?: string
  restrito?: boolean // sem demo pública: sistema interno com dados reais
  imagem?: string // caminho em public/, ex.: 'projetos/lead-manager.webp'
  etapas?: Etapa[]
}

const gh = 'https://github.com/VanovMoretto/'

export const projetos: Projeto[] = [
  {
    id: 'astrolabio',
    tags: ['React', 'TypeScript', 'i18next', 'Vite', 'CSS Modules'],
    status: 'producao',
    imagem: 'projetos/astrolabio-evolucao.webp',
    etapas: [
      // v1 e Gen: só imagem e texto (contrato de cessão do v1)
      { id: 'astrolabioV1', status: 'producao' },
      { id: 'astrolabioGen', status: 'concluido' },
      { id: 'digitalConcierge', status: 'venda', demo: 'https://digital-concierge.pages.dev/', pedido: true },
    ],
  },
  {
    id: 'leadManager',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Recharts'],
    status: 'uso',
    repo: gh + 'lead-manager',
    demo: 'https://lead-manager-demo.vercel.app/login',
    imagem: 'projetos/lead-manager.webp',
  },
  {
    id: 'restmenu',
    tags: ['React', 'TypeScript', 'Supabase', 'Realtime', 'i18next'],
    status: 'final',
    repo: gh + 'RestMenu',
    demo: 'https://vanovmoretto.github.io/RestMenu/',
    imagem: 'projetos/restmenu.webp',
  },
]

export const outrosProjetos: Projeto[] = [
  {
    id: 'painterRobot',
    tags: ['React', 'JavaScript', 'CSS'],
    status: 'cliente',
    repo: gh + 'PainterRobot',
    demo: 'https://painter-robot.vercel.app',
    imagem: 'projetos/painter-robot.webp',
  },
  {
    id: 'coworking',
    tags: ['React', 'TypeScript', 'Firebase'],
    status: 'antigo',
    repo: gh + 'Coworking',
    demo: 'https://dutra-coworking.vercel.app',
    imagem: 'projetos/coworking.webp',
  },
]
