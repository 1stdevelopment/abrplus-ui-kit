import { jsx as n, jsxs as h } from "react/jsx-runtime";
import { Badge as Z, Collapse as V, Popover as I, Radio as W, ConfigProvider as K, Tabs as F } from "antd";
import { m as ee, T as $, a as A, d as B, I as U, B as ne } from "./index-Bk9iRvqL.js";
import { b as $e, c as Ae, C as Be, e as Ue, U as Se, V as Ge } from "./index-Bk9iRvqL.js";
import { twMerge as m } from "tailwind-merge";
import { useRef as S, useEffect as N, useMemo as re, useCallback as te, useState as G, Children as P, forwardRef as oe } from "react";
import { useTranslation as H } from "react-i18next";
import { F as u, R as E, I as x, T as v, L as q } from "./index-BTGezll4.js";
import { c as f } from "./colors-JhMxZzJC.js";
const je = ({ children: e, ...r }) => /* @__PURE__ */ n(Z, { ...r, children: e }), Le = ({ children: e, onClick: r, className: o, ...l }) => /* @__PURE__ */ n(
  "div",
  {
    onClick: r,
    className: m(
      "hover:bg-light-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors",
      o
    ),
    ...l,
    children: e
  }
), _e = ({
  children: e,
  onClickAway: r,
  document: o = window.document,
  active: l = !0,
  className: i,
  hasDefaultStyle: t = !0
}) => {
  const s = S(null);
  return N(() => {
    if (!l) return;
    const a = (c) => {
      s.current && !s.current.contains(c.target) && r();
    };
    return o.addEventListener("mousedown", a), () => {
      o.removeEventListener("mousedown", a);
    };
  }, [r, l, o]), /* @__PURE__ */ h(
    "div",
    {
      ref: s,
      ...t ? { className: m("flex h-full w-full flex-1", i) } : { className: i },
      children: [
        " ",
        e
      ]
    }
  );
}, ie = ({ ...e }) => /* @__PURE__ */ n(V, { ...e });
ie.Panel = V.Panel;
const Pe = ({
  helperText: e,
  required: r,
  label: o,
  error: l,
  wrapperClassName: i,
  onChange: t,
  onChangeISO: s,
  value: a,
  valueISO: c,
  locale: p,
  hideErrorMessage: d = !1,
  ...y
}) => {
  const { i18n: C } = H(), k = re(() => c ? ee(c) : a, [c, a]), D = te(
    (z, R) => {
      t?.(z, R), s?.(z?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ h(u, { vertical: !0, className: `w-full ${!d && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ h("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ n(E, { when: e, children: /* @__PURE__ */ n($, { variant: "default", title: e, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ n(x, { name: "Help_header", color: f.primary_light_3, size: 15 }) }) }),
      typeof o == "string" ? /* @__PURE__ */ n(v, { color: f.primary, children: o }) : o,
      /* @__PURE__ */ n(E, { when: r, children: /* @__PURE__ */ n(x, { name: "Asterisk", size: 6, color: f.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ n(
      A.DatePicker,
      {
        format: C.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: p || C.language === "fa" ? "fa" : "en",
        customColors: B,
        onChange: D,
        value: k,
        ...y
      }
    ),
    !d && l?.message && /* @__PURE__ */ n(U, { message: l?.message })
  ] });
}, Ye = ({ flex: e, direction: r = "horizontal" }) => /* @__PURE__ */ n(
  "div",
  {
    className: m("flex", r === "horizontal" ? "flex-row" : "flex-col"),
    style: { flex: e }
  }
), Te = ({ size: e }) => /* @__PURE__ */ n(u, { className: "h-full min-h-[100px] w-full", align: "center", justify: "center", children: /* @__PURE__ */ n(q, { isLoading: !0, size: e }) }), He = ({
  className: e,
  wrapperClassName: r,
  style: o,
  color: l,
  text: i
}) => /* @__PURE__ */ h(u, { "data-testid": "horizontal-line", className: r, align: "center", gap: 10, children: [
  i ? /* @__PURE__ */ n(
    v,
    {
      className: "whitespace-nowrap",
      weight: "normal",
      size: "medium",
      color: f.primary,
      children: i
    }
  ) : null,
  /* @__PURE__ */ n(
    "hr",
    {
      role: "separator",
      className: m("border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t", e),
      style: { ...o, borderTopColor: l }
    }
  )
] }), le = ({
  children: e,
  onChange: r,
  wrapperStyle: o,
  wrapperClassName: l,
  spaceBetweenTabs: i,
  activeStyleMode: t = "background",
  defaultTabKey: s,
  extraAfterItem: a,
  extraBeforeItem: c,
  extraBeforeChildren: p,
  extraAfterChildren: d,
  tabFontSize: y = 18,
  tabsClassName: C,
  tabClassName: k,
  tabsWrapperStyle: D,
  innerContentClassName: z,
  extraChildrenInheritBorder: R,
  hasBorder: Q = !0
}) => {
  const [w, j] = G(void 0);
  return N(() => {
    const g = P.map(e, ({ props: b }) => b)[0];
    if (!s) {
      j(g.tabKey);
      return;
    }
    j(s);
  }, []), /* @__PURE__ */ h(u, { style: o, vertical: !0, className: m("w-full flex-1", l), children: [
    /* @__PURE__ */ h(
      u,
      {
        align: "center",
        className: m(
          t === "underlined" && Q && "border-light-7 border-b border-solid"
        ),
        children: [
          c && /* @__PURE__ */ n(
            u,
            {
              justify: "center",
              className: m(
                "h-full px-2",
                R && "border-light-6 border-b border-solid"
              ),
              children: typeof c == "function" ? c(w) : c
            }
          ),
          /* @__PURE__ */ n(
            u,
            {
              align: "center",
              className: m(
                "w-full min-w-max flex-1 flex-row overflow-y-auto overflow-x-hidden",
                C
              ),
              gap: i !== void 0 ? i : 24,
              style: D,
              children: P.map(
                e,
                ({ props: { tabKey: g, title: b, className: L, style: _, isVisible: X = !0 } }) => X ? /* @__PURE__ */ n(
                  u,
                  {
                    align: "center",
                    justify: "center",
                    style: typeof _ == "function" ? _(w || g) : _,
                    className: m(
                      "relative h-full min-h-[35px] w-fit min-w-[24px] cursor-pointer rounded",
                      k,
                      typeof b == "string" ? "px-4 pb-2 pt-4" : "px-0 pb-2 pt-4",
                      g === w && (t === "background" ? "after:bg-primary-light-1 z-auto overflow-hidden px-4 after:absolute after:left-0 after:top-0 after:h-full after:w-full" : t === "underlined" ? " after:border-action z-auto after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-b-[2px] after:border-solid" : void 0),
                      typeof L == "function" ? L(w || g) : L
                    ),
                    onClick: () => {
                      j(g), r?.(g);
                    },
                    children: typeof b == "string" ? /* @__PURE__ */ n(
                      v,
                      {
                        size: y,
                        weight: "medium",
                        className: m(
                          "z-10",
                          t === "background" && g === w && "text-white-ff",
                          t === "underlined" && g === w && "text-action"
                        ),
                        children: b
                      }
                    ) : b?.(g === w ? f.negative : f.negative)
                  },
                  g
                ) : null
              )
            }
          ),
          a && /* @__PURE__ */ n(
            u,
            {
              justify: "center",
              align: "center",
              className: m(
                "h-full px-2",
                R && "border-light-6 border-b border-solid"
              ),
              children: typeof a == "function" ? a(w) : a
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ h(u, { className: m("max-w-full flex-1", z), children: [
      p && /* @__PURE__ */ n(u, { children: typeof p == "function" ? p(w) : p }),
      P.map(e, ({ props: { tabKey: g, children: b } }) => g === w ? /* @__PURE__ */ n(u, { className: "max-w-full flex-1", children: b }, g) : null),
      d && /* @__PURE__ */ n(u, { children: typeof d == "function" ? d(w) : d })
    ] })
  ] });
};
le.Tab = (e) => null;
const se = ({ children: e, size: r, color: o, weight: l, className: i, ...t }) => /* @__PURE__ */ n(
  u,
  {
    className: m("border-secondary items-center border-b border-dashed", i),
    ...t,
    children: /* @__PURE__ */ n(
      v,
      {
        className: "cursor-pointer select-none",
        color: o || f.secondary,
        size: r || 16,
        weight: l || "medium",
        children: e
      }
    )
  }
), ae = ({
  overlayInnerStyle: e,
  overlayClassName: r,
  overlayInnerClassName: o,
  headerTitle: l,
  content: i,
  closeable: t = !0,
  onClose: s,
  footer: a,
  ...c
}) => /* @__PURE__ */ n(
  I,
  {
    showArrow: !1,
    arrow: !1,
    overlayClassName: m("[&_.ant-popover-inner]:p-0", r),
    overlayInnerStyle: {
      boxShadow: "2px 3px 7px 0 rgba(67, 88, 121, 0.15)"
    },
    ...c,
    content: /* @__PURE__ */ h("div", { children: [
      l && /* @__PURE__ */ h(u, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1", children: [
        typeof l == "string" ? /* @__PURE__ */ n(v, { size: 12, weight: "medium", color: f.primary, children: l }) : l,
        t && /* @__PURE__ */ n(
          x,
          {
            name: "Close",
            className: "cursor-pointer",
            onClick: s,
            color: f.primary,
            size: 12
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { className: m("p-3", o), style: e, children: typeof i == "function" ? i() : i }),
      /* @__PURE__ */ n(u, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1", children: a })
    ] })
  }
);
ae.Link = se;
const ce = (e) => /* @__PURE__ */ n(W, { ...e });
ce.Group = W.Group;
function M() {
  const { innerWidth: e, innerHeight: r } = typeof window > "u" ? {
    innerWidth: 1024,
    innerHeight: 768
  } : window;
  return {
    width: e,
    height: r
  };
}
function ue() {
  const [e, r] = G(M()), o = [], l = () => {
    const { width: i, height: t } = M();
    (i !== e.width && o.includes("width") || t !== e.height && o.includes("height")) && r({ width: i, height: t });
  };
  return N(() => (window.addEventListener("resize", l), () => window.removeEventListener("resize", l)), []), new Proxy(e, {
    get(i, t) {
      return o.push(t), i[t];
    }
  });
}
const Me = ({
  helperText: e,
  required: r,
  label: o,
  error: l,
  wrapperClassName: i,
  value: t,
  hideErrorMessage: s = !1,
  ...a
}) => {
  const { i18n: c } = H(), p = (t?.filter(Boolean)?.length || 0) > 0 && !!t;
  return /* @__PURE__ */ h(u, { vertical: !0, className: `w-full ${!s && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ h("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ n(E, { when: e, children: /* @__PURE__ */ n($, { variant: "default", title: e, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ n(x, { name: "Help_header", color: f.primary_light_3, size: 15 }) }) }),
      typeof o == "string" ? /* @__PURE__ */ n(v, { color: f.primary, children: o }) : o,
      /* @__PURE__ */ n(E, { when: r, children: /* @__PURE__ */ n(x, { name: "Asterisk", size: 6, color: f.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ n(
      A.RangePicker,
      {
        format: c.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: c.language === "fa" ? "fa" : "en",
        customColors: B,
        value: p ? t : null,
        ...a
      }
    ),
    !s && l?.message && /* @__PURE__ */ n(U, { message: l?.message })
  ] });
}, Oe = ({ direction: e = "vertical", className: r }) => /* @__PURE__ */ n(
  "div",
  {
    role: "separator",
    className: m(
      "bg-light-7",
      e === "vertical" ? "mx-2 h-full w-[1px]" : "my-2 h-[1px] w-full",
      r
    )
  }
), fe = {
  components: {
    Tabs: {
      inkBarColor: f.secondary,
      itemColor: f.primary,
      itemSelectedColor: f.secondary,
      titleFontSize: 18,
      horizontalItemPadding: "0px",
      horizontalMargin: "0",
      itemHoverColor: f.primary_light_1,
      itemActiveColor: f.primary_light_2
    }
  }
}, de = (e) => /* @__PURE__ */ n(K, { theme: fe, children: /* @__PURE__ */ n(F, { ...e }) });
de.TabPane = F.TabPane;
function me(e, r) {
  typeof e == "function" ? e(r) : typeof e == "object" && e && "current" in e && (e.current = r);
}
function pe(...e) {
  return (r) => {
    e.forEach((o) => {
      me(o, r);
    });
  };
}
const ge = !!(typeof window < "u" && window.document && window.document.createElement), T = "__reactLayoutHandler";
let O = !1, Y = null;
function he() {
  return ge && typeof window.ResizeObserver < "u" ? Y == null && (Y = new window.ResizeObserver(function(e) {
    e.forEach((r) => {
      const o = r.target, l = o[T];
      typeof l == "function" && ye(
        o,
        //@ts-ignore
        (i, t, s, a, c, p) => {
          const d = {
            // $FlowFixMe
            nativeEvent: {
              layout: { x: i, y: t, width: s, height: a, left: c, top: p }
            },
            timeStamp: Date.now()
          };
          Object.defineProperty(d.nativeEvent, "target", {
            enumerable: !0,
            get: () => r.target
          }), l(d);
        }
      );
    });
  })) : O || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && (O = !0), Y;
}
function we(e, r) {
  const { width: o, height: l } = ue(), i = he();
  N(() => {
    const t = e.current;
    t != null && (t[T] = r);
  }, [e, r]), N(() => {
    const t = e.current;
    return t != null && i != null && (typeof t[T] == "function" ? i.observe(t) : i.unobserve(t)), () => {
      t != null && i != null && i.unobserve(t);
    };
  }, [e, i, o, l]);
}
const J = (e) => {
  if (e != null && e.nodeType === 1 && typeof e.getBoundingClientRect == "function")
    return e.getBoundingClientRect();
}, be = (e, r, o) => {
  const l = e && e.parentNode;
  e && l && setTimeout(() => {
    const i = J(l), { height: t, left: s, top: a, width: c } = ve(e), p = s - i.left, d = a - i.top;
    o(p, d, c, t, s, a);
  }, 0);
}, ve = (e) => {
  const { x: r, y: o, top: l, left: i } = J(e), t = e.offsetWidth, s = e.offsetHeight;
  return { x: r, y: o, width: t, height: s, top: l, left: i };
};
function ye(e, r) {
  be(e, null, r);
}
const Ve = oe(
  ({
    children: e,
    isLoading: r,
    onRetry: o,
    error: l,
    loadingMinHeight: i,
    loadingSize: t,
    onLayout: s,
    ...a
  }, c) => {
    const p = S(null);
    we(p, s);
    const d = pe(c, p), { t: y } = H();
    return r ? /* @__PURE__ */ n(
      u,
      {
        ref: d,
        align: "center",
        justify: "center",
        className: "h-full w-full",
        style: {
          minHeight: i
        },
        children: /* @__PURE__ */ n(q, { isLoading: !0, size: t })
      }
    ) : l ? /* @__PURE__ */ h(
      u,
      {
        ref: d,
        align: "center",
        justify: "center",
        style: {
          minHeight: i
        },
        gap: 8,
        vertical: !0,
        className: "h-full w-full",
        children: [
          /* @__PURE__ */ n(v, { size: 16, color: f.negative, children: l }),
          o && /* @__PURE__ */ n(ne.Primary, { onClick: o, children: y("common.message.tryAgain") })
        ]
      }
    ) : /* @__PURE__ */ n(u, { ref: d, ...a, children: e });
  }
);
export {
  je as Badge,
  $e as BorderedTitle,
  Ae as Breadcrumbs,
  Be as Card,
  Ue as Checkbox,
  _e as ClickAwayListener,
  Le as Clickable,
  ie as Collapse,
  Pe as DatePicker,
  Ye as Empty,
  Te as Fallback,
  He as HorizontalLine,
  x as Icon,
  le as NavigationTabs,
  ae as Popover,
  ce as Radio,
  Me as RangePicker,
  E as Render,
  Oe as Separator,
  de as Tab,
  $ as Tooltip,
  Se as Upload,
  Ge as VerticalLine,
  Ve as View
};
