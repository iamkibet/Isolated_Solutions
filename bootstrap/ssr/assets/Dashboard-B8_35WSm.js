import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-CEKlxWN6.js";
import { Head, Link } from "@inertiajs/react";
import { FaFileAlt, FaEye, FaFileInvoiceDollar, FaChartLine, FaPlus, FaEdit, FaClock } from "react-icons/fa";
import "react";
const Dashboard = ({ posts, stats }) => {
  const totalPosts = (stats == null ? void 0 : stats.totalPosts) || posts.length;
  const totalViews = (stats == null ? void 0 : stats.totalViews) || posts.reduce((sum, post) => sum + post.views, 0);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Dashboard", children: [
    /* @__PURE__ */ jsx(Head, { title: "Admin Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Welcome Back!" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Here's what's happening with your platform." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Total Posts" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: totalPosts })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaFileAlt, { className: "text-blue-600 text-2xl" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Total Views" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: totalViews.toLocaleString() })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-green-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaEye, { className: "text-green-600 text-2xl" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Quote Requests" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: (stats == null ? void 0 : stats.totalQuotes) || 0 })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaFileInvoiceDollar, { className: "text-purple-600 text-2xl" }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Recent Activity" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: (stats == null ? void 0 : stats.recentQuotes) || 0 })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaChartLine, { className: "text-red-600 text-2xl" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Quick Actions" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("posts.create"),
              className: "flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all",
              children: [
                /* @__PURE__ */ jsx("div", { className: "bg-blue-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaPlus, { className: "text-blue-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900", children: "Create New Post" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Write a new blog post" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("admin.posts"),
              className: "flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all",
              children: [
                /* @__PURE__ */ jsx("div", { className: "bg-green-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaEdit, { className: "text-green-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900", children: "Manage Posts" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Edit or delete posts" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: route("admin.quotes.index"),
              className: "flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all",
              children: [
                /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-full", children: /* @__PURE__ */ jsx(FaFileInvoiceDollar, { className: "text-purple-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900", children: "Manage Quotes" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "View quote requests" })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 border-b border-gray-200 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Top Performing Posts" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.posts"),
              className: "text-blue-600 hover:text-blue-800 text-sm font-medium",
              children: "View All →"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Title" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Views" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Published" }),
            /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: posts.slice(0, 10).map((post) => {
            var _a;
            return /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: post.title }) }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsx("span", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: ((_a = post.category) == null ? void 0 : _a.name) || "Uncategorized" }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-900", children: [
                /* @__PURE__ */ jsx(FaEye, { className: "mr-2 text-gray-400" }),
                post.views.toLocaleString()
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
                /* @__PURE__ */ jsx(FaClock, { className: "mr-2 text-gray-400" }),
                new Date(post.created_at).toLocaleDateString()
              ] }) }),
              /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("posts.show", post.slug),
                    className: "text-blue-600 hover:text-blue-900 mr-3",
                    children: "View"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("posts.edit", post.id),
                    className: "text-yellow-600 hover:text-yellow-900",
                    children: "Edit"
                  }
                )
              ] })
            ] }, post.id);
          }) })
        ] }) }),
        posts.length === 0 && /* @__PURE__ */ jsxs("div", { className: "px-6 py-12 text-center", children: [
          /* @__PURE__ */ jsx(FaFileAlt, { className: "mx-auto text-gray-400 text-5xl mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg", children: "No posts yet" }),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("posts.create"),
              className: "mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
              children: "Create Your First Post"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
export {
  Dashboard as default
};
