const f = (i) => typeof i == "string", I = () => {
  let i, e;
  const t = new Promise((a, n) => {
    i = a, e = n;
  });
  return t.resolve = i, t.reject = e, t;
}, ie = (i) => i == null ? "" : "" + i, Te = (i, e, t) => {
  i.forEach((a) => {
    e[a] && (t[a] = e[a]);
  });
}, Le = /###/g, re = (i) => i && i.indexOf("###") > -1 ? i.replace(Le, ".") : i, oe = (i) => !i || f(i), V = (i, e, t) => {
  const a = f(e) ? e.split(".") : e;
  let n = 0;
  for (; n < a.length - 1; ) {
    if (oe(i)) return {};
    const r = re(a[n]);
    !i[r] && t && (i[r] = new t()), Object.prototype.hasOwnProperty.call(i, r) ? i = i[r] : i = {}, ++n;
  }
  return oe(i) ? {} : {
    obj: i,
    k: re(a[n])
  };
}, se = (i, e, t) => {
  const {
    obj: a,
    k: n
  } = V(i, e, Object);
  if (a !== void 0 || e.length === 1) {
    a[n] = t;
    return;
  }
  let r = e[e.length - 1], o = e.slice(0, e.length - 1), s = V(i, o, Object);
  for (; s.obj === void 0 && o.length; )
    r = `${o[o.length - 1]}.${r}`, o = o.slice(0, o.length - 1), s = V(i, o, Object), s && s.obj && typeof s.obj[`${s.k}.${r}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${r}`] = t;
}, Re = (i, e, t, a) => {
  const {
    obj: n,
    k: r
  } = V(i, e, Object);
  n[r] = n[r] || [], n[r].push(t);
}, H = (i, e) => {
  const {
    obj: t,
    k: a
  } = V(i, e);
  if (t)
    return t[a];
}, Oe = (i, e, t) => {
  const a = H(i, t);
  return a !== void 0 ? a : H(e, t);
}, Ce = (i, e, t) => {
  for (const a in e)
    a !== "__proto__" && a !== "constructor" && (a in i ? f(i[a]) || i[a] instanceof String || f(e[a]) || e[a] instanceof String ? t && (i[a] = e[a]) : Ce(i[a], e[a], t) : i[a] = e[a]);
  return i;
}, E = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Fe = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Ie = (i) => f(i) ? i.replace(/[&<>"'\/]/g, (e) => Fe[e]) : i;
class Me {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const a = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, a), this.regExpQueue.push(e), a;
  }
}
const Ue = [" ", ",", "?", "!", ";"], Ve = new Me(20), Be = (i, e, t) => {
  e = e || "", t = t || "";
  const a = Ue.filter((o) => e.indexOf(o) < 0 && t.indexOf(o) < 0);
  if (a.length === 0) return !0;
  const n = Ve.getRegExp(`(${a.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let r = !n.test(i);
  if (!r) {
    const o = i.indexOf(t);
    o > 0 && !n.test(i.substring(0, o)) && (r = !0);
  }
  return r;
}, Z = function(i, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!i) return;
  if (i[e]) return i[e];
  const a = e.split(t);
  let n = i;
  for (let r = 0; r < a.length; ) {
    if (!n || typeof n != "object")
      return;
    let o, s = "";
    for (let l = r; l < a.length; ++l)
      if (l !== r && (s += t), s += a[l], o = n[s], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < a.length - 1)
          continue;
        r += l - r + 1;
        break;
      }
    n = o;
  }
  return n;
}, G = (i) => i && i.replace("_", "-"), $e = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, e) {
    console && console[i] && console[i].apply(console, e);
  }
};
class z {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || $e, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, a, n) {
    return n && !this.debug ? null : (f(e[0]) && (e[0] = `${a}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new z(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new z(this.logger, e);
  }
}
var P = new z();
class J {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((a) => {
      this.observers[a] || (this.observers[a] = /* @__PURE__ */ new Map());
      const n = this.observers[a].get(t) || 0;
      this.observers[a].set(t, n + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      a[n - 1] = arguments[n];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [s, l] = o;
      for (let c = 0; c < l; c++)
        s(...a);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [s, l] = o;
      for (let c = 0; c < l; c++)
        s.apply(s, [e, ...a]);
    });
  }
}
class le extends J {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, o = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], a && (Array.isArray(a) ? s.push(...a) : f(a) && r ? s.push(...a.split(r)) : s.push(a)));
    const l = H(this.data, s);
    return !l && !t && !a && e.indexOf(".") > -1 && (e = s[0], t = s[1], a = s.slice(2).join(".")), l || !o || !f(a) ? l : Z(this.data && this.data[e] && this.data[e][t], a, r);
  }
  addResource(e, t, a, n) {
    let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let s = [e, t];
    a && (s = s.concat(o ? a.split(o) : a)), e.indexOf(".") > -1 && (s = e.split("."), n = t, t = s[1]), this.addNamespaces(t), se(this.data, s, n), r.silent || this.emit("added", e, t, a, n);
  }
  addResources(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const r in a)
      (f(a[r]) || Array.isArray(a[r])) && this.addResource(e, t, r, a[r], {
        silent: !0
      });
    n.silent || this.emit("added", e, t, a);
  }
  addResourceBundle(e, t, a, n, r) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, s = [e, t];
    e.indexOf(".") > -1 && (s = e.split("."), n = a, a = t, t = s[1]), this.addNamespaces(t);
    let l = H(this.data, s) || {};
    o.skipCopy || (a = JSON.parse(JSON.stringify(a))), n ? Ce(l, a, r) : l = {
      ...l,
      ...a
    }, se(this.data, s, l), o.silent || this.emit("added", e, t, a);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, t)
    } : this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((n) => t[n] && Object.keys(t[n]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var we = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, a, n) {
    return i.forEach((r) => {
      this.processors[r] && (e = this.processors[r].process(e, t, a, n));
    }), e;
  }
};
const ue = {};
class K extends J {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Te(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = P.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const a = this.resolve(e, t);
    return a && a.res !== void 0;
  }
  extractFromKey(e, t) {
    let a = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const o = a && e.indexOf(a) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Be(e, a, n);
    if (o && !s) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: f(r) ? [r] : r
        };
      const c = e.split(a);
      (a !== n || a === n && this.options.ns.indexOf(c[0]) > -1) && (r = c.shift()), e = c.join(n);
    }
    return {
      key: e,
      namespaces: f(r) ? [r] : r
    };
  }
  translate(e, t, a) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const n = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: s
    } = this.extractFromKey(e[e.length - 1], t), l = s[s.length - 1], c = t.lng || this.language, d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (d) {
        const S = t.nsSeparator || this.options.nsSeparator;
        return n ? {
          res: `${l}${S}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(t)
        } : `${l}${S}${o}`;
      }
      return n ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(t)
      } : o;
    }
    const g = this.resolve(e, t);
    let u = g && g.res;
    const p = g && g.usedKey || o, m = g && g.exactUsedKey || o, y = Object.prototype.toString.apply(u), h = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, v = !this.i18nFormat || this.i18nFormat.handleAsObject, T = !f(u) && typeof u != "boolean" && typeof u != "number";
    if (v && u && T && h.indexOf(y) < 0 && !(f(w) && Array.isArray(u))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, u, {
          ...t,
          ns: s
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return n ? (g.res = S, g.usedParams = this.getUsedParamsDetails(t), g) : S;
      }
      if (r) {
        const S = Array.isArray(u), x = S ? [] : {}, A = S ? m : p;
        for (const C in u)
          if (Object.prototype.hasOwnProperty.call(u, C)) {
            const _ = `${A}${r}${C}`;
            x[C] = this.translate(_, {
              ...t,
              joinArrays: !1,
              ns: s
            }), x[C] === _ && (x[C] = u[C]);
          }
        u = x;
      }
    } else if (v && f(w) && Array.isArray(u))
      u = u.join(w), u && (u = this.extendTranslation(u, e, t, a));
    else {
      let S = !1, x = !1;
      const A = t.count !== void 0 && !f(t.count), C = K.hasDefaultValue(t), _ = A ? this.pluralResolver.getSuffix(c, t.count, t) : "", Ee = t.ordinal && A ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", te = A && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), L = te && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${_}`] || t[`defaultValue${Ee}`] || t.defaultValue;
      !this.isValidLookup(u) && C && (S = !0, u = L), this.isValidLookup(u) || (x = !0, u = o);
      const ke = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : u, R = C && L !== u && this.options.updateMissing;
      if (x || S || R) {
        if (this.logger.log(R ? "updateKey" : "missingKey", c, l, o, R ? L : u), r) {
          const D = this.resolve(o, {
            ...t,
            keySeparator: !1
          });
          D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let O = [];
        const q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && q && q[0])
          for (let D = 0; D < q.length; D++)
            O.push(q[D]);
        else this.options.saveMissingTo === "all" ? O = this.languageUtils.toResolveHierarchy(t.lng || this.language) : O.push(t.lng || this.language);
        const ae = (D, N, F) => {
          const ne = C && F !== u ? F : ke;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, l, N, ne, R, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(D, l, N, ne, R, t), this.emit("missingKey", D, l, N, u);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && A ? O.forEach((D) => {
          const N = this.pluralResolver.getSuffixes(D, t);
          te && t[`defaultValue${this.options.pluralSeparator}zero`] && N.indexOf(`${this.options.pluralSeparator}zero`) < 0 && N.push(`${this.options.pluralSeparator}zero`), N.forEach((F) => {
            ae([D], o + F, t[`defaultValue${F}`] || L);
          });
        }) : ae(O, o, L));
      }
      u = this.extendTranslation(u, e, t, g, a), x && u === o && this.options.appendNamespaceToMissingKey && (u = `${l}:${o}`), (x || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? u = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, S ? u : void 0) : u = this.options.parseMissingKeyHandler(u));
    }
    return n ? (g.res = u, g.usedParams = this.getUsedParamsDetails(t), g) : u;
  }
  extendTranslation(e, t, a, n, r) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...a
      }, a.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
        resolved: n
      });
    else if (!a.skipInterpolation) {
      a.interpolation && this.interpolator.init({
        ...a,
        interpolation: {
          ...this.options.interpolation,
          ...a.interpolation
        }
      });
      const c = f(e) && (a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (c) {
        const u = e.match(this.interpolator.nestingRegexp);
        d = u && u.length;
      }
      let g = a.replace && !f(a.replace) ? a.replace : a;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), e = this.interpolator.interpolate(e, g, a.lng || this.language || n.usedLng, a), c) {
        const u = e.match(this.interpolator.nestingRegexp), p = u && u.length;
        d < p && (a.nest = !1);
      }
      !a.lng && this.options.compatibilityAPI !== "v1" && n && n.res && (a.lng = this.language || n.usedLng), a.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var u = arguments.length, p = new Array(u), m = 0; m < u; m++)
          p[m] = arguments[m];
        return r && r[0] === p[0] && !a.context ? (o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`), null) : o.translate(...p, t);
      }, a)), a.interpolation && this.interpolator.reset();
    }
    const s = a.postProcess || this.options.postProcess, l = f(s) ? [s] : s;
    return e != null && l && l.length && a.applyPostProcessor !== !1 && (e = we.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...n,
        usedParams: this.getUsedParamsDetails(a)
      },
      ...a
    } : a, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a, n, r, o, s;
    return f(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(a)) return;
      const c = this.extractFromKey(l, t), d = c.key;
      n = d;
      let g = c.namespaces;
      this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
      const u = t.count !== void 0 && !f(t.count), p = u && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = t.context !== void 0 && (f(t.context) || typeof t.context == "number") && t.context !== "", y = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      g.forEach((h) => {
        this.isValidLookup(a) || (s = h, !ue[`${y[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (ue[`${y[0]}-${h}`] = !0, this.logger.warn(`key "${n}" for languages "${y.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((w) => {
          if (this.isValidLookup(a)) return;
          o = w;
          const v = [d];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(v, d, w, h, t);
          else {
            let S;
            u && (S = this.pluralResolver.getSuffix(w, t.count, t));
            const x = `${this.options.pluralSeparator}zero`, A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (u && (v.push(d + S), t.ordinal && S.indexOf(A) === 0 && v.push(d + S.replace(A, this.options.pluralSeparator)), p && v.push(d + x)), m) {
              const C = `${d}${this.options.contextSeparator}${t.context}`;
              v.push(C), u && (v.push(C + S), t.ordinal && S.indexOf(A) === 0 && v.push(C + S.replace(A, this.options.pluralSeparator)), p && v.push(C + x));
            }
          }
          let T;
          for (; T = v.pop(); )
            this.isValidLookup(a) || (r = T, a = this.getResource(w, h, T, t));
        }));
      });
    }), {
      res: a,
      usedKey: n,
      exactUsedKey: r,
      usedLng: o,
      usedNS: s
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, a, n) : this.resourceStore.getResource(e, t, a, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], a = e.replace && !f(e.replace);
    let n = a ? e.replace : e;
    if (a && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
      ...this.options.interpolation.defaultVariables,
      ...n
    }), !a) {
      n = {
        ...n
      };
      for (const r of t)
        delete n[r];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const a in e)
      if (Object.prototype.hasOwnProperty.call(e, a) && t === a.substring(0, t.length) && e[a] !== void 0)
        return !0;
    return !1;
  }
}
const Q = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class ce {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = G(e), !e || e.indexOf("-") < 0) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = G(e), !e || e.indexOf("-") < 0) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (f(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let n = Intl.getCanonicalLocales(e)[0];
          if (n && this.options.lowerCaseLng && (n = n.toLowerCase()), n) return n;
        } catch {
        }
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let a = e.split("-");
      return this.options.lowerCaseLng ? a = a.map((n) => n.toLowerCase()) : a.length === 2 ? (a[0] = a[0].toLowerCase(), a[1] = a[1].toUpperCase(), t.indexOf(a[1].toLowerCase()) > -1 && (a[1] = Q(a[1].toLowerCase()))) : a.length === 3 && (a[0] = a[0].toLowerCase(), a[1].length === 2 && (a[1] = a[1].toUpperCase()), a[0] !== "sgn" && a[2].length === 2 && (a[2] = a[2].toUpperCase()), t.indexOf(a[1].toLowerCase()) > -1 && (a[1] = Q(a[1].toLowerCase())), t.indexOf(a[2].toLowerCase()) > -1 && (a[2] = Q(a[2].toLowerCase()))), a.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((a) => {
      if (t) return;
      const n = this.formatLanguageCode(a);
      (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
    }), !t && this.options.supportedLngs && e.forEach((a) => {
      if (t) return;
      const n = this.getLanguagePartFromCode(a);
      if (this.isSupportedCode(n)) return t = n;
      t = this.options.supportedLngs.find((r) => {
        if (r === n) return r;
        if (!(r.indexOf("-") < 0 && n.indexOf("-") < 0) && (r.indexOf("-") > 0 && n.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === n || r.indexOf(n) === 0 && n.length > 1))
          return r;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), f(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let a = e[t];
    return a || (a = e[this.getScriptPartFromCode(t)]), a || (a = e[this.formatLanguageCode(t)]), a || (a = e[this.getLanguagePartFromCode(t)]), a || (a = e.default), a || [];
  }
  toResolveHierarchy(e, t) {
    const a = this.getFallbackCodes(t || this.options.fallbackLng || [], e), n = [], r = (o) => {
      o && (this.isSupportedCode(o) ? n.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return f(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : f(e) && r(this.formatLanguageCode(e)), a.forEach((o) => {
      n.indexOf(o) < 0 && r(this.formatLanguageCode(o));
    }), n;
  }
}
let _e = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], qe = {
  1: (i) => +(i > 1),
  2: (i) => +(i != 1),
  3: (i) => 0,
  4: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  5: (i) => i == 0 ? 0 : i == 1 ? 1 : i == 2 ? 2 : i % 100 >= 3 && i % 100 <= 10 ? 3 : i % 100 >= 11 ? 4 : 5,
  6: (i) => i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2,
  7: (i) => i == 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  8: (i) => i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3,
  9: (i) => +(i >= 2),
  10: (i) => i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4,
  11: (i) => i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3,
  12: (i) => +(i % 10 != 1 || i % 100 == 11),
  13: (i) => +(i !== 0),
  14: (i) => i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3,
  15: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2,
  16: (i) => i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2,
  17: (i) => i == 1 || i % 10 == 1 && i % 100 != 11 ? 0 : 1,
  18: (i) => i == 0 ? 0 : i == 1 ? 1 : 2,
  19: (i) => i == 1 ? 0 : i == 0 || i % 100 > 1 && i % 100 < 11 ? 1 : i % 100 > 10 && i % 100 < 20 ? 2 : 3,
  20: (i) => i == 1 ? 0 : i == 0 || i % 100 > 0 && i % 100 < 20 ? 1 : 2,
  21: (i) => i % 100 == 1 ? 1 : i % 100 == 2 ? 2 : i % 100 == 3 || i % 100 == 4 ? 3 : 0,
  22: (i) => i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3
};
const We = ["v1", "v2", "v3"], je = ["v4"], de = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, He = () => {
  const i = {};
  return _e.forEach((e) => {
    e.lngs.forEach((t) => {
      i[t] = {
        numbers: e.nr,
        plurals: qe[e.fc]
      };
    });
  }), i;
};
class Ge {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = P.create("pluralResolver"), (!this.options.compatibilityJSON || je.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = He(), this.pluralRulesCache = {};
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const a = G(e === "dev" ? "en" : e), n = t.ordinal ? "ordinal" : "cardinal", r = JSON.stringify({
        cleanedCode: a,
        type: n
      });
      if (r in this.pluralRulesCache)
        return this.pluralRulesCache[r];
      let o;
      try {
        o = new Intl.PluralRules(a, {
          type: n
        });
      } catch {
        if (!e.match(/-|_/)) return;
        const l = this.languageUtils.getLanguagePartFromCode(e);
        o = this.getRule(l, t);
      }
      return this.pluralRulesCache[r] = o, o;
    }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = this.getRule(e, t);
    return this.shouldUseIntlApi() ? a && a.resolvedOptions().pluralCategories.length > 1 : a && a.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, a).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = this.getRule(e, t);
    return a ? this.shouldUseIntlApi() ? a.resolvedOptions().pluralCategories.sort((n, r) => de[n] - de[r]).map((n) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${n}`) : a.numbers.map((n) => this.getSuffix(e, n, t)) : [];
  }
  getSuffix(e, t) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, a);
    return n ? this.shouldUseIntlApi() ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${n.select(t)}` : this.getSuffixRetroCompatible(n, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const a = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let n = e.numbers[a];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (n === 2 ? n = "plural" : n === 1 && (n = ""));
    const r = () => this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
    return this.options.compatibilityJSON === "v1" ? n === 1 ? "" : typeof n == "number" ? `_plural_${n.toString()}` : r() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? r() : this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
  }
  shouldUseIntlApi() {
    return !We.includes(this.options.compatibilityJSON);
  }
}
const ge = function(i, e, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, r = Oe(i, e, t);
  return !r && n && f(t) && (r = Z(i, t, a), r === void 0 && (r = Z(e, t, a))), r;
}, Y = (i) => i.replace(/\$/g, "$$$$");
class ze {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = P.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: a,
      useRawValueToEscape: n,
      prefix: r,
      prefixEscaped: o,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: d,
      unescapePrefix: g,
      nestingPrefix: u,
      nestingPrefixEscaped: p,
      nestingSuffix: m,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: h,
      maxReplaces: w,
      alwaysFormat: v
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Ie, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = r ? E(r) : o || "{{", this.suffix = s ? E(s) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = d ? "" : g || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = u ? E(u) : p || E("$t("), this.nestingSuffix = m ? E(m) : y || E(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = v !== void 0 ? v : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, a) => t && t.source === a ? (t.lastIndex = 0, t) : new RegExp(a, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, a, n) {
    let r, o, s;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const w = ge(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, a, {
          ...n,
          ...t,
          interpolationkey: p
        }) : w;
      }
      const m = p.split(this.formatSeparator), y = m.shift().trim(), h = m.join(this.formatSeparator).trim();
      return this.format(ge(t, l, y, this.options.keySeparator, this.options.ignoreJSONStructure), h, a, {
        ...n,
        ...t,
        interpolationkey: y
      });
    };
    this.resetRegExp();
    const d = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler, g = n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => Y(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? Y(this.escape(p)) : Y(p)
    }].forEach((p) => {
      for (s = 0; r = p.regex.exec(e); ) {
        const m = r[1].trim();
        if (o = c(m), o === void 0)
          if (typeof d == "function") {
            const h = d(e, r, n);
            o = f(h) ? h : "";
          } else if (n && Object.prototype.hasOwnProperty.call(n, m))
            o = "";
          else if (g) {
            o = r[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), o = "";
        else !f(o) && !this.useRawValueToEscape && (o = ie(o));
        const y = p.safeValue(o);
        if (e = e.replace(r[0], y), g ? (p.regex.lastIndex += o.length, p.regex.lastIndex -= r[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, r, o;
    const s = (l, c) => {
      const d = this.nestingOptionsSeparator;
      if (l.indexOf(d) < 0) return l;
      const g = l.split(new RegExp(`${d}[ ]*{`));
      let u = `{${g[1]}`;
      l = g[0], u = this.interpolate(u, o);
      const p = u.match(/'/g), m = u.match(/"/g);
      (p && p.length % 2 === 0 && !m || m.length % 2 !== 0) && (u = u.replace(/'/g, '"'));
      try {
        o = JSON.parse(u), c && (o = {
          ...c,
          ...o
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${d}${u}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; n = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...a
      }, o = o.replace && !f(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let c = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const d = n[1].split(this.formatSeparator).map((g) => g.trim());
        n[1] = d.shift(), l = d, c = !0;
      }
      if (r = t(s.call(this, n[1].trim(), o), o), r && n[0] === e && !f(r)) return r;
      f(r) || (r = ie(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), c && (r = l.reduce((d, g) => this.format(d, g, a.lng, {
        ...a,
        interpolationkey: n[1].trim()
      }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ke = (i) => {
  let e = i.toLowerCase().trim();
  const t = {};
  if (i.indexOf("(") > -1) {
    const a = i.split("(");
    e = a[0].toLowerCase().trim();
    const n = a[1].substring(0, a[1].length - 1);
    e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach((o) => {
      if (o) {
        const [s, ...l] = o.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), d = s.trim();
        t[d] || (t[d] = c), c === "false" && (t[d] = !1), c === "true" && (t[d] = !0), isNaN(c) || (t[d] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, k = (i) => {
  const e = {};
  return (t, a, n) => {
    let r = n;
    n && n.interpolationkey && n.formatParams && n.formatParams[n.interpolationkey] && n[n.interpolationkey] && (r = {
      ...r,
      [n.interpolationkey]: void 0
    });
    const o = a + JSON.stringify(r);
    let s = e[o];
    return s || (s = i(G(a), n), e[o] = s), s(t);
  };
};
class Je {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = P.create("formatter"), this.options = e, this.formats = {
      number: k((t, a) => {
        const n = new Intl.NumberFormat(t, {
          ...a
        });
        return (r) => n.format(r);
      }),
      currency: k((t, a) => {
        const n = new Intl.NumberFormat(t, {
          ...a,
          style: "currency"
        });
        return (r) => n.format(r);
      }),
      datetime: k((t, a) => {
        const n = new Intl.DateTimeFormat(t, {
          ...a
        });
        return (r) => n.format(r);
      }),
      relativetime: k((t, a) => {
        const n = new Intl.RelativeTimeFormat(t, {
          ...a
        });
        return (r) => n.format(r, a.range || "day");
      }),
      list: k((t, a) => {
        const n = new Intl.ListFormat(t, {
          ...a
        });
        return (r) => n.format(r);
      })
    }, this.init(e);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = t.interpolation.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = k(t);
  }
  format(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (r.length > 1 && r[0].indexOf("(") > 1 && r[0].indexOf(")") < 0 && r.find((s) => s.indexOf(")") > -1)) {
      const s = r.findIndex((l) => l.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, s)].join(this.formatSeparator);
    }
    return r.reduce((s, l) => {
      const {
        formatName: c,
        formatOptions: d
      } = Ke(l);
      if (this.formats[c]) {
        let g = s;
        try {
          const u = n && n.formatParams && n.formatParams[n.interpolationkey] || {}, p = u.locale || u.lng || n.locale || n.lng || a;
          g = this.formats[c](s, p, {
            ...d,
            ...n,
            ...u
          });
        } catch (u) {
          this.logger.warn(u);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return s;
    }, e);
  }
}
const Qe = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class Ye extends J {
  constructor(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = a, this.languageUtils = a.languageUtils, this.options = n, this.logger = P.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(a, n.backend, n);
  }
  queueLoad(e, t, a, n) {
    const r = {}, o = {}, s = {}, l = {};
    return e.forEach((c) => {
      let d = !0;
      t.forEach((g) => {
        const u = `${c}|${g}`;
        !a.reload && this.store.hasResourceBundle(c, g) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? o[u] === void 0 && (o[u] = !0) : (this.state[u] = 1, d = !1, o[u] === void 0 && (o[u] = !0), r[u] === void 0 && (r[u] = !0), l[g] === void 0 && (l[g] = !0)));
      }), d || (s[c] = !0);
    }), (Object.keys(r).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: n
    }), {
      toLoad: Object.keys(r),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, a) {
    const n = e.split("|"), r = n[0], o = n[1];
    t && this.emit("failedLoading", r, o, t), !t && a && this.store.addResourceBundle(r, o, a, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && a && (this.state[e] = 0);
    const s = {};
    this.queue.forEach((l) => {
      Re(l.loaded, [r], o), Qe(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        s[c] || (s[c] = {});
        const d = l.loaded[c];
        d.length && d.forEach((g) => {
          s[c][g] === void 0 && (s[c][g] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: a,
        tried: n,
        wait: r,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const s = (c, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const g = this.waitingReads.shift();
        this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
      }
      if (c && d && n < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, a, n + 1, r * 2, o);
        }, r);
        return;
      }
      o(c, d);
    }, l = this.backend[a].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == "function" ? c.then((d) => s(null, d)).catch(s) : s(null, c);
      } catch (c) {
        s(c);
      }
      return;
    }
    return l(e, t, s);
  }
  prepareLoading(e, t) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
    f(e) && (e = this.languageUtils.toResolveHierarchy(e)), f(t) && (t = [t]);
    const r = this.queueLoad(e, t, a, n);
    if (!r.toLoad.length)
      return r.pending.length || n(), null;
    r.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, t, a) {
    this.prepareLoading(e, t, {}, a);
  }
  reload(e, t, a) {
    this.prepareLoading(e, t, {
      reload: !0
    }, a);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const a = e.split("|"), n = a[0], r = a[1];
    this.read(n, r, "read", void 0, void 0, (o, s) => {
      o && this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`, o), !o && s && this.logger.log(`${t}loaded namespace ${r} for language ${n}`, s), this.loaded(e, o, s);
    });
  }
  saveMissing(e, t, a, n, r) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${a}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: r
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let d;
            c.length === 5 ? d = c(e, t, a, n, l) : d = c(e, t, a, n), d && typeof d.then == "function" ? d.then((g) => s(null, g)).catch(s) : s(null, d);
          } catch (d) {
            s(d);
          }
        else
          c(e, t, a, n, s, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, a, n);
    }
  }
}
const pe = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (i) => {
    let e = {};
    if (typeof i[1] == "object" && (e = i[1]), f(i[1]) && (e.defaultValue = i[1]), f(i[2]) && (e.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const t = i[3] || i[2];
      Object.keys(t).forEach((a) => {
        e[a] = t[a];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), fe = (i) => (f(i.ns) && (i.ns = [i.ns]), f(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), f(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i), W = () => {
}, Ze = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
};
class B extends J {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = fe(e), this.services = {}, this.logger = P, this.modules = {
      external: []
    }, Ze(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (a = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (f(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = pe();
    this.options = {
      ...n,
      ...this.options,
      ...fe(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? P.init(r(this.modules.logger), this.options) : P.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = Je);
      const g = new ce(this.options);
      this.store = new le(this.options.resources, this.options);
      const u = this.services;
      u.logger = P, u.resourceStore = this.store, u.languageUtils = g, u.pluralResolver = new Ge(g, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), d && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (u.formatter = r(d), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new ze(this.options), u.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, u.backendConnector = new Ye(r(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function(p) {
        for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          y[h - 1] = arguments[h];
        e.emit(p, ...y);
      }), this.modules.languageDetector && (u.languageDetector = r(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = r(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new K(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, y = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          y[h - 1] = arguments[h];
        e.emit(p, ...y);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, a || (a = W), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = function() {
        return e.store[d](...arguments), e;
      };
    });
    const l = I(), c = () => {
      const d = (g, u) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(u), a(g, u);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(e) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const n = f(e) ? e : this.language;
    if (typeof e == "function" && (a = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (n && n.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return a();
      const r = [], o = (s) => {
        if (!s || s === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((c) => {
          c !== "cimode" && r.indexOf(c) < 0 && r.push(c);
        });
      };
      n ? o(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((s) => o(s)), this.services.backendConnector.load(r, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(s);
      });
    } else
      a(null);
  }
  reloadResources(e, t, a) {
    const n = I();
    return typeof e == "function" && (a = e, e = void 0), typeof t == "function" && (a = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), a || (a = W), this.services.backendConnector.reload(e, t, (r) => {
      n.resolve(), a(r);
    }), n;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && we.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const a = this.languages[t];
        if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
          this.resolvedLanguage = a;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var a = this;
    this.isLanguageChangingTo = e;
    const n = I();
    this.emit("languageChanging", e);
    const r = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? (r(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
        return a.t(...arguments);
      }), t && t(l, function() {
        return a.t(...arguments);
      });
    }, s = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const c = f(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || r(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (d) => {
        o(d, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), n;
  }
  getFixedT(e, t, a) {
    var n = this;
    const r = function(o, s) {
      let l;
      if (typeof s != "object") {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), g = 2; g < c; g++)
          d[g - 2] = arguments[g];
        l = n.options.overloadTranslationOptionHandler([o, s].concat(d));
      } else
        l = {
          ...s
        };
      l.lng = l.lng || r.lng, l.lngs = l.lngs || r.lngs, l.ns = l.ns || r.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || a || r.keyPrefix);
      const u = n.options.keySeparator || ".";
      let p;
      return l.keyPrefix && Array.isArray(o) ? p = o.map((m) => `${l.keyPrefix}${u}${m}`) : p = l.keyPrefix ? `${l.keyPrefix}${u}${o}` : o, n.t(p, l);
    };
    return f(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = a, r;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const a = t.lng || this.resolvedLanguage || this.languages[0], n = this.options ? this.options.fallbackLng : !1, r = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === "cimode") return !0;
    const o = (s, l) => {
      const c = this.services.backendConnector.state[`${s}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, o);
      if (s !== void 0) return s;
    }
    return !!(this.hasResourceBundle(a, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(a, e) && (!n || o(r, e)));
  }
  loadNamespaces(e, t) {
    const a = I();
    return this.options.ns ? (f(e) && (e = [e]), e.forEach((n) => {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }), this.loadResources((n) => {
      a.resolve(), t && t(n);
    }), a) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const a = I();
    f(e) && (e = [e]);
    const n = this.options.preload || [], r = e.filter((o) => n.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return r.length ? (this.options.preload = n.concat(r), this.loadResources((o) => {
      a.resolve(), t && t(o);
    }), a) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services && this.services.languageUtils || new ce(pe());
    return t.indexOf(a.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new B(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : W;
    const a = e.forkResourceStore;
    a && delete e.forkResourceStore;
    const n = {
      ...this.options,
      ...e,
      isClone: !0
    }, r = new B(n);
    return (e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      r[s] = this[s];
    }), r.services = {
      ...this.services
    }, r.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, a && (r.store = new le(this.store.data, n), r.services.resourceStore = r.store), r.translator = new K(r.services, n), r.translator.on("*", function(s) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
        c[d - 1] = arguments[d];
      r.emit(s, ...c);
    }), r.init(n, t), r.translator.options = n, r.translator.backendConnector.services.utils = {
      hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
    }, r;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const b = B.createInstance();
b.createInstance = B.createInstance;
b.createInstance;
b.dir;
b.init;
b.loadResources;
b.reloadResources;
b.use;
b.changeLanguage;
b.getFixedT;
const Nt = b.t;
b.exists;
b.setDefaultNamespace;
b.hasLoadedNamespace;
b.loadNamespaces;
b.loadLanguages;
function Xe(i, e) {
  if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function $(i) {
  "@babel/helpers - typeof";
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(i);
}
function et(i, e) {
  if ($(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(i, e);
    if ($(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
function tt(i) {
  var e = et(i, "string");
  return $(e) == "symbol" ? e : e + "";
}
function at(i, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(i, tt(a.key), a);
  }
}
function nt(i, e, t) {
  return e && at(i.prototype, e), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
var xe = [], it = xe.forEach, rt = xe.slice;
function ot(i) {
  return it.call(rt.call(arguments, 1), function(e) {
    if (e)
      for (var t in e)
        i[t] === void 0 && (i[t] = e[t]);
  }), i;
}
var me = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, st = function(e, t, a) {
  var n = a || {};
  n.path = n.path || "/";
  var r = encodeURIComponent(t), o = "".concat(e, "=").concat(r);
  if (n.maxAge > 0) {
    var s = n.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += "; Max-Age=".concat(Math.floor(s));
  }
  if (n.domain) {
    if (!me.test(n.domain))
      throw new TypeError("option domain is invalid");
    o += "; Domain=".concat(n.domain);
  }
  if (n.path) {
    if (!me.test(n.path))
      throw new TypeError("option path is invalid");
    o += "; Path=".concat(n.path);
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += "; Expires=".concat(n.expires.toUTCString());
  }
  if (n.httpOnly && (o += "; HttpOnly"), n.secure && (o += "; Secure"), n.sameSite) {
    var l = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
    switch (l) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return o;
}, he = {
  create: function(e, t, a, n) {
    var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    a && (r.expires = /* @__PURE__ */ new Date(), r.expires.setTime(r.expires.getTime() + a * 60 * 1e3)), n && (r.domain = n), document.cookie = st(e, encodeURIComponent(t), r);
  },
  read: function(e) {
    for (var t = "".concat(e, "="), a = document.cookie.split(";"), n = 0; n < a.length; n++) {
      for (var r = a[n]; r.charAt(0) === " "; ) r = r.substring(1, r.length);
      if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
    }
    return null;
  },
  remove: function(e) {
    this.create(e, "", -1);
  }
}, lt = {
  name: "cookie",
  lookup: function(e) {
    var t;
    if (e.lookupCookie && typeof document < "u") {
      var a = he.read(e.lookupCookie);
      a && (t = a);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupCookie && typeof document < "u" && he.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
  }
}, ut = {
  name: "querystring",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var a = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (a = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var n = a.substring(1), r = n.split("&"), o = 0; o < r.length; o++) {
        var s = r[o].indexOf("=");
        if (s > 0) {
          var l = r[o].substring(0, s);
          l === e.lookupQuerystring && (t = r[o].substring(s + 1));
        }
      }
    }
    return t;
  }
}, M = null, ye = function() {
  if (M !== null) return M;
  try {
    M = window !== "undefined" && window.localStorage !== null;
    var e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    M = !1;
  }
  return M;
}, ct = {
  name: "localStorage",
  lookup: function(e) {
    var t;
    if (e.lookupLocalStorage && ye()) {
      var a = window.localStorage.getItem(e.lookupLocalStorage);
      a && (t = a);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupLocalStorage && ye() && window.localStorage.setItem(t.lookupLocalStorage, e);
  }
}, U = null, Se = function() {
  if (U !== null) return U;
  try {
    U = window !== "undefined" && window.sessionStorage !== null;
    var e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    U = !1;
  }
  return U;
}, dt = {
  name: "sessionStorage",
  lookup: function(e) {
    var t;
    if (e.lookupSessionStorage && Se()) {
      var a = window.sessionStorage.getItem(e.lookupSessionStorage);
      a && (t = a);
    }
    return t;
  },
  cacheUserLanguage: function(e, t) {
    t.lookupSessionStorage && Se() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
  }
}, gt = {
  name: "navigator",
  lookup: function(e) {
    var t = [];
    if (typeof navigator < "u") {
      if (navigator.languages)
        for (var a = 0; a < navigator.languages.length; a++)
          t.push(navigator.languages[a]);
      navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
    }
    return t.length > 0 ? t : void 0;
  }
}, pt = {
  name: "htmlTag",
  lookup: function(e) {
    var t, a = e.htmlTag || (typeof document < "u" ? document.documentElement : null);
    return a && typeof a.getAttribute == "function" && (t = a.getAttribute("lang")), t;
  }
}, ft = {
  name: "path",
  lookup: function(e) {
    var t;
    if (typeof window < "u") {
      var a = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (a instanceof Array)
        if (typeof e.lookupFromPathIndex == "number") {
          if (typeof a[e.lookupFromPathIndex] != "string")
            return;
          t = a[e.lookupFromPathIndex].replace("/", "");
        } else
          t = a[0].replace("/", "");
    }
    return t;
  }
}, mt = {
  name: "subdomain",
  lookup: function(e) {
    var t = typeof e.lookupFromSubdomainIndex == "number" ? e.lookupFromSubdomainIndex + 1 : 1, a = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (a)
      return a[t];
  }
}, De = !1;
try {
  document.cookie, De = !0;
} catch {
}
var Ae = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
De || Ae.splice(1, 1);
function ht() {
  return {
    order: Ae,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: function(e) {
      return e;
    }
  };
}
var Pe = /* @__PURE__ */ (function() {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Xe(this, i), this.type = "languageDetector", this.detectors = {}, this.init(e, t);
  }
  return nt(i, [{
    key: "init",
    value: function(t) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = t || {
        languageUtils: {}
      }, this.options = ot(a, this.options || {}, ht()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(r) {
        return r.replace("-", "_");
      }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(lt), this.addDetector(ut), this.addDetector(ct), this.addDetector(dt), this.addDetector(gt), this.addDetector(pt), this.addDetector(ft), this.addDetector(mt);
    }
  }, {
    key: "addDetector",
    value: function(t) {
      return this.detectors[t.name] = t, this;
    }
  }, {
    key: "detect",
    value: function(t) {
      var a = this;
      t || (t = this.options.order);
      var n = [];
      return t.forEach(function(r) {
        if (a.detectors[r]) {
          var o = a.detectors[r].lookup(a.options);
          o && typeof o == "string" && (o = [o]), o && (n = n.concat(o));
        }
      }), n = n.map(function(r) {
        return a.options.convertDetectedLanguage(r);
      }), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function(t, a) {
      var n = this;
      a || (a = this.options.caches), a && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || a.forEach(function(r) {
        n.detectors[r] && n.detectors[r].cacheUserLanguage(t, n.options);
      }));
    }
  }]);
})();
Pe.type = "languageDetector";
const yt = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, St = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, bt = (i) => St[i], vt = (i) => i.replace(yt, bt);
let X = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: vt
};
function Ct() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  X = {
    ...X,
    ...i
  };
}
function Et() {
  return X;
}
let Ne;
function wt(i) {
  Ne = i;
}
function kt() {
  return Ne;
}
const xt = {
  type: "3rdParty",
  init(i) {
    Ct(i.options.react), wt(i);
  }
}, Dt = {
  common: {
    literal: {
      abrplus: "Abrplus",
      active: "Active",
      add: "Add",
      apply: "Apply",
      authentication: "Authentication",
      back: "Back",
      connectToWebApplication: "Connect to web application",
      copy: "Copy",
      createdDate: "Create date",
      createLeadFromType: "Create lead from type",
      mailbox: "Mailbox",
      postalCode: "Postal code",
      enterAddress: "Enter here your address",
      enterDescription: "Enter description here",
      description: "Description",
      disable: "Disable",
      domain: "Domain",
      email: "Email",
      filter: "Filter",
      filtring: "Filtering",
      generalSpecifications: "General Specifications",
      getExcel: "Get from Excel",
      guide: "Guide",
      howToConnect: "How to connect",
      lastName: "Last name",
      leadIdentityBase: "Identity base",
      name: "Name",
      nameProductCategory: "Product Category Name",
      next: "Next",
      pageTracking: "Page tracking",
      password: "Password",
      previous: "Previous",
      register: "Register",
      registerAbrplusAccount: "Register abrplus account",
      resendCode: "Resend code",
      save: "Save",
      searchGeocode: "Search city or neighborhood",
      addLocation: "Add location",
      location: "Location",
      search: "Search",
      singlePage: "Single page",
      status: "Status",
      submitAndConfirm: "Submit and confirm",
      users: "Users",
      applyFilter: "Apply filter",
      erase: "Erase",
      additionalSpecifications: "Additional specifications",
      moreDetails: "More details",
      required: "Required",
      details: "Details",
      cancel: "Cancel",
      confirm: "Confirm",
      displayCountPerPage: "Items per page",
      user: "User",
      deleteFilter: "Delete Filter",
      deletePriceList: "Delete pricelist",
      number: "Number",
      rial: "Rial",
      title: "Title",
      position: "Position",
      department: "Department",
      office: "Office",
      value: "Value",
      values: "Values",
      text: "Text",
      exit: "Exit",
      myProfile: "My profile",
      callHistory: "CallHistory",
      currentCalls: "CurrentCalls",
      callRecord: "Call record",
      autoCall: "Auto call",
      caller: "Caller",
      callCode: "Code",
      numberTo: "to",
      callPhoneNumber: "Phone Number",
      call: "Call",
      phone: "Phone",
      more: "More",
      endDate: "End date",
      startDate: "Start date",
      before: "Before",
      after: "After",
      within: "Within",
      on: "On",
      present: "Present",
      notPresent: "Not present",
      equalTo: "Equal to",
      notEqualTo: "Not equal to",
      between: "Between",
      greaterThan: "Greater than",
      greaterThanEqual: "Is greater than or equal to",
      lessThan: "Less than",
      lessThanEqual: "Is less than or equal to",
      notBetween: "Not between",
      notEmpty: "Is not empty",
      empty: "Is empty",
      startsWith: "Starts with",
      notStarts: "Not Starts with",
      endsWith: "Ends with",
      doesNotEndWith: "Does not end with",
      oneOf: "One of",
      noneOf: "None of",
      matchesRegex: "Matches regex",
      doesNotMatchRegex: "Does not match regex",
      contains: "Contains",
      doesNotContain: "Does not contains",
      is: "Is",
      reset: "Reset",
      selectOperator: "Select operator",
      new: "New",
      select: "Select...",
      to: "To",
      color: "Color",
      addInputTag: "Add a Tag",
      salesApp: "Sales",
      callApp: "Call",
      clubApp: "Club",
      tagManagement: "Tag Management",
      tagName: "Tag name",
      creator: "Creator",
      tags: "Tags",
      addToCategory: "Add To Category",
      tagsList: "Tags List",
      categoriesList: "Categories List",
      warning: "Warning",
      pricelistDetails: "Price List Details",
      openWebPhone: "Open Webphone",
      developerSettings: "Developer Settings",
      point: "Point",
      up: "Up",
      down: "Down",
      activity: "Activity (weekly, monthly, yearly)",
      sum: "Sum",
      events: "Events",
      userAccountLogin: "Login to account",
      username: "Username",
      passwordRequired: "Password is required",
      login: "Login",
      payamgostar: "Payamgostar",
      alovoip: "Alovoip",
      home: "Home",
      accessRate: "Access Rate",
      addAndEdit: "Add and Edit",
      addColumn: "Add column",
      addCountingUnitCategory: "Add counting unit category",
      addFilter: "Add filter",
      addGrouping: "Add grouping",
      addNewCategory: "Add new category",
      addNewInformation: "Add new information",
      addNewPermission: "Add new permission",
      addRow: "Add row",
      addStair: "Add Stair",
      addWidget: "Add Widget",
      advanced: "Advanced",
      advanceReport: "Advance report",
      toSave: "Save",
      afterDay: "{{day}} days later",
      agent: "Agent",
      aggregation: "Aggregation",
      all: "All",
      allAppointments: "All appointments",
      allCalls: "All calls",
      allEmail: "All email",
      allNotifications: "All notifications",
      allocated: "Allocated",
      AllocationDate: "Allocation Date",
      allocationStatus: "Allocation status",
      allPermissionsCount: "All Permissions Count",
      allProductsCount: "All products count",
      allSms: "All sms",
      allWork: "All work",
      alocationDate: "Alocation date",
      appearance: "Appearance",
      appearanceSetting: "Appearance setting",
      appointment: "Appointment",
      archive: "Archive",
      assignTo: "Assign to",
      automaticCall: "AutomaticCall",
      automaticRefreshEvery5Seconds: "Automatic refresh every 5 seconds",
      autoRefresh: "Auto Refresh every {{second}}",
      average: "Average",
      backLog: "Backlogs",
      bar: "Bar",
      baseCountUnit: "Base count unit",
      basic: "Basic",
      beforeDay: "{{day}} days ago",
      both: "Both",
      branch: "Branch",
      BusinessNote: "Business Note",
      buy: "Buy",
      buyable: "Buyable",
      buyingPrice: "Buying price",
      by: "By {{value}}",
      calculatedDuration: "Calculated duration is equal to {{days}} days",
      calculatedDurationWithYear: "Calculated duration is equal to {{year}} years and {{days}} days",
      calendarType: "Calendar type",
      callSettings: "Calls settings",
      callsInWindowCount: "Calls in window",
      card: "Card",
      categories: "Categories",
      categoriesCount: "{{subCategoryCount}} categories count",
      changePassword: "Change password",
      changeTelephonyPassword: "Change telephony password",
      chartType: "Chart type",
      classes: "Classes",
      classification: "Classification",
      className: "Class Name",
      closedWork: "Closed work",
      collectionList: "Collection list",
      colors: "Colors",
      columnName: "Column name",
      comission: "Comission",
      comissionCalculation: "Comission calculation",
      comments: "Comments",
      confirmation: "Confirmation",
      confirmNewPassword: "Confirm new password",
      continue: "Continue",
      continueOperation: "Continue operation",
      copyFormula: "Copy formula",
      count: "Count",
      countFormula: "Count formula",
      countUnit: "Count unit",
      countUnitCategoryName: "Count unit category name",
      countUnits: "Count units",
      createDate: "Create date",
      createFormulaFromExcel: "Create formula from excel",
      creatorName: "Creator name",
      csvDownload: "Download CSV",
      currencyRange: "Currency range",
      currentDay: "Current day",
      currentDepartment: "Current department",
      currentGroup: "Current group",
      currentMonth: "Current month",
      currentPassword: "Old password",
      currentSeason: "Current season",
      currentUser: "Current user",
      currentWeek: "Current week",
      currentYear: "Current year",
      customer: "Customer",
      customerClassification: "Customer classification",
      customersReportList: "Customers report list",
      customizeList: "Customize list",
      cylindrical: "Cylindrical",
      dash: "-",
      dashboardName: "Dashboard Name",
      date: "Date",
      dateFrom: "Validity date from",
      dateGroupBy: "Date group by",
      dateOfEntryToDashboard: "Date of entry to dashboard",
      dateRange: "Date range",
      dateTo: "Validity date to",
      day: "Day",
      deadline: "Deadline",
      decimalDigitsSupport: "Decimal Digits Support",
      default: "Default",
      defaultName: "Default name",
      defaultValueSet: "Default value set",
      delete: "Delete",
      deleteCategory: "Delete category",
      deleteOneGroup: "Delete One Group",
      deleteProductCategory: "Delete product category",
      deleteReport: "Delete report",
      deleteRow: "Delete row",
      departments: "Departments",
      dependentCountUnit: "Dependent Count unit",
      design: "Design",
      dialer: "Dialer",
      digit: "Digit",
      discard: "Discard",
      discount: "Discount",
      DisposeInventoryTransaction: "Dispose Inventory Transaction",
      doFilter: "Add Filter",
      done: "Done",
      dueDate: "Due date",
      DueDate: "Due Date",
      editCountingUnitCategory: "Edit counting unit category",
      editExistingInformation: "Edit existing information",
      editQuantity: "Edit quantity",
      editUnitCount: "Edit unit count",
      endOfEditing: "End of editing",
      english: "English",
      enter: "Enter",
      EnterInventoryTransaction: "Enter Inventory Transaction",
      entities: "Entities",
      entryToCartableDate: "Entry To Cartable Date",
      equalBy: "EqualBy",
      error: "Error",
      exampleFile: "Example file",
      except: "Except",
      exitFullscreen: "Exit fullscreen",
      ExitInventoryTransaction: "Exit Inventory Transaction",
      expireTime: "Expire time",
      expireType: "Expire type",
      exportExcel: "Export from excel",
      extraSpecifications: "Extra information",
      fieldsMapping: "Mapping fields",
      File: "File",
      fileFields: "File fields",
      files: "Files",
      filters: "Filters",
      followUp: "Follow up",
      followUpDescription: "Followup description",
      followUpTime: "Followup time",
      fontSize: "Font size",
      Form: "Form",
      formulaOutput: "Formula output",
      from: "From",
      fromPredefinedSources: "From predefined sources",
      fromUntilTo: "{{from}} util {{to}}",
      fullname: "Fullname",
      fullscreen: "Fullscreen",
      funnel: "Funnel",
      gauranteeApply: "Apply gaurantee",
      generalActivities: "General activities",
      generalNotificationSettings: "General Notification Settings",
      georgianDateRange: "Georgian date range",
      getUnderSupervision: "Get Under Supervision",
      goldAmountCalculateFormula: "Gold amount calculate formula",
      greater: "Greater",
      greaterEqual: "Greater equal",
      gregorian: "Gregorian",
      groupBy: "Group by",
      grouping: "Grouping",
      groupLike: "Group",
      groups: "Groups",
      height: "Height",
      howtorefer: "How to refer",
      HowToSort: "How to sort",
      Identity: "Identity",
      iframeSettings: "IFrame Settings",
      in: "In",
      inDate: "In date",
      InitialStockInventoryTransaction: "Initial Stock Inventory Transaction",
      int: "Int",
      integer: "Integer number",
      invalidFile: "Invalid file",
      inventoryEntities: "Inventory entities",
      inventoryManagement: "Inventory management",
      items: "Items",
      jalali: "Jalali",
      jpegDownload: "Download JPEG",
      label: "Label",
      large: "Large",
      last24Hours: "Last 24 hours",
      lastFourteenDays: "Last 14 days",
      lastMonth: "Last month",
      lastNinetyDays: "Last 90 days",
      lastSeason: "Last season",
      lastSevenDay: "Last seven day",
      lastSixtyDays: "60 روز گذشته",
      lastThirtyDays: "Last 30 days",
      lastThreeSixtyDays: "Last 360 days",
      lastWeek: "Last week",
      lastYear: "Last year",
      Lead: "Lead",
      leastOrderAmount: "Least Order Amount",
      length: "Lenght",
      less: "Less",
      lessEqual: "Less equal",
      line: "Line",
      column: "Column",
      listName: "List name",
      listOfUsersIHaveDesignatedAsSuccessor: "List of users I have designated as a successor",
      listOfUsersWhoHaveAppointedMeAsTheirSuccessor: "List of users who have appointed me as their successor",
      logout: "Logout",
      machineFields: "Machine fields",
      mainCounter: "Main counter",
      manualField: "Manual field",
      map: "Map",
      mappingName: "Mapping name",
      maxAvailabelDecreament: "Maximum available decreament",
      maxAvailabelIncreament: "Maximum available increament",
      maximum: "Maximum",
      maximumDiscount: "Maximum discount",
      maximumOrder: "Maximum order",
      me: "Me",
      medium: "Medium",
      messageText: "Message Text",
      minimizeColumn: "Minimize Column",
      minimum: "Minimum",
      minimumBoughtCount: "Minimum bought count",
      minimumBuyCount: "Minimum buy count",
      Money: "Money",
      month: "Month",
      monthDay: "Month day",
      moveTo: "Move To",
      moveToList: "Move to list",
      myActivitySettings: "My Activity Settings",
      myMappings: "My mappings",
      newDashboard: "New Dashboard",
      newList: "New list",
      newMappingName: "New mapping name",
      newNote: "NewNote",
      newOpportunity: "NewOpportunity",
      newPassword: "New password",
      newPointingRule: "New pointing rule",
      newPreInvoice: "NewPreInvoice",
      newProductGroup: "New product group",
      newQuantity: "New quantity",
      newSaleInvoice: "NewSaleInvoice",
      newSuccessor: "New successor",
      newTask: "NewTask",
      newUnitCountCategory: "New unit count category",
      nextDay: "Next day",
      nextMonth: "Next month",
      nextSeason: "Next season",
      nextWeek: "Next Week",
      nextYear: "Next year",
      no: "No",
      none: "None",
      noSubject: "No subject",
      notAllocated: "Not allocated",
      notEqual: "NotEqual",
      notifications: "Notifications",
      notStarted: "Not started",
      NumberOfViewPerPage: "Number of views per page",
      numberRange: "Number range",
      observed: "Observed {{index}}",
      offices: "Offices",
      ok: "Ok",
      onEightyDays: "Last 180 days",
      onlineStoreAvailable: "Available in online stores",
      openNewItemType: "Open new item type",
      openRelatedProfilesOnReceivingCalls: "Open related profiles on receiving calls",
      openWorks: "Open works",
      operater: "Operater",
      operator: "Operator",
      opportunity: "Opportunity",
      order: "Order",
      orderPointApply: "Apply order point",
      parameter: "Parameter",
      passwordRecovery: "Password recovery",
      patamgostarDataBase: "Payamgostar Database",
      Payment: "Payment",
      pdfDownload: "Download PDF",
      permissionKind: "Permission kind",
      persian: "Persian",
      personalSettings: "Personal settings",
      personCompany: "Person - company",
      personCorp: "Person - corp",
      PhoneLog: "Phone Log",
      gauge: "Gauge",
      pie: "Pie",
      pin: "Pin",
      pngDownload: "Download PNG",
      pointAmount: "Point amount",
      pointingRules: "Pointing rules",
      pointRialsValues: "Point rials value",
      pointsRequiring: "Require points for products",
      pointValue: "Value of point",
      pointValuePerBaseUnit: "Point value per base unit",
      portalAccess: "Access to portal",
      post: "Post",
      posted: "Posted",
      powerBISettings: "Power BI Settings",
      predefinedChart: "Predefined chart",
      predefinedData: "Predefined data",
      priceByCount: "Price by count",
      priceListSubject: "Price list subject",
      pricingPolicy: "Pricing policy",
      primaryUnit: "PrimaryUnit",
      print: "Print",
      privacyAndSecurity: "Privacy and Security",
      productCategory: "Product category",
      productCategoryName: "Product category name",
      productGroupPostion: "ProductGroup Postion",
      productGroupsCode: "ProductGroups Code",
      productGroupsName: "ProductGroups Name",
      productionDate: "Production Date",
      productsCategory: "Products category",
      productsName: "Products name",
      productsPhotos: "ProductsPhotos",
      productTitle: "Product title",
      profile: "Profile",
      profileImage: "Profile image",
      profileManagement: "Profile types management",
      publicNotification: "Public Notification",
      PurchaseInvoice: "Purchase Invoice",
      PurchaseQuote: "Purchase Quote",
      quantity: "Quantity",
      quantityName: "Quantity name",
      quantityValuing: "Quantity valuing",
      Quote: "Quote",
      rangeInteger: "Integer range number",
      readOnly: "Readonly",
      readonlyAndDesign: "Readonly and Design",
      Receipt: "Receipt",
      received: "Received",
      referenceFrom: "Reference from {{index}}",
      referenceId: "Reference Id",
      referralFrom: "Reference from",
      referTo: "Refer to",
      relatedContact: "RelatedContact",
      relatedIdenity: "Related identity",
      reminder: "Reminder",
      reminderSoundAlert: "Reminders sound alert",
      reminderToMe: "Reminder",
      remove: "Delete",
      removeFromSuperVision: "Remove From Super Vision",
      reportsCount: "{{reportsCount}} reports count",
      reportSources: "Report Sources",
      reportsSetting: "Reports Settings",
      require: "Require",
      retry: "Retry",
      ReturnPurchaseInvoice: "Return Purchase Invoice",
      ReturnSaleInvoice: "Return Sale Invoice",
      running: "Running",
      sale: "Sale",
      sameNameFieldsMapping: "Same name fields mapping",
      saveAndCreate: "Save and Create",
      saveAndNext: "Save and next",
      saveMapping: "Save mapping",
      saving: "Saving",
      scatter: "Scatter",
      searchByName: "Search By Name",
      searchWidget: "Search Widget",
      season: "Season",
      selectAll: "Select all",
      selectCurrentDate: "Select current year",
      selectDate: "Select date",
      selectDateRange: "Select date range",
      selectDateType: "Select date type",
      selectEntity: "Select Entity",
      selectEntityType: "Select EntityType",
      selectExcelFormula: "Select excel formula",
      selectExtraSpecifications: "Extra specifications",
      selectFromColors: "Select from colors",
      selectFromCurrentUsers: "Select current user",
      selectFromDataSource: "Select from database",
      selectFromGroups: "Select from groups",
      selectionType: "Selection type",
      selectMe: "Select myself",
      selectProperties: "Select Properties",
      selectReportType: "Select report type",
      selectSpecification: "Select specification",
      selectSpecifications: "Select specifications",
      selectTimeAndDate: "Select Time And Date",
      send: "Send",
      sendLink: "Send link",
      settings: "Settings",
      shape: "Shape",
      shareDashboard: "Share Dashboard",
      sharedWith: "Shared with",
      sharing: "Sharing",
      sharingDashboard: "Sharing Dashboard",
      showAllNotifications: "Show all notifications",
      showBased: "Show based",
      showCallHistory: "Show phone calls in history",
      showEmailsFromLine: "Show emails from line :",
      showNotificationsInDate: "Show notifications in date",
      showReciveSms: "Display received SMS",
      showReminders: "Show Reminders",
      small: "Small",
      sms: "Sms",
      sorting: "Sorting",
      sortingBy: "Sorting by",
      sources: "Sources",
      specification: "Characteristic",
      specificationName: "Specification name",
      specifications: "Information",
      specificationValue: "Specification value",
      specificDate: "Specific date",
      SpecifiedDate: "Specified date",
      SpecifiedTimePeriod: "Specified time period",
      stack: "Stack",
      stair: "Stair",
      standardPriceList: "Standard Price List",
      standardReport: "Standart report",
      startUpload: "Start Uploading",
      stepPrice: "Step price",
      substituteFilters: "Substitute filters",
      substituteUser: "Substitute user",
      substitutionDate: "Substitution date",
      successorUsersManagement: "Successor users management",
      SupervisedWorks: "Supervised works",
      supportDecimalDigits: "Supports decimal digits",
      svgDownload: "Download SVG",
      syncCalendars: "Sync Calendars",
      system: "System",
      systemDatasources: "System Datasources",
      systemDate: "System setting",
      systemReminder: "System reminders",
      systemReport: "System report",
      systemSettings: "System settings",
      systemUser: "System user",
      table: "Table",
      tagList: "Tags list",
      tagsManagement: "Tags management",
      tagsName: "Tags name",
      task: "Task",
      taskAssignment: "Task assignment",
      taxCalculation: "Tax calculation",
      telephone: "Telephone",
      telephoneNumber: "TelephoneNumber",
      timeInterval: "TimeInterval",
      toActive: "Activate",
      toClose: "Close",
      toDownRounding: "To down rounding",
      tollCalculation: "Toll calculation",
      toman: "Toman",
      tomorrow: "Tomorrow",
      tooltipEnabled: "Tooltip displayed enabled",
      toUpRounding: "To up rounding",
      tryAgain: "Try again",
      twoDaysAgo: "TwoDaysAgo",
      underSupervision: "Under supervision",
      unEditable: "Uneditable",
      unitCountCategory: "Unit count category",
      unitCountCategoryName: "Unit count category name",
      unread: "Unread",
      unRemovable: "Unremovable",
      untilDate: "UntilDate",
      updateDate: "Update date",
      updateWithCurrentMapping: "Update with current mapping",
      uploadAgain: "Upload again",
      uploadFile: "Upload file",
      uploadImage: "Upload image",
      url: "URL",
      urlAddress: "Url address",
      addressType: "Address type",
      address: "Address",
      country: "Country",
      province: "Province",
      city: "City",
      area: "Area",
      usableCustomerClub: "Usable in customer club",
      userOrGroupName: "User or Group name",
      usersGroup: "Users group",
      userWithPermission: "User With Permission",
      validityTime: "Validity time",
      valuePicker: "Valuepicker",
      variableTimeInterval: "Variable time interval",
      view: "View",
      viewAll: "View all",
      viewAppointmentsOn: "View appointments on",
      viewEmails: "View emails",
      volumeMeasuringFormula: "Volume measuring formula",
      watched: "Watched",
      webHook: "Web hook",
      week: "Week",
      widgetName: "Widget Name",
      width: "Width",
      workInline: "Work in line",
      xlsDownload: "Download XLS",
      year: "Year",
      yearMonth: "Year month",
      yearSeason: "Year season",
      yearWeek: "Year week",
      yes: "Yes",
      updateFields: "Update Fields",
      marketingActivities: "Marketing Activities",
      communicationalActivities: "Communicational Activities",
      selectAttribute: "Select attribute",
      definitionOfPoints: "Definition Of Points",
      ends: "Ends",
      equal: "Equal",
      exists: "Exists",
      greaterThanOrEqual: "GreaterThanOrEqual",
      lessThanOrEqual: "LessThanOrEqual",
      matches: "Matches",
      notEnds: "NotEnds",
      notExists: "NotExists",
      notIn: "NotIn",
      notMatches: "NotMatches",
      notRegexp: "NotRegexp",
      starts: "Starts",
      engagement: "Engagement",
      string: "String",
      boolean: "Boolean",
      hour: "Hour",
      valueType: "Value Type",
      packageName: "Package name",
      addPackage: "Add package",
      packageDetails: "Package details",
      positivePoint: "Positive Point",
      operationType: "Operation Type",
      propertyType: "Property Type",
      listError: "List Error",
      serverError: "Server Error",
      today: "today",
      regexp: "Regexp",
      rollingBefore: "RollingBefore",
      rollingBetween: "RollingBetween",
      rollingAfter: "RollingAfter",
      generalProperty: "General Property",
      inActive: "Inactive",
      baseInfo: "Base Info",
      group: "Group",
      categoryName: "Category name",
      amount: "Amount",
      permission: "Permission",
      viewAndEdit: "View and edit",
      iframe: "Iframe",
      myActivity: "My activity",
      incoming: "Incoming",
      outgoing: "outgoing",
      storybook: "Storybook",
      abrplusAppSelector: "Selection of Abrplus applications",
      passwordWasSuccessfullyChanged: "Password Was Successfully Changed",
      calendarLink: "Calendar Link",
      customizeUi: "Customize UI",
      chooseColor: "Choose Color",
      online: "online",
      chooseIcon: "Choose Icon",
      twoFaCode: "Two-Factor Authentication code",
      confirmAndContinue: "Confirm and continue",
      deactivate: "Deactive",
      deactivateTwoFa: "Deactivate Two-Fa",
      "twoStepAuthentication\n": "Two-Step Authentication",
      changeTwoFa: "change Two-step authentication",
      sentCodeTo: "Sent code {{to}}",
      totpCode: "TOTP code",
      editUserInfo: "Edit User Info",
      editEmail: "Edit Email",
      EditPhoneNum: "Edit Mobile Number",
      mobileNum: "Mobile Number",
      otpCode: "SMS confirmation code",
      NewemailCode: "Email confirmation code (New)",
      enterTotpCode: "Please Enter Two  Factor Confirmation Code",
      confirmMobile: "Confirm Mobile Number",
      confirmEmail: "Confirm Email",
      oldMobileNum: "Last Mobile Number",
      newOtpCode: "SMS confirmation code (New)",
      oldOtpCode: "SMS confirmation code (Old)",
      oldEmailCode: "Email confirmation code (Old)",
      emailCode: "Email Confirmation",
      related: "Related",
      relatedTo: "Related to",
      recieveConfirmationCode: "Recieve Confirmation Code",
      authenticationDrawerLabel: "Two-step authentication / backup code",
      endOfActivation: "End of activation",
      desk: "Desk",
      branches: "Branches",
      calendar: "Calendar",
      telephoneSystem: "Telephone System",
      crmObjectType: "CRM object type",
      stage: "Stage",
      last365Days: "last 365 Days ago",
      source: "source",
      travels: "Travels",
      lastupdateDate: "Last update Date",
      chooseGoal: "Choose Goal",
      goal: "Goal",
      goalSettings: "Goal Settings",
      evaluationIndicator: "Evaluation indicator",
      goalTitle: "Goal title",
      separateBy: "Seperate by",
      securityAgent: "Security Agent",
      securityCustomer: "Security Customer",
      entity: "Entity",
      progressStatus: "Progress status",
      mobile: "Mobile",
      telefax: "Telefax",
      fax: "Fax",
      general: "General",
      goaling: "Goal settings",
      leaderboard: "Leaderboard",
      remind: "Remind",
      fulfill: "Fulfill",
      countMinutes: "{{count}} minutes",
      countHours: "{{count}} hours",
      selectTime: "Select time",
      snooze: "Snooze",
      hourly: "Hourly",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      workPlace: "Work",
      residencePlace: "Residence",
      selectedItems: "Selected items",
      selectTimeInterval: "Select time interval",
      lastCountHours: "Last {{count}} hours",
      lastCountDays: "Last {{count}} days",
      understand: "Understand",
      expireDate: "Expire Date",
      addGoal: "Add goal",
      deleteGoalConfirmation: "Are you sure about deleting this goal?",
      yesterday: "Yesterday",
      rollingRange: "Rolling range",
      fixedRange: "Fixed range",
      showAll: "Show all",
      history: "History",
      sendList: "Send List",
      receiveList: "Receive List",
      topThree: "Top 3",
      topTen: "Top 10",
      update: "Update",
      selectUser: "Select user",
      phoneCalls: "Phone calls",
      searchByNameAndPhone: "Searh By Username Or Phone number",
      transferCallHistory: "Call Transfer History",
      voipSystem: "Voip System",
      incomingCall: "Incoming call",
      outgoingCall: "Outgoing Call",
      unknownUser: "Unknown user",
      reject: "Reject",
      answer: "Answer",
      endCall: "End Call",
      unholdCall: "Unhold Call",
      holdCall: "Hold call",
      _VOFFICE_: "VOffice",
      systematic: "Systematic",
      internalCall: "Internal Call",
      recentCalls: "Recent Calls",
      gender: "Gender",
      company: "Company",
      multiselect: "Multiselect",
      meeting: "Meeting",
      fromDate: "From Date",
      toDate: "To Date",
      important: "Important",
      workflowHistory: "Workflow History",
      submit: "submit",
      actions: "Actions",
      bulkActions: "bulkActions",
      edit: "Edit",
      setting: "Setting",
      removeAll: "Remove All",
      pictures: "Pictures",
      shareScreen: "Share Screen",
      soundOff: "Sound Off",
      soundOn: "Sound On",
      sendMessage: "Send Message",
      cameraOff: "Camera Off",
      cameraOn: "Camera On",
      stopRecord: "Stop Record",
      startRecord: "Start Record",
      stopRecordDescription: "Are you sure you want to stop recording this meeting?",
      requestVideoCall: "Request Video Call",
      answerAudio: "Answer Audio",
      answerVideo: "Answer Video",
      generalFlow: "General Flow",
      process: "Process",
      appointmentFlow: "Appointment Flow",
      inProgress: "In Progress",
      frezzed: "Frezzed",
      finished: "Finished",
      inCartable: "In Cartable",
      referred: "Referred",
      abbreviatedName: "Abbreviated name\r",
      searchResources: "Search Resources",
      key: "Key",
      securityOperator: "Security Operator",
      appIsInitiating: "App is initiating.",
      reloadPage: "Reload",
      availableWhenComplete: "It will be available as soon as it is completed.",
      microphoneSettings: "Microphone Settings",
      systemDefault: "System Default",
      speakerSettings: "Speaker Settings",
      cameraSettings: "Camera Settings",
      test: "Test",
      socialContacts: "Social Contacts",
      selectPlatform: "Select Platform",
      identification: "ID",
      enterIdPhoneNumber: "Enter ID or phone number",
      uploadVideo: "Upload video",
      manager: "Manager",
      create: "Create",
      automatic: "Automatic",
      manual: "Manual",
      notAllowed: "Not Allowed",
      stop: "Stop",
      saveAndContinue: "Save and continue",
      activeCamera: "Activate Camera",
      holdCurrentCallAndAnswer: "Hold Current call and answer",
      endCurrentCallAndAnswer: "End Current call and answer",
      enableCamera: "Active Camera",
      deactiveCamera: "Deactive Camera",
      hangUp: "Hang Up",
      allow: "Allow",
      queue: "Queue",
      formType: "Form type",
      words: "Words"
    },
    message: {
      allCharactersAreTheSame: "All characters are the same",
      copied: "Copied",
      emailNotValid: "Email is not valid",
      eventTrackingDesc: "Call the send data event as below.",
      pageTrackingDesc: "Any page whose visitors you want to be tracked should be added to the head tag.",
      searchInAllDatabase: "Search in all database",
      tryAgain: "Try again",
      userTrackingDesc: "Send user data according to the algorithm",
      withoutProtocol: "Without http , https",
      pleaseSelect: "Please select",
      successfullyAdded: "Successfully added",
      successfullyEdited: "Successfully edited",
      successfullyDeleted: "Successfully deleted",
      enterDigit: "Enter digit",
      enterPercent: "Enter percent",
      itemsSelectedWithCount: "{{count}} selected",
      setupLanguage: "Setting up app language...",
      noValueHasBeenAddedYet: "No value has been added yet",
      enterValue: "Enter a value",
      networkConnectionError: "Please check your internet connection and try again",
      removeTagMessage: `With this Operation, the Tag will be Removed from All Categories
`,
      removeTagConfirmation: `Would you like to remove the {{tagName}} tag?
`,
      deleteCategoryConfirmation: "Are you sure about deleting this dashboard?",
      validProtocolHint: "Please enter without http or https",
      additionalInformationDeletedRedirectedEditPage: "If confirmed, the additional information will be deleted and you will be redirected to the edit page",
      approvedAdditionalInformationDeletedEditPage: "If approved, the additional information will be deleted and you will be taken to the edit page",
      byDeletingThisCategoryAllRelatedUnitsAreAlsoDeleted: "By deleting this category, all related units are also deleted.",
      chooseExcelImpotMethod: "You can choose one of excel import methods",
      deleteCategoryAlert: "Are you sure to delete category ?",
      deleteCategoryAlertError: "Do you want to delete this category? By deleting this category, all related units are also deleted",
      deleteMessage: "Are you sure you want to delete {{value}} ?",
      dragMappingAndDropHere: "Drag your mapping and drop here",
      dragUploadFile: "Drag and Drop here",
      enterCategoryCode: "Enter category code",
      enterGroupCode: "Enter group code",
      enterMappingName: "Enter mapping name",
      enterProductName: "Enter product name",
      itemSelected: "Items selected",
      maxGreatMin: "Max must be greater than min",
      noInformation: "Information does not exist",
      operationSucceeded: "Operation succeeded",
      pleaseChoice: "Please choice",
      pleaseContactSupport: "Please contact support",
      productHasVariantWarnMessage: "If there is variety in the product Select its features and otherwise complete the pricing process",
      rangeValidValueTo2: "Valid value is in range of 0 to 2",
      rights: "All rights reserved to 1st co.",
      select: "Please select",
      selectBaseField: "Please select a base field",
      selectDesignTool: "Select design tool!",
      selectExcel: "Select excel",
      selectOnlyEmptyFields: "With selecting this only empty fields will be filled",
      sendingLinkUserNameEntry: "Enter your username to send the link",
      setDefaultValueField: "Please set the default value for this field",
      successfullyCategoryAdded: "Successfully category added",
      successfullyCopied: "Successfully copied",
      successfullyTagAdded: "Successfully tag added",
      supportedImageFormatDescription: "Supported image formats include png, gif, jpg and bmp, and the maximum size must be more than 4 MB. In this section, you can upload 5 images for your product.",
      tagDeletedAlertError: "Do you want to delete {{tags}} tags? this action will remove the tag from all categories",
      userDiscarded: "User has been discarded",
      ValidValueFrom0: "Value must be greater than 0",
      variantWillNotApply: "This variant will not be applied",
      yesDelete: "Yes, delete",
      processing: "Processing",
      noResultFound: "No Result Found",
      loadDataError: "Load Data Error",
      copyQrCodeLink: "If you can not scan, copy and paste the following code",
      authenticationTabMessage1: "Scan the following QR code using an authentication program.",
      authenticationTabMessage2: "After scanning the QR code, enter the 6-digit verification code.",
      the2faWasCopied: "Two-fa was copied",
      twoStepAuthenticationTitle: "Two-step authentication is not yet enabled",
      twoStepAuthenticationDescription: "Increase the security of your account by enabling two-factor authentication and prevent unauthorized access to your account.",
      twoStepAuthenticationIsActive: "Two-step authentication is enabled.",
      protectedModalDesc1: "Please enter the code sent to your {{sentTo}} in order to {{purpose}}.",
      protectedModalDesc2: "Please enter the code sent to your {{sentTo}} and the two-step authentication code in order to {{purpose}}.",
      securityCodeMustBeAtLeast6DigitsLong: "Security code must be at least 6 digits long",
      mobileConfirmationMessage: "To register this number, you must verify it.",
      insertVerifyEmailOtp: "Please enter the confirmation code received via SMS and email in the field below",
      enterNewOtpCode: "Please Enter New Number SMS Confirmation Code",
      enterOldOtpCode: "Please Enter Old Number SMS Confirmation Code",
      enterEmailCode: "Please Enter Email Confirmation Code",
      emailConfirmationMessage: `\r
To register this email, you must confirm it.`,
      enterOtpCode: "Please Enter Confirmation Code",
      supportCodeWarning: "Save this support code in a safe place.",
      supportCodeWarning2: "This code allows you to recover your authentication code if your phone is lost. Otherwise it will take 7 days to reset the authentication code.",
      noUserInThisGoal: "There is no user in this goal",
      enterPhoneNumber: "Enter phone number here",
      accessDenied: "You don't have permission to this page.",
      notFound: "Page not found!",
      backToHome: "Back to Home",
      deletePermissionConfirmation: "Are you sure you want to delete the permission؟",
      addPermissionConfirmation: "Are you sure you want to add permission؟",
      isConfirmed: "Do You Confirm?",
      invalidDomainTitle: "You can't access this domain!",
      invalidDomainDescription: "Access to this domain is only possible for users of the same domain."
    },
    error: {
      codeMustBe6Characters: "Authentication code must be 6 digits",
      minLengthIs5: "Password should be at least 5 characters",
      passwordValidation: "Password must contain uppercase and lowercase letters, numbers and special characters",
      phoneNumberNotValid: "Phone number is not valid",
      modalHint1: "Modal Hint1",
      intMax10: "Max integr is 10",
      floatMax8: "Max float is 8",
      tagFieldRequired: "Tag Name Field is Required",
      categoryFieldRequired: "Category Name Field is Required",
      usernameRequired: "Username is required",
      allLanguagesMustBefilled: "All Languages Must Be filled",
      cantBeNegative: "Field cant be negative",
      classNameError: "Error in class names",
      currencyUnitEmptynessError: "Currenct unit field is required",
      currentSystemLanguageNameError: "Selecting a name for the current system language is required",
      dateFieldEmptynessError: "Date is required",
      dateMustBeFromToday: "DateMustBeFromToday",
      duplicated: "Duplicated",
      emailEmptynessError: "Email field is required",
      emailValidationError: "Entered Email is not valid.",
      errorDeleteRule: "Point rule deleting failed",
      errorNotNumber: "Point amount shold be number",
      errorOccurred: "An error has occurred",
      fieldRequired: "Field is required",
      fillRequiredField: "Fill required fields",
      formatTypeRequired: "Format type is required",
      listNameEmptynessError: "List name in required",
      maximumDiscountMaxPriceError: "Must be greater than minimum order",
      maximumDiscountMinPriceError: "Must be less than maximum order",
      minAndMaxRequired: "Min and max are require!",
      missing: "Missing",
      nameError: "Error in name field",
      nameRequired: "Name is Required",
      noColumnAdded: "You have not added any columns",
      noFiltersAdded: "No filters added",
      noInternetConnection: "No internet connection",
      noItem: "There Is No Item",
      noItemSelected: "No item selected",
      noPermissionsAvailable: "NoPermissionsAvailable",
      noPermissionsFound: "NoPermissionsFound",
      noProductsAvailable: "NoProductsAvailable",
      notMatchPasswords: "Password does not matched",
      onlyEmptyFields: "Fill only empty fields",
      pointAmountError: "Error in Point Amounts",
      startDateSmaller: "Start date must be smaller than end date",
      startEndDateError: "End date cant be before start date",
      thisFieldRequired: "This field is required",
      userDuplicated: "User Duplicated",
      userNotFound: "No users found",
      noNegativeNumbersAllowed: "No Negative Numbers Allowed",
      percentShouldntBeOver100: "percent Shouldn't Be Over 100",
      onlyEnglishNumberAndUnderlineAllowed: "You should only type English Letter, Number and _"
    }
  }
}, At = {
  common: {
    literal: {
      abrplus: "ابرپلاس",
      active: "فعال",
      add: "اضافه کردن",
      apply: "اعمال",
      authentication: "احراز هویت",
      back: "بازگشت",
      connectToWebApplication: "اتصال به وب اپلیکیشن",
      copy: "کپی",
      createdDate: "تاریخ ساخت",
      createLeadFromType: "ایجاد سرنخ از نوع",
      mailbox: "صندوق پستی",
      postalCode: "کد پستی",
      enterAddress: "آدرس خود را اینجا وارد کنید",
      enterDescription: "توضیحات را وارد کنید",
      description: "توضیحات",
      disable: "غیرفعال",
      domain: "دامنه",
      email: "ایمیل",
      filter: "فیلتر",
      filtring: "فیلتر کردن",
      generalSpecifications: "مشخصات کلی",
      getExcel: "دریافت از اکسل",
      guide: "راهنما",
      howToConnect: "نحوه اتصال",
      lastName: "نام خانوادگی",
      leadIdentityBase: "مبنا شناسایی سرنخ",
      name: "نام",
      nameProductCategory: "نام دسته بندی محصولات",
      next: "بعدی",
      pageTracking: "ردیابی صفحات",
      password: "رمز عبور",
      previous: "قبلی",
      register: "ثبت نام",
      registerAbrplusAccount: "ثبت نام حساب کاربری ابرپلاس",
      resendCode: "ارسال مجدد کد",
      save: "ذخیره",
      searchGeocode: "جستجو شهر یا محله",
      addLocation: "افزودن موقعیت مکانی",
      location: "موقعیت مکانی",
      search: "جستجو",
      singlePage: "تک صفحه",
      status: "وضعیت",
      submitAndConfirm: "ثبت و ادامه",
      users: "کاربران",
      applyFilter: "اعمال فیلتر",
      erase: "پاک کردن",
      additionalSpecifications: "مشخصات اضافه",
      moreDetails: "مشخصات بیشتر",
      required: "الزامی",
      details: "جزئیات",
      cancel: "لغو",
      confirm: "تایید کردن",
      displayCountPerPage: "تعداد نمایش در هر صفحه",
      user: "کاربر",
      deleteFilter: "حذف فیلتر",
      deletePriceList: "حذف لیست قیمت",
      number: "عدد",
      rial: "ریال",
      title: "عنوان",
      position: "سمت",
      department: "دپارتمان",
      office: "اداره",
      value: "ارزش",
      values: "مقادیر",
      text: "متن",
      exit: "خروج",
      myProfile: "پروفایل من",
      callHistory: "تاریخچه تماس",
      currentCalls: "تماس های جاری",
      callRecord: "سابقه تماس",
      autoCall: "تماس خودکار",
      caller: "شماره گیر",
      callCode: "داخلی",
      numberTo: "الی",
      callPhoneNumber: "شماره تلفن",
      call: "تماس",
      phone: "تلفن",
      more: "بیشتر",
      endDate: "تاریخ پایان",
      startDate: "تاریخ شروع",
      before: "قبل از",
      after: "بعد از",
      within: "در بازه",
      on: "بین",
      present: "وجود دارد",
      notPresent: "وجود ندارد",
      equalTo: "مساوی",
      notEqualTo: "نابرابر",
      between: "مابین",
      greaterThan: "بزرگتر از",
      greaterThanEqual: "بزرگتر مساوی از",
      lessThan: "کوچکتر از",
      lessThanEqual: "کوچکتر مساوی از",
      notBetween: "خارج بازه",
      notEmpty: "خالی نباشد",
      empty: "خالی باشد",
      startsWith: "شروع شود با",
      notStarts: "شروع نشود با",
      endsWith: "تمام شود با",
      doesNotEndWith: "تمام نشود با",
      oneOf: "یکی از",
      noneOf: "هیچکدام",
      matchesRegex: "مطابق ریجکس",
      doesNotMatchRegex: "عدم تطابق ریجکس",
      contains: "شامل",
      doesNotContain: "شامل نشود",
      is: "مساوی",
      reset: "بازنشانی",
      selectOperator: "انتخاب عملگر",
      new: "جدید",
      select: "انتخاب کنید",
      to: "تا",
      color: "رنگ",
      addInputTag: "اضافه کردن تگ",
      salesApp: "پیام گستر",
      callApp: "الوویپ",
      clubApp: "باشگاه مشتریان",
      tagManagement: "مدیریت تگ ها",
      tagName: "نام تگ",
      creator: "ایجاد کننده",
      tags: "تگ ها",
      addToCategory: "افزودن به دسته بندی",
      tagsList: "لیست تگ ها",
      categoriesList: "لیست دسته بندی ها",
      warning: "هشدار",
      pricelistDetails: "جزئیات لیست قیمت",
      openWebPhone: "باز کردن وب فون",
      developerSettings: "تنظیمات توسعه دهنده",
      point: "امتیاز",
      up: "بالا",
      down: "پایین",
      activity: "فعالیت (هفتگی، ماهانه، سالانه)",
      sum: "جمع",
      events: "رویداد ها",
      userAccountLogin: "ورود به حساب کاربری",
      username: "نام کاربری",
      passwordRequired: "رمز عبور الزامی است",
      login: "ورود",
      payamgostar: "پیامگستر",
      alovoip: "الوویپ",
      home: "خانه",
      accessRate: "میزان دسترسی",
      addAndEdit: "افزودن و ویرایش",
      addColumn: "اضافه کردن ستون",
      addCountingUnitCategory: "افزودن دسته بندی واحد شمارش",
      addFilter: "افزودن فیلتر",
      addGrouping: "افزودن گروه بندی",
      addNewCategory: "افزودن دسته بندی جدید",
      addNewInformation: "افزودن اطلاعات جدید",
      addNewPermission: "دسترسی جدید",
      addRow: "افزودن سطر",
      addStair: "افزودن پله",
      addWidget: "افزودن ویجت",
      advanced: "پیشرفته",
      advanceReport: "گزارش پیشرفته",
      toSave: "ذخیره کردن",
      afterDay: "{{day}} روز بعد",
      agent: "نماینده",
      aggregation: "تجمیع",
      all: "همه",
      allAppointments: "همه قرار ملاقات ها",
      allCalls: "همه تماس تلفنی ها",
      allEmail: "همه ایمیل ها",
      allNotifications: "همه اعلانات",
      allocated: "تخصیص یافته",
      AllocationDate: "تاریخ تخصیص",
      allocationStatus: "وضعیت تخصیص",
      allPermissionsCount: "تعداد کل دسترسی ها",
      allProductsCount: "تعداد کل محصولات",
      allSms: "همه پیامک ها",
      allWork: "همه کارها",
      alocationDate: "تاریخ تخصیص",
      appearance: "پیکربندی",
      appearanceSetting: "تنظیمات نمایشی",
      appointment: "قرار ملاقات",
      archive: "آرشیو کردن",
      assignTo: "تخصیص به",
      automaticCall: "تماس خودکار",
      automaticRefreshEvery5Seconds: "رفرش خودکار هر 5 ثانیه",
      autoRefresh: "رفرش خودکار هر {{second}} ثانیه",
      average: "میانگین",
      backLog: "کارهای معوقه",
      bar: "ستونی",
      baseCountUnit: "واحد شمارش مبنا",
      basic: "پایه",
      beforeDay: "{{day}} روز قبل",
      both: "هردو",
      branch: "شعبه",
      BusinessNote: "یادداشت",
      buy: "خرید",
      buyable: "قابل خرید",
      buyingPrice: "قیمت خرید",
      by: "توسط {{value}}",
      calculatedDuration: "مدت زمان محاسبه شده معادل  {{days}} روز",
      calculatedDurationWithYear: "مدت زمان محاسبه شده معادل {{years}} سال و {{days}} روز",
      calendarType: "نوع تقویم",
      callSettings: "تنظیمات تماس ها",
      callsInWindowCount: "تعداد تماس ها در پنجره",
      card: "کارت",
      categories: "دسته بندی ها",
      categoriesCount: "تعداد {{subCategoryCount}} دسته بندی",
      changePassword: "تغییر رمز عبور",
      changeTelephonyPassword: "تغییر رمز تلفنی",
      chartType: "نوع نمودار",
      classes: "کلاس ها",
      classification: "کلاس بندی",
      className: "نام کلاس",
      closedWork: "کارهای بسته",
      collectionList: "لیست دسته بندی ها",
      colors: "رنگ ها",
      columnName: "نام ستون",
      comission: "پورسانت",
      comissionCalculation: "محاسبه پورسانت",
      comments: "نظرات",
      confirmation: "تایید",
      confirmNewPassword: "تکرار رمز عبور جدید",
      continue: "ادامه",
      continueOperation: "ادامه عملیات",
      copyFormula: "کپی فرمول",
      count: "تعداد",
      countFormula: "فرمول تعداد",
      countUnit: "واحد شمارش",
      countUnitCategoryName: "نام دسته بندی واحد شمارش",
      countUnits: "واحد های شمارش",
      createDate: "تاریخ ایجاد",
      createFormulaFromExcel: "ایجاد فرمول از طریق اکسل",
      creatorName: "سازنده",
      csvDownload: "دانلود CSV",
      currencyRange: "پول باز ه‌ای",
      currentDay: "روز جاری",
      currentDepartment: "دپارتمان جاری",
      currentGroup: "گروه‌جاری",
      currentMonth: "ماه جاری",
      currentPassword: "رمز عبور فعلی",
      currentSeason: "فصل جاری",
      currentUser: "کاربر جاری",
      currentWeek: "هفته جاری",
      currentYear: "سال جاری",
      customer: "مشتری",
      customerClassification: "کلاس مشتری",
      customersReportList: "گزارش لیست مشتریان",
      customizeList: "شخصی سازی لیست",
      cylindrical: "استوانه",
      dash: "-",
      dashboardName: "نام داشبورد",
      date: "تاریخ",
      dateFrom: "زمان اعتبار از",
      dateGroupBy: "گروه بندی تاریخ",
      dateOfEntryToDashboard: "تاریخ ورود به کارتابل",
      dateRange: "تاریخ بازه ای",
      dateTo: "زمان اعتبار تا",
      day: "روز",
      deadline: "موعد سررسید",
      decimalDigitsSupport: "پشتیبانی از رقم اعشار",
      default: "پیشفرض",
      defaultName: "نام پیشفرض",
      defaultValueSet: "مقدار پیشفرض تعیین شده",
      delete: "حذف کردن",
      deleteCategory: "حذف دسته بندی",
      deleteOneGroup: "حذف یک دسته بندی",
      deleteProductCategory: "حدف دسته بندی محصول",
      deleteReport: "حذف گزارش",
      deleteRow: "حذف سطر",
      departments: "دپارتمان‌ها",
      dependentCountUnit: "واحد شمارش وابسته",
      design: "طراحی",
      dialer: "شماره گیر",
      digit: "رقم",
      discard: "لغو کردن",
      discount: "تخفیف",
      DisposeInventoryTransaction: "حواله خروج محصول خراب",
      doFilter: "اعمال فیلتر",
      done: "انجام شد",
      dueDate: "موعد مقرر",
      DueDate: "موعد مقرر",
      editCountingUnitCategory: "ویرایش دسته بندی واحد شمارش",
      editExistingInformation: "ویرایش اطلاعات موجود",
      editQuantity: "ویرایش کمیت",
      editUnitCount: "ویرایش واحد شمارش",
      endOfEditing: "پایان ویرایش",
      english: "انگلیسی",
      enter: "ورود",
      EnterInventoryTransaction: "رسید ورود انبار",
      entities: "موجودیت ها",
      entryToCartableDate: "تاریخ ورود به کارتابل",
      equalBy: "مساوی با",
      error: "خطا",
      exampleFile: "فایل نمونه",
      except: "بجز",
      exitFullscreen: "بستن تمام صفحه",
      ExitInventoryTransaction: "حواله خروج انبار",
      expireTime: "مدت اعتبار",
      expireType: "نوع انقضا",
      exportExcel: "دریافت از اکسل",
      extraSpecifications: "مشخصات اضافه",
      fieldsMapping: "نگاشت فیلد ها",
      File: "فایل",
      fileFields: "فیلدهای فایل",
      files: "فایل ها",
      filters: "فیلترها",
      followUp: "پیگیری",
      followUpDescription: "توضیحات پیگیری",
      followUpTime: "زمان پیگیری",
      fontSize: "سایز فونت",
      Form: "فرم",
      formulaOutput: "خروجی فرمول",
      from: "از",
      fromPredefinedSources: "از منابع پیشفرض",
      fromUntilTo: "{{from}} تا {{to}}",
      fullname: "نام و نام خانوادگی",
      fullscreen: "مشاهده تمام صفحه",
      funnel: "قیف",
      gauranteeApply: "اعمال گارانتی",
      generalActivities: " فعالیت های عمومی",
      generalNotificationSettings: "تنظیمات اعلان عمومی",
      georgianDateRange: "تاریخ میلادی بازه ای",
      getUnderSupervision: "تحت نظر کردن",
      goldAmountCalculateFormula: "فرمول محاسبه تعداد طلا",
      greater: "بزرگتر",
      greaterEqual: "بزرگتر مساوی",
      gregorian: "میلادی",
      groupBy: "دسته بندی بر اساس",
      grouping: "گروه‌بندی",
      groupLike: "گروهی",
      groups: "گروه‌ها",
      height: "طول",
      howtorefer: "نحوه ارجاع",
      HowToSort: "نحوه مرتب سازی",
      Identity: "هویت",
      iframeSettings: "تنظیمات قاب وب",
      in: "در",
      inDate: "در تاریخ",
      InitialStockInventoryTransaction: "سید موجودی اولیه",
      int: "عدد",
      integer: "عدد صحیح",
      invalidFile: "فایل خطا",
      inventoryEntities: "موجودیت انبار",
      inventoryManagement: "انبارداری",
      items: "موارد",
      jalali: "شمسی",
      jpegDownload: "دانلود JPEG",
      label: "عنوان",
      large: "درشت",
      last24Hours: "24 ساعت گذشته",
      lastFourteenDays: "14 روز گذشته",
      lastMonth: "ماه گذشته",
      lastNinetyDays: "90 روز گذشته",
      lastSeason: "فصل گذشته",
      lastSevenDay: "7روز گذشته",
      lastSixtyDays: "60 روز گذشته",
      lastThirtyDays: "30 روز گذشته",
      lastThreeSixtyDays: "360 روز گذشته",
      lastWeek: "هفته قبل",
      lastYear: "سال گذشته",
      Lead: "سرنخ",
      leastOrderAmount: "حداقل میزان سفارش",
      length: "طول",
      less: "کوچکتر",
      lessEqual: "کوچکتر مساوی",
      line: "خطی",
      column: "ستونی",
      listName: "نام لیست",
      listOfUsersIHaveDesignatedAsSuccessor: "لیست کاربرانی که من آنها را به عنوان جانشین تعیین نموده ام",
      listOfUsersWhoHaveAppointedMeAsTheirSuccessor: "لیست کاربرانی که من را به عنوان جانشین تعیین نموده اند",
      logout: "خروج از سیستم",
      machineFields: "فیلدهای ماشین",
      mainCounter: "شمارنده اصلی",
      manualField: "فیلد دستی",
      map: "نگاشت",
      mappingName: "نام نگاشت",
      maxAvailabelDecreament: "حداکثر قابل کاهش",
      maxAvailabelIncreament: "حداکثر قابل افزایش",
      maximum: "بیشترین",
      maximumDiscount: "حداکثر تخفیف",
      maximumOrder: "حداکثر سفارش",
      me: "خودم",
      medium: "متوسط",
      messageText: "متن پیام",
      minimizeColumn: "جمع کردن ستون",
      minimum: "کمترین",
      minimumBoughtCount: "حداقل تعداد خرید",
      minimumBuyCount: "حداقل تعداد خرید",
      Money: "پول",
      month: "ماه",
      monthDay: "روز ماه",
      moveTo: "انتقال به",
      moveToList: "انتقال به لیست",
      myActivitySettings: "تنظیمات آخرین فعالیت های من",
      myMappings: "نگاشت های من",
      newDashboard: "داشبورد جدید",
      newList: "لیست جدید",
      newMappingName: "نام نگاشت جدید",
      newNote: "یادداشت جدید",
      newOpportunity: "فرصت جدید",
      newPassword: "رمز عبور جدید",
      newPointingRule: "قوانین امتیازدهی جدید",
      newPreInvoice: "پیش فاکتور جدید",
      newProductGroup: "گروه دسته بندی جدید",
      newQuantity: "کمیت جدید",
      newSaleInvoice: "فاکتور فروش جدید",
      newSuccessor: "جانشین جدید",
      newTask: "وظیفه جدید",
      newUnitCountCategory: "دسته بندی واحد شمارش جدید",
      nextDay: "روز بعد",
      nextMonth: "ماه آینده",
      nextSeason: "فصل آینده",
      nextWeek: "هفته آینده",
      nextYear: "سال بعد",
      no: "خیر",
      none: "هیچکدام",
      noSubject: "بدون عنوان",
      notAllocated: "تخصیص نیافته",
      notEqual: "مساوی نباشد",
      notifications: "اعلانات",
      notStarted: "شروع نشده",
      NumberOfViewPerPage: "تعداد نمایش در هر صفحه",
      numberRange: "عدد بازه ای",
      observed: "مشاهده شده {{index}}",
      offices: "ادارات",
      ok: "باشه",
      onEightyDays: "180 روز گذشته",
      onlineStoreAvailable: "قابل استفاده در فروشگاه آنلاین",
      openNewItemType: "باز کردن آیتم نوع جدید",
      openRelatedProfilesOnReceivingCalls: "باز کردن پروفایل مرتبط هنگام دریافت تماس",
      openWorks: "کارهای باز",
      operater: "اپراتور",
      operator: "عملگر",
      opportunity: "فرصت",
      order: "ترتیب",
      orderPointApply: "اعمال نقطه سفارش",
      parameter: "پارامتر",
      passwordRecovery: "بازیابی رمز عبور",
      patamgostarDataBase: "دیتابیس پیامگستر",
      Payment: "پرداخت",
      pdfDownload: "دانلود PDF",
      permissionKind: "نوع دسترسی",
      persian: "فارسی",
      personalSettings: "تنظیمات شخصی",
      personCompany: "شخص - شرکت",
      personCorp: "شخص‌ - شرکت",
      PhoneLog: "تماس تلفنی",
      gauge: "درجه",
      pie: "دایره ای",
      pin: "تحت نظر کردن",
      pngDownload: "دانلود PNG",
      pointAmount: "مقدار امتیاز",
      pointingRules: "قوانین امتیاز دهی",
      pointRialsValues: "ارزش ریالی هر امتیاز",
      pointsRequiring: "الزام استفاده از امتیاز برای محصولات",
      pointValue: "ارزش ریالی امتیاز",
      pointValuePerBaseUnit: "ارزش امتیاز در واحد ارزی مبنا",
      portalAccess: "دسترسی به پرتال",
      post: "سمت",
      posted: "ارسال شده",
      powerBISettings: "تنظیمات power BI",
      predefinedChart: "نمودار پیشفرض",
      predefinedData: "منابع پیشفرض",
      priceByCount: "قیمت بر اساس تعداد",
      priceListSubject: "عنوان لیست قیمت",
      pricingPolicy: "سیاست قیمت گذاری",
      primaryUnit: "واحد شمارش مبنا",
      print: "پرینت",
      privacyAndSecurity: "حریم خصوصی و امنیت",
      productCategory: "دسته بندی محصول",
      productCategoryName: "نام دسته بندی محصول",
      productGroupPostion: "جایگاه در دسته بندی",
      productGroupsCode: "کد دسته بندی محصولات",
      productGroupsName: "نام دسته بندی محصولات",
      productionDate: "تاریخ ساخت",
      productsCategory: "دسته بندی محصولات",
      productsName: "نام محصولات",
      productsPhotos: "تصاویر محصول",
      productTitle: "عنوان محصول",
      profile: "پروفایل",
      profileImage: "تصویر پروفایل",
      profileManagement: "مدیریت انواع پروفایل",
      publicNotification: "اعلان عمومی",
      PurchaseInvoice: "فاکتور خرید",
      PurchaseQuote: "پیش فاکتور خرید",
      quantity: "کمیت",
      quantityName: "نام کمیت",
      quantityValuing: "مقداردهی به کمیت",
      Quote: "پیش فاکتور فروش",
      rangeInteger: "عدد صحیح بازه‌ایی",
      readOnly: "نمایش",
      readonlyAndDesign: "طراحی و نمایش",
      Receipt: "دریافت",
      received: "دریافت شده",
      referenceFrom: "ارجاع از {{index}}",
      referenceId: "شناسه مرجع",
      referralFrom: "ارجاع از طرف",
      referTo: "ارجاع",
      relatedContact: "مخاطب مرتبط",
      relatedIdenity: "هویت مرتبط",
      reminder: "یادآوری",
      reminderSoundAlert: "هشدار صوتی یادآوری ها",
      reminderToMe: "یادآوری به من",
      remove: "حذف",
      removeFromSuperVision: "خروج از تحت نظر",
      reportsCount: "تعداد {{reportsCount}} گزارش",
      reportSources: "منابع گزارش",
      reportsSetting: "تنظیمات گزارش ها",
      require: "اجباری بودن",
      retry: "تلاش مجدد",
      ReturnPurchaseInvoice: "فاکتور برگشت از خرید",
      ReturnSaleInvoice: "فاکتور برگشت از فروش",
      running: "در حال اجرا",
      sale: "فروش",
      sameNameFieldsMapping: "نگاشت فیلدهای همنام",
      saveAndCreate: "ذخیره و جدید",
      saveAndNext: "ذخیره و بعدی",
      saveMapping: "ذخیره نگاشت",
      saving: "در حال ذخیره کردن",
      scatter: "پراکندگی",
      searchByName: "جستجو براساس نام",
      searchWidget: "جستجوی ویجت",
      season: "فصل",
      selectAll: "انتخاب همه",
      selectCurrentDate: "انتخاب تاریخ جاری",
      selectDate: "انتخاب تاریخ",
      selectDateRange: "انتخاب بازه تاریخ",
      selectDateType: "انتخاب نوع تاریخ",
      selectEntity: "انتخاب موجودیت",
      selectEntityType: "انتخاب نوع موجودیت",
      selectExcelFormula: "انتخاب فرمول اکسل",
      selectExtraSpecifications: "مشخصات بیشتر",
      selectFromColors: "انتخاب از رنگ ها",
      selectFromCurrentUsers: "انتخاب کاربر جاری",
      selectFromDataSource: "انتخاب از بانک اطلاعاتی",
      selectFromGroups: "انتخاب از گروه ها",
      selectionType: "نوع انتخاب",
      selectMe: "انتخاب خودم",
      selectProperties: "انتخاب ویژگی ها",
      selectReportType: "انتخاب نوع گزارش",
      selectSpecification: "انتخاب مشخصه",
      selectSpecifications: "انتخاب مشخصات کلی",
      selectTimeAndDate: "انتخاب تاریخ و ساعت",
      send: "ارسال",
      sendLink: "ارسال لینک",
      settings: "تنظیمات کلی",
      shape: "شکل",
      shareDashboard: "اشتراک گذاری داشبورد",
      sharedWith: "اشتراک گذاری شده با",
      sharing: "اشتراک گذاری",
      sharingDashboard: "اشتراک گذاری داشبورد",
      showAllNotifications: "نمایش همه اعلانات",
      showBased: "نمایش بر اساس :",
      showCallHistory: "نمایش تماس های تلفنی در تاریخ",
      showEmailsFromLine: "نمایش ایمیل از خط :",
      showNotificationsInDate: "نمایش اعلانات در تاریخ",
      showReciveSms: "نمایش پیامک های دریافتی",
      showReminders: "نمایش یادآوری ها",
      small: "ریز",
      sms: "پیامک",
      sorting: "مرتب‌سازی",
      sortingBy: "مرتب سازی بر اساس",
      sources: "منابع",
      specification: "مشخصه",
      specificationName: "نام مشخصه",
      specifications: "مشخصات کلی",
      specificationValue: "ارزش مشخصه",
      specificDate: "تاریخ مشخص",
      SpecifiedDate: "تاریخ مشخص",
      SpecifiedTimePeriod: "بازه زمانی مشخص",
      stack: "استک",
      stair: "پله",
      standardPriceList: "لیست قیمت استاندارد",
      standardReport: "گزارش استاندارد",
      startUpload: "شروع بارگذاری",
      stepPrice: "قیمت پله ای",
      substituteFilters: "فیلتر جانشین ها",
      substituteUser: "کاربر جانشین",
      substitutionDate: "تاریخ جانشینی",
      successorUsersManagement: "مدیریت کاربران جانشین",
      SupervisedWorks: "کارهای درحال نظر",
      supportDecimalDigits: "پشتیبانی از تعداد رقم اعشار",
      svgDownload: "دانلود SVG",
      syncCalendars: "همگام سازی تقویم ها",
      system: "سیستم",
      systemDatasources: "منابع اطالاعاتی سیستمی",
      systemDate: "تنظیمات سیستم",
      systemReminder: "یادآوری های سیستم",
      systemReport: "گزارش سیستمی",
      systemSettings: "تنظیمات سیستم",
      systemUser: "کاربر سیستمی",
      table: "جدول",
      tagList: "لیست تگ ها",
      tagsManagement: "مدیریت تگ ها",
      tagsName: "نام تگ ها",
      task: "تسک",
      taskAssignment: "تخصیص وظیفه",
      taxCalculation: "محاسبه مالیات",
      telephone: "تلفن",
      telephoneNumber: "شماره تماس",
      timeInterval: "بازه زمانی",
      toActive: "فعال کردن",
      toClose: "بستن",
      toDownRounding: "رند رو به پایین",
      tollCalculation: "محاسبه عوارض",
      toman: "تومان",
      tomorrow: "فردا",
      tooltipEnabled: "وضعیت نمایش متن راهنما",
      toUpRounding: "رند رو به بالا",
      tryAgain: "تلاش دوباره",
      twoDaysAgo: "دو روز قبل",
      underSupervision: "تحت نظر",
      unEditable: "غیر قابل ویرایش",
      unitCountCategory: "دسته بندی واحد شمارش",
      unitCountCategoryName: "نام دسته بندی واحد شمارش",
      unread: "خوانده نشده",
      unRemovable: "غیر قابل حذف",
      untilDate: "تا تاریخ",
      updateDate: "تاریخ بروزرسانی",
      updateWithCurrentMapping: "به روزرسانی با نگاشت فعلی",
      uploadAgain: "بارگذاری مجدد",
      uploadFile: "بارگذاری فایل",
      uploadImage: "بارگذاری تصویر",
      url: "آدرس وب",
      urlAddress: "آدرس Url",
      addressType: "نوع آدرس",
      address: "آدرس",
      country: "کشور",
      province: "استان",
      city: "شهر",
      area: "منطقه",
      usableCustomerClub: "قابل استفاده در باشگاه مشتریان",
      userOrGroupName: "نام کاربری و یا گروه",
      usersGroup: "گروه کاربری",
      userWithPermission: "کاربر دارای دسترسی",
      validityTime: "زمان اعتبار",
      valuePicker: "ولیو پیکر",
      variableTimeInterval: "بازه زمانی متغیر",
      view: "مشاهده",
      viewAll: "مشاهده همه",
      viewAppointmentsOn: "نمایش قرار ملاقات ها در تاریخ",
      viewEmails: "نمایش ایمیل های",
      volumeMeasuringFormula: "فرمول اندازه گیری حجم",
      watched: "مشاهده شده",
      webHook: "وب هوک",
      week: "هفته",
      widgetName: "عنوان ویجت",
      width: "عرض",
      workInline: "کارهای در صف انجام",
      xlsDownload: "دانلود XLS",
      year: "سال",
      yearMonth: "ماه سال",
      yearSeason: "فصل سال",
      yearWeek: "هفته سال",
      yes: "بله",
      updateFields: "به روزرسانی فیلدها",
      marketingActivities: "فعالیت های بازاریابی",
      communicationalActivities: "فعالیت های ارتباطی",
      selectAttribute: "انتخاب ویژگی",
      definitionOfPoints: "تعریف امتیاز",
      ends: "تمام شده باشد",
      equal: "مساوی",
      exists: "وجود دارد",
      greaterThanOrEqual: "بزرگتر مساوی",
      lessThanOrEqual: "کوچکتر مساوی",
      matches: "مطابقت",
      notEnds: "تمام نشده باشد",
      notExists: "وجود نداشته باشد",
      notIn: "به جز",
      notMatches: "مطابقت نداشته باشد",
      notRegexp: "بدون عبارت",
      starts: "شروع شده باشد",
      engagement: "فعالیت های ارتباطی",
      string: "متن",
      boolean: "فعال/غیرفعال",
      hour: "ساعت",
      valueType: "نوع داده",
      packageName: "نام پکیج",
      addPackage: "افزودن پکیج",
      packageDetails: "جزئیات پکیج",
      positivePoint: "امتیاز مثبت",
      operationType: "عملگر",
      propertyType: "نوع مشخصه",
      listError: "لیست خطاها",
      serverError: "خطای سرور",
      today: "امروز",
      regexp: "عبارت",
      rollingBefore: "قبل از تاریخ",
      rollingBetween: "بین تاریخ",
      rollingAfter: "بعد از تاریخ",
      generalProperty: "مشخصات عمومی",
      inActive: "غیرفعال",
      baseInfo: "اطلاعات پایه",
      group: "گروه",
      categoryName: "نام دسته بندی",
      amount: "مقدار",
      permission: "دسترسی",
      viewAndEdit: "مشاهده و ویرایش",
      iframe: "قاب وب",
      myActivity: "آخرین فعالیت های من",
      incoming: "ورودی",
      outgoing: "خروجی",
      storybook: "استوری بوک",
      abrplusAppSelector: "انتخاب اپلیکیشن",
      passwordWasSuccessfullyChanged: "رمز عبور با موفقیت تغییر کرد",
      calendarLink: "لینک تقویم ها",
      customizeUi: "شخصی سازی طرح",
      chooseColor: "انتخاب رنگ",
      online: "آنلاین",
      chooseIcon: "انتخاب آیکون",
      twoFaCode: "کد دو عاملی",
      confirmAndContinue: "تایید کد و ادامه دادن",
      deactivate: "غیرفعال کردن",
      deactivateTwoFa: "غیرفعال کردن احراز هویت دو مرحله ای",
      "twoStepAuthentication\n": "احراز هویت دو مرحله ای",
      changeTwoFa: "تغییر احراز هویت دو مرحله ای",
      sentCodeTo: "کد ارسال شده به {{to}}",
      totpCode: "کد احراز هویت دو مرحله ای",
      editUserInfo: "ویرایش اطلاعات کاربری",
      editEmail: "ویرایش ایمیل",
      EditPhoneNum: "ویرایش شماره همراه",
      mobileNum: "شماره همراه",
      otpCode: "کد تایید پیامکی",
      NewemailCode: "کد تایید ایمیل (جدید)",
      enterTotpCode: "لطفا کدتایید  دو مرحله ای را وارد کنید",
      confirmMobile: "ثبت شماره همراه",
      confirmEmail: "ثبت ایمیل",
      oldMobileNum: "شماره همراه قبلی",
      newOtpCode: "کد تایید پیامکی (جدید)",
      oldOtpCode: "کد تایید پیامکی(قدیم)",
      oldEmailCode: "کد تایید ایمیل (قدیم)",
      emailCode: "تایید ایمیل",
      related: "مرتبط",
      relatedTo: "مرتبط با",
      recieveConfirmationCode: "دریافت کد تایید",
      authenticationDrawerLabel: "احراز هویت دو مرحله ای / کد پشتیبان",
      endOfActivation: "پایان فعال سازی",
      desk: "دسک",
      branches: "شعب",
      calendar: "تقویم",
      telephoneSystem: "سیستم تلفنی",
      crmObjectType: "نوع موجودیت",
      stage: "مراحل",
      last365Days: "365 روز گذشته",
      source: "منبع",
      travels: "سفر ها",
      lastupdateDate: "زمان آخرین بروزرسانی",
      chooseGoal: "انتخاب هدف",
      goal: "هدف",
      goalSettings: "تنظیمات هدف",
      evaluationIndicator: "شاخص ارزیابی",
      goalTitle: "عنوان هدف",
      separateBy: "تفکیک بر اساس",
      total: "همه",
      securityAgent: "نمایندگان",
      securityCustomer: "مشتریان",
      entity: "موجودیت",
      progressStatus: "وضعیت پیشرفت",
      mobile: "موبایل",
      telefax: "تلفکس",
      fax: "فکس",
      general: "عمومی",
      goaling: "هدف گذاری",
      leaderboard: "تابلوی امتیازات",
      remind: "یادآوری",
      fulfill: "تکمیل",
      countMinutes: "{{count}} دقیقه",
      countHours: "{{count}} ساعت",
      selectTime: "انتخاب زمان",
      snooze: "تعویق",
      hourly: "ساعتی",
      daily: "روزانه",
      weekly: "هفتگی",
      monthly: "ماهانه",
      workPlace: "محل کار",
      residencePlace: "محل سکونت",
      selectedItems: "موارد انتخابی",
      selectTimeInterval: "انتخاب بازه زمانی",
      lastCountHours: "{{count}} ساعت گذشته",
      lastCountDays: "{{count}} روز گذشته",
      understand: "متوجه شدم",
      expireDate: "تاریخ انقضا",
      addGoal: "افزودن هدف",
      deleteGoalConfirmation: "آیا از حذف این هدف مطمئن هستید؟",
      yesterday: "دیروز",
      rollingRange: "بازه زمانی متغیر",
      fixedRange: "بازه زمانی مشخص",
      showAll: "نمایش همه",
      history: "سوابق",
      sendList: "لیست ارسال",
      receiveList: "لیست دریافت",
      topThree: "3 نفر برتر",
      topTen: "10 نفر برتر",
      update: "به روزرسانی",
      selectUser: "انتخاب کاربر",
      phoneCalls: "تماس های تلفنی",
      searchByNameAndPhone: "جستجو بر اساس شماره تلفن یا نام کاربری",
      transferCallHistory: "تاریخچه انتقال تماس",
      voipSystem: "سیستم ویپ",
      incomingCall: "تماس ورودی",
      outgoingCall: "تماس خروجی",
      unknownUser: "مخاطب ناشناس",
      reject: "رد کردن",
      answer: "پاسخ دادن",
      endCall: "پایان تماس",
      unholdCall: "ادامه تماس",
      holdCall: "توقف تماس",
      _VOFFICE_: "وی آفیس",
      systematic: "سیستمی",
      internalCall: "تماس داخلی",
      recentCalls: "تماس های اخیر",
      gender: "جنسیت",
      company: "شرکت",
      multiselect: "چند انتخابی",
      meeting: "جلسه",
      fromDate: "از تاریخ",
      toDate: "تا تاریخ",
      important: "مهم",
      workflowHistory: "سوابق گردش کاری",
      submit: "ثبت",
      actions: "اقدامات",
      bulkActions: "اقدامات گروهی",
      edit: "ویرایش",
      setting: "تنظیمات هدف",
      removeAll: "حذف همه",
      pictures: "تصاویر",
      shareScreen: "اشتراک گذاری صفحه",
      soundOff: "بی صدا کردن",
      soundOn: "باصدا کردن",
      sendMessage: "ارسال پیام",
      cameraOff: "بستن دوربین",
      cameraOn: "باز کردن دوربین",
      stopRecord: "توقف ضبط",
      startRecord: "شروع ضبط",
      stopRecordDescription: "آیا از توقف ضبط این جلسه اطمینان دارید؟",
      requestVideoCall: "درخواست تماس ویدیویی",
      answerAudio: "پاسخ صوتی",
      answerVideo: "پاسخ ویدیویی",
      generalFlow: "جریان عمومی",
      process: "فرآیند",
      appointmentFlow: "جریان قرار ملاقات",
      inProgress: "در دست اقدام",
      frezzed: "قفل شده",
      finished: "خاتمه یافته",
      inCartable: "در کارتابل",
      referred: "ارجاع شده",
      abbreviatedName: "نام اختصاری",
      searchResources: "منابع جستجو",
      key: "کلید",
      securityOperator: "عملگر امنیتی",
      appIsInitiating: "اپلیکیشن در حال آماده سازی می باشد.",
      reloadPage: "به روزرسانی صفحه",
      availableWhenComplete: "به محض تکمیل، در دسترس خواهد بود",
      microphoneSettings: "تنظیمات میکروفون",
      systemDefault: "پیشفرض سیستم",
      speakerSettings: "تنظیمات بلندگو",
      cameraSettings: "تنظیمات تصویر",
      test: "تست",
      socialContacts: "راه های ارتباطی",
      selectPlatform: "انتخاب پلتفرم",
      identification: "آی دی",
      enterIdPhoneNumber: "آی دی یا شماره تلفن را وارد کنید",
      uploadVideo: "آپلود ویدئو",
      manager: "مدیر",
      create: "ایجاد",
      automatic: "خودکار",
      manual: "دستی",
      notAllowed: "غیرمجاز",
      stop: "توقف",
      saveAndContinue: "ذخیره و ادامه",
      activeCamera: "فعال کردن دوربین",
      holdCurrentCallAndAnswer: "پاسخ و انتظار تماس فعلی",
      endCurrentCallAndAnswer: "پاسخ و پایان تماس فعلی",
      enableCamera: "فعال کردن دوربین",
      deactiveCamera: "غیرفعال کردن دوربین",
      hangUp: "قطع کردن تماس",
      allow: "مجاز",
      queue: "صف",
      formType: "نوع فرم",
      words: "کلمات"
    },
    message: {
      allCharactersAreTheSame: "همه کارکتر ها یکسان است",
      copied: "کپی شد",
      emailNotValid: "ایمیل وارد شده معتبر نیست",
      eventTrackingDesc: "فراخوانی رویداد ارسال دیتا مطابق زیر ارسال شود.",
      pageTrackingDesc: "هر صفحه ای که می خواهید بازدیدکنندگان آن ردیابی شوند در تگ head اضافه شود.",
      searchInAllDatabase: "در کل بانک اطلاعاتی جستجو شود.",
      tryAgain: "تلاش مجدد",
      userTrackingDesc: "داده های کاربران مطابق الگوریتم ارسال شود",
      withoutProtocol: "بدون وارد کردن http , https",
      pleaseSelect: "لطفا انتخاب کنید",
      successfullyAdded: "با موفقیت اضافه شد",
      successfullyEdited: "با موفقیت ویرایش شد",
      successfullyDeleted: "با موفقیت حذف شد",
      enterDigit: "رقم را وارد نمایید",
      enterPercent: "درصد را وارد نمایید",
      itemsSelectedWithCount: "{{count}} مورد انتخاب شده",
      setupLanguage: "در حال تنظیم زبان اپلیکیشن...",
      noValueHasBeenAddedYet: "هنوز هیچ ارزشی اضافه نشده است",
      enterValue: "یک مقدار وارد کنید",
      networkConnectionError: "لطفا اتصال اینترنت خود را بررسی و دوباره امتحان کنید",
      removeTagMessage: "با این عملیات تگ از تمامی دسته بندی ها حذف خواهد شد",
      removeTagConfirmation: "آیا مایل به حذف تگ {{tagName}} هستید؟",
      deleteCategoryConfirmation: "آیا از حذف داشبورد مطمئن هستید؟",
      validProtocolHint: "لطفا بدون http یا https وارد شود",
      additionalInformationDeletedRedirectedEditPage: "در صورت تایید، اطلاعات تکمیلی، حذف شده و شما به صفحه ی ویرایش انتقال داده می شوید",
      approvedAdditionalInformationDeletedEditPage: "در صورت تایید، اطلاعات تکمیلی، حذف شده و شما به صفحه ی ویرایش انتقال داده می شوید.",
      byDeletingThisCategoryAllRelatedUnitsAreAlsoDeleted: "با حذف این دسته بندی، تمامی واحدهای وابسته به آن نیز حذف می شوند.",
      chooseExcelImpotMethod: "شما میتوانید یکی از روش های ورود اطلاعات فایل اکسل خود را انتخاب نمایید",
      deleteCategoryAlert: "آیا از حذف دسته بندی اطمینان دارید ؟",
      deleteCategoryAlertError: "آیا مایل به حذف این دسته بندی هستید؟ با حذف این دسته بندی، تمامی واحد های وابسته به آن نیز حذف می شوند",
      deleteMessage: 'آیا مایل به حذف "{{value}}" هستید؟',
      dragMappingAndDropHere: "نگاشت خود را بکشید و اینجا رها کنید",
      dragUploadFile: "فایل خود را اینجا بکشید و رها کنید",
      enterCategoryCode: "نام کد دسته بندی را وارد نمایید",
      enterGroupCode: "کد دسته بندی را وارد کنید",
      enterMappingName: "نام نگاشت را وارد کنید",
      enterProductName: "نام محصول را وارد کنید",
      itemSelected: "مورد انتخاب شده است",
      maxGreatMin: "بیشینه باید بزرگتر از کمینه باشد",
      noInformation: "اطلاعات موجود نیست",
      operationSucceeded: "عملیات با موفقیت انجام شد",
      pleaseChoice: "لطفا انتخاب کنید",
      pleaseContactSupport: "لطفا با پشتیبانی تماس بگیرید",
      productHasVariantWarnMessage: "در صورت داشتن تنوع در محصول؛ ویژگی های آن را انتخاب و در غیر این صورت فرآیند قیمت گذاری را تکمیل کنید",
      rangeValidValueTo2: "مقدار صحیح بین عدد 0 تا 2 است",
      rights: "کلیه حقوق سامانه پیام گستر متعلق به شرکت تجارت الکترونیک اول است.",
      select: "لطفا انتخاب نمایید",
      selectBaseField: "لطفا یک فیلد مبنا انتخاب کنید",
      selectDesignTool: "ابزار طراحی را انتخاب کنید!",
      selectExcel: "اکسل را انتخاب نمایید",
      selectOnlyEmptyFields: "با انتخاب این گزینه، تنها فیلد های خالی گزینه های موجود پر خواهد شد",
      sendingLinkUserNameEntry: "نام کاربری خود را جهت ارسال لینک وارد کنید",
      setDefaultValueField: "لطفا مقدار پیشفرض این فیلد را تعیین کنید",
      successfullyCategoryAdded: "دسته بندی با موفقیت اضافه شد",
      successfullyCopied: "با موفقیت کپی شد",
      successfullyTagAdded: "تگ با موفقیت اضافه شد",
      supportedImageFormatDescription: "فرمت تصاویر پشتیبانی شده شامل png, gif, jpg و bmp است و حداکثر اندازه آن باید از ۴ مگابایت بیشتر باشد. در این بخش می توانید تعداد ۵ تصویر برای محصول خود بارگذاری نمایید",
      tagDeletedAlertError: "آیا مایل به حذف {{tags}} هستید؟ با این عملیات تگ از تمامی دسته بندی ها حذف خواهد شد",
      userDiscarded: "کاربر انصراف داده است",
      ValidValueFrom0: "مقدار صحیح بزرگ تر از 0 است",
      variantWillNotApply: "این تنوع اعمال نخواهد شد",
      yesDelete: "بله حذف شود",
      processing: "در حال پردازش...",
      noResultFound: "نتیجه ای یافت نشد",
      loadDataError: "خطا در دریافت اطلاعات",
      copyQrCodeLink: ` اگر قادر به اسکن نیستید کد زیر را کپی و وارد کنید\r
`,
      authenticationTabMessage1: "QRCode زیر را با استفاده از برنامه احراز هویت مانند Google Authenticator اسکن کنید.",
      authenticationTabMessage2: "پس از اسکن QRCode، کد دو عاملی 6 رقمی را وارد کنید.",
      the2faWasCopied: "کد دو عاملی کپی شد",
      twoStepAuthenticationTitle: "احراز هویت دو مرحله ای هنوز فعال نشده است.",
      twoStepAuthenticationDescription: "امنیت حساب کاربری خود را با فعالسازی احرازهویت دو عاملی افزایش دهید و از دسترسی غیرمجاز به حسابتان جلوگیری کنید.",
      twoStepAuthenticationIsActive: "احراز هویت دو مرحله ای فعال شده است.",
      protectedModalDesc1: "لطفا جهت {{purpose}}، کد ارسال شده به {{sentTo}} خود را وارد کنید.",
      protectedModalDesc2: "لطفا جهت {{purpose}}، کد ارسال شده به {{sentTo}} و کد احراز هویت دو مرحله ای خود را وارد کنید.",
      securityCodeMustBeAtLeast6DigitsLong: "کد امنیتی باید حداقل 6 رقم باشد",
      mobileConfirmationMessage: "برای ثبت این شماره باید آن را تایید کنید.",
      insertVerifyEmailOtp: "لطفاً کد تایید دریافتی از طریق پیامک و ایمیل را در قسمت زیر وارد کنید.",
      enterNewOtpCode: "کدتایید پیامکی شماره جدید را وارد کنید",
      enterOldOtpCode: "لطفا کدتایید پیامکی  شماره قبلی را وارد کنید",
      enterEmailCode: "کد تایید ایمیل را وارد کنید",
      emailConfirmationMessage: "برای ثبت این ایمیل باید آن را تایید کنید.",
      enterOtpCode: "لطفا کد تایید پیامکی را وارد کنید",
      supportCodeWarning: "این کد پشتیبانی را در جای امن ذخیره کنید.",
      supportCodeWarning2: "این کد به شما این امکان را می دهد تا در صورت گم شدن تلفن خود، کد احراز هویت خود را بازیابی کنید. در غیر این صورت  بازنشانی کد احراز هویت ۷ روز طول خواهد کشید.",
      noUserInThisGoal: "کاربری در این هدف وجود ندارد",
      enterPhoneNumber: "شماره تلفن را وارد کنید",
      accessDenied: "متاسفانه شما به این صفحه دسترسی ندارید!",
      notFound: "صفحه مورد نظر یافت نشد!",
      backToHome: "بازگشت به صفحه اصلی",
      deletePermissionConfirmation: "آیا از حذف دسترسی اطمینان دارید؟",
      addPermissionConfirmation: "آیا از ایجاد دسترسی اطمینان دارید؟",
      isConfirmed: "آیا تغییرات را تایید میکنید؟",
      invalidDomainTitle: "شما امکان دسترسی به این دامنه را ندارید!",
      invalidDomainDescription: "دسترسی به این دامنه فقط برای کاربران همان دامنه امکان‌پذیر است."
    },
    error: {
      codeMustBe6Characters: "کد احراز هویت می بایست 6 رقم باشد",
      minLengthIs5: "تعداد کارکتر ها باید حداقل 5 باشد",
      passwordValidation: "رمز عبور بایستی شامل حروف بزرگ، حروف کوچک، عدد و کارکتر خاص باشد",
      phoneNumberNotValid: "شماره تلفن وارد شده معتبر نیست",
      modalHint1: "تا زمانی که در این دسته‌بندی محصول وجود داشته باشد شما قادر به حذف آن دسته‌بندی نیستید.",
      intMax10: "مقدار صحیح نمی تواند بیشتر از 10 رقم باشد.",
      floatMax8: "بیشتر از 8 رقم اعشار نمی تواند باشد.",
      tagFieldRequired: "فیلد تگ اجباری است",
      categoryFieldRequired: "فیلد دسته بندی اجباری است ",
      usernameRequired: "نام کاربری الزامی است",
      allLanguagesMustBefilled: "تمامی زبان ها باید مقدار داشته باشند.",
      cantBeNegative: "فیلد نمی تواند منفی باشد",
      classNameError: "خطا در نام کلاس ها",
      currencyUnitEmptynessError: "فیلد واحد ارز اجباری است.",
      currentSystemLanguageNameError: "انتخاب نام برای زبان جاری سیستم اجباریست",
      dateFieldEmptynessError: "فیلد تاریخ اجباری است",
      dateMustBeFromToday: "تاریخ باید از امروز به بعد باشد.",
      duplicated: "تکراری است",
      emailEmptynessError: "فیلد ایمیل اجباری است.",
      emailValidationError: "ایمیل اشتباه وارد شده است.",
      errorDeleteRule: "خطا در حذف قوانین امتیاز دهی",
      errorNotNumber: "مقدار امتیاز باید عدد باشد",
      errorOccurred: "خطایی رخ داده است",
      fieldRequired: "فیلد الزامی است",
      fillRequiredField: "فیلد های اجباری را پر نمایید",
      formatTypeRequired: "نوع فرم الزامیست",
      listNameEmptynessError: "فیلد نام لیست اجباری است",
      maximumDiscountMaxPriceError: "باید از حداقل قیمت بیشتر باشد",
      maximumDiscountMinPriceError: "باید از حداکثر قیمت کمتر باشد",
      minAndMaxRequired: "مقدار بیشترین و کمترین الزامی است!",
      missing: "یافت نشد",
      nameError: "خطا در نام",
      nameRequired: "نام اجباری است",
      noColumnAdded: "هنوز هیچ ستونی اضافه نکرده‌اید!",
      noFiltersAdded: "فیلتری تعیین نگردیده است",
      noInternetConnection: "ارتباط  با سرور قطع است",
      noItem: "موردی وجود ندارد",
      noItemSelected: "موردی انتخاب نشده است",
      noPermissionsAvailable: "هنوز هیچ دسترسی انتخاب نشده است",
      noPermissionsFound: "دسترسی پیدا نشد",
      noProductsAvailable: "هنوز هیچ محصولی انتخاب نشده است",
      notMatchPasswords: "رمز عبور یکسان نمی باشد",
      onlyEmptyFields: "فقط فیلد های خالی پر شوند",
      pointAmountError: "خطا در مقادیر امتیاز",
      startDateSmaller: "تاریخ شروع باید قبل از تاریخ پایان باشد!",
      startEndDateError: "تاریخ پایان نمیتواند قبل از تاریخ شروع باشد",
      thisFieldRequired: "این فیلد الزامی است",
      userDuplicated: "کاربر تکراری است",
      userNotFound: "کاربری پیدا نشد.",
      noNegativeNumbersAllowed: "اعداد منفی غیرمجاز",
      percentShouldntBeOver100: "درصد نباید بیشتر از 100 باشد",
      onlyEnglishNumberAndUnderlineAllowed: "فقط حروف انگلیسی , عدد و _ مجاز است"
    }
  }
}, ee = b, j = localStorage.getItem("language") ?? "fa";
ee.use(xt).use(Pe);
function be(i) {
  return ["fa", "en"].includes(i) ? i : j;
}
function ve(i) {
  try {
    const e = document.getElementsByTagName("html"), t = document.getElementsByTagName("body"), a = Array.from(e), n = Array.from(t);
    a.forEach((r) => {
      r.lang = i;
    }), n.forEach((r) => {
      const o = i === "fa" ? "rtl" : "ltr", l = Array.from(r.classList.values()).filter((c) => c.startsWith("direction"));
      r.classList.remove(...l), r.classList.add(`direction-${o}`);
    });
  } catch {
  }
}
ee.init({
  resources: {
    fa: {
      translation: At
    },
    en: {
      translation: Dt
    }
  },
  lng: be(j),
  fallbackLng: j,
  detection: {
    caches: ["localStorage", "cookie"],
    order: ["localStorage", "cookie", "htmlTag", "navigator"],
    lookupLocalStorage: "language",
    lookupCookie: "language"
  }
}).then(() => {
  typeof document < "u" && (ve(be(j)), ee.on("languageChanged", ve));
});
const Tt = {
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
export {
  Et as a,
  Tt as c,
  kt as g,
  ee as i,
  Nt as t
};
