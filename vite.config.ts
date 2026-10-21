import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// nome do repositório no GitHub Pages
export default defineConfig({ plugins: [react()], base: '/portfolio/' })
