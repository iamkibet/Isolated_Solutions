import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-tDqJ4a2U.js";
import { M as MaxWidthWrapper } from "./Navbar-CpdjPGlk.js";
import { Zap, Rocket, Clipboard, Database, CloudLightning, BarChart, Shield, BadgeCheckIcon, Gauge, Check, CreditCard, TestTube2, Search, Bolt, Image, Code } from "lucide-react";
import "react";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./ApplicationLogo-BPuQqoMR.js";
import "@inertiajs/react";
import "react-icons/io";
const features = [
  {
    icon: Search,
    title: "Poweful Search",
    description: "Advanced search processing with Redis-optimized query caching"
  },
  {
    icon: Bolt,
    title: "Lightning Response",
    description: "Edge network delivery with <2ms cache hits"
  },
  {
    icon: Image,
    title: "Visual Excellence",
    description: "Quality images with lazy loading"
  },
  {
    icon: Code,
    title: "Code Perfection",
    description: "TypeScript-first with atomic design principles"
  }
];
const SokoMagari = () => {
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] animate-pulse-slow" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-3 bg-gray-800 px-5 py-2.5 rounded-full text-sm text-red-400 font-medium hover:bg-gray-700 transition-colors", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 animate-pulse" }),
          "Your Digital Car Marketplace"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent", children: "Soko Magari" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed", children: "Where automotive passion meets digital innovation - Your gateway to stress-free car transactions" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center gap-4", children: /* @__PURE__ */ jsxs("button", { className: "group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105", children: [
          /* @__PURE__ */ jsx(Rocket, { className: "w-5 h-5 animate-bounce" }),
          "Explore Interactive Demo"
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-red-500 font-medium", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5" }),
          "Performance Engineered"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Automotive Tech Stack" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Cutting-edge infrastructure meets elegant presentation" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(feature.icon, { className: "w-6 h-6 text-red-500 " }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900", children: feature.title }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm text-gray-600 mt-1",
                    dangerouslySetInnerHTML: {
                      __html: feature.description
                    }
                  }
                )
              ] })
            ] })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-90", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1 transform rotate-2 scale-105", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsx(
          "img",
          {
            src: `/cars/car-${i}.webp`,
            alt: "Vehicle showcase",
            className: "w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity cursor-zoom-in",
            loading: "lazy"
          },
          i
        )) }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent p-6 flex flex-col justify-between backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "group relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl max-w-[420px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-red-500" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-yellow-500" }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-3 rounded-full bg-green-500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "font-mono text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 mr-2", children: "const" }),
                /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "searchCars" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 mx-2", children: "=" }),
                /* @__PURE__ */ jsxs("span", { className: "text-green-400", children: [
                  "(",
                  "{",
                  " "
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "make" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  ":",
                  " "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-green-400", children: '"Toyota"' }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "," })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "cache" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  ":",
                  " "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "redis" }),
                /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: "(" }),
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "'ttl'" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  ":",
                  " "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "300" }),
                /* @__PURE__ */ jsx("span", { className: "text-orange-400", children: ")" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "," })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "media" }),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  ":",
                  " "
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "'4k'" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-green-400", children: "})" })
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-gray-400 hover:text-white text-xs", children: [
              /* @__PURE__ */ jsx(Clipboard, { className: "w-4 h-4" }),
              "Copy"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md rounded-xl p-5 max-w-[320px] self-end shadow-xl border border-gray-700/30 transform transition-transform hover:translate-x-1", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-green-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: "Cache Efficiency" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-green-400", children: "99.2%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CloudLightning, { className: "w-5 h-5 text-blue-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: "Media Load" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-mono text-blue-400", children: "0.42s" }),
                /* @__PURE__ */ jsx("div", { className: "h-2 w-12 bg-gray-700 rounded-full", children: /* @__PURE__ */ jsx("div", { className: "h-full w-3/4 bg-blue-500 rounded-full" }) })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-red-500 font-medium bg-red-50 px-4 py-2 rounded-full", children: [
          /* @__PURE__ */ jsx(BarChart, { className: "w-5 h-5" }),
          "Dealer Command Center"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900", children: "Complete Vehicle Lifecycle Management" }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-red-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Fast Listings" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Beautiful and interactive UI to create listings" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: [
                "Airbag Systems",
                "Climate Control",
                "Ergonomic Seats"
              ].map((tag, i) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-3 py-1 bg-gray-100 rounded-full text-sm",
                  children: tag
                },
                i
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ jsx(BadgeCheckIcon, { className: "w-6 h-6 text-red-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Client Sales Network" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "White-label selling with automated commission tracking. Features include:" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 mt-3", children: [
                "Virtual Showrooms",
                "Digital Test Drives",
                "Escrow Payments",
                "Live Auction Bidding"
              ].map((feature, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
                  ]
                },
                i
              )) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 h-full", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-inner border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-2 rounded-lg", children: /* @__PURE__ */ jsx(Gauge, { className: "w-6 h-6 text-red-600" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Safety First Platform" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Automated safety checklist with integration for:" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mt-4", children: [
              "ABS Systems",
              "Lane Assist",
              "Crash Tests",
              "Recall Checks"
            ].map((item, i) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm",
                children: [
                  /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500" }),
                  item
                ]
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-2 rounded-lg", children: /* @__PURE__ */ jsx(Rocket, { className: "w-6 h-6 text-red-600" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Market Analytics" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
              {
                metric: "0.2s",
                label: "Listing Creation Time"
              },
              {
                metric: "98%",
                label: "Safety Spec Accuracy"
              },
              {
                metric: "4.8x",
                label: "Client Sales Boost"
              }
            ].map((stat, i) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: stat.label }),
                  /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: stat.metric })
                ]
              },
              i
            )) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-900 p-4 rounded-xl text-white flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-red-500 p-3 rounded-lg", children: /* @__PURE__ */ jsx(CreditCard, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Agent Marketplace" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 mt-1", children: "Sell on behalf of the client feature added." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-900 to-gray-800", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white", children: "Revolutionize Your Dealership" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "Join the platform transforming automotive commerce across Africa" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-6", children: [
        /* @__PURE__ */ jsxs("button", { className: "group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105", children: [
          /* @__PURE__ */ jsx(Rocket, { className: "w-5 h-5" }),
          "Start Free Trial"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "group relative flex items-center gap-3 border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl", children: [
          /* @__PURE__ */ jsx(TestTube2, { className: "w-5 h-5" }),
          "Request Custom Demo"
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  SokoMagari as default
};
