"use strict";
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const reactRouterDom = require("react-router-dom");
const index = require("./index-CW9vyiq6.cjs");
const colors = require("./colors-TPZkyKI4.cjs");
const Breadcrumb = (props) => {
  const appName = colors.AbrplusUIKit.config().getAppName();
  const color = colors.colors[appName];
  const actionColor = color?.action;
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Breadcrumb,
    {
      ...props,
      separator: /* @__PURE__ */ jsxRuntime.jsx(index.Icon, { name: "Chevron_Left", size: 22, color: actionColor }),
      itemRender: (route, _, items) => {
        if (!route.title) return null;
        const last = items.indexOf(route) === items.length - 1;
        if (last) {
          return /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: colors.colors.primary_dark_1, children: route.title });
        }
        return route.path ? /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, { to: route.path, children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: actionColor, children: route.title }) }) : /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: route.onClick, className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntime.jsx(index.Text, { size: 16, weight: "medium", color: actionColor, children: route.title }) });
      }
    }
  );
};
exports.Breadcrumb = Breadcrumb;
