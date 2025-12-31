import { jsx } from "react/jsx-runtime";
import { Alert as Alert$1, ConfigProvider, Menu as Menu$1, Pagination as Pagination$1, Progress as Progress$1, Segmented, Skeleton as Skeleton$1, Steps as Steps$1, Switch as Switch$1, Timeline as Timeline$1 } from "antd";
import { A, D, a, I } from "./index-WhgJE7pP.js";
import { B, F, L, T } from "./index-DWZAreuI.js";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./colors-BmRCmHtR.js";
import { forwardRef } from "react";
const Alert = (props) => {
  return /* @__PURE__ */ jsx(Alert$1, { ...props });
};
const Menu = ({ ...props }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { children: /* @__PURE__ */ jsx(Menu$1, { ...props }) });
};
Menu.Item = Menu$1.Item;
Menu.ItemGroup = Menu$1.ItemGroup;
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
const Skeleton = (props) => {
  return /* @__PURE__ */ jsx(Skeleton$1, { ...props });
};
Skeleton.Avatar = Skeleton$1.Avatar;
Skeleton.Button = Skeleton$1.Button;
Skeleton.Image = Skeleton$1.Image;
Skeleton.Input = Skeleton$1.Input;
Skeleton.Node = Skeleton$1.Node;
const stepTheme = {
  components: {}
};
const Steps = (props) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: stepTheme, children: /* @__PURE__ */ jsx(Steps$1, { ...props }) });
};
Steps.Step = Steps$1.Step;
const SwitchThemeConfig = {
  components: {
    Switch: {
      handleBg: colors.light_1,
      colorPrimaryHover: colors.primary,
      colorTextTertiary: colors.light_1,
      trackMinWidthSM: 26
    }
  }
};
const Switch = forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: SwitchThemeConfig, children: /* @__PURE__ */ jsx(Switch$1, { ref, ...props, className: twMerge("bg-light-7", className) }) });
});
const timeThemeConfig = {
  components: {
    Timeline: {
      tailColor: colors.light_7,
      tailWidth: 4
    }
  }
};
const Timeline = ({ ...props }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: timeThemeConfig, children: /* @__PURE__ */ jsx(Timeline$1, { ...props }) });
};
export {
  Alert,
  A as Avatar,
  B as Breadcrumb,
  D as Dropdown,
  F as Flex,
  a as Image,
  I as InfiniteLoader,
  L as Loading,
  Menu,
  Pagination,
  Progress,
  SegmentedSwitch,
  Skeleton,
  Steps,
  Switch,
  T as Text,
  Timeline
};
