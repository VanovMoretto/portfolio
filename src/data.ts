export const perfil = {
  nome: 'Vanov Moretto',
  github: 'https://github.com/VanovMoretto',
  linkedin: 'https://www.linkedin.com/in/vanovmoretto/',
  email: 'vanovmoretto@gmail.com',
}

export type Tech = { nome: string; cor: string }

export const front: Tech[] = [
  { nome: 'React', cor: '#61dafb' },
  { nome: 'TypeScript', cor: '#4b8bf5' },
  { nome: 'JavaScript', cor: '#f7df1e' },
  { nome: 'i18next', cor: '#26a69a' },
  { nome: 'CSS Modules', cor: '#a78bfa' },
  { nome: 'Vite', cor: '#c084fc' },
]

export const back: Tech[] = [
  { nome: 'Firebase', cor: '#ffca28' },
  { nome: 'Node.js', cor: '#7ec26f' },
  { nome: 'Supabase', cor: '#3ecf8e' },
]

const extras: Tech[] = [{ nome: 'CSS', cor: '#a78bfa' }]
export const corDa = (nome: string) => [...front, ...back, ...extras].find((t) => t.nome === nome)?.cor ?? '#7fb0ff'

export type Status = 'producao' | 'concluido' | 'venda' | 'andamento' | 'breve' | 'antigo'

export type ProjetoId = 'astrolabio' | 'astrolabioV1' | 'astrolabioGen' | 'digitalConcierge' | 'mycrm' | 'restmenu' | 'coworking'

export type Etapa = { id: ProjetoId; status: Status; repo?: string; demo?: string }

export type Projeto = {
  id: ProjetoId
  tags: string[]
  status: Status
  repo?: string
  demo?: string
  imagem?: string // caminho em public/, ex.: 'projetos/mycrm.webp'
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
      { id: 'astrolabioV1', status: 'producao', repo: gh + 'astrolabio', demo: 'https://astrolabionh.swanhoteis.com.br/' },
      {
        id: 'astrolabioGen',
        status: 'concluido',
        repo: gh + 'astrolabioGen',
        // demo: 'https://vanovmoretto.github.io/astrolabioGen/', // liberar depois da venda
      },
      { id: 'digitalConcierge', status: 'venda', repo: gh + 'digital-concierge', demo: 'https://vanovmoretto.github.io/digital-concierge/' },
    ],
  },
  {
    id: 'mycrm',
    tags: ['React', 'TypeScript', 'Vite'],
    status: 'andamento',
    repo: gh + 'myCRM',
    imagem: 'projetos/mycrm.webp',
  },
  {
    id: 'restmenu',
    tags: ['React', 'TypeScript', 'i18next', 'CSS Modules'],
    status: 'andamento',
    repo: gh + 'RestMenu',
    demo: 'https://vanovmoretto.github.io/RestMenu/',
    imagem: 'projetos/restmenu.webp',
  },
]

export const outrosProjetos: Projeto[] = [
  {
    id: 'coworking',
    tags: ['React', 'TypeScript', 'Firebase'],
    status: 'antigo',
    repo: gh + 'Coworking',
    demo: 'https://dutra-coworking.vercel.app',
    imagem: 'projetos/coworking.webp',
  },
]
