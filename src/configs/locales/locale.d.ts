import { i18n as OriginalI18n } from 'i18next';
import 'react-i18next';

import fa from './src/locales/fa';
import { I18nextTFunction } from './src/locales/i18nextTFunction';

type Fa = typeof fa;

type GetParams<T> = T extends `${infer L}{{${infer U}}}${infer R}`
  ? Escape<U> | GetParams<R> | GetParams<L>
  : never;

type Escape<T extends number | string | symbol> = T extends `- ${infer R}` ? R : T;

export type I18nextTFunction<T extends Record<string, string>> = <K extends keyof T = keyof T>(
  key: K,
  ...param: GetParams<T[K]> extends never ? [void] : [Record<GetParams<T[K]>, string>]
) => string;

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    // typeof fa
    translation: Record<keyof Fa, string>;
    server: Record<string, string>;
  }

  type TFuncReturn<N, TKeys, TDefaultResult, TKPrefix = undefined, T = DefaultResources> = string;

  interface i18n extends Omit<OriginalI18n, 't'> {
    t: I18nextTFunction<Fa>;
  }

  export function useTranslation(): {
    t: I18nextTFunction<Fa>;
    i18n: i18n;
    ready: boolean;
  };
}
declare module 'i18next' {
  export interface i18n extends Omit<OriginalI18n, 't'> {
    t: I18nextTFunction<Fa>;
  }
}
