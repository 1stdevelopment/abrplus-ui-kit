"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const index = require("./index-CCvWoynu.cjs");
const index$1 = require("./index-BnnlMHRY.cjs");
const index$2 = require("./index-2Q5IExhU.cjs");
const index$3 = require("./index-CW9vyiq6.cjs");
const tailwindMerge = require("tailwind-merge");
const colors = require("./colors-TPZkyKI4.cjs");
const React = require("react");
const Alert = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Alert, { ...props });
};
const Menu = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(antd.Menu, { ...props }) });
};
Menu.Item = antd.Menu.Item;
Menu.ItemGroup = antd.Menu.ItemGroup;
const PaginationThemeConfig = {
  components: {
    Pagination: {}
  }
};
const Pagination = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: PaginationThemeConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Pagination, { ...props, className: tailwindMerge.twMerge("bg-light-7", className) }) });
};
const Progress = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Progress,
    {
      strokeColor: colors.colors.secondary,
      ...props,
      className: tailwindMerge.twMerge("bg-light-7", className)
    }
  );
};
const SegmentedSwitch = ({ style, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(
    antd.Segmented,
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
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Skeleton, { ...props });
};
Skeleton.Avatar = antd.Skeleton.Avatar;
Skeleton.Button = antd.Skeleton.Button;
Skeleton.Image = antd.Skeleton.Image;
Skeleton.Input = antd.Skeleton.Input;
Skeleton.Node = antd.Skeleton.Node;
const Slider = ({ size = 2, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { direction: "ltr", theme: { components: { Slider: { railSize: size } } }, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Slider, { ...rest }) });
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
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: mergedTheme, children: /* @__PURE__ */ jsxRuntime.jsx(
    antd.Steps,
    {
      rootClassName: tailwindMerge.twMerge("[&_.ant-steps-item-finish_.ant-steps-icon]:top-1", rootClassName),
      ...props
    }
  ) });
};
Steps.Step = antd.Steps.Step;
const SwitchThemeConfig = {
  components: {
    Switch: {
      handleBg: colors.colors.light_1,
      colorPrimaryHover: colors.colors.primary,
      colorTextTertiary: colors.colors.light_1,
      trackMinWidthSM: 26
    }
  }
};
const Switch = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: SwitchThemeConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Switch, { ref, ...props, className: tailwindMerge.twMerge("bg-light-7", className) }) });
});
const timeThemeConfig = {
  components: {
    Timeline: {
      tailColor: colors.colors.light_7,
      tailWidth: 4
    }
  }
};
const Timeline = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: timeThemeConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Timeline, { ...props }) });
};
exports.Avatar = index.Avatar;
exports.Breadcrumb = index$1.Breadcrumb;
exports.Dropdown = index$2.Dropdown;
exports.Image = index$2.Image;
exports.InfiniteLoader = index$2.InfiniteLoader;
exports.Flex = index$3.Flex;
exports.Loading = index$3.Loading;
exports.Text = index$3.Text;
exports.Alert = Alert;
exports.Menu = Menu;
exports.Pagination = Pagination;
exports.Progress = Progress;
exports.SegmentedSwitch = SegmentedSwitch;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Steps = Steps;
exports.Switch = Switch;
exports.Timeline = Timeline;
