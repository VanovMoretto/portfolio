import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// estilos globais antes dos módulos dos componentes, para eles poderem sobrescrever
import './index.css'
import './i18n'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
