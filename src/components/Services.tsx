import { useTranslation } from 'react-i18next'
import Titulo from './Titulo'
import s from './Services.module.css'

export default function Services() {
  const { t } = useTranslation()
  return (
    <section id="servicos" className={s.fundo}>
      <div className="secao">
        <Titulo className="titulo" texto={t('servicos.titulo')} />
        <p className="lead" data-revela="subir">
          {t('servicos.lead')}
        </p>

        <ul className={s.linhas} data-revela="grupo">
          {t('servicos.itens', { returnObjects: true }).map((x, i) => (
            // key pelo índice: o texto muda com o idioma
            <li key={i}>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
              <span className={s.exemplo}>{x.exemplo}</span>
            </li>
          ))}
        </ul>

        <div className={s.processo}>
          <h3 data-revela="subir">{t('servicos.processoTitulo')}</h3>
          <ul data-revela="grupo">
            {t('servicos.processo', { returnObjects: true }).map((x, i) => (
              <li key={i}>
                <h4>{x.t}</h4>
                <p>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
