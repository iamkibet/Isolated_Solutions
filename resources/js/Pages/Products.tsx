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
    ExternalLink
} from "lucide-react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import { Head } from "@inertiajs/react";

const products = [
    {
        name: "Soko Magari",
        description: "Enterprise automotive commerce platform for buying and selling vehicles",
        category: "E-commerce Platform",
        highlights: [
            "AI-powered vehicle matchmaking",
            "Secure payment integration",
            "Virtual showrooms & 360° tours",
            "Real-time market analytics",
        ],
        link: "https://sokomagari.isolatedsolutions.org/",
        icon: Car,
        color: "red",
        badge: "Live Platform",
    },
    {
        name: "StockSync",
        description: "Complete inventory management system for businesses of all sizes",
        category: "Business Management",
        highlights: [
            "Real-time stock tracking",
            "Multi-warehouse support",
            "Automated reorder alerts",
            "Detailed analytics & reports",
        ],
        link: "http://stocksync.isolatedsolutions.org/",
        icon: Package,
        color: "blue",
        badge: "Enterprise Ready",
    },
    {
        name: "AI Resume Builder",
        description: "Intelligent resume creation powered by artificial intelligence",
        category: "AI-Powered Tool",
        highlights: [
            "AI-generated content suggestions",
            "Professional templates",
            "ATS-optimized formatting",
            "Real-time preview & editing",
        ],
        link: "#",
        icon: Brain,
        color: "purple",
        badge: "AI-Powered",
    },
    {
        name: "PesaPlan",
        description: "Smart expense management mobile app for personal and business finances",
        category: "Mobile App",
        highlights: [
            "Expense tracking & budgeting",
            "Receipt scanning with OCR",
            "Multi-currency support",
            "Financial insights & reports",
        ],
        link: "#",
        icon: Wallet,
        color: "green",
        badge: "Mobile App",
    },
    {
        name: "Fashion Store",
        description: "Modern e-commerce platform designed for fashion retailers",
        category: "E-commerce Platform",
        highlights: [
            "Beautiful product galleries",
            "Size & color variations",
            "Secure checkout & payments",
            "Order tracking & management",
        ],
        link: "#",
        icon: ShoppingBag,
        color: "pink",
        badge: "E-commerce",
    },
];

const Products = () => {
    const getColorClasses = (color: string) => {
        const colors = {
            red: {
                badge: 'bg-red-100 text-red-600',
                icon: 'bg-red-100 text-red-600',
                border: 'border-red-600',
                button: 'bg-red-600 hover:bg-red-700',
                link: 'text-red-600 hover:text-red-700'
            },
            blue: {
                badge: 'bg-blue-100 text-blue-600',
                icon: 'bg-blue-100 text-blue-600',
                border: 'border-blue-600',
                button: 'bg-blue-600 hover:bg-blue-700',
                link: 'text-blue-600 hover:text-blue-700'
            },
            purple: {
                badge: 'bg-purple-100 text-purple-600',
                icon: 'bg-purple-100 text-purple-600',
                border: 'border-purple-600',
                button: 'bg-purple-600 hover:bg-purple-700',
                link: 'text-purple-600 hover:text-purple-700'
            },
            green: {
                badge: 'bg-green-100 text-green-600',
                icon: 'bg-green-100 text-green-600',
                border: 'border-green-600',
                button: 'bg-green-600 hover:bg-green-700',
                link: 'text-green-600 hover:text-green-700'
            },
            pink: {
                badge: 'bg-pink-100 text-pink-600',
                icon: 'bg-pink-100 text-pink-600',
                border: 'border-pink-600',
                button: 'bg-pink-600 hover:bg-pink-700',
                link: 'text-pink-600 hover:text-pink-700'
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                        {products.map((product, index) => {
                            const Icon = product.icon;
                            const colors = getColorClasses(product.color);
                            
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
                                >
                                    {/* Header */}
                                    <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                                        <div className={`inline-flex items-center gap-2 ${colors.badge} px-3 py-1 rounded-full text-xs font-semibold mb-4`}>
                                            {product.badge}
                                        </div>
                                        <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-medium mb-3">
                                            {product.category}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="p-6 md:p-8 flex-1">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-3">
                                            {product.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-gray-700">
                                                        {highlight}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="p-6 md:p-8 pt-0">
                                        <a
                                            href={product.link}
                                            className={`w-full inline-flex items-center justify-center gap-2 ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg group`}
                                        >
                                            Explore {product.name}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
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
                            <a
                                href="/quotes"
                                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Get a Quote
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </GuestLayout>
    );
};

export default Products;
