import React from "react";
import { motion } from "framer-motion";
import {
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ShoppingCartIcon,
    CodeBracketIcon,
    CloudIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface Service {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

interface TopServicesProps {
    services?: Service[];
    className?: string;
}

const DEFAULT_SERVICES: Service[] = [
    {
        title: "Web Development",
        description: "Cutting-edge digital experiences with modern frameworks",
        icon: GlobeAltIcon,
    },
    {
        title: "Mobile Apps",
        description: "Native iOS & Android solutions with fluid UX",
        icon: DevicePhoneMobileIcon,
    },
    {
        title: "eCommerce",
        description: "Scalable storefronts with conversion-focused design",
        icon: ShoppingCartIcon,
    },
    {
        title: "Cloud Solutions",
        description: "Secure cloud infrastructure & serverless architecture",
        icon: CloudIcon,
    },
    {
        title: "DevOps",
        description: "CI/CD pipelines & infrastructure as code",
        icon: CodeBracketIcon,
    },
    {
        title: "Cybersecurity",
        description: "Enterprise-grade protection & threat monitoring",
        icon: ShieldCheckIcon,
    },
];

const TopServices: React.FC<TopServicesProps> = ({
    services = DEFAULT_SERVICES,
    className = "",
}) => {
    return (
        <section className={`relative py-20 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl lg:max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Next-Gen Digital Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Transform your business with our cutting-edge technology
                        services
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<Service> = ({ title, description, icon: Icon }) => (
    <motion.article
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative rounded-xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all"
    >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg">
                    <Icon className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{description}</p>

            <div className="mt-6 flex items-center gap-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Explore service</span>
                <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </div>
        </div>
    </motion.article>
);

export default TopServices;
