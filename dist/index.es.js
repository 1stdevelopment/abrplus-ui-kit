/* empty css         */
import { g as x, c as o, C as q } from "./index-Bp79PD41.js";
import { jsx as j } from "react/jsx-runtime";
import { i as E, r as A, a as h, b as B, c as T } from "./en_US-CdYp3pI9.js";
const X = {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,html}"]
  },
  theme: {
    fontFamily: {
      "yekan-normal": "YekanBakhFaRegular",
      "yekan-medium": "YekanBakhFaMedium",
      "yekan-light": "YekanBakhFaLight",
      "yekan-bold": "YekanBakhFaBold",
      "roboto-normal": "RobotoRegular",
      "roboto-light": "RobotoLight",
      "roboto-medium": "RobotoMedium",
      "roboto-bold": "RobotoBold"
    },
    colors: {
      "white-ff": "#ffffff",
      "white-ff-10": "#ffffff10",
      "white-ff-15": "#ffffff15",
      "white-ff-20": "#ffffff20",
      "white-ff-35": "#ffffff35",
      "light-1": "#f8f9fb",
      "light-2": "#f1f3f8",
      "light-3": "#f9fbff",
      "light-4": "#f7fafe",
      "light-5": "#ebf3ff",
      "light-6": "#eaeff5",
      "light-7": "#d9e1ea",
      primary: "#435879",
      "primary-dark-1": "#2b4063",
      "primary-dark-2": "#192540",
      "primary-light-1": "#516b93",
      "primary-light-2": "#91a8c3",
      "primary-light-3": "#b8c7d8",
      secondary: "#1e51c1",
      "secondary-dark-1": "#163b8e",
      "secondary-light-1": "#2159d4",
      "secondary-light-2": "#386de0",
      tertiary: "#1ba9c7",
      "tertiary-dark-1": "#489fb5",
      negative: "#c9252d",
      "negative-dark-1": "#bb121a",
      "negative-light-1": "#d7373f",
      "negative-light-2": "#e34850",
      "negative-light-3": "#f6d8da",
      "negative-light-4": "#f9e3e4",
      "negative-light-5": "#fdf3f3",
      positive: "#268e6c",
      "positive-dark-1": "#12805c",
      "positive-dark-2": "#107154",
      "positive-light-2": "#2d9d78",
      "positive-light-3": "#eefaf6",
      "sales-action": "#ec6c2c",
      black: "#000000",
      transparent: "transparent",
      "sales-action-dark-1": "#bc5624",
      "sales-action-light-1": "#ff8136",
      "sales-action-light-2": "#ff973e",
      "sales-action-light-3": "#ffac48",
      "call-action": "#8345c9",
      "call-action-dark-1": "#6837a0",
      "call-action-light-1": "#9d52f1",
      "call-action-light-2": "#b760ff",
      "call-action-light-3": "#d16eff",
      "marketing-action": "#2962ff",
      "marketing-action-dark-1": "#1043ce",
      "marketing-action-light-1": "#3175ff",
      "marketing-action-light-2": "#3d8cff",
      "marketing-action-light-3": "#4ea3ff",
      "club-action": "#d21369",
      "club-action-dark-1": "#a80f54",
      "club-action-light-1": "#fc167e",
      "club-action-light-2": "#ff1a93",
      "club-action-light-3": "#ff27ab",
      "team-action": "#B5179E",
      "team-action-dark-1": "#9E218C",
      "team-action-light-1": "#D834C0",
      "team-action-light-2": "#F841DD",
      "team-action-light-3": "#FF56E6",
      "desk-action": "#50C877",
      "desk-action-dark-1": "#3B965B",
      "desk-action-light-1": "#60D38F",
      "desk-action-light-2": "#6BDBA2",
      "desk-action-light-3": "#80E9BF",
      "form-action": "#00BFA5",
      "form-action-dark-1": "#00927E",
      "form-action-light-1": "#00CCB7",
      "form-action-light-2": "#03D5C4",
      "form-action-light-3": "#05E4DB",
      "task-action": "#5066D4",
      "task-action-dark-1": "#3C4C9F",
      "task-action-light-1": "#617ADD",
      "task-action-light-2": "#6D8AE3",
      "task-action-light-3": "#81A2EE",
      "rayan-action": "#5066D4",
      "rayan-action-dark-1": "#3C4C9F",
      "rayan-action-light-1": "#617ADD",
      "rayan-action-light-2": "#6D8AE3",
      "rayan-action-light-3": "#81A2EE"
    }
  }
};
class n {
  static instance = null;
  configs;
  constructor(e) {
    this.configs = e, this.init();
  }
  static config(e = {}) {
    return n.instance || (n.instance = new n(e)), n.instance;
  }
  init() {
    E(this.configs.locales?.lang, this.configs.locales?.resources);
  }
}
var m, v;
function M() {
  return v || (v = 1, m = /* @__PURE__ */ A()), m;
}
var Y = /* @__PURE__ */ M();
const w = /* @__PURE__ */ x(Y);
var c = {}, f = {}, b;
function S() {
  if (b) return f;
  b = 1, Object.defineProperty(f, "__esModule", {
    value: !0
  }), f.default = void 0;
  var a = {
    // Options
    items_per_page: "/ صفحه",
    jump_to: "برو به",
    jump_to_confirm: "تایید",
    page: "",
    // Pagination
    prev_page: "صفحه قبلی",
    next_page: "صفحه بعدی",
    prev_5: "۵ صفحه قبلی",
    next_5: "۵ صفحه بعدی",
    prev_3: "۳ صفحه قبلی",
    next_3: "۳ صفحه بعدی",
    page_size: "اندازه صفحه"
  };
  return f.default = a, f;
}
var d = {}, s = {}, u = {}, _;
function O() {
  if (_) return u;
  _ = 1;
  var a = h().default;
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), u.default = void 0;
  var e = a(B()), i = T(), r = (0, e.default)((0, e.default)({}, i.commonLocale), {}, {
    locale: "fa_IR",
    today: "امروز",
    now: "اکنون",
    backToToday: "بازگشت به روز",
    ok: "باشه",
    clear: "پاک کردن",
    month: "ماه",
    year: "سال",
    timeSelect: "انتخاب زمان",
    dateSelect: "انتخاب تاریخ",
    monthSelect: "یک ماه را انتخاب کنید",
    yearSelect: "یک سال را انتخاب کنید",
    decadeSelect: "یک دهه را انتخاب کنید",
    dateFormat: "M/D/YYYY",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    previousMonth: "ماه قبل (PageUp)",
    nextMonth: "ماه بعد (PageDown)",
    previousYear: "سال قبل (Control + left)",
    nextYear: "سال بعد (Control + right)",
    previousDecade: "دهه قبل",
    nextDecade: "دهه بعد",
    previousCentury: "قرن قبل",
    nextCentury: "قرن بعد"
  });
  return u.default = r, u;
}
var g = {}, k;
function I() {
  if (k) return g;
  k = 1, Object.defineProperty(g, "__esModule", {
    value: !0
  }), g.default = void 0;
  const a = {
    placeholder: "انتخاب زمان",
    rangePlaceholder: ["زمان شروع", "زمان پایان"]
  };
  return g.default = a, g;
}
var y;
function C() {
  if (y) return s;
  y = 1;
  var a = h().default;
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), s.default = void 0;
  var e = a(O()), i = a(/* @__PURE__ */ I());
  const r = {
    lang: Object.assign({
      placeholder: "انتخاب تاریخ",
      yearPlaceholder: "انتخاب سال",
      quarterPlaceholder: "انتخاب فصل",
      monthPlaceholder: "انتخاب ماه",
      weekPlaceholder: "انتخاب هفته",
      rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"],
      rangeYearPlaceholder: ["سال شروع", "سال پایان"],
      rangeQuarterPlaceholder: ["فصل شروع", "فصل پایان"],
      rangeMonthPlaceholder: ["ماه شروع", "ماه پایان"],
      rangeWeekPlaceholder: ["هفته شروع", "هفته پایان"]
    }, e.default),
    timePickerLocale: Object.assign({}, i.default)
  };
  return s.default = r, s;
}
var $;
function U() {
  if ($) return d;
  $ = 1;
  var a = h().default;
  Object.defineProperty(d, "__esModule", {
    value: !0
  }), d.default = void 0;
  var e = a(/* @__PURE__ */ C());
  return d.default = e.default, d;
}
var R;
function L() {
  if (R) return c;
  R = 1;
  var a = h().default;
  Object.defineProperty(c, "__esModule", {
    value: !0
  }), c.default = void 0;
  var e = a(S()), i = a(/* @__PURE__ */ U()), r = a(/* @__PURE__ */ C()), l = a(/* @__PURE__ */ I());
  const t = "${label} از نوع ${type} معتبر نیست", P = {
    locale: "fa",
    Pagination: e.default,
    DatePicker: r.default,
    TimePicker: l.default,
    Calendar: i.default,
    global: {
      placeholder: "لطفاً انتخاب کنید"
    },
    Table: {
      filterTitle: "منوی فیلتر",
      filterConfirm: "تایید",
      filterReset: "پاک کردن",
      filterEmptyText: "بدون فیلتر",
      filterCheckall: "انتخاب همه‌ی موارد",
      filterSearchPlaceholder: "جستجو در فیلترها",
      emptyText: "بدون داده",
      selectAll: "انتخاب صفحه‌ی کنونی",
      selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی",
      selectNone: "انتخاب هیچکدام",
      selectionAll: "انتخاب همه‌ی داده‌ها",
      sortTitle: "مرتب سازی",
      expand: "باز شدن ردیف",
      collapse: "بستن ردیف",
      triggerDesc: "ترتیب نزولی",
      triggerAsc: "ترتیب صعودی",
      cancelSort: "لغوِ ترتیبِ داده شده"
    },
    Tour: {
      Next: "بعدی",
      Previous: "قبلی",
      Finish: "پایان"
    },
    Modal: {
      okText: "تایید",
      cancelText: "لغو",
      justOkText: "تایید"
    },
    Popconfirm: {
      okText: "تایید",
      cancelText: "لغو"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "جستجو",
      itemUnit: "عدد",
      itemsUnit: "عدد",
      remove: "حذف",
      selectCurrent: "انتخاب صفحه فعلی",
      removeCurrent: "پاک کردن انتخاب‌های صفحه فعلی",
      selectAll: "انتخاب همه",
      removeAll: "پاک کردن همه انتخاب‌ها",
      selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی"
    },
    Upload: {
      uploading: "در حال آپلود...",
      removeFile: "حذف فایل",
      uploadError: "خطا در آپلود",
      previewFile: "مشاهده‌ی فایل",
      downloadFile: "دریافت فایل"
    },
    Empty: {
      description: "داده‌ای موجود نیست"
    },
    Icon: {
      icon: "آیکن"
    },
    Text: {
      edit: "ویرایش",
      copy: "کپی",
      copied: "کپی شد",
      expand: "توسعه"
    },
    Form: {
      optional: "(اختیاری)",
      defaultValidateMessages: {
        default: "خطا در ${label}",
        required: "فیلد ${label} اجباریست",
        enum: "${label} باید یکی از [${enum}] باشد",
        whitespace: "${label} نمیتواند خالی باشد",
        date: {
          format: "ساختار تاریخ در ${label} نامعتبر است",
          parse: "${label} قابل تبدیل به تاریخ نیست",
          invalid: "${label} تاریخی نا معتبر است"
        },
        types: {
          string: t,
          method: t,
          array: t,
          object: t,
          number: t,
          date: t,
          boolean: t,
          integer: t,
          float: t,
          regexp: t,
          email: t,
          url: t,
          hex: t
        },
        string: {
          len: "${label} باید ${len} کاراکتر باشد",
          min: "${label} باید حداقل ${min} کاراکتر باشد",
          max: "${label} باید حداکثر ${max} کاراکتر باشد",
          range: "${label} باید بین ${min}-${max} کاراکتر باشد"
        },
        number: {
          len: "${label} باید برابر ${len}",
          min: "${label} حداقل میتواند ${min} باشد",
          max: "${label} حداکثر میتواند ${max} باشد",
          range: "${label} باید بین ${min}-${max} باشد"
        },
        array: {
          len: "تعداد ${label} باید ${len} باشد.",
          min: "تعداد ${label} حداقل باید ${min} باشد",
          max: "تعداد ${label} حداکثر باید ${max} باشد",
          range: "مقدار ${label} باید بین ${min}-${max} باشد"
        },
        pattern: {
          mismatch: "الگوی ${label} با ${pattern} برابری نمی‌کند"
        }
      }
    },
    Image: {
      preview: "پیش‌نمایش"
    },
    QRCode: {
      expired: "QR Code منقضی شذد",
      refresh: "به‌روزرسانی"
    }
  };
  return c.default = P, c;
}
var p, F;
function V() {
  return F || (F = 1, p = /* @__PURE__ */ L()), p;
}
var N = /* @__PURE__ */ V();
const Q = /* @__PURE__ */ x(N), z = (a) => {
  const e = a === "fa", i = e ? "rtl" : "ltr", r = e ? Q : w;
  return { theme: {
    token: {
      fontFamily: e ? "YekanBakhFaRegular" : "RobotoRegular",
      colorPrimary: o.primary,
      colorSuccess: o.positive,
      colorError: o.negative,
      borderRadius: 4
    },
    components: {
      Input: {
        colorBorder: o.primary_light_3,
        hoverBorderColor: o.primary_dark_1,
        colorBgContainerDisabled: o.light_6
      }
    }
  }, direction: i, locale: r };
};
function D(a, e) {
  const i = { ...a };
  if (a && typeof a == "object" && e && typeof e == "object") {
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const l = e[r], t = i[r];
        l && typeof l == "object" && !Array.isArray(l) && t && typeof t == "object" && !Array.isArray(t) ? i[r] = D(t, l) : l !== void 0 && (i[r] = l);
      }
  }
  return i;
}
const Z = ({
  children: a,
  locales: e,
  antdConfigs: i = {}
}) => {
  n.config({
    locales: e
  });
  const r = z(e?.lang ?? "fa"), l = D(r, i);
  return /* @__PURE__ */ j(q, { ...l, children: a });
};
export {
  Z as AbrplusUIKitProvider,
  o as colors,
  X as tailwindConfig
};
