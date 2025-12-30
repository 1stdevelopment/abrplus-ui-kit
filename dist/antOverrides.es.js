import { jsx as r } from "react/jsx-runtime";
import { Alert as t, ConfigProvider as o, Pagination as n, Progress as i, Segmented as g } from "antd";
import { t as s } from "./index-Bcn0CdnN.js";
import { A as w, B as T, D as b, F as C, d as L, a as M, L as $, M as k, S as v, f as y, g as B, T as D, h as F } from "./index-Bcn0CdnN.js";
import { c as m } from "./colors-Bi8DBIbo.js";
const h = (e) => /* @__PURE__ */ r(t, { ...e }), c = {
  components: {
    Pagination: {}
  }
}, P = ({ className: e, ...a }) => /* @__PURE__ */ r(o, { theme: c, children: /* @__PURE__ */ r(n, { ...a, className: s("bg-light-7", e) }) }), S = ({ className: e, ...a }) => /* @__PURE__ */ r(
  i,
  {
    strokeColor: m.secondary,
    ...a,
    className: s("bg-light-7", e)
  }
), u = ({ style: e, ...a }) => /* @__PURE__ */ r(o, { children: /* @__PURE__ */ r(
  g,
  {
    ...a,
    style: {
      padding: 2,
      ...e
    }
  }
) });
export {
  h as Alert,
  w as Avatar,
  T as Breadcrumb,
  b as Dropdown,
  C as Flex,
  L as Image,
  M as InfiniteLoader,
  $ as Loading,
  k as Menu,
  P as Pagination,
  S as Progress,
  u as SegmentedSwitch,
  v as Skeleton,
  y as Steps,
  B as Switch,
  D as Text,
  F as Timeline
};
