// type Escape<T extends string | number | symbol> = T extends `- ${infer R}` ? R : T;

// type GetParams<T> = T extends `${infer _L}{{${infer U}}}${infer R}`
//   ? Escape<U> | GetParams<R>
//   : never;

type TranslationKeys<T extends Record<string, any>> = {
  [K in keyof T]: K extends string
    ? T[K] extends Record<string, any>
      ? `${K}.${TranslationKeys<T[K]>}`
      : K
    : never;
}[keyof T];
// type ExtractParams<T extends string> = GetParams<T> extends never
//   ? void
//   : Record<GetParams<T>, string>;
export type I18nextTFunction<T extends Record<string, any>> = <K extends TranslationKeys<T>>(
  key: K,
  ...params: any
  // ExtractParams<K> extends void ? [] : [ExtractParams<K>]
) => string;
