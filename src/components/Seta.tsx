export default function Seta({ fora = false }: { fora?: boolean }) {
  // fora: link que abre outro site
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={fora ? 'M6 14 14 6M7.5 6H14v6.5' : 'M4 10h12M11 5l5 5-5 5'} />
    </svg>
  )
}
