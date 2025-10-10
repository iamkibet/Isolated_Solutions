import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Download, Calendar, CheckCircle } from "lucide-react";
import "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
function QuoteShow({ quote, services }) {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: `Quote ${quote.quote_number}` }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 min-h-screen py-12", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: [
              "Quote ",
              quote.quote_number
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Generated on",
              " ",
              new Date(
                quote.created_at
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: route("quotes.download", quote.id),
              className: "flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
                "Download PDF"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-3", children: "Client Information" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Name:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: quote.client_name })
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Email:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: quote.client_email })
              ] }),
              quote.client_company && /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Company:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: quote.client_company })
              ] }),
              quote.client_phone && /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Phone:" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: quote.client_phone })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 mb-3", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900", children: "Valid Until" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: new Date(
                quote.valid_until
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8 mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Selected Services" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: services.map((service, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "border border-gray-200 rounded-lg p-4",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900", children: service.name })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "ml-7", children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-2", children: [
                    service.package_name,
                    " Package"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: service.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-right ml-4", children: /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-gray-900", children: [
                quote.currency_symbol,
                " ",
                service.price.toLocaleString(
                  void 0,
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }
                )
              ] }) })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-lg p-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md ml-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-3 text-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xl pt-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-gray-900", children: [
            "Total (",
            quote.currency,
            "):"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-red-600", children: [
            quote.currency_symbol,
            " ",
            quote.total.toLocaleString(
              void 0,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }
            )
          ] })
        ] }) }),
        quote.notes && /* @__PURE__ */ jsxs("div", { className: "mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Additional Notes" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: quote.notes })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: route("quotes.download", quote.id),
            className: "w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
              "Download PDF Quote"
            ]
          }
        ) })
      ] }) })
    ] }) }) })
  ] });
}
export {
  QuoteShow as default
};
