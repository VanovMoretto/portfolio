import { useTranslation } from 'react-i18next'
import type { CSSProperties } from 'react'
import Titulo from './Titulo'
import { diretorio, linkWhatsApp, outrosProjetos, projetos, type Projeto } from '../data'
import Seta from './Seta'
import s from './Projects.module.css'

function Diretorio() {
  const { t } = useTranslation()
  const unidades = t('projetos.diretorio.unidades', { returnObjects: true })

  return (
    <article className={s.caso} data-revela="cortina">
      <div className={s.casoTopo}>
        <div className={s.casoTexto} data-revela="grupo">
          <Titulo como="h3" className={s.casoNome} texto={t('projetos.diretorio.nome')} />
          <p className={s.casoGancho}>{t('projetos.diretorio.gancho')}</p>
          <p>{t('projetos.diretorio.resumo')}</p>
          <p>{t('projetos.diretorio.comoFunciona')}</p>
        </div>
        <div className={s.telas} role="img" aria-label={t('projetos.diretorio.telas')} data-revela="grupo">
          {diretorio.telas.map((src, i) => (
            <img
              key={src}
              className="paralaxe"
              style={{ '--p': `${16 + i * 26}px` } as CSSProperties}
              src={src}
              alt=""
              width={780}
              height={1688}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className={s.casoBase} data-revela="grupo">
        <div>
          <h4>{t('projetos.diretorio.unidadesTitulo')}</h4>
          <ul className={s.unidades}>
            {unidades.map((u, i) => (
              <li key={u.nome}>
                <span>
                  <strong>{u.nome}</strong>
                  <small>{u.detalhe}</small>
                </span>
                <span className="status" data-s={diretorio.unidades[i]}>
                  {t(`projetos.status.${diretorio.unidades[i]}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t('projetos.diretorio.entregasTitulo')}</h4>
          <ul className={s.entregas}>
            {t('projetos.diretorio.entregas', { returnObjects: true }).map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <ul className="tags">
            {diretorio.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className={s.concierge}>
          <h4>{t('projetos.diretorio.concierge.nome')}</h4>
          <span className="status" data-s={diretorio.concierge.status}>
            {t(`projetos.status.${diretorio.concierge.status}`)}
          </span>
          <p>{t('projetos.diretorio.concierge.resumo')}</p>
          <div className={s.links}>
            <a href={diretorio.concierge.demo} target="_blank" rel="noreferrer">
              {t('projetos.verOnline')} <Seta fora />
            </a>
            <a href={linkWhatsApp(t('projetos.queroMensagem'))} target="_blank" rel="noreferrer">
              {t('projetos.queroNoHotel')} <Seta fora />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function Links({ p }: { p: Projeto }) {
  const { t } = useTranslation()
  return (
    <div className={s.links}>
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noreferrer">
          {t('projetos.verOnline')} <Seta fora />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer">
          {t('projetos.codigo')} <Seta fora />
        </a>
      )}
    </div>
  )
}

function Destaque({ p }: { p: Projeto }) {
  const { t } = useTranslation()
  const nome = t(`projetos.itens.${p.id}.nome`)
  return (
    <article className={s.destaque}>
      <div className={s.quadro} data-revela="cortina">
        <img src={p.imagem} alt={t('projetos.captura', { nome })} width={1280} height={800} loading="lazy" />
      </div>
      <div className={s.destaqueTexto} data-revela="grupo">
        <span className="status" data-s={p.status}>
          {t(`projetos.status.${p.status}`)}
        </span>
        <h3>{nome}</h3>
        <p className={s.gancho}>{t(`projetos.itens.${p.id}.gancho`)}</p>
        <p>{t(`projetos.itens.${p.id}.resumo`)}</p>
        <ul className="tags">
          {p.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Links p={p} />
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projetos" className="secao">
      <Titulo className="titulo" texto={t('projetos.titulo')} />
      <p className="lead" data-revela="subir">
        {t('projetos.lead')}
      </p>

      <Diretorio />
      {projetos.map((p) => (
        <Destaque key={p.id} p={p} />
      ))}

      <h3 className={s.outrosTitulo} data-revela="subir">
        {t('projetos.outros')}
      </h3>
      <div className={s.outros} data-revela="grupo">
        {outrosProjetos.map((p) => {
          const nome = t(`projetos.itens.${p.id}.nome`)
          return (
            <article key={p.id} className={s.outro}>
              <img src={p.imagem} alt={t('projetos.captura', { nome })} width={800} height={500} loading="lazy" />
              <div>
                <span className="status" data-s={p.status}>
                  {t(`projetos.status.${p.status}`)}
                </span>
                <h4>{nome}</h4>
                <p className={s.gancho}>{t(`projetos.itens.${p.id}.gancho`)}</p>
                <p>{t(`projetos.itens.${p.id}.resumo`)}</p>
                <Links p={p} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
