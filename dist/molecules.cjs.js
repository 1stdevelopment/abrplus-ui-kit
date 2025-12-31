"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./index-DoUTJWeZ.cjs");
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const tailwindMerge = require("tailwind-merge");
const colors = require("./colors-Dsi7eBuO.cjs");
const antd = require("antd");
const index$1 = require("./index-kmBTNrbf.cjs");
const reactI18next = require("react-i18next");
require("antd/locale/en_US");
require("antd/locale/fa_IR");
const i18n = require("i18next");
const NUM_BARS = 48;
const AudioVisualizer = ({
  deviceId,
  speakerId,
  monitor = "off",
  containerStyle,
  containerClassName,
  barContainerStyle,
  barContainerClassName,
  barStyle,
  barClassName,
  barsNumber = NUM_BARS
}) => {
  const audioElRef = React.useRef(null);
  const analyserRef = React.useRef(null);
  const audioContextRef = React.useRef(null);
  const animationFrameRef = React.useRef(null);
  const visualizerContainerRef = React.useRef(null);
  const microphoneStreamRef = React.useRef(null);
  React.useEffect(() => {
    const audio = document.createElement("audio");
    audio.autoplay = true;
    audio.controls = false;
    audioElRef.current = audio;
    document.body.appendChild(audio);
    return () => {
      audio.pause();
      audio.srcObject = null;
      audio.remove();
    };
  }, []);
  React.useEffect(() => {
    if (!deviceId || !audioElRef.current) return;
    let cancelled = false;
    const setupVisualizer = async () => {
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: deviceId } }
      });
      if (cancelled) return;
      microphoneStreamRef.current = stream;
      const audioCtx = new AudioContext();
      audioContextRef.current = audioCtx;
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;
      analyserRef.current = analyser;
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);
      drawVisualization();
    };
    setupVisualizer();
    return () => {
      cancelled = true;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());
      audioContextRef.current?.close();
      microphoneStreamRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      resetVisualizerBars();
    };
  }, [deviceId]);
  React.useEffect(() => {
    const audioEl = audioElRef.current;
    const audioCtx = audioContextRef.current;
    const analyser = analyserRef.current;
    const stream = microphoneStreamRef.current;
    if (!audioEl || !audioCtx || !analyser || !stream) return;
    if (monitor === "on") {
      analyser.connect(audioCtx.destination);
      audioEl.srcObject = stream;
      if (speakerId && typeof audioEl.setSinkId === "function") {
        audioEl.setSinkId(speakerId).catch(() => {
        });
      }
    } else {
      audioEl.srcObject = null;
    }
  }, [monitor, speakerId]);
  React.useEffect(() => {
    const container = visualizerContainerRef.current;
    if (!container) return;
    container.innerHTML = "";
    const barContainer = document.createElement("div");
    Object.assign(barContainer.style, {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      ...barContainerStyle
    });
    barContainer.className = tailwindMerge.twMerge(barContainerClassName);
    for (let i = 0; i < barsNumber; i++) {
      const bar = document.createElement("div");
      Object.assign(bar.style, {
        backgroundColor: "#d1d5db",
        // default color (gray)
        height: "80%",
        transition: "background-color 0.1s ease-out",
        margin: "0 1px",
        borderRadius: "2px",
        width: "100%",
        ...barStyle
      });
      bar.className = tailwindMerge.twMerge(barClassName);
      barContainer.appendChild(bar);
    }
    container.appendChild(barContainer);
  }, [barsNumber, barClassName, barContainerClassName, barStyle, barContainerStyle]);
  const drawVisualization = () => {
    if (!analyserRef.current || !visualizerContainerRef.current) return;
    const barContainer = visualizerContainerRef.current.querySelector(
      'div[style*="display: flex"]'
    );
    if (!barContainer) return;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const render = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const overallAvg = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
      const normalizedLoudness = Math.min(overallAvg / 140, 1);
      const numActiveBars = Math.floor(normalizedLoudness * barsNumber);
      const bars = barContainer.children;
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = i < numActiveBars ? colors.colors.team.action : "#d1d5db";
      }
      animationFrameRef.current = requestAnimationFrame(render);
    };
    render();
  };
  const resetVisualizerBars = () => {
    const container = visualizerContainerRef.current;
    if (!container) return;
    const barContainer = container.querySelector('div[style*="display: flex"]');
    if (!barContainer) return;
    const bars = barContainer.children;
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = "#d1d5db";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: visualizerContainerRef,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "1rem",
        width: "100%",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
        ...containerStyle
      },
      className: tailwindMerge.twMerge(containerClassName)
    }
  );
};
const AvatarUpload = ({ customRequest, src, shape, size, isLoading }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(index.Upload, { accept: ".jpg, .jpeg, .img", showUploadList: false, customRequest, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative cursor-pointer overflow-hidden group",
      style: {
        borderRadius: shape === "circle" ? "50%" : 4
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Icon,
              {
                name: "Add_photo",
                color: colors.colors.white_ff,
                className: "opacity-0 group-hover:opacity-100",
                style: { transition: "all 0.2s" }
              }
            )
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: " bg-light-2 ",
            style: {
              width: size,
              height: size
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size, color: colors.colors.primary_light_1 })
          }
        ) : /* @__PURE__ */ jsxRuntime.jsxs(
          index$1.Flex,
          {
            className: tailwindMerge.twMerge("cursor-pointer items-center justify-center"),
            style: {
              minWidth: size,
              minHeight: size,
              width: size,
              height: size,
              borderRadius: shape === "circle" ? 9999 : 4,
              border: `1px solid ${colors.colors.light_7}`,
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                index$1.Avatar,
                {
                  icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "User" }),
                  src,
                  size,
                  shape,
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: "opacity-0 group-hover:opacity-100",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    transition: "opacity 0.2s ease-in-out"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
const ChevronIcon = ({ direction, ...rest }) => {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const getIconName = (direction2 = "forward") => {
    if (direction2 === "forward") {
      return i18n2.language === "en" ? "Chevron_Right" : "Chevron_Left";
    } else {
      return i18n2.language === "en" ? "Chevron_Left" : "Chevron_Right";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: getIconName(direction), ...rest });
};
const CopyButton = ({ textToCopy, variant = "success", renderButton }) => {
  const { t } = reactI18next.useTranslation();
  const [showTooltip, setShowTooltip] = React.useState(false);
  React.useEffect(() => {
    showTooltip && setTimeout(() => {
      setShowTooltip(false);
    }, 750);
  }, [showTooltip]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.libExports.CopyToClipboard,
    {
      text: textToCopy,
      onCopy: (result) => {
        result && setShowTooltip(true);
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant, title: t("common.message.copied"), open: showTooltip, children: renderButton ? renderButton : /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 18, color: colors.colors.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { children: t("common.literal.copy") })
      ] }) })
    }
  );
};
const InputDatePicker = ({
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
  placeholder,
  wrapperStyle,
  hideErrorMessage = false,
  ...props
}) => {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const [open, setOpen] = React.useState(false);
  const value = React.useMemo(() => {
    if (valueISO) {
      return index.moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = React.useCallback(
    (date, dateString) => {
      const isoString = date ? date.toISOString() : "";
      onChangeProp?.(date, dateString);
      onChangeISO?.(isoString);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const language = locale || i18n2.language;
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "mb-[3px]", color: colors.colors.primary, children: label }) : label,
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.mainExports.InputDatePicker,
      {
        open,
        onOpenChange: setOpen,
        format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: language === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: index.datePickerColors,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: error?.message ? colors.colors.negative : colors.colors.primary_light_3,
          ...wrapperStyle
        },
        onChange,
        value,
        placeholder,
        closeOnChange: true,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: index.getErrorMessage(error) })
  ] });
};
const InputRangePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  inputWrapperClassName,
  value,
  locale,
  wrapperStyle,
  hideErrorMessage = false,
  height,
  ...props
}) => {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const pickerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  const language = locale || i18n2.language;
  React.useEffect(() => {
    if (value?.length === 2 && pickerRef.current) {
      setOpen(false);
    }
  }, [value]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, className: "mb-[3px]", children: label }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { ref: pickerRef, className: tailwindMerge.twMerge("h-full w-full", inputWrapperClassName), children: /* @__PURE__ */ jsxRuntime.jsx(
          index.mainExports.InputRangePicker,
          {
            open,
            onOpenChange: setOpen,
            format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: language === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: index.datePickerColors,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: error?.message ? colors.colors.negative : colors.colors.primary_light_3,
              minHeight: 40,
              ...wrapperStyle
            },
            value: isValueValid ? value : null,
            ...props
          }
        ) }),
        !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
      ]
    }
  );
};
const NotResult = ({
  error,
  noContentFoundMessage,
  errorIcon,
  noContentIcon
}) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: errorIcon, size: 24, color: colors.colors.negative_light_2 }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: noContentIcon, size: 24, color: colors.colors.primary_light_3 }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, color: error?.message ? colors.colors.negative : colors.colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t("common.literal.listError") : t("common.message.noResultFound") })
  ] });
};
const useDebounce = (fn, delay) => {
  const timerRef = React.useRef(null);
  return (...args) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const SortableList = ({
  move,
  renderItem,
  data,
  wrapperClassName,
  activateDistance = 5,
  dndContextProps,
  sortableContextProps,
  sortableWrapperProps: { className: sortableWrapperClassName, ...restSortableWrapperProps } = {},
  sortableItemProps
}) => {
  const sensors = index.useSensors(
    index.useSensor(index.MouseSensor, {
      activationConstraint: {
        distance: activateDistance
      }
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const fromIndex = data.findIndex((el) => el.id === active.id);
    const toIndex = data.findIndex((el) => el.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1) {
      move(fromIndex, toIndex);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(index.DndContext, { sensors, onDragEnd: handleDragEnd, ...dndContextProps, children: /* @__PURE__ */ jsxRuntime.jsx(
    index.SortableContext,
    {
      items: data,
      strategy: index.verticalListSortingStrategy,
      ...sortableContextProps,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: tailwindMerge.twMerge(wrapperClassName, sortableWrapperClassName),
          ...restSortableWrapperProps,
          children: data.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(SortableItem, { item, ...sortableItemProps, children: renderItem(item, index2) }, item.id))
        }
      )
    }
  ) });
};
const SortableItem = ({ children, item, ...rest }) => {
  const { setNodeRef, attributes, listeners, transform, transition } = index.useSortable({
    id: item.id
  });
  const style = {
    transform: index.CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { style, ref: setNodeRef, ...attributes, ...listeners, ...rest, children });
};
const Spliter = ({ children, title, direction = "center", expand = false }) => {
  const [expanded, setExpanded] = React.useState(expand);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "items-center w-full", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Flex,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: toggleExpand,
          children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: expanded ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(index.BorderedTitle, { align: direction, title })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "p-2 mt-2", children })
      }
    )
  ] });
};
const TreeSearchBar = ({ onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(onSearch, 500);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.Input.Search,
    {
      value: searchTerm,
      onChange: (e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
      },
      placeholder: i18n.t("common.literal.search") ?? "Search",
      ...props
    }
  );
};
const renderTreeNodes = (data, renderIcon, nodeClassName, renderRightIcons, defaultIcon) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: data.map((node) => /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tree.TreeNode,
    {
      isLeaf: !node.hasChildren,
      data: {
        title: node.label,
        key: node.value,
        children: node.children?.map((child) => ({
          title: child.label,
          key: child.value,
          children: []
        })) || []
      },
      className: tailwindMerge.twMerge("flex items-center justify-between", nodeClassName),
      title: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "w-full items-center justify-between p-1", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "items-center gap-2", children: [
          node.icon ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: node.icon }) : renderIcon ? typeof renderIcon === "function" ? renderIcon(node) : renderIcon : defaultIcon ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: defaultIcon }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: "folder_fill" }),
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: " truncate", children: node.label }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "items-center gap-1", children: renderRightIcons?.(node) })
      ] }),
      children: node.children?.length ? renderTreeNodes(
        node.children,
        renderIcon,
        nodeClassName,
        renderRightIcons,
        defaultIcon
      ) : null
    },
    node.value
  )) });
};
const Tree = ({
  switcherIconName,
  treeData,
  isLoading,
  className,
  nodeClassName,
  renderIcon,
  renderRightIcons,
  isExpandable,
  titleHeader,
  titleIcon,
  expandedWidth = 350,
  collapsedWidth = 48,
  onDrawerToggle,
  infiniteProps,
  onSearch,
  hasSearch = false,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const { t } = reactI18next.useTranslation();
  const handleDrawerToggle = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      onDrawerToggle?.(newState);
      return newState;
    });
  };
  const content = /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tree,
    {
      ...rest,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: switcherIconName || "Chevron_Down" }),
      className: tailwindMerge.twMerge(
        className,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: renderTreeNodes(treeData, renderIcon, nodeClassName, renderRightIcons, titleIcon)
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "bg-light-1 h-full w-[350px] max-w-[30px] transition-all",
        "[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20",
        "[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent"
      ),
      style: {
        width: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        minWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        maxWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`
      },
      children: [
        isExpandable && /* @__PURE__ */ jsxRuntime.jsxs(
          index$1.Flex,
          {
            gap: 4,
            className: tailwindMerge.twMerge(
              "border-light-7 relative pb-2.5 pl-0 pr-3 pt-3",
              isExpanded && "border"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, ...!isExpanded ? { vertical: true } : {}, children: [
                /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { color: colors.colors.primary_light_1, name: titleIcon }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  index$1.Text,
                  {
                    className: tailwindMerge.twMerge(!isExpanded && "rotate-180"),
                    style: !isExpanded ? { writingMode: "vertical-rl" } : {},
                    weight: "bold",
                    color: colors.colors.primary_light_1,
                    children: titleHeader
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                index.IconButton,
                {
                  color: colors.colors.primary_light_1,
                  iconName: !isExpanded ? "Chevron_Right" : "Chevron_Left",
                  onClick: handleDrawerToggle,
                  "data-testid": "drawer-toggle",
                  className: "bg-white-ff border-light-7 absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: isExpanded && hasSearch && onSearch, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: " bg-white-ff border-primary-light-3/60 border p-2", children: /* @__PURE__ */ jsxRuntime.jsx(TreeSearchBar, { onSearch }) }) }),
        isExpanded && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-white-ff tiny-custom-scrollbar flex h-full flex-col overflow-y-auto", children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(antd.Spin, { size: "large" }) : treeData.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, className: "text-gray-500", children: t("common.error.noItem") }) : infiniteProps ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            id: "tree-scroll-container",
            className: " bg-white-ff tiny-custom-scrollbar relative overflow-y-auto",
            children: /* @__PURE__ */ jsxRuntime.jsx(
              index$1.InfiniteLoader,
              {
                hasMore: infiniteProps?.hasMore,
                onNextPage: infiniteProps?.fetchNextPage,
                scrollableNodeId: "tree-scroll-container",
                children: content
              }
            )
          }
        ) : content })
      ]
    }
  );
};
exports.Accordion = index.Accordion;
exports.ActionHeader = index.ActionHeader;
exports.Box = index.Box;
exports.Button = index.Button;
exports.Input = index.Input;
exports.InputErrorMessage = index.InputErrorMessage;
exports.InputTimePicker = index.InputTimePicker;
exports.Select = index.Select;
exports.SelectClearIcon = index.SelectClearIcon;
exports.SelectLabel = index.SelectLabel;
exports.SelectNotFound = index.SelectNotFound;
exports.SelectPlaceholder = index.SelectPlaceholder;
exports.SelectSuffix = index.SelectSuffix;
exports.Tag = index.Tag;
exports.TagInput = index.TagInput;
exports.VerticalTabs = index.VerticalTabs;
exports.buttonDefaultClasses = index.buttonDefaultClasses;
exports.fontSizePicker = index.fontSizePicker;
exports.paddingPicker = index.paddingPicker;
exports.useNotification = index.useNotification;
exports.AudioVisualizer = AudioVisualizer;
exports.AvatarUpload = AvatarUpload;
exports.ChevronIcon = ChevronIcon;
exports.CopyButton = CopyButton;
exports.InputDatePicker = InputDatePicker;
exports.InputRangePicker = InputRangePicker;
exports.NotResult = NotResult;
exports.SortableList = SortableList;
exports.Spliter = Spliter;
exports.Tree = Tree;
