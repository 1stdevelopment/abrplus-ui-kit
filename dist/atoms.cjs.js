"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const index = require("./index-DoUTJWeZ.cjs");
const tailwindMerge = require("tailwind-merge");
const React = require("react");
const reactI18next = require("react-i18next");
const colors = require("./colors-Dsi7eBuO.cjs");
require("antd/locale/en_US");
require("antd/locale/fa_IR");
const index$1 = require("./index-kmBTNrbf.cjs");
require("i18next");
const Badge = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Badge, { ...rest, children });
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
  document = window.document,
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickAway, active, document]);
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
exports.BorderedTitle = index.BorderedTitle;
exports.Breadcrumbs = index.Breadcrumbs;
exports.Card = index.Card;
exports.Checkbox = index.Checkbox;
exports.Collapse = index.Collapse;
exports.NavigationTabs = index.NavigationTabs;
exports.Popover = index.Popover;
exports.Radio = index.Radio;
exports.Tab = index.Tab;
exports.Tooltip = index.Tooltip;
exports.Upload = index.Upload;
exports.VerticalLine = index.VerticalLine;
exports.View = index.View;
exports.Icon = index$1.Icon;
exports.Render = index$1.Render;
exports.Badge = Badge;
exports.ClickAwayListener = ClickAwayListener;
exports.Clickable = Clickable;
exports.DatePicker = DatePicker;
exports.Empty = Empty;
exports.Fallback = Fallback;
exports.HorizontalLine = HorizontalLine;
exports.RangePicker = RangePicker;
exports.Separator = Separator;
