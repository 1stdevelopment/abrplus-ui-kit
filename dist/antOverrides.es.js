import { jsx as j } from "react/jsx-runtime";
import * as o from "react";
import { forwardRef as ii } from "react";
import { I as Y, g as L, c as w, p as ti, ao as ni, S as ri, ap as oi, R as He, m as V, K as li, z as pe, aq as ai, Z as ci, e as ie, ar as ye, ag as Ie, t as Ne, as as si, ak as Pe, ab as di, d as mi, W as gi, a8 as Te, u as ui, at as $e } from "./index-5EnmYqom.js";
import { am as Ln, k as _n, L as Xn, o as Vn } from "./index-5EnmYqom.js";
import { _ as J, r as F, u as s, f as he, a as P, b as pi, e as $i, aO as hi, aP as xe, aQ as bi, aN as Si, aL as fi, aM as vi, aF as Be, d as me, h as qe, aY as Ci, b5 as yi, t as De, a9 as Ii, D as xi, C as G, c as U } from "./index-Bp79PD41.js";
import { E as te, i as wi, f as Oi, H as Ei, J as zi, K as ji, M as Mi, N as Re, p as Hi, Q as Ni, S as Ae, U as Pi } from "./index-Bnic0fwP.js";
import { A as Gn, y as Kn, G as Qn, F as Un } from "./index-Bnic0fwP.js";
import { twMerge as be } from "tailwind-merge";
var Ti = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Bi = function(i, t) {
  return /* @__PURE__ */ o.createElement(Y, J({}, i, {
    ref: t,
    icon: Ti
  }));
}, We = /* @__PURE__ */ o.forwardRef(Bi);
process.env.NODE_ENV !== "production" && (We.displayName = "ExclamationCircleFilled");
var qi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Di = function(i, t) {
  return /* @__PURE__ */ o.createElement(Y, J({}, i, {
    ref: t,
    icon: qi
  }));
}, Le = /* @__PURE__ */ o.forwardRef(Di);
process.env.NODE_ENV !== "production" && (Le.displayName = "InfoCircleFilled");
const k = (e, i, t, n, r) => ({
  background: e,
  border: `${s(n.lineWidth)} ${n.lineType} ${i}`,
  [`${r}-icon`]: {
    color: t
  }
}), Ri = (e) => {
  const {
    componentCls: i,
    motionDurationSlow: t,
    marginXS: n,
    marginSM: r,
    fontSize: l,
    fontSizeLG: d,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: m,
    withDescriptionIconSize: u,
    colorText: g,
    colorTextHeading: S,
    withDescriptionPadding: $,
    defaultPadding: h
  } = e;
  return {
    [i]: Object.assign(Object.assign({}, F(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: h,
      wordWrap: "break-word",
      borderRadius: c,
      [`&${i}-rtl`]: {
        direction: "rtl"
      },
      [`${i}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${i}-icon`]: {
        marginInlineEnd: n,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: l,
        lineHeight: a
      },
      "&-message": {
        color: S
      },
      [`&${i}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${t} ${m}, opacity ${t} ${m},
        padding-top ${t} ${m}, padding-bottom ${t} ${m},
        margin-bottom ${t} ${m}`
      },
      [`&${i}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${i}-with-description`]: {
      alignItems: "flex-start",
      padding: $,
      [`${i}-icon`]: {
        marginInlineEnd: r,
        fontSize: u,
        lineHeight: 0
      },
      [`${i}-message`]: {
        display: "block",
        marginBottom: n,
        color: S,
        fontSize: d
      },
      [`${i}-description`]: {
        display: "block",
        color: g
      }
    },
    [`${i}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, Ai = (e) => {
  const {
    componentCls: i,
    colorSuccess: t,
    colorSuccessBorder: n,
    colorSuccessBg: r,
    colorWarning: l,
    colorWarningBorder: d,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: m,
    colorErrorBg: u,
    colorInfo: g,
    colorInfoBorder: S,
    colorInfoBg: $
  } = e;
  return {
    [i]: {
      "&-success": k(r, n, t, e, i),
      "&-info": k($, S, g, e, i),
      "&-warning": k(a, d, l, e, i),
      "&-error": Object.assign(Object.assign({}, k(u, m, c, e, i)), {
        [`${i}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Wi = (e) => {
  const {
    componentCls: i,
    iconCls: t,
    motionDurationMid: n,
    marginXS: r,
    fontSizeIcon: l,
    colorIcon: d,
    colorIconHover: a
  } = e;
  return {
    [i]: {
      "&-action": {
        marginInlineStart: r
      },
      [`${i}-close-icon`]: {
        marginInlineStart: r,
        padding: 0,
        overflow: "hidden",
        fontSize: l,
        lineHeight: s(l),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${t}-close`]: {
          color: d,
          transition: `color ${n}`,
          "&:hover": {
            color: a
          }
        }
      },
      "&-close-text": {
        color: d,
        transition: `color ${n}`,
        "&:hover": {
          color: a
        }
      }
    }
  };
}, Li = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), _i = L("Alert", (e) => [Ri(e), Ai(e), Wi(e)], Li);
var we = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const Xi = {
  success: oi,
  info: Le,
  error: ri,
  warning: We
}, Vi = (e) => {
  const {
    icon: i,
    prefixCls: t,
    type: n
  } = e, r = Xi[n] || null;
  return i ? ni(i, /* @__PURE__ */ o.createElement("span", {
    className: `${t}-icon`
  }, i), () => ({
    className: w(`${t}-icon`, {
      [i.props.className]: i.props.className
    })
  })) : /* @__PURE__ */ o.createElement(r, {
    className: `${t}-icon`
  });
}, Fi = (e) => {
  const {
    isClosable: i,
    prefixCls: t,
    closeIcon: n,
    handleClose: r,
    ariaProps: l
  } = e, d = n === !0 || n === void 0 ? /* @__PURE__ */ o.createElement(He, null) : n;
  return i ? /* @__PURE__ */ o.createElement("button", Object.assign({
    type: "button",
    onClick: r,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, l), d) : null;
}, Se = /* @__PURE__ */ o.forwardRef((e, i) => {
  const {
    description: t,
    prefixCls: n,
    message: r,
    banner: l,
    className: d,
    rootClassName: a,
    style: c,
    onMouseEnter: m,
    onMouseLeave: u,
    onClick: g,
    afterClose: S,
    showIcon: $,
    closable: h,
    closeText: f,
    closeIcon: C,
    action: x,
    id: b
  } = e, O = we(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, v] = o.useState(!1);
  process.env.NODE_ENV !== "production" && he("Alert").deprecated(!f, "closeText", "closable.closeIcon");
  const y = o.useRef(null);
  o.useImperativeHandle(i, () => ({
    nativeElement: y.current
  }));
  const {
    getPrefixCls: z,
    direction: N,
    alert: p
  } = o.useContext(P), I = z("alert", n), [M, R, A] = _i(I), W = (H) => {
    var q;
    v(!0), (q = e.onClose) === null || q === void 0 || q.call(e, H);
  }, B = o.useMemo(() => e.type !== void 0 ? e.type : l ? "warning" : "info", [e.type, l]), D = o.useMemo(() => typeof h == "object" && h.closeIcon || f ? !0 : typeof h == "boolean" ? h : C !== !1 && C !== null && C !== void 0 ? !0 : !!p?.closable, [f, C, h, p?.closable]), _ = l && $ === void 0 ? !0 : $, Q = w(I, `${I}-${B}`, {
    [`${I}-with-description`]: !!t,
    [`${I}-no-icon`]: !_,
    [`${I}-banner`]: !!l,
    [`${I}-rtl`]: N === "rtl"
  }, p?.className, d, a, A, R), le = ti(O, {
    aria: !0,
    data: !0
  }), Ze = o.useMemo(() => {
    var H, q;
    return typeof h == "object" && h.closeIcon ? h.closeIcon : f || (C !== void 0 ? C : typeof p?.closable == "object" && (!((H = p?.closable) === null || H === void 0) && H.closeIcon) ? (q = p?.closable) === null || q === void 0 ? void 0 : q.closeIcon : p?.closeIcon);
  }, [C, h, f, p?.closeIcon]), ke = o.useMemo(() => {
    const H = h ?? p?.closable;
    if (typeof H == "object") {
      const {
        closeIcon: q
      } = H;
      return we(H, ["closeIcon"]);
    }
    return {};
  }, [h, p?.closable]);
  return M(/* @__PURE__ */ o.createElement(pi, {
    visible: !E,
    motionName: `${I}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (H) => ({
      maxHeight: H.offsetHeight
    }),
    onLeaveEnd: S
  }, (H, q) => {
    let {
      className: Ce,
      style: ei
    } = H;
    return /* @__PURE__ */ o.createElement("div", Object.assign({
      id: b,
      ref: $i(y, q),
      "data-show": !E,
      className: w(Q, Ce),
      style: Object.assign(Object.assign(Object.assign({}, p?.style), c), ei),
      onMouseEnter: m,
      onMouseLeave: u,
      onClick: g,
      role: "alert"
    }, le), _ ? /* @__PURE__ */ o.createElement(Vi, {
      description: t,
      icon: e.icon,
      prefixCls: I,
      type: B
    }) : null, /* @__PURE__ */ o.createElement("div", {
      className: `${I}-content`
    }, r ? /* @__PURE__ */ o.createElement("div", {
      className: `${I}-message`
    }, r) : null, t ? /* @__PURE__ */ o.createElement("div", {
      className: `${I}-description`
    }, t) : null), x ? /* @__PURE__ */ o.createElement("div", {
      className: `${I}-action`
    }, x) : null, /* @__PURE__ */ o.createElement(Fi, {
      isClosable: D,
      prefixCls: I,
      closeIcon: Ze,
      handleClose: W,
      ariaProps: ke
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Se.displayName = "Alert");
function Gi(e, i, t) {
  return i = xe(i), hi(e, bi() ? Reflect.construct(i, t || [], xe(e).constructor) : i.apply(e, t));
}
let Ki = /* @__PURE__ */ (function(e) {
  function i() {
    var t;
    return vi(this, i), t = Gi(this, i, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Si(i, e), fi(i, [{
    key: "componentDidCatch",
    value: function(n, r) {
      this.setState({
        error: n,
        info: r
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: n,
        description: r,
        id: l,
        children: d
      } = this.props, {
        error: a,
        info: c
      } = this.state, m = c?.componentStack || null, u = typeof n > "u" ? (a || "").toString() : n, g = typeof r > "u" ? m : r;
      return a ? /* @__PURE__ */ o.createElement(Se, {
        id: l,
        type: "error",
        message: u,
        description: /* @__PURE__ */ o.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, g)
      }) : d;
    }
  }]);
})(o.Component);
const _e = Se;
_e.ErrorBoundary = Ki;
const ne = (e) => {
  const {
    prefixCls: i,
    className: t,
    style: n,
    size: r,
    shape: l
  } = e, d = w({
    [`${i}-lg`]: r === "large",
    [`${i}-sm`]: r === "small"
  }), a = w({
    [`${i}-circle`]: l === "circle",
    [`${i}-square`]: l === "square",
    [`${i}-round`]: l === "round"
  }), c = o.useMemo(() => typeof r == "number" ? {
    width: r,
    height: r,
    lineHeight: `${r}px`
  } : {}, [r]);
  return /* @__PURE__ */ o.createElement("span", {
    className: w(i, d, a, t),
    style: Object.assign(Object.assign({}, c), n)
  });
}, Qi = new li("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), re = (e) => ({
  height: e,
  lineHeight: s(e)
}), X = (e) => Object.assign({
  width: e
}, re(e)), Ui = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: Qi,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), ae = (e, i) => Object.assign({
  width: i(e).mul(5).equal(),
  minWidth: i(e).mul(5).equal()
}, re(e)), Yi = (e) => {
  const {
    skeletonAvatarCls: i,
    gradientFromColor: t,
    controlHeight: n,
    controlHeightLG: r,
    controlHeightSM: l
  } = e;
  return {
    [`${i}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: t
    }, X(n)),
    [`${i}${i}-circle`]: {
      borderRadius: "50%"
    },
    [`${i}${i}-lg`]: Object.assign({}, X(r)),
    [`${i}${i}-sm`]: Object.assign({}, X(l))
  };
}, Ji = (e) => {
  const {
    controlHeight: i,
    borderRadiusSM: t,
    skeletonInputCls: n,
    controlHeightLG: r,
    controlHeightSM: l,
    gradientFromColor: d,
    calc: a
  } = e;
  return {
    [`${n}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: d,
      borderRadius: t
    }, ae(i, a)),
    [`${n}-lg`]: Object.assign({}, ae(r, a)),
    [`${n}-sm`]: Object.assign({}, ae(l, a))
  };
}, Oe = (e) => Object.assign({
  width: e
}, re(e)), Zi = (e) => {
  const {
    skeletonImageCls: i,
    imageSizeBase: t,
    gradientFromColor: n,
    borderRadiusSM: r,
    calc: l
  } = e;
  return {
    [`${i}`]: Object.assign(Object.assign({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "top",
      background: n,
      borderRadius: r
    }, Oe(l(t).mul(2).equal())), {
      [`${i}-path`]: {
        fill: "#bfbfbf"
      },
      [`${i}-svg`]: Object.assign(Object.assign({}, Oe(t)), {
        maxWidth: l(t).mul(4).equal(),
        maxHeight: l(t).mul(4).equal()
      }),
      [`${i}-svg${i}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${i}${i}-circle`]: {
      borderRadius: "50%"
    }
  };
}, ce = (e, i, t) => {
  const {
    skeletonButtonCls: n
  } = e;
  return {
    [`${t}${n}-circle`]: {
      width: i,
      minWidth: i,
      borderRadius: "50%"
    },
    [`${t}${n}-round`]: {
      borderRadius: i
    }
  };
}, se = (e, i) => Object.assign({
  width: i(e).mul(2).equal(),
  minWidth: i(e).mul(2).equal()
}, re(e)), ki = (e) => {
  const {
    borderRadiusSM: i,
    skeletonButtonCls: t,
    controlHeight: n,
    controlHeightLG: r,
    controlHeightSM: l,
    gradientFromColor: d,
    calc: a
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [`${t}`]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: d,
      borderRadius: i,
      width: a(n).mul(2).equal(),
      minWidth: a(n).mul(2).equal()
    }, se(n, a))
  }, ce(e, n, t)), {
    [`${t}-lg`]: Object.assign({}, se(r, a))
  }), ce(e, r, `${t}-lg`)), {
    [`${t}-sm`]: Object.assign({}, se(l, a))
  }), ce(e, l, `${t}-sm`));
}, et = (e) => {
  const {
    componentCls: i,
    skeletonAvatarCls: t,
    skeletonTitleCls: n,
    skeletonParagraphCls: r,
    skeletonButtonCls: l,
    skeletonInputCls: d,
    skeletonImageCls: a,
    controlHeight: c,
    controlHeightLG: m,
    controlHeightSM: u,
    gradientFromColor: g,
    padding: S,
    marginSM: $,
    borderRadius: h,
    titleHeight: f,
    blockRadius: C,
    paragraphLiHeight: x,
    controlHeightXS: b,
    paragraphMarginTop: O
  } = e;
  return {
    [`${i}`]: {
      display: "table",
      width: "100%",
      [`${i}-header`]: {
        display: "table-cell",
        paddingInlineEnd: S,
        verticalAlign: "top",
        // Avatar
        [`${t}`]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: g
        }, X(c)),
        [`${t}-circle`]: {
          borderRadius: "50%"
        },
        [`${t}-lg`]: Object.assign({}, X(m)),
        [`${t}-sm`]: Object.assign({}, X(u))
      },
      [`${i}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [`${n}`]: {
          width: "100%",
          height: f,
          background: g,
          borderRadius: C,
          [`+ ${r}`]: {
            marginBlockStart: u
          }
        },
        // paragraph
        [`${r}`]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: x,
            listStyle: "none",
            background: g,
            borderRadius: C,
            "+ li": {
              marginBlockStart: b
            }
          }
        },
        [`${r}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${i}-content`]: {
        [`${n}, ${r} > li`]: {
          borderRadius: h
        }
      }
    },
    [`${i}-with-avatar ${i}-content`]: {
      // Title
      [`${n}`]: {
        marginBlockStart: $,
        [`+ ${r}`]: {
          marginBlockStart: O
        }
      }
    },
    // Skeleton element
    [`${i}${i}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, ki(e)), Yi(e)), Ji(e)), Zi(e)),
    // Skeleton Block Button, Input
    [`${i}${i}-block`]: {
      width: "100%",
      [`${l}`]: {
        width: "100%"
      },
      [`${d}`]: {
        width: "100%"
      }
    },
    // With active animation
    [`${i}${i}-active`]: {
      [`
        ${n},
        ${r} > li,
        ${t},
        ${l},
        ${d},
        ${a}
      `]: Object.assign({}, Ui(e))
    }
  };
}, it = (e) => {
  const {
    colorFillContent: i,
    colorFill: t
  } = e, n = i, r = t;
  return {
    color: n,
    colorGradientEnd: r,
    gradientFromColor: n,
    gradientToColor: r,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, K = L("Skeleton", (e) => {
  const {
    componentCls: i,
    calc: t
  } = e, n = V(e, {
    skeletonAvatarCls: `${i}-avatar`,
    skeletonTitleCls: `${i}-title`,
    skeletonParagraphCls: `${i}-paragraph`,
    skeletonButtonCls: `${i}-button`,
    skeletonInputCls: `${i}-input`,
    skeletonImageCls: `${i}-image`,
    imageSizeBase: t(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return [et(n)];
}, it, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), tt = (e) => {
  const {
    prefixCls: i,
    className: t,
    rootClassName: n,
    active: r,
    shape: l = "circle",
    size: d = "default"
  } = e, {
    getPrefixCls: a
  } = o.useContext(P), c = a("skeleton", i), [m, u, g] = K(c), S = pe(e, ["prefixCls", "className"]), $ = w(c, `${c}-element`, {
    [`${c}-active`]: r
  }, t, n, u, g);
  return m(/* @__PURE__ */ o.createElement("div", {
    className: $
  }, /* @__PURE__ */ o.createElement(ne, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: l,
    size: d
  }, S))));
}, nt = (e) => {
  const {
    prefixCls: i,
    className: t,
    rootClassName: n,
    active: r,
    block: l = !1,
    size: d = "default"
  } = e, {
    getPrefixCls: a
  } = o.useContext(P), c = a("skeleton", i), [m, u, g] = K(c), S = pe(e, ["prefixCls"]), $ = w(c, `${c}-element`, {
    [`${c}-active`]: r,
    [`${c}-block`]: l
  }, t, n, u, g);
  return m(/* @__PURE__ */ o.createElement("div", {
    className: $
  }, /* @__PURE__ */ o.createElement(ne, Object.assign({
    prefixCls: `${c}-button`,
    size: d
  }, S))));
}, rt = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", ot = (e) => {
  const {
    prefixCls: i,
    className: t,
    rootClassName: n,
    style: r,
    active: l
  } = e, {
    getPrefixCls: d
  } = o.useContext(P), a = d("skeleton", i), [c, m, u] = K(a), g = w(a, `${a}-element`, {
    [`${a}-active`]: l
  }, t, n, m, u);
  return c(/* @__PURE__ */ o.createElement("div", {
    className: g
  }, /* @__PURE__ */ o.createElement("div", {
    className: w(`${a}-image`, t),
    style: r
  }, /* @__PURE__ */ o.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${a}-image-svg`
  }, /* @__PURE__ */ o.createElement("title", null, "Image placeholder"), /* @__PURE__ */ o.createElement("path", {
    d: rt,
    className: `${a}-image-path`
  })))));
}, lt = (e) => {
  const {
    prefixCls: i,
    className: t,
    rootClassName: n,
    active: r,
    block: l,
    size: d = "default"
  } = e, {
    getPrefixCls: a
  } = o.useContext(P), c = a("skeleton", i), [m, u, g] = K(c), S = pe(e, ["prefixCls"]), $ = w(c, `${c}-element`, {
    [`${c}-active`]: r,
    [`${c}-block`]: l
  }, t, n, u, g);
  return m(/* @__PURE__ */ o.createElement("div", {
    className: $
  }, /* @__PURE__ */ o.createElement(ne, Object.assign({
    prefixCls: `${c}-input`,
    size: d
  }, S))));
};
var at = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "dot-chart", theme: "outlined" }, ct = function(i, t) {
  return /* @__PURE__ */ o.createElement(Y, J({}, i, {
    ref: t,
    icon: at
  }));
}, Xe = /* @__PURE__ */ o.forwardRef(ct);
process.env.NODE_ENV !== "production" && (Xe.displayName = "DotChartOutlined");
const st = (e) => {
  const {
    prefixCls: i,
    className: t,
    rootClassName: n,
    style: r,
    active: l,
    children: d
  } = e, {
    getPrefixCls: a
  } = o.useContext(P), c = a("skeleton", i), [m, u, g] = K(c), S = w(c, `${c}-element`, {
    [`${c}-active`]: l
  }, u, t, n, g), $ = d ?? /* @__PURE__ */ o.createElement(Xe, null);
  return m(/* @__PURE__ */ o.createElement("div", {
    className: S
  }, /* @__PURE__ */ o.createElement("div", {
    className: w(`${c}-image`, t),
    style: r
  }, $)));
}, dt = (e, i) => {
  const {
    width: t,
    rows: n = 2
  } = i;
  if (Array.isArray(t))
    return t[e];
  if (n - 1 === e)
    return t;
}, mt = (e) => {
  const {
    prefixCls: i,
    className: t,
    style: n,
    rows: r
  } = e, l = Be(Array(r)).map((d, a) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ o.createElement("li", {
      key: a,
      style: {
        width: dt(a, e)
      }
    })
  ));
  return /* @__PURE__ */ o.createElement("ul", {
    className: w(i, t),
    style: n
  }, l);
}, gt = (e) => {
  let {
    prefixCls: i,
    className: t,
    width: n,
    style: r
  } = e;
  return (
    // biome-ignore lint/a11y/useHeadingContent: HOC here
    /* @__PURE__ */ o.createElement("h3", {
      className: w(i, t),
      style: Object.assign({
        width: n
      }, r)
    })
  );
};
function de(e) {
  return e && typeof e == "object" ? e : {};
}
function ut(e, i) {
  return e && !i ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function pt(e, i) {
  return !e && i ? {
    width: "38%"
  } : e && i ? {
    width: "50%"
  } : {};
}
function $t(e, i) {
  const t = {};
  return (!e || !i) && (t.width = "61%"), !e && i ? t.rows = 3 : t.rows = 2, t;
}
const T = (e) => {
  const {
    prefixCls: i,
    loading: t,
    className: n,
    rootClassName: r,
    style: l,
    children: d,
    avatar: a = !1,
    title: c = !0,
    paragraph: m = !0,
    active: u,
    round: g
  } = e, {
    getPrefixCls: S,
    direction: $,
    skeleton: h
  } = o.useContext(P), f = S("skeleton", i), [C, x, b] = K(f);
  if (t || !("loading" in e)) {
    const O = !!a, E = !!c, v = !!m;
    let y;
    if (O) {
      const p = Object.assign(Object.assign({
        prefixCls: `${f}-avatar`
      }, ut(E, v)), de(a));
      y = /* @__PURE__ */ o.createElement("div", {
        className: `${f}-header`
      }, /* @__PURE__ */ o.createElement(ne, Object.assign({}, p)));
    }
    let z;
    if (E || v) {
      let p;
      if (E) {
        const M = Object.assign(Object.assign({
          prefixCls: `${f}-title`
        }, pt(O, v)), de(c));
        p = /* @__PURE__ */ o.createElement(gt, Object.assign({}, M));
      }
      let I;
      if (v) {
        const M = Object.assign(Object.assign({
          prefixCls: `${f}-paragraph`
        }, $t(O, E)), de(m));
        I = /* @__PURE__ */ o.createElement(mt, Object.assign({}, M));
      }
      z = /* @__PURE__ */ o.createElement("div", {
        className: `${f}-content`
      }, p, I);
    }
    const N = w(f, {
      [`${f}-with-avatar`]: O,
      [`${f}-active`]: u,
      [`${f}-rtl`]: $ === "rtl",
      [`${f}-round`]: g
    }, h?.className, n, r, x, b);
    return C(/* @__PURE__ */ o.createElement("div", {
      className: N,
      style: Object.assign(Object.assign({}, h?.style), l)
    }, y, z));
  }
  return d ?? null;
};
T.Button = nt;
T.Avatar = tt;
T.Input = lt;
T.Image = ot;
T.Node = st;
process.env.NODE_ENV !== "production" && (T.displayName = "Skeleton");
var ht = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, name: "double-left", theme: "outlined" }, bt = function(i, t) {
  return /* @__PURE__ */ o.createElement(Y, J({}, i, {
    ref: t,
    icon: ht
  }));
}, ge = /* @__PURE__ */ o.forwardRef(bt);
process.env.NODE_ENV !== "production" && (ge.displayName = "DoubleLeftOutlined");
var St = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, name: "double-right", theme: "outlined" }, ft = function(i, t) {
  return /* @__PURE__ */ o.createElement(Y, J({}, i, {
    ref: t,
    icon: St
  }));
}, ue = /* @__PURE__ */ o.forwardRef(ft);
process.env.NODE_ENV !== "production" && (ue.displayName = "DoubleRightOutlined");
const Ve = (e) => /* @__PURE__ */ o.createElement(te, Object.assign({}, e, {
  showSearch: !0,
  size: "small"
})), Fe = (e) => /* @__PURE__ */ o.createElement(te, Object.assign({}, e, {
  showSearch: !0,
  size: "middle"
}));
Ve.Option = te.Option;
Fe.Option = te.Option;
const vt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`${i}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${i}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${i}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${i}-disabled`]: {
      cursor: "not-allowed",
      [`${i}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: e.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: e.colorBorder,
          backgroundColor: e.itemActiveBgDisabled,
          "&:hover, &:active": {
            backgroundColor: e.itemActiveBgDisabled
          },
          a: {
            color: e.itemActiveColorDisabled
          }
        }
      },
      [`${i}-item-link`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${i}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${i}-simple-pager`]: {
        color: e.colorTextDisabled
      },
      [`${i}-jump-prev, ${i}-jump-next`]: {
        [`${i}-item-link-icon`]: {
          opacity: 0
        },
        [`${i}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${i}-simple`]: {
      [`${i}-prev, ${i}-next`]: {
        [`&${i}-disabled ${i}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
}, Ct = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`&${i}-mini ${i}-total-text, &${i}-mini ${i}-simple-pager`]: {
      height: e.itemSizeSM,
      lineHeight: s(e.itemSizeSM)
    },
    [`&${i}-mini ${i}-item`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: s(e.calc(e.itemSizeSM).sub(2).equal())
    },
    [`&${i}-mini:not(${i}-disabled) ${i}-item:not(${i}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: e.colorBgTextHover
      },
      "&:active": {
        backgroundColor: e.colorBgTextActive
      }
    },
    [`&${i}-mini ${i}-prev, &${i}-mini ${i}-next`]: {
      minWidth: e.itemSizeSM,
      height: e.itemSizeSM,
      margin: 0,
      lineHeight: s(e.itemSizeSM)
    },
    [`&${i}-mini:not(${i}-disabled)`]: {
      [`${i}-prev, ${i}-next`]: {
        [`&:hover ${i}-item-link`]: {
          backgroundColor: e.colorBgTextHover
        },
        [`&:active ${i}-item-link`]: {
          backgroundColor: e.colorBgTextActive
        },
        [`&${i}-disabled:hover ${i}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`
    &${i}-mini ${i}-prev ${i}-item-link,
    &${i}-mini ${i}-next ${i}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: e.itemSizeSM,
        lineHeight: s(e.itemSizeSM)
      }
    },
    [`&${i}-mini ${i}-jump-prev, &${i}-mini ${i}-jump-next`]: {
      height: e.itemSizeSM,
      marginInlineEnd: 0,
      lineHeight: s(e.itemSizeSM)
    },
    [`&${i}-mini ${i}-options`]: {
      marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
      "&-size-changer": {
        top: e.miniOptionsSizeChangerTop
      },
      "&-quick-jumper": {
        height: e.itemSizeSM,
        lineHeight: s(e.itemSizeSM),
        input: Object.assign(Object.assign({}, Mi(e)), {
          width: e.paginationMiniQuickJumperInputWidth,
          height: e.controlHeightSM
        })
      }
    }
  };
}, yt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`
    &${i}-simple ${i}-prev,
    &${i}-simple ${i}-next
    `]: {
      height: e.itemSizeSM,
      lineHeight: s(e.itemSizeSM),
      verticalAlign: "top",
      [`${i}-item-link`]: {
        height: e.itemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        },
        "&::after": {
          height: e.itemSizeSM,
          lineHeight: s(e.itemSizeSM)
        }
      }
    },
    [`&${i}-simple ${i}-simple-pager`]: {
      display: "inline-block",
      height: e.itemSizeSM,
      marginInlineEnd: e.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        padding: `0 ${s(e.paginationItemPaddingInline)}`,
        textAlign: "center",
        backgroundColor: e.itemInputBg,
        border: `${s(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `border-color ${e.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: e.colorPrimary
        },
        "&:focus": {
          borderColor: e.colorPrimaryHover,
          boxShadow: `${s(e.inputOutlineOffset)} 0 ${s(e.controlOutlineWidth)} ${e.controlOutline}`
        },
        "&[disabled]": {
          color: e.colorTextDisabled,
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
}, It = (e) => {
  const {
    componentCls: i,
    antCls: t
  } = e;
  return {
    [`${i}-jump-prev, ${i}-jump-next`]: {
      outline: 0,
      [`${i}-item-container`]: {
        position: "relative",
        [`${i}-item-link-icon`]: {
          color: e.colorPrimary,
          fontSize: e.fontSizeSM,
          opacity: 0,
          transition: `all ${e.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${i}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: e.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: e.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: e.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${e.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${i}-item-link-icon`]: {
          opacity: 1
        },
        [`${i}-item-ellipsis`]: {
          opacity: 0
        }
      }
    },
    [`
    ${i}-prev,
    ${i}-jump-prev,
    ${i}-jump-next
    `]: {
      marginInlineEnd: e.marginXS
    },
    [`
    ${i}-prev,
    ${i}-next,
    ${i}-jump-prev,
    ${i}-jump-next
    `]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      color: e.colorText,
      fontFamily: e.fontFamily,
      lineHeight: `${s(e.itemSize)}`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: e.borderRadius,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`
    },
    [`${i}-prev, ${i}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: e.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${i}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: e.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${s(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: "none",
        transition: `all ${e.motionDurationMid}`
      },
      [`&:hover ${i}-item-link`]: {
        backgroundColor: e.colorBgTextHover
      },
      [`&:active ${i}-item-link`]: {
        backgroundColor: e.colorBgTextActive
      },
      [`&${i}-disabled:hover`]: {
        [`${i}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${i}-slash`]: {
      marginInlineEnd: e.paginationSlashMarginInlineEnd,
      marginInlineStart: e.paginationSlashMarginInlineStart
    },
    [`${i}-options`]: {
      display: "inline-block",
      marginInlineStart: e.margin,
      verticalAlign: "middle",
      "&-size-changer": {
        display: "inline-block",
        width: "auto",
        // https://github.com/ant-design/ant-design/issues/49258
        [`${t}-select-arrow:not(:last-child)`]: {
          opacity: 1
        }
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: e.controlHeight,
        marginInlineStart: e.marginXS,
        lineHeight: s(e.controlHeight),
        verticalAlign: "top",
        input: Object.assign(Object.assign(Object.assign({}, Ei(e)), zi(e, {
          borderColor: e.colorBorder,
          hoverBorderColor: e.colorPrimaryHover,
          activeBorderColor: e.colorPrimary,
          activeShadow: e.activeShadow
        })), {
          "&[disabled]": Object.assign({}, ji(e)),
          width: e.calc(e.controlHeightLG).mul(1.25).equal(),
          height: e.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: e.marginXS,
          marginInlineEnd: e.marginXS
        })
      }
    }
  };
}, xt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`${i}-item`]: {
      display: "inline-block",
      minWidth: e.itemSize,
      height: e.itemSize,
      marginInlineEnd: e.marginXS,
      fontFamily: e.fontFamily,
      lineHeight: s(e.calc(e.itemSize).sub(2).equal()),
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${s(e.lineWidth)} ${e.lineType} transparent`,
      borderRadius: e.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${s(e.paginationItemPaddingInline)}`,
        color: e.colorText,
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${i}-item-active)`]: {
        "&:hover": {
          transition: `all ${e.motionDurationMid}`,
          backgroundColor: e.colorBgTextHover
        },
        "&:active": {
          backgroundColor: e.colorBgTextActive
        }
      },
      "&-active": {
        fontWeight: e.fontWeightStrong,
        backgroundColor: e.itemActiveBg,
        borderColor: e.colorPrimary,
        a: {
          color: e.colorPrimary
        },
        "&:hover": {
          borderColor: e.colorPrimaryHover
        },
        "&:hover a": {
          color: e.colorPrimaryHover
        }
      }
    }
  };
}, wt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [i]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, F(e)), {
      display: "flex",
      "&-start": {
        justifyContent: "start"
      },
      "&-center": {
        justifyContent: "center"
      },
      "&-end": {
        justifyContent: "end"
      },
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${i}-total-text`]: {
        display: "inline-block",
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        lineHeight: s(e.calc(e.itemSize).sub(2).equal()),
        verticalAlign: "middle"
      }
    }), xt(e)), It(e)), yt(e)), Ct(e)), vt(e)), {
      // media query style
      [`@media only screen and (max-width: ${e.screenLG}px)`]: {
        [`${i}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${e.screenSM}px)`]: {
        [`${i}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${e.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
}, Ot = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`${i}:not(${i}-disabled)`]: {
      [`${i}-item`]: Object.assign({}, qe(e)),
      [`${i}-jump-prev, ${i}-jump-next`]: {
        "&:focus-visible": Object.assign({
          [`${i}-item-link-icon`]: {
            opacity: 1
          },
          [`${i}-item-ellipsis`]: {
            opacity: 0
          }
        }, me(e))
      },
      [`${i}-prev, ${i}-next`]: {
        [`&:focus-visible ${i}-item-link`]: Object.assign({}, me(e))
      }
    }
  };
}, Ge = (e) => Object.assign({
  itemBg: e.colorBgContainer,
  itemSize: e.controlHeight,
  itemSizeSM: e.controlHeightSM,
  itemActiveBg: e.colorBgContainer,
  itemLinkBg: e.colorBgContainer,
  itemActiveColorDisabled: e.colorTextDisabled,
  itemActiveBgDisabled: e.controlItemBgActiveDisabled,
  itemInputBg: e.colorBgContainer,
  miniOptionsSizeChangerTop: 0
}, wi(e)), Ke = (e) => V(e, {
  inputOutlineOffset: 0,
  paginationMiniOptionsMarginInlineStart: e.calc(e.marginXXS).div(2).equal(),
  paginationMiniQuickJumperInputWidth: e.calc(e.controlHeightLG).mul(1.1).equal(),
  paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
  paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
  paginationSlashMarginInlineStart: e.marginSM,
  paginationSlashMarginInlineEnd: e.marginSM,
  paginationEllipsisTextIndent: "0.13em"
  // magic for ui experience
}, Oi(e)), Et = L("Pagination", (e) => {
  const i = Ke(e);
  return [wt(i), Ot(i)];
}, Ge), zt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`${i}${i}-bordered${i}-disabled:not(${i}-mini)`]: {
      "&, &:hover": {
        [`${i}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      "&:focus-visible": {
        [`${i}-item-link`]: {
          borderColor: e.colorBorder
        }
      },
      [`${i}-item, ${i}-item-link`]: {
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        [`&:hover:not(${i}-item-active)`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          a: {
            color: e.colorTextDisabled
          }
        },
        [`&${i}-item-active`]: {
          backgroundColor: e.itemActiveBgDisabled
        }
      },
      [`${i}-prev, ${i}-next`]: {
        "&:hover button": {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          color: e.colorTextDisabled
        },
        [`${i}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder
        }
      }
    },
    [`${i}${i}-bordered:not(${i}-mini)`]: {
      [`${i}-prev, ${i}-next`]: {
        "&:hover button": {
          borderColor: e.colorPrimaryHover,
          backgroundColor: e.itemBg
        },
        [`${i}-item-link`]: {
          backgroundColor: e.itemLinkBg,
          borderColor: e.colorBorder
        },
        [`&:hover ${i}-item-link`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          color: e.colorPrimary
        },
        [`&${i}-disabled`]: {
          [`${i}-item-link`]: {
            borderColor: e.colorBorder,
            color: e.colorTextDisabled
          }
        }
      },
      [`${i}-item`]: {
        backgroundColor: e.itemBg,
        border: `${s(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
        [`&:hover:not(${i}-item-active)`]: {
          borderColor: e.colorPrimary,
          backgroundColor: e.itemBg,
          a: {
            color: e.colorPrimary
          }
        },
        "&-active": {
          borderColor: e.colorPrimary
        }
      }
    }
  };
}, jt = ai(["Pagination", "bordered"], (e) => {
  const i = Ke(e);
  return [zt(i)];
}, Ge);
var Mt = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const Qe = (e) => {
  const {
    align: i,
    prefixCls: t,
    selectPrefixCls: n,
    className: r,
    rootClassName: l,
    style: d,
    size: a,
    locale: c,
    selectComponentClass: m,
    responsive: u,
    showSizeChanger: g
  } = e, S = Mt(e, ["align", "prefixCls", "selectPrefixCls", "className", "rootClassName", "style", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]), {
    xs: $
  } = Re(u), [, h] = Ci(), {
    getPrefixCls: f,
    direction: C,
    pagination: x = {}
  } = o.useContext(P), b = f("pagination", t), [O, E, v] = Et(b), y = g ?? x.showSizeChanger, z = o.useMemo(() => {
    const B = /* @__PURE__ */ o.createElement("span", {
      className: `${b}-item-ellipsis`
    }, "•••"), D = /* @__PURE__ */ o.createElement("button", {
      className: `${b}-item-link`,
      type: "button",
      tabIndex: -1
    }, C === "rtl" ? /* @__PURE__ */ o.createElement(Ie, null) : /* @__PURE__ */ o.createElement(ye, null)), _ = /* @__PURE__ */ o.createElement("button", {
      className: `${b}-item-link`,
      type: "button",
      tabIndex: -1
    }, C === "rtl" ? /* @__PURE__ */ o.createElement(ye, null) : /* @__PURE__ */ o.createElement(Ie, null)), Q = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ o.createElement("a", {
        className: `${b}-item-link`
      }, /* @__PURE__ */ o.createElement("div", {
        className: `${b}-item-container`
      }, C === "rtl" ? /* @__PURE__ */ o.createElement(ue, {
        className: `${b}-item-link-icon`
      }) : /* @__PURE__ */ o.createElement(ge, {
        className: `${b}-item-link-icon`
      }), B))
    ), le = (
      // biome-ignore lint/a11y/useValidAnchor: it is hard to refactor
      /* @__PURE__ */ o.createElement("a", {
        className: `${b}-item-link`
      }, /* @__PURE__ */ o.createElement("div", {
        className: `${b}-item-container`
      }, C === "rtl" ? /* @__PURE__ */ o.createElement(ge, {
        className: `${b}-item-link-icon`
      }) : /* @__PURE__ */ o.createElement(ue, {
        className: `${b}-item-link-icon`
      }), B))
    );
    return {
      prevIcon: D,
      nextIcon: _,
      jumpPrevIcon: Q,
      jumpNextIcon: le
    };
  }, [C, b]), [N] = ci("Pagination", yi), p = Object.assign(Object.assign({}, N), c), I = ie(a), M = I === "small" || !!($ && !I && u), R = f("select", n), A = w({
    [`${b}-${i}`]: !!i,
    [`${b}-mini`]: M,
    [`${b}-rtl`]: C === "rtl",
    [`${b}-bordered`]: h.wireframe
  }, x?.className, r, l, E, v), W = Object.assign(Object.assign({}, x?.style), d);
  return O(/* @__PURE__ */ o.createElement(o.Fragment, null, h.wireframe && /* @__PURE__ */ o.createElement(jt, {
    prefixCls: b
  }), /* @__PURE__ */ o.createElement(Hi, Object.assign({}, z, S, {
    style: W,
    prefixCls: b,
    selectPrefixCls: R,
    className: A,
    selectComponentClass: m || (M ? Ve : Fe),
    locale: p,
    showSizeChanger: y
  }))));
};
process.env.NODE_ENV !== "production" && (Qe.displayName = "Pagination");
function Ee(e, i) {
  return {
    [`${e}, ${e}:hover, ${e}:focus`]: {
      color: i.colorTextDisabled,
      cursor: "not-allowed"
    }
  };
}
function ze(e) {
  return {
    backgroundColor: e.itemSelectedBg,
    boxShadow: e.boxShadowTertiary
  };
}
const Ht = Object.assign({
  overflow: "hidden"
}, De), Nt = (e) => {
  const {
    componentCls: i
  } = e, t = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), n = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), r = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
  return {
    [i]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, F(e)), {
      display: "inline-block",
      padding: e.trackPadding,
      color: e.itemColor,
      background: e.trackBg,
      borderRadius: e.borderRadius,
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      [`${i}-group`]: {
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        justifyItems: "flex-start",
        width: "100%"
      },
      // RTL styles
      [`&${i}-rtl`]: {
        direction: "rtl"
      },
      // block styles
      [`&${i}-block`]: {
        display: "flex"
      },
      [`&${i}-block ${i}-item`]: {
        flex: 1,
        minWidth: 0
      },
      // item styles
      [`${i}-item`]: {
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        transition: `color ${e.motionDurationMid} ${e.motionEaseInOut}`,
        borderRadius: e.borderRadiusSM,
        // Fix Safari render bug
        // https://github.com/ant-design/ant-design/issues/45250
        transform: "translateZ(0)",
        "&-selected": Object.assign(Object.assign({}, ze(e)), {
          color: e.itemSelectedColor
        }),
        "&::after": {
          content: '""',
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          top: 0,
          insetInlineStart: 0,
          borderRadius: "inherit",
          transition: `background-color ${e.motionDurationMid}`,
          // This is mandatory to make it not clickable or hoverable
          // Ref: https://github.com/ant-design/ant-design/issues/40888
          pointerEvents: "none"
        },
        [`&:hover:not(${i}-item-selected):not(${i}-item-disabled)`]: {
          color: e.itemHoverColor,
          "&::after": {
            backgroundColor: e.itemHoverBg
          }
        },
        [`&:active:not(${i}-item-selected):not(${i}-item-disabled)`]: {
          color: e.itemHoverColor,
          "&::after": {
            backgroundColor: e.itemActiveBg
          }
        },
        "&-label": Object.assign({
          minHeight: t,
          lineHeight: s(t),
          padding: `0 ${s(e.segmentedPaddingHorizontal)}`
        }, Ht),
        // syntactic sugar to add `icon` for Segmented Item
        "&-icon + *": {
          marginInlineStart: e.calc(e.marginSM).div(2).equal()
        },
        "&-input": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none"
        }
      },
      // thumb styles
      [`${i}-thumb`]: Object.assign(Object.assign({}, ze(e)), {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: 0,
        height: "100%",
        padding: `${s(e.paddingXXS)} 0`,
        borderRadius: e.borderRadiusSM,
        [`& ~ ${i}-item:not(${i}-item-selected):not(${i}-item-disabled)::after`]: {
          backgroundColor: "transparent"
        }
      }),
      // size styles
      [`&${i}-lg`]: {
        borderRadius: e.borderRadiusLG,
        [`${i}-item-label`]: {
          minHeight: n,
          lineHeight: s(n),
          padding: `0 ${s(e.segmentedPaddingHorizontal)}`,
          fontSize: e.fontSizeLG
        },
        [`${i}-item, ${i}-thumb`]: {
          borderRadius: e.borderRadius
        }
      },
      [`&${i}-sm`]: {
        borderRadius: e.borderRadiusSM,
        [`${i}-item-label`]: {
          minHeight: r,
          lineHeight: s(r),
          padding: `0 ${s(e.segmentedPaddingHorizontalSM)}`
        },
        [`${i}-item, ${i}-thumb`]: {
          borderRadius: e.borderRadiusXS
        }
      }
    }), Ee(`&-disabled ${i}-item`, e)), Ee(`${i}-item-disabled`, e)), {
      // transition effect when `appear-active`
      [`${i}-thumb-motion-appear-active`]: {
        transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        willChange: "transform, width"
      }
    })
  };
}, Pt = (e) => {
  const {
    colorTextLabel: i,
    colorText: t,
    colorFillSecondary: n,
    colorBgElevated: r,
    colorFill: l,
    lineWidthBold: d,
    colorBgLayout: a
  } = e;
  return {
    trackPadding: d,
    trackBg: a,
    itemColor: i,
    itemHoverColor: t,
    itemHoverBg: n,
    itemSelectedBg: r,
    itemActiveBg: l,
    itemSelectedColor: t
  };
}, Tt = L("Segmented", (e) => {
  const {
    lineWidth: i,
    calc: t
  } = e, n = V(e, {
    segmentedPaddingHorizontal: t(e.controlPaddingHorizontal).sub(i).equal(),
    segmentedPaddingHorizontalSM: t(e.controlPaddingHorizontalSM).sub(i).equal()
  });
  return [Nt(n)];
}, Pt);
var je = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
function Bt(e) {
  return typeof e == "object" && !!e?.icon;
}
const qt = /* @__PURE__ */ o.forwardRef((e, i) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    block: l,
    options: d = [],
    size: a = "middle",
    style: c
  } = e, m = je(e, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style"]), {
    getPrefixCls: u,
    direction: g,
    segmented: S
  } = o.useContext(P), $ = u("segmented", t), [h, f, C] = Tt($), x = ie(a), b = o.useMemo(() => d.map((v) => {
    if (Bt(v)) {
      const {
        icon: y,
        label: z
      } = v, N = je(v, ["icon", "label"]);
      return Object.assign(Object.assign({}, N), {
        label: /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("span", {
          className: `${$}-item-icon`
        }, y), z && /* @__PURE__ */ o.createElement("span", null, z))
      });
    }
    return v;
  }), [d, $]), O = w(n, r, S?.className, {
    [`${$}-block`]: l,
    [`${$}-sm`]: x === "small",
    [`${$}-lg`]: x === "large"
  }, f, C), E = Object.assign(Object.assign({}, S?.style), c);
  return h(/* @__PURE__ */ o.createElement(Ni, Object.assign({}, m, {
    className: O,
    style: E,
    options: b,
    ref: i,
    prefixCls: $,
    direction: g
  })));
}), Ue = qt;
process.env.NODE_ENV !== "production" && (Ue.displayName = "Segmented");
const Dt = (e) => {
  const {
    componentCls: i,
    customIconTop: t,
    customIconSize: n,
    customIconFontSize: r
  } = e;
  return {
    [`${i}-item-custom`]: {
      [`> ${i}-item-container > ${i}-item-icon`]: {
        height: "auto",
        background: "none",
        border: 0,
        [`> ${i}-icon`]: {
          top: t,
          width: n,
          height: n,
          fontSize: r,
          lineHeight: `${s(n)}`
        }
      }
    },
    // Only adjust horizontal customize icon width
    [`&:not(${i}-vertical)`]: {
      [`${i}-item-custom`]: {
        [`${i}-item-icon`]: {
          width: "auto",
          background: "none"
        }
      }
    }
  };
}, Rt = (e) => {
  const {
    componentCls: i
  } = e, t = `${i}-item`;
  return {
    [`${i}-horizontal`]: {
      [`${t}-tail`]: {
        transform: "translateY(-50%)"
      }
    }
  };
}, At = (e) => {
  const {
    componentCls: i,
    inlineDotSize: t,
    inlineTitleColor: n,
    inlineTailColor: r
  } = e, l = e.calc(e.paddingXS).add(e.lineWidth).equal(), d = {
    [`${i}-item-container ${i}-item-content ${i}-item-title`]: {
      color: n
    }
  };
  return {
    [`&${i}-inline`]: {
      width: "auto",
      display: "inline-flex",
      [`${i}-item`]: {
        flex: "none",
        "&-container": {
          padding: `${s(l)} ${s(e.paddingXXS)} 0`,
          margin: `0 ${s(e.calc(e.marginXXS).div(2).equal())}`,
          borderRadius: e.borderRadiusSM,
          cursor: "pointer",
          transition: `background-color ${e.motionDurationMid}`,
          "&:hover": {
            background: e.controlItemBgHover
          },
          "&[role='button']:hover": {
            opacity: 1
          }
        },
        "&-icon": {
          width: t,
          height: t,
          marginInlineStart: `calc(50% - ${s(e.calc(t).div(2).equal())})`,
          [`> ${i}-icon`]: {
            top: 0
          },
          [`${i}-icon-dot`]: {
            borderRadius: e.calc(e.fontSizeSM).div(4).equal(),
            "&::after": {
              display: "none"
            }
          }
        },
        "&-content": {
          width: "auto",
          marginTop: e.calc(e.marginXS).sub(e.lineWidth).equal()
        },
        "&-title": {
          color: n,
          fontSize: e.fontSizeSM,
          lineHeight: e.lineHeightSM,
          fontWeight: "normal",
          marginBottom: e.calc(e.marginXXS).div(2).equal()
        },
        "&-description": {
          display: "none"
        },
        "&-tail": {
          marginInlineStart: 0,
          top: e.calc(t).div(2).add(l).equal(),
          transform: "translateY(-50%)",
          "&:after": {
            width: "100%",
            height: e.lineWidth,
            borderRadius: 0,
            marginInlineStart: 0,
            background: r
          }
        },
        [`&:first-child ${i}-item-tail`]: {
          width: "50%",
          marginInlineStart: "50%"
        },
        [`&:last-child ${i}-item-tail`]: {
          display: "block",
          width: "50%"
        },
        "&-wait": Object.assign({
          [`${i}-item-icon ${i}-icon ${i}-icon-dot`]: {
            backgroundColor: e.colorBorderBg,
            border: `${s(e.lineWidth)} ${e.lineType} ${r}`
          }
        }, d),
        "&-finish": Object.assign({
          [`${i}-item-tail::after`]: {
            backgroundColor: r
          },
          [`${i}-item-icon ${i}-icon ${i}-icon-dot`]: {
            backgroundColor: r,
            border: `${s(e.lineWidth)} ${e.lineType} ${r}`
          }
        }, d),
        "&-error": d,
        "&-active, &-process": Object.assign({
          [`${i}-item-icon`]: {
            width: t,
            height: t,
            marginInlineStart: `calc(50% - ${s(e.calc(t).div(2).equal())})`,
            top: 0
          }
        }, d),
        [`&:not(${i}-item-active) > ${i}-item-container[role='button']:hover`]: {
          [`${i}-item-title`]: {
            color: n
          }
        }
      }
    }
  };
}, Wt = (e) => {
  const {
    componentCls: i,
    iconSize: t,
    lineHeight: n,
    iconSizeSM: r
  } = e;
  return {
    [`&${i}-label-vertical`]: {
      [`${i}-item`]: {
        overflow: "visible",
        "&-tail": {
          marginInlineStart: e.calc(t).div(2).add(e.controlHeightLG).equal(),
          padding: `0 ${s(e.paddingLG)}`
        },
        "&-content": {
          display: "block",
          width: e.calc(t).div(2).add(e.controlHeightLG).mul(2).equal(),
          marginTop: e.marginSM,
          textAlign: "center"
        },
        "&-icon": {
          display: "inline-block",
          marginInlineStart: e.controlHeightLG
        },
        "&-title": {
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
          "&::after": {
            display: "none"
          }
        },
        "&-subtitle": {
          display: "block",
          marginBottom: e.marginXXS,
          marginInlineStart: 0,
          lineHeight: n
        }
      },
      [`&${i}-small:not(${i}-dot)`]: {
        [`${i}-item`]: {
          "&-icon": {
            marginInlineStart: e.calc(t).sub(r).div(2).add(e.controlHeightLG).equal()
          }
        }
      }
    }
  };
}, Lt = (e) => {
  const {
    componentCls: i,
    navContentMaxWidth: t,
    navArrowColor: n,
    stepsNavActiveColor: r,
    motionDurationSlow: l
  } = e;
  return {
    [`&${i}-navigation`]: {
      paddingTop: e.paddingSM,
      [`&${i}-small`]: {
        [`${i}-item`]: {
          "&-container": {
            marginInlineStart: e.calc(e.marginSM).mul(-1).equal()
          }
        }
      },
      [`${i}-item`]: {
        overflow: "visible",
        textAlign: "center",
        "&-container": {
          display: "inline-block",
          height: "100%",
          marginInlineStart: e.calc(e.margin).mul(-1).equal(),
          paddingBottom: e.paddingSM,
          textAlign: "start",
          transition: `opacity ${l}`,
          [`${i}-item-content`]: {
            maxWidth: t
          },
          [`${i}-item-title`]: Object.assign(Object.assign({
            maxWidth: "100%",
            paddingInlineEnd: 0
          }, De), {
            "&::after": {
              display: "none"
            }
          })
        },
        [`&:not(${i}-item-active)`]: {
          [`${i}-item-container[role='button']`]: {
            cursor: "pointer",
            "&:hover": {
              opacity: 0.85
            }
          }
        },
        "&:last-child": {
          flex: 1,
          "&::after": {
            display: "none"
          }
        },
        "&::after": {
          position: "absolute",
          top: `calc(50% - ${s(e.calc(e.paddingSM).div(2).equal())})`,
          insetInlineStart: "100%",
          display: "inline-block",
          width: e.fontSizeIcon,
          height: e.fontSizeIcon,
          borderTop: `${s(e.lineWidth)} ${e.lineType} ${n}`,
          borderBottom: "none",
          borderInlineStart: "none",
          borderInlineEnd: `${s(e.lineWidth)} ${e.lineType} ${n}`,
          transform: "translateY(-50%) translateX(-50%) rotate(45deg)",
          content: '""'
        },
        "&::before": {
          position: "absolute",
          bottom: 0,
          insetInlineStart: "50%",
          display: "inline-block",
          width: 0,
          height: e.lineWidthBold,
          backgroundColor: r,
          transition: `width ${l}, inset-inline-start ${l}`,
          transitionTimingFunction: "ease-out",
          content: '""'
        }
      },
      [`${i}-item${i}-item-active::before`]: {
        insetInlineStart: 0,
        width: "100%"
      }
    },
    [`&${i}-navigation${i}-vertical`]: {
      [`> ${i}-item`]: {
        marginInlineEnd: 0,
        "&::before": {
          display: "none"
        },
        [`&${i}-item-active::before`]: {
          top: 0,
          insetInlineEnd: 0,
          insetInlineStart: "unset",
          display: "block",
          width: e.calc(e.lineWidth).mul(3).equal(),
          height: `calc(100% - ${s(e.marginLG)})`
        },
        "&::after": {
          position: "relative",
          insetInlineStart: "50%",
          display: "block",
          width: e.calc(e.controlHeight).mul(0.25).equal(),
          height: e.calc(e.controlHeight).mul(0.25).equal(),
          marginBottom: e.marginXS,
          textAlign: "center",
          transform: "translateY(-50%) translateX(-50%) rotate(135deg)"
        },
        "&:last-child": {
          "&::after": {
            display: "none"
          }
        },
        [`> ${i}-item-container > ${i}-item-tail`]: {
          visibility: "hidden"
        }
      }
    },
    [`&${i}-navigation${i}-horizontal`]: {
      [`> ${i}-item > ${i}-item-container > ${i}-item-tail`]: {
        visibility: "hidden"
      }
    }
  };
}, _t = (e) => {
  const {
    antCls: i,
    componentCls: t,
    iconSize: n,
    iconSizeSM: r,
    processIconColor: l,
    marginXXS: d,
    lineWidthBold: a,
    lineWidth: c,
    paddingXXS: m
  } = e, u = e.calc(n).add(e.calc(a).mul(4).equal()).equal(), g = e.calc(r).add(e.calc(e.lineWidth).mul(4).equal()).equal();
  return {
    [`&${t}-with-progress`]: {
      [`${t}-item`]: {
        paddingTop: m,
        [`&-process ${t}-item-container ${t}-item-icon ${t}-icon`]: {
          color: l
        }
      },
      [`&${t}-vertical > ${t}-item `]: {
        paddingInlineStart: m,
        [`> ${t}-item-container > ${t}-item-tail`]: {
          top: d,
          insetInlineStart: e.calc(n).div(2).sub(c).add(m).equal()
        }
      },
      [`&, &${t}-small`]: {
        [`&${t}-horizontal ${t}-item:first-child`]: {
          paddingBottom: m,
          paddingInlineStart: m
        }
      },
      [`&${t}-small${t}-vertical > ${t}-item > ${t}-item-container > ${t}-item-tail`]: {
        insetInlineStart: e.calc(r).div(2).sub(c).add(m).equal()
      },
      [`&${t}-label-vertical ${t}-item ${t}-item-tail`]: {
        top: e.calc(n).div(2).add(m).equal()
      },
      [`${t}-item-icon`]: {
        position: "relative",
        [`${i}-progress`]: {
          position: "absolute",
          insetInlineStart: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          "&-inner": {
            width: `${s(u)} !important`,
            height: `${s(u)} !important`
          }
        }
      },
      // ============================== Small size ==============================
      [`&${t}-small`]: {
        [`&${t}-label-vertical ${t}-item ${t}-item-tail`]: {
          top: e.calc(r).div(2).add(m).equal()
        },
        [`${t}-item-icon ${i}-progress-inner`]: {
          width: `${s(g)} !important`,
          height: `${s(g)} !important`
        }
      }
    }
  };
}, Xt = (e) => {
  const {
    componentCls: i,
    descriptionMaxWidth: t,
    lineHeight: n,
    dotCurrentSize: r,
    dotSize: l,
    motionDurationSlow: d
  } = e;
  return {
    [`&${i}-dot, &${i}-dot${i}-small`]: {
      [`${i}-item`]: {
        "&-title": {
          lineHeight: n
        },
        "&-tail": {
          // Math.floor((token.size - token.lineWidth * 3) / 2)
          top: e.calc(e.dotSize).sub(e.calc(e.lineWidth).mul(3).equal()).div(2).equal(),
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
          marginInline: `${s(e.calc(t).div(2).equal())} 0`,
          padding: 0,
          "&::after": {
            width: `calc(100% - ${s(e.calc(e.marginSM).mul(2).equal())})`,
            height: e.calc(e.lineWidth).mul(3).equal(),
            marginInlineStart: e.marginSM
          }
        },
        "&-icon": {
          width: l,
          height: l,
          marginInlineStart: e.calc(e.descriptionMaxWidth).sub(l).div(2).equal(),
          paddingInlineEnd: 0,
          lineHeight: `${s(l)}`,
          background: "transparent",
          border: 0,
          [`${i}-icon-dot`]: {
            position: "relative",
            float: "left",
            width: "100%",
            height: "100%",
            borderRadius: 100,
            // very large number
            transition: `all ${d}`,
            /* expand hover area */
            "&::after": {
              position: "absolute",
              top: e.calc(e.marginSM).mul(-1).equal(),
              insetInlineStart: e.calc(l).sub(e.calc(e.controlHeightLG).mul(1.5).equal()).div(2).equal(),
              width: e.calc(e.controlHeightLG).mul(1.5).equal(),
              height: e.controlHeight,
              background: "transparent",
              content: '""'
            }
          }
        },
        "&-content": {
          width: t
        },
        [`&-process ${i}-item-icon`]: {
          position: "relative",
          top: e.calc(l).sub(r).div(2).equal(),
          width: r,
          height: r,
          lineHeight: `${s(r)}`,
          background: "none",
          marginInlineStart: e.calc(e.descriptionMaxWidth).sub(r).div(2).equal()
        },
        [`&-process ${i}-icon`]: {
          [`&:first-child ${i}-icon-dot`]: {
            insetInlineStart: 0
          }
        }
      }
    },
    [`&${i}-vertical${i}-dot`]: {
      [`${i}-item-icon`]: {
        marginTop: e.calc(e.controlHeight).sub(l).div(2).equal(),
        marginInlineStart: 0,
        background: "none"
      },
      [`${i}-item-process ${i}-item-icon`]: {
        marginTop: e.calc(e.controlHeight).sub(r).div(2).equal(),
        top: 0,
        insetInlineStart: e.calc(l).sub(r).div(2).equal(),
        marginInlineStart: 0
      },
      // https://github.com/ant-design/ant-design/issues/18354
      [`${i}-item > ${i}-item-container > ${i}-item-tail`]: {
        top: e.calc(e.controlHeight).sub(l).div(2).equal(),
        insetInlineStart: 0,
        margin: 0,
        padding: `${s(e.calc(l).add(e.paddingXS).equal())} 0 ${s(e.paddingXS)}`,
        "&::after": {
          marginInlineStart: e.calc(l).sub(e.lineWidth).div(2).equal()
        }
      },
      [`&${i}-small`]: {
        [`${i}-item-icon`]: {
          marginTop: e.calc(e.controlHeightSM).sub(l).div(2).equal()
        },
        [`${i}-item-process ${i}-item-icon`]: {
          marginTop: e.calc(e.controlHeightSM).sub(r).div(2).equal()
        },
        [`${i}-item > ${i}-item-container > ${i}-item-tail`]: {
          top: e.calc(e.controlHeightSM).sub(l).div(2).equal()
        }
      },
      [`${i}-item:first-child ${i}-icon-dot`]: {
        insetInlineStart: 0
      },
      [`${i}-item-content`]: {
        width: "inherit"
      }
    }
  };
}, Vt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [`&${i}-rtl`]: {
      direction: "rtl",
      [`${i}-item`]: {
        "&-subtitle": {
          float: "left"
        }
      },
      // nav
      [`&${i}-navigation`]: {
        [`${i}-item::after`]: {
          transform: "rotate(-45deg)"
        }
      },
      // vertical
      [`&${i}-vertical`]: {
        [`> ${i}-item`]: {
          "&::after": {
            transform: "rotate(225deg)"
          },
          [`${i}-item-icon`]: {
            float: "right"
          }
        }
      },
      // progress-dot
      [`&${i}-dot`]: {
        [`${i}-item-icon ${i}-icon-dot, &${i}-small ${i}-item-icon ${i}-icon-dot`]: {
          float: "right"
        }
      }
    }
  };
}, Ft = (e) => {
  const {
    componentCls: i,
    iconSizeSM: t,
    // stepsSmallIconMargin,
    fontSizeSM: n,
    fontSize: r,
    colorTextDescription: l
  } = e;
  return {
    [`&${i}-small`]: {
      [`&${i}-horizontal:not(${i}-label-vertical) ${i}-item`]: {
        paddingInlineStart: e.paddingSM,
        "&:first-child": {
          paddingInlineStart: 0
        }
      },
      [`${i}-item-icon`]: {
        width: t,
        height: t,
        // margin: stepsSmallIconMargin,
        marginTop: 0,
        marginBottom: 0,
        marginInline: `0 ${s(e.marginXS)}`,
        fontSize: n,
        lineHeight: `${s(t)}`,
        textAlign: "center",
        borderRadius: t
      },
      [`${i}-item-title`]: {
        paddingInlineEnd: e.paddingSM,
        fontSize: r,
        lineHeight: `${s(t)}`,
        "&::after": {
          top: e.calc(t).div(2).equal()
        }
      },
      [`${i}-item-description`]: {
        color: l,
        fontSize: r
      },
      [`${i}-item-tail`]: {
        top: e.calc(t).div(2).sub(e.paddingXXS).equal()
      },
      [`${i}-item-custom ${i}-item-icon`]: {
        width: "inherit",
        height: "inherit",
        lineHeight: "inherit",
        background: "none",
        border: 0,
        borderRadius: 0,
        [`> ${i}-icon`]: {
          fontSize: t,
          lineHeight: `${s(t)}`,
          transform: "none"
        }
      }
    }
  };
}, Gt = (e) => {
  const {
    componentCls: i,
    iconSizeSM: t,
    iconSize: n
  } = e;
  return {
    [`&${i}-vertical`]: {
      display: "flex",
      flexDirection: "column",
      [`> ${i}-item`]: {
        display: "block",
        flex: "1 0 auto",
        paddingInlineStart: 0,
        overflow: "visible",
        [`${i}-item-icon`]: {
          float: "left",
          marginInlineEnd: e.margin
        },
        [`${i}-item-content`]: {
          display: "block",
          minHeight: e.calc(e.controlHeight).mul(1.5).equal(),
          overflow: "hidden"
        },
        [`${i}-item-title`]: {
          lineHeight: `${s(n)}`
        },
        [`${i}-item-description`]: {
          paddingBottom: e.paddingSM
        }
      },
      [`> ${i}-item > ${i}-item-container > ${i}-item-tail`]: {
        position: "absolute",
        top: 0,
        insetInlineStart: e.calc(n).div(2).sub(e.lineWidth).equal(),
        width: e.lineWidth,
        height: "100%",
        padding: `${s(e.calc(e.marginXXS).mul(1.5).add(n).equal())} 0 ${s(e.calc(e.marginXXS).mul(1.5).equal())}`,
        "&::after": {
          width: e.lineWidth,
          height: "100%"
        }
      },
      [`> ${i}-item:not(:last-child) > ${i}-item-container > ${i}-item-tail`]: {
        display: "block"
      },
      [` > ${i}-item > ${i}-item-container > ${i}-item-content > ${i}-item-title`]: {
        "&::after": {
          display: "none"
        }
      },
      [`&${i}-small ${i}-item-container`]: {
        [`${i}-item-tail`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: e.calc(t).div(2).sub(e.lineWidth).equal(),
          padding: `${s(e.calc(e.marginXXS).mul(1.5).add(t).equal())} 0 ${s(e.calc(e.marginXXS).mul(1.5).equal())}`
        },
        [`${i}-item-title`]: {
          lineHeight: `${s(t)}`
        }
      }
    }
  };
}, Kt = "wait", Qt = "process", Ut = "finish", Yt = "error", ee = (e, i) => {
  const t = `${i.componentCls}-item`, n = `${e}IconColor`, r = `${e}TitleColor`, l = `${e}DescriptionColor`, d = `${e}TailColor`, a = `${e}IconBgColor`, c = `${e}IconBorderColor`, m = `${e}DotColor`;
  return {
    [`${t}-${e} ${t}-icon`]: {
      backgroundColor: i[a],
      borderColor: i[c],
      [`> ${i.componentCls}-icon`]: {
        color: i[n],
        [`${i.componentCls}-icon-dot`]: {
          background: i[m]
        }
      }
    },
    [`${t}-${e}${t}-custom ${t}-icon`]: {
      [`> ${i.componentCls}-icon`]: {
        color: i[m]
      }
    },
    [`${t}-${e} > ${t}-container > ${t}-content > ${t}-title`]: {
      color: i[r],
      "&::after": {
        backgroundColor: i[d]
      }
    },
    [`${t}-${e} > ${t}-container > ${t}-content > ${t}-description`]: {
      color: i[l]
    },
    [`${t}-${e} > ${t}-container > ${t}-tail::after`]: {
      backgroundColor: i[d]
    }
  };
}, Jt = (e) => {
  const {
    componentCls: i,
    motionDurationSlow: t
  } = e, n = `${i}-item`, r = `${n}-icon`;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [n]: {
      position: "relative",
      display: "inline-block",
      flex: 1,
      overflow: "hidden",
      verticalAlign: "top",
      "&:last-child": {
        flex: "none",
        [`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]: {
          display: "none"
        }
      }
    },
    [`${n}-container`]: {
      outline: "none",
      "&:focus-visible": {
        [r]: Object.assign({}, me(e))
      }
    },
    [`${r}, ${n}-content`]: {
      display: "inline-block",
      verticalAlign: "top"
    },
    [r]: {
      width: e.iconSize,
      height: e.iconSize,
      marginTop: 0,
      marginBottom: 0,
      marginInlineStart: 0,
      marginInlineEnd: e.marginXS,
      fontSize: e.iconFontSize,
      fontFamily: e.fontFamily,
      lineHeight: `${s(e.iconSize)}`,
      textAlign: "center",
      borderRadius: e.iconSize,
      border: `${s(e.lineWidth)} ${e.lineType} transparent`,
      transition: `background-color ${t}, border-color ${t}`,
      [`${i}-icon`]: {
        position: "relative",
        top: e.iconTop,
        color: e.colorPrimary,
        lineHeight: 1
      }
    },
    [`${n}-tail`]: {
      position: "absolute",
      top: e.calc(e.iconSize).div(2).equal(),
      insetInlineStart: 0,
      width: "100%",
      "&::after": {
        display: "inline-block",
        width: "100%",
        height: e.lineWidth,
        background: e.colorSplit,
        borderRadius: e.lineWidth,
        transition: `background ${t}`,
        content: '""'
      }
    },
    [`${n}-title`]: {
      position: "relative",
      display: "inline-block",
      paddingInlineEnd: e.padding,
      color: e.colorText,
      fontSize: e.fontSizeLG,
      lineHeight: `${s(e.titleLineHeight)}`,
      "&::after": {
        position: "absolute",
        top: e.calc(e.titleLineHeight).div(2).equal(),
        insetInlineStart: "100%",
        display: "block",
        width: 9999,
        height: e.lineWidth,
        background: e.processTailColor,
        content: '""'
      }
    },
    [`${n}-subtitle`]: {
      display: "inline",
      marginInlineStart: e.marginXS,
      color: e.colorTextDescription,
      fontWeight: "normal",
      fontSize: e.fontSize
    },
    [`${n}-description`]: {
      color: e.colorTextDescription,
      fontSize: e.fontSize
    }
  }, ee(Kt, e)), ee(Qt, e)), {
    [`${n}-process > ${n}-container > ${n}-title`]: {
      fontWeight: e.fontWeightStrong
    }
  }), ee(Ut, e)), ee(Yt, e)), {
    [`${n}${i}-next-error > ${i}-item-title::after`]: {
      background: e.colorError
    },
    [`${n}-disabled`]: {
      cursor: "not-allowed"
    }
  });
}, Zt = (e) => {
  const {
    componentCls: i,
    motionDurationSlow: t
  } = e;
  return {
    [`& ${i}-item`]: {
      [`&:not(${i}-item-active)`]: {
        [`& > ${i}-item-container[role='button']`]: {
          cursor: "pointer",
          [`${i}-item`]: {
            [`&-title, &-subtitle, &-description, &-icon ${i}-icon`]: {
              transition: `color ${t}`
            }
          },
          "&:hover": {
            [`${i}-item`]: {
              "&-title, &-subtitle, &-description": {
                color: e.colorPrimary
              }
            }
          }
        },
        [`&:not(${i}-item-process)`]: {
          [`& > ${i}-item-container[role='button']:hover`]: {
            [`${i}-item`]: {
              "&-icon": {
                borderColor: e.colorPrimary,
                [`${i}-icon`]: {
                  color: e.colorPrimary
                }
              }
            }
          }
        }
      }
    },
    [`&${i}-horizontal:not(${i}-label-vertical)`]: {
      [`${i}-item`]: {
        paddingInlineStart: e.padding,
        whiteSpace: "nowrap",
        "&:first-child": {
          paddingInlineStart: 0
        },
        [`&:last-child ${i}-item-title`]: {
          paddingInlineEnd: 0
        },
        "&-tail": {
          display: "none"
        },
        "&-description": {
          maxWidth: e.descriptionMaxWidth,
          whiteSpace: "normal"
        }
      }
    }
  };
}, kt = (e) => {
  const {
    componentCls: i
  } = e;
  return {
    [i]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, F(e)), {
      display: "flex",
      width: "100%",
      fontSize: 0,
      textAlign: "initial"
    }), Jt(e)), Zt(e)), Dt(e)), Ft(e)), Gt(e)), Rt(e)), Wt(e)), Xt(e)), Lt(e)), Vt(e)), _t(e)), At(e))
  };
}, en = (e) => ({
  titleLineHeight: e.controlHeight,
  customIconSize: e.controlHeight,
  customIconTop: 0,
  customIconFontSize: e.controlHeightSM,
  iconSize: e.controlHeight,
  iconTop: -0.5,
  // magic for ui experience
  iconFontSize: e.fontSize,
  iconSizeSM: e.fontSizeHeading3,
  dotSize: e.controlHeight / 4,
  dotCurrentSize: e.controlHeightLG / 4,
  navArrowColor: e.colorTextDisabled,
  navContentMaxWidth: "auto",
  descriptionMaxWidth: 140,
  waitIconColor: e.wireframe ? e.colorTextDisabled : e.colorTextLabel,
  waitIconBgColor: e.wireframe ? e.colorBgContainer : e.colorFillContent,
  waitIconBorderColor: e.wireframe ? e.colorTextDisabled : "transparent",
  finishIconBgColor: e.wireframe ? e.colorBgContainer : e.controlItemBgActive,
  finishIconBorderColor: e.wireframe ? e.colorPrimary : e.controlItemBgActive
}), tn = L("Steps", (e) => {
  const {
    colorTextDisabled: i,
    controlHeightLG: t,
    colorTextLightSolid: n,
    colorText: r,
    colorPrimary: l,
    colorTextDescription: d,
    colorTextQuaternary: a,
    colorError: c,
    colorBorderSecondary: m,
    colorSplit: u
  } = e, g = V(e, {
    // Steps component less variable
    processIconColor: n,
    processTitleColor: r,
    processDescriptionColor: r,
    processIconBgColor: l,
    processIconBorderColor: l,
    processDotColor: l,
    processTailColor: u,
    waitTitleColor: d,
    waitDescriptionColor: d,
    waitTailColor: u,
    waitDotColor: i,
    finishIconColor: l,
    finishTitleColor: r,
    finishDescriptionColor: d,
    finishTailColor: l,
    finishDotColor: l,
    errorIconColor: n,
    errorTitleColor: c,
    errorDescriptionColor: c,
    errorTailColor: u,
    errorIconBgColor: c,
    errorIconBorderColor: c,
    errorDotColor: c,
    stepsNavActiveColor: l,
    stepsProgressSize: t,
    // Steps inline variable
    inlineDotSize: 6,
    inlineTitleColor: a,
    inlineTailColor: m
  });
  return [kt(g)];
}, en);
function nn(e) {
  return e.filter((i) => i);
}
function rn(e, i) {
  if (process.env.NODE_ENV === "test" && he("Menu").deprecated(!i, "Step", "items"), e)
    return e;
  const t = Ne(i).map((n) => {
    if (/* @__PURE__ */ o.isValidElement(n)) {
      const {
        props: r
      } = n;
      return Object.assign({}, r);
    }
    return null;
  });
  return nn(t);
}
var on = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const oe = (e) => {
  const {
    percent: i,
    size: t,
    className: n,
    rootClassName: r,
    direction: l,
    items: d,
    responsive: a = !0,
    current: c = 0,
    children: m,
    style: u
  } = e, g = on(e, ["percent", "size", "className", "rootClassName", "direction", "items", "responsive", "current", "children", "style"]), {
    xs: S
  } = Re(a), {
    getPrefixCls: $,
    direction: h,
    steps: f
  } = o.useContext(P), C = o.useMemo(() => a && S ? "vertical" : l, [S, l]), x = ie(t), b = $("steps", e.prefixCls), [O, E, v] = tn(b), y = e.type === "inline", z = $("", e.iconPrefix), N = rn(d, m), p = y ? void 0 : i, I = Object.assign(Object.assign({}, f?.style), u), M = w(f?.className, {
    [`${b}-rtl`]: h === "rtl",
    [`${b}-with-progress`]: p !== void 0
  }, n, r, E, v), R = {
    finish: /* @__PURE__ */ o.createElement(si, {
      className: `${b}-finish-icon`
    }),
    error: /* @__PURE__ */ o.createElement(He, {
      className: `${b}-error-icon`
    })
  }, A = (B) => {
    let {
      node: D,
      status: _
    } = B;
    if (_ === "process" && p !== void 0) {
      const Q = x === "small" ? 32 : 40;
      return /* @__PURE__ */ o.createElement("div", {
        className: `${b}-progress-icon`
      }, /* @__PURE__ */ o.createElement(Pe, {
        type: "circle",
        percent: p,
        size: Q,
        strokeWidth: 4,
        format: () => null
      }), D);
    }
    return D;
  }, W = (B, D) => B.description ? /* @__PURE__ */ o.createElement(di, {
    title: B.description
  }, D) : D;
  return O(/* @__PURE__ */ o.createElement(Ae, Object.assign({
    icons: R
  }, g, {
    style: I,
    current: c,
    size: x,
    items: N,
    itemRender: y ? W : void 0,
    stepIcon: A,
    direction: C,
    prefixCls: b,
    iconPrefix: z,
    className: M
  })));
};
oe.Step = Ae.Step;
process.env.NODE_ENV !== "production" && (oe.displayName = "Steps");
const ln = (e) => {
  const {
    componentCls: i,
    trackHeightSM: t,
    trackPadding: n,
    trackMinWidthSM: r,
    innerMinMarginSM: l,
    innerMaxMarginSM: d,
    handleSizeSM: a,
    calc: c
  } = e, m = `${i}-inner`, u = s(c(a).add(c(n).mul(2)).equal()), g = s(c(d).mul(2).equal());
  return {
    [i]: {
      [`&${i}-small`]: {
        minWidth: r,
        height: t,
        lineHeight: s(t),
        [`${i}-inner`]: {
          paddingInlineStart: d,
          paddingInlineEnd: l,
          [`${m}-checked, ${m}-unchecked`]: {
            minHeight: t
          },
          [`${m}-checked`]: {
            marginInlineStart: `calc(-100% + ${u} - ${g})`,
            marginInlineEnd: `calc(100% - ${u} + ${g})`
          },
          [`${m}-unchecked`]: {
            marginTop: c(t).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${i}-handle`]: {
          width: a,
          height: a
        },
        [`${i}-loading-icon`]: {
          top: c(c(a).sub(e.switchLoadingIconSize)).div(2).equal(),
          fontSize: e.switchLoadingIconSize
        },
        [`&${i}-checked`]: {
          [`${i}-inner`]: {
            paddingInlineStart: l,
            paddingInlineEnd: d,
            [`${m}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${m}-unchecked`]: {
              marginInlineStart: `calc(100% - ${u} + ${g})`,
              marginInlineEnd: `calc(-100% + ${u} - ${g})`
            }
          },
          [`${i}-handle`]: {
            insetInlineStart: `calc(100% - ${s(c(a).add(n).equal())})`
          }
        },
        [`&:not(${i}-disabled):active`]: {
          [`&:not(${i}-checked) ${m}`]: {
            [`${m}-unchecked`]: {
              marginInlineStart: c(e.marginXXS).div(2).equal(),
              marginInlineEnd: c(e.marginXXS).mul(-1).div(2).equal()
            }
          },
          [`&${i}-checked ${m}`]: {
            [`${m}-checked`]: {
              marginInlineStart: c(e.marginXXS).mul(-1).div(2).equal(),
              marginInlineEnd: c(e.marginXXS).div(2).equal()
            }
          }
        }
      }
    }
  };
}, an = (e) => {
  const {
    componentCls: i,
    handleSize: t,
    calc: n
  } = e;
  return {
    [i]: {
      [`${i}-loading-icon${e.iconCls}`]: {
        position: "relative",
        top: n(n(t).sub(e.fontSize)).div(2).equal(),
        color: e.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${i}-checked ${i}-loading-icon`]: {
        color: e.switchColor
      }
    }
  };
}, cn = (e) => {
  const {
    componentCls: i,
    trackPadding: t,
    handleBg: n,
    handleShadow: r,
    handleSize: l,
    calc: d
  } = e, a = `${i}-handle`;
  return {
    [i]: {
      [a]: {
        position: "absolute",
        top: t,
        insetInlineStart: t,
        width: l,
        height: l,
        transition: `all ${e.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: n,
          borderRadius: d(l).div(2).equal(),
          boxShadow: r,
          transition: `all ${e.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${i}-checked ${a}`]: {
        insetInlineStart: `calc(100% - ${s(d(l).add(t).equal())})`
      },
      [`&:not(${i}-disabled):active`]: {
        [`${a}::before`]: {
          insetInlineEnd: e.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${i}-checked ${a}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: e.switchHandleActiveInset
        }
      }
    }
  };
}, sn = (e) => {
  const {
    componentCls: i,
    trackHeight: t,
    trackPadding: n,
    innerMinMargin: r,
    innerMaxMargin: l,
    handleSize: d,
    calc: a
  } = e, c = `${i}-inner`, m = s(a(d).add(a(n).mul(2)).equal()), u = s(a(l).mul(2).equal());
  return {
    [i]: {
      [c]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: l,
        paddingInlineEnd: r,
        transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
        [`${c}-checked, ${c}-unchecked`]: {
          display: "block",
          color: e.colorTextLightSolid,
          fontSize: e.fontSizeSM,
          transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
          pointerEvents: "none",
          minHeight: t
        },
        [`${c}-checked`]: {
          marginInlineStart: `calc(-100% + ${m} - ${u})`,
          marginInlineEnd: `calc(100% - ${m} + ${u})`
        },
        [`${c}-unchecked`]: {
          marginTop: a(t).mul(-1).equal(),
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${i}-checked ${c}`]: {
        paddingInlineStart: r,
        paddingInlineEnd: l,
        [`${c}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${c}-unchecked`]: {
          marginInlineStart: `calc(100% - ${m} + ${u})`,
          marginInlineEnd: `calc(-100% + ${m} - ${u})`
        }
      },
      [`&:not(${i}-disabled):active`]: {
        [`&:not(${i}-checked) ${c}`]: {
          [`${c}-unchecked`]: {
            marginInlineStart: a(n).mul(2).equal(),
            marginInlineEnd: a(n).mul(-1).mul(2).equal()
          }
        },
        [`&${i}-checked ${c}`]: {
          [`${c}-checked`]: {
            marginInlineStart: a(n).mul(-1).mul(2).equal(),
            marginInlineEnd: a(n).mul(2).equal()
          }
        }
      }
    }
  };
}, dn = (e) => {
  const {
    componentCls: i,
    trackHeight: t,
    trackMinWidth: n
  } = e;
  return {
    [i]: Object.assign(Object.assign(Object.assign(Object.assign({}, F(e)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: n,
      height: t,
      lineHeight: `${s(t)}`,
      verticalAlign: "middle",
      background: e.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${i}-disabled)`]: {
        background: e.colorTextTertiary
      }
    }), qe(e)), {
      [`&${i}-checked`]: {
        background: e.switchColor,
        [`&:hover:not(${i}-disabled)`]: {
          background: e.colorPrimaryHover
        }
      },
      [`&${i}-loading, &${i}-disabled`]: {
        cursor: "not-allowed",
        opacity: e.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${i}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, mn = (e) => {
  const {
    fontSize: i,
    lineHeight: t,
    controlHeight: n,
    colorWhite: r
  } = e, l = i * t, d = n / 2, a = 2, c = l - a * 2, m = d - a * 2;
  return {
    trackHeight: l,
    trackHeightSM: d,
    trackMinWidth: c * 2 + a * 4,
    trackMinWidthSM: m * 2 + a * 2,
    trackPadding: a,
    // Fixed value
    handleBg: r,
    handleSize: c,
    handleSizeSM: m,
    handleShadow: `0 2px 4px 0 ${new Ii("#00230b").setAlpha(0.2).toRgbString()}`,
    innerMinMargin: c / 2,
    innerMaxMargin: c + a + a * 2,
    innerMinMarginSM: m / 2,
    innerMaxMarginSM: m + a + a * 2
  };
}, gn = L("Switch", (e) => {
  const i = V(e, {
    switchDuration: e.motionDurationMid,
    switchColor: e.colorPrimary,
    switchDisabledOpacity: e.opacityLoading,
    switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
    switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    dn(i),
    // inner style
    sn(i),
    // handle style
    cn(i),
    // loading style
    an(i),
    // small style
    ln(i)
  ];
}, mn);
var un = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const pn = /* @__PURE__ */ o.forwardRef((e, i) => {
  const {
    prefixCls: t,
    size: n,
    disabled: r,
    loading: l,
    className: d,
    rootClassName: a,
    style: c,
    checked: m,
    value: u,
    defaultChecked: g,
    defaultValue: S,
    onChange: $
  } = e, h = un(e, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]), [f, C] = mi(!1, {
    value: m ?? u,
    defaultValue: g ?? S
  }), {
    getPrefixCls: x,
    direction: b,
    switch: O
  } = o.useContext(P), E = o.useContext(xi), v = (r ?? E) || l, y = x("switch", t), z = /* @__PURE__ */ o.createElement("div", {
    className: `${y}-handle`
  }, l && /* @__PURE__ */ o.createElement(Te, {
    className: `${y}-loading-icon`
  })), [N, p, I] = gn(y), M = ie(n), R = w(O?.className, {
    [`${y}-small`]: M === "small",
    [`${y}-loading`]: l,
    [`${y}-rtl`]: b === "rtl"
  }, d, a, p, I), A = Object.assign(Object.assign({}, O?.style), c), W = function() {
    C(arguments.length <= 0 ? void 0 : arguments[0]), $?.apply(void 0, arguments);
  };
  return N(/* @__PURE__ */ o.createElement(gi, {
    component: "Switch"
  }, /* @__PURE__ */ o.createElement(Pi, Object.assign({}, h, {
    checked: f,
    onChange: W,
    prefixCls: y,
    className: R,
    style: A,
    disabled: v,
    ref: i,
    loadingIcon: z
  }))));
}), fe = pn;
fe.__ANT_SWITCH = !0;
process.env.NODE_ENV !== "production" && (fe.displayName = "Switch");
const $n = (e) => {
  const {
    componentCls: i,
    calc: t
  } = e;
  return {
    [i]: Object.assign(Object.assign({}, F(e)), {
      margin: 0,
      padding: 0,
      listStyle: "none",
      [`${i}-item`]: {
        position: "relative",
        margin: 0,
        paddingBottom: e.itemPaddingBottom,
        fontSize: e.fontSize,
        listStyle: "none",
        "&-tail": {
          position: "absolute",
          insetBlockStart: e.itemHeadSize,
          insetInlineStart: t(t(e.itemHeadSize).sub(e.tailWidth)).div(2).equal(),
          height: `calc(100% - ${s(e.itemHeadSize)})`,
          borderInlineStart: `${s(e.tailWidth)} ${e.lineType} ${e.tailColor}`
        },
        "&-pending": {
          [`${i}-item-head`]: {
            fontSize: e.fontSizeSM,
            backgroundColor: "transparent"
          },
          [`${i}-item-tail`]: {
            display: "none"
          }
        },
        "&-head": {
          position: "absolute",
          width: e.itemHeadSize,
          height: e.itemHeadSize,
          backgroundColor: e.dotBg,
          border: `${s(e.dotBorderWidth)} ${e.lineType} transparent`,
          borderRadius: "50%",
          "&-blue": {
            color: e.colorPrimary,
            borderColor: e.colorPrimary
          },
          "&-red": {
            color: e.colorError,
            borderColor: e.colorError
          },
          "&-green": {
            color: e.colorSuccess,
            borderColor: e.colorSuccess
          },
          "&-gray": {
            color: e.colorTextDisabled,
            borderColor: e.colorTextDisabled
          }
        },
        "&-head-custom": {
          position: "absolute",
          insetBlockStart: t(e.itemHeadSize).div(2).equal(),
          insetInlineStart: t(e.itemHeadSize).div(2).equal(),
          width: "auto",
          height: "auto",
          marginBlockStart: 0,
          paddingBlock: e.customHeadPaddingVertical,
          lineHeight: 1,
          textAlign: "center",
          border: 0,
          borderRadius: 0,
          transform: "translate(-50%, -50%)"
        },
        "&-content": {
          position: "relative",
          insetBlockStart: t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.lineWidth).equal(),
          marginInlineStart: t(e.margin).add(e.itemHeadSize).equal(),
          marginInlineEnd: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
          wordBreak: "break-word"
        },
        "&-last": {
          [`> ${i}-item-tail`]: {
            display: "none"
          },
          [`> ${i}-item-content`]: {
            minHeight: t(e.controlHeightLG).mul(1.2).equal()
          }
        }
      },
      [`&${i}-alternate,
        &${i}-right,
        &${i}-label`]: {
        [`${i}-item`]: {
          "&-tail, &-head, &-head-custom": {
            insetInlineStart: "50%"
          },
          "&-head": {
            marginInlineStart: t(e.marginXXS).mul(-1).equal(),
            "&-custom": {
              marginInlineStart: t(e.tailWidth).div(2).equal()
            }
          },
          "&-left": {
            [`${i}-item-content`]: {
              insetInlineStart: `calc(50% - ${s(e.marginXXS)})`,
              width: `calc(50% - ${s(e.marginSM)})`,
              textAlign: "start"
            }
          },
          "&-right": {
            [`${i}-item-content`]: {
              width: `calc(50% - ${s(e.marginSM)})`,
              margin: 0,
              textAlign: "end"
            }
          }
        }
      },
      [`&${i}-right`]: {
        [`${i}-item-right`]: {
          [`${i}-item-tail,
            ${i}-item-head,
            ${i}-item-head-custom`]: {
            insetInlineStart: `calc(100% - ${s(t(t(e.itemHeadSize).add(e.tailWidth)).div(2).equal())})`
          },
          [`${i}-item-content`]: {
            width: `calc(100% - ${s(t(e.itemHeadSize).add(e.marginXS).equal())})`
          }
        }
      },
      [`&${i}-pending
        ${i}-item-last
        ${i}-item-tail`]: {
        display: "block",
        height: `calc(100% - ${s(e.margin)})`,
        borderInlineStart: `${s(e.tailWidth)} dotted ${e.tailColor}`
      },
      [`&${i}-reverse
        ${i}-item-last
        ${i}-item-tail`]: {
        display: "none"
      },
      [`&${i}-reverse ${i}-item-pending`]: {
        [`${i}-item-tail`]: {
          insetBlockStart: e.margin,
          display: "block",
          height: `calc(100% - ${s(e.margin)})`,
          borderInlineStart: `${s(e.tailWidth)} dotted ${e.tailColor}`
        },
        [`${i}-item-content`]: {
          minHeight: t(e.controlHeightLG).mul(1.2).equal()
        }
      },
      [`&${i}-label`]: {
        [`${i}-item-label`]: {
          position: "absolute",
          insetBlockStart: t(t(e.fontSize).mul(e.lineHeight).sub(e.fontSize)).mul(-1).add(e.tailWidth).equal(),
          width: `calc(50% - ${s(e.marginSM)})`,
          textAlign: "end"
        },
        [`${i}-item-right`]: {
          [`${i}-item-label`]: {
            insetInlineStart: `calc(50% + ${s(e.marginSM)})`,
            width: `calc(50% - ${s(e.marginSM)})`,
            textAlign: "start"
          }
        }
      },
      // ====================== RTL =======================
      "&-rtl": {
        direction: "rtl",
        [`${i}-item-head-custom`]: {
          transform: "translate(50%, -50%)"
        }
      }
    })
  };
}, hn = (e) => ({
  tailColor: e.colorSplit,
  tailWidth: e.lineWidthBold,
  dotBorderWidth: e.wireframe ? e.lineWidthBold : e.lineWidth * 3,
  dotBg: e.colorBgContainer,
  itemPaddingBottom: e.padding * 1.25
}), bn = L("Timeline", (e) => {
  const i = V(e, {
    itemHeadSize: 10,
    customHeadPaddingVertical: e.paddingXXS,
    paddingInlineEnd: 2
  });
  return [$n(i)];
}, hn);
var Sn = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const Ye = (e) => {
  var {
    prefixCls: i,
    className: t,
    color: n = "blue",
    dot: r,
    pending: l = !1,
    position: d,
    label: a,
    children: c
  } = e, m = Sn(e, ["prefixCls", "className", "color", "dot", "pending", "position", "label", "children"]);
  const {
    getPrefixCls: u
  } = o.useContext(P), g = u("timeline", i), S = w(`${g}-item`, {
    [`${g}-item-pending`]: l
  }, t), $ = /blue|red|green|gray/.test(n || "") ? void 0 : n, h = w(`${g}-item-head`, {
    [`${g}-item-head-custom`]: !!r,
    [`${g}-item-head-${n}`]: !$
  });
  return /* @__PURE__ */ o.createElement("li", Object.assign({}, m, {
    className: S
  }), a && /* @__PURE__ */ o.createElement("div", {
    className: `${g}-item-label`
  }, a), /* @__PURE__ */ o.createElement("div", {
    className: `${g}-item-tail`
  }), /* @__PURE__ */ o.createElement("div", {
    className: h,
    style: {
      borderColor: $,
      color: $
    }
  }, r), /* @__PURE__ */ o.createElement("div", {
    className: `${g}-item-content`
  }, c));
};
var Me = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const fn = (e) => {
  var {
    prefixCls: i,
    className: t,
    pending: n = !1,
    children: r,
    items: l,
    rootClassName: d,
    reverse: a = !1,
    direction: c,
    hashId: m,
    pendingDot: u,
    mode: g = ""
  } = e, S = Me(e, ["prefixCls", "className", "pending", "children", "items", "rootClassName", "reverse", "direction", "hashId", "pendingDot", "mode"]);
  const $ = (v, y) => g === "alternate" ? v === "right" ? `${i}-item-right` : v === "left" ? `${i}-item-left` : y % 2 === 0 ? `${i}-item-left` : `${i}-item-right` : g === "left" ? `${i}-item-left` : g === "right" ? `${i}-item-right` : v === "right" ? `${i}-item-right` : "", h = Be(l || []), f = typeof n == "boolean" ? null : n;
  n && h.push({
    pending: !!n,
    dot: u || /* @__PURE__ */ o.createElement(Te, null),
    children: f
  }), a && h.reverse();
  const C = h.length, x = `${i}-item-last`, b = h.filter((v) => !!v).map((v, y) => {
    var z;
    const N = y === C - 2 ? x : "", p = y === C - 1 ? x : "", {
      className: I
    } = v, M = Me(v, ["className"]);
    return /* @__PURE__ */ o.createElement(Ye, Object.assign({}, M, {
      className: w([I, !a && n ? N : p, $((z = v?.position) !== null && z !== void 0 ? z : "", y)]),
      /* eslint-disable-next-line react/no-array-index-key */
      key: v?.key || y
    }));
  }), O = h.some((v) => !!v?.label), E = w(i, {
    [`${i}-pending`]: !!n,
    [`${i}-reverse`]: !!a,
    [`${i}-${g}`]: !!g && !O,
    [`${i}-label`]: O,
    [`${i}-rtl`]: c === "rtl"
  }, t, d, m);
  return /* @__PURE__ */ o.createElement("ul", Object.assign({}, S, {
    className: E
  }), b);
};
function vn(e, i) {
  return e && Array.isArray(e) ? e : Ne(i).map((t) => {
    var n, r;
    return Object.assign({
      children: (r = (n = t?.props) === null || n === void 0 ? void 0 : n.children) !== null && r !== void 0 ? r : ""
    }, t.props);
  });
}
var Cn = function(e, i) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && i.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
    i.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
};
const ve = (e) => {
  const {
    getPrefixCls: i,
    direction: t,
    timeline: n
  } = o.useContext(P), {
    prefixCls: r,
    children: l,
    items: d,
    className: a,
    style: c
  } = e, m = Cn(e, ["prefixCls", "children", "items", "className", "style"]), u = i("timeline", r);
  process.env.NODE_ENV !== "production" && he("Timeline").deprecated(!l, "Timeline.Item", "items");
  const g = ui(u), [S, $, h] = bn(u, g), f = vn(d, l);
  return S(/* @__PURE__ */ o.createElement(fn, Object.assign({}, m, {
    className: w(n?.className, a, h, g),
    style: Object.assign(Object.assign({}, n?.style), c),
    prefixCls: u,
    direction: t,
    items: f,
    hashId: $
  })));
};
ve.Item = Ye;
process.env.NODE_ENV !== "production" && (ve.displayName = "Timeline");
const Pn = (e) => /* @__PURE__ */ j(_e, { ...e }), Je = ({ ...e }) => /* @__PURE__ */ j(G, { children: /* @__PURE__ */ j($e, { ...e }) });
Je.Item = $e.Item;
Je.ItemGroup = $e.ItemGroup;
const yn = {
  components: {
    Pagination: {}
  }
}, Tn = ({ className: e, ...i }) => /* @__PURE__ */ j(G, { theme: yn, children: /* @__PURE__ */ j(Qe, { ...i, className: be("bg-light-7", e) }) }), Bn = ({ className: e, ...i }) => /* @__PURE__ */ j(
  Pe,
  {
    strokeColor: U.secondary,
    ...i,
    className: be("bg-light-7", e)
  }
), qn = ({ style: e, ...i }) => /* @__PURE__ */ j(G, { children: /* @__PURE__ */ j(
  Ue,
  {
    ...i,
    style: {
      padding: 2,
      ...e
    }
  }
) }), Z = (e) => /* @__PURE__ */ j(T, { ...e });
Z.Avatar = T.Avatar;
Z.Button = T.Button;
Z.Image = T.Image;
Z.Input = T.Input;
Z.Node = T.Node;
const In = {
  components: {}
}, xn = (e) => /* @__PURE__ */ j(G, { theme: In, children: /* @__PURE__ */ j(oe, { ...e }) });
xn.Step = oe.Step;
const wn = {
  components: {
    Switch: {
      handleBg: U.light_1,
      colorPrimaryHover: U.primary,
      colorTextTertiary: U.light_1,
      trackMinWidthSM: 26
    }
  }
}, Dn = ii(({ className: e, ...i }, t) => /* @__PURE__ */ j(G, { theme: wn, children: /* @__PURE__ */ j(fe, { ref: t, ...i, className: be("bg-light-7", e) }) })), On = {
  components: {
    Timeline: {
      tailColor: U.light_7,
      tailWidth: 4
    }
  }
}, Rn = ({ ...e }) => /* @__PURE__ */ j(G, { theme: On, children: /* @__PURE__ */ j(ve, { ...e }) });
export {
  Pn as Alert,
  Gn as Avatar,
  Ln as Breadcrumb,
  Kn as Dropdown,
  _n as Flex,
  Qn as Image,
  Un as InfiniteLoader,
  Xn as Loading,
  Je as Menu,
  Tn as Pagination,
  Bn as Progress,
  qn as SegmentedSwitch,
  Z as Skeleton,
  xn as Steps,
  Dn as Switch,
  Vn as Text,
  Rn as Timeline
};
