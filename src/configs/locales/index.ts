//ignore-localize
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import fa from './fa';

const languageNames = {
  fa: 'فارسی',
  en: 'English',
};

export type Language = keyof typeof languageNames;
export type Resources = Record<Language, Record<string, string>>;

i18n.use(initReactI18next);

function getValidLanguage(lang: Language) {
  if (lang === 'fa' || lang === 'en') {
    return lang;
  }

  return 'fa';
}

const initializeI18n = (lang: Language = 'fa', resources?: Resources) => {
  i18n.init({
    resources: {
      fa: {
        translation: { ...fa, ...resources?.fa },
      },
      en: {
        translation: { ...en, ...resources?.en },
      },
    },
    lng: getValidLanguage(lang as Language),
    fallbackLng: 'fa',
    debug: false,
  });
};

const getLanguageName = () => {
  return languageNames[(i18n.language as keyof typeof languageNames) || 'fa'];
};

export { i18n, initializeI18n, getLanguageName };
