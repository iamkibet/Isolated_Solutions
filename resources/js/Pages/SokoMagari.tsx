import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import {
    BadgeCheck,
    Gauge,
    Shield,
    BarChart,
    CreditCard,
    Rocket,
    TestTube2,
    Zap,
    Search,
    Bolt,
    Code,
    LucideIcon,
    Image,
    Check,
    CloudLightning,
    Database,
    BadgeCheckIcon,
    Clipboard,
} from "lucide-react";

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: Search,
        title: "Poweful Search",
        description:
            "Advanced search processing with Redis-optimized query caching",
    },
    {
        icon: Bolt,
        title: "Lightning Response",
        description: "Edge network delivery with <2ms cache hits",
    },
    {
        icon: Image,
        title: "Visual Excellence",
        description: "Quality images with lazy loading",
    },
    {
        icon: Code,
        title: "Code Perfection",
        description: "TypeScript-first with atomic design principles",
    },
];

const SokoMagari = () => {
    return (
        <GuestLayout>
            {/* Hero Section - Enhanced with Parallax Effect */}
            <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] animate-pulse-slow"></div>
                <div className="relative z-10">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-3 bg-gray-800 px-5 py-2.5 rounded-full text-sm text-red-400 font-medium hover:bg-gray-700 transition-colors">
                            <Zap className="w-5 h-5 animate-pulse" />
                            Your Digital Car Marketplace
                        </div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Soko Magari
                        </h1>
                        <p className="text-2xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
                            Where automotive passion meets digital innovation -
                            Your gateway to stress-free car transactions
                        </p>

                        <div className="mt-8 flex justify-center gap-4">
                            <button className="group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <Rocket className="w-5 h-5 animate-bounce" />
                                Explore Interactive Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Showcase Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <MaxWidthWrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Technical Features */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-red-500 font-medium">
                                <Zap className="w-5 h-5" />
                                Performance Engineered
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Automotive Tech Stack
                            </h2>
                            <p className="text-lg text-gray-600">
                                Cutting-edge infrastructure meets elegant
                                presentation
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-red-100"
                                    >
                                        <div className="flex items-center gap-3">
                                            <feature.icon className="w-6 h-6 text-red-500 " />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    {feature.title}
                                                </h3>
                                                <p
                                                    className="text-sm text-gray-600 mt-1"
                                                    dangerouslySetInnerHTML={{
                                                        __html: feature.description,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Visual Demo */}
                        <div className="relative h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform">
                            {/* Floating Car Gallery */}
                            <div className="absolute inset-0 opacity-90">
                                <div className="grid grid-cols-3 gap-1 transform rotate-2 scale-105">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <img
                                            key={i}
                                            src={`/cars/car-${i}.webp`}
                                            alt="Vehicle showcase"
                                            className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity cursor-zoom-in"
                                            loading="lazy"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Technical Preview Panel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent p-6 flex flex-col justify-between backdrop-blur-sm">
                                {/* Interactive Code Snippet */}
                                <div className="group relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl max-w-[420px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="font-mono text-sm">
                                        <div className="flex items-center mb-4">
                                            <span className="text-blue-400 mr-2">
                                                const
                                            </span>
                                            <span className="text-purple-400">
                                                searchCars
                                            </span>
                                            <span className="text-gray-400 mx-2">
                                                =
                                            </span>
                                            <span className="text-green-400">
                                                ({"{"}{" "}
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <span className="text-yellow-400">
                                                make
                                            </span>
                                            <span className="text-gray-400">
                                                :{" "}
                                            </span>
                                            <span className="text-green-400">
                                                "Toyota"
                                            </span>
                                            <span className="text-gray-400">
                                                ,
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <span className="text-yellow-400">
                                                cache
                                            </span>
                                            <span className="text-gray-400">
                                                :{" "}
                                            </span>
                                            <span className="text-blue-400">
                                                redis
                                            </span>
                                            <span className="text-orange-400">
                                                (
                                            </span>
                                            <span className="text-yellow-400">
                                                'ttl'
                                            </span>
                                            <span className="text-gray-400">
                                                :{" "}
                                            </span>
                                            <span className="text-green-400">
                                                300
                                            </span>
                                            <span className="text-orange-400">
                                                )
                                            </span>
                                            <span className="text-gray-400">
                                                ,
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <span className="text-yellow-400">
                                                media
                                            </span>
                                            <span className="text-gray-400">
                                                :{" "}
                                            </span>
                                            <span className="text-green-400">
                                                '4k'
                                            </span>
                                        </div>
                                        <div className="text-green-400">
                                            {"})"}
                                        </div>
                                    </div>
                                    <button className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-gray-400 hover:text-white text-xs">
                                        <Clipboard className="w-4 h-4" />
                                        Copy
                                    </button>
                                </div>

                                {/* Performance Metrics */}
                                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-md rounded-xl p-5 max-w-[320px] self-end shadow-xl border border-gray-700/30 transform transition-transform hover:translate-x-1">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Database className="w-5 h-5 text-green-400" />
                                                <span className="text-sm text-gray-300">
                                                    Cache Efficiency
                                                </span>
                                            </div>
                                            <span className="font-mono text-green-400">
                                                99.2%
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <CloudLightning className="w-5 h-5 text-blue-400" />
                                                <span className="text-sm text-gray-300">
                                                    Media Load
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-blue-400">
                                                    0.42s
                                                </span>
                                                <div className="h-2 w-12 bg-gray-700 rounded-full">
                                                    <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Vehicle Intelligence Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <MaxWidthWrapper>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Management Tools */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-red-500 font-medium bg-red-50 px-4 py-2 rounded-full">
                                <BarChart className="w-5 h-5" />
                                Dealer Command Center
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                Complete Vehicle Lifecycle Management
                            </h2>

                            <div className="grid gap-6">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <Shield className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Fast Listings
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            Beautiful and interactive UI to
                                            create listings
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {[
                                                "Airbag Systems",
                                                "Climate Control",
                                                "Ergonomic Seats",
                                            ].map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="bg-red-100 p-3 rounded-lg">
                                        <BadgeCheckIcon className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Client Sales Network
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            White-label selling with automated
                                            commission tracking. Features
                                            include:
                                        </p>
                                        <div className="grid grid-cols-2 gap-2 mt-3">
                                            {[
                                                "Virtual Showrooms",
                                                "Digital Test Drives",
                                                "Escrow Payments",
                                                "Live Auction Bidding",
                                            ].map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2"
                                                >
                                                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                                                    <span className="text-gray-700">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Analytics & Safety */}
                        <div className="space-y-8 h-full">
                            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-inner border border-gray-100">
                                <div className="space-y-6">
                                    <div className="p-6 bg-white rounded-xl shadow-lg">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-red-100 p-2 rounded-lg">
                                                <Gauge className="w-6 h-6 text-red-600" />
                                            </div>
                                            <h3 className="text-xl font-semibold">
                                                Safety First Platform
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Automated safety checklist with
                                            integration for:
                                        </p>
                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            {[
                                                "ABS Systems",
                                                "Lane Assist",
                                                "Crash Tests",
                                                "Recall Checks",
                                            ].map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm"
                                                >
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white rounded-xl shadow-lg">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-red-100 p-2 rounded-lg">
                                                <Rocket className="w-6 h-6 text-red-600" />
                                            </div>
                                            <h3 className="text-xl font-semibold">
                                                Market Analytics
                                            </h3>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                {
                                                    metric: "0.2s",
                                                    label: "Listing Creation Time",
                                                },
                                                {
                                                    metric: "98%",
                                                    label: "Safety Spec Accuracy",
                                                },
                                                {
                                                    metric: "4.8x",
                                                    label: "Client Sales Boost",
                                                },
                                            ].map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                                                >
                                                    <span className="font-medium text-gray-700">
                                                        {stat.label}
                                                    </span>
                                                    <span className="text-red-600 font-bold">
                                                        {stat.metric}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Client Sales Badge */}
                            <div className="bg-gray-900 p-4 rounded-xl text-white flex items-center gap-4">
                                <div className="bg-red-500 p-3 rounded-lg">
                                    <CreditCard className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Agent Marketplace
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-1">
                                        Sell on behalf of the client feature
                                        added.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Ultimate CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <MaxWidthWrapper>
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Revolutionize Your Dealership
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join the platform transforming automotive commerce
                            across Africa
                        </p>

                        <div className="mt-8 flex justify-center gap-6">
                            <button className="group relative flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                <Rocket className="w-5 h-5" />
                                Start Free Trial
                            </button>
                            <button className="group relative flex items-center gap-3 border-2 border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
                                <TestTube2 className="w-5 h-5" />
                                Request Custom Demo
                            </button>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </GuestLayout>
    );
};

export default SokoMagari;
