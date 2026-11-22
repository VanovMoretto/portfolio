export const perfil = {
  nome: 'Vanov Moretto',
  github: 'https://github.com/VanovMoretto',
  linkedin: 'https://www.linkedin.com/in/vanovmoretto/',
  whatsapp: '5514991190427',
  // caminho em public/, ex.: 'vanov.webp'. Sem foto, aparece o monograma.
  foto: 'vanov.webp' as string | undefined,
}

export const linkWhatsApp = (mensagem: string) => `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(mensagem)}`

export type Tech = { nome: string; cor: string }

export const front: Tech[] = [
  { nome: 'React', cor: '#1fa9d6' },
  { nome: 'TypeScript', cor: '#3178c6' },
  { nome: 'Tailwind CSS', cor: '#0ea5c6' },
  { nome: 'JavaScript', cor: '#e0b400' },
  { nome: 'CSS Modules', cor: '#7c5cf0' },
  { nome: 'i18next', cor: '#1f9e8f' },
  { nome: 'Vite', cor: '#9b5cf6' },
]

export const back: Tech[] = [
  { nome: 'Supabase', cor: '#2fb37b' },
  { nome: 'PostgreSQL', cor: '#336791' },
  { nome: 'Firebase', cor: '#f5a300' },
  { nome: 'Node.js', cor: '#5fa04e' },
]

export type Status = 'producao' | 'aprovado' | 'desenvolvimento' | 'uso' | 'venda' | 'final' | 'cliente' | 'estudo'

export const necessidades = ['site', 'sistema', 'cardapio', 'guia', 'outro'] as const
export type Necessidade = (typeof necessidades)[number]

export const prazos = ['semPressa', 'mes', 'urgente'] as const
export type Prazo = (typeof prazos)[number]

const gh = 'https://github.com/VanovMoretto/'

// Diretório de Serviços: só imagens e texto (sem demo nem código, por contrato)
export const diretorio = {
  tags: ['React', 'TypeScript', 'i18next', 'Vite', 'CSS Modules'],
  unidades: ['producao', 'aprovado', 'aprovado', 'desenvolvimento'] as Status[],
  telas: [
    'projetos/diretorio-caxias/app-inicio.webp',
    'projetos/diretorio-caxias/app-cafe.webp',
    'projetos/diretorio-caxias/app-restaurante.webp',
  ],
  concierge: { status: 'venda' as Status, demo: 'https://digital-concierge-5rj.pages.dev/' },
}

export type ProjetoId = 'leadManager' | 'restmenu' | 'painterRobot' | 'coworking'

export type Projeto = {
  id: ProjetoId
  tags: string[]
  status: Status
  repo?: string
  demo?: string
  imagem: string
}

export const projetos: Projeto[] = [
  {
    id: 'leadManager',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    status: 'uso',
    repo: gh + 'lead-manager',
    demo: 'https://lead-manager-demo.vercel.app/login',
    imagem: 'projetos/lead-manager.webp',
  },
  {
    id: 'restmenu',
    tags: ['React', 'TypeScript', 'Supabase', 'i18next'],
    status: 'final',
    repo: gh + 'RestMenu',
    demo: 'https://vanovmoretto.github.io/RestMenu/',
    imagem: 'projetos/restmenu.webp',
  },
]

export const outrosProjetos: Projeto[] = [
  {
    id: 'painterRobot',
    tags: ['React', 'JavaScript'],
    status: 'cliente',
    repo: gh + 'PainterRobot',
    demo: 'https://painter-robot.vercel.app',
    imagem: 'projetos/painter-robot.webp',
  },
  {
    id: 'coworking',
    tags: ['React', 'TypeScript', 'Firebase'],
    status: 'estudo',
    repo: gh + 'Coworking',
    demo: 'https://dutra-coworking.vercel.app',
    imagem: 'projetos/coworking.webp',
  },
]
