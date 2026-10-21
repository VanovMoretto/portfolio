import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import s from './About.module.css'

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="sobre" className="secao">
      <h2 className="titulo reveal">{t('sobre.titulo')}</h2>
      <p className="lead reveal">{t('sobre.lead')}</p>
      <ul className={s.lista}>
        {t('sobre.itens', { returnObjects: true }).map((x, i) => (
          // key pelo índice: o texto muda com o idioma
          <li key={i} className={`${s.item} reveal`} style={{ '--d': `${i * 120}ms` } as CSSProperties}>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
