import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { A as AdminLayout } from "./AdminLayout-CEKlxWN6.js";
import { usePage, Head, Link, router } from "@inertiajs/react";
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
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Manage Posts", children: [
    /* @__PURE__ */ jsx(Head, { title: "Manage Posts" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Blog Posts" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Manage your blog content" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: posts.total }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Total Posts" })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("posts.create"),
              className: "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all",
              children: [
                /* @__PURE__ */ jsx(FaPlus, { className: "w-5 h-5" }),
                "Create Post"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
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
    ] })
  ] });
};
export {
  Index as default
};
