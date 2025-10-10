import { jsxs, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-CEKlxWN6.js";
import { Q as QuoteForm } from "./QuoteForm-DmbGv39c.js";
import { ArrowLeft } from "lucide-react";
import "react";
import "react-icons/fa";
function Create({ services, currencies }) {
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Create Quote", children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Quote" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: route("admin.quotes.index"),
          className: "inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Quotes"
          ]
        }
      ),
      /* @__PURE__ */ jsx(QuoteForm, { services, currencies })
    ] })
  ] });
}
export {
  Create as default
};
