import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

type HeroImage = {
    image: string;
    title: string;
    tab: string;
    description: string;
    buttonText: string;
};

const heroimages: HeroImage[] = [
    {
        image: "/images/ai-banner.webp",
        tab: "Ai-First approach",
        title: "Shaping Futures With Our AI-first Approach",
        description:
            "We drive AI innovation through breakthrough engineering and design to enhance business performance. This helps you to make informed decisions.",
        buttonText: "Learn More",
    },
    {
        image: "/images/data_and_Cloud.webp",
        tab: "Data Engineering",
        title: "Engineer Data Into Actionable Decisions",
        description:
            "We help businesses to harness the power of data to drive innovation and growth. Our data engineering services help you to make informed decisions.",
        buttonText: "Explore",
    },
    {
        image: "/images/cyber_security.webp",
        tab: "Product Engineering",
        title: "Accelerate Time-To-Market with Product Engineering ",
        description:
            "Reshaping the future of digital products with our expertise in product engineering by leveraging AI powered approaches",
        buttonText: "Discover",
    },
    {
        image: "/images/Software_modernization.webp",
        tab: "Legacy Software",
        title: "Drive Agility Through Legacy System Modernization",
        description:
            "Upgrade your legacy software to the modern, scalable architecture with automation and AI.",
        buttonText: "Digitise your system",
    },
];

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroimages.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-[90dvh] md:min-h-screen overflow-hidden">
            {heroimages.map((hero, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
                    <img
                        src={hero.image}
                        alt={hero.title}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                    />

                    {index === currentSlide && (
                        <div className="absolute inset-0 flex flex-col justify-center text-white">
                            <MaxWidthWrapper>
                                <div className="space-y-5 md:space-y-7 max-w-2xl px-4 sm:px-6 md:px-8">
                                    <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl text-balance">
                                        {hero.title}
                                    </h1>

                                    <p className="text-lg md:text-xl leading-normal md:leading-relaxed max-w-[650px] text-gray-100/95">
                                        {hero.description}
                                    </p>

                                    <button
                                        className="w-fit rounded-lg bg-red-600 px-7 py-3.5 text-base font-semibold tracking-wide transition-colors 
                hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 
                focus-visible:outline-red-500 md:px-9 md:py-4 md:text-lg"
                                        aria-label={`Learn more about ${hero.tab}`}
                                    >
                                        {hero.buttonText}
                                    </button>
                                </div>
                            </MaxWidthWrapper>
                        </div>
                    )}
                </div>
            ))}

            {/* Mobile Navigation */}
            <div className="md:hidden absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
                {heroimages.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentSlide(index);
                        }}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            currentSlide === index
                                ? "bg-red-600"
                                : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block absolute bottom-8 left-0 right-0 z-20">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-4 gap-4 px-4">
                        {heroimages.map((hero, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide(index);
                                }}
                                className={`flex items-center rounded-lg p-3 transition-all text-white ${
                                    currentSlide === index
                                        ? "bg-white/20 backdrop-blur-sm"
                                        : "bg-black/20 hover:bg-white/10"
                                }`}
                            >
                                <span
                                    className={`text-sm font-medium ${
                                        currentSlide === index
                                            ? "border-l-4 border-red-500 pl-3"
                                            : "pl-4 opacity-90"
                                    }`}
                                >
                                    {hero.tab}
                                </span>
                            </button>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    );
};

export default Hero;
