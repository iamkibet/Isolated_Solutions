import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import HoverCard from "./HoverCard";
import box1 from "../../assets/Svgs/box1.svg";
import settings from "../../assets/Svgs/settings.svg";
import ai from "../../assets/Svgs/ai.svg";
import cloud from "../../assets/Svgs/cloud.svg";

// ==================== Component Constants ====================
const SERVICES = [
    {
        image: box1,
        title: "Digital Transformation",
        description:
            "Reimagine business processes, meet customer needs and enable data-driven decision making with agility and foresight",
        p: "Drive Digital Change.",
        hoverTitle: "Digital Transformation",
        hoverContent: [
            "Legacy Software Modernization",
            "Digital Consulting",
            "Code Reviews",
            "AI Integration",
            "Mpesa Integration",
            "Livechat Integration",
        ],
    },
    {
        image: settings,
        title: "Product Engineering",
        description:
            "Build digital products that stand out in a crowded market with a holistic approach, efficient resource management, and quality.",
        p: "Innovate Your Product",
        hoverTitle: "Product Engineering",
        hoverContent: [
            "Automated Testing",
            "Performance Optimization",
            "Code Reviews",
            "Continuous Integration",
            "UI/UX Design and Modernization",
        ],
    },
    {
        image: ai,
        title: "AI & Automation",
        description:
            "Empower your business with AI and automation solutions that drive efficiency, innovation, and growth.",
        p: "Automate Your Business",
        hoverTitle: "AI & Automation",
        hoverContent: [
            "AI Integration",
            "Chatbot Development",
            "Predictive Analytics",
            "Process Automation",
            "Data Visualization",
        ],
    },
    {
        image: cloud,
        title: "Cloud Solutions",
        description:
            "Leverage the power of the cloud to enhance scalability, security, and performance of your business.",
        p: "Scale with Cloud",
        hoverTitle: "Cloud Solutions",
        hoverContent: [
            "Cloud Migration",
            "Cloud Optimization",
            "Cloud Security",
            "Multi-Cloud Strategy",
            "Disaster Recovery Planning",
        ],
    },
    {
        image: box1,
        title: "Data Engineering",
        description:
            "Transform raw data into actionable insights with our data engineering solutions.",
        p: "Harness Your Data",
        hoverTitle: "Data Engineering",
        hoverContent: [
            "Data Integration",
            "Data Warehousing",
            "Data Governance",
            "Real-time Analytics",
            "Data Visualization",
        ],
    },
    {
        image: settings,
        title: "Legacy Software Modernization",
        description:
            "Upgrade your legacy systems to modern, scalable architectures with our modernization services.",
        p: "Modernize Your Legacy",
        hoverTitle: "Legacy Software Modernization",
        hoverContent: [
            "Code Refactoring",
            "UI/UX Redesign",
            "Database Migration",
            "Cloud Integration",
            "API Development",
        ],
    },
];

// ==================== Sub-Components ====================
const SectionHeader = () => (
    <header className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reshaping Dynamics of{" "}
            <span className="block mt-4 text-red-500 font-semibold text-3xl md:text-4xl">
                Modern~Age Business
            </span>
            <span className="block mt-2 text-red-500 font-semibold text-3xl md:text-4xl">
                with Our Tech Solutions
            </span>
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-8" aria-hidden="true" />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your doorway to assured growth through our commitment to qualitative
            delivery
        </p>
    </header>
);

const ServicesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {SERVICES.map((service, index) => (
            <HoverCard
                key={index}
                {...service}
                className="group hover:shadow-xl transition-all duration-300"
                imageProps={{
                    className:
                        "w-16 h-16 mb-6 group-hover:scale-110 transition-transform",
                    alt: `${service.title} icon`,
                }}
            />
        ))}
    </div>
);

// ==================== Main Component ====================
const Services = () => {
    return (
        <section
            className="py-20 bg-gradient-to-b from-white to-gray-50"
            aria-labelledby="services-heading"
        >
            <MaxWidthWrapper>
                <SectionHeader />
                <ServicesGrid />
            </MaxWidthWrapper>
        </section>
    );
};

export default Services;
