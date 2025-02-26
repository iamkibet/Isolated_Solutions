import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GlobeAltIcon, DevicePhoneMobileIcon, ShoppingCartIcon, CloudIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { G as Guest } from "./GuestLayout-tDqJ4a2U.js";
import { Rocket, LayoutDashboard, ShieldCheck, ArrowRight } from "lucide-react";
import { M as MaxWidthWrapper } from "./Navbar-CpdjPGlk.js";
import "react";
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
    description: "Enterprise automotive commerce platform",
    highlights: [
      "AI vehicle matchmaking",
      "Blockchain-secured transactions",
      "Virtual showrooms",
      "Real-time market analytics"
    ],
    link: "/sokomagari",
    image: "/images/sokomagari.png?raw=true",
    badge: "Featured Platform"
  }
];
const Products = () => {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-24 px-4 sm:px-6", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-20", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm font-medium mb-4 md:mb-6", children: [
          /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base", children: "Digital Transformation Suite" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: "Enterprise Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto", children: "Cutting-edge platforms powering modern automotive commerce" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8", children: products.map((product, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group relative bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-300 border border-gray-100 overflow-hidden",
          children: [
            product.badge && /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium z-10", children: product.badge }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-5 sm:p-6 md:p-8 pb-0 flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-2 sm:p-3 rounded-lg sm:rounded-xl w-fit", children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "w-6 h-6 sm:w-8 sm:h-8 text-red-600" }) }),
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900", children: product.name })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-base sm:text-lg mb-4 md:mb-6", children: product.description }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6", children: product.highlights.map(
                  (highlight, idx) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-start gap-2 sm:gap-3",
                      children: [
                        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-1" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base text-gray-700", children: highlight })
                      ]
                    },
                    idx
                  )
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: product.image,
                    alt: product.name,
                    className: "w-full h-48 sm:h-64 md:h-80 object-cover object-top transform transition-transform duration-500 group-hover:scale-105",
                    loading: "lazy"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "p-5 sm:p-6 md:p-8 bg-gray-50 border-t border-gray-100", children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: product.link,
                  className: "inline-flex items-center gap-2 text-red-600 font-semibold text-sm sm:text-base hover:text-red-700 transition-colors",
                  children: [
                    "Explore Platform",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ) })
            ] })
          ]
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
