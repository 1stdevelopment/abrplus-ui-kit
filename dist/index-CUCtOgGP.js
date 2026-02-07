import { jsx } from "react/jsx-runtime";
import { Breadcrumb as Breadcrumb$1 } from "antd";
import { Link } from "react-router-dom";
import { T as Text, I as Icon } from "./index-CB4n-5do.js";
import { A as AbrplusUIKit, c as colors } from "./colors-CztsZ6e_.js";
const Breadcrumb = (props) => {
  const appName = AbrplusUIKit.config().getAppName();
  const color = colors[appName];
  const actionColor = color?.action;
  return /* @__PURE__ */ jsx(
    Breadcrumb$1,
    {
      ...props,
      separator: /* @__PURE__ */ jsx(Icon, { name: "Chevron_Left", size: 22, color: actionColor }),
      itemRender: (route, _, items) => {
        if (!route.title) return null;
        const last = items.indexOf(route) === items.length - 1;
        if (last) {
          return /* @__PURE__ */ jsx(Text, { size: 16, weight: "medium", color: colors.primary_dark_1, children: route.title });
        }
        return route.path ? /* @__PURE__ */ jsx(Link, { to: route.path, children: /* @__PURE__ */ jsx(Text, { size: 16, weight: "medium", color: actionColor, children: route.title }) }) : /* @__PURE__ */ jsx("div", { onClick: route.onClick, className: "cursor-pointer", children: /* @__PURE__ */ jsx(Text, { size: 16, weight: "medium", color: actionColor, children: route.title }) });
      }
    }
  );
};
export {
  Breadcrumb as B
};
