import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout } from "./AdminLayout-CEKlxWN6.js";
import { Head, Link, router } from "@inertiajs/react";
import { FaFileInvoiceDollar, FaEye, FaDownload, FaTrash } from "react-icons/fa";
const Index = ({ quotes }) => {
  const [filter, setFilter] = useState("all");
  const handleDelete = (quoteId) => {
    if (confirm("Are you sure you want to delete this quote?")) {
      router.delete(route("admin.quotes.destroy", quoteId));
    }
  };
  const handleStatusChange = (quoteId, newStatus) => {
    router.patch(route("admin.quotes.updateStatus", quoteId), {
      status: newStatus
    }, {
      preserveScroll: true
    });
  };
  const filteredQuotes = filter === "all" ? quotes.data : quotes.data.filter((quote) => quote.status === filter);
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Manage Quotes", children: [
    /* @__PURE__ */ jsx(Head, { title: "Manage Quotes" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Quote Requests" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Manage and track all client quote requests" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: quotes.total }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Total Quotes" })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("admin.quotes.create"),
                className: "flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200",
                children: [
                  /* @__PURE__ */ jsx(FaFileInvoiceDollar, { className: "w-5 h-5" }),
                  "Create Quote"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-6 overflow-x-auto pb-2", children: [
          { key: "all", label: "All Quotes" },
          { key: "pending", label: "Pending" },
          { key: "sent", label: "Sent" },
          { key: "accepted", label: "Accepted" },
          { key: "rejected", label: "Rejected" }
        ].map((tab) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setFilter(tab.key),
            className: `px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${filter === tab.key ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,
            children: [
              tab.label,
              tab.key !== "all" && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-sm", children: [
                "(",
                quotes.data.filter(
                  (q) => q.status === tab.key
                ).length,
                ")"
              ] })
            ]
          },
          tab.key
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Quote #" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Client" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Services" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Total" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Created" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredQuotes.length > 0 ? filteredQuotes.map((quote) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: quote.quote_number }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: quote.client_company && `(${quote.client_company})` })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900", children: quote.client_name }),
                /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs", children: quote.client_email })
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("div", { className: "text-xs space-y-1", children: quote.services && quote.services.length > 0 ? quote.services.map((service, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "•" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900", children: service.name }),
                  /* @__PURE__ */ jsxs("div", { className: "text-gray-500", children: [
                    service.package_name,
                    " - ",
                    quote.currency_symbol,
                    service.price.toLocaleString()
                  ] })
                ] })
              ] }, idx)) : /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "No services" }) }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs("div", { className: "text-sm font-semibold text-gray-900", children: [
                quote.currency_symbol,
                " ",
                parseFloat(
                  quote.total
                ).toLocaleString(void 0, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxs(
                "select",
                {
                  value: quote.status,
                  onChange: (e) => handleStatusChange(quote.id, e.target.value),
                  className: "text-xs font-semibold rounded-full px-3 py-1 border-0 focus:ring-2 focus:ring-red-500 cursor-pointer",
                  style: {
                    backgroundColor: quote.status === "accepted" ? "#dcfce7" : quote.status === "rejected" ? "#fee2e2" : quote.status === "sent" ? "#dbeafe" : "#fef3c7",
                    color: quote.status === "accepted" ? "#166534" : quote.status === "rejected" ? "#991b1b" : quote.status === "sent" ? "#1e40af" : "#854d0e"
                  },
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "pending", children: "⏳ Pending" }),
                    /* @__PURE__ */ jsx("option", { value: "sent", children: "📧 Sent" }),
                    /* @__PURE__ */ jsx("option", { value: "accepted", children: "✅ Accepted" }),
                    /* @__PURE__ */ jsx("option", { value: "rejected", children: "❌ Rejected" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(
                quote.created_at
              ).toLocaleDateString() }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "quotes.show",
                      quote.id
                    ),
                    className: "text-blue-600 hover:text-blue-900",
                    title: "View Quote",
                    children: /* @__PURE__ */ jsx(FaEye, { className: "inline-block" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route(
                      "quotes.download",
                      quote.id
                    ),
                    className: "text-green-600 hover:text-green-900",
                    title: "Download PDF",
                    children: /* @__PURE__ */ jsx(FaDownload, { className: "inline-block" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleDelete(
                      quote.id
                    ),
                    className: "text-red-600 hover:text-red-900",
                    title: "Delete Quote",
                    children: /* @__PURE__ */ jsx(FaTrash, { className: "inline-block" })
                  }
                )
              ] }) })
            ]
          },
          quote.id
        )) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsxs(
          "td",
          {
            colSpan: 7,
            className: "px-6 py-12 text-center",
            children: [
              /* @__PURE__ */ jsx(FaFileInvoiceDollar, { className: "mx-auto text-gray-400 text-5xl mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg", children: "No quotes found" }),
              filter !== "all" && /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setFilter("all"),
                  className: "mt-4 text-blue-600 hover:text-blue-800",
                  children: "View all quotes"
                }
              )
            ]
          }
        ) }) })
      ] }) }) }),
      quotes.last_page > 1 && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-700", children: [
          "Showing page ",
          quotes.current_page,
          " of",
          " ",
          quotes.last_page
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          quotes.current_page > 1 && /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.quotes.index", {
                page: quotes.current_page - 1
              }),
              className: "px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50",
              children: "Previous"
            }
          ),
          quotes.current_page < quotes.last_page && /* @__PURE__ */ jsx(
            Link,
            {
              href: route("admin.quotes.index", {
                page: quotes.current_page + 1
              }),
              className: "px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50",
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
export {
  Index as default
};
