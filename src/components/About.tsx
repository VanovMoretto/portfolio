import type { CSSProperties } from 'react'
import { perfil } from '../data'
import s from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className="secao">
      <h2 className="titulo reveal">{perfil.sobreTitulo}</h2>
      <p className="lead reveal">{perfil.sobreLead}</p>
      <ul className={s.lista}>
        {perfil.sobre.map((x, i) => (
          <li key={x.t} className={`${s.item} reveal`} style={{ '--d': `${i * 120}ms` } as CSSProperties}>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
