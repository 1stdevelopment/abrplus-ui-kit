import { jsx as t } from "react/jsx-runtime";
import { Alert as h, ConfigProvider as o, Menu as s, Pagination as p, Progress as d, Segmented as u, Skeleton as n, Steps as c, Switch as S, Timeline as f } from "antd";
import { A as G, D as W, a as j, I as H } from "./index-C7dRLZkF.js";
import { B as q, F as z, L as E, T as J } from "./index-CuJ3T9JN.js";
import { twMerge as m } from "tailwind-merge";
import { c as i } from "./colors-JhMxZzJC.js";
import { forwardRef as T } from "react";
const y = (e) => /* @__PURE__ */ t(h, { ...e }), l = ({ ...e }) => /* @__PURE__ */ t(o, { children: /* @__PURE__ */ t(s, { ...e }) });
l.Item = s.Item;
l.ItemGroup = s.ItemGroup;
const I = {
  components: {
    Pagination: {}
  }
}, B = ({ className: e, ...r }) => /* @__PURE__ */ t(o, { theme: I, children: /* @__PURE__ */ t(p, { ...r, className: m("bg-light-7", e) }) }), N = ({ className: e, ...r }) => /* @__PURE__ */ t(
  d,
  {
    strokeColor: i.secondary,
    ...r,
    className: m("bg-light-7", e)
  }
), b = ({ style: e, ...r }) => /* @__PURE__ */ t(o, { children: /* @__PURE__ */ t(
  u,
  {
    ...r,
    style: {
      padding: 2,
      ...e
    }
  }
) }), a = (e) => /* @__PURE__ */ t(n, { ...e });
a.Avatar = n.Avatar;
a.Button = n.Button;
a.Image = n.Image;
a.Input = n.Input;
a.Node = n.Node;
const P = {
  components: {}
}, w = (e) => /* @__PURE__ */ t(o, { theme: P, children: /* @__PURE__ */ t(c, { ...e }) });
w.Step = c.Step;
const $ = {
  components: {
    Switch: {
      handleBg: i.light_1,
      colorPrimaryHover: i.primary,
      colorTextTertiary: i.light_1,
      trackMinWidthSM: 26
    }
  }
}, L = T(({ className: e, ...r }, g) => /* @__PURE__ */ t(o, { theme: $, children: /* @__PURE__ */ t(S, { ref: g, ...r, className: m("bg-light-7", e) }) })), x = {
  components: {
    Timeline: {
      tailColor: i.light_7,
      tailWidth: 4
    }
  }
}, _ = ({ ...e }) => /* @__PURE__ */ t(o, { theme: x, children: /* @__PURE__ */ t(f, { ...e }) });
export {
  y as Alert,
  G as Avatar,
  q as Breadcrumb,
  W as Dropdown,
  z as Flex,
  j as Image,
  H as InfiniteLoader,
  E as Loading,
  l as Menu,
  B as Pagination,
  N as Progress,
  b as SegmentedSwitch,
  a as Skeleton,
  w as Steps,
  L as Switch,
  J as Text,
  _ as Timeline
};
