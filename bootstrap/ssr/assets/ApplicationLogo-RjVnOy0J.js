import { jsxs, jsx } from "react/jsx-runtime";
const LogoICon = "/build/assets/LogoIcon-KzfdGKwG.png";
const ApplicationLogo = () => {
  return /* @__PURE__ */ jsxs("div", { className: `flex gap-3 text-center items-center justify-center`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: LogoICon,
        alt: "Logo Icon",
        className: "w-9 h-8 hidden md:block"
      }
    ),
    /* @__PURE__ */ jsxs("h1", { className: "text-xl font-bold text-[#02789e]", children: [
      "Isolated ",
      /* @__PURE__ */ jsx("span", { className: "text-red-500 ", children: "Solutions" })
    ] })
  ] });
};
const ApplicationLogo$1 = ApplicationLogo;
export {
  ApplicationLogo$1 as A
};
