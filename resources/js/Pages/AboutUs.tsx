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
            {/* Hero Banner Section */}
            <div
                className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-center bg-cover bg-no-repeat"
                style={bgImg}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60"></div>
                <MaxWidthWrapper>
                    <div className="relative z-10 py-20 md:py-32 px-4 md:px-0">
                        <div className="max-w-3xl space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                                Top Tier Digital Solutions Provider
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
                                About Us
                            </h1>
                            <div className="h-1 w-20 bg-red-600"></div>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed">
                                Our state-of-the-art solutions make us your trusted technology partner. With a clientele across the globe, we build futuristic software products that help businesses overhaul their conventional & complex challenges.
                            </p>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

            {/* Who Are We Section */}
            <div className="bg-white py-16 md:py-24">
                <MaxWidthWrapper>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 px-4 md:px-0">
                            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                                About Our Company
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Who Are We?
                            </h2>
                            <div className="h-1 w-16 bg-red-600"></div>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We are <span className="font-semibold text-gray-900">Isolated Solutions LTD</span>, an ISO:9001 certified digital solutions provider with over 10 years of experience. Our wide range of services includes mobile and web app development using the latest technologies.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="bg-red-50 border border-red-200 rounded-lg px-5 py-3">
                                    <div className="text-2xl font-bold text-red-600">10+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg px-5 py-3">
                                    <div className="text-2xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-gray-600">Projects Delivered</div>
                                </div>
                                <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-3">
                                    <div className="text-2xl font-bold text-green-600">Trusted</div>
                                    <div className="text-sm text-gray-600">Certified</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/work-approach.jpg"
                                alt="Work Approach"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="p-6 md:p-8 bg-white">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                                    Our Work Approach
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    A sense of diligence for planning our technology stack & defining project management strategies enables us to increase our productivity as a service provider.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold group"
                                >
                                    Read Our Case Study
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </MaxWidthWrapper>
            </div>

            {/* Values Section */}
            <div className="bg-gray-50 py-16 md:py-24">
                <MaxWidthWrapper>
                    <div className="text-center mb-12 px-4">
                        <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            What Drives Us
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Values & Approach
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8 border-t-4 border-red-600">
                            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                                Our Direction
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We deliver promising software solutions with effective service delivery architecture. Our efficiency ensures optimal deployment of technological resources.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/core-values.jpg"
                                alt="Core Values"
                                className="w-full h-48 md:h-56 object-cover"
                            />
                            <div className="p-6 md:p-8 border-t-4 border-blue-600">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 -mt-12">
                                    <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                                    Core Values
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Ensuring committed deliveries of all projects within dedicated timelines. Our primary goal is to create value in terms of more revenues and strengthened technological backings.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/progressive-solutions.jpg"
                                alt="Progressive Solutions"
                                className="w-full h-48 md:h-56 object-cover"
                            />
                            <div className="p-6 md:p-8 border-t-4 border-green-600">
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 -mt-12">
                                    <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                                    Progressive Solutions
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Adapting dynamism as the fundamental factor for building fast-moving digital solutions. We aim to create future-oriented solutions that assure growth for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            
            {/* Quote Section */}
            <section className="bg-white py-16 md:py-20">
                <MaxWidthWrapper>
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-red-600">
                            <svg
                                className="w-12 h-12 md:w-16 md:h-16 text-red-600 mb-6"
                                viewBox="0 0 24 27"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                            </svg>
                            <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold leading-relaxed mb-8">
                                "To cope with technological advancement, we must keep innovating—sometimes conventionally, sometimes with breakthrough approaches—but we must maintain our drive for excellence and continuous improvement."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    DK
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">
                                        Dennis Kibet
                                    </div>
                                    <div className="text-sm text-red-600 font-medium">
                                        CEO & Co-Founder
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <GrowBusiness />
        </GuestLayout>
    );
};

export default AboutUs;
