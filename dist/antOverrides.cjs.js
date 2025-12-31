"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const index = require("./index-kmBTNrbf.cjs");
const tailwindMerge = require("tailwind-merge");
const colors = require("./colors-Dsi7eBuO.cjs");
const Alert = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Alert, { ...props });
};
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
exports.Avatar = index.Avatar;
exports.Breadcrumb = index.Breadcrumb;
exports.Dropdown = index.Dropdown;
exports.Flex = index.Flex;
exports.Image = index.Image;
exports.InfiniteLoader = index.InfiniteLoader;
exports.Loading = index.Loading;
exports.Menu = index.Menu;
exports.Skeleton = index.Skeleton;
exports.Steps = index.Steps;
exports.Switch = index.Switch;
exports.Text = index.Text;
exports.Timeline = index.Timeline;
exports.Alert = Alert;
exports.Pagination = Pagination;
exports.Progress = Progress;
exports.SegmentedSwitch = SegmentedSwitch;
