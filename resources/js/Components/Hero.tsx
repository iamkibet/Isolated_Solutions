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
        image: "https://www.sparxitsolutions.com/sites/images/legacy-banner.webp",
        tab: "Ai-First approach",
        title: "Shaping Futures With Our AI-first Approach",
        description:
            "We drive AI innovation through breakthrough engineering and design to enhance business performance. This helps you to make informed decisions.",
        buttonText: "Learn More",
    },
    {
        image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
        tab: "Data Engineering",
        title: "Engineer Data Into Actionable Decisions",
        description:
            "We help businesses to harness the power of data to drive innovation and growth. Our data engineering services help you to make informed decisions.",
        buttonText: "Explore",
    },
    {
        image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
        tab: "Product Engineering",
        title: "Accelerate Time-To-Market with Product Engineering ",
        description:
            "Reshaping the future of digital products with our expertise in product engineering by leveraging AI powered approaches",
        buttonText: "Discover",
    },
    {
        image: "https://www.sparxitsolutions.com/sites/images/data-engineering-banner.webp",
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
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full">
            {heroimages.map((hero, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
                    <img
                        src={hero.image}
                        alt={hero.title}
                        className="h-full w-full object-cover"
                    />

                    {index === currentSlide && (
                        <div className="absolute inset-0 flex flex-col justify-center text-white">
                            <MaxWidthWrapper>
                                <div className="space-y-6 px-4 md:px-8 max-w-2xl">
                                    <h2 className="text-4xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
                                        {hero.title}
                                    </h2>
                                    <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                                        {hero.description}
                                    </p>
                                    <button className="w-fit transform rounded-lg bg-red-600 px-8 py-3 text-sm font-medium transition-all hover:bg-red-700 hover:shadow-lg md:px-10 md:py-4 md:text-base">
                                        {hero.buttonText}
                                    </button>
                                </div>
                            </MaxWidthWrapper>
                        </div>
                    )}
                </div>
            ))}

            {/* Navigation Tabs */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-2 gap-2 px-4 pb-8 md:grid-cols-4 md:gap-4 md:px-6">
                        {heroimages.map((hero, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`flex items-center rounded-lg p-3 text-left transition-all ${
                                    currentSlide === index
                                        ? "bg-white/20 backdrop-blur-sm text-white"
                                        : "bg-black/20 hover:bg-white/10 text-white"
                                }`}
                            >
                                <span
                                    className={`text-sm font-medium md:text-base ${
                                        currentSlide === index
                                            ? "border-l-4 border-red-500 pl-3 font-bold"
                                            : "pl-4"
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
