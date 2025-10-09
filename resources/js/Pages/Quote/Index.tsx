import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import QuoteForm from "@/Components/QuoteForm";
import { FileText } from "lucide-react";

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
        basic: Package;
        standard: Package;
        premium: Package;
        enterprise: Package;
    };
}

interface Services {
    [key: string]: Service;
}

interface Props {
    services: Services;
    currencies: string[];
}

export default function QuoteIndex({ services, currencies }: Props) {
    return (
        <GuestLayout>
            <Head title="Get a Quote" />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
                <MaxWidthWrapper>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <FileText className="w-4 h-4" />
                            Professional Quote Generator
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get Your Custom Quote
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Choose from our tiered service packages, provide your details,
                            and download a professional PDF quote instantly
                        </p>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 py-12">
                <MaxWidthWrapper>
                    {/* Shared Quote Form Component */}
                    <QuoteForm services={services} currencies={currencies} />
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
}
