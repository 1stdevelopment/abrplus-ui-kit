import { jsx as n, jsxs as v } from "react/jsx-runtime";
import { Avatar as d, ConfigProvider as w, Dropdown as N, Image as I } from "antd";
import { twMerge as m } from "tailwind-merge";
import { useState as L, useEffect as S } from "react";
import { F as g, L as b } from "./index-DI0LUNl-.js";
const y = ({ className: e, ...o }) => /* @__PURE__ */ n(d, { ...o, className: m("bg-light-7 border-primary-light-3", e) }), B = ({ className: e, max: o, ...t }) => /* @__PURE__ */ n(d.Group, { max: o, ...t, className: m(e) });
y.Group = B;
const D = {
  components: {
    Dropdown: {}
  }
}, $ = ({ className: e, ...o }) => /* @__PURE__ */ n(w, { theme: D, children: /* @__PURE__ */ n(N, { ...o, className: m("bg-light-7", e) }) }), k = ({
  preview: e = !1,
  width: o,
  height: t,
  fallback: c,
  onError: s,
  wrapperClassName: a,
  ...u
}) => {
  const [r, l] = L(!1);
  return /* @__PURE__ */ n(
    g,
    {
      style: { width: o, height: t },
      align: "center",
      justify: "center",
      className: a,
      children: r && c ? c : /* @__PURE__ */ n(
        I,
        {
          preview: e,
          onError: (i) => {
            l(!0), s?.(i);
          },
          width: o,
          height: t,
          ...u
        }
      )
    }
  );
}, E = (e) => document.getElementById(e), j = (e, o) => {
  let t;
  return function() {
    clearTimeout(t), t = setTimeout(e, o);
  };
}, H = ({
  children: e,
  indicatorColor: o,
  indicatorSize: t,
  className: c,
  hasMore: s,
  scrollableNodeId: a,
  onNextPage: u
}) => (S(() => {
  const r = E(a);
  if (r) {
    const l = () => {
      if (s) {
        const { scrollHeight: p, scrollTop: f, clientHeight: h } = r;
        Math.ceil(f) + h === p && u();
      }
    };
    l();
    const i = j(l, 1500);
    return r.addEventListener("scroll", i), () => r.removeEventListener("scroll", i);
  }
}, [s, a]), /* @__PURE__ */ v("div", { className: m(c, "w-full"), onClick: (r) => r.stopPropagation(), children: [
  e,
  s && /* @__PURE__ */ n(g, { className: "min-h-12", align: "center", justify: "center", children: /* @__PURE__ */ n(b, { isLoading: !0, color: o, size: t }) })
] }));
export {
  y as A,
  $ as D,
  H as I,
  k as a
};
