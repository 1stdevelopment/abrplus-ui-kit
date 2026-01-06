import { jsx as s } from "react/jsx-runtime";
import f from "antd/locale/en_US";
import l from "antd/locale/fa_IR";
import { c as n } from "./colors-JhMxZzJC.js";
import { ConfigProvider as p } from "antd";
import { A as m } from "./AbrplusUIKit-D-1mE_X7.js";
const y = (i) => {
  const o = i === "fa", e = o ? "rtl" : "ltr", r = o ? l : f;
  return { theme: {
    token: {
      fontFamily: o ? "YekanBakhFaRegular" : "RobotoRegular",
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
  }, direction: e, locale: r };
};
function c(i, o) {
  const e = { ...i };
  if (i && typeof i == "object" && o && typeof o == "object") {
    for (const r in o)
      if (Object.prototype.hasOwnProperty.call(o, r)) {
        const t = o[r], a = e[r];
        t && typeof t == "object" && !Array.isArray(t) && a && typeof a == "object" && !Array.isArray(a) ? e[r] = c(a, t) : t !== void 0 && (e[r] = t);
      }
  }
  return e;
}
const j = ({
  children: i,
  locales: o,
  antdConfigs: e = {}
}) => {
  m.config({
    locales: o
  });
  const r = y(o?.lang ?? "fa"), t = c(r, e);
  return /* @__PURE__ */ s(p, { ...t, children: i });
};
export {
  j as AbrplusUIKitProvider
};
