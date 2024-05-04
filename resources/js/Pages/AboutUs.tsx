import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Footer from "@/Components/Footer/Footer";
import AboutHero from "@/Components/About/AboutHero";
import GrowBusiness from "@/Components/About/GrowBusiness";
import { Head } from "@inertiajs/react";

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
                <div className="container mx-auto grid md:grid-cols-4 py-10 px-4 bg-black bg-opacity-70 md:bg-none md:bg-opacity-0">
                    <div className="flex flex-col pb-8 gap-y-2 md:col-span-2">
                        <h1 className="mt-1 py-2 text-xl lg:text-2xl xl:text-3xl font-bold text-slate-50">
                            Top Tier Digital Solutions Provider
                        </h1>
                        <span className={`h-1 w-16 bg-white`}></span>
                        <div className="p-4">
                            <h1 className="text-slate-50 font-extrabold py-2 text-2xl lg:text-3xl xl:text-5xl">
                                About Us
                            </h1>
                            <p className="mt-4 lg:mt-6 pb-5 text-base lg:text-sm xl:text-lg text-slate-300">
                                Our state-of-the-art solutions make us your
                                trusted technology partner. With a clientele
                                across the globe, we tend to build futuristic
                                Software products that help them overhaul their
                                conventional & complex challenges.
                            </p>
                        </div>
                        <span className={`md:hidden h-1 w-16 bg-white`}></span>
                    </div>
                </div>
            </div>
            <section className="container mx-auto p-3">
                <div className="mt-10 grid md:grid-cols-3 gap-x-3">
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 mb-7 rounded-lg shadow p-5 h-auto">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold my-2 md:my-5">
                                Who Are We?
                            </h1>
                            <p className="text-sm md:text-lg font-normal">
                                We are a Isolated Solutions Limited, ISO:9001,
                                digital solutions provider serving for more than
                                10 years. The company has been accredited
                                several prestigious recognitions for its quality
                                services in the IT-Software industry. Our wide
                                range of services includes mobile and web app
                                development using the latest technologies.
                            </p>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/work-approach.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Our Work Approach
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    A sense of diligence for planning our
                                    technology stack & defining project
                                    management strategies enables us to increase
                                    our productivity as a service provider.
                                </p>
                                <a
                                    href="#"
                                    className="relative group inline-flex items-center px-4 py-3 text-sm font-medium text-center text-black border border-[#02789e] hover:bg-[#02789e] hover:text-slate-50"
                                >
                                    Read Our Case Study
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/our-people.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Our People
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    We ensure a smart, collaborative and
                                    systematic management of all human resources
                                    working towards the common and ultimate goal
                                    of our organization.
                                </p>
                                <a
                                    href="#"
                                    className="relative group inline-flex items-center px-4 py-3 text-sm font-medium text-center text-black border border-[#02789e] hover:bg-[#02789e] hover:text-slate-50"
                                >
                                    Talk to Us
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="mt-10 grid md:grid-cols-3 gap-x-3 mb-5">
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/meet-customer.jpg"
                                    alt="Core Values"
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Who Do We Serve?
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    Service is an opportunity to prove your
                                    excellence. From startups to Fortune 500
                                    companies that availed our services have
                                    accredited us for our committed response to
                                    their needs.
                                </p>
                                <a
                                    href="#"
                                    className="relative group inline-flex items-center px-4 py-3 text-sm md:text-base font-medium text-center hover:text-black border hover:border-[#02789e] bg-[#02789e] hover:bg-slate-50 text-slate-50 cursor-pointer rounded-lg"
                                >
                                    See Our Portfolio
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/our-competency.jpg"
                                    alt="Progressive Solutions"
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Our Competency
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    We deliver client-centric solutions that
                                    bring maximum productivity with minimum
                                    resources while upholding service delivery
                                    principles. As our motto says, ‘Ideate,
                                    Innovate, Create’, we aspire to bring in
                                    result-oriented strategies to carve product
                                    design and creation procedures. <br />{" "}
                                    <br />
                                    Our professionals contribute the best of
                                    their skills to work on the ultimate mission
                                    of establishing our identity as credible
                                    technology leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 border border-gray-200 rounded-lg shadow p-5">
                            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-extrabold my-2 md:my-5">
                                Our Mission
                            </h1>
                            <p className="text-sm md:text-lg font-normal flex-1">
                                We deliver client-centric solutions that bring
                                maximum productivity with minimum resources
                                while upholding service delivery principles. As
                                our motto says, ‘Ideate, Innovate, Create’, we
                                aspire to bring in result-oriented strategies to
                                carve product design and creation procedures.{" "}
                                <br /> <br /> Our professionals contribute the
                                best of their skills to work on the ultimate
                                mission of establishing our identity as credible
                                technology leaders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 grid md:grid-cols-3 gap-x-3 mb-5">
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 border border-gray-200 rounded-lg shadow p-5">
                            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-extrabold my-2 md:my-5">
                                Our Direction
                            </h1>
                            <p className="text-sm md:text-lg font-normal flex-1">
                                We bestow promising software solutions that
                                engage in subtle and effective service delivery
                                architecture. We have taken resultative
                                decisions that allowed us to envision our
                                clients’ objectives fast and simply. <br />{" "}
                                <br />
                                With our adequate efficiency, we ensure to build
                                a constructive plan for deploying the available
                                technological resources. With a well-versed team
                                of technology professionals, we cater tailored
                                software solutions for businesses of different
                                scales and industry domains.
                            </p>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/core-values.jpg"
                                    alt="Core Values"
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Core Values
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    Ensuring committed deliveries of all
                                    projects within dedicated timelines. Our
                                    primary goal while serving our customers is
                                    to create value in terms of more revenues
                                    and strengthened technological backings.{" "}
                                    <br /> <br /> As a leading service provider,
                                    we have attempted to create sustainable
                                    solutions on the grounds of credibility,
                                    quality, and a high-powered delivery
                                    approach.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cols-1 flex flex-col">
                        <div className="max-w-md flex-1 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img
                                    className="rounded-t-lg"
                                    src="https://www.sparxitsolutions.com/assets-style/images/progressive-solutions.jpg"
                                    alt="Progressive Solutions"
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                        Progressive Solutions
                                    </h5>
                                </a>
                                <p className="text-sm mb-5 font-normal text-gray-700">
                                    Adapting dynamism as the fundamental factor
                                    for building fast-moving digital solutions
                                    makes us customers leverage competitive
                                    products to favor their enterprise needs and
                                    ambitions and grow. <br /> <br />
                                    We aim to create future-oriented solutions
                                    that would assure growth for our clients
                                    seeking a technological transition in their
                                    conventional business modules.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutHero />
            <GrowBusiness />
            <div className="container mx-auto p-3">
                <Footer />
            </div>
        </GuestLayout>
    );
};

export default AboutUs;
