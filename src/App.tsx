import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import ThemeSwitch from './components/ThemeSwitch'
import LanguageSwitch from './components/LanguageSwitch'
import { perfil } from './data'

export default function App() {
  const { t } = useTranslation()

  useEffect(() => {
    let raf = 0
    const rolar = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight
        const estilo = document.documentElement.style
        estilo.setProperty('--scroll', String(scrollY))
        estilo.setProperty('--p', String(max > 0 ? scrollY / max : 0))
      })
    }
    rolar()
    addEventListener('scroll', rolar, { passive: true })

    const io = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => {
      removeEventListener('scroll', rolar)
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <div className="progresso" />
      <ThemeSwitch />
      <nav className="nav" aria-label={t('nav.rotulo')}>
        <a className="logo" href="#topo">VM</a>
        <a href="#projetos">{t('nav.projetos')}</a>
        <a href="#servicos">{t('nav.servicos')}</a>
        <a href="#sobre">{t('nav.sobre')}</a>
        <a href="#contato">{t('nav.contato')}</a>
      </nav>
      <LanguageSwitch />
      <main id="topo">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="rodape">
        {t('rodape', { ano: new Date().getFullYear(), nome: perfil.nome })}
      </footer>
    </>
  )
}
