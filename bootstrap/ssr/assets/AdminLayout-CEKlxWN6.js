import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaCogs, FaHome, FaBars, FaUser, FaCog, FaSignOutAlt, FaChartLine, FaNewspaper, FaFileInvoiceDollar } from "react-icons/fa";
import { usePage, Head, Link } from "@inertiajs/react";
function FlashMessage() {
  const page = usePage();
  const flash = page.props.flash;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (flash == null ? void 0 : flash.success) {
      setMessage({ type: "success", text: flash.success });
      setVisible(true);
    } else if (flash == null ? void 0 : flash.error) {
      setMessage({ type: "error", text: flash.error });
      setVisible(true);
    } else if (flash == null ? void 0 : flash.info) {
      setMessage({ type: "info", text: flash.info });
      setVisible(true);
    } else if (flash == null ? void 0 : flash.warning) {
      setMessage({ type: "warning", text: flash.warning });
      setVisible(true);
    }
    if ((flash == null ? void 0 : flash.success) || (flash == null ? void 0 : flash.error) || (flash == null ? void 0 : flash.info) || (flash == null ? void 0 : flash.warning)) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5e3);
      return () => clearTimeout(timer);
    }
  }, [flash]);
  if (!visible || !message) {
    return null;
  }
  const styles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: FaCheckCircle,
      iconColor: "text-green-600"
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: FaExclamationCircle,
      iconColor: "text-red-600"
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: FaInfoCircle,
      iconColor: "text-blue-600"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      icon: FaExclamationCircle,
      iconColor: "text-yellow-600"
    }
  };
  const style = styles[message.type];
  const Icon = style.icon;
  return /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 z-50 max-w-md animate-slide-in", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `${style.bg} ${style.border} ${style.text} border-l-4 p-4 rounded-lg shadow-lg`,
      role: "alert",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx(Icon, { className: `${style.iconColor} w-5 h-5 mr-3 flex-shrink-0 mt-0.5` }),
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: message.text }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setVisible(false),
            className: `${style.text} hover:opacity-70 ml-3`,
            children: /* @__PURE__ */ jsx(FaTimes, { className: "w-4 h-4" })
          }
        )
      ] })
    }
  ) });
}
const AdminLayout = ({ children, title }) => {
  var _a;
  const { auth } = usePage().props;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const sidebarItems = [
    { icon: FaChartLine, text: "Dashboard", route: "admin.dashboard" },
    { icon: FaNewspaper, text: "Posts", route: "admin.posts" },
    { icon: FaFileInvoiceDollar, text: "Quotes", route: "admin.quotes.index" },
    { icon: FaCogs, text: "Services", route: "admin.services.index" }
    // { icon: FaUsers, text: "Users", route: "admin.users" },
    // { icon: FaComments, text: "Comments", route: "admin.comments" },
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx("aside", { className: `fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-auto`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-700", children: [
          /* @__PURE__ */ jsxs(Link, { href: route("admin.dashboard"), className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-red-600 p-2 rounded-lg", children: /* @__PURE__ */ jsx(FaCogs, { className: "text-white text-xl" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Admin" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Isolated Solutions" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSidebarOpen(false),
              className: "lg:hidden text-gray-400 hover:text-white",
              children: /* @__PURE__ */ jsx(FaTimes, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "flex-1 px-4 py-6 space-y-2 overflow-y-auto", children: sidebarItems.map((item, index) => {
          const isActive = route().current(item.route);
          return /* @__PURE__ */ jsxs(
            Link,
            {
              href: route(item.route),
              className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-red-600 text-white shadow-lg" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsx(item.icon, { size: 18 }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.text })
              ]
            },
            index
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-gray-700", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("home"),
            className: "flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200",
            children: [
              /* @__PURE__ */ jsx(FaHome, { size: 18 }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "View Site" })
            ]
          }
        ) })
      ] }) }),
      sidebarOpen && /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
          onClick: () => setSidebarOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsx("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-30", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center px-6 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSidebarOpen(!sidebarOpen),
                className: "lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100",
                children: /* @__PURE__ */ jsx(FaBars, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900", children: title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setUserMenuOpen(!userMenuOpen),
                className: "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-full", children: /* @__PURE__ */ jsx(FaUser, { className: "text-white", size: 16 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "text-left hidden md:block", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-900", children: ((_a = auth == null ? void 0 : auth.user) == null ? void 0 : _a.name) || "Admin" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Administrator" })
                  ] })
                ]
              }
            ),
            userMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-200", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("profile.edit"),
                  className: "flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(FaCog, { className: "text-gray-400" }),
                    /* @__PURE__ */ jsx("span", { children: "Profile Settings" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 my-1" }),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: route("logout"),
                  method: "post",
                  as: "button",
                  className: "flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(FaSignOutAlt, { className: "text-red-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Logout" })
                  ]
                }
              )
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6", children })
      ] })
    ] })
  ] });
};
export {
  AdminLayout as A
};
