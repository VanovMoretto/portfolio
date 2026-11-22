import { useSyncExternalStore } from 'react'
import type { Necessidade } from './data'

// o que o visitante marcou no topo aparece já marcado no formulário
let marcadas: Necessidade[] = []
const ouvintes = new Set<() => void>()

const assinar = (fn: () => void) => {
  ouvintes.add(fn)
  return () => ouvintes.delete(fn)
}

export function alternar(n: Necessidade) {
  marcadas = marcadas.includes(n) ? marcadas.filter((x) => x !== n) : [...marcadas, n]
  ouvintes.forEach((fn) => fn())
}

export const useNecessidades = () => useSyncExternalStore(assinar, () => marcadas)
