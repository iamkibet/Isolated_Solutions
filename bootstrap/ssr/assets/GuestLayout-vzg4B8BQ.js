import { jsxs, jsx } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-BPuQqoMR.js";
import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { IoIosMenu, IoMdClose, IoIosArrowForward } from "react-icons/io";
import { M as MaxWidthWrapper, S as ServicesLinks, T as TechnologiesLinks, I as IndustriesLinks, W as WorkLinks, A as AboutLinks } from "./MaxWidthWrapper-YqTwz5LP.js";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import classnames from "classnames";
const MobileFooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: " border-b pb-2 mb-2 last:border-0 last:pb-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((prevValue) => !prevValue),
        "aria-expanded": isOpen,
        className: "flex justify-between items-center w-full text-left focus:outline-none",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold uppercase leading-tight text-gray-400", children: title }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: classnames("inline-block align-middle", {
                "text-xs": true,
                "rotate-0": isOpen,
                "rotate-180": !isOpen,
                "fill-current": true,
                "ml-2": true,
                "w-7": true,
                "h-7": true,
                transform: true,
                "duration-200": true
              }),
              children: isOpen ? /* @__PURE__ */ jsx("span", { className: "text-xl", children: "-" }) : /* @__PURE__ */ jsx("span", { className: "text-xl", children: "+" })
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("ul", { className: "pl-4 list-disc list-inside text-base font-normal text-black hover:text-gray-400", children })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "flex text-[#14151b]  border-t border-[#14151b]", children: [
    /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "w-full hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-4 border-b-2 border-black", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-gray-400", children: "Who we are" }),
            /* @__PURE__ */ jsxs("ul", { className: "font-medium text-sm text-black hover:text-gray-400", children: [
              /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "About Us" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Founder" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "FAQs" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Careers" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mt-6 text-sm font-semibold uppercase text-gray-400", children: "Dedicated Hiring" }),
            /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "/", children: "Looking to hire for long-term or full-time assignments?" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-400 uppercase", children: "Resources" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm font-medium text-black hover:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Blog" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Guides" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Portfolio" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-400 uppercase", children: "Services" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm font-medium text-black hover:text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Mobile App Development" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "iOS App Development" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Android App Development" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Web Design" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "Web Development" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "UI/UX Design" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "QA & Testing" }) }) }),
            /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", children: "WordPress Development" }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold text-gray-400 uppercase", children: "Contact" }),
          /* @__PURE__ */ jsx("h2", { children: "Eldoret Offices" }),
          /* @__PURE__ */ jsx("p", { children: "Daima Towers" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-6 md:flex items-center md:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:flex-row md:items-center md:justify-between w-1/2", children: [
          /* @__PURE__ */ jsxs("span", { className: "mb-4 text-sm md:text-center md:mb-0 sm:text-center", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://isolatedsolutions.tech/", children: "IsolatedSolutions™" }),
            ". All Rights Reserved."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-x-4 md:flex-col text-black hover:text-gray-400", children: [
            /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-black", children: "Terms of Use" }) }),
            /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-black", children: "Privacy Policy" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse", children: [
          /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#",
              className: "text-black hover:text-blue-900 hover:scale-125",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 8 19",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Facebook page" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#",
              className: "text-black hover:text-blue-900 hover:scale-125",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    version: "1.0",
                    className: "w-4 h-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 488.000000 459.000000",
                    preserveAspectRatio: "xMidYMid meet",
                    children: /* @__PURE__ */ jsx(
                      "g",
                      {
                        transform: "translate(0.000000,459.000000) scale(0.100000,-0.100000)",
                        fill: "#000000",
                        stroke: "none",
                        children: /* @__PURE__ */ jsx("path", { d: "M14 4579 c-2 -3 160 -224 359 -490 199 -266 622 -832 940 -1257 l578 -773 -37 -42 c-21 -23 -446 -482 -944 -1020 -498 -539 -907 -983 -908 -988 -2 -5 85 -9 210 -8 l213 1 70 77 c39 42 401 433 805 870 404 437 746 807 760 823 l25 29 200 -268 c110 -147 413 -553 673 -901 l474 -632 725 0 c603 0 724 2 720 13 -3 8 -187 256 -409 553 -222 296 -476 636 -564 754 -89 118 -350 469 -582 778 -232 310 -422 568 -422 572 0 7 1226 1338 1643 1783 l119 127 -219 0 -218 -1 -255 -276 c-140 -152 -483 -524 -763 -825 l-507 -548 -615 822 -616 823 -725 5 c-399 3 -728 2 -730 -1z m1718 -886 c237 -318 603 -807 813 -1088 210 -280 676 -904 1036 -1385 360 -482 658 -881 663 -888 6 -9 -65 -12 -324 -12 l-331 0 -656 878 c-1514 2023 -2278 3045 -2287 3060 -6 9 62 12 323 12 l331 0 432 -577z" })
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Twitter page" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#",
              className: "text-black hover:text-blue-900 hover:scale-125",
              children: [
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "GitHub account" })
              ]
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      /* @__PURE__ */ jsxs(MobileFooterAccordion, { title: "Who We Are", children: [
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "About Us" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Founder" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "FAQs" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Careers" }) })
      ] }),
      /* @__PURE__ */ jsxs(MobileFooterAccordion, { title: "Resources", children: [
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Blog" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Guides" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Portfolio" }) })
      ] }),
      /* @__PURE__ */ jsxs(MobileFooterAccordion, { title: "Services", children: [
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Mobile App Development" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "iOS App Development" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Android App Development" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Web Design" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "Web Development" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "UI/UX Design" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "QA & Testing" }) }),
        /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-black", children: /* @__PURE__ */ jsx("a", { href: "#", children: "WordPress Development" }) })
      ] }),
      /* @__PURE__ */ jsx(MobileFooterAccordion, { title: "Contact", children: /* @__PURE__ */ jsx("p", { children: "Eldoret Offices Daima Towers" }) }),
      /* @__PURE__ */ jsx(MobileFooterAccordion, { title: "Socials", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#",
            className: "text-black hover:text-blue-900 hover:scale-125",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 8 19",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Facebook page" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#",
            className: "text-black hover:text-blue-900 hover:scale-125",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  version: "1.0",
                  className: "w-4 h-4",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 488.000000 459.000000",
                  preserveAspectRatio: "xMidYMid meet",
                  children: /* @__PURE__ */ jsx(
                    "g",
                    {
                      transform: "translate(0.000000,459.000000) scale(0.100000,-0.100000)",
                      fill: "#000000",
                      stroke: "none",
                      children: /* @__PURE__ */ jsx("path", { d: "M14 4579 c-2 -3 160 -224 359 -490 199 -266 622 -832 940 -1257 l578 -773 -37 -42 c-21 -23 -446 -482 -944 -1020 -498 -539 -907 -983 -908 -988 -2 -5 85 -9 210 -8 l213 1 70 77 c39 42 401 433 805 870 404 437 746 807 760 823 l25 29 200 -268 c110 -147 413 -553 673 -901 l474 -632 725 0 c603 0 724 2 720 13 -3 8 -187 256 -409 553 -222 296 -476 636 -564 754 -89 118 -350 469 -582 778 -232 310 -422 568 -422 572 0 7 1226 1338 1643 1783 l119 127 -219 0 -218 -1 -255 -276 c-140 -152 -483 -524 -763 -825 l-507 -548 -615 822 -616 823 -725 5 c-399 3 -728 2 -730 -1z m1718 -886 c237 -318 603 -807 813 -1088 210 -280 676 -904 1036 -1385 360 -482 658 -881 663 -888 6 -9 -65 -12 -324 -12 l-331 0 -656 878 c-1514 2023 -2278 3045 -2287 3060 -6 9 62 12 323 12 l331 0 432 -577z" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Twitter page" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#",
            className: "text-black hover:text-blue-900 hover:scale-125",
            children: [
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-4 h-4",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z",
                      clipRule: "evenodd"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "GitHub account" })
            ]
          }
        )
      ] }) })
    ] })
  ] });
};
function Guest({ children }) {
  let [showServices, setShowServices] = useState(false);
  let [showTechnologies, setShowTechnologies] = useState(false);
  let [showAbout, setShowAbout] = useState(false);
  let [showIndustries, setShowIndustries] = useState(false);
  let [showWork, setShowWork] = useState(false);
  let [showMobileNav, setShowMobileNav] = useState(false);
  let timeoutRef = useRef(null);
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
  const handleMouseEnter = (setShow) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShow(true);
  };
  const handleMouseLeave = (setShow) => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 10);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col bg-[#f5f5f5] overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `sticky top-0 mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${scrolled ? "bg-white" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxs("div", { id: "header", className: " text-[#14151b] py-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex  w-full  justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full justify-between", children: [
            /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-row", children: [
              /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col md:flex-row gap-y-6 md:gap-x-6 xl:gap-x-14 font-medium text-sm xl:text-base items-center text-black hover:text-gray-400", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative hover:cursor-pointer",
                    onMouseEnter: () => handleMouseEnter(setShowServices),
                    onMouseLeave: () => handleMouseLeave(setShowServices),
                    children: [
                      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: "hover:text-black", children: "Services" }) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${showServices ? "block" : "hidden"} absolute -left-40 grid min-w-max p-4 bg-white`,
                          children: /* @__PURE__ */ jsx("div", { className: "grid mx-auto", children: /* @__PURE__ */ jsx(ServicesLinks, {}) })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative hover:cursor-pointer",
                    onMouseEnter: () => handleMouseEnter(
                      setShowTechnologies
                    ),
                    onMouseLeave: () => handleMouseLeave(
                      setShowTechnologies
                    ),
                    children: [
                      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: "hover:text-black", children: "Technologies" }) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${showTechnologies ? "block" : "hidden"} absolute -left-40 grid min-w-max p-4 bg-white`,
                          children: /* @__PURE__ */ jsx("div", { className: "grid mx-auto", children: /* @__PURE__ */ jsx(TechnologiesLinks, {}) })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative hover:cursor-pointer",
                    onMouseEnter: () => handleMouseEnter(setShowIndustries),
                    onMouseLeave: () => handleMouseLeave(setShowIndustries),
                    children: [
                      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: "hover:text-black", children: "Industries" }) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${showIndustries ? "block" : "hidden"} absolute grid min-w-max p-4 bg-white`,
                          children: /* @__PURE__ */ jsx("div", { className: "grid mx-auto", children: /* @__PURE__ */ jsx(IndustriesLinks, {}) })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative hover:cursor-pointer",
                    onMouseEnter: () => handleMouseEnter(setShowWork),
                    onMouseLeave: () => handleMouseLeave(setShowWork),
                    children: [
                      /* @__PURE__ */ jsx(
                        BorderHover,
                        {
                          defBorderColor: "bg-white",
                          hovBorderColor: "bg-black",
                          children: /* @__PURE__ */ jsx("span", { className: "hover:text-black", children: "Work" })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${showWork ? "block" : "hidden"} absolute grid min-w-max bg-white`,
                          children: /* @__PURE__ */ jsx("div", { className: "grid mx-auto", children: /* @__PURE__ */ jsx(WorkLinks, {}) })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "p",
                  {
                    className: "relative hover:cursor-pointer",
                    onMouseEnter: () => handleMouseEnter(setShowAbout),
                    onMouseLeave: () => handleMouseLeave(setShowAbout),
                    children: [
                      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: "hover:text-black", children: "About" }) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `${showAbout ? "block" : "hidden"} absolute grid min-w-max p-4 bg-white`,
                          children: /* @__PURE__ */ jsx("div", { className: "grid mx-auto", children: /* @__PURE__ */ jsx(AboutLinks, {}) })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("contact"),
                  className: `ms-4 hidden md:block py-1 px-3 border-[1.5px] border-red-500 rounded-md text-red-500 text-sm xl:text-base font-medium hover:text-slate-100 hover:bg-red-500 transition-all duration-300 ease-in-out`,
                  children: "Contact Us"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "block md:hidden", children: [
              /* @__PURE__ */ jsx(
                IoIosMenu,
                {
                  style: {
                    color: "#dc2626",
                    fontSize: "30px"
                  },
                  className: `${showMobileNav ? `hidden` : `block`}`,
                  onMouseEnter: () => {
                    setShowMobileNav(true);
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                IoMdClose,
                {
                  style: {
                    color: "#dc2626",
                    fontSize: "30px"
                  },
                  className: `${showMobileNav ? `block` : `hidden`}`,
                  onClick: () => {
                    setShowMobileNav(false);
                  }
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${showMobileNav ? `block` : `hidden`} sticky top-0`,
              children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col divide-y bg-slate-50`, children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    className: `p-4 flex justify-between`,
                    href: route("home"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: `font-medium`, children: "Services" }),
                      /* @__PURE__ */ jsx(
                        IoIosArrowForward,
                        {
                          style: {
                            color: "#dc2626",
                            fontSize: "26px"
                          }
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    className: `p-4 flex justify-between`,
                    href: route("home"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: `font-medium`, children: "Technologies" }),
                      /* @__PURE__ */ jsx(
                        IoIosArrowForward,
                        {
                          style: {
                            color: "#dc2626",
                            fontSize: "26px"
                          }
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    className: `p-4 flex justify-between`,
                    href: route("home"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: `font-medium`, children: "Industries" }),
                      /* @__PURE__ */ jsx(
                        IoIosArrowForward,
                        {
                          style: {
                            color: "#dc2626",
                            fontSize: "26px"
                          }
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    className: `p-4 flex justify-between`,
                    href: route("home"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: `font-medium`, children: "Our Work" }),
                      /* @__PURE__ */ jsx(
                        IoIosArrowForward,
                        {
                          style: {
                            color: "#dc2626",
                            fontSize: "26px"
                          }
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    className: `p-4 flex justify-between`,
                    href: route("about-us"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: `font-medium`, children: "About Us" }),
                      /* @__PURE__ */ jsx(
                        IoIosArrowForward,
                        {
                          style: {
                            color: "#dc2626",
                            fontSize: "26px"
                          }
                        }
                      )
                    ]
                  }
                ) })
              ] })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f5f5f5]", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Guest as G
};
