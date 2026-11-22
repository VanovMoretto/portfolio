import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Orcamento from './components/Orcamento'
import Social from './components/Social'
import { perfil } from './data'

export default function App() {
  const { t } = useTranslation()

  // marca o que entrou na tela; o CSS cuida da animação
  useEffect(() => {
    const observar = (threshold: number) => {
      const io = new IntersectionObserver(
        (entradas) =>
          entradas.forEach((e) => {
            if (!e.isIntersecting) return
            // o que está dentro de uma cortina entra junto com ela
            ;[e.target, ...e.target.querySelectorAll('[data-revela]')].forEach((el) => el.setAttribute('data-visto', ''))
            io.unobserve(e.target)
          }),
        { rootMargin: '0px 0px -8% 0px', threshold },
      )
      return io
    }
    const geral = observar(0.12)
    // a cortina começa quase fechada (1px à mostra): qualquer pixel visível já conta
    const cortina = observar(0)
    document.querySelectorAll('[data-revela]').forEach((el) =>
      (el.getAttribute('data-revela') === 'cortina' ? cortina : geral).observe(el),
    )
    return () => {
      geral.disconnect()
      cortina.disconnect()
    }
  }, [])

  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Orcamento />
      </main>
      <footer className="rodape">
        <p>{t('rodape', { ano: new Date().getFullYear(), nome: perfil.nome })}</p>
        <Social pequeno />
      </footer>
    </>
  )
}
