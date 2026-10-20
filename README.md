# Portfólio — Vanov Moretto

React + Vite + TypeScript + CSS Modules.

## Rodar
```bash
npm install
npm run dev
```

## Atualizar o conteúdo
Edite **só** `src/data.ts`: projetos, tecnologias (anéis), textos do "Sobre", LinkedIn e e-mail.
Cores e fontes ficam em `src/index.css` (variáveis no `:root`). Cada seção tem seu `.tsx` + `.module.css` em `src/components`.

## Publicar (GitHub Pages)
```bash
npm run deploy
```
O `base` em `vite.config.ts` precisa ser o nome do repositório (`/portfolio/`).
No GitHub: Settings > Pages > branch `gh-pages`.

## Capturas de tela
Coloque as imagens em `public/projetos/` (ex.: `astrolabio.webp`, proporção 16:10) e preencha `imagem: 'projetos/astrolabio.webp'` no projeto em `src/data.ts`.
