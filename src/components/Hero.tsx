import { useTranslation } from 'react-i18next'
import type { CSSProperties } from 'react'
import Titulo from './Titulo'
import { necessidades } from '../data'
import { alternar, useNecessidades } from '../orcamento'
import Seta from './Seta'
import s from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()
  const marcadas = useNecessidades()

  return (
    <>
      <section className={s.hero}>
        <div className={s.texto}>
          <Titulo como="h1" className={s.titulo} texto={t('hero.titulo')} />
          <p className={s.intro} data-revela="subir" style={{ '--d': '380ms' } as CSSProperties}>
            {t('hero.intro')}
          </p>

          <div
            className={s.escolha}
            role="group"
            aria-labelledby="pergunta-topo"
            data-revela="subir"
            style={{ '--d': '500ms' } as CSSProperties}
          >
            <p id="pergunta-topo" className={s.pergunta}>
              {t('hero.pergunta')}
            </p>
            <div className={s.chips}>
              {necessidades.map((n) => (
                <button key={n} type="button" className={s.chip} aria-pressed={marcadas.includes(n)} onClick={() => alternar(n)}>
                  {t(`necessidades.${n}`)}
                </button>
              ))}
            </div>
          </div>

          <div className={s.acoes} data-revela="subir" style={{ '--d': '620ms' } as CSSProperties}>
            <a className="botao botao-acao" href="#orcamento">
              {t('hero.pedir')} <Seta />
            </a>
            <a className={s.ver} href="#projetos">
              {t('hero.verProjetos')}
            </a>
          </div>
        </div>

        <figure className={s.vitrine}>
          <div className={s.desktop}>
            <img src="projetos/lead-manager.webp" alt="" width={800} height={500} fetchPriority="high" />
          </div>
          <div className={s.celular}>
            <img src="projetos/diretorio-caxias/app-inicio.webp" alt="" width={780} height={1688} />
          </div>
          <figcaption>{t('hero.vitrine')}</figcaption>
        </figure>
      </section>

      <ul className={s.prova} data-revela="grupo">
        {t('hero.prova', { returnObjects: true }).map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </>
  )
}
