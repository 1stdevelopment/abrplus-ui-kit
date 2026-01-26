"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const EN = require("antd/locale/en_US");
const FA = require("antd/locale/fa_IR");
const colors = require("./colors-TPZkyKI4.cjs");
const antd = require("antd");
const useAntConfig = (language) => {
  const isFA = language === "fa";
  const direction = isFA ? "rtl" : "ltr";
  const locale = isFA ? FA : EN;
  const theme = {
    token: {
      fontFamily: isFA ? "YekanBakhFaRegular" : "RobotoRegular",
      colorPrimary: colors.colors.primary,
      colorSuccess: colors.colors.positive,
      colorError: colors.colors.negative,
      borderRadius: 4
    },
    components: {
      Input: {
        colorBorder: colors.colors.primary_light_3,
        hoverBorderColor: colors.colors.primary_dark_1,
        colorBgContainerDisabled: colors.colors.light_6
      },
      Collapse: {
        headerBg: colors.colors.light_2
      }
    }
  };
  return { theme, direction, locale };
};
function deepMerge(target, source) {
  const output = { ...target };
  if (target && typeof target === "object" && source && typeof source === "object") {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const targetValue = output[key];
        if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue) && targetValue && typeof targetValue === "object" && !Array.isArray(targetValue)) {
          output[key] = deepMerge(targetValue, sourceValue);
        } else if (sourceValue !== void 0) {
          output[key] = sourceValue;
        }
      }
    }
  }
  return output;
}
const AbrplusUIKitProvider = ({
  children,
  locales,
  appName,
  antdConfigs = {}
}) => {
  colors.AbrplusUIKit.config({
    locales,
    appName
  });
  const defaultAntDConfigs = useAntConfig(locales?.lang ?? "fa");
  const mergedConfigs = deepMerge(defaultAntDConfigs, antdConfigs);
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { ...mergedConfigs, children });
};
exports.AbrplusUIKitProvider = AbrplusUIKitProvider;
