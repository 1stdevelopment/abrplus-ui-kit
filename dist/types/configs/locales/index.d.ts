import { i18n as OriginalI18n } from 'i18next';
import { default as fa } from './fa';
import { I18nextTFunction } from './i18nextTFunction';
import { Fa } from './locale';
type TranslationKey = keyof typeof fa;
interface I18nInstance extends Omit<OriginalI18n, 't' | 'language'> {
    language: 'fa' | 'en';
    t: I18nextTFunction<Fa>;
}
declare const i18nInstance: I18nInstance;
export declare const defaultLanguage: string;
export { i18nInstance };
export type { TranslationKey };
