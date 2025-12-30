import { U as q, u as Y, l as H, T as I, m as G, a as L, d as $, I as O, h as J, i as K, j as Q, D as W, S as X, v as Z, M as ee, k as te, n as re, B as se, o as ne, p as ae } from "./index-CJ2d87Zx.js";
import { A as Fe, q as ze, E as Ee, r as Ie, s as Be, z as Le, w as $e, x as Oe, y as Ue, F as Pe, t as Ve } from "./index-CJ2d87Zx.js";
import { t as _, j as e, I as b, L as oe, F as x, A as ie, T, R as z, a as le } from "./index-iriWPKEd.js";
import { useRef as R, useEffect as A, useState as D, useMemo as ce, useCallback as ue } from "react";
import { c as d, t as de } from "./colors-qnr5G3YJ.js";
import { Tree as U, Spin as me } from "antd";
const he = 48, we = ({
  deviceId: n,
  speakerId: s,
  monitor: t = "off",
  containerStyle: r,
  containerClassName: o,
  barContainerStyle: a,
  barContainerClassName: l,
  barStyle: g,
  barClassName: w,
  barsNumber: C = he
}) => {
  const N = R(null), j = R(null), p = R(null), f = R(null), y = R(null), v = R(null);
  A(() => {
    const i = document.createElement("audio");
    return i.autoplay = !0, i.controls = !1, N.current = i, document.body.appendChild(i), () => {
      i.pause(), i.srcObject = null, i.remove();
    };
  }, []), A(() => {
    if (!n || !N.current) return;
    let i = !1;
    return (async () => {
      v.current?.getTracks().forEach((E) => E.stop());
      const c = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: n } }
      });
      if (i) return;
      v.current = c;
      const u = new AudioContext();
      p.current = u;
      const k = u.createAnalyser();
      k.fftSize = 256, k.smoothingTimeConstant = 0.75, j.current = k, u.createMediaStreamSource(c).connect(k), S();
    })(), () => {
      i = !0, f.current && cancelAnimationFrame(f.current), v.current?.getTracks().forEach((c) => c.stop()), p.current?.close(), v.current = null, p.current = null, j.current = null, m();
    };
  }, [n]), A(() => {
    const i = N.current, h = p.current, c = j.current, u = v.current;
    !i || !h || !c || !u || (t === "on" ? (c.connect(h.destination), i.srcObject = u, s && typeof i.setSinkId == "function" && i.setSinkId(s).catch(() => {
    })) : i.srcObject = null);
  }, [t, s]), A(() => {
    const i = y.current;
    if (!i) return;
    i.innerHTML = "";
    const h = document.createElement("div");
    Object.assign(h.style, {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      ...a
    }), h.className = _(l);
    for (let c = 0; c < C; c++) {
      const u = document.createElement("div");
      Object.assign(u.style, {
        backgroundColor: "#d1d5db",
        // default color (gray)
        height: "80%",
        transition: "background-color 0.1s ease-out",
        margin: "0 1px",
        borderRadius: "2px",
        width: "100%",
        ...g
      }), u.className = _(w), h.appendChild(u);
    }
    i.appendChild(h);
  }, [C, w, l, g, a]);
  const S = () => {
    if (!j.current || !y.current) return;
    const i = y.current.querySelector(
      'div[style*="display: flex"]'
    );
    if (!i) return;
    const h = j.current.frequencyBinCount, c = new Uint8Array(h), u = () => {
      j.current.getByteFrequencyData(c);
      const k = c.reduce((M, V) => M + V, 0) / h, F = Math.min(k / 140, 1), E = Math.floor(F * C), B = i.children;
      for (let M = 0; M < B.length; M++)
        B[M].style.backgroundColor = M < E ? d.team.action : "#d1d5db";
      f.current = requestAnimationFrame(u);
    };
    u();
  }, m = () => {
    const i = y.current;
    if (!i) return;
    const h = i.querySelector('div[style*="display: flex"]');
    if (!h) return;
    const c = h.children;
    for (let u = 0; u < c.length; u++)
      c[u].style.backgroundColor = "#d1d5db";
  };
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: y,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "1rem",
        width: "100%",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
        ...r
      },
      className: _(o)
    }
  );
}, Ce = ({ customRequest: n, src: s, shape: t, size: r, isLoading: o }) => /* @__PURE__ */ e.jsx(q, { accept: ".jpg, .jpeg, .img", showUploadList: !1, customRequest: n, children: /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: "relative cursor-pointer overflow-hidden group",
    style: {
      borderRadius: t === "circle" ? "50%" : 4
    },
    children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          style: {
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          },
          children: /* @__PURE__ */ e.jsx(
            b,
            {
              name: "Add_photo",
              color: d.white_ff,
              className: "opacity-0 group-hover:opacity-100",
              style: { transition: "all 0.2s" }
            }
          )
        }
      ),
      o ? /* @__PURE__ */ e.jsx(
        "div",
        {
          className: " bg-light-2 ",
          style: {
            width: r,
            height: r
          },
          children: /* @__PURE__ */ e.jsx(oe, { isLoading: !0, size: r, color: d.primary_light_1 })
        }
      ) : /* @__PURE__ */ e.jsxs(
        x,
        {
          className: _("cursor-pointer items-center justify-center"),
          style: {
            minWidth: r,
            minHeight: r,
            width: r,
            height: r,
            borderRadius: t === "circle" ? 9999 : 4,
            border: `1px solid ${d.light_7}`,
            position: "relative",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ e.jsx(
              ie,
              {
                icon: /* @__PURE__ */ e.jsx(b, { name: "User" }),
                src: s,
                size: r,
                shape: t,
                style: {
                  width: "100%",
                  height: "100%"
                }
              }
            ),
            /* @__PURE__ */ e.jsx(
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
) }), Ne = ({ direction: n, ...s }) => {
  const { i18n: t } = Y(), r = (o = "forward") => o === "forward" ? t.language === "en" ? "Chevron_Right" : "Chevron_Left" : t.language === "en" ? "Chevron_Left" : "Chevron_Right";
  return /* @__PURE__ */ e.jsx(b, { name: r(n), ...s });
}, _e = ({ textToCopy: n, variant: s = "success", renderButton: t }) => {
  const { t: r } = Y(), [o, a] = D(!1);
  return A(() => {
    o && setTimeout(() => {
      a(!1);
    }, 750);
  }, [o]), /* @__PURE__ */ e.jsx(
    H.CopyToClipboard,
    {
      text: n,
      onCopy: (l) => {
        l && a(!0);
      },
      children: /* @__PURE__ */ e.jsx(I, { variant: s, title: r("common.message.copied"), open: o, children: t || /* @__PURE__ */ e.jsxs(x, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(b, { size: 18, color: d.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ e.jsx(T, { children: r("common.literal.copy") })
      ] }) })
    }
  );
}, Se = ({
  helperText: n,
  required: s,
  label: t,
  error: r,
  wrapperClassName: o,
  onChange: a,
  onChangeISO: l,
  value: g,
  valueISO: w,
  locale: C,
  placeholder: N,
  wrapperStyle: j,
  hideErrorMessage: p = !1,
  ...f
}) => {
  const { i18n: y } = Y(), [v, S] = D(!1), m = ce(() => w ? G(w) : g, [w, g]), i = ue(
    (c, u) => {
      const k = c ? c.toISOString() : "";
      a?.(c, u), l?.(k);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), h = C || y.language;
  return /* @__PURE__ */ e.jsxs(x, { vertical: !0, className: `w-full ${!p && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ e.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ e.jsx(z, { when: n, children: /* @__PURE__ */ e.jsx(I, { variant: "default", title: n, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e.jsx(b, { name: "Help_header", color: d.primary_light_3, size: 15 }) }) }),
      typeof t == "string" ? /* @__PURE__ */ e.jsx(T, { className: "mb-[3px]", color: d.primary, children: t }) : t,
      /* @__PURE__ */ e.jsx(z, { when: s, children: /* @__PURE__ */ e.jsx(b, { name: "Asterisk", size: 6, color: d.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      L.InputDatePicker,
      {
        open: v,
        onOpenChange: S,
        format: h === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: h === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: C === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: $,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: r?.message ? d.negative : d.primary_light_3,
          ...j
        },
        onChange: i,
        value: m,
        placeholder: N,
        closeOnChange: !0,
        ...f
      }
    ),
    !p && r?.message && /* @__PURE__ */ e.jsx(O, { message: J(r) })
  ] });
}, ke = ({
  helperText: n,
  required: s,
  label: t,
  error: r,
  wrapperClassName: o,
  inputWrapperClassName: a,
  value: l,
  locale: g,
  wrapperStyle: w,
  hideErrorMessage: C = !1,
  height: N,
  ...j
}) => {
  const { i18n: p } = Y(), f = R(null), [y, v] = D(!1), S = (l?.filter(Boolean)?.length || 0) > 0 && !!l, m = g || p.language;
  return A(() => {
    l?.length === 2 && f.current && v(!1);
  }, [l]), /* @__PURE__ */ e.jsxs(
    x,
    {
      vertical: !0,
      className: _(
        "w-full",
        !C && "inputErrorMessageContainer",
        o
      ),
      children: [
        /* @__PURE__ */ e.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ e.jsx(z, { when: n, children: /* @__PURE__ */ e.jsx(I, { variant: "default", title: n, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e.jsx(b, { name: "Help_header", color: d.primary_light_3, size: 15 }) }) }),
          typeof t == "string" ? /* @__PURE__ */ e.jsx(T, { color: d.primary, className: "mb-[3px]", children: t }) : t,
          /* @__PURE__ */ e.jsx(z, { when: s, children: /* @__PURE__ */ e.jsx(b, { name: "Asterisk", size: 6, color: d.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ e.jsx(x, { ref: f, className: _("h-full w-full", a), children: /* @__PURE__ */ e.jsx(
          L.InputRangePicker,
          {
            open: y,
            onOpenChange: v,
            format: m === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: m === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: g === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: $,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: r?.message ? d.negative : d.primary_light_3,
              minHeight: 40,
              ...w
            },
            value: S ? l : null,
            ...j
          }
        ) }),
        !C && r?.message && /* @__PURE__ */ e.jsx(O, { message: r?.message })
      ]
    }
  );
}, Re = ({
  error: n,
  noContentFoundMessage: s,
  errorIcon: t,
  noContentIcon: r
}) => {
  const { t: o } = Y();
  return /* @__PURE__ */ e.jsxs(x, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    n?.message ? /* @__PURE__ */ e.jsx(b, { name: t, size: 24, color: d.negative_light_2 }) : /* @__PURE__ */ e.jsx(b, { name: r, size: 24, color: d.primary_light_3 }),
    /* @__PURE__ */ e.jsx(T, { size: 14, color: n?.message ? d.negative : d.primary_light_2, children: s || (n?.message ? o("common.literal.listError") : o("common.message.noResultFound")) })
  ] });
}, ge = (n, s) => {
  const t = R(null);
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      n(...r);
    }, s);
  };
}, Te = ({
  move: n,
  renderItem: s,
  data: t,
  wrapperClassName: r,
  activateDistance: o = 5,
  dndContextProps: a,
  sortableContextProps: l,
  sortableWrapperProps: { className: g, ...w } = {},
  sortableItemProps: C
}) => {
  const N = K(
    Q(ee, {
      activationConstraint: {
        distance: o
      }
    })
  ), j = (p) => {
    const { active: f, over: y } = p;
    if (!y || f.id === y.id) return;
    const v = t.findIndex((m) => m.id === f.id), S = t.findIndex((m) => m.id === y.id);
    v !== -1 && S !== -1 && n(v, S);
  };
  return /* @__PURE__ */ e.jsx(W, { sensors: N, onDragEnd: j, ...a, children: /* @__PURE__ */ e.jsx(
    X,
    {
      items: t,
      strategy: Z,
      ...l,
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: _(r, g),
          ...w,
          children: t.map((p, f) => /* @__PURE__ */ e.jsx(pe, { item: p, ...C, children: s(p, f) }, p.id))
        }
      )
    }
  ) });
}, pe = ({ children: n, item: s, ...t }) => {
  const { setNodeRef: r, attributes: o, listeners: a, transform: l, transition: g } = te({
    id: s.id
  }), w = {
    transform: re.Transform.toString(l),
    transition: g
  };
  return /* @__PURE__ */ e.jsx("div", { style: w, ref: r, ...o, ...a, ...t, children: n });
}, Me = ({ children: n, title: s, direction: t = "center", expand: r = !1 }) => {
  const [o, a] = D(r), l = () => {
    a(!o);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(x, { className: "items-center w-full", children: [
      /* @__PURE__ */ e.jsx(
        x,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: l,
          children: /* @__PURE__ */ e.jsx(b, { name: o ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ e.jsx(se, { align: t, title: s })
    ] }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${o ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ e.jsx(x, { className: "p-2 mt-2", children: n })
      }
    )
  ] });
}, fe = ({ onSearch: n, ...s }) => {
  const [t, r] = D(""), o = ge(n, 500);
  return /* @__PURE__ */ e.jsx(
    ne,
    {
      value: t,
      onChange: (a) => {
        r(a.target.value), o(a.target.value);
      },
      placeholder: de("common.literal.search") ?? "Search",
      ...s
    }
  );
}, P = (n, s, t, r, o) => /* @__PURE__ */ e.jsx(e.Fragment, { children: n.map((a) => /* @__PURE__ */ e.jsx(
  U.TreeNode,
  {
    isLeaf: !a.hasChildren,
    data: {
      title: a.label,
      key: a.value,
      children: a.children?.map((l) => ({
        title: l.label,
        key: l.value,
        children: []
      })) || []
    },
    className: _("flex items-center justify-between", t),
    title: /* @__PURE__ */ e.jsxs(x, { className: "w-full items-center justify-between p-1", children: [
      /* @__PURE__ */ e.jsxs(x, { className: "items-center gap-2", children: [
        a.icon ? /* @__PURE__ */ e.jsx(b, { size: 20, name: a.icon }) : s ? typeof s == "function" ? s(a) : s : o ? /* @__PURE__ */ e.jsx(b, { size: 20, name: o }) : /* @__PURE__ */ e.jsx(b, { size: 20, name: "folder_fill" }),
        /* @__PURE__ */ e.jsx(x, { children: /* @__PURE__ */ e.jsx(T, { className: " truncate", children: a.label }) })
      ] }),
      /* @__PURE__ */ e.jsx(x, { className: "items-center gap-1", children: r?.(a) })
    ] }),
    children: a.children?.length ? P(
      a.children,
      s,
      t,
      r,
      o
    ) : null
  },
  a.value
)) }), Ae = ({
  switcherIconName: n,
  treeData: s,
  isLoading: t,
  className: r,
  nodeClassName: o,
  renderIcon: a,
  renderRightIcons: l,
  isExpandable: g,
  titleHeader: w,
  titleIcon: C,
  expandedWidth: N = 350,
  collapsedWidth: j = 48,
  onDrawerToggle: p,
  infiniteProps: f,
  onSearch: y,
  hasSearch: v = !1,
  ...S
}) => {
  const [m, i] = D(!0), { t: h } = Y(), c = () => {
    i((k) => {
      const F = !k;
      return p?.(F), F;
    });
  }, u = /* @__PURE__ */ e.jsx(
    U,
    {
      ...S,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ e.jsx(b, { name: n || "Chevron_Down" }),
      className: _(
        r,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: P(s, a, o, l, C)
    }
  );
  return /* @__PURE__ */ e.jsxs(
    x,
    {
      vertical: !0,
      className: _(
        "bg-light-1 h-full w-[350px] max-w-[30px] transition-all",
        "[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20",
        "[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent"
      ),
      style: {
        width: g && !m ? `${j}px` : `${N}px`,
        minWidth: g && !m ? `${j}px` : `${N}px`,
        maxWidth: g && !m ? `${j}px` : `${N}px`
      },
      children: [
        g && /* @__PURE__ */ e.jsxs(
          x,
          {
            gap: 4,
            className: _(
              "border-light-7 relative pb-2.5 pl-0 pr-3 pt-3",
              m && "border"
            ),
            children: [
              /* @__PURE__ */ e.jsxs(x, { gap: 8, ...m ? {} : { vertical: !0 }, children: [
                /* @__PURE__ */ e.jsx(b, { color: d.primary_light_1, name: C }),
                /* @__PURE__ */ e.jsx(
                  T,
                  {
                    className: _(!m && "rotate-180"),
                    style: m ? {} : { writingMode: "vertical-rl" },
                    weight: "bold",
                    color: d.primary_light_1,
                    children: w
                  }
                )
              ] }),
              /* @__PURE__ */ e.jsx(
                ae,
                {
                  color: d.primary_light_1,
                  iconName: m ? "Chevron_Left" : "Chevron_Right",
                  onClick: c,
                  "data-testid": "drawer-toggle",
                  className: "bg-white-ff border-light-7 absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(z, { when: m && v && y, children: /* @__PURE__ */ e.jsx(x, { className: " bg-white-ff border-primary-light-3/60 border p-2", children: /* @__PURE__ */ e.jsx(fe, { onSearch: y }) }) }),
        m && /* @__PURE__ */ e.jsx("div", { className: "bg-white-ff tiny-custom-scrollbar flex h-full flex-col overflow-y-auto", children: t ? /* @__PURE__ */ e.jsx(me, { size: "large" }) : s.length === 0 ? /* @__PURE__ */ e.jsx(T, { size: 14, className: "text-gray-500", children: h("common.error.noItem") }) : f ? /* @__PURE__ */ e.jsx(
          "div",
          {
            id: "tree-scroll-container",
            className: " bg-white-ff tiny-custom-scrollbar relative overflow-y-auto",
            children: /* @__PURE__ */ e.jsx(
              le,
              {
                hasMore: f?.hasMore,
                onNextPage: f?.fetchNextPage,
                scrollableNodeId: "tree-scroll-container",
                children: u
              }
            )
          }
        ) : u })
      ]
    }
  );
};
export {
  Fe as Accordion,
  ze as ActionHeader,
  we as AudioVisualizer,
  Ce as AvatarUpload,
  Ee as Box,
  Ie as Button,
  Ne as ChevronIcon,
  _e as CopyButton,
  Be as Input,
  Se as InputDatePicker,
  O as InputErrorMessage,
  ke as InputRangePicker,
  Le as InputTimePicker,
  Re as NotResult,
  $e as Select,
  Te as SortableList,
  Me as Spliter,
  Oe as Tag,
  Ue as TagInput,
  Ae as Tree,
  Pe as VerticalTabs,
  Ve as useNotification
};
