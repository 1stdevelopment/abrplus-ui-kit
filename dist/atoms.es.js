import { jsx as t, jsxs as h } from "react/jsx-runtime";
import { Badge as X, Collapse as V, Popover as Z, Radio as W, ConfigProvider as K, Tabs as B } from "antd";
import { m as ee, T as F, a as A, d as U, I as S, B as ne } from "./index-84DRDMFH.js";
import { b as Ue, c as Se, C as Ge, e as qe, U as Ie, V as Je } from "./index-84DRDMFH.js";
import { twMerge as m } from "tailwind-merge";
import { useState as M, useEffect as y, useRef as G, useMemo as te, useCallback as re, Children as _, forwardRef as oe } from "react";
import { useTranslation as O } from "react-i18next";
import { F as u, R, I as x, T as v, L as q } from "./index-DI0LUNl-.js";
import { c as f } from "./colors-JhMxZzJC.js";
import ie from "react-dom";
function H() {
  const { innerWidth: e, innerHeight: n } = typeof window > "u" ? {
    innerWidth: 1024,
    innerHeight: 768
  } : window;
  return {
    width: e,
    height: n
  };
}
function le() {
  const [e, n] = M(H()), i = [], l = () => {
    const { width: o, height: r } = H();
    (o !== e.width && i.includes("width") || r !== e.height && i.includes("height")) && n({ width: o, height: r });
  };
  return y(() => (window.addEventListener("resize", l), () => window.removeEventListener("resize", l)), []), new Proxy(e, {
    get(o, r) {
      return i.push(r), o[r];
    }
  });
}
const je = ({ children: e, ...n }) => /* @__PURE__ */ t(X, { ...n, children: e }), _e = ({ children: e, id: n }) => {
  const [i, l] = M(null);
  return y(() => {
    let o = document.getElementById(n);
    if (!o) {
      const r = new MutationObserver(() => {
        o = document.getElementById(n), o && (l(o), r.disconnect());
      });
      return r.observe(document.body, { childList: !0, subtree: !0 }), () => r.disconnect();
    }
    l(o);
  }, [n]), i ? ie.createPortal(e, i) : null;
}, Ye = ({ children: e, onClick: n, className: i, ...l }) => /* @__PURE__ */ t(
  "div",
  {
    onClick: n,
    className: m(
      "hover:bg-light-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors",
      i
    ),
    ...l,
    children: e
  }
), Te = ({
  children: e,
  onClickAway: n,
  document: i = window.document,
  active: l = !0,
  className: o,
  hasDefaultStyle: r = !0
}) => {
  const s = G(null);
  return y(() => {
    if (!l) return;
    const a = (c) => {
      s.current && !s.current.contains(c.target) && n();
    };
    return i.addEventListener("mousedown", a), () => {
      i.removeEventListener("mousedown", a);
    };
  }, [n, l, i]), /* @__PURE__ */ h(
    "div",
    {
      ref: s,
      ...r ? { className: m("flex h-full w-full flex-1", o) } : { className: o },
      children: [
        " ",
        e
      ]
    }
  );
}, se = ({ ...e }) => /* @__PURE__ */ t(V, { ...e });
se.Panel = V.Panel;
const Me = ({
  helperText: e,
  required: n,
  label: i,
  error: l,
  wrapperClassName: o,
  onChange: r,
  onChangeISO: s,
  value: a,
  valueISO: c,
  locale: p,
  hideErrorMessage: d = !1,
  ...N
}) => {
  const { i18n: C } = O(), k = te(() => c ? ee(c) : a, [c, a]), D = re(
    (z, E) => {
      r?.(z, E), s?.(z?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ h(u, { vertical: !0, className: `w-full ${!d && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ h("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ t(R, { when: e, children: /* @__PURE__ */ t(F, { variant: "default", title: e, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ t(x, { name: "Help_header", color: f.primary_light_3, size: 15 }) }) }),
      typeof i == "string" ? /* @__PURE__ */ t(v, { color: f.primary, children: i }) : i,
      /* @__PURE__ */ t(R, { when: n, children: /* @__PURE__ */ t(x, { name: "Asterisk", size: 6, color: f.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ t(
      A.DatePicker,
      {
        format: C.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: p || C.language === "fa" ? "fa" : "en",
        customColors: U,
        onChange: D,
        value: k,
        ...N
      }
    ),
    !d && l?.message && /* @__PURE__ */ t(S, { message: l?.message })
  ] });
}, Oe = ({ flex: e, direction: n = "horizontal" }) => /* @__PURE__ */ t(
  "div",
  {
    className: m("flex", n === "horizontal" ? "flex-row" : "flex-col"),
    style: { flex: e }
  }
), He = ({ size: e }) => /* @__PURE__ */ t(u, { className: "h-full min-h-[100px] w-full", align: "center", justify: "center", children: /* @__PURE__ */ t(q, { isLoading: !0, size: e }) }), $e = ({
  className: e,
  wrapperClassName: n,
  style: i,
  color: l,
  text: o
}) => /* @__PURE__ */ h(u, { "data-testid": "horizontal-line", className: n, align: "center", gap: 10, children: [
  o ? /* @__PURE__ */ t(
    v,
    {
      className: "whitespace-nowrap",
      weight: "normal",
      size: "medium",
      color: f.primary,
      children: o
    }
  ) : null,
  /* @__PURE__ */ t(
    "hr",
    {
      role: "separator",
      className: m("border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t", e),
      style: { ...i, borderTopColor: l }
    }
  )
] }), ae = ({
  children: e,
  onChange: n,
  wrapperStyle: i,
  wrapperClassName: l,
  spaceBetweenTabs: o,
  activeStyleMode: r = "background",
  defaultTabKey: s,
  extraAfterItem: a,
  extraBeforeItem: c,
  extraBeforeChildren: p,
  extraAfterChildren: d,
  tabFontSize: N = 18,
  tabsClassName: C,
  tabClassName: k,
  tabsWrapperStyle: D,
  innerContentClassName: z,
  extraChildrenInheritBorder: E,
  hasBorder: J = !0
}) => {
  const [w, L] = M(void 0);
  return y(() => {
    const g = _.map(e, ({ props: b }) => b)[0];
    if (!s) {
      L(g.tabKey);
      return;
    }
    L(s);
  }, []), /* @__PURE__ */ h(u, { style: i, vertical: !0, className: m("w-full flex-1", l), children: [
    /* @__PURE__ */ h(
      u,
      {
        align: "center",
        className: m(
          r === "underlined" && J && "border-light-7 border-b border-solid"
        ),
        children: [
          c && /* @__PURE__ */ t(
            u,
            {
              justify: "center",
              className: m(
                "h-full px-2",
                E && "border-light-6 border-b border-solid"
              ),
              children: typeof c == "function" ? c(w) : c
            }
          ),
          /* @__PURE__ */ t(
            u,
            {
              align: "center",
              className: m(
                "w-full min-w-max flex-1 flex-row overflow-y-auto overflow-x-hidden",
                C
              ),
              gap: o !== void 0 ? o : 24,
              style: D,
              children: _.map(
                e,
                ({ props: { tabKey: g, title: b, className: P, style: j, isVisible: Q = !0 } }) => Q ? /* @__PURE__ */ t(
                  u,
                  {
                    align: "center",
                    justify: "center",
                    style: typeof j == "function" ? j(w || g) : j,
                    className: m(
                      "relative h-full min-h-[35px] w-fit min-w-[24px] cursor-pointer rounded",
                      k,
                      typeof b == "string" ? "px-4 pb-2 pt-4" : "px-0 pb-2 pt-4",
                      g === w && (r === "background" ? "after:bg-primary-light-1 z-auto overflow-hidden px-4 after:absolute after:left-0 after:top-0 after:h-full after:w-full" : r === "underlined" ? " after:border-action z-auto after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-b-[2px] after:border-solid" : void 0),
                      typeof P == "function" ? P(w || g) : P
                    ),
                    onClick: () => {
                      L(g), n?.(g);
                    },
                    children: typeof b == "string" ? /* @__PURE__ */ t(
                      v,
                      {
                        size: N,
                        weight: "medium",
                        className: m(
                          "z-10",
                          r === "background" && g === w && "text-white-ff",
                          r === "underlined" && g === w && "text-action"
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
          a && /* @__PURE__ */ t(
            u,
            {
              justify: "center",
              align: "center",
              className: m(
                "h-full px-2",
                E && "border-light-6 border-b border-solid"
              ),
              children: typeof a == "function" ? a(w) : a
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ h(u, { className: m("max-w-full flex-1", z), children: [
      p && /* @__PURE__ */ t(u, { children: typeof p == "function" ? p(w) : p }),
      _.map(e, ({ props: { tabKey: g, children: b } }) => g === w ? /* @__PURE__ */ t(u, { className: "max-w-full flex-1", children: b }, g) : null),
      d && /* @__PURE__ */ t(u, { children: typeof d == "function" ? d(w) : d })
    ] })
  ] });
};
ae.Tab = (e) => null;
const ce = ({ children: e, size: n, color: i, weight: l, className: o, ...r }) => /* @__PURE__ */ t(
  u,
  {
    className: m("border-secondary items-center border-b border-dashed", o),
    ...r,
    children: /* @__PURE__ */ t(
      v,
      {
        className: "cursor-pointer select-none",
        color: i || f.secondary,
        size: n || 16,
        weight: l || "medium",
        children: e
      }
    )
  }
), ue = ({
  overlayInnerStyle: e,
  overlayClassName: n,
  overlayInnerClassName: i,
  headerTitle: l,
  content: o,
  closeable: r = !0,
  onClose: s,
  footer: a,
  ...c
}) => /* @__PURE__ */ t(
  Z,
  {
    showArrow: !1,
    arrow: !1,
    overlayClassName: m("[&_.ant-popover-inner]:p-0", n),
    overlayInnerStyle: {
      boxShadow: "2px 3px 7px 0 rgba(67, 88, 121, 0.15)"
    },
    ...c,
    content: /* @__PURE__ */ h("div", { children: [
      l && /* @__PURE__ */ h(u, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1", children: [
        typeof l == "string" ? /* @__PURE__ */ t(v, { size: 12, weight: "medium", color: f.primary, children: l }) : l,
        r && /* @__PURE__ */ t(
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
      /* @__PURE__ */ t("div", { className: m("p-3", i), style: e, children: typeof o == "function" ? o() : o }),
      /* @__PURE__ */ t(u, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1", children: a })
    ] })
  }
);
ue.Link = ce;
const fe = (e) => /* @__PURE__ */ t(W, { ...e });
fe.Group = W.Group;
const Ve = ({
  helperText: e,
  required: n,
  label: i,
  error: l,
  wrapperClassName: o,
  value: r,
  hideErrorMessage: s = !1,
  ...a
}) => {
  const { i18n: c } = O(), p = (r?.filter(Boolean)?.length || 0) > 0 && !!r;
  return /* @__PURE__ */ h(u, { vertical: !0, className: `w-full ${!s && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ h("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ t(R, { when: e, children: /* @__PURE__ */ t(F, { variant: "default", title: e, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ t(x, { name: "Help_header", color: f.primary_light_3, size: 15 }) }) }),
      typeof i == "string" ? /* @__PURE__ */ t(v, { color: f.primary, children: i }) : i,
      /* @__PURE__ */ t(R, { when: n, children: /* @__PURE__ */ t(x, { name: "Asterisk", size: 6, color: f.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ t(
      A.RangePicker,
      {
        format: c.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: c.language === "fa" ? "fa" : "en",
        customColors: U,
        value: p ? r : null,
        ...a
      }
    ),
    !s && l?.message && /* @__PURE__ */ t(S, { message: l?.message })
  ] });
}, We = ({ direction: e = "vertical", className: n }) => /* @__PURE__ */ t(
  "div",
  {
    role: "separator",
    className: m(
      "bg-light-7",
      e === "vertical" ? "mx-2 h-full w-[1px]" : "my-2 h-[1px] w-full",
      n
    )
  }
), de = {
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
}, me = (e) => /* @__PURE__ */ t(K, { theme: de, children: /* @__PURE__ */ t(B, { ...e }) });
me.TabPane = B.TabPane;
function pe(e, n) {
  typeof e == "function" ? e(n) : typeof e == "object" && e && "current" in e && (e.current = n);
}
function ge(...e) {
  return (n) => {
    e.forEach((i) => {
      pe(i, n);
    });
  };
}
const he = !!(typeof window < "u" && window.document && window.document.createElement), T = "__reactLayoutHandler";
let $ = !1, Y = null;
function we() {
  return he && typeof window.ResizeObserver < "u" ? Y == null && (Y = new window.ResizeObserver(function(e) {
    e.forEach((n) => {
      const i = n.target, l = i[T];
      typeof l == "function" && Ne(
        i,
        //@ts-ignore
        (o, r, s, a, c, p) => {
          const d = {
            // $FlowFixMe
            nativeEvent: {
              layout: { x: o, y: r, width: s, height: a, left: c, top: p }
            },
            timeStamp: Date.now()
          };
          Object.defineProperty(d.nativeEvent, "target", {
            enumerable: !0,
            get: () => n.target
          }), l(d);
        }
      );
    });
  })) : $ || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && ($ = !0), Y;
}
function be(e, n) {
  const { width: i, height: l } = le(), o = we();
  y(() => {
    const r = e.current;
    r != null && (r[T] = n);
  }, [e, n]), y(() => {
    const r = e.current;
    return r != null && o != null && (typeof r[T] == "function" ? o.observe(r) : o.unobserve(r)), () => {
      r != null && o != null && o.unobserve(r);
    };
  }, [e, o, i, l]);
}
const I = (e) => {
  if (e != null && e.nodeType === 1 && typeof e.getBoundingClientRect == "function")
    return e.getBoundingClientRect();
}, ve = (e, n, i) => {
  const l = e && e.parentNode;
  e && l && setTimeout(() => {
    const o = I(l), { height: r, left: s, top: a, width: c } = ye(e), p = s - o.left, d = a - o.top;
    i(p, d, c, r, s, a);
  }, 0);
}, ye = (e) => {
  const { x: n, y: i, top: l, left: o } = I(e), r = e.offsetWidth, s = e.offsetHeight;
  return { x: n, y: i, width: r, height: s, top: l, left: o };
};
function Ne(e, n) {
  ve(e, null, n);
}
const Be = oe(
  ({
    children: e,
    isLoading: n,
    onRetry: i,
    error: l,
    loadingMinHeight: o,
    loadingSize: r,
    onLayout: s,
    ...a
  }, c) => {
    const p = G(null);
    be(p, s);
    const d = ge(c, p), { t: N } = O();
    return n ? /* @__PURE__ */ t(
      u,
      {
        ref: d,
        align: "center",
        justify: "center",
        className: "h-full w-full",
        style: {
          minHeight: o
        },
        children: /* @__PURE__ */ t(q, { isLoading: !0, size: r })
      }
    ) : l ? /* @__PURE__ */ h(
      u,
      {
        ref: d,
        align: "center",
        justify: "center",
        style: {
          minHeight: o
        },
        gap: 8,
        vertical: !0,
        className: "h-full w-full",
        children: [
          /* @__PURE__ */ t(v, { size: 16, color: f.negative, children: l }),
          i && /* @__PURE__ */ t(ne.Primary, { onClick: i, children: N("common.message.tryAgain") })
        ]
      }
    ) : /* @__PURE__ */ t(u, { ref: d, ...a, children: e });
  }
);
export {
  je as Badge,
  Ue as BorderedTitle,
  Se as Breadcrumbs,
  Ge as Card,
  qe as Checkbox,
  Te as ClickAwayListener,
  Ye as Clickable,
  se as Collapse,
  Me as DatePicker,
  Oe as Empty,
  He as Fallback,
  $e as HorizontalLine,
  x as Icon,
  ae as NavigationTabs,
  ue as Popover,
  _e as PortalContainer,
  fe as Radio,
  Ve as RangePicker,
  R as Render,
  We as Separator,
  me as Tab,
  F as Tooltip,
  Ie as Upload,
  Je as VerticalLine,
  Be as View
};
