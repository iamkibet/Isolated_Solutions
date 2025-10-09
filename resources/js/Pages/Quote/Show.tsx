import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { Download, FileText, CheckCircle, Calendar } from "lucide-react";

interface Quote {
    id: number;
    quote_number: string;
    client_name: string;
    client_email: string;
    client_company: string | null;
    client_phone: string | null;
    currency: string;
    currency_symbol: string;
    total: number;
    notes: string | null;
    status: string;
    valid_until: string;
    created_at: string;
}

interface Service {
    name: string;
    package_name: string;
    description: string;
    price: number;
}

interface Props {
    quote: Quote;
    services: Service[];
}

export default function QuoteShow({ quote, services }: Props) {
    return (
        <GuestLayout>
            <Head title={`Quote ${quote.quote_number}`} />

            <div className="bg-gray-50 min-h-screen py-12">
                <MaxWidthWrapper>
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                        Quote {quote.quote_number}
                                    </h1>
                                    <p className="text-gray-600">
                                        Generated on{" "}
                                        {new Date(
                                            quote.created_at
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <a
                                    href={route("quotes.download", quote.id)}
                                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    <Download className="w-5 h-5" />
                                    Download PDF
                                </a>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-900 mb-3">
                                        Client Information
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <span className="text-gray-600">
                                                Name:
                                            </span>{" "}
                                            <span className="font-medium">
                                                {quote.client_name}
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-gray-600">
                                                Email:
                                            </span>{" "}
                                            <span className="font-medium">
                                                {quote.client_email}
                                            </span>
                                        </p>
                                        {quote.client_company && (
                                            <p>
                                                <span className="text-gray-600">
                                                    Company:
                                                </span>{" "}
                                                <span className="font-medium">
                                                    {quote.client_company}
                                                </span>
                                            </p>
                                        )}
                                        {quote.client_phone && (
                                            <p>
                                                <span className="text-gray-600">
                                                    Phone:
                                                </span>{" "}
                                                <span className="font-medium">
                                                    {quote.client_phone}
                                                </span>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <div className="flex items-start gap-2 mb-3">
                                        <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                Valid Until
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {new Date(
                                                    quote.valid_until
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Selected Services
                            </h2>
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <h3 className="font-semibold text-gray-900">
                                                        {service.name}
                                                    </h3>
                                                </div>
                                                <div className="ml-7">
                                                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-2">
                                                        {service.package_name} Package
                                                    </span>
                                                    <p className="text-sm text-gray-600">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right ml-4">
                                                <div className="text-lg font-bold text-gray-900">
                                                    {quote.currency_symbol}{" "}
                                                    {service.price.toLocaleString(
                                                        undefined,
                                                        {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2,
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <div className="max-w-md ml-auto">
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between text-xl pt-3">
                                        <span className="font-bold text-gray-900">
                                            Total ({quote.currency}):
                                        </span>
                                        <span className="font-bold text-red-600">
                                            {quote.currency_symbol}{" "}
                                            {quote.total.toLocaleString(
                                                undefined,
                                                {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                }
                                            )}
                                        </span>
                                    </div>
                                </div>

                                {quote.notes && (
                                    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Additional Notes
                                        </h4>
                                        <p className="text-sm text-gray-700">
                                            {quote.notes}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-6">
                                    <a
                                        href={route("quotes.download", quote.id)}
                                        className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download PDF Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
}

