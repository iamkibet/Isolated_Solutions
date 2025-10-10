import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useForm, router } from "@inertiajs/react";
import { useState } from "react";
import { DollarSign, CheckCircle, X, Check, ChevronUp, ChevronDown, AlertCircle, User, Mail, Building, Phone, FileText, Download } from "lucide-react";
function QuoteForm({ services, currencies, exchangeRates: propExchangeRates, currencySymbols: propCurrencySymbols }) {
  const [selectedServices, setSelectedServices] = useState({});
  const [expandedFeatures, setExpandedFeatures] = useState(/* @__PURE__ */ new Set());
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showClientForm, setShowClientForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [quoteInfo, setQuoteInfo] = useState(null);
  const { data, setData, post, processing, errors } = useForm({
    client_name: "",
    client_email: "",
    client_company: "",
    client_phone: "",
    selected_services: [],
    currency: "USD",
    notes: ""
  });
  const currencySymbols = propCurrencySymbols || {
    USD: "$",
    KES: "KSh",
    EUR: "€",
    GBP: "£"
  };
  const handlePackageSelect = (serviceKey, packageTier) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceKey]: packageTier
    }));
  };
  const handleRemoveService = (serviceKey) => {
    setSelectedServices((prev) => {
      const { [serviceKey]: _, ...rest } = prev;
      return rest;
    });
  };
  const toggleFeatures = (key) => {
    setExpandedFeatures((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setData("currency", currency);
  };
  const calculateTotal = () => {
    let total2 = 0;
    Object.entries(selectedServices).forEach(([serviceKey, tierKey]) => {
      const service = services[serviceKey];
      if (service && service.packages[tierKey]) {
        const price = service.packages[tierKey].price;
        const exchangeRate2 = exchangeRates[selectedCurrency] || 1;
        total2 += price * exchangeRate2;
      }
    });
    return total2;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const servicesArray = Object.entries(selectedServices).map(
      ([service_key, package_tier]) => ({
        service_key,
        package_tier
      })
    );
    if (servicesArray.length === 0) {
      alert("Please select at least one service package");
      return;
    }
    const submitData = {
      client_name: data.client_name,
      client_email: data.client_email,
      client_company: data.client_company,
      client_phone: data.client_phone,
      selected_services: servicesArray,
      currency: selectedCurrency,
      notes: data.notes
    };
    console.log("=== SUBMITTING QUOTE ===");
    console.log("Submit data:", submitData);
    setIsSubmitting(true);
    router.post(route("quotes.store"), submitData, {
      preserveScroll: true,
      onSuccess: (page) => {
        var _a, _b;
        console.log("✅ Quote submitted successfully!", page);
        console.log("Page props:", page.props);
        const props = page.props;
        console.log("Flash data:", props.flash);
        const quoteId = ((_a = props.flash) == null ? void 0 : _a.quote_id) || props.quote_id;
        const quoteNumber = ((_b = props.flash) == null ? void 0 : _b.quote_number) || props.quote_number;
        console.log("Quote ID:", quoteId, "Quote Number:", quoteNumber);
        if (quoteId && quoteNumber) {
          setQuoteInfo({ id: quoteId, number: quoteNumber });
          setShowDownloadPrompt(true);
          triggerDownload(quoteId);
        } else {
          console.error("❌ Quote ID or Number not found in response");
          alert("Quote created but unable to download. Please check admin panel.");
        }
      },
      onError: (errors2) => {
        console.error("❌ Quote submission errors:", errors2);
        alert("Error creating quote: " + JSON.stringify(errors2));
        setIsSubmitting(false);
      },
      onFinish: () => {
        console.log("Request finished");
        setIsSubmitting(false);
      }
    });
  };
  const triggerDownload = (quoteId) => {
    window.location.href = route("quotes.download", quoteId);
  };
  const servicesByCategory = Object.entries(services).reduce(
    (acc, [key, service]) => {
      const category = service.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({ key, ...service });
      return acc;
    },
    {}
  );
  const totalSelectedServices = Object.keys(selectedServices).length;
  const exchangeRates = propExchangeRates || {
    USD: 1,
    KES: 130,
    EUR: 0.92,
    GBP: 0.79
  };
  const exchangeRate = exchangeRates[selectedCurrency] || 1;
  const total = calculateTotal();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 p-3 md:p-4 mb-6 sticky top-16 z-20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 md:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsx(DollarSign, { className: "w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: selectedCurrency,
            onChange: (e) => handleCurrencyChange(e.target.value),
            className: "w-full md:w-auto px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 font-medium text-sm md:text-base",
            children: currencies.map((currency) => /* @__PURE__ */ jsxs("option", { value: currency, children: [
              currency,
              " (",
              currencySymbols[currency],
              ")"
            ] }, currency))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-gray-600", children: "Services:" }),
            /* @__PURE__ */ jsx("div", { className: "text-lg md:text-2xl font-bold text-gray-900", children: totalSelectedServices })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-gray-600", children: "Total:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-lg md:text-2xl font-bold text-red-600", children: [
              currencySymbols[selectedCurrency],
              " ",
              total.toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })
            ] })
          ] })
        ] }),
        totalSelectedServices > 0 && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowClientForm(true),
            className: "flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold shadow-lg transition-all text-sm md:text-base whitespace-nowrap",
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 md:w-5 md:h-5" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Generate Quote" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Generate" })
            ]
          }
        )
      ] })
    ] }) }),
    !showClientForm ? /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:space-y-8 px-4 md:px-0", children: [
      totalSelectedServices > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4", children: "Your Selected Services" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: Object.entries(selectedServices).map(([serviceKey, tierKey]) => {
          const service = services[serviceKey];
          const pkg = service == null ? void 0 : service.packages[tierKey];
          if (!service || !pkg) return null;
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg p-3 md:p-4 shadow-sm gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900 text-sm md:text-base truncate", children: service.name }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs md:text-sm text-gray-600 line-clamp-1", children: [
                pkg.name,
                " Package - ",
                pkg.description
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between sm:justify-end gap-3 sm:gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-left sm:text-right", children: /* @__PURE__ */ jsxs("div", { className: "text-base md:text-lg font-bold text-gray-900", children: [
                currencySymbols[selectedCurrency],
                " ",
                (pkg.price * exchangeRate).toLocaleString()
              ] }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleRemoveService(serviceKey),
                  className: "text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors flex-shrink-0",
                  children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4 md:w-5 md:h-5" })
                }
              )
            ] })
          ] }, serviceKey);
        }) })
      ] }),
      Object.entries(servicesByCategory).map(([category, categoryServices]) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-900 to-gray-800 px-4 md:px-6 py-3 md:py-4", children: /* @__PURE__ */ jsx("h2", { className: "text-lg md:text-2xl font-bold text-white", children: category }) }),
        /* @__PURE__ */ jsx("div", { className: "p-4 md:p-6 space-y-4 md:space-y-6", children: categoryServices.map((service) => /* @__PURE__ */ jsx("div", { className: `border-2 rounded-xl transition-all ${selectedServices[service.key] ? "border-red-500 bg-red-50/30" : "border-gray-200"}`, children: /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-4 md:mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2", children: service.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: service.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden", children: Object.entries(service.packages).map(([tierKey, pkg]) => {
            const isSelected = selectedServices[service.key] === tierKey;
            const featuresKey = `${service.key}-${tierKey}`;
            const isExpanded = expandedFeatures.has(featuresKey);
            const price = pkg.price * exchangeRate;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex flex-col h-full text-center bg-white transition-all ${isSelected ? "ring-4 ring-blue-600 ring-inset relative z-10 shadow-2xl" : "hover:shadow-lg"}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "pt-4 md:pt-8 pb-3 md:pb-5 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsx("h4", { className: "font-medium text-base md:text-lg text-gray-800", children: pkg.name }) }),
                  /* @__PURE__ */ jsxs("div", { className: "h-auto bg-white py-3 md:py-5 px-4 md:px-8", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-center gap-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-lg md:text-2xl text-gray-600 -mt-1", children: currencySymbols[selectedCurrency] }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-3xl md:text-5xl text-gray-800", children: price.toLocaleString(void 0, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }) })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs md:text-sm text-gray-600 line-clamp-2", children: pkg.description })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white flex justify-center pt-4 md:pt-7 px-4 md:px-8 flex-1", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 md:space-y-2.5 text-center text-xs md:text-sm", children: [
                    pkg.features && pkg.features.slice(0, isExpanded ? void 0 : 8).map((feature, idx) => /* @__PURE__ */ jsx("li", { className: "text-gray-800", children: feature }, idx)),
                    pkg.features && pkg.features.length > 8 && !isExpanded && /* @__PURE__ */ jsxs("li", { className: "text-gray-500 italic text-xs", children: [
                      "+",
                      pkg.features.length - 8,
                      " more features"
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white py-4 md:py-8 px-4 md:px-8", children: [
                    isSelected ? /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => handleRemoveService(service.key),
                        className: "py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 transition-all shadow-md",
                        children: [
                          /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }),
                          "Selected"
                        ]
                      }
                    ) : /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => handlePackageSelect(service.key, tierKey),
                        className: "py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 transition-all",
                        children: "Select Package"
                      }
                    ),
                    pkg.features && pkg.features.length > 8 && /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        onClick: (e) => {
                          e.stopPropagation();
                          toggleFeatures(featuresKey);
                        },
                        className: "mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 w-full justify-center",
                        children: isExpanded ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(ChevronUp, { className: "w-3 h-3" }),
                          "Show less"
                        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx(ChevronDown, { className: "w-3 h-3" }),
                          "View all features"
                        ] })
                      }
                    )
                  ] })
                ]
              },
              tierKey
            );
          }) })
        ] }) }, service.key)) })
      ] }, category)),
      totalSelectedServices === 0 && /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 text-center", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold text-gray-900 mb-2", children: "No Services Selected" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: "Browse our services above and select the packages that fit your needs" })
      ] })
    ] }) : (
      /* Client Details Form */
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold text-gray-900", children: "Your Details" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowClientForm(false),
              className: "text-gray-600 hover:text-gray-900 flex items-center gap-2 font-medium text-sm md:text-base",
              children: "← Back to Services"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(User, { className: "w-4 h-4" }),
                "Full Name *"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: data.client_name,
                  onChange: (e) => setData("client_name", e.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                  required: true
                }
              ),
              errors.client_name && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.client_name })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                "Email Address *"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  value: data.client_email,
                  onChange: (e) => setData("client_email", e.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                  required: true
                }
              ),
              errors.client_email && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-sm mt-1", children: errors.client_email })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Building, { className: "w-4 h-4" }),
                "Company Name"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: data.client_company,
                  onChange: (e) => setData("client_company", e.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
                "Phone Number"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  value: data.client_phone,
                  onChange: (e) => setData("client_phone", e.target.value),
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
              "Additional Notes"
            ] }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                value: data.notes,
                onChange: (e) => setData("notes", e.target.value),
                rows: 4,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                placeholder: "Any specific requirements or questions..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg", children: "Quote Summary" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              Object.entries(selectedServices).map(([serviceKey, tierKey]) => {
                const service = services[serviceKey];
                const pkg = service == null ? void 0 : service.packages[tierKey];
                if (!service || !pkg) return null;
                return /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs md:text-sm gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-gray-700 truncate flex-1", children: [
                    service.name,
                    " - ",
                    pkg.name
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "font-semibold text-gray-900 whitespace-nowrap", children: [
                    currencySymbols[selectedCurrency],
                    " ",
                    (pkg.price * exchangeRate).toLocaleString()
                  ] })
                ] }, serviceKey);
              }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-300 pt-2 md:pt-3 mt-2 md:mt-3 flex justify-between text-base md:text-lg", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-gray-900", children: [
                  "Total (",
                  selectedCurrency,
                  ")"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-red-600", children: [
                  currencySymbols[selectedCurrency],
                  " ",
                  total.toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all disabled:opacity-50 shadow-lg",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 md:w-5 md:h-5" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: isSubmitting ? "Generating Quote..." : "Generate & Download PDF Quote" }),
                /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: isSubmitting ? "Generating..." : "Generate PDF" })
              ]
            }
          )
        ] })
      ] }) })
    ),
    isSubmitting && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-8 max-w-md mx-4 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Generating Your Quote" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Please wait while we prepare your PDF quote..." })
    ] }) }),
    showDownloadPrompt && quoteInfo && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-8 max-w-md mx-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-10 w-10 text-green-600" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Quote Generated!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
          "Quote ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: quoteInfo.number }),
          " has been created successfully."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800 text-center", children: "Your PDF download should start automatically. If it doesn't, click the button below." }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => triggerDownload(quoteInfo.id),
            className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
              "Download Quote PDF"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setShowDownloadPrompt(false);
              setShowClientForm(false);
              setSelectedServices({});
              setData({
                client_name: "",
                client_email: "",
                client_company: "",
                client_phone: "",
                selected_services: [],
                currency: "USD",
                notes: ""
              });
            },
            className: "w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all",
            children: "Create Another Quote"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  QuoteForm as Q
};
