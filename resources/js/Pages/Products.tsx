import TopServices from "@/Components/TopServices";
import GuestLayout from "@/Layouts/GuestLayout";
import { 
    ArrowRight, 
    Rocket, 
    ShieldCheck, 
    LayoutDashboard,
    Package,
    Brain,
    Wallet,
    ShoppingBag,
    Car,
    Sparkles,
    TrendingUp,
    ExternalLink,
    Layers
} from "lucide-react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { Head, Link } from "@inertiajs/react";

const products = [
    {
        name: "Soko Magari",
        slug: "soko-magari",
        description: "Enterprise automotive commerce platform for buying and selling vehicles",
        category: "E-commerce Platform",
        highlights: [
            "AI-powered vehicle matchmaking",
            "Secure payment integration",
            "Virtual showrooms & 360° tours",
            "Real-time market analytics",
        ],
        externalLink: "https://sokomagari.isolatedsolutions.org/",
        icon: Car,
        color: "red",
        badge: "Live Platform",
    },
    {
        name: "StockSync",
        slug: "stocksync",
        description: "Complete inventory management system for businesses of all sizes",
        category: "Business Management",
        highlights: [
            "Real-time stock tracking",
            "Multi-warehouse support",
            "Automated reorder alerts",
            "Detailed analytics & reports",
        ],
        externalLink: "http://stocksync.isolatedsolutions.org/",
        icon: Package,
        color: "blue",
        badge: "Enterprise Ready",
    },
    {
        name: "AI Resume Builder",
        slug: "ai-resume-builder",
        description: "Intelligent resume creation powered by artificial intelligence",
        category: "AI-Powered Tool",
        highlights: [
            "AI-generated content suggestions",
            "Professional templates",
            "ATS-optimized formatting",
            "Real-time preview & editing",
        ],
        externalLink: null,
        icon: Brain,
        color: "purple",
        badge: "AI-Powered",
    },
    {
        name: "PesaPlan",
        slug: "pesaplan",
        description: "Smart expense management mobile app for personal and business finances",
        category: "Mobile App",
        highlights: [
            "Expense tracking & budgeting",
            "Receipt scanning with OCR",
            "Multi-currency support",
            "Financial insights & reports",
        ],
        externalLink: null,
        icon: Wallet,
        color: "green",
        badge: "Mobile App",
    },
    {
        name: "Fashion Store",
        slug: "fashion-store",
        description: "Modern e-commerce platform designed for fashion retailers",
        category: "E-commerce Platform",
        highlights: [
            "Beautiful product galleries",
            "Size & color variations",
            "Secure checkout & payments",
            "Order tracking & management",
        ],
        externalLink: null,
        icon: ShoppingBag,
        color: "pink",
        badge: "E-commerce",
    },
];

const Products = () => {
    const getColorClasses = (color: string) => {
        const colors = {
            red: {
                accent: 'from-red-500 to-red-600',
                iconHover: 'group-hover:text-red-600',
                badgeHover: 'group-hover:bg-red-50 group-hover:text-red-600',
                textHover: 'group-hover:text-red-600'
            },
            blue: {
                accent: 'from-blue-500 to-blue-600',
                iconHover: 'group-hover:text-blue-600',
                badgeHover: 'group-hover:bg-blue-50 group-hover:text-blue-600',
                textHover: 'group-hover:text-blue-600'
            },
            purple: {
                accent: 'from-purple-500 to-purple-600',
                iconHover: 'group-hover:text-purple-600',
                badgeHover: 'group-hover:bg-purple-50 group-hover:text-purple-600',
                textHover: 'group-hover:text-purple-600'
            },
            green: {
                accent: 'from-green-500 to-green-600',
                iconHover: 'group-hover:text-green-600',
                badgeHover: 'group-hover:bg-green-50 group-hover:text-green-600',
                textHover: 'group-hover:text-green-600'
            },
            pink: {
                accent: 'from-pink-500 to-pink-600',
                iconHover: 'group-hover:text-pink-600',
                badgeHover: 'group-hover:bg-pink-50 group-hover:text-pink-600',
                textHover: 'group-hover:text-pink-600'
            },
        };
        return colors[color as keyof typeof colors] || colors.red;
    };

    return (
        <GuestLayout>
            <Head title="Our Products" />
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
                <MaxWidthWrapper>
                    <div className="text-center px-4 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                            <Sparkles className="w-4 h-4" />
                            Our Product Portfolio
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Innovative Products Built for{" "}
                            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                                Real Results
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Explore our suite of cutting-edge products designed to solve real-world problems and drive business growth
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">{products.length}</div>
                                <div className="text-sm text-gray-300">Products</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">5K+</div>
                                <div className="text-sm text-gray-300">Active Users</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
                                <div className="text-3xl font-bold">99.9%</div>
                                <div className="text-sm text-gray-300">Uptime</div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Products Grid */}
            <div className="bg-white py-16 md:py-24">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
                        {products.map((product, index) => {
                            const Icon = product.icon;
                            const colors = getColorClasses(product.color);
                            
                            return (
                                <Link
                                    key={index}
                                    href={`/products/${product.slug}`}
                                    className="group bg-white rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 overflow-hidden flex flex-col relative"
                                >
                                    {/* Hover color accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    
                                    {/* Header */}
                                    <div className="p-8 pb-6">
                                        <div className="flex items-start justify-between mb-6">
                                            <Icon className={`w-10 h-10 text-gray-400 ${colors.iconHover} transition-colors duration-300`} strokeWidth={1.5} />
                                            <span className={`text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded ${colors.badgeHover} transition-colors duration-300`}>
                                                {product.badge}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                                            {product.name}
                                        </h3>
                                        
                                        <p className="text-xs text-gray-500 mb-4">
                                            {product.category}
                                        </p>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="px-8 pb-8 flex-1">
                                        <ul className="space-y-2">
                                            {product.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                                    <span className="text-gray-400 mt-0.5">•</span>
                                                    <span className="leading-relaxed">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="px-8 pb-8 pt-4 border-t border-gray-100">
                                        <div className={`flex items-center justify-between text-sm font-medium text-gray-900 ${colors.textHover} transition-colors duration-300`}>
                                            <span>View details</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </MaxWidthWrapper>
            </div>

            <TopServices />

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 py-16 md:py-20">
                <MaxWidthWrapper>
                    <div className="text-center px-4 space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Have a Product Idea?
                        </h2>
                        <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto">
                            Let's bring your vision to life. We build custom products tailored to your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link
                                href="/quotes"
                                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Get a Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
};

export default Products;
