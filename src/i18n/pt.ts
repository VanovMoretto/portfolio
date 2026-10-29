const pt = {
  meta: {
    titulo: 'Vanov Moretto | Desenvolvedor Full-Stack React',
    descricao: 'Vanov Moretto, desenvolvedor full-stack (React, TypeScript e Supabase). Web apps para hotéis, restaurantes e pequenas empresas.',
  },
  nav: { rotulo: 'Navegação principal', servicos: 'Serviços', projetos: 'Projetos', sobre: 'Sobre', contato: 'Contato' },
  tema: { rotulo: 'Tema claro', escuro: 'Tema escuro', claro: 'Tema claro' },
  idioma: { rotulo: 'Idioma', escolher: 'Escolher idioma' },

  hero: {
    selo: 'Disponível para projetos freelance',
    cargo: 'Desenvolvedor Full-Stack React',
    subtitulo: 'Web apps para hotéis, restaurantes e pequenas empresas, do banco de dados à interface. Software que já está em uso, não só no GitHub.',
    contratar: 'Vamos conversar',
    verProjetos: 'Ver projetos',
    numeros: {
      quartos: 'quartos com o meu guia digital no ar',
      hoteis: 'hotéis da rede em aprovação',
      idiomas: 'idiomas no guia do hóspede',
    },
    orbita: 'Tecnologias que uso',
    nucleo: 'Minha stack',
    dica: 'Passe o mouse ou toque em uma tecnologia',
    legendaFront: 'Front-end',
    legendaBack: 'Back-end e dados',
  },

  stack: {
    React: ['Astrolábio', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Digital Concierge', 'Lead Manager', 'Irius Gastronomia', 'Coworking', 'Este portfólio'],
    'Tailwind CSS': ['Lead Manager: todo o sistema'],
    JavaScript: ['Astrolábio v1', 'Painter Robot'],
    'CSS Modules': ['Astrolábio', 'Digital Concierge', 'Irius Gastronomia', 'Este portfólio'],
    i18next: ['Astrolábio (4 idiomas)', 'Irius (3 idiomas)', 'Este portfólio (3 idiomas)'],
    Vite: ['Todos os projetos desde 2025'],
    Supabase: ['Lead Manager: Auth, Storage e RLS', 'Irius: pedidos em tempo real'],
    PostgreSQL: ['Lead Manager: 15 migrações, views e RLS', 'Irius: funções security definer'],
    Firebase: ['Coworking: Auth, Firestore e Cloud Functions'],
    'Node.js': ['Cloud Functions do Coworking'],
  },

  servicos: {
    titulo: 'O que eu faço por você',
    lead: 'Do primeiro rascunho ao sistema no ar. Você fala com quem escreve o código, sem intermediários.',
    itens: [
      {
        t: 'Web apps e painéis',
        d: 'Sistemas sob medida em React e TypeScript: CRMs, dashboards com gráficos, áreas de admin e exportação para Excel e PDF.',
      },
      {
        t: 'Hotelaria e restaurantes',
        d: 'Guia digital do hóspede por QR Code, cardápio digital, pedidos de room service e reservas. Eu trabalho em hotel e conheço a operação.',
      },
      {
        t: 'Back-end com Supabase',
        d: 'Banco Postgres, login, upload de arquivos e dados em tempo real, com a segurança no banco (Row Level Security).',
      },
      {
        t: 'Sites multilíngues e landing pages',
        d: 'Interfaces rápidas e mobile-first, em quantos idiomas você precisar, com tema claro e escuro e acessibilidade.',
      },
    ],
    processoTitulo: 'Como eu trabalho',
    processo: [
      { t: 'Escopo e preço fechados', d: 'Antes de começar, combinamos o que entra, o prazo e o valor.' },
      { t: 'Você acompanha tudo', d: 'Atualizações frequentes e um link para testar enquanto eu construo.' },
      { t: 'Código seu, documentado', d: 'Entrego o código com README. Você nunca fica preso a mim.' },
    ],
  },

  projetos: {
    titulo: 'Projetos',
    lead: 'Dois já rodam no dia a dia de um hotel de verdade e o terceiro está na reta final. Um deles foi vendido e virou produto.',
    outros: 'Outros projetos',
    verOnline: 'Ver online',
    queroNoHotel: 'Quero no meu hotel',
    queroMensagem: 'Olá, Vanov! Vi o Digital Concierge no seu portfólio e quero saber como ter o guia digital no meu hotel.',
    codigo: 'Código',
    restrito: 'Uso interno, com dados reais do hotel',
    captura: 'Captura de tela do {{nome}}',
    // vazio = sem etiqueta
    status: {
      producao: 'Em produção',
      uso: 'Em uso diário',
      concluido: 'Concluído',
      venda: 'Disponível para hotéis',
      final: 'Reta final',
      andamento: 'Em andamento',
      breve: 'Em breve',
      antigo: 'Projeto de estudo',
      cliente: 'Cliente pagante',
    },
    itens: {
      astrolabio: {
        nome: 'Astrolábio',
        gancho: 'O astrolábio guiava navegantes pelo céu. Este guia o hóspede pelo hotel.',
        resumo: 'Começou como um guia digital vendido a um hotel e virou produto. Cada versão resolveu o limite da anterior.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Guia digital do hóspede vendido ao Swan Novo Hamburgo, em uso nos cerca de 160 quartos e disponível em 4 idiomas.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Nova versão, reescrita em TypeScript e com identidade visual própria, feita para outro hotel da rede.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: 'O produto white-label: um só código que vira o guia de qualquer hotel trocando um arquivo de configuração tipado. Mais 3 hotéis da rede estão em fase de aprovação.',
      },
      leadManager: {
        nome: 'Lead Manager',
        gancho: 'O comercial de eventos saiu da planilha e ganhou números para mostrar à diretoria.',
        resumo: 'CRM do setor de eventos do hotel, usado todo dia pela equipe e pelo gerente geral. Funil de propostas, histórico do cliente por telefone, e-mail ou CNPJ, receita mensal em 3 camadas, exportação para Excel, CSV e PDF e opt-out de LGPD. A demo online usa dados fictícios e entra com 1 clique.',
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'Do cardápio no celular ao pedido na cozinha, em tempo real.',
        resumo: 'Cardápio digital do restaurante do hotel em 3 idiomas, com pedidos de room service, pagamento por PIX ou cartão e painel ao vivo para recepção e cozinha, com alerta sonoro e cupom térmico. O dono edita pratos e preços sem mexer em código.',
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page para um robô que pinta fachadas.',
        resumo: 'Meu primeiro trabalho pago: a página de apresentação de um produto industrial, com seções de soluções, contratação e dúvidas.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Reservar uma sala em poucos cliques.',
        resumo: 'Meu primeiro full-stack: login com Firebase Auth, reservas no Firestore e uma Cloud Function que valida o pedido no servidor e avisa o espaço por e-mail. Modernizado em 2026 para React 19, TypeScript e Vite.',
      },
    },
  },

  sobre: {
    titulo: 'Conheço a operação por dentro',
    lead: 'Trabalho com hotelaria desde 2019. Sei como é o hóspede perdido, o cardápio que ninguém entende e o cliente que some dentro de uma planilha. Eu transformo isso em software.',
    itens: [
      {
        t: 'Já vendi software',
        d: 'Um guia digital que fiz foi comprado pelo Swan Novo Hamburgo e está no ar. Dele nasceu uma versão em TypeScript e um produto white-label, que agora está em aprovação para mais 3 hotéis da rede.',
      },
      {
        t: 'Do banco à interface',
        d: 'No Lead Manager e no Irius, cuido de tudo: banco Postgres no Supabase com Row Level Security, login, arquivos, dados em tempo real e a interface em React e TypeScript.',
      },
      {
        t: 'Cliente de verdade, prazo de verdade',
        d: 'Sou coordenador de eventos. Prazo curto e cliente exigente fazem parte da minha rotina, e levo essa calma e essa escuta para cada projeto.',
      },
      {
        t: 'Falo a língua do seu cliente',
        d: 'Português nativo, inglês e espanhol fluentes. Foram 3 anos atendendo hóspedes do mundo todo em navios da Norwegian Cruise Line.',
      },
    ],
  },

  contato: {
    chamada: 'Tem um projeto em mente?',
    lead: 'Conte o que você precisa e eu respondo com um plano e um orçamento. Também estou aberto a vagas de desenvolvedor full-stack.',
    email: 'Enviar e-mail',
    whatsapp: 'Chamar no WhatsApp',
    whatsappMensagem: 'Olá, Vanov! Vi seu portfólio e quero conversar sobre um projeto.',
  },
  social: { email: 'E-mail', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Feito com React, TypeScript, i18next e CSS Modules.',
}

export type Mensagens = typeof pt
export default pt
