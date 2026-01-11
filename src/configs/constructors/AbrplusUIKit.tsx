import { Language, Resources, initializeI18n } from '@configs/locales';
import { APP_NAME } from '@configs/types';

export interface AbrplusUIKitType {
  locales?: {
    lang?: Language;
    resources?: Resources;
  };
  appName?: APP_NAME
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

  public getAppName() {
    return this.configs.appName as APP_NAME
  }
}
