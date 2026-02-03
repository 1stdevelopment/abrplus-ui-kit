import { jsx } from "react/jsx-runtime";
import { Alert as Alert$1, ConfigProvider, Menu as Menu$1, Pagination as Pagination$1, Progress as Progress$1, Segmented, Skeleton as Skeleton$1, Slider as Slider$1, Steps as Steps$1, Switch as Switch$1, Timeline as Timeline$1 } from "antd";
import { A } from "./index-DLUd_0LP.js";
import { B } from "./index-BzahloOb.js";
import { D, a, I } from "./index-DCojd1ld.js";
import { F, L, T } from "./index-C24zbKLS.js";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./colors-CztsZ6e_.js";
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
const Slider = ({ size = 2, ...rest }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { direction: "ltr", theme: { components: { Slider: { railSize: size } } }, children: /* @__PURE__ */ jsx(Slider$1, { ...rest }) });
};
const stepTheme = {
  components: {
    Steps: {
      iconFontSize: 18,
      iconTop: 1
    }
  }
};
const Steps = ({ colorPrimary, rootClassName, ...props }) => {
  const mergedTheme = {
    ...stepTheme,
    token: {
      ...stepTheme.token || {},
      ...colorPrimary ? { colorPrimary } : {}
    }
  };
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: mergedTheme, children: /* @__PURE__ */ jsx(
    Steps$1,
    {
      rootClassName: twMerge("[&_.ant-steps-item-finish_.ant-steps-icon]:top-1", rootClassName),
      ...props
    }
  ) });
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
  Slider,
  Steps,
  Switch,
  T as Text,
  Timeline
};
