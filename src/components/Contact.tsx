import { useTranslation } from 'react-i18next'
import { linkWhatsApp } from '../data'
import Social from './Social'
import s from './Contact.module.css'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contato" className={`secao ${s.contato}`}>
      <h2 className={`${s.chamada} reveal`}>{t('contato.chamada')}</h2>
      <p className="lead reveal">{t('contato.lead')}</p>
      <div className={`${s.links} reveal`}>
        <a className={`${s.botao} ${s.whatsapp}`} href={linkWhatsApp(t('contato.whatsappMensagem'))} target="_blank" rel="noreferrer">
          {t('contato.whatsapp')}
        </a>
        <a className={s.botao} href={`mailto:${t('contato.endereco')}`}>
          {t('contato.email')}
          <small>{t('contato.endereco')}</small>
        </a>
        <Social semEmail semWhatsapp />
      </div>
    </section>
  )
}
