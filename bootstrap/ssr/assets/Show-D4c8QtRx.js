import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, router } from "@inertiajs/react";
import ReactMarkdown from "react-markdown";
import { FaUser, FaCalendarAlt, FaTag, FaEye, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { G as Guest } from "./GuestLayout-tDqJ4a2U.js";
import "react";
import "./Navbar-CpdjPGlk.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./ApplicationLogo-BPuQqoMR.js";
import "react-icons/io";
const Show = ({ post }) => {
  const { auth } = usePage().props;
  const handleThumbsUp = () => {
    router.post(route("posts.thumbsUp", post.id));
  };
  const handleThumbsDown = () => {
    router.post(route("posts.thumbsDown", post.id));
  };
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-gray-900 mb-4", children: post.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center text-sm text-gray-600 mb-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center mr-4 mb-2", children: [
          /* @__PURE__ */ jsx(FaUser, { className: "mr-2" }),
          post.user.name
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center mr-4 mb-2", children: [
          /* @__PURE__ */ jsx(FaCalendarAlt, { className: "mr-2" }),
          new Date(post.created_at).toLocaleDateString()
        ] }),
        post.category && /* @__PURE__ */ jsxs("span", { className: "flex items-center mr-4 mb-2", children: [
          /* @__PURE__ */ jsx(FaTag, { className: "mr-2" }),
          post.category.name
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsx(FaEye, { className: "mr-2" }),
          post.views,
          " views"
        ] })
      ] }),
      post.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: post.tags.map((tag) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm",
          children: tag.name
        },
        tag.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prose max-w-none mb-8", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: post.content }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-gray-200 pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleThumbsUp,
            className: "flex items-center space-x-1 text-gray-600 hover:text-green-500 transition duration-150 ease-in-out",
            children: [
              /* @__PURE__ */ jsx(FaThumbsUp, {}),
              /* @__PURE__ */ jsx("span", { children: post.thumbs_up })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleThumbsDown,
            className: "flex items-center space-x-1 text-gray-600 hover:text-red-500 transition duration-150 ease-in-out",
            children: [
              /* @__PURE__ */ jsx(FaThumbsDown, {}),
              /* @__PURE__ */ jsx("span", { children: post.thumbs_down })
            ]
          }
        )
      ] }),
      auth.user && auth.user.id === post.user.id && /* @__PURE__ */ jsx(
        "a",
        {
          href: route("posts.edit", post.id),
          className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Edit Post"
        }
      )
    ] }) })
  ] }) });
};
export {
  Show as default
};
