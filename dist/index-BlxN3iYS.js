import { jsx, jsxs } from "react/jsx-runtime";
import { ConfigProvider, Dropdown as Dropdown$1, Image as Image$1 } from "antd";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { F as Flex, L as Loading } from "./index-CB4n-5do.js";
const SwitchThemeConfig = {
  components: {
    Dropdown: {}
  }
};
const Dropdown = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: SwitchThemeConfig, children: /* @__PURE__ */ jsx(Dropdown$1, { ...props, className: twMerge("bg-light-7", className) }) });
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
  const [showFallBack, setShowFallBack] = useState(false);
  return /* @__PURE__ */ jsx(
    Flex,
    {
      style: { width, height },
      align: "center",
      justify: "center",
      className: wrapperClassName,
      children: showFallBack && fallback ? fallback : /* @__PURE__ */ jsx(
        Image$1,
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: twMerge(className, "w-full"), onClick: (e) => e.stopPropagation(), children: [
    children,
    hasMore && /* @__PURE__ */ jsx(Flex, { className: "min-h-12", align: "center", justify: "center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, color: indicatorColor, size: indicatorSize }) })
  ] });
};
export {
  Dropdown as D,
  InfiniteLoader as I,
  Image as a
};
