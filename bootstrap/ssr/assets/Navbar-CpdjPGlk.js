import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import classnames from "classnames";
import { A as ApplicationLogo } from "./ApplicationLogo-BPuQqoMR.js";
import { Link } from "@inertiajs/react";
import { IoMdClose, IoIosMenu, IoIosArrowForward } from "react-icons/io";
const MaxWidthWrapper = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-screen-xl px-3 md:px-8", children });
};
const FooterLink = ({
  href,
  children
}) => /* @__PURE__ */ jsx("li", { className: "mb-4 hover:text-red-500", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href, children }) }) });
const SocialIcon = ({ icon, href, label }) => /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx(
  "a",
  {
    href,
    className: "text-black hover:text-blue-900 hover:scale-125",
    "aria-label": label,
    children: icon
  }
) });
const FOOTER_SECTIONS = [
  {
    title: "Who we are",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Founder", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Careers", href: "#" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Portfolio", href: "#" }
    ]
  },
  {
    title: "Services",
    items: [
      { label: "Mobile App Development", href: "#" },
      { label: "iOS App Development", href: "#" },
      { label: "Android App Development", href: "#" },
      { label: "Web Design", href: "#" },
      { label: "Web Development", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "QA & Testing", href: "#" },
      { label: "WordPress Development", href: "#" }
    ]
  }
];
const SOCIAL_LINKS = [
  {
    label: "Facebook page",
    href: "#",
    icon: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 8 19", children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
      }
    ) })
  }
  // Add other social links similarly
];
const MobileFooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b pb-2 mb-2 last:border-0 last:pb-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((prev) => !prev),
        className: "flex justify-between items-center w-full text-left",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold uppercase text-gray-400", children: title }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: classnames("text-xl transition-transform", {
                "rotate-0": isOpen,
                "rotate-180": !isOpen
              }),
              children: isOpen ? "-" : "+"
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("ul", { className: "pl-4 list-disc text-base font-normal", children })
  ] });
};
const Footer = () => {
  const renderDesktopSection = (section) => /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-gray-400", children: section.title }),
    /* @__PURE__ */ jsx("ul", { className: "text-sm font-medium", children: section.items.map((item, index) => /* @__PURE__ */ jsx(FooterLink, { href: item.href, children: item.label }, index)) })
  ] }, section.title);
  const renderMobileSection = (section) => /* @__PURE__ */ jsx(MobileFooterAccordion, { title: section.title, children: section.items.map((item, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: "hover:text-black", children: item.label }) }, index)) }, section.title);
  return /* @__PURE__ */ jsx("footer", { className: "text-[#14151b] border-t border-[#14151b]", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-4 border-b-2 border-black", children: [
        FOOTER_SECTIONS.map(renderDesktopSection),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-gray-400", children: "Contact" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Eldoret Offices Daima Towers" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterLegalSection, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
      FOOTER_SECTIONS.map(renderMobileSection),
      /* @__PURE__ */ jsx(MobileFooterAccordion, { title: "Contact", children: /* @__PURE__ */ jsx("p", { children: "Eldoret Offices Daima Towers" }) }),
      /* @__PURE__ */ jsx(MobileFooterAccordion, { title: "Socials", children: /* @__PURE__ */ jsx("div", { className: "flex gap-3 pt-4", children: SOCIAL_LINKS.map((props, index) => /* @__PURE__ */ jsx(SocialIcon, { ...props }, index)) }) })
    ] })
  ] }) });
};
const FooterLegalSection = () => /* @__PURE__ */ jsxs("div", { className: "py-6 md:flex items-center justify-between", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between w-1/2", children: [
    /* @__PURE__ */ jsxs("span", { className: "mb-4 md:mb-0 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://isolatedsolutions.tech/", children: "IsolatedSolutions™" }),
      ". All Rights Reserved."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-x-4", children: ["Terms of Use", "Privacy Policy"].map((text, index) => /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-black", children: text }) }, index)) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "flex mt-4 md:mt-0 space-x-5", children: SOCIAL_LINKS.map((props, index) => /* @__PURE__ */ jsx(SocialIcon, { ...props }, index)) })
] });
function NavCard({ title, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-fit bg-black text-slate-100", children: [
    title && /* @__PURE__ */ jsx("h4", { className: "py-2 px-3 bg-black font-semibold", children: title }),
    children && /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 h-full bg-black w-1/2" }),
      /* @__PURE__ */ jsx("div", { className: "z-10 mx-1 mb-1 py-3 px-3 pb-4 flex flex-col gap-y-2 bg-white text-slate-800", children })
    ] })
  ] });
}
function ServicesLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "grid", children: /* @__PURE__ */ jsxs("div", { className: "p-4 grid md:grid-cols-3 gap-5 lg:gap-x-10 text-xs font-medium", children: [
    /* @__PURE__ */ jsx(NavCard, { title: "Web Development", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Website Development" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Web Application Development" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Website Design" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Website maintenance" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "eCommerce", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "eCommerce Web App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "eCommerce Mobile App" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "App Development", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Mobile App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Web App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "App maintenance" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Consulting", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Digital Transformation" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "App Consulting" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Cloud migration" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Web-hosting" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Software Testing" }),
    /* @__PURE__ */ jsx(NavCard, { title: "DevOps" }),
    /* @__PURE__ */ jsx(NavCard, { title: "Cloud Integration" })
  ] }) });
}
function AboutLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "p-4 max-w-3xl grid text-xs font-medium", children: /* @__PURE__ */ jsx(NavCard, { children: /* @__PURE__ */ jsxs("div", { className: "min-w-full flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "/about", className: "py-1 hover:text-black", children: "About Us" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "/posts", className: "py-1 hover:text-black", children: "Blog" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Our Services" })
      }
    )
  ] }) }) });
}
function TechnologiesLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "grid p-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-5 lg:gap-x-10 text-xs font-medium", children: [
    /* @__PURE__ */ jsx(NavCard, { title: "Mobile", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-300",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "iOS App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Android App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "React Native App" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Flutter App" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Cloud", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "AWS" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Azure" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Google (GCP)" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "CMS", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "WordPress" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Shopify" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Drupal" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Frontend", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "React.js" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Vue.js" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Angular.js" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "jQuery" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Backend", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "PHP/Laravel" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Node.js" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Python/Django" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Full Stack", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "MERN Stack" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "LAMP Stack" })
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "MEAN Stack" })
        }
      )
    ] }) })
  ] }) });
}
function WorkLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "max-w-3xl grid p-4", children: /* @__PURE__ */ jsx("div", { className: "p-4 grid gap-y-3 text-xs font-medium", children: /* @__PURE__ */ jsx(NavCard, { children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Portfolio" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Case Studies" })
      }
    )
  ] }) }) }) });
}
function IndustriesLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "max-w-3xl grid p-4", children: /* @__PURE__ */ jsx("div", { className: "grid text-xs font-medium", children: /* @__PURE__ */ jsx(NavCard, { children: /* @__PURE__ */ jsxs("div", { className: "w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "eCommerce" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "SaaS" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "FinTech" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "EdTech" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Wellness" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "AgriTech" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Insurance" })
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx("a", { href: "#", className: "py-1 hover:text-black", children: "Government" })
      }
    )
  ] }) }) }) });
}
const DropdownMenuItem = ({
  title,
  children,
  onMouseEnter,
  onMouseLeave,
  show
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "relative group hover:cursor-pointer",
    onMouseEnter,
    onMouseLeave,
    children: [
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: " hover:text-red-600 transition-colors duration-200", children: title }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} absolute -right-40 min-w-max p-6 bg-white shadow-xl rounded-lg transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto`,
          children: /* @__PURE__ */ jsx("div", { className: "grid gap-4", children })
        }
      )
    ]
  }
);
function Navbar({ children }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { title: "Services", Component: ServicesLinks },
    { title: "Technologies", Component: TechnologiesLinks },
    { title: "Industries", Component: IndustriesLinks },
    { title: "Work", Component: WorkLinks },
    { title: "About", Component: AboutLinks }
  ];
  const mobileMenuItems = [
    { title: "Services", route: "home" },
    { title: "Technologies", route: "home" },
    { title: "Industries", route: "products" },
    { title: "Our Products", route: "products" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "text-black bg-white shadow-md" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 ", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "flex-shrink-0", children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
            menuItems.map(({ title, Component }) => /* @__PURE__ */ jsx(
              DropdownMenuItem,
              {
                title,
                onMouseEnter: () => setActiveDropdown(title),
                onMouseLeave: () => setActiveDropdown(null),
                show: activeDropdown === title,
                children: /* @__PURE__ */ jsx(Component, {})
              },
              title
            )),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("products"),
                className: "relative rounded-xl px-4 py-2 overflow-hidden group animate-pulse hover:animate-none",
                children: [
                  "Products",
                  /* @__PURE__ */ jsx("span", { className: "absolute top-0 left-0 w-0.5 h-full bg-gradient-to-r from-red-500 to-purple-600 transform origin-top transition-transform duration-300 scale-y-100" }),
                  /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 w-0.5 h-full bg-gradient-to-r from-red-500 to-purple-600 transform origin-bottom transition-transform duration-300 scale-y-100" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("contact"),
                className: "px-5 py-2.5 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-200",
                children: "Contact Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowMobileNav(!showMobileNav),
              className: "md:hidden p-2 text-red-600 hover:text-red-700 transition-colors",
              children: showMobileNav ? /* @__PURE__ */ jsx(IoMdClose, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(IoIosMenu, { className: "h-6 w-6" })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-16 inset-x-0 h-[calc(100vh-4rem)] bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${showMobileNav ? "translate-x-0" : "translate-x-full"} md:hidden z-40`,
        children: /* @__PURE__ */ jsxs("div", { className: "divide-y divide-gray-100", children: [
          mobileMenuItems.map(({ title, route: route2 }) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: route2,
              className: "flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: title }),
                /* @__PURE__ */ jsx(IoIosArrowForward, { className: "text-red-600 h-5 w-5" })
              ]
            },
            title
          )),
          /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("contact"),
              className: "block w-full px-4 py-2.5 text-center bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors",
              children: "Contact Us"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pt-6 md:pt-16", children })
  ] });
}
export {
  Footer as F,
  MaxWidthWrapper as M,
  Navbar as N
};
