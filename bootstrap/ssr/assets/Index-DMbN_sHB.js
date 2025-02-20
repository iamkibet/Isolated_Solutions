import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { A as AdminLayout } from "./AdminLayout-CdjPJ4Wl.js";
import { usePage, Link, router } from "@inertiajs/react";
import "framer-motion";
const Index = ({ posts }) => {
  usePage().props;
  const [sortColumn, setSortColumn] = useState("created_at");
  const [sortDirection, setSortDirection] = useState("desc");
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    router.get(
      route("admin.posts"),
      {
        sort: column,
        direction: sortDirection === "asc" ? "desc" : "asc"
      },
      { preserveState: true }
    );
  };
  const handleDelete = (postId) => {
    if (confirm("Are you sure you want to delete this post?")) {
      router.delete(route("posts.destroy", postId));
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { title: "Hello Admin", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Manage Posts" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("posts.create"),
          className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
          children: "Create New Post"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsx("tr", { children: [
        "Title",
        "Author",
        "Category",
        "Views",
        "Created At",
        "Actions"
      ].map((header) => /* @__PURE__ */ jsxs(
        "th",
        {
          onClick: () => handleSort(
            header.toLowerCase().replace(
              " ",
              "_"
            )
          ),
          className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer",
          children: [
            header,
            sortColumn === header.toLowerCase().replace(" ", "_") && /* @__PURE__ */ jsx("span", { className: "ml-2", children: sortDirection === "asc" ? "▲" : "▼" })
          ]
        },
        header
      )) }) }),
      /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: posts.data.map((post) => {
        var _a;
        return /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: post.title }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: post.user.name }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: ((_a = post.category) == null ? void 0 : _a.name) || "Uncategorized" }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: post.views }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(
            post.created_at
          ).toLocaleDateString() }),
          /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("posts.show", post.id),
                className: "text-indigo-600 hover:text-indigo-900 mr-3",
                children: /* @__PURE__ */ jsx(FaEye, { className: "inline-block" })
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("posts.edit", post.id),
                className: "text-yellow-600 hover:text-yellow-900 mr-3",
                children: /* @__PURE__ */ jsx(FaEdit, { className: "inline-block" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleDelete(post.id),
                className: "text-red-600 hover:text-red-900",
                children: /* @__PURE__ */ jsx(FaTrash, { className: "inline-block" })
              }
            )
          ] })
        ] }, post.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6" })
  ] }) });
};
export {
  Index as default
};
