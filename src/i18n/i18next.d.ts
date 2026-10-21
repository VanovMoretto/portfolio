import 'i18next'
import type { Mensagens } from './pt'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: { translation: Mensagens }
  }
}
