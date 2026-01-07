import { jsx } from "react/jsx-runtime";
import { A as AbrplusUIKit } from "./AbrplusUIKit-BlztDcB2.js";
import EN from "antd/locale/en_US";
import FA from "antd/locale/fa_IR";
import { c as colors } from "./colors-BmRCmHtR.js";
import { ConfigProvider } from "antd";
const useAntConfig = (language) => {
  const isFA = language === "fa";
  const direction = isFA ? "rtl" : "ltr";
  const locale = isFA ? FA : EN;
  const theme = {
    token: {
      fontFamily: isFA ? "YekanBakhFaRegular" : "RobotoRegular",
      colorPrimary: colors.primary,
      colorSuccess: colors.positive,
      colorError: colors.negative,
      borderRadius: 4
    },
    components: {
      Input: {
        colorBorder: colors.primary_light_3,
        hoverBorderColor: colors.primary_dark_1,
        colorBgContainerDisabled: colors.light_6
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
  antdConfigs = {}
}) => {
  AbrplusUIKit.config({
    locales
  });
  const defaultAntDConfigs = useAntConfig(locales?.lang ?? "fa");
  const mergedConfigs = deepMerge(defaultAntDConfigs, antdConfigs);
  return /* @__PURE__ */ jsx(ConfigProvider, { ...mergedConfigs, children });
};
export {
  AbrplusUIKitProvider
};
