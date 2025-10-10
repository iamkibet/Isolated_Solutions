import { jsxs, jsx } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-CW9JHW1H.js";
import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { IoMdClose, IoIosMenu, IoIosArrowForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
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
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.web-development"),
              className: "py-1 hover:text-black",
              children: "Website Development"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.web-development"),
              className: "py-1 hover:text-black",
              children: "Web Application Development"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.web-development"),
              className: "py-1 hover:text-black",
              children: "Website Design"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.web-development"),
              className: "py-1 hover:text-black",
              children: "Website maintenance"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "eCommerce", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.ecommerce"),
              className: "py-1 hover:text-black",
              children: "eCommerce Web App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.ecommerce"),
              className: "py-1 hover:text-black",
              children: "eCommerce Mobile App"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "App Development", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.app-development"),
              className: "py-1 hover:text-black",
              children: "Mobile App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.app-development"),
              className: "py-1 hover:text-black",
              children: "Web App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.app-development"),
              className: "py-1 hover:text-black",
              children: "App maintenance"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Consulting", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.consulting"),
              className: "py-1 hover:text-black",
              children: "Digital Transformation"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.consulting"),
              className: "py-1 hover:text-black",
              children: "App Consulting"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.consulting"),
              className: "py-1 hover:text-black",
              children: "Cloud migration"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-100",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("services.consulting"),
              className: "py-1 hover:text-black",
              children: "Web-hosting"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Software Testing", children: /* @__PURE__ */ jsx("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-100",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("services.software-testing"),
            className: "py-1 hover:text-black",
            children: "Learn More"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "DevOps", children: /* @__PURE__ */ jsx("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-100",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("services.devops"),
            className: "py-1 hover:text-black",
            children: "Learn More"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Cloud Integration", children: /* @__PURE__ */ jsx("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-100",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("services.cloud-integration"),
            className: "py-1 hover:text-black",
            children: "Learn More"
          }
        )
      }
    ) }) })
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
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.mobile"),
              className: "py-1 hover:text-black",
              children: "iOS App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.mobile"),
              className: "py-1 hover:text-black",
              children: "Android App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.mobile"),
              className: "py-1 hover:text-black",
              children: "React Native App"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.mobile"),
              className: "py-1 hover:text-black",
              children: "Flutter App"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Cloud", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cloud"),
              className: "py-1 hover:text-black",
              children: "AWS"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cloud"),
              className: "py-1 hover:text-black",
              children: "Azure"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cloud"),
              className: "py-1 hover:text-black",
              children: "Google (GCP)"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "CMS", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cms"),
              className: "py-1 hover:text-black",
              children: "WordPress"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cms"),
              className: "py-1 hover:text-black",
              children: "Shopify"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.cms"),
              className: "py-1 hover:text-black",
              children: "Drupal"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Frontend", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.frontend"),
              className: "py-1 hover:text-black",
              children: "React.js"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.frontend"),
              className: "py-1 hover:text-black",
              children: "Vue.js"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.frontend"),
              className: "py-1 hover:text-black",
              children: "Angular.js"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.frontend"),
              className: "py-1 hover:text-black",
              children: "jQuery"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Backend", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.backend"),
              className: "py-1 hover:text-black",
              children: "PHP/Laravel"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.backend"),
              className: "py-1 hover:text-black",
              children: "Node.js"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.backend"),
              className: "py-1 hover:text-black",
              children: "Python/Django"
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(NavCard, { title: "Full Stack", children: /* @__PURE__ */ jsxs("div", { className: "py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400", children: [
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.fullstack"),
              className: "py-1 hover:text-black",
              children: "MERN Stack"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.fullstack"),
              className: "py-1 hover:text-black",
              children: "LAMP Stack"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        BorderHover,
        {
          defBorderColor: "bg-slate-200",
          hovBorderColor: "bg-black",
          children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("technologies.fullstack"),
              className: "py-1 hover:text-black",
              children: "MEAN Stack"
            }
          )
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
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.ecommerce"),
            className: "py-1 hover:text-black",
            children: "eCommerce"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.saas"),
            className: "py-1 hover:text-black",
            children: "SaaS"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.fintech"),
            className: "py-1 hover:text-black",
            children: "FinTech"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.edtech"),
            className: "py-1 hover:text-black",
            children: "EdTech"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.wellness"),
            className: "py-1 hover:text-black",
            children: "Wellness"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.agritech"),
            className: "py-1 hover:text-black",
            children: "AgriTech"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.insurance"),
            className: "py-1 hover:text-black",
            children: "Insurance"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      BorderHover,
      {
        defBorderColor: "bg-slate-200",
        hovBorderColor: "bg-black",
        children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("industries.government"),
            className: "py-1 hover:text-black",
            children: "Government"
          }
        )
      }
    )
  ] }) }) }) });
}
const MobileMenuSection = ({
  title,
  children,
  isOpen,
  onToggle
}) => /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-100", children: [
  /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: onToggle,
      className: "flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:bg-gray-50",
      children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: title }),
        /* @__PURE__ */ jsx(
          IoIosArrowForward,
          {
            className: `text-red-600 h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`
          }
        )
      ]
    }
  ),
  isOpen && /* @__PURE__ */ jsx("div", { className: "bg-gray-50", children })
] });
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
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: "hover:text-red-600 transition-colors duration-200", children: title }) }),
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
  const [openSections, setOpenSections] = useState({});
  useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const menuItems = [
    { title: "Services", Component: ServicesLinks },
    { title: "Technologies", Component: TechnologiesLinks },
    { title: "Industries", Component: IndustriesLinks },
    { title: "Work", Component: WorkLinks },
    { title: "About", Component: AboutLinks }
  ];
  const mobileMenuSections = [
    {
      title: "Services",
      items: [
        { title: "Web Development", route: "services.web-development" },
        { title: "App Development", route: "services.app-development" },
        { title: "E-commerce", route: "services.ecommerce" },
        { title: "Consulting", route: "services.consulting" },
        {
          title: "Software Testing",
          route: "services.software-testing"
        },
        { title: "DevOps", route: "services.devops" },
        {
          title: "Cloud Integration",
          route: "services.cloud-integration"
        }
      ]
    },
    {
      title: "Technologies",
      items: [
        { title: "Mobile", route: "technologies.mobile" },
        { title: "Cloud", route: "technologies.cloud" },
        { title: "CMS", route: "technologies.cms" },
        { title: "Frontend", route: "technologies.frontend" },
        { title: "Backend", route: "technologies.backend" },
        { title: "Full Stack", route: "technologies.fullstack" }
      ]
    },
    {
      title: "Industries",
      items: [
        { title: "eCommerce", route: "industries.ecommerce" },
        { title: "SaaS", route: "industries.saas" },
        { title: "FinTech", route: "industries.fintech" },
        { title: "EdTech", route: "industries.edtech" },
        { title: "Wellness", route: "industries.wellness" },
        { title: "AgriTech", route: "industries.agritech" },
        { title: "Insurance", route: "industries.insurance" },
        { title: "Government", route: "industries.government" }
      ]
    },
    {
      title: "Other",
      items: [
        { title: "Our Work", route: "work.index" },
        { title: "Portfolio", route: "work.portfolio" },
        { title: "Case Studies", route: "work.case-studies" },
        { title: "About Us", route: "about-us" },
        { title: "Products", route: "products" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? "text-black bg-white shadow-md border-gray-200" : "bg-transparent border-transparent"}`,
        children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
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
                className: "p-2.5 bg-gray-100 text-gray-700 rounded-full hover:bg-red-600 hover:text-white transition-all duration-200",
                title: "Contact Us",
                children: /* @__PURE__ */ jsx(HiOutlineMail, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("quotes.index"),
                className: "px-5 py-2.5 bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-md font-medium hover:from-purple-700 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg",
                children: "Get a Quote"
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
          mobileMenuSections.map((section) => /* @__PURE__ */ jsx(
            MobileMenuSection,
            {
              title: section.title,
              isOpen: openSections[section.title] || false,
              onToggle: () => toggleSection(section.title),
              children: section.items.map((item) => /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route(item.route),
                  className: "flex items-center justify-between px-8 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.title }),
                    /* @__PURE__ */ jsx(IoIosArrowForward, { className: "text-red-600 h-4 w-4" })
                  ]
                },
                item.title
              ))
            },
            section.title
          )),
          /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 space-y-3", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("contact"),
                className: "flex items-center justify-center gap-2 w-full px-4 py-2.5 text-center bg-gray-100 text-gray-700 rounded-md font-medium hover:bg-red-600 hover:text-white transition-all",
                children: [
                  /* @__PURE__ */ jsx(HiOutlineMail, { className: "h-5 w-5" }),
                  "Contact Us"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("quotes.index"),
                className: "block w-full px-4 py-2.5 text-center bg-gradient-to-r from-purple-600 to-red-600 text-white rounded-md font-medium hover:from-purple-700 hover:to-red-700 transition-all",
                children: "Get a Quote"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pt-6 md:pt-16", children })
  ] });
}
export {
  Navbar as N
};
