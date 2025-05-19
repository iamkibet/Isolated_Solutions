import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import Services from "@/Components/Cards/ServicesWrap";
import Futech from "@/Components/Futech/FutTech";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import Footer from "@/Components/Footer/Footer";

export default function Landing({ auth }: PageProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <section>
            <Head title="Isolated Solutions" />
            <div className="relative">
                <Hero />

                <div className="text-white">
                    <Navbar />
                </div>
            </div>

            <div className="w-full bg-white lg:py-16 ">
                <MaxWidthWrapper >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-3xl  lg:text-4xl xl:text-5xl font-bold lg:font-extrabold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                                Our Top Services
                            </h2>
                            <p className="text-base lg:text-lg text-slate-600 py-4">
                                Empowering businesses with cutting-edge digital
                                solutions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-2/3">
                            {[
                                {
                                    title: "Website Development",
                                    desc: "Create a powerful web presence for your business with modern, responsive designs.",
                                    icon: "🌐",
                                },
                                {
                                    title: "App Development",
                                    desc: "Launch your business on Android and iOS with native mobile applications.",
                                    icon: "📱",
                                },
                                {
                                    title: "eCommerce",
                                    desc: "Transform your business with a robust online shopping platform.",
                                    icon: "🛍️",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    <div className="p-6">
                                        <div className="text-4xl mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            <Services />
            <Futech />
            <Testimonials />
            <Footer />
        </section>
    );
}
