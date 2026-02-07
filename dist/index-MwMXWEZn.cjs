"use strict";
const jsxRuntime = require("react/jsx-runtime");
const index = require("./index-hO3PhKtS.cjs");
const colors = require("./colors-TPZkyKI4.cjs");
const tailwindMerge = require("tailwind-merge");
function uncapitalize(value) {
  return value.slice(0, 1).toLowerCase() + value.slice(1);
}
function batch(components) {
  const assignees = Object.assign({}, { ...components });
  return new Proxy(assignees, {
    get(target, property) {
      const safeTarget = Object.freeze({
        ...target,
        [Symbol.toPrimitive]() {
          return "Error: Attempted to render object as a JSX";
        }
      });
      if (property in safeTarget) {
        return safeTarget[property];
      }
      const origProperty = uncapitalize(property);
      if (origProperty in safeTarget) {
        return safeTarget[origProperty];
      }
      return null;
    }
  });
}
const TooltipTitle = ({ title, iconName }) => /* @__PURE__ */ jsxRuntime.jsxs(index.Flex, { align: "center", gap: 8, children: [
  /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 14, color: colors.colors.white_ff, children: title }),
  iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName })
] });
const Tooltip = ({ children, title, iconName, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Tooltip,
    {
      title: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(TooltipTitle, { title, iconName }) : title,
      ...rest,
      children
    }
  );
};
const fontSizePicker = {
  block: "text-[16px]",
  medium: "text-[16px]",
  small: "text-[12px]"
};
const paddingPicker = (hasIcon) => ({
  start: {
    block: `pe-4 ${hasIcon ? "ps-3" : "ps-4"} `,
    medium: `pe-4 ${hasIcon ? "ps-3" : "ps-4"} `,
    small: `pe-3 ps-[8px]`
  },
  end: {
    block: `ps-4 pe-3`,
    medium: `ps-4 pe-3`,
    small: `ps-4 pe-3`
  }
});
const buttonDefaultClasses = "flex relative select-none w-fit appearance-none flex-row items-center  justify-center gap-2 whitespace-nowrap rounded text-center outline-none";
const ActionButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const appName = colors.AbrplusUIKit.config().getAppName();
  const getColor = () => {
    if ((disabled || isLoading) && appName) {
      if (appName === "home" || appName === "sandbox" || appName === "bi" || appName === "storybook")
        return colors.colors["sales"]["action_light_2"];
      return colors.colors[appName]["action_light_2"];
    }
    return colors.colors.white_ff;
  };
  const getColorClass = () => {
    if (!appName) return;
    const data = {
      bi: tailwindMerge.twMerge("bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1"),
      call: tailwindMerge.twMerge("bg-call-action hover:bg-call-action-light-1 active:bg-call-action-dark-1"),
      club: tailwindMerge.twMerge("bg-club-action hover:bg-club-action-light-1 active:bg-club-action-dark-1"),
      marketing: tailwindMerge.twMerge(
        "bg-marketing-action hover:bg-marketing-action-light-1 active:bg-marketing-action-dark-1"
      ),
      sales: tailwindMerge.twMerge("bg-sales-action hover:bg-sales-action-light-1 active:bg-sales-action-dark-1"),
      team: tailwindMerge.twMerge("bg-team-action hover:bg-team-action-light-1 active:bg-team-action-dark-1"),
      rayan: tailwindMerge.twMerge("bg-rayan-action hover:bg-rayan-action-light-1 active:bg-rayan-action-dark-1")
    };
    return data?.[appName] || data["sales"];
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "bg-repo disabled:bg-light-6 ",
        getColorClass(),
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "cursor-not-allowed border-light-6",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const IconButton = ({
  style,
  height = 34,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  iconProps,
  color,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      style: {
        height,
        ...style
      },
      className: tailwindMerge.twMerge(
        buttonDefaultClasses,
        "h-[34px] w-[34px] p-4",
        "bg-light-1  border-primary-light-3 border",
        "hover:bg-white-ff hover:border-primary-light-2",
        "active:bg-light-6 active:border-primary-light-2",
        "disabled:text-primary-light-2 disabled:bg-light-6 disabled:border-light-6",
        disabled && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled,
      ...rest,
      children: iconProps?.renderIcon ? iconProps.renderIcon : /* @__PURE__ */ jsxRuntime.jsx(
        index.Icon,
        {
          name: iconName,
          color: disabled ? colors.colors.primary_light_3 : color ?? colors.colors.primary,
          ...iconProps
        }
      )
    }
  );
};
const NegativeButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  variant = "outline",
  // Default variant
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    } else if (variant === "contain") {
      return colors.colors.white_ff;
    }
    return colors.colors.negative;
  };
  const outlineClasses = "hover:bg-negative-light-1 active:bg-negative-dark-1 [&_p]:hover:!text-white-ff [&_*]:hover:fill-white-ff disabled:bg-light-6 bg-transparent border-negative hover:border-negative-light-1 active:border-negative-dark-1 disabled:light-6 border-[2px] border-solid";
  const containClasses = "bg-negative hover:bg-negative-light-1 active:bg-negative-dark-1 disabled:bg-light-6 border-transparent";
  const buttonVariantClasses = variant === "contain" ? containClasses : outlineClasses;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        buttonDefaultClasses,
        buttonVariantClasses,
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            name: iconName,
            className: tailwindMerge.twMerge(fontSizePicker[mode || "block"]),
            color: getColor()
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Text, { weight: "medium", size: 16, color: getColor(), lang, children }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const PrimaryButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  textSize,
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.white_ff;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "bg-primary hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "cursor-not-allowed border-light-6",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: tailwindMerge.twMerge(
              "text-white-ff",
              (disabled || isLoading) && "text-primary-light-2",
              fontSizePicker[mode || "block"]
            ),
            size: textSize,
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const SecondaryButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "bg-transparent hover:bg-primary-light-1 active:bg-primary-dark-1 disabled:bg-light-6 [&_p]:text-primary [&_p]:hover:text-white-ff [&_svg]:hover:!fill-white-ff",
        "border-[2px] border-solid border-primary hover:border-primary-light-1 active:border-primary-dark-1 disabled:bg-light-6",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Text, { lang, weight: "medium", className: fontSizePicker[mode || "block"], children }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const SecondaryQuietButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "hover:bg-light-6 active:bg-light-7 disabled:light-6 bg-transparent",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed ",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const TertiaryButton = ({
  style,
  height,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.primary_dark_1;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: {
        height: height || 34,
        ...style
      },
      className: tailwindMerge.twMerge(
        "bg-light-1 hover:bg-white-ff active:light-6 disabled:light-6",
        "border-primary-light-3 hover:border-primary-light-2 active:bg-primary-light-2 disabled:light-6 border-[1px] border-solid",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        (disabled || isLoading) && "cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: fontSizePicker[mode || "block"],
            color: getColor(),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: iconName, className: fontSizePicker[mode || "block"], color: getColor() }) })
      ]
    }
  );
};
const TextButton = ({
  style,
  height = 34,
  mode,
  children,
  iconName,
  disabled,
  className,
  iconPosition = "start",
  isLoading,
  lang = "fa",
  underline,
  textProps,
  startIconSize,
  endIconSize,
  ...rest
}) => {
  const getColor = () => {
    if (disabled || isLoading) {
      return colors.colors.primary_light_2;
    }
    return colors.colors.black;
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      lang,
      style: { height, ...style },
      className: tailwindMerge.twMerge(
        "disabled:bg-light-6 border-none hover:bg-none focus:bg-none",
        paddingPicker(!!iconName)[iconPosition][mode || "block"],
        fontSizePicker[mode || "block"],
        buttonDefaultClasses,
        mode === "block" && "w-full",
        (disabled || isLoading) && "border-light-6 cursor-not-allowed",
        className
      ),
      disabled: disabled || isLoading,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: isLoading, children: /* @__PURE__ */ jsxRuntime.jsx(index.Flex, { className: "absolute", children: /* @__PURE__ */ jsxRuntime.jsx(index.Loading, { isLoading: true, size: 16 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "start", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            size: startIconSize,
            name: iconName,
            className: fontSizePicker[mode || "block"],
            color: getColor()
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          index.Text,
          {
            lang,
            weight: "medium",
            className: tailwindMerge.twMerge(
              (disabled || isLoading) && "text-primary-light-2",
              fontSizePicker[mode || "block"],
              underline && "underline"
            ),
            ...textProps,
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.Render, { when: iconPosition === "end", children: iconName && /* @__PURE__ */ jsxRuntime.jsx(
          index.Icon,
          {
            size: endIconSize,
            name: iconName,
            className: fontSizePicker[mode || "block"],
            color: getColor()
          }
        ) })
      ]
    }
  );
};
const Button = batch({
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton,
  SecondaryQuiet: SecondaryQuietButton,
  Icon: IconButton,
  Negative: NegativeButton,
  Action: ActionButton,
  Text: TextButton
});
exports.Button = Button;
exports.IconButton = IconButton;
exports.Tooltip = Tooltip;
exports.batch = batch;
exports.buttonDefaultClasses = buttonDefaultClasses;
exports.fontSizePicker = fontSizePicker;
exports.paddingPicker = paddingPicker;
