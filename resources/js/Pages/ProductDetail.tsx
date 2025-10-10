import GuestLayout from "@/Layouts/GuestLayout";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { Head, Link } from "@inertiajs/react";
import { 
    Star, 
    ShoppingCart, 
    ArrowLeft,
    CheckCircle, 
    Shield, 
    Zap,
    Globe,
    Smartphone,
    Lock,
    TrendingUp,
    Users,
    Award,
    Code,
    Server,
    Palette,
    Package,
    Cloud,
    GitBranch,
    Monitor,
    Rocket,
    HeadphonesIcon,
    FileCheck,
    CreditCard
} from "lucide-react";
import { useState } from "react";

interface ServiceOptionValue {
    id: number;
    label: string;
    description: string;
    price_modifier: number;
    features: string[];
    is_default: boolean;
}

interface ServiceOption {
    id: number;
    name: string;
    type: string;
    description: string;
    is_required: boolean;
    values: ServiceOptionValue[];
}

interface Service {
    id: number;
    name: string;
    slug: string;
    description: string;
    base_price: number;
    features: string[];
    options: ServiceOption[];
    category: {
        name: string;
        slug: string;
    };
}

interface Props {
    service: Service;
}

const ProductDetail = ({ service }: Props) => {
    const [selectedPackage, setSelectedPackage] = useState<ServiceOptionValue | null>(null);

    const getIconForCategory = (categoryName: string) => {
        const icons: Record<string, any> = {
            'Web Development': Globe,
            'App Development': Smartphone,
            'Design Services': Palette,
            'Consulting Services': Users,
            'Cloud Services': Cloud,
            'DevOps Services': GitBranch,
            'Hosting Services': Server,
        };
        return icons[categoryName] || Package;
    };

    const getColorForCategory = (categoryName: string) => {
        const colors: Record<string, string> = {
            'Web Development': 'blue',
            'App Development': 'purple',
            'Design Services': 'pink',
            'Consulting Services': 'green',
            'Cloud Services': 'cyan',
            'DevOps Services': 'orange',
            'Hosting Services': 'indigo',
        };
        return colors[categoryName] || 'gray';
    };

    const getColorClasses = (color: string) => {
        const colorMap: Record<string, any> = {
            blue: {
                gradient: 'from-blue-50 via-blue-100 to-white',
                badge: 'bg-blue-100 text-blue-700',
                icon: 'bg-blue-600',
                button: 'bg-blue-600 hover:bg-blue-700',
                border: 'border-blue-300',
                accent: 'text-blue-600',
            },
            purple: {
                gradient: 'from-purple-50 via-purple-100 to-white',
                badge: 'bg-purple-100 text-purple-700',
                icon: 'bg-purple-600',
                button: 'bg-purple-600 hover:bg-purple-700',
                border: 'border-purple-300',
                accent: 'text-purple-600',
            },
            pink: {
                gradient: 'from-pink-50 via-pink-100 to-white',
                badge: 'bg-pink-100 text-pink-700',
                icon: 'bg-pink-600',
                button: 'bg-pink-600 hover:bg-pink-700',
                border: 'border-pink-300',
                accent: 'text-pink-600',
            },
            green: {
                gradient: 'from-green-50 via-green-100 to-white',
                badge: 'bg-green-100 text-green-700',
                icon: 'bg-green-600',
                button: 'bg-green-600 hover:bg-green-700',
                border: 'border-green-300',
                accent: 'text-green-600',
            },
            cyan: {
                gradient: 'from-cyan-50 via-cyan-100 to-white',
                badge: 'bg-cyan-100 text-cyan-700',
                icon: 'bg-cyan-600',
                button: 'bg-cyan-600 hover:bg-cyan-700',
                border: 'border-cyan-300',
                accent: 'text-cyan-600',
            },
            orange: {
                gradient: 'from-orange-50 via-orange-100 to-white',
                badge: 'bg-orange-100 text-orange-700',
                icon: 'bg-orange-600',
                button: 'bg-orange-600 hover:bg-orange-700',
                border: 'border-orange-300',
                accent: 'text-orange-600',
            },
            indigo: {
                gradient: 'from-indigo-50 via-indigo-100 to-white',
                badge: 'bg-indigo-100 text-indigo-700',
                icon: 'bg-indigo-600',
                button: 'bg-indigo-600 hover:bg-indigo-700',
                border: 'border-indigo-300',
                accent: 'text-indigo-600',
            },
        };
        return colorMap[color] || colorMap.blue;
    };

    const Icon = getIconForCategory(service.category.name);
    const color = getColorForCategory(service.category.name);
    const colors = getColorClasses(color);
    const packageOption = service.options.find(opt => opt.name === 'Package Tier');
    const packages = packageOption?.values || [];
    const defaultPackage = packages.find(pkg => pkg.is_default) || packages[0];

    return (
        <GuestLayout>
            <Head title={service.name} />

            {/* Hero Section */}
            <div className={`bg-gradient-to-br ${colors.gradient} py-16 md:py-24`}>
                <MaxWidthWrapper>
                    <div className="space-y-6">
                        <Link
                            href="/products/services"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Services
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-start gap-8">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-16 h-16 ${colors.icon} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <span className={`${colors.badge} px-4 py-1.5 rounded-full text-sm font-semibold`}>
                                        {service.category.name}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                    {service.name}
                                </h1>

                                <p className="text-xl text-gray-700 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">Rated 5 stars</span>
                                    <span className="text-sm text-gray-600">by our clients</span>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link
                                        href={`/quotes?service=${service.slug}`}
                                        className={`${colors.button} text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2`}
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Buy Now
                                    </Link>
                                    <a
                                        href="#packages"
                                        className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg text-center transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
                                    >
                                        View Packages
                                    </a>
                                </div>
                            </div>

                            {/* Pricing Card */}
                            {defaultPackage && (
                                <div className="md:w-80 bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200">
                                    <div className="text-center space-y-4">
                                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                            Starting From
                                        </p>
                                        <div>
                                            <span className={`text-5xl font-extrabold ${colors.accent}`}>
                                                ${service.base_price.toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">
                                            {defaultPackage.label} Package
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span>One-time payment</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span>Lifetime license</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span>Free updates</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Features Overview */}
            {service.features && service.features.length > 0 && (
                <div className="bg-white py-16">
                    <MaxWidthWrapper>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                What's Included
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Every package comes with these powerful features
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                                    <CheckCircle className={`w-6 h-6 ${colors.accent} flex-shrink-0 mt-0.5`} />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </MaxWidthWrapper>
                </div>
            )}

            {/* Package Tiers */}
            {packages.length > 0 && (
                <div id="packages" className="bg-gray-50 py-16">
                    <MaxWidthWrapper>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Choose Your Package
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Select the package that best fits your needs and budget
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packages.map((pkg) => (
                                <div
                                    key={pkg.id}
                                    className={`bg-white rounded-2xl shadow-lg border-2 ${
                                        pkg.is_default ? colors.border + ' ring-4 ring-offset-2 ' + colors.border : 'border-gray-200'
                                    } p-8 hover:shadow-2xl transition-all relative`}
                                >
                                    {pkg.is_default && (
                                        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${colors.badge} px-4 py-1 rounded-full text-xs font-bold uppercase`}>
                                            Most Popular
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {pkg.label}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            {pkg.description}
                                        </p>
                                        <div>
                                            <span className={`text-4xl font-extrabold ${colors.accent}`}>
                                                ${pkg.price_modifier.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <CheckCircle className={`w-4 h-4 ${colors.accent} flex-shrink-0 mt-0.5`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/quotes?service=${service.slug}&package=${pkg.label}`}
                                        className={`w-full ${
                                            pkg.is_default ? colors.button + ' text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        } px-6 py-3 rounded-lg font-semibold text-center transition-all inline-flex items-center justify-center gap-2`}
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Get Started
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </MaxWidthWrapper>
                </div>
            )}

            {/* Why Choose Section */}
            <div className="bg-white py-16">
                <MaxWidthWrapper>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We deliver exceptional results with these guarantees
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security for your peace of mind' },
                            { icon: HeadphonesIcon, title: 'Expert Support', desc: '24/7 dedicated support team ready to help' },
                            { icon: Rocket, title: 'Fast Delivery', desc: 'Quick turnaround time without compromising quality' },
                            { icon: FileCheck, title: 'Quality Assured', desc: 'Rigorous testing and quality control process' },
                        ].map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                                <div key={idx} className="text-center space-y-4">
                                    <div className={`${colors.icon} w-16 h-16 text-white rounded-xl flex items-center justify-center mx-auto shadow-lg`}>
                                        <ItemIcon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Final CTA */}
            <div className={`bg-gradient-to-br ${colors.gradient} py-16`}>
                <MaxWidthWrapper>
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Ready to Get Started with {service.name}?
                        </h2>
                        <p className="text-lg text-gray-700">
                            Join hundreds of satisfied clients who have transformed their business with our services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                href={`/quotes?service=${service.slug}`}
                                className={`${colors.button} text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2`}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Get Your Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
};

export default ProductDetail;

