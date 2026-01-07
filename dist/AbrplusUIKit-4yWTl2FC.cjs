"use strict";
const index = require("./index-D1yLR6A8.cjs");
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
    index.initializeI18n(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
exports.AbrplusUIKit = AbrplusUIKit;
