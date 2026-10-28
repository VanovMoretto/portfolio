import type { CSSProperties, MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { corDa, outrosProjetos, projetos, type Projeto, type ProjetoId, type Status } from '../data'
import s from './Projects.module.css'

function inclinar(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const b = el.getBoundingClientRect()
  const x = (e.clientX - b.left) / b.width
  const y = (e.clientY - b.top) / b.height
  const k = Math.min(1, 560 / b.width)
  el.style.setProperty('--rx', `${(0.5 - y) * 7 * k}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * 9 * k}deg`)
  el.style.setProperty('--mx', `${x * 100}%`)
  el.style.setProperty('--my', `${y * 100}%`)
}

function soltar(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

function useTextos() {
  const { t } = useTranslation()
  const itens = t('projetos.itens', { returnObjects: true })
  return (id: ProjetoId): { nome: string; gancho?: string; resumo: string } => itens[id]
}

function Imagem({ p, className }: { p: Projeto; className: string }) {
  const { t } = useTranslation()
  const textos = useTextos()
  if (!p.imagem) return null
  return <img className={className} src={import.meta.env.BASE_URL + p.imagem} alt={t('projetos.captura', { nome: textos(p.id).nome })} loading="lazy" />
}

function Tags({ p }: { p: Projeto }) {
  return (
    <ul className={s.tags}>
      {p.tags.map((tag) => <li key={tag} style={{ '--c': corDa(tag) } as CSSProperties}>{tag}</li>)}
    </ul>
  )
}

function Links({ demo, repo, restrito }: { demo?: string; repo?: string; restrito?: boolean }) {
  const { t } = useTranslation()
  return (
    <div className={s.links}>
      {demo && <a href={demo} target="_blank" rel="noreferrer">{t('projetos.verOnline')}</a>}
      {repo && <a href={repo} target="_blank" rel="noreferrer">{t('projetos.codigo')}</a>}
      {restrito && (
        <span className={s.restrito}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          {t('projetos.restrito')}
        </span>
      )}
    </div>
  )
}

function Etiqueta({ status }: { status: Status }) {
  const { t } = useTranslation()
  const rotulo = t(`projetos.status.${status}`)
  return rotulo ? <span className={`${s.status} ${s[status]}`}>{rotulo}</span> : null
}

function Card({ p }: { p: Projeto }) {
  const texto = useTextos()(p.id)
  return (
    <article className={s.card} onMouseMove={inclinar} onMouseLeave={soltar}>
      <Imagem p={p} className={s.print} />
      <Etiqueta status={p.status} />
      <h3>{texto.nome}</h3>
      <p className={s.gancho}>{texto.gancho}</p>
      <p>{texto.resumo}</p>
      <Tags p={p} />
      <Links demo={p.demo} repo={p.repo} restrito={p.restrito} />
    </article>
  )
}

function Case({ p }: { p: Projeto }) {
  const { t } = useTranslation()
  const textos = useTextos()
  const texto = textos(p.id)
  return (
    <article className={`${s.card} ${s.case}`} onMouseMove={inclinar} onMouseLeave={soltar}>
      <div className={s.caseTexto}>
        <Etiqueta status={p.status} />
        <h3>{texto.nome}</h3>
        <p className={s.gancho}>{texto.gancho}</p>
        <p>{texto.resumo}</p>
        <ol className={s.etapas}>
          {p.etapas!.map((e, i) => (
            <li key={e.id} className={s[e.status]}>
              <h4>
                <small>v{i + 1}</small> {textos(e.id).nome}
                {t(`projetos.status.${e.status}`) && <span>{t(`projetos.status.${e.status}`)}</span>}
              </h4>
              <p>{textos(e.id).resumo}</p>
              <Links demo={e.demo} repo={e.repo} />
            </li>
          ))}
        </ol>
        <Tags p={p} />
      </div>
      <Imagem p={p} className={s.casePrint} />
    </article>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const textos = useTextos()
  return (
    <section id="projetos" className="secao">
      <h2 className="titulo reveal">{t('projetos.titulo')}</h2>
      <p className="lead reveal">{t('projetos.lead')}</p>
      <ul className={s.grade}>
        {projetos.map((p, i) => (
          <li key={p.id} className={`reveal ${p.etapas ? s.largo : ''}`} style={{ '--d': `${(i % 2) * 120}ms` } as CSSProperties}>
            {p.etapas ? <Case p={p} /> : <Card p={p} />}
          </li>
        ))}
      </ul>

      {outrosProjetos.length > 0 && (
        <>
          <h3 className={`${s.outrosTitulo} reveal`}>{t('projetos.outros')}</h3>
          <ul className={s.outros}>
            {outrosProjetos.map((p) => {
              const texto = textos(p.id)
              return (
                <li key={p.id} className={`${s.linha} reveal`}>
                  <Imagem p={p} className={s.mini} />
                  <div>
                    <Etiqueta status={p.status} />
                    <h4>{texto.nome}</h4>
                    <p className={s.gancho}>{texto.gancho}</p>
                    <p>{texto.resumo}</p>
                    <Tags p={p} />
                  </div>
                  <Links demo={p.demo} repo={p.repo} />
                </li>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}
