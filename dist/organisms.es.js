import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { L as Logo, c as arrayMove, D as DndContext, S as SortableContext, v as verticalListSortingStrategy, b as useSortable, C as CSS } from "./sortable.esm-DxoMEXtA.js";
import { u as useWindowDimensions, P as Popover, V as View } from "./index-DPz727Jt.js";
import { T as Text, F as Flex, R as Render, I as Icon, L as Loading } from "./index-CB4n-5do.js";
import { c as colors } from "./colors-CztsZ6e_.js";
import { Drawer as Drawer$1, ConfigProvider, Modal as Modal$1, Table as Table$1 } from "antd";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import { B as Button, b as batch } from "./index-GyapxmJB.js";
import { useState, useEffect, useCallback, createContext, useContext, useMemo, useReducer, useRef, Fragment as Fragment$1 } from "react";
import starkString from "starkstring";
import { d as deepMerge } from "./deepMerge-CG1he8ZD.js";
import { useNavigate, useSearchParams } from "react-router-dom";
function useLocalStorageState(key, initialValue) {
  const initialStoredValue = localStorage.getItem(key);
  const initial = initialStoredValue ? JSON.parse(initialStoredValue) : initialValue;
  const [state, setState] = useState(initial);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
const SMALL_SCREEN = 640;
const MEDIUM_SCREEN = 768;
const LARGE_SCREEN = 1024;
const EXTRA_LARGE_SCREEN = 1280;
function useObserveWindow() {
  const { width } = useWindowDimensions();
  const getIsWidthSmallerThan = useCallback(
    (query) => {
      if (typeof window === "undefined") return;
      return width <= query;
    },
    [width]
  );
  const getIsWidthLargerThan = useCallback(
    (query) => {
      if (typeof window === "undefined") return;
      return width > query;
    },
    [width]
  );
  const getIsWidthBetween = useCallback(
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
    return /* @__PURE__ */ jsx(Text, { children: "-" });
  }
  const getName = (item) => {
    return nameExtractor?.(item) ?? (item.name || "--");
  };
  return /* @__PURE__ */ jsxs(Flex, { ...containerProps, children: [
    items.slice(0, max).map((item, index) => /* @__PURE__ */ jsx(
      Render,
      {
        when: !!renderItem,
        fallback: /* @__PURE__ */ jsx(
          Logo,
          {
            style: { marginInlineStart: index - 12, width: size, height: size },
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
    items.length > max && /* @__PURE__ */ jsx(
      Popover,
      {
        arrow: true,
        color: colors.primary_dark_1,
        placement: "left",
        overlayInnerStyle: {
          backgroundColor: colors.primary_dark_1,
          borderRadius: 4
        },
        trigger: ["hover"],
        content: /* @__PURE__ */ jsx(View, { vertical: true, children: items.slice(max).map((item) => /* @__PURE__ */ jsx(Text, { color: colors.white_ff, children: getName(item) }, item.id)) }),
        ...popoverProps,
        children: /* @__PURE__ */ jsx(
          Flex,
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
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 16, justify: "flex-end", children: [
    discardTitle && /* @__PURE__ */ jsx(Button.Secondary, { disabled: isLoading, onClick: onDiscard, children: discardTitle }),
    /* @__PURE__ */ jsx(Button.Primary, { disabled: isSubmitDisabled, isLoading, onClick: onSubmit, children: submitTitle || t("common.literal.apply") })
  ] });
};
const DrawerHeaderTitle = ({ title, closable, onClose }) => {
  const getTitle = () => {
    if (typeof title !== "string") {
      return title;
    }
    return /* @__PURE__ */ jsx(Text, { size: 18, weight: "medium", color: colors.primary, children: title });
  };
  return /* @__PURE__ */ jsxs(Flex, { justify: "space-between", align: "center", children: [
    getTitle(),
    closable && /* @__PURE__ */ jsx("div", { className: "cursor-pointer", onClick: onClose, children: /* @__PURE__ */ jsx(Icon, { name: "Close", size: 20, color: colors.primary }) })
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
  return /* @__PURE__ */ jsx(
    Drawer$1,
    {
      onClose,
      styles: {
        ...styles,
        header: {
          minHeight: headerHeight,
          backgroundColor: colors.light_2,
          borderColor: colors.light_7,
          paddingBlock: 12,
          paddingInline: 24
        },
        body: {
          backgroundColor: transparent ? "transparent" : colors.white_ff,
          // margin: transparent ? 0 : 24,
          // borderRadius: 10,
          padding: 0
        },
        content: {
          backgroundColor: colors.light_2,
          padding: 0
        },
        footer: {
          minHeight: 60,
          paddingBlock: 12,
          borderColor: colors.light_7,
          paddingInline: 24,
          margin: 0
        }
      },
      classNames: {
        ...classNames,
        body: "small-custom-scrollbar"
      },
      footer: footer || /* @__PURE__ */ jsx(
        DrawerFooter,
        {
          ...{ onSubmit, onDiscard, submitTitle, discardTitle, isLoading, isSubmitDisabled }
        }
      ),
      closable: false,
      title: /* @__PURE__ */ jsx(DrawerHeaderTitle, { title, closable, onClose }),
      ...rest,
      children: /* @__PURE__ */ jsx(
        Flex,
        {
          className: twMerge(
            "small-custom-scrollbar h-full flex-1 overflow-y-auto bg-light-2 p-6",
            wrapperClassName
          ),
          vertical: true,
          gap: 16,
          children: /* @__PURE__ */ jsx(
            Flex,
            {
              className: twMerge(
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
  return /* @__PURE__ */ jsx(
    ConfigProvider,
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
      children: /* @__PURE__ */ jsx(
        Modal$1,
        {
          closeIcon: false,
          classNames: { body: "!px-6 !py-4" },
          footer: renderFooter !== void 0 ? renderFooter : submitTitle || discardTitle ? /* @__PURE__ */ jsxs(
            Flex,
            {
              justify: "end",
              align: "center",
              className: "h-[58px] rounded-b border-t border-solid border-light-7 bg-light-2 px-6",
              gap: 16,
              children: [
                discardTitle && /* @__PURE__ */ jsx(Button.Secondary, { onClick: onDiscard, children: discardTitle }),
                submitTitle && /* @__PURE__ */ jsx(Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
              ]
            }
          ) : null,
          title: typeof title === "string" ? /* @__PURE__ */ jsxs(
            Flex,
            {
              className: "h-12 rounded-t border-b border-solid border-light-7 bg-light-2 px-6",
              align: "center",
              justify: "space-between",
              children: [
                /* @__PURE__ */ jsx(Text, { size: 18, weight: "medium", color: colors.primary_dark_1, children: title }),
                /* @__PURE__ */ jsx(
                  Icon,
                  {
                    name: "Close",
                    color: colors.primary,
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
  const footerContent = renderFooter !== void 0 ? renderFooter : (submitTitle || discardTitle) && /* @__PURE__ */ jsxs(Flex, { gap: 16, align: "center", justify: "flex-end", className: "px-6 py-4", children: [
    discardTitle && /* @__PURE__ */ jsx(Button.Secondary, { onClick: onDiscard, children: discardTitle }),
    submitTitle && /* @__PURE__ */ jsx(Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
  ] });
  return /* @__PURE__ */ jsx(BaseModal, { ...rest, renderFooter: footerContent, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "mb-2 border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsx(Text, { size: 20, weight: "bold", color: colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsx(Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, weight: "normal", color: colors.primary, children }) : children })
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
  return /* @__PURE__ */ jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsx(Text, { size: 20, weight: "bold", color: colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsx(Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, weight: "normal", color: colors.primary, children }) : children }),
    /* @__PURE__ */ jsxs(Flex, { gap: 16, align: "center", justify: "flex-end", children: [
      /* @__PURE__ */ jsx(Button.Secondary, { onClick: onDiscard, children: discardTitle }),
      /* @__PURE__ */ jsx(Button.Negative, { iconName: "Delete", isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
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
  return /* @__PURE__ */ jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
    /* @__PURE__ */ jsxs(Flex, { className: "border-b-[2px] border-light-7 pb-3", align: "center", justify: "space-between", children: [
      typeof title === "string" ? /* @__PURE__ */ jsx(Text, { size: 20, weight: "bold", color: colors.primary_dark_1, children: title }) : title,
      /* @__PURE__ */ jsx(Icon, { name: "Alert", color: colors.negative, size: 18 })
    ] }),
    /* @__PURE__ */ jsx(Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, weight: "normal", color: colors.primary, children }) : children }),
    /* @__PURE__ */ jsx(Flex, { justify: "flex-end", children: /* @__PURE__ */ jsx(Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle }) })
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
  return /* @__PURE__ */ jsx(BaseModal, { ...rest, children: /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "border-b-[2px] border-light-7 pb-3", children: typeof title === "string" ? /* @__PURE__ */ jsx(Text, { size: 20, weight: "bold", color: colors.primary_dark_1, children: title }) : title }),
    /* @__PURE__ */ jsx(Flex, { className: "pb-10 pt-4", children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, weight: "normal", color: colors.primary, children }) : children }),
    /* @__PURE__ */ jsx(Text, { size: 20, weight: "bold", color: colors.negative, children: error }),
    /* @__PURE__ */ jsxs(Flex, { gap: 16, align: "center", justify: "flex-end", children: [
      /* @__PURE__ */ jsx(Button.SecondaryQuiet, { onClick: onDiscard, children: discardTitle }),
      /* @__PURE__ */ jsx(Button.Primary, { isLoading: isLoadingSubmit, onClick: onSubmit, children: submitTitle })
    ] })
  ] }) });
};
const Modal = batch({
  Base: BaseModal,
  Confirm: ConfirmModal,
  Error: ErrorModal,
  Delete: DeleteModal,
  Info: InfoModal
});
const Column = (_props) => {
  return /* @__PURE__ */ jsx(Fragment, {});
};
const CurrencyCell = ({ value, includeCurrency, ...rest }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Text, { className: "w-full", size: 14, weight: "normal", color: colors.primary, ...rest, children: [
    value ? starkString(value).scientificNotationToDecimal().toCurrency().toString() : "",
    includeCurrency && ` ${t("common.literal.rial")}`
  ] });
};
const DateCell = ({ value, ...rest }) => {
  return /* @__PURE__ */ jsx(Text, { className: "w-full", size: 14, weight: "normal", color: colors.primary, ...rest, children: value });
};
const StatusCell = ({ value, activeTitle, disableTitle, ...rest }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    Flex,
    {
      className: twMerge(
        "h-[26px] items-center justify-center rounded px-4",
        value ? "bg-positive-light-2 bg-opacity-10" : "bg-light-6"
      ),
      ...rest,
      children: value ? /* @__PURE__ */ jsx(Text, { size: 12, weight: "medium", color: colors.positive, children: activeTitle || t("common.literal.active") }) : /* @__PURE__ */ jsx(Text, { size: 12, weight: "medium", color: colors.primary_light_2, children: disableTitle || t("common.literal.disable") })
    }
  );
};
const TableCell = ({ children }) => {
  if (typeof children === "string" || typeof children === "number") {
    return /* @__PURE__ */ jsx(Text, { className: "w-full", size: 14, weight: "normal", color: colors.primary, children });
  }
  return children;
};
TableCell.Currency = CurrencyCell;
TableCell.Date = DateCell;
TableCell.StatusCell = StatusCell;
const ExpandIcon = ({ expandable, expanded, onExpand }) => {
  const { i18n } = useTranslation();
  if (!expandable) {
    return null;
  }
  return /* @__PURE__ */ jsx("button", { className: "float-start h-full items-center justify-center", children: /* @__PURE__ */ jsx(
    Icon,
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
  return /* @__PURE__ */ jsx(
    Flex,
    {
      style,
      className: twMerge(
        "w-full",
        align === "start" && "justify-start",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        className
      ),
      children: /* @__PURE__ */ jsx(Text, { size: 14, weight: "normal", className: "whitespace-nowrap", color: colors.primary, children: title })
    }
  );
};
const CustomizedAntTableConfig = (theme) => deepMerge(
  {
    components: {
      Table: {
        borderColor: colors.light_7,
        cellPaddingBlock: 0,
        cellPaddingBlockMD: 0,
        cellPaddingBlockSM: 0,
        cellPaddingInline: 8,
        cellPaddingInlineMD: 8,
        cellPaddingInlineSM: 8,
        fixedHeaderSortActiveBg: "transparent",
        footerBg: colors.light_2,
        headerBg: colors.light_2,
        headerBorderRadius: 0,
        headerColor: colors.primary,
        bodySortBg: colors.white_ff,
        headerSortHoverBg: colors.light_1,
        headerSortActiveBg: colors.light_1,
        headerSplitColor: "transparent",
        rowExpandedBg: colors.light_3,
        rowHoverBg: colors.light_4,
        rowSelectedBg: colors.light_7,
        rowSelectedHoverBg: colors.light_7,
        selectionColumnWidth: 56
        /* here is your component tokens */
      },
      Pagination: {
        itemActiveBg: colors.white_ff,
        itemActiveBgDisabled: colors.negative,
        itemActiveColorDisabled: colors.negative,
        colorPrimaryBorderHover: "red",
        colorInfoBorderHover: "yellow",
        colorWarningBorderHover: "green",
        itemBg: colors.white_ff,
        itemInputBg: colors.negative,
        itemLinkBg: colors.negative,
        itemSize: 30,
        itemSizeSM: 30,
        miniOptionsSizeChangerTop: 40,
        colorPrimary: colors.primary,
        fontFamily: "YekanBakhFaRegular"
      }
    }
  },
  theme ?? {}
);
const tailwindTableClasses = twMerge(
  "[&_th]:!border-t h-full [&_.ant-spin-nested-loading]:h-full [&_.ant-spin-container]:h-full [&_.ant-table]:h-full [&_.ant-spin-container]:flex [&_.ant-spin-container]:flex-col [&_.ant-spin-container]:justify-between  [&_.ant-table-column-title]:flex-[0] [&_th]:!border-t-light-7 [&_th]:!pt-4 [&_th]:!pb-1 [&_.ant-table-selection-column]:!ps-4 [&_.ant-table-wrapper]:!p-0 [&_.ant-table-measure-row]:!h-[1px] [&_.ant-table-body]:h-full [&_.ant-table-container]:h-full"
);
const tableTransparentHeaderClasses = twMerge(
  "[&_th]:!bg-transparent h-full [&_th]:!border-t-0  [&_td]:!bg-transparent "
);
const rowHeightClassName = {
  small: "h-[40px] max-h-[40px] min-h-[40px]",
  middle: "h-[48px] max-h-[48px] min-h-[48px]",
  large: "h-[56px] max-h-[56px] min-h-[56px]"
};
const RowContext = createContext({});
const DragHandle = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return /* @__PURE__ */ jsx("button", { style: { cursor: "move" }, ref: setActivatorNodeRef, ...listeners, children: /* @__PURE__ */ jsx(Icon, { name: "drag_and_drop", color: colors.primary_light_2 }) });
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
  const items = useMemo(
    () => dataSource.map((item) => item[rowKey]),
    [dataSource, rowKey]
  );
  const handleDragEnd = useCallback(
    ({ active, over }) => {
      if (active.id !== over?.id) {
        const activeIndex = dataSource.findIndex((record) => record[rowKey] === active?.id);
        const overIndex = dataSource.findIndex((record) => record[rowKey] === over?.id);
        const newSort = arrayMove(dataSource, activeIndex, overIndex);
        onDragEnd(newSort);
      }
    },
    [dataSource, rowKey, onDragEnd]
  );
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(DndContext, { modifiers: [restrictToVerticalAxis], onDragEnd: handleDragEnd, children: /* @__PURE__ */ jsx(SortableContext, { items, strategy: verticalListSortingStrategy, children }) }) });
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
  } = useSortable({ id: props["data-row-key"] });
  const style = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "default",
    ...isDragging ? { position: "relative", zIndex: 10 } : {}
  };
  const contextValue = useMemo(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );
  return /* @__PURE__ */ jsx(RowContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx("tr", { ...props, ref: setNodeRef, style, ...attributes }) });
};
const ItemRender = ({ page, type, current, isFa }) => {
  const isCurrentPage = Number(page) === current;
  return /* @__PURE__ */ jsx(Flex, { className: "h-[30px] items-center justify-center", children: type === "page" ? /* @__PURE__ */ jsx(
    Text,
    {
      weight: isCurrentPage ? "bold" : "normal",
      size: isCurrentPage ? 20 : 18,
      color: isCurrentPage ? colors.primary : colors.primary_dark_1,
      children: page
    }
  ) : type === "next" ? /* @__PURE__ */ jsx(Flex, { className: "me-4 h-[30px] w-[30px] items-center justify-center rounded border border-light-7", children: /* @__PURE__ */ jsx(Icon, { name: isFa ? "Chevron_Right" : "Chevron_Left", color: colors.primary }) }) : type === "prev" ? /* @__PURE__ */ jsx(Flex, { className: "h-[30px] w-[30px] items-center justify-center rounded border border-light-7", children: /* @__PURE__ */ jsx(Icon, { name: isFa ? "Chevron_Left" : "Chevron_Right", color: colors.primary }) }) : /* @__PURE__ */ jsx(Text, { size: 18, children: "..." }) });
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [localPageSize, setLocalPageSize] = useLocalStorageState(
    PAGINATION_SIZE,
    defaultPageSize
  );
  const [total, setTotal] = useState(0);
  const { i18n } = useTranslation();
  const [{ current, order, orderBy, pageSize, filters }, dispatch] = useReducer(
    reducer,
    {
      ...initialState,
      pageSize: localPageSize,
      current: hasQueryParams ? Number(searchParams.get(PAGE_SEARCH_PARAM) || String(defaultCurrent)) : defaultCurrent
    }
  );
  localStorage.removeItem(PAGINATION_SIZE);
  const onChange = useCallback(
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
  useEffect(() => {
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
      backgroundColor: colors.white_ff,
      paddingInline: isSmallerThanMedium ? 4 : 24,
      paddingBlock: 16,
      margin: 0,
      borderTop: `1px solid ${colors.light_7}`,
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
  const [scrollY, setScrollY] = useState();
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setScrollY(
      window.innerHeight - ref.current.offsetTop - 46 - (pagination ? 65 : 0) - extraHeight
    );
  }, [pagination, theme?.components?.Table?.headerBg]);
  const columns = useMemo(() => {
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
        if (_children.type === Fragment$1) {
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
  const Provider = ({ children: children2 }) => dndSort === void 0 ? /* @__PURE__ */ jsx(Fragment, { children: children2 }) : /* @__PURE__ */ jsx(
    DndSortProvider,
    {
      children: children2,
      onDragEnd: dndSort.onDragEnd,
      dataSource: rest.dataSource,
      rowKey: rest.rowKey
    }
  );
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: CustomizedAntTableConfig(theme), children: /* @__PURE__ */ jsx(Provider, { children: /* @__PURE__ */ jsxs(
    Table$1,
    {
      ref,
      loading: {
        indicator: /* @__PURE__ */ jsx(Flex, { className: "items-center justify-center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size: 32, thickness: 3 }) }),
        spinning: !!loading
      },
      scroll: internalScroll ? { y: scrollY } : void 0,
      className: twMerge(
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
        expandIcon: ({ expandable: expandable2, expanded, onExpand, record }) => /* @__PURE__ */ jsx(
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
        dndSort && /* @__PURE__ */ jsx(Table.Column, { align: "center", width: 80, render: () => /* @__PURE__ */ jsx(DragHandle, {}) }, "sort"),
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
          }, colIndex) => /* @__PURE__ */ jsx(
            Table$1.Column,
            {
              ...rest2,
              dataIndex: dataIndex?.toString(),
              className: twMerge("h-[56px] [&_.ant-table-column-title]:!flex-1", className2),
              title: /* @__PURE__ */ jsxs(
                Flex,
                {
                  className: "ant-table-column-title-content items-center justify-between",
                  flex: 1,
                  children: [
                    /* @__PURE__ */ jsx(
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
              render: (value, row, index) => /* @__PURE__ */ jsx(
                Flex,
                {
                  className: twMerge("items-center", rowHeightClassName[size || "large"]),
                  style: {
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    paddingInlineEnd: colIndex === columns.length - 1 ? 24 : void 0
                  },
                  children: render ? render({ index, row, value }) : /* @__PURE__ */ jsx(TableCell, { children: value })
                }
              ),
              showSorterTooltip: false,
              sortIcon: ({ sortOrder }) => {
                return /* @__PURE__ */ jsxs(
                  Flex,
                  {
                    vertical: true,
                    ...sortIconOptions,
                    className: twMerge(
                      "table-filters-sort flex-[4] ps-2",
                      sortIconOptions?.className
                    ),
                    children: [
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          size: 12,
                          color: sortOrder === "ascend" ? colors.primary : colors.primary_light_3,
                          name: "Chevron_Up",
                          style: { marginBottom: -4 }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Icon,
                        {
                          size: 12,
                          color: sortOrder === "descend" ? colors.primary : colors.primary_light_3,
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
export {
  AvatarGroup,
  Drawer,
  Modal,
  Table
};
