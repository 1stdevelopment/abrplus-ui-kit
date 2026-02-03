"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const sortable_esm = require("./sortable.esm-CwrpjqII.cjs");
const index = require("./index-BOfdgXvN.cjs");
const index$1 = require("./index-CW9vyiq6.cjs");
const colors = require("./colors-TPZkyKI4.cjs");
const antd = require("antd");
const tailwindMerge = require("tailwind-merge");
const reactI18next = require("react-i18next");
const index$2 = require("./index-keKfh9ZW.cjs");
const React = require("react");
const starkString = require("starkstring");
const deepMerge = require("./deepMerge-Cn27K7-s.cjs");
const reactRouterDom = require("react-router-dom");
function useLocalStorageState(key, initialValue) {
  const initialStoredValue = localStorage.getItem(key);
  const initial = initialStoredValue ? JSON.parse(initialStoredValue) : initialValue;
  const [state, setState] = React.useState(initial);
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
const SMALL_SCREEN = 640;
const MEDIUM_SCREEN = 768;
const LARGE_SCREEN = 1024;
const EXTRA_LARGE_SCREEN = 1280;
function useObserveWindow() {
  const { width } = index.useWindowDimensions();
  const getIsWidthSmallerThan = React.useCallback(
    (query) => {
      if (typeof window === "undefined") return;
      return width <= query;
    },
    [width]
  );
  const getIsWidthLargerThan = React.useCallback(
    (query) => {
      if (typeof window === "undefined") return;
      return width > query;
    },
    [width]
  );
  const getIsWidthBetween = React.useCallback(
    (queries) => {
      if (queries[0] >= queries[1]) {
        throw new Error(
          `The second query: ${queries[1]}px must be greater than the first query: ${queries[0]}px`
        );
      }
      if (typeof window === "undefined") return;
      return width > queries[0] && width <= queries[1];
    },
    [width]
  );
  const isSmallerThenLarge = getIsWidthSmallerThan(LARGE_SCREEN);
  const isSmallerThanSmall = getIsWidthSmallerThan(SMALL_SCREEN);
  const isSmallerThanMedium = getIsWidthSmallerThan(MEDIUM_SCREEN);
  const isSmallerThanExtraLarge = getIsWidthLargerThan(EXTRA_LARGE_SCREEN);
  return {
    getIsWidthSmallerThan,
    getIsWidthLargerThan,
    getIsWidthBetween,
    isSmallerThanExtraLarge,
    isSmallerThanMedium,
    isSmallerThanSmall,
    isSmallerThenLarge
  };
}
const PAGINATION_SIZE = "PAGINATION_SIZE";
function AvatarGroup({
  items = [],
  max = 3,
  avatarProps: { size } = {},
  onClickAvatar,
  hasAnimation = true,
  nameExtractor,
  renderItem,
  itemLogoProps,
  containerProps,
  popoverProps
}) {
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { children: "-" });
  }
  const getName = (item) => {
    return nameExtractor?.(item) ?? (item.name || "--");
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { ...containerProps, children: [
    items.slice(0, max).map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Render,
      {
        when: !!renderItem,
        fallback: /* @__PURE__ */ jsxRuntime.jsx(
          sortable_esm.Logo,
          {
            style: { marginInlineStart: index2 - 12, width: size, height: size },
            imageSrc: item?.imageSrc,
            hasToolTip: true,
            toolTipTitle: getName(item),
            hasAnimation,
            onClick: () => onClickAvatar?.(item),
            ...itemLogoProps
          },
          item.id
        ),
        children: renderItem?.(item)
      }
    )),
    items.length > max && /* @__PURE__ */ jsxRuntime.jsx(
      index.Popover,
      {
        arrow: true,
        color: colors.colors.primary_dark_1,
        placement: "left",
        overlayInnerStyle: {
          backgroundColor: colors.colors.primary_dark_1,
          borderRadius: 4
        },
        trigger: ["hover"],
        content: /* @__PURE__ */ jsxRuntime.jsx(index.View, { vertical: true, children: items.slice(max).map((item) => /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.white_ff, children: getName(item) }, item.id)) }),
        ...popoverProps,
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Flex,
          {
            align: "center",
            justify: "center",
            className: "z-50 -ms-3 h-6 w-6 rounded-full border-2 border-primary-light-3 bg-light-7",
            style: { width: size, height: size },
            ...popoverProps?.containerProps,
            children: `${items.length - max}+`
          }
        )
      }
    )
  ] });
}
const DrawerFooter = ({
  discardTitle,
  onDiscard,
  onSubmit,
  submitTitle,
  isLoading,
  isSubmitDisabled
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", gap: 16, justify: "flex-end", children: [
    discardTitle && /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Secondary, { disabled: isLoading, onClick: onDiscard, children: discardTitle }),
    /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Primary, { disabled: isSubmitDisabled, isLoading, onClick: onSubmit, children: submitTitle || t("common.literal.apply") })
  ] });
};
const DrawerHeaderTitle = ({ title, closable, onClose }) => {
  const getTitle = () => {
    if (typeof title !== "string") {
      return title;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 18, weight: "medium", color: colors.colors.primary, children: title });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { justify: "space-between", align: "center", children: [
    getTitle(),
    closable && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "cursor-pointer", onClick: onClose, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Close", size: 20, color: colors.colors.primary }) })
  ] });
};
const Drawer = ({
  title,
  closable = true,
  transparent,
  submitTitle,
  discardTitle,
  onClose,
  onSubmit,
  onDiscard,
  classNames,
  styles,
  children,
  isLoading,
  headerHeight = 60,
  wrapperClassName,
  contentClassName,
  noPadding,
  isSubmitDisabled,
  footer,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Drawer,
    {
      onClose,
      styles: {
        ...styles,
        header: {
          minHeight: headerHeight,
          backgroundColor: colors.colors.light_2,
          borderColor: colors.colors.light_7,
          paddingBlock: 12,
          paddingInline: 24
        },
        body: {
          backgroundColor: transparent ? "transparent" : colors.colors.white_ff,
          // margin: transparent ? 0 : 24,
          // borderRadius: 10,
          padding: 0
        },
        content: {
          backgroundColor: colors.colors.light_2,
          padding: 0
        },
        footer: {
          minHeight: 60,
          paddingBlock: 12,
          borderColor: colors.colors.light_7,
          paddingInline: 24,
          margin: 0
        }
      },
      classNames: {
        ...classNames,
        body: "small-custom-scrollbar"
      },
      footer: footer || /* @__PURE__ */ jsxRuntime.jsx(
        DrawerFooter,
        {
          ...{ onSubmit, onDiscard, submitTitle, discardTitle, isLoading, isSubmitDisabled }
        }
      ),
      closable: false,
      title: /* @__PURE__ */ jsxRuntime.jsx(DrawerHeaderTitle, { title, closable, onClose }),
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Flex,
        {
          className: tailwindMerge.twMerge(
            "small-custom-scrollbar h-full flex-1 overflow-y-auto bg-light-2 p-6",
            wrapperClassName
          ),
          vertical: true,
          gap: 16,
          children: /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Flex,
            {
              className: tailwindMerge.twMerge(
                "bg-white-ff",
                noPadding ? "rounded-lg" : "rounded p-6",
                !transparent ? "" : "bg-transparent",
                contentClassName
              ),
              vertical: true,
              children
            }
          )
        }
      )
    }
  );
};
const BaseModal = ({
  children,
  submitTitle,
  discardTitle,
  onSubmit,
  onDiscard,
  title,
  onClose,
  isLoadingSubmit,
  renderFooter,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.ConfigProvider,
    {
      theme: {
        components: {
          Modal: {
            borderRadius: 4,
            borderRadiusOuter: 4,
            borderRadiusLG: 4,
            paddingMD: 0,
            paddingContentHorizontalLG: 0,
            margin: 0
          }
        }
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        antd.Modal,
        {
          closeIcon: false,
          classNames: { body: "!px-6 !py-4" },
          footer: renderFooter !== void 0 ? renderFooter : submitTitle || discardTitle ? /* @__PURE__ */ jsxRuntime.jsxs(
            index$1.Flex,
            {
              justify: "end",
              align: "center",
              className: "h-[58px] rounded-b border-t border-solid border-light-7 bg-light-2 px-6",
              gap: 16,
              children: [
                discardTitle && /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Secondary, { onClick: onDiscard, children: discardTitle }),
                submitTitle && /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
              ]
            }
          ) : null,
          title: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsxs(
            index$1.Flex,
            {
              className: "h-12 rounded-t border-b border-solid border-light-7 bg-light-2 px-6",
              align: "center",
              justify: "space-between",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 18, weight: "medium", color: colors.colors.primary_dark_1, children: title }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  index$1.Icon,
                  {
                    name: "Close",
                    color: colors.colors.primary,
                    onClick: onClose,
                    className: "cursor-pointer"
                  }
                )
              ]
            }
          ) : title,
          ...rest,
          children
        }
      )
    }
  );
};
const ConfirmModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  renderFooter,
  ...rest
}) => {
  const footerContent = renderFooter !== void 0 ? renderFooter : (submitTitle || discardTitle) && /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 16, align: "center", justify: "flex-end", className: "px-6 py-4", children: [
    discardTitle && /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Secondary, { onClick: onDiscard, children: discardTitle }),
    submitTitle && /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
  ] });
  return /* @__PURE__ */ jsxRuntime.jsx(BaseModal, { ...rest, renderFooter: footerContent, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "mb-2 border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 20, weight: "bold", color: colors.colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, weight: "normal", color: colors.colors.primary, children }) : children })
  ] }) });
};
const DeleteModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 20, weight: "bold", color: colors.colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, weight: "normal", color: colors.colors.primary, children }) : children }),
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 16, align: "center", justify: "flex-end", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Secondary, { onClick: onDiscard, children: discardTitle }),
      /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Negative, { iconName: "Delete", isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
    ] })
  ] }) });
};
const ErrorModal = ({
  children,
  title,
  onSubmit,
  submitTitle,
  isLoadingSubmit,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "border-b-[2px] border-light-7 pb-3", align: "center", justify: "space-between", children: [
      typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 20, weight: "bold", color: colors.colors.primary_dark_1, children: title }) : title,
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Alert", color: colors.colors.negative, size: 18 })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, weight: "normal", color: colors.colors.primary, children }) : children }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { justify: "flex-end", children: /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle }) })
  ] }) });
};
const InfoModal = ({
  children,
  title,
  onSubmit,
  onDiscard,
  submitTitle,
  discardTitle,
  isLoadingSubmit,
  error,
  ...rest
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 20, weight: "bold", color: colors.colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, weight: "normal", color: colors.colors.primary, children }) : children }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 20, weight: "bold", color: colors.colors.negative, children: error }),
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 16, align: "center", justify: "flex-end", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.SecondaryQuiet, { onClick: onDiscard, children: discardTitle }),
      /* @__PURE__ */ jsxRuntime.jsx(index$2.Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
    ] })
  ] }) });
};
const Modal = index$2.batch({
  Base: BaseModal,
  Confirm: ConfirmModal,
  Error: ErrorModal,
  Delete: DeleteModal,
  Info: InfoModal
});
const Column = (_props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
};
const CurrencyCell = ({ value, includeCurrency, ...rest }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Text, { className: "w-full", size: 14, weight: "normal", color: colors.colors.primary, ...rest, children: [
    value ? starkString(value).scientificNotationToDecimal().toCurrency().toString() : "",
    includeCurrency && ` ${t("common.literal.rial")}`
  ] });
};
const DateCell = ({ value, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "w-full", size: 14, weight: "normal", color: colors.colors.primary, ...rest, children: value });
};
const StatusCell = ({ value, activeTitle, disableTitle, ...rest }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Flex,
    {
      className: tailwindMerge.twMerge(
        "h-[26px] items-center justify-center rounded px-4",
        value ? "bg-positive-light-2 bg-opacity-10" : "bg-light-6"
      ),
      ...rest,
      children: value ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 12, weight: "medium", color: colors.colors.positive, children: activeTitle || t("common.literal.active") }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 12, weight: "medium", color: colors.colors.primary_light_2, children: disableTitle || t("common.literal.disable") })
    }
  );
};
const TableCell = ({ children }) => {
  if (typeof children === "string" || typeof children === "number") {
    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "w-full", size: 14, weight: "normal", color: colors.colors.primary, children });
  }
  return children;
};
TableCell.Currency = CurrencyCell;
TableCell.Date = DateCell;
TableCell.StatusCell = StatusCell;
const ExpandIcon = ({ expandable, expanded, onExpand }) => {
  const { i18n } = reactI18next.useTranslation();
  if (!expandable) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("button", { className: "float-start h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Icon,
    {
      onClick: onExpand,
      name: expanded ? "Chevron_Down" : i18n.language === "fa" ? "Chevron_Left" : "Chevron_Right"
    }
  ) });
};
const TableHeaderTitle = ({ title, align, style, className }) => {
  if (typeof title !== "string") {
    return title;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Flex,
    {
      style,
      className: tailwindMerge.twMerge(
        "w-full",
        align === "start" && "justify-start",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, weight: "normal", className: "whitespace-nowrap", color: colors.colors.primary, children: title })
    }
  );
};
const CustomizedAntTableConfig = (theme) => deepMerge.deepMerge(
  {
    components: {
      Table: {
        borderColor: colors.colors.light_7,
        cellPaddingBlock: 0,
        cellPaddingBlockMD: 0,
        cellPaddingBlockSM: 0,
        cellPaddingInline: 8,
        cellPaddingInlineMD: 8,
        cellPaddingInlineSM: 8,
        fixedHeaderSortActiveBg: "transparent",
        footerBg: colors.colors.light_2,
        headerBg: colors.colors.light_2,
        headerBorderRadius: 0,
        headerColor: colors.colors.primary,
        bodySortBg: colors.colors.white_ff,
        headerSortHoverBg: colors.colors.light_1,
        headerSortActiveBg: colors.colors.light_1,
        headerSplitColor: "transparent",
        rowExpandedBg: colors.colors.light_3,
        rowHoverBg: colors.colors.light_4,
        rowSelectedBg: colors.colors.light_7,
        rowSelectedHoverBg: colors.colors.light_7,
        selectionColumnWidth: 56
        /* here is your component tokens */
      },
      Pagination: {
        itemActiveBg: colors.colors.white_ff,
        itemActiveBgDisabled: colors.colors.negative,
        itemActiveColorDisabled: colors.colors.negative,
        colorPrimaryBorderHover: "red",
        colorInfoBorderHover: "yellow",
        colorWarningBorderHover: "green",
        itemBg: colors.colors.white_ff,
        itemInputBg: colors.colors.negative,
        itemLinkBg: colors.colors.negative,
        itemSize: 30,
        itemSizeSM: 30,
        miniOptionsSizeChangerTop: 40,
        colorPrimary: colors.colors.primary,
        fontFamily: "YekanBakhFaRegular"
      }
    }
  },
  theme ?? {}
);
const tailwindTableClasses = tailwindMerge.twMerge(
  "[&_th]:!border-t h-full [&_.ant-spin-nested-loading]:h-full [&_.ant-spin-container]:h-full [&_.ant-table]:h-full [&_.ant-spin-container]:flex [&_.ant-spin-container]:flex-col [&_.ant-spin-container]:justify-between  [&_.ant-table-column-title]:flex-[0] [&_th]:!border-t-light-7 [&_th]:!pt-4 [&_th]:!pb-1 [&_.ant-table-selection-column]:!ps-4 [&_.ant-table-wrapper]:!p-0 [&_.ant-table-measure-row]:!h-[1px] [&_.ant-table-body]:h-full [&_.ant-table-container]:h-full"
);
const tableTransparentHeaderClasses = tailwindMerge.twMerge(
  "[&_th]:!bg-transparent h-full [&_th]:!border-t-0  [&_td]:!bg-transparent "
);
const rowHeightClassName = {
  small: "h-[40px] max-h-[40px] min-h-[40px]",
  middle: "h-[48px] max-h-[48px] min-h-[48px]",
  large: "h-[56px] max-h-[56px] min-h-[56px]"
};
const RowContext = React.createContext({});
const DragHandle = () => {
  const { setActivatorNodeRef, listeners } = React.useContext(RowContext);
  return /* @__PURE__ */ jsxRuntime.jsx("button", { style: { cursor: "move" }, ref: setActivatorNodeRef, ...listeners, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "drag_and_drop", color: colors.colors.primary_light_2 }) });
};
const restrictToVerticalAxis = (_ref) => {
  let {
    transform
  } = _ref;
  return {
    ...transform,
    x: 0
  };
};
const DndSortProvider = ({
  children,
  onDragEnd,
  dataSource = [],
  rowKey
}) => {
  const items = React.useMemo(
    () => dataSource.map((item) => item[rowKey]),
    [dataSource, rowKey]
  );
  const handleDragEnd = React.useCallback(
    ({ active, over }) => {
      if (active.id !== over?.id) {
        const activeIndex = dataSource.findIndex((record) => record[rowKey] === active?.id);
        const overIndex = dataSource.findIndex((record) => record[rowKey] === over?.id);
        const newSort = sortable_esm.arrayMove(dataSource, activeIndex, overIndex);
        onDragEnd(newSort);
      }
    },
    [dataSource, rowKey, onDragEnd]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(sortable_esm.DndContext, { modifiers: [restrictToVerticalAxis], onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsxRuntime.jsx(sortable_esm.SortableContext, { items, strategy: sortable_esm.verticalListSortingStrategy, children }) }) });
};
const DndRow = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging
  } = sortable_esm.useSortable({ id: props["data-row-key"] });
  const style = {
    ...props.style,
    transform: sortable_esm.CSS.Translate.toString(transform),
    transition,
    cursor: "default",
    ...isDragging ? { position: "relative", zIndex: 10 } : {}
  };
  const contextValue = React.useMemo(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(RowContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx("tr", { ...props, ref: setNodeRef, style, ...attributes }) });
};
const ItemRender = ({ page, type, current, isFa }) => {
  const isCurrentPage = Number(page) === current;
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-[30px] items-center justify-center", children: type === "page" ? /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Text,
    {
      weight: isCurrentPage ? "bold" : "normal",
      size: isCurrentPage ? 20 : 18,
      color: isCurrentPage ? colors.colors.primary : colors.colors.primary_dark_1,
      children: page
    }
  ) : type === "next" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "me-4 h-[30px] w-[30px] items-center justify-center rounded border border-light-7", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: isFa ? "Chevron_Right" : "Chevron_Left", color: colors.colors.primary }) }) : type === "prev" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-[30px] w-[30px] items-center justify-center rounded border border-light-7", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: isFa ? "Chevron_Left" : "Chevron_Right", color: colors.colors.primary }) }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 18, children: "..." }) });
};
const CHANGE_ORDER = "CHANGE_ORDER";
const CHANGE_PAGE = "CHANGE_PAGE";
const CHANGE = "CHANGE";
const PAGE_SEARCH_PARAM = "page";
const initialState = {
  order: void 0,
  orderBy: "",
  pageSize: 10,
  current: 1,
  filters: {}
};
function reducer(state, action) {
  switch (action.type) {
    case CHANGE_ORDER:
      return {
        ...state,
        orderBy: action.payload.orderBy,
        order: action.payload.order
      };
    case CHANGE_PAGE:
      return {
        ...state,
        current: action.payload.current,
        pageSize: action.payload.pageSize === void 0 ? state.pageSize : action.payload.pageSize
      };
    case CHANGE:
      return {
        ...state,
        current: action.payload.current,
        pageSize: action.payload.pageSize ?? state.pageSize,
        order: action.payload.order,
        orderBy: action.payload.orderBy,
        filters: action.payload.filters
      };
    default:
      return state;
  }
}
function usePagination({
  defaultCurrent = 1,
  defaultPageSize = 10,
  hasQueryParams = false,
  hideOnSinglePage,
  style,
  ...rest
}) {
  const { isSmallerThanMedium } = useObserveWindow();
  const navigate = reactRouterDom.useNavigate();
  const [searchParams] = reactRouterDom.useSearchParams();
  const [localPageSize, setLocalPageSize] = useLocalStorageState(
    PAGINATION_SIZE,
    defaultPageSize
  );
  const [total, setTotal] = React.useState(0);
  const { i18n } = reactI18next.useTranslation();
  const [{ current, order, orderBy, pageSize, filters }, dispatch] = React.useReducer(
    reducer,
    {
      ...initialState,
      pageSize: localPageSize,
      current: hasQueryParams ? Number(searchParams.get(PAGE_SEARCH_PARAM) || String(defaultCurrent)) : defaultCurrent
    }
  );
  localStorage.removeItem(PAGINATION_SIZE);
  const onChange = React.useCallback(
    (pagination2, filters2, sorter) => {
      const sort = Array.isArray(sorter) ? sorter[0] : sorter;
      setLocalPageSize(pagination2.pageSize || defaultPageSize);
      dispatch({
        type: CHANGE,
        payload: {
          filters: filters2,
          current: pagination2.current,
          pageSize: pagination2.pageSize,
          orderBy: Array.isArray(sort?.field) ? sort?.field[0] : sort?.field,
          order: sort?.order
        }
      });
    },
    [defaultPageSize, setLocalPageSize]
  );
  const handleInternalPagination = (page, pageSize2) => {
    dispatch({ type: CHANGE_PAGE, payload: { current: page, pageSize: pageSize2 } });
  };
  const getTotal = (total2) => setTotal(total2 || defaultPageSize);
  React.useEffect(() => {
    if (hasQueryParams) {
      navigate({ search: `?${PAGE_SEARCH_PARAM}=${current}` }, { replace: true });
    }
  }, [current, hasQueryParams]);
  const pagination = {
    total,
    current,
    pageSize,
    defaultCurrent,
    defaultPageSize,
    onChange: handleInternalPagination,
    pageSizeOptions: ["10", "20", "30"],
    showSizeChanger: true,
    hideOnSinglePage,
    className: "border border-negative",
    style: {
      backgroundColor: colors.colors.white_ff,
      paddingInline: isSmallerThanMedium ? 4 : 24,
      paddingBlock: 16,
      margin: 0,
      borderTop: `1px solid ${colors.colors.light_7}`,
      flexDirection: "row-reverse",
      justifyContent: "flex-start",
      border: "none",
      ...style
    },
    showPrevNextJumpers: true,
    showQuickJumper: true,
    rootClassName: "flex items-center [&_.ant-select-dropdown]:!p-0 [&_.ant-pagination-options]:flex [&_.ant-pagination-options]:items-center [&_.ant-pagination-options]:justify-between [&_.ant-pagination-options]:flex-1",
    // selectComponentClass: () => SelectComponentClass({ filters, onChange, pageSize, pagination }),
    itemRender: (page, type) => ItemRender({ current, page, type, isFa: i18n.language === "fa" }),
    ...rest
  };
  return {
    filters,
    current,
    pageSize,
    pagination,
    order,
    orderBy,
    onChange,
    getTotal
  };
}
const Table = ({
  className,
  children,
  expandable,
  rowSelection,
  size,
  pagination,
  loading,
  transparentHeader,
  internalScroll = true,
  extraHeight = 100,
  footer,
  theme,
  dndSort,
  components,
  ...rest
}) => {
  const [scrollY, setScrollY] = React.useState();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    setScrollY(
      window.innerHeight - ref.current.offsetTop - 46 - (pagination ? 65 : 0) - extraHeight
    );
  }, [pagination, theme?.components?.Table?.headerBg]);
  const columns = React.useMemo(() => {
    function getChildren(_children) {
      if (!_children) {
        return [];
      }
      if (typeof _children === "boolean" || typeof _children === "undefined" || _children === null) {
        return [];
      }
      if (typeof _children !== "object") {
        throw new Error("Table children must be Column");
      }
      if (!Array.isArray(_children)) {
        if (_children.type === Column) {
          const result = {
            ..._children.props,
            child: _children
          };
          return [result];
        }
        if (_children.type === React.Fragment) {
          return getChildren(_children.props?.children);
        }
      }
      return (_children || [])?.flatMap((child) => {
        return getChildren(child);
      });
    }
    const mappedChildren = getChildren(children);
    return mappedChildren;
  }, [children]);
  const Provider = ({ children: children2 }) => dndSort === void 0 ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: children2 }) : /* @__PURE__ */ jsxRuntime.jsx(
    DndSortProvider,
    {
      children: children2,
      onDragEnd: dndSort.onDragEnd,
      dataSource: rest.dataSource,
      rowKey: rest.rowKey
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntTableConfig(theme), children: /* @__PURE__ */ jsxRuntime.jsx(Provider, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    antd.Table,
    {
      ref,
      loading: {
        indicator: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size: 32, thickness: 3 }) }),
        spinning: !!loading
      },
      scroll: internalScroll ? { y: scrollY } : void 0,
      className: tailwindMerge.twMerge(
        tailwindTableClasses,
        "abrplus-table-custom-scroll-bar w-full !animate-none [&_.ant-table-thead_th]:!pt-2",
        !!expandable && !!rowSelection && "[&_.ant-table-selection-column]:!ps-0",
        transparentHeader && tableTransparentHeaderClasses,
        className
      ),
      rowSelection,
      expandable: expandable ? {
        ...expandable,
        expandedRowClassName: () => "[&_.ant-table-cell]:!p-0  [&_.ant-table-row-expand-icon-cell]:!p-0 ",
        expandIcon: ({ expandable: expandable2, expanded, onExpand, record }) => /* @__PURE__ */ jsxRuntime.jsx(
          ExpandIcon,
          {
            ...{ expandable: expandable2, expanded },
            onExpand: (e) => onExpand?.(record, e)
          }
        )
      } : void 0,
      pagination,
      footer,
      components: dndSort ? { body: { row: DndRow } } : components,
      ...rest,
      children: [
        dndSort && /* @__PURE__ */ jsxRuntime.jsx(Table.Column, { align: "center", width: 80, render: () => /* @__PURE__ */ jsxRuntime.jsx(DragHandle, {}) }, "sort"),
        columns.map(
          ({
            render,
            children: children2,
            dataIndex,
            align,
            headerStyle,
            headerClassName,
            className: className2,
            filtersOptions,
            sortIconOptions,
            ...rest2
          }, colIndex) => /* @__PURE__ */ jsxRuntime.jsx(
            antd.Table.Column,
            {
              ...rest2,
              dataIndex: dataIndex?.toString(),
              className: tailwindMerge.twMerge("h-[56px] [&_.ant-table-column-title]:!flex-1", className2),
              title: /* @__PURE__ */ jsxRuntime.jsxs(
                index$1.Flex,
                {
                  className: "ant-table-column-title-content items-center justify-between",
                  flex: 1,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      TableHeaderTitle,
                      {
                        title: children2,
                        align,
                        style: headerStyle,
                        className: headerClassName
                      }
                    ),
                    filtersOptions?.renderFilter?.()
                  ]
                }
              ),
              render: (value, row, index2) => /* @__PURE__ */ jsxRuntime.jsx(
                index$1.Flex,
                {
                  className: tailwindMerge.twMerge("items-center", rowHeightClassName[size || "large"]),
                  style: {
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    paddingInlineEnd: colIndex === columns.length - 1 ? 24 : void 0
                  },
                  children: render ? render({ index: index2, row, value }) : /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: value })
                }
              ),
              showSorterTooltip: false,
              sortIcon: ({ sortOrder }) => {
                return /* @__PURE__ */ jsxRuntime.jsxs(
                  index$1.Flex,
                  {
                    vertical: true,
                    ...sortIconOptions,
                    className: tailwindMerge.twMerge(
                      "table-filters-sort flex-[4] ps-2",
                      sortIconOptions?.className
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsx(
                        index$1.Icon,
                        {
                          size: 12,
                          color: sortOrder === "ascend" ? colors.colors.primary : colors.colors.primary_light_3,
                          name: "Chevron_Up",
                          style: { marginBottom: -4 }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntime.jsx(
                        index$1.Icon,
                        {
                          size: 12,
                          color: sortOrder === "descend" ? colors.colors.primary : colors.colors.primary_light_3,
                          name: "Chevron_Down"
                        }
                      )
                    ]
                  }
                );
              }
            },
            colIndex
          )
        )
      ]
    }
  ) }) });
};
Table.Cell = TableCell;
Table.Column = Column;
Table.Currency = TableCell.Currency;
Table.Date = TableCell.Date;
Table.Status = TableCell.StatusCell;
Table.usePagination = usePagination;
exports.AvatarGroup = AvatarGroup;
exports.Drawer = Drawer;
exports.Modal = Modal;
exports.Table = Table;
