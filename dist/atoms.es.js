import { jsx as e, jsxs as u } from "react/jsx-runtime";
import { Badge as L } from "antd";
import { u as b, m as R, T as Y, a as v, d as y, I as k } from "./index-BLpTfAPs.js";
import { B as ae, b as te, C as se, c as ne, e as le, N as oe, P as ie, R as ce, f as me, U as ue, V as fe, g as de } from "./index-BLpTfAPs.js";
import { t as f, F as p, R as d, I as g, T as w, L as B } from "./index-Cb6Wdvhb.js";
import { useRef as T, useEffect as E, useMemo as P, useCallback as _ } from "react";
import { c as m } from "./colors-KbMJKYZb.js";
import "antd/locale/en_US";
import "antd/locale/fa_IR";
const q = ({ children: r, ...a }) => /* @__PURE__ */ e(L, { ...a, children: r }), G = ({ children: r, onClick: a, className: t, ...s }) => /* @__PURE__ */ e(
  "div",
  {
    onClick: a,
    className: f(
      "hover:bg-light-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors",
      t
    ),
    ...s,
    children: r
  }
), J = ({
  children: r,
  onClickAway: a,
  document: t = window.document,
  active: s = !0,
  className: o,
  hasDefaultStyle: i = !0
}) => {
  const n = T(null);
  return E(() => {
    if (!s) return;
    const c = (l) => {
      n.current && !n.current.contains(l.target) && a();
    };
    return t.addEventListener("mousedown", c), () => {
      t.removeEventListener("mousedown", c);
    };
  }, [a, s, t]), /* @__PURE__ */ u(
    "div",
    {
      ref: n,
      ...i ? { className: f("flex h-full w-full flex-1", o) } : { className: o },
      children: [
        " ",
        r
      ]
    }
  );
}, K = ({
  helperText: r,
  required: a,
  label: t,
  error: s,
  wrapperClassName: o,
  onChange: i,
  onChangeISO: n,
  value: c,
  valueISO: l,
  locale: h,
  hideErrorMessage: x = !1,
  ...M
}) => {
  const { i18n: C } = b(), j = P(() => l ? R(l) : c, [l, c]), D = _(
    (N, z) => {
      i?.(N, z), n?.(N?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ u(p, { vertical: !0, className: `w-full ${!x && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ u("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ e(d, { when: r, children: /* @__PURE__ */ e(Y, { variant: "default", title: r, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e(g, { name: "Help_header", color: m.primary_light_3, size: 15 }) }) }),
      typeof t == "string" ? /* @__PURE__ */ e(w, { color: m.primary, children: t }) : t,
      /* @__PURE__ */ e(d, { when: a, children: /* @__PURE__ */ e(g, { name: "Asterisk", size: 6, color: m.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ e(
      v.DatePicker,
      {
        format: C.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: h || C.language === "fa" ? "fa" : "en",
        customColors: y,
        onChange: D,
        value: j,
        ...M
      }
    ),
    !x && s?.message && /* @__PURE__ */ e(k, { message: s?.message })
  ] });
}, O = ({ flex: r, direction: a = "horizontal" }) => /* @__PURE__ */ e(
  "div",
  {
    className: f("flex", a === "horizontal" ? "flex-row" : "flex-col"),
    style: { flex: r }
  }
), Q = ({ size: r }) => /* @__PURE__ */ e(p, { className: "h-full min-h-[100px] w-full", align: "center", justify: "center", children: /* @__PURE__ */ e(B, { isLoading: !0, size: r }) }), W = ({
  className: r,
  wrapperClassName: a,
  style: t,
  color: s,
  text: o
}) => /* @__PURE__ */ u(p, { "data-testid": "horizontal-line", className: a, align: "center", gap: 10, children: [
  o ? /* @__PURE__ */ e(
    w,
    {
      className: "whitespace-nowrap",
      weight: "normal",
      size: "medium",
      color: m.primary,
      children: o
    }
  ) : null,
  /* @__PURE__ */ e(
    "hr",
    {
      role: "separator",
      className: f("border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t", r),
      style: { ...t, borderTopColor: s }
    }
  )
] }), X = ({
  helperText: r,
  required: a,
  label: t,
  error: s,
  wrapperClassName: o,
  value: i,
  hideErrorMessage: n = !1,
  ...c
}) => {
  const { i18n: l } = b(), h = (i?.filter(Boolean)?.length || 0) > 0 && !!i;
  return /* @__PURE__ */ u(p, { vertical: !0, className: `w-full ${!n && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ u("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ e(d, { when: r, children: /* @__PURE__ */ e(Y, { variant: "default", title: r, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e(g, { name: "Help_header", color: m.primary_light_3, size: 15 }) }) }),
      typeof t == "string" ? /* @__PURE__ */ e(w, { color: m.primary, children: t }) : t,
      /* @__PURE__ */ e(d, { when: a, children: /* @__PURE__ */ e(g, { name: "Asterisk", size: 6, color: m.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ e(
      v.RangePicker,
      {
        format: l.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: l.language === "fa" ? "fa" : "en",
        customColors: y,
        value: h ? i : null,
        ...c
      }
    ),
    !n && s?.message && /* @__PURE__ */ e(k, { message: s?.message })
  ] });
}, Z = ({ direction: r = "vertical", className: a }) => /* @__PURE__ */ e(
  "div",
  {
    role: "separator",
    className: f(
      "bg-light-7",
      r === "vertical" ? "mx-2 h-full w-[1px]" : "my-2 h-[1px] w-full",
      a
    )
  }
);
export {
  q as Badge,
  ae as BorderedTitle,
  te as Breadcrumbs,
  se as Card,
  ne as Checkbox,
  J as ClickAwayListener,
  G as Clickable,
  le as Collapse,
  K as DatePicker,
  O as Empty,
  Q as Fallback,
  W as HorizontalLine,
  g as Icon,
  oe as NavigationTabs,
  ie as Popover,
  ce as Radio,
  X as RangePicker,
  d as Render,
  Z as Separator,
  me as Tab,
  Y as Tooltip,
  ue as Upload,
  fe as VerticalLine,
  de as View
};
