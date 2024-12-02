import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Footer from "@/Components/Footer/Footer";
import AboutHero from "@/Components/About/AboutHero";
import GrowBusiness from "@/Components/About/GrowBusiness";
import { Head } from "@inertiajs/react";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

const AboutUs = () => {
    const bgImg: React.CSSProperties = {
        backgroundImage:
            'url("https://www.sparxitsolutions.com/assets-style/images/about-banner.jpg")',
        backgroundAttachment: "sticky",
    };

    return (
        <GuestLayout>
            <Head title="About Us" />
            <div
                className="min-h-[200px] md:min-h-[200px] pb-8 lg:pt-16 lg:px-8 bg-black bg-center bg-cover bg-no-repeat bg-opacity-80"
                style={bgImg}
            >
                <MaxWidthWrapper>
                    <div className="py-10 px-4 bg-black bg-opacity-70 md:bg-none md:bg-opacity-0">
                        <div className="flex flex-col pb-8 gap-y-2">
                            <h1 className="mt-1 py-2 text-xl lg:text-2xl xl:text-3xl font-bold text-slate-50">
                                Top Tier Digital Solutions Provider
                            </h1>
                            <span className={`h-1 w-16 bg-white`}></span>
                            <div className="p-4">
                                <h1 className="text-slate-50 font-extrabold py-2 text-2xl lg:text-3xl xl:text-5xl">
                                    About Us
                                </h1>
                                <p className="w-full lg:w-1/2 mt-4 lg:mt-6 pb-5 text-base lg:text-lg text-slate-300">
                                    Our state-of-the-art solutions make us your
                                    trusted technology partner. With a clientele
                                    across the globe, we tend to build
                                    futuristic Software products that help them
                                    overhaul their conventional & complex
                                    challenges.
                                </p>
                            </div>
                            <span
                                className={`md:hidden h-1 w-16 bg-white`}
                            ></span>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
                <MaxWidthWrapper>
                    <section className="py-16">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                                    Who Are We?
                                </h2>
                                <p className="text-gray-600">
                                    We are Isolated Solutions Limited, an
                                    ISO:9001 certified digital solutions
                                    provider with over 10 years of experience.
                                    Our wide range of services includes mobile
                                    and web app development using the latest
                                    technologies.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                                <img
                                    src="https://www.sparxitsolutions.com/assets-style/images/work-approach.jpg"
                                    alt="Work Approach"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        Our Work Approach
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        A sense of diligence for planning our
                                        technology stack & defining project
                                        management strategies enables us to
                                        increase our productivity as a service
                                        provider.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                    >
                                        Read Our Case Study
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-50">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
                                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                                    Our Direction
                                </h2>
                                <p className="text-gray-600">
                                    We bestow promising software solutions that
                                    engage in subtle and effective service
                                    delivery architecture. With our adequate
                                    efficiency, we ensure to build a
                                    constructive plan for deploying the
                                    available technological resources.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                                <img
                                    src="https://www.sparxitsolutions.com/assets-style/images/core-values.jpg"
                                    alt="Core Values"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        Core Values
                                    </h3>
                                    <p className="text-gray-600">
                                        Ensuring committed deliveries of all
                                        projects within dedicated timelines. Our
                                        primary goal is to create value in terms
                                        of more revenues and strengthened
                                        technological backings.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                                <img
                                    src="https://www.sparxitsolutions.com/assets-style/images/progressive-solutions.jpg"
                                    alt="Progressive Solutions"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                        Progressive Solutions
                                    </h3>
                                    <p className="text-gray-600">
                                        Adapting dynamism as the fundamental
                                        factor for building fast-moving digital
                                        solutions. We aim to create
                                        future-oriented solutions that assure
                                        growth for our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </MaxWidthWrapper>
            </div>
            <AboutHero />
            <section>
                <figure className="border-t-8 border-b-4 border-black mt-7">
                    <svg
                        className="w-8 h-8 bg-black text-white mb-4 p-1"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                    <blockquote className="flex justify-center items-center text-base md:text-lg lg:text-2xl text-center mx-3 md:mx-12 md:p-8 font-bold">
                        To cope with technological tide, we must keep sailing,
                        sometimes conventionally or sometimes with a new
                        approach, but we must not lose the continuity of the
                        hustle for achieving more.
                    </blockquote>
                    <figcaption className="flex justify-center items-center text-center mb-6 mt-6 space-x-3">
                        <div className="flex items-center divide-x-2 divide-gray-900 ">
                            <div className="pr-3 font-medium text-gray-900">
                                Dennis Kibet
                            </div>
                            <div className="pl-3 text-xs font-light text-[#02789e]">
                                CEO & Co-Founder
                            </div>
                        </div>
                    </figcaption>
                    <div className="flex justify-end mb-0">
                        <svg
                            className="w-8 h-8 bg-black text-white p-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14"
                        >
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </figure>
            </section>
            <GrowBusiness />
        </GuestLayout>
    );
};

export default AboutUs;
