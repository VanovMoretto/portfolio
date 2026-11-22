import { useTranslation } from 'react-i18next'
import ThemeSwitch from './ThemeSwitch'
import LanguageSwitch from './LanguageSwitch'
import s from './Header.module.css'

function Faixa() {
  const { t } = useTranslation()
  const itens = t('faixa', { returnObjects: true })
  // a lista vai duas vezes para o letreiro rodar sem emenda
  return (
    <div className={s.faixa}>
      <div className={s.trilho}>
        {[0, 1].map((copia) => (
          <ul key={copia} aria-hidden={copia === 1 || undefined}>
            {itens.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const { t } = useTranslation()
  return (
    <>
      <Faixa />
      <header className={s.topo}>
        <div className={s.barra}>
          <ThemeSwitch />
          <a className={s.marca} href="#topo">
            Vanov Moretto
          </a>
          <nav className={s.nav} aria-label={t('nav.rotulo')}>
            <a href="#projetos">{t('nav.projetos')}</a>
            <a href="#servicos">{t('nav.servicos')}</a>
            <a href="#sobre">{t('nav.sobre')}</a>
          </nav>
          <LanguageSwitch />
          <a className={`botao botao-acao ${s.pedir}`} href="#orcamento">
            {t('nav.orcamento')}
          </a>
        </div>
      </header>
    </>
  )
}
