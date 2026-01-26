"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const index = require("./index-BMHdixXr.cjs");
const tailwindMerge = require("tailwind-merge");
const React = require("react");
const reactI18next = require("react-i18next");
const index$1 = require("./index-CULqMce_.cjs");
const colors = require("./colors-TPZkyKI4.cjs");
const require$$2 = require("react-dom");
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
const Badge = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Badge, { ...rest, children });
};
const PortalContainer = ({ children, id }) => {
  const [container, setContainer] = React.useState(null);
  React.useEffect(() => {
    let el = document.getElementById(id);
    if (!el) {
      const observer = new MutationObserver(() => {
        el = document.getElementById(id);
        if (el) {
          setContainer(el);
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
    setContainer(el);
  }, [id]);
  if (!container) return null;
  return require$$2.createPortal(children, container);
};
const Clickable = ({ children, onClick, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick,
      className: tailwindMerge.twMerge(
        "hover:bg-light-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-colors",
        className
      ),
      ...rest,
      children
    }
  );
};
const ClickAwayListener = ({
  children,
  onClickAway,
  document: document2 = window.document,
  active = true,
  className,
  hasDefaultStyle = true
}) => {
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    if (!active) return;
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClickAway();
      }
    };
    document2.addEventListener("mousedown", handleClickOutside);
    return () => {
      document2.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickAway, active, document2]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ref: containerRef,
      ...hasDefaultStyle ? { className: tailwindMerge.twMerge("flex h-full w-full flex-1", className) } : { className },
      children: [
        " ",
        children
      ]
    }
  );
};
const Collapse = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Collapse, { ...props });
};
Collapse.Panel = antd.Collapse.Panel;
const DatePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  onChange: onChangeProp,
  onChangeISO,
  value: valueProp,
  valueISO,
  locale,
  hideErrorMessage = false,
  ...props
}) => {
  const { i18n } = reactI18next.useTranslation();
  const value = React.useMemo(() => {
    if (valueISO) {
      return index.moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = React.useCallback(
    (date, dateString) => {
      onChangeProp?.(date, dateString);
      onChangeISO?.(date?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, children: label }) : label,
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.mainExports.DatePicker,
      {
        format: i18n.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: locale || i18n.language === "fa" ? "fa" : "en",
        customColors: index.datePickerColors,
        onChange,
        value,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
  ] });
};
const Empty = ({ flex, direction = "horizontal" }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: tailwindMerge.twMerge("flex", direction === "horizontal" ? "flex-row" : "flex-col"),
      style: { flex }
    }
  );
};
const Fallback = ({ size }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-full min-h-[100px] w-full", align: "center", justify: "center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size }) });
};
const HorizontalLine = ({
  className,
  wrapperClassName,
  style,
  color,
  text
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { "data-testid": "horizontal-line", className: wrapperClassName, align: "center", gap: 10, children: [
    text ? /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Text,
      {
        className: "whitespace-nowrap",
        weight: "normal",
        size: "medium",
        color: colors.colors.primary,
        children: text
      }
    ) : null,
    /* @__PURE__ */ jsxRuntime.jsx(
      "hr",
      {
        role: "separator",
        className: tailwindMerge.twMerge("border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t", className),
        style: { ...style, borderTopColor: color }
      }
    )
  ] });
};
const NavigationTabs = ({
  children,
  onChange,
  wrapperStyle,
  wrapperClassName,
  spaceBetweenTabs,
  activeStyleMode = "background",
  defaultTabKey,
  extraAfterItem,
  extraBeforeItem,
  extraBeforeChildren,
  extraAfterChildren,
  tabFontSize = 18,
  tabsClassName,
  tabClassName,
  tabsWrapperStyle,
  innerContentClassName,
  extraChildrenInheritBorder,
  hasBorder = true
}) => {
  const [currentTabKey, setCurrentTabKey] = React.useState(void 0);
  React.useEffect(() => {
    const defaultActiveTab = React.Children.map(children, ({ props }) => props)[0];
    if (!defaultTabKey) {
      setCurrentTabKey(defaultActiveTab.tabKey);
      return;
    }
    setCurrentTabKey(defaultTabKey);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { style: wrapperStyle, vertical: true, className: tailwindMerge.twMerge("w-full flex-1", wrapperClassName), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      index$1.Flex,
      {
        align: "center",
        className: tailwindMerge.twMerge(
          activeStyleMode === "underlined" && hasBorder && "border-light-7 border-b border-solid"
        ),
        children: [
          extraBeforeItem && /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Flex,
            {
              justify: "center",
              className: tailwindMerge.twMerge(
                "h-full px-2",
                extraChildrenInheritBorder && "border-light-6 border-b border-solid"
              ),
              children: typeof extraBeforeItem === "function" ? extraBeforeItem(currentTabKey) : extraBeforeItem
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Flex,
            {
              align: "center",
              className: tailwindMerge.twMerge(
                "w-full min-w-max flex-1 flex-row overflow-y-auto overflow-x-hidden",
                tabsClassName
              ),
              gap: spaceBetweenTabs !== void 0 ? spaceBetweenTabs : 24,
              style: tabsWrapperStyle,
              children: React.Children.map(
                children,
                ({ props: { tabKey, title, className, style, isVisible = true } }) => isVisible ? /* @__PURE__ */ jsxRuntime.jsx(
                  index$1.Flex,
                  {
                    align: "center",
                    justify: "center",
                    style: typeof style === "function" ? style(currentTabKey || tabKey) : style,
                    className: tailwindMerge.twMerge(
                      "relative h-full min-h-[35px] w-fit min-w-[24px] cursor-pointer rounded",
                      tabClassName,
                      typeof title === "string" ? "px-4 pb-2 pt-4" : "px-0 pb-2 pt-4",
                      tabKey === currentTabKey && (activeStyleMode === "background" ? "after:bg-primary-light-1 z-auto overflow-hidden px-4 after:absolute after:left-0 after:top-0 after:h-full after:w-full" : activeStyleMode === "underlined" ? " after:border-action z-auto after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-b-[2px] after:border-solid" : void 0),
                      typeof className === "function" ? className(currentTabKey || tabKey) : className
                    ),
                    onClick: () => {
                      setCurrentTabKey(tabKey);
                      onChange?.(tabKey);
                    },
                    children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Text,
                      {
                        size: tabFontSize,
                        weight: "medium",
                        className: tailwindMerge.twMerge(
                          "z-10",
                          activeStyleMode === "background" && tabKey === currentTabKey && "text-white-ff",
                          activeStyleMode === "underlined" && tabKey === currentTabKey && "text-action"
                        ),
                        children: title
                      }
                    ) : title?.(tabKey === currentTabKey ? colors.colors.negative : colors.colors.negative)
                  },
                  tabKey
                ) : null
              )
            }
          ),
          extraAfterItem && /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Flex,
            {
              justify: "center",
              align: "center",
              className: tailwindMerge.twMerge(
                "h-full px-2",
                extraChildrenInheritBorder && "border-light-6 border-b border-solid"
              ),
              children: typeof extraAfterItem === "function" ? extraAfterItem(currentTabKey) : extraAfterItem
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: tailwindMerge.twMerge("max-w-full flex-1", innerContentClassName), children: [
      extraBeforeChildren && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { children: typeof extraBeforeChildren === "function" ? extraBeforeChildren(currentTabKey) : extraBeforeChildren }),
      React.Children.map(children, ({ props: { tabKey, children: children2 } }) => {
        if (tabKey === currentTabKey) {
          return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "max-w-full flex-1", children: children2 }, tabKey);
        }
        return null;
      }),
      extraAfterChildren && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { children: typeof extraAfterChildren === "function" ? extraAfterChildren(currentTabKey) : extraAfterChildren })
    ] })
  ] });
};
NavigationTabs.Tab = (_props) => null;
const PopoverLink = ({ children, size, color, weight, className, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Flex,
    {
      className: tailwindMerge.twMerge("border-secondary items-center border-b border-dashed", className),
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Text,
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
        headerTitle && /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-b px-3 py-1", children: [
          typeof headerTitle === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 12, weight: "medium", color: colors.colors.primary, children: headerTitle }) : headerTitle,
          closeable && /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Icon,
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
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "border-light-7 bg-light-1 w-full items-center justify-between rounded-t border-t px-3 py-1", children: footer })
      ] })
    }
  );
};
Popover.Link = PopoverLink;
const Radio = (props) => /* @__PURE__ */ jsxRuntime.jsx(antd.Radio, { ...props });
Radio.Group = antd.Radio.Group;
const RangePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  value,
  hideErrorMessage = false,
  ...props
}) => {
  const { i18n } = reactI18next.useTranslation();
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, children: label }) : label,
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.mainExports.RangePicker,
      {
        format: i18n.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: i18n.language === "fa" ? "fa" : "en",
        customColors: index.datePickerColors,
        value: isValueValid ? value : null,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
  ] });
};
const Separator = ({ direction = "vertical", className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "separator",
      className: tailwindMerge.twMerge(
        "bg-light-7",
        direction === "vertical" ? "mx-2 h-full w-[1px]" : "my-2 h-[1px] w-full",
        className
      )
    }
  );
};
const TabConfig = {
  components: {
    Tabs: {
      inkBarColor: colors.colors.secondary,
      itemColor: colors.colors.primary,
      itemSelectedColor: colors.colors.secondary,
      titleFontSize: 18,
      horizontalItemPadding: "0px",
      horizontalMargin: "0",
      itemHoverColor: colors.colors.primary_light_1,
      itemActiveColor: colors.colors.primary_light_2
    }
  }
};
const Tab = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: TabConfig, children: /* @__PURE__ */ jsxRuntime.jsx(antd.Tabs, { ...props }) });
};
Tab.TabPane = antd.Tabs.TabPane;
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
        index$1.Flex,
        {
          ref: finalRef,
          align: "center",
          justify: "center",
          className: "h-full w-full",
          style: {
            minHeight: loadingMinHeight
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size: loadingSize })
        }
      );
    }
    if (error) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        index$1.Flex,
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
            /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, color: colors.colors.negative, children: error }),
            onRetry && /* @__PURE__ */ jsxRuntime.jsx(index.Button.Primary, { onClick: onRetry, children: t("common.message.tryAgain") })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { ref: finalRef, ...rest, children });
  }
);
exports.BorderedTitle = index.BorderedTitle;
exports.Breadcrumbs = index.Breadcrumbs;
exports.Card = index.Card;
exports.Checkbox = index.Checkbox;
exports.Tooltip = index.Tooltip;
exports.Upload = index.Upload;
exports.VerticalLine = index.VerticalLine;
exports.Icon = index$1.Icon;
exports.Render = index$1.Render;
exports.Badge = Badge;
exports.ClickAwayListener = ClickAwayListener;
exports.Clickable = Clickable;
exports.Collapse = Collapse;
exports.DatePicker = DatePicker;
exports.Empty = Empty;
exports.Fallback = Fallback;
exports.HorizontalLine = HorizontalLine;
exports.NavigationTabs = NavigationTabs;
exports.Popover = Popover;
exports.PortalContainer = PortalContainer;
exports.Radio = Radio;
exports.RangePicker = RangePicker;
exports.Separator = Separator;
exports.Tab = Tab;
exports.View = View;
