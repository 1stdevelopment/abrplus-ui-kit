import { U as Upload, l as libExports, T as Tooltip, m as moment, a as mainExports, d as datePickerColors, I as InputErrorMessage, h as getErrorMessage, u as useSensors, i as useSensor, D as DndContext, S as SortableContext, v as verticalListSortingStrategy, M as MouseSensor, j as useSortable, k as CSS, B as BorderedTitle, n as Input, o as IconButton } from "./index-CdEE4thq.js";
import { A, p, L, q, K, x, y, z, E, F, G, H, J, O, r, s, t, w } from "./index-CdEE4thq.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./colors-gpRgsXSS.js";
import { Tree as Tree$1, Spin } from "antd";
import { I as Icon, L as Loading, F as Flex, A as Avatar, T as Text, R as Render, a as InfiniteLoader } from "./index-TDH6Fv86.js";
import { useTranslation } from "react-i18next";
import "antd/locale/en_US";
import "antd/locale/fa_IR";
import { t as t2 } from "i18next";
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
  const audioElRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const animationFrameRef = useRef(null);
  const visualizerContainerRef = useRef(null);
  const microphoneStreamRef = useRef(null);
  useEffect(() => {
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
  useEffect(() => {
    if (!deviceId || !audioElRef.current) return;
    let cancelled = false;
    const setupVisualizer = async () => {
      microphoneStreamRef.current?.getTracks().forEach((t3) => t3.stop());
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
      microphoneStreamRef.current?.getTracks().forEach((t3) => t3.stop());
      audioContextRef.current?.close();
      microphoneStreamRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      resetVisualizerBars();
    };
  }, [deviceId]);
  useEffect(() => {
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
  useEffect(() => {
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
    barContainer.className = twMerge(barContainerClassName);
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
      bar.className = twMerge(barClassName);
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
        bars[i].style.backgroundColor = i < numActiveBars ? colors.team.action : "#d1d5db";
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
  return /* @__PURE__ */ jsx(
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
      className: twMerge(containerClassName)
    }
  );
};
const AvatarUpload = ({ customRequest, src, shape, size, isLoading }) => {
  return /* @__PURE__ */ jsx(Upload, { accept: ".jpg, .jpeg, .img", showUploadList: false, customRequest, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative cursor-pointer overflow-hidden group",
      style: {
        borderRadius: shape === "circle" ? "50%" : 4
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            },
            children: /* @__PURE__ */ jsx(
              Icon,
              {
                name: "Add_photo",
                color: colors.white_ff,
                className: "opacity-0 group-hover:opacity-100",
                style: { transition: "all 0.2s" }
              }
            )
          }
        ),
        isLoading ? /* @__PURE__ */ jsx(
          "div",
          {
            className: " bg-light-2 ",
            style: {
              width: size,
              height: size
            },
            children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size, color: colors.primary_light_1 })
          }
        ) : /* @__PURE__ */ jsxs(
          Flex,
          {
            className: twMerge("cursor-pointer items-center justify-center"),
            style: {
              minWidth: size,
              minHeight: size,
              width: size,
              height: size,
              borderRadius: shape === "circle" ? 9999 : 4,
              border: `1px solid ${colors.light_7}`,
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  icon: /* @__PURE__ */ jsx(Icon, { name: "User" }),
                  src,
                  size,
                  shape,
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
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
  const { i18n } = useTranslation();
  const getIconName = (direction2 = "forward") => {
    if (direction2 === "forward") {
      return i18n.language === "en" ? "Chevron_Right" : "Chevron_Left";
    } else {
      return i18n.language === "en" ? "Chevron_Left" : "Chevron_Right";
    }
  };
  return /* @__PURE__ */ jsx(Icon, { name: getIconName(direction), ...rest });
};
const CopyButton = ({ textToCopy, variant = "success", renderButton }) => {
  const { t: t3 } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    showTooltip && setTimeout(() => {
      setShowTooltip(false);
    }, 750);
  }, [showTooltip]);
  return /* @__PURE__ */ jsx(
    libExports.CopyToClipboard,
    {
      text: textToCopy,
      onCopy: (result) => {
        result && setShowTooltip(true);
      },
      children: /* @__PURE__ */ jsx(Tooltip, { variant, title: t3("common.message.copied"), open: showTooltip, children: renderButton ? renderButton : /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ jsx(Icon, { size: 18, color: colors.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ jsx(Text, { children: t3("common.literal.copy") })
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
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const value = useMemo(() => {
    if (valueISO) {
      return moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = useCallback(
    (date, dateString) => {
      const isoString = date ? date.toISOString() : "";
      onChangeProp?.(date, dateString);
      onChangeISO?.(isoString);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const language = locale || i18n.language;
  return /* @__PURE__ */ jsxs(Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsx(Text, { className: "mb-[3px]", color: colors.primary, children: label }) : label,
      /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsx(
      mainExports.InputDatePicker,
      {
        open,
        onOpenChange: setOpen,
        format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: language === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: datePickerColors,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: error?.message ? colors.negative : colors.primary_light_3,
          ...wrapperStyle
        },
        onChange,
        value,
        placeholder,
        closeOnChange: true,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: getErrorMessage(error) })
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
  const { i18n } = useTranslation();
  const pickerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  const language = locale || i18n.language;
  useEffect(() => {
    if (value?.length === 2 && pickerRef.current) {
      setOpen(false);
    }
  }, [value]);
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
          typeof label === "string" ? /* @__PURE__ */ jsx(Text, { color: colors.primary, className: "mb-[3px]", children: label }) : label,
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsx(Flex, { ref: pickerRef, className: twMerge("h-full w-full", inputWrapperClassName), children: /* @__PURE__ */ jsx(
          mainExports.InputRangePicker,
          {
            open,
            onOpenChange: setOpen,
            format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: language === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: datePickerColors,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: error?.message ? colors.negative : colors.primary_light_3,
              minHeight: 40,
              ...wrapperStyle
            },
            value: isValueValid ? value : null,
            ...props
          }
        ) }),
        !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
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
  const { t: t3 } = useTranslation();
  return /* @__PURE__ */ jsxs(Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsx(Icon, { name: errorIcon, size: 24, color: colors.negative_light_2 }) : /* @__PURE__ */ jsx(Icon, { name: noContentIcon, size: 24, color: colors.primary_light_3 }),
    /* @__PURE__ */ jsx(Text, { size: 14, color: error?.message ? colors.negative : colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t3("common.literal.listError") : t3("common.message.noResultFound") })
  ] });
};
const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);
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
  const sensors = useSensors(
    useSensor(MouseSensor, {
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
  return /* @__PURE__ */ jsx(DndContext, { sensors, onDragEnd: handleDragEnd, ...dndContextProps, children: /* @__PURE__ */ jsx(
    SortableContext,
    {
      items: data,
      strategy: verticalListSortingStrategy,
      ...sortableContextProps,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: twMerge(wrapperClassName, sortableWrapperClassName),
          ...restSortableWrapperProps,
          children: data.map((item, index) => /* @__PURE__ */ jsx(SortableItem, { item, ...sortableItemProps, children: renderItem(item, index) }, item.id))
        }
      )
    }
  ) });
};
const SortableItem = ({ children, item, ...rest }) => {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id: item.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx("div", { style, ref: setNodeRef, ...attributes, ...listeners, ...rest, children });
};
const Spliter = ({ children, title, direction = "center", expand = false }) => {
  const [expanded, setExpanded] = useState(expand);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(Flex, { className: "items-center w-full", children: [
      /* @__PURE__ */ jsx(
        Flex,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: toggleExpand,
          children: /* @__PURE__ */ jsx(Icon, { name: expanded ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ jsx(BorderedTitle, { align: direction, title })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ jsx(Flex, { className: "p-2 mt-2", children })
      }
    )
  ] });
};
const TreeSearchBar = ({ onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(onSearch, 500);
  return /* @__PURE__ */ jsx(
    Input.Search,
    {
      value: searchTerm,
      onChange: (e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
      },
      placeholder: t2("common.literal.search") ?? "Search",
      ...props
    }
  );
};
const renderTreeNodes = (data, renderIcon, nodeClassName, renderRightIcons, defaultIcon) => {
  return /* @__PURE__ */ jsx(Fragment, { children: data.map((node) => /* @__PURE__ */ jsx(
    Tree$1.TreeNode,
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
      className: twMerge("flex items-center justify-between", nodeClassName),
      title: /* @__PURE__ */ jsxs(Flex, { className: "w-full items-center justify-between p-1", children: [
        /* @__PURE__ */ jsxs(Flex, { className: "items-center gap-2", children: [
          node.icon ? /* @__PURE__ */ jsx(Icon, { size: 20, name: node.icon }) : renderIcon ? typeof renderIcon === "function" ? renderIcon(node) : renderIcon : defaultIcon ? /* @__PURE__ */ jsx(Icon, { size: 20, name: defaultIcon }) : /* @__PURE__ */ jsx(Icon, { size: 20, name: "folder_fill" }),
          /* @__PURE__ */ jsx(Flex, { children: /* @__PURE__ */ jsx(Text, { className: " truncate", children: node.label }) })
        ] }),
        /* @__PURE__ */ jsx(Flex, { className: "items-center gap-1", children: renderRightIcons?.(node) })
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
  const [isExpanded, setIsExpanded] = useState(true);
  const { t: t3 } = useTranslation();
  const handleDrawerToggle = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      onDrawerToggle?.(newState);
      return newState;
    });
  };
  const content = /* @__PURE__ */ jsx(
    Tree$1,
    {
      ...rest,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ jsx(Icon, { name: switcherIconName || "Chevron_Down" }),
      className: twMerge(
        className,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: renderTreeNodes(treeData, renderIcon, nodeClassName, renderRightIcons, titleIcon)
    }
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
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
        isExpandable && /* @__PURE__ */ jsxs(
          Flex,
          {
            gap: 4,
            className: twMerge(
              "border-light-7 relative pb-2.5 pl-0 pr-3 pt-3",
              isExpanded && "border"
            ),
            children: [
              /* @__PURE__ */ jsxs(Flex, { gap: 8, ...!isExpanded ? { vertical: true } : {}, children: [
                /* @__PURE__ */ jsx(Icon, { color: colors.primary_light_1, name: titleIcon }),
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    className: twMerge(!isExpanded && "rotate-180"),
                    style: !isExpanded ? { writingMode: "vertical-rl" } : {},
                    weight: "bold",
                    color: colors.primary_light_1,
                    children: titleHeader
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  color: colors.primary_light_1,
                  iconName: !isExpanded ? "Chevron_Right" : "Chevron_Left",
                  onClick: handleDrawerToggle,
                  "data-testid": "drawer-toggle",
                  className: "bg-white-ff border-light-7 absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(Render, { when: isExpanded && hasSearch && onSearch, children: /* @__PURE__ */ jsx(Flex, { className: " bg-white-ff border-primary-light-3/60 border p-2", children: /* @__PURE__ */ jsx(TreeSearchBar, { onSearch }) }) }),
        isExpanded && /* @__PURE__ */ jsx("div", { className: "bg-white-ff tiny-custom-scrollbar flex h-full flex-col overflow-y-auto", children: isLoading ? /* @__PURE__ */ jsx(Spin, { size: "large" }) : treeData.length === 0 ? /* @__PURE__ */ jsx(Text, { size: 14, className: "text-gray-500", children: t3("common.error.noItem") }) : infiniteProps ? /* @__PURE__ */ jsx(
          "div",
          {
            id: "tree-scroll-container",
            className: " bg-white-ff tiny-custom-scrollbar relative overflow-y-auto",
            children: /* @__PURE__ */ jsx(
              InfiniteLoader,
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
export {
  A as Accordion,
  p as ActionHeader,
  AudioVisualizer,
  AvatarUpload,
  L as Box,
  q as Button,
  ChevronIcon,
  CopyButton,
  Input,
  InputDatePicker,
  InputErrorMessage,
  InputRangePicker,
  K as InputTimePicker,
  NotResult,
  x as Select,
  y as SelectClearIcon,
  z as SelectLabel,
  E as SelectNotFound,
  F as SelectPlaceholder,
  G as SelectSuffix,
  SortableList,
  Spliter,
  H as Tag,
  J as TagInput,
  Tree,
  O as VerticalTabs,
  r as buttonDefaultClasses,
  s as fontSizePicker,
  t as paddingPicker,
  w as useNotification
};
