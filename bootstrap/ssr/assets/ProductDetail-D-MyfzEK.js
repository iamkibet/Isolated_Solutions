import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Star, ShoppingCart, CheckCircle, Shield, HeadphonesIcon, Rocket, FileCheck, Package, Globe, Smartphone, Palette, Users, Cloud, GitBranch, Server } from "lucide-react";
import { useState } from "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
const ProductDetail = ({ service }) => {
  useState(null);
  const getIconForCategory = (categoryName) => {
    const icons = {
      "Web Development": Globe,
      "App Development": Smartphone,
      "Design Services": Palette,
      "Consulting Services": Users,
      "Cloud Services": Cloud,
      "DevOps Services": GitBranch,
      "Hosting Services": Server
    };
    return icons[categoryName] || Package;
  };
  const getColorForCategory = (categoryName) => {
    const colors2 = {
      "Web Development": "blue",
      "App Development": "purple",
      "Design Services": "pink",
      "Consulting Services": "green",
      "Cloud Services": "cyan",
      "DevOps Services": "orange",
      "Hosting Services": "indigo"
    };
    return colors2[categoryName] || "gray";
  };
  const getColorClasses = (color2) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-50 via-blue-100 to-white",
        badge: "bg-blue-100 text-blue-700",
        icon: "bg-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        border: "border-blue-300",
        accent: "text-blue-600"
      },
      purple: {
        gradient: "from-purple-50 via-purple-100 to-white",
        badge: "bg-purple-100 text-purple-700",
        icon: "bg-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-300",
        accent: "text-purple-600"
      },
      pink: {
        gradient: "from-pink-50 via-pink-100 to-white",
        badge: "bg-pink-100 text-pink-700",
        icon: "bg-pink-600",
        button: "bg-pink-600 hover:bg-pink-700",
        border: "border-pink-300",
        accent: "text-pink-600"
      },
      green: {
        gradient: "from-green-50 via-green-100 to-white",
        badge: "bg-green-100 text-green-700",
        icon: "bg-green-600",
        button: "bg-green-600 hover:bg-green-700",
        border: "border-green-300",
        accent: "text-green-600"
      },
      cyan: {
        gradient: "from-cyan-50 via-cyan-100 to-white",
        badge: "bg-cyan-100 text-cyan-700",
        icon: "bg-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700",
        border: "border-cyan-300",
        accent: "text-cyan-600"
      },
      orange: {
        gradient: "from-orange-50 via-orange-100 to-white",
        badge: "bg-orange-100 text-orange-700",
        icon: "bg-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        border: "border-orange-300",
        accent: "text-orange-600"
      },
      indigo: {
        gradient: "from-indigo-50 via-indigo-100 to-white",
        badge: "bg-indigo-100 text-indigo-700",
        icon: "bg-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-300",
        accent: "text-indigo-600"
      }
    };
    return colorMap[color2] || colorMap.blue;
  };
  const Icon = getIconForCategory(service.category.name);
  const color = getColorForCategory(service.category.name);
  const colors = getColorClasses(color);
  const packageOption = service.options.find((opt) => opt.name === "Package Tier");
  const packages = (packageOption == null ? void 0 : packageOption.values) || [];
  const defaultPackage = packages.find((pkg) => pkg.is_default) || packages[0];
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: service.name }),
    /* @__PURE__ */ jsx("div", { className: `bg-gradient-to-br ${colors.gradient} py-16 md:py-24`, children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/products/services",
          className: "inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to All Services"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: `w-16 h-16 ${colors.icon} text-white rounded-xl flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ jsx("span", { className: `${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold`, children: service.category.name })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight", children: service.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 leading-relaxed", children: service.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-400" }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-gray-900", children: "Rated 5 stars" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "by our clients" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: `/quotes?service=${service.slug}`,
                className: `${colors.button} text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5" }),
                  "Buy Now"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#packages",
                className: "bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg text-center transition-all hover:shadow-lg inline-flex items-center justify-center gap-2",
                children: "View Packages"
              }
            )
          ] })
        ] }),
        defaultPackage && /* @__PURE__ */ jsx("div", { className: "md:w-80 bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-600 uppercase tracking-wide", children: "Starting From" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: `text-5xl font-extrabold ${colors.accent}`, children: [
            "$",
            service.base_price.toLocaleString()
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
            defaultPackage.label,
            " Package"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
              /* @__PURE__ */ jsx("span", { children: "One-time payment" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
              /* @__PURE__ */ jsx("span", { children: "Lifetime license" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
              /* @__PURE__ */ jsx("span", { children: "Free updates" })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }) }),
    service.features && service.features.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-white py-16", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "What's Included" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Every package comes with these powerful features" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-gray-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: `w-6 h-6 ${colors.accent} flex-shrink-0 mt-0.5` }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: feature })
      ] }, idx)) })
    ] }) }),
    packages.length > 0 && /* @__PURE__ */ jsx("div", { id: "packages", className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Choose Your Package" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "Select the package that best fits your needs and budget" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: packages.map((pkg) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-white rounded-2xl shadow-lg border-2 ${pkg.is_default ? colors.border + " ring-4 ring-offset-2 " + colors.border : "border-gray-200"} p-8 hover:shadow-2xl transition-all relative`,
          children: [
            pkg.is_default && /* @__PURE__ */ jsx("div", { className: `absolute -top-4 left-1/2 -translate-x-1/2 ${colors.badge} px-4 py-1 rounded-full text-xs font-bold uppercase`, children: "Most Popular" }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: pkg.label }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: pkg.description }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("span", { className: `text-4xl font-extrabold ${colors.accent}`, children: [
                "$",
                pkg.price_modifier.toLocaleString()
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: pkg.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-700", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: `w-4 h-4 ${colors.accent} flex-shrink-0 mt-0.5` }),
              /* @__PURE__ */ jsx("span", { children: feature })
            ] }, idx)) }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: `/quotes?service=${service.slug}&package=${pkg.label}`,
                className: `w-full ${pkg.is_default ? colors.button + " text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"} px-6 py-3 rounded-lg font-semibold text-center transition-all inline-flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
                  "Get Started"
                ]
              }
            )
          ]
        },
        pkg.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Why Choose Us?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "We deliver exceptional results with these guarantees" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security for your peace of mind" },
        { icon: HeadphonesIcon, title: "Expert Support", desc: "24/7 dedicated support team ready to help" },
        { icon: Rocket, title: "Fast Delivery", desc: "Quick turnaround time without compromising quality" },
        { icon: FileCheck, title: "Quality Assured", desc: "Rigorous testing and quality control process" }
      ].map((item, idx) => {
        const ItemIcon = item.icon;
        return /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: `${colors.icon} w-16 h-16 text-white rounded-xl flex items-center justify-center mx-auto shadow-lg`, children: /* @__PURE__ */ jsx(ItemIcon, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: item.desc })
        ] }, idx);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `bg-gradient-to-br ${colors.gradient} py-16`, children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: [
        "Ready to Get Started with ",
        service.name,
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700", children: "Join hundreds of satisfied clients who have transformed their business with our services" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/quotes?service=${service.slug}`,
            className: `${colors.button} text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2`,
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5" }),
              "Get Your Quote"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/contact",
            className: "bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2",
            children: "Contact Sales"
          }
        )
      ] })
    ] }) }) })
  ] });
};
export {
  ProductDetail as default
};
