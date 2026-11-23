const pt = {
  meta: {
    titulo: 'Vanov Moretto | Sistemas e sites sob medida',
    descricao: 'Vanov Moretto, desenvolvedor full-stack. Sistemas e sites sob medida para pequenas empresas, já em uso em hotéis e restaurantes.',
  },
  nav: { rotulo: 'Navegação principal', projetos: 'Projetos', servicos: 'Serviços', sobre: 'Sobre', orcamento: 'Pedir orçamento' },
  tema: { rotulo: 'Tema claro', escuro: 'Tema escuro', claro: 'Tema claro' },
  idioma: { rotulo: 'Idioma', escolher: 'Escolher idioma' },

  faixa: [
    'Disponível para novos projetos',
    'Sistemas e sites sob medida',
    'Atendo em português, inglês e espanhol',
    'Guia do hóspede em uso na rede Swan Hotéis',
  ],

  hero: {
    titulo: 'Sistemas e sites sob medida para o seu negócio.',
    intro: 'Sou Vanov Moretto, desenvolvedor full-stack. Faço software que já roda em hotéis e restaurantes: guia do hóspede, CRM de vendas e cardápio com pedidos em tempo real.',
    pergunta: 'O que você precisa?',
    pedir: 'Pedir orçamento',
    verProjetos: 'Ver projetos',
    vitrine: 'O Verto e o Diretório de Serviços, dois sistemas meus em uso hoje',
    prova: [
      'Guia do hóspede em uso nos cerca de 160 quartos do Swan Novo Hamburgo',
      'Contratado pela rede Swan para mais 3 hotéis',
      'CRM de eventos usado todo dia por uma equipe comercial',
    ],
  },

  necessidades: {
    site: 'Site ou landing page',
    sistema: 'Sistema sob medida',
    cardapio: 'Cardápio digital',
    guia: 'Guia do hóspede',
    outro: 'Outra coisa',
  },

  stack: {
    React: ['Diretório de Serviços', 'Verto', 'Irius Gastronomia', 'Coworking', 'Painter Robot'],
    TypeScript: ['Diretório de Serviços', 'Digital Concierge', 'Verto', 'Irius Gastronomia', 'Este portfólio'],
    'Tailwind CSS': ['Verto'],
    JavaScript: ['Astrolábio (versão 1)', 'Painter Robot'],
    'CSS Modules': ['Diretório de Serviços', 'Digital Concierge', 'Irius Gastronomia', 'Este portfólio'],
    i18next: ['Diretório de Serviços (4 idiomas)', 'Irius (3 idiomas)', 'Este portfólio (3 idiomas)'],
    Vite: ['Todos os projetos desde 2025'],
    Supabase: ['Verto: login, arquivos e segurança', 'Irius: pedidos em tempo real'],
    PostgreSQL: ['Verto', 'Irius Gastronomia'],
    Firebase: ['Coworking'],
    'Node.js': ['Coworking'],
  },

  projetos: {
    titulo: 'Projetos que já estão funcionando',
    lead: 'Não são exercícios: cada um resolve um problema real de um negócio, e quem usa é a equipe de lá.',
    outros: 'Outros trabalhos',
    verOnline: 'Ver online',
    codigo: 'Código',
    queroNoHotel: 'Quero no meu hotel',
    queroMensagem: 'Olá, Vanov! Vi o Digital Concierge no seu portfólio e quero saber como ter o guia digital no meu hotel.',
    captura: 'Captura de tela do {{nome}}',
    status: {
      producao: 'Em produção',
      aprovado: 'Aprovado pela rede',
      desenvolvimento: 'Em desenvolvimento',
      uso: 'Em uso diário',
      venda: 'Disponível para hotéis',
      final: 'Reta final',
      cliente: 'Cliente pagante',
      estudo: 'Projeto de estudo',
    },
    diretorio: {
      nome: 'Diretório de Serviços',
      gancho: 'O guia do hóspede da rede Swan Hotéis, no celular, pelo QR Code do quarto.',
      resumo: 'Wi-Fi, telefones, horários, cardápios, serviços e políticas do hotel em 4 idiomas. Começou como o Astrolábio, vendido ao Swan Novo Hamburgo, e a rede contratou o app para mais três hotéis.',
      unidadesTitulo: 'Hotéis da rede',
      unidades: [
        { nome: 'Novo Hamburgo', detalhe: 'Astrolábio, a primeira versão' },
        { nome: 'Porto Alegre', detalhe: 'Swan Generation' },
        { nome: 'Caxias do Sul', detalhe: 'Swan Caxias' },
        { nome: 'Rio Grande', detalhe: 'Swan Rio Grande' },
      ],
      comoFunciona: 'Um único código gera o site de cada hotel, com cores, logo e conteúdo próprios. Os textos e preços ficam em arquivos que a equipe do hotel atualiza sem programar.',
      entregasTitulo: 'Além do código',
      entregas: ['Manual de manutenção com imagens', 'Treinamento de 2 horas para a equipe', 'Garantia de 90 dias'],
      concierge: {
        nome: 'Digital Concierge',
        resumo: 'A mesma ideia como produto para qualquer hotel: um guia pronto, adaptado às cores e às informações de cada um.',
      },
      telas: 'Telas do Diretório de Serviços do Swan Caxias: início, café da manhã e restaurante',
    },
    itens: {
      leadManager: {
        nome: 'Verto',
        gancho: 'Do pedido de orçamento ao faturamento do evento, sem planilha no meio do caminho.',
        resumo: 'CRM do setor de eventos de um hotel, usado todo dia pela equipe. Reconhece o cliente que volta e mostra o histórico dele, acompanha cada proposta até fechar, avisa quando falta follow-up pelo WhatsApp e leva o evento fechado para a planilha de faturamento. Tem ainda painéis de conversão e receita, pesquisa de satisfação pós-evento e mailing que respeita a LGPD. A demo online usa dados fictícios e entra com um clique.',
      },
      restmenu: {
        nome: 'Irius Gastronomia',
        gancho: 'O pedido feito no celular do hóspede aparece na hora na cozinha.',
        resumo: 'Cardápio digital do restaurante do hotel em 3 idiomas, com pedidos de room service, pagamento por PIX ou cartão e um painel ao vivo para recepção e cozinha. O dono edita pratos e preços sem mexer em código.',
      },
      painterRobot: {
        nome: 'Painter Robot',
        gancho: 'Landing page para um robô que pinta fachadas.',
        resumo: 'Meu primeiro trabalho pago: a página de apresentação de um produto industrial.',
      },
      coworking: {
        nome: 'Coworking',
        gancho: 'Reserva de salas em poucos cliques.',
        resumo: 'Login, reservas e aviso por e-mail ao espaço. Modernizado em 2026.',
      },
    },
  },

  servicos: {
    titulo: 'O que eu faço por você',
    lead: 'Cuido do projeto inteiro, e você fala direto comigo durante todo o processo.',
    itens: [
      {
        t: 'Sistemas sob medida',
        d: 'CRMs, painéis com gráficos, áreas de administração e relatórios em Excel e PDF, do jeito que o seu negócio trabalha.',
        exemplo: 'Como o Verto',
      },
      {
        t: 'Hotelaria e restaurantes',
        d: 'Guia do hóspede por QR Code, cardápio digital, pedidos de room service e reservas. Eu trabalho em hotel e conheço a operação.',
        exemplo: 'Como o Diretório de Serviços',
      },
      {
        t: 'Sites e landing pages',
        d: 'Rápidos, pensados primeiro para o celular, em quantos idiomas você precisar.',
        exemplo: 'Como este portfólio',
      },
      {
        t: 'Banco de dados e login',
        d: 'Cadastro de usuários, arquivos e dados em tempo real, com a segurança configurada no próprio banco.',
        exemplo: 'Como o Irius Gastronomia',
      },
    ],
    processoTitulo: 'Como eu trabalho',
    processo: [
      { t: 'Escopo e preço fechados', d: 'Antes de começar, combinamos o que entra, o prazo e o valor.' },
      { t: 'Você acompanha tudo', d: 'Atualizações frequentes e um link para testar enquanto eu construo.' },
      { t: 'O sistema é seu', d: 'Entrego o código documentado e ensino a sua equipe a usar. Você nunca fica preso a mim.' },
    ],
  },

  sobre: {
    titulo: 'Conheço a operação por dentro',
    lead: 'Trabalho com hotelaria desde 2019 e vejo de perto os problemas que um negócio enfrenta no dia a dia. Vários dos meus projetos começaram assim.',
    foto: 'Foto de Vanov Moretto',
    itens: [
      {
        t: 'Já vendi software',
        d: 'O guia digital que fiz para o Swan Novo Hamburgo virou o Diretório de Serviços, contratado pela rede para mais três hotéis.',
      },
      {
        t: 'Cuido do sistema inteiro',
        d: 'Do banco de dados à tela: login, arquivos, dados em tempo real e a interface que a sua equipe usa.',
      },
      {
        t: 'Acostumado com prazo curto',
        d: 'Sou coordenador de eventos e lido todo dia com prazos apertados e clientes exigentes.',
      },
      {
        t: 'Atendo em três idiomas',
        d: 'Português nativo, inglês e espanhol fluentes. Foram 3 anos atendendo hóspedes do mundo todo em navios da Norwegian Cruise Line.',
      },
    ],
    stackTitulo: 'Ferramentas que uso',
    orbita: 'Tecnologias que uso',
    nucleo: 'Minha stack',
    dica: 'Passe o mouse ou toque em uma tecnologia',
    legendaFront: 'Interface',
    legendaBack: 'Dados e servidor',
  },

  orcamento: {
    titulo: 'Conte o que você precisa',
    lead: 'Leva um minuto. A mensagem sai pronta no seu WhatsApp ou e-mail, e eu respondo com um plano e um valor.',
    nome: 'Seu nome',
    nomeExemplo: 'João da Silva',
    negocio: 'Seu negócio',
    negocioExemplo: 'Nome da empresa ou ramo',
    precisa: 'O que você precisa',
    prazo: 'Para quando',
    prazos: { semPressa: 'Sem pressa', mes: 'Em até 1 mês', urgente: 'É urgente' },
    detalhes: 'Conte um pouco mais',
    detalhesExemplo: 'Escreva aqui como posso te ajudar',
    enviarWhatsapp: 'Enviar pelo WhatsApp',
    enviarEmail: 'Enviar por e-mail',
    faltam: 'Preencha o seu nome e conte um pouco do que precisa para eu poder te responder.',
    ou: 'Prefere outro canal?',
    mensagem: {
      abertura: 'Olá, Vanov! Quero um orçamento.',
      nome: 'Nome',
      negocio: 'Negócio',
      precisa: 'Preciso de',
      prazo: 'Prazo',
      detalhes: 'Detalhes',
      assunto: 'Pedido de orçamento',
    },
  },

  contato: {
    endereco: 'contato@vanovmoretto.com',
    whatsappMensagem: 'Olá, Vanov! Vi seu portfólio e quero conversar sobre um projeto.',
  },
  social: { email: 'E-mail', whatsapp: 'WhatsApp' },
  rodape: '© {{ano}} {{nome}}. Desenvolvedor full-stack.',
}

export type Mensagens = typeof pt
export default pt
