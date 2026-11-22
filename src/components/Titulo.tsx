import { Fragment, type CSSProperties, type ElementType } from 'react'

type Props = { texto: string; como?: ElementType; className?: string; id?: string }

// título que entra palavra por palavra, subindo de trás de uma máscara
export default function Titulo({ texto, como: Tag = 'h2', className, id }: Props) {
  const palavras = texto.split(' ')
  return (
    <Tag className={className} id={id} data-revela="titulo">
      {palavras.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && ' '}
          <span className="palavra">
            <span style={{ '--i': i } as CSSProperties}>{p}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}
