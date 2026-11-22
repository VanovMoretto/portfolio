# Portfólio · Vanov Moretto

Meu portfólio de desenvolvedor full-stack (React, TypeScript e Supabase): o que já construí, o que faço para clientes e como falar comigo. Disponível em português, inglês e espanhol, com tema escuro e claro.

**No ar:** https://vanovmoretto.com

## O que tem no site

- **Topo:** faixa de disponibilidade, cabeçalho com o interruptor de tema, as bandeiras de idioma e o botão "Pedir orçamento".
- **Início:** o que eu faço, a pergunta "O que você precisa?" (as opções marcadas já aparecem marcadas no formulário) e capturas reais do Lead Manager e do Diretório de Serviços.
- **Projetos:** o Diretório de Serviços como case (guia do hóspede da rede Swan, com o Astrolábio de Novo Hamburgo como primeira versão e o Digital Concierge), o Lead Manager e o Irius Gastronomia em destaque, e outros trabalhos numa lista compacta.
- **Serviços:** o que eu faço para clientes e como trabalho.
- **Sobre:** foto (ou monograma), o que me diferencia e a órbita com as tecnologias que uso. Passando o mouse em uma delas, o centro mostra em quais projetos ela aparece.
- **Orçamento:** formulário curto que monta a mensagem pronta no WhatsApp ou no e-mail. Não tem servidor: nada é enviado sem a pessoa confirmar no app dela.
- **Tema e idioma:** sem escolha salva, o tema segue o sistema (claro por padrão) e o idioma segue o navegador. Ao trocar, a escolha fica salva.

## Tecnologias

React 19, TypeScript, Vite, CSS Modules, i18next (com react-i18next) e ESLint. A publicação é feita com gh-pages, no GitHub Pages.

## Rodar no computador

```bash
npm install
npm run dev
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run lint` | confere o código com o ESLint |
| `npm run build` | confere os tipos e gera o site em `dist/` |
| `npm run preview` | abre o build localmente |
| `npm run deploy` | gera o build e publica no GitHub Pages (branch `gh-pages`) |

## Estrutura

```
src/
├── data.ts          perfil, projetos, links, status, imagens, tecnologias e opções do orçamento
├── orcamento.ts     opções marcadas no início, compartilhadas com o formulário
├── i18n/
│   ├── pt.ts        textos em português (referência)
│   ├── en.ts        textos em inglês
│   ├── es.ts        textos em espanhol
│   └── index.ts     configuração do i18next e lista de idiomas
├── components/      uma seção por arquivo (.tsx + .module.css), mais o interruptor de tema e o seletor de idioma
├── App.tsx          ordem das seções e rodapé
└── index.css        cores dos dois temas, fontes e estilos gerais
public/
├── projetos/        capturas de tela dos projetos (.webp); diretorio-caxias/ tem as telas do celular
├── og.jpg           imagem da prévia ao compartilhar o link (1200x630)
└── favicon.svg
```

## Como atualizar

- **Textos:** edite `src/i18n/pt.ts`, `src/i18n/en.ts` e `src/i18n/es.ts`. Os três arquivos precisam ter as mesmas chaves; se faltar alguma no inglês ou no espanhol, o TypeScript avisa no build.
- **Novo projeto:**
  1. Adicione o projeto em `projetos` (destaques) ou em `outrosProjetos` (lista compacta), dentro de `src/data.ts`, com um `id` novo.
  2. Inclua esse `id` no tipo `ProjetoId`.
  3. Escreva os textos dele em `projetos.itens.<id>`, nos três idiomas.
  4. Se tiver captura de tela, coloque em `public/projetos/` e preencha o campo `imagem`.
- **Status dos projetos:** `producao`, `aprovado`, `desenvolvimento`, `uso`, `venda`, `final`, `cliente` ou `estudo`. Os rótulos ficam em `projetos.status`, nos textos.
- **Diretório de Serviços:** status de cada hotel e telas em `diretorio`, no `data.ts`; textos em `projetos.diretorio`. Por contrato, sem link de demo ou código e sem telefones, ramais ou valores nas imagens.
- **Foto:** coloque a imagem em `public/` e preencha `perfil.foto` no `data.ts` (ex.: `'vanov.webp'`). Sem foto, aparece o monograma.
- **Opções do orçamento:** listas `necessidades` e `prazos`, no `data.ts`; rótulos em `necessidades` e `orcamento.prazos`, nos textos.
- **Serviços:** textos em `servicos`.
- **Tecnologias da órbita:** a cor fica em `front` e `back`, no `data.ts`. A lista de projetos de cada uma fica em `stack`, nos textos.
- **Cores dos temas:** variáveis no `:root` (claro) e no `:root[data-theme='dark']` (escuro), em `src/index.css`.
- **Novo idioma:** crie o arquivo de textos, registre o idioma em `src/i18n/index.ts` e desenhe a bandeira em `src/components/Bandeira.tsx`.

## Publicação

O site fica no domínio `vanovmoretto.com` (arquivo `public/CNAME`), servido pelo GitHub Pages a partir do branch `gh-pages`. O DNS do domínio é gerenciado na Cloudflare.
