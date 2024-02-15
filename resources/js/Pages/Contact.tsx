import React, { useState, useEffect, useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import kenyaFlag from "../assets/images/kenya.png";
import BorderHover from "@/Components/BorderHover";
import Slider from "@/Components/Slider";
import ContactBottom from "@/Components/ContactBottom";
import Footer from "@/Components/Footer";

const Contact = () => {
    const slides = [
        {
            name: "Titus",
            title: "has Trusted Our Excellence. Are you next?",
            description:
                "“It has been delightful to work with isolated Solutions. They offered quality solutions within my budget. I would highly recommend them, if someone is looking to hiring a website design and development company. Thanks guys.”",
            imageUrl:
                "https://www.sparxitsolutions.com/assets-style/images/bree-argetsinger.jpg",
            imageDescription: "Titus KipKoech",
            imageCountry: "Eldoret",
        },

        {
            name: "James",
            title: "has Trusted Our Excellence. Are you next?",
            description:
                "“They are the best in the market. I was even suprised that they delivered a working demo of my web application in less than 24 Hours. I also like how they communicate regularly with clients”",
            imageUrl:
                "https://www.sparxitsolutions.com/assets-style/images/bree-argetsinger.jpg",
            imageDescription: "James Mwangi",
            imageCountry: "Nairobi",
        },
        {
            name: "Monica",
            title: "has Trusted Our Excellence. Are you next?",
            description:
                "“I like hopw the CTO himself reaches out to customers and engages them in all the decisions that need to be made for the app in terms of teh media to be used and even the designs.”",
            imageUrl:
                "https://www.sparxitsolutions.com/assets-style/images/bree-argetsinger.jpg",
            imageDescription: "Monica Odhiambo",
            imageCountry: "Kisumu",
        },
    ];

    return (
        <GuestLayout>
            <div className="container min-h-screen flex mx-auto p-3">
                <div className="flex flex-col gap-4 lg:pr-4">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                            Our Locations
                        </h1>
                        <div className="p-4 flex flex-row gap-x-7">
                            <span className="hidden md:block">
                                <img src={kenyaFlag} alt="kenya" />
                            </span>
                            <div className="flex flex-col gap-y-3 font-bold text-sm md:text-base">
                                <h1 className="flex flex-col gap-y-2 font-bold text-lg md:text-2xl">
                                    Kenya{" "}
                                    <span className="font-semibold text-sm md:text-lg lg:text-xl">
                                        Eldoret (HQ)
                                    </span>
                                </h1>
                                <p>
                                    <span>Address:</span> 2004-30100
                                </p>
                                <p>
                                    <span>Inquiries:</span>{" "}
                                    <BorderHover>
                                        <a
                                            className="text-blue-500"
                                            href="tel:+254720449012"
                                        >
                                            +254 720 449 012
                                        </a>
                                    </BorderHover>
                                </p>
                                <p>
                                    <span>Support:</span>{" "}
                                    <BorderHover>
                                        <a
                                            className="text-blue-500"
                                            href="tel:+254720449012"
                                        >
                                            +254 777 449 012
                                        </a>
                                    </BorderHover>
                                </p>
                                <p className="border-b-2 border-dotted border-black pb-8">
                                    <span>Email: </span>
                                    <BorderHover>
                                        <a
                                            href="mailto:info@isofeatures.tech"
                                            className="text-blue-500 text-sm"
                                        >
                                            support@isolatedsolutions.com
                                        </a>
                                    </BorderHover>
                                </p>
                                <p>Daima Towers 5th Floor</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex  flex-col p-3 gap-y-2">
                            <h1 className="text-sm md:text-xl lg:text-3xl font-extrabold">
                                Discuss Your Vision With the Industry's Best
                            </h1>
                            <p className="text-sm md:text-lg">
                                Let Our Experts unfold the 360-degree roadmap of
                                your business plan.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col md:flex-row lg:px-3 gap-y-4 gap-x-6 items-center my-2 lg:my-7">
                                <h1 className="font-bold text-lg ">
                                    We are our customer's favorite which makes
                                    us a best-rated solutions provider.
                                </h1>
                                <img
                                    src="https://www.sparxitsolutions.com/assets-style/images/superbcompanies.svg"
                                    alt="Gif"
                                />
                            </div>
                            <div className="hidden md:block">
                                <Slider slides={slides} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 shadow-lg rounded-lg m-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                        Got a technical issue? Want to send feedback about a
                        beta feature? Need details about our Business plan? Let
                        us know.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                placeholder="name@example.com"
                                required
                                onChange={(e) => {}}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-slate-50 hover:text-black rounded-lg sm:w-fit bg-[#02789e] hover:bg-slate-50 hover:border-2 border-[#02789e]"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <div className="container mx-auto p-3">
                <ContactBottom />
                <Footer />
            </div>
        </GuestLayout>
    );
};

export default Contact;
