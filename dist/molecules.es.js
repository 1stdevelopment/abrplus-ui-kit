import { U as H, u as Y, l as G, T as B, m as J, a as $, d as O, I as U, h as K, i as Q, j as W, D as X, S as Z, v as ee, M as te, k as re, n as ne, B as ae, o as oe, p as se } from "./index-Dw0xt6AD.js";
import { A as Le, q as $e, E as Oe, r as Ue, s as Pe, z as Ve, w as qe, x as He, y as Ge, F as Je, t as Ke } from "./index-Dw0xt6AD.js";
import { jsx as e, jsxs as C, Fragment as ie } from "react/jsx-runtime";
import { useRef as M, useEffect as D, useState as F, useMemo as le, useCallback as ce } from "react";
import { c as d, t as ue } from "./colors-Bi8DBIbo.js";
import { t as k, I as v, L as de, F as y, A as me, T as j, R as E, a as he } from "./index-Bcn0CdnN.js";
import { Tree as P, Spin as ge } from "antd";
import "antd/locale/en_US";
import "antd/locale/fa_IR";
const pe = 48, Re = ({
  deviceId: a,
  speakerId: n,
  monitor: t = "off",
  containerStyle: r,
  containerClassName: s,
  barContainerStyle: o,
  barContainerClassName: l,
  barStyle: g,
  barClassName: N,
  barsNumber: _ = pe
}) => {
  const S = M(null), w = M(null), p = M(null), f = M(null), b = M(null), x = M(null);
  D(() => {
    const i = document.createElement("audio");
    return i.autoplay = !0, i.controls = !1, S.current = i, document.body.appendChild(i), () => {
      i.pause(), i.srcObject = null, i.remove();
    };
  }, []), D(() => {
    if (!a || !S.current) return;
    let i = !1;
    return (async () => {
      x.current?.getTracks().forEach((I) => I.stop());
      const c = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: a } }
      });
      if (i) return;
      x.current = c;
      const u = new AudioContext();
      p.current = u;
      const T = u.createAnalyser();
      T.fftSize = 256, T.smoothingTimeConstant = 0.75, w.current = T, u.createMediaStreamSource(c).connect(T), R();
    })(), () => {
      i = !0, f.current && cancelAnimationFrame(f.current), x.current?.getTracks().forEach((c) => c.stop()), p.current?.close(), x.current = null, p.current = null, w.current = null, m();
    };
  }, [a]), D(() => {
    const i = S.current, h = p.current, c = w.current, u = x.current;
    !i || !h || !c || !u || (t === "on" ? (c.connect(h.destination), i.srcObject = u, n && typeof i.setSinkId == "function" && i.setSinkId(n).catch(() => {
    })) : i.srcObject = null);
  }, [t, n]), D(() => {
    const i = b.current;
    if (!i) return;
    i.innerHTML = "";
    const h = document.createElement("div");
    Object.assign(h.style, {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      ...o
    }), h.className = k(l);
    for (let c = 0; c < _; c++) {
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
      }), u.className = k(N), h.appendChild(u);
    }
    i.appendChild(h);
  }, [_, N, l, g, o]);
  const R = () => {
    if (!w.current || !b.current) return;
    const i = b.current.querySelector(
      'div[style*="display: flex"]'
    );
    if (!i) return;
    const h = w.current.frequencyBinCount, c = new Uint8Array(h), u = () => {
      w.current.getByteFrequencyData(c);
      const T = c.reduce((A, q) => A + q, 0) / h, z = Math.min(T / 140, 1), I = Math.floor(z * _), L = i.children;
      for (let A = 0; A < L.length; A++)
        L[A].style.backgroundColor = A < I ? d.team.action : "#d1d5db";
      f.current = requestAnimationFrame(u);
    };
    u();
  }, m = () => {
    const i = b.current;
    if (!i) return;
    const h = i.querySelector('div[style*="display: flex"]');
    if (!h) return;
    const c = h.children;
    for (let u = 0; u < c.length; u++)
      c[u].style.backgroundColor = "#d1d5db";
  };
  return /* @__PURE__ */ e(
    "div",
    {
      ref: b,
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
      className: k(s)
    }
  );
}, Te = ({ customRequest: a, src: n, shape: t, size: r, isLoading: s }) => /* @__PURE__ */ e(H, { accept: ".jpg, .jpeg, .img", showUploadList: !1, customRequest: a, children: /* @__PURE__ */ C(
  "div",
  {
    className: "relative cursor-pointer overflow-hidden group",
    style: {
      borderRadius: t === "circle" ? "50%" : 4
    },
    children: [
      /* @__PURE__ */ e(
        "div",
        {
          style: {
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          },
          children: /* @__PURE__ */ e(
            v,
            {
              name: "Add_photo",
              color: d.white_ff,
              className: "opacity-0 group-hover:opacity-100",
              style: { transition: "all 0.2s" }
            }
          )
        }
      ),
      s ? /* @__PURE__ */ e(
        "div",
        {
          className: " bg-light-2 ",
          style: {
            width: r,
            height: r
          },
          children: /* @__PURE__ */ e(de, { isLoading: !0, size: r, color: d.primary_light_1 })
        }
      ) : /* @__PURE__ */ C(
        y,
        {
          className: k("cursor-pointer items-center justify-center"),
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
            /* @__PURE__ */ e(
              me,
              {
                icon: /* @__PURE__ */ e(v, { name: "User" }),
                src: n,
                size: r,
                shape: t,
                style: {
                  width: "100%",
                  height: "100%"
                }
              }
            ),
            /* @__PURE__ */ e(
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
) }), Me = ({ direction: a, ...n }) => {
  const { i18n: t } = Y();
  return /* @__PURE__ */ e(v, { name: ((s = "forward") => s === "forward" ? t.language === "en" ? "Chevron_Right" : "Chevron_Left" : t.language === "en" ? "Chevron_Left" : "Chevron_Right")(a), ...n });
}, je = ({ textToCopy: a, variant: n = "success", renderButton: t }) => {
  const { t: r } = Y(), [s, o] = F(!1);
  return D(() => {
    s && setTimeout(() => {
      o(!1);
    }, 750);
  }, [s]), /* @__PURE__ */ e(
    G.CopyToClipboard,
    {
      text: a,
      onCopy: (l) => {
        l && o(!0);
      },
      children: /* @__PURE__ */ e(B, { variant: n, title: r("common.message.copied"), open: s, children: t || /* @__PURE__ */ C(y, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ e(v, { size: 18, color: d.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ e(j, { children: r("common.literal.copy") })
      ] }) })
    }
  );
}, Ae = ({
  helperText: a,
  required: n,
  label: t,
  error: r,
  wrapperClassName: s,
  onChange: o,
  onChangeISO: l,
  value: g,
  valueISO: N,
  locale: _,
  placeholder: S,
  wrapperStyle: w,
  hideErrorMessage: p = !1,
  ...f
}) => {
  const { i18n: b } = Y(), [x, R] = F(!1), m = le(() => N ? J(N) : g, [N, g]), i = ce(
    (c, u) => {
      const T = c ? c.toISOString() : "";
      o?.(c, u), l?.(T);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), h = _ || b.language;
  return /* @__PURE__ */ C(y, { vertical: !0, className: `w-full ${!p && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ C("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ e(E, { when: a, children: /* @__PURE__ */ e(B, { variant: "default", title: a, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e(v, { name: "Help_header", color: d.primary_light_3, size: 15 }) }) }),
      typeof t == "string" ? /* @__PURE__ */ e(j, { className: "mb-[3px]", color: d.primary, children: t }) : t,
      /* @__PURE__ */ e(E, { when: n, children: /* @__PURE__ */ e(v, { name: "Asterisk", size: 6, color: d.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ e(
      $.InputDatePicker,
      {
        open: x,
        onOpenChange: R,
        format: h === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: h === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: _ === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: O,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: r?.message ? d.negative : d.primary_light_3,
          ...w
        },
        onChange: i,
        value: m,
        placeholder: S,
        closeOnChange: !0,
        ...f
      }
    ),
    !p && r?.message && /* @__PURE__ */ e(U, { message: K(r) })
  ] });
}, De = ({
  helperText: a,
  required: n,
  label: t,
  error: r,
  wrapperClassName: s,
  inputWrapperClassName: o,
  value: l,
  locale: g,
  wrapperStyle: N,
  hideErrorMessage: _ = !1,
  height: S,
  ...w
}) => {
  const { i18n: p } = Y(), f = M(null), [b, x] = F(!1), R = (l?.filter(Boolean)?.length || 0) > 0 && !!l, m = g || p.language;
  return D(() => {
    l?.length === 2 && f.current && x(!1);
  }, [l]), /* @__PURE__ */ C(
    y,
    {
      vertical: !0,
      className: k(
        "w-full",
        !_ && "inputErrorMessageContainer",
        s
      ),
      children: [
        /* @__PURE__ */ C("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ e(E, { when: a, children: /* @__PURE__ */ e(B, { variant: "default", title: a, arrow: { pointAtCenter: !0 }, children: /* @__PURE__ */ e(v, { name: "Help_header", color: d.primary_light_3, size: 15 }) }) }),
          typeof t == "string" ? /* @__PURE__ */ e(j, { color: d.primary, className: "mb-[3px]", children: t }) : t,
          /* @__PURE__ */ e(E, { when: n, children: /* @__PURE__ */ e(v, { name: "Asterisk", size: 6, color: d.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ e(y, { ref: f, className: k("h-full w-full", o), children: /* @__PURE__ */ e(
          $.InputRangePicker,
          {
            open: b,
            onOpenChange: x,
            format: m === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: m === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: g === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: O,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: r?.message ? d.negative : d.primary_light_3,
              minHeight: 40,
              ...N
            },
            value: R ? l : null,
            ...w
          }
        ) }),
        !_ && r?.message && /* @__PURE__ */ e(U, { message: r?.message })
      ]
    }
  );
}, Ye = ({
  error: a,
  noContentFoundMessage: n,
  errorIcon: t,
  noContentIcon: r
}) => {
  const { t: s } = Y();
  return /* @__PURE__ */ C(y, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    a?.message ? /* @__PURE__ */ e(v, { name: t, size: 24, color: d.negative_light_2 }) : /* @__PURE__ */ e(v, { name: r, size: 24, color: d.primary_light_3 }),
    /* @__PURE__ */ e(j, { size: 14, color: a?.message ? d.negative : d.primary_light_2, children: n || (a?.message ? s("common.literal.listError") : s("common.message.noResultFound")) })
  ] });
}, fe = (a, n) => {
  const t = M(null);
  return (...r) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      a(...r);
    }, n);
  };
}, Fe = ({
  move: a,
  renderItem: n,
  data: t,
  wrapperClassName: r,
  activateDistance: s = 5,
  dndContextProps: o,
  sortableContextProps: l,
  sortableWrapperProps: { className: g, ...N } = {},
  sortableItemProps: _
}) => {
  const S = Q(
    W(te, {
      activationConstraint: {
        distance: s
      }
    })
  );
  return /* @__PURE__ */ e(X, { sensors: S, onDragEnd: (p) => {
    const { active: f, over: b } = p;
    if (!b || f.id === b.id) return;
    const x = t.findIndex((m) => m.id === f.id), R = t.findIndex((m) => m.id === b.id);
    x !== -1 && R !== -1 && a(x, R);
  }, ...o, children: /* @__PURE__ */ e(
    Z,
    {
      items: t,
      strategy: ee,
      ...l,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: k(r, g),
          ...N,
          children: t.map((p, f) => /* @__PURE__ */ e(ye, { item: p, ..._, children: n(p, f) }, p.id))
        }
      )
    }
  ) });
}, ye = ({ children: a, item: n, ...t }) => {
  const { setNodeRef: r, attributes: s, listeners: o, transform: l, transition: g } = re({
    id: n.id
  }), N = {
    transform: ne.Transform.toString(l),
    transition: g
  };
  return /* @__PURE__ */ e("div", { style: N, ref: r, ...s, ...o, ...t, children: a });
}, ze = ({ children: a, title: n, direction: t = "center", expand: r = !1 }) => {
  const [s, o] = F(r);
  return /* @__PURE__ */ C("div", { className: "w-full", children: [
    /* @__PURE__ */ C(y, { className: "items-center w-full", children: [
      /* @__PURE__ */ e(
        y,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: () => {
            o(!s);
          },
          children: /* @__PURE__ */ e(v, { name: s ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ e(ae, { align: t, title: n })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${s ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ e(y, { className: "p-2 mt-2", children: a })
      }
    )
  ] });
}, be = ({ onSearch: a, ...n }) => {
  const [t, r] = F(""), s = fe(a, 500);
  return /* @__PURE__ */ e(
    oe,
    {
      value: t,
      onChange: (o) => {
        r(o.target.value), s(o.target.value);
      },
      placeholder: ue("common.literal.search") ?? "Search",
      ...n
    }
  );
}, V = (a, n, t, r, s) => /* @__PURE__ */ e(ie, { children: a.map((o) => /* @__PURE__ */ e(
  P.TreeNode,
  {
    isLeaf: !o.hasChildren,
    data: {
      title: o.label,
      key: o.value,
      children: o.children?.map((l) => ({
        title: l.label,
        key: l.value,
        children: []
      })) || []
    },
    className: k("flex items-center justify-between", t),
    title: /* @__PURE__ */ C(y, { className: "w-full items-center justify-between p-1", children: [
      /* @__PURE__ */ C(y, { className: "items-center gap-2", children: [
        o.icon ? /* @__PURE__ */ e(v, { size: 20, name: o.icon }) : n ? typeof n == "function" ? n(o) : n : s ? /* @__PURE__ */ e(v, { size: 20, name: s }) : /* @__PURE__ */ e(v, { size: 20, name: "folder_fill" }),
        /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(j, { className: " truncate", children: o.label }) })
      ] }),
      /* @__PURE__ */ e(y, { className: "items-center gap-1", children: r?.(o) })
    ] }),
    children: o.children?.length ? V(
      o.children,
      n,
      t,
      r,
      s
    ) : null
  },
  o.value
)) }), Ee = ({
  switcherIconName: a,
  treeData: n,
  isLoading: t,
  className: r,
  nodeClassName: s,
  renderIcon: o,
  renderRightIcons: l,
  isExpandable: g,
  titleHeader: N,
  titleIcon: _,
  expandedWidth: S = 350,
  collapsedWidth: w = 48,
  onDrawerToggle: p,
  infiniteProps: f,
  onSearch: b,
  hasSearch: x = !1,
  ...R
}) => {
  const [m, i] = F(!0), { t: h } = Y(), c = () => {
    i((T) => {
      const z = !T;
      return p?.(z), z;
    });
  }, u = /* @__PURE__ */ e(
    P,
    {
      ...R,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ e(v, { name: a || "Chevron_Down" }),
      className: k(
        r,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: V(n, o, s, l, _)
    }
  );
  return /* @__PURE__ */ C(
    y,
    {
      vertical: !0,
      className: k(
        "bg-light-1 h-full w-[350px] max-w-[30px] transition-all",
        "[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20",
        "[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent"
      ),
      style: {
        width: g && !m ? `${w}px` : `${S}px`,
        minWidth: g && !m ? `${w}px` : `${S}px`,
        maxWidth: g && !m ? `${w}px` : `${S}px`
      },
      children: [
        g && /* @__PURE__ */ C(
          y,
          {
            gap: 4,
            className: k(
              "border-light-7 relative pb-2.5 pl-0 pr-3 pt-3",
              m && "border"
            ),
            children: [
              /* @__PURE__ */ C(y, { gap: 8, ...m ? {} : { vertical: !0 }, children: [
                /* @__PURE__ */ e(v, { color: d.primary_light_1, name: _ }),
                /* @__PURE__ */ e(
                  j,
                  {
                    className: k(!m && "rotate-180"),
                    style: m ? {} : { writingMode: "vertical-rl" },
                    weight: "bold",
                    color: d.primary_light_1,
                    children: N
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                se,
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
        /* @__PURE__ */ e(E, { when: m && x && b, children: /* @__PURE__ */ e(y, { className: " bg-white-ff border-primary-light-3/60 border p-2", children: /* @__PURE__ */ e(be, { onSearch: b }) }) }),
        m && /* @__PURE__ */ e("div", { className: "bg-white-ff tiny-custom-scrollbar flex h-full flex-col overflow-y-auto", children: t ? /* @__PURE__ */ e(ge, { size: "large" }) : n.length === 0 ? /* @__PURE__ */ e(j, { size: 14, className: "text-gray-500", children: h("common.error.noItem") }) : f ? /* @__PURE__ */ e(
          "div",
          {
            id: "tree-scroll-container",
            className: " bg-white-ff tiny-custom-scrollbar relative overflow-y-auto",
            children: /* @__PURE__ */ e(
              he,
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
  Le as Accordion,
  $e as ActionHeader,
  Re as AudioVisualizer,
  Te as AvatarUpload,
  Oe as Box,
  Ue as Button,
  Me as ChevronIcon,
  je as CopyButton,
  Pe as Input,
  Ae as InputDatePicker,
  U as InputErrorMessage,
  De as InputRangePicker,
  Ve as InputTimePicker,
  Ye as NotResult,
  qe as Select,
  Fe as SortableList,
  ze as Spliter,
  He as Tag,
  Ge as TagInput,
  Ee as Tree,
  Je as VerticalTabs,
  Ke as useNotification
};
