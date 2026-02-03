import { jsx } from "react/jsx-runtime";
import { Avatar as Avatar$1 } from "antd";
import { twMerge } from "tailwind-merge";
const Avatar = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(Avatar$1, { ...props, className: twMerge("bg-light-7 border-primary-light-3", className) });
};
const Group = ({ className, max, ...props }) => {
  return /* @__PURE__ */ jsx(Avatar$1.Group, { max, ...props, className: twMerge(className) });
};
Avatar.Group = Group;
export {
  Avatar as A
};
