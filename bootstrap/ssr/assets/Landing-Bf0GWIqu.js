import { jsxs, jsx } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { M as MaxWidthWrapper, S as ServicesLinks, T as TechnologiesLinks, I as IndustriesLinks, W as WorkLinks, A as AboutLinks } from "./MaxWidthWrapper-YqTwz5LP.js";
import { motion } from "framer-motion";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import { useState, useEffect, useRef } from "react";
import { A as ApplicationLogo } from "./ApplicationLogo-BPuQqoMR.js";
import { IoMdClose, IoIosMenu, IoIosArrowForward } from "react-icons/io";
import "clsx";
const HoverCard = ({
  title,
  description,
  image,
  hoverContent,
  hoverTitle,
  p
}) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "relative w-full lg:w-1/3 h-72  overflow-hidden border transition-all duration-300 ease-in-out hover:shadow-xl",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute  inset-0 bg-white p-6 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 my-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: title,
                className: "object-contain"
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
                    "stroke-width": "2",
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
const Services = () => {
  return /* @__PURE__ */ jsx("div", { className: "py-16 bg-gradient-to-b from-white to-gray-100", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#14151b] leading-tight mb-6", children: [
        "Reshaping Dynamics of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "block mt-2 font-semibold text-red-500 text-2xl sm:text-3xl md:text-4xl", children: "Modern~Age Business" }),
        /* @__PURE__ */ jsx("span", { className: "block mt-2 font-semibold text-red-500 text-2xl sm:text-3xl md:text-4xl", children: "with Our Tech Solutions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-red-500 mx-auto mb-8" }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-[#14151b] max-w-2xl mx-auto leading-relaxed", children: "Your doorway to assured growth through our commitment to qualitative delivery" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex py-10 flex-col lg:flex-row w-full flex-wrap", children: [
      /* @__PURE__ */ jsx(
        HoverCard,
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
            "Mpesa Intergration",
            "Livechat Integration"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        HoverCard,
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
        }
      ),
      /* @__PURE__ */ jsx(
        HoverCard,
        {
          image: ai,
          title: "Data & AI",
          description: "Embracing change with data-driven insights, automation, and predictive analysis to transform your business into a market leader",
          p: "Empower Decisions",
          hoverTitle: "Data & AI",
          hoverContent: [
            "Generative AI",
            "AI Model Development",
            "AI Consulting Services",
            "Data Intelligence",
            "Big Data Solutions",
            "AI Chatbot Development",
            "Data Analytics Services",
            "LLM Development"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        HoverCard,
        {
          image: cloud,
          title: "Cloud & DevOps",
          description: "Leveraging the power of cloud and devops to delliver faster, more reliable applications and ensure seamless scalability.",
          p: "Scale with Cloud",
          hoverTitle: "Cloud & DevOps",
          hoverContent: [
            "Cloud Computing Services",
            "DevOps Consulting Services",
            "Cloud Migration"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        HoverCard,
        {
          image: box1,
          title: "Quality Engineering",
          description: "Delivering exceptional quality with rigorous engineering processes to reduce losses, build trust, and exceed customer expectations.",
          p: "Test for quality",
          hoverTitle: "Quality Engineering",
          hoverContent: [
            "Performance Testing",
            "Security Testing",
            "Mobile App Testing",
            "Functional Testing",
            "Accessibility Testing",
            "Usability Testing"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        HoverCard,
        {
          image: box1,
          title: "Cybersecurity",
          description: "Protecting your company's digital assets, data, and networks from unauthorised access while ensuring compliance as you grow.",
          p: "Mitigate Security Risks",
          hoverTitle: "Cybersecurity",
          hoverContent: [
            "VAPT",
            "Infrastructure Monitoring",
            "Application Security",
            "Red Teaming",
            "Software Composition Analysis",
            "Social Engineering",
            "Data Leakage Monitoring"
          ]
        }
      )
    ] })
  ] }) }) });
};
const FutechWrap = ({ title, content }) => {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto mb-8 mt-8 ", children: /* @__PURE__ */ jsxs("div", { className: "border-t-8 border-[#14151b] w-64 md:w-[90%]", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-3xl font-extrabold mb-2 mt-3", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm md:text-base", children: content })
  ] }) });
};
const Futech = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-full mb-8 border-b-2 border-black ", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsxs("div", { className: " text-center", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-3xl md:text-5xl font-extrabold mb-4 relative inline-block", children: [
        "The Stakeholders of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "Futuristic Technology Solutions" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-lg md:text-xl text-gray-600", children: "Your Ideas, Our Expertise = Maximum Customer Success" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pb-4 mt-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ", children: [
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "Blockchain Development",
          content: "Enhancing and securing the ways to store and modify data of transactions with Blockchain-powered solutions for banking, finance, healthcare, and other industries."
        }
      ),
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "IoT",
          content: "Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architectured IoT ecosystem transforms the business."
        }
      ),
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "Augmented Reality",
          content: "Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand."
        }
      ),
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "Data Intelligence",
          content: "Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data."
        }
      ),
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "Artificial Intelligence",
          content: "Automate your business operations and processes with AI-powered solutions to reduce human intervention and increase efficiency."
        }
      ),
      /* @__PURE__ */ jsx(
        FutechWrap,
        {
          title: "Virtual reality",
          content: "Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "border-2 hover:border-[#02789e] px-8 py-5 font-medium text-white hover:text-[#14151b] bg-[#02789e] hover:bg-white rounded-lg text-center cursor-pointer mb-8",
        children: "Share Your Product Idea"
      }
    )
  ] }) });
};
const Testimonials = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4 md:flex-row justify-between w-[90%]", children: [
      /* @__PURE__ */ jsx("h3", { className: "md:text-4xl text-2xl font-extrabold", children: "What People Say About Us" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "border-2 border-[#02789e] px-8 py-5 font-medium hover:text-white text-[#14151b] hover:bg-[#02789e] bg-white rounded-lg text-center cursor-pointer mb-8",
          children: "Explore Our Work"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6", children: /* @__PURE__ */ jsxs("figure", { className: "max-w-screen-md mx-auto", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "h-12 mx-auto mb-3 text-[#02789e]",
          viewBox: "0 0 24 27",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",
              fill: "currentColor"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("blockquote", { children: /* @__PURE__ */ jsx("p", { className: "text-2xl font-medium text-gray-900", children: '"Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website."' }) }),
      /* @__PURE__ */ jsxs("figcaption", { className: "flex items-center justify-center mt-6 space-x-3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-6 h-6 rounded-full",
            src: "https://mwangikanothe.com/build/assets/profile-default-b1fa350e.jpg"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center divide-x-2 divide-gray-900 ", children: [
          /* @__PURE__ */ jsx("div", { className: "pr-3 font-medium text-gray-900", children: "Amos Wako" }),
          /* @__PURE__ */ jsx("div", { className: "pl-3 text-sm font-light text-[#02789e]", children: "Customer" })
        ] })
      ] })
    ] }) })
  ] }) });
};
const heroimages = [
  {
    image: "https://www.sparxitsolutions.com/sites/images/legacy-banner.webp",
    tab: "Ai-First approach",
    title: "Shaping Futures With Our AI-first Approach",
    description: "We drive AI innovation through breakthrough engineering and design to enhance business performance. This helps you to make informed decisions.",
    buttonText: "Learn More"
  },
  {
    image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
    tab: "Data Engineering",
    title: "Engineer Data Into Actionable Decisions",
    description: "We help businesses to harness the power of data to drive innovation and growth. Our data engineering services help you to make informed decisions.",
    buttonText: "Explore"
  },
  {
    image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
    tab: "Product Engineering",
    title: "Accelerate Time-To-Market with Product Engineering ",
    description: "Reshaping the future of digital products with our expertise in product engineering by leveraging AI powered approaches",
    buttonText: "Discover"
  },
  {
    image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
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
    }, 5e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative h-screen w-full", children: [
    heroimages.map((hero, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: hero.image,
              alt: hero.title,
              className: "h-full w-full object-cover"
            }
          ),
          index === currentSlide && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col justify-center text-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 px-4 md:px-8 max-w-2xl", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl", children: hero.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed md:text-xl md:leading-relaxed", children: hero.description }),
            /* @__PURE__ */ jsx("button", { className: "w-fit transform rounded-lg bg-red-600 px-8 py-3 text-sm font-medium transition-all hover:bg-red-700 hover:shadow-lg md:px-10 md:py-4 md:text-base", children: hero.buttonText })
          ] }) }) })
        ]
      },
      index
    )),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute bottom-0 left-0 right-0 z-20", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 px-4 pb-8 md:grid-cols-4 md:gap-4 md:px-6", children: heroimages.map((hero, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentSlide(index),
        className: `flex items-center rounded-lg p-3 text-left transition-all ${currentSlide === index ? "bg-white/20 backdrop-blur-sm text-white" : "bg-black/20 hover:bg-white/10 text-white"}`,
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `text-sm font-medium md:text-base ${currentSlide === index ? "border-l-4 border-red-500 pl-3 font-bold" : "pl-4"}`,
            children: hero.tab
          }
        )
      },
      index
    )) }) }) })
  ] });
};
const DropdownMenuItem = ({
  title,
  children,
  onMouseEnter,
  onMouseLeave,
  show
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "relative group hover:cursor-pointer",
    onMouseEnter,
    onMouseLeave,
    children: [
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("span", { className: " hover:text-red-600 transition-colors duration-200", children: title }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} absolute -right-40 min-w-max p-6 bg-white shadow-xl rounded-lg transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto`,
          children: /* @__PURE__ */ jsx("div", { className: "grid gap-4", children })
        }
      )
    ]
  }
);
function Navbar({ children }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const menuItems = [
    { title: "Services", Component: ServicesLinks },
    { title: "Technologies", Component: TechnologiesLinks },
    { title: "Industries", Component: IndustriesLinks },
    { title: "Work", Component: WorkLinks },
    { title: "About", Component: AboutLinks }
  ];
  const mobileMenuItems = [
    { title: "Services", route: "home" },
    { title: "Technologies", route: "home" },
    { title: "Industries", route: "home" },
    { title: "Our Work", route: "home" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : " text-white bg-transparent"}`,
        children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "flex-shrink-0", children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
            menuItems.map(({ title, Component }) => /* @__PURE__ */ jsx(
              DropdownMenuItem,
              {
                title,
                onMouseEnter: () => setActiveDropdown(title),
                onMouseLeave: () => setActiveDropdown(null),
                show: activeDropdown === title,
                children: /* @__PURE__ */ jsx(Component, {})
              },
              title
            )),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("contact"),
                className: "px-5 py-2.5 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-200",
                children: "Contact Us"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowMobileNav(!showMobileNav),
              className: "md:hidden p-2 text-red-600 hover:text-red-700 transition-colors",
              children: showMobileNav ? /* @__PURE__ */ jsx(IoMdClose, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx(IoIosMenu, { className: "h-6 w-6" })
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-16 inset-x-0 h-[calc(100vh-4rem)] bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${showMobileNav ? "translate-x-0" : "translate-x-full"} md:hidden z-40`,
        children: /* @__PURE__ */ jsxs("div", { className: "divide-y divide-gray-100", children: [
          mobileMenuItems.map(({ title, route: route2 }) => /* @__PURE__ */ jsxs(
            Link,
            {
              href: route2,
              className: "flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: title }),
                /* @__PURE__ */ jsx(IoIosArrowForward, { className: "text-red-600 h-5 w-5" })
              ]
            },
            title
          )),
          /* @__PURE__ */ jsx("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("contact"),
              className: "block w-full px-4 py-2.5 text-center bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors",
              children: "Contact Us"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "pt-16", children })
  ] });
}
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
      /* @__PURE__ */ jsx(Navbar, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: " bg-white lg:py-5", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:font-extrabold", children: "Top Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base lg:text-lg text-slate-800 my-2", children: "Top-Tier Digital Solutions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-nowrap overflow-x-auto sm:overflow-x-visible gap-6 w-full sm:w-auto", children: [
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
      ].map((service, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex-shrink-0 w-60 sm:w-auto",
          children: [
            /* @__PURE__ */ jsx("p", { className: "p-2 px-3 bg-black text-slate-200 font-medium text-lg sm:text-xl", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs sm:text-sm", children: service.desc })
          ]
        },
        index
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Futech, {}),
    /* @__PURE__ */ jsx(Testimonials, {})
  ] });
}
export {
  Landing as default
};
