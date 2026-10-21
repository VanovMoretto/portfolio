const pt = {
  meta: {
    titulo: 'Vanov Moretto | Desenvolvedor Front-end',
    descricao: 'Vanov Moretto, desenvolvedor front-end (React e TypeScript) rumo ao full-stack.',
  },
  nav: { rotulo: 'Navegação principal', projetos: 'Projetos', sobre: 'Sobre', contato: 'Contato' },
  tema: { rotulo: 'Tema claro', escuro: 'Tema escuro', claro: 'Tema claro' },
  idioma: { rotulo: 'Idioma', escolher: 'Escolher idioma' },

  hero: {
    selo: 'Aberto a oportunidades em tecnologia',
    cargo: 'Desenvolvedor front-end',
    subtitulo: 'Interfaces em React e TypeScript. Full-stack a caminho.',
    verProjetos: 'Ver projetos',
    orbita: 'Tecnologias que uso',
    nucleo: 'Minha stack',
    dica: 'Passe o mouse ou toque em uma tecnologia',
    legendaFront: 'Front-end no dia a dia',
    legendaBack: 'Back-end em evolução',
  },

  stack: {
    React: ['Astrolábio', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    TypeScript: ['Astrolábio Gen', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    JavaScript: ['Astrolábio'],
    i18next: ['Astrolábio (4 idiomas)', 'Digital Concierge', 'RestMenu (3 idiomas)', 'Este portfólio'],
    'CSS Modules': ['Astrolábio', 'Digital Concierge', 'RestMenu', 'Este portfólio'],
    Vite: ['Astrolábio', 'Digital Concierge', 'RestMenu', 'myCRM', 'Coworking'],
    Firebase: ['Coworking: login, Firestore e Cloud Functions'],
    'Node.js': ['Cloud Functions do Coworking', 'myCRM (em breve)'],
    Supabase: ['myCRM (em breve)'],
  },

  projetos: {
    titulo: 'Projetos',
    lead: 'Um deles foi vendido, está em uso e virou produto. Os outros resolvem problemas que vejo de perto no meu trabalho.',
    outros: 'Outros projetos',
    verOnline: 'Ver online',
    codigo: 'Código',
    captura: 'Captura de tela do {{nome}}',
    // vazio = sem etiqueta
    status: {
      producao: 'Em produção',
      concluido: 'Concluído',
      venda: 'Disponível para hotéis',
      andamento: 'Em andamento',
      breve: 'Em breve',
      antigo: '',
    },
    itens: {
      astrolabio: {
        nome: 'Astrolábio',
        gancho: 'O astrolábio guiava navegantes pelo céu. Este guia o hóspede pelo hotel.',
        resumo: 'Começou como um guia digital vendido a um hotel e virou produto. Cada versão resolveu o limite da anterior.',
      },
      astrolabioV1: {
        nome: 'Astrolábio',
        resumo: 'Vendido ao Swan Novo Hamburgo, onde está no ar. Tudo o que o hóspede precisa em acordeões, em 4 idiomas.',
      },
      astrolabioGen: {
        nome: 'Astrolábio Gen',
        resumo: 'Reescrito em TypeScript para outro hotel da rede, com frigobar e guia SKY em modais e telefones interativos.',
      },
      digitalConcierge: {
        nome: 'Digital Concierge',
        resumo: 'O produto white-label: um só código que vira o guia de qualquer hotel trocando um arquivo de configuração tipado, com cores, contatos e seções ligados por feature flags. É o modelo que apresento aos hotéis interessados.',
      },
      mycrm: {
        nome: 'myCRM',
        gancho: 'Para a prospecção de eventos parar de se perder numa planilha.',
        resumo: 'CRM para o setor de eventos de hotel: KPIs do mês, receita por setor (sala, hospedagem, A&B, coffee break), calendário de eventos e prazos, e motivos de perda registrados. Próximo passo: banco de dados com Supabase.',
      },
      restmenu: {
        nome: 'RestMenu',
        gancho: 'Um cardápio requintado que cabe no celular.',
        resumo: 'Cardápio digital do restaurante Irius Gastronomia em 3 idiomas, com abas por categoria, horários e mapa de como chegar. Pensado também para o room service do hotel.',
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
    lead: 'Trabalho com eventos, então sei como é o hóspede perdido, o cardápio que ninguém entende e a prospecção que some dentro de uma planilha. Eu transformo isso em interface.',
    itens: [
      {
        t: 'Já vendi software',
        d: 'Um guia digital que fiz foi comprado pelo Swan Novo Hamburgo e está no ar. Dele nasceu uma versão em TypeScript para outro hotel da rede e, depois, um produto white-label pronto para qualquer hotel.',
      },
      {
        t: 'Cliente de verdade, prazo de verdade',
        d: 'Na rotina de eventos, prazo curto e cliente exigente são normais. Levo essa calma sob pressão e essa escuta para dentro de um time.',
      },
      {
        t: 'Agora, o lado do servidor',
        d: 'Já usei Firebase (login, banco e Cloud Functions) no Coworking. Agora estou levando o myCRM para o Supabase, para organizar a prospecção do meu próprio trabalho.',
      },
    ],
  },

  contato: {
    chamada: 'Vamos construir algo juntos?',
    lead: 'Estou aberto a vagas de desenvolvedor front-end e full-stack júnior. Me chame por onde for melhor.',
  },
  social: { email: 'E-mail' },
  rodape: '© {{ano}} {{nome}}. Feito com React, TypeScript, i18next e CSS Modules.',
}

export type Mensagens = typeof pt
export default pt
