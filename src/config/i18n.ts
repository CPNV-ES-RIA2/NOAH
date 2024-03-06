import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'
import fr from '@/i18n/fr.json'
import en from '@/i18n/en.json'
import de from '@/i18n/de.json'


const resources = {
  fr: {
    translation: fr
  },
  en: {
    translation: en
  },
  de: {
    translation: de
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en"
  }) 

export default i18n