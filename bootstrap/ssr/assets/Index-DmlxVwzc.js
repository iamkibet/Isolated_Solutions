import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Q as QuoteForm } from "./QuoteForm-DmbGv39c.js";
import { FileText } from "lucide-react";
import "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
function QuoteIndex({ services, currencies, exchangeRates, currencySymbols }) {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Get a Quote" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 md:py-16", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-red-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-3 h-3 md:w-4 md:h-4" }),
        "Professional Quote Generator"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4", children: "Get Your Custom Quote" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm md:text-xl text-gray-300 max-w-2xl mx-auto", children: "Choose from our tiered service packages, provide your details, and download a professional PDF quote instantly" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-6 md:py-12", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx(
      QuoteForm,
      {
        services,
        currencies,
        exchangeRates,
        currencySymbols
      }
    ) }) })
  ] });
}
export {
  QuoteIndex as default
};
