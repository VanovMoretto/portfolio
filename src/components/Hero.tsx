import { useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { back, front, perfil, type Tech } from '../data'
import Social from './Social'
import s from './Hero.module.css'

type AnelProps = {
  itens: Tech[]; raio: number; dur: number; inverso?: boolean; tracejado?: boolean
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
        <span
          key={t.nome}
          className={s.pos}
          style={{ '--a': `${(360 / itens.length) * i}deg`, '--c': t.cor } as CSSProperties}
        >
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

export default function Hero() {
  const { t } = useTranslation()
  const [ativo, setAtivo] = useState<Tech | null>(null)
  const usos = t('stack', { returnObjects: true }) as Record<string, string[]>

  return (
    <section className={`secao ${s.hero}`}>
      <div className={s.texto}>
        <p className={s.selo}>{t('hero.selo')}</p>
        <h1 className={s.nome}>{perfil.nome}</h1>
        <p className={s.cargo}>{t('hero.cargo')}</p>
        <p className="lead">{t('hero.subtitulo')}</p>
        <div className={s.acoes}>
          <a className={s.primario} href="#projetos">{t('hero.verProjetos')}</a>
          <Social />
        </div>
      </div>

      <div className={s.cena}>
        <div className={s.orbita} aria-label={t('hero.orbita')}>
          <div className={s.nucleo} style={{ '--c': ativo?.cor ?? '#5b8bff' } as CSSProperties} aria-live="polite">
            <strong>{ativo ? ativo.nome : t('hero.nucleo')}</strong>
            <small>{ativo ? (usos[ativo.nome] ?? []).join(', ') : t('hero.dica')}</small>
          </div>
          <Anel itens={front} raio={125} dur={48} onAtivo={setAtivo} />
          <Anel itens={back} raio={210} dur={70} inverso tracejado onAtivo={setAtivo} />
        </div>
        <p className={s.legenda}>
          <i className={s.ponto} /> {t('hero.legendaFront')}
          <i className={`${s.ponto} ${s.pontoBack}`} /> {t('hero.legendaBack')}
        </p>
      </div>
    </section>
  )
}
