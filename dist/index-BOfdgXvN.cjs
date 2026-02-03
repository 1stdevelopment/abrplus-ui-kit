"use strict";
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const tailwindMerge = require("tailwind-merge");
const index = require("./index-CW9vyiq6.cjs");
const colors = require("./colors-TPZkyKI4.cjs");
const React = require("react");
const reactI18next = require("react-i18next");
const index$1 = require("./index-keKfh9ZW.cjs");
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = typeof window === "undefined" ? {
    innerWidth: 1024,
    innerHeight: 768
  } : window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  const targetProps = [];
  const handleResize = () => {
    const { width, height } = getWindowDimensions();
    if (width !== windowDimensions.width && targetProps.includes("width") || height !== windowDimensions.height && targetProps.includes("height")) {
      setWindowDimensions({ width, height });
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return new Proxy(windowDimensions, {
    get(target, prop) {
      targetProps.push(prop);
      return target[prop];
    }
  });
}
const PopoverLink = ({ children, size, color, weight, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Flex,
    {
      className: tailwindMerge.twMerge("border-secondary items-center border-b border-dashed", className),
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index.Text,
        {
          className: "cursor-pointer select-none",
          color: color || colors.colors.secondary,
          size: size || 16,
          weight: weight || "medium",
          children
        }
      )
    }
  );
};
const Popover = ({
  overlayInnerStyle,
  overlayClassName,
  overlayInnerClassName,
  headerTitle,
  content,
  closeable = true,
  onClose,
  footer,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Popover,
    {
      showArrow: false,
      arrow: false,
      overlayClassName: tailwindMerge.twMerge("[&_.ant-popover-inner]:p-0", overlayClassName),
      overlayInnerStyle: {
        boxShadow: `2px 3px 7px 0 rgba(67, 88, 121, 0.15)`
      },
      ...rest,
      content: /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
        headerTitle && /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1", children: [
          typeof headerTitle === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 12, weight: "medium", color: colors.colors.primary, children: headerTitle }) : headerTitle,
          closeable && /* @__PURE__ */ jsxRuntime.jsx(
            index.Icon,
            {
              name: "Close",
              className: "cursor-pointer",
              onClick: onClose,
              color: colors.colors.primary,
              size: 12
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge("p-3", overlayInnerClassName), style: overlayInnerStyle, children: typeof content === "function" ? content() : content }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1", children: footer })
      ] })
    }
  );
};
Popover.Link = PopoverLink;
function fillRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (typeof ref === "object" && ref && "current" in ref) {
    ref.current = node;
  }
}
function composeRef(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
}
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
let didWarn = false;
let resizeObserver = null;
function getResizeObserver() {
  if (canUseDOM && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          const node = entry.target;
          const onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            measure(
              node,
              //@ts-ignore
              (x, y, width, height, left, top) => {
                const event = {
                  // $FlowFixMe
                  nativeEvent: {
                    layout: { x, y, width, height, left, top }
                  },
                  timeStamp: Date.now()
                };
                Object.defineProperty(event.nativeEvent, "target", {
                  enumerable: true,
                  get: () => entry.target
                });
                onLayout(event);
              }
            );
          }
        });
      });
    }
  } else if (!didWarn) {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
      didWarn = true;
    }
  }
  return resizeObserver;
}
function useElementLayout(ref, onLayout) {
  const { width, height } = useWindowDimensions();
  const observer = getResizeObserver();
  React.useEffect(() => {
    const node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  React.useEffect(() => {
    const node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer, width, height]);
}
const getBoundingClientRect = (node) => {
  if (node != null) {
    const isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
const measureLayout = (node, relativeToNativeNode, callback) => {
  const relativeNode = node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      const relativeRect = getBoundingClientRect(relativeNode);
      const { height, left, top, width } = getRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};
const getRect = (node) => {
  const { x, y, top, left } = getBoundingClientRect(node);
  const width = node.offsetWidth;
  const height = node.offsetHeight;
  return { x, y, width, height, top, left };
};
function measure(node, callback) {
  measureLayout(node, null, callback);
}
const View = React.forwardRef(
  ({
    children,
    isLoading,
    onRetry,
    error,
    loadingMinHeight,
    loadingSize,
    onLayout,
    ...rest
  }, ref) => {
    const contentLayoutRef = React.useRef(null);
    useElementLayout(contentLayoutRef, onLayout);
    const finalRef = composeRef(ref, contentLayoutRef);
    const { t } = reactI18next.useTranslation();
    if (isLoading) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        index.Flex,
        {
          ref: finalRef,
          align: "center",
          justify: "center",
          className: "h-full w-full",
          style: {
            minHeight: loadingMinHeight
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: loadingSize })
        }
      );
    }
    if (error) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        index.Flex,
        {
          ref: finalRef,
          align: "center",
          justify: "center",
          style: {
            minHeight: loadingMinHeight
          },
          gap: 8,
          vertical: true,
          className: "h-full w-full",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, color: colors.colors.negative, children: error }),
            onRetry && /* @__PURE__ */ jsxRuntime.jsx(index$1.Button.Primary, { onClick: onRetry, children: t("common.message.tryAgain") })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { ref: finalRef, ...rest, children });
  }
);
exports.Popover = Popover;
exports.View = View;
exports.useWindowDimensions = useWindowDimensions;
