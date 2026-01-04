import * as a from "react";
import J, { useRef as me, useMemo as mn, useEffect as St, useState as mt, useContext as tn } from "react";
import { aV as Ar, E as H, a$ as ve, a_ as ct, p as Kt, _ as ge, G as ne, d as bn, cp as vn, bY as Zo, cq as er, b1 as le, bI as Fr, cc as Wr, g as nn, u as oe, cr as Gr, m as Ct, r as Ut, s as Qo, f as Sn, bj as Jo, b0 as K, b2 as tt, ba as ko, aX as lt, cs as ea, b3 as bt, by as ta, bd as At, k as Tt, bf as jn, bb as Nt, bg as na, bh as ra, aW as tr, bP as oa, bi as Hn, b4 as aa, t as an, b9 as nr, c as vt, bX as Cn, ay as Ot, C as zt, bE as ia, ct as la, cu as ca, o as rr, bm as or, bo as sa, bn as ua, bq as da, bp as fa, q as gn, c7 as Xr, bl as Kr, I as rn, h as yn, bz as ma, cn as va, R as Ur, bV as ga, cv as pa, bA as Yr, j as cn, F as ha, l as qr, D as ba, bG as Vn, n as ln, bH as Sa, ce as Ca, b as ya, P as wa, cb as xa, cw as Ea, cx as ar, cy as $a, cz as ir, v as Ia, cA as Zr, bD as lr, bO as Ra, c8 as Na, cl as Oa, cf as cr, bC as Ma, A as Pa, w as Qr, L as Ta } from "./index-BP9D5tMR.js";
import sr, { flushSync as ur } from "react-dom";
import { jsx as Ft, jsxs as za } from "react/jsx-runtime";
import { twMerge as wn } from "tailwind-merge";
var Jr = /* @__PURE__ */ a.createContext({});
function dr(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function fr(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function _a(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += fr(o), n.top += fr(o, !0), n;
}
const Da = /* @__PURE__ */ a.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var mr = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, La = {
  outline: "none"
}, kr = /* @__PURE__ */ J.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, i = e.title, l = e.ariaId, c = e.footer, s = e.closable, f = e.closeIcon, m = e.onClose, d = e.children, g = e.bodyStyle, u = e.bodyProps, p = e.modalRender, h = e.onMouseDown, C = e.onMouseUp, v = e.holderRef, b = e.visible, x = e.forceRender, w = e.width, S = e.height, $ = e.classNames, y = e.styles, E = J.useContext(Jr), T = E.panel, N = Ar(v, T), O = me(), M = me(), P = me();
  J.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var V;
        (V = P.current) === null || V === void 0 || V.focus({
          preventScroll: !0
        });
      },
      changeActive: function(V) {
        var te = document, re = te.activeElement;
        V && re === M.current ? O.current.focus({
          preventScroll: !0
        }) : !V && re === O.current && M.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var R = {};
  w !== void 0 && (R.width = w), S !== void 0 && (R.height = S);
  var I = c ? /* @__PURE__ */ J.createElement("div", {
    className: ve("".concat(n, "-footer"), $?.footer),
    style: H({}, y?.footer)
  }, c) : null, _ = i ? /* @__PURE__ */ J.createElement("div", {
    className: ve("".concat(n, "-header"), $?.header),
    style: H({}, y?.header)
  }, /* @__PURE__ */ J.createElement("div", {
    className: "".concat(n, "-title"),
    id: l
  }, i)) : null, D = mn(function() {
    return ct(s) === "object" && s !== null ? s : s ? {
      closeIcon: f ?? /* @__PURE__ */ J.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [s, f, n]), z = Kt(D, !0), F = ct(s) === "object" && s.disabled, W = s ? /* @__PURE__ */ J.createElement("button", ge({
    type: "button",
    onClick: m,
    "aria-label": "Close"
  }, z, {
    className: "".concat(n, "-close"),
    disabled: F
  }), D.closeIcon) : null, ae = /* @__PURE__ */ J.createElement("div", {
    className: ve("".concat(n, "-content"), $?.content),
    style: y?.content
  }, W, _, /* @__PURE__ */ J.createElement("div", ge({
    className: ve("".concat(n, "-body"), $?.body),
    style: H(H({}, g), y?.body)
  }, u), d), I);
  return /* @__PURE__ */ J.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": i ? l : null,
    "aria-modal": "true",
    ref: N,
    style: H(H({}, o), R),
    className: ve(n, r),
    onMouseDown: h,
    onMouseUp: C
  }, /* @__PURE__ */ J.createElement("div", {
    tabIndex: 0,
    ref: O,
    style: mr,
    "aria-hidden": "true"
  }), /* @__PURE__ */ J.createElement("div", {
    ref: P,
    tabIndex: -1,
    style: La
  }, /* @__PURE__ */ J.createElement(Da, {
    shouldUpdate: b || x
  }, p ? p(ae) : ae)), /* @__PURE__ */ J.createElement("div", {
    tabIndex: 0,
    ref: M,
    style: mr,
    "aria-hidden": "true"
  }));
});
process.env.NODE_ENV !== "production" && (kr.displayName = "Panel");
var eo = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, o = e.style, i = e.className, l = e.visible, c = e.forceRender, s = e.destroyOnClose, f = e.motionName, m = e.ariaId, d = e.onVisibleChanged, g = e.mousePosition, u = me(), p = a.useState(), h = ne(p, 2), C = h[0], v = h[1], b = {};
  C && (b.transformOrigin = C);
  function x() {
    var w = _a(u.current);
    v(g && (g.x || g.y) ? "".concat(g.x - w.left, "px ").concat(g.y - w.top, "px") : "");
  }
  return /* @__PURE__ */ a.createElement(bn, {
    visible: l,
    onVisibleChanged: d,
    onAppearPrepare: x,
    onEnterPrepare: x,
    forceRender: c,
    motionName: f,
    removeOnLeave: s,
    ref: u
  }, function(w, S) {
    var $ = w.className, y = w.style;
    return /* @__PURE__ */ a.createElement(kr, ge({}, e, {
      ref: t,
      title: r,
      ariaId: m,
      prefixCls: n,
      holderRef: S,
      style: H(H(H({}, y), o), b),
      className: ve(i, $)
    }));
  });
});
eo.displayName = "Content";
var Ba = function(t) {
  var n = t.prefixCls, r = t.style, o = t.visible, i = t.maskProps, l = t.motionName, c = t.className;
  return /* @__PURE__ */ a.createElement(bn, {
    key: "mask",
    visible: o,
    motionName: l,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(s, f) {
    var m = s.className, d = s.style;
    return /* @__PURE__ */ a.createElement("div", ge({
      ref: f,
      style: H(H({}, d), r),
      className: ve("".concat(n, "-mask"), m, c)
    }, i));
  });
}, ja = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, o = t.zIndex, i = t.visible, l = i === void 0 ? !1 : i, c = t.keyboard, s = c === void 0 ? !0 : c, f = t.focusTriggerAfterClose, m = f === void 0 ? !0 : f, d = t.wrapStyle, g = t.wrapClassName, u = t.wrapProps, p = t.onClose, h = t.afterOpenChange, C = t.afterClose, v = t.transitionName, b = t.animation, x = t.closable, w = x === void 0 ? !0 : x, S = t.mask, $ = S === void 0 ? !0 : S, y = t.maskTransitionName, E = t.maskAnimation, T = t.maskClosable, N = T === void 0 ? !0 : T, O = t.maskStyle, M = t.maskProps, P = t.rootClassName, R = t.classNames, I = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(G) {
    vn(!(G in t), "".concat(G, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && vn(!1, "wrapClassName is deprecated, please use classNames instead."));
  var _ = me(), D = me(), z = me(), F = a.useState(l), W = ne(F, 2), ae = W[0], ce = W[1], V = Zo();
  function te() {
    er(D.current, document.activeElement) || (_.current = document.activeElement);
  }
  function re() {
    if (!er(D.current, document.activeElement)) {
      var G;
      (G = z.current) === null || G === void 0 || G.focus();
    }
  }
  function pe(G) {
    if (G)
      re();
    else {
      if (ce(!1), $ && _.current && m) {
        try {
          _.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        _.current = null;
      }
      ae && C?.();
    }
    h?.(G);
  }
  function X(G) {
    p?.(G);
  }
  var Y = me(!1), Q = me(), L = function() {
    clearTimeout(Q.current), Y.current = !0;
  }, j = function() {
    Q.current = setTimeout(function() {
      Y.current = !1;
    });
  }, B = null;
  N && (B = function(A) {
    Y.current ? Y.current = !1 : D.current === A.target && X(A);
  });
  function q(G) {
    if (s && G.keyCode === le.ESC) {
      G.stopPropagation(), X(G);
      return;
    }
    l && G.keyCode === le.TAB && z.current.changeActive(!G.shiftKey);
  }
  St(function() {
    l && (ce(!0), te());
  }, [l]), St(function() {
    return function() {
      clearTimeout(Q.current);
    };
  }, []);
  var U = H(H(H({
    zIndex: o
  }, d), I?.wrapper), {}, {
    display: ae ? null : "none"
  });
  return /* @__PURE__ */ a.createElement("div", ge({
    className: ve("".concat(r, "-root"), P)
  }, Kt(t, {
    data: !0
  })), /* @__PURE__ */ a.createElement(Ba, {
    prefixCls: r,
    visible: $ && l,
    motionName: dr(r, y, E),
    style: H(H({
      zIndex: o
    }, O), I?.mask),
    maskProps: M,
    className: R?.mask
  }), /* @__PURE__ */ a.createElement("div", ge({
    tabIndex: -1,
    onKeyDown: q,
    className: ve("".concat(r, "-wrap"), g, R?.wrapper),
    ref: D,
    onClick: B,
    style: U
  }, u), /* @__PURE__ */ a.createElement(eo, ge({}, t, {
    onMouseDown: L,
    onMouseUp: j,
    ref: z,
    closable: w,
    ariaId: V,
    prefixCls: r,
    visible: l && ae,
    onClose: X,
    onVisibleChanged: pe,
    motionName: dr(r, v, b)
  }))));
}, to = function(t) {
  var n = t.visible, r = t.getContainer, o = t.forceRender, i = t.destroyOnClose, l = i === void 0 ? !1 : i, c = t.afterClose, s = t.panelRef, f = a.useState(n), m = ne(f, 2), d = m[0], g = m[1], u = a.useMemo(function() {
    return {
      panel: s
    };
  }, [s]);
  return a.useEffect(function() {
    n && g(!0);
  }, [n]), !o && l && !d ? null : /* @__PURE__ */ a.createElement(Jr.Provider, {
    value: u
  }, /* @__PURE__ */ a.createElement(Fr, {
    open: n || o || d,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || d
  }, /* @__PURE__ */ a.createElement(ja, ge({}, t, {
    destroyOnClose: l,
    afterClose: function() {
      c?.(), g(!1);
    }
  }))));
};
to.displayName = "Dialog";
function vr(e) {
  return {
    position: e,
    inset: 0
  };
}
const no = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${t}${n}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: Object.assign(Object.assign({}, vr("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, vr("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: Wr(e)
  }];
}, Ha = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax}px)`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${oe(e.marginXS)} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: Object.assign(Object.assign({}, Ut(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${oe(e.calc(e.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.titleFontSize,
          lineHeight: e.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadow,
          pointerEvents: "auto",
          padding: e.contentPadding
        },
        [`${t}-close`]: Object.assign({
          position: "absolute",
          top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: e.modalCloseIconColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalCloseBtnSize,
          height: e.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${oe(e.modalCloseBtnSize)}`,
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalCloseIconHoverColor,
            backgroundColor: e.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.colorBgTextActive
          }
        }, Qo(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)} 0 0`,
          marginBottom: e.headerMarginBottom,
          padding: e.headerPadding,
          borderBottom: e.headerBorderBottom
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word",
          padding: e.bodyPadding,
          [`${t}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${oe(e.margin)} auto`
          }
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.footerBg,
          marginTop: e.footerMarginTop,
          padding: e.footerPadding,
          borderTop: e.footerBorderTop,
          borderRadius: e.footerBorderRadius,
          [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, Va = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, Aa = (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
  return Ct(e, {
    modalHeaderHeight: e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterBorderWidth: e.lineWidth,
    modalCloseIconColor: e.colorIcon,
    modalCloseIconHoverColor: e.colorIconHover,
    modalCloseBtnSize: e.controlHeight,
    modalConfirmIconSize: e.fontHeight,
    modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
  });
}, Fa = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${oe(e.paddingMD)} ${oe(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${oe(e.padding)} ${oe(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${oe(e.paddingXS)} ${oe(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${oe(e.borderRadiusLG)} ${oe(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${oe(e.padding * 2)} ${oe(e.padding * 2)} ${oe(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
});
nn("Modal", (e) => {
  const t = Aa(e);
  return [Ha(t), Va(t), no(t), Gr(t, "zoom")];
}, Fa, {
  unitless: {
    titleLineHeight: !0
  }
});
var xn = function(t) {
  var n = t.className, r = t.customizeIcon, o = t.customizeIconProps, i = t.children, l = t.onMouseDown, c = t.onClick, s = typeof r == "function" ? r(o) : r;
  return /* @__PURE__ */ a.createElement("span", {
    className: n,
    onMouseDown: function(m) {
      m.preventDefault(), l?.(m);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: c,
    "aria-hidden": !0
  }, s !== void 0 ? s : /* @__PURE__ */ a.createElement("span", {
    className: ve(n.split(/\s+/).map(function(f) {
      return "".concat(f, "-icon");
    }))
  }, i));
}, Wa = function(t, n, r, o, i) {
  var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, c = arguments.length > 6 ? arguments[6] : void 0, s = arguments.length > 7 ? arguments[7] : void 0, f = J.useMemo(function() {
    if (ct(o) === "object")
      return o.clearIcon;
    if (i)
      return i;
  }, [o, i]), m = J.useMemo(function() {
    return !!(!l && o && (r.length || c) && !(s === "combobox" && c === ""));
  }, [o, l, r.length, c, s]);
  return {
    allowClear: m,
    clearIcon: /* @__PURE__ */ J.createElement(xn, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: f
    }, "×")
  };
}, ro = /* @__PURE__ */ a.createContext(null);
function Ga() {
  return a.useContext(ro);
}
function Xa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = a.useState(!1), n = ne(t, 2), r = n[0], o = n[1], i = a.useRef(null), l = function() {
    window.clearTimeout(i.current);
  };
  a.useEffect(function() {
    return l;
  }, []);
  var c = function(f, m) {
    l(), i.current = window.setTimeout(function() {
      o(f), m && m();
    }, e);
  };
  return [r, c, l];
}
function oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = a.useRef(null), n = a.useRef(null);
  a.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(o) {
    (o || t.current === null) && (t.current = o), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function Ka(e, t, n, r) {
  var o = a.useRef(null);
  o.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, a.useEffect(function() {
    function i(l) {
      var c;
      if (!((c = o.current) !== null && c !== void 0 && c.customizedTrigger)) {
        var s = l.target;
        s.shadowRoot && l.composed && (s = l.composedPath()[0] || s), o.current.open && e().filter(function(f) {
          return f;
        }).every(function(f) {
          return !f.contains(s) && f !== s;
        }) && o.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", i), function() {
      return window.removeEventListener("mousedown", i);
    };
  }, []);
}
function Ua(e) {
  return ![
    // System function button
    le.ESC,
    le.SHIFT,
    le.BACKSPACE,
    le.TAB,
    le.WIN_KEY,
    le.ALT,
    le.META,
    le.WIN_KEY_RIGHT,
    le.CTRL,
    le.SEMICOLON,
    le.EQUALS,
    le.CAPS_LOCK,
    le.CONTEXT_MENU,
    // F1-F12
    le.F1,
    le.F2,
    le.F3,
    le.F4,
    le.F5,
    le.F6,
    le.F7,
    le.F8,
    le.F9,
    le.F10,
    le.F11,
    le.F12
  ].includes(e);
}
var Ya = function(t, n) {
  var r, o = t.prefixCls, i = t.id, l = t.inputElement, c = t.disabled, s = t.tabIndex, f = t.autoFocus, m = t.autoComplete, d = t.editable, g = t.activeDescendantId, u = t.value, p = t.maxLength, h = t.onKeyDown, C = t.onMouseDown, v = t.onChange, b = t.onPaste, x = t.onCompositionStart, w = t.onCompositionEnd, S = t.open, $ = t.attrs, y = l || /* @__PURE__ */ a.createElement("input", null), E = y, T = E.ref, N = E.props, O = N.onKeyDown, M = N.onChange, P = N.onMouseDown, R = N.onCompositionStart, I = N.onCompositionEnd, _ = N.style;
  return vn(!("maxLength" in y.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), y = /* @__PURE__ */ a.cloneElement(y, H(H(H({
    type: "search"
  }, N), {}, {
    // Override over origin props
    id: i,
    ref: Sn(n, T),
    disabled: c,
    tabIndex: s,
    autoComplete: m || "off",
    autoFocus: f,
    className: ve("".concat(o, "-selection-search-input"), (r = y) === null || r === void 0 || (r = r.props) === null || r === void 0 ? void 0 : r.className),
    role: "combobox",
    "aria-expanded": S || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(i, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(i, "_list"),
    "aria-activedescendant": S ? g : void 0
  }, $), {}, {
    value: d ? u : "",
    maxLength: p,
    readOnly: !d,
    unselectable: d ? null : "on",
    style: H(H({}, _), {}, {
      opacity: d ? null : 0
    }),
    onKeyDown: function(z) {
      h(z), O && O(z);
    },
    onMouseDown: function(z) {
      C(z), P && P(z);
    },
    onChange: function(z) {
      v(z), M && M(z);
    },
    onCompositionStart: function(z) {
      x(z), R && R(z);
    },
    onCompositionEnd: function(z) {
      w(z), I && I(z);
    },
    onPaste: b
  })), y;
}, An = /* @__PURE__ */ a.forwardRef(Ya);
process.env.NODE_ENV !== "production" && (An.displayName = "Input");
function Fn(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var qa = typeof window < "u" && window.document && window.document.documentElement, Za = process.env.NODE_ENV !== "test" && qa;
function Qa(e) {
  return e != null;
}
function Ja(e) {
  return !e && e !== 0;
}
function gr(e) {
  return ["string", "number"].includes(ct(e));
}
function ao(e) {
  var t = void 0;
  return e && (gr(e.title) ? t = e.title.toString() : gr(e.label) && (t = e.label.toString())), t;
}
function ka(e, t) {
  Za ? a.useLayoutEffect(e, t) : a.useEffect(e, t);
}
function ei(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var pr = function(t) {
  t.preventDefault(), t.stopPropagation();
}, ti = function(t) {
  var n = t.id, r = t.prefixCls, o = t.values, i = t.open, l = t.searchValue, c = t.autoClearSearchValue, s = t.inputRef, f = t.placeholder, m = t.disabled, d = t.mode, g = t.showSearch, u = t.autoFocus, p = t.autoComplete, h = t.activeDescendantId, C = t.tabIndex, v = t.removeIcon, b = t.maxTagCount, x = t.maxTagTextLength, w = t.maxTagPlaceholder, S = w === void 0 ? function(q) {
    return "+ ".concat(q.length, " ...");
  } : w, $ = t.tagRender, y = t.onToggleOpen, E = t.onRemove, T = t.onInputChange, N = t.onInputPaste, O = t.onInputKeyDown, M = t.onInputMouseDown, P = t.onInputCompositionStart, R = t.onInputCompositionEnd, I = a.useRef(null), _ = mt(0), D = ne(_, 2), z = D[0], F = D[1], W = mt(!1), ae = ne(W, 2), ce = ae[0], V = ae[1], te = "".concat(r, "-selection"), re = i || d === "multiple" && c === !1 || d === "tags" ? l : "", pe = d === "tags" || d === "multiple" && c === !1 || g && (i || ce);
  ka(function() {
    F(I.current.scrollWidth);
  }, [re]);
  var X = function(U, G, A, we, fe) {
    return /* @__PURE__ */ a.createElement("span", {
      title: ao(U),
      className: ve("".concat(te, "-item"), K({}, "".concat(te, "-item-disabled"), A))
    }, /* @__PURE__ */ a.createElement("span", {
      className: "".concat(te, "-item-content")
    }, G), we && /* @__PURE__ */ a.createElement(xn, {
      className: "".concat(te, "-item-remove"),
      onMouseDown: pr,
      onClick: fe,
      customizeIcon: v
    }, "×"));
  }, Y = function(U, G, A, we, fe, be) {
    var ye = function(Oe) {
      pr(Oe), y(!i);
    };
    return /* @__PURE__ */ a.createElement("span", {
      onMouseDown: ye
    }, $({
      label: G,
      value: U,
      disabled: A,
      closable: we,
      onClose: fe,
      isMaxTag: !!be
    }));
  }, Q = function(U) {
    var G = U.disabled, A = U.label, we = U.value, fe = !m && !G, be = A;
    if (typeof x == "number" && (typeof A == "string" || typeof A == "number")) {
      var ye = String(be);
      ye.length > x && (be = "".concat(ye.slice(0, x), "..."));
    }
    var Pe = function(Ie) {
      Ie && Ie.stopPropagation(), E(U);
    };
    return typeof $ == "function" ? Y(we, be, G, fe, Pe) : X(U, be, G, fe, Pe);
  }, L = function(U) {
    var G = typeof S == "function" ? S(U) : S;
    return typeof $ == "function" ? Y(void 0, G, !1, !1, void 0, !0) : X({
      title: G
    }, G, !1);
  }, j = /* @__PURE__ */ a.createElement("div", {
    className: "".concat(te, "-search"),
    style: {
      width: z
    },
    onFocus: function() {
      V(!0);
    },
    onBlur: function() {
      V(!1);
    }
  }, /* @__PURE__ */ a.createElement(An, {
    ref: s,
    open: i,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: m,
    autoFocus: u,
    autoComplete: p,
    editable: pe,
    activeDescendantId: h,
    value: re,
    onKeyDown: O,
    onMouseDown: M,
    onChange: T,
    onPaste: N,
    onCompositionStart: P,
    onCompositionEnd: R,
    tabIndex: C,
    attrs: Kt(t, !0)
  }), /* @__PURE__ */ a.createElement("span", {
    ref: I,
    className: "".concat(te, "-search-mirror"),
    "aria-hidden": !0
  }, re, " ")), B = /* @__PURE__ */ a.createElement(Jo, {
    prefixCls: "".concat(te, "-overflow"),
    data: o,
    renderItem: Q,
    renderRest: L,
    suffix: j,
    itemKey: ei,
    maxCount: b
  });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, B, !o.length && !re && /* @__PURE__ */ a.createElement("span", {
    className: "".concat(te, "-placeholder")
  }, f));
}, ni = function(t) {
  var n = t.inputElement, r = t.prefixCls, o = t.id, i = t.inputRef, l = t.disabled, c = t.autoFocus, s = t.autoComplete, f = t.activeDescendantId, m = t.mode, d = t.open, g = t.values, u = t.placeholder, p = t.tabIndex, h = t.showSearch, C = t.searchValue, v = t.activeValue, b = t.maxLength, x = t.onInputKeyDown, w = t.onInputMouseDown, S = t.onInputChange, $ = t.onInputPaste, y = t.onInputCompositionStart, E = t.onInputCompositionEnd, T = t.title, N = a.useState(!1), O = ne(N, 2), M = O[0], P = O[1], R = m === "combobox", I = R || h, _ = g[0], D = C || "";
  R && v && !M && (D = v), a.useEffect(function() {
    R && P(!1);
  }, [R, v]);
  var z = m !== "combobox" && !d && !h ? !1 : !!D, F = T === void 0 ? ao(_) : T, W = a.useMemo(function() {
    return _ ? null : /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: z ? {
        visibility: "hidden"
      } : void 0
    }, u);
  }, [_, z, u, r]);
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ a.createElement(An, {
    ref: i,
    prefixCls: r,
    id: o,
    open: d,
    inputElement: n,
    disabled: l,
    autoFocus: c,
    autoComplete: s,
    editable: I,
    activeDescendantId: f,
    value: D,
    onKeyDown: x,
    onMouseDown: w,
    onChange: function(ce) {
      P(!0), S(ce);
    },
    onPaste: $,
    onCompositionStart: y,
    onCompositionEnd: E,
    tabIndex: p,
    attrs: Kt(t, !0),
    maxLength: R ? b : void 0
  })), !R && _ ? /* @__PURE__ */ a.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: F,
    style: z ? {
      visibility: "hidden"
    } : void 0
  }, _.label) : null, W);
}, ri = function(t, n) {
  var r = me(null), o = me(!1), i = t.prefixCls, l = t.open, c = t.mode, s = t.showSearch, f = t.tokenWithEnter, m = t.disabled, d = t.autoClearSearchValue, g = t.onSearch, u = t.onSearchSubmit, p = t.onToggleOpen, h = t.onInputKeyDown, C = t.domRef;
  a.useImperativeHandle(n, function() {
    return {
      focus: function(z) {
        r.current.focus(z);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var v = oo(0), b = ne(v, 2), x = b[0], w = b[1], S = function(z) {
    var F = z.which;
    (F === le.UP || F === le.DOWN) && z.preventDefault(), h && h(z), F === le.ENTER && c === "tags" && !o.current && !l && u?.(z.target.value), Ua(F) && p(!0);
  }, $ = function() {
    w(!0);
  }, y = me(null), E = function(z) {
    g(z, !0, o.current) !== !1 && p(!0);
  }, T = function() {
    o.current = !0;
  }, N = function(z) {
    o.current = !1, c !== "combobox" && E(z.target.value);
  }, O = function(z) {
    var F = z.target.value;
    if (f && y.current && /[\r\n]/.test(y.current)) {
      var W = y.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      F = F.replace(W, y.current);
    }
    y.current = null, E(F);
  }, M = function(z) {
    var F = z.clipboardData, W = F?.getData("text");
    y.current = W || "";
  }, P = function(z) {
    var F = z.target;
    if (F !== r.current) {
      var W = document.body.style.msTouchAction !== void 0;
      W ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, R = function(z) {
    var F = x();
    z.target !== r.current && !F && !(c === "combobox" && m) && z.preventDefault(), (c !== "combobox" && (!s || !F) || !l) && (l && d !== !1 && g("", !0, !1), p());
  }, I = {
    inputRef: r,
    onInputKeyDown: S,
    onInputMouseDown: $,
    onInputChange: O,
    onInputPaste: M,
    onInputCompositionStart: T,
    onInputCompositionEnd: N
  }, _ = c === "multiple" || c === "tags" ? /* @__PURE__ */ a.createElement(ti, ge({}, t, I)) : /* @__PURE__ */ a.createElement(ni, ge({}, t, I));
  return /* @__PURE__ */ a.createElement("div", {
    ref: C,
    className: "".concat(i, "-selector"),
    onClick: P,
    onMouseDown: R
  }, _);
}, io = /* @__PURE__ */ a.forwardRef(ri);
process.env.NODE_ENV !== "production" && (io.displayName = "Selector");
var oi = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], ai = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, ii = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, l = t.popupElement, c = t.animation, s = t.transitionName, f = t.dropdownStyle, m = t.dropdownClassName, d = t.direction, g = d === void 0 ? "ltr" : d, u = t.placement, p = t.builtinPlacements, h = t.dropdownMatchSelectWidth, C = t.dropdownRender, v = t.dropdownAlign, b = t.getPopupContainer, x = t.empty, w = t.getTriggerDOMNode, S = t.onPopupVisibleChange, $ = t.onPopupMouseEnter, y = tt(t, oi), E = "".concat(r, "-dropdown"), T = l;
  C && (T = C(l));
  var N = a.useMemo(function() {
    return p || ai(h);
  }, [p, h]), O = c ? "".concat(E, "-").concat(c) : s, M = typeof h == "number", P = a.useMemo(function() {
    return M ? null : h === !1 ? "minWidth" : "width";
  }, [h, M]), R = f;
  M && (R = H(H({}, R), {}, {
    width: h
  }));
  var I = a.useRef(null);
  return a.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var D;
        return (D = I.current) === null || D === void 0 ? void 0 : D.popupElement;
      }
    };
  }), /* @__PURE__ */ a.createElement(ko, ge({}, y, {
    showAction: S ? ["click"] : [],
    hideAction: S ? ["click"] : [],
    popupPlacement: u || (g === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: N,
    prefixCls: E,
    popupTransitionName: O,
    popup: /* @__PURE__ */ a.createElement("div", {
      onMouseEnter: $
    }, T),
    ref: I,
    stretch: P,
    popupAlign: v,
    popupVisible: o,
    getPopupContainer: b,
    popupClassName: ve(m, K({}, "".concat(E, "-empty"), x)),
    popupStyle: R,
    getTriggerDOMNode: w,
    onPopupVisibleChange: S
  }), i);
}, lo = /* @__PURE__ */ a.forwardRef(ii);
process.env.NODE_ENV !== "production" && (lo.displayName = "SelectTrigger");
function hr(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Mn(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function co(e, t) {
  var n = e || {}, r = n.label, o = n.value, i = n.options, l = n.groupLabel, c = r || (t ? "children" : "label");
  return {
    label: c,
    value: o || "value",
    options: i || "options",
    groupLabel: l || c
  };
}
function li(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, o = [], i = co(n, !1), l = i.label, c = i.value, s = i.options, f = i.groupLabel;
  function m(d, g) {
    Array.isArray(d) && d.forEach(function(u) {
      if (g || !(s in u)) {
        var p = u[c];
        o.push({
          key: hr(u, o.length),
          groupOption: g,
          data: u,
          label: u[l],
          value: p
        });
      } else {
        var h = u[f];
        h === void 0 && r && (h = u.label), o.push({
          key: hr(u, o.length),
          group: !0,
          data: u,
          label: h
        }), m(u[s], !0);
      }
    });
  }
  return m(e, !1), o;
}
function Pn(e) {
  var t = H({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return lt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var ci = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var o = !1, i = function c(s, f) {
    var m = ea(f), d = m[0], g = m.slice(1);
    if (!d)
      return [s];
    var u = s.split(d);
    return o = o || u.length > 1, u.reduce(function(p, h) {
      return [].concat(bt(p), bt(c(h, g)));
    }, []).filter(Boolean);
  }, l = i(t, n);
  return o ? typeof r < "u" ? l.slice(0, r) : l : null;
}, Wn = /* @__PURE__ */ a.createContext(null);
function si(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ a.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(o) {
    var i = o.label, l = o.value;
    return ["number", "string"].includes(ct(i)) ? i : l;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var ui = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], di = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], pn = function(t) {
  return t === "tags" || t === "multiple";
}, so = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n, r = e.id, o = e.prefixCls, i = e.className, l = e.showSearch, c = e.tagRender, s = e.direction, f = e.omitDomProps, m = e.displayValues, d = e.onDisplayValuesChange, g = e.emptyOptions, u = e.notFoundContent, p = u === void 0 ? "Not Found" : u, h = e.onClear, C = e.mode, v = e.disabled, b = e.loading, x = e.getInputElement, w = e.getRawInputElement, S = e.open, $ = e.defaultOpen, y = e.onDropdownVisibleChange, E = e.activeValue, T = e.onActiveValueChange, N = e.activeDescendantId, O = e.searchValue, M = e.autoClearSearchValue, P = e.onSearch, R = e.onSearchSplit, I = e.tokenSeparators, _ = e.allowClear, D = e.suffixIcon, z = e.clearIcon, F = e.OptionList, W = e.animation, ae = e.transitionName, ce = e.dropdownStyle, V = e.dropdownClassName, te = e.dropdownMatchSelectWidth, re = e.dropdownRender, pe = e.dropdownAlign, X = e.placement, Y = e.builtinPlacements, Q = e.getPopupContainer, L = e.showAction, j = L === void 0 ? [] : L, B = e.onFocus, q = e.onBlur, U = e.onKeyUp, G = e.onKeyDown, A = e.onMouseDown, we = tt(e, ui), fe = pn(C), be = (l !== void 0 ? l : fe) || C === "combobox", ye = H({}, we);
  di.forEach(function(Re) {
    delete ye[Re];
  }), f?.forEach(function(Re) {
    delete ye[Re];
  });
  var Pe = a.useState(!1), Oe = ne(Pe, 2), Ie = Oe[0], xe = Oe[1];
  a.useEffect(function() {
    xe(ta());
  }, []);
  var Xe = a.useRef(null), _e = a.useRef(null), Me = a.useRef(null), Ee = a.useRef(null), De = a.useRef(null), Te = a.useRef(!1), Ve = Xa(), Ye = ne(Ve, 3), ke = Ye[0], Le = Ye[1], je = Ye[2];
  a.useImperativeHandle(t, function() {
    var Re, Se;
    return {
      focus: (Re = Ee.current) === null || Re === void 0 ? void 0 : Re.focus,
      blur: (Se = Ee.current) === null || Se === void 0 ? void 0 : Se.blur,
      scrollTo: function(ft) {
        var Je;
        return (Je = De.current) === null || Je === void 0 ? void 0 : Je.scrollTo(ft);
      },
      nativeElement: Xe.current || _e.current
    };
  });
  var qe = a.useMemo(function() {
    var Re;
    if (C !== "combobox")
      return O;
    var Se = (Re = m[0]) === null || Re === void 0 ? void 0 : Re.value;
    return typeof Se == "string" || typeof Se == "number" ? String(Se) : "";
  }, [O, C, m]), Fe = C === "combobox" && typeof x == "function" && x() || null, We = typeof w == "function" && w(), ot = Ar(_e, We == null || (n = We.props) === null || n === void 0 ? void 0 : n.ref), Ke = a.useState(!1), ze = ne(Ke, 2), gt = ze[0], _t = ze[1];
  At(function() {
    _t(!0);
  }, []);
  var jt = Tt(!1, {
    defaultValue: $,
    value: S
  }), yt = ne(jt, 2), st = yt[0], xt = yt[1], Ae = gt ? st : !1, Et = !p && g;
  (v || Et && Ae && C === "combobox") && (Ae = !1);
  var pt = Et ? !1 : Ae, et = a.useCallback(function(Re) {
    var Se = Re !== void 0 ? Re : !Ae;
    v || (xt(Se), Ae !== Se && y?.(Se));
  }, [v, Ae, xt, y]), se = a.useMemo(function() {
    return (I || []).some(function(Re) {
      return [`
`, `\r
`].includes(Re);
    });
  }, [I]), ue = a.useContext(Wn) || {}, Z = ue.maxCount, ee = ue.rawValues, Ce = function(Se, dt, ft) {
    if (!(fe && Mn(Z) && ee?.size >= Z)) {
      var Je = !0, rt = Se;
      T?.(null);
      var Bt = ci(Se, I, Mn(Z) ? Z - ee.size : void 0), Pt = ft ? null : Bt;
      return C !== "combobox" && Pt && (rt = "", R?.(Pt), et(!1), Je = !1), P && qe !== rt && P(rt, {
        source: dt ? "typing" : "effect"
      }), Je;
    }
  }, He = function(Se) {
    !Se || !Se.trim() || P(Se, {
      source: "submit"
    });
  };
  a.useEffect(function() {
    !Ae && !fe && C !== "combobox" && Ce("", !1, !1);
  }, [Ae]), a.useEffect(function() {
    st && v && xt(!1), v && !Te.current && Le(!1);
  }, [v]);
  var ut = oo(), Ze = ne(ut, 2), wt = Ze[0], Be = Ze[1], nt = a.useRef(!1), Qe = function(Se) {
    var dt = wt(), ft = Se.key, Je = ft === "Enter";
    if (Je && (C !== "combobox" && Se.preventDefault(), Ae || et(!0)), Be(!!qe), ft === "Backspace" && !dt && fe && !qe && m.length) {
      for (var rt = bt(m), Bt = null, Pt = rt.length - 1; Pt >= 0; Pt -= 1) {
        var Wt = rt[Pt];
        if (!Wt.disabled) {
          rt.splice(Pt, 1), Bt = Wt;
          break;
        }
      }
      Bt && d(rt, {
        type: "remove",
        values: [Bt]
      });
    }
    for (var Zt = arguments.length, Gt = new Array(Zt > 1 ? Zt - 1 : 0), un = 1; un < Zt; un++)
      Gt[un - 1] = arguments[un];
    if (Ae && (!Je || !nt.current)) {
      var dn;
      (dn = De.current) === null || dn === void 0 || dn.onKeyDown.apply(dn, [Se].concat(Gt));
    }
    Je && (nt.current = !0), G?.apply(void 0, [Se].concat(Gt));
  }, $t = function(Se) {
    for (var dt = arguments.length, ft = new Array(dt > 1 ? dt - 1 : 0), Je = 1; Je < dt; Je++)
      ft[Je - 1] = arguments[Je];
    if (Ae) {
      var rt;
      (rt = De.current) === null || rt === void 0 || rt.onKeyUp.apply(rt, [Se].concat(ft));
    }
    Se.key === "Enter" && (nt.current = !1), U?.apply(void 0, [Se].concat(ft));
  }, Yt = function(Se) {
    var dt = m.filter(function(ft) {
      return ft !== Se;
    });
    d(dt, {
      type: "remove",
      values: [Se]
    });
  }, at = a.useRef(!1), it = function() {
    Le(!0), v || (B && !at.current && B.apply(void 0, arguments), j.includes("focus") && et(!0)), at.current = !0;
  }, ie = function() {
    Te.current = !0, Le(!1, function() {
      at.current = !1, Te.current = !1, et(!1);
    }), !v && (qe && (C === "tags" ? P(qe, {
      source: "submit"
    }) : C === "multiple" && P("", {
      source: "blur"
    })), q && q.apply(void 0, arguments));
  }, k = [];
  a.useEffect(function() {
    return function() {
      k.forEach(function(Re) {
        return clearTimeout(Re);
      }), k.splice(0, k.length);
    };
  }, []);
  var he = function(Se) {
    var dt, ft = Se.target, Je = (dt = Me.current) === null || dt === void 0 ? void 0 : dt.getPopupElement();
    if (Je && Je.contains(ft)) {
      var rt = setTimeout(function() {
        var Zt = k.indexOf(rt);
        if (Zt !== -1 && k.splice(Zt, 1), je(), !Ie && !Je.contains(document.activeElement)) {
          var Gt;
          (Gt = Ee.current) === null || Gt === void 0 || Gt.focus();
        }
      });
      k.push(rt);
    }
    for (var Bt = arguments.length, Pt = new Array(Bt > 1 ? Bt - 1 : 0), Wt = 1; Wt < Bt; Wt++)
      Pt[Wt - 1] = arguments[Wt];
    A?.apply(void 0, [Se].concat(Pt));
  }, Ne = a.useState({}), Ue = ne(Ne, 2), It = Ue[1];
  function ht() {
    It({});
  }
  var Rt;
  We && (Rt = function(Se) {
    et(Se);
  }), Ka(function() {
    var Re;
    return [Xe.current, (Re = Me.current) === null || Re === void 0 ? void 0 : Re.getPopupElement()];
  }, pt, et, !!We);
  var Dt = a.useMemo(function() {
    return H(H({}, e), {}, {
      notFoundContent: p,
      open: Ae,
      triggerOpen: pt,
      id: r,
      showSearch: be,
      multiple: fe,
      toggleOpen: et
    });
  }, [e, p, pt, Ae, r, be, fe, et]), Lt = !!D || b, Ht;
  Lt && (Ht = /* @__PURE__ */ a.createElement(xn, {
    className: ve("".concat(o, "-arrow"), K({}, "".concat(o, "-arrow-loading"), b)),
    customizeIcon: D,
    customizeIconProps: {
      loading: b,
      searchValue: qe,
      open: Ae,
      focused: ke,
      showSearch: be
    }
  }));
  var de = function() {
    var Se;
    h?.(), (Se = Ee.current) === null || Se === void 0 || Se.focus(), d([], {
      type: "clear",
      values: m
    }), Ce("", !1, !1);
  }, $e = Wa(o, de, m, _, z, v, qe, C), Ge = $e.allowClear, Mt = $e.clearIcon, qt = /* @__PURE__ */ a.createElement(F, {
    ref: De
  }), qo = ve(o, i, K(K(K(K(K(K(K(K(K(K({}, "".concat(o, "-focused"), ke), "".concat(o, "-multiple"), fe), "".concat(o, "-single"), !fe), "".concat(o, "-allow-clear"), _), "".concat(o, "-show-arrow"), Lt), "".concat(o, "-disabled"), v), "".concat(o, "-loading"), b), "".concat(o, "-open"), Ae), "".concat(o, "-customize-input"), Fe), "".concat(o, "-show-search"), be)), kn = /* @__PURE__ */ a.createElement(lo, {
    ref: Me,
    disabled: v,
    prefixCls: o,
    visible: pt,
    popupElement: qt,
    animation: W,
    transitionName: ae,
    dropdownStyle: ce,
    dropdownClassName: V,
    direction: s,
    dropdownMatchSelectWidth: te,
    dropdownRender: re,
    dropdownAlign: pe,
    placement: X,
    builtinPlacements: Y,
    getPopupContainer: Q,
    empty: g,
    getTriggerDOMNode: function(Se) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        _e.current || Se
      );
    },
    onPopupVisibleChange: Rt,
    onPopupMouseEnter: ht
  }, We ? /* @__PURE__ */ a.cloneElement(We, {
    ref: ot
  }) : /* @__PURE__ */ a.createElement(io, ge({}, e, {
    domRef: _e,
    prefixCls: o,
    inputElement: Fe,
    ref: Ee,
    id: r,
    showSearch: be,
    autoClearSearchValue: M,
    mode: C,
    activeDescendantId: N,
    tagRender: c,
    values: m,
    open: Ae,
    onToggleOpen: et,
    activeValue: E,
    searchValue: qe,
    onSearch: Ce,
    onSearchSubmit: He,
    onRemove: Yt,
    tokenWithEnter: se
  }))), $n;
  return We ? $n = kn : $n = /* @__PURE__ */ a.createElement("div", ge({
    className: qo
  }, ye, {
    ref: Xe,
    onMouseDown: he,
    onKeyDown: Qe,
    onKeyUp: $t,
    onFocus: it,
    onBlur: ie
  }), /* @__PURE__ */ a.createElement(si, {
    visible: ke && !Ae,
    values: m
  }), kn, Ht, Ge && Mt), /* @__PURE__ */ a.createElement(ro.Provider, {
    value: Dt
  }, $n);
});
process.env.NODE_ENV !== "production" && (so.displayName = "BaseSelect");
var Gn = function() {
  return null;
};
Gn.isSelectOptGroup = !0;
var Xn = function() {
  return null;
};
Xn.isSelectOption = !0;
var uo = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, o = e.offsetX, i = e.children, l = e.prefixCls, c = e.onInnerResize, s = e.innerProps, f = e.rtl, m = e.extra, d = {}, g = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (d = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, g = H(H({}, g), {}, K(K(K(K(K({
    transform: "translateY(".concat(r, "px)")
  }, f ? "marginRight" : "marginLeft", -o), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ a.createElement("div", {
    style: d
  }, /* @__PURE__ */ a.createElement(jn, {
    onResize: function(p) {
      var h = p.offsetHeight;
      h && c && c();
    }
  }, /* @__PURE__ */ a.createElement("div", ge({
    style: g,
    className: ve(K({}, "".concat(l, "-holder-inner"), l)),
    ref: t
  }, s), i, m)));
});
uo.displayName = "Filler";
function fi(e) {
  var t = e.children, n = e.setRef, r = a.useCallback(function(o) {
    n(o);
  }, []);
  return /* @__PURE__ */ a.cloneElement(t, {
    ref: r
  });
}
function mi(e, t, n, r, o, i, l, c) {
  var s = c.getKey;
  return e.slice(t, n + 1).map(function(f, m) {
    var d = t + m, g = l(f, d, {
      style: {
        width: r
      },
      offsetX: o
    }), u = s(f);
    return /* @__PURE__ */ a.createElement(fi, {
      key: u,
      setRef: function(h) {
        return i(f, h);
      }
    }, g);
  });
}
function vi(e, t, n) {
  var r = e.length, o = t.length, i, l;
  if (r === 0 && o === 0)
    return null;
  r < o ? (i = e, l = t) : (i = t, l = e);
  var c = {
    __EMPTY_ITEM__: !0
  };
  function s(p) {
    return p !== void 0 ? n(p) : c;
  }
  for (var f = null, m = Math.abs(r - o) !== 1, d = 0; d < l.length; d += 1) {
    var g = s(i[d]), u = s(l[d]);
    if (g !== u) {
      f = d, m = m || g !== s(l[d + 1]);
      break;
    }
  }
  return f === null ? null : {
    index: f,
    multiple: m
  };
}
function gi(e, t, n) {
  var r = a.useState(e), o = ne(r, 2), i = o[0], l = o[1], c = a.useState(null), s = ne(c, 2), f = s[0], m = s[1];
  return a.useEffect(function() {
    var d = vi(i || [], e || [], t);
    d?.index !== void 0 && m(e[d.index]), l(e);
  }, [e]), [f];
}
var br = (typeof navigator > "u" ? "undefined" : ct(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const fo = (function(e, t, n, r) {
  var o = me(!1), i = me(null);
  function l() {
    clearTimeout(i.current), o.current = !0, i.current = setTimeout(function() {
      o.current = !1;
    }, 50);
  }
  var c = me({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return c.current.top = e, c.current.bottom = t, c.current.left = n, c.current.right = r, function(s, f) {
    var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, d = s ? (
      // Pass origin wheel when on the left
      f < 0 && c.current.left || // Pass origin wheel when on the right
      f > 0 && c.current.right
    ) : f < 0 && c.current.top || // Pass origin wheel when on the bottom
    f > 0 && c.current.bottom;
    return m && d ? (clearTimeout(i.current), o.current = !1) : (!d || o.current) && l(), !o.current && d;
  };
});
function pi(e, t, n, r, o, i, l) {
  var c = me(0), s = me(null), f = me(null), m = me(!1), d = fo(t, n, r, o);
  function g(b, x) {
    if (Nt.cancel(s.current), !d(!1, x)) {
      var w = b;
      if (!w._virtualHandled)
        w._virtualHandled = !0;
      else
        return;
      c.current += x, f.current = x, br || w.preventDefault(), s.current = Nt(function() {
        var S = m.current ? 10 : 1;
        l(c.current * S, !1), c.current = 0;
      });
    }
  }
  function u(b, x) {
    l(x, !0), br || b.preventDefault();
  }
  var p = me(null), h = me(null);
  function C(b) {
    if (e) {
      Nt.cancel(h.current), h.current = Nt(function() {
        p.current = null;
      }, 2);
      var x = b.deltaX, w = b.deltaY, S = b.shiftKey, $ = x, y = w;
      (p.current === "sx" || !p.current && S && w && !x) && ($ = w, y = 0, p.current = "sx");
      var E = Math.abs($), T = Math.abs(y);
      p.current === null && (p.current = i && E > T ? "x" : "y"), p.current === "y" ? g(b, y) : u(b, $);
    }
  }
  function v(b) {
    e && (m.current = b.detail === f.current);
  }
  return [C, v];
}
function hi(e, t, n, r) {
  var o = a.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), i = ne(o, 2), l = i[0], c = i[1], s = function(m) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m, g = l.get(m), u = l.get(d);
    if (g === void 0 || u === void 0)
      for (var p = e.length, h = c.length; h < p; h += 1) {
        var C, v = e[h], b = t(v);
        l.set(b, h);
        var x = (C = n.get(b)) !== null && C !== void 0 ? C : r;
        if (c[h] = (c[h - 1] || 0) + x, b === m && (g = h), b === d && (u = h), g !== void 0 && u !== void 0)
          break;
      }
    return {
      top: c[g - 1] || 0,
      bottom: c[u]
    };
  };
  return s;
}
var bi = /* @__PURE__ */ (function() {
  function e() {
    ra(this, e), K(this, "maps", void 0), K(this, "id", 0), K(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return na(e, [{
    key: "set",
    value: function(n, r) {
      this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function() {
      return this.diffRecords;
    }
  }]), e;
})();
function Sr(e) {
  var t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
function Si(e, t, n) {
  var r = a.useState(0), o = ne(r, 2), i = o[0], l = o[1], c = me(/* @__PURE__ */ new Map()), s = me(new bi()), f = me(0);
  function m() {
    f.current += 1;
  }
  function d() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    m();
    var p = function() {
      var v = !1;
      c.current.forEach(function(b, x) {
        if (b && b.offsetParent) {
          var w = b.offsetHeight, S = getComputedStyle(b), $ = S.marginTop, y = S.marginBottom, E = Sr($), T = Sr(y), N = w + E + T;
          s.current.get(x) !== N && (s.current.set(x, N), v = !0);
        }
      }), v && l(function(b) {
        return b + 1;
      });
    };
    if (u)
      p();
    else {
      f.current += 1;
      var h = f.current;
      Promise.resolve().then(function() {
        h === f.current && p();
      });
    }
  }
  function g(u, p) {
    var h = e(u);
    c.current.get(h), p ? (c.current.set(h, p), d()) : c.current.delete(h);
  }
  return St(function() {
    return m;
  }, []), [g, d, s.current, i];
}
var Cr = 14 / 15;
function Ci(e, t, n) {
  var r = me(!1), o = me(0), i = me(0), l = me(null), c = me(null), s, f = function(u) {
    if (r.current) {
      var p = Math.ceil(u.touches[0].pageX), h = Math.ceil(u.touches[0].pageY), C = o.current - p, v = i.current - h, b = Math.abs(C) > Math.abs(v);
      b ? o.current = p : i.current = h;
      var x = n(b, b ? C : v, !1, u);
      x && u.preventDefault(), clearInterval(c.current), x && (c.current = setInterval(function() {
        b ? C *= Cr : v *= Cr;
        var w = Math.floor(b ? C : v);
        (!n(b, w, !0) || Math.abs(w) <= 0.1) && clearInterval(c.current);
      }, 16));
    }
  }, m = function() {
    r.current = !1, s();
  }, d = function(u) {
    s(), u.touches.length === 1 && !r.current && (r.current = !0, o.current = Math.ceil(u.touches[0].pageX), i.current = Math.ceil(u.touches[0].pageY), l.current = u.target, l.current.addEventListener("touchmove", f, {
      passive: !1
    }), l.current.addEventListener("touchend", m, {
      passive: !0
    }));
  };
  s = function() {
    l.current && (l.current.removeEventListener("touchmove", f), l.current.removeEventListener("touchend", m));
  }, At(function() {
    return e && t.current.addEventListener("touchstart", d, {
      passive: !0
    }), function() {
      var g;
      (g = t.current) === null || g === void 0 || g.removeEventListener("touchstart", d), s(), clearInterval(c.current);
    };
  }, [e]);
}
function yr(e) {
  return Math.floor(Math.pow(e, 0.5));
}
function Tn(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function yi(e, t, n) {
  a.useEffect(function() {
    var r = t.current;
    if (e && r) {
      var o = !1, i, l, c = function() {
        Nt.cancel(i);
      }, s = function g() {
        c(), i = Nt(function() {
          n(l), g();
        });
      }, f = function() {
        o = !1, c();
      }, m = function(u) {
        if (!(u.target.draggable || u.button !== 0)) {
          var p = u;
          p._virtualHandled || (p._virtualHandled = !0, o = !0);
        }
      }, d = function(u) {
        if (o) {
          var p = Tn(u, !1), h = r.getBoundingClientRect(), C = h.top, v = h.bottom;
          if (p <= C) {
            var b = C - p;
            l = -yr(b), s();
          } else if (p >= v) {
            var x = p - v;
            l = yr(x), s();
          } else
            c();
        }
      };
      return r.addEventListener("mousedown", m), r.ownerDocument.addEventListener("mouseup", f), r.ownerDocument.addEventListener("mousemove", d), r.ownerDocument.addEventListener("dragend", f), function() {
        r.removeEventListener("mousedown", m), r.ownerDocument.removeEventListener("mouseup", f), r.ownerDocument.removeEventListener("mousemove", d), r.ownerDocument.removeEventListener("dragend", f), c();
      };
    }
  }, [e]);
}
var wr = 10;
function wi(e, t, n, r, o, i, l, c) {
  var s = a.useRef(), f = a.useState(null), m = ne(f, 2), d = m[0], g = m[1];
  return At(function() {
    if (d && d.times < wr) {
      if (!e.current) {
        g(function(F) {
          return H({}, F);
        });
        return;
      }
      i();
      var u = d.targetAlign, p = d.originAlign, h = d.index, C = d.offset, v = e.current.clientHeight, b = !1, x = u, w = null;
      if (v) {
        for (var S = u || p, $ = 0, y = 0, E = 0, T = Math.min(t.length - 1, h), N = 0; N <= T; N += 1) {
          var O = o(t[N]);
          y = $;
          var M = n.get(O);
          E = y + (M === void 0 ? r : M), $ = E;
        }
        for (var P = S === "top" ? C : v - C, R = T; R >= 0; R -= 1) {
          var I = o(t[R]), _ = n.get(I);
          if (_ === void 0) {
            b = !0;
            break;
          }
          if (P -= _, P <= 0)
            break;
        }
        switch (S) {
          case "top":
            w = y - C;
            break;
          case "bottom":
            w = E - v + C;
            break;
          default: {
            var D = e.current.scrollTop, z = D + v;
            y < D ? x = "top" : E > z && (x = "bottom");
          }
        }
        w !== null && l(w), w !== d.lastTop && (b = !0);
      }
      b && g(H(H({}, d), {}, {
        times: d.times + 1,
        targetAlign: x,
        lastTop: w
      }));
    } else process.env.NODE_ENV !== "production" && d?.times === wr && lt(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [d, e.current]), function(u) {
    if (u == null) {
      c();
      return;
    }
    if (Nt.cancel(s.current), typeof u == "number")
      l(u);
    else if (u && ct(u) === "object") {
      var p, h = u.align;
      "index" in u ? p = u.index : p = t.findIndex(function(b) {
        return o(b) === u.key;
      });
      var C = u.offset, v = C === void 0 ? 0 : C;
      g({
        times: 0,
        index: p,
        offset: v,
        originAlign: h
      });
    }
  };
}
var zn = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, o = e.scrollOffset, i = e.scrollRange, l = e.onStartMove, c = e.onStopMove, s = e.onScroll, f = e.horizontal, m = e.spinSize, d = e.containerSize, g = e.style, u = e.thumbStyle, p = e.showScrollBar, h = a.useState(!1), C = ne(h, 2), v = C[0], b = C[1], x = a.useState(null), w = ne(x, 2), S = w[0], $ = w[1], y = a.useState(null), E = ne(y, 2), T = E[0], N = E[1], O = !r, M = a.useRef(), P = a.useRef(), R = a.useState(p), I = ne(R, 2), _ = I[0], D = I[1], z = a.useRef(), F = function() {
    p === !0 || p === !1 || (clearTimeout(z.current), D(!0), z.current = setTimeout(function() {
      D(!1);
    }, 3e3));
  }, W = i - d || 0, ae = d - m || 0, ce = a.useMemo(function() {
    if (o === 0 || W === 0)
      return 0;
    var j = o / W;
    return j * ae;
  }, [o, W, ae]), V = function(B) {
    B.stopPropagation(), B.preventDefault();
  }, te = a.useRef({
    top: ce,
    dragging: v,
    pageY: S,
    startTop: T
  });
  te.current = {
    top: ce,
    dragging: v,
    pageY: S,
    startTop: T
  };
  var re = function(B) {
    b(!0), $(Tn(B, f)), N(te.current.top), l(), B.stopPropagation(), B.preventDefault();
  };
  a.useEffect(function() {
    var j = function(G) {
      G.preventDefault();
    }, B = M.current, q = P.current;
    return B.addEventListener("touchstart", j, {
      passive: !1
    }), q.addEventListener("touchstart", re, {
      passive: !1
    }), function() {
      B.removeEventListener("touchstart", j), q.removeEventListener("touchstart", re);
    };
  }, []);
  var pe = a.useRef();
  pe.current = W;
  var X = a.useRef();
  X.current = ae, a.useEffect(function() {
    if (v) {
      var j, B = function(G) {
        var A = te.current, we = A.dragging, fe = A.pageY, be = A.startTop;
        Nt.cancel(j);
        var ye = M.current.getBoundingClientRect(), Pe = d / (f ? ye.width : ye.height);
        if (we) {
          var Oe = (Tn(G, f) - fe) * Pe, Ie = be;
          !O && f ? Ie -= Oe : Ie += Oe;
          var xe = pe.current, Xe = X.current, _e = Xe ? Ie / Xe : 0, Me = Math.ceil(_e * xe);
          Me = Math.max(Me, 0), Me = Math.min(Me, xe), j = Nt(function() {
            s(Me, f);
          });
        }
      }, q = function() {
        b(!1), c();
      };
      return window.addEventListener("mousemove", B, {
        passive: !0
      }), window.addEventListener("touchmove", B, {
        passive: !0
      }), window.addEventListener("mouseup", q, {
        passive: !0
      }), window.addEventListener("touchend", q, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", B), window.removeEventListener("touchmove", B), window.removeEventListener("mouseup", q), window.removeEventListener("touchend", q), Nt.cancel(j);
      };
    }
  }, [v]), a.useEffect(function() {
    return F(), function() {
      clearTimeout(z.current);
    };
  }, [o]), a.useImperativeHandle(t, function() {
    return {
      delayHidden: F
    };
  });
  var Y = "".concat(n, "-scrollbar"), Q = {
    position: "absolute",
    visibility: _ ? null : "hidden"
  }, L = {
    position: "absolute",
    borderRadius: 99,
    background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
    cursor: "pointer",
    userSelect: "none"
  };
  return f ? (Object.assign(Q, {
    height: 8,
    left: 0,
    right: 0,
    bottom: 0
  }), Object.assign(L, K({
    height: "100%",
    width: m
  }, O ? "left" : "right", ce))) : (Object.assign(Q, K({
    width: 8,
    top: 0,
    bottom: 0
  }, O ? "right" : "left", 0)), Object.assign(L, {
    width: "100%",
    height: m,
    top: ce
  })), /* @__PURE__ */ a.createElement("div", {
    ref: M,
    className: ve(Y, K(K(K({}, "".concat(Y, "-horizontal"), f), "".concat(Y, "-vertical"), !f), "".concat(Y, "-visible"), _)),
    style: H(H({}, Q), g),
    onMouseDown: V,
    onMouseMove: F
  }, /* @__PURE__ */ a.createElement("div", {
    ref: P,
    className: ve("".concat(Y, "-thumb"), K({}, "".concat(Y, "-thumb-moving"), v)),
    style: H(H({}, L), u),
    onMouseDown: re
  }));
});
process.env.NODE_ENV !== "production" && (zn.displayName = "ScrollBar");
var xi = 20;
function xr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, xi), Math.floor(n);
}
var Ei = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], $i = [], Ii = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Ri(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, o = e.className, i = e.height, l = e.itemHeight, c = e.fullHeight, s = c === void 0 ? !0 : c, f = e.style, m = e.data, d = e.children, g = e.itemKey, u = e.virtual, p = e.direction, h = e.scrollWidth, C = e.component, v = C === void 0 ? "div" : C, b = e.onScroll, x = e.onVirtualScroll, w = e.onVisibleChange, S = e.innerProps, $ = e.extraRender, y = e.styles, E = e.showScrollBar, T = E === void 0 ? "optional" : E, N = tt(e, Ei), O = a.useCallback(function(ie) {
    return typeof g == "function" ? g(ie) : ie?.[g];
  }, [g]), M = Si(O), P = ne(M, 4), R = P[0], I = P[1], _ = P[2], D = P[3], z = !!(u !== !1 && i && l), F = a.useMemo(function() {
    return Object.values(_.maps).reduce(function(ie, k) {
      return ie + k;
    }, 0);
  }, [_.id, _.maps]), W = z && m && (Math.max(l * m.length, F) > i || !!h), ae = p === "rtl", ce = ve(r, K({}, "".concat(r, "-rtl"), ae), o), V = m || $i, te = me(), re = me(), pe = me(), X = mt(0), Y = ne(X, 2), Q = Y[0], L = Y[1], j = mt(0), B = ne(j, 2), q = B[0], U = B[1], G = mt(!1), A = ne(G, 2), we = A[0], fe = A[1], be = function() {
    fe(!0);
  }, ye = function() {
    fe(!1);
  }, Pe = {
    getKey: O
  };
  function Oe(ie) {
    L(function(k) {
      var he;
      typeof ie == "function" ? he = ie(k) : he = ie;
      var Ne = jt(he);
      return te.current.scrollTop = Ne, Ne;
    });
  }
  var Ie = me({
    start: 0,
    end: V.length
  }), xe = me(), Xe = gi(V, O), _e = ne(Xe, 1), Me = _e[0];
  xe.current = Me;
  var Ee = a.useMemo(function() {
    if (!z)
      return {
        scrollHeight: void 0,
        start: 0,
        end: V.length - 1,
        offset: void 0
      };
    if (!W) {
      var ie;
      return {
        scrollHeight: ((ie = re.current) === null || ie === void 0 ? void 0 : ie.offsetHeight) || 0,
        start: 0,
        end: V.length - 1,
        offset: void 0
      };
    }
    for (var k = 0, he, Ne, Ue, It = V.length, ht = 0; ht < It; ht += 1) {
      var Rt = V[ht], Dt = O(Rt), Lt = _.get(Dt), Ht = k + (Lt === void 0 ? l : Lt);
      Ht >= Q && he === void 0 && (he = ht, Ne = k), Ht > Q + i && Ue === void 0 && (Ue = ht), k = Ht;
    }
    return he === void 0 && (he = 0, Ne = 0, Ue = Math.ceil(i / l)), Ue === void 0 && (Ue = V.length - 1), Ue = Math.min(Ue + 1, V.length - 1), {
      scrollHeight: k,
      start: he,
      end: Ue,
      offset: Ne
    };
  }, [W, z, Q, V, D, i]), De = Ee.scrollHeight, Te = Ee.start, Ve = Ee.end, Ye = Ee.offset;
  Ie.current.start = Te, Ie.current.end = Ve, a.useLayoutEffect(function() {
    var ie = _.getRecord();
    if (ie.size === 1) {
      var k = Array.from(ie.keys())[0], he = ie.get(k), Ne = V[Te];
      if (Ne && he === void 0) {
        var Ue = O(Ne);
        if (Ue === k) {
          var It = _.get(k), ht = It - l;
          Oe(function(Rt) {
            return Rt + ht;
          });
        }
      }
    }
    _.resetRecord();
  }, [De]);
  var ke = a.useState({
    width: 0,
    height: i
  }), Le = ne(ke, 2), je = Le[0], qe = Le[1], Fe = function(k) {
    qe({
      width: k.offsetWidth,
      height: k.offsetHeight
    });
  }, We = me(), ot = me(), Ke = a.useMemo(function() {
    return xr(je.width, h);
  }, [je.width, h]), ze = a.useMemo(function() {
    return xr(je.height, De);
  }, [je.height, De]), gt = De - i, _t = me(gt);
  _t.current = gt;
  function jt(ie) {
    var k = ie;
    return Number.isNaN(_t.current) || (k = Math.min(k, _t.current)), k = Math.max(k, 0), k;
  }
  var yt = Q <= 0, st = Q >= gt, xt = q <= 0, Ae = q >= h, Et = fo(yt, st, xt, Ae), pt = function() {
    return {
      x: ae ? -q : q,
      y: Q
    };
  }, et = me(pt()), se = tr(function(ie) {
    if (x) {
      var k = H(H({}, pt()), ie);
      (et.current.x !== k.x || et.current.y !== k.y) && (x(k), et.current = k);
    }
  });
  function ue(ie, k) {
    var he = ie;
    k ? (ur(function() {
      U(he);
    }), se()) : Oe(he);
  }
  function Z(ie) {
    var k = ie.currentTarget.scrollTop;
    k !== Q && Oe(k), b?.(ie), se();
  }
  var ee = function(k) {
    var he = k, Ne = h ? h - je.width : 0;
    return he = Math.max(he, 0), he = Math.min(he, Ne), he;
  }, Ce = tr(function(ie, k) {
    k ? (ur(function() {
      U(function(he) {
        var Ne = he + (ae ? -ie : ie);
        return ee(Ne);
      });
    }), se()) : Oe(function(he) {
      var Ne = he + ie;
      return Ne;
    });
  }), He = pi(z, yt, st, xt, Ae, !!h, Ce), ut = ne(He, 2), Ze = ut[0], wt = ut[1];
  Ci(z, te, function(ie, k, he, Ne) {
    var Ue = Ne;
    return Et(ie, k, he) ? !1 : !Ue || !Ue._virtualHandled ? (Ue && (Ue._virtualHandled = !0), Ze({
      preventDefault: function() {
      },
      deltaX: ie ? k : 0,
      deltaY: ie ? 0 : k
    }), !0) : !1;
  }), yi(W, te, function(ie) {
    Oe(function(k) {
      return k + ie;
    });
  }), At(function() {
    function ie(he) {
      var Ne = yt && he.detail < 0, Ue = st && he.detail > 0;
      z && !Ne && !Ue && he.preventDefault();
    }
    var k = te.current;
    return k.addEventListener("wheel", Ze, {
      passive: !1
    }), k.addEventListener("DOMMouseScroll", wt, {
      passive: !0
    }), k.addEventListener("MozMousePixelScroll", ie, {
      passive: !1
    }), function() {
      k.removeEventListener("wheel", Ze), k.removeEventListener("DOMMouseScroll", wt), k.removeEventListener("MozMousePixelScroll", ie);
    };
  }, [z, yt, st]), At(function() {
    if (h) {
      var ie = ee(q);
      U(ie), se({
        x: ie
      });
    }
  }, [je.width, h]);
  var Be = function() {
    var k, he;
    (k = We.current) === null || k === void 0 || k.delayHidden(), (he = ot.current) === null || he === void 0 || he.delayHidden();
  }, nt = wi(te, V, _, l, O, function() {
    return I(!0);
  }, Oe, Be);
  a.useImperativeHandle(t, function() {
    return {
      nativeElement: pe.current,
      getScrollInfo: pt,
      scrollTo: function(k) {
        function he(Ne) {
          return Ne && ct(Ne) === "object" && ("left" in Ne || "top" in Ne);
        }
        he(k) ? (k.left !== void 0 && U(ee(k.left)), nt(k.top)) : nt(k);
      }
    };
  }), At(function() {
    if (w) {
      var ie = V.slice(Te, Ve + 1);
      w(ie, V);
    }
  }, [Te, Ve, V]);
  var Qe = hi(V, O, _, l), $t = $?.({
    start: Te,
    end: Ve,
    virtual: W,
    offsetX: q,
    offsetY: Ye,
    rtl: ae,
    getSize: Qe
  }), Yt = mi(V, Te, Ve, h, q, R, d, Pe), at = null;
  i && (at = H(K({}, s ? "height" : "maxHeight", i), Ii), z && (at.overflowY = "hidden", h && (at.overflowX = "hidden"), we && (at.pointerEvents = "none")));
  var it = {};
  return ae && (it.dir = "rtl"), /* @__PURE__ */ a.createElement("div", ge({
    ref: pe,
    style: H(H({}, f), {}, {
      position: "relative"
    }),
    className: ce
  }, it, N), /* @__PURE__ */ a.createElement(jn, {
    onResize: Fe
  }, /* @__PURE__ */ a.createElement(v, {
    className: "".concat(r, "-holder"),
    style: at,
    ref: te,
    onScroll: Z,
    onMouseEnter: Be
  }, /* @__PURE__ */ a.createElement(uo, {
    prefixCls: r,
    height: De,
    offsetX: q,
    offsetY: Ye,
    scrollWidth: h,
    onInnerResize: I,
    ref: re,
    innerProps: S,
    rtl: ae,
    extra: $t
  }, Yt))), W && De > i && /* @__PURE__ */ a.createElement(zn, {
    ref: We,
    prefixCls: r,
    scrollOffset: Q,
    scrollRange: De,
    rtl: ae,
    onScroll: ue,
    onStartMove: be,
    onStopMove: ye,
    spinSize: ze,
    containerSize: je.height,
    style: y?.verticalScrollBar,
    thumbStyle: y?.verticalScrollBarThumb,
    showScrollBar: T
  }), W && h > je.width && /* @__PURE__ */ a.createElement(zn, {
    ref: ot,
    prefixCls: r,
    scrollOffset: q,
    scrollRange: h,
    rtl: ae,
    onScroll: ue,
    onStartMove: be,
    onStopMove: ye,
    spinSize: Ke,
    containerSize: je.width,
    horizontal: !0,
    style: y?.horizontalScrollBar,
    thumbStyle: y?.horizontalScrollBarThumb,
    showScrollBar: T
  }));
}
var mo = /* @__PURE__ */ a.forwardRef(Ri);
mo.displayName = "List";
function Ni() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var Oi = ["disabled", "title", "children", "style", "className"];
function Er(e) {
  return typeof e == "string" || typeof e == "number";
}
var Mi = function(t, n) {
  var r = Ga(), o = r.prefixCls, i = r.id, l = r.open, c = r.multiple, s = r.mode, f = r.searchValue, m = r.toggleOpen, d = r.notFoundContent, g = r.onPopupScroll, u = a.useContext(Wn), p = u.maxCount, h = u.flattenOptions, C = u.onActiveValue, v = u.defaultActiveFirstOption, b = u.onSelect, x = u.menuItemSelectedIcon, w = u.rawValues, S = u.fieldNames, $ = u.virtual, y = u.direction, E = u.listHeight, T = u.listItemHeight, N = u.optionRender, O = "".concat(o, "-item"), M = oa(function() {
    return h;
  }, [l, h], function(L, j) {
    return j[0] && L[1] !== j[1];
  }), P = a.useRef(null), R = a.useMemo(function() {
    return c && Mn(p) && w?.size >= p;
  }, [c, p, w?.size]), I = function(j) {
    j.preventDefault();
  }, _ = function(j) {
    var B;
    (B = P.current) === null || B === void 0 || B.scrollTo(typeof j == "number" ? {
      index: j
    } : j);
  }, D = function(j) {
    for (var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, q = M.length, U = 0; U < q; U += 1) {
      var G = (j + U * B + q) % q, A = M[G] || {}, we = A.group, fe = A.data;
      if (!we && !(fe != null && fe.disabled) && !R)
        return G;
    }
    return -1;
  }, z = a.useState(function() {
    return D(0);
  }), F = ne(z, 2), W = F[0], ae = F[1], ce = function(j) {
    var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    ae(j);
    var q = {
      source: B ? "keyboard" : "mouse"
    }, U = M[j];
    if (!U) {
      C(null, -1, q);
      return;
    }
    C(U.value, j, q);
  };
  St(function() {
    ce(v !== !1 ? D(0) : -1);
  }, [M.length, f]);
  var V = a.useCallback(function(L) {
    return w.has(L) && s !== "combobox";
  }, [s, bt(w).toString(), w.size]);
  St(function() {
    var L = setTimeout(function() {
      if (!c && l && w.size === 1) {
        var B = Array.from(w)[0], q = M.findIndex(function(U) {
          var G = U.data;
          return G.value === B;
        });
        q !== -1 && (ce(q), _(q));
      }
    });
    if (l) {
      var j;
      (j = P.current) === null || j === void 0 || j.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(L);
    };
  }, [l, f]);
  var te = function(j) {
    j !== void 0 && b(j, {
      selected: !w.has(j)
    }), c || m(!1);
  };
  if (a.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(j) {
        var B = j.which, q = j.ctrlKey;
        switch (B) {
          // >>> Arrow keys & ctrl + n/p on Mac
          case le.N:
          case le.P:
          case le.UP:
          case le.DOWN: {
            var U = 0;
            if (B === le.UP ? U = -1 : B === le.DOWN ? U = 1 : Ni() && q && (B === le.N ? U = 1 : B === le.P && (U = -1)), U !== 0) {
              var G = D(W + U, U);
              _(G), ce(G, !0);
            }
            break;
          }
          // >>> Select
          case le.ENTER: {
            var A, we = M[W];
            we && !(we != null && (A = we.data) !== null && A !== void 0 && A.disabled) && !R ? te(we.value) : te(void 0), l && j.preventDefault();
            break;
          }
          // >>> Close
          case le.ESC:
            m(!1), l && j.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(j) {
        _(j);
      }
    };
  }), M.length === 0)
    return /* @__PURE__ */ a.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat(O, "-empty"),
      onMouseDown: I
    }, d);
  var re = Object.keys(S).map(function(L) {
    return S[L];
  }), pe = function(j) {
    return j.label;
  };
  function X(L, j) {
    var B = L.group;
    return {
      role: B ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(j)
    };
  }
  var Y = function(j) {
    var B = M[j];
    if (!B)
      return null;
    var q = B.data || {}, U = q.value, G = B.group, A = Kt(q, !0), we = pe(B);
    return B ? /* @__PURE__ */ a.createElement("div", ge({
      "aria-label": typeof we == "string" && !G ? we : null
    }, A, {
      key: j
    }, X(B, j), {
      "aria-selected": V(U)
    }), U) : null;
  }, Q = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, $ && /* @__PURE__ */ a.createElement("div", ge({}, Q, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), Y(W - 1), Y(W), Y(W + 1)), /* @__PURE__ */ a.createElement(mo, {
    itemKey: "key",
    ref: P,
    data: M,
    height: E,
    itemHeight: T,
    fullHeight: !1,
    onMouseDown: I,
    onScroll: g,
    virtual: $,
    direction: y,
    innerProps: $ ? null : Q
  }, function(L, j) {
    var B = L.group, q = L.groupOption, U = L.data, G = L.label, A = L.value, we = U.key;
    if (B) {
      var fe, be = (fe = U.title) !== null && fe !== void 0 ? fe : Er(G) ? G.toString() : void 0;
      return /* @__PURE__ */ a.createElement("div", {
        className: ve(O, "".concat(O, "-group"), U.className),
        title: be
      }, G !== void 0 ? G : we);
    }
    var ye = U.disabled, Pe = U.title;
    U.children;
    var Oe = U.style, Ie = U.className, xe = tt(U, Oi), Xe = Hn(xe, re), _e = V(A), Me = ye || !_e && R, Ee = "".concat(O, "-option"), De = ve(O, Ee, Ie, K(K(K(K({}, "".concat(Ee, "-grouped"), q), "".concat(Ee, "-active"), W === j && !Me), "".concat(Ee, "-disabled"), Me), "".concat(Ee, "-selected"), _e)), Te = pe(L), Ve = !x || typeof x == "function" || _e, Ye = typeof Te == "number" ? Te : Te || A, ke = Er(Ye) ? Ye.toString() : void 0;
    return Pe !== void 0 && (ke = Pe), /* @__PURE__ */ a.createElement("div", ge({}, Kt(Xe), $ ? {} : X(L, j), {
      "aria-selected": _e,
      className: De,
      title: ke,
      onMouseMove: function() {
        W === j || Me || ce(j);
      },
      onClick: function() {
        Me || te(A);
      },
      style: Oe
    }), /* @__PURE__ */ a.createElement("div", {
      className: "".concat(Ee, "-content")
    }, typeof N == "function" ? N(L, {
      index: j
    }) : Ye), /* @__PURE__ */ a.isValidElement(x) || _e, Ve && /* @__PURE__ */ a.createElement(xn, {
      className: "".concat(O, "-option-state"),
      customizeIcon: x,
      customizeIconProps: {
        value: A,
        disabled: Me,
        isSelected: _e
      }
    }, _e ? "✓" : null));
  }));
}, vo = /* @__PURE__ */ a.forwardRef(Mi);
process.env.NODE_ENV !== "production" && (vo.displayName = "OptionList");
const Pi = (function(e, t) {
  var n = a.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = a.useMemo(function() {
    var i = n.current, l = i.values, c = i.options, s = e.map(function(d) {
      if (d.label === void 0) {
        var g;
        return H(H({}, d), {}, {
          label: (g = l.get(d.value)) === null || g === void 0 ? void 0 : g.label
        });
      }
      return d;
    }), f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
    return s.forEach(function(d) {
      f.set(d.value, d), m.set(d.value, t.get(d.value) || c.get(d.value));
    }), n.current.values = f, n.current.options = m, s;
  }, [e, t]), o = a.useCallback(function(i) {
    return t.get(i) || n.current.options.get(i);
  }, [t]);
  return [r, o];
});
function In(e, t) {
  return Fn(e).join("").toUpperCase().includes(t);
}
const Ti = (function(e, t, n, r, o) {
  return a.useMemo(function() {
    if (!n || r === !1)
      return e;
    var i = t.options, l = t.label, c = t.value, s = [], f = typeof r == "function", m = n.toUpperCase(), d = f ? r : function(u, p) {
      return o ? In(p[o], m) : p[i] ? In(p[l !== "children" ? l : "label"], m) : In(p[c], m);
    }, g = f ? function(u) {
      return Pn(u);
    } : function(u) {
      return u;
    };
    return e.forEach(function(u) {
      if (u[i]) {
        var p = d(n, g(u));
        if (p)
          s.push(u);
        else {
          var h = u[i].filter(function(C) {
            return d(n, g(C));
          });
          h.length && s.push(H(H({}, u), {}, K({}, i, h)));
        }
        return;
      }
      d(n, g(u)) && s.push(u);
    }), s;
  }, [e, r, o, n, t]);
});
var $r = 0, zi = process.env.NODE_ENV !== "test" && aa();
function _i() {
  var e;
  return zi ? (e = $r, $r += 1) : e = "TEST_OR_SSR", e;
}
function Di(e) {
  var t = a.useState(), n = ne(t, 2), r = n[0], o = n[1];
  return a.useEffect(function() {
    o("rc_select_".concat(_i()));
  }, []), e || r;
}
var Li = ["children", "value"], Bi = ["children"];
function ji(e) {
  var t = e, n = t.key, r = t.props, o = r.children, i = r.value, l = tt(r, Li);
  return H({
    key: n,
    value: i !== void 0 ? i : n,
    children: o
  }, l);
}
function Kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return an(e).map(function(n, r) {
    if (!/* @__PURE__ */ a.isValidElement(n) || !n.type)
      return null;
    var o = n, i = o.type.isSelectOptGroup, l = o.key, c = o.props, s = c.children, f = tt(c, Bi);
    return t || !i ? ji(n) : H(H({
      key: "__RC_SELECT_GRP__".concat(l === null ? r : l, "__"),
      label: l
    }, f), {}, {
      options: Kn(s)
    });
  }).filter(function(n) {
    return n;
  });
}
var Hi = function(t, n, r, o, i) {
  return a.useMemo(function() {
    var l = t, c = !t;
    c && (l = Kn(n));
    var s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), m = function(u, p, h) {
      h && typeof h == "string" && u.set(p[h], p);
    }, d = function g(u) {
      for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = 0; h < u.length; h += 1) {
        var C = u[h];
        !C[r.options] || p ? (s.set(C[r.value], C), m(f, C, r.label), m(f, C, o), m(f, C, i)) : g(C[r.options], !0);
      }
    };
    return d(l), {
      options: l,
      valueOptions: s,
      labelOptions: f
    };
  }, [t, n, r, o, i]);
};
function Ir(e) {
  var t = a.useRef();
  t.current = e;
  var n = a.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function Vi(e) {
  var t = e.mode, n = e.options, r = e.children, o = e.backfill, i = e.allowClear, l = e.placeholder, c = e.getInputElement, s = e.showSearch, f = e.onSearch, m = e.defaultOpen, d = e.autoFocus, g = e.labelInValue, u = e.value, p = e.inputValue, h = e.optionLabelProp, C = pn(t), v = s !== void 0 ? s : C || t === "combobox", b = n || Kn(r);
  if (lt(t !== "tags" || b.every(function($) {
    return !$.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var x = b.some(function($) {
      return $.options ? $.options.some(function(y) {
        return typeof ("value" in y ? y.value : y.key) == "number";
      }) : typeof ("value" in $ ? $.value : $.key) == "number";
    });
    lt(!x, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (lt(t !== "combobox" || !h, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), lt(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), lt(t === "combobox" || !c, "`getInputElement` only work with `combobox` mode."), nr(t !== "combobox" || !c || !i || !l, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), f && !v && t !== "combobox" && t !== "tags" && lt(!1, "`onSearch` should work with `showSearch` instead of use alone."), nr(!m || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), u != null) {
    var w = Fn(u);
    lt(!g || w.every(function($) {
      return ct($) === "object" && ("key" in $ || "value" in $);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), lt(!C || Array.isArray(u), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var S = null;
    an(r).some(function($) {
      if (!/* @__PURE__ */ a.isValidElement($) || !$.type)
        return !1;
      var y = $, E = y.type;
      if (E.isSelectOption)
        return !1;
      if (E.isSelectOptGroup) {
        var T = an($.props.children).every(function(N) {
          return !/* @__PURE__ */ a.isValidElement(N) || !$.type || N.type.isSelectOption ? !0 : (S = N.type, !1);
        });
        return !T;
      }
      return S = E, !0;
    }), S && lt(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(S.displayName || S.name || S, "`.")), lt(p === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function Ai(e, t) {
  if (e) {
    var n = function r(o) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = 0; l < o.length; l++) {
        var c = o[l];
        if (c[t?.value] === null)
          return lt(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(c[t?.options]) && r(c[t?.options], !0))
          break;
      }
    };
    n(e);
  }
}
var Fi = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], Wi = ["inputValue"];
function Gi(e) {
  return !e || ct(e) !== "object";
}
var go = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, l = e.backfill, c = e.fieldNames, s = e.inputValue, f = e.searchValue, m = e.onSearch, d = e.autoClearSearchValue, g = d === void 0 ? !0 : d, u = e.onSelect, p = e.onDeselect, h = e.dropdownMatchSelectWidth, C = h === void 0 ? !0 : h, v = e.filterOption, b = e.filterSort, x = e.optionFilterProp, w = e.optionLabelProp, S = e.options, $ = e.optionRender, y = e.children, E = e.defaultActiveFirstOption, T = e.menuItemSelectedIcon, N = e.virtual, O = e.direction, M = e.listHeight, P = M === void 0 ? 200 : M, R = e.listItemHeight, I = R === void 0 ? 20 : R, _ = e.labelRender, D = e.value, z = e.defaultValue, F = e.labelInValue, W = e.onChange, ae = e.maxCount, ce = tt(e, Fi), V = Di(n), te = pn(r), re = !!(!S && y), pe = a.useMemo(function() {
    return v === void 0 && r === "combobox" ? !1 : v;
  }, [v, r]), X = a.useMemo(
    function() {
      return co(c, re);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(c),
      re
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), Y = Tt("", {
    value: f !== void 0 ? f : s,
    postState: function(ue) {
      return ue || "";
    }
  }), Q = ne(Y, 2), L = Q[0], j = Q[1], B = Hi(S, y, X, x, w), q = B.valueOptions, U = B.labelOptions, G = B.options, A = a.useCallback(function(se) {
    var ue = Fn(se);
    return ue.map(function(Z) {
      var ee, Ce, He, ut, Ze;
      if (Gi(Z))
        ee = Z;
      else {
        var wt;
        He = Z.key, Ce = Z.label, ee = (wt = Z.value) !== null && wt !== void 0 ? wt : He;
      }
      var Be = q.get(ee);
      if (Be) {
        var nt;
        if (Ce === void 0 && (Ce = Be?.[w || X.label]), He === void 0 && (He = (nt = Be?.key) !== null && nt !== void 0 ? nt : ee), ut = Be?.disabled, Ze = Be?.title, process.env.NODE_ENV !== "production" && !w) {
          var Qe = Be?.[X.label];
          Qe !== void 0 && !/* @__PURE__ */ a.isValidElement(Qe) && !/* @__PURE__ */ a.isValidElement(Ce) && Qe !== Ce && lt(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: Ce,
        value: ee,
        key: He,
        disabled: ut,
        title: Ze
      };
    });
  }, [X, w, q]), we = Tt(z, {
    value: D
  }), fe = ne(we, 2), be = fe[0], ye = fe[1], Pe = a.useMemo(function() {
    var se, ue = te && be === null ? [] : be, Z = A(ue);
    return r === "combobox" && Ja((se = Z[0]) === null || se === void 0 ? void 0 : se.value) ? [] : Z;
  }, [be, A, r, te]), Oe = Pi(Pe, q), Ie = ne(Oe, 2), xe = Ie[0], Xe = Ie[1], _e = a.useMemo(function() {
    if (!r && xe.length === 1) {
      var se = xe[0];
      if (se.value === null && (se.label === null || se.label === void 0))
        return [];
    }
    return xe.map(function(ue) {
      var Z;
      return H(H({}, ue), {}, {
        label: (Z = typeof _ == "function" ? _(ue) : ue.label) !== null && Z !== void 0 ? Z : ue.value
      });
    });
  }, [r, xe, _]), Me = a.useMemo(function() {
    return new Set(xe.map(function(se) {
      return se.value;
    }));
  }, [xe]);
  a.useEffect(function() {
    if (r === "combobox") {
      var se, ue = (se = xe[0]) === null || se === void 0 ? void 0 : se.value;
      j(Qa(ue) ? String(ue) : "");
    }
  }, [xe]);
  var Ee = Ir(function(se, ue) {
    var Z = ue ?? se;
    return K(K({}, X.value, se), X.label, Z);
  }), De = a.useMemo(function() {
    if (r !== "tags")
      return G;
    var se = bt(G), ue = function(ee) {
      return q.has(ee);
    };
    return bt(xe).sort(function(Z, ee) {
      return Z.value < ee.value ? -1 : 1;
    }).forEach(function(Z) {
      var ee = Z.value;
      ue(ee) || se.push(Ee(ee, Z.label));
    }), se;
  }, [Ee, G, q, xe, r]), Te = Ti(De, X, L, pe, x), Ve = a.useMemo(function() {
    return r !== "tags" || !L || Te.some(function(se) {
      return se[x || "value"] === L;
    }) || Te.some(function(se) {
      return se[X.value] === L;
    }) ? Te : [Ee(L)].concat(bt(Te));
  }, [Ee, x, r, Te, L, X]), Ye = function se(ue) {
    var Z = bt(ue).sort(function(ee, Ce) {
      return b(ee, Ce, {
        searchValue: L
      });
    });
    return Z.map(function(ee) {
      return Array.isArray(ee.options) ? H(H({}, ee), {}, {
        options: ee.options.length > 0 ? se(ee.options) : ee.options
      }) : ee;
    });
  }, ke = a.useMemo(function() {
    return b ? Ye(Ve) : Ve;
  }, [Ve, b, L]), Le = a.useMemo(function() {
    return li(ke, {
      fieldNames: X,
      childrenAsData: re
    });
  }, [ke, X, re]), je = function(ue) {
    var Z = A(ue);
    if (ye(Z), W && // Trigger event only when value changed
    (Z.length !== xe.length || Z.some(function(He, ut) {
      var Ze;
      return ((Ze = xe[ut]) === null || Ze === void 0 ? void 0 : Ze.value) !== He?.value;
    }))) {
      var ee = F ? Z : Z.map(function(He) {
        return He.value;
      }), Ce = Z.map(function(He) {
        return Pn(Xe(He.value));
      });
      W(
        // Value
        te ? ee : ee[0],
        // Option
        te ? Ce : Ce[0]
      );
    }
  }, qe = a.useState(null), Fe = ne(qe, 2), We = Fe[0], ot = Fe[1], Ke = a.useState(0), ze = ne(Ke, 2), gt = ze[0], _t = ze[1], jt = E !== void 0 ? E : r !== "combobox", yt = a.useCallback(function(se, ue) {
    var Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ee = Z.source, Ce = ee === void 0 ? "keyboard" : ee;
    _t(ue), l && r === "combobox" && se !== null && Ce === "keyboard" && ot(String(se));
  }, [l, r]), st = function(ue, Z, ee) {
    var Ce = function() {
      var at, it = Xe(ue);
      return [F ? {
        label: it?.[X.label],
        value: ue,
        key: (at = it?.key) !== null && at !== void 0 ? at : ue
      } : ue, Pn(it)];
    };
    if (Z && u) {
      var He = Ce(), ut = ne(He, 2), Ze = ut[0], wt = ut[1];
      u(Ze, wt);
    } else if (!Z && p && ee !== "clear") {
      var Be = Ce(), nt = ne(Be, 2), Qe = nt[0], $t = nt[1];
      p(Qe, $t);
    }
  }, xt = Ir(function(se, ue) {
    var Z, ee = te ? ue.selected : !0;
    ee ? Z = te ? [].concat(bt(xe), [se]) : [se] : Z = xe.filter(function(Ce) {
      return Ce.value !== se;
    }), je(Z), st(se, ee), r === "combobox" ? ot("") : (!pn || g) && (j(""), ot(""));
  }), Ae = function(ue, Z) {
    je(ue);
    var ee = Z.type, Ce = Z.values;
    (ee === "remove" || ee === "clear") && Ce.forEach(function(He) {
      st(He.value, !1, ee);
    });
  }, Et = function(ue, Z) {
    if (j(ue), ot(null), Z.source === "submit") {
      var ee = (ue || "").trim();
      if (ee) {
        var Ce = Array.from(new Set([].concat(bt(Me), [ee])));
        je(Ce), st(ee, !0), j("");
      }
      return;
    }
    Z.source !== "blur" && (r === "combobox" && je(ue), m?.(ue));
  }, pt = function(ue) {
    var Z = ue;
    r !== "tags" && (Z = ue.map(function(Ce) {
      var He = U.get(Ce);
      return He?.value;
    }).filter(function(Ce) {
      return Ce !== void 0;
    }));
    var ee = Array.from(new Set([].concat(bt(Me), bt(Z))));
    je(ee), ee.forEach(function(Ce) {
      st(Ce, !0);
    });
  }, et = a.useMemo(function() {
    var se = N !== !1 && C !== !1;
    return H(H({}, B), {}, {
      flattenOptions: Le,
      onActiveValue: yt,
      defaultActiveFirstOption: jt,
      onSelect: xt,
      menuItemSelectedIcon: T,
      rawValues: Me,
      fieldNames: X,
      virtual: se,
      direction: O,
      listHeight: P,
      listItemHeight: I,
      childrenAsData: re,
      maxCount: ae,
      optionRender: $
    });
  }, [ae, B, Le, yt, jt, xt, T, Me, X, N, C, O, P, I, re, $]);
  return process.env.NODE_ENV !== "production" && (Vi(e), Ai(G, X)), /* @__PURE__ */ a.createElement(Wn.Provider, {
    value: et
  }, /* @__PURE__ */ a.createElement(so, ge({}, ce, {
    // >>> MISC
    id: V,
    prefixCls: i,
    ref: t,
    omitDomProps: Wi,
    mode: r,
    displayValues: _e,
    onDisplayValuesChange: Ae,
    direction: O,
    searchValue: L,
    onSearch: Et,
    autoClearSearchValue: g,
    onSearchSplit: pt,
    dropdownMatchSelectWidth: C,
    OptionList: vo,
    emptyOptions: !Le.length,
    activeValue: We,
    activeDescendantId: "".concat(V, "_list_").concat(gt)
  })));
});
process.env.NODE_ENV !== "production" && (go.displayName = "Select");
var Un = go;
Un.Option = Xn;
Un.OptGroup = Gn;
function Xi(e, t, n) {
  return vt({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const Ki = (e, t) => t || e, po = () => {
  const [, e] = Cn(), n = new Ot(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ a.createElement("svg", {
    style: n,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ a.createElement("title", null, "empty image"), /* @__PURE__ */ a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ a.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ a.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ a.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ a.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ a.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (po.displayName = "EmptyImage");
const ho = () => {
  const [, e] = Cn(), {
    colorFill: t,
    colorFillTertiary: n,
    colorFillQuaternary: r,
    colorBgContainer: o
  } = e, {
    borderColor: i,
    shadowColor: l,
    contentColor: c
  } = mn(() => ({
    borderColor: new Ot(t).onBackground(o).toHexShortString(),
    shadowColor: new Ot(n).onBackground(o).toHexShortString(),
    contentColor: new Ot(r).onBackground(o).toHexShortString()
  }), [t, n, r, o]);
  return /* @__PURE__ */ a.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ a.createElement("title", null, "Simple Empty"), /* @__PURE__ */ a.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ a.createElement("ellipse", {
    fill: l,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ a.createElement("g", {
    fillRule: "nonzero",
    stroke: i
  }, /* @__PURE__ */ a.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ a.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: c
  }))));
};
process.env.NODE_ENV !== "production" && (ho.displayName = "SimpleImage");
const Ui = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: l
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: l,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, Yi = nn("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, o = Ct(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return [Ui(o)];
});
var qi = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const bo = /* @__PURE__ */ a.createElement(po, null), So = /* @__PURE__ */ a.createElement(ho, null), Vt = (e) => {
  var {
    className: t,
    rootClassName: n,
    prefixCls: r,
    image: o = bo,
    description: i,
    children: l,
    imageStyle: c,
    style: s
  } = e, f = qi(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls: m,
    direction: d,
    empty: g
  } = a.useContext(zt), u = m("empty", r), [p, h, C] = Yi(u), [v] = ia("Empty"), b = typeof i < "u" ? i : v?.description, x = typeof b == "string" ? b : "empty";
  let w = null;
  return typeof o == "string" ? w = /* @__PURE__ */ a.createElement("img", {
    alt: x,
    src: o
  }) : w = o, p(/* @__PURE__ */ a.createElement("div", Object.assign({
    className: vt(h, C, u, g?.className, {
      [`${u}-normal`]: o === So,
      [`${u}-rtl`]: d === "rtl"
    }, t, n),
    style: Object.assign(Object.assign({}, g?.style), s)
  }, f), /* @__PURE__ */ a.createElement("div", {
    className: `${u}-image`,
    style: c
  }, w), b && /* @__PURE__ */ a.createElement("div", {
    className: `${u}-description`
  }, b), l && /* @__PURE__ */ a.createElement("div", {
    className: `${u}-footer`
  }, l)));
};
Vt.PRESENTED_IMAGE_DEFAULT = bo;
Vt.PRESENTED_IMAGE_SIMPLE = So;
process.env.NODE_ENV !== "production" && (Vt.displayName = "Empty");
const Zi = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = tn(zt), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ J.createElement(Vt, {
        image: Vt.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ J.createElement(Vt, {
        image: Vt.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    /* istanbul ignore next */
    default:
      return /* @__PURE__ */ J.createElement(Vt, null);
  }
}, Qi = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var r, o;
  const {
    variant: i,
    [e]: l
  } = tn(zt), c = tn(la), s = l?.variant;
  let f;
  typeof t < "u" ? f = t : n === !1 ? f = "borderless" : f = (o = (r = c ?? s) !== null && r !== void 0 ? r : i) !== null && o !== void 0 ? o : "outlined";
  const m = ca.includes(f);
  return [f, m];
}, Ji = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function ki(e, t) {
  return e || Ji(t);
}
const Rr = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: o
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: o,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, el = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, i = `&${t}-slide-up-appear${t}-slide-up-appear-active`, l = `&${t}-slide-up-leave${t}-slide-up-leave-active`, c = `${n}-dropdown-placement-`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, Ut(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${o}${c}bottomLeft,
          ${i}${c}bottomLeft
        `]: {
          animationName: fa
        },
        [`
          ${o}${c}topLeft,
          ${i}${c}topLeft,
          ${o}${c}topRight,
          ${i}${c}topRight
        `]: {
          animationName: da
        },
        [`${l}${c}bottomLeft`]: {
          animationName: ua
        },
        [`
          ${l}${c}topLeft,
          ${l}${c}topRight
        `]: {
          animationName: sa
        },
        "&-hidden": {
          display: "none"
        },
        [`${r}`]: Object.assign(Object.assign({}, Rr(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, gn),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              },
              [`&:has(+ ${r}-option-selected:not(${r}-option-disabled))`]: {
                borderEndStartRadius: 0,
                borderEndEndRadius: 0,
                [`& + ${r}-option-selected:not(${r}-option-disabled)`]: {
                  borderStartStartRadius: 0,
                  borderStartEndRadius: 0
                }
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, Rr(e)), {
            color: e.colorTextDisabled
          })
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    rr(e, "slide-up"),
    rr(e, "slide-down"),
    or(e, "move-up"),
    or(e, "move-down")
  ];
}, tl = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: o
  } = e, i = e.max(e.calc(n).sub(r).equal(), 0), l = e.max(e.calc(i).sub(o).equal(), 0);
  return {
    basePadding: i,
    containerPadding: l,
    itemHeight: oe(t),
    itemLineHeight: oe(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, nl = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, rl = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: o,
    paddingXS: i,
    multipleItemColorDisabled: l,
    multipleItemBorderColorDisabled: c,
    colorIcon: s,
    colorIconHover: f,
    INTERNAL_FIXED_ITEM_MARGIN: m
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        maxWidth: "100%",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: m,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${o}, line-height ${o}, height ${o}`,
        marginInlineEnd: e.calc(m).mul(2).equal(),
        paddingInlineStart: i,
        paddingInlineEnd: e.calc(i).div(2).equal(),
        [`${t}-disabled&`]: {
          color: l,
          borderColor: c,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(i).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Xr()), {
          display: "inline-flex",
          alignItems: "center",
          color: s,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: f
          }
        })
      }
    }
  };
}, ol = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, o = `${n}-selection-overflow`, i = e.multipleSelectItemHeight, l = nl(e), c = t ? `${n}-${t}` : "", s = tl(e);
  return {
    [`${n}-multiple${c}`]: Object.assign(Object.assign({}, rl(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: s.basePadding,
        paddingBlock: s.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${oe(r)} 0`,
          lineHeight: oe(i),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: s.itemHeight,
        lineHeight: oe(s.itemLineHeight)
      },
      // ========================== Input ==========================
      [`${o}-item + ${o}-item`]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${o}-item-suffix`]: {
        height: "100%"
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(l).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: oe(i),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.inputPaddingHorizontalBase,
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function Rn(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", o = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [ol(e, t), o];
}
const al = (e) => {
  const {
    componentCls: t
  } = e, n = Ct(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Ct(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    Rn(e),
    // ======================== Small ========================
    Rn(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    Rn(r, "lg")
  ];
};
function Nn(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: o
  } = e, i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), l = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${l}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, Ut(e, !0)), {
        display: "flex",
        borderRadius: o,
        [`${n}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: r,
          insetInlineEnd: r,
          bottom: 0,
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: oe(i),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${oe(r)}`,
          [`${n}-selection-search-input`]: {
            height: i
          },
          "&:after": {
            lineHeight: oe(i)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${oe(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function il(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    Nn(e),
    // ======================== Small ========================
    // Shared
    Nn(Ct(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selection-search`]: {
            insetInlineStart: n,
            insetInlineEnd: n
          },
          [`${t}-selector`]: {
            padding: `0 ${oe(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    Nn(Ct(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const ll = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: o,
    controlHeightSM: i,
    controlHeightLG: l,
    paddingXXS: c,
    controlPaddingHorizontal: s,
    zIndexPopupBase: f,
    colorText: m,
    fontWeightStrong: d,
    controlItemBgActive: g,
    controlItemBgHover: u,
    colorBgContainer: p,
    colorFillSecondary: h,
    colorBgContainerDisabled: C,
    colorTextDisabled: v
  } = e, b = c * 2, x = r * 2, w = Math.min(o - b, o - x), S = Math.min(i - b, i - x), $ = Math.min(l - b, l - x);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(c / 2),
    zIndexPopup: f + 50,
    optionSelectedColor: m,
    optionSelectedFontWeight: d,
    optionSelectedBg: g,
    optionActiveBg: u,
    optionPadding: `${(o - t * n) / 2}px ${s}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: o,
    selectorBg: p,
    clearBg: p,
    singleItemHeightLG: l,
    multipleItemBg: h,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: w,
    multipleItemHeightSM: S,
    multipleItemHeightLG: $,
    multipleSelectorBgDisabled: C,
    multipleItemColorDisabled: v,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25)
  };
}, Co = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: o
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${oe(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${oe(o)} ${t.activeShadowColor}`,
        outline: 0
      }
    }
  };
}, Nr = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, Co(e, t))
}), cl = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Co(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.colorPrimaryHover,
    activeBorderColor: e.colorPrimary,
    activeShadowColor: e.controlOutline
  })), Nr(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeShadowColor: e.colorErrorOutline
  })), Nr(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeShadowColor: e.colorWarningOutline
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), yo = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, Or = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, yo(e, t))
}), sl = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, yo(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.colorPrimary,
    color: e.colorText
  })), Or(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), Or(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), ul = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      borderColor: "transparent"
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${oe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    },
    // Status
    [`&${e.componentCls}-status-error`]: {
      [`${e.componentCls}-selection-item`]: {
        color: e.colorError
      }
    },
    [`&${e.componentCls}-status-warning`]: {
      [`${e.componentCls}-selection-item`]: {
        color: e.colorWarning
      }
    }
  }
}), dl = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign({}, cl(e)), sl(e)), ul(e))
}), fl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, ml = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
}, vl = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: o
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, Ut(e)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, fl(e)), ml(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, gn), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, gn), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, Xr()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [o]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorTextTertiary
        }
      },
      "&:hover": {
        [`${n}-clear`]: {
          opacity: 1
        },
        // Should use the following selector, but since `:has` has poor compatibility,
        // we use `:not(:last-child)` instead, which may cause some problems in some cases.
        // [`${componentCls}-arrow:has(+ ${componentCls}-clear)`]: {
        [`${n}-arrow:not(:last-child)`]: {
          opacity: 0
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${n}-has-feedback`]: {
      [`${n}-clear`]: {
        insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
      }
    }
  };
}, gl = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    vl(e),
    // Single
    il(e),
    // Multiple
    al(e),
    // Dropdown
    el(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Kr(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, pl = nn("Select", (e, t) => {
  let {
    rootPrefixCls: n
  } = t;
  const r = Ct(e, {
    rootPrefixCls: n,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [gl(r), dl(r)];
}, ll, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var hl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, bl = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: hl
  }));
}, wo = /* @__PURE__ */ a.forwardRef(bl);
process.env.NODE_ENV !== "production" && (wo.displayName = "SearchOutlined");
function Sl(e) {
  let {
    suffixIcon: t,
    clearIcon: n,
    menuItemSelectedIcon: r,
    removeIcon: o,
    loading: i,
    multiple: l,
    hasFeedback: c,
    prefixCls: s,
    showSuffixIcon: f,
    feedbackIcon: m,
    showArrow: d,
    componentName: g
  } = e;
  process.env.NODE_ENV !== "production" && yn(g).deprecated(!n, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const u = n ?? /* @__PURE__ */ a.createElement(ma, null), p = (b) => t === null && !c && !d ? null : /* @__PURE__ */ a.createElement(a.Fragment, null, f !== !1 && b, c && m);
  let h = null;
  if (t !== void 0)
    h = p(t);
  else if (i)
    h = p(/* @__PURE__ */ a.createElement(ga, {
      spin: !0
    }));
  else {
    const b = `${s}-suffix`;
    h = (x) => {
      let {
        open: w,
        showSearch: S
      } = x;
      return p(w && S ? /* @__PURE__ */ a.createElement(wo, {
        className: b
      }) : /* @__PURE__ */ a.createElement(pa, {
        className: b
      }));
    };
  }
  let C = null;
  r !== void 0 ? C = r : l ? C = /* @__PURE__ */ a.createElement(va, null) : C = null;
  let v = null;
  return o !== void 0 ? v = o : v = /* @__PURE__ */ a.createElement(Ur, null), {
    clearIcon: u,
    suffixIcon: h,
    itemIcon: C,
    removeIcon: v
  };
}
function Cl(e, t) {
  return t !== void 0 ? t : e !== null;
}
var yl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const xo = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Eo = (e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o,
    className: i,
    rootClassName: l,
    getPopupContainer: c,
    popupClassName: s,
    dropdownClassName: f,
    listHeight: m = 256,
    placement: d,
    listItemHeight: g,
    size: u,
    disabled: p,
    notFoundContent: h,
    status: C,
    builtinPlacements: v,
    dropdownMatchSelectWidth: b,
    popupMatchSelectWidth: x,
    direction: w,
    style: S,
    allowClear: $,
    variant: y,
    dropdownStyle: E,
    transitionName: T,
    tagRender: N,
    maxCount: O
  } = e, M = yl(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount"]), {
    getPopupContainer: P,
    getPrefixCls: R,
    renderEmpty: I,
    direction: _,
    virtual: D,
    popupMatchSelectWidth: z,
    popupOverflow: F,
    select: W
  } = a.useContext(zt), [, ae] = Cn(), ce = g ?? ae?.controlHeight, V = R("select", r), te = R(), re = w ?? _, {
    compactSize: pe,
    compactItemClassnames: X
  } = Yr(V, re), [Y, Q] = Qi("select", y, o), L = cn(V), [j, B, q] = pl(V, L), U = a.useMemo(() => {
    const {
      mode: Fe
    } = e;
    if (Fe !== "combobox")
      return Fe === xo ? "combobox" : Fe;
  }, [e.mode]), G = U === "multiple" || U === "tags", A = Cl(e.suffixIcon, e.showArrow), we = (n = x ?? b) !== null && n !== void 0 ? n : z, {
    status: fe,
    hasFeedback: be,
    isFormItemInput: ye,
    feedbackIcon: Pe
  } = a.useContext(ha), Oe = Ki(fe, C);
  let Ie;
  h !== void 0 ? Ie = h : U === "combobox" ? Ie = null : Ie = I?.("Select") || /* @__PURE__ */ a.createElement(Zi, {
    componentName: "Select"
  });
  const {
    suffixIcon: xe,
    itemIcon: Xe,
    removeIcon: _e,
    clearIcon: Me
  } = Sl(Object.assign(Object.assign({}, M), {
    multiple: G,
    hasFeedback: be,
    feedbackIcon: Pe,
    showSuffixIcon: A,
    prefixCls: V,
    componentName: "Select"
  })), Ee = $ === !0 ? {
    clearIcon: Me
  } : $, De = Hn(M, ["suffixIcon", "itemIcon"]), Te = vt(s || f, {
    [`${V}-dropdown-${re}`]: re === "rtl"
  }, l, q, L, B), Ve = qr((Fe) => {
    var We;
    return (We = u ?? pe) !== null && We !== void 0 ? We : Fe;
  }), Ye = a.useContext(ba), ke = p ?? Ye, Le = vt({
    [`${V}-lg`]: Ve === "large",
    [`${V}-sm`]: Ve === "small",
    [`${V}-rtl`]: re === "rtl",
    [`${V}-${Y}`]: Q,
    [`${V}-in-form-item`]: ye
  }, Xi(V, Oe, be), X, W?.className, i, l, q, L, B), je = a.useMemo(() => d !== void 0 ? d : re === "rtl" ? "bottomRight" : "bottomLeft", [d, re]);
  if (process.env.NODE_ENV !== "production") {
    const Fe = yn("Select");
    Fe.deprecated(!f, "dropdownClassName", "popupClassName"), Fe.deprecated(b === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), process.env.NODE_ENV !== "production" && Fe(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), Fe.deprecated(!("bordered" in e), "bordered", "variant"), process.env.NODE_ENV !== "production" && Fe(!(typeof O < "u" && !G), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [qe] = Vn("SelectLike", E?.zIndex);
  return j(/* @__PURE__ */ a.createElement(Un, Object.assign({
    ref: t,
    virtual: D,
    showSearch: W?.showSearch
  }, De, {
    style: Object.assign(Object.assign({}, W?.style), S),
    dropdownMatchSelectWidth: we,
    transitionName: ln(te, "slide-up", T),
    builtinPlacements: ki(v, F),
    listHeight: m,
    listItemHeight: ce,
    mode: U,
    prefixCls: V,
    placement: je,
    direction: re,
    suffixIcon: xe,
    menuItemSelectedIcon: Xe,
    removeIcon: _e,
    allowClear: Ee,
    notFoundContent: Ie,
    className: Le,
    getPopupContainer: c || P,
    dropdownClassName: Te,
    disabled: ke,
    dropdownStyle: Object.assign(Object.assign({}, E), {
      zIndex: qe
    }),
    maxCount: G ? O : void 0,
    tagRender: G ? N : void 0
  })));
};
process.env.NODE_ENV !== "production" && (Eo.displayName = "Select");
const on = /* @__PURE__ */ a.forwardRef(Eo), wl = Sa(on);
on.SECRET_COMBOBOX_MODE_DO_NOT_USE = xo;
on.Option = Xn;
on.OptGroup = Gn;
on._InternalPanelDoNotUseOrYouWillBeFired = wl;
process.env.NODE_ENV !== "production" && (on.displayName = "Select");
const $o = ["xxl", "xl", "lg", "md", "sm", "xs"], xl = (e) => ({
  xs: `(max-width: ${e.screenXSMax}px)`,
  sm: `(min-width: ${e.screenSM}px)`,
  md: `(min-width: ${e.screenMD}px)`,
  lg: `(min-width: ${e.screenLG}px)`,
  xl: `(min-width: ${e.screenXL}px)`,
  xxl: `(min-width: ${e.screenXXL}px)`
}), El = (e) => {
  const t = e, n = [].concat($o).reverse();
  return n.forEach((r, o) => {
    const i = r.toUpperCase(), l = `screen${i}Min`, c = `screen${i}`;
    if (!(t[l] <= t[c]))
      throw new Error(`${l}<=${c} fails : !(${t[l]}<=${t[c]})`);
    if (o < n.length - 1) {
      const s = `screen${i}Max`;
      if (!(t[c] <= t[s]))
        throw new Error(`${c}<=${s} fails : !(${t[c]}<=${t[s]})`);
      const m = `screen${n[o + 1].toUpperCase()}Min`;
      if (!(t[s] <= t[m]))
        throw new Error(`${s}<=${m} fails : !(${t[s]}<=${t[m]})`);
    }
  }), e;
};
function $l() {
  const [, e] = Cn(), t = xl(El(e));
  return J.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    let r = -1, o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return o = i, n.forEach((l) => l(o)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), r += 1, n.set(r, i), i(o), r;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const l = t[i], c = this.matchHandlers[l];
          c?.mql.removeListener(c?.listener);
        }), n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const l = t[i], c = (f) => {
            let {
              matches: m
            } = f;
            this.dispatch(Object.assign(Object.assign({}, o), {
              [i]: m
            }));
          }, s = window.matchMedia(l);
          s.addListener(c), this.matchHandlers[l] = {
            mql: s,
            listener: c
          }, c(s);
        });
      },
      responsiveMap: t
    };
  }, [e]);
}
function Il() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  const t = me({}), n = Ca(), r = $l();
  return At(() => {
    const o = r.subscribe((i) => {
      t.current = i, e && n();
    });
    return () => r.unsubscribe(o);
  }, []), t.current;
}
const _n = /* @__PURE__ */ a.createContext({}), Rl = (e) => {
  const {
    antCls: t,
    componentCls: n,
    iconCls: r,
    avatarBg: o,
    avatarColor: i,
    containerSize: l,
    containerSizeLG: c,
    containerSizeSM: s,
    textFontSize: f,
    textFontSizeLG: m,
    textFontSizeSM: d,
    borderRadius: g,
    borderRadiusLG: u,
    borderRadiusSM: p,
    lineWidth: h,
    lineType: C
  } = e, v = (b, x, w) => ({
    width: b,
    height: b,
    borderRadius: "50%",
    [`&${n}-square`]: {
      borderRadius: w
    },
    [`&${n}-icon`]: {
      fontSize: x,
      [`> ${r}`]: {
        margin: 0
      }
    }
  });
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e)), {
      position: "relative",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      color: i,
      whiteSpace: "nowrap",
      textAlign: "center",
      verticalAlign: "middle",
      background: o,
      border: `${oe(h)} ${C} transparent`,
      "&-image": {
        background: "transparent"
      },
      [`${t}-image-img`]: {
        display: "block"
      }
    }), v(l, f, g)), {
      "&-lg": Object.assign({}, v(c, m, u)),
      "&-sm": Object.assign({}, v(s, d, p)),
      "> img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })
  };
}, Nl = (e) => {
  const {
    componentCls: t,
    groupBorderColor: n,
    groupOverlapping: r,
    groupSpace: o
  } = e;
  return {
    [`${t}-group`]: {
      display: "inline-flex",
      [`${t}`]: {
        borderColor: n
      },
      "> *:not(:first-child)": {
        marginInlineStart: r
      }
    },
    [`${t}-group-popover`]: {
      [`${t} + ${t}`]: {
        marginInlineStart: o
      }
    }
  };
}, Ol = (e) => {
  const {
    controlHeight: t,
    controlHeightLG: n,
    controlHeightSM: r,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: l,
    fontSizeHeading3: c,
    marginXS: s,
    marginXXS: f,
    colorBorderBg: m
  } = e;
  return {
    containerSize: t,
    containerSizeLG: n,
    containerSizeSM: r,
    textFontSize: Math.round((i + l) / 2),
    textFontSizeLG: c,
    textFontSizeSM: o,
    groupSpace: f,
    groupOverlapping: -s,
    groupBorderColor: m
  };
}, Io = nn("Avatar", (e) => {
  const {
    colorTextLightSolid: t,
    colorTextPlaceholder: n
  } = e, r = Ct(e, {
    avatarBg: n,
    avatarColor: t
  });
  return [Rl(r), Nl(r)];
}, Ol);
var Ml = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Pl = (e, t) => {
  const [n, r] = a.useState(1), [o, i] = a.useState(!1), [l, c] = a.useState(!0), s = a.useRef(null), f = a.useRef(null), m = Sn(t, s), {
    getPrefixCls: d,
    avatar: g
  } = a.useContext(zt), u = a.useContext(_n), p = () => {
    if (!f.current || !s.current)
      return;
    const Y = f.current.offsetWidth, Q = s.current.offsetWidth;
    if (Y !== 0 && Q !== 0) {
      const {
        gap: L = 4
      } = e;
      L * 2 < Q && r(Q - L * 2 < Y ? (Q - L * 2) / Y : 1);
    }
  };
  a.useEffect(() => {
    i(!0);
  }, []), a.useEffect(() => {
    c(!0), r(1);
  }, [e.src]), a.useEffect(p, [e.gap]);
  const h = () => {
    const {
      onError: Y
    } = e;
    Y?.() !== !1 && c(!1);
  }, {
    prefixCls: C,
    shape: v,
    size: b,
    src: x,
    srcSet: w,
    icon: S,
    className: $,
    rootClassName: y,
    alt: E,
    draggable: T,
    children: N,
    crossOrigin: O
  } = e, M = Ml(e, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "rootClassName", "alt", "draggable", "children", "crossOrigin"]), P = qr((Y) => {
    var Q, L;
    return (L = (Q = b ?? u?.size) !== null && Q !== void 0 ? Q : Y) !== null && L !== void 0 ? L : "default";
  }), R = Object.keys(typeof P == "object" ? P || {} : {}).some((Y) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(Y)), I = Il(R), _ = a.useMemo(() => {
    if (typeof P != "object")
      return {};
    const Y = $o.find((L) => I[L]), Q = P[Y];
    return Q ? {
      width: Q,
      height: Q,
      fontSize: Q && (S || N) ? Q / 2 : 18
    } : {};
  }, [I, P]);
  if (process.env.NODE_ENV !== "production") {
    const Y = yn("Avatar");
    process.env.NODE_ENV !== "production" && Y(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`);
  }
  const D = d("avatar", C), z = cn(D), [F, W, ae] = Io(D, z), ce = vt({
    [`${D}-lg`]: P === "large",
    [`${D}-sm`]: P === "small"
  }), V = /* @__PURE__ */ a.isValidElement(x), te = v || u?.shape || "circle", re = vt(D, ce, g?.className, `${D}-${te}`, {
    [`${D}-image`]: V || x && l,
    [`${D}-icon`]: !!S
  }, ae, z, $, y, W), pe = typeof P == "number" ? {
    width: P,
    height: P,
    fontSize: S ? P / 2 : 18
  } : {};
  let X;
  if (typeof x == "string" && l)
    X = /* @__PURE__ */ a.createElement("img", {
      src: x,
      draggable: T,
      srcSet: w,
      onError: h,
      alt: E,
      crossOrigin: O
    });
  else if (V)
    X = x;
  else if (S)
    X = S;
  else if (o || n !== 1) {
    const Y = `scale(${n})`, Q = {
      msTransform: Y,
      WebkitTransform: Y,
      transform: Y
    };
    X = /* @__PURE__ */ a.createElement(jn, {
      onResize: p
    }, /* @__PURE__ */ a.createElement("span", {
      className: `${D}-string`,
      ref: f,
      style: Object.assign({}, Q)
    }, N));
  } else
    X = /* @__PURE__ */ a.createElement("span", {
      className: `${D}-string`,
      style: {
        opacity: 0
      },
      ref: f
    }, N);
  return delete M.onError, delete M.gap, F(/* @__PURE__ */ a.createElement("span", Object.assign({}, M, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, pe), _), g?.style), M.style),
    className: re,
    ref: m
  }), X));
}, Yn = /* @__PURE__ */ a.forwardRef(Pl);
process.env.NODE_ENV !== "production" && (Yn.displayName = "Avatar");
const Mr = (e) => {
  const {
    size: t,
    shape: n
  } = a.useContext(_n), r = a.useMemo(() => ({
    size: e.size || t,
    shape: e.shape || n
  }), [e.size, e.shape, t, n]);
  return /* @__PURE__ */ a.createElement(_n.Provider, {
    value: r
  }, e.children);
}, Tl = (e) => {
  var t, n, r;
  const {
    getPrefixCls: o,
    direction: i
  } = a.useContext(zt), {
    prefixCls: l,
    className: c,
    rootClassName: s,
    style: f,
    maxCount: m,
    maxStyle: d,
    size: g,
    shape: u,
    maxPopoverPlacement: p,
    maxPopoverTrigger: h,
    children: C,
    max: v
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const M = yn("Avatar.Group");
    M.deprecated(!m, "maxCount", "max={{ count: number }}"), M.deprecated(!d, "maxStyle", "max={{ style: CSSProperties }}"), M.deprecated(!p, "maxPopoverPlacement", "max={{ popover: PopoverProps }}"), M.deprecated(!h, "maxPopoverTrigger", "max={{ popover: PopoverProps }}");
  }
  const b = o("avatar", l), x = `${b}-group`, w = cn(b), [S, $, y] = Io(b, w), E = vt(x, {
    [`${x}-rtl`]: i === "rtl"
  }, y, w, c, s, $), T = an(C).map((M, P) => ya(M, {
    key: `avatar-key-${P}`
  })), N = v?.count || m, O = T.length;
  if (N && N < O) {
    const M = T.slice(0, N), P = T.slice(N, O), R = v?.style || d, I = ((t = v?.popover) === null || t === void 0 ? void 0 : t.trigger) || h || "hover", _ = ((n = v?.popover) === null || n === void 0 ? void 0 : n.placement) || p || "top", D = Object.assign(Object.assign({
      content: P
    }, v?.popover), {
      overlayClassName: vt(`${x}-popover`, (r = v?.popover) === null || r === void 0 ? void 0 : r.overlayClassName),
      placement: _,
      trigger: I
    });
    return M.push(/* @__PURE__ */ a.createElement(wa, Object.assign({
      key: "avatar-popover-key",
      destroyTooltipOnHide: !0
    }, D), /* @__PURE__ */ a.createElement(Yn, {
      style: R
    }, `+${O - N}`))), S(/* @__PURE__ */ a.createElement(Mr, {
      shape: u,
      size: g
    }, /* @__PURE__ */ a.createElement("div", {
      className: E,
      style: f
    }, M)));
  }
  return S(/* @__PURE__ */ a.createElement(Mr, {
    shape: u,
    size: g
  }, /* @__PURE__ */ a.createElement("div", {
    className: E,
    style: f
  }, T)));
}, qn = Yn;
qn.Group = Tl;
function zl(e) {
  return Ct(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const _l = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightSM: i,
    controlHeightLG: l,
    fontSizeLG: c,
    lineHeightLG: s,
    paddingSM: f,
    controlPaddingHorizontalSM: m,
    controlPaddingHorizontal: d,
    colorFillAlter: g,
    colorPrimaryHover: u,
    colorPrimary: p,
    controlOutlineWidth: h,
    controlOutline: C,
    colorErrorOutline: v,
    colorWarningOutline: b,
    colorBgContainer: x
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockSM: Math.max(Math.round((i - n * r) / 2 * 10) / 10 - o, 0),
    paddingBlockLG: Math.ceil((l - c * s) / 2 * 10) / 10 - o,
    paddingInline: f - o,
    paddingInlineSM: m - o,
    paddingInlineLG: d - o,
    addonBg: g,
    activeBorderColor: p,
    hoverBorderColor: u,
    activeShadow: `0 0 0 ${h}px ${C}`,
    errorActiveShadow: `0 0 0 ${h}px ${v}`,
    warningActiveShadow: `0 0 0 ${h}px ${b}`,
    hoverBg: x,
    activeBg: x,
    inputFontSize: n,
    inputFontSizeLG: c,
    inputFontSizeSM: n
  };
}, Dl = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Zn = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, Dl(Ct(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Ro = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Pr = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Ro(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), Ll = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ro(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Zn(e))
  }), Pr(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Pr(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Tr = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), Bl = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Tr(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Tr(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Zn(e))
    }
  })
}), jl = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, No = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t?.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), zr = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, No(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), Hl = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, No(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Zn(e))
  }), zr(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), zr(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), _r = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), Vl = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, _r(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), _r(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${oe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Al = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Oo = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${oe(t)} ${oe(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, Mo = (e) => ({
  padding: `${oe(e.paddingBlockSM)} ${oe(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Po = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${oe(e.paddingBlock)} ${oe(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Al(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, Oo(e)),
  "&-sm": Object.assign({}, Mo(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), Fl = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Oo(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Mo(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${oe(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${oe(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${oe(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${n}-select-selector`]: {
              color: e.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${oe(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [`${t}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, xa()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${t}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, Wl = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: o
  } = e, l = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e)), Po(e)), Ll(e)), Hl(e)), jl(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: l,
          paddingBottom: l
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, Gl = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${oe(e.inputAffixPadding)}`
      }
    }
  };
}, Xl = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: i,
    colorIconHover: l,
    iconCls: c
  } = e;
  return {
    [`${t}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign({}, Po(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${t}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), Gl(e)), {
      // password
      [`${c}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: l
        }
      }
    })
  };
}, Kl = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Ut(e)), Fl(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, Bl(e)), Vl(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, Ul = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [`${t}`]: {
        "&:hover, &:focus": {
          borderColor: e.colorPrimaryHover,
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: e.borderRadius,
            borderEndEndRadius: e.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${r}-button`]: {
        height: e.controlHeightLG
      },
      [`&-small ${r}-button`]: {
        height: e.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, Yl = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    [r]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, ql = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, cs = nn("Input", (e) => {
  const t = Ct(e, zl(e));
  return [
    Wl(t),
    Yl(t),
    Xl(t),
    Kl(t),
    Ul(t),
    ql(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Kr(t)
  ];
}, _l, {
  resetFont: !1
}), To = /* @__PURE__ */ J.createContext({
  latestIndex: 0
}), Zl = To.Provider, Ql = (e) => {
  let {
    className: t,
    index: n,
    children: r,
    split: o,
    style: i
  } = e;
  const {
    latestIndex: l
  } = a.useContext(To);
  return r == null ? null : /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
    className: t,
    style: i
  }, r), n < l && o && /* @__PURE__ */ a.createElement("span", {
    className: `${t}-split`
  }, o));
};
var Jl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const kl = /* @__PURE__ */ a.forwardRef((e, t) => {
  var n, r, o;
  const {
    getPrefixCls: i,
    space: l,
    direction: c
  } = a.useContext(zt), {
    size: s = (n = l?.size) !== null && n !== void 0 ? n : "small",
    align: f,
    className: m,
    rootClassName: d,
    children: g,
    direction: u = "horizontal",
    prefixCls: p,
    split: h,
    style: C,
    wrap: v = !1,
    classNames: b,
    styles: x
  } = e, w = Jl(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [S, $] = Array.isArray(s) ? s : [s, s], y = ar($), E = ar(S), T = ir($), N = ir(S), O = an(g, {
    keepEmpty: !0
  }), M = f === void 0 && u === "horizontal" ? "center" : f, P = i("space", p), [R, I, _] = Ea(P), D = vt(P, l?.className, I, `${P}-${u}`, {
    [`${P}-rtl`]: c === "rtl",
    [`${P}-align-${M}`]: M,
    [`${P}-gap-row-${$}`]: y,
    [`${P}-gap-col-${S}`]: E
  }, m, d, _), z = vt(`${P}-item`, (r = b?.item) !== null && r !== void 0 ? r : (o = l?.classNames) === null || o === void 0 ? void 0 : o.item);
  let F = 0;
  const W = O.map((V, te) => {
    var re, pe;
    V != null && (F = te);
    const X = V?.key || `${z}-${te}`;
    return /* @__PURE__ */ a.createElement(Ql, {
      className: z,
      key: X,
      index: te,
      split: h,
      style: (re = x?.item) !== null && re !== void 0 ? re : (pe = l?.styles) === null || pe === void 0 ? void 0 : pe.item
    }, V);
  }), ae = a.useMemo(() => ({
    latestIndex: F
  }), [F]);
  if (O.length === 0)
    return null;
  const ce = {};
  return v && (ce.flexWrap = "wrap"), !E && N && (ce.columnGap = S), !y && T && (ce.rowGap = $), R(/* @__PURE__ */ a.createElement("div", Object.assign({
    ref: t,
    className: D,
    style: Object.assign(Object.assign(Object.assign({}, ce), l?.style), C)
  }, w), /* @__PURE__ */ a.createElement(Zl, {
    value: ae
  }, W)));
}), Qn = kl;
Qn.Compact = $a;
process.env.NODE_ENV !== "production" && (Qn.displayName = "Space");
var ec = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const zo = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: n,
    direction: r
  } = a.useContext(zt), {
    prefixCls: o,
    type: i = "default",
    danger: l,
    disabled: c,
    loading: s,
    onClick: f,
    htmlType: m,
    children: d,
    className: g,
    menu: u,
    arrow: p,
    autoFocus: h,
    overlay: C,
    trigger: v,
    align: b,
    open: x,
    onOpenChange: w,
    placement: S,
    getPopupContainer: $,
    href: y,
    icon: E = /* @__PURE__ */ a.createElement(Ia, null),
    title: T,
    buttonsRender: N = (Y) => Y,
    mouseEnterDelay: O,
    mouseLeaveDelay: M,
    overlayClassName: P,
    overlayStyle: R,
    destroyPopupOnHide: I,
    dropdownRender: _
  } = e, D = ec(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]), z = n("dropdown", o), F = `${z}-button`, W = {
    menu: u,
    arrow: p,
    autoFocus: h,
    align: b,
    disabled: c,
    trigger: c ? [] : v,
    onOpenChange: w,
    getPopupContainer: $ || t,
    mouseEnterDelay: O,
    mouseLeaveDelay: M,
    overlayClassName: P,
    overlayStyle: R,
    destroyPopupOnHide: I,
    dropdownRender: _
  }, {
    compactSize: ae,
    compactItemClassnames: ce
  } = Yr(z, r), V = vt(F, ce, g);
  "overlay" in e && (W.overlay = C), "open" in e && (W.open = x), "placement" in e ? W.placement = S : W.placement = r === "rtl" ? "bottomLeft" : "bottomRight";
  const te = /* @__PURE__ */ a.createElement(lr, {
    type: i,
    danger: l,
    disabled: c,
    loading: s,
    onClick: f,
    htmlType: m,
    href: y,
    title: T
  }, d), re = /* @__PURE__ */ a.createElement(lr, {
    type: i,
    danger: l,
    icon: E
  }), [pe, X] = N([te, re]);
  return /* @__PURE__ */ a.createElement(Qn.Compact, Object.assign({
    className: V,
    size: ae,
    block: !0
  }, D), pe, /* @__PURE__ */ a.createElement(Zr, Object.assign({}, W), X));
};
zo.__ANT_BUTTON = !0;
const _o = Zr;
_o.Button = zo;
function Do() {
  var e = document.documentElement.clientWidth, t = window.innerHeight || document.documentElement.clientHeight;
  return {
    width: e,
    height: t
  };
}
function tc(e) {
  var t = e.getBoundingClientRect(), n = document.documentElement;
  return {
    left: t.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
    top: t.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
  };
}
function kt(e, t, n, r) {
  var o = sr.unstable_batchedUpdates ? function(l) {
    sr.unstable_batchedUpdates(n, l);
  } : n;
  return e != null && e.addEventListener && e.addEventListener(t, o, r), {
    remove: function() {
      e != null && e.removeEventListener && e.removeEventListener(t, o, r);
    }
  };
}
var sn = /* @__PURE__ */ a.createContext(null), nc = function(t) {
  var n = t.visible, r = t.maskTransitionName, o = t.getContainer, i = t.prefixCls, l = t.rootClassName, c = t.icons, s = t.countRender, f = t.showSwitch, m = t.showProgress, d = t.current, g = t.transform, u = t.count, p = t.scale, h = t.minScale, C = t.maxScale, v = t.closeIcon, b = t.onSwitchLeft, x = t.onSwitchRight, w = t.onClose, S = t.onZoomIn, $ = t.onZoomOut, y = t.onRotateRight, E = t.onRotateLeft, T = t.onFlipX, N = t.onFlipY, O = t.onReset, M = t.toolbarRender, P = t.zIndex, R = t.image, I = tn(sn), _ = c.rotateLeft, D = c.rotateRight, z = c.zoomIn, F = c.zoomOut, W = c.close, ae = c.left, ce = c.right, V = c.flipX, te = c.flipY, re = "".concat(i, "-operations-operation");
  a.useEffect(function() {
    var Q = function(j) {
      j.keyCode === le.ESC && w();
    };
    return n && window.addEventListener("keydown", Q), function() {
      window.removeEventListener("keydown", Q);
    };
  }, [n]);
  var pe = [{
    icon: te,
    onClick: N,
    type: "flipY"
  }, {
    icon: V,
    onClick: T,
    type: "flipX"
  }, {
    icon: _,
    onClick: E,
    type: "rotateLeft"
  }, {
    icon: D,
    onClick: y,
    type: "rotateRight"
  }, {
    icon: F,
    onClick: $,
    type: "zoomOut",
    disabled: p <= h
  }, {
    icon: z,
    onClick: S,
    type: "zoomIn",
    disabled: p === C
  }], X = pe.map(function(Q) {
    var L, j = Q.icon, B = Q.onClick, q = Q.type, U = Q.disabled;
    return /* @__PURE__ */ a.createElement("div", {
      className: ve(re, (L = {}, K(L, "".concat(i, "-operations-operation-").concat(q), !0), K(L, "".concat(i, "-operations-operation-disabled"), !!U), L)),
      onClick: B,
      key: q
    }, j);
  }), Y = /* @__PURE__ */ a.createElement("div", {
    className: "".concat(i, "-operations")
  }, X);
  return /* @__PURE__ */ a.createElement(bn, {
    visible: n,
    motionName: r
  }, function(Q) {
    var L = Q.className, j = Q.style;
    return /* @__PURE__ */ a.createElement(Fr, {
      open: !0,
      getContainer: o ?? document.body
    }, /* @__PURE__ */ a.createElement("div", {
      className: ve("".concat(i, "-operations-wrapper"), L, l),
      style: H(H({}, j), {}, {
        zIndex: P
      })
    }, v === null ? null : /* @__PURE__ */ a.createElement("button", {
      className: "".concat(i, "-close"),
      onClick: w
    }, v || W), f && /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
      className: ve("".concat(i, "-switch-left"), K({}, "".concat(i, "-switch-left-disabled"), d === 0)),
      onClick: b
    }, ae), /* @__PURE__ */ a.createElement("div", {
      className: ve("".concat(i, "-switch-right"), K({}, "".concat(i, "-switch-right-disabled"), d === u - 1)),
      onClick: x
    }, ce)), /* @__PURE__ */ a.createElement("div", {
      className: "".concat(i, "-footer")
    }, m && /* @__PURE__ */ a.createElement("div", {
      className: "".concat(i, "-progress")
    }, s ? s(d + 1, u) : "".concat(d + 1, " / ").concat(u)), M ? M(Y, H(H({
      icons: {
        flipYIcon: X[0],
        flipXIcon: X[1],
        rotateLeftIcon: X[2],
        rotateRightIcon: X[3],
        zoomOutIcon: X[4],
        zoomInIcon: X[5]
      },
      actions: {
        onFlipY: N,
        onFlipX: T,
        onRotateLeft: E,
        onRotateRight: y,
        onZoomOut: $,
        onZoomIn: S,
        onReset: O,
        onClose: w
      },
      transform: g
    }, I ? {
      current: d,
      total: u
    } : {}), {}, {
      image: R
    })) : Y)));
  });
}, fn = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  flipX: !1,
  flipY: !1
};
function rc(e, t, n, r) {
  var o = me(null), i = me([]), l = mt(fn), c = ne(l, 2), s = c[0], f = c[1], m = function(p) {
    f(fn), Ra(fn, s) || r?.({
      transform: fn,
      action: p
    });
  }, d = function(p, h) {
    o.current === null && (i.current = [], o.current = Nt(function() {
      f(function(C) {
        var v = C;
        return i.current.forEach(function(b) {
          v = H(H({}, v), b);
        }), o.current = null, r?.({
          transform: v,
          action: h
        }), v;
      });
    })), i.current.push(H(H({}, s), p));
  }, g = function(p, h, C, v, b) {
    var x = e.current, w = x.width, S = x.height, $ = x.offsetWidth, y = x.offsetHeight, E = x.offsetLeft, T = x.offsetTop, N = p, O = s.scale * p;
    O > n ? (O = n, N = n / s.scale) : O < t && (O = b ? O : t, N = O / s.scale);
    var M = C ?? innerWidth / 2, P = v ?? innerHeight / 2, R = N - 1, I = R * w * 0.5, _ = R * S * 0.5, D = R * (M - s.x - E), z = R * (P - s.y - T), F = s.x - (D - I), W = s.y - (z - _);
    if (p < 1 && O === 1) {
      var ae = $ * O, ce = y * O, V = Do(), te = V.width, re = V.height;
      ae <= te && ce <= re && (F = 0, W = 0);
    }
    d({
      x: F,
      y: W,
      scale: O
    }, h);
  };
  return {
    transform: s,
    resetTransform: m,
    updateTransform: d,
    dispatchZoomChange: g
  };
}
function Dr(e, t, n, r) {
  var o = t + n, i = (n - r) / 2;
  if (n > r) {
    if (t > 0)
      return K({}, e, i);
    if (t < 0 && o < r)
      return K({}, e, -i);
  } else if (t < 0 || o > r)
    return K({}, e, t < 0 ? i : -i);
  return {};
}
function Lo(e, t, n, r) {
  var o = Do(), i = o.width, l = o.height, c = null;
  return e <= i && t <= l ? c = {
    x: 0,
    y: 0
  } : (e > i || t > l) && (c = H(H({}, Dr("x", n, e, i)), Dr("y", r, t, l))), c;
}
var en = 1, oc = 1;
function ac(e, t, n, r, o, i, l) {
  var c = o.rotate, s = o.scale, f = o.x, m = o.y, d = mt(!1), g = ne(d, 2), u = g[0], p = g[1], h = me({
    diffX: 0,
    diffY: 0,
    transformX: 0,
    transformY: 0
  }), C = function(S) {
    !t || S.button !== 0 || (S.preventDefault(), S.stopPropagation(), h.current = {
      diffX: S.pageX - f,
      diffY: S.pageY - m,
      transformX: f,
      transformY: m
    }, p(!0));
  }, v = function(S) {
    n && u && i({
      x: S.pageX - h.current.diffX,
      y: S.pageY - h.current.diffY
    }, "move");
  }, b = function() {
    if (n && u) {
      p(!1);
      var S = h.current, $ = S.transformX, y = S.transformY, E = f !== $ && m !== y;
      if (!E) return;
      var T = e.current.offsetWidth * s, N = e.current.offsetHeight * s, O = e.current.getBoundingClientRect(), M = O.left, P = O.top, R = c % 180 !== 0, I = Lo(R ? N : T, R ? T : N, M, P);
      I && i(H({}, I), "dragRebound");
    }
  }, x = function(S) {
    if (!(!n || S.deltaY == 0)) {
      var $ = Math.abs(S.deltaY / 100), y = Math.min($, oc), E = en + y * r;
      S.deltaY > 0 && (E = en / E), l(E, "wheel", S.clientX, S.clientY);
    }
  };
  return St(function() {
    var w, S, $, y;
    if (t) {
      $ = kt(window, "mouseup", b, !1), y = kt(window, "mousemove", v, !1);
      try {
        window.top !== window.self && (w = kt(window.top, "mouseup", b, !1), S = kt(window.top, "mousemove", v, !1));
      } catch (E) {
        vn(!1, "[rc-image] ".concat(E));
      }
    }
    return function() {
      var E, T, N, O;
      (E = $) === null || E === void 0 || E.remove(), (T = y) === null || T === void 0 || T.remove(), (N = w) === null || N === void 0 || N.remove(), (O = S) === null || O === void 0 || O.remove();
    };
  }, [n, u, f, m, c, t]), {
    isMoving: u,
    onMouseDown: C,
    onMouseMove: v,
    onMouseUp: b,
    onWheel: x
  };
}
function ic(e) {
  return new Promise(function(t) {
    var n = document.createElement("img");
    n.onerror = function() {
      return t(!1);
    }, n.onload = function() {
      return t(!0);
    }, n.src = e;
  });
}
function Bo(e) {
  var t = e.src, n = e.isCustomPlaceholder, r = e.fallback, o = mt(n ? "loading" : "normal"), i = ne(o, 2), l = i[0], c = i[1], s = me(!1), f = l === "error";
  St(function() {
    var u = !0;
    return ic(t).then(function(p) {
      !p && u && c("error");
    }), function() {
      u = !1;
    };
  }, [t]), St(function() {
    n && !s.current ? c("loading") : f && c("normal");
  }, [t]);
  var m = function() {
    c("normal");
  }, d = function(p) {
    s.current = !1, l === "loading" && p !== null && p !== void 0 && p.complete && (p.naturalWidth || p.naturalHeight) && (s.current = !0, m());
  }, g = f && r ? {
    src: r
  } : {
    onLoad: m,
    src: t
  };
  return [d, g, l];
}
function hn(e, t) {
  var n = e.x - t.x, r = e.y - t.y;
  return Math.hypot(n, r);
}
function lc(e, t, n, r) {
  var o = hn(e, n), i = hn(t, r);
  if (o === 0 && i === 0)
    return [e.x, e.y];
  var l = o / (o + i), c = e.x + l * (t.x - e.x), s = e.y + l * (t.y - e.y);
  return [c, s];
}
function cc(e, t, n, r, o, i, l) {
  var c = o.rotate, s = o.scale, f = o.x, m = o.y, d = mt(!1), g = ne(d, 2), u = g[0], p = g[1], h = me({
    point1: {
      x: 0,
      y: 0
    },
    point2: {
      x: 0,
      y: 0
    },
    eventType: "none"
  }), C = function(S) {
    h.current = H(H({}, h.current), S);
  }, v = function(S) {
    if (t) {
      S.stopPropagation(), p(!0);
      var $ = S.touches, y = $ === void 0 ? [] : $;
      y.length > 1 ? C({
        point1: {
          x: y[0].clientX,
          y: y[0].clientY
        },
        point2: {
          x: y[1].clientX,
          y: y[1].clientY
        },
        eventType: "touchZoom"
      }) : C({
        point1: {
          x: y[0].clientX - f,
          y: y[0].clientY - m
        },
        eventType: "move"
      });
    }
  }, b = function(S) {
    var $ = S.touches, y = $ === void 0 ? [] : $, E = h.current, T = E.point1, N = E.point2, O = E.eventType;
    if (y.length > 1 && O === "touchZoom") {
      var M = {
        x: y[0].clientX,
        y: y[0].clientY
      }, P = {
        x: y[1].clientX,
        y: y[1].clientY
      }, R = lc(T, N, M, P), I = ne(R, 2), _ = I[0], D = I[1], z = hn(M, P) / hn(T, N);
      l(z, "touchZoom", _, D, !0), C({
        point1: M,
        point2: P,
        eventType: "touchZoom"
      });
    } else O === "move" && (i({
      x: y[0].clientX - T.x,
      y: y[0].clientY - T.y
    }, "move"), C({
      eventType: "move"
    }));
  }, x = function() {
    if (n) {
      if (u && p(!1), C({
        eventType: "none"
      }), r > s)
        return i({
          x: 0,
          y: 0,
          scale: r
        }, "touchZoom");
      var S = e.current.offsetWidth * s, $ = e.current.offsetHeight * s, y = e.current.getBoundingClientRect(), E = y.left, T = y.top, N = c % 180 !== 0, O = Lo(N ? $ : S, N ? S : $, E, T);
      O && i(H({}, O), "dragRebound");
    }
  };
  return St(function() {
    var w;
    return n && t && (w = kt(window, "touchmove", function(S) {
      return S.preventDefault();
    }, {
      passive: !1
    })), function() {
      var S;
      (S = w) === null || S === void 0 || S.remove();
    };
  }, [n, t]), {
    isTouching: u,
    onTouchStart: v,
    onTouchMove: b,
    onTouchEnd: x
  };
}
var sc = ["fallback", "src", "imgRef"], uc = ["prefixCls", "src", "alt", "imageInfo", "fallback", "movable", "onClose", "visible", "icons", "rootClassName", "closeIcon", "getContainer", "current", "count", "countRender", "scaleStep", "minScale", "maxScale", "transitionName", "maskTransitionName", "imageRender", "imgCommonProps", "toolbarRender", "onTransform", "onChange"], dc = function(t) {
  var n = t.fallback, r = t.src, o = t.imgRef, i = tt(t, sc), l = Bo({
    src: r,
    fallback: n
  }), c = ne(l, 2), s = c[0], f = c[1];
  return /* @__PURE__ */ J.createElement("img", ge({
    ref: function(d) {
      o.current = d, s(d);
    }
  }, i, f));
}, jo = function(t) {
  var n = t.prefixCls, r = t.src, o = t.alt, i = t.imageInfo, l = t.fallback, c = t.movable, s = c === void 0 ? !0 : c, f = t.onClose, m = t.visible, d = t.icons, g = d === void 0 ? {} : d, u = t.rootClassName, p = t.closeIcon, h = t.getContainer, C = t.current, v = C === void 0 ? 0 : C, b = t.count, x = b === void 0 ? 1 : b, w = t.countRender, S = t.scaleStep, $ = S === void 0 ? 0.5 : S, y = t.minScale, E = y === void 0 ? 1 : y, T = t.maxScale, N = T === void 0 ? 50 : T, O = t.transitionName, M = O === void 0 ? "zoom" : O, P = t.maskTransitionName, R = P === void 0 ? "fade" : P, I = t.imageRender, _ = t.imgCommonProps, D = t.toolbarRender, z = t.onTransform, F = t.onChange, W = tt(t, uc), ae = me(), ce = tn(sn), V = ce && x > 1, te = ce && x >= 1, re = mt(!0), pe = ne(re, 2), X = pe[0], Y = pe[1], Q = rc(ae, E, N, z), L = Q.transform, j = Q.resetTransform, B = Q.updateTransform, q = Q.dispatchZoomChange, U = ac(ae, s, m, $, L, B, q), G = U.isMoving, A = U.onMouseDown, we = U.onWheel, fe = cc(ae, s, m, E, L, B, q), be = fe.isTouching, ye = fe.onTouchStart, Pe = fe.onTouchMove, Oe = fe.onTouchEnd, Ie = L.rotate, xe = L.scale, Xe = ve(K({}, "".concat(n, "-moving"), G));
  St(function() {
    X || Y(!0);
  }, [X]);
  var _e = function() {
    j("close");
  }, Me = function() {
    q(en + $, "zoomIn");
  }, Ee = function() {
    q(en / (en + $), "zoomOut");
  }, De = function() {
    B({
      rotate: Ie + 90
    }, "rotateRight");
  }, Te = function() {
    B({
      rotate: Ie - 90
    }, "rotateLeft");
  }, Ve = function() {
    B({
      flipX: !L.flipX
    }, "flipX");
  }, Ye = function() {
    B({
      flipY: !L.flipY
    }, "flipY");
  }, ke = function() {
    j("reset");
  }, Le = function(ze) {
    ze?.preventDefault(), ze?.stopPropagation(), v > 0 && (Y(!1), j("prev"), F?.(v - 1, v));
  }, je = function(ze) {
    ze?.preventDefault(), ze?.stopPropagation(), v < x - 1 && (Y(!1), j("next"), F?.(v + 1, v));
  }, qe = function(ze) {
    !m || !V || (ze.keyCode === le.LEFT ? Le() : ze.keyCode === le.RIGHT && je());
  }, Fe = function(ze) {
    m && (xe !== 1 ? B({
      x: 0,
      y: 0,
      scale: 1
    }, "doubleClick") : q(en + $, "doubleClick", ze.clientX, ze.clientY));
  };
  St(function() {
    var Ke = kt(window, "keydown", qe, !1);
    return function() {
      Ke.remove();
    };
  }, [m, V, v]);
  var We = /* @__PURE__ */ J.createElement(dc, ge({}, _, {
    width: t.width,
    height: t.height,
    imgRef: ae,
    className: "".concat(n, "-img"),
    alt: o,
    style: {
      transform: "translate3d(".concat(L.x, "px, ").concat(L.y, "px, 0) scale3d(").concat(L.flipX ? "-" : "").concat(xe, ", ").concat(L.flipY ? "-" : "").concat(xe, ", 1) rotate(").concat(Ie, "deg)"),
      transitionDuration: (!X || be) && "0s"
    },
    fallback: l,
    src: r,
    onWheel: we,
    onMouseDown: A,
    onDoubleClick: Fe,
    onTouchStart: ye,
    onTouchMove: Pe,
    onTouchEnd: Oe,
    onTouchCancel: Oe
  })), ot = H({
    url: r,
    alt: o
  }, i);
  return /* @__PURE__ */ J.createElement(J.Fragment, null, /* @__PURE__ */ J.createElement(to, ge({
    transitionName: M,
    maskTransitionName: R,
    closable: !1,
    keyboard: !0,
    prefixCls: n,
    onClose: f,
    visible: m,
    classNames: {
      wrapper: Xe
    },
    rootClassName: u,
    getContainer: h
  }, W, {
    afterClose: _e
  }), /* @__PURE__ */ J.createElement("div", {
    className: "".concat(n, "-img-wrapper")
  }, I ? I(We, H({
    transform: L,
    image: ot
  }, ce ? {
    current: v
  } : {})) : We)), /* @__PURE__ */ J.createElement(nc, {
    visible: m,
    transform: L,
    maskTransitionName: R,
    closeIcon: p,
    getContainer: h,
    prefixCls: n,
    rootClassName: u,
    icons: g,
    countRender: w,
    showSwitch: V,
    showProgress: te,
    current: v,
    count: x,
    scale: xe,
    minScale: E,
    maxScale: N,
    toolbarRender: D,
    onSwitchLeft: Le,
    onSwitchRight: je,
    onZoomIn: Me,
    onZoomOut: Ee,
    onRotateRight: De,
    onRotateLeft: Te,
    onFlipX: Ve,
    onFlipY: Ye,
    onClose: f,
    onReset: ke,
    zIndex: W.zIndex !== void 0 ? W.zIndex + 1 : void 0,
    image: ot
  }));
}, Dn = ["crossOrigin", "decoding", "draggable", "loading", "referrerPolicy", "sizes", "srcSet", "useMap", "alt"];
function fc(e) {
  var t = a.useState({}), n = ne(t, 2), r = n[0], o = n[1], i = a.useCallback(function(c, s) {
    return o(function(f) {
      return H(H({}, f), {}, K({}, c, s));
    }), function() {
      o(function(f) {
        var m = H({}, f);
        return delete m[c], m;
      });
    };
  }, []), l = a.useMemo(function() {
    return e ? e.map(function(c) {
      if (typeof c == "string")
        return {
          data: {
            src: c
          }
        };
      var s = {};
      return Object.keys(c).forEach(function(f) {
        ["src"].concat(bt(Dn)).includes(f) && (s[f] = c[f]);
      }), {
        data: s
      };
    }) : Object.keys(r).reduce(function(c, s) {
      var f = r[s], m = f.canPreview, d = f.data;
      return m && c.push({
        data: d,
        id: s
      }), c;
    }, []);
  }, [e, r]);
  return [l, i, !!e];
}
var mc = ["visible", "onVisibleChange", "getContainer", "current", "movable", "minScale", "maxScale", "countRender", "closeIcon", "onChange", "onTransform", "toolbarRender", "imageRender"], vc = ["src"], gc = function(t) {
  var n, r = t.previewPrefixCls, o = r === void 0 ? "rc-image-preview" : r, i = t.children, l = t.icons, c = l === void 0 ? {} : l, s = t.items, f = t.preview, m = t.fallback, d = ct(f) === "object" ? f : {}, g = d.visible, u = d.onVisibleChange, p = d.getContainer, h = d.current, C = d.movable, v = d.minScale, b = d.maxScale, x = d.countRender, w = d.closeIcon, S = d.onChange, $ = d.onTransform, y = d.toolbarRender, E = d.imageRender, T = tt(d, mc), N = fc(s), O = ne(N, 3), M = O[0], P = O[1], R = O[2], I = Tt(0, {
    value: h
  }), _ = ne(I, 2), D = _[0], z = _[1], F = mt(!1), W = ne(F, 2), ae = W[0], ce = W[1], V = ((n = M[D]) === null || n === void 0 ? void 0 : n.data) || {}, te = V.src, re = tt(V, vc), pe = Tt(!!g, {
    value: g,
    onChange: function(be, ye) {
      u?.(be, ye, D);
    }
  }), X = ne(pe, 2), Y = X[0], Q = X[1], L = mt(null), j = ne(L, 2), B = j[0], q = j[1], U = a.useCallback(function(fe, be, ye, Pe) {
    var Oe = R ? M.findIndex(function(Ie) {
      return Ie.data.src === be;
    }) : M.findIndex(function(Ie) {
      return Ie.id === fe;
    });
    z(Oe < 0 ? 0 : Oe), Q(!0), q({
      x: ye,
      y: Pe
    }), ce(!0);
  }, [M, R]);
  a.useEffect(function() {
    Y ? ae || z(0) : ce(!1);
  }, [Y]);
  var G = function(be, ye) {
    z(be), S?.(be, ye);
  }, A = function() {
    Q(!1), q(null);
  }, we = a.useMemo(function() {
    return {
      register: P,
      onPreview: U
    };
  }, [P, U]);
  return /* @__PURE__ */ a.createElement(sn.Provider, {
    value: we
  }, i, /* @__PURE__ */ a.createElement(jo, ge({
    "aria-hidden": !Y,
    movable: C,
    visible: Y,
    prefixCls: o,
    closeIcon: w,
    onClose: A,
    mousePosition: B,
    imgCommonProps: re,
    src: te,
    fallback: m,
    icons: c,
    minScale: v,
    maxScale: b,
    getContainer: p,
    current: D,
    count: M.length,
    countRender: x,
    onTransform: $,
    toolbarRender: y,
    imageRender: E,
    onChange: G
  }, T)));
}, Lr = 0;
function pc(e, t) {
  var n = a.useState(function() {
    return Lr += 1, String(Lr);
  }), r = ne(n, 1), o = r[0], i = a.useContext(sn), l = {
    data: t,
    canPreview: e
  };
  return a.useEffect(function() {
    if (i)
      return i.register(o, l);
  }, []), a.useEffect(function() {
    i && i.register(o, l);
  }, [e, t]), o;
}
var hc = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName"], bc = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "movable", "icons", "scaleStep", "minScale", "maxScale", "imageRender", "toolbarRender"], En = function(t) {
  var n = t.src, r = t.alt, o = t.onPreviewClose, i = t.prefixCls, l = i === void 0 ? "rc-image" : i, c = t.previewPrefixCls, s = c === void 0 ? "".concat(l, "-preview") : c, f = t.placeholder, m = t.fallback, d = t.width, g = t.height, u = t.style, p = t.preview, h = p === void 0 ? !0 : p, C = t.className, v = t.onClick, b = t.onError, x = t.wrapperClassName, w = t.wrapperStyle, S = t.rootClassName, $ = tt(t, hc), y = f && f !== !0, E = ct(h) === "object" ? h : {}, T = E.src, N = E.visible, O = N === void 0 ? void 0 : N, M = E.onVisibleChange, P = M === void 0 ? o : M, R = E.getContainer, I = R === void 0 ? void 0 : R, _ = E.mask, D = E.maskClassName, z = E.movable, F = E.icons, W = E.scaleStep, ae = E.minScale, ce = E.maxScale, V = E.imageRender, te = E.toolbarRender, re = tt(E, bc), pe = T ?? n, X = Tt(!!O, {
    value: O,
    onChange: P
  }), Y = ne(X, 2), Q = Y[0], L = Y[1], j = Bo({
    src: n,
    isCustomPlaceholder: y,
    fallback: m
  }), B = ne(j, 3), q = B[0], U = B[1], G = B[2], A = mt(null), we = ne(A, 2), fe = we[0], be = we[1], ye = tn(sn), Pe = !!h, Oe = function() {
    L(!1), be(null);
  }, Ie = ve(l, x, S, K({}, "".concat(l, "-error"), G === "error")), xe = mn(function() {
    var Ee = {};
    return Dn.forEach(function(De) {
      t[De] !== void 0 && (Ee[De] = t[De]);
    }), Ee;
  }, Dn.map(function(Ee) {
    return t[Ee];
  })), Xe = mn(function() {
    return H(H({}, xe), {}, {
      src: pe
    });
  }, [pe, xe]), _e = pc(Pe, Xe), Me = function(De) {
    var Te = tc(De.target), Ve = Te.left, Ye = Te.top;
    ye ? ye.onPreview(_e, pe, Ve, Ye) : (be({
      x: Ve,
      y: Ye
    }), L(!0)), v?.(De);
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", ge({}, $, {
    className: Ie,
    onClick: Pe ? Me : v,
    style: H({
      width: d,
      height: g
    }, w)
  }), /* @__PURE__ */ a.createElement("img", ge({}, xe, {
    className: ve("".concat(l, "-img"), K({}, "".concat(l, "-img-placeholder"), f === !0), C),
    style: H({
      height: g
    }, u),
    ref: q
  }, U, {
    width: d,
    height: g,
    onError: b
  })), G === "loading" && /* @__PURE__ */ a.createElement("div", {
    "aria-hidden": "true",
    className: "".concat(l, "-placeholder")
  }, f), _ && Pe && /* @__PURE__ */ a.createElement("div", {
    className: ve("".concat(l, "-mask"), D),
    style: {
      display: u?.display === "none" ? "none" : void 0
    }
  }, _)), !ye && Pe && /* @__PURE__ */ a.createElement(jo, ge({
    "aria-hidden": !Q,
    visible: Q,
    prefixCls: s,
    onClose: Oe,
    mousePosition: fe,
    src: pe,
    alt: r,
    imageInfo: {
      width: d,
      height: g
    },
    fallback: m,
    getContainer: I,
    icons: F,
    movable: z,
    scaleStep: W,
    minScale: ae,
    maxScale: ce,
    rootClassName: S,
    imageRender: V,
    imgCommonProps: xe,
    toolbarRender: te
  }, re)));
};
En.PreviewGroup = gc;
process.env.NODE_ENV !== "production" && (En.displayName = "Image");
var Sc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { tag: "path", attrs: { d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, name: "rotate-left", theme: "outlined" }, Cc = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: Sc
  }));
}, Ho = /* @__PURE__ */ a.forwardRef(Cc);
process.env.NODE_ENV !== "production" && (Ho.displayName = "RotateLeftOutlined");
var yc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] }, { tag: "path", attrs: { d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { tag: "path", attrs: { d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, name: "rotate-right", theme: "outlined" }, wc = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: yc
  }));
}, Vo = /* @__PURE__ */ a.forwardRef(wc);
process.env.NODE_ENV !== "production" && (Vo.displayName = "RotateRightOutlined");
var xc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "swap", theme: "outlined" }, Ec = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: xc
  }));
}, Ln = /* @__PURE__ */ a.forwardRef(Ec);
process.env.NODE_ENV !== "production" && (Ln.displayName = "SwapOutlined");
var $c = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-in", theme: "outlined" }, Ic = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: $c
  }));
}, Ao = /* @__PURE__ */ a.forwardRef(Ic);
process.env.NODE_ENV !== "production" && (Ao.displayName = "ZoomInOutlined");
var Rc = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, name: "zoom-out", theme: "outlined" }, Nc = function(t, n) {
  return /* @__PURE__ */ a.createElement(rn, ge({}, t, {
    ref: n,
    icon: Rc
  }));
}, Fo = /* @__PURE__ */ a.forwardRef(Nc);
process.env.NODE_ENV !== "production" && (Fo.displayName = "ZoomOutOutlined");
const Bn = (e) => ({
  position: e || "absolute",
  inset: 0
}), Oc = (e) => {
  const {
    iconCls: t,
    motionDurationSlow: n,
    paddingXXS: r,
    marginXXS: o,
    prefixCls: i,
    colorTextLightSolid: l
  } = e;
  return {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: l,
    background: new Ot("#000").setAlpha(0.5).toRgbString(),
    cursor: "pointer",
    opacity: 0,
    transition: `opacity ${n}`,
    [`.${i}-mask-info`]: Object.assign(Object.assign({}, gn), {
      padding: `0 ${oe(r)}`,
      [t]: {
        marginInlineEnd: o,
        svg: {
          verticalAlign: "baseline"
        }
      }
    })
  };
}, Mc = (e) => {
  const {
    previewCls: t,
    modalMaskBg: n,
    paddingSM: r,
    marginXL: o,
    margin: i,
    paddingLG: l,
    previewOperationColorDisabled: c,
    previewOperationHoverColor: s,
    motionDurationSlow: f,
    iconCls: m,
    colorTextLightSolid: d
  } = e, g = new Ot(n).setAlpha(0.1), u = g.clone().setAlpha(0.2);
  return {
    [`${t}-footer`]: {
      position: "fixed",
      bottom: o,
      left: {
        _skip_check_: !0,
        value: 0
      },
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: e.previewOperationColor
    },
    [`${t}-progress`]: {
      marginBottom: i
    },
    [`${t}-close`]: {
      position: "fixed",
      top: o,
      right: {
        _skip_check_: !0,
        value: o
      },
      display: "flex",
      color: d,
      backgroundColor: g.toRgbString(),
      borderRadius: "50%",
      padding: r,
      outline: 0,
      border: 0,
      cursor: "pointer",
      transition: `all ${f}`,
      "&:hover": {
        backgroundColor: u.toRgbString()
      },
      [`& > ${m}`]: {
        fontSize: e.previewOperationSize
      }
    },
    [`${t}-operations`]: {
      display: "flex",
      alignItems: "center",
      padding: `0 ${oe(l)}`,
      backgroundColor: g.toRgbString(),
      borderRadius: 100,
      "&-operation": {
        marginInlineStart: r,
        padding: r,
        cursor: "pointer",
        transition: `all ${f}`,
        userSelect: "none",
        [`&:not(${t}-operations-operation-disabled):hover > ${m}`]: {
          color: s
        },
        "&-disabled": {
          color: c,
          cursor: "not-allowed"
        },
        "&:first-of-type": {
          marginInlineStart: 0
        },
        [`& > ${m}`]: {
          fontSize: e.previewOperationSize
        }
      }
    }
  };
}, Pc = (e) => {
  const {
    modalMaskBg: t,
    iconCls: n,
    previewOperationColorDisabled: r,
    previewCls: o,
    zIndexPopup: i,
    motionDurationSlow: l
  } = e, c = new Ot(t).setAlpha(0.1), s = c.clone().setAlpha(0.2);
  return {
    [`${o}-switch-left, ${o}-switch-right`]: {
      position: "fixed",
      insetBlockStart: "50%",
      zIndex: e.calc(i).add(1).equal(),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: e.imagePreviewSwitchSize,
      height: e.imagePreviewSwitchSize,
      marginTop: e.calc(e.imagePreviewSwitchSize).mul(-1).div(2).equal(),
      color: e.previewOperationColor,
      background: c.toRgbString(),
      borderRadius: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      transition: `all ${l}`,
      userSelect: "none",
      "&:hover": {
        background: s.toRgbString()
      },
      "&-disabled": {
        "&, &:hover": {
          color: r,
          background: "transparent",
          cursor: "not-allowed",
          [`> ${n}`]: {
            cursor: "not-allowed"
          }
        }
      },
      [`> ${n}`]: {
        fontSize: e.previewOperationSize
      }
    },
    [`${o}-switch-left`]: {
      insetInlineStart: e.marginSM
    },
    [`${o}-switch-right`]: {
      insetInlineEnd: e.marginSM
    }
  };
}, Tc = (e) => {
  const {
    motionEaseOut: t,
    previewCls: n,
    motionDurationSlow: r,
    componentCls: o
  } = e;
  return [
    {
      [`${o}-preview-root`]: {
        [n]: {
          height: "100%",
          textAlign: "center",
          pointerEvents: "none"
        },
        [`${n}-body`]: Object.assign(Object.assign({}, Bn()), {
          overflow: "hidden"
        }),
        [`${n}-img`]: {
          maxWidth: "100%",
          maxHeight: "70%",
          verticalAlign: "middle",
          transform: "scale3d(1, 1, 1)",
          cursor: "grab",
          transition: `transform ${r} ${t} 0s`,
          userSelect: "none",
          "&-wrapper": Object.assign(Object.assign({}, Bn()), {
            transition: `transform ${r} ${t} 0s`,
            // https://github.com/ant-design/ant-design/issues/39913
            // TailwindCSS will reset img default style.
            // Let's set back.
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& > *": {
              pointerEvents: "auto"
            },
            "&::before": {
              display: "inline-block",
              width: 1,
              height: "50%",
              marginInlineEnd: -1,
              content: '""'
            }
          })
        },
        [`${n}-moving`]: {
          [`${n}-preview-img`]: {
            cursor: "grabbing",
            "&-wrapper": {
              transitionDuration: "0s"
            }
          }
        }
      }
    },
    // Override
    {
      [`${o}-preview-root`]: {
        [`${n}-wrap`]: {
          zIndex: e.zIndexPopup
        }
      }
    },
    // Preview operations & switch
    {
      [`${o}-preview-operations-wrapper`]: {
        position: "fixed",
        zIndex: e.calc(e.zIndexPopup).add(1).equal()
      },
      "&": [Mc(e), Pc(e)]
    }
  ];
}, zc = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ============================== image ==============================
    [t]: {
      position: "relative",
      display: "inline-block",
      [`${t}-img`]: {
        width: "100%",
        height: "auto",
        verticalAlign: "middle"
      },
      [`${t}-img-placeholder`]: {
        backgroundColor: e.colorBgContainerDisabled,
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "30%"
      },
      [`${t}-mask`]: Object.assign({}, Oc(e)),
      [`${t}-mask:hover`]: {
        opacity: 1
      },
      [`${t}-placeholder`]: Object.assign({}, Bn())
    }
  };
}, _c = (e) => {
  const {
    previewCls: t
  } = e;
  return {
    [`${t}-root`]: Gr(e, "zoom"),
    "&": Wr(e, !0)
  };
}, Dc = (e) => ({
  zIndexPopup: e.zIndexPopupBase + 80,
  previewOperationColor: new Ot(e.colorTextLightSolid).setAlpha(0.65).toRgbString(),
  previewOperationHoverColor: new Ot(e.colorTextLightSolid).setAlpha(0.85).toRgbString(),
  previewOperationColorDisabled: new Ot(e.colorTextLightSolid).setAlpha(0.25).toRgbString(),
  previewOperationSize: e.fontSizeIcon * 1.5
  // FIXME: fontSizeIconLG
}), Wo = nn("Image", (e) => {
  const t = `${e.componentCls}-preview`, n = Ct(e, {
    previewCls: t,
    modalMaskBg: new Ot("#000").setAlpha(0.45).toRgbString(),
    // FIXME: Shared Token
    imagePreviewSwitchSize: e.controlHeightLG
  });
  return [zc(n), Tc(n), no(Ct(n, {
    componentCls: t
  })), _c(n)];
}, Dc);
var Lc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Go = {
  rotateLeft: /* @__PURE__ */ a.createElement(Ho, null),
  rotateRight: /* @__PURE__ */ a.createElement(Vo, null),
  zoomIn: /* @__PURE__ */ a.createElement(Ao, null),
  zoomOut: /* @__PURE__ */ a.createElement(Fo, null),
  close: /* @__PURE__ */ a.createElement(Ur, null),
  left: /* @__PURE__ */ a.createElement(Oa, null),
  right: /* @__PURE__ */ a.createElement(Na, null),
  flipX: /* @__PURE__ */ a.createElement(Ln, null),
  flipY: /* @__PURE__ */ a.createElement(Ln, {
    rotate: 90
  })
}, Bc = (e) => {
  var {
    previewPrefixCls: t,
    preview: n
  } = e, r = Lc(e, ["previewPrefixCls", "preview"]);
  const {
    getPrefixCls: o
  } = a.useContext(zt), i = o("image", t), l = `${i}-preview`, c = o(), s = cn(i), [f, m, d] = Wo(i, s), [g] = Vn("ImagePreview", typeof n == "object" ? n.zIndex : void 0), u = a.useMemo(() => {
    var p;
    if (n === !1)
      return n;
    const h = typeof n == "object" ? n : {}, C = vt(m, d, s, (p = h.rootClassName) !== null && p !== void 0 ? p : "");
    return Object.assign(Object.assign({}, h), {
      transitionName: ln(c, "zoom", h.transitionName),
      maskTransitionName: ln(c, "fade", h.maskTransitionName),
      rootClassName: C,
      zIndex: g
    });
  }, [n]);
  return f(/* @__PURE__ */ a.createElement(En.PreviewGroup, Object.assign({
    preview: u,
    previewPrefixCls: l,
    icons: Go
  }, r)));
};
var Br = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Jn = (e) => {
  var t;
  const {
    prefixCls: n,
    preview: r,
    className: o,
    rootClassName: i,
    style: l
  } = e, c = Br(e, ["prefixCls", "preview", "className", "rootClassName", "style"]), {
    getPrefixCls: s,
    locale: f = cr,
    getPopupContainer: m,
    image: d
  } = a.useContext(zt), g = s("image", n), u = s(), p = f.Image || cr.Image, h = cn(g), [C, v, b] = Wo(g, h), x = vt(i, v, b, h), w = vt(o, v, d?.className), [S] = Vn("ImagePreview", typeof r == "object" ? r.zIndex : void 0), $ = a.useMemo(() => {
    var E;
    if (r === !1)
      return r;
    const T = typeof r == "object" ? r : {}, {
      getContainer: N,
      closeIcon: O
    } = T, M = Br(T, ["getContainer", "closeIcon"]);
    return Object.assign(Object.assign({
      mask: /* @__PURE__ */ a.createElement("div", {
        className: `${g}-mask-info`
      }, /* @__PURE__ */ a.createElement(Ma, null), p?.preview),
      icons: Go
    }, M), {
      getContainer: N ?? m,
      transitionName: ln(u, "zoom", T.transitionName),
      maskTransitionName: ln(u, "fade", T.maskTransitionName),
      zIndex: S,
      closeIcon: O ?? ((E = d?.preview) === null || E === void 0 ? void 0 : E.closeIcon)
    });
  }, [r, p, (t = d?.preview) === null || t === void 0 ? void 0 : t.closeIcon]), y = Object.assign(Object.assign({}, d?.style), l);
  return C(/* @__PURE__ */ a.createElement(En, Object.assign({
    prefixCls: g,
    preview: $,
    rootClassName: x,
    className: w,
    style: y
  }, c)));
};
Jn.PreviewGroup = Bc;
process.env.NODE_ENV !== "production" && (Jn.displayName = "Image");
var jc = {
  // Options
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
}, Hc = ["10", "20", "50", "100"], Xo = function(t) {
  var n = t.pageSizeOptions, r = n === void 0 ? Hc : n, o = t.locale, i = t.changeSize, l = t.pageSize, c = t.goButton, s = t.quickGo, f = t.rootPrefixCls, m = t.selectComponentClass, d = t.selectPrefixCls, g = t.disabled, u = t.buildOptionText, p = J.useState(""), h = ne(p, 2), C = h[0], v = h[1], b = function() {
    return !C || Number.isNaN(C) ? void 0 : Number(C);
  }, x = typeof u == "function" ? u : function(R) {
    return "".concat(R, " ").concat(o.items_per_page);
  }, w = function(I) {
    i?.(Number(I));
  }, S = function(I) {
    v(I.target.value);
  }, $ = function(I) {
    c || C === "" || (v(""), !(I.relatedTarget && (I.relatedTarget.className.indexOf("".concat(f, "-item-link")) >= 0 || I.relatedTarget.className.indexOf("".concat(f, "-item")) >= 0)) && s?.(b()));
  }, y = function(I) {
    C !== "" && (I.keyCode === le.ENTER || I.type === "click") && (v(""), s?.(b()));
  }, E = function() {
    return r.some(function(I) {
      return I.toString() === l.toString();
    }) ? r : r.concat([l.toString()]).sort(function(I, _) {
      var D = Number.isNaN(Number(I)) ? 0 : Number(I), z = Number.isNaN(Number(_)) ? 0 : Number(_);
      return D - z;
    });
  }, T = "".concat(f, "-options");
  if (!i && !s)
    return null;
  var N = null, O = null, M = null;
  if (i && m) {
    var P = E().map(function(R, I) {
      return /* @__PURE__ */ J.createElement(m.Option, {
        key: I,
        value: R.toString()
      }, x(R));
    });
    N = /* @__PURE__ */ J.createElement(m, {
      disabled: g,
      prefixCls: d,
      showSearch: !1,
      className: "".concat(T, "-size-changer"),
      optionLabelProp: "children",
      popupMatchSelectWidth: !1,
      value: (l || r[0]).toString(),
      onChange: w,
      getPopupContainer: function(I) {
        return I.parentNode;
      },
      "aria-label": o.page_size,
      defaultOpen: !1
    }, P);
  }
  return s && (c && (M = typeof c == "boolean" ? /* @__PURE__ */ J.createElement("button", {
    type: "button",
    onClick: y,
    onKeyUp: y,
    disabled: g,
    className: "".concat(T, "-quick-jumper-button")
  }, o.jump_to_confirm) : /* @__PURE__ */ J.createElement("span", {
    onClick: y,
    onKeyUp: y
  }, c)), O = /* @__PURE__ */ J.createElement("div", {
    className: "".concat(T, "-quick-jumper")
  }, o.jump_to, /* @__PURE__ */ J.createElement("input", {
    disabled: g,
    type: "text",
    value: C,
    onChange: S,
    onKeyUp: y,
    onBlur: $,
    "aria-label": o.page
  }), o.page, M)), /* @__PURE__ */ J.createElement("li", {
    className: T
  }, N, O);
};
process.env.NODE_ENV !== "production" && (Xo.displayName = "Options");
var Jt = function(t) {
  var n, r = t.rootPrefixCls, o = t.page, i = t.active, l = t.className, c = t.showTitle, s = t.onClick, f = t.onKeyPress, m = t.itemRender, d = "".concat(r, "-item"), g = ve(d, "".concat(d, "-").concat(o), (n = {}, K(n, "".concat(d, "-active"), i), K(n, "".concat(d, "-disabled"), !o), n), l), u = function() {
    s(o);
  }, p = function(v) {
    f(v, s, o);
  }, h = m(o, "page", /* @__PURE__ */ J.createElement("a", {
    rel: "nofollow"
  }, o));
  return h ? /* @__PURE__ */ J.createElement("li", {
    title: c ? String(o) : null,
    className: g,
    onClick: u,
    onKeyDown: p,
    tabIndex: 0
  }, h) : null;
};
process.env.NODE_ENV !== "production" && (Jt.displayName = "Pager");
var Vc = function(t, n, r) {
  return r;
};
function On() {
}
function jr(e) {
  var t = Number(e);
  return typeof t == "number" && !Number.isNaN(t) && isFinite(t) && Math.floor(t) === t;
}
function Xt(e, t, n) {
  var r = typeof e > "u" ? t : e;
  return Math.floor((n - 1) / r) + 1;
}
var Ac = function(t) {
  var n, r = t.prefixCls, o = r === void 0 ? "rc-pagination" : r, i = t.selectPrefixCls, l = i === void 0 ? "rc-select" : i, c = t.className, s = t.selectComponentClass, f = t.current, m = t.defaultCurrent, d = m === void 0 ? 1 : m, g = t.total, u = g === void 0 ? 0 : g, p = t.pageSize, h = t.defaultPageSize, C = h === void 0 ? 10 : h, v = t.onChange, b = v === void 0 ? On : v, x = t.hideOnSinglePage, w = t.align, S = t.showPrevNextJumpers, $ = S === void 0 ? !0 : S, y = t.showQuickJumper, E = t.showLessItems, T = t.showTitle, N = T === void 0 ? !0 : T, O = t.onShowSizeChange, M = O === void 0 ? On : O, P = t.locale, R = P === void 0 ? jc : P, I = t.style, _ = t.totalBoundaryShowSizeChanger, D = _ === void 0 ? 50 : _, z = t.disabled, F = t.simple, W = t.showTotal, ae = t.showSizeChanger, ce = t.pageSizeOptions, V = t.itemRender, te = V === void 0 ? Vc : V, re = t.jumpPrevIcon, pe = t.jumpNextIcon, X = t.prevIcon, Y = t.nextIcon, Q = J.useRef(null), L = Tt(10, {
    value: p,
    defaultValue: C
  }), j = ne(L, 2), B = j[0], q = j[1], U = Tt(1, {
    value: f,
    defaultValue: d,
    postState: function($e) {
      return Math.max(1, Math.min($e, Xt(void 0, B, u)));
    }
  }), G = ne(U, 2), A = G[0], we = G[1], fe = J.useState(A), be = ne(fe, 2), ye = be[0], Pe = be[1];
  St(function() {
    Pe(A);
  }, [A]);
  var Oe = b !== On, Ie = "current" in t;
  process.env.NODE_ENV !== "production" && lt(Ie ? Oe : !0, "You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");
  var xe = Math.max(1, A - (E ? 3 : 5)), Xe = Math.min(Xt(void 0, B, u), A + (E ? 3 : 5));
  function _e(de, $e) {
    var Ge = de || /* @__PURE__ */ J.createElement("button", {
      type: "button",
      "aria-label": $e,
      className: "".concat(o, "-item-link")
    });
    return typeof de == "function" && (Ge = /* @__PURE__ */ J.createElement(de, H({}, t))), Ge;
  }
  function Me(de) {
    var $e = de.target.value, Ge = Xt(void 0, B, u), Mt;
    return $e === "" ? Mt = $e : Number.isNaN(Number($e)) ? Mt = ye : $e >= Ge ? Mt = Ge : Mt = Number($e), Mt;
  }
  function Ee(de) {
    return jr(de) && de !== A && jr(u) && u > 0;
  }
  var De = u > B ? y : !1;
  function Te(de) {
    (de.keyCode === le.UP || de.keyCode === le.DOWN) && de.preventDefault();
  }
  function Ve(de) {
    var $e = Me(de);
    switch ($e !== ye && Pe($e), de.keyCode) {
      case le.ENTER:
        Le($e);
        break;
      case le.UP:
        Le($e - 1);
        break;
      case le.DOWN:
        Le($e + 1);
        break;
    }
  }
  function Ye(de) {
    Le(Me(de));
  }
  function ke(de) {
    var $e = Xt(de, B, u), Ge = A > $e && $e !== 0 ? $e : A;
    q(de), Pe(Ge), M?.(A, de), we(Ge), b?.(Ge, de);
  }
  function Le(de) {
    if (Ee(de) && !z) {
      var $e = Xt(void 0, B, u), Ge = de;
      return de > $e ? Ge = $e : de < 1 && (Ge = 1), Ge !== ye && Pe(Ge), we(Ge), b?.(Ge, B), Ge;
    }
    return A;
  }
  var je = A > 1, qe = A < Xt(void 0, B, u), Fe = ae ?? u > D;
  function We() {
    je && Le(A - 1);
  }
  function ot() {
    qe && Le(A + 1);
  }
  function Ke() {
    Le(xe);
  }
  function ze() {
    Le(Xe);
  }
  function gt(de, $e) {
    if (de.key === "Enter" || de.charCode === le.ENTER || de.keyCode === le.ENTER) {
      for (var Ge = arguments.length, Mt = new Array(Ge > 2 ? Ge - 2 : 0), qt = 2; qt < Ge; qt++)
        Mt[qt - 2] = arguments[qt];
      $e.apply(void 0, Mt);
    }
  }
  function _t(de) {
    gt(de, We);
  }
  function jt(de) {
    gt(de, ot);
  }
  function yt(de) {
    gt(de, Ke);
  }
  function st(de) {
    gt(de, ze);
  }
  function xt(de) {
    var $e = te(de, "prev", _e(X, "prev page"));
    return /* @__PURE__ */ J.isValidElement($e) ? /* @__PURE__ */ J.cloneElement($e, {
      disabled: !je
    }) : $e;
  }
  function Ae(de) {
    var $e = te(de, "next", _e(Y, "next page"));
    return /* @__PURE__ */ J.isValidElement($e) ? /* @__PURE__ */ J.cloneElement($e, {
      disabled: !qe
    }) : $e;
  }
  function Et(de) {
    (de.type === "click" || de.keyCode === le.ENTER) && Le(ye);
  }
  var pt = null, et = Kt(t, {
    aria: !0,
    data: !0
  }), se = W && /* @__PURE__ */ J.createElement("li", {
    className: "".concat(o, "-total-text")
  }, W(u, [u === 0 ? 0 : (A - 1) * B + 1, A * B > u ? u : A * B])), ue = null, Z = Xt(void 0, B, u);
  if (x && u <= B)
    return null;
  var ee = [], Ce = {
    rootPrefixCls: o,
    onClick: Le,
    onKeyPress: gt,
    showTitle: N,
    itemRender: te,
    page: -1
  }, He = A - 1 > 0 ? A - 1 : 0, ut = A + 1 < Z ? A + 1 : Z, Ze = y && y.goButton, wt = ct(F) === "object" ? F.readOnly : !F, Be = Ze, nt = null;
  F && (Ze && (typeof Ze == "boolean" ? Be = /* @__PURE__ */ J.createElement("button", {
    type: "button",
    onClick: Et,
    onKeyUp: Et
  }, R.jump_to_confirm) : Be = /* @__PURE__ */ J.createElement("span", {
    onClick: Et,
    onKeyUp: Et
  }, Ze), Be = /* @__PURE__ */ J.createElement("li", {
    title: N ? "".concat(R.jump_to).concat(A, "/").concat(Z) : null,
    className: "".concat(o, "-simple-pager")
  }, Be)), nt = /* @__PURE__ */ J.createElement("li", {
    title: N ? "".concat(A, "/").concat(Z) : null,
    className: "".concat(o, "-simple-pager")
  }, wt ? ye : /* @__PURE__ */ J.createElement("input", {
    type: "text",
    value: ye,
    disabled: z,
    onKeyDown: Te,
    onKeyUp: Ve,
    onChange: Ve,
    onBlur: Ye,
    size: 3
  }), /* @__PURE__ */ J.createElement("span", {
    className: "".concat(o, "-slash")
  }, "/"), Z));
  var Qe = E ? 1 : 2;
  if (Z <= 3 + Qe * 2) {
    Z || ee.push(/* @__PURE__ */ J.createElement(Jt, ge({}, Ce, {
      key: "noPager",
      page: 1,
      className: "".concat(o, "-item-disabled")
    })));
    for (var $t = 1; $t <= Z; $t += 1)
      ee.push(/* @__PURE__ */ J.createElement(Jt, ge({}, Ce, {
        key: $t,
        page: $t,
        active: A === $t
      })));
  } else {
    var Yt = E ? R.prev_3 : R.prev_5, at = E ? R.next_3 : R.next_5, it = te(xe, "jump-prev", _e(re, "prev page")), ie = te(Xe, "jump-next", _e(pe, "next page"));
    $ && (pt = it ? /* @__PURE__ */ J.createElement("li", {
      title: N ? Yt : null,
      key: "prev",
      onClick: Ke,
      tabIndex: 0,
      onKeyDown: yt,
      className: ve("".concat(o, "-jump-prev"), K({}, "".concat(o, "-jump-prev-custom-icon"), !!re))
    }, it) : null, ue = ie ? /* @__PURE__ */ J.createElement("li", {
      title: N ? at : null,
      key: "next",
      onClick: ze,
      tabIndex: 0,
      onKeyDown: st,
      className: ve("".concat(o, "-jump-next"), K({}, "".concat(o, "-jump-next-custom-icon"), !!pe))
    }, ie) : null);
    var k = Math.max(1, A - Qe), he = Math.min(A + Qe, Z);
    A - 1 <= Qe && (he = 1 + Qe * 2), Z - A <= Qe && (k = Z - Qe * 2);
    for (var Ne = k; Ne <= he; Ne += 1)
      ee.push(/* @__PURE__ */ J.createElement(Jt, ge({}, Ce, {
        key: Ne,
        page: Ne,
        active: A === Ne
      })));
    if (A - 1 >= Qe * 2 && A !== 3 && (ee[0] = /* @__PURE__ */ J.cloneElement(ee[0], {
      className: ve("".concat(o, "-item-after-jump-prev"), ee[0].props.className)
    }), ee.unshift(pt)), Z - A >= Qe * 2 && A !== Z - 2) {
      var Ue = ee[ee.length - 1];
      ee[ee.length - 1] = /* @__PURE__ */ J.cloneElement(Ue, {
        className: ve("".concat(o, "-item-before-jump-next"), Ue.props.className)
      }), ee.push(ue);
    }
    k !== 1 && ee.unshift(/* @__PURE__ */ J.createElement(Jt, ge({}, Ce, {
      key: 1,
      page: 1
    }))), he !== Z && ee.push(/* @__PURE__ */ J.createElement(Jt, ge({}, Ce, {
      key: Z,
      page: Z
    })));
  }
  var It = xt(He);
  if (It) {
    var ht = !je || !Z;
    It = /* @__PURE__ */ J.createElement("li", {
      title: N ? R.prev_page : null,
      onClick: We,
      tabIndex: ht ? null : 0,
      onKeyDown: _t,
      className: ve("".concat(o, "-prev"), K({}, "".concat(o, "-disabled"), ht)),
      "aria-disabled": ht
    }, It);
  }
  var Rt = Ae(ut);
  if (Rt) {
    var Dt, Lt;
    F ? (Dt = !qe, Lt = je ? 0 : null) : (Dt = !qe || !Z, Lt = Dt ? null : 0), Rt = /* @__PURE__ */ J.createElement("li", {
      title: N ? R.next_page : null,
      onClick: ot,
      tabIndex: Lt,
      onKeyDown: jt,
      className: ve("".concat(o, "-next"), K({}, "".concat(o, "-disabled"), Dt)),
      "aria-disabled": Dt
    }, Rt);
  }
  var Ht = ve(o, c, (n = {}, K(n, "".concat(o, "-start"), w === "start"), K(n, "".concat(o, "-center"), w === "center"), K(n, "".concat(o, "-end"), w === "end"), K(n, "".concat(o, "-simple"), F), K(n, "".concat(o, "-disabled"), z), n));
  return /* @__PURE__ */ J.createElement("ul", ge({
    className: Ht,
    style: I,
    ref: Q
  }, et), se, It, F ? nt : ee, Rt, /* @__PURE__ */ J.createElement(Xo, {
    locale: R,
    rootPrefixCls: o,
    disabled: z,
    selectComponentClass: s,
    selectPrefixCls: l,
    changeSize: Fe ? ke : null,
    pageSize: B,
    pageSizeOptions: ce,
    quickGo: De ? Le : null,
    goButton: Be
  }));
};
process.env.NODE_ENV !== "production" && (Ac.displayName = "Pagination");
var Hr = function(t) {
  return t ? {
    left: t.offsetLeft,
    right: t.parentElement.clientWidth - t.clientWidth - t.offsetLeft,
    width: t.clientWidth
  } : null;
}, Qt = function(t) {
  return t !== void 0 ? "".concat(t, "px") : void 0;
};
function Fc(e) {
  var t = e.prefixCls, n = e.containerRef, r = e.value, o = e.getValueIndex, i = e.motionName, l = e.onMotionStart, c = e.onMotionEnd, s = e.direction, f = a.useRef(null), m = a.useState(r), d = ne(m, 2), g = d[0], u = d[1], p = function(P) {
    var R, I = o(P), _ = (R = n.current) === null || R === void 0 ? void 0 : R.querySelectorAll(".".concat(t, "-item"))[I];
    return _?.offsetParent && _;
  }, h = a.useState(null), C = ne(h, 2), v = C[0], b = C[1], x = a.useState(null), w = ne(x, 2), S = w[0], $ = w[1];
  At(function() {
    if (g !== r) {
      var M = p(g), P = p(r), R = Hr(M), I = Hr(P);
      u(r), b(R), $(I), M && P ? l() : c();
    }
  }, [r]);
  var y = a.useMemo(function() {
    return Qt(s === "rtl" ? -v?.right : v?.left);
  }, [s, v]), E = a.useMemo(function() {
    return Qt(s === "rtl" ? -S?.right : S?.left);
  }, [s, S]), T = function() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  }, N = function() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  }, O = function() {
    b(null), $(null), c();
  };
  return !v || !S ? null : /* @__PURE__ */ a.createElement(bn, {
    visible: !0,
    motionName: i,
    motionAppear: !0,
    onAppearStart: T,
    onAppearActive: N,
    onVisibleChanged: O
  }, function(M, P) {
    var R = M.className, I = M.style, _ = H(H({}, I), {}, {
      "--thumb-start-left": y,
      "--thumb-start-width": Qt(v?.width),
      "--thumb-active-left": E,
      "--thumb-active-width": Qt(S?.width)
    }), D = {
      ref: Sn(f, P),
      style: _,
      className: ve("".concat(t, "-thumb"), R)
    };
    return process.env.NODE_ENV === "test" && (D["data-test-style"] = JSON.stringify(_)), /* @__PURE__ */ a.createElement("div", D);
  });
}
var Wc = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];
function Gc(e) {
  if (typeof e.title < "u")
    return e.title;
  if (ct(e.label) !== "object") {
    var t;
    return (t = e.label) === null || t === void 0 ? void 0 : t.toString();
  }
}
function Xc(e) {
  return e.map(function(t) {
    if (ct(t) === "object" && t !== null) {
      var n = Gc(t);
      return H(H({}, t), {}, {
        title: n
      });
    }
    return {
      label: t?.toString(),
      title: t?.toString(),
      value: t
    };
  });
}
var Kc = function(t) {
  var n = t.prefixCls, r = t.className, o = t.disabled, i = t.checked, l = t.label, c = t.title, s = t.value, f = t.onChange, m = function(g) {
    o || f(g, s);
  };
  return /* @__PURE__ */ a.createElement("label", {
    className: ve(r, K({}, "".concat(n, "-item-disabled"), o))
  }, /* @__PURE__ */ a.createElement("input", {
    className: "".concat(n, "-item-input"),
    type: "radio",
    disabled: o,
    checked: i,
    onChange: m
  }), /* @__PURE__ */ a.createElement("div", {
    className: "".concat(n, "-item-label"),
    title: c
  }, l));
}, Ko = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n, r, o = e.prefixCls, i = o === void 0 ? "rc-segmented" : o, l = e.direction, c = e.options, s = c === void 0 ? [] : c, f = e.disabled, m = e.defaultValue, d = e.value, g = e.onChange, u = e.className, p = u === void 0 ? "" : u, h = e.motionName, C = h === void 0 ? "thumb-motion" : h, v = tt(e, Wc), b = a.useRef(null), x = a.useMemo(function() {
    return Sn(b, t);
  }, [b, t]), w = a.useMemo(function() {
    return Xc(s);
  }, [s]), S = Tt((n = w[0]) === null || n === void 0 ? void 0 : n.value, {
    value: d,
    defaultValue: m
  }), $ = ne(S, 2), y = $[0], E = $[1], T = a.useState(!1), N = ne(T, 2), O = N[0], M = N[1], P = function(_, D) {
    f || (E(D), g?.(D));
  }, R = Hn(v, ["children"]);
  return /* @__PURE__ */ a.createElement("div", ge({}, R, {
    className: ve(i, (r = {}, K(r, "".concat(i, "-rtl"), l === "rtl"), K(r, "".concat(i, "-disabled"), f), r), p),
    ref: x
  }), /* @__PURE__ */ a.createElement("div", {
    className: "".concat(i, "-group")
  }, /* @__PURE__ */ a.createElement(Fc, {
    prefixCls: i,
    value: y,
    containerRef: b,
    motionName: "".concat(i, "-").concat(C),
    direction: l,
    getValueIndex: function(_) {
      return w.findIndex(function(D) {
        return D.value === _;
      });
    },
    onMotionStart: function() {
      M(!0);
    },
    onMotionEnd: function() {
      M(!1);
    }
  }), w.map(function(I) {
    return /* @__PURE__ */ a.createElement(Kc, ge({}, I, {
      key: I.value,
      prefixCls: i,
      className: ve(I.className, "".concat(i, "-item"), K({}, "".concat(i, "-item-selected"), I.value === y && !O)),
      checked: I.value === y,
      onChange: P,
      disabled: !!f || !!I.disabled
    }));
  })));
});
process.env.NODE_ENV !== "production" && (Ko.displayName = "Segmented");
var Uc = Ko;
const ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uc
}, Symbol.toStringTag, { value: "Module" }));
var Yc = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick", "render"];
function Vr(e) {
  return typeof e == "string";
}
function Uo(e) {
  var t, n = e.className, r = e.prefixCls, o = e.style, i = e.active, l = e.status, c = e.iconPrefix, s = e.icon;
  e.wrapperStyle;
  var f = e.stepNumber, m = e.disabled, d = e.description, g = e.title, u = e.subTitle, p = e.progressDot, h = e.stepIcon, C = e.tailContent, v = e.icons, b = e.stepIndex, x = e.onStepClick, w = e.onClick, S = e.render, $ = tt(e, Yc), y = !!x && !m, E = {};
  y && (E.role = "button", E.tabIndex = 0, E.onClick = function(R) {
    w?.(R), x(b);
  }, E.onKeyDown = function(R) {
    var I = R.which;
    (I === le.ENTER || I === le.SPACE) && x(b);
  });
  var T = function() {
    var I, _, D = ve("".concat(r, "-icon"), "".concat(c, "icon"), (I = {}, K(I, "".concat(c, "icon-").concat(s), s && Vr(s)), K(I, "".concat(c, "icon-check"), !s && l === "finish" && (v && !v.finish || !v)), K(I, "".concat(c, "icon-cross"), !s && l === "error" && (v && !v.error || !v)), I)), z = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon-dot")
    });
    return p ? typeof p == "function" ? _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, p(z, {
      index: f - 1,
      status: l,
      title: g,
      description: d
    })) : _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, z) : s && !Vr(s) ? _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, s) : v && v.finish && l === "finish" ? _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, v.finish) : v && v.error && l === "error" ? _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, v.error) : s || l === "finish" || l === "error" ? _ = /* @__PURE__ */ a.createElement("span", {
      className: D
    }) : _ = /* @__PURE__ */ a.createElement("span", {
      className: "".concat(r, "-icon")
    }, f), h && (_ = h({
      index: f - 1,
      status: l,
      title: g,
      description: d,
      node: _
    })), _;
  }, N = l || "wait", O = ve("".concat(r, "-item"), "".concat(r, "-item-").concat(N), n, (t = {}, K(t, "".concat(r, "-item-custom"), s), K(t, "".concat(r, "-item-active"), i), K(t, "".concat(r, "-item-disabled"), m === !0), t)), M = H({}, o), P = /* @__PURE__ */ a.createElement("div", ge({}, $, {
    className: O,
    style: M
  }), /* @__PURE__ */ a.createElement("div", ge({
    onClick: w
  }, E, {
    className: "".concat(r, "-item-container")
  }), /* @__PURE__ */ a.createElement("div", {
    className: "".concat(r, "-item-tail")
  }, C), /* @__PURE__ */ a.createElement("div", {
    className: "".concat(r, "-item-icon")
  }, T()), /* @__PURE__ */ a.createElement("div", {
    className: "".concat(r, "-item-content")
  }, /* @__PURE__ */ a.createElement("div", {
    className: "".concat(r, "-item-title")
  }, g, u && /* @__PURE__ */ a.createElement("div", {
    title: typeof u == "string" ? u : void 0,
    className: "".concat(r, "-item-subtitle")
  }, u)), d && /* @__PURE__ */ a.createElement("div", {
    className: "".concat(r, "-item-description")
  }, d))));
  return S && (P = S(P) || null), P;
}
var qc = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange", "itemRender", "items"];
function Zc(e) {
  var t, n = e.prefixCls, r = n === void 0 ? "rc-steps" : n, o = e.style, i = o === void 0 ? {} : o, l = e.className;
  e.children;
  var c = e.direction, s = c === void 0 ? "horizontal" : c, f = e.type, m = f === void 0 ? "default" : f, d = e.labelPlacement, g = d === void 0 ? "horizontal" : d, u = e.iconPrefix, p = u === void 0 ? "rc" : u, h = e.status, C = h === void 0 ? "process" : h, v = e.size, b = e.current, x = b === void 0 ? 0 : b, w = e.progressDot, S = w === void 0 ? !1 : w, $ = e.stepIcon, y = e.initial, E = y === void 0 ? 0 : y, T = e.icons, N = e.onChange, O = e.itemRender, M = e.items, P = M === void 0 ? [] : M, R = tt(e, qc), I = m === "navigation", _ = m === "inline", D = _ || S, z = _ ? "horizontal" : s, F = _ ? void 0 : v, W = D ? "vertical" : g, ae = ve(r, "".concat(r, "-").concat(z), l, (t = {}, K(t, "".concat(r, "-").concat(F), F), K(t, "".concat(r, "-label-").concat(W), z === "horizontal"), K(t, "".concat(r, "-dot"), !!D), K(t, "".concat(r, "-navigation"), I), K(t, "".concat(r, "-inline"), _), t)), ce = function(re) {
    N && x !== re && N(re);
  }, V = function(re, pe) {
    var X = H({}, re), Y = E + pe;
    return C === "error" && pe === x - 1 && (X.className = "".concat(r, "-next-error")), X.status || (Y === x ? X.status = C : Y < x ? X.status = "finish" : X.status = "wait"), _ && (X.icon = void 0, X.subTitle = void 0), !X.render && O && (X.render = function(Q) {
      return O(X, Q);
    }), /* @__PURE__ */ J.createElement(Uo, ge({}, X, {
      active: Y === x,
      stepNumber: Y + 1,
      stepIndex: Y,
      key: Y,
      prefixCls: r,
      iconPrefix: p,
      wrapperStyle: i,
      progressDot: D,
      stepIcon: $,
      icons: T,
      onStepClick: N && ce
    }));
  };
  return /* @__PURE__ */ J.createElement("div", ge({
    className: ae,
    style: i
  }, R), P.filter(function(te) {
    return te;
  }).map(V));
}
Zc.Step = Uo;
var Qc = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"], Yo = /* @__PURE__ */ a.forwardRef(function(e, t) {
  var n, r = e.prefixCls, o = r === void 0 ? "rc-switch" : r, i = e.className, l = e.checked, c = e.defaultChecked, s = e.disabled, f = e.loadingIcon, m = e.checkedChildren, d = e.unCheckedChildren, g = e.onClick, u = e.onChange, p = e.onKeyDown, h = tt(e, Qc), C = Tt(!1, {
    value: l,
    defaultValue: c
  }), v = ne(C, 2), b = v[0], x = v[1];
  function w(E, T) {
    var N = b;
    return s || (N = E, x(N), u?.(N, T)), N;
  }
  function S(E) {
    E.which === le.LEFT ? w(!1, E) : E.which === le.RIGHT && w(!0, E), p?.(E);
  }
  function $(E) {
    var T = w(!b, E);
    g?.(T, E);
  }
  var y = ve(o, i, (n = {}, K(n, "".concat(o, "-checked"), b), K(n, "".concat(o, "-disabled"), s), n));
  return /* @__PURE__ */ a.createElement("button", ge({}, h, {
    type: "button",
    role: "switch",
    "aria-checked": b,
    disabled: s,
    className: y,
    ref: t,
    onKeyDown: S,
    onClick: $
  }), f, /* @__PURE__ */ a.createElement("span", {
    className: "".concat(o, "-inner")
  }, /* @__PURE__ */ a.createElement("span", {
    className: "".concat(o, "-inner-checked")
  }, m), /* @__PURE__ */ a.createElement("span", {
    className: "".concat(o, "-inner-unchecked")
  }, d)));
});
Yo.displayName = "Switch";
const us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yo
}, Symbol.toStringTag, { value: "Module" })), Jc = ({ className: e, ...t }) => /* @__PURE__ */ Ft(qn, { ...t, className: wn("bg-light-7 border-primary-light-3", e) }), kc = ({ className: e, max: t, ...n }) => /* @__PURE__ */ Ft(qn.Group, { max: t, ...n, className: wn(e) });
Jc.Group = kc;
const es = {
  components: {
    Dropdown: {}
  }
}, ds = ({ className: e, ...t }) => /* @__PURE__ */ Ft(Pa, { theme: es, children: /* @__PURE__ */ Ft(_o, { ...t, className: wn("bg-light-7", e) }) }), fs = ({
  preview: e = !1,
  width: t,
  height: n,
  fallback: r,
  onError: o,
  wrapperClassName: i,
  ...l
}) => {
  const [c, s] = mt(!1);
  return /* @__PURE__ */ Ft(
    Qr,
    {
      style: { width: t, height: n },
      align: "center",
      justify: "center",
      className: i,
      children: c && r ? r : /* @__PURE__ */ Ft(
        Jn,
        {
          preview: e,
          onError: (f) => {
            s(!0), o?.(f);
          },
          width: t,
          height: n,
          ...l
        }
      )
    }
  );
}, ts = (e) => document.getElementById(e), ns = (e, t) => {
  let n;
  return function() {
    clearTimeout(n), n = setTimeout(e, t);
  };
}, ms = ({
  children: e,
  indicatorColor: t,
  indicatorSize: n,
  className: r,
  hasMore: o,
  scrollableNodeId: i,
  onNextPage: l
}) => (St(() => {
  const c = ts(i);
  if (c) {
    const s = () => {
      if (o) {
        const { scrollHeight: m, scrollTop: d, clientHeight: g } = c;
        Math.ceil(d) + g === m && l();
      }
    };
    s();
    const f = ns(s, 1500);
    return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
  }
}, [o, i]), /* @__PURE__ */ za("div", { className: wn(r, "w-full"), onClick: (c) => c.stopPropagation(), children: [
  e,
  o && /* @__PURE__ */ Ft(Qr, { className: "min-h-12", align: "center", justify: "center", children: /* @__PURE__ */ Ft(Ta, { isLoading: !0, color: t, size: n }) })
] }));
export {
  Jc as A,
  so as B,
  us as C,
  to as D,
  on as E,
  ms as F,
  fs as G,
  Po as H,
  En as I,
  Ro as J,
  Zn as K,
  mo as L,
  Mo as M,
  Il as N,
  Gn as O,
  kr as P,
  Uc as Q,
  wo as R,
  Zc as S,
  Un as T,
  Yo as U,
  Xn as a,
  tl as b,
  Ll as c,
  Hl as d,
  jl as e,
  zl as f,
  rl as g,
  Al as h,
  _l as i,
  Di as j,
  cs as k,
  Qi as l,
  Xi as m,
  Ki as n,
  Sl as o,
  Ac as p,
  Uo as q,
  kt as r,
  tc as s,
  pl as t,
  Ga as u,
  Cl as v,
  Zi as w,
  ki as x,
  ds as y,
  ss as z
};
