import { jsx, jsxs } from "react/jsx-runtime";
import { Badge as Badge$1 } from "antd";
import { m as moment, T as Tooltip, a as mainExports, d as datePickerColors, I as InputErrorMessage } from "./index-CdEE4thq.js";
import { B, b, C, c, e, N, P, R, f, U, V, g } from "./index-CdEE4thq.js";
import { twMerge } from "tailwind-merge";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { c as colors } from "./colors-gpRgsXSS.js";
import "antd/locale/en_US";
import "antd/locale/fa_IR";
import { F as Flex, R as Render, I as Icon, T as Text, L as Loading } from "./index-TDH6Fv86.js";
import "i18next";
const Badge = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx(Badge$1, { ...rest, children });
};
const Clickable = ({ children, onClick, className, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick,
      className: twMerge(
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
  const containerRef = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      ...hasDefaultStyle ? { className: twMerge("flex h-full w-full flex-1", className) } : { className },
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
  const { i18n } = useTranslation();
  const value = useMemo(() => {
    if (valueISO) {
      return moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = useCallback(
    (date, dateString) => {
      onChangeProp?.(date, dateString);
      onChangeISO?.(date?.toISOString());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ jsxs(Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsx(Text, { color: colors.primary, children: label }) : label,
      /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsx(
      mainExports.DatePicker,
      {
        format: i18n.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: locale || i18n.language === "fa" ? "fa" : "en",
        customColors: datePickerColors,
        onChange,
        value,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
  ] });
};
const Empty = ({ flex, direction = "horizontal" }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge("flex", direction === "horizontal" ? "flex-row" : "flex-col"),
      style: { flex }
    }
  );
};
const Fallback = ({ size }) => {
  return /* @__PURE__ */ jsx(Flex, { className: "h-full min-h-[100px] w-full", align: "center", justify: "center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size }) });
};
const HorizontalLine = ({
  className,
  wrapperClassName,
  style,
  color,
  text
}) => {
  return /* @__PURE__ */ jsxs(Flex, { "data-testid": "horizontal-line", className: wrapperClassName, align: "center", gap: 10, children: [
    text ? /* @__PURE__ */ jsx(
      Text,
      {
        className: "whitespace-nowrap",
        weight: "normal",
        size: "medium",
        color: colors.primary,
        children: text
      }
    ) : null,
    /* @__PURE__ */ jsx(
      "hr",
      {
        role: "separator",
        className: twMerge("border-t-light-7 m-0 w-full border-x-0 border-b-0 border-t", className),
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
  const { i18n } = useTranslation();
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  return /* @__PURE__ */ jsxs(Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsx(Text, { color: colors.primary, children: label }) : label,
      /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsx(
      mainExports.RangePicker,
      {
        format: i18n.language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: i18n.language === "fa" ? "fa" : "en",
        customColors: datePickerColors,
        value: isValueValid ? value : null,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
  ] });
};
const Separator = ({ direction = "vertical", className }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "separator",
      className: twMerge(
        "bg-light-7",
        direction === "vertical" ? "mx-2 h-full w-[1px]" : "my-2 h-[1px] w-full",
        className
      )
    }
  );
};
export {
  Badge,
  B as BorderedTitle,
  b as Breadcrumbs,
  C as Card,
  c as Checkbox,
  ClickAwayListener,
  Clickable,
  e as Collapse,
  DatePicker,
  Empty,
  Fallback,
  HorizontalLine,
  Icon,
  N as NavigationTabs,
  P as Popover,
  R as Radio,
  RangePicker,
  Render,
  Separator,
  f as Tab,
  Tooltip,
  U as Upload,
  V as VerticalLine,
  g as View
};
