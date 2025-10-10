import GuestLayout from "@/Layouts/GuestLayout";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { Head, Link } from "@inertiajs/react";
import { 
    ArrowLeft,
    CheckCircle, 
    Zap,
    Users,
    Code,
    Rocket,
    ExternalLink,
    ArrowRight,
    Brain,
    Wallet,
    ShoppingBag,
    Car,
    Package,
    TrendingUp
} from "lucide-react";

interface Product {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    category: string;
    badge: string;
    color: string;
    externalLink: string | null;
    features: Record<string, string>;
    technologies: string[];
    stats: Array<{ label: string; value: string }>;
}

interface Props {
    product: Product;
}

const PortfolioProduct = ({ product }: Props) => {
    const getIconForSlug = (slug: string) => {
        const icons: Record<string, any> = {
            'soko-magari': Car,
            'stocksync': Package,
            'ai-resume-builder': Brain,
            'pesaplan': Wallet,
            'fashion-store': ShoppingBag,
        };
        return icons[slug] || Package;
    };

    const Icon = getIconForSlug(product.slug);

    return (
        <GuestLayout>
            <Head title={product.name} />

            {/* Hero Section */}
            <div className="bg-white border-b border-gray-100">
                <MaxWidthWrapper>
                    <div className="py-12 md:py-16">
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Products
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <Icon className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded">
                                        {product.badge}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        {product.name}
                                    </h1>
                                    
                                    <p className="text-xl text-gray-600">
                                        {product.tagline}
                                    </p>

                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    {product.externalLink ? (
                                        <>
                                            <a
                                                href={product.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Visit Live Site
                                            </a>
                                            <Link
                                                href="/quotes"
                                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                            >
                                                <Rocket className="w-4 h-4" />
                                                Buy now
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/quotes"
                                                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                                            >
                                                <Rocket className="w-4 h-4" />
                                                Get a Quote
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                            >
                                                Contact Us
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {product.stats.map((stat, idx) => (
                                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16 md:py-20">
                <MaxWidthWrapper>
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Features
                        </h2>
                        <p className="text-gray-600">
                            Everything you need to succeed
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(product.features).map(([title, description], idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-gray-900" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 pl-11">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Technology Stack */}
            <div className="bg-gray-50 py-16 md:py-20 border-y border-gray-100">
                <MaxWidthWrapper>
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Built With
                        </h2>
                        <p className="text-gray-600">
                            Cutting-edge technologies
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {product.technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:border-gray-300 transition-colors"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* CTA Section */}
            <div className="bg-white py-16 md:py-20">
                <MaxWidthWrapper>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 text-center">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Ready to build something similar?
                            </h2>
                            <p className="text-gray-600">
                                Let us create a custom solution tailored to your specific needs
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                                <Link
                                    href="/quotes"
                                    className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                                >
                                    <Rocket className="w-4 h-4" />
                                    Get Your Quote
                                </Link>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                >
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
};

export default PortfolioProduct;
