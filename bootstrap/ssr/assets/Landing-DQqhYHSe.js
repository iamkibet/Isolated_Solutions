import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { M as MaxWidthWrapper, N as Navbar, F as Footer } from "./Navbar-CpdjPGlk.js";
import { motion } from "framer-motion";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import { useState, useEffect } from "react";
import "classnames";
import "./ApplicationLogo-BPuQqoMR.js";
import "react-icons/io";
const HoverCard = ({
  title,
  description,
  image,
  hoverContent,
  hoverTitle,
  p,
  className,
  imageProps = {}
}) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: `relative w-full h-72 overflow-hidden border transition-all duration-300 ease-in-out hover:shadow-xl ${className || ""}`,
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-white p-6 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 my-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                ...imageProps,
                src: image,
                alt: imageProps.alt || title,
                className: `object-contain ${imageProps.className || ""}`
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-800 mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 leading-relaxed line-clamp-3", children: description })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex justify-center gap-1 items-center text-sm text-red-500 text-center", children: [
            p,
            " ",
            /* @__PURE__ */ jsx("span", { className: "", children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "h-4",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "polyline",
                  {
                    fill: "none",
                    stroke: "#ef4444",
                    strokeWidth: "2",
                    points: "7 2 17 12 7 22"
                  }
                )
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#f5f5f5] opacity-0 text-black transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full p-6 flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-red-500 mb-4 text-center", children: hoverTitle }),
          /* @__PURE__ */ jsx("ul", { className: "list-none text-sm overflow-y-auto flex-grow", children: hoverContent.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "mb-4 flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "h-2 w-2 bg-red-500 mr-3 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                className: "hover:text-red-500 transition-colors duration-300",
                children: /* @__PURE__ */ jsx(BorderHover, { hovBorderColor: "bg-red-500", children: item })
              }
            )
          ] }, index)) })
        ] }) })
      ]
    }
  );
};
const box1 = "/build/assets/box1-BHbuKHD7.svg";
const settings = "/build/assets/settings-DX7X6IyL.svg";
const ai = "/build/assets/ai-kZDW3FrZ.svg";
const cloud = "/build/assets/cloud-BUJDBxFi.svg";
const SERVICES = [
  {
    image: box1,
    title: "Digital Transformation",
    description: "Reimagine business processes, meet customer needs and enable data-driven decision making with agility and foresight",
    p: "Drive Digital Change.",
    hoverTitle: "Digital Transformation",
    hoverContent: [
      "Legacy Software Modernization",
      "Digital Consulting",
      "Code Reviews",
      "AI Integration",
      "Mpesa Integration",
      "Livechat Integration"
    ]
  },
  {
    image: settings,
    title: "Product Engineering",
    description: "Build digital products that stand out in a crowded market with a holistic approach, efficient resource management, and quality.",
    p: "Innovate Your Product",
    hoverTitle: "Product Engineering",
    hoverContent: [
      "Automated Testing",
      "Performance Optimization",
      "Code Reviews",
      "Continuous Integration",
      "UI/UX Design and Modernization"
    ]
  },
  {
    image: ai,
    title: "AI & Automation",
    description: "Empower your business with AI and automation solutions that drive efficiency, innovation, and growth.",
    p: "Automate Your Business",
    hoverTitle: "AI & Automation",
    hoverContent: [
      "AI Integration",
      "Chatbot Development",
      "Predictive Analytics",
      "Process Automation",
      "Data Visualization"
    ]
  },
  {
    image: cloud,
    title: "Cloud Solutions",
    description: "Leverage the power of the cloud to enhance scalability, security, and performance of your business.",
    p: "Scale with Cloud",
    hoverTitle: "Cloud Solutions",
    hoverContent: [
      "Cloud Migration",
      "Cloud Optimization",
      "Cloud Security",
      "Multi-Cloud Strategy",
      "Disaster Recovery Planning"
    ]
  },
  {
    image: box1,
    title: "Data Engineering",
    description: "Transform raw data into actionable insights with our data engineering solutions.",
    p: "Harness Your Data",
    hoverTitle: "Data Engineering",
    hoverContent: [
      "Data Integration",
      "Data Warehousing",
      "Data Governance",
      "Real-time Analytics",
      "Data Visualization"
    ]
  },
  {
    image: settings,
    title: "Legacy Software Modernization",
    description: "Upgrade your legacy systems to modern, scalable architectures with our modernization services.",
    p: "Modernize Your Legacy",
    hoverTitle: "Legacy Software Modernization",
    hoverContent: [
      "Code Refactoring",
      "UI/UX Redesign",
      "Database Migration",
      "Cloud Integration",
      "API Development"
    ]
  }
];
const SectionHeader$2 = () => /* @__PURE__ */ jsxs("header", { className: "text-center mb-6", children: [
  /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-gray-900 mb-6", children: [
    "Reshaping Dynamics of",
    " ",
    /* @__PURE__ */ jsx("span", { className: "block mt-4 text-red-500 font-semibold text-2xl md:text-4xl", children: "Modern~Age Business" }),
    /* @__PURE__ */ jsx("span", { className: "block mt-2 text-red-500 font-semibold text-xl md:text-4xl", children: "with Our Tech Solutions" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-red-500 mx-auto mb-4", "aria-hidden": "true" }),
  /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "Your doorway to assured growth through our commitment to qualitative delivery" })
] });
const ServicesGrid = () => /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 py-2 ", children: SERVICES.map((service, index) => /* @__PURE__ */ jsx(
  HoverCard,
  {
    ...service,
    className: "group hover:shadow-xl transition-all duration-300",
    imageProps: {
      className: "w-16 h-16 mb-6 group-hover:scale-110 transition-transform",
      alt: `${service.title} icon`
    }
  },
  index
)) });
const Services = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "py-12 bg-gradient-to-b from-white to-gray-50",
      "aria-labelledby": "services-heading",
      children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
        /* @__PURE__ */ jsx(SectionHeader$2, {}),
        /* @__PURE__ */ jsx(ServicesGrid, {})
      ] })
    }
  );
};
const SOLUTIONS = [
  {
    title: "Blockchain Development",
    content: "Enhancing and securing the ways to store and modify data of transactions with Blockchain-powered solutions for banking, finance, healthcare, and other industries."
  },
  {
    title: "IoT",
    content: "Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architectured IoT ecosystem transforms the business."
  },
  {
    title: "Augmented Reality",
    content: "Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand."
  },
  {
    title: "Data Intelligence",
    content: "Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data."
  },
  {
    title: "Artificial Intelligence",
    content: "Automate your business operations and processes with AI-powered solutions to reduce human intervention and increase efficiency."
  },
  {
    title: "Virtual Reality",
    content: "Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs."
  }
];
const SolutionCard = ({ title, content }) => /* @__PURE__ */ jsx("div", { className: "group p-6 hover:bg-red-50/50 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "border-t-4 border-red-500 pt-6", children: [
  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4 text-gray-900", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: content })
] }) });
const SectionHeader$1 = () => /* @__PURE__ */ jsxs("div", { className: "text-center mb-2 md:mb-6", children: [
  /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-gray-900 mb-4", children: [
    "The Stakeholders of",
    " ",
    /* @__PURE__ */ jsx("span", { className: "text-lg md:text-2xl text-red-500", children: "Futuristic Technology Solutions" })
  ] }),
  /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg text-gray-600 max-w-2xl mx-auto", children: "Your Ideas, Our Expertise = Maximum Customer Success" })
] });
const CtaButton = () => /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsx(
  "button",
  {
    type: "button",
    className: "px-10 py-4 border-2 border-red-500 text-white bg-red-500 \n               rounded-lg font-medium hover:bg-white hover:text-red-500\n               transition-all duration-300 focus:outline-none focus:ring-2 \n               focus:ring-red-500 focus:ring-offset-2",
    "aria-label": "Share your product idea with our team",
    children: "Share Your Product Idea"
  }
) });
const Futech = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 border-b border-gray-200", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsx(SectionHeader$1, {}),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6", children: SOLUTIONS.map((solution, index) => /* @__PURE__ */ jsx(
      SolutionCard,
      {
        title: solution.title,
        content: solution.content
      },
      index
    )) }),
    /* @__PURE__ */ jsx(CtaButton, {})
  ] }) });
};
const TESTIMONIAL = {
  quote: `"Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website."`,
  author: {
    name: "Amos Wako",
    role: "Customer",
    avatar: "https://mwangikanothe.com/build/assets/profile-default-b1fa350e.jpg"
  }
};
const QuoteIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    className: "h-12 mx-auto mb-6 text-red-500",
    viewBox: "0 0 24 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",
        fill: "currentColor"
      }
    )
  }
);
const TestimonialCard = () => /* @__PURE__ */ jsxs("figure", { className: "max-w-3xl mx-auto", children: [
  /* @__PURE__ */ jsx(QuoteIcon, {}),
  /* @__PURE__ */ jsx("blockquote", { children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-gray-900 leading-relaxed", children: TESTIMONIAL.quote }) }),
  /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-center mt-8 space-x-4", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-10 h-10 rounded-full",
        src: TESTIMONIAL.author.avatar,
        alt: `${TESTIMONIAL.author.name} avatar`
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center divide-x divide-gray-300", children: [
      /* @__PURE__ */ jsx("div", { className: "pr-4 font-medium text-gray-900", children: TESTIMONIAL.author.name }),
      /* @__PURE__ */ jsx("div", { className: "pl-4 text-sm font-light text-red-500", children: TESTIMONIAL.author.role })
    ] })
  ] })
] });
const SectionHeader = () => /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12", children: [
  /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight text-gray-900", children: "What People Say About Us" }),
  /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "px-8 py-4 border-2 border-red-500 text-red-500 font-medium rounded-lg \n               hover:bg-red-500 hover:text-white transition-all duration-300\n               focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
      "aria-label": "Explore our work portfolio",
      children: "Explore Our Work"
    }
  )
] });
const Testimonials = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      "aria-labelledby": "testimonials-heading",
      className: "py-16 md:py-24",
      children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ jsx(SectionHeader, {}),
        /* @__PURE__ */ jsx("div", { className: "px-4 py-12 md:py-16 bg-gray-50 rounded-2xl", children: /* @__PURE__ */ jsx(TestimonialCard, {}) })
      ] }) })
    }
  );
};
const heroimages = [
  {
    image: "/images/ai-banner.webp",
    tab: "Ai-First approach",
    title: "Shaping Futures With Our AI-first Approach",
    description: "We drive AI innovation through breakthrough engineering and design to enhance business performance. This helps you to make informed decisions.",
    buttonText: "Learn More"
  },
  {
    image: "/images/data_and_Cloud.webp",
    tab: "Data Engineering",
    title: "Engineer Data Into Actionable Decisions",
    description: "We help businesses to harness the power of data to drive innovation and growth. Our data engineering services help you to make informed decisions.",
    buttonText: "Explore"
  },
  {
    image: "/images/cyber_security.webp",
    tab: "Product Engineering",
    title: "Accelerate Time-To-Market with Product Engineering ",
    description: "Reshaping the future of digital products with our expertise in product engineering by leveraging AI powered approaches",
    buttonText: "Discover"
  },
  {
    image: "/images/Software_modernization.webp",
    tab: "Legacy Software",
    title: "Drive Agility Through Legacy System Modernization",
    description: "Upgrade your legacy software to the modern, scalable architecture with automation and AI.",
    buttonText: "Digitise your system"
  }
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroimages.length);
    }, 7e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full min-h-[90dvh] md:min-h-screen overflow-hidden", children: [
    heroimages.map((hero, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: hero.image,
              alt: hero.title,
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover",
              loading: index === 0 ? "eager" : "lazy"
            }
          ),
          index === currentSlide && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col justify-center text-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-5 md:space-y-7 max-w-2xl px-4 sm:px-6 md:px-8", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl text-balance", children: hero.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl leading-normal md:leading-relaxed max-w-[650px] text-gray-100/95", children: hero.description }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "w-fit rounded-lg bg-red-600 px-7 py-3.5 text-base font-semibold tracking-wide transition-colors \n                hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 \n                focus-visible:outline-red-500 md:px-9 md:py-4 md:text-lg",
                "aria-label": `Learn more about ${hero.tab}`,
                children: hero.buttonText
              }
            )
          ] }) }) })
        ]
      },
      index
    )),
    /* @__PURE__ */ jsx("div", { className: "md:hidden absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2", children: heroimages.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          setCurrentSlide(index);
        },
        className: `h-3 w-3 rounded-full transition-colors ${currentSlide === index ? "bg-red-600" : "bg-white/50"}`,
        "aria-label": `Go to slide ${index + 1}`
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute bottom-8 left-0 right-0 z-20", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-4 px-4", children: heroimages.map((hero, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          setCurrentSlide(index);
        },
        className: `flex items-center rounded-lg p-3 transition-all text-white ${currentSlide === index ? "bg-white/20 backdrop-blur-sm" : "bg-black/20 hover:bg-white/10"}`,
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `text-sm font-medium ${currentSlide === index ? "border-l-4 border-red-500 pl-3" : "pl-4 opacity-90"}`,
            children: hero.tab
          }
        )
      },
      index
    )) }) }) })
  ] });
};
function Landing({ auth }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Isolated Solutions" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx("div", { className: "text-white", children: /* @__PURE__ */ jsx(Navbar, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:font-extrabold", children: "Our Top Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base lg:text-lg text-slate-800 py-3", children: "Top-Tier Digital Solutions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex overflow-x-scroll md:overflow-x-hidden gap-8 pb-6", children: [
        {
          title: "Website Development",
          desc: "Web presence for your business."
        },
        {
          title: "App Development",
          desc: "Your business on Android and iOS."
        },
        {
          title: "eCommerce",
          desc: "Take your shop online."
        }
      ].map((service, index) => /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 ", children: [
        /* @__PURE__ */ jsx("p", { className: "p-2 px-3 bg-black text-slate-200 font-medium text-lg sm:text-xl", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs sm:text-sm", children: service.desc })
      ] }, index)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Futech, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Landing as default
};
