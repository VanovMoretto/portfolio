import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import pt from './pt'
import en from './en'
import es from './es'

export const idiomas = [
  { codigo: 'pt', nome: 'Português', html: 'pt-BR' },
  { codigo: 'en', nome: 'English', html: 'en' },
  { codigo: 'es', nome: 'Español', html: 'es' },
] as const

export type Idioma = (typeof idiomas)[number]['codigo']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { pt: { translation: pt }, en: { translation: en }, es: { translation: es } },
    supportedLngs: idiomas.map((i) => i.codigo),
    fallbackLng: 'pt',
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], lookupLocalStorage: 'idioma', caches: ['localStorage'] },
  })

function aplicar(lng: string) {
  const idioma = idiomas.find((i) => lng.startsWith(i.codigo)) ?? idiomas[0]
  document.documentElement.lang = idioma.html
  document.title = i18n.t('meta.titulo')
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.descricao'))
}
aplicar(i18n.resolvedLanguage ?? 'pt')
i18n.on('languageChanged', aplicar)

export default i18n
