import { Language, Resources, initializeI18n } from '@configs/locales';

export interface AbrplusUIKitType {
  locales?: {
    lang?: Language;
    resources?: Resources;
  };
}

export class AbrplusUIKit {
  private static instance: AbrplusUIKit | null = null;

  private configs: AbrplusUIKitType;

  private constructor(configs: AbrplusUIKitType) {
    this.configs = configs;
    this.init();
  }

  static config(configs: AbrplusUIKitType = {}) {
    if (!AbrplusUIKit.instance) {
      AbrplusUIKit.instance = new AbrplusUIKit(configs);
    }

    return AbrplusUIKit.instance;
  }

  private init() {
    initializeI18n(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
