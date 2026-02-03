"use strict";
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const tailwindMerge = require("tailwind-merge");
const Avatar = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Avatar, { ...props, className: tailwindMerge.twMerge("bg-light-7 border-primary-light-3", className) });
};
const Group = ({ className, max, ...props }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.Avatar.Group, { max, ...props, className: tailwindMerge.twMerge(className) });
};
Avatar.Group = Group;
exports.Avatar = Avatar;
