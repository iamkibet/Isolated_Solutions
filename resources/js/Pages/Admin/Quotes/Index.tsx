import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router, Head, usePage } from "@inertiajs/react";
import {
    FaEye,
    FaDownload,
    FaTrash,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaEnvelope,
    FaFileInvoiceDollar,
} from "react-icons/fa";

interface Service {
    name: string;
    package_name: string;
    price: number;
}

interface Quote {
    id: number;
    quote_number: string;
    client_name: string;
    client_email: string;
    client_company: string | null;
    currency: string;
    currency_symbol: string;
    total: string;
    status: string;
    created_at: string;
    valid_until: string;
    services: Service[];
}

interface Props {
    quotes: {
        data: Quote[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const Index: React.FC<Props> = ({ quotes }) => {
    const [filter, setFilter] = useState<string>("all");

    const handleDelete = (quoteId: number) => {
        if (confirm("Are you sure you want to delete this quote?")) {
            router.delete(route("admin.quotes.destroy", quoteId));
        }
    };

    const handleStatusChange = (quoteId: number, newStatus: string) => {
        router.patch(route("admin.quotes.updateStatus", quoteId), {
            status: newStatus
        }, {
            preserveScroll: true,
        });
    };

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            pending: {
                color: "bg-yellow-100 text-yellow-800",
                icon: FaClock,
                text: "Pending",
            },
            sent: {
                color: "bg-blue-100 text-blue-800",
                icon: FaEnvelope,
                text: "Sent",
            },
            accepted: {
                color: "bg-green-100 text-green-800",
                icon: FaCheckCircle,
                text: "Accepted",
            },
            rejected: {
                color: "bg-red-100 text-red-800",
                icon: FaTimesCircle,
                text: "Rejected",
            },
        };

        const config =
            statusConfig[status as keyof typeof statusConfig] ||
            statusConfig.pending;
        const Icon = config.icon;

        return (
            <span
                className={`px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${config.color}`}
            >
                <Icon className="w-3 h-3" />
                {config.text}
            </span>
        );
    };

    const filteredQuotes =
        filter === "all"
            ? quotes.data
            : quotes.data.filter((quote) => quote.status === filter);

    return (
        <AdminLayout title="Manage Quotes">
            <Head title="Manage Quotes" />
            <div className="max-w-7xl mx-auto">
                {/* Header with Stats */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Quote Requests
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Manage and track all client quote requests
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-center px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
                                <div className="text-2xl font-bold text-gray-900">
                                    {quotes.total}
                                </div>
                                <div className="text-xs text-gray-500">
                                    Total Quotes
                                </div>
                            </div>
                            <Link
                                href={route("admin.quotes.create")}
                                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                <FaFileInvoiceDollar className="w-5 h-5" />
                                Create Quote
                            </Link>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                        {[
                            { key: "all", label: "All Quotes" },
                            { key: "pending", label: "Pending" },
                            { key: "sent", label: "Sent" },
                            { key: "accepted", label: "Accepted" },
                            { key: "rejected", label: "Rejected" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setFilter(tab.key)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                                    filter === tab.key
                                        ? "bg-red-600 text-white shadow-md"
                                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                            >
                                {tab.label}
                                {tab.key !== "all" && (
                                    <span className="ml-2 text-sm">
                                        (
                                        {
                                            quotes.data.filter(
                                                (q) => q.status === tab.key
                                            ).length
                                        }
                                        )
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quotes Table */}
                <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quote #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Services
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredQuotes.length > 0 ? (
                                    filteredQuotes.map((quote) => (
                                        <tr
                                            key={quote.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {quote.quote_number}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {quote.client_company && `(${quote.client_company})`}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-900">
                                                        {quote.client_name}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {quote.client_email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-xs space-y-1">
                                                    {quote.services && quote.services.length > 0 ? (
                                                        quote.services.map((service, idx) => (
                                                            <div key={idx} className="flex items-start gap-2">
                                                                <span className="text-blue-600">•</span>
                                                                <div className="flex-1">
                                                                    <div className="font-medium text-gray-900">
                                                                        {service.name}
                                                                    </div>
                                                                    <div className="text-gray-500">
                                                                        {service.package_name} - {quote.currency_symbol}{service.price.toLocaleString()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <span className="text-gray-400">No services</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-gray-900">
                                                    {quote.currency_symbol}{" "}
                                                    {parseFloat(
                                                        quote.total
                                                    ).toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2,
                                                    })}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <select
                                                    value={quote.status}
                                                    onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                                                    className="text-xs font-semibold rounded-full px-3 py-1 border-0 focus:ring-2 focus:ring-red-500 cursor-pointer"
                                                    style={{
                                                        backgroundColor: quote.status === 'accepted' ? '#dcfce7' : 
                                                                        quote.status === 'rejected' ? '#fee2e2' :
                                                                        quote.status === 'sent' ? '#dbeafe' : '#fef3c7',
                                                        color: quote.status === 'accepted' ? '#166534' : 
                                                               quote.status === 'rejected' ? '#991b1b' :
                                                               quote.status === 'sent' ? '#1e40af' : '#854d0e',
                                                    }}
                                                >
                                                    <option value="pending">⏳ Pending</option>
                                                    <option value="sent">📧 Sent</option>
                                                    <option value="accepted">✅ Accepted</option>
                                                    <option value="rejected">❌ Rejected</option>
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(
                                                    quote.created_at
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Link
                                                        href={route(
                                                            "quotes.show",
                                                            quote.id
                                                        )}
                                                        className="text-blue-600 hover:text-blue-900"
                                                        title="View Quote"
                                                    >
                                                        <FaEye className="inline-block" />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "quotes.download",
                                                            quote.id
                                                        )}
                                                        className="text-green-600 hover:text-green-900"
                                                        title="Download PDF"
                                                    >
                                                        <FaDownload className="inline-block" />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                quote.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Delete Quote"
                                                    >
                                                        <FaTrash className="inline-block" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={7}
                                            className="px-6 py-12 text-center"
                                        >
                                            <FaFileInvoiceDollar className="mx-auto text-gray-400 text-5xl mb-4" />
                                            <p className="text-gray-500 text-lg">
                                                No quotes found
                                            </p>
                                            {filter !== "all" && (
                                                <button
                                                    onClick={() =>
                                                        setFilter("all")
                                                    }
                                                    className="mt-4 text-blue-600 hover:text-blue-800"
                                                >
                                                    View all quotes
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                {quotes.last_page > 1 && (
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing page {quotes.current_page} of{" "}
                            {quotes.last_page}
                        </div>
                        <div className="flex gap-2">
                            {quotes.current_page > 1 && (
                                <Link
                                    href={route("admin.quotes.index", {
                                        page: quotes.current_page - 1,
                                    })}
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    Previous
                                </Link>
                            )}
                            {quotes.current_page < quotes.last_page && (
                                <Link
                                    href={route("admin.quotes.index", {
                                        page: quotes.current_page + 1,
                                    })}
                                    className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    Next
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default Index;

