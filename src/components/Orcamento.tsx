import { useState, type CSSProperties, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { linkWhatsApp, necessidades, prazos, type Prazo } from '../data'
import { alternar, useNecessidades } from '../orcamento'
import Social from './Social'
import Titulo from './Titulo'
import s from './Orcamento.module.css'

export default function Orcamento() {
  const { t } = useTranslation()
  const marcadas = useNecessidades()
  const [nome, setNome] = useState('')
  const [negocio, setNegocio] = useState('')
  const [prazo, setPrazo] = useState<Prazo | null>(null)
  const [detalhes, setDetalhes] = useState('')
  const [tentou, setTentou] = useState(false)

  const valido = nome.trim() !== '' && (detalhes.trim() !== '' || marcadas.length > 0)

  const mensagem = () => {
    const m = t('orcamento.mensagem', { returnObjects: true })
    const dados = [
      `${m.nome}: ${nome.trim()}`,
      negocio.trim() && `${m.negocio}: ${negocio.trim()}`,
      marcadas.length > 0 && `${m.precisa}: ${marcadas.map((n) => t(`necessidades.${n}`)).join(', ')}`,
      prazo && `${m.prazo}: ${t(`orcamento.prazos.${prazo}`)}`,
    ].filter(Boolean)
    const partes = [m.abertura, dados.join('\n')]
    if (detalhes.trim()) partes.push(`${m.detalhes}:\n${detalhes.trim()}`)
    return partes.join('\n\n')
  }

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTentou(true)
    if (!valido) return
    const canal = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value
    const texto = mensagem()
    if (canal === 'email') {
      const assunto = `${t('orcamento.mensagem.assunto')} | ${nome.trim()}`
      location.href = `mailto:${t('contato.endereco')}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`
    } else {
      window.open(linkWhatsApp(texto), '_blank', 'noopener')
    }
  }

  return (
    <section id="orcamento" className={s.faixa}>
      <div className={`secao ${s.grade}`}>
        <div className={s.chamada}>
          <Titulo className="titulo" texto={t('orcamento.titulo')} />
          <p className="lead" data-revela="subir">
            {t('orcamento.lead')}
          </p>
          <div className={s.outros} data-revela="subir" style={{ '--d': '120ms' } as CSSProperties}>
            <p>{t('orcamento.ou')}</p>
            <Social />
          </div>
        </div>

        <form
          className={s.form}
          onSubmit={enviar}
          noValidate
          data-revela="subir"
          style={{ '--d': '160ms' } as CSSProperties}
        >
          <div className={s.duas}>
            <label className={s.campo}>
              <span>{t('orcamento.nome')}</span>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder={t('orcamento.nomeExemplo')}
                autoComplete="name"
                aria-invalid={tentou && nome.trim() === ''}
                required
              />
            </label>
            <label className={s.campo}>
              <span>{t('orcamento.negocio')}</span>
              <input
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                placeholder={t('orcamento.negocioExemplo')}
                autoComplete="organization"
              />
            </label>
          </div>

          <fieldset className={s.grupo}>
            <legend>{t('orcamento.precisa')}</legend>
            <div className={s.opcoes}>
              {necessidades.map((n) => (
                <label key={n} className={s.opcao}>
                  <input type="checkbox" checked={marcadas.includes(n)} onChange={() => alternar(n)} />
                  <span>{t(`necessidades.${n}`)}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={s.grupo}>
            <legend>{t('orcamento.prazo')}</legend>
            <div className={s.opcoes}>
              {prazos.map((p) => (
                <label key={p} className={s.opcao}>
                  <input type="radio" name="prazo" checked={prazo === p} onChange={() => setPrazo(p)} />
                  <span>{t(`orcamento.prazos.${p}`)}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className={s.campo}>
            <span>{t('orcamento.detalhes')}</span>
            <textarea
              value={detalhes}
              onChange={(e) => setDetalhes(e.target.value)}
              placeholder={t('orcamento.detalhesExemplo')}
              rows={4}
            />
          </label>

          {tentou && !valido && (
            <p className={s.aviso} role="alert">
              {t('orcamento.faltam')}
            </p>
          )}

          <div className={s.botoes}>
            <button className="botao botao-acao" type="submit" value="whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.05 2a9.9 9.9 0 0 0-8.53 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.05 2zm5.43 13.97c-.23.65-1.36 1.25-1.9 1.3-.48.05-1.1.07-1.78-.11-.41-.13-.94-.3-1.61-.6-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.15-1.53-1.15-2.92s.73-2.07.99-2.36c.26-.28.56-.35.75-.35h.54c.17 0 .41-.06.63.48.23.56.79 1.93.86 2.07.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.3.37-.42.49-.14.14-.29.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.16 1.33z" />
              </svg>
              {t('orcamento.enviarWhatsapp')}
            </button>
            <button className="botao botao-linha" type="submit" value="email">
              {t('orcamento.enviarEmail')}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
