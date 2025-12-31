import i18n, { i18n as OriginalI18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { AppDirection } from '../types';
import en from './en';
import fa from './fa';
import { I18nextTFunction } from './i18nextTFunction';
import { Fa } from './locale';

type TranslationKey = keyof typeof fa;
interface I18nInstance extends Omit<OriginalI18n, 't' | 'language'> {
  language: 'fa' | 'en';
  t: I18nextTFunction<Fa>;
}

const i18nInstance = i18n as I18nInstance;

function getDefaultLanguage(): string {
  if (typeof window === 'undefined') return 'fa'; // fallback for Node/SSR
  return localStorage.getItem('language') ?? 'fa';
}

export const defaultLanguage = getDefaultLanguage();

i18nInstance.use(initReactI18next).use(LanguageDetector);

function getValidLanguage(lang: string) {
  if (['fa', 'en'].includes(lang)) {
    return lang;
  }

  return defaultLanguage;
}

function onLanguageChange(lang: string) {
  try {
    const htmlCollection = document.getElementsByTagName('html');
    const bodyCollection = document.getElementsByTagName('body');

    const htmlTags = Array.from(htmlCollection);
    const bodyTags = Array.from(bodyCollection);

    htmlTags.forEach((htmlTag) => {
      htmlTag.lang = lang;
    });

    bodyTags.forEach((bodyTag) => {
      const direction: AppDirection = lang === 'fa' ? 'rtl' : 'ltr';

      const bodyClasses = Array.from(bodyTag.classList.values());

      const bodyDirClasses = bodyClasses.filter((bodyClass) => bodyClass.startsWith('direction'));

      bodyTag.classList.remove(...bodyDirClasses);
      bodyTag.classList.add(`direction-${direction}`);
    });
  } catch (error) {
    //
  }
}

i18nInstance
  .init({
    resources: {
      fa: {
        translation: fa,
      },
      en: {
        translation: en,
      },
    },
    lng: getValidLanguage(defaultLanguage),
    fallbackLng: defaultLanguage,
    detection: {
      caches: ['localStorage', 'cookie'],
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
      lookupLocalStorage: 'language',
      lookupCookie: 'language',
    },
  })
  .then(() => {
    if (typeof document !== 'undefined') {
      onLanguageChange(getValidLanguage(defaultLanguage));

      i18nInstance.on('languageChanged', onLanguageChange);
    }
  });

export { i18nInstance };
export type { TranslationKey };
