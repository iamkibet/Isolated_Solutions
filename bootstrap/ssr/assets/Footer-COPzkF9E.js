import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { B as BorderHover } from "./BorderHover-B9-ZQGRi.js";
import classnames from "classnames";
import { M as MaxWidthWrapper } from "./MaxWidthWrapper-CAY6djl-.js";
const FooterLink = ({
  href,
  children
}) => /* @__PURE__ */ jsx("li", { className: "mb-3 hover:text-red-600 transition-colors duration-200", children: /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx("a", { href, className: "text-gray-600 hover:text-red-600", children }) }) });
const SocialIcon = ({ icon, href, label }) => /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx(
  "a",
  {
    href,
    className: "text-gray-600 hover:text-red-600 hover:scale-110 transition-all duration-200",
    "aria-label": label,
    children: icon
  }
) });
const FOOTER_SECTIONS = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Products", href: "/products" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" }
    ]
  },
  {
    title: "Services",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/app-development" },
      { label: "UI/UX Design", href: "#" },
      { label: "Cloud Migration", href: "#" },
      { label: "DevOps & CI/CD", href: "#" },
      { label: "Digital Transformation", href: "#" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Get a Quote", href: "/quotes" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Portfolio", href: "#" }
    ]
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Cookie Policy", href: "/privacy-policy#cookies" }
    ]
  }
];
const SOCIAL_LINKS = [
  {
    label: "Facebook page",
    href: "#",
    icon: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 8 19", children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
      }
    ) })
  }
  // Add other social links similarly
];
const MobileFooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((prev) => !prev),
        className: "flex justify-between items-center w-full text-left py-2",
        "aria-expanded": isOpen,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-base font-semibold text-gray-800", children: title }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: classnames(
                "text-xl transition-transform duration-200",
                {
                  "rotate-0": isOpen,
                  "rotate-180": !isOpen
                }
              ),
              children: isOpen ? "-" : "+"
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("ul", { className: "pl-4 space-y-2 text-base font-normal text-gray-600", children })
  ] });
};
const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage("🎉 Successfully subscribed! Check your email.");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5e3);
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5e3);
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5e3);
    }
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "newsletter-email",
        className: "block text-sm font-medium text-gray-700 mb-1",
        children: "Subscribe to our newsletter"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "newsletter-email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          className: "flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors text-sm",
          placeholder: "Enter your email",
          required: true,
          disabled: status === "loading"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: status === "loading",
          className: "bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-sm",
          children: status === "loading" ? "Sending..." : "Subscribe"
        }
      )
    ] }),
    message && /* @__PURE__ */ jsx("p", { className: `text-xs mt-2 ${status === "success" ? "text-green-600" : "text-red-600"}`, children: message })
  ] }) });
};
const Footer = () => {
  const renderDesktopSection = (section) => /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-gray-800 tracking-wider", children: section.title }),
    /* @__PURE__ */ jsx("ul", { className: "text-sm font-medium", children: section.items.map((item, index) => /* @__PURE__ */ jsx(FooterLink, { href: item.href, children: item.label }, index)) })
  ] }, section.title);
  const renderMobileSection = (section) => /* @__PURE__ */ jsx(MobileFooterAccordion, { title: section.title, children: section.items.map((item, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    "a",
    {
      href: item.href,
      className: "hover:text-red-600 transition-colors duration-200",
      children: item.label
    }
  ) }, index)) }, section.title);
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-50 text-gray-800 border-t border-gray-200", children: /* @__PURE__ */ jsxs(MaxWidthWrapper, { children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden md:block", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 lg:gap-12 py-12 md:grid-cols-5 border-b border-gray-200", children: [
        FOOTER_SECTIONS.map(renderDesktopSection),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-6 text-sm font-semibold uppercase text-gray-800 tracking-wider", children: "Newsletter" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600 mb-4", children: "Stay updated with our latest news and updates." }),
          /* @__PURE__ */ jsx(NewsletterSubscription, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(FooterLegalSection, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden py-8", children: [
      FOOTER_SECTIONS.map(renderMobileSection),
      /* @__PURE__ */ jsxs(MobileFooterAccordion, { title: "Newsletter", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Stay updated with our latest news and updates." }),
        /* @__PURE__ */ jsx(NewsletterSubscription, {})
      ] }),
      /* @__PURE__ */ jsx(MobileFooterAccordion, { title: "Socials", children: /* @__PURE__ */ jsx("div", { className: "flex gap-6 pt-4", children: SOCIAL_LINKS.map((props, index) => /* @__PURE__ */ jsx(SocialIcon, { ...props }, index)) }) })
    ] })
  ] }) });
};
const FooterLegalSection = () => /* @__PURE__ */ jsxs("div", { className: "py-8 md:flex items-center justify-between", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-2/3", children: [
    /* @__PURE__ */ jsxs("span", { className: "mb-4 md:mb-0 text-sm text-gray-600", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://isolatedsolutions.org/",
          className: "text-red-600 hover:text-red-700",
          children: "IsolatedSolutions™"
        }
      ),
      ". All Rights Reserved."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-x-6", children: [
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/privacy-policy",
          className: "text-sm text-gray-600 hover:text-red-600 transition-colors duration-200",
          children: "Privacy Policy"
        }
      ) }),
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/terms-of-use",
          className: "text-sm text-gray-600 hover:text-red-600 transition-colors duration-200",
          children: "Terms of Use"
        }
      ) }),
      /* @__PURE__ */ jsx(BorderHover, { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/privacy-policy#cookies",
          className: "text-sm text-gray-600 hover:text-red-600 transition-colors duration-200",
          children: "Cookie Policy"
        }
      ) })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "flex mt-6 md:mt-0 space-x-6", children: SOCIAL_LINKS.map((props, index) => /* @__PURE__ */ jsx(SocialIcon, { ...props }, index)) })
] });
export {
  Footer as F
};
