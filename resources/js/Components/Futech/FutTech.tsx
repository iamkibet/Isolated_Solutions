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
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, content }) => (
    <div className="group p-6 hover:bg-red-50/50 transition-colors duration-300">
        <div className="border-t-4 border-red-500 pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
    </div>
);

const SectionHeader = () => (
    <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Stakeholders of{" "}
            <span className="text-red-500">
                Futuristic Technology Solutions
            </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your Ideas, Our Expertise = Maximum Customer Success
        </p>
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
        <section className="py-16 md:py-24 border-b border-gray-200">
            <MaxWidthWrapper>
                <SectionHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SOLUTIONS.map((solution, index) => (
                        <SolutionCard
                            key={index}
                            title={solution.title}
                            content={solution.content}
                        />
                    ))}
                </div>

                <CtaButton />
            </MaxWidthWrapper>
        </section>
    );
};

export default Futech;
