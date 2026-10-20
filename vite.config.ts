import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = nome do repositório (GitHub Pages: vanovmoretto.github.io/portfolio)
export default defineConfig({ plugins: [react()], base: '/portfolio/' })
