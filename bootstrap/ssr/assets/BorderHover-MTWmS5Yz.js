import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const BorderHover = ({
  children,
  defBorderColor = "",
  hovBorderColor = "bg-black",
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const borderColor = isHovered ? hovBorderColor : defBorderColor;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: `relative group w-fit z-10 ${className}`,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `absolute left-0 bottom-0 w-full h-0.2 group-hover:w-0 transition-all duration-700 ${defBorderColor}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `absolute left-1/2 bottom-0 pt-px h-0.2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-700 ${borderColor}`
          }
        ),
        children
      ]
    }
  );
};
const BorderHover$1 = BorderHover;
export {
  BorderHover$1 as B
};
