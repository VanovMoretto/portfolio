# Portfólio · Vanov Moretto

Meu portfólio de desenvolvedor full-stack (React, TypeScript e Supabase): o que já construí, o que faço para clientes e como falar comigo. Disponível em português, inglês e espanhol, com tema escuro e claro.

**No ar:** https://vanovmoretto.github.io/portfolio/

## O que tem no site

- **Início:** apresentação, selo de disponibilidade para freelance, números que comprovam o trabalho (quartos com o guia no ar, hotéis em aprovação, idiomas) e um "astrolábio" com as tecnologias que uso. Passando o mouse em uma delas, o centro mostra em quais projetos ela aparece.
- **Projetos:** os destaques em cards grandes. O Astrolábio aparece como um case com a linha do tempo das três versões, do guia vendido ao produto white-label. Ao lado, o Lead Manager (CRM em uso no hotel) e o Irius Gastronomia (cardápio com pedidos em tempo real). Projetos de cliente e de estudo ficam numa lista compacta.
- **Serviços:** o que eu faço para clientes e como trabalho.
- **Sobre** e **Contato**.
- **Tema e idioma:** o interruptor de tema fica no canto superior esquerdo e as bandeiras de idioma no direito. As duas escolhas ficam salvas no navegador. Na primeira visita vale o idioma do navegador.

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
├── data.ts          projetos, links, tags, status, imagens e tecnologias
├── i18n/
│   ├── pt.ts        textos em português (referência)
│   ├── en.ts        textos em inglês
│   ├── es.ts        textos em espanhol
│   └── index.ts     configuração do i18next e lista de idiomas
├── components/      uma seção por arquivo (.tsx + .module.css), mais o interruptor de tema e o seletor de idioma
├── App.tsx          layout da página, rolagem e animações de entrada
└── index.css        cores dos dois temas, fontes e estilos gerais
public/
├── projetos/        capturas de tela dos projetos (16:10, em .webp)
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
- **Status dos projetos:** `producao`, `uso`, `concluido`, `venda`, `final`, `andamento`, `breve`, `antigo` ou `cliente`. Os rótulos ficam em `projetos.status`, nos textos (rótulo vazio = sem etiqueta). Projeto sem demo pública pode usar `restrito: true`.
- **Números do início:** valores em `numeros`, no `data.ts`, e legendas em `hero.numeros`, nos textos. Use só números que dá para comprovar.
- **Serviços:** textos em `servicos`; os ícones ficam em `src/components/Services.tsx`, na mesma ordem dos textos.
- **Tecnologias do astrolábio:** a cor fica em `front` e `back`, no `data.ts`. A lista de projetos de cada uma fica em `stack`, nos textos.
- **Cores dos temas:** variáveis no `:root` (escuro) e no `:root[data-theme='light']` (claro), em `src/index.css`.
- **Novo idioma:** crie o arquivo de textos, registre o idioma em `src/i18n/index.ts` e desenhe a bandeira em `src/components/Bandeira.tsx`.

## Publicação

O `base` do `vite.config.ts` é o nome do repositório (`/portfolio/`). No GitHub, o Pages precisa estar configurado para o branch `gh-pages` (Settings > Pages).
