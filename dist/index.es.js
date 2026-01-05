/* empty css         */
import { c as n } from "./colors-JhMxZzJC.js";
import { i as l } from "./index-DD7ZOJPU.js";
import { jsx as g } from "react/jsx-runtime";
import s from "antd/locale/en_US";
import h from "antd/locale/fa_IR";
import { ConfigProvider as d } from "antd";
const C = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,html}"]
  },
  theme: {
    fontFamily: {
      "yekan-normal": "YekanBakhFaRegular",
      "yekan-medium": "YekanBakhFaMedium",
      "yekan-light": "YekanBakhFaLight",
      "yekan-bold": "YekanBakhFaBold",
      "roboto-normal": "RobotoRegular",
      "roboto-light": "RobotoLight",
      "roboto-medium": "RobotoMedium",
      "roboto-bold": "RobotoBold"
    },
    colors: {
      "white-ff": "#ffffff",
      "white-ff-10": "#ffffff10",
      "white-ff-15": "#ffffff15",
      "white-ff-20": "#ffffff20",
      "white-ff-35": "#ffffff35",
      "light-1": "#f8f9fb",
      "light-2": "#f1f3f8",
      "light-3": "#f9fbff",
      "light-4": "#f7fafe",
      "light-5": "#ebf3ff",
      "light-6": "#eaeff5",
      "light-7": "#d9e1ea",
      primary: "#435879",
      "primary-dark-1": "#2b4063",
      "primary-dark-2": "#192540",
      "primary-light-1": "#516b93",
      "primary-light-2": "#91a8c3",
      "primary-light-3": "#b8c7d8",
      secondary: "#1e51c1",
      "secondary-dark-1": "#163b8e",
      "secondary-light-1": "#2159d4",
      "secondary-light-2": "#386de0",
      tertiary: "#1ba9c7",
      "tertiary-dark-1": "#489fb5",
      negative: "#c9252d",
      "negative-dark-1": "#bb121a",
      "negative-light-1": "#d7373f",
      "negative-light-2": "#e34850",
      "negative-light-3": "#f6d8da",
      "negative-light-4": "#f9e3e4",
      "negative-light-5": "#fdf3f3",
      positive: "#268e6c",
      "positive-dark-1": "#12805c",
      "positive-dark-2": "#107154",
      "positive-light-2": "#2d9d78",
      "positive-light-3": "#eefaf6",
      "sales-action": "#ec6c2c",
      black: "#000000",
      transparent: "transparent",
      "sales-action-dark-1": "#bc5624",
      "sales-action-light-1": "#ff8136",
      "sales-action-light-2": "#ff973e",
      "sales-action-light-3": "#ffac48",
      "call-action": "#8345c9",
      "call-action-dark-1": "#6837a0",
      "call-action-light-1": "#9d52f1",
      "call-action-light-2": "#b760ff",
      "call-action-light-3": "#d16eff",
      "marketing-action": "#2962ff",
      "marketing-action-dark-1": "#1043ce",
      "marketing-action-light-1": "#3175ff",
      "marketing-action-light-2": "#3d8cff",
      "marketing-action-light-3": "#4ea3ff",
      "club-action": "#d21369",
      "club-action-dark-1": "#a80f54",
      "club-action-light-1": "#fc167e",
      "club-action-light-2": "#ff1a93",
      "club-action-light-3": "#ff27ab",
      "team-action": "#B5179E",
      "team-action-dark-1": "#9E218C",
      "team-action-light-1": "#D834C0",
      "team-action-light-2": "#F841DD",
      "team-action-light-3": "#FF56E6",
      "desk-action": "#50C877",
      "desk-action-dark-1": "#3B965B",
      "desk-action-light-1": "#60D38F",
      "desk-action-light-2": "#6BDBA2",
      "desk-action-light-3": "#80E9BF",
      "form-action": "#00BFA5",
      "form-action-dark-1": "#00927E",
      "form-action-light-1": "#00CCB7",
      "form-action-light-2": "#03D5C4",
      "form-action-light-3": "#05E4DB",
      "task-action": "#5066D4",
      "task-action-dark-1": "#3C4C9F",
      "task-action-light-1": "#617ADD",
      "task-action-light-2": "#6D8AE3",
      "task-action-light-3": "#81A2EE",
      "rayan-action": "#5066D4",
      "rayan-action-dark-1": "#3C4C9F",
      "rayan-action-light-1": "#617ADD",
      "rayan-action-light-2": "#6D8AE3",
      "rayan-action-light-3": "#81A2EE"
    }
  }
};
class r {
  static instance = null;
  configs;
  constructor(t) {
    this.configs = t, this.init();
  }
  static config(t = {}) {
    return r.instance || (r.instance = new r(t)), r.instance;
  }
  init() {
    l(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
const m = (e) => {
  const t = e === "fa", o = t ? "rtl" : "ltr", i = t ? h : s;
  return { theme: {
    token: {
      fontFamily: t ? "YekanBakhFaRegular" : "RobotoRegular",
      colorPrimary: n.primary,
      colorSuccess: n.positive,
      colorError: n.negative,
      borderRadius: 4
    },
    components: {
      Input: {
        colorBorder: n.primary_light_3,
        hoverBorderColor: n.primary_dark_1,
        colorBgContainerDisabled: n.light_6
      }
    }
  }, direction: o, locale: i };
};
function c(e, t) {
  const o = { ...e };
  if (e && typeof e == "object" && t && typeof t == "object") {
    for (const i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        const a = t[i], f = o[i];
        a && typeof a == "object" && !Array.isArray(a) && f && typeof f == "object" && !Array.isArray(f) ? o[i] = c(f, a) : a !== void 0 && (o[i] = a);
      }
  }
  return o;
}
const D = ({
  children: e,
  locales: t,
  antdConfigs: o = {}
}) => {
  r.config({
    locales: t
  });
  const i = m(t?.lang ?? "fa"), a = c(i, o);
  return /* @__PURE__ */ g(d, { ...a, children: e });
};
export {
  r as AbrplusUIKit,
  D as AbrplusUIKitProvider,
  n as colors,
  C as tailwindConfig
};
