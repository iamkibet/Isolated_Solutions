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
    <header className="text-center  relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-50 -z-10" />
        <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-6">
                Our Services
            </span>
            <h2
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in"
                id="services-heading"
            >
                Transforming Business Through
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 font-extrabold">
                    Innovative Technology
                </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Empowering your digital journey with cutting-edge solutions and
                expert guidance
            </p>
        </div>
    </header>
);

const ServicesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-4 ">
        {SERVICES.map((service, index) => (
            <div
                key={index}
                className="transform transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <HoverCard
                    {...service}
                    className="group hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white border border-gray-100"
                    imageProps={{
                        className:
                            "w-20 h-20 mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300",
                        alt: `${service.title} icon`,
                    }}
                />
            </div>
        ))}
    </div>
);

// ==================== Main Component ====================
const Services = () => {
    return (
        <section
            className="py-2 lg:py-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
            aria-labelledby="services-heading"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50 via-transparent to-transparent opacity-30 -z-10" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNGRjY2NjYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-5 -z-10" />
            <MaxWidthWrapper>
                <SectionHeader />
                <ServicesGrid />
            </MaxWidthWrapper>
        </section>
    );
};

export default Services;
