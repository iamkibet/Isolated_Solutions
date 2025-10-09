import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import { FaCogs, FaEdit, FaTrash, FaPlus, FaDollarSign, FaTimes, FaExchangeAlt } from "react-icons/fa";

interface Service {
    key: string;
    name: string;
    category: string;
    description: string;
    packages: {
        basic: { name: string; price: number; description: string; features: string[]; };
        standard: { name: string; price: number; description: string; features: string[]; };
        premium: { name: string; price: number; description: string; features: string[]; };
        enterprise: { name: string; price: number; description: string; features: string[]; };
    };
}

interface ExchangeRates {
    USD: number;
    KES: number;
    EUR: number;
    GBP: number;
}

interface Props {
    services?: Record<string, Service>;
    exchangeRates?: ExchangeRates;
    errors?: Record<string, string>;
}

const Index: React.FC<Props> = ({ services, exchangeRates, errors: pageErrors }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRatesModal, setShowRatesModal] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);

    // Form for adding/editing services
    const { data: serviceData, setData: setServiceData, post: postService, patch: patchService, processing: processingService, reset: resetService, errors: formErrors } = useForm({
        service_key: '',
        name: '',
        category: '',
        description: '',
        packages: {} as Record<string, { name: string; price: number; description: string; features: string[] }>
    });

    const addPackageTier = () => {
        const tierKey = `tier_${Date.now()}`; // Unique key
        const packages = { ...serviceData.packages };
        packages[tierKey] = {
            name: '',
            price: 0,
            description: '',
            features: []
        };
        setServiceData('packages', packages);
    };

    const removePackageTier = (tierKey: string) => {
        const packages = { ...serviceData.packages };
        delete packages[tierKey];
        setServiceData('packages', packages);
    };

    // Get services from config if available
    const servicesData = services || {};
    const servicesArray = Object.entries(servicesData).map(([serviceKey, service]) => ({
        key: serviceKey,
        name: service.name,
        category: service.category,
        description: service.description,
        packages: service.packages,
    }));

    // Get unique categories
    const categories = ["all", ...new Set(servicesArray.map(s => s.category))];

    // Filter services by category
    const filteredServices = selectedCategory === "all"
        ? servicesArray
        : servicesArray.filter(s => s.category === selectedCategory);

    const rates = exchangeRates || { USD: 1.0, KES: 129.50, EUR: 0.92, GBP: 0.79 };

    const { data: ratesData, setData: setRatesData, post: postRates, processing: processingRates } = useForm({
        USD: rates.USD,
        KES: rates.KES,
        EUR: rates.EUR,
        GBP: rates.GBP,
    });

    const handleUpdateRates = (e: React.FormEvent) => {
        e.preventDefault();
        postRates(route('admin.currency-rates.update'), {
            onSuccess: () => {
                setShowRatesModal(false);
            }
        });
    };

    const handleOpenAddModal = () => {
        resetService();
        setShowAddModal(true);
    };

    const handleOpenEditModal = (service: Service) => {
        setEditingService(service);
        
        // Convert packages object to the format expected by the form
        const formattedPackages: Record<string, { name: string; price: number; description: string; features: string[] }> = {};
        
        Object.entries(service.packages).forEach(([tierKey, tierData]) => {
            formattedPackages[tierKey] = {
                name: tierData.name || '',
                price: tierData.price || 0,
                description: tierData.description || '',
                features: tierData.features || [],
            };
        });
        
        setServiceData({
            service_key: service.key,
            name: service.name,
            category: service.category,
            description: service.description,
            packages: formattedPackages,
        });
    };

    const handleServiceSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate that at least one package exists
        if (Object.keys(serviceData.packages).length === 0) {
            alert('Please add at least one package tier');
            return;
        }

        // Validate that each package has at least one feature
        for (const [tierKey, tier] of Object.entries(serviceData.packages)) {
            if (!tier.features || tier.features.length === 0 || tier.features.every(f => !f.trim())) {
                alert(`Package "${tier.name || tierKey}" must have at least one feature`);
                return;
            }
        }
        
        if (editingService) {
            // Update existing service
            patchService(route('admin.services.update', editingService.key), {
                onSuccess: () => {
                    setEditingService(null);
                    resetService();
                },
                onError: () => {
                    // Errors will be shown via flash message
                }
            });
        } else {
            // Create new service
            postService(route('admin.services.store'), {
                onSuccess: () => {
                    setShowAddModal(false);
                    resetService();
                },
                onError: () => {
                    // Errors will be shown via flash message
                }
            });
        }
    };

    return (
        <AdminLayout title="Manage Services">
            <Head title="Manage Services" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Services & Pricing
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Manage your services, packages, and pricing
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900">
                                {servicesArray.length}
                            </div>
                            <div className="text-xs text-gray-500">
                                Total Services
                            </div>
                        </div>
                        <button
                            onClick={() => setShowRatesModal(true)}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaExchangeAlt className="w-5 h-5" />
                            Currency Rates
                        </button>
                        <button
                            onClick={handleOpenAddModal}
                            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaPlus className="w-5 h-5" />
                            Add Service
                        </button>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                                selectedCategory === category
                                    ? "bg-red-600 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                            }`}
                        >
                            {category === "all" ? "All Services" : category}
                            {category !== "all" && (
                                <span className="ml-2 text-sm">
                                    ({servicesArray.filter(s => s.category === category).length})
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                {filteredServices.length > 0 ? (
                    <div className="grid gap-6">
                        {filteredServices.map((service) => (
                            <div
                                key={service.key}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {service.name}
                                                </h3>
                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                                    {service.category}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleOpenEditModal(service)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit service"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (confirm(`Are you sure you want to delete "${service.name}"? This action cannot be undone.`)) {
                                                        router.delete(route('admin.services.destroy', service.key));
                                                    }
                                                }}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete service"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Packages */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                                        {Object.entries(service.packages).map(([tier, pkg]) => (
                                            <div
                                                key={tier}
                                                className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-semibold uppercase text-gray-500">
                                                        {pkg.name}
                                                    </span>
                                                    {tier === 'premium' && (
                                                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                                            Popular
                                                        </span>
                                                    )}
                                                    {tier === 'enterprise' && (
                                                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                                                            Best
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-baseline gap-1 mb-2">
                                                    <FaDollarSign className="text-gray-400 text-sm mt-1" />
                                                    <span className="text-2xl font-bold text-gray-900">
                                                        {pkg.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-500 text-sm">USD</span>
                                                </div>
                                                <p className="text-xs text-gray-600">
                                                    {pkg.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                        <FaCogs className="mx-auto text-gray-400 text-5xl mb-4" />
                        <p className="text-gray-500 text-lg">
                            No services found in this category
                        </p>
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className="mt-4 text-red-600 hover:text-red-700 font-semibold"
                        >
                            View all services
                        </button>
                    </div>
                )}

                {/* Info Banner */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                            <FaCogs className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Service Management
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Currently, services are managed through the <code className="bg-white px-2 py-1 rounded text-sm">config/services_pricing.php</code> file.
                                You can add, edit, or delete services. Changes will update the configuration file automatically.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={route('admin.quotes.create')}
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                                >
                                    Create Quote
                                </Link>
                                <Link
                                    href={route('admin.dashboard')}
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm border border-gray-300"
                                >
                                    Back to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Currency Rates Modal */}
            {showRatesModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Currency Exchange Rates
                                </h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    Set exchange rates relative to USD (base currency)
                                </p>
                            </div>
                            <button
                                onClick={() => setShowRatesModal(false)}
                                className="text-gray-400 hover:text-gray-600 p-2"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleUpdateRates} className="p-6">
                            <div className="space-y-4">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> All prices are in USD. These rates convert USD to other currencies for quotes.
                                    </p>
                                </div>

                                {Object.entries(ratesData).map(([currency, rate]) => (
                                    <div key={currency}>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            <FaExchangeAlt className="inline mr-2" />
                                            {currency} Exchange Rate
                                            {currency === 'USD' && ' (Base Currency)'}
                                        </label>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={rate}
                                                    onChange={(e) => setRatesData(currency as keyof typeof ratesData, parseFloat(e.target.value))}
                                                    disabled={currency === 'USD'}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100"
                                                />
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                1 USD = {rate} {currency}
                                            </div>
                                        </div>
                                        {currency === 'USD' && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                Base currency cannot be changed
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setShowRatesModal(false)}
                                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processingRates}
                                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50"
                                >
                                    {processingRates ? 'Updating...' : 'Update Rates'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add/Edit Service Modal */}
            {(showAddModal || editingService) && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {editingService ? 'Edit Service' : 'Add New Service'}
                            </h2>
                            <button
                                onClick={() => {
                                    setShowAddModal(false);
                                    setEditingService(null);
                                }}
                                className="text-gray-400 hover:text-gray-600 p-2"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleServiceSubmit} className="p-6">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                <p className="text-sm text-yellow-800">
                                    <strong>Note:</strong> This will update the <code className="bg-white px-2 py-1 rounded">config/services_pricing.php</code> file.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Service Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Website Development"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        value={serviceData.name}
                                        onChange={(e) => setServiceData('name', e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                                            value={serviceData.category}
                                            onChange={(e) => setServiceData('category', e.target.value)}
                                            required
                                        >
                                            <option value="">Select category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="App Development">App Development</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Consulting">Consulting</option>
                                            <option value="DevOps">DevOps</option>
                                            <option value="Cloud">Cloud</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Key *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g., web_development"
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 ${
                                                formErrors.service_key ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            value={serviceData.service_key}
                                            onChange={(e) => setServiceData('service_key', e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                                            disabled={!!editingService}
                                            required
                                        />
                                        {formErrors.service_key && (
                                            <p className="text-red-600 text-xs mt-1">
                                                {formErrors.service_key}
                                            </p>
                                        )}
                                        {!editingService && serviceData.service_key && (
                                            <p className="text-xs text-blue-600 mt-1">
                                                Will be saved as: <code className="bg-blue-50 px-1 rounded">{serviceData.service_key}</code>
                                            </p>
                                        )}
                                        {editingService && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                Service key cannot be changed
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        rows={2}
                                        placeholder="Brief description of the service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        value={serviceData.description}
                                        onChange={(e) => setServiceData('description', e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Package Tiers
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={addPackageTier}
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                                        >
                                            <FaPlus className="w-4 h-4" />
                                            Add Package Tier
                                        </button>
                                    </div>

                                    {Object.keys(serviceData.packages).length === 0 && (
                                        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                            <p className="text-gray-600 mb-4">No package tiers added yet</p>
                                            <button
                                                type="button"
                                                onClick={addPackageTier}
                                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                            >
                                                <FaPlus className="w-5 h-5" />
                                                Add Your First Package Tier
                                            </button>
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {Object.entries(serviceData.packages).map(([tierKey, tier]) => (
                                            <div key={tierKey} className="border-2 border-gray-300 rounded-lg p-5 bg-white relative">
                                                <button
                                                    type="button"
                                                    onClick={() => removePackageTier(tierKey)}
                                                    className="absolute top-3 right-3 text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                                    title="Remove this package tier"
                                                >
                                                    <FaTrash className="w-4 h-4" />
                                                </button>
                                                <div className="mb-4 pr-10">
                                                    <h4 className="text-sm font-bold text-gray-900">
                                                        Package Tier #{Object.keys(serviceData.packages).indexOf(tierKey) + 1}
                                                    </h4>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                                            Tier Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="e.g., Basic, Pro, Ultimate"
                                                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm font-medium"
                                                            value={tier?.name || ''}
                                                            onChange={(e) => {
                                                                const packages = { ...serviceData.packages };
                                                                packages[tierKey].name = e.target.value;
                                                                setServiceData('packages', packages);
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                                            Price (USD) *
                                                        </label>
                                                        <div className="relative">
                                                            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                                                            <input
                                                                type="number"
                                                                step="1"
                                                                min="0"
                                                                placeholder="0"
                                                                className="w-full pl-8 pr-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm font-semibold"
                                                                value={tier?.price || ''}
                                                                onChange={(e) => {
                                                                    const packages = { ...serviceData.packages };
                                                                    packages[tierKey].price = parseFloat(e.target.value) || 0;
                                                                    setServiceData('packages', packages);
                                                                }}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                                            Description *
                                                        </label>
                                                        <textarea
                                                            rows={2}
                                                            placeholder="Describe this package tier..."
                                                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                                                            value={tier?.description || ''}
                                                            onChange={(e) => {
                                                                const packages = { ...serviceData.packages };
                                                                packages[tierKey].description = e.target.value;
                                                                setServiceData('packages', packages);
                                                            }}
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <label className="block text-xs font-semibold text-gray-700">
                                                                Features *
                                                            </label>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const packages = { ...serviceData.packages };
                                                                    if (!packages[tierKey].features) {
                                                                        packages[tierKey].features = [];
                                                                    }
                                                                    packages[tierKey].features.push('');
                                                                    setServiceData('packages', packages);
                                                                }}
                                                                className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded flex items-center gap-1"
                                                            >
                                                                <FaPlus className="w-3 h-3" />
                                                                Add Feature
                                                            </button>
                                                        </div>
                                                        
                                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                                            {(tier?.features || []).map((feature, idx) => (
                                                                <div key={idx} className="flex items-center gap-2">
                                                                    <span className="text-green-600 text-xs">✓</span>
                                                                    <input
                                                                        type="text"
                                                                        placeholder="e.g., Responsive Design"
                                                                        className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                                                                        value={feature}
                                                                        onChange={(e) => {
                                                                            const packages = { ...serviceData.packages };
                                                                            packages[tierKey].features[idx] = e.target.value;
                                                                            setServiceData('packages', packages);
                                                                        }}
                                                                        required
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            const packages = { ...serviceData.packages };
                                                                            packages[tierKey].features.splice(idx, 1);
                                                                            setServiceData('packages', packages);
                                                                        }}
                                                                        className="text-red-600 hover:bg-red-50 p-2 rounded"
                                                                    >
                                                                        <FaTimes className="w-3 h-3" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                            {(!tier?.features || tier.features.length === 0) && (
                                                                <div className="text-center py-4 bg-gray-50 rounded border border-dashed border-gray-300">
                                                                    <p className="text-xs text-gray-500 mb-2">No features added yet</p>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            const packages = { ...serviceData.packages };
                                                                            if (!packages[tierKey].features) {
                                                                                packages[tierKey].features = [];
                                                                            }
                                                                            packages[tierKey].features.push('');
                                                                            setServiceData('packages', packages);
                                                                        }}
                                                                        className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                                                                    >
                                                                        + Add Your First Feature
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-2">
                                                            Add individual features that will appear as bullet points
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                                <div className="text-sm text-gray-600">
                                    {Object.keys(serviceData.packages).length} package tier(s) added
                                    {Object.keys(serviceData.packages).length === 0 && (
                                        <span className="text-red-600 ml-2">(Minimum 1 required)</span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowAddModal(false);
                                            setEditingService(null);
                                            resetService();
                                        }}
                                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processingService || Object.keys(serviceData.packages).length === 0}
                                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processingService ? 'Saving...' : (editingService ? 'Update Service' : 'Add Service')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default Index;
