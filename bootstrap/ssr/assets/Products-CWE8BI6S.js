import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GlobeAltIcon, DevicePhoneMobileIcon, ShoppingCartIcon, CloudIcon, CodeBracketIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { Sparkles, ArrowRight, Rocket, Car, Package, Brain, Wallet, ShoppingBag } from "lucide-react";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { Head, Link } from "@inertiajs/react";
import "react";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
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
    slug: "soko-magari",
    description: "Enterprise automotive commerce platform for buying and selling vehicles",
    category: "E-commerce Platform",
    highlights: [
      "AI-powered vehicle matchmaking",
      "Secure payment integration",
      "Virtual showrooms & 360° tours",
      "Real-time market analytics"
    ],
    externalLink: "https://sokomagari.isolatedsolutions.org/",
    icon: Car,
    color: "red",
    badge: "Live Platform"
  },
  {
    name: "StockSync",
    slug: "stocksync",
    description: "Complete inventory management system for businesses of all sizes",
    category: "Business Management",
    highlights: [
      "Real-time stock tracking",
      "Multi-warehouse support",
      "Automated reorder alerts",
      "Detailed analytics & reports"
    ],
    externalLink: "http://stocksync.isolatedsolutions.org/",
    icon: Package,
    color: "blue",
    badge: "Enterprise Ready"
  },
  {
    name: "AI Resume Builder",
    slug: "ai-resume-builder",
    description: "Intelligent resume creation powered by artificial intelligence",
    category: "AI-Powered Tool",
    highlights: [
      "AI-generated content suggestions",
      "Professional templates",
      "ATS-optimized formatting",
      "Real-time preview & editing"
    ],
    externalLink: null,
    icon: Brain,
    color: "purple",
    badge: "AI-Powered"
  },
  {
    name: "PesaPlan",
    slug: "pesaplan",
    description: "Smart expense management mobile app for personal and business finances",
    category: "Mobile App",
    highlights: [
      "Expense tracking & budgeting",
      "Receipt scanning with OCR",
      "Multi-currency support",
      "Financial insights & reports"
    ],
    externalLink: null,
    icon: Wallet,
    color: "green",
    badge: "Mobile App"
  },
  {
    name: "Fashion Store",
    slug: "fashion-store",
    description: "Modern e-commerce platform designed for fashion retailers",
    category: "E-commerce Platform",
    highlights: [
      "Beautiful product galleries",
      "Size & color variations",
      "Secure checkout & payments",
      "Order tracking & management"
    ],
    externalLink: null,
    icon: ShoppingBag,
    color: "pink",
    badge: "E-commerce"
  }
];
const Products = () => {
  const getColorClasses = (color) => {
    const colors = {
      red: {
        accent: "from-red-500 to-red-600",
        iconHover: "group-hover:text-red-600",
        badgeHover: "group-hover:bg-red-50 group-hover:text-red-600",
        textHover: "group-hover:text-red-600"
      },
      blue: {
        accent: "from-blue-500 to-blue-600",
        iconHover: "group-hover:text-blue-600",
        badgeHover: "group-hover:bg-blue-50 group-hover:text-blue-600",
        textHover: "group-hover:text-blue-600"
      },
      purple: {
        accent: "from-purple-500 to-purple-600",
        iconHover: "group-hover:text-purple-600",
        badgeHover: "group-hover:bg-purple-50 group-hover:text-purple-600",
        textHover: "group-hover:text-purple-600"
      },
      green: {
        accent: "from-green-500 to-green-600",
        iconHover: "group-hover:text-green-600",
        badgeHover: "group-hover:bg-green-50 group-hover:text-green-600",
        textHover: "group-hover:text-green-600"
      },
      pink: {
        accent: "from-pink-500 to-pink-600",
        iconHover: "group-hover:text-pink-600",
        badgeHover: "group-hover:bg-pink-50 group-hover:text-pink-600",
        textHover: "group-hover:text-pink-600"
      }
    };
    return colors[color] || colors.red;
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Our Products" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center px-4 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
        "Our Product Portfolio"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight", children: [
        "Innovative Products Built for",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent", children: "Real Results" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed", children: "Explore our suite of cutting-edge products designed to solve real-world problems and drive business growth" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-6 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: products.length }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Products" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: "5K+" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Active Users" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: "99.9%" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Uptime" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white py-16 md:py-24", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0", children: products.map((product, index) => {
      const Icon = product.icon;
      const colors = getColorClasses(product.color);
      return /* @__PURE__ */ jsxs(
        Link,
        {
          href: `/products/${product.slug}`,
          className: "group bg-white rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden flex flex-col relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300` }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 pb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsx(Icon, { className: `w-10 h-10 text-gray-400 ${colors.iconHover} transition-colors duration-300`, strokeWidth: 1.5 }),
                /* @__PURE__ */ jsx("span", { className: `text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded ${colors.badgeHover} transition-colors duration-300`, children: product.badge })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-1.5", children: product.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-4", children: product.category }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: product.description })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "px-8 pb-8 flex-1", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: product.highlights.map((highlight, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 mt-0.5", children: "•" }),
              /* @__PURE__ */ jsx("span", { className: "leading-relaxed", children: highlight })
            ] }, idx)) }) }),
            /* @__PURE__ */ jsx("div", { className: "px-8 pb-8 pt-4 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between text-sm font-medium text-gray-900 ${colors.textHover} transition-colors duration-300`, children: [
              /* @__PURE__ */ jsx("span", { children: "View details" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] }) })
          ]
        },
        index
      );
    }) }) }) }),
    /* @__PURE__ */ jsx(TopServices, {}),
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-red-600 to-red-700 py-16 md:py-20", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center px-4 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white", children: "Have a Product Idea?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-red-50 max-w-2xl mx-auto", children: "Let's bring your vision to life. We build custom products tailored to your specific needs." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-4", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/quotes",
            className: "inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all",
            children: [
              /* @__PURE__ */ jsx(Rocket, { className: "w-5 h-5" }),
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
              "Contact Us",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
};
export {
  Products as default
};
