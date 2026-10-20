import Social from './Social'
import s from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contato" className={`secao ${s.contato}`}>
      <h2 className={`${s.chamada} reveal`}>Vamos construir algo juntos?</h2>
      <p className="lead reveal">Estou aberto a vagas de desenvolvedor front-end e full-stack júnior. Me chame por onde for melhor.</p>
      <div className={`${s.links} reveal`}>
        <Social />
      </div>
    </section>
  )
}
