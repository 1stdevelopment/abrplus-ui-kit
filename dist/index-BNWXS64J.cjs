"use strict";
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const tailwindMerge = require("tailwind-merge");
const React = require("react");
const index = require("./index-CULqMce_.cjs");
const Avatar = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Avatar, { ...props, className: tailwindMerge.twMerge("bg-light-7 border-primary-light-3", className) });
};
const Group = ({ className, max, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Avatar.Group, { max, ...props, className: tailwindMerge.twMerge(className) });
};
Avatar.Group = Group;
const SwitchThemeConfig = {
  components: {
    Dropdown: {}
  }
};
const Dropdown = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: SwitchThemeConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Dropdown, { ...props, className: tailwindMerge.twMerge("bg-light-7", className) }) });
};
const Image = ({
  preview = false,
  width,
  height,
  fallback,
  onError,
  wrapperClassName,
  ...rest
}) => {
  const [showFallBack, setShowFallBack] = React.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Flex,
    {
      style: { width, height },
      align: "center",
      justify: "center",
      className: wrapperClassName,
      children: showFallBack && fallback ? fallback : /* @__PURE__ */ jsxRuntime.jsx(
        antd.Image,
        {
          preview,
          onError: (e) => {
            setShowFallBack(true);
            onError?.(e);
          },
          ...{ width, height },
          ...rest
        }
      )
    }
  );
};
const getScrollableNode = (scrollableNodeId) => {
  return document.getElementById(scrollableNodeId);
};
const debounce = (func, delay) => {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};
const InfiniteLoader = ({
  children,
  indicatorColor,
  indicatorSize,
  className,
  hasMore,
  scrollableNodeId,
  onNextPage
}) => {
  React.useEffect(() => {
    const scrollableNode = getScrollableNode(scrollableNodeId);
    if (scrollableNode) {
      const onScroll = () => {
        if (hasMore) {
          const { scrollHeight, scrollTop, clientHeight } = scrollableNode;
          const isBottom = Math.ceil(scrollTop) + clientHeight === scrollHeight;
          isBottom && onNextPage();
        }
      };
      onScroll();
      const debouncedOnScroll = debounce(onScroll, 1500);
      scrollableNode.addEventListener("scroll", debouncedOnScroll);
      return () => scrollableNode.removeEventListener("scroll", debouncedOnScroll);
    }
  }, [hasMore, scrollableNodeId]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: tailwindMerge.twMerge(className, "w-full"), onClick: (e) => e.stopPropagation(), children: [
    children,
    hasMore && /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "min-h-12", align: "center", justify: "center", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, color: indicatorColor, size: indicatorSize }) })
  ] });
};
exports.Avatar = Avatar;
exports.Dropdown = Dropdown;
exports.Image = Image;
exports.InfiniteLoader = InfiniteLoader;
