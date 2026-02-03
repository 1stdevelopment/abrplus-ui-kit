import { jsx } from "react/jsx-runtime";
import EN from "antd/locale/en_US";
import FA from "antd/locale/fa_IR";
import { c as colors, A as AbrplusUIKit } from "./colors-CztsZ6e_.js";
import { d as deepMerge } from "./deepMerge-CG1he8ZD.js";
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
      },
      Collapse: {
        headerBg: colors.light_2
      }
    }
  };
  return { theme, direction, locale };
};
const AbrplusUIKitProvider = ({
  children,
  locales,
  appName,
  antdConfigs = {}
}) => {
  AbrplusUIKit.config({
    locales,
    appName
  });
  const defaultAntDConfigs = useAntConfig(locales?.lang ?? "fa");
  const mergedConfigs = deepMerge(defaultAntDConfigs, antdConfigs);
  return /* @__PURE__ */ jsx(ConfigProvider, { ...mergedConfigs, children });
};
export {
  AbrplusUIKitProvider
};
