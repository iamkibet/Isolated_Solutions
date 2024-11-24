import FutTech from "../Futech/FutTech";
import Testimonials from "../Testimonials/Testimonials";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import HoverCard from "./HoverCard";
import box1 from "../../assets/Svgs/box1.svg";
import settings from "../../assets/Svgs/settings.svg";
import ai from "../../assets/Svgs/ai.svg";
import cloud from "../../assets/Svgs/cloud.svg";

const Services = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-100">
            <MaxWidthWrapper>
                <div>
                    <div className="text-center">
                        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#14151b] leading-tight mb-6">
                            Reshaping Dynamics of{" "}
                            <span className="block mt-2 font-semibold text-red-500 text-2xl sm:text-3xl md:text-4xl">
                                Modern~Age Business
                            </span>
                            <span className="block mt-2 font-semibold text-red-500 text-2xl sm:text-3xl md:text-4xl">
                                with Our Tech Solutions
                            </span>
                        </h2>
                        <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
                        <p className="text-base sm:text-lg md:text-xl text-[#14151b] max-w-2xl mx-auto leading-relaxed">
                            Your doorway to assured growth through our
                            commitment to qualitative delivery
                        </p>
                    </div>

                    <div className="flex py-10 flex-col lg:flex-row w-full flex-wrap">
                        <HoverCard
                            image={box1}
                            title="Digital Transformation"
                            description="Reimagine business processes, meet customer needs and enable data-driven decision making with agility and foresight"
                            p="Drive Digital Change."
                            hoverTitle="Digital Transformation"
                            hoverContent={[
                                "Legacy Software Modernization",
                                "Digital Consulting",
                                "Code Reviews",
                                "AI Integration",
                                "Mpesa Intergration",
                                "Livechat Integration",
                            ]}
                        />
                        <HoverCard
                            image={settings}
                            title="Product Engineering"
                            description="Build digital products that stand out in a crowded market with a holistic approach, efficient resource management, and quality."
                            p="Innovate Your Product"
                            hoverTitle="Product Engineering"
                            hoverContent={[
                                "Automated Testing",
                                "Performance Optimization",
                                "Code Reviews",
                                "Continuous Integration",
                                "UI/UX Design and Modernization",
                            ]}
                        />
                        <HoverCard
                            image={ai}
                            title="Data & AI"
                            description="Embracing change with data-driven insights, automation, and predictive analysis to transform your business into a market leader"
                            p="Empower Decisions"
                            hoverTitle="Data & AI"
                            hoverContent={[
                                "Generative AI",
                                "AI Model Development",
                                "AI Consulting Services",
                                "Data Intelligence",
                                "Big Data Solutions",
                                "AI Chatbot Development",
                                "Data Analytics Services",
                                "LLM Development",
                            ]}
                        />
                        <HoverCard
                            image={cloud}
                            title="Cloud & DevOps"
                            description="Leveraging the power of cloud and devops to delliver faster, more reliable applications and ensure seamless scalability."
                            p="Scale with Cloud"
                            hoverTitle="Cloud & DevOps"
                            hoverContent={[
                                "Cloud Computing Services",
                                "DevOps Consulting Services",
                                "Cloud Migration",
                            ]}
                        />
                        <HoverCard
                            image={box1}
                            title="Quality Engineering"
                            description="Delivering exceptional quality with rigorous engineering processes to reduce losses, build trust, and exceed customer expectations."
                            p="Test for quality"
                            hoverTitle="Quality Engineering"
                            hoverContent={[
                                "Performance Testing",
                                "Security Testing",
                                "Mobile App Testing",
                                "Functional Testing",
                                "Accessibility Testing",
                                "Usability Testing",
                            ]}
                        />
                        <HoverCard
                            image={box1}
                            title="Cybersecurity"
                            description="Protecting your company's digital assets, data, and networks from unauthorised access while ensuring compliance as you grow."
                            p="Mitigate Security Risks"
                            hoverTitle="Cybersecurity"
                            hoverContent={[
                                "VAPT",
                                "Infrastructure Monitoring",
                                "Application Security",
                                "Red Teaming",
                                "Software Composition Analysis",
                                "Social Engineering",
                                "Data Leakage Monitoring",
                            ]}
                        />
                    </div>
                </div>
               
            </MaxWidthWrapper>
        </div>
    );
};

export default Services;
