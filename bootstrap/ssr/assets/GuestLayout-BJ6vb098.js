import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { F as Footer } from "./Footer-COPzkF9E.js";
import { N as Navbar } from "./Navbar-CqUCT1rs.js";
import { Settings, X, Cookie } from "lucide-react";
import { Link } from "@inertiajs/react";
const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    // Always true, can't be disabled
    analytics: false,
    marketing: false
  });
  useEffect(() => {
    setIsClient(true);
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1e3);
    } else {
      try {
        const savedPrefs = JSON.parse(consent);
        setPreferences(savedPrefs);
      } catch (e) {
        console.error("Error loading cookie preferences:", e);
        setTimeout(() => setShowBanner(true), 1e3);
      }
    }
  }, []);
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie_consent", JSON.stringify(allAccepted));
    localStorage.setItem("cookie_consent_date", (/* @__PURE__ */ new Date()).toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };
  const handleAcceptSelected = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    localStorage.setItem("cookie_consent_date", (/* @__PURE__ */ new Date()).toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };
  const handleRejectAll = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("cookie_consent", JSON.stringify(necessaryOnly));
    localStorage.setItem("cookie_consent_date", (/* @__PURE__ */ new Date()).toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };
  if (!showBanner) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: showSettings ? (
    // Settings Panel
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6 text-orange-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-gray-900", children: "Cookie Preferences" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Customize your cookie settings" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowSettings(false),
            className: "text-gray-400 hover:text-gray-600 p-2",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Necessary Cookies" }),
              /* @__PURE__ */ jsx("span", { className: "bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium", children: "Always Active" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Essential for the website to function properly. Cannot be disabled." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-6 bg-green-600 rounded-full cursor-not-allowed opacity-50" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Analytics Cookies" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Help us understand how visitors interact with our website." })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setPreferences({ ...preferences, analytics: !preferences.analytics }),
              className: "ml-4",
              children: /* @__PURE__ */ jsx("div", { className: `w-12 h-6 rounded-full transition-colors ${preferences.analytics ? "bg-green-600" : "bg-gray-300"}`, children: /* @__PURE__ */ jsx("div", { className: `w-5 h-5 bg-white rounded-full transition-transform ${preferences.analytics ? "translate-x-7" : "translate-x-0.5"} mt-0.5` }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Marketing Cookies" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Used to deliver personalized advertisements." })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setPreferences({ ...preferences, marketing: !preferences.marketing }),
              className: "ml-4",
              children: /* @__PURE__ */ jsx("div", { className: `w-12 h-6 rounded-full transition-colors ${preferences.marketing ? "bg-green-600" : "bg-gray-300"}`, children: /* @__PURE__ */ jsx("div", { className: `w-5 h-5 bg-white rounded-full transition-transform ${preferences.marketing ? "translate-x-7" : "translate-x-0.5"} mt-0.5` }) })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-end", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRejectAll,
            className: "px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all",
            children: "Reject All"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAcceptSelected,
            className: "px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-all",
            children: "Save Preferences"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAcceptAll,
            className: "px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg",
            children: "Accept All"
          }
        )
      ] })
    ] })
  ) : (
    // Simple Banner
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Cookie, { className: "w-6 h-6 text-orange-600" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-gray-900 mb-2", children: "We Value Your Privacy" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm md:text-base text-gray-600 leading-relaxed", children: [
            'We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
            " ",
            /* @__PURE__ */ jsx(Link, { href: "/privacy-policy", className: "text-red-600 hover:text-red-700 font-semibold underline", children: "Learn more" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full md:w-auto", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShowSettings(true),
            className: "px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all whitespace-nowrap",
            children: [
              /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4 inline mr-2" }),
              "Customize"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRejectAll,
            className: "px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all",
            children: "Reject"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAcceptAll,
            className: "px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all shadow-lg whitespace-nowrap",
            children: "Accept All"
          }
        )
      ] })
    ] }) })
  ) }) });
};
function Guest({ children }) {
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
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen bg-[#f5f5f5]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow bg-[#f5f5f5]", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CookieConsent, {})
  ] });
}
export {
  Guest as G
};
