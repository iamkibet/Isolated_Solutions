import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Head, Link } from "@inertiajs/react";
import { Award, Star, ShoppingCart, ExternalLink, CheckCircle, Zap, Shield, Users, Code, Lock, TrendingUp, Monitor, Package, Globe, Smartphone, Palette, Cloud, GitBranch, Server } from "lucide-react";
import "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
const ProductsShowcase = ({ services }) => {
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
    const colors = {
      "Web Development": "blue",
      "App Development": "purple",
      "Design Services": "pink",
      "Consulting Services": "green",
      "Cloud Services": "cyan",
      "DevOps Services": "orange",
      "Hosting Services": "indigo"
    };
    return colors[categoryName] || "gray";
  };
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        gradient: "from-blue-50 to-white",
        badge: "bg-blue-100 text-blue-700",
        icon: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
        border: "border-blue-200",
        accent: "text-blue-600"
      },
      purple: {
        gradient: "from-purple-50 to-white",
        badge: "bg-purple-100 text-purple-700",
        icon: "bg-purple-100 text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-200",
        accent: "text-purple-600"
      },
      pink: {
        gradient: "from-pink-50 to-white",
        badge: "bg-pink-100 text-pink-700",
        icon: "bg-pink-100 text-pink-600",
        button: "bg-pink-600 hover:bg-pink-700",
        border: "border-pink-200",
        accent: "text-pink-600"
      },
      green: {
        gradient: "from-green-50 to-white",
        badge: "bg-green-100 text-green-700",
        icon: "bg-green-100 text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        border: "border-green-200",
        accent: "text-green-600"
      },
      cyan: {
        gradient: "from-cyan-50 to-white",
        badge: "bg-cyan-100 text-cyan-700",
        icon: "bg-cyan-100 text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700",
        border: "border-cyan-200",
        accent: "text-cyan-600"
      },
      orange: {
        gradient: "from-orange-50 to-white",
        badge: "bg-orange-100 text-orange-700",
        icon: "bg-orange-100 text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        border: "border-orange-200",
        accent: "text-orange-600"
      },
      indigo: {
        gradient: "from-indigo-50 to-white",
        badge: "bg-indigo-100 text-indigo-700",
        icon: "bg-indigo-100 text-indigo-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-200",
        accent: "text-indigo-600"
      }
    };
    return colorMap[color] || colorMap.blue;
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Products & Services Showcase" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold", children: [
        /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
        "Premium Products & Services"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight", children: [
        "Professional Solutions for",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent", children: "Your Business" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto", children: "Explore our comprehensive suite of products and services designed to transform your business with cutting-edge technology" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "space-y-20", children: services.map((service, serviceIndex) => {
      const Icon = getIconForCategory(service.category.name);
      const color = getColorForCategory(service.category.name);
      const colors = getColorClasses(color);
      const packageOption = service.options.find((opt) => opt.name === "Package Tier");
      const packages = (packageOption == null ? void 0 : packageOption.values) || [];
      return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: `bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg border ${colors.border} p-8 md:p-12`, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: `w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`, children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx("span", { className: `${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`, children: service.category.name })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900", children: service.name }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 leading-relaxed", children: service.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-400" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700", children: "Rated 5 stars" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row md:flex-col gap-3", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: `/quotes?service=${service.slug}`,
                className: `${colors.button} text-white px-6 py-3 rounded-lg font-semibold text-center transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(ShoppingCart, { className: "w-4 h-4" }),
                  "Get Quote"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: `/products/services/${service.slug}`,
                className: `bg-white ${colors.accent} border ${colors.border} px-6 py-3 rounded-lg font-semibold text-center transition-all hover:shadow-md inline-flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }),
                  "Learn More"
                ]
              }
            )
          ] })
        ] }) }),
        packages.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: packages.map((pkg) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-white rounded-xl shadow-md border-2 ${pkg.is_default ? colors.border : "border-gray-200"} p-6 hover:shadow-xl transition-all ${pkg.is_default ? "ring-2 " + colors.border : ""}`,
            children: [
              pkg.is_default && /* @__PURE__ */ jsx("span", { className: `${colors.badge} px-2 py-1 rounded-md text-xs font-bold uppercase mb-3 inline-block`, children: "Popular" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: pkg.label }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: pkg.description }),
              /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("span", { className: `text-3xl font-bold ${colors.accent}`, children: [
                "$",
                pkg.price_modifier.toLocaleString()
              ] }) }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                pkg.features.slice(0, 5).map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-700", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: `w-4 h-4 ${colors.accent} flex-shrink-0 mt-0.5` }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, idx)),
                pkg.features.length > 5 && /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-500 italic", children: [
                  "+",
                  pkg.features.length - 5,
                  " more features"
                ] })
              ] })
            ]
          },
          pkg.id
        )) }),
        service.features && service.features.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md border border-gray-200 p-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Zap, { className: `w-6 h-6 ${colors.accent}` }),
            "Included Features"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: `w-5 h-5 ${colors.accent} flex-shrink-0 mt-0.5` }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
          ] }, idx)) })
        ] }),
        serviceIndex < services.length - 1 && /* @__PURE__ */ jsx("div", { className: "border-t-2 border-gray-200 pt-8" })
      ] }, service.id);
    }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Why Choose Our Services?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto", children: "We deliver excellence in every project with industry-leading features and support" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        { icon: Shield, title: "Enterprise Security", desc: "100% secure and compliant solutions" },
        { icon: Zap, title: "Lightning Fast", desc: "Optimized for peak performance" },
        { icon: Award, title: "Award Winning", desc: "Recognized by industry leaders" },
        { icon: Users, title: "24/7 Support", desc: "Round-the-clock expert assistance" },
        { icon: Code, title: "Clean Code", desc: "Maintainable and scalable architecture" },
        { icon: Lock, title: "Privacy First", desc: "GDPR and CCPA compliant" },
        { icon: TrendingUp, title: "SEO Optimized", desc: "Built for search engine success" },
        { icon: Monitor, title: "Responsive", desc: "Perfect on all devices" }
      ].map((feature, idx) => {
        const FeatureIcon = feature.icon;
        return /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(FeatureIcon, { className: "w-6 h-6 text-red-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: feature.desc })
        ] }, idx);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-red-600 to-red-700 py-16", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Ready to Get Started?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-red-50 max-w-2xl mx-auto", children: "Choose your perfect package and let's bring your vision to life with our professional services" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/quotes",
            className: "inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all",
            children: [
              /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5" }),
              "Get a Quote"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/contact",
            className: "inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all",
            children: [
              "Contact Sales",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
};
export {
  ProductsShowcase as default
};
