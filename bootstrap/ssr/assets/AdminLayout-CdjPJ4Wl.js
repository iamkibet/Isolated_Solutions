import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { FaTimes, FaBars, FaUser, FaCog, FaSignOutAlt, FaChartLine, FaNewspaper, FaUsers, FaComments } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { usePage, Link } from "@inertiajs/react";
const AdminLayout = ({ children, title }) => {
  usePage().props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const sidebarItems = [
    { icon: FaChartLine, text: "Dashboard", route: "admin.dashboard" },
    { icon: FaNewspaper, text: "Posts", route: "admin.posts" },
    { icon: FaUsers, text: "Users", route: "admin.users" },
    { icon: FaComments, text: "Comments", route: "admin.comments" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxs(
      motion.aside,
      {
        initial: { x: -300 },
        animate: { x: 0 },
        exit: { x: -300 },
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        },
        className: "fixed inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white p-4 shadow-lg md:relative md:translate-x-0",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Admin Panel" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSidebarOpen(false),
                className: "md:hidden",
                children: /* @__PURE__ */ jsx(FaTimes, { size: 24 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: sidebarItems.map((item, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: route(item.route),
              className: "flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition duration-150",
              children: [
                /* @__PURE__ */ jsx(item.icon, { size: 20 }),
                /* @__PURE__ */ jsx("span", { children: item.text })
              ]
            }
          ) }, index)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSidebarOpen(!sidebarOpen),
            className: "md:hidden",
            children: /* @__PURE__ */ jsx(FaBars, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: title }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setUserMenuOpen(!userMenuOpen),
              className: "flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none",
              children: /* @__PURE__ */ jsx(FaUser, { size: 20 })
            }
          ),
          userMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("profile.edit"),
                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ jsx(FaCog, { className: "inline-block mr-2" }),
                  " ",
                  "Settings"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("logout"),
                method: "post",
                as: "button",
                className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                children: [
                  /* @__PURE__ */ jsx(FaSignOutAlt, { className: "inline-block mr-2" }),
                  " ",
                  "Logout"
                ]
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children }) })
    ] })
  ] });
};
export {
  AdminLayout as A
};
