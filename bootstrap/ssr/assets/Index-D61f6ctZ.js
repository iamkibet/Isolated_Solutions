import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { G as Guest } from "./GuestLayout-tDqJ4a2U.js";
import "react";
import "./Navbar-CpdjPGlk.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./ApplicationLogo-BPuQqoMR.js";
import "react-icons/io";
const Pagination = ({ links }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
    "nav",
    {
      className: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
      "aria-label": "Pagination",
      children: links.map((link, index) => {
        if (!link.url && link.label === "...") {
          return /* @__PURE__ */ jsx(
            "span",
            {
              className: "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700",
              children: "..."
            },
            index
          );
        }
        return /* @__PURE__ */ jsx(
          Link,
          {
            href: link.url || "#",
            className: `relative inline-flex items-center px-4 py-2 border text-sm font-medium
                ${link.active ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"}
                ${index === 0 ? "rounded-l-md" : ""}
                ${index === links.length - 1 ? "rounded-r-md" : ""}
              `,
            dangerouslySetInnerHTML: { __html: link.label }
          },
          index
        );
      })
    }
  ) });
};
const Index = ({ posts }) => {
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Latest Posts" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: posts.data.map((post) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "bg-white rounded-lg shadow-md overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-2", children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("posts.show", post.slug),
                className: "hover:text-indigo-600 transition duration-150 ease-in-out",
                children: post.title
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { children: post.user.name }),
              /* @__PURE__ */ jsx("span", { className: "mx-2", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: new Date(
                post.created_at
              ).toLocaleDateString() }),
              post.category && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "mx-2", children: "•" }),
                /* @__PURE__ */ jsx("span", { className: "bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full", children: post.category.name })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-gray-500 mr-2", children: [
                post.views,
                " views"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 mr-2", children: "•" }),
              /* @__PURE__ */ jsxs("span", { className: "text-green-500 mr-2", children: [
                post.thumbs_up,
                " 👍"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-red-500", children: [
                post.thumbs_down,
                " 👎"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-6 py-4 bg-gray-50", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("posts.show", post.slug),
              className: "text-indigo-600 hover:text-indigo-800 font-medium",
              children: "Read more →"
            }
          ) })
        ]
      },
      post.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Pagination, { links: posts.links }) })
  ] }) });
};
export {
  Index as default
};
