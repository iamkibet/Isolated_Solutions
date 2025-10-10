import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-BJ6vb098.js";
import { MapPin, Phone, Mail, Users, MessageCircle, Linkedin, ArrowRight, FileText, CheckCircle, AlertCircle, User, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import "./Footer-COPzkF9E.js";
import "./BorderHover-B9-ZQGRi.js";
import "classnames";
import "./MaxWidthWrapper-CAY6djl-.js";
import "./Navbar-CqUCT1rs.js";
import "./ApplicationLogo-CW9JHW1H.js";
import "react-icons/io";
import "react-icons/hi";
const profilePic = "/build/assets/Profilepic-DUO2ZsJd.jpg";
const kenyaFlag = "/build/assets/kenya-CWd00ahA.png";
const ContactBottom = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-red-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Our Location" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: kenyaFlag,
                alt: "Kenya",
                className: "w-8 h-8 object-contain mt-1"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Kenya" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Eldoret (Headquarters)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 pl-11", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-gray-400 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm", children: [
                "Daima Towers, 5th Floor",
                /* @__PURE__ */ jsx("br", {}),
                "P.O. Box 2004-30100"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+254720449012",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm",
                  children: "+254 720 449 012"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+254777449012",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm",
                  children: "+254 777 449 012"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "mailto:support@isolatedsolutions.com",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm break-all",
                  children: "support@isolatedsolutions.com"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-blue-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Contact Person" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: profilePic,
                alt: "Dennis Kibet",
                className: "w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Dennis Kibet" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Chief Technology Officer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "mailto:info@isolatedsolutions.org",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm break-all",
                  children: "info@isolatedsolutions.org"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://api.whatsapp.com/send?phone=254720449012",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm",
                  children: "WhatsApp: +254 720 449 012"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4 text-gray-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.linkedin.com/in/denniskibet/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-red-600 hover:text-red-700 font-medium text-sm",
                  children: "DennisKibet"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Free Consultation" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: "Looking to bring your great product to life but facing challenges along the way? Let's discuss your project!" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://api.whatsapp.com/send?phone=254720449012",
              className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
                "Book Free Consultation"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-red-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 text-red-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl font-bold text-gray-900", children: "Quick Chat" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-5 leading-relaxed text-sm md:text-base", children: "Let's have a quick chat about your plans, ideas, and project requirements. Get instant responses!" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://api.whatsapp.com/send?phone=254720449012",
            className: "inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold group text-sm md:text-base",
            children: [
              "Start Live Chat",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-blue-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-blue-600" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-xl font-bold text-gray-900", children: "Share Documents" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-5 leading-relaxed text-sm md:text-base", children: "Share your NDA, BRD & project-related details via email. We'll reach out at the earliest." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:info@isolatedsolutions.com",
            className: "inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group text-sm md:text-base break-all",
            children: [
              "Send Email",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 md:p-8 border-t-4 border-green-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-green-600" }) }),
          /* @__PURE__ */ jsxs("h2", { className: "text-lg md:text-xl font-bold text-gray-900", children: [
            "We Are ",
            /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "Not" }),
            " Hiring"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-5 leading-relaxed text-sm md:text-base", children: "Be part of our vision to deliver effective, efficient & elegant solutions." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://api.whatsapp.com/send?phone=254720449012",
            className: "inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group text-sm md:text-base",
            children: [
              "View Opportunities",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
const ContactForm = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await axios.post(route("contact.store"), data);
      setSuccess(true);
      reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "py-8 lg:py-16 px-4 mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-red-600 to-red-700 px-6 md:px-12 py-10 md:py-12 text-white", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("p", { className: "text-red-50 text-base md:text-lg max-w-2xl mx-auto", children: "Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 py-8 md:py-10", children: success ? /* @__PURE__ */ jsxs("div", { className: "text-center py-12 space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-12 h-12 text-green-600" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: "Message Sent Successfully!" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Thank you for contacting us. We'll get back to you within 24 hours." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSuccess(false),
          className: "mt-4 inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold",
          children: "Send Another Message"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      error && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-red-600 flex-shrink-0" }),
        /* @__PURE__ */ jsx("p", { className: "text-red-800 text-sm", children: error })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-gray-500" }),
            "Your Name *"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              name: "name",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all",
              placeholder: "John Doe",
              required: true
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gray-500" }),
            "Your Email *"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all",
              placeholder: "john@example.com",
              required: true
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 text-gray-500" }),
          "Subject *"
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "subject",
            value: data.subject,
            onChange: (e) => setData("subject", e.target.value),
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all",
            placeholder: "How can we help you?",
            required: true
          }
        ),
        errors.subject && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.subject })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 text-gray-500" }),
          "Your Message *"
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            rows: 6,
            value: data.message,
            onChange: (e) => setData("message", e.target.value),
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none",
            placeholder: "Tell us more about your project or inquiry...",
            required: true
          }
        ),
        errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.message })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-2", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: processing || submitting,
          className: "w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
          children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
            "Sending..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" }),
            "Send Message"
          ] })
        }
      ) })
    ] }) })
  ] }) });
};
const Contact = () => {
  return /* @__PURE__ */ jsx(Guest, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto p-3", children: [
    /* @__PURE__ */ jsx(ContactForm, {}),
    /* @__PURE__ */ jsx(ContactBottom, {})
  ] }) });
};
export {
  Contact as default
};
