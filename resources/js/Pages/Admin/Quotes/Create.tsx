import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import QuoteForm from "@/Components/QuoteForm";
import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

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

export default function Create({ services, currencies }: Props) {
    return (
        <AdminLayout title="Create Quote">
            <Head title="Create Quote" />

            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link
                    href={route('admin.quotes.index')}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Quotes
                </Link>

                {/* Shared Quote Form Component */}
                <QuoteForm services={services} currencies={currencies} />
            </div>
        </AdminLayout>
    );
}
