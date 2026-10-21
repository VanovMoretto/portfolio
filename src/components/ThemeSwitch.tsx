import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { useTranslation } from 'react-i18next'
import s from './ThemeSwitch.module.css'

type Tema = 'dark' | 'light'

const semAnimacao = () => matchMedia('(prefers-reduced-motion: reduce)').matches

function trocar(proximo: Tema, aplicar: (t: Tema) => void) {
  const html = document.documentElement
  const mudar = () => {
    html.dataset.theme = proximo
    flushSync(() => aplicar(proximo))
  }

  if (semAnimacao()) return mudar()
  if (document.startViewTransition) {
    document.startViewTransition(mudar)
    return
  }
  html.classList.add('tema-suave')
  mudar()
  setTimeout(() => html.classList.remove('tema-suave'), 700)
}

export default function ThemeSwitch() {
  const { t } = useTranslation()
  // definido pelo script do index.html
  const [tema, setTema] = useState<Tema>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', tema === 'light' ? '#f6f8ff' : '#030814')
    try {
      localStorage.setItem('tema', tema)
    } catch {
      // localStorage indisponível
    }
  }, [tema])

  const [mexeu, setMexeu] = useState(false)
  const claro = tema === 'light'

  return (
    <button
      className={`${s.switch} ${claro ? s.claro : ''} ${mexeu ? s.animado : ''}`}
      role="switch"
      aria-checked={claro}
      aria-label={t('tema.rotulo')}
      title={claro ? t('tema.escuro') : t('tema.claro')}
      onClick={() =>
        trocar(claro ? 'dark' : 'light', (novo) => {
          setMexeu(true)
          setTema(novo)
        })
      }
    >
      <span className={s.bolinha} aria-hidden="true" />
      <svg className={`${s.icone} ${s.lua} ${claro ? '' : s.aceso}`} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
      <svg className={`${s.icone} ${s.sol} ${claro ? s.aceso : ''}`} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    </button>
  )
}
