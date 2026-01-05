import * as p from "react";
import pn, { isValidElement as Jo, version as ei, useContext as Bt, createContext as mn, useRef as Pe, useLayoutEffect as ti, useEffect as It } from "react";
import Ln from "react-dom";
const _l = {
  white_ff: "#ffffff",
  white_ff_10: "#ffffff10",
  white_ff_15: "#ffffff15",
  white_ff_20: "#ffffff20",
  white_ff_35: "#ffffff35",
  light_1: "#f8f9fb",
  light_2: "#f1f3f8",
  light_3: "#f9fbff",
  light_4: "#f7fafe",
  light_5: "#ebf3ff",
  light_6: "#eaeff5",
  light_7: "#d9e1ea",
  primary: "#435879",
  primary_dark_1: "#2b4063",
  primary_dark_2: "#192540",
  primary_light_1: "#516b93",
  primary_light_2: "#91a8c3",
  primary_light_3: "#b8c7d8",
  secondary: "#1e51c1",
  secondary_dark_1: "#163b8e",
  secondary_light_1: "#2159d4",
  secondary_light_2: "#386de0",
  tertiary: "#1ba9c7",
  tertiary_dark_1: "#489fb5",
  negative: "#c9252d",
  negative_dark_1: "#bb121a",
  negative_light_1: "#d7373f",
  negative_light_2: "#e34850",
  negative_light_3: "#f6d8da",
  negative_light_4: "#f9e3e4",
  negative_light_5: "#fdf3f3",
  positive: "#268e6c",
  positive_dark_1: "#12805c",
  positive_dark_2: "#107154",
  positive_light_2: "#2d9d78",
  positive_light_3: "#eefaf6",
  sales_action: "#ec6c2c",
  black: "#000000",
  transparent: "transparent",
  sales: {
    action: "#ec6c2c",
    action_dark_1: "#bc5624",
    action_light_1: "#ff8136",
    action_light_2: "#ff973e",
    action_light_3: "#ffac48"
  },
  call: {
    action: "#8345c9",
    action_dark_1: "#6837a0",
    action_light_1: "#9d52f1",
    action_light_2: "#b760ff",
    action_light_3: "#d16eff"
  },
  marketing: {
    action: "#2962ff",
    action_dark_1: "#1043ce",
    action_light_1: "#3175ff",
    action_light_2: "#3d8cff",
    action_light_3: "#4ea3ff"
  },
  club: {
    action: "#d21369",
    action_dark_1: "#a80f54",
    action_light_1: "#fc167e",
    action_light_2: "#ff1a93",
    action_light_3: "#ff27ab"
  },
  team: {
    action: "#B5179E",
    action_dark_1: "#9E218C",
    action_light_1: "#D834C0",
    action_light_2: "#F841DD",
    action_light_3: "#FF56E6"
  },
  desk: {
    action: "#50C877",
    action_dark_1: "#3B965B",
    action_light_1: "#60D38F",
    action_light_2: "#6BDBA2",
    action_light_3: "#80E9BF"
  },
  form: {
    action: "#00BFA5",
    action_dark_1: "#00927E",
    action_light_1: "#00CCB7",
    action_light_2: "#03D5C4",
    action_light_3: "#05E4DB"
  },
  task: {
    action: "#5066D4",
    action_dark_1: "#3C4C9F",
    action_light_1: "#617ADD",
    action_light_2: "#6D8AE3",
    action_light_3: "#81A2EE"
  },
  rayan: {
    action: "#5066D4",
    action_dark_1: "#3C4C9F",
    action_light_1: "#617ADD",
    action_light_2: "#6D8AE3",
    action_light_3: "#81A2EE"
  }
};
var Cl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function kl(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var a = !1;
      try {
        a = this instanceof n;
      } catch {
      }
      return a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zt.apply(null, arguments);
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
var ni = /* @__PURE__ */ Symbol.for("react.element"), ai = /* @__PURE__ */ Symbol.for("react.transitional.element"), oi = /* @__PURE__ */ Symbol.for("react.fragment");
function ii(e) {
  return (
    // Base object type
    e && z(e) === "object" && // React Element type
    (e.$$typeof === ni || e.$$typeof === ai) && // React Fragment type
    e.type === oi
  );
}
var xr = {}, bn = [], si = function(t) {
  bn.push(t);
};
function yn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = bn.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function ci(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = bn.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function ba() {
  xr = {};
}
function ya(e, t, r) {
  !t && !xr[r] && (e(!1, r), xr[r] = !0);
}
function Ze(e, t) {
  ya(yn, e, t);
}
function li(e, t) {
  ya(ci, e, t);
}
Ze.preMessage = si;
Ze.resetWarned = ba;
Ze.noteOnce = li;
function ui(e, t) {
  if (z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (z(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sa(e) {
  var t = ui(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function T(e, t, r) {
  return (t = Sa(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function In(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? In(Object(r), !0).forEach(function(n) {
      T(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : In(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hn(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function fi(e) {
  return e && z(e) === "object" && Hn(e.nativeElement) ? e.nativeElement : Hn(e) ? e : null;
}
function di(e) {
  var t = fi(e);
  if (t)
    return t;
  if (e instanceof pn.Component) {
    var r;
    return (r = Ln.findDOMNode) === null || r === void 0 ? void 0 : r.call(Ln, e);
  }
  return null;
}
var _t = { exports: {} }, O = {};
var Dn;
function hi() {
  if (Dn) return O;
  Dn = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), i = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.offscreen"), m;
  m = /* @__PURE__ */ Symbol.for("react.module.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var x = h.$$typeof;
      switch (x) {
        case e:
          switch (h = h.type, h) {
            case r:
            case a:
            case n:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case i:
                case l:
                case d:
                case f:
                case o:
                  return h;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return O.ContextConsumer = i, O.ContextProvider = o, O.Element = e, O.ForwardRef = l, O.Fragment = r, O.Lazy = d, O.Memo = f, O.Portal = t, O.Profiler = a, O.StrictMode = n, O.Suspense = c, O.SuspenseList = u, O.isAsyncMode = function() {
    return !1;
  }, O.isConcurrentMode = function() {
    return !1;
  }, O.isContextConsumer = function(h) {
    return g(h) === i;
  }, O.isContextProvider = function(h) {
    return g(h) === o;
  }, O.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, O.isForwardRef = function(h) {
    return g(h) === l;
  }, O.isFragment = function(h) {
    return g(h) === r;
  }, O.isLazy = function(h) {
    return g(h) === d;
  }, O.isMemo = function(h) {
    return g(h) === f;
  }, O.isPortal = function(h) {
    return g(h) === t;
  }, O.isProfiler = function(h) {
    return g(h) === a;
  }, O.isStrictMode = function(h) {
    return g(h) === n;
  }, O.isSuspense = function(h) {
    return g(h) === c;
  }, O.isSuspenseList = function(h) {
    return g(h) === u;
  }, O.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === a || h === n || h === c || h === u || h === v || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === o || h.$$typeof === i || h.$$typeof === l || h.$$typeof === m || h.getModuleId !== void 0);
  }, O.typeOf = g, O;
}
var R = {};
var $n;
function vi() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), i = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.offscreen"), m = !1, g = !1, h = !1, x = !1, b = !1, C;
    C = /* @__PURE__ */ Symbol.for("react.module.reference");
    function k(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === a || b || _ === n || _ === c || _ === u || x || _ === v || m || g || h || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === f || _.$$typeof === o || _.$$typeof === i || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === C || _.getModuleId !== void 0));
    }
    function y(_) {
      if (typeof _ == "object" && _ !== null) {
        var Me = _.$$typeof;
        switch (Me) {
          case e:
            var re = _.type;
            switch (re) {
              case r:
              case a:
              case n:
              case c:
              case u:
                return re;
              default:
                var De = re && re.$$typeof;
                switch (De) {
                  case s:
                  case i:
                  case l:
                  case d:
                  case f:
                  case o:
                    return De;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var E = i, S = o, w = e, $ = l, L = r, V = d, te = f, P = t, j = a, H = n, D = c, K = u, N = !1, U = !1;
    function W(_) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(_) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(_) {
      return y(_) === i;
    }
    function I(_) {
      return y(_) === o;
    }
    function he(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function je(_) {
      return y(_) === l;
    }
    function Le(_) {
      return y(_) === r;
    }
    function Ie(_) {
      return y(_) === d;
    }
    function tt(_) {
      return y(_) === f;
    }
    function rt(_) {
      return y(_) === t;
    }
    function nt(_) {
      return y(_) === a;
    }
    function He(_) {
      return y(_) === n;
    }
    function be(_) {
      return y(_) === c;
    }
    function at(_) {
      return y(_) === u;
    }
    R.ContextConsumer = E, R.ContextProvider = S, R.Element = w, R.ForwardRef = $, R.Fragment = L, R.Lazy = V, R.Memo = te, R.Portal = P, R.Profiler = j, R.StrictMode = H, R.Suspense = D, R.SuspenseList = K, R.isAsyncMode = W, R.isConcurrentMode = F, R.isContextConsumer = B, R.isContextProvider = I, R.isElement = he, R.isForwardRef = je, R.isFragment = Le, R.isLazy = Ie, R.isMemo = tt, R.isPortal = rt, R.isProfiler = nt, R.isStrictMode = He, R.isSuspense = be, R.isSuspenseList = at, R.isValidElementType = k, R.typeOf = y;
  })()), R;
}
var Nn;
function gi() {
  return Nn || (Nn = 1, process.env.NODE_ENV === "production" ? _t.exports = hi() : _t.exports = vi()), _t.exports;
}
var or = gi();
function Yt(e, t, r) {
  var n = p.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var pi = Number(ei.split(".")[0]), xa = function(t, r) {
  typeof t == "function" ? t(r) : z(t) === "object" && t && "current" in t && (t.current = r);
}, mi = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    r.forEach(function(i) {
      xa(i, o);
    });
  };
}, wl = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return Yt(function() {
    return mi.apply(void 0, r);
  }, r, function(a, o) {
    return a.length !== o.length || a.every(function(i, s) {
      return i !== o[s];
    });
  });
}, Ea = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (Sn(t) && pi >= 19)
    return !0;
  var a = or.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((r = a.prototype) !== null && r !== void 0 && r.render) && a.$$typeof !== or.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== or.ForwardRef);
};
function Sn(e) {
  return /* @__PURE__ */ Jo(e) && !ii(e);
}
var Tl = function(t) {
  return Sn(t) && Ea(t);
}, bi = function(t) {
  if (t && Sn(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function pt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sa(n.key), n);
  }
}
function mt(e, t, r) {
  return t && Fn(e.prototype, t), r && Fn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Er(e, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Er(e, t);
}
function _a(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Er(e, t);
}
function Vt(e) {
  return Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Vt(e);
}
function Ca() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ca = function() {
    return !!e;
  })();
}
function _r(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yi(e, t) {
  if (t && (z(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _r(e);
}
function ka(e) {
  var t = Ca();
  return function() {
    var r, n = Vt(e);
    if (t) {
      var a = Vt(this).constructor;
      r = Reflect.construct(n, arguments, a);
    } else r = n.apply(this, arguments);
    return yi(this, r);
  };
}
function Cr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Si(e) {
  if (Array.isArray(e)) return Cr(e);
}
function wa(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xn(e, t) {
  if (e) {
    if (typeof e == "string") return Cr(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Cr(e, t) : void 0;
  }
}
function xi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(e) {
  return Si(e) || wa(e) || xn(e) || xi();
}
var Ta = function(t) {
  return +setTimeout(t, 16);
}, Ma = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ta = function(t) {
  return window.requestAnimationFrame(t);
}, Ma = function(t) {
  return window.cancelAnimationFrame(t);
});
var Bn = 0, qt = /* @__PURE__ */ new Map();
function Aa(e) {
  qt.delete(e);
}
var Wt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Bn += 1;
  var n = Bn;
  function a(o) {
    if (o === 0)
      Aa(n), t();
    else {
      var i = Ta(function() {
        a(o - 1);
      });
      qt.set(n, i);
    }
  }
  return a(r), n;
};
Wt.cancel = function(e) {
  var t = qt.get(e);
  return Aa(e), Ma(t);
};
process.env.NODE_ENV !== "production" && (Wt.ids = function() {
  return qt;
});
function Pa(e) {
  if (Array.isArray(e)) return e;
}
function Ei(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Oa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A(e, t) {
  return Pa(e) || Ei(e, t) || xn(e, t) || Oa();
}
function ft(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function me() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _i(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var zn = "data-rc-order", Vn = "data-rc-priority", Ci = "rc-util-key", kr = /* @__PURE__ */ new Map();
function Ra() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ci;
}
function Kt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function ki(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function En(e) {
  return Array.from((kr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ja(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!me())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = ki(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(zn, i), s && o && l.setAttribute(Vn, "".concat(o)), r != null && r.nonce && (l.nonce = r?.nonce), l.innerHTML = e;
  var c = Kt(t), u = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || En(c)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(zn)))
          return !1;
        var v = Number(d.getAttribute(Vn) || 0);
        return o >= v;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function La(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Kt(t);
  return (t.styles || En(r)).find(function(n) {
    return n.getAttribute(Ra(t)) === e;
  });
}
function _n(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = La(e, t);
  if (r) {
    var n = Kt(t);
    n.removeChild(r);
  }
}
function wi(e, t) {
  var r = kr.get(e);
  if (!r || !_i(document, r)) {
    var n = ja("", t), a = n.parentNode;
    kr.set(e, a), e.removeChild(n);
  }
}
function Oe(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Kt(r), a = En(n), o = M(M({}, r), {}, {
    styles: a
  });
  wi(n, o);
  var i = La(t, o);
  if (i) {
    var s, l;
    if ((s = o.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = ja(e, o);
  return u.setAttribute(Ra(o), t), u;
}
function Ti(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Gt(e, t) {
  if (e == null) return {};
  var r, n, a = Ti(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
function wr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(o, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(o);
    if (Ze(!l, "Warning: There may be circular references"), l)
      return !1;
    if (o === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(o);
    var c = s + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!a(o[u], i[u], c))
          return !1;
      return !0;
    }
    if (o && i && z(o) === "object" && z(i) === "object") {
      var f = Object.keys(o);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(d) {
        return a(o[d], i[d], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var Mi = "%";
function Tr(e) {
  return e.join(Mi);
}
var Ai = /* @__PURE__ */ (function() {
  function e(t) {
    pt(this, e), T(this, "instanceId", void 0), T(this, "cache", /* @__PURE__ */ new Map()), T(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return mt(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Tr(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(Tr(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), o = n(a);
      o === null ? this.cache.delete(r) : this.cache.set(r, o);
    }
  }]), e;
})(), Pi = ["children"], Ue = "data-token-hash", fe = "data-css-hash", Oi = "data-cache-path", ke = "__cssinjs_instance__";
function Ia() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(fe, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[ke] = a[ke] || e, a[ke] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(fe, "]"))).forEach(function(a) {
      var o = a.getAttribute(fe);
      if (n[o]) {
        if (a[ke] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        n[o] = !0;
    });
  }
  return new Ai(e);
}
var Ye = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Ia(),
  defaultCache: !0
}), Ml = function(t) {
  var r = t.children, n = Gt(t, Pi), a = p.useContext(Ye), o = Yt(function() {
    var i = M({}, a);
    Object.keys(n).forEach(function(l) {
      var c = n[l];
      n[l] !== void 0 && (i[l] = c);
    });
    var s = n.cache;
    return i.cache = i.cache || Ia(), i.defaultCache = !s && a.defaultCache, i;
  }, [a, n], function(i, s) {
    return !wr(i[0], s[0], !0) || !wr(i[1], s[1], !0);
  });
  return /* @__PURE__ */ p.createElement(Ye.Provider, {
    value: o
  }, r);
};
function Ri(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Cn = /* @__PURE__ */ (function() {
  function e() {
    pt(this, e), T(this, "cache", void 0), T(this, "keys", void 0), T(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return mt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var a = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(c, u) {
            var f = A(c, 2), d = f[1];
            return a.internalGet(u)[1] < d ? [u, a.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = A(o, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(c, u) {
        if (u === r.length - 1)
          l.set(c, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var a = r.get(n[0]);
      if (n.length === 1) {
        var o;
        return a.map ? r.set(n[0], {
          map: a.map
        }) : r.delete(n[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Ri(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
})();
T(Cn, "MAX_CACHE_SIZE", 20);
T(Cn, "MAX_CACHE_OFFSET", 5);
var Wn = 0, Ha = /* @__PURE__ */ (function() {
  function e(t) {
    pt(this, e), T(this, "derivatives", void 0), T(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Wn, t.length === 0 && yn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Wn += 1;
  }
  return mt(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
})(), ir = new Cn();
function Mr(e) {
  var t = Array.isArray(e) ? e : [e];
  return ir.has(t) || ir.set(t, new Ha(t)), ir.get(t);
}
var ji = /* @__PURE__ */ new WeakMap(), sr = {};
function Li(e, t) {
  for (var r = ji, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(sr) || r.set(sr, e()), r.get(sr);
}
var Gn = /* @__PURE__ */ new WeakMap();
function lt(e) {
  var t = Gn.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Ha ? t += n.id : n && z(n) === "object" ? t += lt(n) : t += n;
  }), t = ft(t), Gn.set(e, t)), t;
}
function Xn(e, t) {
  return ft("".concat(t, "_").concat(lt(e)));
}
var qe = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Da = "_bAmBoO_";
function $a(e, t, r) {
  if (me()) {
    var n, a;
    Oe(e, qe);
    var o = document.createElement("div");
    o.style.position = "fixed", o.style.left = "0", o.style.top = "0", t?.(o), document.body.appendChild(o), process.env.NODE_ENV !== "production" && (o.innerHTML = "Test", o.style.zIndex = "9999999");
    var i = r ? r(o) : (n = getComputedStyle(o).content) === null || n === void 0 ? void 0 : n.includes(Da);
    return (a = o.parentNode) === null || a === void 0 || a.removeChild(o), _n(qe), i;
  }
  return !1;
}
var cr = void 0;
function Al() {
  return cr === void 0 && (cr = $a(":where(.".concat(qe, ') { content: "').concat(Da, '"!important; }'), function(e) {
    e.className = qe;
  })), cr;
}
var lr = void 0;
function Pl() {
  return lr === void 0 && (lr = $a(".".concat(qe, " { inset-block: 93px !important; }"), function(e) {
    e.className = qe;
  }, function(e) {
    return getComputedStyle(e).bottom === "93px";
  })), lr;
}
var Ar = me();
function Ii(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function dt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = M(M({}, n), {}, T(T({}, Ue, t), fe, r)), i = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Hi = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Di = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = A(a, 2), i = o[0], s = o[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Na = function(t, r, n) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, c = A(i, 2), u = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      o[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[u])) {
      var d, v = Hi(u, n?.prefix);
      a[v] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), o[u] = "var(".concat(v, ")");
    }
  }), [o, Di(a, r, {
    scope: n?.scope
  })];
}, Un = process.env.NODE_ENV !== "test" && me() ? p.useLayoutEffect : p.useEffect, Fa = function(t, r) {
  var n = p.useRef(!0);
  Un(function() {
    return t(n.current);
  }, r), Un(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ol = function(t, r) {
  Fa(function(n) {
    if (!n)
      return t();
  }, r);
}, $i = M({}, p), Yn = $i.useInsertionEffect, Ni = function(t, r, n) {
  p.useMemo(t, n), Fa(function() {
    return r(!0);
  }, n);
}, Fi = Yn ? function(e, t, r) {
  return Yn(function() {
    return e(), t();
  }, r);
} : Ni, Bi = M({}, p), zi = Bi.useInsertionEffect, Vi = function(t) {
  var r = [], n = !1;
  function a(o) {
    if (n) {
      process.env.NODE_ENV !== "production" && yn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(o);
  }
  return p.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, Wi = function() {
  return function(t) {
    t();
  };
}, Gi = typeof zi < "u" ? Vi : Wi;
function Xi() {
  return !1;
}
var Pr = !1;
function Ui() {
  return Pr;
}
const Yi = process.env.NODE_ENV === "production" ? Xi : Ui;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Ct && typeof Ct.webpackHotUpdate == "function") {
    var qi = Ct.webpackHotUpdate;
    Ct.webpackHotUpdate = function() {
      return Pr = !0, setTimeout(function() {
        Pr = !1;
      }, 0), qi.apply(void 0, arguments);
    };
  }
}
function kn(e, t, r, n, a) {
  var o = p.useContext(Ye), i = o.cache, s = [e].concat(_e(t)), l = Tr(s), c = Gi([l]), u = Yi(), f = function(g) {
    i.opUpdate(l, function(h) {
      var x = h || [void 0, void 0], b = A(x, 2), C = b[0], k = C === void 0 ? 0 : C, y = b[1], E = y;
      process.env.NODE_ENV !== "production" && y && u && (n?.(E, u), E = null);
      var S = E || r(), w = [k, S];
      return g ? g(w) : w;
    });
  };
  p.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = i.opGet(l);
  process.env.NODE_ENV !== "production" && !d && (f(), d = i.opGet(l));
  var v = d[1];
  return Fi(function() {
    a?.(v);
  }, function(m) {
    return f(function(g) {
      var h = A(g, 2), x = h[0], b = h[1];
      return m && x === 0 && a?.(v), [x + 1, b];
    }), function() {
      i.opUpdate(l, function(g) {
        var h = g || [], x = A(h, 2), b = x[0], C = b === void 0 ? 0 : b, k = x[1], y = C - 1;
        return y === 0 ? (c(function() {
          (m || !i.opGet(l)) && n?.(k, !1);
        }), null) : [C - 1, k];
      });
    };
  }, [l]), v;
}
var Ki = {}, Qi = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Ae = /* @__PURE__ */ new Map();
function Zi(e) {
  Ae.set(e, (Ae.get(e) || 0) + 1);
}
function Ji(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Ue, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[ke] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var es = 0;
function ts(e, t) {
  Ae.set(e, (Ae.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  Ae.forEach(function(n, a) {
    n <= 0 && r.add(a);
  }), Ae.size - r.size > es && r.forEach(function(n) {
    Ji(n, t), Ae.delete(n);
  });
}
var rs = function(t, r, n, a) {
  var o = n.getDerivativeToken(t), i = M(M({}, o), r);
  return a && (i = a(i)), i;
}, Ba = "token";
function ns(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Bt(Ye), a = n.cache.instanceId, o = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, c = l === void 0 ? Ki : l, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, v = Li(function() {
    return Object.assign.apply(Object, [{}].concat(_e(t)));
  }, t), m = lt(v), g = lt(c), h = d ? lt(d) : "", x = kn(Ba, [s, e.id, m, g, h], function() {
    var b, C = f ? f(v, c, e) : rs(v, c, e, u), k = M({}, C), y = "";
    if (d) {
      var E = Na(C, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), S = A(E, 2);
      C = S[0], y = S[1];
    }
    var w = Xn(C, s);
    C._tokenKey = w, k._tokenKey = Xn(k, s);
    var $ = (b = d?.key) !== null && b !== void 0 ? b : w;
    C._themeKey = $, Zi($);
    var L = "".concat(Qi, "-").concat(ft(w));
    return C._hashId = L, [C, L, k, y, d?.key || ""];
  }, function(b) {
    ts(b[0]._themeKey, a);
  }, function(b) {
    var C = A(b, 4), k = C[0], y = C[3];
    if (d && y) {
      var E = Oe(y, ft("css-variables-".concat(k._themeKey)), {
        mark: fe,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      E[ke] = a, E.setAttribute(Ue, k._themeKey);
    }
  });
  return x;
}
var as = function(t, r, n) {
  var a = A(t, 5), o = a[2], i = a[3], s = a[4], l = n || {}, c = l.plain;
  if (!i)
    return null;
  var u = o._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, v = dt(i, s, u, d, c);
  return [f, u, v];
}, os = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, za = "comm", Va = "rule", Wa = "decl", is = "@import", ss = "@namespace", cs = "@keyframes", ls = "@layer", Ga = Math.abs, wn = String.fromCharCode;
function Xa(e) {
  return e.trim();
}
function Ht(e, t, r) {
  return e.replace(t, r);
}
function us(e, t, r) {
  return e.indexOf(t, r);
}
function Xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ke(e, t, r) {
  return e.slice(t, r);
}
function pe(e) {
  return e.length;
}
function fs(e) {
  return e.length;
}
function kt(e, t) {
  return t.push(e), e;
}
var Qt = 1, Qe = 1, Ua = 0, se = 0, X = 0, Je = "";
function Tn(e, t, r, n, a, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: a, children: o, line: Qt, column: Qe, length: i, return: "", siblings: s };
}
function ds() {
  return X;
}
function hs() {
  return X = se > 0 ? Xe(Je, --se) : 0, Qe--, X === 10 && (Qe = 1, Qt--), X;
}
function de() {
  return X = se < Ua ? Xe(Je, se++) : 0, Qe++, X === 10 && (Qe = 1, Qt++), X;
}
function we() {
  return Xe(Je, se);
}
function Dt() {
  return se;
}
function Zt(e, t) {
  return Ke(Je, e, t);
}
function ht(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vs(e) {
  return Qt = Qe = 1, Ua = pe(Je = e), se = 0, [];
}
function gs(e) {
  return Je = "", e;
}
function ur(e) {
  return Xa(Zt(se - 1, Or(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ps(e) {
  for (; (X = we()) && X < 33; )
    de();
  return ht(e) > 2 || ht(X) > 3 ? "" : " ";
}
function ms(e, t) {
  for (; --t && de() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return Zt(e, Dt() + (t < 6 && we() == 32 && de() == 32));
}
function Or(e) {
  for (; de(); )
    switch (X) {
      // ] ) " '
      case e:
        return se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Or(X);
        break;
      // (
      case 40:
        e === 41 && Or(e);
        break;
      // \
      case 92:
        de();
        break;
    }
  return se;
}
function bs(e, t) {
  for (; de() && e + X !== 57; )
    if (e + X === 84 && we() === 47)
      break;
  return "/*" + Zt(t, se - 1) + "*" + wn(e === 47 ? e : de());
}
function ys(e) {
  for (; !ht(we()); )
    de();
  return Zt(e, se);
}
function Ss(e) {
  return gs($t("", null, null, null, [""], e = vs(e), 0, [0], e));
}
function $t(e, t, r, n, a, o, i, s, l) {
  for (var c = 0, u = 0, f = i, d = 0, v = 0, m = 0, g = 1, h = 1, x = 1, b = 0, C = "", k = a, y = o, E = n, S = C; h; )
    switch (m = b, b = de()) {
      // (
      case 40:
        if (m != 108 && Xe(S, f - 1) == 58) {
          us(S += Ht(ur(b), "&", "&\f"), "&\f", Ga(c ? s[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += ur(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += ps(m);
        break;
      // \
      case 92:
        S += ms(Dt() - 1, 7);
        continue;
      // /
      case 47:
        switch (we()) {
          case 42:
          case 47:
            kt(xs(bs(de(), Dt()), t, r, l), l), (ht(m || 1) == 5 || ht(we() || 1) == 5) && pe(S) && Ke(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * g:
        s[c++] = pe(S) * x;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            x == -1 && (S = Ht(S, /\f/g, "")), v > 0 && (pe(S) - f || g === 0 && m === 47) && kt(v > 32 ? Kn(S + ";", n, r, f - 1, l) : Kn(Ht(S, " ", "") + ";", n, r, f - 2, l), l);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (kt(E = qn(S, t, r, c, u, a, s, C, k = [], y = [], f, o), o), b === 123)
              if (u === 0)
                $t(S, t, E, E, k, o, f, s, y);
              else {
                switch (d) {
                  // c(ontainer)
                  case 99:
                    if (Xe(S, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Xe(S, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? $t(e, E, E, n && kt(qn(e, E, E, 0, 0, a, s, C, a, k = [], f, y), y), a, y, f, s, n ? k : y) : $t(S, E, E, E, [""], y, 0, s, y);
              }
        }
        c = u = v = 0, g = x = 1, C = S = "", f = i;
        break;
      // :
      case 58:
        f = 1 + pe(S), v = m;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && hs() == 125)
            continue;
        }
        switch (S += wn(b), b * g) {
          // &
          case 38:
            x = u > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (pe(S) - 1) * x, x = 1;
            break;
          // @
          case 64:
            we() === 45 && (S += ur(de())), d = we(), u = f = pe(C = S += ys(Dt())), b++;
            break;
          // -
          case 45:
            m === 45 && pe(S) == 2 && (g = 0);
        }
    }
  return o;
}
function qn(e, t, r, n, a, o, i, s, l, c, u, f) {
  for (var d = a - 1, v = a === 0 ? o : [""], m = fs(v), g = 0, h = 0, x = 0; g < n; ++g)
    for (var b = 0, C = Ke(e, d + 1, d = Ga(h = i[g])), k = e; b < m; ++b)
      (k = Xa(h > 0 ? v[b] + " " + C : Ht(C, /&\f/g, v[b]))) && (l[x++] = k);
  return Tn(e, t, r, a === 0 ? Va : s, l, c, u, f);
}
function xs(e, t, r, n) {
  return Tn(e, t, r, za, wn(ds()), Ke(e, 2, -2), 0, n);
}
function Kn(e, t, r, n, a) {
  return Tn(e, t, r, Wa, Ke(e, 0, n), Ke(e, n + 1, -1), n, a);
}
function Rr(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Es(e, t, r, n) {
  switch (e.type) {
    case ls:
      if (e.children.length) break;
    case is:
    case ss:
    case Wa:
      return e.return = e.return || e.value;
    case za:
      return "";
    case cs:
      return e.return = e.value + "{" + Rr(e.children, n) + "}";
    case Va:
      if (!pe(e.value = e.props.join(","))) return "";
  }
  return pe(r = Rr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ya(e, t) {
  var r = t.path, n = t.parentSelectors;
  Ze(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var _s = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || o.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Ya("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Cs = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Ya("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, ut = "data-ant-cssinjs-cache-path", qa = "_FILE_STYLE__";
function ks(e) {
  return Object.keys(e).map(function(t) {
    var r = e[t];
    return "".concat(t, ":").concat(r);
  }).join(";");
}
var Re, Ka = !0;
function ws() {
  if (!Re && (Re = {}, me())) {
    var e = document.createElement("div");
    e.className = ut, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = A(o, 2), s = i[0], l = i[1];
      Re[s] = l;
    });
    var r = document.querySelector("style[".concat(ut, "]"));
    if (r) {
      var n;
      Ka = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Ts(e) {
  return ws(), !!Re[e];
}
function Ms(e) {
  var t = Re[e], r = null;
  if (t && me())
    if (Ka)
      r = qa;
    else {
      var n = document.querySelector("style[".concat(fe, '="').concat(Re[e], '"]'));
      n ? r = n.innerHTML : delete Re[e];
    }
  return [r, t];
}
var Qa = "_skip_check_", Za = "_multi_value_";
function Nt(e) {
  var t = Rr(Ss(e), Es);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function As(e) {
  return z(e) === "object" && e && (Qa in e || Za in e);
}
function Qn(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, o = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(_e(l.slice(1))).join(" ");
  });
  return o.join(",");
}
var Ps = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, o = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, c = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, v = r.linters, m = v === void 0 ? [] : v, g = "", h = {};
  function x(k) {
    var y = k.getName(s);
    if (!h[y]) {
      var E = e(k.style, r, {
        root: !1,
        parentSelectors: i
      }), S = A(E, 1), w = S[0];
      h[y] = "@keyframes ".concat(k.getName(s)).concat(w);
    }
  }
  function b(k) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return k.forEach(function(E) {
      Array.isArray(E) ? b(E, y) : E && y.push(E);
    }), y;
  }
  var C = b(Array.isArray(t) ? t : [t]);
  return C.forEach(function(k) {
    var y = typeof k == "string" && !a ? {} : k;
    if (typeof y == "string")
      g += "".concat(y, `
`);
    else if (y._keyframe)
      x(y);
    else {
      var E = d.reduce(function(S, w) {
        var $;
        return (w == null || ($ = w.visit) === null || $ === void 0 ? void 0 : $.call(w, S)) || S;
      }, y);
      Object.keys(E).forEach(function(S) {
        var w = E[S];
        if (z(w) === "object" && w && (S !== "animationName" || !w._keyframe) && !As(w)) {
          var $ = !1, L = S.trim(), V = !1;
          (a || o) && s ? L.startsWith("@") ? $ = !0 : L === "&" ? L = Qn("", s, u) : L = Qn(S, s, u) : a && !s && (L === "&" || L === "") && (L = "", V = !0);
          var te = e(w, r, {
            root: V,
            injectHash: $,
            parentSelectors: [].concat(_e(i), [L])
          }), P = A(te, 2), j = P[0], H = P[1];
          h = M(M({}, h), H), g += "".concat(L).concat(j);
        } else {
          let N = function(U, W) {
            process.env.NODE_ENV !== "production" && (z(w) !== "object" || !(w != null && w[Qa])) && [_s, Cs].concat(_e(m)).forEach(function(I) {
              return I(U, W, {
                path: c,
                hashId: s,
                parentSelectors: i
              });
            });
            var F = U.replace(/[A-Z]/g, function(I) {
              return "-".concat(I.toLowerCase());
            }), B = W;
            !os[U] && typeof B == "number" && B !== 0 && (B = "".concat(B, "px")), U === "animationName" && W !== null && W !== void 0 && W._keyframe && (x(W), B = W.getName(s)), g += "".concat(F, ":").concat(B, ";");
          };
          var D, K = (D = w?.value) !== null && D !== void 0 ? D : w;
          z(w) === "object" && w !== null && w !== void 0 && w[Za] && Array.isArray(K) ? K.forEach(function(U) {
            N(S, U);
          }) : N(S, K);
        }
      });
    }
  }), a ? l && (g && (g = "@layer ".concat(l.name, " {").concat(g, "}")), l.dependencies && (h["@layer ".concat(l.name)] = l.dependencies.map(function(k) {
    return "@layer ".concat(k, ", ").concat(l.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, h];
};
function Ja(e, t) {
  return ft("".concat(e.join("%")).concat(t));
}
function Os() {
  return null;
}
var eo = "style";
function Rs(e, t) {
  var r = e.token, n = e.path, a = e.hashId, o = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = p.useContext(Ye), f = u.autoClear, d = u.mock, v = u.defaultCache, m = u.hashPriority, g = u.container, h = u.ssrInline, x = u.transformers, b = u.linters, C = u.cache, k = u.layer, y = r._tokenKey, E = [y];
  k && E.push("layer"), E.push.apply(E, _e(n));
  var S = Ar;
  process.env.NODE_ENV !== "production" && d !== void 0 && (S = d === "client");
  var w = kn(
    eo,
    E,
    // Create cache if needed
    function() {
      var P = E.join("|");
      if (Ts(P)) {
        var j = Ms(P), H = A(j, 2), D = H[0], K = H[1];
        if (D)
          return [D, y, K, {}, s, c];
      }
      var N = t(), U = Ps(N, {
        hashId: a,
        hashPriority: m,
        layer: k ? o : void 0,
        path: n.join("-"),
        transformers: x,
        linters: b
      }), W = A(U, 2), F = W[0], B = W[1], I = Nt(F), he = Ja(E, I);
      return [I, y, he, B, s, c];
    },
    // Remove cache if no need
    function(P, j) {
      var H = A(P, 3), D = H[2];
      (j || f) && Ar && _n(D, {
        mark: fe,
        attachTo: g
      });
    },
    // Effect: Inject style here
    function(P) {
      var j = A(P, 4), H = j[0];
      j[1];
      var D = j[2], K = j[3];
      if (S && H !== qa) {
        var N = {
          mark: fe,
          prepend: k ? !1 : "queue",
          attachTo: g,
          priority: c
        }, U = typeof i == "function" ? i() : i;
        U && (N.csp = {
          nonce: U
        });
        var W = [], F = [];
        Object.keys(K).forEach(function(I) {
          I.startsWith("@layer") ? W.push(I) : F.push(I);
        }), W.forEach(function(I) {
          Oe(Nt(K[I]), "_layer-".concat(I), M(M({}, N), {}, {
            prepend: !0
          }));
        });
        var B = Oe(H, D, N);
        B[ke] = C.instanceId, B.setAttribute(Ue, y), process.env.NODE_ENV !== "production" && B.setAttribute(Oi, E.join("|")), F.forEach(function(I) {
          Oe(Nt(K[I]), "_effect-".concat(I), N);
        });
      }
    }
  ), $ = A(w, 3), L = $[0], V = $[1], te = $[2];
  return function(P) {
    var j;
    return !h || S || !v ? j = /* @__PURE__ */ p.createElement(Os, null) : j = /* @__PURE__ */ p.createElement("style", zt({}, T(T({}, Ue, V), fe, te), {
      dangerouslySetInnerHTML: {
        __html: L
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, j, P);
  };
}
var js = function(t, r, n) {
  var a = A(t, 6), o = a[0], i = a[1], s = a[2], l = a[3], c = a[4], u = a[5], f = n || {}, d = f.plain;
  if (c)
    return null;
  var v = o, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = dt(o, i, s, m, d), l && Object.keys(l).forEach(function(g) {
    if (!r[g]) {
      r[g] = !0;
      var h = Nt(l[g]), x = dt(h, i, "_effect-".concat(g), m, d);
      g.startsWith("@layer") ? v = x + v : v += x;
    }
  }), [u, s, v];
}, to = "cssVar", Rl = function(t, r) {
  var n = t.key, a = t.prefix, o = t.unitless, i = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = Bt(Ye), f = u.cache.instanceId, d = u.container, v = s._tokenKey, m = [].concat(_e(t.path), [n, c, v]), g = kn(to, m, function() {
    var h = r(), x = Na(h, n, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), b = A(x, 2), C = b[0], k = b[1], y = Ja(m, k);
    return [C, k, y, n];
  }, function(h) {
    var x = A(h, 3), b = x[2];
    Ar && _n(b, {
      mark: fe,
      attachTo: d
    });
  }, function(h) {
    var x = A(h, 3), b = x[1], C = x[2];
    if (b) {
      var k = Oe(b, C, {
        mark: fe,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      k[ke] = f, k.setAttribute(Ue, n);
    }
  });
  return g;
}, Ls = function(t, r, n) {
  var a = A(t, 4), o = a[1], i = a[2], s = a[3], l = n || {}, c = l.plain;
  if (!o)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = dt(o, s, i, f, c);
  return [u, i, d];
}, Is = T(T(T({}, eo, js), Ba, as), to, Ls);
function Hs(e) {
  return e !== null;
}
function jl(e, t) {
  var r = typeof t == "boolean" ? {
    plain: t
  } : t || {}, n = r.plain, a = n === void 0 ? !1 : n, o = r.types, i = o === void 0 ? ["style", "token", "cssVar"] : o, s = r.once, l = s === void 0 ? !1 : s, c = new RegExp("^(".concat((typeof i == "string" ? [i] : i).join("|"), ")%")), u = Array.from(e.cache.keys()).filter(function(m) {
    return c.test(m);
  }), f = {}, d = {}, v = "";
  return u.map(function(m) {
    if (l && e.extracted.has(m))
      return null;
    var g = m.replace(c, "").replace(/%/g, "|"), h = m.split("%"), x = A(h, 1), b = x[0], C = Is[b], k = C(e.cache.get(m)[1], f, {
      plain: a
    });
    if (!k)
      return null;
    var y = A(k, 3), E = y[0], S = y[1], w = y[2];
    return m.startsWith("style") && (d[g] = S), e.extracted.add(m), [E, w];
  }).filter(Hs).sort(function(m, g) {
    var h = A(m, 1), x = h[0], b = A(g, 1), C = b[0];
    return x - C;
  }).forEach(function(m) {
    var g = A(m, 2), h = g[1];
    v += h;
  }), v += dt(".".concat(ut, '{content:"').concat(ks(d), '";}'), void 0, void 0, T({}, ut, ut), a), v;
}
function Ds(e) {
  if (typeof e == "number")
    return [[e], !1];
  var t = String(e).trim(), r = t.match(/(.*)(!important)/), n = (r ? r[1] : t).trim().split(/\s+/), a = [], o = 0;
  return [n.reduce(function(i, s) {
    if (s.includes("(") || s.includes(")")) {
      var l = s.split("(").length - 1, c = s.split(")").length - 1;
      o += l - c;
    }
    return o >= 0 && a.push(s), o === 0 && (i.push(a.join(" ")), a = []), i;
  }, []), !!r];
}
function ze(e) {
  return e.notSplit = !0, e;
}
var $s = {
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: ze(["borderTop", "borderBottom"]),
  borderBlockStart: ze(["borderTop"]),
  borderBlockEnd: ze(["borderBottom"]),
  borderInline: ze(["borderLeft", "borderRight"]),
  borderInlineStart: ze(["borderLeft"]),
  borderInlineEnd: ze(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
};
function wt(e, t) {
  var r = e;
  return t && (r = "".concat(r, " !important")), {
    _skip_check_: !0,
    value: r
  };
}
var Ll = {
  visit: function(t) {
    var r = {};
    return Object.keys(t).forEach(function(n) {
      var a = t[n], o = $s[n];
      if (o && (typeof a == "number" || typeof a == "string")) {
        var i = Ds(a), s = A(i, 2), l = s[0], c = s[1];
        o.length && o.notSplit ? o.forEach(function(u) {
          r[u] = wt(a, c);
        }) : o.length === 1 ? r[o[0]] = wt(l[0], c) : o.length === 2 ? o.forEach(function(u, f) {
          var d;
          r[u] = wt((d = l[f]) !== null && d !== void 0 ? d : l[0], c);
        }) : o.length === 4 ? o.forEach(function(u, f) {
          var d, v;
          r[u] = wt((d = (v = l[f]) !== null && v !== void 0 ? v : l[f - 2]) !== null && d !== void 0 ? d : l[0], c);
        }) : r[n] = a;
      } else
        r[n] = a;
    }), r;
  }
}, Ns = /* @__PURE__ */ mn({});
function Fs(e) {
  return Pa(e) || wa(e) || xn(e) || Oa();
}
function jr(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function ro(e, t, r, n) {
  if (!t.length)
    return r;
  var a = Fs(t), o = a[0], i = a.slice(1), s;
  return !e && typeof o == "number" ? s = [] : Array.isArray(e) ? s = _e(e) : s = M({}, e), n && r === void 0 && i.length === 1 ? delete s[o][i[0]] : s[o] = ro(s[o], i, r, n), s;
}
function fr(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !jr(e, t.slice(0, -1)) ? e : ro(e, t, r, n);
}
function Bs(e) {
  return z(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Zn(e) {
  return Array.isArray(e) ? [] : {};
}
var zs = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Vs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Zn(t[0]);
  return t.forEach(function(a) {
    function o(i, s) {
      var l = new Set(s), c = jr(a, i), u = Array.isArray(c);
      if (u || Bs(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = jr(n, i);
          u ? n = fr(n, i, []) : (!f || z(f) !== "object") && (n = fr(n, i, Zn(c))), zs(c).forEach(function(d) {
            o([].concat(_e(i), [d]), l);
          });
        }
      } else
        n = fr(n, i, c);
    }
    o([]);
  }), n;
}
function no() {
}
let Ee = null;
function Ws() {
  Ee = null, ba();
}
let Mn = no;
process.env.NODE_ENV !== "production" && (Mn = (e, t, r) => {
  Ze(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Ws();
});
const ao = /* @__PURE__ */ p.createContext({}), Jt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(ao), r = (n, a, o) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const i = Ee;
        Ee || (Ee = {}), Ee[e] = Ee[e] || [], Ee[e].includes(o || "") || Ee[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ee);
      } else
        process.env.NODE_ENV !== "production" && Mn(n, e, o);
  };
  return r.deprecated = (n, a, o, i) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = no, e;
}, er = Mn, Gs = /* @__PURE__ */ mn(void 0);
var Xs = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Us = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ys = M(M({}, Us), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const oo = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Jn = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Ys),
  timePickerLocale: Object.assign({}, oo)
}, ae = "${label} is not a valid ${type}", tr = {
  locale: "en",
  Pagination: Xs,
  DatePicker: Jn,
  TimePicker: oo,
  Calendar: Jn,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: ae,
        method: ae,
        array: ae,
        object: ae,
        number: ae,
        date: ae,
        boolean: ae,
        integer: ae,
        float: ae,
        regexp: ae,
        email: ae,
        url: ae,
        hex: ae
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, tr.Modal);
let Ft = [];
const ea = () => Ft.reduce((e, t) => Object.assign(Object.assign({}, e), t), tr.Modal);
function qs(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ft.push(t), ea(), () => {
      Ft = Ft.filter((r) => r !== t), ea();
    };
  }
  Object.assign({}, tr.Modal);
}
const io = /* @__PURE__ */ mn(void 0), so = "internalMark", co = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const o = Jt("LocaleProvider");
    process.env.NODE_ENV !== "production" && o(n === so, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => qs(t?.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(io.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (co.displayName = "LocaleProvider");
const q = Math.round;
function dr(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    n[a] = t(n[a] || 0, r[a] || "", a);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const ta = (e, t, r) => r === 0 ? e : e / 100;
function st(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Ve {
  constructor(t) {
    T(this, "isValid", !0), T(this, "r", 0), T(this, "g", 0), T(this, "b", 0), T(this, "a", 1), T(this, "_h", void 0), T(this, "_s", void 0), T(this, "_l", void 0), T(this, "_v", void 0), T(this, "_max", void 0), T(this, "_min", void 0), T(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(o) {
        return n.startsWith(o);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : a("rgb") ? this.fromRgbString(n) : a("hsl") ? this.fromHslString(n) : (a("hsv") || a("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Ve)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = st(t.r), this.g = st(t.g), this.b = st(t.b), this.a = typeof t.a == "number" ? st(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(o) {
      const i = o / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), a = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = q(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), a = r / 100, o = (s) => (n[s] - this[s]) * a + this[s], i = {
      r: q(o("r")),
      g: q(o("g")),
      b: q(o("b")),
      a: q(o("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), a = (o) => q((this[o] * this.a + r[o] * r.a * (1 - this.a)) / n);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const o = q(this.a * 255).toString(16);
      t += o.length === 2 ? o : "0" + o;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), r = q(this.getSaturation() * 100), n = q(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, r, n) {
    const a = this.clone();
    return a[t] = st(r, n), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(a, o) {
      return parseInt(r[a] + r[o || a], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof a == "number" ? a : 1, r <= 0) {
      const d = q(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let o = 0, i = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * n - 1)) * r, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (o = c, i = u) : l >= 1 && l < 2 ? (o = u, i = c) : l >= 2 && l < 3 ? (i = c, s = u) : l >= 3 && l < 4 ? (i = u, s = c) : l >= 4 && l < 5 ? (o = u, s = c) : l >= 5 && l < 6 && (o = c, s = u);
    const f = n - c / 2;
    this.r = q((o + f) * 255), this.g = q((i + f) * 255), this.b = q((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof a == "number" ? a : 1;
    const o = q(n * 255);
    if (this.r = o, this.g = o, this.b = o, r <= 0)
      return;
    const i = t / 60, s = Math.floor(i), l = i - s, c = q(n * (1 - r) * 255), u = q(n * (1 - r * l) * 255), f = q(n * (1 - r * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = dr(t, ta);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = dr(t, ta);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = dr(t, (n, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? q(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Tt = 2, ra = 0.16, Ks = 0.05, Qs = 0.05, Zs = 0.15, lo = 5, uo = 4, Js = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function na(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Tt * t : Math.round(e.h) + Tt * t : n = r ? Math.round(e.h) + Tt * t : Math.round(e.h) - Tt * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function aa(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - ra * t : t === uo ? n = e.s + ra : n = e.s + Ks * t, n > 1 && (n = 1), r && t === lo && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function oa(e, t, r) {
  var n;
  return r ? n = e.v + Qs * t : n = e.v - Zs * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function Xt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new Ve(e), a = n.toHsv(), o = lo; o > 0; o -= 1) {
    var i = new Ve({
      h: na(a, o, !0),
      s: aa(a, o, !0),
      v: oa(a, o, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= uo; s += 1) {
    var l = new Ve({
      h: na(a, s),
      s: aa(a, s),
      v: oa(a, s)
    });
    r.push(l);
  }
  return t.theme === "dark" ? Js.map(function(c) {
    var u = c.index, f = c.amount;
    return new Ve(t.backgroundColor || "#141414").mix(r[u], f).toHexString();
  }) : r.map(function(c) {
    return c.toHexString();
  });
}
var hr = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Lr = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Lr.primary = Lr[5];
var Ir = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ir.primary = Ir[5];
var Hr = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Hr.primary = Hr[5];
var Dr = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Dr.primary = Dr[5];
var $r = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
$r.primary = $r[5];
var Nr = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Nr.primary = Nr[5];
var Fr = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Fr.primary = Fr[5];
var Br = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Br.primary = Br[5];
var zr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
zr.primary = zr[5];
var Vr = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Vr.primary = Vr[5];
var Wr = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Wr.primary = Wr[5];
var Gr = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Gr.primary = Gr[5];
var Ut = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ut.primary = Ut[5];
var Il = Ut, vr = {
  red: Lr,
  volcano: Ir,
  orange: Hr,
  gold: Dr,
  yellow: $r,
  lime: Nr,
  green: Fr,
  cyan: Br,
  blue: zr,
  geekblue: Vr,
  purple: Wr,
  magenta: Gr,
  grey: Ut
}, Xr = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
Xr.primary = Xr[5];
var Ur = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
Ur.primary = Ur[5];
var Yr = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
Yr.primary = Yr[5];
var qr = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
qr.primary = qr[5];
var Kr = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
Kr.primary = Kr[5];
var Qr = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
Qr.primary = Qr[5];
var Zr = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
Zr.primary = Zr[5];
var Jr = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
Jr.primary = Jr[5];
var en = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
en.primary = en[5];
var tn = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
tn.primary = tn[5];
var rn = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
rn.primary = rn[5];
var nn = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
nn.primary = nn[5];
var an = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
an.primary = an[5];
var Hl = {
  red: Xr,
  volcano: Ur,
  orange: Yr,
  gold: qr,
  yellow: Kr,
  lime: Qr,
  green: Zr,
  cyan: Jr,
  blue: en,
  geekblue: tn,
  purple: rn,
  magenta: nn,
  grey: an
};
const fo = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, vt = Object.assign(Object.assign({}, fo), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function J(e, t) {
  ec(e) && (e = "100%");
  var r = tc(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Mt(e) {
  return Math.min(1, Math.max(0, e));
}
function ec(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function tc(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ho(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function At(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ue(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function rc(e, t, r) {
  return {
    r: J(e, 255) * 255,
    g: J(t, 255) * 255,
    b: J(r, 255) * 255
  };
}
function ia(e, t, r) {
  e = J(e, 255), t = J(t, 255), r = J(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = 0, s = (n + a) / 2;
  if (n === a)
    i = 0, o = 0;
  else {
    var l = n - a;
    switch (i = s > 0.5 ? l / (2 - n - a) : l / (n + a), n) {
      case e:
        o = (t - r) / l + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / l + 2;
        break;
      case r:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: s };
}
function gr(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function nc(e, t, r) {
  var n, a, o;
  if (e = J(e, 360), t = J(t, 100), r = J(r, 100), t === 0)
    a = r, o = r, n = r;
  else {
    var i = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - i;
    n = gr(s, i, e + 1 / 3), a = gr(s, i, e), o = gr(s, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function sa(e, t, r) {
  e = J(e, 255), t = J(t, 255), r = J(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), o = 0, i = n, s = n - a, l = n === 0 ? 0 : s / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        o = (r - e) / s + 2;
        break;
      case r:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function ac(e, t, r) {
  e = J(e, 360) * 6, t = J(t, 100), r = J(r, 100);
  var n = Math.floor(e), a = e - n, o = r * (1 - t), i = r * (1 - a * t), s = r * (1 - (1 - a) * t), l = n % 6, c = [r, i, o, o, s, r][l], u = [s, r, r, i, o, o][l], f = [o, o, s, r, r, i][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function ca(e, t, r, n) {
  var a = [
    ue(Math.round(e).toString(16)),
    ue(Math.round(t).toString(16)),
    ue(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function oc(e, t, r, n, a) {
  var o = [
    ue(Math.round(e).toString(16)),
    ue(Math.round(t).toString(16)),
    ue(Math.round(r).toString(16)),
    ue(vo(n))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Dl(e, t, r, n) {
  var a = [
    ue(vo(n)),
    ue(Math.round(e).toString(16)),
    ue(Math.round(t).toString(16)),
    ue(Math.round(r).toString(16))
  ];
  return a.join("");
}
function vo(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function la(e) {
  return oe(e) / 255;
}
function oe(e) {
  return parseInt(e, 16);
}
function ic(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var on = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function sc(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, o = null, i = !1, s = !1;
  return typeof e == "string" && (e = uc(e)), typeof e == "object" && (Se(e.r) && Se(e.g) && Se(e.b) ? (t = rc(e.r, e.g, e.b), i = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Se(e.h) && Se(e.s) && Se(e.v) ? (n = At(e.s), a = At(e.v), t = ac(e.h, n, a), i = !0, s = "hsv") : Se(e.h) && Se(e.s) && Se(e.l) && (n = At(e.s), o = At(e.l), t = nc(e.h, n, o), i = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = ho(r), {
    ok: i,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var cc = "[-\\+]?\\d+%?", lc = "[-\\+]?\\d*\\.\\d+%?", Te = "(?:".concat(lc, ")|(?:").concat(cc, ")"), pr = "[\\s|\\(]+(".concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")\\s*\\)?"), mr = "[\\s|\\(]+(".concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")[,|\\s]+(").concat(Te, ")\\s*\\)?"), ce = {
  CSS_UNIT: new RegExp(Te),
  rgb: new RegExp("rgb" + pr),
  rgba: new RegExp("rgba" + mr),
  hsl: new RegExp("hsl" + pr),
  hsla: new RegExp("hsla" + mr),
  hsv: new RegExp("hsv" + pr),
  hsva: new RegExp("hsva" + mr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function uc(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (on[e])
    e = on[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = ce.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = ce.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = ce.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = ce.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = ce.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = ce.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = ce.hex8.exec(e), r ? {
    r: oe(r[1]),
    g: oe(r[2]),
    b: oe(r[3]),
    a: la(r[4]),
    format: t ? "name" : "hex8"
  } : (r = ce.hex6.exec(e), r ? {
    r: oe(r[1]),
    g: oe(r[2]),
    b: oe(r[3]),
    format: t ? "name" : "hex"
  } : (r = ce.hex4.exec(e), r ? {
    r: oe(r[1] + r[1]),
    g: oe(r[2] + r[2]),
    b: oe(r[3] + r[3]),
    a: la(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = ce.hex3.exec(e), r ? {
    r: oe(r[1] + r[1]),
    g: oe(r[2] + r[2]),
    b: oe(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Se(e) {
  return !!ce.CSS_UNIT.exec(String(e));
}
var ne = (
  /** @class */
  (function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ic(t)), this.originalInput = t;
      var a = sc(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, a, o = t.r / 255, i = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ho(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = sa(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = sa(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ia(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ia(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ca(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), oc(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(J(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(J(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ca(this.r, this.g, this.b, !1), r = 0, n = Object.entries(on); r < n.length; r++) {
        var a = n[r], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, o = !r && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Mt(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Mt(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Mt(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Mt(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new e(t).toRgb(), o = r / 100, i = {
        r: (a.r - n.r) * o + n.r,
        g: (a.g - n.g) * o + n.g,
        b: (a.b - n.b) * o + n.b,
        a: (a.a - n.a) * o + n.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, o = [this];
      for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + a) % 360, o.push(new e(n));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, o = r.v, i = [], s = 1 / t; t--; )
        i.push(new e({ h: n, s: a, v: o })), o = (o + s) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), a = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (n + i * o) % 360, s: r.s, l: r.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  })()
);
function $l(e, t) {
  return e === void 0 && (e = ""), t === void 0 && (t = {}), new ne(e, t);
}
function fc(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: s,
    colorPrimary: l,
    colorBgBase: c,
    colorTextBase: u
  } = e, f = r(l), d = r(a), v = r(o), m = r(i), g = r(s), h = n(c, u), x = e.colorLink || e.colorInfo, b = r(x);
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new ne("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const dc = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function hc(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, dc(n));
}
const vc = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function gc(e) {
  return (e + 8) / e;
}
function pc(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, o = e * Math.pow(Math.E, a / 5), i = n > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: gc(r)
  }));
}
const mc = (e) => {
  const t = pc(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), a = r[1], o = r[0], i = r[2], s = n[1], l = n[0], c = n[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function bc(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const xe = (e, t) => new ne(e).setAlpha(t).toRgbString(), ct = (e, t) => new ne(e).darken(t).toHexString(), yc = (e) => {
  const t = Xt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Sc = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: xe(n, 0.88),
    colorTextSecondary: xe(n, 0.65),
    colorTextTertiary: xe(n, 0.45),
    colorTextQuaternary: xe(n, 0.25),
    colorFill: xe(n, 0.15),
    colorFillSecondary: xe(n, 0.06),
    colorFillTertiary: xe(n, 0.04),
    colorFillQuaternary: xe(n, 0.02),
    colorBgLayout: ct(r, 4),
    colorBgContainer: ct(r, 0),
    colorBgElevated: ct(r, 0),
    colorBgSpotlight: xe(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: ct(r, 15),
    colorBorderSecondary: ct(r, 6)
  };
};
function xc(e) {
  hr.pink = hr.magenta, vr.pink = vr.magenta;
  const t = Object.keys(fo).map((r) => {
    const n = e[r] === hr[r] ? vr[r] : Xt(e[r]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${r}-${i + 1}`] = n[i], a[`${r}${i + 1}`] = n[i], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), fc(e, {
    generateColorPalettes: yc,
    generateNeutralColorPalettes: Sc
  })), mc(e.fontSize)), bc(e)), vc(e)), hc(e));
}
const go = Mr(xc), sn = {
  token: vt,
  override: {
    override: vt
  },
  hashed: !0
}, po = /* @__PURE__ */ pn.createContext(sn), mo = "anticon", Nl = ["outlined", "borderless", "filled"], Ec = (e, t) => t || (e ? `ant-${e}` : "ant"), rr = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Ec,
  iconPrefixCls: mo
}), {
  Consumer: Fl
} = rr, _c = `-ant-${Date.now()}-${Math.random()}`;
function Cc(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = s?.(l) || l, l.toRgbString();
  }, a = (i, s) => {
    const l = new ne(i), c = Xt(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = c[1], r[`${s}-color-hover`] = c[4], r[`${s}-color-active`] = c[6], r[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = c[0], r[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new ne(t.primaryColor), s = Xt(i.toRgbString());
    s.forEach((c, u) => {
      r[`primary-${u + 1}`] = c;
    }), r["primary-color-deprecated-l-35"] = n(i, (c) => c.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (c) => c.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (c) => c.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (c) => c.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const l = new ne(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (c) => c.setAlpha(c.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function kc(e, t) {
  const r = Cc(e, t);
  me() ? Oe(r, `${_c}-dynamic-theme`) : process.env.NODE_ENV !== "production" && er(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const cn = /* @__PURE__ */ p.createContext(!1), wc = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = p.useContext(cn);
  return /* @__PURE__ */ p.createElement(cn.Provider, {
    value: r ?? n
  }, t);
}, gt = /* @__PURE__ */ p.createContext(void 0), Tc = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = p.useContext(gt);
  return /* @__PURE__ */ p.createElement(gt.Provider, {
    value: r || n
  }, t);
};
function Mc() {
  const e = Bt(cn), t = Bt(gt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const Ac = "5.19.1";
function br(e) {
  return e >= 0 && e <= 255;
}
function Pt(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: o
  } = new ne(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new ne(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((r - i * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), d = Math.round((a - l * (1 - c)) / c);
    if (br(u) && br(f) && br(d))
      return new ne({
        r: u,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new ne({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Pc = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function bo(e) {
  const {
    override: t
  } = e, r = Pc(e, ["override"]), n = Object.assign({}, t);
  Object.keys(vt).forEach((d) => {
    delete n[d];
  });
  const a = Object.assign(Object.assign({}, r), n), o = 480, i = 576, s = 768, l = 992, c = 1200, u = 1600;
  return a.motion === !1 && (a.motionDurationFast = "0s", a.motionDurationMid = "0s", a.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Pt(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Pt(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Pt(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 4,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Pt(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ne("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ne("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ne("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var ua = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Oc = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, Rc = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, jc = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, yo = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, o = ua(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: a
  });
  return i = bo(i), o && Object.entries(o).forEach((s) => {
    let [l, c] = s;
    const {
      theme: u
    } = c, f = ua(c, ["theme"]);
    let d = f;
    u && (d = yo(Object.assign(Object.assign({}, i), f), {
      override: f
    }, u)), i[l] = d;
  }), i;
};
function So() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = pn.useContext(po), o = `${Ac}-${t || ""}`, i = r || go, [s, l, c] = ns(i, [vt, e], {
    salt: o,
    override: n,
    getComputedToken: yo,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: bo,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Oc,
      ignore: Rc,
      preserve: jc
    }
  });
  return [i, c, t ? l : "", s, a];
}
function ln(e) {
  var t = p.useRef();
  t.current = e;
  var r = p.useCallback(function() {
    for (var n, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
function un(e) {
  var t = p.useRef(!1), r = p.useState(e), n = A(r, 2), a = n[0], o = n[1];
  p.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || o(s);
  }
  return [a, i];
}
const Bl = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, zl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Lc = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Vl = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Wl = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Gl = (e, t, r, n) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = r ? `.${r}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [a]: i
    })
  };
}, Ic = (e) => ({
  outline: `${Ii(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Xl = (e) => ({
  "&:focus-visible": Object.assign({}, Ic(e))
}), Hc = (e, t) => {
  const [r, n] = So();
  return Rs({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Lc()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Dc = Object.assign({}, p), {
  useId: fa
} = Dc, $c = () => "", Nc = typeof fa > "u" ? $c : fa;
function Fc(e, t, r) {
  var n, a;
  const o = Jt("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, sn), {
    hashed: (n = t?.hashed) !== null && n !== void 0 ? n : sn.hashed,
    cssVar: t?.cssVar
  }) : t, l = Nc();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || l);
    process.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yt(() => {
    var c, u;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((m) => {
      f[m] = Object.assign(Object.assign({}, f[m]), e.components[m]);
    });
    const d = `css-var-${l.replace(/:/g, "")}`, v = ((c = i.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: v
    });
  }, [i, s], (c, u) => c.some((f, d) => {
    const v = u[d];
    return !wr(f, v, !0);
  }));
}
var yr = { exports: {} };
var da;
function Bc() {
  return da || (da = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = [], a = 0; a < arguments.length; a++) {
          var o = arguments[a];
          if (o) {
            var i = typeof o;
            if (i === "string" || i === "number")
              n.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var s = r.apply(null, o);
                s && n.push(s);
              }
            } else if (i === "object") {
              if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
                n.push(o.toString());
                continue;
              }
              for (var l in o)
                t.call(o, l) && o[l] && n.push(l);
            }
          }
        }
        return n.join(" ");
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(yr)), yr.exports;
}
var zc = Bc();
const Vc = /* @__PURE__ */ ri(zc);
var Wc = ["children"], xo = /* @__PURE__ */ p.createContext({});
function Gc(e) {
  var t = e.children, r = Gt(e, Wc);
  return /* @__PURE__ */ p.createElement(xo.Provider, {
    value: r
  }, t);
}
var Xc = /* @__PURE__ */ (function(e) {
  _a(r, e);
  var t = ka(r);
  function r() {
    return pt(this, r), t.apply(this, arguments);
  }
  return mt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
})(p.Component);
function Uc(e) {
  var t = p.useReducer(function(s) {
    return s + 1;
  }, 0), r = A(t, 2), n = r[1], a = p.useRef(e), o = ln(function() {
    return a.current;
  }), i = ln(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [o, i];
}
var Ce = "none", Ot = "appear", Rt = "enter", jt = "leave", ha = "none", le = "prepare", We = "start", Ge = "active", An = "end", Eo = "prepared";
function va(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Yc(e, t) {
  var r = {
    animationend: va("Animation", "AnimationEnd"),
    transitionend: va("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var qc = Yc(me(), typeof window < "u" ? window : {}), _o = {};
if (me()) {
  var Kc = document.createElement("div");
  _o = Kc.style;
}
var Lt = {};
function Co(e) {
  if (Lt[e])
    return Lt[e];
  var t = qc[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var o = r[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _o)
        return Lt[e] = t[o], Lt[e];
    }
  return "";
}
var ko = Co("animationend"), wo = Co("transitionend"), To = !!(ko && wo), ga = ko || "animationend", pa = wo || "transitionend";
function ma(e, t) {
  if (!e) return null;
  if (z(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Qc = (function(e) {
  var t = Pe();
  function r(a) {
    a && (a.removeEventListener(pa, e), a.removeEventListener(ga, e));
  }
  function n(a) {
    t.current && t.current !== a && r(t.current), a && a !== t.current && (a.addEventListener(pa, e), a.addEventListener(ga, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
});
var Mo = me() ? ti : It;
const Zc = (function() {
  var e = p.useRef(null);
  function t() {
    Wt.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Wt(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = o;
  }
  return p.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
});
var Jc = [le, We, Ge, An], el = [le, Eo], Ao = !1, tl = !0;
function Po(e) {
  return e === Ge || e === An;
}
const rl = (function(e, t, r) {
  var n = un(ha), a = A(n, 2), o = a[0], i = a[1], s = Zc(), l = A(s, 2), c = l[0], u = l[1];
  function f() {
    i(le, !0);
  }
  var d = t ? el : Jc;
  return Mo(function() {
    if (o !== ha && o !== An) {
      var v = d.indexOf(o), m = d[v + 1], g = r(o);
      g === Ao ? i(m, !0) : m && c(function(h) {
        function x() {
          h.isCanceled() || i(m, !0);
        }
        g === !0 ? x() : Promise.resolve(g).then(x);
      });
    }
  }, [e, o]), p.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, o];
});
function nl(e, t, r, n) {
  var a = n.motionEnter, o = a === void 0 ? !0 : a, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, c = l === void 0 ? !0 : l, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, v = n.onEnterPrepare, m = n.onLeavePrepare, g = n.onAppearStart, h = n.onEnterStart, x = n.onLeaveStart, b = n.onAppearActive, C = n.onEnterActive, k = n.onLeaveActive, y = n.onAppearEnd, E = n.onEnterEnd, S = n.onLeaveEnd, w = n.onVisibleChanged, $ = un(), L = A($, 2), V = L[0], te = L[1], P = Uc(Ce), j = A(P, 2), H = j[0], D = j[1], K = un(null), N = A(K, 2), U = N[0], W = N[1], F = H(), B = Pe(!1), I = Pe(null);
  function he() {
    return r();
  }
  var je = Pe(!1);
  function Le() {
    D(Ce), W(null, !0);
  }
  var Ie = ln(function(ee) {
    var Y = H();
    if (Y !== Ce) {
      var ie = he();
      if (!(ee && !ee.deadline && ee.target !== ie)) {
        var $e = je.current, Ne;
        Y === Ot && $e ? Ne = y?.(ie, ee) : Y === Rt && $e ? Ne = E?.(ie, ee) : Y === jt && $e && (Ne = S?.(ie, ee)), $e && Ne !== !1 && Le();
      }
    }
  }), tt = Qc(Ie), rt = A(tt, 1), nt = rt[0], He = function(Y) {
    switch (Y) {
      case Ot:
        return T(T(T({}, le, d), We, g), Ge, b);
      case Rt:
        return T(T(T({}, le, v), We, h), Ge, C);
      case jt:
        return T(T(T({}, le, m), We, x), Ge, k);
      default:
        return {};
    }
  }, be = p.useMemo(function() {
    return He(F);
  }, [F]), at = rl(F, !e, function(ee) {
    if (ee === le) {
      var Y = be[le];
      return Y ? Y(he()) : Ao;
    }
    if (re in be) {
      var ie;
      W(((ie = be[re]) === null || ie === void 0 ? void 0 : ie.call(be, he(), null)) || null);
    }
    return re === Ge && F !== Ce && (nt(he()), u > 0 && (clearTimeout(I.current), I.current = setTimeout(function() {
      Ie({
        deadline: !0
      });
    }, u))), re === Eo && Le(), tl;
  }), _ = A(at, 2), Me = _[0], re = _[1], De = Po(re);
  je.current = De;
  var bt = Pe(null);
  Mo(function() {
    if (!(B.current && bt.current === t)) {
      te(t);
      var ee = B.current;
      B.current = !0;
      var Y;
      !ee && t && s && (Y = Ot), ee && t && o && (Y = Rt), (ee && !t && c || !ee && f && !t && c) && (Y = jt);
      var ie = He(Y);
      Y && (e || ie[le]) ? (D(Y), Me()) : D(Ce), bt.current = t;
    }
  }, [t]), It(function() {
    // Cancel appear
    (F === Ot && !s || // Cancel enter
    F === Rt && !o || // Cancel leave
    F === jt && !c) && D(Ce);
  }, [s, o, c]), It(function() {
    return function() {
      B.current = !1, clearTimeout(I.current);
    };
  }, []);
  var ot = p.useRef(!1);
  It(function() {
    V && (ot.current = !0), V !== void 0 && F === Ce && ((ot.current || V) && w?.(V), ot.current = !0);
  }, [V, F]);
  var it = U;
  return be[le] && re === We && (it = M({
    transition: "none"
  }, it)), [F, re, it, V ?? t];
}
function al(e) {
  var t = e;
  z(e) === "object" && (t = e.transitionSupport);
  function r(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var n = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var i = a.visible, s = i === void 0 ? !0 : i, l = a.removeOnLeave, c = l === void 0 ? !0 : l, u = a.forceRender, f = a.children, d = a.motionName, v = a.leavedClassName, m = a.eventProps, g = p.useContext(xo), h = g.motion, x = r(a, h), b = Pe(), C = Pe();
    function k() {
      try {
        return b.current instanceof HTMLElement ? b.current : di(C.current);
      } catch {
        return null;
      }
    }
    var y = nl(x, s, k, a), E = A(y, 4), S = E[0], w = E[1], $ = E[2], L = E[3], V = p.useRef(L);
    L && (V.current = !0);
    var te = p.useCallback(function(N) {
      b.current = N, xa(o, N);
    }, [o]), P, j = M(M({}, m), {}, {
      visible: s
    });
    if (!f)
      P = null;
    else if (S === Ce)
      L ? P = f(M({}, j), te) : !c && V.current && v ? P = f(M(M({}, j), {}, {
        className: v
      }), te) : u || !c && !v ? P = f(M(M({}, j), {}, {
        style: {
          display: "none"
        }
      }), te) : P = null;
    else {
      var H;
      w === le ? H = "prepare" : Po(w) ? H = "active" : w === We && (H = "start");
      var D = ma(d, "".concat(S, "-").concat(H));
      P = f(M(M({}, j), {}, {
        className: Vc(ma(d, S), T(T({}, D, D && H), d, typeof d == "string")),
        style: $
      }), te);
    }
    if (/* @__PURE__ */ p.isValidElement(P) && Ea(P)) {
      var K = bi(P);
      K || (P = /* @__PURE__ */ p.cloneElement(P, {
        ref: te
      }));
    }
    return /* @__PURE__ */ p.createElement(Xc, {
      ref: C
    }, P);
  });
  return n.displayName = "CSSMotion", n;
}
const ol = al(To);
var fn = "add", dn = "keep", hn = "remove", Sr = "removed";
function il(e) {
  var t;
  return e && z(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, M(M({}, t), {}, {
    key: String(t.key)
  });
}
function vn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(il);
}
function sl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, o = vn(e), i = vn(t);
  o.forEach(function(c) {
    for (var u = !1, f = n; f < a; f += 1) {
      var d = i[f];
      if (d.key === c.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(v) {
          return M(M({}, v), {}, {
            status: fn
          });
        })), n = f), r.push(M(M({}, d), {}, {
          status: dn
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(M(M({}, c), {}, {
      status: hn
    }));
  }), n < a && (r = r.concat(i.slice(n).map(function(c) {
    return M(M({}, c), {}, {
      status: fn
    });
  })));
  var s = {};
  r.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    r = r.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== c || d !== hn;
    }), r.forEach(function(u) {
      u.key === c && (u.status = dn);
    });
  }), r;
}
var cl = ["component", "children", "onVisibleChanged", "onAllRemoved"], ll = ["status"], ul = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function fl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ol, r = /* @__PURE__ */ (function(n) {
    _a(o, n);
    var a = ka(o);
    function o() {
      var i;
      pt(this, o);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(l)), T(_r(i), "state", {
        keyEntities: []
      }), T(_r(i), "removeKey", function(u) {
        i.setState(function(f) {
          var d = f.keyEntities.map(function(v) {
            return v.key !== u ? v : M(M({}, v), {}, {
              status: Sr
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = i.state.keyEntities, d = f.filter(function(v) {
            var m = v.status;
            return m !== Sr;
          }).length;
          d === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return mt(o, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, d = c.onVisibleChanged;
        c.onAllRemoved;
        var v = Gt(c, cl), m = u || p.Fragment, g = {};
        return ul.forEach(function(h) {
          g[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ p.createElement(m, v, l.map(function(h, x) {
          var b = h.status, C = Gt(h, ll), k = b === fn || b === dn;
          return /* @__PURE__ */ p.createElement(t, zt({}, g, {
            key: C.key,
            visible: k,
            eventProps: C,
            onVisibleChanged: function(E) {
              d?.(E, {
                key: C.key
              }), E || s.removeKey(C.key);
            }
          }), function(y, E) {
            return f(M(M({}, y), {}, {
              index: x
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, f = vn(c), d = sl(u, f);
        return {
          keyEntities: d.filter(function(v) {
            var m = u.find(function(g) {
              var h = g.key;
              return v.key === h;
            });
            return !(m && m.status === Sr && v.status === hn);
          })
        };
      }
    }]), o;
  })(p.Component);
  return T(r, "defaultProps", {
    component: "div"
  }), r;
}
const Ul = fl(To);
function dl(e) {
  const {
    children: t
  } = e, [, r] = So(), {
    motion: n
  } = r, a = p.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ p.createElement(Gc, {
    motion: n
  }, t) : t;
}
const Oo = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Jt("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Oo.displayName = "PropWarning");
const hl = process.env.NODE_ENV !== "production" ? Oo : () => null;
var vl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let gn = !1;
process.env.NODE_ENV;
const gl = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], pl = "ant";
let Ro;
function ml() {
  return Ro || pl;
}
function bl(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const yl = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (Ro = t), n && bl(n) && (process.env.NODE_ENV !== "production" && er(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), kc(ml(), n));
}, Sl = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    form: i,
    locale: s,
    componentSize: l,
    direction: c,
    space: u,
    virtual: f,
    dropdownMatchSelectWidth: d,
    popupMatchSelectWidth: v,
    popupOverflow: m,
    legacyLocale: g,
    parentContext: h,
    iconPrefixCls: x,
    theme: b,
    componentDisabled: C,
    segmented: k,
    statistic: y,
    spin: E,
    calendar: S,
    carousel: w,
    cascader: $,
    collapse: L,
    typography: V,
    checkbox: te,
    descriptions: P,
    divider: j,
    drawer: H,
    skeleton: D,
    steps: K,
    image: N,
    layout: U,
    list: W,
    mentions: F,
    modal: B,
    progress: I,
    result: he,
    slider: je,
    breadcrumb: Le,
    menu: Ie,
    pagination: tt,
    input: rt,
    textArea: nt,
    empty: He,
    badge: be,
    radio: at,
    rate: _,
    switch: Me,
    transfer: re,
    avatar: De,
    message: bt,
    tag: ot,
    table: it,
    card: ee,
    tabs: Y,
    timeline: ie,
    timePicker: $e,
    upload: Ne,
    notification: jo,
    tree: Lo,
    colorPicker: Io,
    datePicker: Ho,
    rangePicker: Do,
    flex: $o,
    wave: No,
    dropdown: Fo,
    warning: Bo,
    tour: zo,
    floatButtonGroup: Vo,
    variant: Wo,
    inputNumber: Go,
    treeSelect: Xo
  } = e, Pn = p.useCallback((G, Z) => {
    const {
      prefixCls: ve
    } = e;
    if (Z)
      return Z;
    const ge = ve || h.getPrefixCls("");
    return G ? `${ge}-${G}` : ge;
  }, [h.getPrefixCls, e.prefixCls]), yt = x || h.iconPrefixCls || mo, St = r || h.csp;
  Hc(yt, St);
  const xt = Fc(b, h.theme, {
    prefixCls: Pn("")
  });
  process.env.NODE_ENV !== "production" && (gn = gn || !!xt);
  const nr = {
    csp: St,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: o,
    locale: s || g,
    direction: c,
    space: u,
    virtual: f,
    popupMatchSelectWidth: v ?? d,
    popupOverflow: m,
    getPrefixCls: Pn,
    iconPrefixCls: yt,
    theme: xt,
    segmented: k,
    statistic: y,
    spin: E,
    calendar: S,
    carousel: w,
    cascader: $,
    collapse: L,
    typography: V,
    checkbox: te,
    descriptions: P,
    divider: j,
    drawer: H,
    skeleton: D,
    steps: K,
    image: N,
    input: rt,
    textArea: nt,
    layout: U,
    list: W,
    mentions: F,
    modal: B,
    progress: I,
    result: he,
    slider: je,
    breadcrumb: Le,
    menu: Ie,
    pagination: tt,
    empty: He,
    badge: be,
    radio: at,
    rate: _,
    switch: Me,
    transfer: re,
    avatar: De,
    message: bt,
    tag: ot,
    table: it,
    card: ee,
    tabs: Y,
    timeline: ie,
    timePicker: $e,
    upload: Ne,
    notification: jo,
    tree: Lo,
    colorPicker: Io,
    datePicker: Ho,
    rangePicker: Do,
    flex: $o,
    wave: No,
    dropdown: Fo,
    warning: Bo,
    tour: zo,
    floatButtonGroup: Vo,
    variant: Wo,
    inputNumber: Go,
    treeSelect: Xo
  };
  process.env.NODE_ENV !== "production" && Jt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Fe = Object.assign({}, h);
  Object.keys(nr).forEach((G) => {
    nr[G] !== void 0 && (Fe[G] = nr[G]);
  }), gl.forEach((G) => {
    const Z = e[G];
    Z && (Fe[G] = Z);
  }), typeof n < "u" && (Fe.button = Object.assign({
    autoInsertSpace: n
  }, Fe.button));
  const Be = Yt(() => Fe, Fe, (G, Z) => {
    const ve = Object.keys(G), ge = Object.keys(Z);
    return ve.length !== ge.length || ve.some((Et) => G[Et] !== Z[Et]);
  }), Uo = p.useMemo(() => ({
    prefixCls: yt,
    csp: St
  }), [yt, St]);
  let Q = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(hl, {
    dropdownMatchSelectWidth: d
  }), t);
  const On = p.useMemo(() => {
    var G, Z, ve, ge;
    return Vs(((G = tr.Form) === null || G === void 0 ? void 0 : G.defaultValidateMessages) || {}, ((ve = (Z = Be.locale) === null || Z === void 0 ? void 0 : Z.Form) === null || ve === void 0 ? void 0 : ve.defaultValidateMessages) || {}, ((ge = Be.form) === null || ge === void 0 ? void 0 : ge.validateMessages) || {}, i?.validateMessages || {});
  }, [Be, i?.validateMessages]);
  Object.keys(On).length > 0 && (Q = /* @__PURE__ */ p.createElement(Gs.Provider, {
    value: On
  }, Q)), s && (Q = /* @__PURE__ */ p.createElement(co, {
    locale: s,
    _ANT_MARK__: so
  }, Q)), Q = /* @__PURE__ */ p.createElement(Ns.Provider, {
    value: Uo
  }, Q), l && (Q = /* @__PURE__ */ p.createElement(Tc, {
    size: l
  }, Q)), Q = /* @__PURE__ */ p.createElement(dl, null, Q);
  const Yo = p.useMemo(() => {
    const G = xt || {}, {
      algorithm: Z,
      token: ve,
      components: ge,
      cssVar: Et
    } = G, qo = vl(G, ["algorithm", "token", "components", "cssVar"]), Rn = Z && (!Array.isArray(Z) || Z.length > 0) ? Mr(Z) : go, ar = {};
    Object.entries(ge || {}).forEach((Ko) => {
      let [Qo, Zo] = Ko;
      const ye = Object.assign({}, Zo);
      "algorithm" in ye && (ye.algorithm === !0 ? ye.theme = Rn : (Array.isArray(ye.algorithm) || typeof ye.algorithm == "function") && (ye.theme = Mr(ye.algorithm)), delete ye.algorithm), ar[Qo] = ye;
    });
    const jn = Object.assign(Object.assign({}, vt), ve);
    return Object.assign(Object.assign({}, qo), {
      theme: Rn,
      token: jn,
      components: ar,
      override: Object.assign({
        override: jn
      }, ar),
      cssVar: Et
    });
  }, [xt]);
  return b && (Q = /* @__PURE__ */ p.createElement(po.Provider, {
    value: Yo
  }, Q)), Be.warning && (Q = /* @__PURE__ */ p.createElement(ao.Provider, {
    value: Be.warning
  }, Q)), C !== void 0 && (Q = /* @__PURE__ */ p.createElement(wc, {
    disabled: C
  }, Q)), /* @__PURE__ */ p.createElement(rr.Provider, {
    value: Be
  }, Q);
}, et = (e) => {
  const t = p.useContext(rr), r = p.useContext(io);
  return /* @__PURE__ */ p.createElement(Sl, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
et.ConfigContext = rr;
et.SizeContext = gt;
et.config = yl;
et.useConfig = Mc;
Object.defineProperty(et, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && er(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), gt)
});
process.env.NODE_ENV !== "production" && (et.displayName = "ConfigProvider");
export {
  vr as $,
  Rs as A,
  zr as B,
  et as C,
  cn as D,
  en as E,
  Br as F,
  Jr as G,
  Vr as H,
  tn as I,
  Xt as J,
  Dr as K,
  qr as L,
  Il as M,
  Fr as N,
  Zr as O,
  Ut as P,
  an as Q,
  Nr as R,
  Ye as S,
  Ha as T,
  Qr as U,
  Gr as V,
  nn as W,
  Hr as X,
  Yr as Y,
  Hl as Z,
  zt as _,
  rr as a,
  Bc as a$,
  hr as a0,
  Wr as a1,
  rn as a2,
  Lr as a3,
  Xr as a4,
  Ir as a5,
  Ur as a6,
  $r as a7,
  Kr as a8,
  ne as a9,
  Gc as aA,
  z as aB,
  Vc as aC,
  T as aD,
  Gt as aE,
  _e as aF,
  me as aG,
  li as aH,
  Wt as aI,
  Ol as aJ,
  Fa as aK,
  mt as aL,
  pt as aM,
  _a as aN,
  yi as aO,
  Vt as aP,
  Ca as aQ,
  ka as aR,
  Jn as aS,
  xn as aT,
  wr as aU,
  Yt as aV,
  xa as aW,
  _r as aX,
  So as aY,
  di as aZ,
  kl as a_,
  Dl as aa,
  At as ab,
  $l as ac,
  vo as ad,
  la as ae,
  nc as af,
  ac as ag,
  sc as ah,
  Se as ai,
  on as aj,
  ic as ak,
  oe as al,
  ca as am,
  ia as an,
  sa as ao,
  rc as ap,
  oc as aq,
  uc as ar,
  jr as as,
  fr as at,
  Tl as au,
  Ea as av,
  wl as aw,
  ln as ax,
  Ze as ay,
  Ul as az,
  ol as b,
  gi as b0,
  Cl as b1,
  Lc as b2,
  Vl as b3,
  tr as b4,
  Xs as b5,
  yn as b6,
  _i as b7,
  Fs as b8,
  Nl as b9,
  ii as ba,
  bi as bb,
  io as bc,
  un as bd,
  Oc as be,
  Wl as bf,
  Hc as bg,
  Gl as bh,
  Rc as bi,
  Ns as bj,
  Oe as bk,
  pl as bl,
  gt as bm,
  gc as bn,
  _n as bo,
  Er as bp,
  Vs as bq,
  Hn as br,
  _l as c,
  Ic as d,
  mi as e,
  Jt as f,
  ri as g,
  Xl as h,
  M as i,
  A as j,
  os as k,
  Ya as l,
  Pl as m,
  Ml as n,
  Ia as o,
  Mr as p,
  jl as q,
  zl as r,
  Al as s,
  Bl as t,
  Ii as u,
  rs as v,
  Ll as w,
  Hi as x,
  Rl as y,
  ns as z
};
