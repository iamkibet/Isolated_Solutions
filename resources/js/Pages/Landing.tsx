import GuestLayout from "@/Layouts/GuestLayout";
import React from 'react';
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Slide from "@/Components/Slider/Slide";
import Home from "./Home";

export default function Landing({auth}: PageProps)
{
    const bgImg: React.CSSProperties = {
        backgroundImage: 'url("https://www.sparxitsolutions.com/assets-style/images/main-banner.jpg")',
        backgroundAttachment: "sticky"
    };

    return (
        <GuestLayout>
            <Head title="Isolated Solutions" />
            <div className="min-h-[400px] md:min-h-[710px] pb-8 lg:pt-16 lg:px-8 bg-black bg-center bg-cover bg-no-repeat bg-opacity-80" style={bgImg}>
                <div className="container mx-auto grid md:grid-cols-4 py-10 px-4 bg-black bg-opacity-70 md:bg-none md:bg-opacity-0">
                    <div className="flex flex-col pb-8 gap-y-2 md:col-span-2">
                        <span className={`h-1 w-16 bg-white`}></span>
                        <h1 className="mt-1 py-2 text-4xl lg:text-5xl xl:text-7xl font-extrabold text-red-600">
                            We Ideate, Innovate, & Create <span className="text-slate-50 md:text-3xl lg:text-5xl">Technology Solutions</span>
                        </h1>

                        <p className="mt-4 lg:mt-6 pb-5 text-base lg:text-lg xl:text-xl text-slate-300">
                            The goal is to deliver quality-focused Software products to aspiring businesses. Our service delivery approach comprises structured management with an agile adaption of the latest trends.
                        </p>
                        <span className={`md:hidden h-1 w-16 bg-white`}></span>
                    </div>

                    <div className="hidden md:flex md:col-span-2 text-slate-100">
                        <div className="p-3 lg:p-10 lg:py-16 md:grid md:grid-cols-5">
                            <div className="hidden md:block col-span-5 min-h-32"></div>
                            <div className="hidden md:block col-span-3 xl:col-span-2 min-h-32"></div>

                            <div className="md:col-span-2 text-sm md:pt-4">
                                <h3 className="py-1.5 col-span-2 font-semibold xl:text-lg">
                                    Insights To the Innovation
                                </h3>

                                <Slide />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" px-2 mx-auto xl:justify-between bg-white">
                <div className="container lg:mx-auto xl:justify-between p-4 lg:p-6 lg:pb-14 flex flex-nowrap overflow-x-scroll lg:overflow-x-hidden gap-x-10">
                    <div className={`py-1 mt-2 lg:mt-0 min-w-max`}>
                        <h2 className={`text-xl lg:text-3xl xl:text-5xl font-bold lg:font-extrabold`}>Top Services</h2>
                        <p className={`py-1 text-sm lg:text-base xl:text-lg text-slate-800`}>Top-Tier Digital Solutions</p>
                    </div>

                    <div className={`px-2 lg:px-8 min-w-60`}>
                        <p className={`p-2 px-3 bg-black text-slate-200 font-medium lg:text-xl`}>
                            Website Development
                        </p>
                        <p className={`p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs md:text-base`}>
                            Web presence for your business.
                        </p>
                    </div>

                    <div className={`px-2 lg:px-8 min-w-60`}>
                        <p className={`p-2 px-3 bg-black text-slate-200 font-medium lg:text-xl`}>
                            App Development
                        </p>
                        <p className={`p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs md:text-base`}>
                            Your business on Android and iOS.
                        </p>
                    </div>

                    <div className={`px-2 lg:px-8 min-w-60`}>
                        <p className={`p-2 px-3 bg-black text-slate-200 font-medium lg:text-xl`}>
                            eCommerce
                        </p>
                        <p className={`p-3 py-4 -mt-2 ml-3 -mr-3 border border-black text-xs md:text-base`}>
                            Take your shop online.
                        </p>
                    </div>
                </div>
            </div>


            <Home />

        </GuestLayout>
        );
}
