type TranslationKeys<T extends Record<string, any>> = {
    [K in keyof T]: K extends string ? T[K] extends Record<string, any> ? `${K}.${TranslationKeys<T[K]>}` : K : never;
}[keyof T];
export type I18nextTFunction<T extends Record<string, any>> = <K extends TranslationKeys<T>>(key: K, ...params: any) => string;
export {};
