import { i as s } from "./index-DD7ZOJPU.js";
class i {
  static instance = null;
  configs;
  constructor(n) {
    this.configs = n, this.init();
  }
  static config(n = {}) {
    return i.instance || (i.instance = new i(n)), i.instance;
  }
  init() {
    s(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
export {
  i as A
};
