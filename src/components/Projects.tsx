import type { CSSProperties, MouseEvent } from 'react'
import { corDa, projetos, statusLabel, type Projeto } from '../data'
import s from './Projects.module.css'

// O card inclina e ganha um brilho que segue o mouse
function inclinar(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const b = el.getBoundingClientRect()
  const x = (e.clientX - b.left) / b.width
  const y = (e.clientY - b.top) / b.height
  el.style.setProperty('--rx', `${(0.5 - y) * 7}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * 9}deg`)
  el.style.setProperty('--mx', `${x * 100}%`)
  el.style.setProperty('--my', `${y * 100}%`)
}

function soltar(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

function Card({ p }: { p: Projeto }) {
  return (
    <article className={`${s.card} ${p.destaque ? s.destaque : ''}`} onMouseMove={inclinar} onMouseLeave={soltar}>
      {p.imagem && <img className={s.print} src={import.meta.env.BASE_URL + p.imagem} alt={`Captura de tela do ${p.nome}`} loading="lazy" />}
      {statusLabel[p.status] && <span className={`${s.status} ${s[p.status]}`}>{statusLabel[p.status]}</span>}
      <h3>{p.nome}</h3>
      <p className={s.gancho}>{p.gancho}</p>
      <p>{p.resumo}</p>
      <ul className={s.tags}>
        {p.tags.map((t) => <li key={t} style={{ '--c': corDa(t) } as CSSProperties}>{t}</li>)}
      </ul>
      <div className={s.links}>
        {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Ver online</a>}
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Código</a>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="secao">
      <h2 className="titulo reveal">Projetos</h2>
      <p className="lead reveal">Um deles já foi vendido e está em uso. Os outros mostram de onde vim e para onde vou.</p>
      <ul className={s.grade}>
        {projetos.map((p, i) => (
          <li key={p.nome} className="reveal" style={{ '--d': `${(i % 2) * 120}ms` } as CSSProperties}>
            <Card p={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
