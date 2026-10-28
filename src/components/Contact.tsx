import { useTranslation } from 'react-i18next'
import { perfil } from '../data'
import Social from './Social'
import s from './Contact.module.css'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contato" className={`secao ${s.contato}`}>
      <h2 className={`${s.chamada} reveal`}>{t('contato.chamada')}</h2>
      <p className="lead reveal">{t('contato.lead')}</p>
      <div className={`${s.links} reveal`}>
        <a className={s.email} href={`mailto:${perfil.email}`}>
          {t('contato.email')}
          <small>{perfil.email}</small>
        </a>
        <Social semEmail />
      </div>
    </section>
  )
}
