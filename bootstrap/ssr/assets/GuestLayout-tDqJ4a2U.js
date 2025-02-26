import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { N as Navbar, F as Footer } from "./Navbar-CpdjPGlk.js";
function Guest({ children }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-[#f5f5f5]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full border-b border-red-100", children: /* @__PURE__ */ jsx(Navbar, {}) }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow bg-[#f5f5f5]", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Guest as G
};
