import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Slide from "@/Components/Slider/Slide";

import MaxWidthWrapper from "../../ui/MaxWidthWrapper";
import StyledText from "@/Components/StyledText";
import Services from "@/Components/Cards/ServicesWrap";
import Futech from "@/Components/Futech/FutTech";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Landing({ auth }: PageProps) {
    const bgImg: React.CSSProperties = {
        backgroundImage:
            'url("https://www.sparxitsolutions.com/assets-style/images/main-banner.jpg")',
        backgroundAttachment: "sticky",
    };

    const phrases = ["Modify", "Ideate", "Deploy", "Design"];

    return (
        <GuestLayout>
            <Head title="Isolated Solutions" />
            <div
                className="min-h-screen flex flex-col bg-black bg-center bg-cover bg-no-repeat bg-opacity-80 px-4 sm:px-6 lg:px-8"
                style={bgImg}
            >
                <MaxWidthWrapper className="relative flex-grow flex flex-col justify-center py-12 sm:py-16 lg:py-24">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="flex flex-col gap-y-4 w-full lg:w-1/2">
                            <span className="h-2 hidden lg:block bg-white w-16"></span>
                            <div className="my-6">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-red-500 leading-tight">
                                    We <StyledText phrases={phrases} />,
                                    Innovate, & Create Software
                                    <span className="block text-slate-50 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-5">
                                        Technology Solutions
                                    </span>
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-300 leading-relaxed mt-4 lg:mt-6 w-full sm:w-3/4 lg:w-full">
                                    Our goal is to deliver quality-focused
                                    software products to aspiring businesses. We
                                    adopt a structured management approach with
                                    agile adaptations to the latest trends.
                                </p>
                            </div>
                            <span className="h-2 bg-white w-16"></span>
                        </div>

                        <div className="hidden  lg:block absolute bottom-60 right-0 w-1/3 mt-0">
                            <div className="mx-10">
                                <h3 className="font-extrabold text-red-500 text-2xl sm:text-3xl flex items-center justify-center mb-4">
                                    Hi...
                                </h3>
                                <Slide />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            <div className="w-full bg-white lg:py-5">
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

            <div className="bg-white">
                <Services />
            </div>
            <Futech />
            <Testimonials />
        </GuestLayout>
    );
}
