import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import Services from "@/Components/Cards/ServicesWrap";
import Futech from "@/Components/Futech/FutTech";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";

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

                <Navbar />
            </div>

            <div className=" bg-white lg:py-5">
                <MaxWidthWrapper>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">
                        <div className="w-full sm:w-auto">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold lg:font-extrabold">
                                Top Services
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-slate-800 my-2">
                                Top-Tier Digital Solutions
                            </p>
                        </div>

                        <div className="flex flex-nowrap overflow-x-auto sm:overflow-x-visible gap-6 w-full sm:w-auto">
                            {[
                                {
                                    title: "Website Development",
                                    desc: "Web presence for your business.",
                                },
                                {
                                    title: "App Development",
                                    desc: "Your business on Android and iOS.",
                                },
                                {
                                    title: "eCommerce",
                                    desc: "Take your shop online.",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-60 sm:w-auto"
                                >
                                    <p className="p-2 px-3 bg-black text-slate-200 font-medium text-lg sm:text-xl">
                                        {service.title}
                                    </p>
                                    <p className="p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs sm:text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            <Services />

            <Futech />
            <Testimonials />
        </section>
    );
}
