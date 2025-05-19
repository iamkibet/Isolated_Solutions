import React from "react";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

// ==================== Component Constants ====================
const SOLUTIONS = [
    {
        title: "Blockchain Development",
        content:
            "Enhancing and securing the ways to store and modify data of transactions with Blockchain-powered solutions for banking, finance, healthcare, and other industries.",
    },
    {
        title: "IoT",
        content:
            "Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architectured IoT ecosystem transforms the business.",
    },
    {
        title: "Augmented Reality",
        content:
            "Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand.",
    },
    {
        title: "Data Intelligence",
        content:
            "Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data.",
    },
    {
        title: "Artificial Intelligence",
        content:
            "Automate your business operations and processes with AI-powered solutions to reduce human intervention and increase efficiency.",
    },
    {
        title: "Virtual Reality",
        content:
            "Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs.",
    },
];

// ==================== Sub-Components ====================
interface SolutionCardProps {
    title: string;
    content: string;
    order?: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
    title,
    content,
    order,
}) => (
    <div
        className="relative h-full transform transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] 
               hover:scale-[1.02] group hover:z-10"
        style={{
            transitionDelay: `${(order || 0) * 50}ms`,
            perspective: "1000px",
        }}
    >
        <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div
            className="h-full p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg shadow-red-100/20 
                   border border-gray-100/50 hover:border-red-200/80 transition-all
                   flex flex-col justify-between overflow-hidden"
        >
            <div className="relative">
                <div
                    className="absolute -left-4 w-2 h-14 bg-red-500 rounded-full 
                        transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                        transition-all duration-500"
                />

                <h3
                    className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 
                      bg-clip-text text-transparent inline-block"
                >
                    {title}
                </h3>

                <p className="text-gray-600/90 leading-relaxed mb-6 line-clamp-4">
                    {content}
                </p>
            </div>

            <button
                aria-label={`Learn more about ${title}`}
                className="self-start mt-auto flex items-center gap-2 text-red-600/90 hover:text-red-800 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <span className="font-semibold">Explore Solution</span>
                <svg
                    className="w-4 h-4 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    </div>
);


const SectionHeader = () => (
    <div className="text-center mb-2 md:mb-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-50 -z-10" />
        <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-6">
                Our Partners
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                The Stakeholders of{" "}
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 font-extrabold">
                    Futuristic Technology Solutions
                </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
            </div>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                Your Ideas, Our Expertise = Maximum Customer Success
            </p>
        </div>
    </div>
);

const CtaButton = () => (
    <div className="flex justify-center mt-12">
        <button
            type="button"
            className="px-10 py-4 border-2 border-red-500 text-white bg-red-500 
               rounded-lg font-medium hover:bg-white hover:text-red-500
               transition-all duration-300 focus:outline-none focus:ring-2 
               focus:ring-red-500 focus:ring-offset-2"
            aria-label="Share your product idea with our team"
        >
            Share Your Product Idea
        </button>
    </div>
);

// ==================== Main Component ====================
const Futech: React.FC = () => {
    return (
        <section className="py-4  border-b border-gray-200">
            <MaxWidthWrapper>
                <SectionHeader />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
                    {SOLUTIONS.map((solution, index) => (
                        <SolutionCard
                            key={solution.title} // Better to use unique identifier from data
                            title={solution.title}
                            content={solution.content}
                            order={index % 6} // For staggered animation patterns
                        />
                    ))}
                </div>

                <CtaButton />
            </MaxWidthWrapper>
        </section>
    );
};

export default Futech;
