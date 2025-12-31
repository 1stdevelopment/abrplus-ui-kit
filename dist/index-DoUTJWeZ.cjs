"use strict";
const jsxRuntime = require("react/jsx-runtime");
const colors = require("./colors-Dsi7eBuO.cjs");
const index = require("./index-kmBTNrbf.cjs");
const React = require("react");
const require$$2 = require("react-dom");
const reactI18next = require("react-i18next");
const tailwindMerge = require("tailwind-merge");
const antd = require("antd");
require("antd/locale/en_US");
require("antd/locale/fa_IR");
const starkString = require("starkstring");
const lib$2 = require("antd/lib");
require("i18next");
class InternalRequestError extends Error {
  constructor(message, status, response) {
    super(message);
    this.message = message;
    this.status = status;
    this.response = response;
  }
  isApiException = true;
  static isRequestError(error) {
    return error.isApiException;
  }
}
const BorderedTitle = ({
  title,
  align = "start",
  textSize = 16,
  textColor = colors.colors.primary_dark_1
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "w-full", align: "center", gap: 8, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: align !== "start", children: /* @__PURE__ */ jsxRuntime.jsx("hr", { className: "border-light-7 flex  h-[1px] flex-1 border" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: typeof title === "string", fallback: title, children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: textSize, color: textColor, weight: "medium", children: title }) }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: align !== "end", children: /* @__PURE__ */ jsxRuntime.jsx("hr", { className: "border-light-7 flex h-[1px] flex-1 border" }) })
  ] });
};
const Breadcrumbs = ({ route }) => {
  const routeMap = route.useMap();
  const items = routeMap.map(({ title, create }) => ({ title, path: create() }));
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Breadcrumb,
    {
      items,
      separator: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Chevron_Left", size: 22, color: colors.colors.primary }),
      itemRender: (route2, _, items2) => {
        if (!route2.title || !route2.path) return null;
        const last = items2.indexOf(route2) === items2.length - 1;
        if (last) {
          return /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: colors.colors.primary, children: route2.title });
        }
        return /* @__PURE__ */ jsxRuntime.jsx(index.Link, { to: route2.path, children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: colors.colors.secondary, children: route2.title }) });
      }
    }
  );
};
const Card = ({ children, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge("bg-white-ff card-shadow w-full rounded p-6", className),
      ...rest,
      children
    }
  );
};
const Checkbox = (props) => /* @__PURE__ */ jsxRuntime.jsx(antd.Checkbox, { ...props });
Checkbox.Group = antd.Checkbox.Group;
const Collapse = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Collapse, { ...props });
};
Collapse.Panel = antd.Collapse.Panel;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var main$1 = { exports: {} };
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var moment$2 = { exports: {} };
var moment$1 = moment$2.exports;
var hasRequiredMoment;
function requireMoment() {
  if (hasRequiredMoment) return moment$2.exports;
  hasRequiredMoment = 1;
  (function(module2, exports$1) {
    (function(global2, factory) {
      module2.exports = factory();
    })(moment$1, (function() {
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i, arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m) {
        var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
        if (isNowValid) {
          flags = getParsingFlags(m);
          parsedParts = some.call(flags.parsedDateParts, function(i) {
            return i != null;
          });
          isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
        }
        if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
        } else {
          return isNowValid;
        }
        return m._isValid;
      }
      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to2, from2) {
        var i, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from2._isAMomentObject)) {
          to2._isAMomentObject = from2._isAMomentObject;
        }
        if (!isUndefined(from2._i)) {
          to2._i = from2._i;
        }
        if (!isUndefined(from2._f)) {
          to2._f = from2._f;
        }
        if (!isUndefined(from2._l)) {
          to2._l = from2._l;
        }
        if (!isUndefined(from2._strict)) {
          to2._strict = from2._strict;
        }
        if (!isUndefined(from2._tzm)) {
          to2._tzm = from2._tzm;
        }
        if (!isUndefined(from2._isUTC)) {
          to2._isUTC = from2._isUTC;
        }
        if (!isUndefined(from2._offset)) {
          to2._offset = from2._offset;
        }
        if (!isUndefined(from2._pf)) {
          to2._pf = getParsingFlags(from2);
        }
        if (!isUndefined(from2._locale)) {
          to2._locale = from2._locale;
        }
        if (momentPropertiesLen > 0) {
          for (i = 0; i < momentPropertiesLen; i++) {
            prop = momentProperties[i];
            val = from2[prop];
            if (!isUndefined(val)) {
              to2[prop] = val;
            }
          }
        }
        return to2;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = /* @__PURE__ */ new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key, argLen = arguments.length;
            for (i = 0; i < argLen; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(
              msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
            );
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now2) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now2) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign3 = number >= 0;
        return (sign3 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token2, padded, ordinal2, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token2) {
          formatTokenFunctions[token2] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal2) {
          formatTokenFunctions[ordinal2] = function() {
            return this.localeData().ordinal(
              func.apply(this, arguments),
              token2
            );
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format2) {
        var array = format2.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i2;
          for (i2 = 0; i2 < length; i2++) {
            output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
          }
          return output;
        };
      }
      function formatMoment(m, format2) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format2 = expandFormat(format2, m.localeData());
        formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
        return formatFunctions[format2](m);
      }
      function expandFormat(format2, locale2) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale2.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format2)) {
          format2 = format2.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
          );
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format2;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format2 || !formatUpper) {
          return format2;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff2, output) {
        var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
        return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
      }
      var aliases = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
      };
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
      };
      function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
          }
        }
        units.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return units;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
      regexes = {};
      function addRegexToken(token2, regex, strictRegex) {
        regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token2, config) {
        if (!hasOwnProp(regexes, token2)) {
          return new RegExp(unescapeFormat(token2));
        }
        return regexes[token2](config._strict, config._locale);
      }
      function unescapeFormat(s) {
        return regexEscape(
          s.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(matched, p1, p2, p3, p4) {
              return p1 || p2 || p3 || p4;
            }
          )
        );
      }
      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      var tokens = {};
      function addParseToken(token2, callback) {
        var i, func = callback, tokenLen;
        if (typeof token2 === "string") {
          token2 = [token2];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        tokenLen = token2.length;
        for (i = 0; i < tokenLen; i++) {
          tokens[token2[i]] = func;
        }
      }
      function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token3) {
          config._w = config._w || {};
          callback(input, config._w, config, token3);
        });
      }
      function addTimeToArrayFromToken(token2, input, config) {
        if (input != null && hasOwnProp(tokens, token2)) {
          tokens[token2](input, config._a, config, token2);
        }
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      addFormatToken("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      });
      addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken(0, ["YYYY", 4], 0, "year");
      addFormatToken(0, ["YYYYY", 5], 0, "year");
      addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken(["YYYYY", "YYYYYY"], YEAR);
      addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
      });
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get2(this, unit);
          }
        };
      }
      function get2(mom, unit) {
        if (!mom.isValid()) {
          return NaN;
        }
        var d = mom._d, isUTC = mom._isUTC;
        switch (unit) {
          case "Milliseconds":
            return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
          case "Seconds":
            return isUTC ? d.getUTCSeconds() : d.getSeconds();
          case "Minutes":
            return isUTC ? d.getUTCMinutes() : d.getMinutes();
          case "Hours":
            return isUTC ? d.getUTCHours() : d.getHours();
          case "Date":
            return isUTC ? d.getUTCDate() : d.getDate();
          case "Day":
            return isUTC ? d.getUTCDay() : d.getDay();
          case "Month":
            return isUTC ? d.getUTCMonth() : d.getMonth();
          case "FullYear":
            return isUTC ? d.getUTCFullYear() : d.getFullYear();
          default:
            return NaN;
        }
      }
      function set$1(mom, unit, value) {
        var d, isUTC, year, month, date;
        if (!mom.isValid() || isNaN(value)) {
          return;
        }
        d = mom._d;
        isUTC = mom._isUTC;
        switch (unit) {
          case "Milliseconds":
            return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
          case "Seconds":
            return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
          case "Minutes":
            return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
          case "Hours":
            return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
          case "Date":
            return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
          // case 'Day': // Not real
          //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
          // case 'Month': // Not used because we need to pass two variables
          //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
          case "FullYear":
            break;
          // See below ...
          default:
            return;
        }
        year = value;
        month = mom.month();
        date = mom.date();
        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
        void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
          for (i = 0; i < prioritizedLen; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      function mod(n, x) {
        return (n % x + x) % x;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken("MMM", 0, 0, function(format2) {
        return this.localeData().monthsShort(this, format2);
      });
      addFormatToken("MMMM", 0, 0, function(format2) {
        return this.localeData().months(this, format2);
      });
      addRegexToken("M", match1to2, match1to2NoLeadingZero);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", function(isStrict, locale2) {
        return locale2.monthsShortRegex(isStrict);
      });
      addRegexToken("MMMM", function(isStrict, locale2) {
        return locale2.monthsRegex(isStrict);
      });
      addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
        var month = config._locale.monthsParse(input, token2, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m, format2) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort(m, format2) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse(monthName, format2, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2e3, i]);
            this._shortMonthsParse[i] = this.monthsShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format2, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format2, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
              "^" + this.months(mom, "").replace(".", "") + "$",
              "i"
            );
            this._shortMonthsParse[i] = new RegExp(
              "^" + this.monthsShort(mom, "").replace(".", "") + "$",
              "i"
            );
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value) {
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        var month = value, date = mom.date();
        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
        void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get2(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          shortP = regexEscape(this.monthsShort(mom, ""));
          longP = regexEscape(this.months(mom, ""));
          shortPieces.push(shortP);
          longPieces.push(longP);
          mixedPieces.push(longP);
          mixedPieces.push(shortP);
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._monthsShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
      }
      function createDate(y, m, d, h, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", ["ww", 2], "wo", "week");
      addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
      addRegexToken("w", match1to2, match1to2NoLeadingZero);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2, match1to2NoLeadingZero);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken(
        ["w", "ww", "W", "WW"],
        function(input, week, config, token2) {
          week[token2.substr(0, 1)] = toInt(input);
        }
      );
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
        // The week that contains Jan 6th is the first week of the year.
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, function(format2) {
        return this.localeData().weekdaysMin(this, format2);
      });
      addFormatToken("ddd", 0, 0, function(format2) {
        return this.localeData().weekdaysShort(this, format2);
      });
      addFormatToken("dddd", 0, 0, function(format2) {
        return this.localeData().weekdays(this, format2);
      });
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", function(isStrict, locale2) {
        return locale2.weekdaysMinRegex(isStrict);
      });
      addRegexToken("ddd", function(isStrict, locale2) {
        return locale2.weekdaysShortRegex(isStrict);
      });
      addRegexToken("dddd", function(isStrict, locale2) {
        return locale2.weekdaysRegex(isStrict);
      });
      addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(input, token2, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
        week[token2] = toInt(input);
      });
      function parseWeekday(input, locale2) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale2.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale2) {
        if (typeof input === "string") {
          return locale2.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m, format2) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format2, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([2e3, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
              mom,
              ""
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
              mom,
              ""
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format2, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format2, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
              "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._shortWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
            this._minWeekdaysParse[i] = new RegExp(
              "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
              "i"
            );
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = get2(this, "Day");
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(
          "^(" + longPieces.join("|") + ")",
          "i"
        );
        this._weekdaysShortStrictRegex = new RegExp(
          "^(" + shortPieces.join("|") + ")",
          "i"
        );
        this._weekdaysMinStrictRegex = new RegExp(
          "^(" + minPieces.join("|") + ")",
          "i"
        );
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", ["HH", 2], 0, "hour");
      addFormatToken("h", ["hh", 2], 0, hFormat);
      addFormatToken("k", ["kk", 2], 0, kFormat);
      addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      function meridiem(token2, lowercase) {
        addFormatToken(token2, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
          );
        });
      }
      meridiem("a", true);
      meridiem("A", false);
      function matchMeridiem(isStrict, locale2) {
        return locale2._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2, match1to2HasZero);
      addRegexToken("h", match1to2, match1to2NoLeadingZero);
      addRegexToken("k", match1to2, match1to2NoLeadingZero);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken(["H", "HH"], HOUR);
      addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours2, minutes2, isLower) {
        if (hours2 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale2, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale2 = loadLocale(split.slice(0, j).join("-"));
            if (locale2) {
              return locale2;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function isLocaleNameSane(name) {
        return !!(name && name.match("^[^/\\\\]*$"));
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === void 0 && true && module2 && module2.exports && isLocaleNameSane(name)) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = commonjsRequire;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn(
                "Locale " + key + " not found. Did you forget to load it?"
              );
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale2, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            );
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale2 = loadLocale(config.parentLocale);
              if (locale2 != null) {
                parentConfig = locale2._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name,
                  config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach(function(x) {
              defineLocale(x.name, x.config);
            });
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale2, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale2 = new Locale(config);
            locale2.parentLocale = locales[name];
            locales[name] = locale2;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale2;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale2 = loadLocale(key);
          if (locale2) {
            return locale2;
          }
          key = [key];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l = isoDatesLen; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimesLen; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s) {
        return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2]
          ).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
          );
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = /* @__PURE__ */ new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(config) {
          config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
        }
      );
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(
          null,
          input
        );
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(
            w.GG,
            config._a[YEAR],
            weekOfYear(createLocal(), 1, 4).year
          );
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
          week = defaults(w.w, curWeek.week);
          if (w.d != null) {
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {
      };
      hooks.RFC_2822 = function() {
      };
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens2.length;
        for (i = 0; i < tokenLen; i++) {
          token2 = tokens2[i];
          parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(
              string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token2]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token2);
            }
            addTimeToArrayFromToken(token2, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token2);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(
          config._locale,
          config._a[HOUR],
          config._meridiem
        );
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale2, hour, meridiem2) {
        var isPm;
        if (meridiem2 == null) {
          return hour;
        }
        if (locale2.meridiemHour != null) {
          return locale2.meridiemHour(hour, meridiem2);
        } else if (locale2.isPM != null) {
          isPm = locale2.isPM(meridiem2);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = /* @__PURE__ */ new Date(NaN);
          return;
        }
        for (i = 0; i < configfLen; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
        config._a = map(
          [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
          function(obj) {
            return obj && parseInt(obj, 10);
          }
        );
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format2 = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format2 === void 0 && input === "") {
          return createInvalid({ nullInput: true });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format2)) {
          configFromStringAndArray(config);
        } else if (format2) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
        var c = {};
        if (format2 === true || format2 === false) {
          strict = format2;
          format2 = void 0;
        }
        if (locale2 === true || locale2 === false) {
          strict = locale2;
          locale2 = void 0;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = void 0;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale2;
        c._i = input;
        c._f = format2;
        c._strict = strict;
        return createFromConfig(c);
      }
      function createLocal(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, false);
      }
      var prototypeMin = deprecate(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        }
      ), prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }
      );
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min2() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max2() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      };
      var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid(m) {
        var key, unitHasDecimal = false, i, orderLen = ordering.length;
        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }
        for (i = 0; i < orderLen; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
        minutes2 * 6e4 + // 1000 * 60
        hours2 * 1e3 * 60 * 60;
        this._days = +days2 + weeks2 * 7;
        this._months = +months2 + quarters * 3 + years2 * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token2, separator) {
        addFormatToken(token2, 0, 0, function() {
          var offset2 = this.utcOffset(), sign3 = "+";
          if (offset2 < 0) {
            offset2 = -offset2;
            sign3 = "-";
          }
          return sign3 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
        });
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes2;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        minutes2 = +(parts[1] * 60) + toInt(parts[2]);
        return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
      }
      function cloneWithOffset(input, model) {
        var res, diff2;
        if (model._isUTC) {
          res = model.clone();
          diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff2);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {
      };
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset2 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset2 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(
                this,
                createDuration(input - offset2, "m"),
                1,
                false
              );
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset2 : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign3, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign3 = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign3,
            h: toInt(match[HOUR]) * sign3,
            m: toInt(match[MINUTE]) * sign3,
            s: toInt(match[SECOND]) * sign3,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign3
            // the millisecond decimal point is included in the match
          };
        } else if (match = isoRegex.exec(input)) {
          sign3 = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign3),
            M: parseIso(match[3], sign3),
            w: parseIso(match[4], sign3),
            d: parseIso(match[5], sign3),
            h: parseIso(match[6], sign3),
            m: parseIso(match[7], sign3),
            s: parseIso(match[8], sign3)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(
            createLocal(duration.from),
            createLocal(duration.to)
          );
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign3) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign3;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(
              name,
              "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            );
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months2) {
          setMonth(mom, get2(mom, "Month") + months2 * isAdding);
        }
        if (days2) {
          set$1(mom, "Date", get2(mom, "Date") + days2 * isAdding);
        }
        if (milliseconds2) {
          mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days2 || months2);
        }
      }
      var add2 = createAdder(1, "add"), subtract2 = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i, property, propertyLen = properties2.length;
        for (i = 0; i < propertyLen; i += 1) {
          property = properties2[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i, property;
        for (i = 0; i < properties2.length; i += 1) {
          property = properties2[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now2) {
        var diff2 = myMoment.diff(now2, "days", true);
        return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats2) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = void 0;
            formats2 = void 0;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats2 = void 0;
          } else if (isCalendarSpec(arguments[0])) {
            formats2 = arguments[0];
            time = void 0;
          }
        }
        var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats2 && (isFunction(formats2[format2]) ? formats2[format2].call(this, now2) : formats2[format2]);
        return this.format(
          output || this.localeData().calendar(format2, this, createLocal(now2))
        );
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from2, to2, units, inclusivity) {
        var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            output = monthDiff(this, that) / 12;
            break;
          case "month":
            output = monthDiff(this, that);
            break;
          case "quarter":
            output = monthDiff(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
          // 1000
          case "minute":
            output = (this - that) / 6e4;
            break;
          // 1000 * 60
          case "hour":
            output = (this - that) / 36e5;
            break;
          // 1000 * 60 * 60
          case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
          // 1000 * 60 * 60 * 24, negate dst
          case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
          // 1000 * 60 * 60 * 24 * 7, negate dst
          default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(
            m,
            utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
          }
        }
        return formatMoment(
          m,
          utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(key) {
          if (key === void 0) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        }
      );
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            time = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time = this._d.valueOf();
            time -= mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            );
            break;
          case "minute":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_MINUTE);
            break;
          case "second":
            time = this._d.valueOf();
            time -= mod$1(time, MS_PER_SECOND);
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time = startOfDate(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            time = startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time = this._d.valueOf();
            time += MS_PER_HOUR - mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            ) - 1;
            break;
          case "minute":
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
            break;
          case "second":
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
            break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m = this;
        return [
          m.year(),
          m.month(),
          m.date(),
          m.hour(),
          m.minute(),
          m.second(),
          m.millisecond()
        ];
      }
      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", ["y", 1], "yo", "eraYear");
      addFormatToken("y", ["yy", 2], 0, "eraYear");
      addFormatToken("y", ["yyy", 3], 0, "eraYear");
      addFormatToken("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(input, array, config, token2) {
          var era = config._locale.erasParse(input, token2, config._strict);
          if (era) {
            getParsingFlags(config).era = era;
          } else {
            getParsingFlags(config).invalidEra = input;
          }
        }
      );
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
      addParseToken(["yo"], function(input, array, config, token2) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });
      function localeEras(m, format2) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
            case "string":
              date = hooks(eras[i].since).startOf("day");
              eras[i].since = date.valueOf();
              break;
          }
          switch (typeof eras[i].until) {
            case "undefined":
              eras[i].until = Infinity;
              break;
            case "string":
              date = hooks(eras[i].until).startOf("day").valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format2, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format2) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i];
                }
                break;
              case "NNNN":
                if (name === eraName) {
                  return eras[i];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i];
                }
                break;
            }
          } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === void 0) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? 1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale2) {
        return locale2.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale2) {
        return locale2.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale2) {
        return locale2.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale2) {
        return locale2._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          erasName = regexEscape(eras[i].name);
          erasAbbr = regexEscape(eras[i].abbr);
          erasNarrow = regexEscape(eras[i].narrow);
          namePieces.push(erasName);
          abbrPieces.push(erasAbbr);
          narrowPieces.push(erasNarrow);
          mixedPieces.push(erasName);
          mixedPieces.push(erasAbbr);
          mixedPieces.push(erasNarrow);
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp(
          "^(" + narrowPieces.join("|") + ")",
          "i"
        );
      }
      addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken(token2, getter) {
        addFormatToken(0, [token2, token2.length], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(input, week, config, token2) {
          week[token2.substr(0, 2)] = toInt(input);
        }
      );
      addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
        week[token2] = hooks.parseTwoDigitYear(input);
      });
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
          this,
          input,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addRegexToken("Q", match1);
      addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", ["DD", 2], "Do", "date");
      addRegexToken("D", match1to2, match1to2NoLeadingZero);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", function(isStrict, locale2) {
        return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(["D", "DD"], DATE);
      addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input);
      });
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", ["mm", 2], 0, "minute");
      addRegexToken("m", match1to2, match1to2HasZero);
      addRegexToken("mm", match1to2, match2);
      addParseToken(["m", "mm"], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", ["ss", 2], 0, "second");
      addRegexToken("s", match1to2, match1to2HasZero);
      addRegexToken("ss", match1to2, match2);
      addParseToken(["s", "ss"], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ["SSS", 3], 0, "millisecond");
      addFormatToken(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add2;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract2;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate(
        "dates accessor is deprecated. Use date instead.",
        getSetDayOfMonth
      );
      proto.months = deprecate(
        "months accessor is deprecated. Use month instead",
        getSetMonth
      );
      proto.years = deprecate(
        "years accessor is deprecated. Use year instead",
        getSetYear
      );
      proto.zone = deprecate(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        getSetZone
      );
      proto.isDSTShifted = deprecate(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        isDaylightSavingTimeShifted
      );
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format2, index2, field, setter) {
        var locale2 = getLocale(), utc = createUTC().set(setter, index2);
        return locale2[field](utc, format2);
      }
      function listMonthsImpl(format2, index2, field) {
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
        if (index2 != null) {
          return get$1(format2, index2, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format2, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format2, index2, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format2)) {
            index2 = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        } else {
          format2 = localeSorted;
          index2 = format2;
          localeSorted = false;
          if (isNumber(format2)) {
            index2 = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        }
        var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
        if (index2 != null) {
          return get$1(format2, (index2 + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format2, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format2, index2) {
        return listMonthsImpl(format2, index2, "months");
      }
      function listMonthsShort(format2, index2) {
        return listMonthsImpl(format2, index2, "monthsShort");
      }
      function listWeekdays(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        getSetGlobalLocale
      );
      hooks.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        getLocale
      );
      var mathAbs = Math.abs;
      function abs2() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
        if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
          milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
          days2 = 0;
          months2 = 0;
        }
        data.milliseconds = milliseconds2 % 1e3;
        seconds2 = absFloor(milliseconds2 / 1e3);
        data.seconds = seconds2 % 60;
        minutes2 = absFloor(seconds2 / 60);
        data.minutes = minutes2 % 60;
        hours2 = absFloor(minutes2 / 60);
        data.hours = hours2 % 24;
        days2 += absFloor(hours2 / 24);
        monthsFromDays = absFloor(daysToMonths(days2));
        months2 += monthsFromDays;
        days2 -= absCeil(monthsToDays(monthsFromDays));
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        data.days = days2;
        data.months = months2;
        data.years = years2;
        return this;
      }
      function daysToMonths(days2) {
        return days2 * 4800 / 146097;
      }
      function monthsToDays(months2) {
        return months2 * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days2, months2, milliseconds2 = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days2 = this._days + milliseconds2 / 864e5;
          months2 = this._months + daysToMonths(days2);
          switch (units) {
            case "month":
              return months2;
            case "quarter":
              return months2 / 3;
            case "year":
              return months2 / 12;
          }
        } else {
          days2 = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case "week":
              return days2 / 7 + milliseconds2 / 6048e5;
            case "day":
              return days2 + milliseconds2 / 864e5;
            case "hour":
              return days2 * 24 + milliseconds2 / 36e5;
            case "minute":
              return days2 * 1440 + milliseconds2 / 6e4;
            case "second":
              return days2 * 86400 + milliseconds2 / 1e3;
            // Math.floor prevents floating point math errors here
            case "millisecond":
              return Math.floor(days2 * 864e5) + milliseconds2;
            default:
              throw new Error("Unknown unit " + units);
          }
        }
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round2 = Math.round, thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11
        // months to year
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
        return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
        var duration = createDuration(posNegDuration).abs(), seconds2 = round2(duration.as("s")), minutes2 = round2(duration.as("m")), hours2 = round2(duration.as("h")), days2 = round2(duration.as("d")), months2 = round2(duration.as("M")), weeks2 = round2(duration.as("w")), years2 = round2(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
        if (thresholds2.w != null) {
          a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
        }
        a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale2;
        return substituteTimeAgo.apply(null, a);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === void 0) {
          return round2;
        }
        if (typeof roundingFunction === "function") {
          round2 = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale2, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale2 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale2);
        if (withSuffix) {
          output = locale2.pastFuture(+this, output);
        }
        return locale2.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign2(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes2 = absFloor(seconds2 / 60);
        hours2 = absFloor(minutes2 / 60);
        seconds2 %= 60;
        minutes2 %= 60;
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign2(this._months) !== sign2(total) ? "-" : "";
        daysSign = sign2(this._days) !== sign2(total) ? "-" : "";
        hmsSign = sign2(this._milliseconds) !== sign2(total) ? "-" : "";
        return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs2;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        toISOString$1
      );
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
      });
      hooks.version = "2.30.1";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min2;
      hooks.max = max2;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        // <input type="datetime-local" step="0.001" />
        DATE: "YYYY-MM-DD",
        // <input type="date" />
        TIME: "HH:mm",
        // <input type="time" />
        TIME_SECONDS: "HH:mm:ss",
        // <input type="time" step="1" />
        TIME_MS: "HH:mm:ss.SSS",
        // <input type="time" step="0.001" />
        WEEK: "GGGG-[W]WW",
        // <input type="week" />
        MONTH: "YYYY-MM"
        // <input type="month" />
      };
      return hooks;
    }));
  })(moment$2);
  return moment$2.exports;
}
var jalaaliJs;
var hasRequiredJalaaliJs;
function requireJalaaliJs() {
  if (hasRequiredJalaaliJs) return jalaaliJs;
  hasRequiredJalaaliJs = 1;
  jalaaliJs = {
    toJalaali,
    toGregorian,
    isValidJalaaliDate,
    isLeapJalaaliYear,
    jalaaliMonthLength,
    jalCal,
    j2d,
    d2j,
    g2d,
    d2g,
    jalaaliToDateObject,
    jalaaliWeek
  };
  var breaks = [
    -61,
    9,
    38,
    199,
    426,
    686,
    756,
    818,
    1111,
    1181,
    1210,
    1635,
    2060,
    2097,
    2192,
    2262,
    2324,
    2394,
    2456,
    3178
  ];
  function toJalaali(gy, gm, gd) {
    if (Object.prototype.toString.call(gy) === "[object Date]") {
      gd = gy.getDate();
      gm = gy.getMonth() + 1;
      gy = gy.getFullYear();
    }
    return d2j(g2d(gy, gm, gd));
  }
  function toGregorian(jy, jm, jd) {
    return d2g(j2d(jy, jm, jd));
  }
  function isValidJalaaliDate(jy, jm, jd) {
    return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaaliMonthLength(jy, jm);
  }
  function isLeapJalaaliYear(jy) {
    return jalCalLeap(jy) === 0;
  }
  function jalaaliMonthLength(jy, jm) {
    if (jm <= 6) return 31;
    if (jm <= 11) return 30;
    if (isLeapJalaaliYear(jy)) return 30;
    return 29;
  }
  function jalCalLeap(jy) {
    var bl = breaks.length, jp = breaks[0], jm, jump, leap, n, i;
    if (jy < jp || jy >= breaks[bl - 1])
      throw new Error("Invalid Jalaali year " + jy);
    for (i = 1; i < bl; i += 1) {
      jm = breaks[i];
      jump = jm - jp;
      if (jy < jm)
        break;
      jp = jm;
    }
    n = jy - jp;
    if (jump - n < 6)
      n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
    return leap;
  }
  function jalCal(jy, withoutLeap) {
    var bl = breaks.length, gy = jy + 621, leapJ = -14, jp = breaks[0], jm, jump, leap, leapG, march, n, i;
    if (jy < jp || jy >= breaks[bl - 1])
      throw new Error("Invalid Jalaali year " + jy);
    for (i = 1; i < bl; i += 1) {
      jm = breaks[i];
      jump = jm - jp;
      if (jy < jm)
        break;
      leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
      jp = jm;
    }
    n = jy - jp;
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4)
      leapJ += 1;
    leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
    march = 20 + leapJ - leapG;
    if (withoutLeap) return { gy, march };
    if (jump - n < 6)
      n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
    return {
      leap,
      gy,
      march
    };
  }
  function j2d(jy, jm, jd) {
    var r = jalCal(jy, true);
    return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
  }
  function d2j(jdn) {
    var gy = d2g(jdn).gy, jy = gy - 621, r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march), jd, jm, k;
    k = jdn - jdn1f;
    if (k >= 0) {
      if (k <= 185) {
        jm = 1 + div(k, 31);
        jd = mod(k, 31) + 1;
        return {
          jy,
          jm,
          jd
        };
      } else {
        k -= 186;
      }
    } else {
      jy -= 1;
      k += 179;
      if (r.leap === 1)
        k += 1;
    }
    jm = 7 + div(k, 30);
    jd = mod(k, 30) + 1;
    return {
      jy,
      jm,
      jd
    };
  }
  function g2d(gy, gm, gd) {
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
  }
  function d2g(jdn) {
    var j, i, gd, gm, gy;
    j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = div(mod(j, 1461), 4) * 5 + 308;
    gd = div(mod(i, 153), 5) + 1;
    gm = mod(div(i, 153), 12) + 1;
    gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return {
      gy,
      gm,
      gd
    };
  }
  function jalaaliWeek(jy, jm, jd) {
    var dayOfWeek = jalaaliToDateObject(jy, jm, jd).getDay();
    var startDayDifference = dayOfWeek == 6 ? 0 : -(dayOfWeek + 1);
    var endDayDifference = 6 + startDayDifference;
    return {
      saturday: d2j(j2d(jy, jm, jd + startDayDifference)),
      friday: d2j(j2d(jy, jm, jd + endDayDifference))
    };
  }
  function jalaaliToDateObject(jy, jm, jd, h, m, s, ms) {
    var gregorianCalenderDate = toGregorian(jy, jm, jd);
    return new Date(
      gregorianCalenderDate.gy,
      gregorianCalenderDate.gm - 1,
      gregorianCalenderDate.gd,
      h || 0,
      m || 0,
      s || 0,
      ms || 0
    );
  }
  function div(a, b) {
    return ~~(a / b);
  }
  function mod(a, b) {
    return a - ~~(a / b) * b;
  }
  return jalaaliJs;
}
var momentJalaali;
var hasRequiredMomentJalaali;
function requireMomentJalaali() {
  if (hasRequiredMomentJalaali) return momentJalaali;
  hasRequiredMomentJalaali = 1;
  momentJalaali = jMoment;
  var moment2 = requireMoment(), jalaali = requireJalaaliJs();
  var formattingTokens = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS?|LL?L?L?|l{1,4})/g, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, symbolMap = {
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
    "0": "۰"
  }, numberMap = {
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
    "۰": "0"
  }, unitAliases = {
    jm: "jmonth",
    jmonths: "jmonth",
    jy: "jyear",
    jyears: "jyear"
  }, formatFunctions = {}, ordinalizeTokens = "DDD w M D".split(" "), paddedTokens = "M D w".split(" "), formatTokenFunctions = {
    jM: function() {
      return this.jMonth() + 1;
    },
    jMMM: function(format) {
      return this.localeData().jMonthsShort(this, format);
    },
    jMMMM: function(format) {
      return this.localeData().jMonths(this, format);
    },
    jD: function() {
      return this.jDate();
    },
    jDDD: function() {
      return this.jDayOfYear();
    },
    jw: function() {
      return this.jWeek();
    },
    jYY: function() {
      return leftZeroFill(this.jYear() % 100, 2);
    },
    jYYYY: function() {
      return leftZeroFill(this.jYear(), 4);
    },
    jYYYYY: function() {
      return leftZeroFill(this.jYear(), 5);
    },
    jgg: function() {
      return leftZeroFill(this.jWeekYear() % 100, 2);
    },
    jgggg: function() {
      return this.jWeekYear();
    },
    jggggg: function() {
      return leftZeroFill(this.jWeekYear(), 5);
    }
  };
  function padToken(func, count) {
    return function(a) {
      return leftZeroFill(func.call(this, a), count);
    };
  }
  function ordinalizeToken(func, period) {
    return function(a) {
      return this.localeData().ordinal(func.call(this, a), period);
    };
  }
  (function() {
    var i;
    while (ordinalizeTokens.length) {
      i = ordinalizeTokens.pop();
      formatTokenFunctions["j" + i + "o"] = ordinalizeToken(formatTokenFunctions["j" + i], i);
    }
    while (paddedTokens.length) {
      i = paddedTokens.pop();
      formatTokenFunctions["j" + i + i] = padToken(formatTokenFunctions["j" + i], 2);
    }
    formatTokenFunctions.jDDDD = padToken(formatTokenFunctions.jDDD, 3);
  })();
  function extend(a, b) {
    var key;
    for (key in b)
      if (b.hasOwnProperty(key))
        a[key] = b[key];
    return a;
  }
  function leftZeroFill(number, targetLength) {
    var output = number + "";
    while (output.length < targetLength)
      output = "0" + output;
    return output;
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === "[object Array]";
  }
  function normalizeUnits(units) {
    if (units) {
      var lowered = units.toLowerCase();
      units = unitAliases[lowered] || lowered;
    }
    return units;
  }
  function setDate(m, year, month, date) {
    var d = m._d;
    if (isNaN(year)) {
      m._isValid = false;
    }
    if (m._isUTC) {
      m._d = new Date(Date.UTC(
        year,
        month,
        date,
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds(),
        d.getUTCMilliseconds()
      ));
    } else {
      m._d = new Date(
        year,
        month,
        date,
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
        d.getMilliseconds()
      );
    }
  }
  function objectCreate(parent) {
    function F() {
    }
    F.prototype = parent;
    return new F();
  }
  function getPrototypeOf(object) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(object);
    else if ("".__proto__)
      return object.__proto__;
    else
      return object.constructor.prototype;
  }
  extend(
    getPrototypeOf(moment2.localeData()),
    {
      _jMonths: [
        "Farvardin",
        "Ordibehesht",
        "Khordaad",
        "Tir",
        "Amordaad",
        "Shahrivar",
        "Mehr",
        "Aabaan",
        "Aazar",
        "Dey",
        "Bahman",
        "Esfand"
      ],
      jMonths: function(m) {
        return this._jMonths[m.jMonth()];
      },
      _jMonthsShort: [
        "Far",
        "Ord",
        "Kho",
        "Tir",
        "Amo",
        "Sha",
        "Meh",
        "Aab",
        "Aaz",
        "Dey",
        "Bah",
        "Esf"
      ],
      jMonthsShort: function(m) {
        return this._jMonthsShort[m.jMonth()];
      },
      jMonthsParse: function(monthName) {
        var i, mom, regex;
        if (!this._jMonthsParse)
          this._jMonthsParse = [];
        for (i = 0; i < 12; i += 1) {
          if (!this._jMonthsParse[i]) {
            mom = jMoment([2e3, (2 + i) % 12, 25]);
            regex = "^" + this.jMonths(mom, "") + "|^" + this.jMonthsShort(mom, "");
            this._jMonthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (this._jMonthsParse[i].test(monthName))
            return i;
        }
      }
    }
  );
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens), length = array.length, i;
    for (i = 0; i < length; i += 1)
      if (formatTokenFunctions[array[i]])
        array[i] = formatTokenFunctions[array[i]];
    return function(mom) {
      var output = "";
      for (i = 0; i < length; i += 1)
        output += array[i] instanceof Function ? "[" + array[i].call(mom, format) + "]" : array[i];
      return output;
    };
  }
  function getParseRegexForToken(token, config) {
    switch (token) {
      case "jDDDD":
        return parseTokenThreeDigits;
      case "jYYYY":
        return parseTokenFourDigits;
      case "jYYYYY":
        return parseTokenSixDigits;
      case "jDDD":
        return parseTokenOneToThreeDigits;
      case "jMMM":
      case "jMMMM":
        return parseTokenWord;
      case "jMM":
      case "jDD":
      case "jYY":
      case "jM":
      case "jD":
        return parseTokenOneOrTwoDigits;
      case "DDDD":
        return parseTokenThreeDigits;
      case "YYYY":
        return parseTokenFourDigits;
      case "YYYYY":
        return parseTokenSixDigits;
      case "S":
      case "SS":
      case "SSS":
      case "DDD":
        return parseTokenOneToThreeDigits;
      case "MMM":
      case "MMMM":
      case "dd":
      case "ddd":
      case "dddd":
        return parseTokenWord;
      case "a":
      case "A":
        return moment2.localeData(config._l)._meridiemParse;
      case "X":
        return parseTokenTimestampMs;
      case "Z":
      case "ZZ":
        return parseTokenTimezone;
      case "T":
        return parseTokenT;
      case "MM":
      case "DD":
      case "YY":
      case "HH":
      case "hh":
      case "mm":
      case "ss":
      case "M":
      case "D":
      case "d":
      case "H":
      case "h":
      case "m":
      case "s":
        return parseTokenOneOrTwoDigits;
      default:
        return new RegExp(token.replace("\\", ""));
    }
  }
  function addTimeToArrayFromToken(token, input, config) {
    var a, datePartArray = config._a;
    switch (token) {
      case "jM":
      case "jMM":
        datePartArray[1] = input == null ? 0 : ~~input - 1;
        break;
      case "jMMM":
      case "jMMMM":
        a = moment2.localeData(config._l).jMonthsParse(input);
        if (a != null)
          datePartArray[1] = a;
        else
          config._isValid = false;
        break;
      case "jD":
      case "jDD":
      case "jDDD":
      case "jDDDD":
        if (input != null)
          datePartArray[2] = ~~input;
        break;
      case "jYY":
        datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400);
        break;
      case "jYYYY":
      case "jYYYYY":
        datePartArray[0] = ~~input;
    }
    if (input == null)
      config._isValid = false;
  }
  function dateFromArray(config) {
    var g, j, jy = config._a[0], jm = config._a[1], jd = config._a[2];
    if (jy == null && jm == null && jd == null)
      return [0, 0, 1];
    jy = jy != null ? jy : 0;
    jm = jm != null ? jm : 0;
    jd = jd != null ? jd : 1;
    if (jd < 1 || jd > jMoment.jDaysInMonth(jy, jm) || jm < 0 || jm > 11)
      config._isValid = false;
    g = toGregorian(jy, jm, jd);
    j = toJalaali(g.gy, g.gm, g.gd);
    if (isNaN(g.gy))
      config._isValid = false;
    config._jDiff = 0;
    if (~~j.jy !== jy)
      config._jDiff += 1;
    if (~~j.jm !== jm)
      config._jDiff += 1;
    if (~~j.jd !== jd)
      config._jDiff += 1;
    return [g.gy, g.gm, g.gd];
  }
  function makeDateFromStringAndFormat(config) {
    var tokens = config._f.match(formattingTokens), string = config._i + "", len = tokens.length, i, token, parsedInput;
    config._a = [];
    for (i = 0; i < len; i += 1) {
      token = tokens[i];
      parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
      if (parsedInput)
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      if (formatTokenFunctions[token])
        addTimeToArrayFromToken(token, parsedInput, config);
    }
    if (string)
      config._il = string;
    return dateFromArray(config);
  }
  function makeDateFromStringAndArray(config, utc) {
    var len = config._f.length, i, format, tempMoment, bestMoment, currentScore, scoreToBeat;
    if (len === 0) {
      return makeMoment(/* @__PURE__ */ new Date(NaN));
    }
    for (i = 0; i < len; i += 1) {
      format = config._f[i];
      currentScore = 0;
      tempMoment = makeMoment(config._i, format, config._l, config._strict, utc);
      if (!tempMoment.isValid()) continue;
      currentScore += tempMoment._jDiff;
      if (tempMoment._il)
        currentScore += tempMoment._il.length;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempMoment;
      }
    }
    return bestMoment;
  }
  function removeParsedTokens(config) {
    var string = config._i + "", input = "", format = "", array = config._f.match(formattingTokens), len = array.length, i, match, parsed;
    for (i = 0; i < len; i += 1) {
      match = array[i];
      parsed = (getParseRegexForToken(match, config).exec(string) || [])[0];
      if (parsed)
        string = string.slice(string.indexOf(parsed) + parsed.length);
      if (!(formatTokenFunctions[match] instanceof Function)) {
        format += match;
        if (parsed)
          input += parsed;
      }
    }
    config._i = input;
    config._f = format;
  }
  function jWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;
    if (daysToDayOfWeek > end) {
      daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
      daysToDayOfWeek += 7;
    }
    adjustedMoment = jMoment(mom).add(daysToDayOfWeek, "d");
    return {
      week: Math.ceil(adjustedMoment.jDayOfYear() / 7),
      year: adjustedMoment.jYear()
    };
  }
  var maxTimestamp = 57724432199999;
  function makeMoment(input, format, lang, strict, utc) {
    if (typeof lang === "boolean") {
      strict = lang;
      lang = void 0;
    }
    if (format && typeof format === "string")
      format = fixFormat(format, moment2);
    var config = {
      _i: input,
      _f: format,
      _l: lang,
      _strict: strict
    }, date, m, jm, origInput = input, origFormat = format;
    if (format) {
      if (isArray(format)) {
        return makeDateFromStringAndArray(config, utc);
      } else {
        date = makeDateFromStringAndFormat(config);
        removeParsedTokens(config);
        format = "YYYY-MM-DD-" + config._f;
        input = leftZeroFill(date[0], 4) + "-" + leftZeroFill(date[1] + 1, 2) + "-" + leftZeroFill(date[2], 2) + "-" + config._i;
      }
    }
    if (utc)
      m = moment2.utc(input, format, lang, strict);
    else
      m = moment2(input, format, lang, strict);
    if (config._isValid === false)
      m._isValid = false;
    m._jDiff = config._jDiff || 0;
    jm = objectCreate(jMoment.fn);
    extend(jm, m);
    if (strict && format && jm.isValid()) {
      jm._isValid = jm.format(origFormat) === origInput;
    }
    if (m._d.getTime() > maxTimestamp) {
      jm._isValid = false;
    }
    return jm;
  }
  function jMoment(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, false);
  }
  extend(jMoment, moment2);
  jMoment.fn = objectCreate(moment2.fn);
  jMoment.utc = function(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, true);
  };
  jMoment.unix = function(input) {
    return makeMoment(input * 1e3);
  };
  function fixFormat(format, _moment) {
    var i = 5;
    var replace = function(input) {
      return _moment.localeData().longDateFormat(input) || input;
    };
    while (i > 0 && localFormattingTokens.test(format)) {
      i -= 1;
      format = format.replace(localFormattingTokens, replace);
    }
    return format;
  }
  jMoment.fn.format = function(format) {
    if (format) {
      format = fixFormat(format, this);
      if (!formatFunctions[format]) {
        formatFunctions[format] = makeFormatFunction(format);
      }
      format = formatFunctions[format](this);
    }
    return moment2.fn.format.call(this, format);
  };
  jMoment.fn.jYear = function(input) {
    var lastDay, j, g;
    if (typeof input === "number") {
      j = toJalaali(this.year(), this.month(), this.date());
      lastDay = Math.min(j.jd, jMoment.jDaysInMonth(input, j.jm));
      g = toGregorian(input, j.jm, lastDay);
      setDate(this, g.gy, g.gm, g.gd);
      moment2.updateOffset(this);
      return this;
    } else {
      return toJalaali(this.year(), this.month(), this.date()).jy;
    }
  };
  jMoment.fn.jMonth = function(input) {
    var lastDay, j, g;
    if (input != null) {
      if (typeof input === "string") {
        input = this.localeData().jMonthsParse(input);
        if (typeof input !== "number")
          return this;
      }
      j = toJalaali(this.year(), this.month(), this.date());
      lastDay = Math.min(j.jd, jMoment.jDaysInMonth(j.jy, input));
      this.jYear(j.jy + div(input, 12));
      input = mod(input, 12);
      if (input < 0) {
        input += 12;
        this.jYear(this.jYear() - 1);
      }
      g = toGregorian(this.jYear(), input, lastDay);
      setDate(this, g.gy, g.gm, g.gd);
      moment2.updateOffset(this);
      return this;
    } else {
      return toJalaali(this.year(), this.month(), this.date()).jm;
    }
  };
  jMoment.fn.jDate = function(input) {
    var j, g;
    if (typeof input === "number") {
      j = toJalaali(this.year(), this.month(), this.date());
      g = toGregorian(j.jy, j.jm, input);
      setDate(this, g.gy, g.gm, g.gd);
      moment2.updateOffset(this);
      return this;
    } else {
      return toJalaali(this.year(), this.month(), this.date()).jd;
    }
  };
  jMoment.fn.jDayOfYear = function(input) {
    var dayOfYear = Math.round((jMoment(this).startOf("day") - jMoment(this).startOf("jYear")) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  };
  jMoment.fn.jWeek = function(input) {
    var week = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  };
  jMoment.fn.jWeekYear = function(input) {
    var year = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return input == null ? year : this.add(input - year, "y");
  };
  jMoment.fn.add = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
      temp = val;
      val = units;
      units = temp;
    }
    units = normalizeUnits(units);
    if (units === "jyear") {
      this.jYear(this.jYear() + val);
    } else if (units === "jmonth") {
      this.jMonth(this.jMonth() + val);
    } else {
      moment2.fn.add.call(this, val, units);
      if (isNaN(this.jYear())) {
        this._isValid = false;
      }
    }
    return this;
  };
  jMoment.fn.subtract = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
      temp = val;
      val = units;
      units = temp;
    }
    units = normalizeUnits(units);
    if (units === "jyear") {
      this.jYear(this.jYear() - val);
    } else if (units === "jmonth") {
      this.jMonth(this.jMonth() - val);
    } else {
      moment2.fn.subtract.call(this, val, units);
    }
    return this;
  };
  jMoment.fn.startOf = function(units) {
    units = normalizeUnits(units);
    if (units === "jyear" || units === "jmonth") {
      if (units === "jyear") {
        this.jMonth(0);
      }
      this.jDate(1);
      this.hours(0);
      this.minutes(0);
      this.seconds(0);
      this.milliseconds(0);
      return this;
    } else {
      return moment2.fn.startOf.call(this, units);
    }
  };
  jMoment.fn.endOf = function(units) {
    units = normalizeUnits(units);
    if (units === void 0 || units === "milisecond") {
      return this;
    }
    return this.startOf(units).add(1, units === "isoweek" ? "week" : units).subtract(1, "ms");
  };
  jMoment.fn.isSame = function(other, units) {
    units = normalizeUnits(units);
    if (units === "jyear" || units === "jmonth") {
      return moment2.fn.isSame.call(this.startOf(units), other.startOf(units));
    }
    return moment2.fn.isSame.call(this, other, units);
  };
  jMoment.fn.clone = function() {
    return jMoment(this);
  };
  jMoment.fn.jYears = jMoment.fn.jYear;
  jMoment.fn.jMonths = jMoment.fn.jMonth;
  jMoment.fn.jDates = jMoment.fn.jDate;
  jMoment.fn.jWeeks = jMoment.fn.jWeek;
  jMoment.jDaysInMonth = function(year, month) {
    year += div(month, 12);
    month = mod(month, 12);
    if (month < 0) {
      month += 12;
      year -= 1;
    }
    if (month < 6) {
      return 31;
    } else if (month < 11) {
      return 30;
    } else if (jMoment.jIsLeapYear(year)) {
      return 30;
    } else {
      return 29;
    }
  };
  jMoment.jIsLeapYear = jalaali.isLeapJalaaliYear;
  jMoment.loadPersian = function(args) {
    var usePersianDigits = args !== void 0 && args.hasOwnProperty("usePersianDigits") ? args.usePersianDigits : false;
    var dialect = args !== void 0 && args.hasOwnProperty("dialect") ? args.dialect : "persian";
    moment2.locale("fa");
    moment2.updateLocale(
      "fa",
      {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: {
          "persian": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "persian-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysShort: {
          "persian": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "persian-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysMin: {
          "persian": "ی_د_س_چ_پ_آ_ش".split("_"),
          "persian-modern": "ی_د_س_چ_پ_ج_ش".split("_")
        }[dialect],
        longDateFormat: {
          LT: "HH:mm",
          L: "jYYYY/jMM/jDD",
          LL: "jD jMMMM jYYYY",
          LLL: "jD jMMMM jYYYY LT",
          LLLL: "dddd، jD jMMMM jYYYY LT"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [ی پیش ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          m: "1 دقیقه",
          mm: "%d دقیقه",
          h: "1 ساعت",
          hh: "%d ساعت",
          d: "1 روز",
          dd: "%d روز",
          M: "1 ماه",
          MM: "%d ماه",
          y: "1 سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          if (usePersianDigits) {
            return string.replace(/[۰-۹]/g, function(match) {
              return numberMap[match];
            }).replace(/،/g, ",");
          }
          return string;
        },
        postformat: function(string) {
          if (usePersianDigits) {
            return string.replace(/\d/g, function(match) {
              return symbolMap[match];
            }).replace(/,/g, "،");
          }
          return string;
        },
        ordinal: "%dم",
        week: {
          dow: 6,
          doy: 12
          // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
          return hour < 12 ? "ق.ظ" : "ب.ظ";
        },
        jMonths: {
          "persian": "فروردین_اردیبهشت_خرداد_تیر_امرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"),
          "persian-modern": "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_")
        }[dialect],
        jMonthsShort: {
          "persian": "فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"),
          "persian-modern": "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_")
        }[dialect]
      }
    );
  };
  jMoment.loadPersian_dari = function(args) {
    var usePersianDigits = args !== void 0 && args.hasOwnProperty("usePersianDigits") ? args.usePersianDigits : false;
    var dialect = args !== void 0 && args.hasOwnProperty("dialect") ? args.dialect : "persian-dari";
    moment2.locale("fa-af");
    moment2.updateLocale(
      "fa-af",
      {
        months: "جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),
        monthsShort: "جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),
        weekdays: {
          "persian": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "persian-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysShort: {
          "persian": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "persian-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysMin: {
          "persian": "ی_د_س_چ_پ_آ_ش".split("_"),
          "persian-modern": "ی_د_س_چ_پ_ج_ش".split("_")
        }[dialect],
        longDateFormat: {
          LT: "HH:mm",
          L: "jYYYY/jMM/jDD",
          LL: "jD jMMMM jYYYY",
          LLL: "jD jMMMM jYYYY LT",
          LLLL: "dddd، jD jMMMM jYYYY LT"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [ی پیش ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          m: "1 دقیقه",
          mm: "%d دقیقه",
          h: "1 ساعت",
          hh: "%d ساعت",
          d: "1 روز",
          dd: "%d روز",
          M: "1 ماه",
          MM: "%d ماه",
          y: "1 سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          if (usePersianDigits) {
            return string.replace(/[۰-۹]/g, function(match) {
              return numberMap[match];
            }).replace(/،/g, ",");
          }
          return string;
        },
        postformat: function(string) {
          if (usePersianDigits) {
            return string.replace(/\d/g, function(match) {
              return symbolMap[match];
            }).replace(/,/g, "،");
          }
          return string;
        },
        ordinal: "%dم",
        week: {
          dow: 6,
          doy: 12
          // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
          return hour < 12 ? "ق.ظ" : "ب.ظ";
        },
        jMonths: {
          "persian-dari": "حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت".split("_"),
          "persian-modern-dari": "حمل_ثور_جوزا_سرطان_اسد_سنبله_میزان_عقرب_قوس_جدی_دلو_حوت".split("_")
        }[dialect],
        jMonthsShort: {
          "persian-dari": "حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت".split("_"),
          "persian-modern-dari": "حمل_ثور_جوزا_سرط_اسد_سنب_میز_عقر_قوس_جدی_دلو_حوت".split("_")
        }[dialect]
      }
    );
  };
  jMoment.loadPashto = function(args) {
    var usePersianDigits = args !== void 0 && args.hasOwnProperty("usePersianDigits") ? args.usePersianDigits : false;
    var dialect = args !== void 0 && args.hasOwnProperty("dialect") ? args.dialect : "pashto";
    moment2.locale("ps-af");
    moment2.updateLocale(
      "ps-af",
      {
        months: "جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),
        monthsShort: "جنوری_فبروری_مارچ_اپریل_می_جون_جولای_آگست_سپتمبر_اکتوبر_نومبر_دیسمبر".split("_"),
        weekdays: {
          "pashto": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "pashto-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysShort: {
          "pashto": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_آدینه_شنبه".split("_"),
          "pashto-modern": "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_")
        }[dialect],
        weekdaysMin: {
          "pashto": "ی_د_س_چ_پ_آ_ش".split("_"),
          "pashto-modern": "ی_د_س_چ_پ_ج_ش".split("_")
        }[dialect],
        longDateFormat: {
          LT: "HH:mm",
          L: "jYYYY/jMM/jDD",
          LL: "jD jMMMM jYYYY",
          LLL: "jD jMMMM jYYYY LT",
          LLLL: "dddd، jD jMMMM jYYYY LT"
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [ی پیش ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          m: "1 دقیقه",
          mm: "%d دقیقه",
          h: "1 ساعت",
          hh: "%d ساعت",
          d: "1 روز",
          dd: "%d روز",
          M: "1 ماه",
          MM: "%d ماه",
          y: "1 سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          if (usePersianDigits) {
            return string.replace(/[۰-۹]/g, function(match) {
              return numberMap[match];
            }).replace(/،/g, ",");
          }
          return string;
        },
        postformat: function(string) {
          if (usePersianDigits) {
            return string.replace(/\d/g, function(match) {
              return symbolMap[match];
            }).replace(/,/g, "،");
          }
          return string;
        },
        ordinal: "%dم",
        week: {
          dow: 6,
          doy: 12
          // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
          return hour < 12 ? "ق.ظ" : "ب.ظ";
        },
        jMonths: {
          "pashto": "وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب".split("_"),
          "pashto-modern": "وری_غویی_غبرګولی_چنګاښ_زمری_وږی_تله_لړم_لیندی_مرغومی_سلواغه_کب".split("_")
        }[dialect],
        jMonthsShort: {
          "pashto": "وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب".split("_"),
          "pashto-modern": "وری_غوی_غبر_چنګ_زمر_وږی_لړم_لین_مرغ_سلو_کب".split("_")
        }[dialect]
      }
    );
  };
  jMoment.jConvert = {
    toJalaali,
    toGregorian
  };
  function toJalaali(gy, gm, gd) {
    try {
      var j = jalaali.toJalaali(gy, gm + 1, gd);
      j.jm -= 1;
      return j;
    } catch (e) {
      return {
        jy: NaN,
        jm: NaN,
        jd: NaN
      };
    }
  }
  function toGregorian(jy, jm, jd) {
    try {
      var g = jalaali.toGregorian(jy, jm + 1, jd);
      g.gm -= 1;
      return g;
    } catch (e) {
      return {
        gy: NaN,
        gm: NaN,
        gd: NaN
      };
    }
  }
  function div(a, b) {
    return ~~(a / b);
  }
  function mod(a, b) {
    return a - ~~(a / b) * b;
  }
  return momentJalaali;
}
var main = main$1.exports;
var hasRequiredMain;
function requireMain() {
  if (hasRequiredMain) return main$1.exports;
  hasRequiredMain = 1;
  (function(module2, exports$1) {
    !(function(e, t) {
      module2.exports = t(requireMomentJalaali(), React, require$$2);
    })(main, (function(e, t, a) {
      return (function() {
        var n = { 2193: function(e2, t2) {
          var a2;
          !(function() {
            var n2 = {}.hasOwnProperty;
            function r2() {
              for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) {
                var a3 = arguments[t3];
                if (a3) {
                  var o2 = typeof a3;
                  if ("string" === o2 || "number" === o2) e3.push(a3);
                  else if (Array.isArray(a3)) {
                    if (a3.length) {
                      var s2 = r2.apply(null, a3);
                      s2 && e3.push(s2);
                    }
                  } else if ("object" === o2) {
                    if (a3.toString !== Object.prototype.toString && !a3.toString.toString().includes("[native code]")) {
                      e3.push(a3.toString());
                      continue;
                    }
                    for (var i in a3) n2.call(a3, i) && a3[i] && e3.push(i);
                  }
                }
              }
              return e3.join(" ");
            }
            e2.exports ? (r2.default = r2, e2.exports = r2) : void 0 === (a2 = (function() {
              return r2;
            }).apply(t2, [])) || (e2.exports = a2);
          })();
        }, 8588: function(e2) {
          var t2 = Object.getOwnPropertySymbols, a2 = Object.prototype.hasOwnProperty, n2 = Object.prototype.propertyIsEnumerable;
          function r2(e3) {
            if (null == e3) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e3);
          }
          e2.exports = (function() {
            try {
              if (!Object.assign) return false;
              var e3 = new String("abc");
              if (e3[5] = "de", "5" === Object.getOwnPropertyNames(e3)[0]) return false;
              for (var t3 = {}, a3 = 0; a3 < 10; a3++) t3["_" + String.fromCharCode(a3)] = a3;
              if ("0123456789" !== Object.getOwnPropertyNames(t3).map((function(e4) {
                return t3[e4];
              })).join("")) return false;
              var n3 = {};
              return "abcdefghijklmnopqrst".split("").forEach((function(e4) {
                n3[e4] = e4;
              })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n3)).join("");
            } catch (e4) {
              return false;
            }
          })() ? Object.assign : function(e3, o2) {
            for (var s2, i, l = r2(e3), c = 1; c < arguments.length; c++) {
              for (var d in s2 = Object(arguments[c])) a2.call(s2, d) && (l[d] = s2[d]);
              if (t2) {
                i = t2(s2);
                for (var u = 0; u < i.length; u++) n2.call(s2, i[u]) && (l[i[u]] = s2[i[u]]);
              }
            }
            return l;
          };
        }, 5164: function(e2, t2, a2) {
          a2(8588);
          var n2 = a2(8156), r2 = 60103;
          if (t2.Fragment = 60107, "function" == typeof Symbol && Symbol.for) {
            var o2 = Symbol.for;
            r2 = o2("react.element"), t2.Fragment = o2("react.fragment");
          }
          var s2 = n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = Object.prototype.hasOwnProperty, l = { key: true, ref: true, __self: true, __source: true };
          function c(e3, t3, a3) {
            var n3, o3 = {}, c2 = null, d = null;
            for (n3 in void 0 !== a3 && (c2 = "" + a3), void 0 !== t3.key && (c2 = "" + t3.key), void 0 !== t3.ref && (d = t3.ref), t3) i.call(t3, n3) && !l.hasOwnProperty(n3) && (o3[n3] = t3[n3]);
            if (e3 && e3.defaultProps) for (n3 in t3 = e3.defaultProps) void 0 === o3[n3] && (o3[n3] = t3[n3]);
            return { $$typeof: r2, type: e3, key: c2, ref: d, props: o3, _owner: s2.current };
          }
          t2.jsx = c, t2.jsxs = c;
        }, 602: function(e2, t2, a2) {
          e2.exports = a2(5164);
        }, 4637: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.CustomWrapper = void 0;
          const n2 = a2(602);
          t2.CustomWrapper = ({ children: e3, onOpen: t3, inputRef: a3 }) => (0, n2.jsx)("div", { ref: a3, onClick: t3, className: "custom-input-wrapper", children: e3 });
        }, 8432: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.InputDatePicker = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(8156), i = n2(a2(7992)), l = a2(6676), c = n2(a2(6913)), d = a2(4009), u = a2(4637), h = (0, s2.forwardRef)(((e3, t3) => {
            const { value: a3, onChange: n3, onDayChange: h2, onMonthChange: f, onYearChange: m, format: p, locale: y, disabledDates: g, open: D, onOpenChange: v, pickerProps: b, disabled: _, suffixIcon: j, prefixIcon: M, placement: x, className: C, wrapperClassName: P, wrapperStyle: R, defaultValue: O, customColors: k, getPopupContainer: N, error: w, renderInput: Y, presets: T = true, placeholder: E, onClear: S, closeOnChange: I, ...A } = e3;
            (0, l.useSetColors)(k);
            const L = (0, s2.useRef)(null), [H, J] = (0, s2.useState)(D ?? false);
            (0, s2.useEffect)((() => {
              void 0 !== D && (D ? B() : $());
            }), [D]);
            const [G, F] = (0, s2.useState)(false), z = "fa" === (y || "fa"), W = (e4) => {
              F(e4);
            }, U = () => {
              if (!_) return J(!H), W(!H), v?.(!H), true;
            }, $ = () => {
              J(void 0 !== D && D), v?.(false);
            }, B = () => {
              U() && (J(void 0 === D || D), W(void 0 === D || D), v?.(true));
            };
            return (0, r2.jsx)(l.DateProvider, { props: { value: a3, onChange: n3, onMonthChange: f, onYearChange: m, format: p, disabledDates: g, locale: y, onDayChange: h2, defaultValue: O, close: I ? $ : void 0 }, children: ({ onChangeInputValue: e4, onClear: a4, isJalaali: n4, value: s3, placeholder: l2 }) => (0, r2.jsx)(c.default, { mode: "date", placement: x, isOpen: H, close: $, getContainer: N, animate: G, toggleAnimate: W, inputRef: L, isJalaali: n4, panel: () => (0, r2.jsx)(i.default, { presets: T, ...b }), children: Y ? (0, r2.jsx)(u.CustomWrapper, { inputRef: L, onOpen: B, children: Y({ isJalaali: n4, onChange: e4, value: s3, placeholder: l2 }) }) : (0, r2.jsxs)("div", { dir: z ? "rtl" : "ltr", ref: L, "aria-label": "datepicker", className: (0, o2.default)("picker-input-wrapper group", w && "picker-input-error", _ && "picker-input-disabled", z && "rtl", P), style: R, onClick: B, children: [M && M, (0, r2.jsx)("input", { ...A, value: s3, ref: t3, placeholder: l2 || E, className: (0, o2.default)(z ? "picker-input-fa" : "picker-input-en", _ && "picker-input-disabled", C), disabled: _, onChange: e4 }), (0, r2.jsx)(d.Suffix, { suffixIcon: j, hasValue: Boolean(s3), inputOnClear: S, onClear: a4, error: w, toggle: U })] }) }, "date-popup") });
          }));
          t2.InputDatePicker = h;
        }, 2266: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = n2(a2(3663)), i = a2(8156), l = a2(6676), c = a2(5928), d = n2(a2(548)), u = a2(5874), h = a2(3152), f = a2(6174);
          t2.default = () => {
            const { cacheDate: e3, onDaychange: t3, onDateChange: a3, changePlaceholder: n3, dayLabels: m, isJalaali: p } = (0, l.useDatepicker)(), { days: y } = (0, l.useDays)(), g = (0, c.momentTransformer)((0, s2.default)(), p), { onChangeMode: D, panelRender: v, dayLabelRender: b, highlightDays: _, toggle: j, highlightWeekend: M, presets: x } = (0, f.usePanelContext)(), C = y.map((({ day: e4, month: t4, year: a4 }) => ({ day: e4, month: t4, year: a4 }))), P = void 0 === M || M, R = y.map(((e4) => {
              if (e4.isDisabled) {
                const t4 = y.findIndex(((t5) => t5.id === e4.id)), a4 = t4 - 1, n4 = t4 + 1, r3 = -1 !== a4 ? y[a4] : null, o3 = -1 !== n4 ? y[n4] : null, s3 = !!r3 && r3.isDisabled, i2 = !!o3 && o3.isDisabled, l2 = s3 || i2;
                return { ...e4, isNeighborsDisabled: l2 };
              }
              return { ...e4, isNeighborsDisabled: false };
            })), O = (0, r2.jsx)(i.Fragment, { children: R.map((({ id: s3, isNotCurrentMonth: i2, isWeekend: l2, isDisabled: u2, isNeighborsDisabled: h2, ...f2 }) => (0, r2.jsx)("div", { className: (0, o2.default)("day-item-outer"), onMouseEnter: () => {
              !u2 && x && n3(f2);
            }, onMouseLeave: () => {
              x && n3(null);
            }, children: (0, r2.jsx)("div", { className: (0, o2.default)("day-item-chain", u2 && "disabled"), children: (0, r2.jsx)(d.default, { day: f2.day, mode: "date", isJalaali: p, isNeighborsDisabled: h2, isNotCurrentMonth: i2, onPress: () => {
              t3(f2), a3(f2), j?.();
            }, isSelected: (0, c.isEqual)(e3, f2), isHighlight: "function" == typeof _ ? _((0, c.dateTransformer)(f2, p)) : (_ || [])?.some(((e4) => e4.isSame((0, c.dateTransformer)(f2, p), "day"))), isWeekend: !!P && l2, isDisabled: u2, isToday: (0, c.isEqual)(g, f2) }) }) }, `${s3}-${f2.month}`))) });
            return (0, r2.jsxs)(i.Fragment, { children: [(0, r2.jsx)(h.Header, { onSelectMonthPicker: () => D?.("month"), onSelectYearPicker: () => D?.("year") }), (0, r2.jsx)(u.DayLabel, { dayLabelRender: b, dayLabels: m, isJalaali: p }), (0, r2.jsx)("div", { className: "days-body", children: v ? v({ days: C, dayLabels: m, selected: e3 }, O) : O })] });
          };
        }, 3152: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Header = void 0;
          const n2 = a2(602), r2 = a2(6676), o2 = a2(5928), s2 = a2(4207), i = a2(6174);
          t2.Header = ({ onSelectMonthPicker: e3, onSelectYearPicker: t3 }) => {
            const { cacheDate: a3, state: l, onDecreaseYear: c, onDecreaseMonth: d, onIncreaseMonth: u, onIncreaseYear: h, isJalaali: f } = (0, r2.useDatepicker)(), m = l || a3, { headerRender: p, navigationIcons: y } = (0, i.usePanelContext)(), g = m && 0 !== m.day ? m : null, D = (0, n2.jsx)("div", { className: "panel-header-rtl", children: (0, n2.jsxs)("div", { className: "panel-header-inner", children: [(0, n2.jsxs)("div", { className: "center", children: [(0, n2.jsx)("div", { className: "iconItem", onClick: () => {
              f ? c(m) : h(m);
            }, children: y?.superPrevIcon || (0, n2.jsx)(s2.Icon.DoubleChevronRight, { hoverEffect: true }) }), (0, n2.jsx)("div", { className: "iconItem", onClick: () => f ? d(m) : u(m), children: y?.prevIcon || (0, n2.jsx)(s2.Icon.ChevronRight, { hoverEffect: true }) })] }), (0, n2.jsxs)("div", { className: "panel-date-holder-item-ltr", children: [(0, n2.jsx)("div", { className: "panel-date-holder-item clickable", onClick: e3, children: (0, n2.jsx)("span", { className: "panel-header-item-text", children: (0, o2.getMonthLabels)(m.month, f) }) }), (0, n2.jsx)("div", { className: "panel-date-holder-item clickable", onClick: t3, children: (0, n2.jsx)("span", { className: "panel-header-item-text", children: m.year }) })] }), (0, n2.jsxs)("div", { className: "center", children: [(0, n2.jsx)("div", { className: "iconItem", onClick: () => f ? u(m) : d(m), children: y?.nextIcon || (0, n2.jsx)(s2.Icon.ChevronLeft, { hoverEffect: true }) }), (0, n2.jsx)("div", { className: "iconItem", onClick: () => f ? h(m) : c(m), children: y?.superNextIcon || (0, n2.jsx)(s2.Icon.DoubleChevronLeft, { hoverEffect: true }) })] })] }) });
            return (0, n2.jsx)("div", { className: "panel-header-wrapper", children: p ? p(g, D) : D });
          };
        }, 2743: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(2266), t2), r2(a2(3152), t2), r2(a2(5063), t2), r2(a2(7992), t2), r2(a2(2979), t2), r2(a2(8138), t2);
        }, 5063: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(3152), l = a2(6174);
          t2.default = () => {
            const { onMonthchange: e3, state: t3, isJalaali: a3 } = (0, s2.useDatepicker)(), { onChangeMode: n3 } = (0, l.usePanelContext)(), { months: c } = (0, s2.useMonths)();
            return (0, r2.jsxs)(r2.Fragment, { children: [(0, r2.jsx)(i.Header, { onSelectYearPicker: () => n3?.("year") }), (0, r2.jsx)("div", { className: a3 ? "months-body-rtl" : "months-body-ltr", children: c.map(((a4) => {
              const s3 = a4.id === t3.month, i2 = a4.isDisabled;
              return (0, r2.jsx)("div", { onMouseUp: () => {
                i2 || (e3({ ...t3, month: a4.id }), n3?.("day"));
              }, onTouchEnd: () => {
                i2 || (e3({ ...t3, month: a4.id }), n3?.("day"));
              }, className: (0, o2.default)("month-item", !s3 && !i2 && "month-item-hovered", s3 && !i2 && "month-item-selected", i2 && "disabled"), children: (0, r2.jsx)("span", { className: "month-item-name", children: a4.name }) }, a4.id);
            })) })] });
          };
        }, 7992: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = n2(a2(3663)), i = a2(8156), l = a2(6676), c = a2(8738), d = a2(5450), u = n2(a2(6174));
          s2.default.loadPersian({ dialect: "persian-modern" });
          const h = (0, i.forwardRef)((({ footerRender: e3, headerRender: t3, panelRender: a3, highlightDays: n3, dayLabelRender: s3, onModeChange: i2, toggle: h2, navigationIcons: f, highlightWeekend: m, style: p, className: y, loading: g, loadingIndicator: D, presets: v }, b) => {
            const { isJalaali: _ } = (0, l.useDatepicker)();
            return (0, r2.jsx)("div", { ref: b, className: (0, o2.default)(_ ? "panel-jalaali" : "panel-gregorian", "panel-elevation", y), style: p, children: (0, r2.jsxs)(d.Loading, { loading: g, indicator: D, children: [(0, r2.jsx)(u.default, { headerRender: t3, panelRender: a3, dayLabelRender: s3, highlightDays: n3, onModeChange: i2, toggle: h2, navigationIcons: f, highlightWeekend: m, presets: v }), (0, r2.jsx)(c.Footer, { toggle: h2, footerRender: e3 })] }) });
          }));
          t2.default = h;
        }, 6174: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.usePanelContext = void 0;
          const r2 = a2(602), o2 = a2(8156), s2 = n2(a2(2266)), i = n2(a2(5063)), l = n2(a2(8138)), c = (0, o2.createContext)({ headerRender: void 0, panelRender: void 0, dayLabelRender: void 0, presets: true, onChangeMode: () => null, toggle: () => null, navigationIcons: void 0, highlightDays: void 0, highlightWeekend: true });
          t2.usePanelContext = () => (0, o2.useContext)(c), t2.default = ({ toggle: e3, onModeChange: t3, navigationIcons: a3, presets: n3, ...d }) => {
            const [u, h] = (0, o2.useState)("day"), f = (0, o2.useMemo)((() => ({ day: (0, r2.jsx)(s2.default, {}), month: (0, r2.jsx)(i.default, {}), year: (0, r2.jsx)(l.default, {}) })), []);
            return (0, r2.jsx)(c.Provider, { value: { ...d, onChangeMode: (e4) => {
              h(e4), t3?.(e4);
            }, navigationIcons: a3, toggle: e3, presets: n3 }, children: f[u] });
          };
        }, 2979: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DatePicker = void 0;
          const r2 = a2(602), o2 = a2(8156), s2 = a2(6676), i = n2(a2(7992)), l = (0, o2.forwardRef)(((e3, t3) => {
            const { footerRender: a3, headerRender: n3, dayLabelRender: o3, panelRender: l2, highlightDays: c, customColors: d, onModeChange: u, nextIcon: h, prevIcon: f, superNextIcon: m, superPrevIcon: p, highlightWeekend: y, style: g, className: D, loading: v, ...b } = e3;
            return (0, s2.useSetColors)(d), (0, r2.jsx)(s2.DateProvider, { props: b, children: (0, r2.jsx)(i.default, { ref: t3, footerRender: a3, headerRender: n3, panelRender: l2, dayLabelRender: o3, highlightDays: c, highlightWeekend: y, onModeChange: u, navigationIcons: { nextIcon: h, prevIcon: f, superNextIcon: m, superPrevIcon: p }, style: g, className: D, loading: v }) });
          }));
          t2.DatePicker = l;
        }, 5355: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.YearsHeader = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(4207), l = a2(6174);
          t2.YearsHeader = ({ lowerDecade: e3, upperDecade: t3, onDecreaseDecade: a3, onIncreaseDecade: n3, onYearPress: c }) => {
            const { isJalaali: d, state: u } = (0, s2.useDatepicker)(), { headerRender: h } = (0, l.usePanelContext)(), f = u && 0 !== u.day ? u : null, m = (0, r2.jsx)("div", { className: "panel-header-rtl", children: (0, r2.jsxs)("div", { className: "panel-header-inner", children: [(0, r2.jsx)("div", { className: "center", children: (0, r2.jsx)("div", { className: "iconItem", onClick: () => d ? a3() : n3(), children: (0, r2.jsx)(i.Icon.DoubleChevronRight, { hoverEffect: true }) }) }), (0, r2.jsx)("div", { className: "panel-date-holder", children: (0, r2.jsx)("div", { className: (0, o2.default)("panel-date-holder-item", d ? "panel-date-holder-item-rtl" : "panel-date-holder-item-ltr"), children: d ? (0, r2.jsxs)("div", { className: "panel-header-year-picker", children: [(0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(e3), children: e3 }), (0, r2.jsx)("span", { children: "-" }), (0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(t3), children: t3 })] }) : (0, r2.jsxs)("div", { className: "panel-header-year-picker", children: [(0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(t3), children: t3 }), (0, r2.jsx)("span", { children: "-" }), (0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(e3), children: e3 })] }) }) }), (0, r2.jsx)("div", { className: "center", children: (0, r2.jsx)("div", { className: "iconItem", onClick: () => d ? n3() : a3(), children: (0, r2.jsx)(i.Icon.DoubleChevronLeft, { hoverEffect: true }) }) })] }) });
            return (0, r2.jsx)("div", { className: "panel-header-wrapper", children: h ? h(f, m) : m });
          };
        }, 8138: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(6174), l = a2(5355);
          t2.default = () => {
            const { isJalaali: e3, onYearchange: t3, state: a3, offset: n3, setOffset: c } = (0, s2.useDatepicker)(), { onChangeMode: d } = (0, i.usePanelContext)(), { years: u, lowerDecade: h, upperDecade: f } = (0, s2.useYears)(n3);
            return (0, r2.jsxs)(r2.Fragment, { children: [(0, r2.jsx)(l.YearsHeader, { lowerDecade: h, upperDecade: f, onDecreaseDecade: () => c(n3 - 10), onIncreaseDecade: () => c(n3 + 10), onYearPress: (e4) => {
              t3({ ...a3, year: e4 }), d?.("month");
            } }), (0, r2.jsx)("div", { className: e3 ? "years-body-rtl" : "years-body-ltr", children: u.map(((e4) => {
              const n4 = e4.id === a3.year, s3 = e4.isNotCurrentDecade, i2 = e4.isDisabled;
              return (0, r2.jsx)("div", { onClick: () => {
                i2 || (t3({ ...a3, year: e4.id }), d?.("month"));
              }, className: (0, o2.default)("year-item", !n4 && !i2 && "year-item-hovered", n4 && !i2 && "year-item-selected", s3 && "year-item-prev", i2 && "disabled"), children: (0, r2.jsx)("span", { className: "year-item-name", children: e4.id }) }, e4.id);
            })) })] });
          };
        }, 5874: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DayLabel = void 0;
          const r2 = a2(602), o2 = n2(a2(2193));
          t2.DayLabel = ({ dayLabelRender: e3, dayLabels: t3, isJalaali: a3 }) => {
            const n3 = (0, r2.jsx)("div", { className: (0, o2.default)(a3 ? "day-label-bar-inner-rtl" : "day-label-bar-inner-ltr"), children: t3.map(((e4) => (0, r2.jsx)("div", { className: "day-label-item", children: e4 }, e4))) });
            return (0, r2.jsx)("div", { className: "day-label-bar", children: e3 ? e3(t3, n3) : n3 });
          };
        }, 548: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193));
          t2.default = ({ day: e3, isDisabled: t3, isSelected: a3, isWeekend: n3, onPress: s2, isHighlight: i, isNotCurrentMonth: l, isToday: c, onMouseEnter: d, onMouseLeave: u, mode: h, endDay: f, startDay: m, isJalaali: p }) => (0, r2.jsx)("div", { className: (0, o2.default)("day", t3 && "disabled", l && "not-current", n3 && "weekend-day", i && "off-day", a3 && "highlight", !a3 && !t3 && "hovered", c && "today", "range" === h && a3 && e3 === m && f && (p ? "start-tail-highlight" : "end-tail-highlight"), "range" === h && a3 && e3 === f && (p ? "end-tail-highlight" : "start-tail-highlight")), onClick: () => {
            t3 || s2?.();
          }, onMouseEnter: d, onMouseLeave: u, children: (0, r2.jsx)("span", { className: "day-span-text", children: e3 }) });
        }, 8738: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Footer = void 0;
          const n2 = a2(602), r2 = a2(6676);
          t2.Footer = ({ footerRender: e3, toggle: t3 }) => {
            const { t: a3 } = (0, r2.useTranslation)(), { goToToday: o2, state: s2 } = (0, r2.useDatepicker)(), i = s2 && 0 !== s2.day ? s2 : null, l = (0, n2.jsx)("div", { className: "panel-footer-rtl", children: (0, n2.jsx)("div", { onClick: () => {
              o2(), t3?.();
            }, children: (0, n2.jsx)("span", { className: "today-text clickable", children: a3("today") }) }) });
            return (0, n2.jsx)("div", { className: "panel-footer-wrapper", children: e3 ? e3(i, l) : l });
          };
        }, 4207: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Icon = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = () => null;
          t2.Icon = s2;
          s2.Forward = ({ size: e3 = 20, onClick: t3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("icon", "icon-forward"), onClick: t3, style: { width: e3, height: "100%", fontSize: e3 } }), s2.Calendar = ({ size: e3 = 20, onClick: t3 }) => (0, r2.jsx)("div", { className: "icon icon-calendar", onClick: t3, style: { width: e3, height: "100%", fontSize: e3 } }), s2.Back = ({ size: e3 = 20, onClick: t3 }) => (0, r2.jsx)("div", { className: "icon icon-arrow_back", style: { width: e3, height: "100%", fontSize: e3 }, onClick: t3 }), s2.DoubleChevronRight = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", "icon-keyboard_double_arrow_right", a3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.DoubleChevronLeft = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", "icon-keyboard_double_arrow_left", a3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.Clear = ({ size: e3 = 20, onClick: t3 }) => (0, r2.jsx)("div", { className: "icon icon-highlight_off", style: { width: e3, height: "100%", fontSize: e3 }, onClick: t3 }), s2.ChevronRight = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", "icon-chevron-right", a3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.ChevronLeft = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", "icon-chevron-left", a3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.CalendarToday = ({ size: e3 = 20, onClick: t3 }) => (0, r2.jsx)("div", { className: "icon icon-calendar-today", style: { width: e3, height: "100%", fontSize: e3 }, onClick: t3 }), s2.Chevron = ({ size: e3 = 20, onClick: t3, isJalaali: a3, hoverEffect: n3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", a3 ? "icon-chevron-right" : "icon-chevron-left", n3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.DoubleChevron = ({ size: e3 = 20, onClick: t3, isJalaali: a3, hoverEffect: n3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", a3 ? "icon-keyboard_double_arrow_right" : "icon-keyboard_double_arrow_left", n3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.Dropdown = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("panel-icon", "icon-arrow_drop_down", a3 && "panel-icon-hovered"), style: { width: e3 + 4, height: e3 + 4, fontSize: e3 }, onClick: t3 }), s2.Error = ({ size: e3 = 20, onClick: t3, hoverEffect: a3 }) => (0, r2.jsx)("div", { className: (0, o2.default)("icon", "icon-error", a3 && "panel-icon-hovered"), style: { width: e3, height: "100%", fontSize: e3 }, onClick: t3 });
        }, 5450: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Loading = void 0;
          const n2 = a2(602);
          t2.Loading = ({ children: e3, loading: t3, indicator: a3 }) => t3 ? (0, n2.jsx)("div", { className: "loading-wrapper", children: a3 || (0, n2.jsx)("div", { className: "loading" }) }) : (0, n2.jsx)(n2.Fragment, { children: e3 });
        }, 6913: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(8156), i = a2(3742), l = a2(8041), c = a2(3827), d = (0, s2.memo)((({ children: e3, placement: t3, close: a3, animate: n3, toggleAnimate: d2, isOpen: u, panel: h, mode: f, getContainer: m, inputRef: p, responsive: y, isJalaali: g }) => {
            const D = (0, s2.useRef)(null), v = (0, i.useShouldResponsive)(y);
            (0, l.useClickOutside)(a3, [D.current, p.current]);
            const b = (0, i.useConfig)({ element: p, placement: t3, shouldResponsive: v, mode: f, isJalaali: g }), _ = (0, s2.useMemo)((() => u ? (0, o2.default)("popup-panel-overlay", "popover-panel-open", "date" === f ? "popover-panel-date" : v ? "mobile-popover-panel-range" : "popover-panel-range", b().animationClassName) : (0, o2.default)("popup-panel-overlay", "popover-panel-close", b().animationClassName)), [b, u, f, v]);
            return (0, r2.jsxs)(s2.Fragment, { children: [e3, n3 && (0, r2.jsx)(c.Portal, { getContainer: m, children: (0, r2.jsx)("div", { ref: D, onAnimationEnd: (e4) => {
              "close" === e4.animationName && (e4.preventDefault(), d2(false));
            }, className: _, style: { ...b().coordinates }, children: h(v) }) })] });
          }));
          t2.default = d;
        }, 3827: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Portal = void 0;
          const n2 = a2(7111), r2 = a2(3170);
          t2.Portal = ({ children: e3, getContainer: t3 }) => r2.isDOM ? (0, n2.createPortal)(e3, (function(e4) {
            if (!e4) return document.body;
            if ("function" == typeof e4) return e4();
            if ("string" == typeof e4) {
              return document.querySelector(e4) || (console.warn("Your selector is not valid or does not exists in DOM, we automatically replace it with root element"), document.body);
            }
            return e4;
          })(t3)) : null;
        }, 9424: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.InputRangePicker = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(8156), i = a2(6676), l = n2(a2(6913)), c = n2(a2(2705)), d = a2(4009), u = a2(567), h = (0, s2.forwardRef)(((e3, t3) => {
            const { value: a3, onChange: n3, onDayChange: h2, onMonthChange: f, onYearChange: m, format: p, locale: y, disabledDates: g, open: D, onOpenChange: v, rangeProps: b, disabled: _, suffixIcon: j, prefixIcon: M, placement: x, wrapperClassName: C, wrapperStyle: P, defaultValue: R, customColors: O, getPopupContainer: k, separator: N, responsive: w = "auto", error: Y, placeholder: T, closeOnChange: E, presets: S = true, onClear: I, ...A } = e3, L = "fa" === (y || "fa");
            (0, i.useSetColors)(O);
            const H = (0, s2.useRef)(null), [J, G] = (0, s2.useState)(D ?? false);
            (0, s2.useEffect)((() => {
              void 0 !== D && (D ? $() : U());
            }), [D]);
            const [F, z] = (0, s2.useState)(false), W = (e4) => {
              z(e4);
            }, U = () => {
              G(void 0 !== D && D), v?.(false);
            }, $ = () => {
              _ || (G(void 0 === D || D), W(void 0 === D || D), v?.(true));
            }, B = () => {
              G(!J), W(!J), v?.(!J);
            };
            return (0, r2.jsx)(i.RangeProvider, { props: { value: a3, onChange: n3, onMonthChange: f, onYearChange: m, format: p, disabledDates: g, locale: y, onDayChange: h2, defaultValue: R, close: E ? U : void 0 }, children: ({ values: e4, onChangeInputRange: a4, placeholderFrom: n4, placeholderTo: s3, onClear: i2, isJalaali: h3 }) => (0, r2.jsx)(l.default, { mode: "range", placement: x, isOpen: J, close: U, animate: F, toggleAnimate: W, inputRef: H, getContainer: k, responsive: w, isJalaali: h3, panel: (e5) => (0, r2.jsx)(c.default, { shouldResponsive: e5, responsive: w, presets: S, onClose: () => {
            }, ...b }), children: (0, r2.jsxs)("div", { className: (0, o2.default)("range-input-wrapper group", Y && "picker-input-error", _ && "picker-input-disabled", L && "rtl", C), ref: H, style: P, onClick: $, children: [M && M, (0, r2.jsx)(u.Input, { value: e4?.[0], firstInput: true, ref: t3, isRtl: L, disabled: _, separator: N, ...A, onChange: (e5) => a4?.(e5, true), placeholder: n4 || (T ? T[0] : void 0) }), (0, r2.jsx)(u.Input, { value: e4?.[1], isRtl: L, ref: t3, disabled: _, ...A, onChange: (e5) => a4?.(e5, false), placeholder: s3 || (T ? T[1] : void 0) }), (0, r2.jsx)(d.Suffix, { suffixIcon: j, hasValue: Boolean(e4?.[0]), onClear: i2, inputOnClear: I, error: Y, toggle: B })] }) }, "range-popup") });
          }));
          t2.InputRangePicker = h;
        }, 567: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Input = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(8156), i = a2(3742), l = a2(4207);
          t2.Input = (0, s2.forwardRef)((({ onLayout: e3, isRtl: t3, disabled: a3, className: n3, firstInput: c, value: d, separator: u, ...h }, f) => {
            const m = (0, s2.useRef)(null), p = (0, s2.useRef)(false), y = (0, i.useMergeRefs)(f, m);
            return (0, s2.useEffect)((() => {
              if (!m.current || p.current) return;
              const t4 = m.current.getBoundingClientRect();
              t4 && (e3?.(t4.width), p.current = true);
            }), [m, e3]), (0, s2.useEffect)((() => {
              if (!m.current) return;
              const t4 = m.current, a4 = new ResizeObserver((([t5]) => {
                const a5 = t5.target.getBoundingClientRect();
                a5 && e3?.(a5.width);
              }));
              return a4.observe(t4, { box: "border-box" }), () => a4.unobserve(t4);
            }), [m]), (0, r2.jsxs)(r2.Fragment, { children: [(0, r2.jsx)("input", { ...h, ref: y, value: d, disabled: a3, className: (0, o2.default)(t3 ? "range-input-fa" : "range-input-en", a3 && "picker-input-disabled", n3) }), c && (0, r2.jsx)("div", { style: { minWidth: 36, maxWidth: 36 }, className: "separator-icon", children: u || (t3 ? (0, r2.jsx)(l.Icon.Back, {}) : (0, r2.jsx)(l.Icon.Forward, {})) })] });
          }));
        }, 1140: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangePicker = void 0;
          const r2 = a2(602), o2 = a2(8156), s2 = a2(6676), i = n2(a2(2705)), l = (0, o2.forwardRef)(((e3, t3) => {
            const { headerRender: a3, dayLabelRender: n3, panelRender: o3, highlightDays: l2, customColors: c, onModeChange: d, highlightWeekend: u, style: h, className: f, loading: m, ...p } = e3;
            return (0, s2.useSetColors)(c), (0, r2.jsx)(s2.RangeProvider, { props: p, children: (0, r2.jsx)(i.default, { ref: t3, headerRender: a3, panelRender: o3, dayLabelRender: n3, highlightDays: l2, onModeChange: d, highlightWeekend: u, style: h, className: f, loading: m }) });
          }));
          t2.RangePicker = l;
        }, 5353: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DateLabel = void 0;
          const n2 = a2(602), r2 = a2(4207);
          t2.DateLabel = ({ monthLabel: e3, onSelectMonthPicker: t3, onSelectYearPicker: a3, yearLabel: o2, onDecreaseMonth: s2, onIncreaseMonth: i, shouldResponsive: l, isJalaali: c }) => l ? (0, n2.jsxs)("div", { className: "stretch", children: [(0, n2.jsx)("div", { onClick: s2, children: (0, n2.jsx)(r2.Icon.Chevron, { isJalaali: c, hoverEffect: true }) }), (0, n2.jsx)("div", { onClick: i, children: (0, n2.jsx)(r2.Icon.Chevron, { isJalaali: !c, hoverEffect: true }) })] }) : (0, n2.jsxs)("div", { className: "panel-date-holder-item-ltr", children: [(0, n2.jsx)("div", { className: "panel-date-holder-item clickable", onClick: t3, children: (0, n2.jsx)("span", { className: "panel-header-item-text", children: e3 }) }), (0, n2.jsx)("div", { className: "panel-date-holder-item clickable", onClick: a3, children: (0, n2.jsx)("span", { className: "panel-header-item-text", children: o2 }) })] });
        }, 3043: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.FromNavigator = void 0;
          const n2 = a2(602), r2 = a2(4207);
          t2.FromNavigator = ({ isJalaali: e3, onDecreaseMonth: t3, onDecreaseYear: a3, type: o2, shouldResponsive: s2, monthLabel: i, yearLabel: l, onSelectYearPicker: c }) => s2 ? (0, n2.jsxs)("div", { className: "panel-date-holder-item", children: [(0, n2.jsx)("div", { className: "panel-date-holder-item", children: (0, n2.jsx)("span", { className: "range-panel-header-item-text", children: i }) }), (0, n2.jsx)("div", { className: "panel-date-holder-item clickable", onClick: c, children: (0, n2.jsx)("span", { className: "range-panel-header-item-text", children: l }) }), (0, n2.jsx)(r2.Icon.Dropdown, { hoverEffect: true, onClick: c })] }) : "to" === o2 ? (0, n2.jsx)("div", { className: "panel-empty-holder" }) : (0, n2.jsxs)("div", { className: "center", children: [(0, n2.jsx)("div", { className: "iconItem", onClick: a3, children: (0, n2.jsx)(r2.Icon.DoubleChevron, { isJalaali: e3, hoverEffect: true }) }), (0, n2.jsx)("div", { className: "iconItem", onClick: t3, children: (0, n2.jsx)(r2.Icon.Chevron, { isJalaali: e3, hoverEffect: true }) })] });
        }, 4202: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectedDates = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(8156), i = a2(6676), l = a2(5928);
          t2.SelectedDates = ({ isJalaali: e3 }) => {
            const { t: t3 } = (0, i.useRangeTranslation)(), { rangeState: a3 } = (0, i.useRangepicker)(), { startText: n3, endText: c, isFromDay: d, isToDay: u } = (0, s2.useMemo)((() => {
              const n4 = a3.startDate?.day || 0, r3 = a3.startDate?.month || 0, o3 = a3.startDate?.year || 0, s3 = a3.endDate?.day || 0, i2 = a3.endDate?.month || 0, c2 = a3.endDate?.year || 0, d2 = !!n4, u2 = !(!a3.endDate || !s3);
              return { startText: d2 ? `${n4} ${(0, l.getMonthLabels)(r3, e3)} ${o3}` : t3("startDate"), endText: u2 ? `${s3} ${(0, l.getMonthLabels)(i2, e3)} ${c2}` : t3("endDate"), isFromDay: d2, isToDay: u2 };
            }), [e3, a3, t3]);
            return (0, r2.jsxs)("div", { style: { display: "flex", alignItems: "center", flexDirection: "row" }, children: [(0, r2.jsx)("span", { className: (0, o2.default)("panel-header-date", d && "panel-header-date-selected"), children: n3 }), (0, r2.jsx)("span", { className: (0, o2.default)("panel-header-date", d && "panel-header-date-selected"), style: { marginInline: 4 }, children: "–" }), (0, r2.jsx)("span", { className: (0, o2.default)("panel-header-date", u && "panel-header-date-selected"), children: c })] });
          };
        }, 8485: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ToNavigator = void 0;
          const n2 = a2(602), r2 = a2(4207);
          t2.ToNavigator = ({ isJalaali: e3, onIncreaseMonth: t3, onIncreaseYear: a3, type: o2, shouldResponsive: s2 }) => s2 ? null : "from" === o2 ? (0, n2.jsx)("div", { className: "panel-empty-holder" }) : (0, n2.jsxs)("div", { className: "center", children: [(0, n2.jsx)("div", { onClick: t3, children: (0, n2.jsx)(r2.Icon.Chevron, { isJalaali: !e3, hoverEffect: true }) }), (0, n2.jsx)("div", { onClick: a3, children: (0, n2.jsx)(r2.Icon.DoubleChevron, { isJalaali: !e3, hoverEffect: true }) })] });
        }, 4029: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangeHeader = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(5928), l = a2(419), c = a2(8320), d = a2(5515);
          t2.RangeHeader = ({ onSelectMonthPicker: e3, onSelectYearPicker: t3 }) => {
            const { onRangeDecreaseYear: a3, onRangeDecreaseMonth: n3, onRangeIncreaseMonth: u, onRangeIncreaseYear: h, isJalaali: f, from: m, to: p, dateRange: y } = (0, s2.useRangepicker)(), { type: g } = (0, c.useRangeTemplate)(), { headerRender: D, shouldResponsive: v } = (0, l.useRangePanelContext)(), b = (0, r2.jsx)("div", { className: f ? "panel-header-rtl" : "panel-header-ltr", children: (0, r2.jsx)(d.HeaderSide, { isJalaali: f, yearLabel: String("from" === g ? m.year : p.year), monthLabel: (0, i.getMonthLabels)("from" === g ? m.month : p.month || 0, f), onDecreaseMonth: () => n3(), onDecreaseYear: () => a3(), onIncreaseMonth: () => u(), onIncreaseYear: () => h(), onSelectMonthPicker: e3, onSelectYearPicker: t3, shouldResponsive: v }) });
            return (0, r2.jsx)("div", { className: (0, o2.default)(v ? "mobile-panel-header-wrapper" : "panel-header-wrapper"), children: D ? D(y, b) : b });
          };
        }, 7636: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(3663)), s2 = a2(8156), i = a2(6676), l = a2(5928), c = a2(8320), d = a2(4029), u = a2(52);
          t2.default = ({}) => {
            const { onRangeDaychange: e3, cacheRangeDate: t3, disabledDates: a3, from: n3, to: h, isJalaali: f, changeFrom: m, changeTo: p } = (0, i.useRangepicker)(), { type: y, onChangeMode: g } = (0, c.useRangeTemplate)(), { days: D } = (0, i.useRangeDays)(y), v = (0, s2.useCallback)((({ day: r3, month: s3, year: i2 }) => {
              const c2 = !t3?.startDate.day || !!t3.startDate && !!t3.endDate;
              if (!c2) {
                const n4 = (function(e4, t4) {
                  const a4 = t4.diff(e4, "days"), n5 = [];
                  for (let t5 = 0; t5 < a4; t5++) n5.push((0, o2.default)(e4).add(t5, "days"));
                  return n5;
                })((0, l.dateTransformer)(t3.startDate, f), (0, l.dateTransformer)({ day: r3, month: s3, year: i2 }, f)), c3 = n4.findIndex(((e4) => a3?.(e4)));
                if (-1 !== c3) return e3((0, l.momentTransformer)(n4[c3 - 1], f), false);
              }
              e3({ day: r3, month: s3, year: i2 }, c2), c2 ? h.month !== s3 && m({ day: r3, month: s3, year: i2 }) : n3.month !== s3 && p({ day: r3, month: s3, year: i2 });
            }), [t3, m, p, a3, n3, f, e3, h]);
            return (0, r2.jsxs)("div", { className: "range-day-wrapper", children: [(0, r2.jsx)(d.RangeHeader, { onSelectMonthPicker: () => g?.("month"), onSelectYearPicker: () => {
              g?.("year");
            } }), (0, r2.jsx)("div", { className: "range-day-panel", children: (0, r2.jsx)(u.RangeDayPanel, { days: D, selectedRange: { startDate: t3?.startDate || null, endDate: t3?.endDate || null }, onSelect: v }) })] });
          };
        }, 52: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangeDayPanel = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = n2(a2(3663)), i = a2(6676), l = a2(5928), c = n2(a2(548)), d = a2(5874), u = a2(419);
          t2.RangeDayPanel = ({ days: e3, onSelect: t3, selectedRange: a3 }) => {
            const { isJalaali: n3, dayLabels: h, changePlaceholder: f, rangeState: m } = (0, i.useRangepicker)(), p = (0, l.momentTransformer)((0, s2.default)(), n3), { dayLabelRender: y, highlightDays: g, highlightWeekend: D, onClose: v, presets: b } = (0, u.useRangePanelContext)(), _ = e3.map(((t4) => {
              if (t4.isDisabled) {
                const a4 = e3.findIndex(((e4) => e4.id === t4.id)), n4 = a4 - 1, r3 = a4 + 1, o3 = -1 !== n4 ? e3[n4] : null, s3 = -1 !== r3 ? e3[r3] : null, i2 = !!o3 && o3.isDisabled, l2 = !!s3 && s3.isDisabled, c2 = i2 || l2;
                return { ...t4, isNeighborsDisabled: c2 };
              }
              return { ...t4, isNeighborsDisabled: false };
            })), j = void 0 === D || D;
            return (0, r2.jsxs)("div", { className: "range-day-panel-item", children: [(0, r2.jsx)(d.DayLabel, { dayLabelRender: y, dayLabels: h, isJalaali: n3 }), (0, r2.jsx)("div", { className: "days-body", children: _.map(((e4) => {
              const { id: s3, isNotCurrentMonth: i2, isWeekend: d2, isDisabled: u2, isNeighborsDisabled: h2, ...y2 } = e4;
              return (0, r2.jsx)("div", { className: (0, o2.default)("day-item-outer"), onMouseEnter: () => {
                !u2 && b && f(y2);
              }, onMouseLeave: () => {
                b && f(null);
              }, children: (0, r2.jsx)("div", { className: (0, o2.default)("day-item-chain", u2 && h2 && "disabled", (0, l.isBetweenHighlight)(e4, a3.startDate, a3.endDate, n3) && !i2 && "highlight-day"), children: (0, r2.jsx)(c.default, { day: e4.day, mode: "range", isJalaali: n3, startDay: a3.startDate?.day, endDay: a3.endDate?.day, isDisabled: u2, isNeighborsDisabled: h2, isNotCurrentMonth: i2, onPress: () => {
                t3(e4), null === m.endDate && 0 !== m.startDate.day && v?.();
              }, isSelected: !(!a3.startDate || i2) && ((0, l.checkDates)(a3.startDate, e4) || (0, l.checkDates)(a3.endDate, e4)), isHighlight: "function" == typeof g ? g((0, l.dateTransformer)(y2, n3)) : (g || [])?.some(((e5) => e5.isSame((0, l.dateTransformer)(y2, n3), "day"))), isWeekend: !!j && d2, isToday: (0, l.isEqual)(p, y2) && !(0, l.isEqual)(a3.startDate, p) && !(0, l.isEqual)(a3.endDate, p) }) }) }, `${s3}-${e4.month}`);
            })) })] });
          };
        }, 5515: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.HeaderSide = void 0;
          const n2 = a2(602), r2 = a2(8156), o2 = a2(8320), s2 = a2(5353), i = a2(3043), l = a2(4202), c = a2(8485);
          t2.HeaderSide = ({ isJalaali: e3, onDecreaseYear: t3, onIncreaseYear: a3, onDecreaseMonth: d, onIncreaseMonth: u, onSelectMonthPicker: h, onSelectYearPicker: f, monthLabel: m, yearLabel: p, shouldResponsive: y }) => {
            const { type: g } = (0, o2.useRangeTemplate)();
            return (0, n2.jsxs)(r2.Fragment, { children: [y && (0, n2.jsx)("div", { className: "mobile-extra-date-header", children: (0, n2.jsx)(l.SelectedDates, { isJalaali: e3 }) }), (0, n2.jsxs)("div", { className: "panel-header-inner", children: [(0, n2.jsx)(i.FromNavigator, { onDecreaseYear: t3, onDecreaseMonth: d, isJalaali: e3, shouldResponsive: y, type: g, monthLabel: m, yearLabel: p, onSelectMonthPicker: h, onSelectYearPicker: f }), (0, n2.jsx)(s2.DateLabel, { onSelectMonthPicker: h, onSelectYearPicker: f, shouldResponsive: y, onDecreaseMonth: d, onIncreaseMonth: u, yearLabel: p, monthLabel: m, isJalaali: e3 }), (0, n2.jsx)(c.ToNavigator, { isJalaali: e3, onIncreaseMonth: u, onIncreaseYear: a3, shouldResponsive: y, type: g })] })] });
          };
        }, 8050: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.MonthsHeader = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(5928), l = a2(8320);
          t2.MonthsHeader = ({}) => {
            const { isJalaali: e3 } = (0, s2.useRangepicker)(), { onChangeMode: t3, type: a3 } = (0, l.useRangeTemplate)(), { from: n3, to: c } = (0, s2.useRangepicker)(), { year: d, month: u } = "from" === a3 ? n3 : c, h = (0, r2.jsx)("div", { className: "panel-header-rtl", children: (0, r2.jsxs)("div", { className: "panel-header-inner", children: [(0, r2.jsx)("div", { className: "center" }), (0, r2.jsx)("div", { className: "panel-date-holder", children: (0, r2.jsx)("div", { className: (0, o2.default)("panel-date-holder-item", e3 ? "panel-date-holder-item-rtl" : "panel-date-holder-item-ltr"), children: (0, r2.jsxs)("div", { className: "panel-header-year-picker", children: [(0, r2.jsx)("span", { className: "clickable", onClick: () => t3?.("year"), children: d }), (0, r2.jsx)("span", { children: "-" }), (0, r2.jsx)("span", { className: "clickable", children: (0, i.getMonthLabels)(u, e3) })] }) }) }), (0, r2.jsx)("div", { className: "center" })] }) });
            return (0, r2.jsx)("div", { className: "panel-header-wrapper", children: h });
          };
        }, 4894: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true });
          const n2 = a2(602), r2 = a2(6676), o2 = a2(8320), s2 = a2(4769);
          t2.default = ({}) => {
            const { onRangeMonthchange: e3 } = (0, r2.useRangepicker)(), { type: t3 } = (0, o2.useRangeTemplate)(), { months: a3 } = (0, r2.useRangeMonths)(t3);
            return (0, n2.jsx)(s2.RangeMonthtemplate, { months: a3, onSelect: (a4) => {
              e3(a4, t3);
            } });
          };
        }, 4769: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangeMonthtemplate = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(8320), l = a2(8050);
          t2.RangeMonthtemplate = ({ months: e3, onSelect: t3 }) => {
            const { isJalaali: a3, from: n3, to: c } = (0, s2.useRangepicker)(), { type: d, onChangeMode: u } = (0, i.useRangeTemplate)(), h = "from" === d ? n3.month : c.month;
            return (0, r2.jsxs)(r2.Fragment, { children: [(0, r2.jsx)(l.MonthsHeader, {}), (0, r2.jsx)("div", { className: a3 ? "months-body-rtl" : "months-body-ltr", children: e3.map(((e4) => {
              const a4 = e4.id === h, n4 = e4.isDisabled;
              return (0, r2.jsx)("div", { onClick: () => {
                n4 || (t3(e4.id), u?.("day"));
              }, className: (0, o2.default)("month-item", !a4 && !n4 && "month-item-hovered", a4 && !n4 && "month-item-selected", n4 && "disabled"), children: (0, r2.jsx)("span", { className: "month-item-name", children: e4.name }) }, e4.id);
            })) })] });
          };
        }, 2705: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true });
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = n2(a2(3663)), i = a2(8156), l = a2(6676), c = a2(5450), d = n2(a2(419)), u = a2(2461);
          s2.default.loadPersian({ dialect: "persian-modern" });
          const h = (0, i.memo)((0, i.forwardRef)((({ headerRender: e3, panelRender: t3, highlightDays: a3, dayLabelRender: n3, onModeChange: s3, highlightWeekend: h2, className: f, style: m, onClose: p, responsive: y, shouldResponsive: g, loading: D, loadingIndicator: v, presets: b }, _) => {
            const { isJalaali: j } = (0, l.useRangepicker)(), M = { auto: g ? "mobile-panel" : "desktop-panel", desktop: "desktop-panel", mobile: "mobile-panel" }, x = { auto: (0, r2.jsx)(i.Fragment, { children: g ? (0, r2.jsx)(u.RangePanelTemplate, {}) : (0, r2.jsxs)(i.Fragment, { children: [(0, r2.jsx)(u.RangePanelTemplate, { type: "from" }), (0, r2.jsx)(u.RangePanelTemplate, { type: "to" })] }) }), desktop: (0, r2.jsxs)(i.Fragment, { children: [(0, r2.jsx)(u.RangePanelTemplate, { type: "from" }), (0, r2.jsx)(u.RangePanelTemplate, { type: "to" })] }), mobile: (0, r2.jsx)(u.RangePanelTemplate, {}) };
            return (0, r2.jsx)("div", { ref: _, className: (0, o2.default)(j ? "panel-range-jalaali" : "panel-range-gregorian", y && g && M[y], "panel-elevation", f), style: m, children: (0, r2.jsx)(c.Loading, { loading: D, indicator: v, children: (0, r2.jsx)(d.default, { headerRender: e3, panelRender: t3, dayLabelRender: n3, highlightDays: a3, onModeChange: s3, highlightWeekend: h2, onClose: p, shouldResponsive: g, presets: b, children: y ? x[y] : (0, r2.jsxs)(i.Fragment, { children: [(0, r2.jsx)(u.RangePanelTemplate, { type: "from" }), (0, r2.jsx)(u.RangePanelTemplate, { type: "to" })] }) }) }) });
          })));
          t2.default = h;
        }, 419: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangePanelContext = void 0;
          const n2 = a2(602), r2 = a2(8156), o2 = (0, r2.createContext)({ headerRender: () => null, panelRender: () => null, onChangeMode: () => null, onModeChange: () => null, dayLabelRender: () => null, onClose: () => null, presets: true, shouldResponsive: false, highlightDays: void 0, highlightWeekend: true }), s2 = (0, r2.memo)((({ children: e3, ...t3 }) => (0, n2.jsx)(o2.Provider, { value: { ...t3 }, children: e3 })));
          t2.useRangePanelContext = () => (0, r2.useContext)(o2), t2.default = s2;
        }, 2461: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangePanelTemplate = void 0;
          const r2 = a2(602), o2 = a2(8156), s2 = n2(a2(7636)), i = n2(a2(4894)), l = n2(a2(6532)), c = a2(419), d = a2(8320);
          t2.RangePanelTemplate = ({ type: e3 = "from" }) => {
            const [t3, a3] = (0, o2.useState)("day"), n3 = (0, c.useRangePanelContext)(), u = { day: (0, r2.jsx)(s2.default, {}), month: (0, r2.jsx)(i.default, {}), year: (0, r2.jsx)(l.default, {}) };
            return (0, r2.jsx)(d.RangeTemplateContext.Provider, { value: { onChangeMode: (e4) => {
              a3(e4), n3?.onModeChange?.(e4);
            }, type: e3 }, children: (0, r2.jsx)("div", { className: "panel-wrapper", children: u[t3] }) });
          };
        }, 8320: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeTemplate = t2.RangeTemplateContext = void 0;
          const n2 = a2(8156);
          t2.RangeTemplateContext = (0, n2.createContext)({ type: "from", onChangeMode: () => null });
          t2.useRangeTemplate = () => (0, n2.useContext)(t2.RangeTemplateContext);
        }, 2067: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.YearsHeader = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(4207), l = a2(419);
          t2.YearsHeader = ({ lowerDecade: e3, upperDecade: t3, onDecreaseDecade: a3, onIncreaseDecade: n3, onYearPress: c }) => {
            const { isJalaali: d, rangeStateMoment: u } = (0, s2.useRangepicker)(), { headerRender: h } = (0, l.useRangePanelContext)(), f = (0, r2.jsx)("div", { className: "panel-header-rtl", children: (0, r2.jsxs)("div", { className: "panel-header-inner", children: [(0, r2.jsx)("div", { className: "center", children: (0, r2.jsx)("div", { className: "iconItem", onClick: () => d ? a3() : n3(), children: (0, r2.jsx)(i.Icon.DoubleChevronRight, { hoverEffect: true }) }) }), (0, r2.jsx)("div", { className: "panel-date-holder", children: (0, r2.jsx)("div", { className: (0, o2.default)("panel-date-holder-item", d ? "panel-date-holder-item-rtl" : "panel-date-holder-item-ltr"), children: (0, r2.jsxs)("div", { className: "panel-header-year-picker", children: [(0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(e3), children: e3 }), (0, r2.jsx)("span", { children: "-" }), (0, r2.jsx)("span", { className: "clickable", onClick: () => c?.(t3), children: t3 })] }) }) }), (0, r2.jsx)("div", { className: "center", children: (0, r2.jsx)("div", { className: "iconItem", onClick: () => d ? n3() : a3(), children: (0, r2.jsx)(i.Icon.DoubleChevronLeft, { hoverEffect: true }) }) })] }) });
            return (0, r2.jsx)("div", { className: "panel-header-wrapper", children: h ? h(u, f) : f });
          };
        }, 6532: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true });
          const n2 = a2(602), r2 = a2(8156), o2 = a2(6676), s2 = a2(8320), i = a2(7483);
          t2.default = ({}) => {
            const { onRangeYearchange: e3, offsets: t3, setOffsets: a3 } = (0, o2.useRangepicker)(), { type: l, onChangeMode: c } = (0, s2.useRangeTemplate)(), { years: d, lowerDecade: u, upperDecade: h } = (0, o2.useRangeYears)({ type: l, offsets: t3 }), f = (0, r2.useCallback)((() => {
              a3("from" === l ? [t3[0] + 10, t3[1]] : [t3[0], t3[1] + 10]);
            }), [t3, a3, l]), m = (0, r2.useCallback)((() => {
              u > 9 && a3("from" === l ? [t3[0] - 10, t3[1]] : [t3[0], t3[1] - 10]);
            }), [u, t3, a3, l]);
            return (0, n2.jsx)(i.RangeYeartemplate, { years: d, lowerDecade: u, upperDecade: h, onSelect: (t4) => {
              e3(t4, l);
            }, onIncreaseDecade: f, onDecreaseDecade: m, onChangeMode: c });
          };
        }, 7483: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RangeYeartemplate = void 0;
          const r2 = a2(602), o2 = n2(a2(2193)), s2 = a2(6676), i = a2(8320), l = a2(2067);
          t2.RangeYeartemplate = ({ years: e3, onChangeMode: t3, lowerDecade: a3, upperDecade: n3, onSelect: c, onDecreaseDecade: d, onIncreaseDecade: u }) => {
            const { isJalaali: h, from: f, to: m } = (0, s2.useRangepicker)(), { type: p } = (0, i.useRangeTemplate)(), y = "from" === p ? f.year : m.year;
            return (0, r2.jsxs)(r2.Fragment, { children: [(0, r2.jsx)(l.YearsHeader, { lowerDecade: a3, upperDecade: n3, onDecreaseDecade: d, onIncreaseDecade: u, onYearPress: (e4) => {
              c(e4), t3?.("month");
            } }), (0, r2.jsx)("div", { className: h ? "years-body-rtl" : "years-body-ltr", children: e3.map(((e4) => {
              const a4 = e4.id === y, n4 = e4.isNotCurrentDecade, s3 = !(!e4.isDisabled && "to" !== p) && e4.id < f.year;
              return (0, r2.jsx)("div", { onClick: () => {
                s3 || (c(e4.id), t3?.("month"));
              }, className: (0, o2.default)("year-item", !a4 && !s3 && "year-item-hovered", a4 && !s3 && "year-item-selected", n4 && "year-item-prev", s3 && "disabled"), children: (0, r2.jsx)("span", { className: "year-item-name", children: e4.id }) }, e4.id);
            })) })] });
          };
        }, 4009: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.Suffix = void 0;
          const n2 = a2(602), r2 = a2(4207);
          t2.Suffix = ({ hasValue: e3, suffixIcon: t3, onClear: a3, inputOnClear: o2, error: s2, toggle: i }) => t3 || null === t3 ? (0, n2.jsx)(n2.Fragment, { children: t3 }) : s2 ? (0, n2.jsx)("div", { className: "icon-wrapper", children: (0, n2.jsx)(r2.Icon.Error, {}) }) : (0, n2.jsxs)("div", { className: "icon-wrapper relative min-w-[35px] min-h-[20px]", children: [e3 && (0, n2.jsx)("div", { className: "icon-clear-wrapper", children: (0, n2.jsx)(r2.Icon.Clear, { onClick: (e4) => {
            e4?.stopPropagation(), a3?.(), o2?.();
          } }) }), (0, n2.jsx)("div", { className: "icon-calendar-wrapper " + (e3 ? "has-icon-clear" : ""), children: (0, n2.jsx)(r2.Icon.Calendar, { onClick: (e4) => {
            e4?.stopPropagation(), i?.();
          } }) })] });
        }, 1507: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.gregorianDayLabels = t2.jalaaliDayLabels = t2.jalaaliMonths = t2.gregorianMonths = void 0;
          t2.gregorianMonths = [{ id: 1, name: "January" }, { id: 2, name: "February" }, { id: 3, name: "March" }, { id: 4, name: "April" }, { id: 5, name: "May" }, { id: 6, name: "June" }, { id: 7, name: "July" }, { id: 8, name: "August" }, { id: 9, name: "September" }, { id: 10, name: "October" }, { id: 11, name: "November" }, { id: 12, name: "December" }];
          t2.jalaaliMonths = [{ id: 1, name: "فروردین" }, { id: 2, name: "اردیبهشت" }, { id: 3, name: "خرداد" }, { id: 4, name: "تیر" }, { id: 5, name: "مرداد" }, { id: 6, name: "شهریور" }, { id: 7, name: "مهر" }, { id: 8, name: "آبان" }, { id: 9, name: "آذر" }, { id: 10, name: "دی" }, { id: 11, name: "بهمن" }, { id: 12, name: "اسفند" }];
          t2.jalaaliDayLabels = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
          t2.gregorianDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        }, 3920: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.translations = t2.localizedDayLabels = t2.localizedMonth = void 0;
          const n2 = a2(1507), r2 = a2(1111), o2 = { fa: n2.jalaaliMonths, en: n2.gregorianMonths };
          t2.localizedMonth = o2;
          const s2 = { fa: n2.jalaaliDayLabels, en: n2.gregorianDayLabels };
          t2.localizedDayLabels = s2;
          const i = { fa: r2.fa, en: r2.en };
          t2.translations = i;
        }, 1111: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.en = t2.fa = void 0;
          t2.fa = { today: "امروز", startDate: "تاریخ شروع", endDate: "تاریخ پایان", to: "تا" };
          t2.en = { today: "Today", startDate: "Start date", endDate: "End date", to: "to" };
        }, 3170: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RESP_RANGE_HEIGHT = t2.RANGE_HEIGHT = t2.RANGE_WIDTH = t2.DATE_HEIGHT = t2.DATE_WIDTH = t2.isDOM = t2.isClient = t2.isServer = void 0;
          const a2 = "undefined" == typeof window;
          t2.isServer = a2;
          const n2 = "undefined" != typeof window;
          t2.isClient = n2;
          const r2 = "undefined" != typeof document;
          t2.isDOM = r2;
          t2.DATE_WIDTH = 300;
          t2.DATE_HEIGHT = 352;
          t2.RANGE_WIDTH = 600;
          t2.RANGE_HEIGHT = 312;
          t2.RESP_RANGE_HEIGHT = 360;
        }, 8106: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useDatePickerContext = t2.DateProvider = t2.DatePickerContext = void 0;
          const r2 = a2(602), o2 = n2(a2(3663)), s2 = a2(8156), i = a2(5928), l = a2(623), c = a2(2970);
          t2.DatePickerContext = (0, s2.createContext)({ state: { day: 0, month: 0, year: 0 }, cacheDate: void 0, offset: 0, locale: "fa", changePlaceholder: () => null, onDateChange: () => null, onDaychange: () => null, onMonthchange: () => null, onYearchange: () => null, onIncreaseYear: () => null, onDecreaseYear: () => null, onIncreaseMonth: () => null, onDecreaseMonth: () => null, setOffset: () => null, onClear: () => null });
          t2.DateProvider = ({ children: e3, props: a3 }) => {
            const n3 = a3 && a3.locale || "fa", { setLocale: d, setFormat: u, setDisabledDates: h, propsState: f } = (0, l.useDatePropsReducer)(), { state: m, onDaychange: p, onDateChange: y, onMonthchange: g, onYearchange: D, onIncreaseYear: v, onDecreaseYear: b, onIncreaseMonth: _, onDecreaseMonth: j, changePlaceholder: M, onClear: x, cacheDate: C, inputProps: P, offset: R, setOffset: O } = (0, c.useDateReducer)({ locale: n3, onDayChangeProp: a3?.onDayChange, onMonthChangeProp: a3?.onMonthChange, onYearChangeProp: a3?.onYearChange, onChangeProp: a3.onChange, formatProp: f.format, valueProp: a3.value, defaultValueProp: a3.defaultValue, close: a3.close });
            return (0, s2.useEffect)((() => {
              if (a3.locale && a3.locale !== f.locale) {
                const e4 = "fa" === a3.locale;
                d(a3.locale), p({ day: 0, year: (0, i.getCurrentYear)(e4), month: Number((0, o2.default)().format(e4 ? "jM" : "M")) });
              }
              if (a3.disabledDates && "function" == typeof a3.disabledDates && h(a3.disabledDates), a3.format !== f.format || void 0 === a3.format && void 0 === f.format) {
                const e4 = a3.format ? "function" == typeof a3.format ? a3.format((0, i.dateTransformer)(C, "fa" === a3.locale)) : a3.format : (0, i.formatGenerator)("fa" === n3);
                u(e4);
              }
            }), [a3]), (0, r2.jsx)(t2.DatePickerContext.Provider, { value: { state: m, onDateChange: y, onDaychange: p, onMonthchange: g, onYearchange: D, onIncreaseYear: v, onDecreaseYear: b, onIncreaseMonth: _, onDecreaseMonth: j, changePlaceholder: M, onClear: x, cacheDate: C, format: f.format, offset: R, setOffset: O, ...f }, children: "function" == typeof e3 ? e3(P) : e3 });
          };
          t2.useDatePickerContext = () => {
            if (void 0 === t2.DatePickerContext) throw new Error("useDatePickerContext must be under DatePickerContext Provider");
            return (0, s2.useContext)(t2.DatePickerContext);
          };
        }, 6268: function(e2, t2) {
          var a2;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.reducer = t2.DateActionKind = void 0, (function(e3) {
            e3.DATE = "DATE", e3.DAY = "DAY", e3.MONTH = "MONTH", e3.YEAR = "YEAR", e3.MONTH_PLUS = "MONTH_PLUS", e3.MONTH_MINUS = "MONTH_MINUS", e3.YEAR_PLUS = "YEAR_PLUS", e3.YEAR_MINUS = "YEAR_MINUS";
          })(a2 = t2.DateActionKind || (t2.DateActionKind = {})), t2.reducer = function(e3, t3) {
            const { type: n2, payload: r2 } = t3;
            switch (n2) {
              case a2.DATE:
              case a2.DAY:
                return { ...e3, day: r2.day, month: r2.month, year: r2.year };
              case a2.MONTH:
                return { ...e3, month: r2.month, day: 0 };
              case a2.MONTH_MINUS:
                return { ...e3, month: r2.month - 1 == 0 ? 12 : r2.month - 1, day: 0, year: r2.year };
              case a2.MONTH_PLUS:
                return { ...e3, month: r2.month + 1 === 13 ? 1 : r2.month + 1, day: 0, year: r2.year };
              case a2.YEAR:
                return { ...r2, year: r2.year };
              case a2.YEAR_MINUS:
                return { ...r2, year: r2.year - 1 };
              case a2.YEAR_PLUS:
                return { ...r2, year: r2.year + 1 };
              default:
                return e3;
            }
          };
        }, 3475: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(8106), t2), r2(a2(6268), t2), r2(a2(2970), t2);
        }, 2970: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useDateReducer = void 0;
          const r2 = n2(a2(3663)), o2 = a2(8156), s2 = a2(5928), i = a2(3920), l = a2(6268), c = (e3, t3) => {
            const a3 = e3 || (0, r2.default)();
            return { day: 0, year: (0, s2.getDateYear)(a3, t3), month: (0, s2.getDateMonth)(a3, t3) };
          };
          function d(e3) {
            return e3 && 0 !== e3.day;
          }
          t2.useDateReducer = ({ formatProp: e3, valueProp: t3, defaultValueProp: a3, onChangeProp: n3, onDayChangeProp: u, onMonthChangeProp: h, onYearChangeProp: f, locale: m, close: p }) => {
            const y = "fa" === m, g = i.localizedMonth[m], [D, v] = (0, o2.useState)(c(a3, y)), [b, _] = (0, o2.useReducer)(l.reducer, c(a3, y)), [j, M] = (0, o2.useState)(0), [x, C] = (0, o2.useState)(""), [P, R] = (0, o2.useState)(""), O = (0, o2.useCallback)(((t4) => (function(e4, t5, a4) {
              return e4.format(a4 || (0, s2.formatGenerator)(t5));
            })(t4, y, e3)), [e3, y]), k = () => {
              w(null), C("");
            }, N = (0, o2.useCallback)(((e4) => {
              if (!e4) return R("");
              const t4 = O((0, s2.dateTransformer)(e4, y));
              R(t4);
            }), [O, y]);
            (0, o2.useEffect)((() => {
              M(b.year - (0, s2.getCurrentYear)(y));
            }), [y, x]), (0, o2.useEffect)((() => {
              if (t3) {
                const e4 = (0, s2.momentTransformer)(t3, y);
                v(e4), C(O(t3));
              } else if (a3) {
                const e4 = (0, s2.momentTransformer)(a3, y);
                v(e4), C(O(a3));
              } else C(""), v(c(t3, y));
            }), [a3, t3, e3]);
            const w = (0, o2.useCallback)(((e4) => {
              if (null === e4) return R(""), _({ type: l.DateActionKind.DAY, payload: { ...b, day: 0 } }), v(((e5) => ({ ...e5, day: 0 }))), n3?.(null, "");
              _({ type: l.DateActionKind.DATE, payload: e4 }), v(e4);
              const t4 = (0, s2.dateTransformer)({ ...e4 }, y);
              d(e4) && (n3?.(t4, O(t4)), p?.());
            }), [y, n3, O, b, p]), Y = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.DAY, payload: e4 }), v(e4), d(e4) && (u?.(e4.day), C(""));
            }), [u]), T = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.MONTH, payload: e4 });
              const t4 = g.find((({ id: t5 }) => t5 === e4.month))?.name || "--";
              h?.({ value: e4.month, name: t4 });
            }), [g, h]), E = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.YEAR, payload: e4 }), f?.(e4.year);
            }), [f]), S = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.YEAR_PLUS, payload: { ...e4, day: D?.year === e4.year ? D.day : 0 } });
            }), [D.day, D?.year]), I = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.YEAR_MINUS, payload: { ...e4, day: D?.year === e4.year ? D.day : 0 } });
            }), [D.day, D?.year]), A = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.MONTH_PLUS, payload: { ...e4, day: D?.month === e4.month ? D.day : 0, year: 12 === e4.month ? e4.year + 1 : e4.year } });
            }), [D.day, D?.month]), L = (0, o2.useCallback)(((e4) => {
              _({ type: l.DateActionKind.MONTH_MINUS, payload: { ...e4, day: D?.month === e4.month ? D.day : 0, year: 1 === e4.month ? e4.year - 1 : e4.year } });
            }), [D.day, D?.month]), { dateValue: H } = (0, o2.useMemo)((() => {
              let e4 = "";
              return d(b) && (e4 = O((0, s2.dateTransformer)(b, y))), { dateValue: e4 };
            }), [O, y, b]);
            return { state: b, cacheDate: D, onDateChange: w, onDaychange: Y, onMonthchange: T, onYearchange: E, onIncreaseYear: S, onDecreaseYear: I, onIncreaseMonth: A, onDecreaseMonth: L, changePlaceholder: N, onClear: k, offset: j, setOffset: (e4) => {
              M(e4);
            }, inputProps: { value: x ?? H, placeholder: P, onChangeInputValue: (t4) => {
              const a4 = t4.target.value, n4 = e3 || (0, s2.formatGenerator)(y), o3 = (0, r2.default)(a4, n4, true);
              if (C(a4), o3.isValid()) return w((0, s2.momentTransformer)(o3, y)), T((0, s2.momentTransformer)(o3, y)), void E((0, s2.momentTransformer)(o3, y));
              w(null);
            }, onClear: k, isJalaali: y } };
          };
        }, 3524: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(3475), t2), r2(a2(6496), t2);
        }, 9528: function(e2, t2) {
          var a2;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.rangePropsReducer = t2.datePropsReducer = t2.PropsActionKind = void 0, (function(e3) {
            e3.LOCALE = "LOCALE", e3.ONCHANGE = "ONCHANGE", e3.RANGEONCHANGE = "RANGEONCHANGE", e3.VALUE = "VALUE", e3.RANGEVALUE = "RANGEVALUE", e3.DISABLEDDATES = "DISABLEDDATES", e3.FORMAT = "FORMAT";
          })(a2 = t2.PropsActionKind || (t2.PropsActionKind = {})), t2.datePropsReducer = function(e3, t3) {
            const { type: n2, payload: r2 } = t3;
            switch (n2) {
              case a2.LOCALE:
                return { ...e3, locale: r2 };
              case a2.ONCHANGE:
                return { ...e3, onChange: r2 };
              case a2.VALUE:
                return { ...e3, value: r2 };
              case a2.DISABLEDDATES:
                return { ...e3, disabledDates: r2 };
              case a2.FORMAT:
                return { ...e3, format: r2 };
              default:
                return e3;
            }
          }, t2.rangePropsReducer = function(e3, t3) {
            const { type: n2, payload: r2 } = t3;
            switch (n2) {
              case a2.LOCALE:
                return { ...e3, locale: r2 };
              case a2.RANGEONCHANGE:
                return { ...e3, onChange: r2 };
              case a2.RANGEVALUE:
                return { ...e3, value: r2 };
              case a2.DISABLEDDATES:
                return { ...e3, disabledDates: r2 };
              case a2.FORMAT:
                return { ...e3, format: r2 };
              default:
                return e3;
            }
          };
        }, 6496: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(1927), t2), r2(a2(7755), t2), r2(a2(1861), t2), r2(a2(4337), t2);
        }, 1927: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.nextCacheMonthDecrease = t2.nextCacheMonthIncrease = t2.nextCacheDay = t2.nextYearIncrease = t2.nextYearDecrease = t2.nextYear = t2.nextMonthIncrease = t2.nextMonthDecrease = t2.nextMonth = t2.nextDate = void 0, t2.nextDate = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, day: e3.day, month: e3.month, year: e3.year } : null;
          }, t2.nextMonth = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, month: e3.month, day: 0 } : null;
          }, t2.nextMonthDecrease = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, month: e3.month - 1 == 0 ? 12 : e3.month - 1, year: e3.year, day: 0 } : null;
          }, t2.nextMonthIncrease = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, month: e3.month + 1 === 13 ? 1 : e3.month + 1, day: 0, year: e3.year } : null;
          }, t2.nextYear = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, year: e3.year } : null;
          }, t2.nextYearDecrease = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, year: e3.year - 1 } : null;
          }, t2.nextYearIncrease = function(e3, t3) {
            const a2 = { day: 0, month: 0, year: 0 };
            return e3 ? { ...t3.endDate ? t3.endDate : a2, year: e3.year + 1 } : null;
          }, t2.nextCacheDay = function(e3, t3) {
            return e3.endDate ? { ...e3.endDate, day: t3?.endDate?.year === e3?.endDate.year ? t3?.endDate?.day : 0 } : null;
          }, t2.nextCacheMonthIncrease = function(e3, t3) {
            return e3.endDate ? { ...e3.endDate, day: t3?.endDate?.month === e3.endDate.month ? t3?.endDate.day : 0, year: 12 === e3.endDate.month ? e3.endDate.year + 1 : e3.endDate.year } : null;
          }, t2.nextCacheMonthDecrease = function(e3, t3) {
            return e3.endDate ? { ...e3.endDate, day: t3?.endDate?.month === e3.endDate.month ? t3?.endDate.day : 0, year: 1 === e3.endDate.month ? e3.endDate.year - 1 : e3.endDate.year } : null;
          };
        }, 7755: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangePickerContext = t2.RangeProvider = t2.RangePickerContext = void 0;
          const n2 = a2(602), r2 = a2(8156), o2 = a2(5928), s2 = a2(623), i = a2(4337);
          t2.RangePickerContext = (0, r2.createContext)({ rangeState: { startDate: { day: 0, month: 0, year: 0 }, endDate: null }, cacheRangeDate: void 0, locale: "fa", dateRange: null, onRangeDateChange: () => null, onRangeDaychange: () => null, onRangeMonthchange: () => null, onRangeYearchange: () => null, onRangeIncreaseYear: () => null, onRangeDecreaseYear: () => null, onRangeIncreaseMonth: () => null, onRangeDecreaseMonth: () => null, changePlaceholder: () => null, changeFrom: () => null, changeTo: () => null, from: { day: 0, month: 0, year: 0 }, to: { day: 0, month: 0, year: 0 }, offsets: [0, 0], setOffsets: () => null });
          t2.RangeProvider = ({ children: e3, props: a3 }) => {
            const l = a3 && a3.locale || "fa", { setLocale: c, setRangeDisabledDates: d, propsState: u, setFormat: h } = (0, s2.useRangePropsReducer)(), { cacheRangeDate: f, onRangeDateChange: m, onRangeDaychange: p, onRangeDecreaseMonth: y, onRangeDecreaseYear: g, onRangeIncreaseMonth: D, onRangeIncreaseYear: v, onRangeMonthchange: b, onRangeYearchange: _, rangeState: j, from: M, to: x, inputRangeProps: C, dateRange: P, changePlaceholder: R, offsets: O, setOffsets: k, changeFrom: N, changeTo: w } = (0, i.useRangeReducer)({ locale: l, onDayChangeProp: a3?.onDayChange, onMonthChangeProp: a3?.onMonthChange, onYearChangeProp: a3?.onYearChange, onChangeProp: a3.onChange, formatProp: u.format, valueProp: a3.value, defaultValueProp: a3.defaultValue, close: a3.close });
            return (0, r2.useEffect)((() => {
              if (a3.locale && a3.locale !== u.locale && c(a3.locale), a3.format !== u.format || void 0 === a3.format && void 0 === u.format) {
                let e4 = (0, o2.formatGenerator)("fa" === l);
                a3.format && (e4 = "function" == typeof a3.format ? a3.format([(0, o2.dateTransformer)(f.startDate, "fa" === l), (0, o2.dateTransformer)(f.endDate ?? f.startDate, "fa" === l)]) : a3.format), h(e4);
              }
              a3.disabledDates && d(a3.disabledDates);
            }), [a3]), (0, n2.jsx)(t2.RangePickerContext.Provider, { value: { cacheRangeDate: f, onRangeDateChange: m, onRangeDaychange: p, onRangeDecreaseMonth: y, onRangeDecreaseYear: g, onRangeIncreaseMonth: D, onRangeIncreaseYear: v, onRangeMonthchange: b, onRangeYearchange: _, changePlaceholder: R, changeFrom: N, changeTo: w, from: M, to: x, rangeState: j, dateRange: P, offsets: O, setOffsets: k, ...u }, children: "function" == typeof e3 ? e3(C) : e3 });
          };
          t2.useRangePickerContext = () => {
            if (void 0 === t2.RangePickerContext) throw new Error("useRangePickerContext must be under RangePickerContext Provider");
            return (0, r2.useContext)(t2.RangePickerContext);
          };
        }, 1861: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.rangeReducer = t2.RangeActionKind = void 0;
          const n2 = a2(1927);
          var r2;
          !(function(e3) {
            e3.DATE = "DATE", e3.DAY = "DAY", e3.MONTH = "MONTH", e3.YEAR = "YEAR", e3.MONTH_PLUS = "MONTH_PLUS", e3.MONTH_MINUS = "MONTH_MINUS", e3.YEAR_PLUS = "YEAR_PLUS", e3.YEAR_MINUS = "YEAR_MINUS";
          })(r2 = t2.RangeActionKind || (t2.RangeActionKind = {})), t2.rangeReducer = function(e3, t3) {
            const { type: a3, payload: o2 } = t3, { startDate: s2, endDate: i } = o2;
            switch (a3) {
              case r2.DATE:
                return { startDate: { day: s2.day, month: s2.month, year: s2.year }, endDate: (0, n2.nextDate)(i, e3) };
              case r2.DAY:
                return { startDate: { ...e3.startDate, day: s2.day, month: s2.month, year: s2.year }, endDate: (0, n2.nextDate)(i, e3) };
              case r2.MONTH:
                return { startDate: { ...e3.startDate, month: s2.month, day: 0 }, endDate: (0, n2.nextMonth)(i, e3) };
              case r2.MONTH_MINUS:
                return { startDate: { ...e3.startDate, day: 0, month: 1 === s2.month ? 12 : s2.month - 1, year: s2.year }, endDate: (0, n2.nextMonthDecrease)(i, e3) };
              case r2.MONTH_PLUS:
                return { startDate: { ...e3.startDate, day: 0, month: 12 === s2.month ? 1 : s2.month + 1, year: s2.year }, endDate: (0, n2.nextMonthIncrease)(i, e3) };
              case r2.YEAR:
                return { startDate: { ...e3.startDate, year: s2.year }, endDate: (0, n2.nextYear)(i, e3) };
              case r2.YEAR_MINUS:
                return { startDate: { ...e3.startDate, year: s2.year - 1 }, endDate: (0, n2.nextYearDecrease)(i, e3) };
              case r2.YEAR_PLUS:
                return { startDate: { ...e3.startDate, year: s2.year + 1 }, endDate: (0, n2.nextYearIncrease)(i, e3) };
              default:
                return e3;
            }
          };
        }, 4337: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeReducer = void 0;
          const r2 = n2(a2(3663)), o2 = a2(8156), s2 = a2(5928), i = a2(1861), l = (e3, t3 = true) => {
            let a3 = { startDate: { day: 0, year: (0, s2.getCurrentYear)(t3), month: (0, s2.getCurrentMonth)(t3) }, endDate: null };
            return e3 && e3.length && (a3 = { startDate: { day: 0, year: (0, s2.getDateYear)(e3[0], t3), month: (0, s2.getDateMonth)(e3[0], t3) }, endDate: null }), a3;
          };
          t2.useRangeReducer = ({ formatProp: e3, valueProp: t3, defaultValueProp: a3, onChangeProp: n3, onDayChangeProp: c, onMonthChangeProp: d, onYearChangeProp: u, locale: h, close: f }) => {
            const m = "fa" === h, [p, y] = (0, o2.useState)([0, 0]), [g, D] = (0, o2.useState)(["", ""]), v = (0, o2.useMemo)((() => {
              const e4 = (0, s2.getCurrentYear)(m), t4 = (0, s2.getCurrentMonth)(m);
              return { from: { day: 0, year: e4, month: t4 }, to: { day: 0, year: 12 === t4 ? e4 + 1 : e4, month: 12 === t4 ? 1 : t4 + 1 } };
            }), [m]), [b, _] = (0, o2.useState)(v), [j, M] = (0, o2.useState)(l(a3, m)), [x, C] = (0, o2.useReducer)(i.rangeReducer, l(a3, m)), [P, R] = (0, o2.useState)(""), [O, k] = (0, o2.useState)(""), N = (0, o2.useCallback)(((t4) => t4?.map(((t5) => t5 ? t5.format(e3 || (0, s2.formatGenerator)(m)) : ""))), [e3, m]), { dateRange: w } = (0, o2.useMemo)((() => {
              let e4 = null;
              return 0 !== x.startDate.day && 0 !== x.endDate?.day && null !== x.endDate && (e4 = (0, s2.rangeTransformer)(x, m)), { dateRange: e4 };
            }), [m, x]);
            (0, o2.useEffect)((() => {
              const e4 = (0, s2.getCurrentYear)(m);
              y([(0 === x.startDate.day ? e4 : x.startDate.year) - e4, (x.endDate?.year || e4) - e4]);
            }), [m, g]), (0, o2.useEffect)((() => {
              if (t3 || G(), t3 && t3.length) {
                const e4 = { day: (0, s2.getDateDay)(t3[0], m), year: (0, s2.getDateYear)(t3[0], m), month: (0, s2.getDateMonth)(t3[0], m) };
                let a4 = null;
                null !== t3?.[1] && (a4 = { day: (0, s2.getDateDay)(t3[1], m), year: (0, s2.getDateYear)(t3[1], m), month: (0, s2.getDateMonth)(t3[1], m) });
                const n4 = { startDate: e4, endDate: a4 };
                M(n4);
                const r3 = N([(0, s2.dateTransformer)(n4.startDate, m), n4.endDate ? (0, s2.dateTransformer)(n4.endDate, m) : null]);
                D(r3);
              }
            }), [t3, e3]), (0, o2.useEffect)((() => {
              if (a3 && !t3) {
                const e4 = { day: (0, s2.getDateDay)(a3[0], m), year: (0, s2.getDateYear)(a3[0], m), month: (0, s2.getDateMonth)(a3[0], m) };
                let t4 = null;
                null !== a3?.[1] && (t4 = { day: (0, s2.getDateDay)(a3[1], m), year: (0, s2.getDateYear)(a3[1], m), month: (0, s2.getDateMonth)(a3[1], m) });
                const n4 = { startDate: e4, endDate: t4 };
                M(n4);
                const r3 = N([(0, s2.dateTransformer)(n4.startDate, m), n4.endDate ? (0, s2.dateTransformer)(n4.endDate, m) : null]);
                D(r3);
              }
            }), [a3, t3, e3]), (0, o2.useEffect)((() => {
              _(v);
            }), [v, m]);
            const Y = (0, o2.useCallback)(((t4) => {
              if (null === t4) return D(["", ""]), R(""), k(""), M(((e4) => ({ startDate: { ...e4.startDate, day: 0 }, endDate: null }))), void C({ type: i.RangeActionKind.DATE, payload: { startDate: { ...x.startDate, day: 0 }, endDate: null } });
              if (C({ type: i.RangeActionKind.DATE, payload: t4 }), M(t4), t4.endDate) {
                const a4 = (0, s2.rangeTransformer)({ ...t4 }, m);
                0 !== t4.startDate.day && 0 !== t4.endDate.day && n3?.(a4, N(a4)), D([a4?.[0] ? a4[0].format(e3) : "", a4?.[1] ? a4[1].format(e3) : ""]), f?.();
              }
            }), [f, e3, N, m, n3, x.startDate]), T = (0, o2.useCallback)(((t4, a4) => {
              const n4 = x.startDate && x.endDate;
              if (!a4 && (0, s2.dateTransformer)(t4, m).isBefore((0, s2.dateTransformer)(x.startDate, m), "day") || n4) {
                const a5 = { startDate: t4, endDate: null };
                return C({ type: i.RangeActionKind.DAY, payload: a5 }), M(a5), k(""), void D([(0, s2.dateTransformer)(a5.startDate, m).format(e3), ""]);
              }
              const r3 = { startDate: a4 ? t4 : x.startDate, endDate: a4 ? x.endDate : t4 };
              C({ type: i.RangeActionKind.DAY, payload: r3 }), M(r3), r3 && (0 !== r3.startDate.day && 0 !== r3?.endDate?.day && null !== r3.endDate && c?.([r3.startDate.day, r3.endDate.day]), D([(0, s2.dateTransformer)(r3.startDate, m).format(e3), ""]), Y?.(r3));
            }), [m, x.startDate, x.endDate, Y, c, e3]), E = (0, o2.useCallback)(((e4, t4) => {
              _((({ from: a4, to: n4 }) => {
                const r3 = n4.year > a4.year, o3 = { ...a4, ..."from" === t4 && { month: e4 } }, i2 = { ...n4 };
                return "to" === t4 ? i2.month = e4 : r3 ? i2.month = n4.month : 12 === e4 ? i2.month = 1 : n4.month <= e4 ? i2.month = e4 + 1 : i2.month = n4.month, i2.year = r3 ? n4.year : 12 === e4 && "from" === t4 ? n4.year + 1 : n4.year, d?.([{ name: (0, s2.getMonthLabels)(o3.month, m), value: o3.month }, { name: (0, s2.getMonthLabels)(i2.month, m), value: i2.month }]), { from: o3, to: i2 };
              }));
            }), [m, d]), S = (0, o2.useCallback)(((e4, t4) => {
              _((({ from: a4, to: n4 }) => {
                const r3 = { ...a4, ..."from" === t4 && { year: e4 } }, o3 = { ...n4 };
                return o3.year = "to" === t4 || n4.year < e4 ? e4 : n4.year, u?.([r3.year, o3.year]), { from: r3, to: o3 };
              }));
            }), [u]), I = (0, o2.useCallback)((() => {
              _((({ from: e4, to: t4 }) => {
                const a4 = { ...e4, year: e4.year + 1 }, n4 = { ...t4, year: t4.year + 1 };
                return u?.([a4.year, n4.year]), { from: a4, to: n4 };
              }));
            }), [u]), A = (0, o2.useCallback)((() => {
              _((({ from: e4, to: t4 }) => {
                const a4 = { ...e4, year: e4.year - 1 }, n4 = { ...t4, year: t4.year - 1 };
                return u?.([a4.year, n4.year]), { from: a4, to: n4 };
              }));
            }), [u]), L = (0, o2.useCallback)((() => {
              _((({ from: e4, to: t4 }) => {
                if (12 === t4.month) {
                  const a5 = { ...e4, month: 11 === e4.month ? 12 : e4.month + 1 }, n5 = { ...t4, month: 1, year: t4.year + 1 };
                  return d?.([{ name: (0, s2.getMonthLabels)(a5.month, m), value: a5.month }, { name: (0, s2.getMonthLabels)(n5.month, m), value: n5.month }]), { from: a5, to: n5 };
                }
                const a4 = { ...e4, month: 12 === e4.month ? 1 : e4.month + 1, year: 12 === e4.month ? e4.year + 1 : e4.year }, n4 = { ...t4, month: t4.month + 1 };
                return d?.([{ name: (0, s2.getMonthLabels)(a4.month, m), value: a4.month }, { name: (0, s2.getMonthLabels)(n4.month, m), value: n4.month }]), { from: a4, to: n4 };
              }));
            }), [m, d]), H = (0, o2.useCallback)((() => {
              _((({ from: e4, to: t4 }) => {
                if (1 === e4.month) {
                  const a5 = { ...e4, month: 12, year: e4.year - 1 }, n5 = { ...e4, month: t4.month - 1 };
                  return d?.([{ name: (0, s2.getMonthLabels)(a5.month, m), value: a5.month }, { name: (0, s2.getMonthLabels)(n5.month, m), value: n5.month }]), { from: a5, to: n5 };
                }
                const a4 = { ...e4, month: e4.month - 1 }, n4 = { ...t4, month: 1 === t4.month ? 12 : t4.month - 1, year: 1 === t4.month ? t4.year - 1 : t4.year };
                return d?.([{ name: (0, s2.getMonthLabels)(a4.month, m), value: a4.month }, { name: (0, s2.getMonthLabels)(n4.month, m), value: n4.month }]), { from: a4, to: n4 };
              }));
            }), [m, d]), J = (0, o2.useCallback)(((t4) => {
              x.startDate.day > 0 && null !== x.endDate || (t4 ? 0 === x.startDate.day ? R((0, s2.dateTransformer)(t4, m).format(e3)) : k((0, s2.dateTransformer)(t4, m).format(e3)) : 0 === x.startDate.day ? R("") : k(""));
            }), [e3, m, x]), G = () => {
              D(["", ""]), R(""), k(""), Y(null), n3?.(null, ["", ""]);
            }, F = (0, o2.useCallback)(((e4) => {
              y(e4);
            }), []);
            return { rangeState: x, cacheRangeDate: j, onRangeDateChange: Y, onRangeDaychange: T, onRangeMonthchange: E, onRangeYearchange: S, onRangeIncreaseYear: I, onRangeDecreaseYear: A, onRangeIncreaseMonth: L, onRangeDecreaseMonth: H, changeFrom: (e4) => {
              _(((t4) => ({ to: t4.to, from: { ...t4.from, ...e4 } })));
            }, changeTo: (e4) => {
              _(((t4) => ({ from: t4.from, to: { ...t4.to, ...e4 } })));
            }, dateRange: w, from: b.from, to: b.to, changePlaceholder: J, offsets: p, setOffsets: F, inputRangeProps: { values: g, onChangeInputRange: (t4, a4) => {
              const [n4, o3] = g, i2 = a4 ? t4.target.value : n4, l2 = a4 ? o3 : t4.target.value, c2 = (0, r2.default)(i2, e3, true), d2 = (0, r2.default)(l2, e3, true);
              if (D([i2, l2]), a4 && c2.isValid()) if (c2.isBefore(d2)) {
                const e4 = (0, s2.momentTransformer)(c2, m), t5 = (0, s2.momentTransformer)(d2, m);
                if (e4.month === t5.month && e4.year === t5.year) {
                  const a5 = { ...t5 };
                  12 === t5.month ? (a5.month = 1, a5.year = t5.year + 1) : (a5.month = t5.month + 1, a5.year = t5.year), _({ from: e4, to: a5 });
                } else _({ from: e4, to: t5 });
                Y({ startDate: (0, s2.momentTransformer)(c2, m), endDate: (0, s2.momentTransformer)(d2, m) });
              } else {
                const e4 = (0, s2.momentTransformer)(c2, m), t5 = { ...e4 };
                12 === e4.month ? (t5.month = 1, t5.year = e4.year + 1) : (t5.month = e4.month + 1, t5.year = e4.year), _({ from: e4, to: t5 }), D([i2, ""]), Y({ startDate: (0, s2.momentTransformer)(c2, m), endDate: null });
              }
              else if (!a4 && d2.isValid()) {
                if (d2.isAfter(c2)) {
                  const e4 = (0, s2.momentTransformer)(c2, m), t5 = (0, s2.momentTransformer)(d2, m);
                  if (e4.month === t5.month && e4.year === t5.year) {
                    const e5 = { ...t5 };
                    1 === t5.month ? (e5.month = 12, e5.year = t5.year - 1) : (e5.month = t5.month - 1, e5.year = t5.year), _({ from: e5, to: t5 });
                  } else _({ from: e4, to: t5 });
                  return void Y({ startDate: (0, s2.momentTransformer)(c2, m), endDate: (0, s2.momentTransformer)(d2, m) });
                }
                {
                  const e4 = (0, s2.momentTransformer)(d2, m), t5 = { ...e4 };
                  12 === e4.month ? (t5.month = 1, t5.year = e4.year + 1) : (t5.month = e4.month + 1, t5.year = e4.year), _({ from: e4, to: t5 }), D(["", ""]), R(""), k(""), Y({ startDate: { ...x.startDate, day: 0 }, endDate: null });
                }
              }
            }, placeholderFrom: P, placeholderTo: O, onClear: G, isJalaali: m } };
          };
        }, 623: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangePropsReducer = t2.useDatePropsReducer = void 0;
          const n2 = a2(8156), r2 = a2(9528);
          t2.useDatePropsReducer = () => {
            const [e3, t3] = (0, n2.useReducer)(r2.datePropsReducer, { locale: "fa" });
            return { setLocale: (e4) => {
              t3({ type: r2.PropsActionKind.LOCALE, payload: e4 });
            }, setDisabledDates: (e4) => {
              t3({ type: r2.PropsActionKind.DISABLEDDATES, payload: e4 });
            }, setFormat: (e4) => {
              t3({ type: r2.PropsActionKind.FORMAT, payload: e4 });
            }, propsState: e3 };
          };
          t2.useRangePropsReducer = () => {
            const [e3, t3] = (0, n2.useReducer)(r2.rangePropsReducer, { locale: "fa" });
            return { setLocale: (e4) => {
              t3({ type: r2.PropsActionKind.LOCALE, payload: e4 });
            }, setRangeDisabledDates: (e4) => {
              t3({ type: r2.PropsActionKind.DISABLEDDATES, payload: e4 });
            }, setFormat: (e4) => {
              t3({ type: r2.PropsActionKind.FORMAT, payload: e4 });
            }, propsState: e3 };
          };
        }, 5849: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(8140), t2), r2(a2(6135), t2), r2(a2(1763), t2), r2(a2(8833), t2);
        }, 8140: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useDatepicker = void 0;
          const r2 = n2(a2(3663)), o2 = a2(8156), s2 = a2(5928), i = a2(3920), l = a2(8106);
          t2.useDatepicker = () => {
            const { state: e3, cacheDate: t3, locale: a3 = "fa", onDateChange: n3, onMonthchange: c, onYearchange: d, disabledDates: u, onClear: h, ...f } = (0, l.useDatePickerContext)(), { isJalaali: m, dayLabels: p } = (0, o2.useMemo)((() => ({ isJalaali: "fa" === a3, months: i.localizedMonth[a3 || "fa"], dayLabels: i.localizedDayLabels[a3 || "fa"] })), [a3]), y = (0, o2.useCallback)((() => {
              const e4 = m ? { day: (0, r2.default)().jDate(), year: (0, r2.default)().jYear(), month: Number((0, r2.default)().format("jM")) } : { day: (0, r2.default)().date(), year: (0, r2.default)().year(), month: Number((0, r2.default)().format("M")) }, t4 = (0, s2.dateTransformer)({ ...e4 }, m), a4 = u?.(t4);
              h(), a4 && (c?.({ ...e4, day: 0 }), d?.({ ...e4, day: 0 })), !a4 && n3(e4);
            }), [u, m, h, n3, c, d]);
            return { state: e3, onDateChange: n3, goToToday: y, isJalaali: m, locale: a3, dayLabels: p, cacheDate: t3, onMonthchange: c, onYearchange: d, ...f };
          };
        }, 6135: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useDays = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(8106);
          t2.useDays = () => {
            const { state: e3, disabledDates: t3, locale: a3 = "fa" } = (0, o2.useDatePickerContext)(), s2 = (0, n2.useMemo)((() => "fa" === a3), [a3]), { days: i } = (0, n2.useMemo)((() => (0, r2.generateDays)(e3.month, e3.year, s2, t3 || (() => false))), [t3, s2, e3.month, e3.year]);
            return { days: i };
          };
        }, 1763: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useMonths = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(3920), s2 = a2(8106);
          t2.useMonths = () => {
            const { state: e3, locale: t3 = "fa", disabledDates: a3 } = (0, s2.useDatePickerContext)(), i = o2.localizedMonth[t3 || "fa"];
            return { months: (0, n2.useMemo)((() => i.map(((n3) => {
              const { days: o3 } = (0, r2.generateDays)(n3.id, e3.year, "fa" === t3, a3 || (() => false));
              return o3.filter(((e4) => e4.month === n3.id)).every(((e4) => e4.isDisabled)) ? { ...n3, isDisabled: true } : n3;
            }))), [a3, t3, i, e3.year]) };
          };
        }, 8833: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useYears = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(8106);
          t2.useYears = (e3) => {
            const { state: t3, locale: a3 = "fa", disabledDates: s2 } = (0, o2.useDatePickerContext)(), { years: i, lowerDecade: l, upperDecade: c } = (0, r2.listOfYears)("fa" === a3, e3);
            return { years: (0, n2.useMemo)((() => i.map(((e4) => {
              const { days: n3 } = (0, r2.generateDays)(t3.month, e4.id, "fa" === a3, s2 || (() => false));
              return n3.filter(((t4) => t4.year === e4.id)).every(((e5) => e5.isDisabled)) ? { ...e4, isDisabled: true } : e4;
            }))), [s2, a3, t3.month, i]), lowerDecade: l, upperDecade: c };
          };
        }, 3742: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(5849), t2), r2(a2(722), t2), r2(a2(550), t2), r2(a2(3386), t2), r2(a2(123), t2), r2(a2(6432), t2), r2(a2(8665), t2), r2(a2(6725), t2);
        }, 722: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(2092), t2), r2(a2(3632), t2), r2(a2(5679), t2), r2(a2(3609), t2);
        }, 2092: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeDays = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(3524);
          t2.useRangeDays = (e3) => {
            const { disabledDates: t3, locale: a3 = "fa", from: s2, to: i } = (0, o2.useRangePickerContext)(), l = (0, n2.useMemo)((() => "fa" === a3), [a3]), { days: c } = (0, n2.useMemo)((() => (0, r2.generateDays)(s2.month, s2.year, l, t3 || (() => false))), [t3, l, s2]), { days: d } = (0, n2.useMemo)((() => (0, r2.generateDays)(i.month, i.year, l, t3 || (() => false))), [t3, l, i]);
            return { days: "from" === e3 ? c : d, groupedRangeDays: [c, d], flattenRangeDays: [...c, ...d].map((({ day: e4, month: t4, year: a4, isDisabled: n3 }) => ({ day: e4, month: t4, year: a4, isDisabled: n3 }))) };
          };
        }, 3632: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeMonths = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(3920), s2 = a2(3524);
          t2.useRangeMonths = (e3) => {
            const { locale: t3 = "fa", disabledDates: a3, from: i, to: l } = (0, s2.useRangePickerContext)(), c = o2.localizedMonth[t3 || "fa"], d = (0, n2.useMemo)((() => c.map(((e4) => {
              const { days: n3 } = (0, r2.generateDays)(e4.id, i.year, "fa" === t3, a3 || (() => false));
              return n3.filter(((t4) => t4.month === e4.id)).every(((e5) => e5.isDisabled)) ? { ...e4, isDisabled: true } : e4;
            }))), [a3, i.year, t3, c]), u = (0, n2.useMemo)((() => c.map(((e4) => {
              const { days: n3 } = (0, r2.generateDays)(e4.id, l.year, "fa" === t3, a3 || (() => false));
              return n3.filter(((t4) => t4.month === e4.id)).every(((e5) => e5.isDisabled)) || i.year === l.year && e4.id <= i.month ? { ...e4, isDisabled: true } : e4;
            }))), [a3, i.month, i.year, t3, c, l.year]);
            return { months: "from" === e3 ? d : u, fromMonths: d, toMonths: u };
          };
        }, 5679: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangepicker = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(3920), s2 = a2(6496);
          t2.useRangepicker = () => {
            const { rangeState: e3, cacheRangeDate: t3, locale: a3 = "fa", onRangeDateChange: i, ...l } = (0, s2.useRangePickerContext)(), { isJalaali: c, months: d, dayLabels: u } = (0, n2.useMemo)((() => ({ isJalaali: "fa" === a3, months: o2.localizedMonth[a3 || "fa"], dayLabels: o2.localizedDayLabels[a3 || "fa"] })), [a3]), h = (0, n2.useMemo)((() => e3?.startDate.day ? [(0, r2.dateTransformer)(e3?.startDate, c), e3?.endDate ? (0, r2.dateTransformer)(e3?.endDate, c) : null] : null), [c, e3?.endDate, e3?.startDate]);
            return { rangeState: e3, onRangeDateChange: i, isJalaali: c, locale: a3, months: d, dayLabels: u, cacheRangeDate: t3, rangeStateMoment: h, ...l };
          };
        }, 3609: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeYears = void 0;
          const n2 = a2(8156), r2 = a2(5928), o2 = a2(3524);
          t2.useRangeYears = ({ offsets: e3, type: t3 }) => {
            const { from: a3, to: s2, locale: i = "fa", disabledDates: l } = (0, o2.useRangePickerContext)(), c = (0, r2.listOfYears)("fa" === i, e3?.[0]), d = (0, r2.listOfYears)("fa" === i, e3?.[1]), u = (0, n2.useMemo)((() => c.years.map(((e4) => {
              const { days: t4 } = (0, r2.generateDays)(a3.month, e4.id, "fa" === i, l || (() => false));
              return t4.filter(((t5) => t5.year === e4.id)).every(((e5) => e5.isDisabled)) ? { ...e4, isDisabled: true } : e4;
            }))), [l, i, a3, c.years]), h = (0, n2.useMemo)((() => d.years.map(((e4) => {
              const { days: t4 } = (0, r2.generateDays)(s2.month, e4.id, "fa" === i, l || (() => false));
              return t4.filter(((t5) => t5.year === e4.id)).every(((e5) => e5.isDisabled)) ? { ...e4, isDisabled: true } : e4;
            }))), [d.years, s2.month, i, l]);
            return { years: "from" === t3 ? u : h, lowerDecade: "from" === t3 ? c.lowerDecade : d.lowerDecade, upperDecade: "from" === t3 ? c.upperDecade : d.upperDecade, fromYears: u, toYears: h, startLowerDecade: c.lowerDecade, startUpperDecade: c.upperDecade, endLowerDecade: d.lowerDecade, endUpperDecade: d.upperDecade };
          };
        }, 8041: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useClickOutside = void 0;
          const n2 = a2(8156), r2 = ["mousedown", "touchstart"];
          t2.useClickOutside = function(e3, t3) {
            const a3 = (0, n2.useRef)(null);
            return (0, n2.useEffect)((() => {
              const n3 = (n4) => {
                const { target: r3 } = n4 ?? {};
                if (Array.isArray(t3)) {
                  t3.every(((e4) => !!e4 && !e4.contains(r3))) && e3();
                } else a3.current && !a3.current.contains(r3) && e3();
              };
              return r2.forEach(((e4) => document.addEventListener(e4, n3))), () => {
                r2.forEach(((e4) => document.removeEventListener(e4, n3)));
              };
            }), [a3, e3, t3]), a3;
          };
        }, 550: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useConfig = void 0;
          const n2 = a2(8156), r2 = a2(3170), o2 = a2(406), s2 = ["bottom", "left", "right", "top"];
          t2.useConfig = ({ element: e3, placement: t3, mode: a3, shouldResponsive: i, isJalaali: l }) => {
            const c = (0, o2.useWindowSize)();
            return (0, n2.useCallback)((() => {
              const n3 = "date" === a3 ? r2.DATE_HEIGHT : i ? r2.RESP_RANGE_HEIGHT : r2.RANGE_HEIGHT, o3 = "date" === a3 || i ? r2.DATE_WIDTH : r2.RANGE_WIDTH;
              if (!e3.current) return { animationClassName: void 0, coordinates: { bottom: 0, left: 0, right: 0, top: 0, width: o3, height: n3 } };
              const d = e3.current.getBoundingClientRect();
              if (!d) return { animationClassName: void 0, coordinates: { bottom: 0, left: 0, right: 0, top: 0, width: o3, height: n3 } };
              const u = r2.isClient ? Math.abs(window.innerWidth - document.body.clientWidth) : 0, h = d.height, f = d.width, m = d.top, p = d.left, y = c.width - p - f - u, g = c.height - m - h;
              if (t3 && s2.includes(t3)) {
                if ("bottom" === t3) {
                  return { coordinates: { left: l ? p + f - o3 : p, bottom: void 0, top: m + h + 8, right: void 0, width: o3, height: n3 }, animationClassName: l ? "open-vert-bottom-left" : "open-vert-bottom-right" };
                }
                if ("top" === t3) {
                  return { coordinates: { left: l ? p + f - o3 : p, top: m - (n3 + 8), bottom: void 0, right: void 0, width: o3, height: n3 }, animationClassName: l ? "open-vert-top-left" : "open-vert-top-right" };
                }
                if ("left" === t3) {
                  return { coordinates: { left: p - (o3 + 8), top: m, bottom: void 0, right: void 0, width: o3, height: n3 }, animationClassName: "open-horz-left" };
                }
                if ("right" === t3) {
                  return { coordinates: { right: y - (8 + o3), top: m, left: void 0, bottom: void 0, width: o3, height: n3 }, animationClassName: "open-horz-right" };
                }
              }
              const D = !!(8 + h + n3 < c.height) && (g <= n3 && m >= n3);
              return { coordinates: { left: l ? p + f - o3 : p, bottom: void 0, top: D ? m - 8 - n3 : m + h + 8, right: void 0, width: o3, height: n3 }, animationClassName: D ? l ? "open-vert-top-left" : "open-vert-top-right" : l ? "open-vert-bottom-left" : "open-vert-bottom-right" };
            }), [a3, i, e3, c, t3, l]);
          };
        }, 3386: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useDeepCompareEffect = void 0;
          const n2 = a2(8156), r2 = a2(5928);
          function o2(e3) {
            const t3 = (0, n2.useRef)();
            var a3, o3;
            return a3 = e3, o3 = t3.current, (0, r2.isEqual)(a3, o3) || (t3.current = e3), t3.current;
          }
          t2.useDeepCompareEffect = function(e3, t3 = []) {
            (0, n2.useEffect)(e3, [e3, t3?.map(o2)]);
          };
        }, 123: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useMergeRefs = t2.mergeRefs = t2.assignRef = void 0;
          const n2 = a2(8156);
          function r2(e3, t3) {
            if (null != e3) if ("function" != typeof e3) try {
              e3.current = t3;
            } catch (a3) {
              throw new Error(`Cannot assign value '${t3}' to ref '${e3}'`);
            }
            else e3(t3);
          }
          function o2(...e3) {
            return (t3) => {
              e3.forEach(((e4) => {
                r2(e4, t3);
              }));
            };
          }
          t2.assignRef = r2, t2.mergeRefs = o2, t2.useMergeRefs = function(...e3) {
            return (0, n2.useMemo)((() => o2(...e3)), e3);
          };
        }, 6432: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useSetColors = void 0;
          const n2 = a2(8156), r2 = a2(5223), o2 = ["background", "backgroundDisabled", "backgroundHovered", "primary", "textPrimary", "border", "text", "primaryFade", "textNegative", "dayLabelBackground", "highlight", "weekend", "borderFade"];
          t2.useSetColors = (e3) => {
            (0, n2.useEffect)((() => {
              if (!document) return;
              const t3 = document.documentElement;
              o2.forEach(((e4) => {
                const a3 = (0, r2.camelToKebab)(e4);
                t3.style.removeProperty(`--${a3}`);
              })), e3 && 0 !== Object.keys(e3).length && Object.keys(e3).forEach(((a3) => {
                if (!o2.includes(a3)) return;
                const n3 = (0, r2.camelToKebab)(a3);
                t3.style.setProperty(`--${n3}`, e3[a3] || "#000");
              }));
            }), [e3]);
          };
        }, 8665: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useShouldResponsive = void 0;
          const n2 = a2(8156), r2 = a2(3170), o2 = a2(406);
          t2.useShouldResponsive = (e3) => {
            const { width: t3 } = (0, o2.useWindowSize)(e3);
            return (0, n2.useMemo)((() => !!e3 && ("mobile" === e3 || "undefined" != typeof window && ("undefined" != typeof navigator && /(Android|iPhone)/i.test(navigator.userAgent) || t3 < r2.RANGE_WIDTH))), [t3, e3]);
          };
        }, 6725: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useRangeTranslation = t2.useTranslation = void 0;
          const n2 = a2(3920), r2 = a2(3742);
          t2.useTranslation = () => {
            const { locale: e3 } = (0, r2.useDatepicker)();
            return { t: function(t3) {
              return n2.translations[e3 || "fa"][t3];
            }, locale: e3 };
          };
          t2.useRangeTranslation = () => {
            const { locale: e3 } = (0, r2.useRangepicker)();
            return { t: function(t3) {
              return n2.translations[e3 || "fa"][t3];
            }, locale: e3 };
          };
        }, 406: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.useWindowSize = void 0;
          const n2 = a2(8156), r2 = a2(3170);
          t2.useWindowSize = (e3) => {
            const [t3, a3] = (0, n2.useState)({ width: r2.isServer ? 0 : window?.innerWidth, height: r2.isServer ? 0 : window?.innerHeight });
            return (0, n2.useEffect)((() => {
              if (r2.isServer || e3 && "auto" !== e3) return;
              const t4 = () => {
                a3({ width: window.innerWidth, height: window.innerHeight });
              };
              return window.addEventListener("resize", t4), t4(), () => window.removeEventListener("resize", t4);
            }), [e3]), t3;
          };
        }, 6676: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(3920), t2), r2(a2(3524), t2), r2(a2(3742), t2), r2(a2(1414), t2), r2(a2(2839), t2);
        }, 9173: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 1414: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(9173), t2), r2(a2(9257), t2);
        }, 9257: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 5135: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 2839: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(5135), t2);
        }, 5223: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.camelToKebab = void 0;
          t2.camelToKebab = (e3) => `${e3.slice(0, 1).toLowerCase()}${e3.slice(1)}`.replace(/[A-Z]/g, ((e4) => `-${e4.toLowerCase()}`));
        }, 4885: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.dateTransformer = void 0;
          const r2 = n2(a2(3663));
          t2.dateTransformer = (e3, t3) => {
            const { day: a3, month: n3, year: o2 } = e3;
            if (a3 < 1 || n3 < 1 || o2 < 1) throw new Error("entered inputs are not valid");
            const s2 = (0, r2.default)(`${o2}-${n3}-${a3}`, t3 ? "jYYYY-jM-jDD" : "YYYY-M-DD");
            if (!s2.isValid()) throw new Error("entered inputs are not valid");
            return s2;
          };
        }, 6500: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.dayModelGenerator = void 0;
          const r2 = n2(a2(3663));
          t2.dayModelGenerator = (e3, t3, a3, n3, o2) => Array.from({ length: e3 }, ((e4, s2) => {
            const i = n3 ? (0, r2.default)(`${a3}-${t3}-${s2 + 1}`, "jYYYY-jMM-jDD") : (0, r2.default)(`${a3}-${t3}-${s2 + 1}`, "YYYY-MM-DD"), l = i.weekday(), c = !!o2 && o2(i);
            return { id: `${s2 + 1}`, day: s2 + 1, month: t3, year: a3, isWeekend: n3 ? 6 === l : 1 === l, isDisabled: c };
          }));
        }, 4567: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.formatGenerator = void 0;
          t2.formatGenerator = (e3) => e3 ? "jYYYY-jMM-jDD" : "YYYY-MM-DD";
        }, 3500: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.generateDays = void 0;
          const n2 = a2(5928), r2 = a2(4885), o2 = a2(199), s2 = a2(1774);
          t2.generateDays = (e3, t3, a3 = true, i) => {
            const l = a3 ? (0, n2.getDaysOfJalaaliMonth)(e3, t3, i) : (0, n2.getDaysOfGregorianMonth)(e3, t3, i), c = (0, r2.dateTransformer)({ day: l[0].day, month: e3, year: t3 }, a3), d = a3 ? c.weekday() : c.isoWeekday(), u = l.unshift(...(0, s2.generatePrevMonthDays)({ currentMonth: e3, currentMonthWeekDay: d, year: t3, isJalaali: a3, disabledDates: i }));
            return l.push(...(0, o2.generateNextMonthDays)({ currentMonth: e3, currentMonthWeekDay: 42 - u, year: t3, isJalaali: a3, disabledDates: i })), { days: l };
          };
        }, 199: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.generateNextMonthDays = void 0;
          const n2 = a2(6255);
          t2.generateNextMonthDays = ({ currentMonthWeekDay: e3, currentMonth: t3, year: a3, isJalaali: r2 = true, disabledDates: o2 }) => {
            if (0 === e3) return [];
            let s2 = [];
            return s2 = r2 ? (0, n2.getDaysOfJalaaliMonth)(12 === t3 ? 1 : t3 + 1, 12 === t3 ? a3 + 1 : a3, o2) : (0, n2.getDaysOfGregorianMonth)(12 === t3 ? 1 : t3 + 1, 12 === t3 ? a3 + 1 : a3, o2), s2.slice(0, e3).map(((e4) => ({ ...e4, isNotCurrentMonth: true })));
          };
        }, 1774: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.generatePrevMonthDays = void 0;
          const n2 = a2(6255);
          t2.generatePrevMonthDays = ({ currentMonthWeekDay: e3, currentMonth: t3, year: a3, isJalaali: r2 = true, disabledDates: o2 }) => {
            if (0 === e3) return [];
            let s2 = [];
            s2 = r2 ? (0, n2.getDaysOfJalaaliMonth)(1 === t3 ? 12 : t3 - 1, 1 === t3 ? a3 - 1 : a3, o2) : (0, n2.getDaysOfGregorianMonth)(1 === t3 ? 12 : t3 - 1, 1 === t3 ? a3 - 1 : a3, o2);
            const i = [];
            for (let t4 = s2.length; t4 > s2.length - e3; t4--) i.unshift({ ...s2[t4 - 1], isNotCurrentMonth: true });
            return 7 === i.length ? [] : i;
          };
        }, 6255: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getDaysOfGregorianMonth = t2.getDaysOfJalaaliMonth = void 0;
          const n2 = a2(3663), r2 = a2(5928), o2 = a2(1507);
          t2.getDaysOfJalaaliMonth = (e3, t3, a3) => {
            const s2 = (0, n2.jIsLeapYear)(t3);
            return 12 === e3 ? s2 ? (0, r2.dayModelGenerator)(30, e3, t3, true, a3) : (0, r2.dayModelGenerator)(29, e3, t3, true, a3) : o2.jalaaliMonths.findIndex((({ id: t4 }) => t4 === e3)) <= 5 ? (0, r2.dayModelGenerator)(31, e3, t3, true, a3) : (0, r2.dayModelGenerator)(30, e3, t3, true, a3);
          };
          t2.getDaysOfGregorianMonth = (e3, t3, a3) => 2 === e3 ? (function(e4) {
            return e4 % 4 == 0 && e4 % 100 != 0 || e4 % 400 == 0;
          })(t3) ? (0, r2.dayModelGenerator)(29, e3, t3, false, a3) : (0, r2.dayModelGenerator)(28, e3, t3, false, a3) : 1 === e3 || 3 === e3 || 5 === e3 || 7 === e3 || 8 === e3 || 10 === e3 || 12 === e3 ? (0, r2.dayModelGenerator)(31, e3, t3, false, a3) : (0, r2.dayModelGenerator)(30, e3, t3, false, a3);
        }, 6512: function(e2, t2, a2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getMonthLabels = void 0;
          const n2 = a2(1507);
          t2.getMonthLabels = (e3, t3 = true) => (t3 ? n2.jalaaliMonths : n2.gregorianMonths).find(((t4) => t4.id === e3))?.name || "";
        }, 5928: function(e2, t2, a2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3);
            var r3 = Object.getOwnPropertyDescriptor(t3, a3);
            r3 && !("get" in r3 ? !t3.__esModule : r3.writable || r3.configurable) || (r3 = { enumerable: true, get: function() {
              return t3[a3];
            } }), Object.defineProperty(e3, n3, r3);
          } : function(e3, t3, a3, n3) {
            void 0 === n3 && (n3 = a3), e3[n3] = t3[a3];
          }), r2 = this && this.__exportStar || function(e3, t3) {
            for (var a3 in e3) "default" === a3 || Object.prototype.hasOwnProperty.call(t3, a3) || n2(t3, e3, a3);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r2(a2(5223), t2), r2(a2(4885), t2), r2(a2(6500), t2), r2(a2(4567), t2), r2(a2(3500), t2), r2(a2(199), t2), r2(a2(1774), t2), r2(a2(6255), t2), r2(a2(6512), t2), r2(a2(2558), t2), r2(a2(7438), t2), r2(a2(7728), t2), r2(a2(2568), t2), r2(a2(4900), t2);
        }, 2558: function(e2, t2) {
          function a2(e3) {
            return null != e3 && "object" == typeof e3;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isEqual = void 0, t2.isEqual = function e3(t3, n2) {
            if (void 0 === t3 || void 0 === n2 || null === t3 || null === n2) return false;
            const r2 = Object.keys(t3), o2 = Object.keys(n2);
            if (r2.length !== o2.length) return false;
            for (const o3 of r2) {
              const r3 = t3[o3], s2 = n2[o3], i = a2(r3) && a2(s2);
              if (i && !e3(r3, s2) || !i && r3 !== s2) return false;
            }
            return true;
          };
        }, 7438: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.listOfYears = void 0;
          const r2 = n2(a2(3663));
          t2.listOfYears = (e3 = true, t3 = 0) => {
            const a3 = (a4, n4 = 0) => Math.floor((e3 ? (0, r2.default)().jYear() : (0, r2.default)().year()) / a4) * a4 + n4 + t3, n3 = a3(10), o2 = a3(10, 9), s2 = n3 > 0 ? n3 : 1, i = o2 > 0 ? o2 : 9, l = [];
            s2 - 1 > 0 && l.push({ id: s2 - 1, isNotCurrentDecade: true });
            for (let e4 = s2; e4 <= i; e4++) e4 > 0 && l.push({ id: e4 });
            return l.push({ id: i + 1, isNotCurrentDecade: true }), { years: l, lowerDecade: s2, upperDecade: i };
          };
        }, 7728: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getDateDay = t2.getDateMonth = t2.getDateYear = t2.getCurrentDay = t2.getCurrentMonth = t2.getCurrentYear = t2.isBetweenHighlight = t2.checkBefore = t2.checkAfter = t2.checkDates = void 0;
          const r2 = n2(a2(3663)), o2 = a2(4885);
          t2.checkDates = function(e3, t3) {
            return !!e3 && (e3.year === t3.year && e3.month === t3.month && e3.day === t3.day);
          };
          const s2 = (e3, t3, a3) => (0, o2.dateTransformer)({ ...t3 }, a3).isAfter((0, o2.dateTransformer)({ ...e3 }, a3));
          t2.checkAfter = s2;
          const i = (e3, t3, a3) => (0, o2.dateTransformer)({ ...t3 }, a3).isBefore((0, o2.dateTransformer)({ ...e3 }, a3));
          t2.checkBefore = i, t2.isBetweenHighlight = function(e3, t3, a3, n3) {
            return !(!t3 || !a3 || 0 === t3.day || 0 === a3?.day) && (s2(t3, e3, n3) && i(a3, e3, n3));
          }, t2.getCurrentYear = function(e3) {
            return e3 ? (0, r2.default)().jYear() : (0, r2.default)().year();
          }, t2.getCurrentMonth = function(e3) {
            return Number((0, r2.default)().format(e3 ? "jM" : "M"));
          }, t2.getCurrentDay = function(e3) {
            return e3 ? (0, r2.default)().jDate() : (0, r2.default)().date();
          }, t2.getDateYear = function(e3, t3) {
            return t3 ? e3.jYear() : e3.year();
          }, t2.getDateMonth = function(e3, t3) {
            return Number(e3.format(t3 ? "jM" : "M"));
          }, t2.getDateDay = function(e3, t3) {
            return t3 ? e3.jDate() : e3.date();
          };
        }, 2568: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.momentTransformer = void 0;
          t2.momentTransformer = (e3, t3) => ({ day: t3 ? e3.jDate() : e3.date(), year: t3 ? e3.jYear() : e3.year(), month: Number(e3.format(t3 ? "jM" : "M")) });
        }, 4900: function(e2, t2, a2) {
          var n2 = this && this.__importDefault || function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.rangeTransformer = void 0;
          const r2 = n2(a2(3663));
          t2.rangeTransformer = (e3, t3) => {
            const { startDate: a3, endDate: n3 } = e3;
            if (a3.day < 1 || a3.month < 1 || a3.year < 1) throw new Error("entered inputs are not valid");
            if (n3 && (n3.day < 1 || n3.month < 1 || n3.year < 1)) throw new Error("entered inputs are not valid");
            const o2 = [(0, r2.default)(`${a3.year}-${a3.month}-${a3.day}`, t3 ? "jYYYY-jM-jDD" : "YYYY-M-DD"), (0, r2.default)(`${n3?.year}-${n3?.month}-${n3?.day}`, t3 ? "jYYYY-jM-jDD" : "YYYY-M-DD")];
            if (o2.some(((e4) => !e4?.isValid()))) throw new Error("entered inputs are not valid");
            return o2;
          };
        }, 3663: function(t2) {
          t2.exports = e;
        }, 8156: function(e2) {
          e2.exports = t;
        }, 7111: function(e2) {
          e2.exports = a;
        } }, r = {};
        function o(e2) {
          var t2 = r[e2];
          if (void 0 !== t2) return t2.exports;
          var a2 = r[e2] = { exports: {} };
          return n[e2].call(a2.exports, a2, a2.exports, o), a2.exports;
        }
        var s = {};
        return (function() {
          var e2 = s;
          Object.defineProperty(e2, "__esModule", { value: true }), e2.InputRangePicker = e2.InputDatePicker = e2.RangePicker = e2.DatePicker = void 0;
          const t2 = o(2743);
          Object.defineProperty(e2, "DatePicker", { enumerable: true, get: function() {
            return t2.DatePicker;
          } });
          const a2 = o(8432);
          Object.defineProperty(e2, "InputDatePicker", { enumerable: true, get: function() {
            return a2.InputDatePicker;
          } });
          const n2 = o(1140);
          Object.defineProperty(e2, "RangePicker", { enumerable: true, get: function() {
            return n2.RangePicker;
          } });
          const r2 = o(9424);
          Object.defineProperty(e2, "InputRangePicker", { enumerable: true, get: function() {
            return r2.InputRangePicker;
          } });
        })(), s;
      })();
    }));
  })(main$1);
  return main$1.exports;
}
var mainExports = /* @__PURE__ */ requireMain();
var momentJalaaliExports = requireMomentJalaali();
const moment = /* @__PURE__ */ getDefaultExportFromCjs(momentJalaaliExports);
const datePickerColors = {
  primary: colors.colors.primary,
  primaryFade: colors.colors.light_7,
  border: colors.colors.primary_light_3,
  backgroundHovered: colors.colors.light_7,
  borderFade: colors.colors.light_7,
  dayLabelBackground: colors.colors.primary,
  background: colors.colors.white_ff,
  backgroundDisabled: colors.colors.light_2,
  text: colors.colors.primary,
  highlight: colors.colors.primary_dark_1,
  textNegative: colors.colors.negative,
  textPrimary: colors.colors.white_ff,
  weekend: colors.colors.negative
};
const TooltipTitle = ({ title, iconName }) => /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", gap: 8, children: [
  /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 14, color: colors.colors.white_ff, children: title }),
  iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName })
] });
const Tooltip = ({ children, title, iconName, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Tooltip,
    {
      title: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(TooltipTitle, { title, iconName }) : title,
      ...rest,
      children
    }
  );
};
const InputErrorMessage = ({ children, message, textColor, className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge("inputErrorMessage h-6 justify-center", className), children: /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: message, fallback: children, children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { weight: "normal", size: 12, color: textColor ? textColor : colors.colors.negative, children: message }) }) });
};
const NavigationTabs = ({
  children,
  onChange,
  wrapperStyle,
  wrapperClassName,
  spaceBetweenTabs,
  activeStyleMode = "background",
  defaultTabKey,
  extraAfterItem,
  extraBeforeItem,
  extraBeforeChildren,
  extraAfterChildren,
  tabFontSize = 18,
  tabsClassName,
  tabClassName,
  tabsWrapperStyle,
  innerContentClassName,
  extraChildrenInheritBorder,
  hasBorder = true
}) => {
  const [currentTabKey, setCurrentTabKey] = React.useState(void 0);
  React.useEffect(() => {
    const defaultActiveTab = React.Children.map(children, ({ props }) => props)[0];
    if (!defaultTabKey) {
      setCurrentTabKey(defaultActiveTab.tabKey);
      return;
    }
    setCurrentTabKey(defaultTabKey);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { style: wrapperStyle, vertical: true, className: tailwindMerge.twMerge("w-full flex-1", wrapperClassName), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      index.Flex,
      {
        align: "center",
        className: tailwindMerge.twMerge(
          activeStyleMode === "underlined" && hasBorder && "border-light-7 border-b border-solid"
        ),
        children: [
          extraBeforeItem && /* @__PURE__ */ jsxRuntime.jsx(
            index.Flex,
            {
              justify: "center",
              className: tailwindMerge.twMerge(
                "h-full px-2",
                extraChildrenInheritBorder && "border-light-6 border-b border-solid"
              ),
              children: typeof extraBeforeItem === "function" ? extraBeforeItem(currentTabKey) : extraBeforeItem
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            index.Flex,
            {
              align: "center",
              className: tailwindMerge.twMerge(
                "w-full min-w-max flex-1 flex-row overflow-y-auto overflow-x-hidden",
                tabsClassName
              ),
              gap: spaceBetweenTabs !== void 0 ? spaceBetweenTabs : 24,
              style: tabsWrapperStyle,
              children: React.Children.map(
                children,
                ({ props: { tabKey, title, className, style, isVisible = true } }) => isVisible ? /* @__PURE__ */ jsxRuntime.jsx(
                  index.Flex,
                  {
                    align: "center",
                    justify: "center",
                    style: typeof style === "function" ? style(currentTabKey || tabKey) : style,
                    className: tailwindMerge.twMerge(
                      "relative h-full min-h-[35px] w-fit min-w-[24px] cursor-pointer rounded",
                      tabClassName,
                      typeof title === "string" ? "px-4 pb-2 pt-4" : "px-0 pb-2 pt-4",
                      tabKey === currentTabKey && (activeStyleMode === "background" ? "after:bg-primary-light-1 z-auto overflow-hidden px-4 after:absolute after:left-0 after:top-0 after:h-full after:w-full" : activeStyleMode === "underlined" ? " after:border-action z-auto after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-b-[2px] after:border-solid" : void 0),
                      typeof className === "function" ? className(currentTabKey || tabKey) : className
                    ),
                    onClick: () => {
                      setCurrentTabKey(tabKey);
                      onChange?.(tabKey);
                    },
                    children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
                      index.Text,
                      {
                        size: tabFontSize,
                        weight: "medium",
                        className: tailwindMerge.twMerge(
                          "z-10",
                          activeStyleMode === "background" && tabKey === currentTabKey && "text-white-ff",
                          activeStyleMode === "underlined" && tabKey === currentTabKey && "text-action"
                        ),
                        children: title
                      }
                    ) : title?.(tabKey === currentTabKey ? colors.colors.negative : colors.colors.negative)
                  },
                  tabKey
                ) : null
              )
            }
          ),
          extraAfterItem && /* @__PURE__ */ jsxRuntime.jsx(
            index.Flex,
            {
              justify: "center",
              align: "center",
              className: tailwindMerge.twMerge(
                "h-full px-2",
                extraChildrenInheritBorder && "border-light-6 border-b border-solid"
              ),
              children: typeof extraAfterItem === "function" ? extraAfterItem(currentTabKey) : extraAfterItem
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: tailwindMerge.twMerge("max-w-full flex-1", innerContentClassName), children: [
      extraBeforeChildren && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { children: typeof extraBeforeChildren === "function" ? extraBeforeChildren(currentTabKey) : extraBeforeChildren }),
      React.Children.map(children, ({ props: { tabKey, children: children2 } }) => {
        if (tabKey === currentTabKey) {
          return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "max-w-full flex-1", children: children2 }, tabKey);
        }
        return null;
      }),
      extraAfterChildren && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { children: typeof extraAfterChildren === "function" ? extraAfterChildren(currentTabKey) : extraAfterChildren })
    ] })
  ] });
};
NavigationTabs.Tab = (_props) => null;
const PopoverLink = ({ children, size, color, weight, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Flex,
    {
      className: tailwindMerge.twMerge("border-secondary items-center border-b border-dashed", className),
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index.Text,
        {
          className: "cursor-pointer select-none",
          color: color || colors.colors.secondary,
          size: size || 16,
          weight: weight || "medium",
          children
        }
      )
    }
  );
};
const Popover = ({
  overlayInnerStyle,
  overlayClassName,
  overlayInnerClassName,
  headerTitle,
  content,
  closeable = true,
  onClose,
  footer,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Popover,
    {
      showArrow: false,
      arrow: false,
      overlayClassName: tailwindMerge.twMerge("[&_.ant-popover-inner]:p-0", overlayClassName),
      overlayInnerStyle: {
        boxShadow: `2px 3px 7px 0 rgba(67, 88, 121, 0.15)`
      },
      ...rest,
      content: /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        headerTitle && /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1", children: [
          typeof headerTitle === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 12, weight: "medium", color: colors.colors.primary, children: headerTitle }) : headerTitle,
          closeable && /* @__PURE__ */ jsxRuntime.jsx(
            index.Icon,
            {
              name: "Close",
              className: "cursor-pointer",
              onClick: onClose,
              color: colors.colors.primary,
              size: 12
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge("p-3", overlayInnerClassName), style: overlayInnerStyle, children: typeof content === "function" ? content() : content }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1", children: footer })
      ] })
    }
  );
};
Popover.Link = PopoverLink;
const Radio = (props) => /* @__PURE__ */ jsxRuntime.jsx(antd.Radio, { ...props });
Radio.Group = antd.Radio.Group;
const Item = (_props) => null;
const Accordion = ({
  children,
  accordionRef,
  onChangeIndex,
  currentIndex = 1,
  indexedStyle = true,
  noPaddingItem,
  noGapBetweenItems,
  transparent
}) => {
  const props = React.useMemo(() => {
    const prettifyChildren = ({ props: props2 }, index$1) => {
      let label = props2.label;
      if (typeof label === "string") {
        label = /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            size: 18,
            color: colors.colors[currentIndex === index$1 + 1 ? "primary_dark_1" : "primary_light_1"],
            weight: currentIndex === index$1 + 1 ? "bold" : "medium",
            children: label
          }
        );
      }
      return { ...props2, label, key: index$1 + 1 };
    };
    return React.Children.map(children, prettifyChildren);
  }, [children, currentIndex]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: tailwindMerge.twMerge(
        "flex flex-1 flex-col gap-[16px] py-[20px]",
        indexedStyle && "pe-[60px] ps-[16px]",
        noGapBetweenItems && "gap-0"
      ),
      ref: accordionRef,
      children: props.map((item, index$1) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: " flex w-full items-start gap-[16px]", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: indexedStyle, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex h-full w-[30px] flex-col", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full items-start justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: tailwindMerge.twMerge(
                currentIndex > index$1 ? "bg-positive" : "bg-primary-light-2",
                `z-[1] mt-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full`
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx(
                index.Render,
                {
                  when: currentIndex > index$1 + 1,
                  fallback: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.white_ff, size: 16, children: index$1 + 1 }),
                  children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Checkmark", size: 18, color: colors.colors.white_ff })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: index$1 !== props.length - 1, children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: tailwindMerge.twMerge(
                "border-primary-light-2 absolute left-[calc(50%-0.5px)] top-[25px] z-0 h-full w-[1px] border-l-[1px] border-dashed",
                currentIndex > index$1 && "border-positive-light-2"
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Collapse,
          {
            accordion: true,
            bordered: false,
            activeKey: currentIndex,
            expandIconPosition: "end",
            onChange: (key) => {
              if (Array.isArray(key)) {
                return onChangeIndex?.(Number(key[0]));
              }
              return onChangeIndex?.(Number(key));
            },
            items: [props[index$1]],
            expandIcon: ({ isActive }) => /* @__PURE__ */ jsxRuntime.jsx(
              index.Icon,
              {
                name: isActive ? "Chevron_Down" : "Chevron_Up",
                color: colors.colors[isActive ? "primary" : "primary_light_1"]
              }
            ),
            style: { boxShadow: "0 1px 6px 0 rgba(72, 88, 118, 0.16)" },
            className: tailwindMerge.twMerge(
              `bg-white-ff w-full overflow-hidden border-b-0 [&_.ant-collapse-header]:cursor-default`,
              !indexedStyle ? "[&_.ant-collapse-header]:!bg-action/10" : transparent ? "[&_.ant-collapse-header]:!bg-transparent" : "[&_.ant-collapse-header]:!bg-light-1",
              noPaddingItem && "[&_.ant-collapse-header]:!p-0",
              indexedStyle ? "rounded-lg" : "rounded-none",
              // indexedStyle && '[&_.ant-collapse-header]:hover:!bg-positive/20',
              indexedStyle && "[&_.ant-collapse-header]:shadow-[0_1px_6px_0_rgba(72,88,118,0.16)]"
            )
          }
        )
      ] }, item.key))
    }
  );
};
Accordion.Item = Item;
const ActionHeader = React.forwardRef(
  ({ children, title, route, hasBorder, gap = 8, className }, ref2) => {
    const headerTitle = (title2, route2) => {
      if (route2) {
        return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "min-w-max", children: /* @__PURE__ */ jsxRuntime.jsx(Breadcrumbs, { route: route2 }) });
      }
      if (title2) {
        return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "min-w-max", children: typeof title2 === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: colors.colors.primary, children: title2 }) : title2 });
      }
      return null;
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index.Flex,
      {
        className: tailwindMerge.twMerge(
          "bg-light-1 w-full px-6 py-4",
          hasBorder && "border-light-7 border-b",
          className
        ),
        align: "center",
        justify: "space-between",
        children: [
          headerTitle(title, route),
          /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { ref: ref2, gap, className: "w-full justify-end", children })
        ]
      }
    );
  }
);
function uncapitalize(value) {
  return value.slice(0, 1).toLowerCase() + value.slice(1);
}
function batch(components) {
  const assignees = Object.assign({}, { ...components });
  return new Proxy(assignees, {
    get(target, property) {
      const safeTarget = Object.freeze({
        ...target,
        [Symbol.toPrimitive]() {
          return "Error: Attempted to render object as a JSX";
        }
      });
      if (property in safeTarget) {
        return safeTarget[property];
      }
      const origProperty = uncapitalize(property);
      if (origProperty in safeTarget) {
        return safeTarget[origProperty];
      }
      return null;
    }
  });
}
function getErrorMessage(error) {
  if (!error) {
    return "";
  }
  if (InternalRequestError.isRequestError(error)) {
    return error.message || colors.i18nInstance.t("common.error.errorOccurred");
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
    return error.message;
  }
  return colors.i18nInstance.t("common.error.errorOccurred");
}
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    if (process.env.NODE_ENV !== "production") {
      if (this.#providerCalled && provider !== this.#provider) {
        console.error(
          `[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`,
          { previous: this.#provider, provider }
        );
      }
    }
    this.#provider = provider;
    if (process.env.NODE_ENV !== "production") {
      this.#providerCalled = false;
    }
  }
  setTimeout(callback, delay) {
    if (process.env.NODE_ENV !== "production") {
      this.#providerCalled = true;
    }
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    if (process.env.NODE_ENV !== "production") {
      this.#providerCalled = true;
    }
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop$2() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type: type2 = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type2 !== "all") {
    const isActive = query.isActive();
    if (type2 === "active" && !isActive) {
      return false;
    }
    if (type2 === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v = replaceEqualDeep(aItem, bItem);
    copy[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    if (process.env.NODE_ENV !== "production") {
      try {
        return replaceEqualDeep(prevData, data);
      } catch (error) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
        );
        throw error;
      }
    }
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max2 = 0) {
  const newItems = [...items, item];
  return max2 && newItems.length > max2 ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max2 = 0) {
  const newItems = [item, ...items];
  return max2 && newItems.length > max2 ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (process.env.NODE_ENV !== "production") {
    if (options.queryFn === skipToken) {
      console.error(
        `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
      );
    }
  }
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
  let consumed = false;
  let signal;
  Object.defineProperty(object, "signal", {
    enumerable: true,
    get: () => {
      signal ??= getSignal();
      if (consumed) {
        return signal;
      }
      consumed = true;
      if (signal.aborted) {
        onCancelled();
      } else {
        signal.addEventListener("abort", onCancelled, { once: true });
      }
      return signal;
    }
  });
  return object;
}
var FocusManager = class extends Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();
var OnlineManager = class extends Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      config.onCancel?.(error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved()) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}
var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      this.#gcTimeout = timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};
var Query = class extends Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState$1(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState$1(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(noop$2).catch(noop$2) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#retryer?.status() !== "rejected") {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    if (process.env.NODE_ENV !== "production") {
      if (!Array.isArray(this.options.queryKey)) {
        console.error(
          `As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`
        );
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    this.#retryer = createRetryer({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        if (process.env.NODE_ENV !== "production") {
          console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          );
        }
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      this.#cache.config.onSuccess?.(data, this);
      this.#cache.config.onSettled?.(
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      this.#cache.config.onError?.(
        error,
        this
      );
      this.#cache.config.onSettled?.(
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer2 = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            ...successState(action.data, action.dataUpdatedAt),
            dataUpdateCount: state.dataUpdateCount + 1,
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer2(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          addConsumeAwareSignal(
            object,
            () => context.signal,
            () => cancelled = true
          );
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
var Mutation = class extends Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#retryer = createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this,
          mutationFnContext
        );
        const context = await this.options.onMutate?.(
          variables,
          mutationFnContext
        );
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSuccess?.(
        data,
        variables,
        this.state.context,
        mutationFnContext
      );
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSettled?.(
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      );
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer2 = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer2(this.state);
    notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client, options, state) {
    const mutation = new Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index2 = scopedMutations.indexOf(mutation);
            if (index2 !== -1) {
              scopedMutations.splice(index2, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop$2))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}
var QueryCache = class extends Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};
var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new QueryCache();
    this.#mutationCache = config.mutationCache || new MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop$2).catch(noop$2);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop$2);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop$2);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop$2).catch(noop$2);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop$2).catch(noop$2);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};
new QueryClient();
const fontSizePicker = {
  block: "text-[16px]",
  medium: "text-[16px]",
  small: "text-[12px]"
};
const paddingPicker = (hasIcon) => ({
  start: {
    block: `pe-4 ${hasIcon ? "ps-3" : "ps-4"} `,
    medium: `pe-4 ${hasIcon ? "ps-3" : "ps-4"} `,
    small: `pe-3 ps-[8px]`
  },
  end: {
    block: `ps-4 pe-3`,
    medium: `ps-4 pe-3`,
    small: `ps-4 pe-3`
  }
});
const buttonDefaultClasses = "flex relative select-none w-fit appearance-none flex-row items-center  justify-center gap-2 whitespace-nowrap rounded text-center outline-none";
const ActionButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  platform = "sales",
  ...rest
}) => {
  const getColor = () => {
    if ((disabled || isLoading) && platform) {
      if (platform === "home" || platform === "sandbox" || platform === "bi" || platform === "storybook")
        return colors.colors["sales"]["action_light_2"];
      return colors.colors[platform]["action_light_2"];
    }
    return colors.colors.white_ff;
  };
  const getColorClass = () => {
    if (!platform) return;
    const data = {
      bi: tailwindMerge.twMerge("bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1"),
      call: tailwindMerge.twMerge("bg-call-action hover:bg-call-action-light-1 active:bg-call-action-dark-1"),
      club: tailwindMerge.twMerge("bg-club-action hover:bg-club-action-light-1 active:bg-club-action-dark-1"),
      marketing: tailwindMerge.twMerge(
        "bg-marketing-action hover:bg-marketing-action-light-1 active:bg-marketing-action-dark-1"
      ),
      sales: tailwindMerge.twMerge("bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1"),
      team: tailwindMerge.twMerge("bg-team-action hover:bg-team-action-light-1 active:bg-team-action-dark-1"),
      rayan: tailwindMerge.twMerge("bg-team-action hover:bg-team-action-light-1 active:bg-team-action-dark-1")
    };
    return data?.[platform] || data["sales"];
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "disabled:bg-light-6 bg-repo ",
        getColorClass(),
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const IconButton = ({
  style,
  height = 34,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  iconProps,
  color,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      style: {
        height,
        ...style
      },
      className: tailwindMerge.twMerge(
        buttonDefaultClasses,
        "h-[34px] w-[34px] p-4",
        "bg-light-1  border-primary-light-3 border",
        "hover:bg-white-ff hover:border-primary-light-2",
        "active:bg-light-6 active:border-primary-light-2",
        "disabled:text-primary-light-2 disabled:bg-light-6 disabled:border-light-6",
        disabled && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled,
      ...rest,
      children: iconProps?.renderIcon ? iconProps.renderIcon : /* @__PURE__ */ jsxRuntime.jsx(
        index.Icon,
        {
          name: iconName,
          color: disabled ? colors.colors.primary_light_3 : color ?? colors.colors.primary,
          ...iconProps
        }
      )
    }
  );
};
const NegativeButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  variant = "outline",
  // Default variant
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    } else if (variant === "contain") {
      return colors.colors.white_ff;
    }
    return colors.colors.negative;
  };
  const outlineClasses = "hover:bg-negative-light-1 active:bg-negative-dark-1 [&_p]:hover:!text-white-ff [&_*]:hover:fill-white-ff disabled:bg-light-6 bg-transparent border-negative hover:border-negative-light-1 active:border-negative-dark-1 disabled:light-6 border-[2px] border-solid";
  const containClasses = "bg-negative hover:bg-negative-light-1 active:bg-negative-dark-1 disabled:bg-light-6 border-transparent";
  const buttonVariantClasses = variant === "contain" ? containClasses : outlineClasses;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        buttonDefaultClasses,
        buttonVariantClasses,
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            name: iconName,
            className: tailwindMerge.twMerge(fontSizePicker[mode || "block"]),
            color: getColor()
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Text, { weight: "medium", size: 16, color: getColor(), lang, children }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const PrimaryButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  textSize,
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.white_ff;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "bg-primary hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: tailwindMerge.twMerge(
              "text-white-ff",
              (disabled || isLoading) && "text-primary-light-2",
              fontSizePicker[mode || "block"]
            ),
            size: textSize,
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const SecondaryButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6 [&_p]:text-primary [&_p]:hover:text-white-ff [&_svg]:hover:!fill-white-ff bg-transparent",
        "border-primary hover:border-primary-light-1 active:border-primary-dark-1 disabled:bg-light-6 border-[2px] border-solid",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Text, { lang, weight: "medium", className: fontSizePicker[mode || "block"], children }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const SecondaryQuietButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "hover:bg-light-6 active:bg-light-7 disabled:light-6 bg-transparent",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed ",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const TertiaryButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary_dark_1;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "bg-light-1 hover:bg-white-ff active:light-6 disabled:light-6",
        "border-primary-light-3 hover:border-primary-light-2 active:bg-primary-light-2 disabled:light-6 border-[1px] border-solid",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const TextButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  underline,
  textProps,
  startIconSize,
  endIconSize,
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.black;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "disabled:bg-light-6 border-none hover:bg-none focus:bg-none",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            size: startIconSize,
            name: iconName,
            className: fontSizePicker[mode || "block"],
            color: getColor()
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: tailwindMerge.twMerge(
              (disabled || isLoading) && "text-primary-light-2",
              fontSizePicker[mode || "block"],
              underline && "underline"
            ),
            ...textProps,
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            size: endIconSize,
            name: iconName,
            className: fontSizePicker[mode || "block"],
            color: getColor()
          }
        ) })
      ]
    }
  );
};
const Button = batch({
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
  SecondaryQuiet: SecondaryQuietButton,
  Icon: IconButton,
  Negative: NegativeButton,
  Action: ActionButton,
  Text: TextButton
});
var Component = {};
var toggleSelection;
var hasRequiredToggleSelection;
function requireToggleSelection() {
  if (hasRequiredToggleSelection) return toggleSelection;
  hasRequiredToggleSelection = 1;
  toggleSelection = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) {
      return function() {
      };
    }
    var active = document.activeElement;
    var ranges = [];
    for (var i = 0; i < selection.rangeCount; i++) {
      ranges.push(selection.getRangeAt(i));
    }
    switch (active.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        active.blur();
        break;
      default:
        active = null;
        break;
    }
    selection.removeAllRanges();
    return function() {
      selection.type === "Caret" && selection.removeAllRanges();
      if (!selection.rangeCount) {
        ranges.forEach(function(range2) {
          selection.addRange(range2);
        });
      }
      active && active.focus();
    };
  };
  return toggleSelection;
}
var copyToClipboard;
var hasRequiredCopyToClipboard;
function requireCopyToClipboard() {
  if (hasRequiredCopyToClipboard) return copyToClipboard;
  hasRequiredCopyToClipboard = 1;
  var deselectCurrent = requireToggleSelection();
  var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
  };
  var defaultMessage = "Copy to clipboard: #{key}, Enter";
  function format(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
  }
  function copy(text, options) {
    var debug, message, reselectPrevious, range2, selection, mark, success = false;
    if (!options) {
      options = {};
    }
    debug = options.debug || false;
    try {
      reselectPrevious = deselectCurrent();
      range2 = document.createRange();
      selection = document.getSelection();
      mark = document.createElement("span");
      mark.textContent = text;
      mark.ariaHidden = "true";
      mark.style.all = "unset";
      mark.style.position = "fixed";
      mark.style.top = 0;
      mark.style.clip = "rect(0, 0, 0, 0)";
      mark.style.whiteSpace = "pre";
      mark.style.webkitUserSelect = "text";
      mark.style.MozUserSelect = "text";
      mark.style.msUserSelect = "text";
      mark.style.userSelect = "text";
      mark.addEventListener("copy", function(e) {
        e.stopPropagation();
        if (options.format) {
          e.preventDefault();
          if (typeof e.clipboardData === "undefined") {
            debug && console.warn("unable to use e.clipboardData");
            debug && console.warn("trying IE specific stuff");
            window.clipboardData.clearData();
            var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
            window.clipboardData.setData(format2, text);
          } else {
            e.clipboardData.clearData();
            e.clipboardData.setData(options.format, text);
          }
        }
        if (options.onCopy) {
          e.preventDefault();
          options.onCopy(e.clipboardData);
        }
      });
      document.body.appendChild(mark);
      range2.selectNodeContents(mark);
      selection.addRange(range2);
      var successful = document.execCommand("copy");
      if (!successful) {
        throw new Error("copy command was unsuccessful");
      }
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using execCommand: ", err);
      debug && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(options.format || "text", text);
        options.onCopy && options.onCopy(window.clipboardData);
        success = true;
      } catch (err2) {
        debug && console.error("unable to copy using clipboardData: ", err2);
        debug && console.error("falling back to prompt");
        message = format("message" in options ? options.message : defaultMessage);
        window.prompt(message, text);
      }
    } finally {
      if (selection) {
        if (typeof selection.removeRange == "function") {
          selection.removeRange(range2);
        } else {
          selection.removeAllRanges();
        }
      }
      if (mark) {
        document.body.removeChild(mark);
      }
      reselectPrevious();
    }
    return success;
  }
  copyToClipboard = copy;
  return copyToClipboard;
}
var hasRequiredComponent;
function requireComponent() {
  if (hasRequiredComponent) return Component;
  hasRequiredComponent = 1;
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  Object.defineProperty(Component, "__esModule", {
    value: true
  });
  Component.CopyToClipboard = void 0;
  var _react = _interopRequireDefault(React);
  var _copyToClipboard = _interopRequireDefault(requireCopyToClipboard());
  var _excluded2 = ["text", "onCopy", "options", "children"];
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _objectWithoutProperties2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call2) {
    if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CopyToClipboard = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(CopyToClipboard2, _React$PureComponent);
    var _super = _createSuper(CopyToClipboard2);
    function CopyToClipboard2() {
      var _this;
      _classCallCheck(this, CopyToClipboard2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty2(_assertThisInitialized(_this), "onClick", function(event) {
        var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
        var elem = _react["default"].Children.only(children);
        var result = (0, _copyToClipboard["default"])(text, options);
        if (onCopy) {
          onCopy(text, result);
        }
        if (elem && elem.props && typeof elem.props.onClick === "function") {
          elem.props.onClick(event);
        }
      });
      return _this;
    }
    _createClass(CopyToClipboard2, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props;
        _this$props2.text;
        _this$props2.onCopy;
        _this$props2.options;
        var children = _this$props2.children, props = _objectWithoutProperties2(_this$props2, _excluded2);
        var elem = _react["default"].Children.only(children);
        return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
          onClick: this.onClick
        }));
      }
    }]);
    return CopyToClipboard2;
  })(_react["default"].PureComponent);
  Component.CopyToClipboard = CopyToClipboard;
  _defineProperty2(CopyToClipboard, "defaultProps", {
    onCopy: void 0,
    options: void 0
  });
  return Component;
}
var lib$1;
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib$1;
  hasRequiredLib$1 = 1;
  var _require = requireComponent(), CopyToClipboard = _require.CopyToClipboard;
  CopyToClipboard.CopyToClipboard = CopyToClipboard;
  lib$1 = CopyToClipboard;
  return lib$1;
}
var libExports$1 = requireLib$1();
const InputTextArea$ = (props, ref2) => {
  const {
    placeholder,
    background = "#fff",
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    onlyNumber,
    isCurrency,
    onChangeText,
    onChange,
    status,
    prefix,
    required,
    label,
    readOnly,
    className,
    classNames,
    wrapperClassName,
    hideErrorMessage = false,
    height,
    rows,
    ...rest
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
            index.Text,
            {
              lang,
              size: inputSize === "large" ? 14 : 12,
              color: colors.colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input.TextArea,
          {
            autoSize: true,
            ref: ref2,
            className: tailwindMerge.twMerge(
              "text-primary-dark-1  w-full  text-[14px] font-medium  outline-none",
              className
            ),
            classNames: {
              textarea: tailwindMerge.twMerge(
                (lang || i18n.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                readOnly && "cursor-default"
              ),
              ...classNames
            },
            placeholder,
            size: inputSize,
            rows,
            readOnly,
            style: { background, height, outline: "none" },
            onChange: _onChangeText,
            status: error?.message ? "error" : status,
            disabled,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
};
const InputTextArea = React.forwardRef(InputTextArea$);
const InputDefault$ = (props, ref2) => {
  const {
    placeholder,
    background = "#fff",
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    onlyNumber,
    isCurrency,
    onChangeText,
    onChange,
    status,
    prefix,
    suffix,
    required,
    label,
    height = 38,
    readOnly,
    classNames,
    wrapperClassName,
    direction,
    hideErrorMessage = false,
    ...rest
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName,
        "[&_.ant-input-clear-icon]:!flex"
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[22px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
            index.Text,
            {
              size: inputSize === "large" ? 14 : 12,
              color: colors.colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input,
          {
            ref: ref2,
            className: "text-primary-dark-1 hover:border-primary-light-2 w-full text-[14px] font-medium outline-none",
            classNames: {
              input: tailwindMerge.twMerge(
                (lang || i18n.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                readOnly && "cursor-default",
                direction === "ltr" ? "direction-ltr" : "direction-rtl"
              ),
              ...classNames
            },
            rootClassName: "!rounded",
            placeholder,
            size: inputSize,
            readOnly,
            style: { background, height, outline: "none" },
            onChange: _onChangeText,
            status: error?.message ? "error" : status,
            disabled,
            suffix: suffix || error?.message ? /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: tailwindMerge.twMerge("flex h-full justify-center"),
                onClick: (e) => e.stopPropagation(),
                children: suffix && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex h-full items-center justify-center `, children: [
                  " ",
                  suffix
                ] }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    id: "my-anchor-element",
                    className: `flex h-full cursor-pointer items-center justify-center `,
                    children: /* @__PURE__ */ jsxRuntime.jsx(
                      Tooltip,
                      {
                        variant: "error",
                        color: colors.colors.negative,
                        title: error.message,
                        arrow: true,
                        children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "alert-line", color: colors.colors.negative })
                      }
                    )
                  }
                )
              }
            ) : void 0,
            prefix: prefix ? /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: (e) => e.stopPropagation(), children: prefix }) : void 0,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.primary, children: helperText })
      ]
    }
  );
};
const InputDefault = React.forwardRef(InputDefault$);
const EmojiPicker = ({
  value,
  onChange,
  label,
  emojis = ["😊", "👍", "❤️", "😂", "🔥"]
  // Default emojis
}) => {
  const inputRef = React.useRef(null);
  const [cursor, setCursor] = React.useState(value.length);
  const getInput = () => inputRef.current?.input ?? inputRef.current;
  const updateCursor = () => {
    const el = getInput();
    if (el && el.selectionStart !== null) {
      setCursor(el.selectionStart);
    }
  };
  const addEmoji = React.useCallback(
    (emoji) => {
      const el = getInput();
      const pos = cursor ?? value.length;
      const newValue = value.slice(0, pos) + emoji + value.slice(pos);
      onChange(newValue);
      requestAnimationFrame(() => {
        if (el) {
          const newPos = pos + emoji.length;
          el.setSelectionRange(newPos, newPos);
          el.focus();
          setCursor(newPos);
        }
      });
    },
    [cursor, value, onChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    Input.Default,
    {
      ref: inputRef,
      value,
      onChange: (e) => {
        onChange(e.target.value);
        updateCursor();
      },
      onClick: updateCursor,
      onKeyUp: updateCursor,
      onSelect: updateCursor,
      hideErrorMessage: true,
      label,
      suffix: (
        // Emoji picker dropdown
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Dropdown,
          {
            trigger: ["click"],
            placement: "topRight",
            openClassName: "flex bg-light-5",
            overlayClassName: "[&_.ant-dropdown-menu]:flex",
            dropdownRender: () => /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "bg-white-ff max-h-40 overflow-x-auto rounded-md p-2", gap: 8, children: emojis.map((emoji, i) => /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: "hover:bg-light-5 mb-1 flex cursor-pointer items-center justify-center rounded text-xl leading-none",
                onMouseDown: (e) => {
                  e.preventDefault();
                  addEmoji(emoji);
                },
                children: emoji
              },
              i
            )) }),
            children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "hover:bg-light-5 rounded-full bg-transparent p-1", children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "smile-outlined", className: "cursor-pointer" }) })
          }
        )
      )
    }
  );
};
const InputGhost$ = (props, ref2) => {
  const {
    label,
    inputSize = "medium",
    error,
    readOnly,
    value,
    height = 38,
    isCurrency,
    required = false,
    wrapperClassName,
    prefix,
    placeHolder,
    suffix,
    onChange,
    onlyNumber,
    style,
    onChangeText,
    disabled,
    lang,
    helperText,
    ...rest
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  const InputClassName = tailwindMerge.twMerge(
    `w-full flex items-center rounded-[4px] bg-white-ff bg-none outline-none transition-all border-none duration-200`,
    disabled ? "bg-light-6 text-primary-light-2" : "bg-none text-primary-light-2"
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.Flex,
    {
      className: `flex w-full flex-col justify-start gap-[2px] text-[14px] ${wrapperClassName} `,
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: inputSize === "medium" ? 14 : 12, color: colors.colors.primary, weight: "medium", children: label }) : label,
          required && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Asterisk", size: 8, color: colors.colors.primary_light_3 })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: `${InputClassName} focus-within:border-primary `,
            style: {
              border: `${error?.message && !disabled ? `1px solid ${colors.colors.negative}` : ""}`
            },
            children: [
              prefix && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: tailwindMerge.twMerge(
                    "absolute flex items-center justify-center",
                    inputSize === "medium" ? "ps-[12px]" : "ps-[8px]"
                  ),
                  children: prefix
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "input",
                {
                  ref: ref2,
                  placeholder: placeHolder,
                  disabled,
                  ...rest,
                  style: {
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    ...style
                  },
                  onChange: _onChangeText,
                  value,
                  className: `text-primary disabled:placeholder:text-primary-light-2 border-none bg-transparent placeholder:text-opacity-50 ${prefix ? "pe-3 ps-8" : "px-3"} 
            ${inputSize === "medium" ? "px-[12px] text-[16px] placeholder:text-[16px] " : "px-[8px] text-[14px] placeholder:text-[14px]"} 
            ${(lang || i18n.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr"} placeholder:text-primary  text-primary-dark-1 w-full  border-none text-[14px] font-medium outline-none ${inputSize === "medium" ? "h-[38px]  text-[16px]" : "h-[32px] text-[14px]"}`,
                  readOnly
                }
              ),
              (suffix || error?.message) && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: tailwindMerge.twMerge(
                    "flex h-full justify-center",
                    suffix ? inputSize === "medium" ? "pe-3" : "pe-2" : null
                  ),
                  children: suffix && /* @__PURE__ */ jsxRuntime.jsx("div", { className: ` flex h-full items-center justify-center`, children: suffix }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      id: "my-anchor-element",
                      className: ` flex h-full cursor-pointer items-center justify-center`,
                      children: /* @__PURE__ */ jsxRuntime.jsx(antd.Tooltip, { color: colors.colors.negative, title: error.message, arrow: true, children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "alert-line", color: colors.colors.negative }) })
                    }
                  )
                }
              )
            ]
          }
        ),
        !helperText && error && /* @__PURE__ */ jsxRuntime.jsx(index.Text, { className: "min-h-[24px]", size: 12, color: colors.colors.negative_light_1, children: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.primary, children: helperText })
      ]
    }
  );
};
const InputGhost = React.forwardRef(InputGhost$);
const InputNumber = React.forwardRef((props, ref2) => {
  const {
    placeHolder,
    background,
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    isCurrency,
    onChange,
    value,
    status,
    prefix,
    suffix,
    required,
    label,
    height = 38,
    step = 1,
    className,
    wrapperClassName,
    max: max2,
    min: min2,
    hideErrorMessage = false,
    disableNegative = false,
    ...rest
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
    (e) => {
      const star = starkString(e);
      if (isCurrency) {
        star.parseNumber();
      }
      const value2 = Number(e);
      if (!isNaN(value2)) {
        const minimumIsValid = min2 !== void 0 && Number.isInteger(min2);
        const maximumIsValid = max2 !== void 0 && Number.isInteger(max2);
        if (maximumIsValid && minimumIsValid && max2 < min2) {
          throw new Error("Maximum should be bigger than Minimum");
        }
        if (disableNegative && value2 < 0 || minimumIsValid && min2 == 0 && value2 < 0 || maximumIsValid && max2 == 0 && value2 > 0) {
          return;
        }
        if (minimumIsValid && value2 < Number(min2)) {
          return;
        }
        if (maximumIsValid && value2 > Number(max2)) {
          return;
        }
        onChange?.(star.toStringNumber({ negative: true }));
      } else {
        onChange?.(star.toStringNumber({ negative: true }));
      }
    },
    [isCurrency, onChange, min2, max2, disableNegative]
  );
  const handleArrowBtns = React.useCallback(
    (sp) => {
      const DEFAULT_VALUE = 0;
      const currentNumber = value === void 0 ? DEFAULT_VALUE : value;
      const [integerPart, decimalPart = ""] = currentNumber.toString().split(".");
      const updatedDecimalPart = (Number(integerPart) - sp).toString();
      const combinedNumberString = decimalPart ? `${updatedDecimalPart}.${decimalPart}` : updatedDecimalPart;
      const updatedNumber = Number(combinedNumberString).toFixed(decimalPart.length);
      _onChangeText(updatedNumber);
    },
    [value, _onChangeText]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: inputSize === "large" ? 14 : 12, color: colors.colors.primary, weight: "normal", children: label }) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input,
          {
            value: isCurrency && value ? starkString(value).toCurrency().toString() : value || "",
            ref: ref2,
            className: tailwindMerge.twMerge(
              (lang || i18n.language) === "fa" ? "font-yekan-normal direction-rtl " : "font-roboto-normal direction-ltr",
              "placeholder:text-primary text-primary-dark-1 w-full select-none py-0  pe-0 ps-2 text-[14px] font-medium outline-none",
              className
            ),
            classNames: {
              input: "py-2 !placeholder:text-right"
            },
            styles: { input: { unicodeBidi: "plaintext" } },
            placeholder: placeHolder,
            size: inputSize,
            style: { background, height, outline: "none", unicodeBidi: "plaintext" },
            onChange: (e) => _onChangeText(e.target.value),
            status: error?.message ? "error" : status,
            disabled,
            suffix: /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge("flex h-full"), children: /* @__PURE__ */ jsxRuntime.jsxs(
              index.Flex,
              {
                vertical: true,
                flex: 1,
                className: " border-primary-light-3 w-full border-s border-solid p-0",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index.Flex,
                    {
                      flex: 1,
                      className: "bg-light-1 w-10 cursor-pointer items-center  justify-center  rounded	border-solid ",
                      onClick: () => handleArrowBtns(-step),
                      children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Chevron_Up", size: "small", color: colors.colors.primary_dark_2 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(antd.Divider, { className: "bg-primary-light-3 m-0 p-0" }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index.Flex,
                    {
                      flex: 1,
                      onClick: () => handleArrowBtns(+step),
                      className: "bg-light-1 border-1 w-10 cursor-pointer items-center justify-center  rounded	border-solid",
                      children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Chevron_Down", size: "small", color: colors.colors.primary_dark_2 })
                    }
                  )
                ]
              }
            ) }),
            prefix,
            step,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
});
const InputSearch = React.forwardRef(
  ({ onIconClick, ...rest }, ref2) => {
    const { t } = reactI18next.useTranslation();
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputDefault,
      {
        placeholder: t("common.literal.search"),
        suffix: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Search_header", onClick: onIconClick }),
        ref: ref2,
        hideErrorMessage: true,
        ...rest
      }
    );
  }
);
const Input = batch({
  Default: InputDefault,
  Ghost: InputGhost,
  Number: InputNumber,
  Search: InputSearch,
  TextArea: InputTextArea,
  EmojiPicker
});
lib$2.notification.config({
  closeIcon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { size: 16, name: "Close", color: colors.colors.white_ff }),
  placement: "bottomRight",
  rtl: true,
  bottom: 0,
  duration: 7
});
const useNotification = () => {
  const { t } = reactI18next.useTranslation();
  const success = (props) => {
    lib$2.notification.open({
      ...props,
      style: {
        backgroundColor: colors.colors.positive,
        alignItems: "center",
        borderRadius: 4
      },
      //TODO if need button
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      icon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { size: 16, name: "Checkmark_Circle", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const neutral = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.primary_dark_1, borderRadius: 4, alignItems: "center" },
      message: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1  ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const informative = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.secondary, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { size: 16, name: "information", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const negative = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="self-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { size: 16, name: "Alert", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            showTooltipOnTruncate: false,
            className: " flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const error = (error2) => {
    lib$2.notification.open({
      style: { backgroundColor: colors.colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { size: 16, name: "Alert", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            showTooltipOnTruncate: false,
            weight: "medium",
            size: 16,
            className: " flex flex-1  ",
            color: colors.colors.white_ff,
            children: error2 || t("common.error.errorOccurred")
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const successfullyAdded = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyAdded") })
    });
  };
  const successfullyEdited = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyEdited") })
    });
  };
  const successfullyDeleted = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyDeleted") })
    });
  };
  const copied = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.copied") })
    });
  };
  return {
    success,
    neutral,
    negative,
    informative,
    successfullyAdded,
    successfullyEdited,
    successfullyDeleted,
    copied,
    error
  };
};
function clamp(v, min2, max2) {
  return Math.max(min2, Math.min(v, max2));
}
const V = {
  toVector(v, fallback) {
    if (v === void 0) v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min2, max2, constant = 0.15) {
  if (constant === 0) return clamp(position, min2, max2);
  if (position < min2) return -rubberband(min2 - position, max2 - min2, constant) + min2;
  if (position > max2) return +rubberband(position - max2, max2 - min2, constant) + max2;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
const EVENT_TYPE_MAP = {
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
function capitalize(string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
}
const actionsWithoutCaptureSupported = ["enter", "leave"];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = "", capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return "on" + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? "Capture" : "");
}
const pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf("passive");
  if (passive) eventKey = eventKey.replace("passive", "");
  const captureKey = pointerCaptureEvents.includes(eventKey) ? "capturecapture" : "capture";
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace("capture", "");
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = "") {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return "touches" in event;
}
function getPointerType(event) {
  if (isTouch(event)) return "touch";
  if ("pointerType" in event) return event.pointerType;
  return "mouse";
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e) => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function getTouchList(event) {
  return event.type === "touchend" || event.type === "touchcancel" ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P2) {
  try {
    const dx = P2.clientX - P1.clientX;
    const dy = P2.clientY - P1.clientY;
    const cx = (P2.clientX + P1.clientX) / 2;
    const cy = (P2.clientY + P1.clientY) / 2;
    const distance = Math.hypot(dx, dy);
    const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
    const origin = [cx, cy];
    return {
      angle,
      distance,
      origin
    };
  } catch (_unused) {
  }
  return null;
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
}
function touchDistanceAngle(event, ids2) {
  const [P1, P2] = Array.from(event.touches).filter((touch) => ids2.includes(touch.identifier));
  return distanceAngle(P1, P2);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
function wheelValues(event) {
  let {
    deltaX,
    deltaY,
    deltaMode
  } = event;
  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }
  return [deltaX, deltaY];
}
function scrollValues(event) {
  var _ref, _ref2;
  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ("buttons" in event) payload.buttons = event.buttons;
  if ("shiftKey" in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}
function call(v, ...args) {
  if (typeof v === "function") {
    return v(...args);
  } else {
    return v;
  }
}
function noop$1() {
}
function chain(...fns) {
  if (fns.length === 0) return noop$1;
  if (fns.length === 1) return fns[0];
  return function() {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
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
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = void 0;
    state.memo = void 0;
    state.elapsedTime = state.timeDelta = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
      state.startTime = state.timeStamp = event.timeStamp;
    }
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }
    if (this.axisIntent) this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ("bounds" in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
    state.delta = V.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        state.timeDelta = dt;
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== void 0) state.memo = memo;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
}
function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return "x";
  }
  if (absDy > absDx && absDy > threshold) {
    return "y";
  }
  return void 0;
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", "xy");
  }
  reset() {
    super.reset();
    this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === "object" ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }
    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case "x":
          v[1] = 0;
          break;
        case "y":
          v[0] = 0;
          break;
      }
    }
  }
}
const identity = (v) => v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === "function") return value;
    if (value != null) return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (process.env.NODE_ENV === "development") {
      const originalTransform = transform || identity;
      return (v) => {
        const r = originalTransform(v);
        if (!isFinite(r[0]) || !isFinite(r[1])) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`);
        }
        return r;
      };
    }
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (process.env.NODE_ENV === "development") {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
      }
      return NaN;
    },
    lockDirection(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
      }
      return NaN;
    },
    initial(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
      }
      return NaN;
    }
  });
}
const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === "lock";
    if (!this.lockDirection) return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === "function") {
      return (state) => coordinatesConfigResolver.bounds(value(state));
    }
    if ("current" in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});
const KEYS_DELTA_MAP = {
  ArrowRight: (displacement, factor = 1) => [displacement * factor, 0],
  ArrowLeft: (displacement, factor = 1) => [-1 * displacement * factor, 0],
  ArrowUp: (displacement, factor = 1) => [0, -1 * displacement * factor],
  ArrowDown: (displacement, factor = 1) => [0, displacement * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = void 0;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    const ctrlIds = this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScrollAxis && getPointerType(event) !== "mouse") {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V.sub(_values, state._values);
      this.computeValues(_values);
    }
    V.addTo(state._movement, state._delta);
    this.compute(event);
    if (state._delayed && state.intentional) {
      this.timeoutStore.remove("dragDelay");
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === "xy") {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag");
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. 

Please upgrade to the latest version.`);
      }
    }
    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [_dx, _dy] = state._delta;
      const [_mx, _my] = state._movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        const _vx = Math.abs(_dx / state.timeDelta);
        const _vy = Math.abs(_dy / state.timeDelta);
        if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx);
        if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy);
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    const device = config.device;
    if (process.env.NODE_ENV === "development") {
      try {
        if (device === "pointer" && config.preventScrollDelay === void 0) {
          const currentTarget = "uv" in event ? event.sourceEvent.currentTarget : event.currentTarget;
          const style = window.getComputedStyle(currentTarget);
          if (style.touchAction === "auto") {
            console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.

This message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
          }
        }
      } catch (_unused2) {
      }
    }
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "cancel", this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false;
    persistEvent(event);
    const remove = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", remove);
    this.eventStore.add(this.sharedConfig.window, "touch", "cancel", remove);
    this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      this.start(event);
      state._delta = deltaFn(this.config.keyboardDisplacement, factor);
      state._keyboardActive = true;
      V.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, "start", this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, "change", this.pointerMove.bind(this));
      bindFunction(device, "end", this.pointerUp.bind(this));
      bindFunction(device, "cancel", this.pointerUp.bind(this));
      bindFunction("lostPointerCapture", "", this.pointerUp.bind(this));
    }
    if (this.config.keys) {
      bindFunction("key", "down", this.keyDown.bind(this));
      bindFunction("key", "up", this.keyUp.bind(this));
    }
    if (this.config.filterTaps) {
      bindFunction("click", "", this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }
}
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
const isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
  return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};
const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_KEYBOARD_DISPLACEMENT = 10;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return "touch";
    if (this.pointerLock) return "mouse";
    if (SUPPORT.pointer && !mouse) return "pointer";
    if (SUPPORT.touch) return "touch";
    return "mouse";
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === "number" ? preventScroll : preventScroll || preventScroll === void 0 && value ? DEFAULT_PREVENT_SCROLL_DELAY : void 0;
    if (!SUPPORT.touchscreen || preventScroll === false) return void 0;
    return value ? value : preventScroll !== void 0 ? "y" : void 0;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1,
      keys = true
    } = {}
  }) {
    this.pointerButtons = buttons;
    this.keys = keys;
    return !this.pointerLock && this.device === "pointer" && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = void 0
  }) {
    const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  },
  keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
    return value;
  }
});
if (process.env.NODE_ENV === "development") {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
      }
      return NaN;
    },
    experimental_preventWindowScrollY(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
      }
      return NaN;
    },
    swipeVelocity(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
      }
      return NaN;
    },
    swipeDistance(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
      }
      return NaN;
    },
    swipeDuration(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
      }
      return NaN;
    }
  });
}
function clampStateInternalMovementToBounds(state) {
  const [ox, oy] = state.overflow;
  const [dx, dy] = state._delta;
  const [dirx, diry] = state._direction;
  if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
    state._movement[0] = state._movementBound[0];
  }
  if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
    state._movement[1] = state._movementBound[1];
  }
}
const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
const PINCH_WHEEL_RATIO = 100;
class PinchEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "pinching");
    _defineProperty(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0];
    this.state.lastOffset = [1, 0];
    this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const state = this.state;
    state._touchIds = [];
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
    state.turns = 0;
  }
  computeOffset() {
    const {
      type: type2,
      movement,
      lastOffset
    } = this.state;
    if (type2 === "wheel") {
      this.state.offset = V.add(movement, lastOffset);
    } else {
      this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
    }
  }
  computeMovement() {
    const {
      offset,
      lastOffset
    } = this.state;
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
  }
  axisIntent() {
    const state = this.state;
    const [_m0, _m1] = state._movement;
    if (!state.axis) {
      const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
      if (axisMovementDifference < 0) state.axis = "angle";
      else if (axisMovementDifference > 0) state.axis = "scale";
    }
  }
  restrictToAxis(v) {
    if (this.config.lockDirection) {
      if (this.state.axis === "scale") v[1] = 0;
      else if (this.state.axis === "angle") v[0] = 0;
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    setTimeout(() => {
      state.canceled = true;
      state._active = false;
      this.compute();
      this.emit();
    }, 0);
  }
  touchStart(event) {
    this.ctrl.setEventIds(event);
    const state = this.state;
    const ctrlTouchIds = this.ctrl.touchIds;
    if (state._active) {
      if (state._touchIds.every((id) => ctrlTouchIds.has(id))) return;
    }
    if (ctrlTouchIds.size < 2) return;
    this.start(event);
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
    const payload = touchDistanceAngle(event, state._touchIds);
    if (!payload) return;
    this.pinchStart(event, payload);
  }
  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(event);
    event.target.setPointerCapture(event.pointerId);
    const state = this.state;
    const _pointerEvents = state._pointerEvents;
    const ctrlPointerIds = this.ctrl.pointerIds;
    if (state._active) {
      if (Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id))) return;
    }
    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (state._pointerEvents.size < 2) return;
    this.start(event);
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    if (!payload) return;
    this.pinchStart(event, payload);
  }
  pinchStart(event, payload) {
    const state = this.state;
    state.origin = payload.origin;
    this.computeValues([payload.distance, payload.angle]);
    this.computeInitial();
    this.compute(event);
    this.emit();
  }
  touchMove(event) {
    if (!this.state._active) return;
    const payload = touchDistanceAngle(event, this.state._touchIds);
    if (!payload) return;
    this.pinchMove(event, payload);
  }
  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents;
    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (!this.state._active) return;
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    if (!payload) return;
    this.pinchMove(event, payload);
  }
  pinchMove(event, payload) {
    const state = this.state;
    const prev_a = state._values[1];
    const delta_a = payload.angle - prev_a;
    let delta_turns = 0;
    if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a);
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
    state.origin = payload.origin;
    state.turns = delta_turns;
    state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
    this.compute(event);
    this.emit();
  }
  touchEnd(event) {
    this.ctrl.setEventIds(event);
    if (!this.state._active) return;
    if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  pointerEnd(event) {
    const state = this.state;
    this.ctrl.setEventIds(event);
    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch (_unused) {
    }
    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId);
    }
    if (!state._active) return;
    if (state._pointerEvents.size < 2) {
      state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  gestureStart(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    if (state._active) return;
    this.start(event);
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  gestureMove(event) {
    if (event.cancelable) event.preventDefault();
    if (!this.state._active) return;
    const state = this.state;
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    const _previousMovement = state._movement;
    state._movement = [event.scale - 1, event.rotation];
    state._delta = V.sub(state._movement, _previousMovement);
    this.compute(event);
    this.emit();
  }
  gestureEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  wheel(event) {
    const modifierKey = this.config.modifierKey;
    if (modifierKey && (Array.isArray(modifierKey) ? !modifierKey.find((k) => event[k]) : !event[modifierKey])) return;
    if (!this.state._active) this.wheelStart(event);
    else this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelStart(event) {
    this.start(event);
    this.wheelChange(event);
  }
  wheelChange(event) {
    const isR3f = "uv" in event;
    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (process.env.NODE_ENV === "development" && !event.defaultPrevented) {
        console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.

This message will only appear in development mode.`);
      }
    }
    const state = this.state;
    state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
    V.addTo(state._movement, state._delta);
    clampStateInternalMovementToBounds(state);
    this.state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    if (!!device) {
      bindFunction(device, "start", this[device + "Start"].bind(this));
      bindFunction(device, "change", this[device + "Move"].bind(this));
      bindFunction(device, "end", this[device + "End"].bind(this));
      bindFunction(device, "cancel", this[device + "End"].bind(this));
      bindFunction("lostPointerCapture", "", this[device + "End"].bind(this));
    }
    if (this.config.pinchOnWheel) {
      bindFunction("wheel", "", this.wheel.bind(this), {
        passive: false
      });
    }
  }
}
const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return "gesture";
    if (SUPPORT.touch && touch) return "touch";
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return "pointer";
      if (SUPPORT.touch) return "touch";
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = (state) => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = (state) => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== "function" && typeof angleBounds !== "function") return [_scaleBounds(), _angleBounds()];
    return (state) => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === "lock";
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === void 0) return "ctrlKey";
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});
class MoveEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "moving");
  }
  move(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    if (!this.state._active) this.moveStart(event);
    else this.moveChange(event);
    this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
  }
  moveStart(event) {
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.computeInitial();
    this.emit();
  }
  moveChange(event) {
    if (!this.state._active) return;
    const values = pointerValues(event);
    const state = this.state;
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  moveEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "change", this.move.bind(this));
    bindFunction("pointer", "leave", this.moveEnd.bind(this));
  }
}
const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
class ScrollEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "scrolling");
  }
  scroll(event) {
    if (!this.state._active) this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  scrollEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("scroll", "", this.scroll.bind(this));
  }
}
const scrollConfigResolver = coordinatesConfigResolver;
class WheelEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "wheeling");
  }
  wheel(event) {
    if (!this.state._active) this.start(event);
    this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(event) {
    const state = this.state;
    state._delta = wheelValues(event);
    V.addTo(state._movement, state._delta);
    clampStateInternalMovementToBounds(state);
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("wheel", "", this.wheel.bind(this));
  }
}
const wheelConfigResolver = coordinatesConfigResolver;
class HoverEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "hovering");
  }
  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.emit();
  }
  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    const state = this.state;
    if (!state._active) return;
    state._active = false;
    const values = pointerValues(event);
    state._movement = state._delta = V.sub(values, state._values);
    this.computeValues(values);
    this.compute(event);
    state.delta = state.movement;
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "enter", this.enter.bind(this));
    bindFunction("pointer", "leave", this.leave.bind(this));
  }
}
const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
const EngineMap = /* @__PURE__ */ new Map();
const ConfigResolverMap = /* @__PURE__ */ new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
  key: "drag",
  engine: DragEngine,
  resolver: dragConfigResolver
};
const hoverAction = {
  key: "hover",
  engine: HoverEngine,
  resolver: hoverConfigResolver
};
const moveAction = {
  key: "move",
  engine: MoveEngine,
  resolver: moveConfigResolver
};
const pinchAction = {
  key: "pinch",
  engine: PinchEngine,
  resolver: pinchConfigResolver
};
const scrollAction = {
  key: "scroll",
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};
const wheelAction = {
  key: "wheel",
  engine: WheelEngine,
  resolver: wheelConfigResolver
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => "current" in value ? value.current : value;
    }
    return void 0;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : void 0) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};
const _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const r = resolver.call(result, config[key], key, config);
          if (!Number.isNaN(r)) result[key] = r;
        } else {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case "object":
        result[key] = resolveWith(config[key], resolver);
        break;
      case "boolean":
        if (resolver) result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse$1(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig, {
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (process.env.NODE_ENV === "development") {
        if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
          if (key === "domTarget") {
            throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
          }
          console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
        }
      }
    }
  }
  return _config;
}
class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, "_listeners", /* @__PURE__ */ new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type2 = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options);
    element.addEventListener(type2, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type2, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach((remove) => remove());
    this._listeners.clear();
  }
}
class TimeoutStore {
  constructor() {
    _defineProperty(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout) window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
}
class Controller {
  constructor(handlers) {
    _defineProperty(this, "gestures", /* @__PURE__ */ new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "touchIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ("pointerId" in event) {
      if (event.type === "pointerup" || event.type === "pointercancel") this.pointerIds.delete(event.pointerId);
      else if (event.type === "pointerdown") this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse$1(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine2 = EngineMap.get(gestureKey);
          new Engine2(this, args, gestureKey).bind(bindFunction);
        }
      }
      const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), void 0, true);
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }
    if (!target) return props;
    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, "", props[handlerProp], {
        capture,
        passive
      });
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, "drag");
  if (internalHandlers.wheel) setupGesture(ctrl, "wheel");
  if (internalHandlers.scroll) setupGesture(ctrl, "scroll");
  if (internalHandlers.move) setupGesture(ctrl, "move");
  if (internalHandlers.pinch) setupGesture(ctrl, "pinch");
  if (internalHandlers.hover) setupGesture(ctrl, "hover");
}
const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive) handlerProp += "Passive";
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};
const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function sortHandlers(_handlers) {
  const native = {};
  const handlers = {};
  const actions = /* @__PURE__ */ new Set();
  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handlers[key] = _handlers[key];
    } else {
      native[key] = _handlers[key];
    }
  }
  return [handlers, native, actions];
}
function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
  if (!actions.has(handlerKey)) return;
  if (!EngineMap.has(key)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.

Please add \`${key}Action\` when creating your handler.`);
    }
    return;
  }
  const startKey = handlerKey + "Start";
  const endKey = handlerKey + "End";
  const fn = (state) => {
    let memo = void 0;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };
  internalHandlers[key] = fn;
  config[key] = config[key] || {};
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
  const internalHandlers = {};
  registerGesture(actions, handlers, "onDrag", "drag", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onWheel", "wheel", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onScroll", "scroll", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onPinch", "pinch", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onMove", "move", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onHover", "hover", internalHandlers, mergedConfig);
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers
  };
}
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React.useEffect(ctrl.effect.bind(ctrl));
  React.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === void 0) {
    return ctrl.bind.bind(ctrl);
  }
  return void 0;
}
function createUseGesture(actions) {
  actions.forEach(registerAction);
  return function useGesture2(_handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = parseMergedHandlers(_handlers, _config || {});
    return useRecognizers(handlers, config, void 0, nativeHandlers);
  };
}
function useGesture(handlers, config) {
  const hook = createUseGesture([dragAction, pinchAction, scrollAction, wheelAction, moveAction, hoverAction]);
  return hook(handlers, {});
}
function useInteractions({
  onHover,
  onBlur,
  onFocus,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onKeyUp,
  ...handlers
} = {}) {
  const usedProperty = [];
  const [isFocused, setFocused] = React.useState(false);
  const [isHovered, setHovered] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [isTabFocused, setTabFocused] = React.useState(false);
  const eventHandlers = useGesture({
    ...handlers,
    // focus
    onFocus(...args) {
      usedProperty.includes("isFocused") && setFocused(true);
      onFocus?.(...args);
    },
    onBlur(...args) {
      usedProperty.includes("isFocused") && setFocused(false);
      usedProperty.includes("isTabFocused") && isTabFocused && setTabFocused(false);
      onBlur?.(...args);
    },
    // Hover
    onHover(hover) {
      const { hovering: isHovering } = hover;
      usedProperty.includes("isHovered") && setHovered(Boolean(isHovering));
      onHover?.(hover);
    },
    // Active
    onMouseDown(...args) {
      usedProperty.includes("isActive") && setActive(true);
      onMouseDown?.(...args);
    },
    onMouseUp(...args) {
      usedProperty.includes("isActive") && setActive(false);
      onMouseUp?.(...args);
    },
    onMouseLeave(...args) {
      usedProperty.includes("isActive") && setActive(false);
      onMouseLeave?.(...args);
    },
    onKeyUp(state, ...args) {
      const { event } = state;
      if (event.key === "Tab") {
        usedProperty.includes("isTabFocused") && setTabFocused(true);
      }
      onKeyUp?.(state, ...args);
    }
  });
  const target = {
    eventHandlers,
    isFocused,
    isHovered,
    isActive,
    isTabFocused
  };
  const proxyHandler = {
    get: function(target2, prop) {
      usedProperty.push(prop);
      return target2[prop];
    }
  };
  const proxy3 = new Proxy(target, proxyHandler);
  return proxy3;
}
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = typeof window === "undefined" ? {
    innerWidth: 1024,
    innerHeight: 768
  } : window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  const targetProps = [];
  const handleResize = () => {
    const { width, height } = getWindowDimensions();
    if (width !== windowDimensions.width && targetProps.includes("width") || height !== windowDimensions.height && targetProps.includes("height")) {
      setWindowDimensions({ width, height });
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return new Proxy(windowDimensions, {
    get(target, prop) {
      targetProps.push(prop);
      return target[prop];
    }
  });
}
const SelectClearIcon = () => {
  const { i18n } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Icon,
    {
      name: "Close_Circle",
      size: 18,
      className: "text-light-1 hover:text-secondary",
      style: {
        position: "absolute",
        right: i18n.language === "fa" ? -10 : 20,
        top: -3,
        width: "fit-content"
      }
    }
  );
};
const SelectLabel = ({
  disabled,
  label,
  labelExtraNode,
  required,
  size,
  offset = 0
}) => {
  if (!label) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      className: "flex flex-row items-center justify-between",
      style: { marginBlockEnd: offset },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: false, align: "center", gap: 1, children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
            index.Text,
            {
              className: "h-[24px]",
              weight: "normal",
              size: size === "medium" ? 14 : 12,
              color: disabled ? colors.colors.primary_light_2 : colors.colors.primary,
              children: label
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: label }),
          /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        labelExtraNode
      ]
    }
  );
};
const SelectNotFound = ({ error, noContentFoundMessage }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "alert-line", size: 24, color: colors.colors.negative_light_2 }) : /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Search_fail", size: 24, color: colors.colors.primary_light_3 }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 14, color: error?.message ? colors.colors.negative : colors.colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t("common.literal.listError") : t("common.message.noResultFound") })
  ] });
};
const SelectPlaceholder = ({
  placeholder,
  isHovered,
  disabled,
  isTabFocused
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Text,
    {
      weight: "normal",
      size: 14,
      color: disabled ? colors.colors.primary_light_2 : isHovered || isTabFocused ? colors.colors.primary_dark_1 : colors.colors.primary_light_3,
      children: placeholder
    }
  );
};
const SelectSuffix = ({ isHovered, isTabFocused, disabled, error }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", gap: 8, children: [
    error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Alert", size: 18, color: colors.colors.negative }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.Icon,
      {
        name: "Chevron_Down",
        size: 18,
        color: disabled ? colors.colors.primary_light_2 : isHovered || isTabFocused ? colors.colors.primary_dark_1 : colors.colors.primary_dark_1
      }
    )
  ] });
};
const CustomizedAntSelectConfig = {
  components: {
    Select: {
      multipleItemBg: colors.colors.light_1,
      multipleItemBorderColor: colors.colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.colors.primary_light_3,
      multipleItemColorDisabled: colors.colors.negative,
      multipleItemHeight: 20,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.colors.light_1,
      optionActiveBg: colors.colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.colors.primary_light_3
    }
  }
};
const generateSelectClassNames$1 = ({
  size = "medium",
  error,
  disabled,
  isTabFocused
}) => {
  const extraOverrides = {
    small: "h-[34px] [&_input]:!h-[32px]",
    medium: "h-[40px] [&_input]:!h-[38px]",
    large: "h-[46px] [&_input]:!h-[44px]"
  };
  return tailwindMerge.twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    extraOverrides[size],
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
};
const { Option: Option$2 } = antd.Select;
const MultipleSelect = React.forwardRef(
  ({
    error,
    className,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    open,
    showSearch = false,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    tagExtractor = (item) => item.label,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    wrapperClassName,
    disabled = false,
    loading = false,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear,
    header,
    footer,
    infinite,
    hasError,
    addonBefore,
    addonAfter,
    required,
    lang,
    disableOutsideScroll,
    hideErrorMessage = false,
    getTagProps,
    ...rest
  }, ref2) => {
    const { t } = reactI18next.useTranslation();
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = React.useState(false);
    const memoizedSelectedOptions = React.useRef(
      new Map(value?.map((v) => [valueExtractor(v), v]))
    );
    const _value = React.useMemo(() => {
      const selectedItems = [];
      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }
      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, valueExtractor]);
    const currentSelectedItems = React.useMemo(() => {
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      const unMappedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      const currents = unMappedOptions?.filter((item) => _value.some((i) => i === valueExtractor(item))) || [];
      return currents.map((cur) => ({ value: valueExtractor(cur), label: tagExtractor(cur) }));
    }, [_value, valueExtractor, tagExtractor]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const _onChange = (items) => {
      const mappedOptions = new Map(options?.map((option) => [valueExtractor(option), option]));
      const mappedItems = new Set(items);
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      items.forEach((item) => {
        if (mappedOptions.has(item)) {
          const option = mappedOptions.get(item);
          mappedSelectedOptions.set(valueExtractor(option), option);
        }
      });
      const unMappedSelectedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      unMappedSelectedOptions.forEach((option) => {
        if (!mappedItems.has(valueExtractor(option)))
          mappedSelectedOptions.delete(valueExtractor(option));
      });
      const selectedOptions = [];
      [...mappedSelectedOptions].forEach(([id, option]) => {
        selectedOptions.push(option);
      });
      onChange?.(selectedOptions);
      const itemsValue = items.map((i) => i);
      onChangeValue?.(itemsValue);
    };
    const _renderItem = React.useCallback(
      ({
        item,
        index: index$1,
        isActive,
        disabled: disabled2
      }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsxRuntime.jsx(
          index.Flex,
          {
            className: tailwindMerge.twMerge(
              "cursor-pointer",
              disabled2 && "pointer-events-none cursor-default opacity-50"
            ),
            onClick: () => {
              const convertedValueToMatchOnChange = _value.map((i) => i);
              if (convertedValueToMatchOnChange.some((i) => i === valueExtractor(item))) {
                _onChange(convertedValueToMatchOnChange.filter((i) => i !== valueExtractor(item)));
              } else {
                _onChange([...convertedValueToMatchOnChange, valueExtractor(item)]);
              }
            },
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Checkbox, { checked: isActive }),
              renderItem(item, index$1, isActive, disabled2)
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, className: tailwindMerge.twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsxRuntime.jsx(Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
                index.Text,
                {
                  weight: isActive ? "bold" : "normal",
                  color: colors.colors.primary_dark_1,
                  lang,
                  className: "max-w-full overflow-hidden text-ellipsis",
                  children: extractedLabel
                }
              ) : extractedLabel
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, renderItem]
    );
    const scrollHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains("rc-virtual-list-holder")) {
        setIsOpen(false);
      }
    };
    React.useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ...rest,
                mode: "multiple",
                menuItemSelectedIcon: null,
                ref: ref2,
                className: tailwindMerge.twMerge(
                  `${generateSelectClassNames$1({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                disabled,
                ...eventHandlers(),
                showSearch,
                bordered: false,
                maxTagCount: 0,
                maxTagPlaceholder: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { children: t("common.message.itemsSelectedWithCount", { count: _value.length }) }),
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value,
                onDropdownVisibleChange: onVisibleChange,
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                loading: false,
                open: disabled ? false : open === void 0 ? isOpen : open,
                optionLabelProp: "valueRender",
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 24 }) });
                  }
                  const tags = /* @__PURE__ */ jsxRuntime.jsx(
                    index.Flex,
                    {
                      align: "center",
                      gap: 8,
                      className: "tiny-custom-scrollbar-horizontal border-b-light-7 flex-1 overflow-x-auto border-b p-3",
                      children: currentSelectedItems.map((i) => {
                        return /* @__PURE__ */ jsxRuntime.jsx(
                          Tag,
                          {
                            closable: true,
                            className: "!min-w-max",
                            title: i.label || "",
                            onClose: () => {
                              const filteredItems = _value?.filter((x) => i?.value !== x);
                              _onChange(filteredItems);
                            },
                            ...getTagProps?.(i)
                          },
                          i.value
                        );
                      })
                    }
                  );
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index: index2, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                children: options?.map((item, index2) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option$2,
                    {
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({
                        index: index2,
                        item,
                        isActive,
                        disabled: disableExtractor ? disableExtractor(item) : false
                      })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const { Option: Option$1 } = antd.Select;
const SingleSelect = React.forwardRef(
  ({
    error,
    className,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    open,
    showSearch = false,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    onClickItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    wrapperClassName,
    disabled = false,
    loading = false,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear,
    header,
    footer,
    infinite,
    hasError,
    addonBefore,
    addonAfter,
    required,
    labelOffset = 0,
    lang,
    style,
    hideErrorMessage = false,
    suffixIcon,
    isLocaleSearch = false,
    disableOutsideScroll,
    ...rest
  }, ref2) => {
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = React.useState(false);
    const _value = React.useMemo(() => {
      let selectItem = null;
      if (selectedValue) {
        const item = options?.find((option) => valueExtractor(option) === selectedValue);
        if (item) {
          selectItem = item;
        }
      }
      if (value) {
        selectItem = value;
      }
      if (selectItem) return valueExtractor(selectItem);
      return selectItem;
    }, [options, selectedValue, value, valueExtractor]);
    const _label = React.useMemo(() => {
      const current = options?.find((item) => valueExtractor(item) === _value) ?? value;
      if (!current) return null;
      return labelExtractor(current);
    }, [_value, options, labelExtractor, valueExtractor, value]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const _onChange = (selected) => {
      if (!selected?.value) {
        return onChange?.(null);
      }
      if (selected) onChangeValue?.(selected.value || "");
      const original = options?.find(
        (item) => valueExtractor(item) === selected?.value
      );
      onChange?.(original);
    };
    const _renderItem = React.useCallback(
      ({ item, index: index$1, isActive }) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          index.Flex,
          {
            className: "cursor-pointer",
            onClick: () => {
              _onChange({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item)
              });
              onClickItem?.({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item)
              });
              setIsOpen(false);
            },
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "min-h-[32px] w-full flex-1 items-center justify-between", children: renderItem(item, index$1, isActive) }) : /* @__PURE__ */ jsxRuntime.jsxs(
              index.Flex,
              {
                className: tailwindMerge.twMerge(
                  "h-10 w-full flex-1 items-center justify-between border-r-2 border-r-transparent px-4",
                  "hover:border-r-primary hover:border-r-2"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index.Text,
                    {
                      weight: isActive ? "bold" : "normal",
                      color: colors.colors.primary_dark_1,
                      lang: lang || colors.i18nInstance.language,
                      className: "max-w-full overflow-hidden text-ellipsis",
                      children: labelExtractor(item)
                    }
                  ),
                  isActive && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Checkmark", color: colors.colors.positive })
                ]
              }
            )
          },
          valueExtractor(item)
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [labelExtractor, renderItem, valueExtractor]
    );
    const scrollHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains("rc-virtual-list-holder")) {
        setIsOpen(false);
      }
    };
    React.useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            SelectLabel,
            {
              ...{ disabled, label, labelExtraNode, required, size, offset: labelOffset }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ref: ref2,
                className: tailwindMerge.twMerge(
                  `${generateSelectClassNames$1({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                disabled,
                ...eventHandlers(),
                ...rest,
                showSearch,
                style,
                variant: "borderless",
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: suffixIcon ?? /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                labelInValue: true,
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value ? { value: _value, label: _label } : void 0,
                onDropdownVisibleChange: onVisibleChange,
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                loading: false,
                open: disabled ? false : open === void 0 ? isOpen : open,
                onChange: _onChange,
                optionLabelProp: "valueRender",
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value && _value === valueExtractor(item);
                              return _renderItem({ index: index2, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                filterOption: isLocaleSearch ? (input, option) => {
                  if (!input || !option) return true;
                  const label2 = option.label;
                  return typeof label2 === "string" && label2.toLowerCase().includes(input.toLowerCase());
                } : false,
                children: options?.map((item, index$1) => {
                  const isActive = !!_value && _value === valueExtractor(item);
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option$1,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      valueRender: renderSelectedItem ? renderSelectedItem(item) : /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: colors.colors.primary_dark_1, lang: lang || colors.i18nInstance.language, children: labelExtractor(item) }),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index: index$1, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const Tag = ({
  closable,
  onClose,
  imageSrc,
  title,
  disabled,
  className,
  style,
  autoSlice = true,
  sliceLength = 10
}) => {
  const { isHovered, isActive, eventHandlers } = useInteractions();
  const getColor = () => {
    if (disabled) {
      return colors.colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.colors.primary_dark_1;
    }
    return colors.colors.primary;
  };
  const getIconColor = () => {
    if (disabled) {
      return colors.colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.colors.primary_dark_1;
    }
    return colors.colors.primary_light_3;
  };
  const getBorder = () => {
    const baseBorder = `1px solid`;
    if (disabled) {
      return baseBorder + colors.colors.light_6;
    }
    if (isActive || isHovered) {
      return baseBorder + colors.colors.primary_dark_1;
    }
    return baseBorder + colors.colors.primary_light_3;
  };
  const renderTitle = () => {
    if (autoSlice && title?.length > sliceLength) {
      return title.slice(0, sliceLength) + "...";
    } else {
      return title;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tooltip,
    {
      color: colors.colors.primary_dark_1,
      title: title?.length > 10 ? title : void 0,
      autoAdjustOverflow: true,
      style: { width: "auto" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index.Flex,
        {
          align: "center",
          justify: "center",
          tabIndex: 0,
          className: tailwindMerge.twMerge(
            " bg-light-1 h-[26px] max-h-[26px] rounded border  px-2 py-1 focus-visible:outline-none",
            disabled && "bg-light-6 cursor-not-allowed ",
            className
          ),
          style: {
            border: getBorder(),
            ...style
          },
          ...eventHandlers(),
          children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", children: [
            imageSrc && /* @__PURE__ */ jsxRuntime.jsx(index.Image, { preview: false, src: imageSrc, className: "me-2 h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx(index.Text, { color: getColor(), className: "cursor-default", children: renderTitle() }),
            closable && /* @__PURE__ */ jsxRuntime.jsx(
              index.Icon,
              {
                color: getIconColor(),
                name: "Close",
                size: "xsmall",
                className: "ms-2 cursor-pointer",
                onClick: onClose
              }
            )
          ] })
        }
      )
    }
  );
};
const PlusTreeSelect = ({
  initialValue,
  value: valueProps,
  label,
  beforeLabelIcon,
  renderPrefix,
  treeData,
  placeholder,
  treeDefaultExpandAll,
  warning,
  disabled = false,
  searchable,
  addable,
  multiple,
  onChange,
  onAddButtonClick,
  renderItem,
  className,
  style,
  onTreeExpand,
  onSearch,
  localSearch = true,
  wrapperClassName,
  error,
  required,
  size = "medium",
  labelOffset,
  hasError,
  addonBefore,
  popupClassName,
  header,
  footer,
  onSelect,
  onDeselect,
  treeDataHashMap,
  ...rest
}) => {
  const [items, setitmes] = React.useState(treeData);
  const [isLoading, setLoading] = React.useState(true);
  const { t } = reactI18next.useTranslation();
  const [selectedItems, setselectedItems] = React.useState(
    initialValue ? initialValue : []
  );
  const value = valueProps ? Array.isArray(valueProps) ? valueProps : [valueProps] : selectedItems;
  const { isTabFocused, eventHandlers } = useInteractions();
  React.useEffect(() => {
    if (treeData === null) {
      setLoading(true);
      setitmes([]);
    }
    if (treeData?.length === 0) {
      setLoading(false);
      setitmes([]);
    }
    if (treeData?.length > 0) {
      setLoading(false);
      setitmes(treeData);
    }
  }, [treeData]);
  const renderDropDownContent = (menu) => {
    const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
      header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
      /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
      footer && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, flex: 1, align: "center", className: "border-light-7 border-t px-4 py-2", children: footer })
    ] });
    return dropdown;
  };
  const renderTree = (item) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      antd.TreeSelect.TreeNode,
      {
        title: renderItem ? renderItem(item) : /* @__PURE__ */ jsxRuntime.jsx(index.Text, { lang: "fa", color: colors.colors.primary_dark_1, children: item.label }),
        value: item.value,
        label: item.label,
        checkable: item.checkable,
        children: [
          item.hasChildren && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "none" }, children: "blank children for showing switcher icon" }),
          item.children && item.children.map((opt) => renderTree(opt))
        ]
      },
      item.value
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { style, ...eventHandlers(), className: tailwindMerge.twMerge("flex-col", wrapperClassName), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, required, size, offset: labelOffset } }),
    /* @__PURE__ */ jsxRuntime.jsxs(lib$2.ConfigProvider, { children: [
      addonBefore,
      /* @__PURE__ */ jsxRuntime.jsx(
        antd.TreeSelect,
        {
          listItemHeight: 50,
          className: tailwindMerge.twMerge(
            `${generateSelectClassNames$1({
              size,
              error: !!error?.message || hasError,
              disabled,
              isTabFocused
            })}`,
            className,
            "flex-none [&_.ant-select-selector]:!border-none"
          ),
          popupClassName: tailwindMerge.twMerge(
            "p-0 small-custom-scrollbar [&_.ant-select-selector]:!border-none [&_.ant-select-tree-node-content-wrapper]:!p-0 [&_.ant-select-tree-node-selected]:!bg-light-1 [&_.ant-select-tree-treenode]:!h-10 z-[1000]",
            popupClassName
          ),
          showSearch: false,
          onTreeExpand: (expandedKeys) => {
            onTreeExpand(expandedKeys.map((key) => String(key)));
          },
          treeDefaultExpandAll,
          disabled,
          treeCheckable: multiple,
          showCheckedStrategy: antd.TreeSelect.SHOW_PARENT,
          labelInValue: true,
          value,
          suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ disabled, isTabFocused, error } }),
          tagRender: (props) => {
            return value && value?.length < 3 ? /* @__PURE__ */ jsxRuntime.jsx(Tag, { title: props.label, ...props }) : props.value === value?.[0].value ? /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              value.length,
              " ",
              t("common.message.itemSelected")
            ] }) : null;
          },
          treeNodeLabelProp: "label",
          notFoundContent: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(index.Loading, {}) : /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, {}),
          onChange: (value2) => {
            let values = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              values = value2.map((v) => treeDataHashMap?.get(v.value) ?? v);
            }
            setselectedItems(values);
            onChange?.(values);
          },
          onSelect: (value2) => {
            const _value = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onSelect?.(
                treeDataHashMap.get(_value) || {},
                value2
              );
            } else {
              onSelect?.(
                items.find((item) => item.value === _value) || {},
                value2
              );
            }
          },
          placeholder,
          dropdownRender: renderDropDownContent,
          onInputKeyDown: (event) => {
            if (event.key === "Backspace") {
              event.stopPropagation();
            }
          },
          onDeselect: (value2) => {
            const _value = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onDeselect?.(
                treeDataHashMap.get(_value) || {},
                value2
              );
            } else {
              onDeselect?.(
                items.find((item) => item.value === _value) || {},
                value2
              );
            }
          },
          ...rest,
          children: items.map((item) => {
            return renderTree(item);
          })
        }
      )
    ] })
  ] });
};
const Select = batch({ Single: SingleSelect, Multiple: MultipleSelect, Tree: PlusTreeSelect });
function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return React.useMemo(
    () => (node) => {
      refs.forEach((ref2) => ref2(node));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
const canUseDOM$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
  elementString === "[object global]";
}
function isNode(node) {
  return "nodeType" in node;
}
function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;
  if (!target) {
    return window;
  }
  if (isWindow(target)) {
    return target;
  }
  if (!isNode(target)) {
    return window;
  }
  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}
function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }
  return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
  if (!target) {
    return document;
  }
  if (isWindow(target)) {
    return target.document;
  }
  if (!isNode(target)) {
    return document;
  }
  if (isDocument(target)) {
    return target;
  }
  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }
  return document;
}
const useIsomorphicLayoutEffect = canUseDOM$1 ? React.useLayoutEffect : React.useEffect;
function useEvent(handler) {
  const handlerRef = React.useRef(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}
function useInterval() {
  const intervalRef = React.useRef(null);
  const set = React.useCallback((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = React.useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}
function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }
  const valueRef = React.useRef(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}
function useLazyMemo(callback, dependencies) {
  const valueRef = React.useRef();
  return React.useMemo(
    () => {
      const newValue = callback(valueRef.current);
      valueRef.current = newValue;
      return newValue;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...dependencies]
  );
}
function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = React.useRef(null);
  const setNodeRef = React.useCallback(
    (element) => {
      if (element !== node.current) {
        onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
      }
      node.current = element;
    },
    //eslint-disable-next-line
    []
  );
  return [node, setNodeRef];
}
function usePrevious(value) {
  const ref2 = React.useRef();
  React.useEffect(() => {
    ref2.current = value;
  }, [value]);
  return ref2.current;
}
let ids = {};
function useUniqueId(prefix, value) {
  return React.useMemo(() => {
    if (value) {
      return value;
    }
    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}
function createAdjustmentFn(modifier) {
  return function(object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);
      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];
        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }
      return accumulator;
    }, {
      ...object
    });
  };
}
const add = /* @__PURE__ */ createAdjustmentFn(1);
const subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
  return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }
  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
  if (!event) {
    return false;
  }
  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}
function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }
  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return null;
}
const CSS = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }
  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }
      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
    }
  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }
  }
});
const SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }
  return element.querySelector(SELECTOR);
}
const hiddenStyles = {
  display: "none"
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return React.createElement("div", {
    id,
    style: hiddenStyles
  }, value);
}
function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  const visuallyHidden = {
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
  return React.createElement("div", {
    id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}
function useAnnouncement() {
  const [announcement, setAnnouncement] = React.useState("");
  const announce = React.useCallback((value) => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}
const DndMonitorContext = /* @__PURE__ */ React.createContext(null);
function useDndMonitor(listener) {
  const registerListener = React.useContext(DndMonitorContext);
  React.useEffect(() => {
    if (!registerListener) {
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    }
    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}
function useDndMonitorProvider() {
  const [listeners] = React.useState(() => /* @__PURE__ */ new Set());
  const registerListener = React.useCallback((listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = React.useCallback((_ref) => {
    let {
      type: type2,
      event
    } = _ref;
    listeners.forEach((listener) => {
      var _listener$type;
      return (_listener$type = listener[type2]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}
const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },
  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;
    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }
    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },
  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;
    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }
    return "Draggable item " + active.id + " was dropped.";
  },
  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }
};
function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = useUniqueId("DndLiveRegion");
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  useDndMonitor(React.useMemo(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },
    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;
      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },
    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },
    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },
    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }
  }), [announce, announcements]));
  if (!mounted) {
    return null;
  }
  const markup = React.createElement(React.Fragment, null, React.createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), React.createElement(LiveRegion, {
    id: liveRegionId,
    announcement
  }));
  return container ? require$$2.createPortal(markup, container) : markup;
}
var Action;
(function(Action2) {
  Action2["DragStart"] = "dragStart";
  Action2["DragMove"] = "dragMove";
  Action2["DragEnd"] = "dragEnd";
  Action2["DragCancel"] = "dragCancel";
  Action2["DragOver"] = "dragOver";
  Action2["RegisterDroppable"] = "registerDroppable";
  Action2["SetDroppableDisabled"] = "setDroppableDisabled";
  Action2["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {
}
function useSensor(sensor, options) {
  return React.useMemo(
    () => ({
      sensor,
      options: options != null ? options : {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sensor, options]
  );
}
function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }
  return React.useMemo(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...sensors]
  );
}
const defaultCoordinates = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }
  const [firstCollision] = collisions;
  return firstCollision[property];
}
function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
}
const rectIntersection = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
  return {
    ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}
function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((acc, adjustment) => ({
      ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), {
      ...rect
    });
  };
}
const getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(transform) {
  if (transform.startsWith("matrix3d(")) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith("matrix(")) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }
  return null;
}
function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);
  if (!parsedTransform) {
    return rect;
  }
  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}
const defaultOptions = {
  ignoreTransform: false
};
function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  let rect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = getWindow(element).getComputedStyle(element);
    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }
  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}
function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}
function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(node).getComputedStyle(node);
  }
  return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(element).getComputedStyle(element);
  }
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties2 = ["overflow", "overflowX", "overflowY"];
  return properties2.some((property) => {
    const value = computedStyle[property];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}
function getScrollableAncestors(element, limit) {
  const scrollParents = [];
  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }
    if (!node) {
      return scrollParents;
    }
    if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }
    if (!isHTMLElement(node) || isSVGElement(node)) {
      return scrollParents;
    }
    if (scrollParents.includes(node)) {
      return scrollParents;
    }
    const computedStyle = getWindow(element).getComputedStyle(node);
    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }
    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }
    return findScrollableAncestors(node.parentNode);
  }
  if (!element) {
    return scrollParents;
  }
  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
  if (!canUseDOM$1 || !element) {
    return null;
  }
  if (isWindow(element)) {
    return element;
  }
  if (!isNode(element)) {
    return null;
  }
  if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) {
    return window;
  }
  if (isHTMLElement(element)) {
    return element;
  }
  return null;
}
function getScrollXCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollX;
  }
  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollY;
  }
  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
  if (!canUseDOM$1 || !element) {
    return false;
  }
  return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}
const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;
  if (acceleration === void 0) {
    acceleration = 10;
  }
  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };
  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }
  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }
  return {
    direction,
    speed
  };
}
function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }
  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}
function scrollIntoViewIfNeeded(element, measure2) {
  if (measure2 === void 0) {
    measure2 = getClientRect;
  }
  if (!element) {
    return;
  }
  const {
    top,
    left,
    bottom,
    right
  } = measure2(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);
  if (!firstScrollableAncestor) {
    return;
  }
  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: "center",
      inline: "center"
    });
  }
}
const properties = [["x", ["left", "right"], getScrollXOffset], ["y", ["top", "bottom"], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = {
      ...rect
    };
    this.width = rect.width;
    this.height = rect.height;
    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }
    Object.defineProperty(this, "rect", {
      enumerable: false
    });
  }
}
class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach((listener) => {
        var _this$target;
        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };
    this.target = target;
  }
  add(eventName, handler, options) {
    var _this$target2;
    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }
}
function getEventListenerTarget(target) {
  const {
    EventTarget
  } = getWindow(target);
  return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);
  if (typeof measurement === "number") {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }
  if ("x" in measurement && "y" in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }
  if ("x" in measurement) {
    return dx > measurement.x;
  }
  if ("y" in measurement) {
    return dy > measurement.y;
  }
  return false;
}
var EventName;
(function(EventName2) {
  EventName2["Click"] = "click";
  EventName2["DragStart"] = "dragstart";
  EventName2["Keydown"] = "keydown";
  EventName2["ContextMenu"] = "contextmenu";
  EventName2["Resize"] = "resize";
  EventName2["SelectionChange"] = "selectionchange";
  EventName2["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode2) {
  KeyboardCode2["Space"] = "Space";
  KeyboardCode2["Down"] = "ArrowDown";
  KeyboardCode2["Right"] = "ArrowRight";
  KeyboardCode2["Left"] = "ArrowLeft";
  KeyboardCode2["Up"] = "ArrowUp";
  KeyboardCode2["Esc"] = "Escape";
  KeyboardCode2["Enter"] = "Enter";
  KeyboardCode2["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;
  switch (event.code) {
    case KeyboardCode.Right:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x + 25
      };
    case KeyboardCode.Left:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x - 25
      };
    case KeyboardCode.Down:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y + 25
      };
    case KeyboardCode.Up:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }
  return void 0;
};
class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;
    if (node) {
      scrollIntoViewIfNeeded(node);
    }
    onStart(defaultCoordinates);
  }
  handleKeyDown(event) {
    if (isKeyboardEvent(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = "smooth"
      } = options;
      const {
        code
      } = event;
      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }
      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }
      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;
      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }
      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });
      if (newCoordinates) {
        const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;
        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }
            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }
            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }
            break;
          }
        }
        this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }
  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }
  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }
  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
}
KeyboardSensor.activators = [{
  eventName: "onKeyDown",
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;
    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;
      if (activator && event.target !== activator) {
        return false;
      }
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }
    return false;
  }
}];
function isDistanceConstraint(constraint) {
  return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
  return Boolean(constraint && "delay" in constraint);
}
class AbstractPointerSensor {
  constructor(props, events2, listenerTarget) {
    var _getEventCoordinates;
    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }
    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events2;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events2;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    const {
      events: events2,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events2.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events2.end.name, this.handleEnd);
    if (events2.cancel) {
      this.listeners.add(events2.cancel.name, this.handleCancel);
    }
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);
    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }
      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }
      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  handlePending(constraint, offset) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }
  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;
    if (initialCoordinates) {
      this.activated = true;
      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      });
      this.removeTextSelection();
      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }
  handleMove(event) {
    var _getEventCoordinates2;
    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;
    if (!initialCoordinates) {
      return;
    }
    const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = subtract(initialCoordinates, coordinates);
    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }
      this.handlePending(activationConstraint, delta);
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    onMove(coordinates);
  }
  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onEnd();
  }
  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onCancel();
  }
  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }
  removeTextSelection() {
    var _this$document$getSel;
    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }
}
const events = {
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
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props;
    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }
}
PointerSensor.activators = [{
  eventName: "onPointerDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
const events$1 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }
}
MouseSensor.activators = [{
  eventName: "onMouseDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (event.button === MouseButton.RightClick) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
const events$2 = {
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
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }
  static setup() {
    window.addEventListener(events$2.move.name, noop2, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop2);
    };
    function noop2() {
    }
  }
}
TouchSensor.activators = [{
  eventName: "onTouchStart",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;
    if (touches.length > 1) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var AutoScrollActivator;
(function(AutoScrollActivator2) {
  AutoScrollActivator2[AutoScrollActivator2["Pointer"] = 0] = "Pointer";
  AutoScrollActivator2[AutoScrollActivator2["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder2) {
  TraversalOrder2[TraversalOrder2["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder2[TraversalOrder2["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = React.useRef({
    x: 0,
    y: 0
  });
  const scrollDirection = React.useRef({
    x: 0,
    y: 0
  });
  const rect = React.useMemo(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;
      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = React.useRef(null);
  const autoScroll = React.useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = React.useMemo(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  React.useEffect(
    () => {
      if (!enabled || !scrollableAncestors.length || !rect) {
        clearAutoScrollInterval();
        return;
      }
      for (const scrollContainer of sortedScrollableAncestors) {
        if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
          continue;
        }
        const index2 = scrollableAncestors.indexOf(scrollContainer);
        const scrollContainerRect = scrollableAncestorRects[index2];
        if (!scrollContainerRect) {
          continue;
        }
        const {
          direction,
          speed
        } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
        for (const axis of ["x", "y"]) {
          if (!scrollIntent[axis][direction[axis]]) {
            speed[axis] = 0;
            direction[axis] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          clearAutoScrollInterval();
          scrollContainerRef.current = scrollContainer;
          setAutoScrollInterval(autoScroll, interval);
          scrollSpeed.current = speed;
          scrollDirection.current = direction;
          return;
        }
      }
      scrollSpeed.current = {
        x: 0,
        y: 0
      };
      scrollDirection.current = {
        x: 0,
        y: 0
      };
      clearAutoScrollInterval();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      acceleration,
      autoScroll,
      canScroll,
      clearAutoScrollInterval,
      enabled,
      interval,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(rect),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(scrollIntent),
      setAutoScrollInterval,
      scrollableAncestors,
      sortedScrollableAncestors,
      scrollableAncestorRects,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(threshold)
    ]
  );
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};
function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = usePrevious(delta);
  return useLazyMemo((previousIntent) => {
    if (disabled || !previousDelta || !previousIntent) {
      return defaultScrollIntent;
    }
    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    };
    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}
function useCachedNode(draggableNodes, id) {
  const draggableNode = id != null ? draggableNodes.get(id) : void 0;
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo((cachedNode) => {
    var _ref;
    if (id == null) {
      return null;
    }
    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
  return React.useMemo(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map((activator) => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy2) {
  MeasuringStrategy2[MeasuringStrategy2["Always"] = 0] = "Always";
  MeasuringStrategy2[MeasuringStrategy2["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy2[MeasuringStrategy2["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency2) {
  MeasuringFrequency2["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
const defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = React.useState(null);
  const {
    frequency,
    measure: measure2,
    strategy
  } = config;
  const containersRef = React.useRef(containers);
  const disabled = isDisabled();
  const disabledRef = useLatestValue(disabled);
  const measureDroppableContainers = React.useCallback(function(ids2) {
    if (ids2 === void 0) {
      ids2 = [];
    }
    if (disabledRef.current) {
      return;
    }
    setQueue((value) => {
      if (value === null) {
        return ids2;
      }
      return value.concat(ids2.filter((id) => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = React.useRef(null);
  const droppableRects = useLazyMemo((previousValue) => {
    if (disabled && !dragging) {
      return defaultValue;
    }
    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = /* @__PURE__ */ new Map();
      for (let container of containers) {
        if (!container) {
          continue;
        }
        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          map.set(container.id, container.rect.current);
          continue;
        }
        const node = container.node.current;
        const rect = node ? new Rect(measure2(node), node) : null;
        container.rect.current = rect;
        if (rect) {
          map.set(container.id, rect);
        }
      }
      return map;
    }
    return previousValue;
  }, [containers, queue, dragging, disabled, measure2]);
  React.useEffect(() => {
    containersRef.current = containers;
  }, [containers]);
  React.useEffect(
    () => {
      if (disabled) {
        return;
      }
      measureDroppableContainers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dragging, disabled]
  );
  React.useEffect(
    () => {
      if (queue && queue.length > 0) {
        setQueue(null);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(queue)]
  );
  React.useEffect(
    () => {
      if (disabled || typeof frequency !== "number" || timeoutId.current !== null) {
        return;
      }
      timeoutId.current = setTimeout(() => {
        measureDroppableContainers();
        timeoutId.current = null;
      }, frequency);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frequency, disabled, measureDroppableContainers, ...dependencies]
  );
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };
  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;
      case MeasuringStrategy.BeforeDragging:
        return dragging;
      default:
        return !dragging;
    }
  }
}
function useInitialValue(value, computeFn) {
  return useLazyMemo((previousValue) => {
    if (!value) {
      return null;
    }
    if (previousValue) {
      return previousValue;
    }
    return typeof computeFn === "function" ? computeFn(value) : value;
  }, [computeFn, value]);
}
function useInitialRect(node, measure2) {
  return useInitialValue(node, measure2);
}
function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = useEvent(callback);
  const mutationObserver = React.useMemo(() => {
    if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") {
      return void 0;
    }
    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  React.useEffect(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}
function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = useEvent(callback);
  const resizeObserver2 = React.useMemo(
    () => {
      if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") {
        return void 0;
      }
      const {
        ResizeObserver: ResizeObserver2
      } = window;
      return new ResizeObserver2(handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled]
  );
  React.useEffect(() => {
    return () => resizeObserver2 == null ? void 0 : resizeObserver2.disconnect();
  }, [resizeObserver2]);
  return resizeObserver2;
}
function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}
function useRect(element, measure2, fallbackRect) {
  if (measure2 === void 0) {
    measure2 = defaultMeasure;
  }
  const [rect, setRect] = React.useState(null);
  function measureRect() {
    setRect((currentRect) => {
      if (!element) {
        return null;
      }
      if (element.isConnected === false) {
        var _ref;
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }
      const newRect = measure2(element);
      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }
      return newRect;
    });
  }
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }
      for (const record of records) {
        const {
          type: type2,
          target
        } = record;
        if (type2 === "childList" && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }
  });
  const resizeObserver2 = useResizeObserver({
    callback: measureRect
  });
  useIsomorphicLayoutEffect(() => {
    measureRect();
    if (element) {
      resizeObserver2 == null ? void 0 : resizeObserver2.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver2 == null ? void 0 : resizeObserver2.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}
function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}
const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = React.useRef(node);
  const ancestors = useLazyMemo((previousValue) => {
    if (!node) {
      return defaultValue$1;
    }
    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }
    return getScrollableAncestors(node);
  }, [node]);
  React.useEffect(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}
function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = React.useState(null);
  const prevElements = React.useRef(elements);
  const handleScroll = React.useCallback((event) => {
    const scrollingElement = getScrollableElement(event.target);
    if (!scrollingElement) {
      return;
    }
    setScrollCoordinates((scrollCoordinates2) => {
      if (!scrollCoordinates2) {
        return null;
      }
      scrollCoordinates2.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates2);
    });
  }, []);
  React.useEffect(() => {
    const previousElements = prevElements.current;
    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map((element) => {
        const scrollableElement = getScrollableElement(element);
        if (scrollableElement) {
          scrollableElement.addEventListener("scroll", handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }
        return null;
      }).filter((entry) => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }
    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };
    function cleanup(elements2) {
      elements2.forEach((element) => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener("scroll", handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return React.useMemo(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }
    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }
  const initialScrollOffsets = React.useRef(null);
  React.useEffect(
    () => {
      initialScrollOffsets.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  React.useEffect(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }
    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
  React.useEffect(
    () => {
      if (!canUseDOM$1) {
        return;
      }
      const teardownFns = sensors.map((_ref) => {
        let {
          sensor
        } = _ref;
        return sensor.setup == null ? void 0 : sensor.setup();
      });
      return () => {
        for (const teardown of teardownFns) {
          teardown == null ? void 0 : teardown();
        }
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map((_ref2) => {
      let {
        sensor
      } = _ref2;
      return sensor;
    })
  );
}
function useSyntheticListeners(listeners, id) {
  return React.useMemo(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;
      acc[eventName] = (event) => {
        handler(event, id);
      };
      return acc;
    }, {});
  }, [listeners, id]);
}
function useWindowRect(element) {
  return React.useMemo(() => element ? getWindowClientRect(element) : null, [element]);
}
const defaultValue$2 = [];
function useRects(elements, measure2) {
  if (measure2 === void 0) {
    measure2 = getClientRect;
  }
  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
  const [rects, setRects] = React.useState(defaultValue$2);
  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }
      return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure2(element), element));
    });
  }
  const resizeObserver2 = useResizeObserver({
    callback: measureRects
  });
  useIsomorphicLayoutEffect(() => {
    resizeObserver2 == null ? void 0 : resizeObserver2.disconnect();
    measureRects();
    elements.forEach((element) => resizeObserver2 == null ? void 0 : resizeObserver2.observe(element));
  }, [elements]);
  return rects;
}
function getMeasurableNode(node) {
  if (!node) {
    return null;
  }
  if (node.children.length > 1) {
    return node;
  }
  const firstChild = node.children[0];
  return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
  let {
    measure: measure2
  } = _ref;
  const [rect, setRect] = React.useState(null);
  const handleResize = React.useCallback((entries) => {
    for (const {
      target
    } of entries) {
      if (isHTMLElement(target)) {
        setRect((rect2) => {
          const newRect = measure2(target);
          return rect2 ? {
            ...rect2,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure2]);
  const resizeObserver2 = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = React.useCallback((element) => {
    const node = getMeasurableNode(element);
    resizeObserver2 == null ? void 0 : resizeObserver2.disconnect();
    if (node) {
      resizeObserver2 == null ? void 0 : resizeObserver2.observe(node);
    }
    setRect(node ? measure2(node) : null);
  }, [measure2, resizeObserver2]);
  const [nodeRef, setRef] = useNodeRef(handleNodeChange);
  return React.useMemo(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}
const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};
class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;
    return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((_ref) => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }
  getNodeFor(id) {
    var _this$get$node$curren, _this$get;
    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
  }
}
const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: noop,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /* @__PURE__ */ React.createContext(defaultInternalContext);
const PublicContext = /* @__PURE__ */ React.createContext(defaultPublicContext);
function getInitialState() {
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
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };
    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }
      return {
        ...state,
        draggable: {
          ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };
    case Action.DragEnd:
    case Action.DragCancel:
      return {
        ...state,
        draggable: {
          ...state.draggable,
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
    case Action.RegisterDroppable: {
      const {
        element
      } = action;
      const {
        id
      } = element;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, element);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.SetDroppableDisabled: {
      const {
        id,
        key,
        disabled
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, {
        ...element,
        disabled
      });
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.UnregisterDroppable: {
      const {
        id,
        key
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.delete(id);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    default: {
      return state;
    }
  }
}
function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = React.useContext(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active == null ? void 0 : active.id);
  React.useEffect(() => {
    if (disabled) {
      return;
    }
    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!isKeyboardEvent(previousActivatorEvent)) {
        return;
      }
      if (document.activeElement === previousActivatorEvent.target) {
        return;
      }
      const draggableNode = draggableNodes.get(previousActiveId);
      if (!draggableNode) {
        return;
      }
      const {
        activatorNode,
        node
      } = draggableNode;
      if (!activatorNode.current && !node.current) {
        return;
      }
      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }
          const focusableNode = findFirstFocusableNode(element);
          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}
function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}
function useMeasuringConfiguration(config) {
  return React.useMemo(
    () => ({
      draggable: {
        ...defaultMeasuringConfiguration.draggable,
        ...config == null ? void 0 : config.draggable
      },
      droppable: {
        ...defaultMeasuringConfiguration.droppable,
        ...config == null ? void 0 : config.droppable
      },
      dragOverlay: {
        ...defaultMeasuringConfiguration.dragOverlay,
        ...config == null ? void 0 : config.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]
  );
}
function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure: measure2,
    initialRect,
    config = true
  } = _ref;
  const initialized = React.useRef(false);
  const {
    x,
    y
  } = typeof config === "boolean" ? {
    x: config,
    y: config
  } : config;
  useIsomorphicLayoutEffect(() => {
    const disabled = !x && !y;
    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }
    if (initialized.current || !initialRect) {
      return;
    }
    const node = activeNode == null ? void 0 : activeNode.node.current;
    if (!node || node.isConnected === false) {
      return;
    }
    const rect = measure2(node);
    const rectDelta = getRectDelta(rect, initialRect);
    if (!x) {
      rectDelta.x = 0;
    }
    if (!y) {
      rectDelta.y = 0;
    }
    initialized.current = true;
    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);
      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure2]);
}
const ActiveDraggableContext = /* @__PURE__ */ React.createContext({
  ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;
(function(Status2) {
  Status2[Status2["Uninitialized"] = 0] = "Uninitialized";
  Status2[Status2["Initializing"] = 1] = "Initializing";
  Status2[Status2["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
const DndContext = /* @__PURE__ */ React.memo(function DndContext2(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = React.useReducer(reducer, void 0, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = React.useState(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = React.useRef({
    initial: null,
    translated: null
  });
  const active = React.useMemo(() => {
    var _node$data;
    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = React.useRef(null);
  const [activeSensor, setActiveSensor] = React.useState(null);
  const [activatorEvent, setActivatorEvent] = React.useState(null);
  const latestProps = useLatestValue(props, Object.values(props));
  const draggableDescribedById = useUniqueId("DndDescribedBy", id);
  const enabledDroppableContainers = React.useMemo(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = React.useMemo(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = React.useRef({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  });
  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
  const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors);
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors);
  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, "id");
  const [over, setOver] = React.useState(null);
  const appliedTranslate = usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = React.useRef(null);
  const instantiateSensor = React.useCallback(
    (event, _ref2) => {
      let {
        sensor: Sensor,
        options
      } = _ref2;
      if (activeRef.current == null) {
        return;
      }
      const activeNode2 = draggableNodes.get(activeRef.current);
      if (!activeNode2) {
        return;
      }
      const activatorEvent2 = event.nativeEvent;
      const sensorInstance = new Sensor({
        active: activeRef.current,
        activeNode: activeNode2,
        event: activatorEvent2,
        options,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: sensorContext,
        onAbort(id2) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragAbort
          } = latestProps.current;
          const event2 = {
            id: id2
          };
          onDragAbort == null ? void 0 : onDragAbort(event2);
          dispatchMonitorEvent({
            type: "onDragAbort",
            event: event2
          });
        },
        onPending(id2, constraint, initialCoordinates, offset) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragPending
          } = latestProps.current;
          const event2 = {
            id: id2,
            constraint,
            initialCoordinates,
            offset
          };
          onDragPending == null ? void 0 : onDragPending(event2);
          dispatchMonitorEvent({
            type: "onDragPending",
            event: event2
          });
        },
        onStart(initialCoordinates) {
          const id2 = activeRef.current;
          if (id2 == null) {
            return;
          }
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragStart
          } = latestProps.current;
          const event2 = {
            activatorEvent: activatorEvent2,
            active: {
              id: id2,
              data: draggableNode.data,
              rect: activeRects
            }
          };
          require$$2.unstable_batchedUpdates(() => {
            onDragStart == null ? void 0 : onDragStart(event2);
            setStatus(Status.Initializing);
            dispatch({
              type: Action.DragStart,
              initialCoordinates,
              active: id2
            });
            dispatchMonitorEvent({
              type: "onDragStart",
              event: event2
            });
            setActiveSensor(activeSensorRef.current);
            setActivatorEvent(activatorEvent2);
          });
        },
        onMove(coordinates) {
          dispatch({
            type: Action.DragMove,
            coordinates
          });
        },
        onEnd: createHandler(Action.DragEnd),
        onCancel: createHandler(Action.DragCancel)
      });
      activeSensorRef.current = sensorInstance;
      function createHandler(type2) {
        return async function handler() {
          const {
            active: active2,
            collisions: collisions2,
            over: over2,
            scrollAdjustedTranslate: scrollAdjustedTranslate2
          } = sensorContext.current;
          let event2 = null;
          if (active2 && scrollAdjustedTranslate2) {
            const {
              cancelDrop
            } = latestProps.current;
            event2 = {
              activatorEvent: activatorEvent2,
              active: active2,
              collisions: collisions2,
              delta: scrollAdjustedTranslate2,
              over: over2
            };
            if (type2 === Action.DragEnd && typeof cancelDrop === "function") {
              const shouldCancel = await Promise.resolve(cancelDrop(event2));
              if (shouldCancel) {
                type2 = Action.DragCancel;
              }
            }
          }
          activeRef.current = null;
          require$$2.unstable_batchedUpdates(() => {
            dispatch({
              type: type2
            });
            setStatus(Status.Uninitialized);
            setOver(null);
            setActiveSensor(null);
            setActivatorEvent(null);
            activeSensorRef.current = null;
            const eventName = type2 === Action.DragEnd ? "onDragEnd" : "onDragCancel";
            if (event2) {
              const handler2 = latestProps.current[eventName];
              handler2 == null ? void 0 : handler2(event2);
              dispatchMonitorEvent({
                type: eventName,
                event: event2
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes]
  );
  const bindActivatorToSensorInstantiator = React.useCallback((handler, sensor) => {
    return (event, active2) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active2);
      if (
        // Another sensor is already instantiating
        activeRef.current !== null || // No active draggable
        !activeDraggableNode || // Event has already been captured
        nativeEvent.dndKit || nativeEvent.defaultPrevented
      ) {
        return;
      }
      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);
      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active2;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  React.useEffect(
    () => {
      const {
        onDragMove
      } = latestProps.current;
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        over: over2
      } = sensorContext.current;
      if (!active2 || !activatorEvent2) {
        return;
      }
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate.x,
          y: scrollAdjustedTranslate.y
        },
        over: over2
      };
      require$$2.unstable_batchedUpdates(() => {
        onDragMove == null ? void 0 : onDragMove(event);
        dispatchMonitorEvent({
          type: "onDragMove",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]
  );
  React.useEffect(
    () => {
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        droppableContainers: droppableContainers2,
        scrollAdjustedTranslate: scrollAdjustedTranslate2
      } = sensorContext.current;
      if (!active2 || activeRef.current == null || !activatorEvent2 || !scrollAdjustedTranslate2) {
        return;
      }
      const {
        onDragOver
      } = latestProps.current;
      const overContainer = droppableContainers2.get(overId);
      const over2 = overContainer && overContainer.rect.current ? {
        id: overContainer.id,
        rect: overContainer.rect.current,
        data: overContainer.data,
        disabled: overContainer.disabled
      } : null;
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate2.x,
          y: scrollAdjustedTranslate2.y
        },
        over: over2
      };
      require$$2.unstable_batchedUpdates(() => {
        setOver(over2);
        onDragOver == null ? void 0 : onDragOver(event);
        dispatchMonitorEvent({
          type: "onDragOver",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [overId]
  );
  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({
    ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = React.useMemo(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = React.useMemo(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return React.createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, React.createElement(InternalContext.Provider, {
    value: internalContext
  }, React.createElement(PublicContext.Provider, {
    value: publicContext
  }, React.createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), React.createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), React.createElement(Accessibility, {
    ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));
  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
    if (typeof autoScroll === "object") {
      return {
        ...autoScroll,
        enabled
      };
    }
    return {
      enabled
    };
  }
});
const NullContext = /* @__PURE__ */ React.createContext(null);
const defaultRole = "button";
const ID_PREFIX$1 = "Draggable";
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = React.useContext(InternalContext);
  const {
    role = defaultRole,
    roleDescription = "draggable",
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = React.useContext(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(
    () => {
      draggableNodes.set(id, {
        id,
        key,
        node,
        activatorNode,
        data: dataRef
      });
      return () => {
        const node2 = draggableNodes.get(id);
        if (node2 && node2.key === key) {
          draggableNodes.delete(id);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes, id]
  );
  const memoizedAttributes = React.useMemo(() => ({
    role,
    tabIndex,
    "aria-disabled": disabled,
    "aria-pressed": isDragging && role === defaultRole ? true : void 0,
    "aria-roledescription": roleDescription,
    "aria-describedby": ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? void 0 : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}
function useDndContext() {
  return React.useContext(PublicContext);
}
const ID_PREFIX$1$1 = "Droppable";
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = React.useContext(InternalContext);
  const previous = React.useRef({
    disabled
  });
  const resizeObserverConnected = React.useRef(false);
  const rect = React.useRef(null);
  const callbackId = React.useRef(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = {
    ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids2 = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = React.useCallback(
    () => {
      if (!resizeObserverConnected.current) {
        resizeObserverConnected.current = true;
        return;
      }
      if (callbackId.current != null) {
        clearTimeout(callbackId.current);
      }
      callbackId.current = setTimeout(() => {
        measureDroppableContainers(Array.isArray(ids2.current) ? ids2.current : [ids2.current]);
        callbackId.current = null;
      }, resizeObserverTimeout);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [resizeObserverTimeout]
  );
  const resizeObserver2 = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = React.useCallback((newElement, previousElement) => {
    if (!resizeObserver2) {
      return;
    }
    if (previousElement) {
      resizeObserver2.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }
    if (newElement) {
      resizeObserver2.observe(newElement);
    }
  }, [resizeObserver2]);
  const [nodeRef, setNodeRef] = useNodeRef(handleNodeChange);
  const dataRef = useLatestValue(data);
  React.useEffect(() => {
    if (!resizeObserver2 || !nodeRef.current) {
      return;
    }
    resizeObserver2.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver2.observe(nodeRef.current);
  }, [nodeRef, resizeObserver2]);
  React.useEffect(
    () => {
      dispatch({
        type: Action.RegisterDroppable,
        element: {
          id,
          key,
          disabled,
          node: nodeRef,
          rect,
          data: dataRef
        }
      });
      return () => dispatch({
        type: Action.UnregisterDroppable,
        key,
        id
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  React.useEffect(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}
function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index2) => {
    const rect = rects.get(id);
    if (rect) {
      accumulator[index2] = rect;
    }
    return accumulator;
  }, Array(items.length));
}
function isValidIndex(index2) {
  return index2 !== null && index2 >= 0;
}
function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function normalizeDisabled(disabled) {
  if (typeof disabled === "boolean") {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }
  return disabled;
}
const rectSortingStrategy = (_ref) => {
  let {
    rects,
    activeIndex,
    overIndex,
    index: index2
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index2];
  const newRect = newRects[index2];
  if (!newRect || !oldRect) {
    return null;
  }
  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = (_ref) => {
  var _rects$activeIndex;
  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index: index2,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;
  if (!activeNodeRect) {
    return null;
  }
  if (index2 === activeIndex) {
    const overIndexRect = rects[overIndex];
    if (!overIndexRect) {
      return null;
    }
    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }
  const itemGap = getItemGap$1(rects, index2, activeIndex);
  if (index2 > activeIndex && index2 <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }
  if (index2 < activeIndex && index2 >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }
  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};
function getItemGap$1(clientRects, index2, activeIndex) {
  const currentRect = clientRects[index2];
  const previousRect = clientRects[index2 - 1];
  const nextRect = clientRects[index2 + 1];
  if (!currentRect) {
    return 0;
  }
  if (activeIndex < index2) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }
  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}
const ID_PREFIX = "Sortable";
const Context = /* @__PURE__ */ React.createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = useDndContext();
  const containerId = useUniqueId(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = React.useMemo(() => userDefinedItems.map((item) => typeof item === "object" && "id" in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = React.useRef(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  React.useEffect(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = React.useMemo(
    () => ({
      activeIndex,
      containerId,
      disabled,
      disableTransforms,
      items,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(items, droppableRects),
      strategy
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]
  );
  return React.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
const defaultNewIndexGetter = (_ref) => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = (_ref2) => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index: index2,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;
  if (!transition || !wasDragging) {
    return false;
  }
  if (previousItems !== items && index2 === newIndex) {
    return false;
  }
  if (isSorting) {
    return true;
  }
  return newIndex !== index2 && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: "ease"
};
const transitionProperty = "transform";
const disabledTransition = /* @__PURE__ */ CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: "linear"
});
const defaultAttributes = {
  roleDescription: "sortable"
};
function useDerivedTransform(_ref) {
  let {
    disabled,
    index: index2,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = React.useState(null);
  const previousIndex = React.useRef(index2);
  useIsomorphicLayoutEffect(() => {
    if (!disabled && index2 !== previousIndex.current && node.current) {
      const initial = rect.current;
      if (initial) {
        const current = getClientRect(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };
        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }
    if (index2 !== previousIndex.current) {
      previousIndex.current = index2;
    }
  }, [disabled, index2, node, rect]);
  React.useEffect(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}
function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = React.useContext(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index2 = items.indexOf(id);
  const data = React.useMemo(() => ({
    sortable: {
      containerId,
      index: index2,
      items
    },
    ...customData
  }), [containerId, customData, index2, items]);
  const itemsAfterCurrentSortable = React.useMemo(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = useDraggable({
    id,
    data,
    attributes: {
      ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index: index2
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index2;
  const activeId = active == null ? void 0 : active.id;
  const previous = React.useRef({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index: index2,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index: index2,
    node,
    rect
  });
  React.useEffect(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }
    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }
    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  React.useEffect(() => {
    if (activeId === previous.current.activeId) {
      return;
    }
    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }
    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index: index2,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };
  function getTransition() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
      itemsHaveChanged && previous.current.newIndex === index2
    ) {
      return disabledTransition;
    }
    if (shouldDisplaceDragSource && !isKeyboardEvent(activatorEvent) || !transition) {
      return void 0;
    }
    if (isSorting || shouldAnimateLayoutChanges) {
      return CSS.Transition.toString({
        ...transition,
        property: transitionProperty
      });
    }
    return void 0;
  }
}
function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;
  if (typeof localDisabled === "boolean") {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }
  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}
[KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];
const NotFoundAddItem = ({ onAddNewItem }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { justify: "start", align: "center", gap: 4, className: "p-5", children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { className: "bg-light-2 w-full cursor-pointer p-2", size: 14, onClick: onAddNewItem, children: t("common.literal.addInputTag") }) });
};
const CustomizedAntSelectTagConfig = {
  components: {
    Select: {
      multipleItemBg: colors.colors.light_1,
      multipleItemBorderColor: colors.colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.colors.primary_light_3,
      multipleItemColorDisabled: colors.colors.negative,
      multipleItemHeight: 30,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.colors.light_1,
      optionActiveBg: colors.colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.colors.primary_light_3
    }
  }
};
const generateSelectClassNames = ({
  size,
  error,
  disabled,
  isTabFocused
}) => {
  const className = tailwindMerge.twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
  if (size === "medium") {
    return tailwindMerge.twMerge("", className);
  }
  return tailwindMerge.twMerge("h-[34px]", className);
};
const { Option } = antd.Select;
const TagInput = React.forwardRef(
  ({
    error,
    className,
    height = 48,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    onAddNew,
    open,
    showSearch = true,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    tagExtractor = (item) => item.label,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    selectedValues,
    wrapperClassName,
    disabled = false,
    loading,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear = true,
    header,
    footer,
    hasError,
    addonBefore,
    addonAfter,
    required,
    infinite,
    hideErrorMessage = false,
    onSearch,
    ...rest
  }, ref2) => {
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState("");
    const _value = React.useMemo(() => {
      const selectedItems = [];
      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }
      if (selectedValues) {
        selectedItems.push(...selectedValues.map(valueExtractor));
      }
      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, selectedValues, valueExtractor]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const allOptions = React.useMemo(() => {
      const optionsMap = /* @__PURE__ */ new Map();
      options?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });
      selectedValues?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });
      return Array.from(optionsMap.values());
    }, [options, selectedValues, valueExtractor]);
    const _onChange = (items) => {
      const selectedOptions = allOptions.filter(
        (option) => items.some((item) => item === valueExtractor(option))
      );
      onChange?.(selectedOptions);
      setIsOpen(true);
      setNewItem("");
      selectedOptions && onChangeValue?.(selectedOptions);
    };
    const handleSearch = React.useCallback(
      (value2) => {
        setNewItem(value2);
        onSearch?.(value2);
      },
      [onSearch]
    );
    const _renderItem = React.useCallback(
      ({ item, index: index$1, isActive }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsxRuntime.jsx(
          index.Flex,
          {
            className: "cursor-pointer",
            onClick: () => {
              const convertedValueToMatchOnChange = _value?.map((i) => i?.toString() || "") || [];
              if (convertedValueToMatchOnChange?.some((i) => i === valueExtractor(item))) {
                _onChange(convertedValueToMatchOnChange.filter((i) => i !== valueExtractor(item)));
              } else {
                _onChange([...convertedValueToMatchOnChange, valueExtractor(item)]);
              }
            },
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Checkbox, { checked: isActive }),
              renderItem(item, index$1, isActive)
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { gap: 8, className: tailwindMerge.twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsxRuntime.jsx(Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { children: extractedLabel }) : extractedLabel
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, renderItem]
    );
    const onAddNewItem = () => {
      const isNew = options?.filter((option) => labelExtractor(option) === newItem);
      if (isNew?.length === 0 && newItem !== "") {
        setIsOpen(true);
        onAddNew?.(newItem);
        setNewItem("");
      }
    };
    const tagRender = ({ value: value2, closable, onClose }) => {
      const item = selectedValues ? selectedValues?.find((item2) => valueExtractor(item2) === value2) : options?.find((item2) => valueExtractor(item2) === value2);
      const selectedLabel = item && labelExtractor(item);
      return /* @__PURE__ */ jsxRuntime.jsx(
        Tag,
        {
          closable,
          onClose,
          title: selectedLabel?.toString() || "",
          style: { margin: 5 }
        },
        value2
      );
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectTagConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ...rest,
                mode: "multiple",
                style: { minHeight: height },
                menuItemSelectedIcon: null,
                ref: ref2,
                className: tailwindMerge.twMerge(
                  `${generateSelectClassNames({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                onSearch: handleSearch,
                disabled,
                filterOption: true,
                ...eventHandlers(),
                showSearch,
                bordered: false,
                tagRender,
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(NotFoundAddItem, { onAddNewItem }),
                suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value,
                onDropdownVisibleChange: onVisibleChange,
                loading: false,
                searchValue: newItem,
                open: disabled ? false : open === void 0 ? isOpen : open,
                onChange: _onChange,
                optionFilterProp: "label",
                dropdownAlign: { offset: [0, 6] },
                onInputKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === "Tab") {
                    e.preventDefault();
                    onAddNewItem();
                  }
                },
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index: index2, item, isActive });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index.Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                children: options?.map((item, index2) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index: index2, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const timePickerTheme = {
  components: {
    DatePicker: {
      colorBorder: colors.colors.primary_light_3,
      colorTextPlaceholder: colors.colors.primary_light_3
    }
  }
};
const InputTimePicker = ({ className, error, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: timePickerTheme, children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      antd.TimePicker,
      {
        size: "large",
        suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "time", color: colors.colors.primary }),
        className: tailwindMerge.twMerge(
          "w-full text-[14px] font-medium text-primary-dark-1 !shadow-none outline-none hover:border-primary-light-2",
          error?.message && "border-negative",
          className
        ),
        needConfirm: false,
        showNow: false,
        popupStyle: { scrollbarWidth: "thin", scrollbarColor: colors.colors.primary },
        popupClassName: "[&_.ant-picker-content]:flex-row-reverse ",
        ...rest
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(InputErrorMessage, { message: getErrorMessage(error) })
  ] }) });
};
const StatusBox = ({ active }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Icon,
    {
      name: active ? "Checkmark_Circle" : "Close_Circle_fill",
      color: colors.colors[active ? "positive" : "negative"]
    }
  );
};
const TitleBox = ({ children, title }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: false, gap: 24, align: "flex-start", children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { flex: 1, className: "bg-light-1 rounded px-4 py-2", children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { weight: "medium", children: title }) : title }),
    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { flex: 3, className: "bg-light-1 rounded px-4 py-2", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, style: { textAlign: "justify" }, children }) : children })
  ] });
};
const Box = batch({ Title: TitleBox, Status: StatusBox });
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect) return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") {
      seen = [];
    } else if (indexOf(seen, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen = $arrSlice.call(seen);
        seen.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen);
      }
      return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
      var name = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
      }
      s += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s += "...";
      }
      s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s;
    }
    if (isArray(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate(obj) && !isRegExp(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
  }
  function isArray(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  var hasOwn2 = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
  };
  function has(obj, key) {
    return hasOwn2.call(obj, key);
  }
  function toStr(obj) {
    return objectToString.call(obj);
  }
  function nameOf(f) {
    if (f.name) {
      return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
      return m[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isSet(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {
    }
    return false;
  }
  function isElement(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
  }
  function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k = 0; k < syms.length; k++) {
        symMap["$" + syms[k]] = syms[k];
      }
    }
    for (var key in obj) {
      if (!has(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
      } else {
        xs.push(key + ": " + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList) return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key);
  };
  var listDelete = function(objects, key) {
    if (objects) {
      return listGetNode(objects, key, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        var root = $o && $o.next;
        var deletedNode = listDelete($o, key);
        if (deletedNode && root && root === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key) {
        return listGet($o, key);
      },
      has: function(key) {
        return listHas($o, key);
      },
      set: function(key, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          /** @type {NonNullable<typeof $o>} */
          $o,
          key,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = /* @__PURE__ */ Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call2 = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = requireFunctionBind();
  hasown = bind.call(call2, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
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
  };
  var bind = requireFunctionBind();
  var hasOwn2 = /* @__PURE__ */ requireHasown();
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn2(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn2(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn2(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn2(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap) return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
  function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        if ($m) {
          var result = $mapDelete($m, key);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key) {
        if ($m) {
          return $mapGet($m, key);
        }
      },
      has: function(key) {
        if ($m) {
          return $mapHas($m, key);
        }
        return false;
      },
      set: function(key, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? (
    /** @type {Exclude<import('.'), false>} */
    function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key);
            }
          }
          return false;
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key, value);
          }
        }
      };
      return channel;
    }
  ) : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel) return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        return !!$channelData && $channelData["delete"](key);
      },
      get: function(key) {
        return $channelData && $channelData.get(key);
      },
      has: function(key) {
        return !!$channelData && $channelData.has(key);
      },
      set: function(key, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var formats;
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  formats = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return formats;
}
var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var formats2 = requireFormats();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var hexTable = (function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    }
    return array;
  })();
  var compactQueue = function compactQueue2(queue) {
    while (queue.length > 1) {
      var item = queue.pop();
      var obj = item.obj[item.prop];
      if (isArray(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== "undefined") {
            compacted.push(obj[j]);
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject = function arrayToObject2(source, options) {
    var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== "undefined") {
        obj[i] = source[i];
      }
    }
    return obj;
  };
  var merge = function merge2(target, source, options) {
    if (!source) {
      return target;
    }
    if (typeof source !== "object") {
      if (isArray(target)) {
        target.push(source);
      } else if (target && typeof target === "object") {
        if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      return [target].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
      mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
      source.forEach(function(item, i) {
        if (has.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i] = merge2(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
      var value = source[key];
      if (has.call(acc, key)) {
        acc[key] = merge2(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };
  var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var encode = function encode2(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats2.RFC1738 && (c === 40 || c === 41)) {
        out += string.charAt(i);
        continue;
      }
      if (c < 128) {
        out = out + hexTable[c];
        continue;
      }
      if (c < 2048) {
        out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
        continue;
      }
      if (c < 55296 || c >= 57344) {
        out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
      out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue = [{ obj: { o: value }, prop: "o" }];
    var refs = [];
    for (var i = 0; i < queue.length; ++i) {
      var item = queue[i];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);
      for (var j = 0; j < keys.length; ++j) {
        var key = keys[j];
        var val = obj[key];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue.push({ obj, prop: key });
          refs.push(val);
        }
      }
    }
    compactQueue(queue);
    return value;
  };
  var isRegExp = function isRegExp2(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer = function isBuffer2(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a, b) {
    return [].concat(a, b);
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped.push(fn(val[i]));
      }
      return mapped;
    }
    return fn(val);
  };
  utils = {
    arrayToObject,
    assign,
    combine,
    compact,
    decode,
    encode,
    isBuffer,
    isRegExp,
    maybeMap,
    merge
  };
  return utils;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify_1;
  hasRequiredStringify = 1;
  var getSideChannel = requireSideChannel();
  var utils2 = requireUtils();
  var formats2 = requireFormats();
  var has = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
      return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats2["default"];
  var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils2.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats2.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter === "function") {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray(obj)) {
      obj = utils2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === "undefined") {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils2.maybeMap(obj, encoder);
      }
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else if (isArray(filter)) {
      objKeys = filter;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for (var j = 0; j < objKeys.length; ++j) {
      var key = objKeys[j];
      var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
      if (skipNulls && value === null) {
        continue;
      }
      var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
      sideChannel2.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel2);
      pushToArray(values, stringify2(
        value,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        strictNullHandling,
        skipNulls,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
        filter,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats2["default"];
    if (typeof opts.format !== "undefined") {
      if (!has.call(formats2.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format = opts.format;
    }
    var formatter = formats2.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) {
      filter = opts.filter;
    }
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
      allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
      filter,
      format,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
      filter = options.filter;
      obj = filter("", obj);
    } else if (isArray(options.filter)) {
      filter = options.filter;
      objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if (opts && "indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = "indices";
    }
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel2 = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];
      if (options.skipNulls && obj[key] === null) {
        continue;
      }
      pushToArray(keys, stringify(
        obj[key],
        key,
        generateArrayPrefix,
        commaRoundTrip,
        options.strictNullHandling,
        options.skipNulls,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel2
      ));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return stringify_1;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var utils2 = requireUtils();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils2.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf("utf8=") === 0) {
          if (parts[i] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key, val;
      if (pos === -1) {
        key = options.decoder(part, defaults.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
        val = utils2.maybeMap(
          parseArrayValue(part.slice(pos + 1), options),
          function(encodedVal) {
            return options.decoder(encodedVal, defaults.decoder, charset, "value");
          }
        );
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(val);
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray(val) ? [val] : val;
      }
      if (has.call(obj, key)) {
        obj[key] = utils2.combine(obj[key], val);
      } else {
        obj[key] = val;
      }
    }
    return obj;
  };
  var parseObject = function(chain2, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for (var i = chain2.length - 1; i >= 0; --i) {
      var obj;
      var root = chain2[i];
      if (root === "[]" && options.parseArrays) {
        obj = [].concat(leaf);
      } else {
        obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
        var index2 = parseInt(cleanRoot, 10);
        if (!options.parseArrays && cleanRoot === "") {
          obj = { 0: leaf };
        } else if (!isNaN(index2) && root !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
          obj = [];
          obj[index2] = leaf;
        } else if (cleanRoot !== "__proto__") {
          obj[cleanRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
      if (!options.plainObjects && has.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(parent);
    }
    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;
      if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }
    if (segment) {
      keys.push("[" + key.slice(segment.index) + "]");
    }
    return parseObject(keys, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
      allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
      delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  parse = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
      obj = utils2.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils2.compact(obj);
  };
  return parse;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var stringify = requireStringify();
  var parse2 = requireParse();
  var formats2 = requireFormats();
  lib = {
    formats: formats2,
    parse: parse2,
    stringify
  };
  return lib;
}
var libExports = requireLib();
const qs = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
const Tab$1 = (_props) => null;
const VerticalTabs = ({ children, query = true, defaultActiveTab }) => {
  const navigate = index.useNavigate();
  const [searchParams] = index.useSearchParams();
  const [activeTab, setActiveTab] = React.useState(
    defaultActiveTab || children[0].props.tab
  );
  const props = React.Children.map(children, (child) => child.props);
  const { activeContent, className, isTransparent, extraNode } = React.useMemo(() => {
    const activeProp = props.find((prop) => prop.tab === activeTab);
    if (!activeProp) return { activeContent: null, isTransparent: false };
    return {
      activeContent: activeProp.children,
      className: activeProp.className,
      isTransparent: activeProp.transparent,
      extraNode: activeProp.extraNode
    };
  }, [activeTab, props]);
  const setQuery = React.useCallback(
    (tab) => {
      const currentQueries = new URLSearchParams(window.location.search);
      if (query) {
        if (tab) currentQueries.set("tab", tab);
      } else {
        if (currentQueries.has("tab")) currentQueries.delete("tab");
      }
      const q = Object.fromEntries(currentQueries.entries());
      const search = qs.stringify(q, { addQueryPrefix: true, encode: false });
      navigate({ search });
    },
    [navigate, query]
  );
  React.useEffect(() => {
    if (!searchParams || !query) return;
    const q = Object.fromEntries(searchParams.entries()) ?? {};
    if ("tab" in q && props.find((item) => item.tab === q["tab"])) {
      setActiveTab(q["tab"]);
    }
  }, [props, query, searchParams]);
  return /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: false, className: "p-6", flex: 1, align: "flex-start", gap: 24, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "h-full max-w-[200px]", vertical: true, flex: 1, gap: 16, children: props.map(({ tab, title }) => /* @__PURE__ */ jsxRuntime.jsx(
      index.Flex,
      {
        className: tailwindMerge.twMerge(
          "cursor-pointer rounded-bl rounded-tl border-r-[3px] border-transparent px-[22px]  py-2",
          tab === activeTab && "bg-white-ff border-secondary  shadow-[0_1px_2px_0_rgba(67,88,121,0.26)]"
        ),
        onClick: () => {
          setActiveTab(tab);
          setQuery(tab);
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            size: 16,
            color: colors.colors[tab === activeTab ? "secondary" : "primary"],
            weight: tab === activeTab ? "bold" : "normal",
            children: title
          }
        )
      },
      tab
    )) }),
    /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { vertical: true, flex: 1, className: "h-full", children: [
      React.isValidElement(extraNode) && extraNode,
      /* @__PURE__ */ jsxRuntime.jsx(
        Card,
        {
          className: tailwindMerge.twMerge(
            "small-custom-scrollbar h-fit overflow-y-hidden shadow-[0_3px_6px_0_rgba(67,88,121,0.16)]",
            isTransparent && "bg-transparent p-0 !shadow-none",
            className
          ),
          children: activeContent
        }
      )
    ] })
  ] });
};
VerticalTabs.Tab = Tab$1;
const TabConfig = {
  components: {
    Tabs: {
      inkBarColor: colors.colors.secondary,
      itemColor: colors.colors.primary,
      itemSelectedColor: colors.colors.secondary,
      titleFontSize: 18,
      horizontalItemPadding: "0px",
      horizontalMargin: "0",
      itemHoverColor: colors.colors.primary_light_1,
      itemActiveColor: colors.colors.primary_light_2
    }
  }
};
const Tab = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: TabConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Tabs, { ...props }) });
};
Tab.TabPane = antd.Tabs.TabPane;
const Upload = ({ children, itemRender = void 0, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Upload,
    {
      ...props,
      multiple: false,
      maxCount: 1,
      itemRender: itemRender ? itemRender : (_node, file, _list, { remove }) => /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "w-full max-w-40 p-1", gap: 8, justify: "center", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 14, color: colors.colors.primary, weight: "medium", numberOfLines: 1, children: file?.name }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            name: "Delete_fill",
            color: colors.colors.negative,
            size: 16,
            className: "cursor-pointer",
            onClick: remove
          }
        )
      ] }),
      children
    }
  );
};
Upload.Dragger = antd.Upload.Dragger;
const VerticalLine = ({ style, color, spacing, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...rest,
      className: tailwindMerge.twMerge("mx-2 min-h-[12px] w-[1px] max-w-[1px]", rest.className),
      style: {
        backgroundColor: color || colors.colors.primary_dark_1,
        ...style
      }
    }
  );
};
function fillRef(ref2, node) {
  if (typeof ref2 === "function") {
    ref2(node);
  } else if (typeof ref2 === "object" && ref2 && "current" in ref2) {
    ref2.current = node;
  }
}
function composeRef(...refs) {
  return (node) => {
    refs.forEach((ref2) => {
      fillRef(ref2, node);
    });
  };
}
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
let didWarn = false;
let resizeObserver = null;
function getResizeObserver() {
  if (canUseDOM && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          const node = entry.target;
          const onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            measure(
              node,
              //@ts-ignore
              (x, y, width, height, left, top) => {
                const event = {
                  // $FlowFixMe
                  nativeEvent: {
                    layout: { x, y, width, height, left, top }
                  },
                  timeStamp: Date.now()
                };
                Object.defineProperty(event.nativeEvent, "target", {
                  enumerable: true,
                  get: () => entry.target
                });
                onLayout(event);
              }
            );
          }
        });
      });
    }
  } else if (!didWarn) {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
      didWarn = true;
    }
  }
  return resizeObserver;
}
function useElementLayout(ref2, onLayout) {
  const { width, height } = useWindowDimensions();
  const observer = getResizeObserver();
  React.useEffect(() => {
    const node = ref2.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref2, onLayout]);
  React.useEffect(() => {
    const node = ref2.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref2, observer, width, height]);
}
const getBoundingClientRect = (node) => {
  if (node != null) {
    const isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
const measureLayout = (node, relativeToNativeNode, callback) => {
  const relativeNode = node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      const relativeRect = getBoundingClientRect(relativeNode);
      const { height, left, top, width } = getRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};
const getRect = (node) => {
  const { x, y, top, left } = getBoundingClientRect(node);
  const width = node.offsetWidth;
  const height = node.offsetHeight;
  return { x, y, width, height, top, left };
};
function measure(node, callback) {
  measureLayout(node, null, callback);
}
const View = React.forwardRef(
  ({
    children,
    isLoading,
    onRetry,
    error,
    loadingMinHeight,
    loadingSize,
    onLayout,
    ...rest
  }, ref2) => {
    const contentLayoutRef = React.useRef(null);
    useElementLayout(contentLayoutRef, onLayout);
    const finalRef = composeRef(ref2, contentLayoutRef);
    const { t } = reactI18next.useTranslation();
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        index.Flex,
        {
          ref: finalRef,
          align: "center",
          justify: "center",
          className: "h-full w-full",
          style: {
            minHeight: loadingMinHeight
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: loadingSize })
        }
      );
    }
    if (error) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        index.Flex,
        {
          ref: finalRef,
          align: "center",
          justify: "center",
          style: {
            minHeight: loadingMinHeight
          },
          gap: 8,
          vertical: true,
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, color: colors.colors.negative, children: error }),
            onRetry && /* @__PURE__ */ jsxRuntime.jsx(Button.Primary, { onClick: onRetry, children: t("common.message.tryAgain") })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { ref: finalRef, ...rest, children });
  }
);
exports.Accordion = Accordion;
exports.ActionHeader = ActionHeader;
exports.BorderedTitle = BorderedTitle;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.CSS = CSS;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Collapse = Collapse;
exports.DndContext = DndContext;
exports.IconButton = IconButton;
exports.Input = Input;
exports.InputErrorMessage = InputErrorMessage;
exports.InputTimePicker = InputTimePicker;
exports.MouseSensor = MouseSensor;
exports.NavigationTabs = NavigationTabs;
exports.Popover = Popover;
exports.Radio = Radio;
exports.Select = Select;
exports.SelectClearIcon = SelectClearIcon;
exports.SelectLabel = SelectLabel;
exports.SelectNotFound = SelectNotFound;
exports.SelectPlaceholder = SelectPlaceholder;
exports.SelectSuffix = SelectSuffix;
exports.SortableContext = SortableContext;
exports.Tab = Tab;
exports.Tag = Tag;
exports.TagInput = TagInput;
exports.Tooltip = Tooltip;
exports.Upload = Upload;
exports.VerticalLine = VerticalLine;
exports.VerticalTabs = VerticalTabs;
exports.View = View;
exports.buttonDefaultClasses = buttonDefaultClasses;
exports.datePickerColors = datePickerColors;
exports.fontSizePicker = fontSizePicker;
exports.getErrorMessage = getErrorMessage;
exports.libExports = libExports$1;
exports.mainExports = mainExports;
exports.moment = moment;
exports.paddingPicker = paddingPicker;
exports.useNotification = useNotification;
exports.useSensor = useSensor;
exports.useSensors = useSensors;
exports.useSortable = useSortable;
exports.verticalListSortingStrategy = verticalListSortingStrategy;
