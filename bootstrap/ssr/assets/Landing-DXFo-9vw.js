import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
import { motion } from "framer-motion";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { N as Navbar } from "./Navbar-CqUCT1rs.js";
import { F as Footer } from "./Footer-COPzkF9E.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
import "classnames";
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
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 my-5 md:my-6", children: /* @__PURE__ */ jsx(
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
const SectionHeader$1 = () => /* @__PURE__ */ jsxs("header", { className: "text-center  relative", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-50 -z-10" }),
  /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-6", children: "Our Services" }),
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in",
        id: "services-heading",
        children: [
          "Transforming Business Through",
          /* @__PURE__ */ jsx("span", { className: "block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 font-extrabold", children: "Innovative Technology" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-6 md:mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
      /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "Empowering your digital journey with cutting-edge solutions and expert guidance" })
  ] })
] });
const ServicesGrid = () => /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-4 ", children: SERVICES.map((service, index) => /* @__PURE__ */ jsx(
  "div",
  {
    className: "transform transition-all duration-500 hover:-translate-y-2",
    style: { animationDelay: `${index * 100}ms` },
    children: /* @__PURE__ */ jsx(
      HoverCard,
      {
        ...service,
        className: "group hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white border border-gray-100",
        imageProps: {
          className: "w-20 h-20 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300",
          alt: `${service.title} icon`
        }
      }
    )
  },
  index
)) });
const Services = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "py-2 lg:py-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden",
      "aria-labelledby": "services-heading",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-30 -z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNGRjY2NjYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-5 -z-10" }),
        /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
          /* @__PURE__ */ jsx(SectionHeader$1, {}),
          /* @__PURE__ */ jsx(ServicesGrid, {})
        ] })
      ]
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
const SolutionCard = ({
  title,
  content,
  order
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "relative h-full transform transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] \n               hover:scale-[1.02] group hover:z-10",
    style: {
      transitionDelay: `${(order || 0) * 50}ms`,
      perspective: "1000px"
    },
    children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent \n                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "h-full p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg shadow-red-100/20 \n                   border border-gray-100/50 hover:border-red-200/80 transition-all\n                   flex flex-col justify-between overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute -left-4 w-2 h-14 bg-red-500 rounded-full \n                        transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100\n                        transition-all duration-500"
                }
              ),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 \n                      bg-clip-text text-transparent inline-block",
                  children: title
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600/90 leading-relaxed mb-6 line-clamp-4", children: content })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                "aria-label": `Learn more about ${title}`,
                className: "self-start mt-auto flex items-center gap-2 text-red-600/90 hover:text-red-800 \n                  opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Explore Solution" }),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-4 h-4 mt-0.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 5l7 7-7 7"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ]
  }
);
const SectionHeader = () => /* @__PURE__ */ jsxs("div", { className: "text-center mb-2 md:mb-6 relative", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-50 -z-10" }),
  /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-6", children: "Our Partners" }),
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-gray-900 mb-6", children: [
      "The Stakeholders of",
      " ",
      /* @__PURE__ */ jsx("span", { className: "block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 font-extrabold", children: "Futuristic Technology Solutions" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
      /* @__PURE__ */ jsx("div", { className: "w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg text-gray-600 max-w-2xl mx-auto", children: "Your Ideas, Our Expertise = Maximum Customer Success" })
  ] })
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
  return /* @__PURE__ */ jsx("section", { className: "py-4  border-b border-gray-200", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsx(SectionHeader, {}),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10", children: SOLUTIONS.map((solution, index) => /* @__PURE__ */ jsx(
      SolutionCard,
      {
        title: solution.title,
        content: solution.content,
        order: index % 6
      },
      solution.title
    )) }),
    /* @__PURE__ */ jsx(CtaButton, {})
  ] }) });
};
const TESTIMONIALS = [
  {
    quote: "Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website.",
    author: "Amos Wako",
    role: "Business Owner",
    initials: "AW",
    color: "red",
    rating: 5
  },
  {
    quote: "Exceptional service! The team delivered a robust inventory system that streamlined our operations. Highly professional and responsive.",
    author: "Sarah Mwangi",
    role: "Operations Manager",
    initials: "SM",
    color: "blue",
    rating: 5
  },
  {
    quote: "Working with Isolated Solutions was a game-changer. They transformed our outdated systems into modern, efficient solutions.",
    author: "David Omondi",
    role: "IT Director",
    initials: "DO",
    color: "purple",
    rating: 5
  },
  {
    quote: "Their mobile app development expertise is outstanding. PesaPlan has helped us manage our finances effortlessly.",
    author: "Grace Chebet",
    role: "Small Business Owner",
    initials: "GC",
    color: "green",
    rating: 5
  }
];
const Testimonials = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-gray-50", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" }),
        "Client Testimonials"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", children: "What Our Clients Say" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto", children: "Don't just take our word for it. Here's what our clients have to say about working with us." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: TESTIMONIALS.map((testimonial, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 p-6 md:p-8",
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-red-500 mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-400" }, i)) }),
          /* @__PURE__ */ jsx("blockquote", { className: "mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed text-base", children: [
            '"',
            testimonial.quote,
            '"'
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-gray-100", children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${testimonial.color === "red" ? "bg-red-600" : testimonial.color === "blue" ? "bg-blue-600" : testimonial.color === "purple" ? "bg-purple-600" : "bg-green-600"}`, children: testimonial.initials }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: testimonial.author }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: testimonial.role })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] }) }) });
};
const heroimages = [
  {
    image: "/images/ai-banner.webp",
    tab: "AI-First Approach",
    title: "Shaping Futures With Our AI-First Approach",
    description: "We drive AI innovation through breakthrough engineering and design to enhance business performance and help you make informed decisions.",
    buttonText: "Learn More"
  },
  {
    image: "/images/data_and_Cloud.webp",
    tab: "Data Engineering",
    title: "Engineer Data Into Actionable Insights",
    description: "Harness the power of data to drive innovation and growth. Our data engineering services transform raw data into actionable business intelligence.",
    buttonText: "Explore Solutions"
  },
  {
    image: "/images/cyber_security.webp",
    tab: "Product Engineering",
    title: "Accelerate Time-to-Market with Product Engineering",
    description: "Reshape the future of digital products with our expertise in product engineering, leveraging AI-powered approaches for innovation.",
    buttonText: "Discover More"
  },
  {
    image: "/images/Software_modernization.webp",
    tab: "Legacy Modernization",
    title: "Drive Agility Through Legacy System Modernization",
    description: "Upgrade your legacy software to modern, scalable architecture with automation and AI integration for enhanced performance.",
    buttonText: "Digitize Your System"
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
          index === currentSlide && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col justify-center text-white", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:space-y-10 max-w-3xl px-4 sm:px-6 md:px-8", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl md:leading-tight lg:leading-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 drop-shadow-lg", children: hero.title }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-[700px] text-gray-100/95 font-medium drop-shadow-md", children: hero.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4 md:pt-6", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "w-fit rounded-lg bg-red-600 px-7 py-3.5 text-base font-semibold tracking-wide transition-all duration-300\n                                            hover:bg-red-700 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 \n                                            focus-visible:outline-red-500 md:px-9 md:py-4 md:text-lg shadow-lg hover:shadow-xl whitespace-nowrap",
                  "aria-label": `Learn more about ${hero.tab}`,
                  children: hero.buttonText
                }
              ),
              hero.secondaryButtonText && /* @__PURE__ */ jsx(
                "button",
                {
                  className: "w-fit rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-base font-semibold tracking-wide transition-all duration-300\n                                                hover:bg-white/20 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 \n                                                focus-visible:outline-white/50 md:px-9 md:py-4 md:text-lg shadow-lg hover:shadow-xl",
                  "aria-label": `View ${hero.tab} solutions`,
                  children: hero.secondaryButtonText
                }
              )
            ] })
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
    /* @__PURE__ */ jsx("div", { className: "w-full bg-white lg:py-16 ", children: /* @__PURE__ */ jsx(MaxWidthWrapper, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl  lg:text-4xl xl:text-5xl font-bold lg:font-extrabold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent", children: "Our Top Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-slate-600 py-4", children: "Empowering businesses with cutting-edge digital solutions" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-2/3", children: [
        {
          title: "Website Development",
          desc: "Create a powerful web presence for your business with modern, responsive designs.",
          icon: "🌐"
        },
        {
          title: "App Development",
          desc: "Launch your business on Android and iOS with native mobile applications.",
          icon: "📱"
        },
        {
          title: "eCommerce",
          desc: "Transform your business with a robust online shopping platform.",
          icon: "🛍️"
        }
      ].map((service, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer",
          children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: service.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-900", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: service.desc })
          ] })
        },
        index
      )) })
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
