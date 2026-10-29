import type { CSSProperties, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import s from './Services.module.css'

const tracos = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

// um ícone por serviço, na mesma ordem dos textos
const icones: ReactElement[] = [
  <svg viewBox="0 0 24 24" {...tracos} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18M8 20v-6M12 20v-9M16 20v-4" />
  </svg>,
  <svg viewBox="0 0 24 24" {...tracos} aria-hidden="true">
    <path d="M4 20V8l8-5 8 5v12" />
    <path d="M9 20v-5h6v5M9 10h.01M15 10h.01" />
  </svg>,
  <svg viewBox="0 0 24 24" {...tracos} aria-hidden="true">
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
    <path d="M4.5 5.5v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" />
  </svg>,
  <svg viewBox="0 0 24 24" {...tracos} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3z" />
  </svg>,
]

export default function Services() {
  const { t } = useTranslation()
  return (
    <section id="servicos" className="secao">
      <h2 className="titulo reveal">{t('servicos.titulo')}</h2>
      <p className="lead reveal">{t('servicos.lead')}</p>

      <ul className={s.grade}>
        {t('servicos.itens', { returnObjects: true }).map((x, i) => (
          // key pelo índice: o texto muda com o idioma
          <li key={i} className={`${s.item} reveal`} style={{ '--d': `${(i % 2) * 120}ms` } as CSSProperties}>
            <span className={s.icone}>{icones[i]}</span>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </li>
        ))}
      </ul>

      <h3 className={`${s.processoTitulo} reveal`}>{t('servicos.processoTitulo')}</h3>
      <ol className={s.processo}>
        {t('servicos.processo', { returnObjects: true }).map((x, i) => (
          <li key={i} className="reveal" style={{ '--d': `${i * 120}ms` } as CSSProperties}>
            <h4>{x.t}</h4>
            <p>{x.d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
