import { i as initializeI18n } from "./index-amcHqQ0c.js";
class AbrplusUIKit {
  static instance = null;
  configs;
  constructor(configs) {
    this.configs = configs;
    this.init();
  }
  static config(configs = {}) {
    if (!AbrplusUIKit.instance) {
      AbrplusUIKit.instance = new AbrplusUIKit(configs);
    }
    return AbrplusUIKit.instance;
  }
  init() {
    initializeI18n(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
export {
  AbrplusUIKit as A
};
