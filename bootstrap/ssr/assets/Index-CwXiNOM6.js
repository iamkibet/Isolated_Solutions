import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-CqUCT1rs.js";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Building2, Cloud, ShoppingCart, Wallet, GraduationCap, Heart, Leaf, Shield } from "lucide-react";
import "./ApplicationLogo-CW9JHW1H.js";
import "react";
import "react-icons/io";
import "react-icons/hi";
import "./BorderHover-B9-ZQGRi.js";
function IndustriesIndex() {
  const industries = [
    {
      title: "eCommerce",
      description: "Transform your online retail business with cutting-edge solutions",
      icon: ShoppingCart,
      route: "industries.ecommerce"
    },
    {
      title: "SaaS",
      description: "Build scalable and innovative software-as-a-service platforms",
      icon: Cloud,
      route: "industries.saas"
    },
    {
      title: "FinTech",
      description: "Revolutionize financial services with modern technology",
      icon: Wallet,
      route: "industries.fintech"
    },
    {
      title: "EdTech",
      description: "Create engaging and effective digital learning experiences",
      icon: GraduationCap,
      route: "industries.edtech"
    },
    {
      title: "Wellness",
      description: "Develop health and wellness solutions for modern lifestyles",
      icon: Heart,
      route: "industries.wellness"
    },
    {
      title: "AgriTech",
      description: "Innovate agricultural practices with smart technology",
      icon: Leaf,
      route: "industries.agritech"
    },
    {
      title: "Insurance",
      description: "Modernize insurance services with digital solutions",
      icon: Shield,
      route: "industries.insurance"
    },
    {
      title: "Government",
      description: "Transform public services with secure and efficient systems",
      icon: Building2,
      route: "industries.government"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Industries" }),
    /* @__PURE__ */ jsxs(Navbar, { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] animate-pulse-slow" }),
        /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 bg-gray-800 px-5 py-2.5 rounded-full text-sm text-red-400 font-medium hover:bg-gray-700 transition-colors", children: [
            /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 animate-pulse" }),
            "Industry Solutions"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent", children: "Industries We Serve" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed", children: "Tailored technology solutions for diverse industries" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: industries.map((industry) => /* @__PURE__ */ jsx(
        Link,
        {
          href: route(industry.route),
          className: "group",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors", children: /* @__PURE__ */ jsx(industry.icon, { className: "w-6 h-6 text-red-600" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors", children: industry.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: industry.description })
          ] })
        },
        industry.title
      )) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-900 to-gray-800", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white", children: "Ready to Transform Your Industry?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "Let's create innovative solutions tailored to your industry's needs" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-6", children: [
          /* @__PURE__ */ jsxs("button", { className: "group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105", children: [
            /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5" }),
            "Start Your Project"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "group relative flex items-center gap-3 border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl", children: [
            /* @__PURE__ */ jsx(Cloud, { className: "w-5 h-5" }),
            "View Our Solutions"
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  IndustriesIndex as default
};
