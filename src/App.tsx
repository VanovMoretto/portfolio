import { useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { perfil } from './data'

export default function App() {
  useEffect(() => {
    // 1) progresso da rolagem + parallax: guardamos em variáveis CSS
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

    // 2) revela cada elemento com a classe "reveal" quando ele aparece na tela
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
      <nav className="nav">
        <a className="logo" href="#topo">VM</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      <main id="topo">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="rodape">
        © {new Date().getFullYear()} {perfil.nome}. Feito com React, TypeScript e CSS Modules.
      </footer>
    </>
  )
}
