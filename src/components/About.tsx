import { useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import Titulo from './Titulo'
import { back, front, perfil, type Tech } from '../data'
import s from './About.module.css'

type AnelProps = {
  itens: Tech[]
  raio: number
  dur: number
  inverso?: boolean
  tracejado?: boolean
  onAtivo: (t: Tech | null) => void
}

function Anel({ itens, raio, dur, inverso, tracejado, onAtivo }: AnelProps) {
  const estilo = {
    '--r': `${raio}px`,
    '--dur': `${dur}s`,
    '--dir': inverso ? 'reverse' : 'normal',
    '--idir': inverso ? 'normal' : 'reverse',
  } as CSSProperties

  return (
    <div className={`${s.anel} ${tracejado ? s.tracejado : ''}`} style={estilo}>
      {itens.map((t, i) => (
        <span key={t.nome} className={s.pos} style={{ '--a': `${(360 / itens.length) * i}deg`, '--c': t.cor } as CSSProperties}>
          <span
            className={s.chip}
            tabIndex={0}
            onMouseEnter={() => onAtivo(t)}
            onMouseLeave={() => onAtivo(null)}
            onFocus={() => onAtivo(t)}
            onBlur={() => onAtivo(null)}
          >
            {t.nome}
          </span>
        </span>
      ))}
    </div>
  )
}

function Orbita() {
  const { t } = useTranslation()
  const [ativo, setAtivo] = useState<Tech | null>(null)
  const usos = t('stack', { returnObjects: true }) as Record<string, string[]>

  return (
    <div className={s.cena}>
      <div className={s.orbita} aria-label={t('sobre.orbita')}>
        <div className={s.nucleo} style={{ '--c': ativo?.cor ?? 'transparent' } as CSSProperties} aria-live="polite">
          <strong>{ativo ? ativo.nome : t('sobre.nucleo')}</strong>
          <small>{ativo ? (usos[ativo.nome] ?? []).join(', ') : t('sobre.dica')}</small>
        </div>
        <Anel itens={front} raio={142} dur={64} onAtivo={setAtivo} />
        <Anel itens={back} raio={232} dur={84} inverso tracejado onAtivo={setAtivo} />
      </div>
      <p className={s.legenda}>
        <i className={s.ponto} /> {t('sobre.legendaFront')}
        <i className={`${s.ponto} ${s.pontoBack}`} /> {t('sobre.legendaBack')}
      </p>
    </div>
  )
}

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="sobre" className="secao">
      <div className={s.topo}>
        <div className={s.retrato} data-revela="cortina">
          {perfil.foto ? (
            <img src={perfil.foto} alt={t('sobre.foto')} width={800} height={800} loading="lazy" />
          ) : (
            <span className={s.monograma} aria-hidden="true">
              VM
            </span>
          )}
        </div>
        <div>
          <Titulo className="titulo" texto={t('sobre.titulo')} />
          <p className="lead" data-revela="subir">
            {t('sobre.lead')}
          </p>
          <dl className={s.itens} data-revela="grupo">
            {t('sobre.itens', { returnObjects: true }).map((x, i) => (
              // key pelo índice: o texto muda com o idioma
              <div key={i}>
                <dt>{x.t}</dt>
                <dd>{x.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={s.ferramentas}>
        <h3 data-revela="subir">{t('sobre.stackTitulo')}</h3>
        <div data-revela="subir" style={{ '--d': '150ms' } as CSSProperties}>
          <Orbita />
        </div>
      </div>
    </section>
  )
}
