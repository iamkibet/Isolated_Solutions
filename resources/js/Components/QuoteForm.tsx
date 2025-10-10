import { useForm, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import { 
    Download,
    CheckCircle,
    DollarSign,
    AlertCircle,
    Check,
    ChevronDown,
    ChevronUp,
    X,
    User,
    Mail,
    Building,
    Phone,
    FileText
} from "lucide-react";

interface Package {
    name: string;
    price: number;
    description: string;
    features: string[];
}

interface Service {
    name: string;
    category: string;
    description: string;
    packages: {
        [key: string]: Package;
    };
}

interface Services {
    [key: string]: Service;
}

interface Props {
    services: Services;
    currencies: string[];
    exchangeRates?: Record<string, number>;
    currencySymbols?: Record<string, string>;
}

interface SelectedService {
    service_key: string;
    package_tier: string;
}

interface FormData {
    client_name: string;
    client_email: string;
    client_company: string;
    client_phone: string;
    selected_services: SelectedService[];
    currency: string;
    notes: string;
}

interface PricingPreview {
    total: number;
    exchange_rate: number;
}

export default function QuoteForm({ services, currencies, exchangeRates: propExchangeRates, currencySymbols: propCurrencySymbols }: Props) {
    const [selectedServices, setSelectedServices] = useState<Record<string, string>>({});
    const [expandedFeatures, setExpandedFeatures] = useState<Set<string>>(new Set());
    const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
    const [showClientForm, setShowClientForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
    const [quoteInfo, setQuoteInfo] = useState<{id: number, number: string} | null>(null);

    const { data, setData, post, processing, errors } = useForm<FormData>({
        client_name: "",
        client_email: "",
        client_company: "",
        client_phone: "",
        selected_services: [],
        currency: "USD",
        notes: "",
    });

    // Use currency symbols from props (database) or fallback to defaults
    const currencySymbols: Record<string, string> = propCurrencySymbols || {
        USD: "$",
        KES: "KSh",
        EUR: "€",
        GBP: "£",
    };

    const handlePackageSelect = (serviceKey: string, packageTier: string) => {
        setSelectedServices((prev) => ({
            ...prev,
            [serviceKey]: packageTier,
        }));
    };

    const handleRemoveService = (serviceKey: string) => {
        setSelectedServices((prev) => {
            const { [serviceKey]: _, ...rest } = prev;
            return rest;
        });
    };

    const toggleFeatures = (key: string) => {
        setExpandedFeatures(prev => {
            const newSet = new Set(prev);
            if (newSet.has(key)) {
                newSet.delete(key);
            } else {
                newSet.add(key);
            }
            return newSet;
        });
    };

    const handleCurrencyChange = (currency: string) => {
        setSelectedCurrency(currency);
        setData("currency", currency);
    };

    const calculateTotal = () => {
        let total = 0;
        Object.entries(selectedServices).forEach(([serviceKey, tierKey]) => {
            const service = services[serviceKey];
            if (service && service.packages[tierKey]) {
                const price = service.packages[tierKey].price;
                const exchangeRate = exchangeRates[selectedCurrency] || 1;
                total += price * exchangeRate;
            }
        });
        return total;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const servicesArray = Object.entries(selectedServices).map(
            ([service_key, package_tier]) => ({
                service_key,
                package_tier,
            })
        );

        if (servicesArray.length === 0) {
            alert("Please select at least one service package");
            return;
        }

        // Prepare complete submission data
        const submitData = {
            client_name: data.client_name,
            client_email: data.client_email,
            client_company: data.client_company,
            client_phone: data.client_phone,
            selected_services: servicesArray,
            currency: selectedCurrency,
            notes: data.notes,
        };

        console.log('=== SUBMITTING QUOTE ===');
        console.log('Submit data:', submitData);

        setIsSubmitting(true);

        // Use router.post directly to ensure data is sent correctly
        router.post(route("quotes.store"), submitData, {
            preserveScroll: true,
            onSuccess: (page) => {
                console.log('✅ Quote submitted successfully!', page);
                console.log('Page props:', page.props);
                
                // Extract quote info from flash messages
                const props = page.props as any;
                console.log('Flash data:', props.flash);
                
                // Check multiple possible locations for the data
                const quoteId = props.flash?.quote_id || props.quote_id;
                const quoteNumber = props.flash?.quote_number || props.quote_number;
                
                console.log('Quote ID:', quoteId, 'Quote Number:', quoteNumber);
                
                if (quoteId && quoteNumber) {
                    setQuoteInfo({ id: quoteId, number: quoteNumber });
                    setShowDownloadPrompt(true);
                    
                    // Trigger PDF download immediately
                    triggerDownload(quoteId);
                } else {
                    console.error('❌ Quote ID or Number not found in response');
                    alert('Quote created but unable to download. Please check admin panel.');
                }
            },
            onError: (errors) => {
                console.error('❌ Quote submission errors:', errors);
                alert('Error creating quote: ' + JSON.stringify(errors));
                setIsSubmitting(false);
            },
            onFinish: () => {
                console.log('Request finished');
                setIsSubmitting(false);
            },
        });
    };

    const triggerDownload = (quoteId: number) => {
        // Use window.location.href to trigger download (bypasses Inertia)
        window.location.href = route('quotes.download', quoteId);
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
        {} as Record<string, Array<{ key: string } & Service>>
    );

    const totalSelectedServices = Object.keys(selectedServices).length;

    // Use exchange rates from props (database) or fallback to defaults
    const exchangeRates: Record<string, number> = propExchangeRates || {
        USD: 1.0,
        KES: 130.0,
        EUR: 0.92,
        GBP: 0.79,
    };
    const exchangeRate = exchangeRates[selectedCurrency] || 1;
    const total = calculateTotal();

    return (
        <>
            {/* Currency Selector - Top Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 md:p-4 mb-6 sticky top-20 z-20">
                <div className="flex flex-col gap-3 md:gap-4">
                    {/* Currency Selector - Full width on mobile */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0" />
                        <select
                            value={selectedCurrency}
                            onChange={(e) => handleCurrencyChange(e.target.value)}
                            className="w-full md:w-auto px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 font-medium text-sm md:text-base"
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency} ({currencySymbols[currency]})
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Summary Stats and Button */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-2">
                                <div className="text-xs md:text-sm text-gray-600">Services:</div>
                                <div className="text-lg md:text-2xl font-bold text-gray-900">{totalSelectedServices}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-xs md:text-sm text-gray-600">Total:</div>
                                <div className="text-lg md:text-2xl font-bold text-red-600">
                                    {currencySymbols[selectedCurrency]} {total.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </div>
                            </div>
                        </div>
                        {totalSelectedServices > 0 && (
                            <button
                                type="button"
                                onClick={() => setShowClientForm(true)}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold shadow-lg transition-all text-sm md:text-base whitespace-nowrap"
                            >
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="hidden sm:inline">Generate Quote</span>
                                <span className="sm:hidden">Generate</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {!showClientForm ? (
                <div className="space-y-6 md:space-y-8 px-4 md:px-0">
                    {/* Selected Services Summary */}
                    {totalSelectedServices > 0 && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 md:p-6">
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">Your Selected Services</h3>
                            <div className="space-y-3">
                                {Object.entries(selectedServices).map(([serviceKey, tierKey]) => {
                                    const service = services[serviceKey];
                                    const pkg = service?.packages[tierKey];
                                    if (!service || !pkg) return null;
                                    
                                    return (
                                        <div key={serviceKey} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg p-3 md:p-4 shadow-sm gap-3">
                                            <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-gray-900 text-sm md:text-base truncate">{service.name}</div>
                                                <div className="text-xs md:text-sm text-gray-600 line-clamp-1">{pkg.name} Package - {pkg.description}</div>
                                            </div>
                                            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                                                <div className="text-left sm:text-right">
                                                    <div className="text-base md:text-lg font-bold text-gray-900">
                                                        {currencySymbols[selectedCurrency]} {(pkg.price * exchangeRate).toLocaleString()}
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveService(serviceKey)}
                                                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors flex-shrink-0"
                                                >
                                                    <X className="w-4 h-4 md:w-5 md:h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Services by Category */}
                    {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                        <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 md:px-6 py-3 md:py-4">
                                <h2 className="text-lg md:text-2xl font-bold text-white">{category}</h2>
                            </div>

                            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                                {categoryServices.map((service) => (
                                    <div key={service.key} className={`border-2 rounded-xl transition-all ${
                                        selectedServices[service.key] ? "border-red-500 bg-red-50/30" : "border-gray-200"
                                    }`}>
                                        <div className="p-4 md:p-6">
                                            <div className="mb-4 md:mb-6">
                                                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{service.name}</h3>
                                                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                                            </div>

                                            {/* Package Options */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden">
                                                {Object.entries(service.packages).map(([tierKey, pkg]) => {
                                                    const isSelected = selectedServices[service.key] === tierKey;
                                                    const featuresKey = `${service.key}-${tierKey}`;
                                                    const isExpanded = expandedFeatures.has(featuresKey);
                                                    const price = pkg.price * exchangeRate;

                                                    return (
                                                        <div
                                                            key={tierKey}
                                                            className={`flex flex-col h-full text-center bg-white transition-all ${
                                                                isSelected 
                                                                    ? "ring-4 ring-blue-600 ring-inset relative z-10 shadow-2xl" 
                                                                    : "hover:shadow-lg"
                                                            }`}
                                                        >
                                                            {/* Package Name */}
                                                            <div className="pt-4 md:pt-8 pb-3 md:pb-5 px-4 md:px-8 bg-white">
                                                                <h4 className="font-medium text-base md:text-lg text-gray-800">{pkg.name}</h4>
                                                            </div>

                                                            {/* Price */}
                                                            <div className="h-auto bg-white py-3 md:py-5 px-4 md:px-8">
                                                                <div className="flex items-baseline justify-center gap-1">
                                                                    <span className="font-bold text-lg md:text-2xl text-gray-600 -mt-1">{currencySymbols[selectedCurrency]}</span>
                                                                    <span className="font-bold text-3xl md:text-5xl text-gray-800">
                                                                        {price.toLocaleString(undefined, {
                                                                            minimumFractionDigits: 0,
                                                                            maximumFractionDigits: 0,
                                                                        })}
                                                                    </span>
                                                                </div>
                                                                <p className="mt-2 text-xs md:text-sm text-gray-600 line-clamp-2">{pkg.description}</p>
                                                            </div>

                                                            {/* Features */}
                                                            <div className="bg-white flex justify-center pt-4 md:pt-7 px-4 md:px-8 flex-1">
                                                                <ul className="space-y-2 md:space-y-2.5 text-center text-xs md:text-sm">
                                                                    {pkg.features && pkg.features.slice(0, isExpanded ? undefined : 8).map((feature, idx) => (
                                                                        <li key={idx} className="text-gray-800">
                                                                            {feature}
                                                                        </li>
                                                                    ))}
                                                                    {pkg.features && pkg.features.length > 8 && !isExpanded && (
                                                                        <li className="text-gray-500 italic text-xs">
                                                                            +{pkg.features.length - 8} more features
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </div>

                                                            {/* Action Button */}
                                                            <div className="bg-white py-4 md:py-8 px-4 md:px-8">
                                                                {isSelected ? (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleRemoveService(service.key)}
                                                                        className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700 transition-all shadow-md"
                                                                    >
                                                                        <Check className="w-4 h-4" />
                                                                        Selected
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handlePackageSelect(service.key, tierKey)}
                                                                        className="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 transition-all"
                                                                    >
                                                                        Select Package
                                                                    </button>
                                                                )}
                                                                {pkg.features && pkg.features.length > 8 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            toggleFeatures(featuresKey);
                                                                        }}
                                                                        className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 w-full justify-center"
                                                                    >
                                                                        {isExpanded ? (
                                                                            <>
                                                                                <ChevronUp className="w-3 h-3" />
                                                                                Show less
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <ChevronDown className="w-3 h-3" />
                                                                                View all features
                                                                            </>
                                                                        )}
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {totalSelectedServices === 0 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 text-center">
                            <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">No Services Selected</h3>
                            <p className="text-sm md:text-base text-gray-600">
                                Browse our services above and select the packages that fit your needs
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                /* Client Details Form */
                <div className="max-w-3xl mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Your Details</h2>
                            <button
                                type="button"
                                onClick={() => setShowClientForm(false)}
                                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 font-medium text-sm md:text-base"
                            >
                                ← Back to Services
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.client_name}
                                        onChange={(e) => setData("client_name", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.client_name && (
                                        <p className="text-red-600 text-sm mt-1">{errors.client_name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={data.client_email}
                                        onChange={(e) => setData("client_email", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.client_email && (
                                        <p className="text-red-600 text-sm mt-1">{errors.client_email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Building className="w-4 h-4" />
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        value={data.client_company}
                                        onChange={(e) => setData("client_company", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.client_phone}
                                        onChange={(e) => setData("client_phone", e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Additional Notes
                                </label>
                                <textarea
                                    value={data.notes}
                                    onChange={(e) => setData("notes", e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    placeholder="Any specific requirements or questions..."
                                />
                            </div>

                            {/* Summary Before Submit */}
                            <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">Quote Summary</h3>
                                <div className="space-y-2">
                                    {Object.entries(selectedServices).map(([serviceKey, tierKey]) => {
                                        const service = services[serviceKey];
                                        const pkg = service?.packages[tierKey];
                                        if (!service || !pkg) return null;
                                        
                                        return (
                                            <div key={serviceKey} className="flex justify-between text-xs md:text-sm gap-2">
                                                <span className="text-gray-700 truncate flex-1">{service.name} - {pkg.name}</span>
                                                <span className="font-semibold text-gray-900 whitespace-nowrap">
                                                    {currencySymbols[selectedCurrency]} {(pkg.price * exchangeRate).toLocaleString()}
                                                </span>
                                            </div>
                                        );
                                    })}
                                    <div className="border-t border-gray-300 pt-2 md:pt-3 mt-2 md:mt-3 flex justify-between text-base md:text-lg">
                                        <span className="font-bold text-gray-900">Total ({selectedCurrency})</span>
                                        <span className="font-bold text-red-600">
                                            {currencySymbols[selectedCurrency]} {total.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all disabled:opacity-50 shadow-lg"
                            >
                                <Download className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="hidden sm:inline">{isSubmitting ? "Generating Quote..." : "Generate & Download PDF Quote"}</span>
                                <span className="sm:hidden">{isSubmitting ? "Generating..." : "Generate PDF"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-4"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Generating Your Quote</h3>
                        <p className="text-gray-600">Please wait while we prepare your PDF quote...</p>
                    </div>
                </div>
            )}

            {/* Download Prompt Modal */}
            {showDownloadPrompt && quoteInfo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md mx-4">
                        <div className="text-center mb-6">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Generated!</h3>
                            <p className="text-gray-600">
                                Quote <span className="font-semibold text-red-600">{quoteInfo.number}</span> has been created successfully.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <p className="text-sm text-blue-800 text-center">
                                Your PDF download should start automatically. If it doesn't, click the button below.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={() => triggerDownload(quoteInfo.id)}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download Quote PDF
                            </button>
                            <button
                                onClick={() => {
                                    setShowDownloadPrompt(false);
                                    setShowClientForm(false);
                                    // Reset form
                                    setSelectedServices({});
                                    setData({
                                        client_name: "",
                                        client_email: "",
                                        client_company: "",
                                        client_phone: "",
                                        selected_services: [],
                                        currency: "USD",
                                        notes: "",
                                    });
                                }}
                                className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                Create Another Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
