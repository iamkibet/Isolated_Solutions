import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout } from "./AdminLayout-CEKlxWN6.js";
import { useForm, Head, router, Link } from "@inertiajs/react";
import { FaExchangeAlt, FaPlus, FaEdit, FaTrash, FaCogs, FaTimes } from "react-icons/fa";
const Index = ({ services, exchangeRates, currencySymbols: propCurrencySymbols, errors: pageErrors }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRatesModal, setShowRatesModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const { data: serviceData, setData: setServiceData, post: postService, patch: patchService, processing: processingService, reset: resetService, errors: formErrors } = useForm({
    service_key: "",
    name: "",
    category: "",
    description: "",
    packages: {}
  });
  const addPackageTier = () => {
    const tierKey = `tier_${Date.now()}`;
    const packages = { ...serviceData.packages };
    packages[tierKey] = {
      name: "",
      price: 0,
      description: "",
      features: []
    };
    setServiceData("packages", packages);
  };
  const removePackageTier = (tierKey) => {
    const packages = { ...serviceData.packages };
    delete packages[tierKey];
    setServiceData("packages", packages);
  };
  const servicesData = services || {};
  const servicesArray = Object.entries(servicesData).map(([serviceKey, service]) => ({
    key: serviceKey,
    name: service.name,
    category: service.category,
    description: service.description,
    packages: service.packages
  }));
  const categories = ["all", ...new Set(servicesArray.map((s) => s.category))];
  const filteredServices = selectedCategory === "all" ? servicesArray : servicesArray.filter((s) => s.category === selectedCategory);
  const rates = exchangeRates || { USD: 1, KES: 129.5, EUR: 0.92, GBP: 0.79 };
  const convertPrice = (usdPrice) => {
    return usdPrice * (rates[selectedCurrency] || 1);
  };
  const currencySymbols = propCurrencySymbols || {
    USD: "$",
    KES: "KSh",
    EUR: "€",
    GBP: "£"
  };
  const { data: ratesData, setData: setRatesData, post: postRates, processing: processingRates } = useForm({
    USD: rates.USD,
    KES: rates.KES,
    EUR: rates.EUR,
    GBP: rates.GBP
  });
  const handleUpdateRates = (e) => {
    e.preventDefault();
    postRates(route("admin.currency-rates.update"), {
      onSuccess: () => {
        setShowRatesModal(false);
        window.location.reload();
      }
    });
  };
  const handleOpenAddModal = () => {
    resetService();
    setShowAddModal(true);
  };
  const handleOpenEditModal = (service) => {
    setEditingService(service);
    const formattedPackages = {};
    Object.entries(service.packages).forEach(([tierKey, tierData]) => {
      formattedPackages[tierKey] = {
        name: tierData.name || "",
        price: tierData.price || 0,
        description: tierData.description || "",
        features: tierData.features || []
      };
    });
    setServiceData({
      service_key: service.key,
      name: service.name,
      category: service.category,
      description: service.description,
      packages: formattedPackages
    });
  };
  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(serviceData.packages).length === 0) {
      alert("Please add at least one package tier");
      return;
    }
    for (const [tierKey, tier] of Object.entries(serviceData.packages)) {
      if (!tier.features || tier.features.length === 0 || tier.features.every((f) => !f.trim())) {
        alert(`Package "${tier.name || tierKey}" must have at least one feature`);
        return;
      }
    }
    if (editingService) {
      patchService(route("admin.services.update", editingService.key), {
        onSuccess: () => {
          setEditingService(null);
          resetService();
        },
        onError: () => {
        }
      });
    } else {
      postService(route("admin.services.store"), {
        onSuccess: () => {
          setShowAddModal(false);
          resetService();
        },
        onError: () => {
        }
      });
    }
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { title: "Manage Services", children: [
    /* @__PURE__ */ jsx(Head, { title: "Manage Services" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Services & Pricing" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Manage your services, packages, and pricing" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: servicesArray.length }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Total Services" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200", children: /* @__PURE__ */ jsx(
            "select",
            {
              value: selectedCurrency,
              onChange: (e) => setSelectedCurrency(e.target.value),
              className: "px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-red-500 font-semibold text-gray-900 cursor-pointer",
              children: Object.keys(rates).map((currency) => /* @__PURE__ */ jsxs("option", { value: currency, children: [
                currency,
                " (",
                currencySymbols[currency],
                ")"
              ] }, currency))
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setShowRatesModal(true),
              className: "flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all",
              children: [
                /* @__PURE__ */ jsx(FaExchangeAlt, { className: "w-5 h-5" }),
                "Currency Rates"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleOpenAddModal,
              className: "flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all",
              children: [
                /* @__PURE__ */ jsx(FaPlus, { className: "w-5 h-5" }),
                "Add Service"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-6 overflow-x-auto pb-2", children: categories.map((category) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setSelectedCategory(category),
          className: `px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${selectedCategory === category ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`,
          children: [
            category === "all" ? "All Services" : category,
            category !== "all" && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-sm", children: [
              "(",
              servicesArray.filter((s) => s.category === category).length,
              ")"
            ] })
          ]
        },
        category
      )) }),
      filteredServices.length > 0 ? /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: filteredServices.map((service) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow",
          children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: service.name }),
                  /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full", children: service.category })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: service.description })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleOpenEditModal(service),
                    className: "p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                    title: "Edit service",
                    children: /* @__PURE__ */ jsx(FaEdit, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      if (confirm(`Are you sure you want to delete "${service.name}"? This action cannot be undone.`)) {
                        router.delete(route("admin.services.destroy", service.key));
                      }
                    },
                    className: "p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                    title: "Delete service",
                    children: /* @__PURE__ */ jsx(FaTrash, {})
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", children: Object.entries(service.packages).map(([tier, pkg]) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase text-gray-500", children: pkg.name }),
                    tier === "premium" && /* @__PURE__ */ jsx("span", { className: "text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full", children: "Popular" }),
                    tier === "enterprise" && /* @__PURE__ */ jsx("span", { className: "text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full", children: "Best" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm mt-1", children: currencySymbols[selectedCurrency] }),
                    /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-gray-900", children: convertPrice(pkg.price).toLocaleString(void 0, {
                      minimumFractionDigits: selectedCurrency === "USD" || selectedCurrency === "EUR" || selectedCurrency === "GBP" ? 2 : 0,
                      maximumFractionDigits: selectedCurrency === "USD" || selectedCurrency === "EUR" || selectedCurrency === "GBP" ? 2 : 0
                    }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: selectedCurrency })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: pkg.description })
                ]
              },
              tier
            )) })
          ] })
        },
        service.key
      )) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-12 bg-white rounded-xl border border-gray-200", children: [
        /* @__PURE__ */ jsx(FaCogs, { className: "mx-auto text-gray-400 text-5xl mb-4" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg", children: "No services found in this category" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSelectedCategory("all"),
            className: "mt-4 text-red-600 hover:text-red-700 font-semibold",
            children: "View all services"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blue-600 p-3 rounded-lg", children: /* @__PURE__ */ jsx(FaCogs, { className: "text-white text-xl" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Service Management" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-4", children: [
            "Currently, services are managed through the ",
            /* @__PURE__ */ jsx("code", { className: "bg-white px-2 py-1 rounded text-sm", children: "config/services_pricing.php" }),
            " file. You can add, edit, or delete services. Changes will update the configuration file automatically."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("admin.quotes.create"),
                className: "inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm",
                children: "Create Quote"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("admin.dashboard"),
                className: "inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm border border-gray-300",
                children: "Back to Dashboard"
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    showRatesModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Currency Exchange Rates" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Set exchange rates relative to USD (base currency)" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowRatesModal(false),
            className: "text-gray-400 hover:text-gray-600 p-2",
            children: /* @__PURE__ */ jsx(FaTimes, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdateRates, className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-800", children: [
            /* @__PURE__ */ jsx("strong", { children: "Note:" }),
            " All prices are in USD. These rates convert USD to other currencies for quotes."
          ] }) }),
          Object.entries(ratesData).map(([currency, rate]) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: [
              /* @__PURE__ */ jsx(FaExchangeAlt, { className: "inline mr-2" }),
              currency,
              " Exchange Rate",
              currency === "USD" && " (Base Currency)"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  step: "0.01",
                  value: rate,
                  onChange: (e) => setRatesData(currency, parseFloat(e.target.value)),
                  disabled: currency === "USD",
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
                "1 USD = ",
                rate,
                " ",
                currency
              ] })
            ] }),
            currency === "USD" && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Base currency cannot be changed" })
          ] }, currency))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowRatesModal(false),
              className: "px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: processingRates,
              className: "px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50",
              children: processingRates ? "Updating..." : "Update Rates"
            }
          )
        ] })
      ] })
    ] }) }),
    (showAddModal || editingService) && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900", children: editingService ? "Edit Service" : "Add New Service" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setShowAddModal(false);
              setEditingService(null);
            },
            className: "text-gray-400 hover:text-gray-600 p-2",
            children: /* @__PURE__ */ jsx(FaTimes, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleServiceSubmit, className: "p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-yellow-800", children: [
          /* @__PURE__ */ jsx("strong", { children: "Note:" }),
          " This will update the ",
          /* @__PURE__ */ jsx("code", { className: "bg-white px-2 py-1 rounded", children: "config/services_pricing.php" }),
          " file."
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Service Name *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g., Website Development",
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                value: serviceData.name,
                onChange: (e) => setServiceData("name", e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Category *" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500",
                  value: serviceData.category,
                  onChange: (e) => setServiceData("category", e.target.value),
                  required: true,
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Select category" }),
                    /* @__PURE__ */ jsx("option", { value: "Web Development", children: "Web Development" }),
                    /* @__PURE__ */ jsx("option", { value: "App Development", children: "App Development" }),
                    /* @__PURE__ */ jsx("option", { value: "E-commerce", children: "E-commerce" }),
                    /* @__PURE__ */ jsx("option", { value: "Consulting", children: "Consulting" }),
                    /* @__PURE__ */ jsx("option", { value: "DevOps", children: "DevOps" }),
                    /* @__PURE__ */ jsx("option", { value: "Cloud", children: "Cloud" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Service Key *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g., web_development",
                  className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 ${formErrors.service_key ? "border-red-500" : "border-gray-300"}`,
                  value: serviceData.service_key,
                  onChange: (e) => setServiceData("service_key", e.target.value.toLowerCase().replace(/\s+/g, "_")),
                  disabled: !!editingService,
                  required: true
                }
              ),
              formErrors.service_key && /* @__PURE__ */ jsx("p", { className: "text-red-600 text-xs mt-1", children: formErrors.service_key }),
              !editingService && serviceData.service_key && /* @__PURE__ */ jsxs("p", { className: "text-xs text-blue-600 mt-1", children: [
                "Will be saved as: ",
                /* @__PURE__ */ jsx("code", { className: "bg-blue-50 px-1 rounded", children: serviceData.service_key })
              ] }),
              editingService && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Service key cannot be changed" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Description *" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                rows: 2,
                placeholder: "Brief description of the service",
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",
                value: serviceData.description,
                onChange: (e) => setServiceData("description", e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-200 pt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900", children: "Package Tiers" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: addPackageTier,
                  className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm",
                  children: [
                    /* @__PURE__ */ jsx(FaPlus, { className: "w-4 h-4" }),
                    "Add Package Tier"
                  ]
                }
              )
            ] }),
            Object.keys(serviceData.packages).length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "No package tiers added yet" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: addPackageTier,
                  className: "inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(FaPlus, { className: "w-5 h-5" }),
                    "Add Your First Package Tier"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: Object.entries(serviceData.packages).map(([tierKey, tier]) => /* @__PURE__ */ jsxs("div", { className: "border-2 border-gray-300 rounded-lg p-5 bg-white relative", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => removePackageTier(tierKey),
                  className: "absolute top-3 right-3 text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors",
                  title: "Remove this package tier",
                  children: /* @__PURE__ */ jsx(FaTrash, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mb-4 pr-10", children: /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold text-gray-900", children: [
                "Package Tier #",
                Object.keys(serviceData.packages).indexOf(tierKey) + 1
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700 mb-1", children: "Tier Name *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "e.g., Basic, Pro, Ultimate",
                      className: "w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm font-medium",
                      value: (tier == null ? void 0 : tier.name) || "",
                      onChange: (e) => {
                        const packages = { ...serviceData.packages };
                        packages[tierKey].name = e.target.value;
                        setServiceData("packages", packages);
                      },
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700 mb-1", children: "Price (USD) *" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute left-3 top-2.5 text-gray-500", children: "$" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        step: "1",
                        min: "0",
                        placeholder: "0",
                        className: "w-full pl-8 pr-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm font-semibold",
                        value: (tier == null ? void 0 : tier.price) || "",
                        onChange: (e) => {
                          const packages = { ...serviceData.packages };
                          packages[tierKey].price = parseFloat(e.target.value) || 0;
                          setServiceData("packages", packages);
                        },
                        required: true
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700 mb-1", children: "Description *" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      rows: 2,
                      placeholder: "Describe this package tier...",
                      className: "w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm",
                      value: (tier == null ? void 0 : tier.description) || "",
                      onChange: (e) => {
                        const packages = { ...serviceData.packages };
                        packages[tierKey].description = e.target.value;
                        setServiceData("packages", packages);
                      },
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700", children: "Features *" }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          const packages = { ...serviceData.packages };
                          if (!packages[tierKey].features) {
                            packages[tierKey].features = [];
                          }
                          packages[tierKey].features.push("");
                          setServiceData("packages", packages);
                        },
                        className: "text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsx(FaPlus, { className: "w-3 h-3" }),
                          "Add Feature"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: [
                    ((tier == null ? void 0 : tier.features) || []).map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-green-600 text-xs", children: "✓" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          placeholder: "e.g., Responsive Design",
                          className: "flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm",
                          value: feature,
                          onChange: (e) => {
                            const packages = { ...serviceData.packages };
                            packages[tierKey].features[idx] = e.target.value;
                            setServiceData("packages", packages);
                          },
                          required: true
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            const packages = { ...serviceData.packages };
                            packages[tierKey].features.splice(idx, 1);
                            setServiceData("packages", packages);
                          },
                          className: "text-red-600 hover:bg-red-50 p-2 rounded",
                          children: /* @__PURE__ */ jsx(FaTimes, { className: "w-3 h-3" })
                        }
                      )
                    ] }, idx)),
                    (!(tier == null ? void 0 : tier.features) || tier.features.length === 0) && /* @__PURE__ */ jsxs("div", { className: "text-center py-4 bg-gray-50 rounded border border-dashed border-gray-300", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-2", children: "No features added yet" }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            const packages = { ...serviceData.packages };
                            if (!packages[tierKey].features) {
                              packages[tierKey].features = [];
                            }
                            packages[tierKey].features.push("");
                            setServiceData("packages", packages);
                          },
                          className: "text-xs text-blue-600 hover:text-blue-700 font-semibold",
                          children: "+ Add Your First Feature"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Add individual features that will appear as bullet points" })
                ] })
              ] })
            ] }, tierKey)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
            Object.keys(serviceData.packages).length,
            " package tier(s) added",
            Object.keys(serviceData.packages).length === 0 && /* @__PURE__ */ jsx("span", { className: "text-red-600 ml-2", children: "(Minimum 1 required)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setShowAddModal(false);
                  setEditingService(null);
                  resetService();
                },
                className: "px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: processingService || Object.keys(serviceData.packages).length === 0,
                className: "px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                children: processingService ? "Saving..." : editingService ? "Update Service" : "Add Service"
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Index as default
};
