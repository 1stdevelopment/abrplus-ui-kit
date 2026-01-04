import { default as i18n } from 'i18next';
declare const languageNames: {
    fa: string;
    en: string;
};
export type Language = keyof typeof languageNames;
export type Resources = Record<Language, Record<string, string>>;
declare const initializeI18n: (lang?: Language, resources?: Resources) => void;
declare const getLanguageName: () => string;
export { getLanguageName, i18n, initializeI18n };
