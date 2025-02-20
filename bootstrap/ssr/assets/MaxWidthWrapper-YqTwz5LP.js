import { jsxs, jsx } from "react/jsx-runtime";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import clsx from "clsx";
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
const MaxWidthWrapper = ({
  className,
  children
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-16",
        className
      ),
      children
    }
  );
};
export {
  AboutLinks as A,
  IndustriesLinks as I,
  MaxWidthWrapper as M,
  ServicesLinks as S,
  TechnologiesLinks as T,
  WorkLinks as W
};
