import { jsx } from "react/jsx-runtime";
import { Alert as Alert$1, ConfigProvider, Pagination as Pagination$1, Progress as Progress$1, Segmented } from "antd";
import { A, B, D, F, d, a, L, M, S, f, g, T, h } from "./index-TDH6Fv86.js";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./colors-gpRgsXSS.js";
const Alert = (props) => {
  return /* @__PURE__ */ jsx(Alert$1, { ...props });
};
const PaginationThemeConfig = {
  components: {
    Pagination: {}
  }
};
const Pagination = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: PaginationThemeConfig, children: /* @__PURE__ */ jsx(Pagination$1, { ...props, className: twMerge("bg-light-7", className) }) });
};
const Progress = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    Progress$1,
    {
      strokeColor: colors.secondary,
      ...props,
      className: twMerge("bg-light-7", className)
    }
  );
};
const SegmentedSwitch = ({ style, ...rest }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { children: /* @__PURE__ */ jsx(
    Segmented,
    {
      ...rest,
      style: {
        padding: 2,
        ...style
      }
    }
  ) });
};
export {
  Alert,
  A as Avatar,
  B as Breadcrumb,
  D as Dropdown,
  F as Flex,
  d as Image,
  a as InfiniteLoader,
  L as Loading,
  M as Menu,
  Pagination,
  Progress,
  SegmentedSwitch,
  S as Skeleton,
  f as Steps,
  g as Switch,
  T as Text,
  h as Timeline
};
