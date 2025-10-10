import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-CqUCT1rs.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react";
import "react-icons/io";
import "react-icons/hi";
import "./BorderHover-B9-ZQGRi.js";
function WorkIndex() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Our Work" }),
    /* @__PURE__ */ jsx(Navbar, { children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "py-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Our Work" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Featured Projects" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-200" }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "E-commerce Platform" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "A modern e-commerce solution with advanced features." }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("work.portfolio"),
                  className: "text-red-600 hover:text-red-700 font-medium",
                  children: "View Project →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-200" }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Mobile Banking App" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Secure and user-friendly banking application." }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("work.portfolio"),
                  className: "text-red-600 hover:text-red-700 font-medium",
                  children: "View Project →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-200" }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Learning Management System" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Comprehensive educational platform." }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("work.portfolio"),
                  className: "text-red-600 hover:text-red-700 font-medium",
                  children: "View Project →"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-gray-900 mb-6", children: "Case Studies" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Digital Transformation Success" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "How we helped a traditional business go digital." }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("work.case-studies"),
                className: "text-red-600 hover:text-red-700 font-medium",
                children: "Read Case Study →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Cloud Migration Journey" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Seamless transition to cloud infrastructure." }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("work.case-studies"),
                className: "text-red-600 hover:text-red-700 font-medium",
                children: "Read Case Study →"
              }
            )
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  WorkIndex as default
};
