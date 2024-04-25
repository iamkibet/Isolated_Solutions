import React from "react";
import profilePic from "../assets/images/Profilepic.jpg";
import BorderHover from "../BorderHover";
import kenyaFlag from "../assets/images/kenya.png";

const ContactBottom = () => {
    return (
        <div className="border-t-2 border-gray-300 border-dashed mt-3">
            <div className="flex flex-col md:flex-row justify-around items-center lg:my-20 gap-x-4">
                <div>
                    <h1 className="text-lg md:text-2xl xl:text-3xl font-bold">
                        Our Locations
                    </h1>
                    <div className="p-2 xl:p-4 flex flex-row gap-x-2 xl:gap-x-7">
                        <span className="hidden md:block">
                            <img src={kenyaFlag} alt="kenya" />
                        </span>
                        <div className="flex flex-col gap-y-1 font-normal text-sm">
                            <h1 className="flex flex-col gap-y-2 font-bold text-lg xl:text-2xl">
                                Kenya{" "}
                                <span className="font-semibold text-sm md:text-base xl:text-lg">
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
                <div className="my-4">
                    <h1 className="text-xl font-bold">
                        Looking to Bring Great <br /> Product to Life?{" "}
                        <span>
                            <p className="text-sm md:text-base font-normal mt-3">
                                But, facing Challanges and blockers along the
                                way?
                            </p>
                        </span>
                    </h1>
                    <button className="py-4 px-5 mt-5 text-sm font-medium text-center text-slate-50 hover:text-black rounded-lg sm:w-fit bg-[#02789e] hover:bg-slate-50 hover:border-2 border-[#02789e]">
                        Book a Free Consultation
                    </button>
                </div>
                <div className="flex flex-col md:flex-row xl:gap-10">
                    <img
                        src={profilePic}
                        alt="Dennis Kibet"
                        className="hidden h-32 w-32 md:h-48 md:w-48 rounded-full"
                    />
                    <div className="mb-4">
                        <h1 className="font-bold text-xl">
                            Dennis Kibet <br />
                            <span className="font-normal text-sm">
                                Chief Technology Officer
                            </span>
                        </h1>
                        <div className="flex gap-x-4 items-center mt-2">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/mail-ios.svg"
                                alt="Email"
                                className="h-7"
                            />
                            <BorderHover>
                                <a
                                    href="mailto:info@isofeatures.tech"
                                    className=" text-sm"
                                >
                                    info@isolatedsolutions.com
                                </a>
                            </BorderHover>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/whatsapp.svg"
                                alt="Whatsapp"
                                className="h-7"
                            />
                            <BorderHover>
                                <a
                                    href="https://api.whatsapp.com/send?phone=254720449012"
                                    className=" text-sm"
                                >
                                    +254 720 449 012
                                </a>
                            </BorderHover>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/skype.svg"
                                alt="SnapChat"
                                className="h-7"
                            />
                            <BorderHover>
                                <a
                                    href="https://api.whatsapp.com/send?phone=254720449012"
                                    className=" text-sm"
                                >
                                    Dennis Kibet
                                </a>
                            </BorderHover>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <img
                                src="https://www.sparxitsolutions.com/assets-style/images/linkedin-icon.svg"
                                alt="LinkedIn"
                                className="h-7"
                            />
                            <BorderHover>
                                <a
                                    href="https://www.linkedin.com/in/denniskibet/"
                                    className=" text-sm"
                                >
                                    DennisKibet
                                </a>
                            </BorderHover>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-10 mb-5 lg:mb-20 ">
                <div className=" md:border-r border-black border-dashed">
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
                        What's The Project plan? <br />
                        <span className="text-base font-normal">
                            Let’s have a quick chat about your plans, ideas, and
                            project requirements making it a job of seconds.
                        </span>
                    </h1>
                    <BorderHover>
                        <a
                            href="https://api.whatsapp.com/send?phone=254720449012"
                            className="text-sm text-red-500"
                        >
                            Click Here to LiveChat!
                        </a>
                    </BorderHover>
                </div>
                <div className="md:border-r border-black border-dashed">
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
                        Got Documents? Share With Us <br />
                        <span className="text-base font-normal">
                            Share your NDA, BRD & all project-related details
                            through email. We will reach out to you at the
                            earliest. Here is our email:
                        </span>
                    </h1>
                    <BorderHover>
                        <a
                            href="mailto:info@isofeatures.tech"
                            className="text-sm text-red-500"
                        >
                            info@isofeatures.tech
                        </a>
                    </BorderHover>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
                        We Are{" "}
                        <span className="text-red-500 text-base">Not</span>{" "}
                        Hiring <br />
                        <span className="text-base font-normal">
                            Become a part of our vision to delivering effective,
                            efficient & elegant solutions.
                        </span>
                    </h1>
                    <BorderHover>
                        <a
                            href="https://api.whatsapp.com/send?phone=254720449012"
                            className="text-sm text-red-500"
                        >
                            View Opportunities
                        </a>
                    </BorderHover>
                </div>
            </div>
        </div>
    );
};

export default ContactBottom;
