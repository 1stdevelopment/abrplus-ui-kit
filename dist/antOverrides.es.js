import { j as e, t as r } from "./index-iriWPKEd.js";
import { A as S, B as A, D as w, F as T, d as b, a as C, L, M, S as $, f as k, g as v, T as y, h as B } from "./index-iriWPKEd.js";
import { Alert as o, ConfigProvider as t, Pagination as n, Progress as i, Segmented as g } from "antd";
import { c as m } from "./colors-qnr5G3YJ.js";
const p = (s) => /* @__PURE__ */ e.jsx(o, { ...s }), c = {
  components: {
    Pagination: {}
  }
}, h = ({ className: s, ...a }) => /* @__PURE__ */ e.jsx(t, { theme: c, children: /* @__PURE__ */ e.jsx(n, { ...a, className: r("bg-light-7", s) }) }), P = ({ className: s, ...a }) => /* @__PURE__ */ e.jsx(
  i,
  {
    strokeColor: m.secondary,
    ...a,
    className: r("bg-light-7", s)
  }
), f = ({ style: s, ...a }) => /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx(
  g,
  {
    ...a,
    style: {
      padding: 2,
      ...s
    }
  }
) });
export {
  p as Alert,
  S as Avatar,
  A as Breadcrumb,
  w as Dropdown,
  T as Flex,
  b as Image,
  C as InfiniteLoader,
  L as Loading,
  M as Menu,
  h as Pagination,
  P as Progress,
  f as SegmentedSwitch,
  $ as Skeleton,
  k as Steps,
  v as Switch,
  y as Text,
  B as Timeline
};
