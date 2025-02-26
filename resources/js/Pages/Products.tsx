import TopServices from "@/Components/TopServices";
import GuestLayout from "@/Layouts/GuestLayout";
import { ArrowRight, Rocket, ShieldCheck, LayoutDashboard } from "lucide-react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

const products = [
    {
        name: "Soko Magari",
        description: "Enterprise automotive commerce platform",
        highlights: [
            "AI vehicle matchmaking",
            "Blockchain-secured transactions",
            "Virtual showrooms",
            "Real-time market analytics",
        ],
        link: "/sokomagari",
        image: "/images/sokomagari.png?raw=true",
        badge: "Featured Platform",
    },
];

const Products = () => {
    return (
        <GuestLayout>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-24 px-4 sm:px-6">
                <MaxWidthWrapper>
                    <div className="text-center mb-12 md:mb-20">
                        <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
                            <Rocket className="w-4 h-4" />
                            <span className="text-sm sm:text-base">
                                Digital Transformation Suite
                            </span>
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Enterprise Solutions
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Cutting-edge platforms powering modern automotive
                            commerce
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-300 border border-gray-100 overflow-hidden"
                            >
                                {product.badge && (
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium z-10">
                                        {product.badge}
                                    </div>
                                )}

                                <div className="flex flex-col h-full">
                                    <div className="p-5 sm:p-6 md:p-8 pb-0 flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                                            <div className="bg-red-100 p-2 sm:p-3 rounded-lg sm:rounded-xl w-fit">
                                                <LayoutDashboard className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                                            </div>
                                            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">
                                                {product.name}
                                            </h2>
                                        </div>

                                        <p className="text-gray-600 text-base sm:text-lg mb-4 md:mb-6">
                                            {product.description}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                                            {product.highlights.map(
                                                (highlight, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2 sm:gap-3"
                                                    >
                                                        <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-1" />
                                                        <span className="text-sm sm:text-base text-gray-700">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 sm:h-64 md:h-80 object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-5 sm:p-6 md:p-8 bg-gray-50 border-t border-gray-100">
                                        <a
                                            href={product.link}
                                            className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm sm:text-base hover:text-red-700 transition-colors"
                                        >
                                            Explore Platform
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </div>

            <TopServices />
        </GuestLayout>
    );
};

export default Products;
