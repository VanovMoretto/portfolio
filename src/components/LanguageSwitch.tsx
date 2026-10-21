import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { idiomas, type Idioma } from '../i18n'
import Bandeira from './Bandeira'
import s from './LanguageSwitch.module.css'

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation()
  const [aberto, setAberto] = useState(false)
  const caixa = useRef<HTMLDivElement>(null)
  const atual = (idiomas.find((i) => i18n.resolvedLanguage === i.codigo) ?? idiomas[0]).codigo

  useEffect(() => {
    if (!aberto) return
    const fora = (e: PointerEvent) => !caixa.current?.contains(e.target as Node) && setAberto(false)
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
    document.addEventListener('pointerdown', fora)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('pointerdown', fora)
      document.removeEventListener('keydown', esc)
    }
  }, [aberto])

  const escolher = (codigo: Idioma) => {
    i18n.changeLanguage(codigo)
    setAberto(false)
  }

  return (
    <div className={s.caixa} ref={caixa}>
      <button
        onClick={() => setAberto((a) => !a)}
        aria-haspopup="listbox"
        aria-expanded={aberto}
        aria-label={`${t('idioma.escolher')}: ${idiomas.find((i) => i.codigo === atual)!.nome}`}
        title={t('idioma.escolher')}
      >
        <Bandeira idioma={atual} className={s.bandeira} />
      </button>
      {aberto && (
        <ul className={s.lista} role="listbox" aria-label={t('idioma.rotulo')}>
          {idiomas
            .filter((i) => i.codigo !== atual)
            .map((i, n) => (
              <li key={i.codigo} role="option" aria-selected="false" style={{ '--i': n } as CSSProperties}>
                <button onClick={() => escolher(i.codigo)} aria-label={i.nome} title={i.nome} lang={i.html}>
                  <Bandeira idioma={i.codigo} className={s.bandeira} />
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
