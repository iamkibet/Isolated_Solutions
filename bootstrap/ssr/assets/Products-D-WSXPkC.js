import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GlobeAltIcon, DevicePhoneMobileIcon, ShoppingCartIcon, CloudIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { G as Guest } from "./GuestLayout-BJhypDJ5.js";
import "react";
import "./Navbar-CEL9b-rK.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./ApplicationLogo-BPuQqoMR.js";
import "@inertiajs/react";
import "react-icons/io";
const DEFAULT_SERVICES = [
  {
    title: "Web Development",
    description: "Cutting-edge digital experiences with modern frameworks",
    icon: GlobeAltIcon
  },
  {
    title: "Mobile Apps",
    description: "Native iOS & Android solutions with fluid UX",
    icon: DevicePhoneMobileIcon
  },
  {
    title: "eCommerce",
    description: "Scalable storefronts with conversion-focused design",
    icon: ShoppingCartIcon
  },
  {
    title: "Cloud Solutions",
    description: "Secure cloud infrastructure & serverless architecture",
    icon: CloudIcon
  },
  {
    title: "DevOps",
    description: "CI/CD pipelines & infrastructure as code",
    icon: CodeBracketIcon
  },
  {
    title: "Cybersecurity",
    description: "Enterprise-grade protection & threat monitoring",
    icon: ShieldCheckIcon
  }
];
const TopServices = ({
  services = DEFAULT_SERVICES,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("section", { className: `relative py-20 overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6 },
          className: "max-w-2xl lg:max-w-4xl mx-auto text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold tracking-tight text-white sm:text-5xl", children: "Next-Gen Digital Solutions" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-300", children: "Transform your business with our cutting-edge technology services" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-50px" },
          transition: { delay: index * 0.1, duration: 0.4 },
          children: /* @__PURE__ */ jsx(
            ServiceCard,
            {
              title: service.title,
              description: service.description,
              icon: service.icon
            }
          )
        },
        index
      )) })
    ] })
  ] });
};
const ServiceCard = ({ title, description, icon: Icon }) => /* @__PURE__ */ jsxs(
  motion.article,
  {
    whileHover: { y: -5 },
    whileTap: { scale: 0.98 },
    className: "group relative rounded-xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all",
    children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/10 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8 text-red-400" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Explore service" }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "h-4 w-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 8l4 4m0 0l-4 4m4-4H3"
                }
              )
            }
          )
        ] })
      ] })
    ]
  }
);
const products = [
  {
    name: "Soko Magari",
    description: "A sleek, user-friendly platform for browsing and purchasing vehicles.",
    link: "/sokomagari",
    image: "https://github.com/iamkibet/assets/blob/main/sokomagari.png?raw=true"
  }
];
const Products = () => {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-extrabold text-center mb-4 text-gray-900", children: "Our Products" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-center text-gray-600 mb-16", children: "Innovative solutions driving digital transformation" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", children: products.map((product, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300",
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center p-6 h-full", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6 space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: product.name }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: product.description })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: product.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-auto bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300",
                children: "View more"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden rounded-xl", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-64 object-contain transform hover:scale-105 transition-transform duration-300"
              }
            ) })
          ] })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(TopServices, {})
  ] });
};
export {
  Products as default
};
