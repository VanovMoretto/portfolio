// ✏️ TUDO que aparece no site fica aqui. Para atualizar o portfólio, edite só este arquivo.

export const perfil = {
  nome: 'Vanov Moretto',
  titulo: 'Desenvolvedor front-end',
  subtitulo: 'Interfaces em React e TypeScript. Full-stack a caminho.',
  github: 'https://github.com/VanovMoretto',
  linkedin: 'https://www.linkedin.com/in/vanovmoretto/',
  email: 'vanovmoretto@gmail.com',
  sobreTitulo: 'Conheço a operação por dentro',
  sobreLead:
    'Trabalho com eventos, então sei como é o hóspede perdido, o cardápio que ninguém entende e a prospecção que some dentro de uma planilha. Eu transformo isso em interface.',
  sobre: [
    {
      t: 'Já vendi software',
      d: 'Um guia digital que fiz para hotel foi comprado pelo Swan Novo Hamburgo e está no ar. Depois criei uma versão em TypeScript para outro hotel da rede.',
    },
    {
      t: 'Cliente de verdade, prazo de verdade',
      d: 'Na rotina de eventos, prazo curto e cliente exigente são normais. Levo essa calma sob pressão e essa escuta para dentro de um time.',
    },
    {
      t: 'Agora, o lado do servidor',
      d: 'Estou começando um CRM com Node e Supabase para organizar a prospecção do meu próprio trabalho. Será o primeiro projeto full-stack daqui.',
    },
  ],
}

// "usos" aparece no centro do astrolábio quando você passa o mouse na tecnologia
export type Tech = { nome: string; cor: string; usos: string[] }

// Anel de dentro: o que uso no dia a dia
export const front: Tech[] = [
  { nome: 'React', cor: '#61dafb', usos: ['Astrolábio', 'Astrolábio Gen', 'RestMenu', 'Coworking', 'PainterRobot'] },
  { nome: 'TypeScript', cor: '#4b8bf5', usos: ['Astrolábio Gen', 'RestMenu', 'CRM (em breve)'] },
  { nome: 'JavaScript', cor: '#f7df1e', usos: ['Astrolábio'] }, // ✏️ complete com os outros
  { nome: 'HTML', cor: '#ff7a45', usos: ['Todos os projetos'] },
  { nome: 'CSS Modules', cor: '#a78bfa', usos: ['Astrolábio', 'Astrolábio Gen', 'CRM (em breve)'] },
  { nome: 'Vite', cor: '#c084fc', usos: ['Astrolábio', 'Astrolábio Gen', 'RestMenu'] },
]

// Anel de fora: back-end, a caminho
export const back: Tech[] = [
  { nome: 'Node.js', cor: '#7ec26f', usos: ['CRM (em breve)'] },
  { nome: 'Supabase', cor: '#3ecf8e', usos: ['CRM (em breve)'] },
  { nome: 'Firebase', cor: '#ffca28', usos: ['Coworking'] },
]

const extras: Tech[] = [{ nome: 'CSS', cor: '#a78bfa', usos: [] }]
export const corDa = (nome: string) => [...front, ...back, ...extras].find((t) => t.nome === nome)?.cor ?? '#7fb0ff'

export type Status = 'producao' | 'andamento' | 'breve' | 'antigo'
// texto vazio = o card não mostra etiqueta de status
export const statusLabel: Record<Status, string> = { producao: 'Em produção', andamento: 'Em andamento', breve: 'Em breve', antigo: '' }

export type Projeto = {
  nome: string
  gancho: string // a frase que prende o olhar
  resumo: string // o que é, de forma concreta
  tags: string[]
  status: Status
  destaque?: boolean
  repo?: string
  demo?: string
  imagem?: string // ✏️ ex.: 'projetos/astrolabio.webp' (arquivo em public/projetos/)
}

const gh = 'https://github.com/VanovMoretto/'

export const projetos: Projeto[] = [
  {
    nome: 'Astrolábio',
    gancho: 'O astrolábio guiava navegantes pelo céu. Este guia o hóspede pelo hotel.',
    resumo: 'Guia digital leve e direto, com as informações do hotel organizadas em acordeões, na palma da mão. Vendido ao Swan Novo Hamburgo, onde está no ar.',
    tags: ['React', 'Vite', 'CSS Modules'],
    status: 'producao',
    destaque: true,
    repo: gh + 'astrolabio',
    demo: 'https://astrolabionh.swanhoteis.com.br/',
  },
  {
    nome: 'Astrolábio Gen',
    gancho: 'A versão 2: tudo o que o primeiro Astrolábio me ensinou, agora em TypeScript.',
    resumo: 'Guia do hóspede em 4 idiomas (espanhol, inglês, português e chinês), com frigobar e guia SKY em modais e textos fáceis de trocar. Feito para outro hotel da rede.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    status: 'andamento',
    destaque: true,
    repo: gh + 'astrolabioGen',
    // demo: 'https://vanovmoretto.github.io/astrolabioGen/', // ✏️ libere depois da venda
  },
  {
    nome: 'CRM de prospecção',
    gancho: 'Para a prospecção parar de se perder numa planilha.',
    resumo: 'Um CRM para organizar prospecção e clientes no meu trabalho com eventos. Nasce de uma dor real e vai usar TypeScript, Node e Supabase.',
    tags: ['TypeScript', 'Node.js', 'Supabase', 'CSS Modules'],
    status: 'breve',
  },
  {
    nome: 'RestMenu',
    gancho: 'Um cardápio requintado que cabe no celular.',
    resumo: 'Cardápio digital multilíngue do restaurante Irius Gastronomia, pensado também para room service de hotel. Leva a complexidade de um menu sofisticado para a tela.',
    tags: ['React', 'TypeScript', 'Vite'],
    status: 'andamento',
    repo: gh + 'RestMenu',
  },
  {
    nome: 'Coworking',
    gancho: 'Reservar uma sala em poucos cliques.',
    resumo: 'Sistema de reservas com quatro salas e horários, conta de usuário, histórico de reservas e pagamentos, avaliação do ambiente e canal de contato. Firebase por trás, no ar na Vercel.',
    tags: ['React', 'Firebase', 'CSS'],
    status: 'antigo',
    repo: gh + 'Coworking',
    demo: 'https://dutra-coworking.vercel.app',
  },
  {
    nome: 'PainterRobot',
    gancho: 'Um dos meus primeiros projetos em React.',
    resumo: '✏️ Conte em uma frase o que ele faz. Publicado na Vercel.',
    tags: ['React'],
    status: 'antigo',
    repo: gh + 'PainterRobot',
    demo: 'https://painter-robot.vercel.app',
  },
]
