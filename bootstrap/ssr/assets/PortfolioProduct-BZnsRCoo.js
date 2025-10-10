import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, ExternalLink, Rocket, CheckCircle, Package, Car, Brain, Wallet, ShoppingBag } from "lucide-react";
import "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
const PortfolioProduct = ({ product }) => {
  const getIconForSlug = (slug) => {
    const icons = {
      "soko-magari": Car,
      "stocksync": Package,
      "ai-resume-builder": Brain,
      "pesaplan": Wallet,
      "fashion-store": ShoppingBag
    };
    return icons[slug] || Package;
  };
  const Icon = getIconForSlug(product.slug);
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: product.name }),
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b border-gray-100", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "py-12 md:py-16", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/products",
          className: "inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Products"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-12 h-12 text-gray-900", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded", children: product.badge })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 leading-tight", children: product.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: product.tagline }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: product.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-3 pt-4", children: product.externalLink ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: product.externalLink,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all",
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  "Visit Live Site"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/quotes",
                className: "inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all",
                children: [
                  /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4" }),
                  "Buy now"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/quotes",
                className: "inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all",
                children: [
                  /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4" }),
                  "Get a Quote"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/contact",
                className: "inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all",
                children: "Contact Us"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: product.stats.map((stat, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900 mb-1", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: stat.label })
        ] }, idx)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16 md:py-20", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3", children: "Features" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Everything you need to succeed" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: Object.entries(product.features).map(([title, description], idx) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-gray-900" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 pl-11", children: description })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-16 md:py-20 border-y border-gray-100", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3", children: "Built With" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Cutting-edge technologies" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: product.technologies.map((tech, idx) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:border-gray-300 transition-colors",
          children: tech
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16 md:py-20", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900", children: "Ready to build something similar?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Let us create a custom solution tailored to your specific needs" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center pt-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/quotes",
            className: "inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all",
            children: [
              /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4" }),
              "Get Your Quote"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/products",
            className: "inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all",
            children: "View All Products"
          }
        )
      ] })
    ] }) }) }) })
  ] });
};
export {
  PortfolioProduct as default
};
