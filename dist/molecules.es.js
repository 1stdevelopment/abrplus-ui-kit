import { jsx as l, jsxs as B, Fragment as xt } from "react/jsx-runtime";
import { Collapse as ma, Input as An, Tooltip as yi, Divider as ya, ConfigProvider as ir, Select as _t, TreeSelect as wr, TimePicker as va, Tree as vi, Spin as ba } from "antd";
import $e, { useMemo as ee, Children as bi, forwardRef as it, useRef as ne, useEffect as oe, Fragment as wa, useState as de, useCallback as be, useLayoutEffect as xa, memo as _a, useReducer as Sa, createContext as Ft, useContext as ft, isValidElement as Ca } from "react";
import { R as Ve, I as Q, T as X, F as T, L as Bt } from "./index-CuJ3T9JN.js";
import { twMerge as W } from "tailwind-merge";
import { c as A } from "./colors-JhMxZzJC.js";
import { c as Na, U as Oa, T as ar, I as at, f as Dn, m as Ea, a as wi, d as xi, V as At, e as Jt, b as Aa, g as Da, h as Ta, i as Xn, j as Ra, C as Ia } from "./index-jZTm4aqP.js";
import { B as Rf, k as If, l as Pf, p as kf } from "./index-jZTm4aqP.js";
import { A as Pa, D as ka, I as sr, a as Ma } from "./index-C7dRLZkF.js";
import { useTranslation as ze } from "react-i18next";
import Pt from "starkstring";
import "./index-DD7ZOJPU.js";
import Zt, { t as La } from "i18next";
import { notification as vt, ConfigProvider as Fa } from "antd/lib";
import { unstable_batchedUpdates as Gt, createPortal as Ba } from "react-dom";
import { useNavigate as $a, useSearchParams as za } from "react-router-dom";
class qa extends Error {
  constructor(e, r, n) {
    super(e), this.message = e, this.status = r, this.response = n;
  }
  isApiException = !0;
  static isRequestError(e) {
    return e.isApiException;
  }
}
const ja = (t) => null, Ua = ({
  children: t,
  accordionRef: e,
  onChangeIndex: r,
  currentIndex: n = 1,
  indexedStyle: o = !0,
  noPaddingItem: i,
  noGapBetweenItems: a,
  transparent: s
}) => {
  const h = ee(() => {
    const d = ({ props: c }, u) => {
      let m = c.label;
      return typeof m == "string" && (m = /* @__PURE__ */ l(
        X,
        {
          size: 18,
          color: A[n === u + 1 ? "primary_dark_1" : "primary_light_1"],
          weight: n === u + 1 ? "bold" : "medium",
          children: m
        }
      )), { ...c, label: m, key: u + 1 };
    };
    return bi.map(t, d);
  }, [t, n]);
  return /* @__PURE__ */ l(
    "div",
    {
      className: W(
        "flex flex-1 flex-col gap-[16px] py-[20px]",
        o && "pe-[60px] ps-[16px]",
        a && "gap-0"
      ),
      ref: e,
      children: h.map((d, c) => /* @__PURE__ */ B("div", { className: " flex w-full items-start gap-[16px]", children: [
        /* @__PURE__ */ l(Ve, { when: o, children: /* @__PURE__ */ B("div", { className: "relative flex h-full w-[30px] flex-col", children: [
          /* @__PURE__ */ l("div", { className: "flex h-full items-start justify-center", children: /* @__PURE__ */ l(
            "div",
            {
              className: W(
                n > c ? "bg-positive" : "bg-primary-light-2",
                "z-[1] mt-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full"
              ),
              children: /* @__PURE__ */ l(
                Ve,
                {
                  when: n > c + 1,
                  fallback: /* @__PURE__ */ l(X, { color: A.white_ff, size: 16, children: c + 1 }),
                  children: /* @__PURE__ */ l(Q, { name: "Checkmark", size: 18, color: A.white_ff })
                }
              )
            }
          ) }),
          /* @__PURE__ */ l(Ve, { when: c !== h.length - 1, children: /* @__PURE__ */ l(
            "div",
            {
              className: W(
                "absolute left-[calc(50%-0.5px)] top-[25px] z-0 h-full w-[1px] border-l-[1px] border-dashed border-primary-light-2",
                n > c && "border-positive-light-2"
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ l(
          ma,
          {
            accordion: !0,
            bordered: !1,
            activeKey: n,
            expandIconPosition: "end",
            onChange: (u) => Array.isArray(u) ? r?.(Number(u[0])) : r?.(Number(u)),
            items: [h[c]],
            expandIcon: ({ isActive: u }) => /* @__PURE__ */ l(
              Q,
              {
                name: u ? "Chevron_Down" : "Chevron_Up",
                color: A[u ? "primary" : "primary_light_1"]
              }
            ),
            style: { boxShadow: "0 1px 6px 0 rgba(72, 88, 118, 0.16)" },
            className: W(
              "w-full overflow-hidden border-b-0 bg-white-ff [&_.ant-collapse-header]:cursor-default",
              o ? s ? "[&_.ant-collapse-header]:!bg-transparent" : "[&_.ant-collapse-header]:!bg-light-1" : "[&_.ant-collapse-header]:!bg-action/10",
              i && "[&_.ant-collapse-header]:!p-0",
              o ? "rounded-lg" : "rounded-none",
              // indexedStyle && '[&_.ant-collapse-header]:hover:!bg-positive/20',
              o && "[&_.ant-collapse-header]:shadow-[0_1px_6px_0_rgba(72,88,118,0.16)]"
            )
          }
        )
      ] }, d.key))
    }
  );
};
Ua.Item = ja;
const df = it(
  ({ children: t, title: e, route: r, hasBorder: n, gap: o = 8, className: i }, a) => {
    const s = (h, d) => d ? /* @__PURE__ */ l(T, { className: "min-w-max", children: /* @__PURE__ */ l(Na, { route: d }) }) : h ? /* @__PURE__ */ l(T, { className: "min-w-max", children: typeof h == "string" ? /* @__PURE__ */ l(X, { size: 16, weight: "medium", color: A.primary, children: h }) : h }) : null;
    return /* @__PURE__ */ B(
      T,
      {
        className: W(
          "bg-light-1 w-full px-6 py-4",
          n && "border-light-7 border-b",
          i
        ),
        align: "center",
        justify: "space-between",
        children: [
          s(e, r),
          /* @__PURE__ */ l(T, { ref: a, gap: o, className: "w-full justify-end", children: t })
        ]
      }
    );
  }
), Ha = 48, pf = ({
  deviceId: t,
  speakerId: e,
  monitor: r = "off",
  containerStyle: n,
  containerClassName: o,
  barContainerStyle: i,
  barContainerClassName: a,
  barStyle: s,
  barClassName: h,
  barsNumber: d = Ha
}) => {
  const c = ne(null), u = ne(null), m = ne(null), p = ne(null), x = ne(null), b = ne(null);
  oe(() => {
    const y = document.createElement("audio");
    return y.autoplay = !0, y.controls = !1, c.current = y, document.body.appendChild(y), () => {
      y.pause(), y.srcObject = null, y.remove();
    };
  }, []), oe(() => {
    if (!t || !c.current) return;
    let y = !1;
    return (async () => {
      b.current?.getTracks().forEach((S) => S.stop());
      const _ = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: t } }
      });
      if (y) return;
      b.current = _;
      const g = new AudioContext();
      m.current = g;
      const v = g.createAnalyser();
      v.fftSize = 256, v.smoothingTimeConstant = 0.75, u.current = v, g.createMediaStreamSource(_).connect(v), f();
    })(), () => {
      y = !0, p.current && cancelAnimationFrame(p.current), b.current?.getTracks().forEach((_) => _.stop()), m.current?.close(), b.current = null, m.current = null, u.current = null, w();
    };
  }, [t]), oe(() => {
    const y = c.current, E = m.current, _ = u.current, g = b.current;
    !y || !E || !_ || !g || (r === "on" ? (_.connect(E.destination), y.srcObject = g, e && typeof y.setSinkId == "function" && y.setSinkId(e).catch(() => {
    })) : y.srcObject = null);
  }, [r, e]), oe(() => {
    const y = x.current;
    if (!y) return;
    y.innerHTML = "";
    const E = document.createElement("div");
    Object.assign(E.style, {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      ...i
    }), E.className = W(a);
    for (let _ = 0; _ < d; _++) {
      const g = document.createElement("div");
      Object.assign(g.style, {
        backgroundColor: "#d1d5db",
        // default color (gray)
        height: "80%",
        transition: "background-color 0.1s ease-out",
        margin: "0 1px",
        borderRadius: "2px",
        width: "100%",
        ...s
      }), g.className = W(h), E.appendChild(g);
    }
    y.appendChild(E);
  }, [d, h, a, s, i]);
  const f = () => {
    if (!u.current || !x.current) return;
    const y = x.current.querySelector(
      'div[style*="display: flex"]'
    );
    if (!y) return;
    const E = u.current.frequencyBinCount, _ = new Uint8Array(E), g = () => {
      u.current.getByteFrequencyData(_);
      const v = _.reduce((I, P) => I + P, 0) / E, N = Math.min(v / 140, 1), S = Math.floor(N * d), R = y.children;
      for (let I = 0; I < R.length; I++)
        R[I].style.backgroundColor = I < S ? A.team.action : "#d1d5db";
      p.current = requestAnimationFrame(g);
    };
    g();
  }, w = () => {
    const y = x.current;
    if (!y) return;
    const E = y.querySelector('div[style*="display: flex"]');
    if (!E) return;
    const _ = E.children;
    for (let g = 0; g < _.length; g++)
      _[g].style.backgroundColor = "#d1d5db";
  };
  return /* @__PURE__ */ l(
    "div",
    {
      ref: x,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "1rem",
        width: "100%",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
        ...n
      },
      className: W(o)
    }
  );
}, hf = ({ customRequest: t, src: e, shape: r, size: n, isLoading: o }) => /* @__PURE__ */ l(Oa, { accept: ".jpg, .jpeg, .img", showUploadList: !1, customRequest: t, children: /* @__PURE__ */ B(
  "div",
  {
    className: "relative cursor-pointer overflow-hidden group",
    style: {
      borderRadius: r === "circle" ? "50%" : 4
    },
    children: [
      /* @__PURE__ */ l(
        "div",
        {
          style: {
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          },
          children: /* @__PURE__ */ l(
            Q,
            {
              name: "Add_photo",
              color: A.white_ff,
              className: "opacity-0 group-hover:opacity-100",
              style: { transition: "all 0.2s" }
            }
          )
        }
      ),
      o ? /* @__PURE__ */ l(
        "div",
        {
          className: " bg-light-2 ",
          style: {
            width: n,
            height: n
          },
          children: /* @__PURE__ */ l(Bt, { isLoading: !0, size: n, color: A.primary_light_1 })
        }
      ) : /* @__PURE__ */ B(
        T,
        {
          className: W("cursor-pointer items-center justify-center"),
          style: {
            minWidth: n,
            minHeight: n,
            width: n,
            height: n,
            borderRadius: r === "circle" ? 9999 : 4,
            border: `1px solid ${A.light_7}`,
            position: "relative",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ l(
              Pa,
              {
                icon: /* @__PURE__ */ l(Q, { name: "User" }),
                src: e,
                size: n,
                shape: r,
                style: {
                  width: "100%",
                  height: "100%"
                }
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: "opacity-0 group-hover:opacity-100",
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  transition: "opacity 0.2s ease-in-out"
                }
              }
            )
          ]
        }
      )
    ]
  }
) });
function _i(t) {
  return t ? qa.isRequestError(t) ? t.message || Zt.t("common.error.errorOccurred") : typeof t == "string" ? t : typeof t == "object" && t !== null && "message" in t && typeof t.message == "string" ? t.message : Zt.t("common.error.errorOccurred") : "";
}
const gf = ({ children: t, error: e, retry: r }) => {
  const { t: n } = ze();
  return e ? /* @__PURE__ */ l("div", { className: "flex h-[calc(100%-56px)] w-full p-4", children: /* @__PURE__ */ B("div", { className: "flex h-full w-full flex-col items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden", children: [
    /* @__PURE__ */ l(X, { color: A.negative_light_1, children: n("common.literal.serverError") }),
    /* @__PURE__ */ l(Ve, { when: !!r, children: /* @__PURE__ */ l(
      "button",
      {
        onClick: r,
        className: "rounded bg-primary px-4 py-2 shadow-sm hover:bg-primary-dark-1",
        children: /* @__PURE__ */ l(X, { color: A.white_ff, children: n("common.message.tryAgain") })
      }
    ) })
  ] }) }) : /* @__PURE__ */ l(wa, { children: t });
}, mf = ({ direction: t, ...e }) => {
  const { i18n: r } = ze();
  return /* @__PURE__ */ l(Q, { name: ((o = "forward") => o === "forward" ? r.language === "en" ? "Chevron_Right" : "Chevron_Left" : r.language === "en" ? "Chevron_Left" : "Chevron_Right")(t), ...e });
};
var Dt = {}, xr, Qn;
function Wa() {
  return Qn || (Qn = 1, xr = function() {
    var t = document.getSelection();
    if (!t.rangeCount)
      return function() {
      };
    for (var e = document.activeElement, r = [], n = 0; n < t.rangeCount; n++)
      r.push(t.getRangeAt(n));
    switch (e.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        e.blur();
        break;
      default:
        e = null;
        break;
    }
    return t.removeAllRanges(), function() {
      t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(o) {
        t.addRange(o);
      }), e && e.focus();
    };
  }), xr;
}
var _r, Jn;
function Va() {
  if (Jn) return _r;
  Jn = 1;
  var t = Wa(), e = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, r = "Copy to clipboard: #{key}, Enter";
  function n(i) {
    var a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return i.replace(/#{\s*key\s*}/g, a);
  }
  function o(i, a) {
    var s, h, d, c, u, m, p = !1;
    a || (a = {}), s = a.debug || !1;
    try {
      d = t(), c = document.createRange(), u = document.getSelection(), m = document.createElement("span"), m.textContent = i, m.ariaHidden = "true", m.style.all = "unset", m.style.position = "fixed", m.style.top = 0, m.style.clip = "rect(0, 0, 0, 0)", m.style.whiteSpace = "pre", m.style.webkitUserSelect = "text", m.style.MozUserSelect = "text", m.style.msUserSelect = "text", m.style.userSelect = "text", m.addEventListener("copy", function(b) {
        if (b.stopPropagation(), a.format)
          if (b.preventDefault(), typeof b.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var f = e[a.format] || e.default;
            window.clipboardData.setData(f, i);
          } else
            b.clipboardData.clearData(), b.clipboardData.setData(a.format, i);
        a.onCopy && (b.preventDefault(), a.onCopy(b.clipboardData));
      }), document.body.appendChild(m), c.selectNodeContents(m), u.addRange(c);
      var x = document.execCommand("copy");
      if (!x)
        throw new Error("copy command was unsuccessful");
      p = !0;
    } catch (b) {
      s && console.error("unable to copy using execCommand: ", b), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(a.format || "text", i), a.onCopy && a.onCopy(window.clipboardData), p = !0;
      } catch (f) {
        s && console.error("unable to copy using clipboardData: ", f), s && console.error("falling back to prompt"), h = n("message" in a ? a.message : r), window.prompt(h, i);
      }
    } finally {
      u && (typeof u.removeRange == "function" ? u.removeRange(c) : u.removeAllRanges()), m && document.body.removeChild(m), d();
    }
    return p;
  }
  return _r = o, _r;
}
var Zn;
function Ga() {
  if (Zn) return Dt;
  Zn = 1;
  function t(g) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, t(g);
  }
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.CopyToClipboard = void 0;
  var e = o($e), r = o(Va()), n = ["text", "onCopy", "options", "children"];
  function o(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function i(g, v) {
    var N = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(g);
      v && (S = S.filter(function(R) {
        return Object.getOwnPropertyDescriptor(g, R).enumerable;
      })), N.push.apply(N, S);
    }
    return N;
  }
  function a(g) {
    for (var v = 1; v < arguments.length; v++) {
      var N = arguments[v] != null ? arguments[v] : {};
      v % 2 ? i(Object(N), !0).forEach(function(S) {
        E(g, S, N[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(N)) : i(Object(N)).forEach(function(S) {
        Object.defineProperty(g, S, Object.getOwnPropertyDescriptor(N, S));
      });
    }
    return g;
  }
  function s(g, v) {
    if (g == null) return {};
    var N = h(g, v), S, R;
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(g);
      for (R = 0; R < I.length; R++)
        S = I[R], !(v.indexOf(S) >= 0) && Object.prototype.propertyIsEnumerable.call(g, S) && (N[S] = g[S]);
    }
    return N;
  }
  function h(g, v) {
    if (g == null) return {};
    var N = {}, S = Object.keys(g), R, I;
    for (I = 0; I < S.length; I++)
      R = S[I], !(v.indexOf(R) >= 0) && (N[R] = g[R]);
    return N;
  }
  function d(g, v) {
    if (!(g instanceof v))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(g, v) {
    for (var N = 0; N < v.length; N++) {
      var S = v[N];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(g, S.key, S);
    }
  }
  function u(g, v, N) {
    return v && c(g.prototype, v), Object.defineProperty(g, "prototype", { writable: !1 }), g;
  }
  function m(g, v) {
    if (typeof v != "function" && v !== null)
      throw new TypeError("Super expression must either be null or a function");
    g.prototype = Object.create(v && v.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), Object.defineProperty(g, "prototype", { writable: !1 }), v && p(g, v);
  }
  function p(g, v) {
    return p = Object.setPrototypeOf || function(S, R) {
      return S.__proto__ = R, S;
    }, p(g, v);
  }
  function x(g) {
    var v = w();
    return function() {
      var S = y(g), R;
      if (v) {
        var I = y(this).constructor;
        R = Reflect.construct(S, arguments, I);
      } else
        R = S.apply(this, arguments);
      return b(this, R);
    };
  }
  function b(g, v) {
    if (v && (t(v) === "object" || typeof v == "function"))
      return v;
    if (v !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return f(g);
  }
  function f(g) {
    if (g === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g;
  }
  function w() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function y(g) {
    return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(N) {
      return N.__proto__ || Object.getPrototypeOf(N);
    }, y(g);
  }
  function E(g, v, N) {
    return v in g ? Object.defineProperty(g, v, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : g[v] = N, g;
  }
  var _ = /* @__PURE__ */ (function(g) {
    m(N, g);
    var v = x(N);
    function N() {
      var S;
      d(this, N);
      for (var R = arguments.length, I = new Array(R), P = 0; P < R; P++)
        I[P] = arguments[P];
      return S = v.call.apply(v, [this].concat(I)), E(f(S), "onClick", function($) {
        var U = S.props, j = U.text, J = U.onCopy, z = U.children, V = U.options, se = e.default.Children.only(z), ie = (0, r.default)(j, V);
        J && J(j, ie), se && se.props && typeof se.props.onClick == "function" && se.props.onClick($);
      }), S;
    }
    return u(N, [{
      key: "render",
      value: function() {
        var R = this.props;
        R.text, R.onCopy, R.options;
        var I = R.children, P = s(R, n), $ = e.default.Children.only(I);
        return /* @__PURE__ */ e.default.cloneElement($, a(a({}, P), {}, {
          onClick: this.onClick
        }));
      }
    }]), N;
  })(e.default.PureComponent);
  return Dt.CopyToClipboard = _, E(_, "defaultProps", {
    onCopy: void 0,
    options: void 0
  }), Dt;
}
var Sr, eo;
function Ya() {
  if (eo) return Sr;
  eo = 1;
  var t = Ga(), e = t.CopyToClipboard;
  return e.CopyToClipboard = e, Sr = e, Sr;
}
var Ka = Ya();
const yf = ({ textToCopy: t, variant: e = "success", renderButton: r }) => {
  const { t: n } = ze(), [o, i] = de(!1);
  return oe(() => {
    o && setTimeout(() => {
      i(!1);
    }, 750);
  }, [o]), /* @__PURE__ */ l(
    Ka.CopyToClipboard,
    {
      text: t,
      onCopy: (a) => {
        a && i(!0);
      },
      children: /* @__PURE__ */ l(ar, { variant: e, title: n("common.message.copied"), open: o, children: r || /* @__PURE__ */ B(T, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ l(Q, { size: 18, color: A.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ l(X, { children: n("common.literal.copy") })
      ] }) })
    }
  );
}, Xa = (t, e) => {
  const {
    placeholder: r,
    background: n = "#fff",
    inputSize: o = "large",
    error: i,
    lang: a,
    helperText: s,
    disabled: h,
    onlyNumber: d,
    isCurrency: c,
    onChangeText: u,
    onChange: m,
    status: p,
    prefix: x,
    required: b,
    label: f,
    readOnly: w,
    className: y,
    classNames: E,
    wrapperClassName: _,
    hideErrorMessage: g = !1,
    height: v,
    rows: N,
    ...S
  } = ee(() => ({ ...t }), [t]), { i18n: R } = ze(), I = be(
    (P) => {
      const $ = Pt(P.target.value);
      (d || c) && $.parseNumber(), u?.($.toString()), m?.(P);
    },
    [c, m, u, d]
  );
  return /* @__PURE__ */ B(
    T,
    {
      vertical: !0,
      className: W(
        "w-full",
        !g && "inputErrorMessageContainer",
        _
      ),
      children: [
        f && /* @__PURE__ */ B("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof f == "string" ? /* @__PURE__ */ l(xt, { children: /* @__PURE__ */ l(
            X,
            {
              lang: a,
              size: o === "large" ? 14 : 12,
              color: A.primary,
              weight: "normal",
              children: f
            }
          ) }) : f,
          /* @__PURE__ */ l(Ve, { when: b, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ l(
          An.TextArea,
          {
            autoSize: !0,
            ref: e,
            className: W(
              "text-primary-dark-1  w-full  text-[14px] font-medium  outline-none",
              y
            ),
            classNames: {
              textarea: W(
                (a || R.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                w && "cursor-default"
              ),
              ...E
            },
            placeholder: r,
            size: o,
            rows: N,
            readOnly: w,
            style: { background: n, height: v, outline: "none" },
            onChange: I,
            status: i?.message ? "error" : p,
            disabled: h,
            ...S
          }
        ),
        !g && i?.message && !s && /* @__PURE__ */ l(at, { message: i?.message }),
        s && /* @__PURE__ */ l(X, { color: A.primary, className: "helperText", children: s })
      ]
    }
  );
}, Qa = it(Xa), Ja = (t, e) => {
  const {
    placeholder: r,
    background: n = "#fff",
    inputSize: o = "large",
    error: i,
    lang: a,
    helperText: s,
    disabled: h,
    onlyNumber: d,
    isCurrency: c,
    onChangeText: u,
    onChange: m,
    status: p,
    prefix: x,
    suffix: b,
    required: f,
    label: w,
    height: y = 38,
    readOnly: E,
    classNames: _,
    wrapperClassName: g,
    direction: v,
    hideErrorMessage: N = !1,
    ...S
  } = ee(() => ({ ...t }), [t]), { i18n: R } = ze(), I = be(
    (P) => {
      const $ = Pt(P.target.value);
      (d || c) && $.parseNumber(), u?.($.toString()), m?.(P);
    },
    [c, m, u, d]
  );
  return /* @__PURE__ */ B(
    T,
    {
      vertical: !0,
      className: W(
        "w-full",
        !N && "inputErrorMessageContainer",
        g,
        "[&_.ant-input-clear-icon]:!flex"
      ),
      children: [
        w && /* @__PURE__ */ B("div", { className: "flex h-[22px] items-center gap-1", children: [
          typeof w == "string" ? /* @__PURE__ */ l(xt, { children: /* @__PURE__ */ l(
            X,
            {
              size: o === "large" ? 14 : 12,
              color: A.primary,
              weight: "normal",
              children: w
            }
          ) }) : w,
          /* @__PURE__ */ l(Ve, { when: f, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ l(
          An,
          {
            ref: e,
            className: "w-full text-[14px] font-medium text-primary-dark-1 outline-none hover:border-primary-light-2",
            classNames: {
              input: W(
                (a || R.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                E && "cursor-default",
                v === "ltr" ? "direction-ltr" : "direction-rtl"
              ),
              ..._
            },
            rootClassName: "!rounded",
            placeholder: r,
            size: o,
            readOnly: E,
            style: { background: n, height: y, outline: "none" },
            onChange: I,
            status: i?.message ? "error" : p,
            disabled: h,
            suffix: b || i?.message ? /* @__PURE__ */ l(
              "div",
              {
                className: W("flex h-full justify-center"),
                onClick: (P) => P.stopPropagation(),
                children: b && /* @__PURE__ */ B("div", { className: "flex h-full items-center justify-center ", children: [
                  " ",
                  b
                ] }) || i?.message && s && !b && !h && /* @__PURE__ */ l(
                  "div",
                  {
                    id: "my-anchor-element",
                    className: "flex h-full cursor-pointer items-center justify-center ",
                    children: /* @__PURE__ */ l(
                      ar,
                      {
                        variant: "error",
                        color: A.negative,
                        title: i.message,
                        arrow: !0,
                        children: /* @__PURE__ */ l(Q, { name: "alert-line", color: A.negative })
                      }
                    )
                  }
                )
              }
            ) : void 0,
            prefix: x ? /* @__PURE__ */ l("div", { onClick: (P) => P.stopPropagation(), children: x }) : void 0,
            ...S
          }
        ),
        !N && i?.message && !s && /* @__PURE__ */ l(at, { message: i?.message }),
        s && /* @__PURE__ */ l(X, { color: A.primary, children: s })
      ]
    }
  );
}, Si = it(Ja), Za = ({
  value: t,
  onChange: e,
  label: r,
  emojis: n = ["😊", "👍", "❤️", "😂", "🔥"]
  // Default emojis
}) => {
  const o = ne(null), [i, a] = de(t.length), s = () => o.current?.input ?? o.current, h = () => {
    const c = s();
    c && c.selectionStart !== null && a(c.selectionStart);
  }, d = be(
    (c) => {
      const u = s(), m = i ?? t.length, p = t.slice(0, m) + c + t.slice(m);
      e(p), requestAnimationFrame(() => {
        if (u) {
          const x = m + c.length;
          u.setSelectionRange(x, x), u.focus(), a(x);
        }
      });
    },
    [i, t, e]
  );
  return /* @__PURE__ */ l(
    Ci.Default,
    {
      ref: o,
      value: t,
      onChange: (c) => {
        e(c.target.value), h();
      },
      onClick: h,
      onKeyUp: h,
      onSelect: h,
      hideErrorMessage: !0,
      label: r,
      suffix: (
        // Emoji picker dropdown
        /* @__PURE__ */ l(
          ka,
          {
            trigger: ["click"],
            placement: "topRight",
            openClassName: "flex bg-light-5",
            overlayClassName: "[&_.ant-dropdown-menu]:flex",
            dropdownRender: () => /* @__PURE__ */ l(T, { className: "bg-white-ff max-h-40 overflow-x-auto rounded-md p-2", gap: 8, children: n.map((c, u) => /* @__PURE__ */ l(
              "span",
              {
                className: "hover:bg-light-5 mb-1 flex cursor-pointer items-center justify-center rounded text-xl leading-none",
                onMouseDown: (m) => {
                  m.preventDefault(), d(c);
                },
                children: c
              },
              u
            )) }),
            children: /* @__PURE__ */ l(T, { className: "hover:bg-light-5 rounded-full bg-transparent p-1", children: /* @__PURE__ */ l(Q, { name: "smile-outlined", className: "cursor-pointer" }) })
          }
        )
      )
    }
  );
}, es = (t, e) => {
  const {
    label: r,
    inputSize: n = "medium",
    error: o,
    readOnly: i,
    value: a,
    height: s = 38,
    isCurrency: h,
    required: d = !1,
    wrapperClassName: c,
    prefix: u,
    placeHolder: m,
    suffix: p,
    onChange: x,
    onlyNumber: b,
    style: f,
    onChangeText: w,
    disabled: y,
    lang: E,
    helperText: _,
    ...g
  } = ee(() => ({ ...t }), [t]), { i18n: v } = ze(), N = be(
    (R) => {
      const I = Pt(R.target.value);
      (b || h) && I.parseNumber(), w?.(I.toString()), x?.(R);
    },
    [h, x, w, b]
  ), S = W(
    "w-full flex items-center rounded-[4px] bg-white-ff bg-none outline-none transition-all border-none duration-200",
    y ? "bg-light-6 text-primary-light-2" : "bg-none text-primary-light-2"
  );
  return /* @__PURE__ */ B(
    T,
    {
      className: `flex w-full flex-col justify-start gap-[2px] text-[14px] ${c} `,
      children: [
        r && /* @__PURE__ */ B("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof r == "string" ? /* @__PURE__ */ l(X, { size: n === "medium" ? 14 : 12, color: A.primary, weight: "medium", children: r }) : r,
          d && /* @__PURE__ */ l(Q, { name: "Asterisk", size: 8, color: A.primary_light_3 })
        ] }),
        /* @__PURE__ */ B(
          "div",
          {
            className: `${S} focus-within:border-primary `,
            style: {
              border: `${o?.message && !y ? `1px solid ${A.negative}` : ""}`
            },
            children: [
              u && /* @__PURE__ */ l(
                "div",
                {
                  className: W(
                    "absolute flex items-center justify-center",
                    n === "medium" ? "ps-[12px]" : "ps-[8px]"
                  ),
                  children: u
                }
              ),
              /* @__PURE__ */ l(
                "input",
                {
                  ref: e,
                  placeholder: m,
                  disabled: y,
                  ...g,
                  style: {
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    ...f
                  },
                  onChange: N,
                  value: a,
                  className: `text-primary disabled:placeholder:text-primary-light-2 border-none bg-transparent placeholder:text-opacity-50 ${u ? "pe-3 ps-8" : "px-3"} 
            ${n === "medium" ? "px-[12px] text-[16px] placeholder:text-[16px] " : "px-[8px] text-[14px] placeholder:text-[14px]"} 
            ${(E || v.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr"} placeholder:text-primary  text-primary-dark-1 w-full  border-none text-[14px] font-medium outline-none ${n === "medium" ? "h-[38px]  text-[16px]" : "h-[32px] text-[14px]"}`,
                  readOnly: i
                }
              ),
              (p || o?.message) && /* @__PURE__ */ l(
                "div",
                {
                  className: W(
                    "flex h-full justify-center",
                    p ? n === "medium" ? "pe-3" : "pe-2" : null
                  ),
                  children: p && /* @__PURE__ */ l("div", { className: " flex h-full items-center justify-center", children: p }) || o?.message && _ && !p && !y && /* @__PURE__ */ l(
                    "div",
                    {
                      id: "my-anchor-element",
                      className: " flex h-full cursor-pointer items-center justify-center",
                      children: /* @__PURE__ */ l(yi, { color: A.negative, title: o.message, arrow: !0, children: /* @__PURE__ */ l(Q, { name: "alert-line", color: A.negative }) })
                    }
                  )
                }
              )
            ]
          }
        ),
        !_ && o && /* @__PURE__ */ l(X, { className: "min-h-[24px]", size: 12, color: A.negative_light_1, children: o?.message }),
        _ && /* @__PURE__ */ l(X, { color: A.primary, children: _ })
      ]
    }
  );
}, ts = it(es), rs = it((t, e) => {
  const {
    placeHolder: r,
    background: n,
    inputSize: o = "large",
    error: i,
    lang: a,
    helperText: s,
    disabled: h,
    isCurrency: d,
    onChange: c,
    value: u,
    status: m,
    prefix: p,
    suffix: x,
    required: b,
    label: f,
    height: w = 38,
    step: y = 1,
    className: E,
    wrapperClassName: _,
    max: g,
    min: v,
    hideErrorMessage: N = !1,
    disableNegative: S = !1,
    ...R
  } = ee(() => ({ ...t }), [t]), { i18n: I } = ze(), P = be(
    (U) => {
      const j = Pt(U);
      d && j.parseNumber();
      const J = Number(U);
      if (isNaN(J))
        c?.(j.toStringNumber({ negative: !0 }));
      else {
        const z = v !== void 0 && Number.isInteger(v), V = g !== void 0 && Number.isInteger(g);
        if (V && z && g < v)
          throw new Error("Maximum should be bigger than Minimum");
        if (S && J < 0 || z && v == 0 && J < 0 || V && g == 0 && J > 0 || z && J < Number(v) || V && J > Number(g))
          return;
        c?.(j.toStringNumber({ negative: !0 }));
      }
    },
    [d, c, v, g, S]
  ), $ = be(
    (U) => {
      const J = u === void 0 ? 0 : u, [z, V = ""] = J.toString().split("."), se = (Number(z) - U).toString(), ie = V ? `${se}.${V}` : se, we = Number(ie).toFixed(V.length);
      P(we);
    },
    [u, P]
  );
  return /* @__PURE__ */ B(
    T,
    {
      vertical: !0,
      className: W(
        "w-full",
        !N && "inputErrorMessageContainer",
        _
      ),
      children: [
        f && /* @__PURE__ */ B("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof f == "string" ? /* @__PURE__ */ l(xt, { children: /* @__PURE__ */ l(X, { size: o === "large" ? 14 : 12, color: A.primary, weight: "normal", children: f }) }) : f,
          /* @__PURE__ */ l(Ve, { when: b, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ l(
          An,
          {
            value: d && u ? Pt(u).toCurrency().toString() : u || "",
            ref: e,
            className: W(
              (a || I.language) === "fa" ? "font-yekan-normal direction-rtl " : "font-roboto-normal direction-ltr",
              "placeholder:text-primary text-primary-dark-1 w-full select-none py-0  pe-0 ps-2 text-[14px] font-medium outline-none",
              E
            ),
            classNames: {
              input: "py-2 !placeholder:text-right"
            },
            styles: { input: { unicodeBidi: "plaintext" } },
            placeholder: r,
            size: o,
            style: { background: n, height: w, outline: "none", unicodeBidi: "plaintext" },
            onChange: (U) => P(U.target.value),
            status: i?.message ? "error" : m,
            disabled: h,
            suffix: /* @__PURE__ */ l("div", { className: W("flex h-full"), children: /* @__PURE__ */ B(
              T,
              {
                vertical: !0,
                flex: 1,
                className: " border-primary-light-3 w-full border-s border-solid p-0",
                children: [
                  /* @__PURE__ */ l(
                    T,
                    {
                      flex: 1,
                      className: "bg-light-1 w-10 cursor-pointer items-center  justify-center  rounded	border-solid ",
                      onClick: () => $(-y),
                      children: /* @__PURE__ */ l(Q, { name: "Chevron_Up", size: "small", color: A.primary_dark_2 })
                    }
                  ),
                  /* @__PURE__ */ l(ya, { className: "bg-primary-light-3 m-0 p-0" }),
                  /* @__PURE__ */ l(
                    T,
                    {
                      flex: 1,
                      onClick: () => $(+y),
                      className: "bg-light-1 border-1 w-10 cursor-pointer items-center justify-center  rounded	border-solid",
                      children: /* @__PURE__ */ l(Q, { name: "Chevron_Down", size: "small", color: A.primary_dark_2 })
                    }
                  )
                ]
              }
            ) }),
            prefix: p,
            step: y,
            ...R
          }
        ),
        !N && i?.message && !s && /* @__PURE__ */ l(at, { message: i?.message }),
        s && /* @__PURE__ */ l(X, { color: A.primary, className: "helperText", children: s })
      ]
    }
  );
}), ns = it(
  ({ onIconClick: t, ...e }, r) => {
    const { t: n } = ze();
    return /* @__PURE__ */ l(
      Si,
      {
        placeholder: n("common.literal.search"),
        suffix: /* @__PURE__ */ l(Q, { name: "Search_header", onClick: t }),
        ref: r,
        hideErrorMessage: !0,
        ...e
      }
    );
  }
), Ci = Dn({
  Default: Si,
  Ghost: ts,
  Number: rs,
  Search: ns,
  TextArea: Qa,
  EmojiPicker: Za
}), vf = ({
  helperText: t,
  required: e,
  label: r,
  error: n,
  wrapperClassName: o,
  onChange: i,
  onChangeISO: a,
  value: s,
  valueISO: h,
  locale: d,
  placeholder: c,
  wrapperStyle: u,
  hideErrorMessage: m = !1,
  ...p
}) => {
  const { i18n: x } = ze(), [b, f] = de(!1), w = ee(() => h ? Ea(h) : s, [h, s]), y = be(
    (_, g) => {
      const v = _ ? _.toISOString() : "";
      i?.(_, g), a?.(v);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), E = d || x.language;
  return /* @__PURE__ */ B(T, { vertical: !0, className: `w-full ${!m && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ B("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ l(Ve, { when: t, children: /* @__PURE__ */ l(ar, { variant: "default", title: t, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ l(Q, { name: "Help_header", color: A.primary_light_3, size: 15 }) }) }),
      typeof r == "string" ? /* @__PURE__ */ l(X, { className: "mb-[3px]", color: A.primary, children: r }) : r,
      /* @__PURE__ */ l(Ve, { when: e, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ l(
      wi.InputDatePicker,
      {
        open: b,
        onOpenChange: f,
        format: E === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: E === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: d === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: xi,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: n?.message ? A.negative : A.primary_light_3,
          ...u
        },
        onChange: y,
        value: w,
        placeholder: c,
        closeOnChange: !0,
        ...p
      }
    ),
    !m && n?.message && /* @__PURE__ */ l(at, { message: _i(n) })
  ] });
}, bf = ({
  helperText: t,
  required: e,
  label: r,
  error: n,
  wrapperClassName: o,
  inputWrapperClassName: i,
  value: a,
  locale: s,
  wrapperStyle: h,
  hideErrorMessage: d = !1,
  height: c,
  ...u
}) => {
  const { i18n: m } = ze(), p = ne(null), [x, b] = de(!1), f = (a?.filter(Boolean)?.length || 0) > 0 && !!a, w = s || m.language;
  return oe(() => {
    a?.length === 2 && p.current && b(!1);
  }, [a]), /* @__PURE__ */ B(
    T,
    {
      vertical: !0,
      className: W(
        "w-full",
        !d && "inputErrorMessageContainer",
        o
      ),
      children: [
        /* @__PURE__ */ B("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ l(Ve, { when: t, children: /* @__PURE__ */ l(ar, { variant: "default", title: t, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ l(Q, { name: "Help_header", color: A.primary_light_3, size: 15 }) }) }),
          typeof r == "string" ? /* @__PURE__ */ l(X, { color: A.primary, className: "mb-[3px]", children: r }) : r,
          /* @__PURE__ */ l(Ve, { when: e, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ l(T, { ref: p, className: W("h-full w-full", i), children: /* @__PURE__ */ l(
          wi.InputRangePicker,
          {
            open: x,
            onOpenChange: b,
            format: w === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: w === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: s === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: xi,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: n?.message ? A.negative : A.primary_light_3,
              minHeight: 40,
              ...h
            },
            value: f ? a : null,
            ...u
          }
        ) }),
        !d && n?.message && /* @__PURE__ */ l(at, { message: n?.message })
      ]
    }
  );
}, wf = ({
  error: t,
  noContentFoundMessage: e,
  errorIcon: r,
  noContentIcon: n
}) => {
  const { t: o } = ze();
  return /* @__PURE__ */ B(T, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    t?.message ? /* @__PURE__ */ l(Q, { name: r, size: 24, color: A.negative_light_2 }) : /* @__PURE__ */ l(Q, { name: n, size: 24, color: A.primary_light_3 }),
    /* @__PURE__ */ l(X, { size: 14, color: t?.message ? A.negative : A.primary_light_2, children: e || (t?.message ? o("common.literal.listError") : o("common.message.noResultFound")) })
  ] });
};
vt.config({
  closeIcon: /* @__PURE__ */ l(Q, { size: 16, name: "Close", color: A.white_ff }),
  placement: "bottomRight",
  rtl: !0,
  bottom: 0,
  duration: 7
});
const xf = () => {
  const { t } = ze(), e = (c) => {
    vt.open({
      ...c,
      style: {
        backgroundColor: A.positive,
        alignItems: "center",
        borderRadius: 4
      },
      //TODO if need button
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      icon: /* @__PURE__ */ l(Q, { size: 16, name: "Checkmark_Circle", color: A.white_ff }),
      message: /* @__PURE__ */ B(T, { className: "flex-1", children: [
        /* @__PURE__ */ l(
          X,
          {
            showTooltipOnTruncate: !1,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: A.white_ff,
            children: c.message
          }
        ),
        /* @__PURE__ */ l(At, { color: A.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  return {
    success: e,
    neutral: (c) => {
      vt.open({
        ...c,
        // btn: (
        //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
        //     {props.btn}
        //   </Text>
        // ),
        style: { backgroundColor: A.primary_dark_1, borderRadius: 4, alignItems: "center" },
        message: /* @__PURE__ */ B(T, { gap: 8, children: [
          /* @__PURE__ */ l(
            X,
            {
              showTooltipOnTruncate: !1,
              className: "flex flex-1  ",
              weight: "medium",
              size: 16,
              color: A.white_ff,
              children: c.message
            }
          ),
          /* @__PURE__ */ l(At, { color: A.white_ff_20, className: "min-h-full w-full" })
        ] })
      });
    },
    negative: (c) => {
      vt.open({
        ...c,
        // btn: (
        //   <Text className="self-end" weight="medium" size={16} color={colors.white_ff}>
        //     {props.btn}
        //   </Text>
        // ),
        style: { backgroundColor: A.negative, borderRadius: 4, alignItems: "center" },
        icon: /* @__PURE__ */ l(Q, { size: 16, name: "Alert", color: A.white_ff }),
        message: /* @__PURE__ */ B(T, { gap: 8, children: [
          /* @__PURE__ */ l(
            X,
            {
              showTooltipOnTruncate: !1,
              className: " flex flex-1 ",
              weight: "medium",
              size: 16,
              color: A.white_ff,
              children: c.message
            }
          ),
          /* @__PURE__ */ l(At, { color: A.white_ff_20, className: "min-h-full w-full" })
        ] })
      });
    },
    informative: (c) => {
      vt.open({
        ...c,
        // btn: (
        //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
        //     {props.btn}
        //   </Text>
        // ),
        style: { backgroundColor: A.secondary, borderRadius: 4, alignItems: "center" },
        icon: /* @__PURE__ */ l(Q, { size: 16, name: "information", color: A.white_ff }),
        message: /* @__PURE__ */ B(T, { gap: 8, children: [
          /* @__PURE__ */ l(
            X,
            {
              showTooltipOnTruncate: !1,
              className: "flex flex-1 ",
              weight: "medium",
              size: 16,
              color: A.white_ff,
              children: c.message
            }
          ),
          /* @__PURE__ */ l(At, { color: A.white_ff_20, className: "min-h-full w-full" })
        ] })
      });
    },
    successfullyAdded: () => {
      e({
        message: /* @__PURE__ */ l(X, { showTooltipOnTruncate: !1, weight: "medium", size: 16, color: A.white_ff, children: t("common.message.successfullyAdded") })
      });
    },
    successfullyEdited: () => {
      e({
        message: /* @__PURE__ */ l(X, { showTooltipOnTruncate: !1, weight: "medium", size: 16, color: A.white_ff, children: t("common.message.successfullyEdited") })
      });
    },
    successfullyDeleted: () => {
      e({
        message: /* @__PURE__ */ l(X, { showTooltipOnTruncate: !1, weight: "medium", size: 16, color: A.white_ff, children: t("common.message.successfullyDeleted") })
      });
    },
    copied: () => {
      e({
        message: /* @__PURE__ */ l(X, { showTooltipOnTruncate: !1, weight: "medium", size: 16, color: A.white_ff, children: t("common.message.copied") })
      });
    },
    error: (c) => {
      vt.open({
        style: { backgroundColor: A.negative, borderRadius: 4, alignItems: "center" },
        icon: /* @__PURE__ */ l(Q, { size: 16, name: "Alert", color: A.white_ff }),
        message: /* @__PURE__ */ B(T, { gap: 8, children: [
          /* @__PURE__ */ l(
            X,
            {
              showTooltipOnTruncate: !1,
              weight: "medium",
              size: 16,
              className: " flex flex-1  ",
              color: A.white_ff,
              children: c || t("common.error.errorOccurred")
            }
          ),
          /* @__PURE__ */ l(At, { color: A.white_ff_20, className: "min-h-full w-full" })
        ] })
      });
    }
  };
}, os = (t, e) => {
  const r = ne(null);
  return (...n) => {
    r.current && clearTimeout(r.current), r.current = setTimeout(() => {
      t(...n);
    }, e);
  };
};
function is(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
const Ne = {
  toVector(t, e) {
    return t === void 0 && (t = e), Array.isArray(t) ? t : [t, t];
  },
  add(t, e) {
    return [t[0] + e[0], t[1] + e[1]];
  },
  sub(t, e) {
    return [t[0] - e[0], t[1] - e[1]];
  },
  addTo(t, e) {
    t[0] += e[0], t[1] += e[1];
  },
  subTo(t, e) {
    t[0] -= e[0], t[1] -= e[1];
  }
};
function to(t, e, r) {
  return e === 0 || Math.abs(e) === 1 / 0 ? Math.pow(t, r * 5) : t * e * r / (e + r * t);
}
function ro(t, e, r, n = 0.15) {
  return n === 0 ? is(t, e, r) : t < e ? -to(e - t, r - e, n) + e : t > r ? +to(t - r, r - e, n) + r : t;
}
function as(t, [e, r], [n, o]) {
  const [[i, a], [s, h]] = t;
  return [ro(e, i, a, n), ro(r, s, h, o)];
}
function ss(t, e) {
  if (typeof t != "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ls(t) {
  var e = ss(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Le(t, e, r) {
  return e = ls(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function no(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? no(Object(r), !0).forEach(function(n) {
      Le(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : no(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
const Ni = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function oo(t) {
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}
const cs = ["enter", "leave"];
function us(t = !1, e) {
  return t && !cs.includes(e);
}
function fs(t, e = "", r = !1) {
  const n = Ni[t], o = n && n[e] || e;
  return "on" + oo(t) + oo(o) + (us(r, o) ? "Capture" : "");
}
const ds = ["gotpointercapture", "lostpointercapture"];
function ps(t) {
  let e = t.substring(2).toLowerCase();
  const r = !!~e.indexOf("passive");
  r && (e = e.replace("passive", ""));
  const n = ds.includes(e) ? "capturecapture" : "capture", o = !!~e.indexOf(n);
  return o && (e = e.replace("capture", "")), {
    device: e,
    capture: o,
    passive: r
  };
}
function hs(t, e = "") {
  const r = Ni[t], n = r && r[e] || e;
  return t + n;
}
function lr(t) {
  return "touches" in t;
}
function Oi(t) {
  return lr(t) ? "touch" : "pointerType" in t ? t.pointerType : "mouse";
}
function gs(t) {
  return Array.from(t.touches).filter((e) => {
    var r, n;
    return e.target === t.currentTarget || ((r = t.currentTarget) === null || r === void 0 || (n = r.contains) === null || n === void 0 ? void 0 : n.call(r, e.target));
  });
}
function ms(t) {
  return t.type === "touchend" || t.type === "touchcancel" ? t.changedTouches : t.targetTouches;
}
function Ei(t) {
  return lr(t) ? ms(t)[0] : t;
}
function xn(t, e) {
  try {
    const r = e.clientX - t.clientX, n = e.clientY - t.clientY, o = (e.clientX + t.clientX) / 2, i = (e.clientY + t.clientY) / 2, a = Math.hypot(r, n);
    return {
      angle: -(Math.atan2(r, n) * 180) / Math.PI,
      distance: a,
      origin: [o, i]
    };
  } catch {
  }
  return null;
}
function ys(t) {
  return gs(t).map((e) => e.identifier);
}
function io(t, e) {
  const [r, n] = Array.from(t.touches).filter((o) => e.includes(o.identifier));
  return xn(r, n);
}
function Cr(t) {
  const e = Ei(t);
  return lr(t) ? e.identifier : e.pointerId;
}
function wt(t) {
  const e = Ei(t);
  return [e.clientX, e.clientY];
}
const ao = 40, so = 800;
function Ai(t) {
  let {
    deltaX: e,
    deltaY: r,
    deltaMode: n
  } = t;
  return n === 1 ? (e *= ao, r *= ao) : n === 2 && (e *= so, r *= so), [e, r];
}
function vs(t) {
  var e, r;
  const {
    scrollX: n,
    scrollY: o,
    scrollLeft: i,
    scrollTop: a
  } = t.currentTarget;
  return [(e = n ?? i) !== null && e !== void 0 ? e : 0, (r = o ?? a) !== null && r !== void 0 ? r : 0];
}
function bs(t) {
  const e = {};
  if ("buttons" in t && (e.buttons = t.buttons), "shiftKey" in t) {
    const {
      shiftKey: r,
      altKey: n,
      metaKey: o,
      ctrlKey: i
    } = t;
    Object.assign(e, {
      shiftKey: r,
      altKey: n,
      metaKey: o,
      ctrlKey: i
    });
  }
  return e;
}
function er(t, ...e) {
  return typeof t == "function" ? t(...e) : t;
}
function ws() {
}
function xs(...t) {
  return t.length === 0 ? ws : t.length === 1 ? t[0] : function() {
    let e;
    for (const r of t)
      e = r.apply(this, arguments) || e;
    return e;
  };
}
function lo(t, e) {
  return Object.assign({}, e, t || {});
}
const _s = 32;
class Di {
  constructor(e, r, n) {
    this.ctrl = e, this.args = r, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(e) {
    this.ctrl.state[this.key] = e;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state: e,
      shared: r,
      ingKey: n,
      args: o
    } = this;
    r[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], e.args = o, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0;
  }
  start(e) {
    const r = this.state, n = this.config;
    r._active || (this.reset(), this.computeInitial(), r._active = !0, r.target = e.target, r.currentTarget = e.currentTarget, r.lastOffset = n.from ? er(n.from, r) : r.offset, r.offset = r.lastOffset, r.startTime = r.timeStamp = e.timeStamp);
  }
  computeValues(e) {
    const r = this.state;
    r._values = e, r.values = this.config.transform(e);
  }
  computeInitial() {
    const e = this.state;
    e._initial = e._values, e.initial = e.values;
  }
  compute(e) {
    const {
      state: r,
      config: n,
      shared: o
    } = this;
    r.args = this.args;
    let i = 0;
    if (e && (r.event = e, n.preventDefault && e.cancelable && r.event.preventDefault(), r.type = e.type, o.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, o.locked = !!document.pointerLockElement, Object.assign(o, bs(e)), o.down = o.pressed = o.buttons % 2 === 1 || o.touches > 0, i = e.timeStamp - r.timeStamp, r.timeStamp = e.timeStamp, r.elapsedTime = r.timeStamp - r.startTime), r._active) {
      const v = r._delta.map(Math.abs);
      Ne.addTo(r._distance, v);
    }
    this.axisIntent && this.axisIntent(e);
    const [a, s] = r._movement, [h, d] = n.threshold, {
      _step: c,
      values: u
    } = r;
    if (n.hasCustomTransform ? (c[0] === !1 && (c[0] = Math.abs(a) >= h && u[0]), c[1] === !1 && (c[1] = Math.abs(s) >= d && u[1])) : (c[0] === !1 && (c[0] = Math.abs(a) >= h && Math.sign(a) * h), c[1] === !1 && (c[1] = Math.abs(s) >= d && Math.sign(s) * d)), r.intentional = c[0] !== !1 || c[1] !== !1, !r.intentional) return;
    const m = [0, 0];
    if (n.hasCustomTransform) {
      const [v, N] = u;
      m[0] = c[0] !== !1 ? v - c[0] : 0, m[1] = c[1] !== !1 ? N - c[1] : 0;
    } else
      m[0] = c[0] !== !1 ? a - c[0] : 0, m[1] = c[1] !== !1 ? s - c[1] : 0;
    this.restrictToAxis && !r._blocked && this.restrictToAxis(m);
    const p = r.offset, x = r._active && !r._blocked || r.active;
    x && (r.first = r._active && !r.active, r.last = !r._active && r.active, r.active = o[this.ingKey] = r._active, e && (r.first && ("bounds" in n && (r._bounds = er(n.bounds, r)), this.setup && this.setup()), r.movement = m, this.computeOffset()));
    const [b, f] = r.offset, [[w, y], [E, _]] = r._bounds;
    r.overflow = [b < w ? -1 : b > y ? 1 : 0, f < E ? -1 : f > _ ? 1 : 0], r._movementBound[0] = r.overflow[0] ? r._movementBound[0] === !1 ? r._movement[0] : r._movementBound[0] : !1, r._movementBound[1] = r.overflow[1] ? r._movementBound[1] === !1 ? r._movement[1] : r._movementBound[1] : !1;
    const g = r._active ? n.rubberband || [0, 0] : [0, 0];
    if (r.offset = as(r._bounds, r.offset, g), r.delta = Ne.sub(r.offset, p), this.computeMovement(), x && (!r.last || i > _s)) {
      r.delta = Ne.sub(r.offset, p);
      const v = r.delta.map(Math.abs);
      Ne.addTo(r.distance, v), r.direction = r.delta.map(Math.sign), r._direction = r._delta.map(Math.sign), !r.first && i > 0 && (r.velocity = [v[0] / i, v[1] / i], r.timeDelta = i);
    }
  }
  emit() {
    const e = this.state, r = this.shared, n = this.config;
    if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
    const o = this.handler(Te(Te(Te({}, r), e), {}, {
      [this.aliasKey]: e.values
    }));
    o !== void 0 && (e.memo = o);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
}
function Ss([t, e], r) {
  const n = Math.abs(t), o = Math.abs(e);
  if (n > o && n > r)
    return "x";
  if (o > n && o > r)
    return "y";
}
class $t extends Di {
  constructor(...e) {
    super(...e), Le(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = Ne.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = Ne.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(e) {
    const r = this.state, n = this.config;
    if (!r.axis && e) {
      const o = typeof n.axisThreshold == "object" ? n.axisThreshold[Oi(e)] : n.axisThreshold;
      r.axis = Ss(r._movement, o);
    }
    r._blocked = (n.lockDirection || !!n.axis) && !r.axis || !!n.axis && n.axis !== r.axis;
  }
  restrictToAxis(e) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          e[1] = 0;
          break;
        case "y":
          e[0] = 0;
          break;
      }
  }
}
const co = (t) => t, uo = 0.15, Tn = {
  enabled(t = !0) {
    return t;
  },
  eventOptions(t, e, r) {
    return Te(Te({}, r.shared.eventOptions), t);
  },
  preventDefault(t = !1) {
    return t;
  },
  triggerAllEvents(t = !1) {
    return t;
  },
  rubberband(t = 0) {
    switch (t) {
      case !0:
        return [uo, uo];
      case !1:
        return [0, 0];
      default:
        return Ne.toVector(t);
    }
  },
  from(t) {
    if (typeof t == "function") return t;
    if (t != null) return Ne.toVector(t);
  },
  transform(t, e, r) {
    const n = t || r.shared.transform;
    if (this.hasCustomTransform = !!n, process.env.NODE_ENV === "development") {
      const o = n || co;
      return (i) => {
        const a = o(i);
        return (!isFinite(a[0]) || !isFinite(a[1])) && console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${a[0]},${[1]}]`), a;
      };
    }
    return n || co;
  },
  threshold(t) {
    return Ne.toVector(t, 0);
  }
};
process.env.NODE_ENV === "development" && Object.assign(Tn, {
  domTarget(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
    return NaN;
  },
  lockDirection(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");
    return NaN;
  },
  initial(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");
    return NaN;
  }
});
const Cs = 0, dt = Te(Te({}, Tn), {}, {
  axis(t, e, {
    axis: r
  }) {
    if (this.lockDirection = r === "lock", !this.lockDirection) return r;
  },
  axisThreshold(t = Cs) {
    return t;
  },
  bounds(t = {}) {
    if (typeof t == "function")
      return (i) => dt.bounds(t(i));
    if ("current" in t)
      return () => t.current;
    if (typeof HTMLElement == "function" && t instanceof HTMLElement)
      return t;
    const {
      left: e = -1 / 0,
      right: r = 1 / 0,
      top: n = -1 / 0,
      bottom: o = 1 / 0
    } = t;
    return [[e, r], [n, o]];
  }
}), fo = {
  ArrowRight: (t, e = 1) => [t * e, 0],
  ArrowLeft: (t, e = 1) => [-1 * t * e, 0],
  ArrowUp: (t, e = 1) => [0, -1 * t * e],
  ArrowDown: (t, e = 1) => [0, t * e]
};
class Ns extends $t {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const e = this.state;
    e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this);
  }
  setup() {
    const e = this.state;
    if (e._bounds instanceof HTMLElement) {
      const r = e._bounds.getBoundingClientRect(), n = e.currentTarget.getBoundingClientRect(), o = {
        left: r.left - n.left + e.offset[0],
        right: r.right - n.right + e.offset[0],
        top: r.top - n.top + e.offset[1],
        bottom: r.bottom - n.bottom + e.offset[1]
      };
      e._bounds = dt.bounds(o);
    }
  }
  cancel() {
    const e = this.state;
    e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(e) {
    const r = this.config, n = this.state;
    if (e.buttons != null && (Array.isArray(r.pointerButtons) ? !r.pointerButtons.includes(e.buttons) : r.pointerButtons !== -1 && r.pointerButtons !== e.buttons)) return;
    const o = this.ctrl.setEventIds(e);
    r.pointerCapture && e.target.setPointerCapture(e.pointerId), !(o && o.size > 1 && n._pointerActive) && (this.start(e), this.setupPointer(e), n._pointerId = Cr(e), n._pointerActive = !0, this.computeValues(wt(e)), this.computeInitial(), r.preventScrollAxis && Oi(e) !== "mouse" ? (n._active = !1, this.setupScrollPrevention(e)) : r.delay > 0 ? (this.setupDelayTrigger(e), r.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e));
  }
  startPointerDrag(e) {
    const r = this.state;
    r._active = !0, r._preventScroll = !0, r._delayed = !1, this.compute(e), this.emit();
  }
  pointerMove(e) {
    const r = this.state, n = this.config;
    if (!r._pointerActive) return;
    const o = Cr(e);
    if (r._pointerId !== void 0 && o !== r._pointerId) return;
    const i = wt(e);
    if (document.pointerLockElement === e.target ? r._delta = [e.movementX, e.movementY] : (r._delta = Ne.sub(i, r._values), this.computeValues(i)), Ne.addTo(r._movement, r._delta), this.compute(e), r._delayed && r.intentional) {
      this.timeoutStore.remove("dragDelay"), r.active = !1, this.startPointerDrag(e);
      return;
    }
    if (n.preventScrollAxis && !r._preventScroll)
      if (r.axis)
        if (r.axis === n.preventScrollAxis || n.preventScrollAxis === "xy") {
          r._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(e);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(e) {
    this.ctrl.setEventIds(e);
    try {
      this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId);
    } catch {
      process.env.NODE_ENV === "development" && console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.");
    }
    const r = this.state, n = this.config;
    if (!r._active || !r._pointerActive) return;
    const o = Cr(e);
    if (r._pointerId !== void 0 && o !== r._pointerId) return;
    this.state._pointerActive = !1, this.setActive(), this.compute(e);
    const [i, a] = r._distance;
    if (r.tap = i <= n.tapsThreshold && a <= n.tapsThreshold, r.tap && n.filterTaps)
      r._force = !0;
    else {
      const [s, h] = r._delta, [d, c] = r._movement, [u, m] = n.swipe.velocity, [p, x] = n.swipe.distance, b = n.swipe.duration;
      if (r.elapsedTime < b) {
        const f = Math.abs(s / r.timeDelta), w = Math.abs(h / r.timeDelta);
        f > u && Math.abs(d) > p && (r.swipe[0] = Math.sign(s)), w > m && Math.abs(c) > x && (r.swipe[1] = Math.sign(h));
      }
    }
    this.emit();
  }
  pointerClick(e) {
    !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
  }
  setupPointer(e) {
    const r = this.config, n = r.device;
    if (process.env.NODE_ENV === "development")
      try {
        if (n === "pointer" && r.preventScrollDelay === void 0) {
          const o = "uv" in e ? e.sourceEvent.currentTarget : e.currentTarget;
          window.getComputedStyle(o).touchAction === "auto" && console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.", o);
        }
      } catch {
      }
    r.pointerLock && e.currentTarget.requestPointerLock(), r.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(e) {
    this.state._preventScroll && e.cancelable && e.preventDefault();
  }
  setupScrollPrevention(e) {
    this.state._preventScroll = !1, Os(e);
    const r = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", r), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", r), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e);
  }
  setupDelayTrigger(e) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(e);
    }, this.config.delay);
  }
  keyDown(e) {
    const r = fo[e.key];
    if (r) {
      const n = this.state, o = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
      this.start(e), n._delta = r(this.config.keyboardDisplacement, o), n._keyboardActive = !0, Ne.addTo(n._movement, n._delta), this.compute(e), this.emit();
    }
  }
  keyUp(e) {
    e.key in fo && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    e(r, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(r, "change", this.pointerMove.bind(this)), e(r, "end", this.pointerUp.bind(this)), e(r, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
}
function Os(t) {
  "persist" in t && typeof t.persist == "function" && t.persist();
}
const zt = typeof window < "u" && window.document && window.document.createElement;
function Ti() {
  return zt && "ontouchstart" in window;
}
function Es() {
  return Ti() || zt && window.navigator.maxTouchPoints > 1;
}
function As() {
  return zt && "onpointerdown" in window;
}
function Ds() {
  return zt && "exitPointerLock" in window.document;
}
function Ts() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
const Ke = {
  isBrowser: zt,
  gesture: Ts(),
  touch: Ti(),
  touchscreen: Es(),
  pointer: As(),
  pointerLock: Ds()
}, Rs = 250, Is = 180, Ps = 0.5, ks = 50, Ms = 250, Ls = 10, po = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Ri = Te(Te({}, dt), {}, {
  device(t, e, {
    pointer: {
      touch: r = !1,
      lock: n = !1,
      mouse: o = !1
    } = {}
  }) {
    return this.pointerLock = n && Ke.pointerLock, Ke.touch && r ? "touch" : this.pointerLock ? "mouse" : Ke.pointer && !o ? "pointer" : Ke.touch ? "touch" : "mouse";
  },
  preventScrollAxis(t, e, {
    preventScroll: r
  }) {
    if (this.preventScrollDelay = typeof r == "number" ? r : r || r === void 0 && t ? Rs : void 0, !(!Ke.touchscreen || r === !1))
      return t || (r !== void 0 ? "y" : void 0);
  },
  pointerCapture(t, e, {
    pointer: {
      capture: r = !0,
      buttons: n = 1,
      keys: o = !0
    } = {}
  }) {
    return this.pointerButtons = n, this.keys = o, !this.pointerLock && this.device === "pointer" && r;
  },
  threshold(t, e, {
    filterTaps: r = !1,
    tapsThreshold: n = 3,
    axis: o = void 0
  }) {
    const i = Ne.toVector(t, r ? n : o ? 1 : 0);
    return this.filterTaps = r, this.tapsThreshold = n, i;
  },
  swipe({
    velocity: t = Ps,
    distance: e = ks,
    duration: r = Ms
  } = {}) {
    return {
      velocity: this.transform(Ne.toVector(t)),
      distance: this.transform(Ne.toVector(e)),
      duration: r
    };
  },
  delay(t = 0) {
    switch (t) {
      case !0:
        return Is;
      case !1:
        return 0;
      default:
        return t;
    }
  },
  axisThreshold(t) {
    return t ? Te(Te({}, po), t) : po;
  },
  keyboardDisplacement(t = Ls) {
    return t;
  }
});
process.env.NODE_ENV === "development" && Object.assign(Ri, {
  useTouch(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");
    return NaN;
  },
  experimental_preventWindowScrollY(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");
    return NaN;
  },
  swipeVelocity(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");
    return NaN;
  },
  swipeDistance(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");
    return NaN;
  },
  swipeDuration(t) {
    if (t !== void 0)
      throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");
    return NaN;
  }
});
function Ii(t) {
  const [e, r] = t.overflow, [n, o] = t._delta, [i, a] = t._direction;
  (e < 0 && n > 0 && i < 0 || e > 0 && n < 0 && i > 0) && (t._movement[0] = t._movementBound[0]), (r < 0 && o > 0 && a < 0 || r > 0 && o < 0 && a > 0) && (t._movement[1] = t._movementBound[1]);
}
const Fs = 30, Bs = 100;
class $s extends Di {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "pinching"), Le(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const e = this.state;
    e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0;
  }
  computeOffset() {
    const {
      type: e,
      movement: r,
      lastOffset: n
    } = this.state;
    e === "wheel" ? this.state.offset = Ne.add(r, n) : this.state.offset = [(1 + r[0]) * n[0], r[1] + n[1]];
  }
  computeMovement() {
    const {
      offset: e,
      lastOffset: r
    } = this.state;
    this.state.movement = [e[0] / r[0], e[1] - r[1]];
  }
  axisIntent() {
    const e = this.state, [r, n] = e._movement;
    if (!e.axis) {
      const o = Math.abs(r) * Fs - Math.abs(n);
      o < 0 ? e.axis = "angle" : o > 0 && (e.axis = "scale");
    }
  }
  restrictToAxis(e) {
    this.config.lockDirection && (this.state.axis === "scale" ? e[1] = 0 : this.state.axis === "angle" && (e[0] = 0));
  }
  cancel() {
    const e = this.state;
    e.canceled || setTimeout(() => {
      e.canceled = !0, e._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(e) {
    this.ctrl.setEventIds(e);
    const r = this.state, n = this.ctrl.touchIds;
    if (r._active && r._touchIds.every((i) => n.has(i)) || n.size < 2) return;
    this.start(e), r._touchIds = Array.from(n).slice(0, 2);
    const o = io(e, r._touchIds);
    o && this.pinchStart(e, o);
  }
  pointerStart(e) {
    if (e.buttons != null && e.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
    const r = this.state, n = r._pointerEvents, o = this.ctrl.pointerIds;
    if (r._active && Array.from(n.keys()).every((a) => o.has(a)) || (n.size < 2 && n.set(e.pointerId, e), r._pointerEvents.size < 2)) return;
    this.start(e);
    const i = xn(...Array.from(n.values()));
    i && this.pinchStart(e, i);
  }
  pinchStart(e, r) {
    const n = this.state;
    n.origin = r.origin, this.computeValues([r.distance, r.angle]), this.computeInitial(), this.compute(e), this.emit();
  }
  touchMove(e) {
    if (!this.state._active) return;
    const r = io(e, this.state._touchIds);
    r && this.pinchMove(e, r);
  }
  pointerMove(e) {
    const r = this.state._pointerEvents;
    if (r.has(e.pointerId) && r.set(e.pointerId, e), !this.state._active) return;
    const n = xn(...Array.from(r.values()));
    n && this.pinchMove(e, n);
  }
  pinchMove(e, r) {
    const n = this.state, o = n._values[1], i = r.angle - o;
    let a = 0;
    Math.abs(i) > 270 && (a += Math.sign(i)), this.computeValues([r.distance, r.angle - 360 * a]), n.origin = r.origin, n.turns = a, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit();
  }
  touchEnd(e) {
    this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((r) => !this.ctrl.touchIds.has(r)) && (this.state._active = !1, this.compute(e), this.emit());
  }
  pointerEnd(e) {
    const r = this.state;
    this.ctrl.setEventIds(e);
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {
    }
    r._pointerEvents.has(e.pointerId) && r._pointerEvents.delete(e.pointerId), r._active && r._pointerEvents.size < 2 && (r._active = !1, this.compute(e), this.emit());
  }
  gestureStart(e) {
    e.cancelable && e.preventDefault();
    const r = this.state;
    r._active || (this.start(e), this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY], this.compute(e), this.emit());
  }
  gestureMove(e) {
    if (e.cancelable && e.preventDefault(), !this.state._active) return;
    const r = this.state;
    this.computeValues([e.scale, e.rotation]), r.origin = [e.clientX, e.clientY];
    const n = r._movement;
    r._movement = [e.scale - 1, e.rotation], r._delta = Ne.sub(r._movement, n), this.compute(e), this.emit();
  }
  gestureEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  wheel(e) {
    const r = this.config.modifierKey;
    r && (Array.isArray(r) ? !r.find((n) => e[n]) : !e[r]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(e) {
    this.start(e), this.wheelChange(e);
  }
  wheelChange(e) {
    "uv" in e || (e.cancelable && e.preventDefault(), process.env.NODE_ENV === "development" && !e.defaultPrevented && console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));
    const n = this.state;
    n._delta = [-Ai(e)[1] / Bs * n.offset[0], 0], Ne.addTo(n._movement, n._delta), Ii(n), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    const r = this.config.device;
    r && (e(r, "start", this[r + "Start"].bind(this)), e(r, "change", this[r + "Move"].bind(this)), e(r, "end", this[r + "End"].bind(this)), e(r, "cancel", this[r + "End"].bind(this)), e("lostPointerCapture", "", this[r + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}
const zs = Te(Te({}, Tn), {}, {
  device(t, e, {
    shared: r,
    pointer: {
      touch: n = !1
    } = {}
  }) {
    if (r.target && !Ke.touch && Ke.gesture) return "gesture";
    if (Ke.touch && n) return "touch";
    if (Ke.touchscreen) {
      if (Ke.pointer) return "pointer";
      if (Ke.touch) return "touch";
    }
  },
  bounds(t, e, {
    scaleBounds: r = {},
    angleBounds: n = {}
  }) {
    const o = (a) => {
      const s = lo(er(r, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [s.min, s.max];
    }, i = (a) => {
      const s = lo(er(n, a), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [s.min, s.max];
    };
    return typeof r != "function" && typeof n != "function" ? [o(), i()] : (a) => [o(a), i(a)];
  },
  threshold(t, e, r) {
    return this.lockDirection = r.axis === "lock", Ne.toVector(t, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(t) {
    return t === void 0 ? "ctrlKey" : t;
  },
  pinchOnWheel(t = !0) {
    return t;
  }
});
class qs extends $t {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "moving");
  }
  move(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)));
  }
  moveStart(e) {
    this.start(e), this.computeValues(wt(e)), this.compute(e), this.computeInitial(), this.emit();
  }
  moveChange(e) {
    if (!this.state._active) return;
    const r = wt(e), n = this.state;
    n._delta = Ne.sub(r, n._values), Ne.addTo(n._movement, n._delta), this.computeValues(r), this.compute(e), this.emit();
  }
  moveEnd(e) {
    this.state._active && (this.state._active = !1, this.compute(e), this.emit());
  }
  bind(e) {
    e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this));
  }
}
const js = Te(Te({}, dt), {}, {
  mouseOnly: (t = !0) => t
});
class Us extends $t {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "scrolling");
  }
  scroll(e) {
    this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(e) {
    e.cancelable && e.preventDefault();
    const r = this.state, n = vs(e);
    r._delta = Ne.sub(n, r._values), Ne.addTo(r._movement, r._delta), this.computeValues(n), this.compute(e), this.emit();
  }
  scrollEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("scroll", "", this.scroll.bind(this));
  }
}
const Hs = dt;
class Ws extends $t {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "wheeling");
  }
  wheel(e) {
    this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(e) {
    const r = this.state;
    r._delta = Ai(e), Ne.addTo(r._movement, r._delta), Ii(r), this.compute(e), this.emit();
  }
  wheelEnd() {
    this.state._active && (this.state._active = !1, this.compute(), this.emit());
  }
  bind(e) {
    e("wheel", "", this.wheel.bind(this));
  }
}
const Vs = dt;
class Gs extends $t {
  constructor(...e) {
    super(...e), Le(this, "ingKey", "hovering");
  }
  enter(e) {
    this.config.mouseOnly && e.pointerType !== "mouse" || (this.start(e), this.computeValues(wt(e)), this.compute(e), this.emit());
  }
  leave(e) {
    if (this.config.mouseOnly && e.pointerType !== "mouse") return;
    const r = this.state;
    if (!r._active) return;
    r._active = !1;
    const n = wt(e);
    r._movement = r._delta = Ne.sub(n, r._values), this.computeValues(n), this.compute(e), r.delta = r.movement, this.emit();
  }
  bind(e) {
    e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this));
  }
}
const Ys = Te(Te({}, dt), {}, {
  mouseOnly: (t = !0) => t
}), Rn = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map();
function Ks(t) {
  Rn.set(t.key, t.engine), _n.set(t.key, t.resolver);
}
const Xs = {
  key: "drag",
  engine: Ns,
  resolver: Ri
}, Qs = {
  key: "hover",
  engine: Gs,
  resolver: Ys
}, Js = {
  key: "move",
  engine: qs,
  resolver: js
}, Zs = {
  key: "pinch",
  engine: $s,
  resolver: zs
}, el = {
  key: "scroll",
  engine: Us,
  resolver: Hs
}, tl = {
  key: "wheel",
  engine: Ws,
  resolver: Vs
};
function rl(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(e.indexOf(o) >= 0) && (r[o] = t[o]);
  return r;
}
function nl(t, e) {
  if (t == null) return {};
  var r = rl(t, e), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      n = i[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
const ol = {
  target(t) {
    if (t)
      return () => "current" in t ? t.current : t;
  },
  enabled(t = !0) {
    return t;
  },
  window(t = Ke.isBrowser ? window : void 0) {
    return t;
  },
  eventOptions({
    passive: t = !0,
    capture: e = !1
  } = {}) {
    return {
      passive: t,
      capture: e
    };
  },
  transform(t) {
    return t;
  }
}, il = ["target", "eventOptions", "window", "enabled", "transform"];
function Xt(t = {}, e) {
  const r = {};
  for (const [n, o] of Object.entries(e))
    switch (typeof o) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const i = o.call(r, t[n], n, t);
          Number.isNaN(i) || (r[n] = i);
        } else
          r[n] = o.call(r, t[n], n, t);
        break;
      case "object":
        r[n] = Xt(t[n], o);
        break;
      case "boolean":
        o && (r[n] = t[n]);
        break;
    }
  return r;
}
function al(t, e, r = {}) {
  const n = t, {
    target: o,
    eventOptions: i,
    window: a,
    enabled: s,
    transform: h
  } = n, d = nl(n, il);
  if (r.shared = Xt({
    target: o,
    eventOptions: i,
    window: a,
    enabled: s,
    transform: h
  }, ol), e) {
    const c = _n.get(e);
    r[e] = Xt(Te({
      shared: r.shared
    }, d), c);
  } else
    for (const c in d) {
      const u = _n.get(c);
      if (u)
        r[c] = Xt(Te({
          shared: r.shared
        }, d[c]), u);
      else if (process.env.NODE_ENV === "development" && !["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(c)) {
        if (c === "domTarget")
          throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");
        console.warn(`[@use-gesture]: Unknown config key \`${c}\` was used. Please read the documentation for further information.`);
      }
    }
  return r;
}
class Pi {
  constructor(e, r) {
    Le(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = e, this._gestureKey = r;
  }
  add(e, r, n, o, i) {
    const a = this._listeners, s = hs(r, n), h = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, d = Te(Te({}, h), i);
    e.addEventListener(s, o, d);
    const c = () => {
      e.removeEventListener(s, o, d), a.delete(c);
    };
    return a.add(c), c;
  }
  clean() {
    this._listeners.forEach((e) => e()), this._listeners.clear();
  }
}
class sl {
  constructor() {
    Le(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(e, r, n = 140, ...o) {
    this.remove(e), this._timeouts.set(e, window.setTimeout(r, n, ...o));
  }
  remove(e) {
    const r = this._timeouts.get(e);
    r && window.clearTimeout(r);
  }
  clean() {
    this._timeouts.forEach((e) => {
      window.clearTimeout(e);
    }), this._timeouts.clear();
  }
}
class ll {
  constructor(e) {
    Le(this, "gestures", /* @__PURE__ */ new Set()), Le(this, "_targetEventStore", new Pi(this)), Le(this, "gestureEventStores", {}), Le(this, "gestureTimeoutStores", {}), Le(this, "handlers", {}), Le(this, "config", {}), Le(this, "pointerIds", /* @__PURE__ */ new Set()), Le(this, "touchIds", /* @__PURE__ */ new Set()), Le(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), cl(this, e);
  }
  setEventIds(e) {
    if (lr(e))
      return this.touchIds = new Set(ys(e)), this.touchIds;
    if ("pointerId" in e)
      return e.type === "pointerup" || e.type === "pointercancel" ? this.pointerIds.delete(e.pointerId) : e.type === "pointerdown" && this.pointerIds.add(e.pointerId), this.pointerIds;
  }
  applyHandlers(e, r) {
    this.handlers = e, this.nativeHandlers = r;
  }
  applyConfig(e, r) {
    this.config = al(e, r, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const e of this.gestures)
      this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...e) {
    const r = this.config.shared, n = {};
    let o;
    if (!(r.target && (o = r.target(), !o))) {
      if (r.enabled) {
        for (const a of this.gestures) {
          const s = this.config[a], h = ho(n, s.eventOptions, !!o);
          if (s.enabled) {
            const d = Rn.get(a);
            new d(this, e, a).bind(h);
          }
        }
        const i = ho(n, r.eventOptions, !!o);
        for (const a in this.nativeHandlers)
          i(a, "", (s) => this.nativeHandlers[a](Te(Te({}, this.state.shared), {}, {
            event: s,
            args: e
          })), void 0, !0);
      }
      for (const i in n)
        n[i] = xs(...n[i]);
      if (!o) return n;
      for (const i in n) {
        const {
          device: a,
          capture: s,
          passive: h
        } = ps(i);
        this._targetEventStore.add(o, a, "", n[i], {
          capture: s,
          passive: h
        });
      }
    }
  }
}
function mt(t, e) {
  t.gestures.add(e), t.gestureEventStores[e] = new Pi(t, e), t.gestureTimeoutStores[e] = new sl();
}
function cl(t, e) {
  e.drag && mt(t, "drag"), e.wheel && mt(t, "wheel"), e.scroll && mt(t, "scroll"), e.move && mt(t, "move"), e.pinch && mt(t, "pinch"), e.hover && mt(t, "hover");
}
const ho = (t, e, r) => (n, o, i, a = {}, s = !1) => {
  var h, d;
  const c = (h = a.capture) !== null && h !== void 0 ? h : e.capture, u = (d = a.passive) !== null && d !== void 0 ? d : e.passive;
  let m = s ? n : fs(n, o, c);
  r && u && (m += "Passive"), t[m] = t[m] || [], t[m].push(i);
}, ul = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function fl(t) {
  const e = {}, r = {}, n = /* @__PURE__ */ new Set();
  for (let o in t)
    ul.test(o) ? (n.add(RegExp.lastMatch), r[o] = t[o]) : e[o] = t[o];
  return [r, e, n];
}
function yt(t, e, r, n, o, i) {
  if (!t.has(r)) return;
  if (!Rn.has(n)) {
    process.env.NODE_ENV === "development" && console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${n}\` gesture but isn't properly configured.

Please add \`${n}Action\` when creating your handler.`);
    return;
  }
  const a = r + "Start", s = r + "End", h = (d) => {
    let c;
    return d.first && a in e && e[a](d), r in e && (c = e[r](d)), d.last && s in e && e[s](d), c;
  };
  o[n] = h, i[n] = i[n] || {};
}
function dl(t, e) {
  const [r, n, o] = fl(t), i = {};
  return yt(o, r, "onDrag", "drag", i, e), yt(o, r, "onWheel", "wheel", i, e), yt(o, r, "onScroll", "scroll", i, e), yt(o, r, "onPinch", "pinch", i, e), yt(o, r, "onMove", "move", i, e), yt(o, r, "onHover", "hover", i, e), {
    handlers: i,
    config: e,
    nativeHandlers: n
  };
}
function pl(t, e = {}, r, n) {
  const o = $e.useMemo(() => new ll(t), []);
  if (o.applyHandlers(t, n), o.applyConfig(e, r), $e.useEffect(o.effect.bind(o)), $e.useEffect(() => o.clean.bind(o), []), e.target === void 0)
    return o.bind.bind(o);
}
function hl(t) {
  return t.forEach(Ks), function(r, n) {
    const {
      handlers: o,
      nativeHandlers: i,
      config: a
    } = dl(r, n || {});
    return pl(o, a, void 0, i);
  };
}
function gl(t, e) {
  return hl([Xs, Zs, el, tl, Js, Qs])(t, {});
}
function qt({
  onHover: t,
  onBlur: e,
  onFocus: r,
  onMouseDown: n,
  onMouseUp: o,
  onMouseLeave: i,
  onKeyUp: a,
  ...s
} = {}) {
  const h = [], [d, c] = de(!1), [u, m] = de(!1), [p, x] = de(!1), [b, f] = de(!1), y = {
    eventHandlers: gl({
      ...s,
      // focus
      onFocus(...g) {
        h.includes("isFocused") && c(!0), r?.(...g);
      },
      onBlur(...g) {
        h.includes("isFocused") && c(!1), h.includes("isTabFocused") && b && f(!1), e?.(...g);
      },
      // Hover
      onHover(g) {
        const { hovering: v } = g;
        h.includes("isHovered") && m(!!v), t?.(g);
      },
      // Active
      onMouseDown(...g) {
        h.includes("isActive") && x(!0), n?.(...g);
      },
      onMouseUp(...g) {
        h.includes("isActive") && x(!1), o?.(...g);
      },
      onMouseLeave(...g) {
        h.includes("isActive") && x(!1), i?.(...g);
      },
      onKeyUp(g, ...v) {
        const { event: N } = g;
        N.key === "Tab" && h.includes("isTabFocused") && f(!0), a?.(g, ...v);
      }
    }),
    isFocused: d,
    isHovered: u,
    isActive: p,
    isTabFocused: b
  }, E = {
    get: function(g, v) {
      return h.push(v), g[v];
    }
  };
  return new Proxy(y, E);
}
const In = () => {
  const { i18n: t } = ze();
  return /* @__PURE__ */ l(
    Q,
    {
      name: "Close_Circle",
      size: 18,
      className: "text-light-1 hover:text-secondary",
      style: {
        position: "absolute",
        right: t.language === "fa" ? -10 : 20,
        top: -3,
        width: "fit-content"
      }
    }
  );
}, cr = ({
  disabled: t,
  label: e,
  labelExtraNode: r,
  required: n,
  size: o,
  offset: i = 0
}) => e ? /* @__PURE__ */ B(
  "label",
  {
    className: "flex flex-row items-center justify-between",
    style: { marginBlockEnd: i },
    children: [
      /* @__PURE__ */ B(T, { vertical: !1, align: "center", gap: 1, children: [
        typeof e == "string" ? /* @__PURE__ */ l(
          X,
          {
            className: "h-[24px]",
            weight: "normal",
            size: o === "medium" ? 14 : 12,
            color: t ? A.primary_light_2 : A.primary,
            children: e
          }
        ) : /* @__PURE__ */ l(xt, { children: e }),
        /* @__PURE__ */ l(Ve, { when: n, children: /* @__PURE__ */ l(Q, { name: "Asterisk", size: 6, color: A.negative, className: "mb-2" }) })
      ] }),
      r
    ]
  }
) : null, Pn = ({ error: t, noContentFoundMessage: e }) => {
  const { t: r } = ze();
  return /* @__PURE__ */ B(T, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    t?.message ? /* @__PURE__ */ l(Q, { name: "alert-line", size: 24, color: A.negative_light_2 }) : /* @__PURE__ */ l(Q, { name: "Search_fail", size: 24, color: A.primary_light_3 }),
    /* @__PURE__ */ l(X, { size: 14, color: t?.message ? A.negative : A.primary_light_2, children: e || (t?.message ? r("common.literal.listError") : r("common.message.noResultFound")) })
  ] });
}, kn = ({
  placeholder: t,
  isHovered: e,
  disabled: r,
  isTabFocused: n
}) => /* @__PURE__ */ l(
  X,
  {
    weight: "normal",
    size: 14,
    color: r ? A.primary_light_2 : e || n ? A.primary_dark_1 : A.primary_light_3,
    children: t
  }
), ur = ({ isHovered: t, isTabFocused: e, disabled: r, error: n }) => /* @__PURE__ */ B(T, { align: "center", gap: 8, children: [
  n?.message && /* @__PURE__ */ l(Q, { name: "Alert", size: 18, color: A.negative }),
  /* @__PURE__ */ l(
    Q,
    {
      name: "Chevron_Down",
      size: 18,
      color: r ? A.primary_light_2 : t || e ? A.primary_dark_1 : A.primary_dark_1
    }
  )
] }), ki = {
  components: {
    Select: {
      multipleItemBg: A.light_1,
      multipleItemBorderColor: A.primary_light_3,
      multipleItemBorderColorDisabled: A.primary_light_3,
      multipleItemColorDisabled: A.negative,
      multipleItemHeight: 20,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: A.light_1,
      optionActiveBg: A.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: A.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: A.primary_light_3
    }
  }
}, Mn = ({
  size: t = "medium",
  error: e,
  disabled: r,
  isTabFocused: n
}) => W(
  "min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 ",
  "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
  {
    small: "h-[34px] [&_input]:!h-[32px]",
    medium: "h-[40px] [&_input]:!h-[38px]",
    large: "h-[46px] [&_input]:!h-[44px]"
  }[t],
  r && "!bg-light-6 !border-light-6",
  e && "border-negative hover:border-negative-dark-1 ",
  n && "border-[2px] border-primary-dark-1"
), { Option: ml } = _t, yl = it(
  ({
    error: t,
    className: e,
    underlined: r,
    value: n,
    label: o,
    labelExtraNode: i = null,
    onDropdownVisibleChange: a,
    open: s,
    showSearch: h = !1,
    options: d,
    labelExtractor: c = (ge) => ge?.label,
    valueExtractor: u = (ge) => ge.value,
    tagExtractor: m = (ge) => ge.label,
    disableExtractor: p = (ge) => !1,
    onChange: x,
    renderItem: b,
    renderSelectedItem: f,
    onChangeValue: w,
    selectedValue: y,
    wrapperClassName: E,
    disabled: _ = !1,
    loading: g = !1,
    noContentFoundMessage: v,
    labelPosition: N = "vertical",
    size: S = "medium",
    placeholder: R,
    popupClassName: I,
    allowClear: P,
    header: $,
    footer: U,
    infinite: j,
    hasError: J,
    addonBefore: z,
    addonAfter: V,
    required: se,
    lang: ie,
    disableOutsideScroll: we,
    hideErrorMessage: Oe = !1,
    getTagProps: te,
    ...pe
  }, Ae) => {
    const { t: ge } = ze(), { eventHandlers: K, isHovered: me, isTabFocused: ue } = qt(), [re, L] = de(!1), M = ne(
      new Map(n?.map((q) => [u(q), q]))
    ), F = ee(() => {
      const q = [];
      return y && q.push(...y), n && q.push(...n.map(u)), q;
    }, [y, n, u]), Y = ee(() => ([...M.current].map(([D, G]) => G)?.filter((D) => F.some((G) => G === u(D))) || []).map((D) => ({ value: u(D), label: m(D) })), [F, u, m]), ye = (q) => {
      a?.(q), L(q);
    }, De = (q) => {
      const k = new Map(d?.map((Ee) => [u(Ee), Ee])), H = new Set(q), D = M.current;
      q.forEach((Ee) => {
        if (k.has(Ee)) {
          const Re = k.get(Ee);
          D.set(u(Re), Re);
        }
      }), [...D].map(([Ee, Re]) => Re).forEach((Ee) => {
        H.has(u(Ee)) || D.delete(u(Ee));
      });
      const ae = [];
      [...D].forEach(([Ee, Re]) => {
        ae.push(Re);
      }), x?.(ae);
      const fe = q.map((Ee) => Ee);
      w?.(fe);
    }, ce = be(
      ({
        item: q,
        index: k,
        isActive: H,
        disabled: D
      }) => {
        const G = c(q);
        return /* @__PURE__ */ l(
          T,
          {
            className: W(
              "cursor-pointer",
              D && "pointer-events-none cursor-default opacity-50"
            ),
            onClick: () => {
              const ae = F.map((fe) => fe);
              ae.some((fe) => fe === u(q)) ? De(ae.filter((fe) => fe !== u(q))) : De([...ae, u(q)]);
            },
            children: b ? /* @__PURE__ */ B(T, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ l(Jt, { checked: H }),
              b(q, k, H, D)
            ] }) : /* @__PURE__ */ B(T, { gap: 8, className: W("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ l(Jt, { checked: H }),
              typeof G == "string" ? /* @__PURE__ */ l(
                X,
                {
                  weight: H ? "bold" : "normal",
                  color: A.primary_dark_1,
                  lang: ie,
                  className: "max-w-full overflow-hidden text-ellipsis",
                  children: G
                }
              ) : G
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [F, b]
    ), Se = (q) => {
      const { target: k } = q;
      k.classList.contains("rc-virtual-list-holder") || L(!1);
    };
    return oe(() => {
      we && (re ? document.addEventListener("scroll", Se, !0) : document.removeEventListener("scroll", Se, !0));
    }, [re, we]), /* @__PURE__ */ B(
      T,
      {
        vertical: N === "vertical",
        className: W(
          "h-fit w-full",
          !Oe && "inputErrorMessageContainer",
          N === "horizontal" && "items-center gap-3",
          E
        ),
        children: [
          /* @__PURE__ */ l(cr, { disabled: _, label: o, labelExtraNode: i, required: se, size: S }),
          /* @__PURE__ */ l(ir, { theme: ki, children: /* @__PURE__ */ B(T, { align: "center", children: [
            z,
            /* @__PURE__ */ l(
              _t,
              {
                ...pe,
                mode: "multiple",
                menuItemSelectedIcon: null,
                ref: Ae,
                className: W(
                  `${Mn({
                    size: S,
                    error: !!t?.message || J,
                    disabled: _,
                    isTabFocused: ue
                  })}`,
                  e
                ),
                disabled: _,
                ...K(),
                showSearch: h,
                bordered: !1,
                maxTagCount: 0,
                maxTagPlaceholder: /* @__PURE__ */ l(X, { children: ge("common.message.itemsSelectedWithCount", { count: F.length }) }),
                placeholder: /* @__PURE__ */ l(kn, { isHovered: me, isTabFocused: ue, placeholder: R, size: S, disabled: _ }),
                allowClear: P ? {
                  clearIcon: /* @__PURE__ */ l(In, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ l(Pn, { error: t, noContentFoundMessage: v }),
                suffixIcon: /* @__PURE__ */ l(ur, { isHovered: me, loading: g, disabled: _, isTabFocused: ue, error: t }),
                popupClassName: W("p-0 small-custom-scrollbar z-[1000]", I),
                value: F,
                onDropdownVisibleChange: ye,
                onPopupScroll: (q) => {
                  q.persist();
                  const k = q.target;
                  k.scrollTop + k.offsetHeight === k.scrollHeight && j?.hasMore && j?.fetchNextPage();
                },
                loading: !1,
                open: _ ? !1 : s === void 0 ? re : s,
                optionLabelProp: "valueRender",
                dropdownRender: (q) => {
                  if (g)
                    return /* @__PURE__ */ l(T, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ l(Bt, { isLoading: !0, size: 24 }) });
                  const k = /* @__PURE__ */ l(
                    T,
                    {
                      align: "center",
                      gap: 8,
                      className: "tiny-custom-scrollbar-horizontal border-b-light-7 flex-1 overflow-x-auto border-b p-3",
                      children: Y.map((D) => /* @__PURE__ */ l(
                        Ln,
                        {
                          closable: !0,
                          className: "!min-w-max",
                          title: D.label || "",
                          onClose: () => {
                            const G = F?.filter((ae) => D?.value !== ae);
                            De(G);
                          },
                          ...te?.(D)
                        },
                        D.value
                      ))
                    }
                  ), H = /* @__PURE__ */ B(T, { vertical: !0, children: [
                    k,
                    $ && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: $ }),
                    /* @__PURE__ */ l(T, { vertical: !0, className: "relative overflow-auto", children: q }),
                    U && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: U
                      }
                    )
                  ] });
                  return j ? /* @__PURE__ */ B(T, { vertical: !0, children: [
                    k,
                    $ && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: $ }),
                    /* @__PURE__ */ l(
                      T,
                      {
                        vertical: !0,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ l(
                          sr,
                          {
                            hasMore: j.hasMore,
                            onNextPage: j.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: d?.map((D, G) => {
                              const ae = !!F?.find((fe) => fe === u(D));
                              return ce({ index: G, isActive: ae, item: D });
                            })
                          }
                        )
                      }
                    ),
                    U && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: U
                      }
                    )
                  ] }) : H;
                },
                children: d?.map((q, k) => {
                  const H = !!F?.find((D) => D === u(q));
                  return /* @__PURE__ */ l(
                    ml,
                    {
                      value: u(q),
                      disabled: p(q),
                      children: ce({
                        index: k,
                        item: q,
                        isActive: H,
                        disabled: p ? p(q) : !1
                      })
                    },
                    u(q)
                  );
                })
              }
            ),
            V
          ] }) }),
          t?.message && !Oe && /* @__PURE__ */ l(at, { message: t?.message })
        ]
      }
    );
  }
), { Option: vl } = _t, bl = it(
  ({
    error: t,
    className: e,
    underlined: r,
    value: n,
    label: o,
    labelExtraNode: i = null,
    onDropdownVisibleChange: a,
    open: s,
    showSearch: h = !1,
    options: d,
    labelExtractor: c = (ue) => ue?.label,
    valueExtractor: u = (ue) => ue.value,
    disableExtractor: m = (ue) => !1,
    onChange: p,
    renderItem: x,
    onClickItem: b,
    renderSelectedItem: f,
    onChangeValue: w,
    selectedValue: y,
    wrapperClassName: E,
    disabled: _ = !1,
    loading: g = !1,
    noContentFoundMessage: v,
    labelPosition: N = "vertical",
    size: S = "medium",
    placeholder: R,
    popupClassName: I,
    allowClear: P,
    header: $,
    footer: U,
    infinite: j,
    hasError: J,
    addonBefore: z,
    addonAfter: V,
    required: se,
    labelOffset: ie = 0,
    lang: we,
    style: Oe,
    hideErrorMessage: te = !1,
    suffixIcon: pe,
    isLocaleSearch: Ae = !1,
    disableOutsideScroll: ge,
    ...K
  }, me) => {
    const { eventHandlers: ue, isHovered: re, isTabFocused: L } = qt(), [M, F] = de(!1), Y = ee(() => {
      let k = null;
      if (y) {
        const H = d?.find((D) => u(D) === y);
        H && (k = H);
      }
      return n && (k = n), k && u(k);
    }, [d, y, n, u]), ye = ee(() => {
      const k = d?.find((H) => u(H) === Y) ?? n;
      return k ? c(k) : null;
    }, [Y, d, c, u, n]), De = (k) => {
      a?.(k), F(k);
    }, ce = (k) => {
      if (!k?.value)
        return p?.(null);
      k && w?.(k.value || "");
      const H = d?.find(
        (D) => u(D) === k?.value
      );
      p?.(H);
    }, Se = be(
      ({ item: k, index: H, isActive: D }) => /* @__PURE__ */ l(
        T,
        {
          className: "cursor-pointer",
          onClick: () => {
            ce({
              label: c(k),
              value: u(k),
              key: u(k)
            }), b?.({
              label: c(k),
              value: u(k),
              key: u(k)
            }), F(!1);
          },
          children: x ? /* @__PURE__ */ l(T, { className: "min-h-[32px] w-full flex-1 items-center justify-between", children: x(k, H, D) }) : /* @__PURE__ */ B(
            T,
            {
              className: W(
                "h-10 w-full flex-1 items-center justify-between border-r-2 border-r-transparent px-4",
                "hover:border-r-2 hover:border-r-primary"
              ),
              children: [
                /* @__PURE__ */ l(
                  X,
                  {
                    weight: D ? "bold" : "normal",
                    color: A.primary_dark_1,
                    lang: we || Zt.language,
                    className: "max-w-full overflow-hidden text-ellipsis",
                    children: c(k)
                  }
                ),
                D && /* @__PURE__ */ l(Q, { name: "Checkmark", color: A.positive })
              ]
            }
          )
        },
        u(k)
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [c, x, u]
    ), q = (k) => {
      const { target: H } = k;
      H.classList.contains("rc-virtual-list-holder") || F(!1);
    };
    return oe(() => {
      ge && (M ? document.addEventListener("scroll", q, !0) : document.removeEventListener("scroll", q, !0));
    }, [M, ge]), /* @__PURE__ */ B(
      T,
      {
        vertical: N === "vertical",
        className: W(
          "h-fit w-full",
          !te && "inputErrorMessageContainer",
          N === "horizontal" && "items-center gap-3",
          E
        ),
        children: [
          /* @__PURE__ */ l(
            cr,
            {
              disabled: _,
              label: o,
              labelExtraNode: i,
              required: se,
              size: S,
              offset: ie
            }
          ),
          /* @__PURE__ */ l(ir, { theme: ki, children: /* @__PURE__ */ B(T, { align: "center", children: [
            z,
            /* @__PURE__ */ l(
              _t,
              {
                ref: me,
                className: W(
                  `${Mn({
                    size: S,
                    error: !!t?.message || J,
                    disabled: _,
                    isTabFocused: L
                  })}`,
                  e
                ),
                disabled: _,
                ...ue(),
                ...K,
                showSearch: h,
                style: Oe,
                variant: "borderless",
                placeholder: /* @__PURE__ */ l(kn, { isHovered: re, isTabFocused: L, placeholder: R, size: S, disabled: _ }),
                allowClear: P ? {
                  clearIcon: /* @__PURE__ */ l(In, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ l(Pn, { error: t, noContentFoundMessage: v }),
                suffixIcon: pe ?? /* @__PURE__ */ l(ur, { isHovered: re, loading: g, disabled: _, isTabFocused: L, error: t }),
                labelInValue: !0,
                popupClassName: W("p-0 small-custom-scrollbar z-[1000]", I),
                value: Y ? { value: Y, label: ye } : void 0,
                onDropdownVisibleChange: De,
                onPopupScroll: (k) => {
                  k.persist();
                  const H = k.target;
                  H.scrollTop + H.offsetHeight === H.scrollHeight && j?.hasMore && j?.fetchNextPage();
                },
                loading: !1,
                open: _ ? !1 : s === void 0 ? M : s,
                onChange: ce,
                optionLabelProp: "valueRender",
                dropdownRender: (k) => {
                  if (g)
                    return /* @__PURE__ */ l(T, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ l(Bt, { isLoading: !0, size: 24 }) });
                  const H = /* @__PURE__ */ B(T, { vertical: !0, children: [
                    $ && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: $ }),
                    /* @__PURE__ */ l(T, { vertical: !0, className: "relative overflow-auto scroll-smooth", children: k }),
                    U && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-t border-light-7 px-4 py-2",
                        children: U
                      }
                    )
                  ] });
                  return j ? /* @__PURE__ */ B(T, { vertical: !0, children: [
                    $ && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: $ }),
                    /* @__PURE__ */ l(
                      T,
                      {
                        vertical: !0,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ l(
                          sr,
                          {
                            hasMore: j.hasMore,
                            onNextPage: j.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: d?.map((D, G) => {
                              const ae = !!Y && Y === u(D);
                              return Se({ index: G, isActive: ae, item: D });
                            })
                          }
                        )
                      }
                    ),
                    U && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-t border-light-7 px-4 py-2",
                        children: U
                      }
                    )
                  ] }) : H;
                },
                filterOption: Ae ? (k, H) => {
                  if (!k || !H) return !0;
                  const D = H.label;
                  return typeof D == "string" && D.toLowerCase().includes(k.toLowerCase());
                } : !1,
                children: d?.map((k, H) => {
                  const D = !!Y && Y === u(k);
                  return /* @__PURE__ */ l(
                    vl,
                    {
                      label: c(k),
                      value: u(k),
                      valueRender: f ? f(k) : /* @__PURE__ */ l(
                        X,
                        {
                          color: A.primary_dark_1,
                          lang: we || Zt.language,
                          children: c(k)
                        }
                      ),
                      disabled: m(k),
                      children: Se({ index: H, item: k, isActive: D })
                    },
                    u(k)
                  );
                })
              }
            ),
            V
          ] }) }),
          t?.message && !te && /* @__PURE__ */ l(at, { message: t?.message })
        ]
      }
    );
  }
), Ln = ({
  closable: t,
  onClose: e,
  imageSrc: r,
  title: n,
  disabled: o,
  className: i,
  style: a,
  autoSlice: s = !0,
  sliceLength: h = 10
}) => {
  const { isHovered: d, isActive: c, eventHandlers: u } = qt(), m = () => o ? A.primary_light_2 : d || c ? A.primary_dark_1 : A.primary, p = () => o ? A.primary_light_2 : d || c ? A.primary_dark_1 : A.primary_light_3, x = () => {
    const f = "1px solid";
    return o ? f + A.light_6 : c || d ? f + A.primary_dark_1 : f + A.primary_light_3;
  }, b = () => s && n?.length > h ? n.slice(0, h) + "..." : n;
  return /* @__PURE__ */ l(
    yi,
    {
      color: A.primary_dark_1,
      title: n?.length > 10 ? n : void 0,
      autoAdjustOverflow: !0,
      style: { width: "auto" },
      children: /* @__PURE__ */ l(
        T,
        {
          align: "center",
          justify: "center",
          tabIndex: 0,
          className: W(
            " bg-light-1 h-[26px] max-h-[26px] rounded border  px-2 py-1 focus-visible:outline-none",
            o && "bg-light-6 cursor-not-allowed ",
            i
          ),
          style: {
            border: x(),
            ...a
          },
          ...u(),
          children: /* @__PURE__ */ B(T, { align: "center", children: [
            r && /* @__PURE__ */ l(Ma, { preview: !1, src: r, className: "me-2 h-4 w-4" }),
            /* @__PURE__ */ l(X, { color: m(), className: "cursor-default", children: b() }),
            t && /* @__PURE__ */ l(
              Q,
              {
                color: p(),
                name: "Close",
                size: "xsmall",
                className: "ms-2 cursor-pointer",
                onClick: e
              }
            )
          ] })
        }
      )
    }
  );
}, wl = ({
  initialValue: t,
  value: e,
  label: r,
  beforeLabelIcon: n,
  renderPrefix: o,
  treeData: i,
  placeholder: a,
  treeDefaultExpandAll: s,
  warning: h,
  disabled: d = !1,
  searchable: c,
  addable: u,
  multiple: m,
  onChange: p,
  onAddButtonClick: x,
  renderItem: b,
  className: f,
  style: w,
  onTreeExpand: y,
  onSearch: E,
  localSearch: _ = !0,
  wrapperClassName: g,
  error: v,
  required: N,
  size: S = "medium",
  labelOffset: R,
  hasError: I,
  addonBefore: P,
  popupClassName: $,
  header: U,
  footer: j,
  onSelect: J,
  onDeselect: z,
  treeDataHashMap: V,
  ...se
}) => {
  const [ie, we] = de(i), [Oe, te] = de(!0), { t: pe } = ze(), [Ae, ge] = de(
    t || []
  ), K = e ? Array.isArray(e) ? e : [e] : Ae, { isTabFocused: me, eventHandlers: ue } = qt();
  oe(() => {
    i === null && (te(!0), we([])), i?.length === 0 && (te(!1), we([])), i?.length > 0 && (te(!1), we(i));
  }, [i]);
  const re = (M) => /* @__PURE__ */ B(T, { vertical: !0, children: [
    U && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: U }),
    /* @__PURE__ */ l(T, { vertical: !0, className: "relative overflow-auto scroll-smooth", children: M }),
    j && /* @__PURE__ */ l(T, { gap: 8, flex: 1, align: "center", className: "border-light-7 border-t px-4 py-2", children: j })
  ] }), L = (M) => /* @__PURE__ */ B(
    wr.TreeNode,
    {
      title: b ? b(M) : /* @__PURE__ */ l(X, { lang: "fa", color: A.primary_dark_1, children: M.label }),
      value: M.value,
      label: M.label,
      checkable: M.checkable,
      children: [
        M.hasChildren && /* @__PURE__ */ l("div", { style: { display: "none" }, children: "blank children for showing switcher icon" }),
        M.children && M.children.map((F) => L(F))
      ]
    },
    M.value
  );
  return /* @__PURE__ */ B(T, { style: w, ...ue(), className: W("flex-col", g), children: [
    r && /* @__PURE__ */ l(cr, { disabled: d, label: r, required: N, size: S, offset: R }),
    /* @__PURE__ */ B(Fa, { children: [
      P,
      /* @__PURE__ */ l(
        wr,
        {
          listItemHeight: 50,
          className: W(
            `${Mn({
              size: S,
              error: !!v?.message || I,
              disabled: d,
              isTabFocused: me
            })}`,
            f,
            "flex-none [&_.ant-select-selector]:!border-none"
          ),
          popupClassName: W(
            "p-0 small-custom-scrollbar [&_.ant-select-selector]:!border-none [&_.ant-select-tree-node-content-wrapper]:!p-0 [&_.ant-select-tree-node-selected]:!bg-light-1 [&_.ant-select-tree-treenode]:!h-10 z-[1000]",
            $
          ),
          showSearch: !1,
          onTreeExpand: (M) => {
            y(M.map((F) => String(F)));
          },
          treeDefaultExpandAll: s,
          disabled: d,
          treeCheckable: m,
          showCheckedStrategy: wr.SHOW_PARENT,
          labelInValue: !0,
          value: K,
          suffixIcon: /* @__PURE__ */ l(ur, { disabled: d, isTabFocused: me, error: v }),
          tagRender: (M) => K && K?.length < 3 ? /* @__PURE__ */ l(Ln, { title: M.label, ...M }) : M.value === K?.[0].value ? /* @__PURE__ */ B("span", { children: [
            K.length,
            " ",
            pe("common.message.itemSelected")
          ] }) : null,
          treeNodeLabelProp: "label",
          notFoundContent: Oe ? /* @__PURE__ */ l(Bt, {}) : /* @__PURE__ */ l(Pn, {}),
          onChange: (M) => {
            let F = M;
            m && V && V?.size && (F = M.map((Y) => V?.get(Y.value) ?? Y)), ge(F), p?.(F);
          },
          onSelect: (M) => {
            const F = M;
            m && V && V?.size ? J?.(
              V.get(F) || {},
              M
            ) : J?.(
              ie.find((Y) => Y.value === F) || {},
              M
            );
          },
          placeholder: a,
          dropdownRender: re,
          onInputKeyDown: (M) => {
            M.key === "Backspace" && M.stopPropagation();
          },
          onDeselect: (M) => {
            const F = M;
            m && V && V?.size ? z?.(
              V.get(F) || {},
              M
            ) : z?.(
              ie.find((Y) => Y.value === F) || {},
              M
            );
          },
          ...se,
          children: ie.map((M) => L(M))
        }
      )
    ] })
  ] });
}, _f = Dn({ Single: bl, Multiple: yl, Tree: wl });
function xl() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return ee(
    () => (n) => {
      e.forEach((o) => o(n));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const fr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function St(t) {
  const e = Object.prototype.toString.call(t);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function Fn(t) {
  return "nodeType" in t;
}
function He(t) {
  var e, r;
  return t ? St(t) ? t : Fn(t) && (e = (r = t.ownerDocument) == null ? void 0 : r.defaultView) != null ? e : window : window;
}
function Bn(t) {
  const {
    Document: e
  } = He(t);
  return t instanceof e;
}
function jt(t) {
  return St(t) ? !1 : t instanceof He(t).HTMLElement;
}
function Mi(t) {
  return t instanceof He(t).SVGElement;
}
function Ct(t) {
  return t ? St(t) ? t.document : Fn(t) ? Bn(t) ? t : jt(t) || Mi(t) ? t.ownerDocument : document : document : document;
}
const tt = fr ? xa : oe;
function $n(t) {
  const e = ne(t);
  return tt(() => {
    e.current = t;
  }), be(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
function _l() {
  const t = ne(null), e = be((n, o) => {
    t.current = setInterval(n, o);
  }, []), r = be(() => {
    t.current !== null && (clearInterval(t.current), t.current = null);
  }, []);
  return [e, r];
}
function kt(t, e) {
  e === void 0 && (e = [t]);
  const r = ne(t);
  return tt(() => {
    r.current !== t && (r.current = t);
  }, e), r;
}
function Ut(t, e) {
  const r = ne();
  return ee(
    () => {
      const n = t(r.current);
      return r.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function tr(t) {
  const e = $n(t), r = ne(null), n = be(
    (o) => {
      o !== r.current && e?.(o, r.current), r.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [r, n];
}
function Sn(t) {
  const e = ne();
  return oe(() => {
    e.current = t;
  }, [t]), e.current;
}
let Nr = {};
function Ht(t, e) {
  return ee(() => {
    if (e)
      return e;
    const r = Nr[t] == null ? 0 : Nr[t] + 1;
    return Nr[t] = r, t + "-" + r;
  }, [t, e]);
}
function Li(t) {
  return function(e) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return n.reduce((i, a) => {
      const s = Object.entries(a);
      for (const [h, d] of s) {
        const c = i[h];
        c != null && (i[h] = c + t * d);
      }
      return i;
    }, {
      ...e
    });
  };
}
const bt = /* @__PURE__ */ Li(1), rr = /* @__PURE__ */ Li(-1);
function Sl(t) {
  return "clientX" in t && "clientY" in t;
}
function zn(t) {
  if (!t)
    return !1;
  const {
    KeyboardEvent: e
  } = He(t.target);
  return e && t instanceof e;
}
function Cl(t) {
  if (!t)
    return !1;
  const {
    TouchEvent: e
  } = He(t.target);
  return e && t instanceof e;
}
function Cn(t) {
  if (Cl(t)) {
    if (t.touches && t.touches.length) {
      const {
        clientX: e,
        clientY: r
      } = t.touches[0];
      return {
        x: e,
        y: r
      };
    } else if (t.changedTouches && t.changedTouches.length) {
      const {
        clientX: e,
        clientY: r
      } = t.changedTouches[0];
      return {
        x: e,
        y: r
      };
    }
  }
  return Sl(t) ? {
    x: t.clientX,
    y: t.clientY
  } : null;
}
const Mt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(t) {
      if (!t)
        return;
      const {
        x: e,
        y: r
      } = t;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (r ? Math.round(r) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(t) {
      if (!t)
        return;
      const {
        scaleX: e,
        scaleY: r
      } = t;
      return "scaleX(" + e + ") scaleY(" + r + ")";
    }
  },
  Transform: {
    toString(t) {
      if (t)
        return [Mt.Translate.toString(t), Mt.Scale.toString(t)].join(" ");
    }
  },
  Transition: {
    toString(t) {
      let {
        property: e,
        duration: r,
        easing: n
      } = t;
      return e + " " + r + "ms " + n;
    }
  }
}), go = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Nl(t) {
  return t.matches(go) ? t : t.querySelector(go);
}
const Ol = {
  display: "none"
};
function El(t) {
  let {
    id: e,
    value: r
  } = t;
  return $e.createElement("div", {
    id: e,
    style: Ol
  }, r);
}
function Al(t) {
  let {
    id: e,
    announcement: r,
    ariaLiveType: n = "assertive"
  } = t;
  const o = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return $e.createElement("div", {
    id: e,
    style: o,
    role: "status",
    "aria-live": n,
    "aria-atomic": !0
  }, r);
}
function Dl() {
  const [t, e] = de("");
  return {
    announce: be((n) => {
      n != null && e(n);
    }, []),
    announcement: t
  };
}
const Fi = /* @__PURE__ */ Ft(null);
function Tl(t) {
  const e = ft(Fi);
  oe(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(t);
  }, [t, e]);
}
function Rl() {
  const [t] = de(() => /* @__PURE__ */ new Set()), e = be((n) => (t.add(n), () => t.delete(n)), [t]);
  return [be((n) => {
    let {
      type: o,
      event: i
    } = n;
    t.forEach((a) => {
      var s;
      return (s = a[o]) == null ? void 0 : s.call(a, i);
    });
  }, [t]), e];
}
const Il = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Pl = {
  onDragStart(t) {
    let {
      active: e
    } = t;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(t) {
    let {
      active: e,
      over: r
    } = t;
    return r ? "Draggable item " + e.id + " was moved over droppable area " + r.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(t) {
    let {
      active: e,
      over: r
    } = t;
    return r ? "Draggable item " + e.id + " was dropped over droppable area " + r.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(t) {
    let {
      active: e
    } = t;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function kl(t) {
  let {
    announcements: e = Pl,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: o = Il
  } = t;
  const {
    announce: i,
    announcement: a
  } = Dl(), s = Ht("DndLiveRegion"), [h, d] = de(!1);
  if (oe(() => {
    d(!0);
  }, []), Tl(ee(() => ({
    onDragStart(u) {
      let {
        active: m
      } = u;
      i(e.onDragStart({
        active: m
      }));
    },
    onDragMove(u) {
      let {
        active: m,
        over: p
      } = u;
      e.onDragMove && i(e.onDragMove({
        active: m,
        over: p
      }));
    },
    onDragOver(u) {
      let {
        active: m,
        over: p
      } = u;
      i(e.onDragOver({
        active: m,
        over: p
      }));
    },
    onDragEnd(u) {
      let {
        active: m,
        over: p
      } = u;
      i(e.onDragEnd({
        active: m,
        over: p
      }));
    },
    onDragCancel(u) {
      let {
        active: m,
        over: p
      } = u;
      i(e.onDragCancel({
        active: m,
        over: p
      }));
    }
  }), [i, e])), !h)
    return null;
  const c = $e.createElement($e.Fragment, null, $e.createElement(El, {
    id: n,
    value: o.draggable
  }), $e.createElement(Al, {
    id: s,
    announcement: a
  }));
  return r ? Ba(c, r) : c;
}
var Fe;
(function(t) {
  t.DragStart = "dragStart", t.DragMove = "dragMove", t.DragEnd = "dragEnd", t.DragCancel = "dragCancel", t.DragOver = "dragOver", t.RegisterDroppable = "registerDroppable", t.SetDroppableDisabled = "setDroppableDisabled", t.UnregisterDroppable = "unregisterDroppable";
})(Fe || (Fe = {}));
function nr() {
}
function Ml(t, e) {
  return ee(
    () => ({
      sensor: t,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, e]
  );
}
function Ll() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return ee(
    () => [...e].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Ze = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Fl(t, e) {
  let {
    data: {
      value: r
    }
  } = t, {
    data: {
      value: n
    }
  } = e;
  return n - r;
}
function Bl(t, e) {
  if (!t || t.length === 0)
    return null;
  const [r] = t;
  return r[e];
}
function $l(t, e) {
  const r = Math.max(e.top, t.top), n = Math.max(e.left, t.left), o = Math.min(e.left + e.width, t.left + t.width), i = Math.min(e.top + e.height, t.top + t.height), a = o - n, s = i - r;
  if (n < o && r < i) {
    const h = e.width * e.height, d = t.width * t.height, c = a * s, u = c / (h + d - c);
    return Number(u.toFixed(4));
  }
  return 0;
}
const zl = (t) => {
  let {
    collisionRect: e,
    droppableRects: r,
    droppableContainers: n
  } = t;
  const o = [];
  for (const i of n) {
    const {
      id: a
    } = i, s = r.get(a);
    if (s) {
      const h = $l(s, e);
      h > 0 && o.push({
        id: a,
        data: {
          droppableContainer: i,
          value: h
        }
      });
    }
  }
  return o.sort(Fl);
};
function ql(t, e, r) {
  return {
    ...t,
    scaleX: e && r ? e.width / r.width : 1,
    scaleY: e && r ? e.height / r.height : 1
  };
}
function Bi(t, e) {
  return t && e ? {
    x: t.left - e.left,
    y: t.top - e.top
  } : Ze;
}
function jl(t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return o.reduce((a, s) => ({
      ...a,
      top: a.top + t * s.y,
      bottom: a.bottom + t * s.y,
      left: a.left + t * s.x,
      right: a.right + t * s.x
    }), {
      ...r
    });
  };
}
const Ul = /* @__PURE__ */ jl(1);
function Hl(t) {
  if (t.startsWith("matrix3d(")) {
    const e = t.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (t.startsWith("matrix(")) {
    const e = t.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function Wl(t, e, r) {
  const n = Hl(e);
  if (!n)
    return t;
  const {
    scaleX: o,
    scaleY: i,
    x: a,
    y: s
  } = n, h = t.left - a - (1 - o) * parseFloat(r), d = t.top - s - (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), c = o ? t.width / o : t.width, u = i ? t.height / i : t.height;
  return {
    width: c,
    height: u,
    top: d,
    right: h + c,
    bottom: d + u,
    left: h
  };
}
const Vl = {
  ignoreTransform: !1
};
function Nt(t, e) {
  e === void 0 && (e = Vl);
  let r = t.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: d,
      transformOrigin: c
    } = He(t).getComputedStyle(t);
    d && (r = Wl(r, d, c));
  }
  const {
    top: n,
    left: o,
    width: i,
    height: a,
    bottom: s,
    right: h
  } = r;
  return {
    top: n,
    left: o,
    width: i,
    height: a,
    bottom: s,
    right: h
  };
}
function mo(t) {
  return Nt(t, {
    ignoreTransform: !0
  });
}
function Gl(t) {
  const e = t.innerWidth, r = t.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: r,
    width: e,
    height: r
  };
}
function Yl(t, e) {
  return e === void 0 && (e = He(t).getComputedStyle(t)), e.position === "fixed";
}
function Kl(t, e) {
  e === void 0 && (e = He(t).getComputedStyle(t));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = e[o];
    return typeof i == "string" ? r.test(i) : !1;
  });
}
function qn(t, e) {
  const r = [];
  function n(o) {
    if (e != null && r.length >= e || !o)
      return r;
    if (Bn(o) && o.scrollingElement != null && !r.includes(o.scrollingElement))
      return r.push(o.scrollingElement), r;
    if (!jt(o) || Mi(o) || r.includes(o))
      return r;
    const i = He(t).getComputedStyle(o);
    return o !== t && Kl(o, i) && r.push(o), Yl(o, i) ? r : n(o.parentNode);
  }
  return t ? n(t) : r;
}
function $i(t) {
  const [e] = qn(t, 1);
  return e ?? null;
}
function Or(t) {
  return !fr || !t ? null : St(t) ? t : Fn(t) ? Bn(t) || t === Ct(t).scrollingElement ? window : jt(t) ? t : null : null;
}
function zi(t) {
  return St(t) ? t.scrollX : t.scrollLeft;
}
function qi(t) {
  return St(t) ? t.scrollY : t.scrollTop;
}
function Nn(t) {
  return {
    x: zi(t),
    y: qi(t)
  };
}
var Be;
(function(t) {
  t[t.Forward = 1] = "Forward", t[t.Backward = -1] = "Backward";
})(Be || (Be = {}));
function ji(t) {
  return !fr || !t ? !1 : t === document.scrollingElement;
}
function Ui(t) {
  const e = {
    x: 0,
    y: 0
  }, r = ji(t) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: t.clientHeight,
    width: t.clientWidth
  }, n = {
    x: t.scrollWidth - r.width,
    y: t.scrollHeight - r.height
  }, o = t.scrollTop <= e.y, i = t.scrollLeft <= e.x, a = t.scrollTop >= n.y, s = t.scrollLeft >= n.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: a,
    isRight: s,
    maxScroll: n,
    minScroll: e
  };
}
const Xl = {
  x: 0.2,
  y: 0.2
};
function Ql(t, e, r, n, o) {
  let {
    top: i,
    left: a,
    right: s,
    bottom: h
  } = r;
  n === void 0 && (n = 10), o === void 0 && (o = Xl);
  const {
    isTop: d,
    isBottom: c,
    isLeft: u,
    isRight: m
  } = Ui(t), p = {
    x: 0,
    y: 0
  }, x = {
    x: 0,
    y: 0
  }, b = {
    height: e.height * o.y,
    width: e.width * o.x
  };
  return !d && i <= e.top + b.height ? (p.y = Be.Backward, x.y = n * Math.abs((e.top + b.height - i) / b.height)) : !c && h >= e.bottom - b.height && (p.y = Be.Forward, x.y = n * Math.abs((e.bottom - b.height - h) / b.height)), !m && s >= e.right - b.width ? (p.x = Be.Forward, x.x = n * Math.abs((e.right - b.width - s) / b.width)) : !u && a <= e.left + b.width && (p.x = Be.Backward, x.x = n * Math.abs((e.left + b.width - a) / b.width)), {
    direction: p,
    speed: x
  };
}
function Jl(t) {
  if (t === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: a,
      width: i,
      height: a
    };
  }
  const {
    top: e,
    left: r,
    right: n,
    bottom: o
  } = t.getBoundingClientRect();
  return {
    top: e,
    left: r,
    right: n,
    bottom: o,
    width: t.clientWidth,
    height: t.clientHeight
  };
}
function Hi(t) {
  return t.reduce((e, r) => bt(e, Nn(r)), Ze);
}
function Zl(t) {
  return t.reduce((e, r) => e + zi(r), 0);
}
function ec(t) {
  return t.reduce((e, r) => e + qi(r), 0);
}
function tc(t, e) {
  if (e === void 0 && (e = Nt), !t)
    return;
  const {
    top: r,
    left: n,
    bottom: o,
    right: i
  } = e(t);
  $i(t) && (o <= 0 || i <= 0 || r >= window.innerHeight || n >= window.innerWidth) && t.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const rc = [["x", ["left", "right"], Zl], ["y", ["top", "bottom"], ec]];
class jn {
  constructor(e, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = qn(r), o = Hi(n);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [i, a, s] of rc)
      for (const h of a)
        Object.defineProperty(this, h, {
          get: () => {
            const d = s(n), c = o[i] - d;
            return this.rect[h] + c;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Tt {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((r) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...r);
      });
    }, this.target = e;
  }
  add(e, r, n) {
    var o;
    (o = this.target) == null || o.addEventListener(e, r, n), this.listeners.push([e, r, n]);
  }
}
function nc(t) {
  const {
    EventTarget: e
  } = He(t);
  return t instanceof e ? t : Ct(t);
}
function Er(t, e) {
  const r = Math.abs(t.x), n = Math.abs(t.y);
  return typeof e == "number" ? Math.sqrt(r ** 2 + n ** 2) > e : "x" in e && "y" in e ? r > e.x && n > e.y : "x" in e ? r > e.x : "y" in e ? n > e.y : !1;
}
var Ye;
(function(t) {
  t.Click = "click", t.DragStart = "dragstart", t.Keydown = "keydown", t.ContextMenu = "contextmenu", t.Resize = "resize", t.SelectionChange = "selectionchange", t.VisibilityChange = "visibilitychange";
})(Ye || (Ye = {}));
function yo(t) {
  t.preventDefault();
}
function oc(t) {
  t.stopPropagation();
}
var he;
(function(t) {
  t.Space = "Space", t.Down = "ArrowDown", t.Right = "ArrowRight", t.Left = "ArrowLeft", t.Up = "ArrowUp", t.Esc = "Escape", t.Enter = "Enter", t.Tab = "Tab";
})(he || (he = {}));
const Wi = {
  start: [he.Space, he.Enter],
  cancel: [he.Esc],
  end: [he.Space, he.Enter, he.Tab]
}, ic = (t, e) => {
  let {
    currentCoordinates: r
  } = e;
  switch (t.code) {
    case he.Right:
      return {
        ...r,
        x: r.x + 25
      };
    case he.Left:
      return {
        ...r,
        x: r.x - 25
      };
    case he.Down:
      return {
        ...r,
        y: r.y + 25
      };
    case he.Up:
      return {
        ...r,
        y: r.y - 25
      };
  }
};
class Vi {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: r
      }
    } = e;
    this.props = e, this.listeners = new Tt(Ct(r)), this.windowListeners = new Tt(He(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ye.Resize, this.handleCancel), this.windowListeners.add(Ye.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ye.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: r
    } = this.props, n = e.node.current;
    n && tc(n), r(Ze);
  }
  handleKeyDown(e) {
    if (zn(e)) {
      const {
        active: r,
        context: n,
        options: o
      } = this.props, {
        keyboardCodes: i = Wi,
        coordinateGetter: a = ic,
        scrollBehavior: s = "smooth"
      } = o, {
        code: h
      } = e;
      if (i.end.includes(h)) {
        this.handleEnd(e);
        return;
      }
      if (i.cancel.includes(h)) {
        this.handleCancel(e);
        return;
      }
      const {
        collisionRect: d
      } = n.current, c = d ? {
        x: d.left,
        y: d.top
      } : Ze;
      this.referenceCoordinates || (this.referenceCoordinates = c);
      const u = a(e, {
        active: r,
        context: n.current,
        currentCoordinates: c
      });
      if (u) {
        const m = rr(u, c), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: x
        } = n.current;
        for (const b of x) {
          const f = e.code, {
            isTop: w,
            isRight: y,
            isLeft: E,
            isBottom: _,
            maxScroll: g,
            minScroll: v
          } = Ui(b), N = Jl(b), S = {
            x: Math.min(f === he.Right ? N.right - N.width / 2 : N.right, Math.max(f === he.Right ? N.left : N.left + N.width / 2, u.x)),
            y: Math.min(f === he.Down ? N.bottom - N.height / 2 : N.bottom, Math.max(f === he.Down ? N.top : N.top + N.height / 2, u.y))
          }, R = f === he.Right && !y || f === he.Left && !E, I = f === he.Down && !_ || f === he.Up && !w;
          if (R && S.x !== u.x) {
            const P = b.scrollLeft + m.x, $ = f === he.Right && P <= g.x || f === he.Left && P >= v.x;
            if ($ && !m.y) {
              b.scrollTo({
                left: P,
                behavior: s
              });
              return;
            }
            $ ? p.x = b.scrollLeft - P : p.x = f === he.Right ? b.scrollLeft - g.x : b.scrollLeft - v.x, p.x && b.scrollBy({
              left: -p.x,
              behavior: s
            });
            break;
          } else if (I && S.y !== u.y) {
            const P = b.scrollTop + m.y, $ = f === he.Down && P <= g.y || f === he.Up && P >= v.y;
            if ($ && !m.x) {
              b.scrollTo({
                top: P,
                behavior: s
              });
              return;
            }
            $ ? p.y = b.scrollTop - P : p.y = f === he.Down ? b.scrollTop - g.y : b.scrollTop - v.y, p.y && b.scrollBy({
              top: -p.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(e, bt(rr(u, this.referenceCoordinates), p));
      }
    }
  }
  handleMove(e, r) {
    const {
      onMove: n
    } = this.props;
    e.preventDefault(), n(r);
  }
  handleEnd(e) {
    const {
      onEnd: r
    } = this.props;
    e.preventDefault(), this.detach(), r();
  }
  handleCancel(e) {
    const {
      onCancel: r
    } = this.props;
    e.preventDefault(), this.detach(), r();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Vi.activators = [{
  eventName: "onKeyDown",
  handler: (t, e, r) => {
    let {
      keyboardCodes: n = Wi,
      onActivation: o
    } = e, {
      active: i
    } = r;
    const {
      code: a
    } = t.nativeEvent;
    if (n.start.includes(a)) {
      const s = i.activatorNode.current;
      return s && t.target !== s ? !1 : (t.preventDefault(), o?.({
        event: t.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function vo(t) {
  return !!(t && "distance" in t);
}
function bo(t) {
  return !!(t && "delay" in t);
}
class Un {
  constructor(e, r, n) {
    var o;
    n === void 0 && (n = nc(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = r;
    const {
      event: i
    } = e, {
      target: a
    } = i;
    this.props = e, this.events = r, this.document = Ct(a), this.documentListeners = new Tt(this.document), this.listeners = new Tt(n), this.windowListeners = new Tt(He(a)), this.initialCoordinates = (o = Cn(i)) != null ? o : Ze, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: e,
      props: {
        options: {
          activationConstraint: r,
          bypassActivationConstraint: n
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Ye.Resize, this.handleCancel), this.windowListeners.add(Ye.DragStart, yo), this.windowListeners.add(Ye.VisibilityChange, this.handleCancel), this.windowListeners.add(Ye.ContextMenu, yo), this.documentListeners.add(Ye.Keydown, this.handleKeydown), r) {
      if (n != null && n({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (bo(r)) {
        this.timeoutId = setTimeout(this.handleStart, r.delay), this.handlePending(r);
        return;
      }
      if (vo(r)) {
        this.handlePending(r);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(e, r) {
    const {
      active: n,
      onPending: o
    } = this.props;
    o(n, e, this.initialCoordinates, r);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: r
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(Ye.Click, oc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ye.SelectionChange, this.removeTextSelection), r(e));
  }
  handleMove(e) {
    var r;
    const {
      activated: n,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: a,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!o)
      return;
    const h = (r = Cn(e)) != null ? r : Ze, d = rr(o, h);
    if (!n && s) {
      if (vo(s)) {
        if (s.tolerance != null && Er(d, s.tolerance))
          return this.handleCancel();
        if (Er(d, s.distance))
          return this.handleStart();
      }
      if (bo(s) && Er(d, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, d);
      return;
    }
    e.cancelable && e.preventDefault(), a(h);
  }
  handleEnd() {
    const {
      onAbort: e,
      onEnd: r
    } = this.props;
    this.detach(), this.activated || e(this.props.active), r();
  }
  handleCancel() {
    const {
      onAbort: e,
      onCancel: r
    } = this.props;
    this.detach(), this.activated || e(this.props.active), r();
  }
  handleKeydown(e) {
    e.code === he.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const ac = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Gi extends Un {
  constructor(e) {
    const {
      event: r
    } = e, n = Ct(r.target);
    super(e, ac, n);
  }
}
Gi.activators = [{
  eventName: "onPointerDown",
  handler: (t, e) => {
    let {
      nativeEvent: r
    } = t, {
      onActivation: n
    } = e;
    return !r.isPrimary || r.button !== 0 ? !1 : (n?.({
      event: r
    }), !0);
  }
}];
const sc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var On;
(function(t) {
  t[t.RightClick = 2] = "RightClick";
})(On || (On = {}));
class Yi extends Un {
  constructor(e) {
    super(e, sc, Ct(e.event.target));
  }
}
Yi.activators = [{
  eventName: "onMouseDown",
  handler: (t, e) => {
    let {
      nativeEvent: r
    } = t, {
      onActivation: n
    } = e;
    return r.button === On.RightClick ? !1 : (n?.({
      event: r
    }), !0);
  }
}];
const Ar = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class lc extends Un {
  constructor(e) {
    super(e, Ar);
  }
  static setup() {
    return window.addEventListener(Ar.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Ar.move.name, e);
    };
    function e() {
    }
  }
}
lc.activators = [{
  eventName: "onTouchStart",
  handler: (t, e) => {
    let {
      nativeEvent: r
    } = t, {
      onActivation: n
    } = e;
    const {
      touches: o
    } = r;
    return o.length > 1 ? !1 : (n?.({
      event: r
    }), !0);
  }
}];
var Rt;
(function(t) {
  t[t.Pointer = 0] = "Pointer", t[t.DraggableRect = 1] = "DraggableRect";
})(Rt || (Rt = {}));
var or;
(function(t) {
  t[t.TreeOrder = 0] = "TreeOrder", t[t.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(or || (or = {}));
function cc(t) {
  let {
    acceleration: e,
    activator: r = Rt.Pointer,
    canScroll: n,
    draggingRect: o,
    enabled: i,
    interval: a = 5,
    order: s = or.TreeOrder,
    pointerCoordinates: h,
    scrollableAncestors: d,
    scrollableAncestorRects: c,
    delta: u,
    threshold: m
  } = t;
  const p = fc({
    delta: u,
    disabled: !i
  }), [x, b] = _l(), f = ne({
    x: 0,
    y: 0
  }), w = ne({
    x: 0,
    y: 0
  }), y = ee(() => {
    switch (r) {
      case Rt.Pointer:
        return h ? {
          top: h.y,
          bottom: h.y,
          left: h.x,
          right: h.x
        } : null;
      case Rt.DraggableRect:
        return o;
    }
  }, [r, o, h]), E = ne(null), _ = be(() => {
    const v = E.current;
    if (!v)
      return;
    const N = f.current.x * w.current.x, S = f.current.y * w.current.y;
    v.scrollBy(N, S);
  }, []), g = ee(() => s === or.TreeOrder ? [...d].reverse() : d, [s, d]);
  oe(
    () => {
      if (!i || !d.length || !y) {
        b();
        return;
      }
      for (const v of g) {
        if (n?.(v) === !1)
          continue;
        const N = d.indexOf(v), S = c[N];
        if (!S)
          continue;
        const {
          direction: R,
          speed: I
        } = Ql(v, S, y, e, m);
        for (const P of ["x", "y"])
          p[P][R[P]] || (I[P] = 0, R[P] = 0);
        if (I.x > 0 || I.y > 0) {
          b(), E.current = v, x(_, a), f.current = I, w.current = R;
          return;
        }
      }
      f.current = {
        x: 0,
        y: 0
      }, w.current = {
        x: 0,
        y: 0
      }, b();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      _,
      n,
      b,
      i,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      x,
      d,
      g,
      c,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const uc = {
  x: {
    [Be.Backward]: !1,
    [Be.Forward]: !1
  },
  y: {
    [Be.Backward]: !1,
    [Be.Forward]: !1
  }
};
function fc(t) {
  let {
    delta: e,
    disabled: r
  } = t;
  const n = Sn(e);
  return Ut((o) => {
    if (r || !n || !o)
      return uc;
    const i = {
      x: Math.sign(e.x - n.x),
      y: Math.sign(e.y - n.y)
    };
    return {
      x: {
        [Be.Backward]: o.x[Be.Backward] || i.x === -1,
        [Be.Forward]: o.x[Be.Forward] || i.x === 1
      },
      y: {
        [Be.Backward]: o.y[Be.Backward] || i.y === -1,
        [Be.Forward]: o.y[Be.Forward] || i.y === 1
      }
    };
  }, [r, e, n]);
}
function dc(t, e) {
  const r = e != null ? t.get(e) : void 0, n = r ? r.node.current : null;
  return Ut((o) => {
    var i;
    return e == null ? null : (i = n ?? o) != null ? i : null;
  }, [n, e]);
}
function pc(t, e) {
  return ee(() => t.reduce((r, n) => {
    const {
      sensor: o
    } = n, i = o.activators.map((a) => ({
      eventName: a.eventName,
      handler: e(a.handler, n)
    }));
    return [...r, ...i];
  }, []), [t, e]);
}
var Lt;
(function(t) {
  t[t.Always = 0] = "Always", t[t.BeforeDragging = 1] = "BeforeDragging", t[t.WhileDragging = 2] = "WhileDragging";
})(Lt || (Lt = {}));
var En;
(function(t) {
  t.Optimized = "optimized";
})(En || (En = {}));
const wo = /* @__PURE__ */ new Map();
function hc(t, e) {
  let {
    dragging: r,
    dependencies: n,
    config: o
  } = e;
  const [i, a] = de(null), {
    frequency: s,
    measure: h,
    strategy: d
  } = o, c = ne(t), u = f(), m = kt(u), p = be(function(w) {
    w === void 0 && (w = []), !m.current && a((y) => y === null ? w : y.concat(w.filter((E) => !y.includes(E))));
  }, [m]), x = ne(null), b = Ut((w) => {
    if (u && !r)
      return wo;
    if (!w || w === wo || c.current !== t || i != null) {
      const y = /* @__PURE__ */ new Map();
      for (let E of t) {
        if (!E)
          continue;
        if (i && i.length > 0 && !i.includes(E.id) && E.rect.current) {
          y.set(E.id, E.rect.current);
          continue;
        }
        const _ = E.node.current, g = _ ? new jn(h(_), _) : null;
        E.rect.current = g, g && y.set(E.id, g);
      }
      return y;
    }
    return w;
  }, [t, i, r, u, h]);
  return oe(() => {
    c.current = t;
  }, [t]), oe(
    () => {
      u || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, u]
  ), oe(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), oe(
    () => {
      u || typeof s != "number" || x.current !== null || (x.current = setTimeout(() => {
        p(), x.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, u, p, ...n]
  ), {
    droppableRects: b,
    measureDroppableContainers: p,
    measuringScheduled: i != null
  };
  function f() {
    switch (d) {
      case Lt.Always:
        return !1;
      case Lt.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function Ki(t, e) {
  return Ut((r) => t ? r || (typeof e == "function" ? e(t) : t) : null, [e, t]);
}
function gc(t, e) {
  return Ki(t, e);
}
function mc(t) {
  let {
    callback: e,
    disabled: r
  } = t;
  const n = $n(e), o = ee(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(n);
  }, [n, r]);
  return oe(() => () => o?.disconnect(), [o]), o;
}
function dr(t) {
  let {
    callback: e,
    disabled: r
  } = t;
  const n = $n(e), o = ee(
    () => {
      if (r || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(n);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  );
  return oe(() => () => o?.disconnect(), [o]), o;
}
function yc(t) {
  return new jn(Nt(t), t);
}
function xo(t, e, r) {
  e === void 0 && (e = yc);
  const [n, o] = de(null);
  function i() {
    o((h) => {
      if (!t)
        return null;
      if (t.isConnected === !1) {
        var d;
        return (d = h ?? r) != null ? d : null;
      }
      const c = e(t);
      return JSON.stringify(h) === JSON.stringify(c) ? h : c;
    });
  }
  const a = mc({
    callback(h) {
      if (t)
        for (const d of h) {
          const {
            type: c,
            target: u
          } = d;
          if (c === "childList" && u instanceof HTMLElement && u.contains(t)) {
            i();
            break;
          }
        }
    }
  }), s = dr({
    callback: i
  });
  return tt(() => {
    i(), t ? (s?.observe(t), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s?.disconnect(), a?.disconnect());
  }, [t]), n;
}
function vc(t) {
  const e = Ki(t);
  return Bi(t, e);
}
const _o = [];
function bc(t) {
  const e = ne(t), r = Ut((n) => t ? n && n !== _o && t && e.current && t.parentNode === e.current.parentNode ? n : qn(t) : _o, [t]);
  return oe(() => {
    e.current = t;
  }, [t]), r;
}
function wc(t) {
  const [e, r] = de(null), n = ne(t), o = be((i) => {
    const a = Or(i.target);
    a && r((s) => s ? (s.set(a, Nn(a)), new Map(s)) : null);
  }, []);
  return oe(() => {
    const i = n.current;
    if (t !== i) {
      a(i);
      const s = t.map((h) => {
        const d = Or(h);
        return d ? (d.addEventListener("scroll", o, {
          passive: !0
        }), [d, Nn(d)]) : null;
      }).filter((h) => h != null);
      r(s.length ? new Map(s) : null), n.current = t;
    }
    return () => {
      a(t), a(i);
    };
    function a(s) {
      s.forEach((h) => {
        const d = Or(h);
        d?.removeEventListener("scroll", o);
      });
    }
  }, [o, t]), ee(() => t.length ? e ? Array.from(e.values()).reduce((i, a) => bt(i, a), Ze) : Hi(t) : Ze, [t, e]);
}
function So(t, e) {
  e === void 0 && (e = []);
  const r = ne(null);
  return oe(
    () => {
      r.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), oe(() => {
    const n = t !== Ze;
    n && !r.current && (r.current = t), !n && r.current && (r.current = null);
  }, [t]), r.current ? rr(t, r.current) : Ze;
}
function xc(t) {
  oe(
    () => {
      if (!fr)
        return;
      const e = t.map((r) => {
        let {
          sensor: n
        } = r;
        return n.setup == null ? void 0 : n.setup();
      });
      return () => {
        for (const r of e)
          r?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t.map((e) => {
      let {
        sensor: r
      } = e;
      return r;
    })
  );
}
function _c(t, e) {
  return ee(() => t.reduce((r, n) => {
    let {
      eventName: o,
      handler: i
    } = n;
    return r[o] = (a) => {
      i(a, e);
    }, r;
  }, {}), [t, e]);
}
function Xi(t) {
  return ee(() => t ? Gl(t) : null, [t]);
}
const Co = [];
function Sc(t, e) {
  e === void 0 && (e = Nt);
  const [r] = t, n = Xi(r ? He(r) : null), [o, i] = de(Co);
  function a() {
    i(() => t.length ? t.map((h) => ji(h) ? n : new jn(e(h), h)) : Co);
  }
  const s = dr({
    callback: a
  });
  return tt(() => {
    s?.disconnect(), a(), t.forEach((h) => s?.observe(h));
  }, [t]), o;
}
function Cc(t) {
  if (!t)
    return null;
  if (t.children.length > 1)
    return t;
  const e = t.children[0];
  return jt(e) ? e : t;
}
function Nc(t) {
  let {
    measure: e
  } = t;
  const [r, n] = de(null), o = be((d) => {
    for (const {
      target: c
    } of d)
      if (jt(c)) {
        n((u) => {
          const m = e(c);
          return u ? {
            ...u,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [e]), i = dr({
    callback: o
  }), a = be((d) => {
    const c = Cc(d);
    i?.disconnect(), c && i?.observe(c), n(c ? e(c) : null);
  }, [e, i]), [s, h] = tr(a);
  return ee(() => ({
    nodeRef: s,
    rect: r,
    setRef: h
  }), [r, s, h]);
}
const Oc = [{
  sensor: Gi,
  options: {}
}, {
  sensor: Vi,
  options: {}
}], Ec = {
  current: {}
}, Qt = {
  draggable: {
    measure: mo
  },
  droppable: {
    measure: mo,
    strategy: Lt.WhileDragging,
    frequency: En.Optimized
  },
  dragOverlay: {
    measure: Nt
  }
};
class It extends Map {
  get(e) {
    var r;
    return e != null && (r = super.get(e)) != null ? r : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((e) => {
      let {
        disabled: r
      } = e;
      return !r;
    });
  }
  getNodeFor(e) {
    var r, n;
    return (r = (n = this.get(e)) == null ? void 0 : n.node.current) != null ? r : void 0;
  }
}
const Ac = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new It(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: nr
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Qt,
  measureDroppableContainers: nr,
  windowRect: null,
  measuringScheduled: !1
}, Dc = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: nr,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: nr
}, pr = /* @__PURE__ */ Ft(Dc), Qi = /* @__PURE__ */ Ft(Ac);
function Tc() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new It()
    }
  };
}
function Rc(t, e) {
  switch (e.type) {
    case Fe.DragStart:
      return {
        ...t,
        draggable: {
          ...t.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Fe.DragMove:
      return t.draggable.active == null ? t : {
        ...t,
        draggable: {
          ...t.draggable,
          translate: {
            x: e.coordinates.x - t.draggable.initialCoordinates.x,
            y: e.coordinates.y - t.draggable.initialCoordinates.y
          }
        }
      };
    case Fe.DragEnd:
    case Fe.DragCancel:
      return {
        ...t,
        draggable: {
          ...t.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Fe.RegisterDroppable: {
      const {
        element: r
      } = e, {
        id: n
      } = r, o = new It(t.droppable.containers);
      return o.set(n, r), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: o
        }
      };
    }
    case Fe.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: o
      } = e, i = t.droppable.containers.get(r);
      if (!i || n !== i.key)
        return t;
      const a = new It(t.droppable.containers);
      return a.set(r, {
        ...i,
        disabled: o
      }), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: a
        }
      };
    }
    case Fe.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = e, o = t.droppable.containers.get(r);
      if (!o || n !== o.key)
        return t;
      const i = new It(t.droppable.containers);
      return i.delete(r), {
        ...t,
        droppable: {
          ...t.droppable,
          containers: i
        }
      };
    }
    default:
      return t;
  }
}
function Ic(t) {
  let {
    disabled: e
  } = t;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: o
  } = ft(pr), i = Sn(n), a = Sn(r?.id);
  return oe(() => {
    if (!e && !n && i && a != null) {
      if (!zn(i) || document.activeElement === i.target)
        return;
      const s = o.get(a);
      if (!s)
        return;
      const {
        activatorNode: h,
        node: d
      } = s;
      if (!h.current && !d.current)
        return;
      requestAnimationFrame(() => {
        for (const c of [h.current, d.current]) {
          if (!c)
            continue;
          const u = Nl(c);
          if (u) {
            u.focus();
            break;
          }
        }
      });
    }
  }, [n, e, o, a, i]), null;
}
function Pc(t, e) {
  let {
    transform: r,
    ...n
  } = e;
  return t != null && t.length ? t.reduce((o, i) => i({
    transform: o,
    ...n
  }), r) : r;
}
function kc(t) {
  return ee(
    () => ({
      draggable: {
        ...Qt.draggable,
        ...t?.draggable
      },
      droppable: {
        ...Qt.droppable,
        ...t?.droppable
      },
      dragOverlay: {
        ...Qt.dragOverlay,
        ...t?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t?.draggable, t?.droppable, t?.dragOverlay]
  );
}
function Mc(t) {
  let {
    activeNode: e,
    measure: r,
    initialRect: n,
    config: o = !0
  } = t;
  const i = ne(!1), {
    x: a,
    y: s
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  tt(() => {
    if (!a && !s || !e) {
      i.current = !1;
      return;
    }
    if (i.current || !n)
      return;
    const d = e?.node.current;
    if (!d || d.isConnected === !1)
      return;
    const c = r(d), u = Bi(c, n);
    if (a || (u.x = 0), s || (u.y = 0), i.current = !0, Math.abs(u.x) > 0 || Math.abs(u.y) > 0) {
      const m = $i(d);
      m && m.scrollBy({
        top: u.y,
        left: u.x
      });
    }
  }, [e, a, s, n, r]);
}
const Ji = /* @__PURE__ */ Ft({
  ...Ze,
  scaleX: 1,
  scaleY: 1
});
var ut;
(function(t) {
  t[t.Uninitialized = 0] = "Uninitialized", t[t.Initializing = 1] = "Initializing", t[t.Initialized = 2] = "Initialized";
})(ut || (ut = {}));
const Lc = /* @__PURE__ */ _a(function(e) {
  var r, n, o, i;
  let {
    id: a,
    accessibility: s,
    autoScroll: h = !0,
    children: d,
    sensors: c = Oc,
    collisionDetection: u = zl,
    measuring: m,
    modifiers: p,
    ...x
  } = e;
  const b = Sa(Rc, void 0, Tc), [f, w] = b, [y, E] = Rl(), [_, g] = de(ut.Uninitialized), v = _ === ut.Initialized, {
    draggable: {
      active: N,
      nodes: S,
      translate: R
    },
    droppable: {
      containers: I
    }
  } = f, P = N != null ? S.get(N) : null, $ = ne({
    initial: null,
    translated: null
  }), U = ee(() => {
    var Ce;
    return N != null ? {
      id: N,
      // It's possible for the active node to unmount while dragging
      data: (Ce = P?.data) != null ? Ce : Ec,
      rect: $
    } : null;
  }, [N, P]), j = ne(null), [J, z] = de(null), [V, se] = de(null), ie = kt(x, Object.values(x)), we = Ht("DndDescribedBy", a), Oe = ee(() => I.getEnabled(), [I]), te = kc(m), {
    droppableRects: pe,
    measureDroppableContainers: Ae,
    measuringScheduled: ge
  } = hc(Oe, {
    dragging: v,
    dependencies: [R.x, R.y],
    config: te.droppable
  }), K = dc(S, N), me = ee(() => V ? Cn(V) : null, [V]), ue = Z(), re = gc(K, te.draggable.measure);
  Mc({
    activeNode: N != null ? S.get(N) : null,
    config: ue.layoutShiftCompensation,
    initialRect: re,
    measure: te.draggable.measure
  });
  const L = xo(K, te.draggable.measure, re), M = xo(K ? K.parentElement : null), F = ne({
    activatorEvent: null,
    active: null,
    activeNode: K,
    collisionRect: null,
    collisions: null,
    droppableRects: pe,
    draggableNodes: S,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), Y = I.getNodeFor((r = F.current.over) == null ? void 0 : r.id), ye = Nc({
    measure: te.dragOverlay.measure
  }), De = (n = ye.nodeRef.current) != null ? n : K, ce = v ? (o = ye.rect) != null ? o : L : null, Se = !!(ye.nodeRef.current && ye.rect), q = vc(Se ? null : L), k = Xi(De ? He(De) : null), H = bc(v ? Y ?? K : null), D = Sc(H), G = Pc(p, {
    transform: {
      x: R.x - q.x,
      y: R.y - q.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: V,
    active: U,
    activeNodeRect: L,
    containerNodeRect: M,
    draggingNodeRect: ce,
    over: F.current.over,
    overlayNodeRect: ye.rect,
    scrollableAncestors: H,
    scrollableAncestorRects: D,
    windowRect: k
  }), ae = me ? bt(me, R) : null, fe = wc(H), Ee = So(fe), Re = So(fe, [L]), rt = bt(G, Ee), st = ce ? Ul(ce, G) : null, Xe = U && st ? u({
    active: U,
    collisionRect: st,
    droppableRects: pe,
    droppableContainers: Oe,
    pointerCoordinates: ae
  }) : null, pt = Bl(Xe, "id"), [Qe, Wt] = de(null), mr = Se ? G : bt(G, Re), Et = ql(mr, (i = Qe?.rect) != null ? i : null, L), lt = ne(null), C = be(
    (Ce, Pe) => {
      let {
        sensor: _e,
        options: qe
      } = Pe;
      if (j.current == null)
        return;
      const je = S.get(j.current);
      if (!je)
        return;
      const ke = Ce.nativeEvent, Ie = new _e({
        active: j.current,
        activeNode: je,
        event: ke,
        options: qe,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: F,
        onAbort(Me) {
          if (!S.get(Me))
            return;
          const {
            onDragAbort: Ue
          } = ie.current, We = {
            id: Me
          };
          Ue?.(We), y({
            type: "onDragAbort",
            event: We
          });
        },
        onPending(Me, Je, Ue, We) {
          if (!S.get(Me))
            return;
          const {
            onDragPending: ot
          } = ie.current, Ge = {
            id: Me,
            constraint: Je,
            initialCoordinates: Ue,
            offset: We
          };
          ot?.(Ge), y({
            type: "onDragPending",
            event: Ge
          });
        },
        onStart(Me) {
          const Je = j.current;
          if (Je == null)
            return;
          const Ue = S.get(Je);
          if (!Ue)
            return;
          const {
            onDragStart: We
          } = ie.current, et = {
            activatorEvent: ke,
            active: {
              id: Je,
              data: Ue.data,
              rect: $
            }
          };
          Gt(() => {
            We?.(et), g(ut.Initializing), w({
              type: Fe.DragStart,
              initialCoordinates: Me,
              active: Je
            }), y({
              type: "onDragStart",
              event: et
            }), z(lt.current), se(ke);
          });
        },
        onMove(Me) {
          w({
            type: Fe.DragMove,
            coordinates: Me
          });
        },
        onEnd: nt(Fe.DragEnd),
        onCancel: nt(Fe.DragCancel)
      });
      lt.current = Ie;
      function nt(Me) {
        return async function() {
          const {
            active: Ue,
            collisions: We,
            over: et,
            scrollAdjustedTranslate: ot
          } = F.current;
          let Ge = null;
          if (Ue && ot) {
            const {
              cancelDrop: ct
            } = ie.current;
            Ge = {
              activatorEvent: ke,
              active: Ue,
              collisions: We,
              delta: ot,
              over: et
            }, Me === Fe.DragEnd && typeof ct == "function" && await Promise.resolve(ct(Ge)) && (Me = Fe.DragCancel);
          }
          j.current = null, Gt(() => {
            w({
              type: Me
            }), g(ut.Uninitialized), Wt(null), z(null), se(null), lt.current = null;
            const ct = Me === Fe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ge) {
              const ht = ie.current[ct];
              ht?.(Ge), y({
                type: ct,
                event: Ge
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [S]
  ), O = be((Ce, Pe) => (_e, qe) => {
    const je = _e.nativeEvent, ke = S.get(qe);
    if (
      // Another sensor is already instantiating
      j.current !== null || // No active draggable
      !ke || // Event has already been captured
      je.dndKit || je.defaultPrevented
    )
      return;
    const Ie = {
      active: ke
    };
    Ce(_e, Pe.options, Ie) === !0 && (je.dndKit = {
      capturedBy: Pe.sensor
    }, j.current = qe, C(_e, Pe));
  }, [S, C]), le = pc(c, O);
  xc(c), tt(() => {
    L && _ === ut.Initializing && g(ut.Initialized);
  }, [L, _]), oe(
    () => {
      const {
        onDragMove: Ce
      } = ie.current, {
        active: Pe,
        activatorEvent: _e,
        collisions: qe,
        over: je
      } = F.current;
      if (!Pe || !_e)
        return;
      const ke = {
        active: Pe,
        activatorEvent: _e,
        collisions: qe,
        delta: {
          x: rt.x,
          y: rt.y
        },
        over: je
      };
      Gt(() => {
        Ce?.(ke), y({
          type: "onDragMove",
          event: ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rt.x, rt.y]
  ), oe(
    () => {
      const {
        active: Ce,
        activatorEvent: Pe,
        collisions: _e,
        droppableContainers: qe,
        scrollAdjustedTranslate: je
      } = F.current;
      if (!Ce || j.current == null || !Pe || !je)
        return;
      const {
        onDragOver: ke
      } = ie.current, Ie = qe.get(pt), nt = Ie && Ie.rect.current ? {
        id: Ie.id,
        rect: Ie.rect.current,
        data: Ie.data,
        disabled: Ie.disabled
      } : null, Me = {
        active: Ce,
        activatorEvent: Pe,
        collisions: _e,
        delta: {
          x: je.x,
          y: je.y
        },
        over: nt
      };
      Gt(() => {
        Wt(nt), ke?.(Me), y({
          type: "onDragOver",
          event: Me
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pt]
  ), tt(() => {
    F.current = {
      activatorEvent: V,
      active: U,
      activeNode: K,
      collisionRect: st,
      collisions: Xe,
      droppableRects: pe,
      draggableNodes: S,
      draggingNode: De,
      draggingNodeRect: ce,
      droppableContainers: I,
      over: Qe,
      scrollableAncestors: H,
      scrollAdjustedTranslate: rt
    }, $.current = {
      initial: ce,
      translated: st
    };
  }, [U, K, Xe, st, S, De, ce, pe, I, Qe, H, rt]), cc({
    ...ue,
    delta: R,
    draggingRect: st,
    pointerCoordinates: ae,
    scrollableAncestors: H,
    scrollableAncestorRects: D
  });
  const ve = ee(() => ({
    active: U,
    activeNode: K,
    activeNodeRect: L,
    activatorEvent: V,
    collisions: Xe,
    containerNodeRect: M,
    dragOverlay: ye,
    draggableNodes: S,
    droppableContainers: I,
    droppableRects: pe,
    over: Qe,
    measureDroppableContainers: Ae,
    scrollableAncestors: H,
    scrollableAncestorRects: D,
    measuringConfiguration: te,
    measuringScheduled: ge,
    windowRect: k
  }), [U, K, L, V, Xe, M, ye, S, I, pe, Qe, Ae, H, D, te, ge, k]), xe = ee(() => ({
    activatorEvent: V,
    activators: le,
    active: U,
    activeNodeRect: L,
    ariaDescribedById: {
      draggable: we
    },
    dispatch: w,
    draggableNodes: S,
    over: Qe,
    measureDroppableContainers: Ae
  }), [V, le, U, L, w, we, S, Qe, Ae]);
  return $e.createElement(Fi.Provider, {
    value: E
  }, $e.createElement(pr.Provider, {
    value: xe
  }, $e.createElement(Qi.Provider, {
    value: ve
  }, $e.createElement(Ji.Provider, {
    value: Et
  }, d)), $e.createElement(Ic, {
    disabled: s?.restoreFocus === !1
  })), $e.createElement(kl, {
    ...s,
    hiddenTextDescribedById: we
  }));
  function Z() {
    const Ce = J?.autoScrollEnabled === !1, Pe = typeof h == "object" ? h.enabled === !1 : h === !1, _e = v && !Ce && !Pe;
    return typeof h == "object" ? {
      ...h,
      enabled: _e
    } : {
      enabled: _e
    };
  }
}), Fc = /* @__PURE__ */ Ft(null), No = "button", Bc = "Draggable";
function $c(t) {
  let {
    id: e,
    data: r,
    disabled: n = !1,
    attributes: o
  } = t;
  const i = Ht(Bc), {
    activators: a,
    activatorEvent: s,
    active: h,
    activeNodeRect: d,
    ariaDescribedById: c,
    draggableNodes: u,
    over: m
  } = ft(pr), {
    role: p = No,
    roleDescription: x = "draggable",
    tabIndex: b = 0
  } = o ?? {}, f = h?.id === e, w = ft(f ? Ji : Fc), [y, E] = tr(), [_, g] = tr(), v = _c(a, e), N = kt(r);
  tt(
    () => (u.set(e, {
      id: e,
      key: i,
      node: y,
      activatorNode: _,
      data: N
    }), () => {
      const R = u.get(e);
      R && R.key === i && u.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, e]
  );
  const S = ee(() => ({
    role: p,
    tabIndex: b,
    "aria-disabled": n,
    "aria-pressed": f && p === No ? !0 : void 0,
    "aria-roledescription": x,
    "aria-describedby": c.draggable
  }), [n, p, b, f, x, c.draggable]);
  return {
    active: h,
    activatorEvent: s,
    activeNodeRect: d,
    attributes: S,
    isDragging: f,
    listeners: n ? void 0 : v,
    node: y,
    over: m,
    setNodeRef: E,
    setActivatorNodeRef: g,
    transform: w
  };
}
function zc() {
  return ft(Qi);
}
const qc = "Droppable", jc = {
  timeout: 25
};
function Uc(t) {
  let {
    data: e,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: o
  } = t;
  const i = Ht(qc), {
    active: a,
    dispatch: s,
    over: h,
    measureDroppableContainers: d
  } = ft(pr), c = ne({
    disabled: r
  }), u = ne(!1), m = ne(null), p = ne(null), {
    disabled: x,
    updateMeasurementsFor: b,
    timeout: f
  } = {
    ...jc,
    ...o
  }, w = kt(b ?? n), y = be(
    () => {
      if (!u.current) {
        u.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        d(Array.isArray(w.current) ? w.current : [w.current]), p.current = null;
      }, f);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [f]
  ), E = dr({
    callback: y,
    disabled: x || !a
  }), _ = be((S, R) => {
    E && (R && (E.unobserve(R), u.current = !1), S && E.observe(S));
  }, [E]), [g, v] = tr(_), N = kt(e);
  return oe(() => {
    !E || !g.current || (E.disconnect(), u.current = !1, E.observe(g.current));
  }, [g, E]), oe(
    () => (s({
      type: Fe.RegisterDroppable,
      element: {
        id: n,
        key: i,
        disabled: r,
        node: g,
        rect: m,
        data: N
      }
    }), () => s({
      type: Fe.UnregisterDroppable,
      key: i,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), oe(() => {
    r !== c.current.disabled && (s({
      type: Fe.SetDroppableDisabled,
      id: n,
      key: i,
      disabled: r
    }), c.current.disabled = r);
  }, [n, i, r, s]), {
    active: a,
    rect: m,
    isOver: h?.id === n,
    node: g,
    over: h,
    setNodeRef: v
  };
}
function Zi(t, e, r) {
  const n = t.slice();
  return n.splice(r < 0 ? n.length + r : r, 0, n.splice(e, 1)[0]), n;
}
function Hc(t, e) {
  return t.reduce((r, n, o) => {
    const i = e.get(n);
    return i && (r[o] = i), r;
  }, Array(t.length));
}
function Yt(t) {
  return t !== null && t >= 0;
}
function Wc(t, e) {
  if (t === e)
    return !0;
  if (t.length !== e.length)
    return !1;
  for (let r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Vc(t) {
  return typeof t == "boolean" ? {
    draggable: t,
    droppable: t
  } : t;
}
const ea = (t) => {
  let {
    rects: e,
    activeIndex: r,
    overIndex: n,
    index: o
  } = t;
  const i = Zi(e, n, r), a = e[o], s = i[o];
  return !s || !a ? null : {
    x: s.left - a.left,
    y: s.top - a.top,
    scaleX: s.width / a.width,
    scaleY: s.height / a.height
  };
}, Kt = {
  scaleX: 1,
  scaleY: 1
}, Gc = (t) => {
  var e;
  let {
    activeIndex: r,
    activeNodeRect: n,
    index: o,
    rects: i,
    overIndex: a
  } = t;
  const s = (e = i[r]) != null ? e : n;
  if (!s)
    return null;
  if (o === r) {
    const d = i[a];
    return d ? {
      x: 0,
      y: r < a ? d.top + d.height - (s.top + s.height) : d.top - s.top,
      ...Kt
    } : null;
  }
  const h = Yc(i, o, r);
  return o > r && o <= a ? {
    x: 0,
    y: -s.height - h,
    ...Kt
  } : o < r && o >= a ? {
    x: 0,
    y: s.height + h,
    ...Kt
  } : {
    x: 0,
    y: 0,
    ...Kt
  };
};
function Yc(t, e, r) {
  const n = t[e], o = t[e - 1], i = t[e + 1];
  return n ? r < e ? o ? n.top - (o.top + o.height) : i ? i.top - (n.top + n.height) : 0 : i ? i.top - (n.top + n.height) : o ? n.top - (o.top + o.height) : 0 : 0;
}
const ta = "Sortable", ra = /* @__PURE__ */ $e.createContext({
  activeIndex: -1,
  containerId: ta,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ea,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function Kc(t) {
  let {
    children: e,
    id: r,
    items: n,
    strategy: o = ea,
    disabled: i = !1
  } = t;
  const {
    active: a,
    dragOverlay: s,
    droppableRects: h,
    over: d,
    measureDroppableContainers: c
  } = zc(), u = Ht(ta, r), m = s.rect !== null, p = ee(() => n.map((v) => typeof v == "object" && "id" in v ? v.id : v), [n]), x = a != null, b = a ? p.indexOf(a.id) : -1, f = d ? p.indexOf(d.id) : -1, w = ne(p), y = !Wc(p, w.current), E = f !== -1 && b === -1 || y, _ = Vc(i);
  tt(() => {
    y && x && c(p);
  }, [y, p, x, c]), oe(() => {
    w.current = p;
  }, [p]);
  const g = ee(
    () => ({
      activeIndex: b,
      containerId: u,
      disabled: _,
      disableTransforms: E,
      items: p,
      overIndex: f,
      useDragOverlay: m,
      sortedRects: Hc(p, h),
      strategy: o
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [b, u, _.draggable, _.droppable, E, p, f, h, m, o]
  );
  return $e.createElement(ra.Provider, {
    value: g
  }, e);
}
const Xc = (t) => {
  let {
    id: e,
    items: r,
    activeIndex: n,
    overIndex: o
  } = t;
  return Zi(r, n, o).indexOf(e);
}, Qc = (t) => {
  let {
    containerId: e,
    isSorting: r,
    wasDragging: n,
    index: o,
    items: i,
    newIndex: a,
    previousItems: s,
    previousContainerId: h,
    transition: d
  } = t;
  return !d || !n || s !== i && o === a ? !1 : r ? !0 : a !== o && e === h;
}, Jc = {
  duration: 200,
  easing: "ease"
}, na = "transform", Zc = /* @__PURE__ */ Mt.Transition.toString({
  property: na,
  duration: 0,
  easing: "linear"
}), eu = {
  roleDescription: "sortable"
};
function tu(t) {
  let {
    disabled: e,
    index: r,
    node: n,
    rect: o
  } = t;
  const [i, a] = de(null), s = ne(r);
  return tt(() => {
    if (!e && r !== s.current && n.current) {
      const h = o.current;
      if (h) {
        const d = Nt(n.current, {
          ignoreTransform: !0
        }), c = {
          x: h.left - d.left,
          y: h.top - d.top,
          scaleX: h.width / d.width,
          scaleY: h.height / d.height
        };
        (c.x || c.y) && a(c);
      }
    }
    r !== s.current && (s.current = r);
  }, [e, r, n, o]), oe(() => {
    i && a(null);
  }, [i]), i;
}
function ru(t) {
  let {
    animateLayoutChanges: e = Qc,
    attributes: r,
    disabled: n,
    data: o,
    getNewIndex: i = Xc,
    id: a,
    strategy: s,
    resizeObserverConfig: h,
    transition: d = Jc
  } = t;
  const {
    items: c,
    containerId: u,
    activeIndex: m,
    disabled: p,
    disableTransforms: x,
    sortedRects: b,
    overIndex: f,
    useDragOverlay: w,
    strategy: y
  } = ft(ra), E = nu(n, p), _ = c.indexOf(a), g = ee(() => ({
    sortable: {
      containerId: u,
      index: _,
      items: c
    },
    ...o
  }), [u, o, _, c]), v = ee(() => c.slice(c.indexOf(a)), [c, a]), {
    rect: N,
    node: S,
    isOver: R,
    setNodeRef: I
  } = Uc({
    id: a,
    data: g,
    disabled: E.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: v,
      ...h
    }
  }), {
    active: P,
    activatorEvent: $,
    activeNodeRect: U,
    attributes: j,
    setNodeRef: J,
    listeners: z,
    isDragging: V,
    over: se,
    setActivatorNodeRef: ie,
    transform: we
  } = $c({
    id: a,
    data: g,
    attributes: {
      ...eu,
      ...r
    },
    disabled: E.draggable
  }), Oe = xl(I, J), te = !!P, pe = te && !x && Yt(m) && Yt(f), Ae = !w && V, ge = Ae && pe ? we : null, me = pe ? ge ?? (s ?? y)({
    rects: b,
    activeNodeRect: U,
    activeIndex: m,
    overIndex: f,
    index: _
  }) : null, ue = Yt(m) && Yt(f) ? i({
    id: a,
    items: c,
    activeIndex: m,
    overIndex: f
  }) : _, re = P?.id, L = ne({
    activeId: re,
    items: c,
    newIndex: ue,
    containerId: u
  }), M = c !== L.current.items, F = e({
    active: P,
    containerId: u,
    isDragging: V,
    isSorting: te,
    id: a,
    index: _,
    items: c,
    newIndex: L.current.newIndex,
    previousItems: L.current.items,
    previousContainerId: L.current.containerId,
    transition: d,
    wasDragging: L.current.activeId != null
  }), Y = tu({
    disabled: !F,
    index: _,
    node: S,
    rect: N
  });
  return oe(() => {
    te && L.current.newIndex !== ue && (L.current.newIndex = ue), u !== L.current.containerId && (L.current.containerId = u), c !== L.current.items && (L.current.items = c);
  }, [te, ue, u, c]), oe(() => {
    if (re === L.current.activeId)
      return;
    if (re != null && L.current.activeId == null) {
      L.current.activeId = re;
      return;
    }
    const De = setTimeout(() => {
      L.current.activeId = re;
    }, 50);
    return () => clearTimeout(De);
  }, [re]), {
    active: P,
    activeIndex: m,
    attributes: j,
    data: g,
    rect: N,
    index: _,
    newIndex: ue,
    items: c,
    isOver: R,
    isSorting: te,
    isDragging: V,
    listeners: z,
    node: S,
    overIndex: f,
    over: se,
    setNodeRef: Oe,
    setActivatorNodeRef: ie,
    setDroppableNodeRef: I,
    setDraggableNodeRef: J,
    transform: Y ?? me,
    transition: ye()
  };
  function ye() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      Y || // Or to prevent items jumping to back to their "new" position when items change
      M && L.current.newIndex === _
    )
      return Zc;
    if (!(Ae && !zn($) || !d) && (te || F))
      return Mt.Transition.toString({
        ...d,
        property: na
      });
  }
}
function nu(t, e) {
  var r, n;
  return typeof t == "boolean" ? {
    draggable: t,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (r = t?.draggable) != null ? r : e.draggable,
    droppable: (n = t?.droppable) != null ? n : e.droppable
  };
}
he.Down, he.Right, he.Up, he.Left;
const Sf = ({
  move: t,
  renderItem: e,
  data: r,
  wrapperClassName: n,
  activateDistance: o = 5,
  dndContextProps: i,
  sortableContextProps: a,
  sortableWrapperProps: { className: s, ...h } = {},
  sortableItemProps: d
}) => {
  const c = Ll(
    Ml(Yi, {
      activationConstraint: {
        distance: o
      }
    })
  );
  return /* @__PURE__ */ l(Lc, { sensors: c, onDragEnd: (m) => {
    const { active: p, over: x } = m;
    if (!x || p.id === x.id) return;
    const b = r.findIndex((w) => w.id === p.id), f = r.findIndex((w) => w.id === x.id);
    b !== -1 && f !== -1 && t(b, f);
  }, ...i, children: /* @__PURE__ */ l(
    Kc,
    {
      items: r,
      strategy: Gc,
      ...a,
      children: /* @__PURE__ */ l(
        "div",
        {
          className: W(n, s),
          ...h,
          children: r.map((m, p) => /* @__PURE__ */ l(ou, { item: m, ...d, children: e(m, p) }, m.id))
        }
      )
    }
  ) });
}, ou = ({ children: t, item: e, ...r }) => {
  const { setNodeRef: n, attributes: o, listeners: i, transform: a, transition: s } = ru({
    id: e.id
  }), h = {
    transform: Mt.Transform.toString(a),
    transition: s
  };
  return /* @__PURE__ */ l("div", { style: h, ref: n, ...o, ...i, ...r, children: t });
}, Cf = ({ children: t, title: e, direction: r = "center", expand: n = !1 }) => {
  const [o, i] = de(n);
  return /* @__PURE__ */ B("div", { className: "w-full", children: [
    /* @__PURE__ */ B(T, { className: "items-center w-full", children: [
      /* @__PURE__ */ l(
        T,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: () => {
            i(!o);
          },
          children: /* @__PURE__ */ l(Q, { name: o ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ l(Aa, { align: r, title: e })
    ] }),
    /* @__PURE__ */ l(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${o ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ l(T, { className: "p-2 mt-2", children: t })
      }
    )
  ] });
}, iu = ({ onAddNewItem: t }) => {
  const { t: e } = ze();
  return /* @__PURE__ */ l(T, { justify: "start", align: "center", gap: 4, className: "p-5", children: /* @__PURE__ */ l(X, { className: "bg-light-2 w-full cursor-pointer p-2", size: 14, onClick: t, children: e("common.literal.addInputTag") }) });
}, au = {
  components: {
    Select: {
      multipleItemBg: A.light_1,
      multipleItemBorderColor: A.primary_light_3,
      multipleItemBorderColorDisabled: A.primary_light_3,
      multipleItemColorDisabled: A.negative,
      multipleItemHeight: 30,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: A.light_1,
      optionActiveBg: A.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: A.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: A.primary_light_3
    }
  }
}, su = ({
  size: t,
  error: e,
  disabled: r,
  isTabFocused: n
}) => {
  const o = W(
    "min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 ",
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    r && "!bg-light-6 !border-light-6",
    e && "border-negative hover:border-negative-dark-1 ",
    n && "border-[2px] border-primary-dark-1"
  );
  return t === "medium" ? W("", o) : W("h-[34px]", o);
}, { Option: lu } = _t, Nf = it(
  ({
    error: t,
    className: e,
    height: r = 48,
    underlined: n,
    value: o,
    label: i,
    labelExtraNode: a = null,
    onDropdownVisibleChange: s,
    onAddNew: h,
    open: d,
    showSearch: c = !0,
    options: u,
    labelExtractor: m = (K) => K?.label,
    valueExtractor: p = (K) => K.value,
    tagExtractor: x = (K) => K.label,
    disableExtractor: b = (K) => !1,
    onChange: f,
    renderItem: w,
    renderSelectedItem: y,
    onChangeValue: E,
    selectedValue: _,
    selectedValues: g,
    wrapperClassName: v,
    disabled: N = !1,
    loading: S,
    noContentFoundMessage: R,
    labelPosition: I = "vertical",
    size: P = "medium",
    placeholder: $,
    popupClassName: U,
    allowClear: j = !0,
    header: J,
    footer: z,
    hasError: V,
    addonBefore: se,
    addonAfter: ie,
    required: we,
    infinite: Oe,
    hideErrorMessage: te = !1,
    onSearch: pe,
    ...Ae
  }, ge) => {
    const { eventHandlers: K, isHovered: me, isTabFocused: ue } = qt(), [re, L] = de(!1), [M, F] = de(""), Y = ee(() => {
      const D = [];
      return _ && D.push(..._), g && D.push(...g.map(p)), o && D.push(...o.map(p)), D;
    }, [_, o, g, p]), ye = (D) => {
      s?.(D), L(D);
    }, De = ee(() => {
      const D = /* @__PURE__ */ new Map();
      return u?.forEach((G) => {
        D.set(p(G), G);
      }), g?.forEach((G) => {
        D.set(p(G), G);
      }), Array.from(D.values());
    }, [u, g, p]), ce = (D) => {
      const G = De.filter(
        (ae) => D.some((fe) => fe === p(ae))
      );
      f?.(G), L(!0), F(""), G && E?.(G);
    }, Se = be(
      (D) => {
        F(D), pe?.(D);
      },
      [pe]
    ), q = be(
      ({ item: D, index: G, isActive: ae }) => {
        const fe = m(D);
        return /* @__PURE__ */ l(
          T,
          {
            className: "cursor-pointer",
            onClick: () => {
              const Ee = Y?.map((Re) => Re?.toString() || "") || [];
              Ee?.some((Re) => Re === p(D)) ? ce(Ee.filter((Re) => Re !== p(D))) : ce([...Ee, p(D)]);
            },
            children: w ? /* @__PURE__ */ B(T, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ l(Jt, { checked: ae }),
              w(D, G, ae)
            ] }) : /* @__PURE__ */ B(T, { gap: 8, className: W("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ l(Jt, { checked: ae }),
              typeof fe == "string" ? /* @__PURE__ */ l(X, { children: fe }) : fe
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [Y, w]
    ), k = () => {
      u?.filter((G) => m(G) === M)?.length === 0 && M !== "" && (L(!0), h?.(M), F(""));
    }, H = ({ value: D, closable: G, onClose: ae }) => {
      const fe = g ? g?.find((Re) => p(Re) === D) : u?.find((Re) => p(Re) === D), Ee = fe && m(fe);
      return /* @__PURE__ */ l(
        Ln,
        {
          closable: G,
          onClose: ae,
          title: Ee?.toString() || "",
          style: { margin: 5 }
        },
        D
      );
    };
    return /* @__PURE__ */ B(
      T,
      {
        vertical: I === "vertical",
        className: W(
          "h-fit w-full",
          !te && "inputErrorMessageContainer",
          I === "horizontal" && "items-center gap-3"
        ),
        children: [
          /* @__PURE__ */ l(cr, { disabled: N, label: i, labelExtraNode: a, required: we, size: P }),
          /* @__PURE__ */ l(ir, { theme: au, children: /* @__PURE__ */ B(T, { align: "center", children: [
            se,
            /* @__PURE__ */ l(
              _t,
              {
                ...Ae,
                mode: "multiple",
                style: { minHeight: r },
                menuItemSelectedIcon: null,
                ref: ge,
                className: W(
                  `${su({
                    size: P,
                    error: !!t?.message || V,
                    disabled: N,
                    isTabFocused: ue
                  })}`,
                  e
                ),
                onSearch: Se,
                disabled: N,
                filterOption: !0,
                ...K(),
                showSearch: c,
                bordered: !1,
                tagRender: H,
                placeholder: /* @__PURE__ */ l(kn, { isHovered: me, isTabFocused: ue, placeholder: $, size: P, disabled: N }),
                allowClear: j ? {
                  clearIcon: /* @__PURE__ */ l(In, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ l(iu, { onAddNewItem: k }),
                suffixIcon: /* @__PURE__ */ l(ur, { isHovered: me, loading: S, disabled: N, isTabFocused: ue, error: t }),
                popupClassName: W("p-0 small-custom-scrollbar z-[1000]", U),
                value: Y,
                onDropdownVisibleChange: ye,
                loading: !1,
                searchValue: M,
                open: N ? !1 : d === void 0 ? re : d,
                onChange: ce,
                optionFilterProp: "label",
                dropdownAlign: { offset: [0, 6] },
                onInputKeyDown: (D) => {
                  (D.key === "Enter" || D.key === "Tab") && (D.preventDefault(), k());
                },
                onPopupScroll: (D) => {
                  D.persist();
                  const G = D.target;
                  G.scrollTop + G.offsetHeight === G.scrollHeight && Oe?.hasMore && Oe?.fetchNextPage();
                },
                dropdownRender: (D) => {
                  if (S)
                    return /* @__PURE__ */ l(T, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ l(Bt, { isLoading: !0, size: 24 }) });
                  const G = /* @__PURE__ */ B(T, { vertical: !0, children: [
                    J && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: J }),
                    /* @__PURE__ */ l(T, { vertical: !0, className: "relative overflow-auto", children: D }),
                    z && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: z
                      }
                    )
                  ] });
                  return Oe ? /* @__PURE__ */ B(T, { vertical: !0, children: [
                    J && /* @__PURE__ */ l(T, { gap: 8, align: "center", className: "px-4 py-3", children: J }),
                    /* @__PURE__ */ l(
                      T,
                      {
                        vertical: !0,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ l(
                          sr,
                          {
                            hasMore: Oe.hasMore,
                            onNextPage: Oe.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: u?.map((ae, fe) => {
                              const Ee = !!Y?.find((Re) => Re === p(ae));
                              return q({ index: fe, item: ae, isActive: Ee });
                            })
                          }
                        )
                      }
                    ),
                    z && /* @__PURE__ */ l(
                      T,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: z
                      }
                    )
                  ] }) : G;
                },
                children: u?.map((D, G) => {
                  const ae = !!Y?.find((fe) => fe === p(D));
                  return /* @__PURE__ */ l(
                    lu,
                    {
                      label: m(D),
                      value: p(D),
                      disabled: b(D),
                      children: q({ index: G, item: D, isActive: ae })
                    },
                    p(D)
                  );
                })
              }
            ),
            ie
          ] }) }),
          !te && t?.message && /* @__PURE__ */ l(at, { message: t?.message })
        ]
      }
    );
  }
), cu = {
  components: {
    DatePicker: {
      colorBorder: A.primary_light_3,
      colorTextPlaceholder: A.primary_light_3
    }
  }
}, Of = ({ className: t, error: e, ...r }) => /* @__PURE__ */ l(ir, { theme: cu, children: /* @__PURE__ */ B(xt, { children: [
  /* @__PURE__ */ l(
    va,
    {
      size: "large",
      suffixIcon: /* @__PURE__ */ l(Q, { name: "time", color: A.primary }),
      className: W(
        "w-full text-[14px] font-medium text-primary-dark-1 !shadow-none outline-none hover:border-primary-light-2",
        e?.message && "border-negative",
        t
      ),
      needConfirm: !1,
      showNow: !1,
      popupStyle: { scrollbarWidth: "thin", scrollbarColor: A.primary },
      popupClassName: "[&_.ant-picker-content]:flex-row-reverse ",
      ...r
    }
  ),
  /* @__PURE__ */ l(at, { message: _i(e) })
] }) }), uu = ({ active: t }) => /* @__PURE__ */ l(
  Q,
  {
    name: t ? "Checkmark_Circle" : "Close_Circle_fill",
    color: A[t ? "positive" : "negative"]
  }
), fu = ({ children: t, title: e }) => /* @__PURE__ */ B(T, { vertical: !1, gap: 24, align: "flex-start", children: [
  /* @__PURE__ */ l(T, { flex: 1, className: "bg-light-1 rounded px-4 py-2", children: typeof e == "string" ? /* @__PURE__ */ l(X, { weight: "medium", children: e }) : e }),
  /* @__PURE__ */ l(T, { flex: 3, className: "bg-light-1 rounded px-4 py-2", children: typeof t == "string" ? /* @__PURE__ */ l(X, { size: 16, style: { textAlign: "justify" }, children: t }) : t })
] }), Ef = Dn({ Title: fu, Status: uu }), du = ({ onSearch: t, ...e }) => {
  const [r, n] = de(""), o = os(t, 500);
  return /* @__PURE__ */ l(
    Ci.Search,
    {
      value: r,
      onChange: (i) => {
        n(i.target.value), o(i.target.value);
      },
      placeholder: La("common.literal.search") ?? "Search",
      ...e
    }
  );
}, oa = (t, e, r, n, o) => /* @__PURE__ */ l(xt, { children: t.map((i) => /* @__PURE__ */ l(
  vi.TreeNode,
  {
    isLeaf: !i.hasChildren,
    data: {
      title: i.label,
      key: i.value,
      children: i.children?.map((a) => ({
        title: a.label,
        key: a.value,
        children: []
      })) || []
    },
    className: W("flex items-center justify-between", r),
    title: /* @__PURE__ */ B(T, { className: "w-full items-center justify-between p-1", children: [
      /* @__PURE__ */ B(T, { className: "items-center gap-2", children: [
        i.icon ? /* @__PURE__ */ l(Q, { size: 20, name: i.icon }) : e ? typeof e == "function" ? e(i) : e : o ? /* @__PURE__ */ l(Q, { size: 20, name: o }) : /* @__PURE__ */ l(Q, { size: 20, name: "folder_fill" }),
        /* @__PURE__ */ l(T, { children: /* @__PURE__ */ l(X, { className: " truncate", children: i.label }) })
      ] }),
      /* @__PURE__ */ l(T, { className: "items-center gap-1", children: n?.(i) })
    ] }),
    children: i.children?.length ? oa(
      i.children,
      e,
      r,
      n,
      o
    ) : null
  },
  i.value
)) }), Af = ({
  switcherIconName: t,
  treeData: e,
  isLoading: r,
  className: n,
  nodeClassName: o,
  renderIcon: i,
  renderRightIcons: a,
  isExpandable: s,
  titleHeader: h,
  titleIcon: d,
  expandedWidth: c = 350,
  collapsedWidth: u = 48,
  onDrawerToggle: m,
  infiniteProps: p,
  onSearch: x,
  hasSearch: b = !1,
  ...f
}) => {
  const [w, y] = de(!0), { t: E } = ze(), _ = () => {
    y((v) => {
      const N = !v;
      return m?.(N), N;
    });
  }, g = /* @__PURE__ */ l(
    vi,
    {
      ...f,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ l(Q, { name: t || "Chevron_Down" }),
      className: W(
        n,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: oa(e, i, o, a, d)
    }
  );
  return /* @__PURE__ */ B(
    T,
    {
      vertical: !0,
      className: W(
        "h-full w-[350px] max-w-[30px] bg-light-1 transition-all",
        "[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20",
        "[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent"
      ),
      style: {
        width: s && !w ? `${u}px` : `${c}px`,
        minWidth: s && !w ? `${u}px` : `${c}px`,
        maxWidth: s && !w ? `${u}px` : `${c}px`
      },
      children: [
        s && /* @__PURE__ */ B(
          T,
          {
            gap: 4,
            className: W(
              "relative border-light-7 pb-2.5 pl-0 pr-3 pt-3",
              w && "border"
            ),
            children: [
              /* @__PURE__ */ B(T, { gap: 8, ...w ? {} : { vertical: !0 }, children: [
                /* @__PURE__ */ l(Q, { color: A.primary_light_1, name: d }),
                /* @__PURE__ */ l(
                  X,
                  {
                    className: W(!w && "rotate-180"),
                    style: w ? {} : { writingMode: "vertical-rl" },
                    weight: "bold",
                    color: A.primary_light_1,
                    children: h
                  }
                )
              ] }),
              /* @__PURE__ */ l(
                Da,
                {
                  color: A.primary_light_1,
                  iconName: w ? "Chevron_Left" : "Chevron_Right",
                  onClick: _,
                  "data-testid": "drawer-toggle",
                  className: "absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border border-light-7 bg-white-ff p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ l(Ve, { when: w && b && x, children: /* @__PURE__ */ l(T, { className: " border border-primary-light-3/60 bg-white-ff p-2", children: /* @__PURE__ */ l(du, { onSearch: x }) }) }),
        w && /* @__PURE__ */ l("div", { className: "tiny-custom-scrollbar flex h-full flex-col overflow-y-auto bg-white-ff", children: r ? /* @__PURE__ */ l(ba, { size: "large" }) : e.length === 0 ? /* @__PURE__ */ l(X, { size: 14, className: "text-gray-500", children: E("common.error.noItem") }) : p ? /* @__PURE__ */ l(
          "div",
          {
            id: "tree-scroll-container",
            className: " tiny-custom-scrollbar relative overflow-y-auto bg-white-ff",
            children: /* @__PURE__ */ l(
              sr,
              {
                hasMore: p?.hasMore,
                onNextPage: p?.fetchNextPage,
                scrollableNodeId: "tree-scroll-container",
                children: g
              }
            )
          }
        ) : g })
      ]
    }
  );
};
var Dr, Oo;
function Ot() {
  return Oo || (Oo = 1, Dr = TypeError), Dr;
}
const pu = {}, hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pu
}, Symbol.toStringTag, { value: "Module" })), gu = /* @__PURE__ */ Ta(hu);
var Tr, Eo;
function hr() {
  if (Eo) return Tr;
  Eo = 1;
  var t = typeof Map == "function" && Map.prototype, e = Object.getOwnPropertyDescriptor && t ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = t && e && typeof e.get == "function" ? e.get : null, n = t && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = o && i && typeof i.get == "function" ? i.get : null, s = o && Set.prototype.forEach, h = typeof WeakMap == "function" && WeakMap.prototype, d = h ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, u = c ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, p = m ? WeakRef.prototype.deref : null, x = Boolean.prototype.valueOf, b = Object.prototype.toString, f = Function.prototype.toString, w = String.prototype.match, y = String.prototype.slice, E = String.prototype.replace, _ = String.prototype.toUpperCase, g = String.prototype.toLowerCase, v = RegExp.prototype.test, N = Array.prototype.concat, S = Array.prototype.join, R = Array.prototype.slice, I = Math.floor, P = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, $ = Object.getOwnPropertySymbols, U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, j = typeof Symbol == "function" && typeof Symbol.iterator == "object", J = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === j || !0) ? Symbol.toStringTag : null, z = Object.prototype.propertyIsEnumerable, V = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(C) {
    return C.__proto__;
  } : null);
  function se(C, O) {
    if (C === 1 / 0 || C === -1 / 0 || C !== C || C && C > -1e3 && C < 1e3 || v.call(/e/, O))
      return O;
    var le = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof C == "number") {
      var ve = C < 0 ? -I(-C) : I(C);
      if (ve !== C) {
        var xe = String(ve), Z = y.call(O, xe.length + 1);
        return E.call(xe, le, "$&_") + "." + E.call(E.call(Z, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return E.call(O, le, "$&_");
  }
  var ie = gu, we = ie.custom, Oe = ye(we) ? we : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, pe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Tr = function C(O, le, ve, xe) {
    var Z = le || {};
    if (Se(Z, "quoteStyle") && !Se(te, Z.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Se(Z, "maxStringLength") && (typeof Z.maxStringLength == "number" ? Z.maxStringLength < 0 && Z.maxStringLength !== 1 / 0 : Z.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Ce = Se(Z, "customInspect") ? Z.customInspect : !0;
    if (typeof Ce != "boolean" && Ce !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Se(Z, "indent") && Z.indent !== null && Z.indent !== "	" && !(parseInt(Z.indent, 10) === Z.indent && Z.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Se(Z, "numericSeparator") && typeof Z.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Pe = Z.numericSeparator;
    if (typeof O > "u")
      return "undefined";
    if (O === null)
      return "null";
    if (typeof O == "boolean")
      return O ? "true" : "false";
    if (typeof O == "string")
      return rt(O, Z);
    if (typeof O == "number") {
      if (O === 0)
        return 1 / 0 / O > 0 ? "0" : "-0";
      var _e = String(O);
      return Pe ? se(O, _e) : _e;
    }
    if (typeof O == "bigint") {
      var qe = String(O) + "n";
      return Pe ? se(O, qe) : qe;
    }
    var je = typeof Z.depth > "u" ? 5 : Z.depth;
    if (typeof ve > "u" && (ve = 0), ve >= je && je > 0 && typeof O == "object")
      return me(O) ? "[Array]" : "[Object]";
    var ke = mr(Z, ve);
    if (typeof xe > "u")
      xe = [];
    else if (H(xe, O) >= 0)
      return "[Circular]";
    function Ie(gt, Vt, ga) {
      if (Vt && (xe = R.call(xe), xe.push(Vt)), ga) {
        var Kn = {
          depth: Z.depth
        };
        return Se(Z, "quoteStyle") && (Kn.quoteStyle = Z.quoteStyle), C(gt, Kn, ve + 1, xe);
      }
      return C(gt, Z, ve + 1, xe);
    }
    if (typeof O == "function" && !re(O)) {
      var nt = k(O), Me = lt(O, Ie);
      return "[Function" + (nt ? ": " + nt : " (anonymous)") + "]" + (Me.length > 0 ? " { " + S.call(Me, ", ") + " }" : "");
    }
    if (ye(O)) {
      var Je = j ? E.call(String(O), /^(Symbol\(.*\))_[^)]*$/, "$1") : U.call(O);
      return typeof O == "object" && !j ? Xe(Je) : Je;
    }
    if (Re(O)) {
      for (var Ue = "<" + g.call(String(O.nodeName)), We = O.attributes || [], et = 0; et < We.length; et++)
        Ue += " " + We[et].name + "=" + Ae(ge(We[et].value), "double", Z);
      return Ue += ">", O.childNodes && O.childNodes.length && (Ue += "..."), Ue += "</" + g.call(String(O.nodeName)) + ">", Ue;
    }
    if (me(O)) {
      if (O.length === 0)
        return "[]";
      var ot = lt(O, Ie);
      return ke && !Wt(ot) ? "[" + Et(ot, ke) + "]" : "[ " + S.call(ot, ", ") + " ]";
    }
    if (L(O)) {
      var Ge = lt(O, Ie);
      return !("cause" in Error.prototype) && "cause" in O && !z.call(O, "cause") ? "{ [" + String(O) + "] " + S.call(N.call("[cause]: " + Ie(O.cause), Ge), ", ") + " }" : Ge.length === 0 ? "[" + String(O) + "]" : "{ [" + String(O) + "] " + S.call(Ge, ", ") + " }";
    }
    if (typeof O == "object" && Ce) {
      if (Oe && typeof O[Oe] == "function" && ie)
        return ie(O, { depth: je - ve });
      if (Ce !== "symbol" && typeof O.inspect == "function")
        return O.inspect();
    }
    if (D(O)) {
      var ct = [];
      return n && n.call(O, function(gt, Vt) {
        ct.push(Ie(Vt, O, !0) + " => " + Ie(gt, O));
      }), Qe("Map", r.call(O), ct, ke);
    }
    if (fe(O)) {
      var ht = [];
      return s && s.call(O, function(gt) {
        ht.push(Ie(gt, O));
      }), Qe("Set", a.call(O), ht, ke);
    }
    if (G(O))
      return pt("WeakMap");
    if (Ee(O))
      return pt("WeakSet");
    if (ae(O))
      return pt("WeakRef");
    if (F(O))
      return Xe(Ie(Number(O)));
    if (De(O))
      return Xe(Ie(P.call(O)));
    if (Y(O))
      return Xe(x.call(O));
    if (M(O))
      return Xe(Ie(String(O)));
    if (typeof window < "u" && O === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && O === globalThis || typeof Xn < "u" && O === Xn)
      return "{ [object globalThis] }";
    if (!ue(O) && !re(O)) {
      var yr = lt(O, Ie), Gn = V ? V(O) === Object.prototype : O instanceof Object || O.constructor === Object, vr = O instanceof Object ? "" : "null prototype", Yn = !Gn && J && Object(O) === O && J in O ? y.call(q(O), 8, -1) : vr ? "Object" : "", ha = Gn || typeof O.constructor != "function" ? "" : O.constructor.name ? O.constructor.name + " " : "", br = ha + (Yn || vr ? "[" + S.call(N.call([], Yn || [], vr || []), ": ") + "] " : "");
      return yr.length === 0 ? br + "{}" : ke ? br + "{" + Et(yr, ke) + "}" : br + "{ " + S.call(yr, ", ") + " }";
    }
    return String(O);
  };
  function Ae(C, O, le) {
    var ve = le.quoteStyle || O, xe = te[ve];
    return xe + C + xe;
  }
  function ge(C) {
    return E.call(String(C), /"/g, "&quot;");
  }
  function K(C) {
    return !J || !(typeof C == "object" && (J in C || typeof C[J] < "u"));
  }
  function me(C) {
    return q(C) === "[object Array]" && K(C);
  }
  function ue(C) {
    return q(C) === "[object Date]" && K(C);
  }
  function re(C) {
    return q(C) === "[object RegExp]" && K(C);
  }
  function L(C) {
    return q(C) === "[object Error]" && K(C);
  }
  function M(C) {
    return q(C) === "[object String]" && K(C);
  }
  function F(C) {
    return q(C) === "[object Number]" && K(C);
  }
  function Y(C) {
    return q(C) === "[object Boolean]" && K(C);
  }
  function ye(C) {
    if (j)
      return C && typeof C == "object" && C instanceof Symbol;
    if (typeof C == "symbol")
      return !0;
    if (!C || typeof C != "object" || !U)
      return !1;
    try {
      return U.call(C), !0;
    } catch {
    }
    return !1;
  }
  function De(C) {
    if (!C || typeof C != "object" || !P)
      return !1;
    try {
      return P.call(C), !0;
    } catch {
    }
    return !1;
  }
  var ce = Object.prototype.hasOwnProperty || function(C) {
    return C in this;
  };
  function Se(C, O) {
    return ce.call(C, O);
  }
  function q(C) {
    return b.call(C);
  }
  function k(C) {
    if (C.name)
      return C.name;
    var O = w.call(f.call(C), /^function\s*([\w$]+)/);
    return O ? O[1] : null;
  }
  function H(C, O) {
    if (C.indexOf)
      return C.indexOf(O);
    for (var le = 0, ve = C.length; le < ve; le++)
      if (C[le] === O)
        return le;
    return -1;
  }
  function D(C) {
    if (!r || !C || typeof C != "object")
      return !1;
    try {
      r.call(C);
      try {
        a.call(C);
      } catch {
        return !0;
      }
      return C instanceof Map;
    } catch {
    }
    return !1;
  }
  function G(C) {
    if (!d || !C || typeof C != "object")
      return !1;
    try {
      d.call(C, d);
      try {
        u.call(C, u);
      } catch {
        return !0;
      }
      return C instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function ae(C) {
    if (!p || !C || typeof C != "object")
      return !1;
    try {
      return p.call(C), !0;
    } catch {
    }
    return !1;
  }
  function fe(C) {
    if (!a || !C || typeof C != "object")
      return !1;
    try {
      a.call(C);
      try {
        r.call(C);
      } catch {
        return !0;
      }
      return C instanceof Set;
    } catch {
    }
    return !1;
  }
  function Ee(C) {
    if (!u || !C || typeof C != "object")
      return !1;
    try {
      u.call(C, u);
      try {
        d.call(C, d);
      } catch {
        return !0;
      }
      return C instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Re(C) {
    return !C || typeof C != "object" ? !1 : typeof HTMLElement < "u" && C instanceof HTMLElement ? !0 : typeof C.nodeName == "string" && typeof C.getAttribute == "function";
  }
  function rt(C, O) {
    if (C.length > O.maxStringLength) {
      var le = C.length - O.maxStringLength, ve = "... " + le + " more character" + (le > 1 ? "s" : "");
      return rt(y.call(C, 0, O.maxStringLength), O) + ve;
    }
    var xe = pe[O.quoteStyle || "single"];
    xe.lastIndex = 0;
    var Z = E.call(E.call(C, xe, "\\$1"), /[\x00-\x1f]/g, st);
    return Ae(Z, "single", O);
  }
  function st(C) {
    var O = C.charCodeAt(0), le = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[O];
    return le ? "\\" + le : "\\x" + (O < 16 ? "0" : "") + _.call(O.toString(16));
  }
  function Xe(C) {
    return "Object(" + C + ")";
  }
  function pt(C) {
    return C + " { ? }";
  }
  function Qe(C, O, le, ve) {
    var xe = ve ? Et(le, ve) : S.call(le, ", ");
    return C + " (" + O + ") {" + xe + "}";
  }
  function Wt(C) {
    for (var O = 0; O < C.length; O++)
      if (H(C[O], `
`) >= 0)
        return !1;
    return !0;
  }
  function mr(C, O) {
    var le;
    if (C.indent === "	")
      le = "	";
    else if (typeof C.indent == "number" && C.indent > 0)
      le = S.call(Array(C.indent + 1), " ");
    else
      return null;
    return {
      base: le,
      prev: S.call(Array(O + 1), le)
    };
  }
  function Et(C, O) {
    if (C.length === 0)
      return "";
    var le = `
` + O.prev + O.base;
    return le + S.call(C, "," + le) + `
` + O.prev;
  }
  function lt(C, O) {
    var le = me(C), ve = [];
    if (le) {
      ve.length = C.length;
      for (var xe = 0; xe < C.length; xe++)
        ve[xe] = Se(C, xe) ? O(C[xe], C) : "";
    }
    var Z = typeof $ == "function" ? $(C) : [], Ce;
    if (j) {
      Ce = {};
      for (var Pe = 0; Pe < Z.length; Pe++)
        Ce["$" + Z[Pe]] = Z[Pe];
    }
    for (var _e in C)
      Se(C, _e) && (le && String(Number(_e)) === _e && _e < C.length || j && Ce["$" + _e] instanceof Symbol || (v.call(/[^\w$]/, _e) ? ve.push(O(_e, C) + ": " + O(C[_e], C)) : ve.push(_e + ": " + O(C[_e], C))));
    if (typeof $ == "function")
      for (var qe = 0; qe < Z.length; qe++)
        z.call(C, Z[qe]) && ve.push("[" + O(Z[qe]) + "]: " + O(C[Z[qe]], C));
    return ve;
  }
  return Tr;
}
var Rr, Ao;
function mu() {
  if (Ao) return Rr;
  Ao = 1;
  var t = /* @__PURE__ */ hr(), e = /* @__PURE__ */ Ot(), r = function(s, h, d) {
    for (var c = s, u; (u = c.next) != null; c = u)
      if (u.key === h)
        return c.next = u.next, d || (u.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = u), u;
  }, n = function(s, h) {
    if (s) {
      var d = r(s, h);
      return d && d.value;
    }
  }, o = function(s, h, d) {
    var c = r(s, h);
    c ? c.value = d : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: h,
      next: s.next,
      value: d
    };
  }, i = function(s, h) {
    return s ? !!r(s, h) : !1;
  }, a = function(s, h) {
    if (s)
      return r(s, h, !0);
  };
  return Rr = function() {
    var h, d = {
      assert: function(c) {
        if (!d.has(c))
          throw new e("Side channel does not contain " + t(c));
      },
      delete: function(c) {
        var u = h && h.next, m = a(h, c);
        return m && u && u === m && (h = void 0), !!m;
      },
      get: function(c) {
        return n(h, c);
      },
      has: function(c) {
        return i(h, c);
      },
      set: function(c, u) {
        h || (h = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          h,
          c,
          u
        );
      }
    };
    return d;
  }, Rr;
}
var Ir, Do;
function ia() {
  return Do || (Do = 1, Ir = Object), Ir;
}
var Pr, To;
function yu() {
  return To || (To = 1, Pr = Error), Pr;
}
var kr, Ro;
function vu() {
  return Ro || (Ro = 1, kr = EvalError), kr;
}
var Mr, Io;
function bu() {
  return Io || (Io = 1, Mr = RangeError), Mr;
}
var Lr, Po;
function wu() {
  return Po || (Po = 1, Lr = ReferenceError), Lr;
}
var Fr, ko;
function xu() {
  return ko || (ko = 1, Fr = SyntaxError), Fr;
}
var Br, Mo;
function _u() {
  return Mo || (Mo = 1, Br = URIError), Br;
}
var $r, Lo;
function Su() {
  return Lo || (Lo = 1, $r = Math.abs), $r;
}
var zr, Fo;
function Cu() {
  return Fo || (Fo = 1, zr = Math.floor), zr;
}
var qr, Bo;
function Nu() {
  return Bo || (Bo = 1, qr = Math.max), qr;
}
var jr, $o;
function Ou() {
  return $o || ($o = 1, jr = Math.min), jr;
}
var Ur, zo;
function Eu() {
  return zo || (zo = 1, Ur = Math.pow), Ur;
}
var Hr, qo;
function Au() {
  return qo || (qo = 1, Hr = Math.round), Hr;
}
var Wr, jo;
function Du() {
  return jo || (jo = 1, Wr = Number.isNaN || function(e) {
    return e !== e;
  }), Wr;
}
var Vr, Uo;
function Tu() {
  if (Uo) return Vr;
  Uo = 1;
  var t = /* @__PURE__ */ Du();
  return Vr = function(r) {
    return t(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Vr;
}
var Gr, Ho;
function Ru() {
  return Ho || (Ho = 1, Gr = Object.getOwnPropertyDescriptor), Gr;
}
var Yr, Wo;
function aa() {
  if (Wo) return Yr;
  Wo = 1;
  var t = /* @__PURE__ */ Ru();
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return Yr = t, Yr;
}
var Kr, Vo;
function Iu() {
  if (Vo) return Kr;
  Vo = 1;
  var t = Object.defineProperty || !1;
  if (t)
    try {
      t({}, "a", { value: 1 });
    } catch {
      t = !1;
    }
  return Kr = t, Kr;
}
var Xr, Go;
function Pu() {
  return Go || (Go = 1, Xr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    e[r] = o;
    for (var i in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, r)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Xr;
}
var Qr, Yo;
function ku() {
  if (Yo) return Qr;
  Yo = 1;
  var t = typeof Symbol < "u" && Symbol, e = Pu();
  return Qr = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : e();
  }, Qr;
}
var Jr, Ko;
function sa() {
  return Ko || (Ko = 1, Jr = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Jr;
}
var Zr, Xo;
function la() {
  if (Xo) return Zr;
  Xo = 1;
  var t = /* @__PURE__ */ ia();
  return Zr = t.getPrototypeOf || null, Zr;
}
var en, Qo;
function Mu() {
  if (Qo) return en;
  Qo = 1;
  var t = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, r = Math.max, n = "[object Function]", o = function(h, d) {
    for (var c = [], u = 0; u < h.length; u += 1)
      c[u] = h[u];
    for (var m = 0; m < d.length; m += 1)
      c[m + h.length] = d[m];
    return c;
  }, i = function(h, d) {
    for (var c = [], u = d, m = 0; u < h.length; u += 1, m += 1)
      c[m] = h[u];
    return c;
  }, a = function(s, h) {
    for (var d = "", c = 0; c < s.length; c += 1)
      d += s[c], c + 1 < s.length && (d += h);
    return d;
  };
  return en = function(h) {
    var d = this;
    if (typeof d != "function" || e.apply(d) !== n)
      throw new TypeError(t + d);
    for (var c = i(arguments, 1), u, m = function() {
      if (this instanceof u) {
        var w = d.apply(
          this,
          o(c, arguments)
        );
        return Object(w) === w ? w : this;
      }
      return d.apply(
        h,
        o(c, arguments)
      );
    }, p = r(0, d.length - c.length), x = [], b = 0; b < p; b++)
      x[b] = "$" + b;
    if (u = Function("binder", "return function (" + a(x, ",") + "){ return binder.apply(this,arguments); }")(m), d.prototype) {
      var f = function() {
      };
      f.prototype = d.prototype, u.prototype = new f(), f.prototype = null;
    }
    return u;
  }, en;
}
var tn, Jo;
function gr() {
  if (Jo) return tn;
  Jo = 1;
  var t = Mu();
  return tn = Function.prototype.bind || t, tn;
}
var rn, Zo;
function Hn() {
  return Zo || (Zo = 1, rn = Function.prototype.call), rn;
}
var nn, ei;
function ca() {
  return ei || (ei = 1, nn = Function.prototype.apply), nn;
}
var on, ti;
function Lu() {
  return ti || (ti = 1, on = typeof Reflect < "u" && Reflect && Reflect.apply), on;
}
var an, ri;
function Fu() {
  if (ri) return an;
  ri = 1;
  var t = gr(), e = ca(), r = Hn(), n = Lu();
  return an = n || t.call(r, e), an;
}
var sn, ni;
function ua() {
  if (ni) return sn;
  ni = 1;
  var t = gr(), e = /* @__PURE__ */ Ot(), r = Hn(), n = Fu();
  return sn = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new e("a function is required");
    return n(t, r, i);
  }, sn;
}
var ln, oi;
function Bu() {
  if (oi) return ln;
  oi = 1;
  var t = ua(), e = /* @__PURE__ */ aa(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return ln = n && typeof n.get == "function" ? t([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return i(s == null ? s : o(s));
    }
  ) : !1, ln;
}
var cn, ii;
function $u() {
  if (ii) return cn;
  ii = 1;
  var t = sa(), e = la(), r = /* @__PURE__ */ Bu();
  return cn = t ? function(o) {
    return t(o);
  } : e ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return e(o);
  } : r ? function(o) {
    return r(o);
  } : null, cn;
}
var un, ai;
function zu() {
  if (ai) return un;
  ai = 1;
  var t = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = gr();
  return un = r.call(t, e), un;
}
var fn, si;
function Wn() {
  if (si) return fn;
  si = 1;
  var t, e = /* @__PURE__ */ ia(), r = /* @__PURE__ */ yu(), n = /* @__PURE__ */ vu(), o = /* @__PURE__ */ bu(), i = /* @__PURE__ */ wu(), a = /* @__PURE__ */ xu(), s = /* @__PURE__ */ Ot(), h = /* @__PURE__ */ _u(), d = /* @__PURE__ */ Su(), c = /* @__PURE__ */ Cu(), u = /* @__PURE__ */ Nu(), m = /* @__PURE__ */ Ou(), p = /* @__PURE__ */ Eu(), x = /* @__PURE__ */ Au(), b = /* @__PURE__ */ Tu(), f = Function, w = function(re) {
    try {
      return f('"use strict"; return (' + re + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ aa(), E = /* @__PURE__ */ Iu(), _ = function() {
    throw new s();
  }, g = y ? (function() {
    try {
      return arguments.callee, _;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return _;
      }
    }
  })() : _, v = ku()(), N = $u(), S = la(), R = sa(), I = ca(), P = Hn(), $ = {}, U = typeof Uint8Array > "u" || !N ? t : N(Uint8Array), j = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": v && N ? N([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": $,
    "%AsyncGenerator%": $,
    "%AsyncGeneratorFunction%": $,
    "%AsyncIteratorPrototype%": $,
    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? t : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? t : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
    "%Function%": f,
    "%GeneratorFunction%": $,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": v && N ? N(N([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !v || !N ? t : N((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": e,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !v || !N ? t : N((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": v && N ? N(""[Symbol.iterator]()) : t,
    "%Symbol%": v ? Symbol : t,
    "%SyntaxError%": a,
    "%ThrowTypeError%": g,
    "%TypedArray%": U,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": h,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet,
    "%Function.prototype.call%": P,
    "%Function.prototype.apply%": I,
    "%Object.defineProperty%": E,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": d,
    "%Math.floor%": c,
    "%Math.max%": u,
    "%Math.min%": m,
    "%Math.pow%": p,
    "%Math.round%": x,
    "%Math.sign%": b,
    "%Reflect.getPrototypeOf%": R
  };
  if (N)
    try {
      null.error;
    } catch (re) {
      var J = N(N(re));
      j["%Error.prototype%"] = J;
    }
  var z = function re(L) {
    var M;
    if (L === "%AsyncFunction%")
      M = w("async function () {}");
    else if (L === "%GeneratorFunction%")
      M = w("function* () {}");
    else if (L === "%AsyncGeneratorFunction%")
      M = w("async function* () {}");
    else if (L === "%AsyncGenerator%") {
      var F = re("%AsyncGeneratorFunction%");
      F && (M = F.prototype);
    } else if (L === "%AsyncIteratorPrototype%") {
      var Y = re("%AsyncGenerator%");
      Y && N && (M = N(Y.prototype));
    }
    return j[L] = M, M;
  }, V = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, se = gr(), ie = /* @__PURE__ */ zu(), we = se.call(P, Array.prototype.concat), Oe = se.call(I, Array.prototype.splice), te = se.call(P, String.prototype.replace), pe = se.call(P, String.prototype.slice), Ae = se.call(P, RegExp.prototype.exec), ge = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, K = /\\(\\)?/g, me = function(L) {
    var M = pe(L, 0, 1), F = pe(L, -1);
    if (M === "%" && F !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (F === "%" && M !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var Y = [];
    return te(L, ge, function(ye, De, ce, Se) {
      Y[Y.length] = ce ? te(Se, K, "$1") : De || ye;
    }), Y;
  }, ue = function(L, M) {
    var F = L, Y;
    if (ie(V, F) && (Y = V[F], F = "%" + Y[0] + "%"), ie(j, F)) {
      var ye = j[F];
      if (ye === $ && (ye = z(F)), typeof ye > "u" && !M)
        throw new s("intrinsic " + L + " exists, but is not available. Please file an issue!");
      return {
        alias: Y,
        name: F,
        value: ye
      };
    }
    throw new a("intrinsic " + L + " does not exist!");
  };
  return fn = function(L, M) {
    if (typeof L != "string" || L.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof M != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (Ae(/^%?[^%]*%?$/, L) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var F = me(L), Y = F.length > 0 ? F[0] : "", ye = ue("%" + Y + "%", M), De = ye.name, ce = ye.value, Se = !1, q = ye.alias;
    q && (Y = q[0], Oe(F, we([0, 1], q)));
    for (var k = 1, H = !0; k < F.length; k += 1) {
      var D = F[k], G = pe(D, 0, 1), ae = pe(D, -1);
      if ((G === '"' || G === "'" || G === "`" || ae === '"' || ae === "'" || ae === "`") && G !== ae)
        throw new a("property names with quotes must have matching quotes");
      if ((D === "constructor" || !H) && (Se = !0), Y += "." + D, De = "%" + Y + "%", ie(j, De))
        ce = j[De];
      else if (ce != null) {
        if (!(D in ce)) {
          if (!M)
            throw new s("base intrinsic for " + L + " exists, but the property is not available.");
          return;
        }
        if (y && k + 1 >= F.length) {
          var fe = y(ce, D);
          H = !!fe, H && "get" in fe && !("originalValue" in fe.get) ? ce = fe.get : ce = ce[D];
        } else
          H = ie(ce, D), ce = ce[D];
        H && !Se && (j[De] = ce);
      }
    }
    return ce;
  }, fn;
}
var dn, li;
function fa() {
  if (li) return dn;
  li = 1;
  var t = /* @__PURE__ */ Wn(), e = ua(), r = e([t("%String.prototype.indexOf%")]);
  return dn = function(o, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      t(o, !!i)
    );
    return typeof a == "function" && r(o, ".prototype.") > -1 ? e(
      /** @type {const} */
      [a]
    ) : a;
  }, dn;
}
var pn, ci;
function da() {
  if (ci) return pn;
  ci = 1;
  var t = /* @__PURE__ */ Wn(), e = /* @__PURE__ */ fa(), r = /* @__PURE__ */ hr(), n = /* @__PURE__ */ Ot(), o = t("%Map%", !0), i = e("Map.prototype.get", !0), a = e("Map.prototype.set", !0), s = e("Map.prototype.has", !0), h = e("Map.prototype.delete", !0), d = e("Map.prototype.size", !0);
  return pn = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var u, m = {
      assert: function(p) {
        if (!m.has(p))
          throw new n("Side channel does not contain " + r(p));
      },
      delete: function(p) {
        if (u) {
          var x = h(u, p);
          return d(u) === 0 && (u = void 0), x;
        }
        return !1;
      },
      get: function(p) {
        if (u)
          return i(u, p);
      },
      has: function(p) {
        return u ? s(u, p) : !1;
      },
      set: function(p, x) {
        u || (u = new o()), a(u, p, x);
      }
    };
    return m;
  }, pn;
}
var hn, ui;
function qu() {
  if (ui) return hn;
  ui = 1;
  var t = /* @__PURE__ */ Wn(), e = /* @__PURE__ */ fa(), r = /* @__PURE__ */ hr(), n = da(), o = /* @__PURE__ */ Ot(), i = t("%WeakMap%", !0), a = e("WeakMap.prototype.get", !0), s = e("WeakMap.prototype.set", !0), h = e("WeakMap.prototype.has", !0), d = e("WeakMap.prototype.delete", !0);
  return hn = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var u, m, p = {
        assert: function(x) {
          if (!p.has(x))
            throw new o("Side channel does not contain " + r(x));
        },
        delete: function(x) {
          if (i && x && (typeof x == "object" || typeof x == "function")) {
            if (u)
              return d(u, x);
          } else if (n && m)
            return m.delete(x);
          return !1;
        },
        get: function(x) {
          return i && x && (typeof x == "object" || typeof x == "function") && u ? a(u, x) : m && m.get(x);
        },
        has: function(x) {
          return i && x && (typeof x == "object" || typeof x == "function") && u ? h(u, x) : !!m && m.has(x);
        },
        set: function(x, b) {
          i && x && (typeof x == "object" || typeof x == "function") ? (u || (u = new i()), s(u, x, b)) : n && (m || (m = n()), m.set(x, b));
        }
      };
      return p;
    }
  ) : n, hn;
}
var gn, fi;
function ju() {
  if (fi) return gn;
  fi = 1;
  var t = /* @__PURE__ */ Ot(), e = /* @__PURE__ */ hr(), r = mu(), n = da(), o = qu(), i = o || n || r;
  return gn = function() {
    var s, h = {
      assert: function(d) {
        if (!h.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        return !!s && s.delete(d);
      },
      get: function(d) {
        return s && s.get(d);
      },
      has: function(d) {
        return !!s && s.has(d);
      },
      set: function(d, c) {
        s || (s = i()), s.set(d, c);
      }
    };
    return h;
  }, gn;
}
var mn, di;
function Vn() {
  if (di) return mn;
  di = 1;
  var t = String.prototype.replace, e = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return mn = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return t.call(n, e, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, mn;
}
var yn, pi;
function pa() {
  if (pi) return yn;
  pi = 1;
  var t = Vn(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = (function() {
    for (var b = [], f = 0; f < 256; ++f)
      b.push("%" + ((f < 16 ? "0" : "") + f.toString(16)).toUpperCase());
    return b;
  })(), o = function(f) {
    for (; f.length > 1; ) {
      var w = f.pop(), y = w.obj[w.prop];
      if (r(y)) {
        for (var E = [], _ = 0; _ < y.length; ++_)
          typeof y[_] < "u" && E.push(y[_]);
        w.obj[w.prop] = E;
      }
    }
  }, i = function(f, w) {
    for (var y = w && w.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, E = 0; E < f.length; ++E)
      typeof f[E] < "u" && (y[E] = f[E]);
    return y;
  }, a = function b(f, w, y) {
    if (!w)
      return f;
    if (typeof w != "object") {
      if (r(f))
        f.push(w);
      else if (f && typeof f == "object")
        (y && (y.plainObjects || y.allowPrototypes) || !e.call(Object.prototype, w)) && (f[w] = !0);
      else
        return [f, w];
      return f;
    }
    if (!f || typeof f != "object")
      return [f].concat(w);
    var E = f;
    return r(f) && !r(w) && (E = i(f, y)), r(f) && r(w) ? (w.forEach(function(_, g) {
      if (e.call(f, g)) {
        var v = f[g];
        v && typeof v == "object" && _ && typeof _ == "object" ? f[g] = b(v, _, y) : f.push(_);
      } else
        f[g] = _;
    }), f) : Object.keys(w).reduce(function(_, g) {
      var v = w[g];
      return e.call(_, g) ? _[g] = b(_[g], v, y) : _[g] = v, _;
    }, E);
  }, s = function(f, w) {
    return Object.keys(w).reduce(function(y, E) {
      return y[E] = w[E], y;
    }, f);
  }, h = function(b, f, w) {
    var y = b.replace(/\+/g, " ");
    if (w === "iso-8859-1")
      return y.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(y);
    } catch {
      return y;
    }
  }, d = function(f, w, y, E, _) {
    if (f.length === 0)
      return f;
    var g = f;
    if (typeof f == "symbol" ? g = Symbol.prototype.toString.call(f) : typeof f != "string" && (g = String(f)), y === "iso-8859-1")
      return escape(g).replace(/%u[0-9a-f]{4}/gi, function(R) {
        return "%26%23" + parseInt(R.slice(2), 16) + "%3B";
      });
    for (var v = "", N = 0; N < g.length; ++N) {
      var S = g.charCodeAt(N);
      if (S === 45 || S === 46 || S === 95 || S === 126 || S >= 48 && S <= 57 || S >= 65 && S <= 90 || S >= 97 && S <= 122 || _ === t.RFC1738 && (S === 40 || S === 41)) {
        v += g.charAt(N);
        continue;
      }
      if (S < 128) {
        v = v + n[S];
        continue;
      }
      if (S < 2048) {
        v = v + (n[192 | S >> 6] + n[128 | S & 63]);
        continue;
      }
      if (S < 55296 || S >= 57344) {
        v = v + (n[224 | S >> 12] + n[128 | S >> 6 & 63] + n[128 | S & 63]);
        continue;
      }
      N += 1, S = 65536 + ((S & 1023) << 10 | g.charCodeAt(N) & 1023), v += n[240 | S >> 18] + n[128 | S >> 12 & 63] + n[128 | S >> 6 & 63] + n[128 | S & 63];
    }
    return v;
  }, c = function(f) {
    for (var w = [{ obj: { o: f }, prop: "o" }], y = [], E = 0; E < w.length; ++E)
      for (var _ = w[E], g = _.obj[_.prop], v = Object.keys(g), N = 0; N < v.length; ++N) {
        var S = v[N], R = g[S];
        typeof R == "object" && R !== null && y.indexOf(R) === -1 && (w.push({ obj: g, prop: S }), y.push(R));
      }
    return o(w), f;
  }, u = function(f) {
    return Object.prototype.toString.call(f) === "[object RegExp]";
  }, m = function(f) {
    return !f || typeof f != "object" ? !1 : !!(f.constructor && f.constructor.isBuffer && f.constructor.isBuffer(f));
  }, p = function(f, w) {
    return [].concat(f, w);
  }, x = function(f, w) {
    if (r(f)) {
      for (var y = [], E = 0; E < f.length; E += 1)
        y.push(w(f[E]));
      return y;
    }
    return w(f);
  };
  return yn = {
    arrayToObject: i,
    assign: s,
    combine: p,
    compact: c,
    decode: h,
    encode: d,
    isBuffer: m,
    isRegExp: u,
    maybeMap: x,
    merge: a
  }, yn;
}
var vn, hi;
function Uu() {
  if (hi) return vn;
  hi = 1;
  var t = ju(), e = pa(), r = Vn(), n = Object.prototype.hasOwnProperty, o = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, w) {
      return f + "[" + w + "]";
    },
    repeat: function(f) {
      return f;
    }
  }, i = Array.isArray, a = Array.prototype.push, s = function(b, f) {
    a.apply(b, i(f) ? f : [f]);
  }, h = Date.prototype.toISOString, d = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: e.encode,
    encodeValuesOnly: !1,
    format: d,
    formatter: r.formatters[d],
    // deprecated
    indices: !1,
    serializeDate: function(f) {
      return h.call(f);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, u = function(f) {
    return typeof f == "string" || typeof f == "number" || typeof f == "boolean" || typeof f == "symbol" || typeof f == "bigint";
  }, m = {}, p = function b(f, w, y, E, _, g, v, N, S, R, I, P, $, U, j, J) {
    for (var z = f, V = J, se = 0, ie = !1; (V = V.get(m)) !== void 0 && !ie; ) {
      var we = V.get(f);
      if (se += 1, typeof we < "u") {
        if (we === se)
          throw new RangeError("Cyclic object value");
        ie = !0;
      }
      typeof V.get(m) > "u" && (se = 0);
    }
    if (typeof N == "function" ? z = N(w, z) : z instanceof Date ? z = I(z) : y === "comma" && i(z) && (z = e.maybeMap(z, function(M) {
      return M instanceof Date ? I(M) : M;
    })), z === null) {
      if (_)
        return v && !U ? v(w, c.encoder, j, "key", P) : w;
      z = "";
    }
    if (u(z) || e.isBuffer(z)) {
      if (v) {
        var Oe = U ? w : v(w, c.encoder, j, "key", P);
        return [$(Oe) + "=" + $(v(z, c.encoder, j, "value", P))];
      }
      return [$(w) + "=" + $(String(z))];
    }
    var te = [];
    if (typeof z > "u")
      return te;
    var pe;
    if (y === "comma" && i(z))
      U && v && (z = e.maybeMap(z, v)), pe = [{ value: z.length > 0 ? z.join(",") || null : void 0 }];
    else if (i(N))
      pe = N;
    else {
      var Ae = Object.keys(z);
      pe = S ? Ae.sort(S) : Ae;
    }
    for (var ge = E && i(z) && z.length === 1 ? w + "[]" : w, K = 0; K < pe.length; ++K) {
      var me = pe[K], ue = typeof me == "object" && typeof me.value < "u" ? me.value : z[me];
      if (!(g && ue === null)) {
        var re = i(z) ? typeof y == "function" ? y(ge, me) : ge : ge + (R ? "." + me : "[" + me + "]");
        J.set(f, se);
        var L = t();
        L.set(m, J), s(te, b(
          ue,
          re,
          y,
          E,
          _,
          g,
          y === "comma" && U && i(z) ? null : v,
          N,
          S,
          R,
          I,
          P,
          $,
          U,
          j,
          L
        ));
      }
    }
    return te;
  }, x = function(f) {
    if (!f)
      return c;
    if (f.encoder !== null && typeof f.encoder < "u" && typeof f.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var w = f.charset || c.charset;
    if (typeof f.charset < "u" && f.charset !== "utf-8" && f.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var y = r.default;
    if (typeof f.format < "u") {
      if (!n.call(r.formatters, f.format))
        throw new TypeError("Unknown format option provided.");
      y = f.format;
    }
    var E = r.formatters[y], _ = c.filter;
    return (typeof f.filter == "function" || i(f.filter)) && (_ = f.filter), {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : c.addQueryPrefix,
      allowDots: typeof f.allowDots > "u" ? c.allowDots : !!f.allowDots,
      charset: w,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : c.charsetSentinel,
      delimiter: typeof f.delimiter > "u" ? c.delimiter : f.delimiter,
      encode: typeof f.encode == "boolean" ? f.encode : c.encode,
      encoder: typeof f.encoder == "function" ? f.encoder : c.encoder,
      encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : c.encodeValuesOnly,
      filter: _,
      format: y,
      formatter: E,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : c.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : c.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : c.strictNullHandling
    };
  };
  return vn = function(b, f) {
    var w = b, y = x(f), E, _;
    typeof y.filter == "function" ? (_ = y.filter, w = _("", w)) : i(y.filter) && (_ = y.filter, E = _);
    var g = [];
    if (typeof w != "object" || w === null)
      return "";
    var v;
    f && f.arrayFormat in o ? v = f.arrayFormat : f && "indices" in f ? v = f.indices ? "indices" : "repeat" : v = "indices";
    var N = o[v];
    if (f && "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var S = N === "comma" && f && f.commaRoundTrip;
    E || (E = Object.keys(w)), y.sort && E.sort(y.sort);
    for (var R = t(), I = 0; I < E.length; ++I) {
      var P = E[I];
      y.skipNulls && w[P] === null || s(g, p(
        w[P],
        P,
        N,
        S,
        y.strictNullHandling,
        y.skipNulls,
        y.encode ? y.encoder : null,
        y.filter,
        y.sort,
        y.allowDots,
        y.serializeDate,
        y.format,
        y.formatter,
        y.encodeValuesOnly,
        y.charset,
        R
      ));
    }
    var $ = g.join(y.delimiter), U = y.addQueryPrefix === !0 ? "?" : "";
    return y.charsetSentinel && (y.charset === "iso-8859-1" ? U += "utf8=%26%2310003%3B&" : U += "utf8=%E2%9C%93&"), $.length > 0 ? U + $ : "";
  }, vn;
}
var bn, gi;
function Hu() {
  if (gi) return bn;
  gi = 1;
  var t = pa(), e = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: t.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  }, o = function(m) {
    return m.replace(/&#(\d+);/g, function(p, x) {
      return String.fromCharCode(parseInt(x, 10));
    });
  }, i = function(m, p) {
    return m && typeof m == "string" && p.comma && m.indexOf(",") > -1 ? m.split(",") : m;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", h = function(p, x) {
    var b = { __proto__: null }, f = x.ignoreQueryPrefix ? p.replace(/^\?/, "") : p, w = x.parameterLimit === 1 / 0 ? void 0 : x.parameterLimit, y = f.split(x.delimiter, w), E = -1, _, g = x.charset;
    if (x.charsetSentinel)
      for (_ = 0; _ < y.length; ++_)
        y[_].indexOf("utf8=") === 0 && (y[_] === s ? g = "utf-8" : y[_] === a && (g = "iso-8859-1"), E = _, _ = y.length);
    for (_ = 0; _ < y.length; ++_)
      if (_ !== E) {
        var v = y[_], N = v.indexOf("]="), S = N === -1 ? v.indexOf("=") : N + 1, R, I;
        S === -1 ? (R = x.decoder(v, n.decoder, g, "key"), I = x.strictNullHandling ? null : "") : (R = x.decoder(v.slice(0, S), n.decoder, g, "key"), I = t.maybeMap(
          i(v.slice(S + 1), x),
          function(P) {
            return x.decoder(P, n.decoder, g, "value");
          }
        )), I && x.interpretNumericEntities && g === "iso-8859-1" && (I = o(I)), v.indexOf("[]=") > -1 && (I = r(I) ? [I] : I), e.call(b, R) ? b[R] = t.combine(b[R], I) : b[R] = I;
      }
    return b;
  }, d = function(m, p, x, b) {
    for (var f = b ? p : i(p, x), w = m.length - 1; w >= 0; --w) {
      var y, E = m[w];
      if (E === "[]" && x.parseArrays)
        y = [].concat(f);
      else {
        y = x.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var _ = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E, g = parseInt(_, 10);
        !x.parseArrays && _ === "" ? y = { 0: f } : !isNaN(g) && E !== _ && String(g) === _ && g >= 0 && x.parseArrays && g <= x.arrayLimit ? (y = [], y[g] = f) : _ !== "__proto__" && (y[_] = f);
      }
      f = y;
    }
    return f;
  }, c = function(p, x, b, f) {
    if (p) {
      var w = b.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p, y = /(\[[^[\]]*])/, E = /(\[[^[\]]*])/g, _ = b.depth > 0 && y.exec(w), g = _ ? w.slice(0, _.index) : w, v = [];
      if (g) {
        if (!b.plainObjects && e.call(Object.prototype, g) && !b.allowPrototypes)
          return;
        v.push(g);
      }
      for (var N = 0; b.depth > 0 && (_ = E.exec(w)) !== null && N < b.depth; ) {
        if (N += 1, !b.plainObjects && e.call(Object.prototype, _[1].slice(1, -1)) && !b.allowPrototypes)
          return;
        v.push(_[1]);
      }
      return _ && v.push("[" + w.slice(_.index) + "]"), d(v, x, b, f);
    }
  }, u = function(p) {
    if (!p)
      return n;
    if (p.decoder !== null && p.decoder !== void 0 && typeof p.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof p.charset < "u" && p.charset !== "utf-8" && p.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var x = typeof p.charset > "u" ? n.charset : p.charset;
    return {
      allowDots: typeof p.allowDots > "u" ? n.allowDots : !!p.allowDots,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : n.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : n.arrayLimit,
      charset: x,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : n.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : n.comma,
      decoder: typeof p.decoder == "function" ? p.decoder : n.decoder,
      delimiter: typeof p.delimiter == "string" || t.isRegExp(p.delimiter) ? p.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : n.depth,
      ignoreQueryPrefix: p.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof p.interpretNumericEntities == "boolean" ? p.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof p.parameterLimit == "number" ? p.parameterLimit : n.parameterLimit,
      parseArrays: p.parseArrays !== !1,
      plainObjects: typeof p.plainObjects == "boolean" ? p.plainObjects : n.plainObjects,
      strictNullHandling: typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : n.strictNullHandling
    };
  };
  return bn = function(m, p) {
    var x = u(p);
    if (m === "" || m === null || typeof m > "u")
      return x.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var b = typeof m == "string" ? h(m, x) : m, f = x.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, w = Object.keys(b), y = 0; y < w.length; ++y) {
      var E = w[y], _ = c(E, b[E], x, typeof m == "string");
      f = t.merge(f, _, x);
    }
    return x.allowSparse === !0 ? f : t.compact(f);
  }, bn;
}
var wn, mi;
function Wu() {
  if (mi) return wn;
  mi = 1;
  var t = Uu(), e = Hu(), r = Vn();
  return wn = {
    formats: r,
    parse: e,
    stringify: t
  }, wn;
}
var Vu = Wu();
const Gu = /* @__PURE__ */ Ra(Vu), Yu = (t) => null, Ku = ({ children: t, query: e = !0, defaultActiveTab: r }) => {
  const n = $a(), [o] = za(), [i, a] = de(
    r || t[0].props.tab
  ), s = bi.map(t, (p) => p.props), { activeContent: h, className: d, isTransparent: c, extraNode: u } = ee(() => {
    const p = s.find((x) => x.tab === i);
    return p ? {
      activeContent: p.children,
      className: p.className,
      isTransparent: p.transparent,
      extraNode: p.extraNode
    } : { activeContent: null, isTransparent: !1 };
  }, [i, s]), m = be(
    (p) => {
      const x = new URLSearchParams(window.location.search);
      e ? p && x.set("tab", p) : x.has("tab") && x.delete("tab");
      const b = Object.fromEntries(x.entries()), f = Gu.stringify(b, { addQueryPrefix: !0, encode: !1 });
      n({ search: f });
    },
    [n, e]
  );
  return oe(() => {
    if (!o || !e) return;
    const p = Object.fromEntries(o.entries()) ?? {};
    "tab" in p && s.find((x) => x.tab === p.tab) && a(p.tab);
  }, [s, e, o]), /* @__PURE__ */ B(T, { vertical: !1, className: "p-6", flex: 1, align: "flex-start", gap: 24, children: [
    /* @__PURE__ */ l(T, { className: "h-full max-w-[200px]", vertical: !0, flex: 1, gap: 16, children: s.map(({ tab: p, title: x }) => /* @__PURE__ */ l(
      T,
      {
        className: W(
          "cursor-pointer rounded-bl rounded-tl border-r-[3px] border-transparent px-[22px]  py-2",
          p === i && "bg-white-ff border-secondary  shadow-[0_1px_2px_0_rgba(67,88,121,0.26)]"
        ),
        onClick: () => {
          a(p), m(p);
        },
        children: /* @__PURE__ */ l(
          X,
          {
            size: 16,
            color: A[p === i ? "secondary" : "primary"],
            weight: p === i ? "bold" : "normal",
            children: x
          }
        )
      },
      p
    )) }),
    /* @__PURE__ */ B(T, { vertical: !0, flex: 1, className: "h-full", children: [
      Ca(u) && u,
      /* @__PURE__ */ l(
        Ia,
        {
          className: W(
            "small-custom-scrollbar h-fit overflow-y-hidden shadow-[0_3px_6px_0_rgba(67,88,121,0.16)]",
            c && "bg-transparent p-0 !shadow-none",
            d
          ),
          children: h
        }
      )
    ] })
  ] });
};
Ku.Tab = Yu;
export {
  Ua as Accordion,
  df as ActionHeader,
  pf as AudioVisualizer,
  hf as AvatarUpload,
  Ef as Box,
  Rf as Button,
  gf as Catch,
  mf as ChevronIcon,
  yf as CopyButton,
  Ci as Input,
  vf as InputDatePicker,
  at as InputErrorMessage,
  bf as InputRangePicker,
  Of as InputTimePicker,
  wf as NotResult,
  _f as Select,
  In as SelectClearIcon,
  cr as SelectLabel,
  Pn as SelectNotFound,
  kn as SelectPlaceholder,
  ur as SelectSuffix,
  Sf as SortableList,
  Cf as Spliter,
  Ln as Tag,
  Nf as TagInput,
  Af as Tree,
  Ku as VerticalTabs,
  If as buttonDefaultClasses,
  Pf as fontSizePicker,
  kf as paddingPicker,
  xf as useNotification
};
