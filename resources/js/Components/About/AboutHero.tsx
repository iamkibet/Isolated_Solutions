import React from "react";
import { Head } from "@inertiajs/react";
import { FaCommentDollar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";

const AboutHero = () => {
    const bgHero: React.CSSProperties = {
        backgroundImage:
            'url("https://www.sparxitsolutions.com/assets-style/images/csr.jpg")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <section className="relative">
            <Head title="About" />
            <div className="h-screen flex items-center" style={bgHero}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Persuading Quality Through Optimum Work-Culture
                        Standards
                    </h1>
                    <p className="text-lg md:text-xl text-white md:w-3/4 leading-relaxed">
                        As an experienced service provider, we reconcile the
                        package of conventional and future-oriented
                        organizational trends to fabricate assorted and
                        sophisticated service solutions even during challenging
                        times.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20">
                    {[
                        {
                            icon: (
                                <FaCommentDollar className="text-red-500 text-4xl" />
                            ),
                            title: "Startup Care Fund",
                            content:
                                "In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K.",
                        },
                        {
                            icon: (
                                <FaPeopleGroup className="text-red-500 text-4xl" />
                            ),
                            title: "Support For Former Employees",
                            content:
                                "In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K.",
                        },
                        {
                            icon: (
                                <TbHealthRecognition className="text-red-500 text-4xl" />
                            ),
                            title: "Health Cover",
                            content:
                                "In the initial days of lockdown due to COVID-19, many organizations could not get the chance to counter the challenge of maintaining their business productivity by taking actionable steps. When the entire world would be in their homes, we launched Startup Care Fund, an initiative to help small to medium-scale businesses by providing them free of cost digital marketing services from the allocated budget of $100K.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="flex items-center mb-6">
                                {item.icon}
                                <h2 className="text-2xl font-semibold ml-4">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
