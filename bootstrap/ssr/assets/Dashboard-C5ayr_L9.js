import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-B3jKi_l4.js";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import { Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-BPuQqoMR.js";
import "@headlessui/react";
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900 dark:text-gray-100", children: [
          "You're logged in!",
          /* @__PURE__ */ jsx(
            BorderHover,
            {
              defBorderColor: "bg-slate-300",
              hovBorderColor: "bg-gray-500",
              children: /* @__PURE__ */ jsxs("a", { href: "/", className: "py-4 hover:text-sky-600", children: [
                " ",
                "- Go Home"
              ] })
            }
          )
        ] }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
