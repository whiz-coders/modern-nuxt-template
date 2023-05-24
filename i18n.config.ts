import english from './assets/locales/english'
import chinese from './assets/locales/chinese'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: english,
    ch: chinese
  }
}))
