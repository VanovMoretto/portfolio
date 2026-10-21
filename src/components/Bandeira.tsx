import type { Idioma } from '../i18n'

export default function Bandeira({ idioma, className }: { idioma: Idioma; className?: string }) {
  if (idioma === 'pt') {
    return (
      <svg className={className} viewBox="0 0 28 20" aria-hidden="true">
        <rect width="28" height="20" fill="#009c3b" />
        <path d="M14 2.6 25.4 10 14 17.4 2.6 10z" fill="#ffdf00" />
        <circle cx="14" cy="10" r="4.7" fill="#002776" />
        <path d="M9.5 9.1c3-.7 6.3-.3 9 1.4" stroke="#fff" strokeWidth=".9" fill="none" />
      </svg>
    )
  }

  const listra = 20 / 13
  return (
    <svg className={className} viewBox="0 0 28 20" aria-hidden="true">
      <rect width="28" height="20" fill="#fff" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * 2 * listra} width="28" height={listra} fill="#b22234" />
      ))}
      <rect width="11.2" height={listra * 7} fill="#3c3b6e" />
      {Array.from({ length: 20 }, (_, i) => (
        <circle key={i} cx={1.3 + (i % 5) * 2.15 + (Math.floor(i / 5) % 2) * 1.07} cy={1.4 + Math.floor(i / 5) * 2.45} r=".45" fill="#fff" />
      ))}
    </svg>
  )
}
