import ApplicationLogo from "@/Components/Nav/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, useRef, useState } from "react";
import { IoIosMenu, IoIosArrowForward, IoMdClose } from "react-icons/io";
import ServicesLinks from "@/Components/Nav/NavServicesLinks";
import AboutLinks from "@/Components/Nav/NavAboutUsLinks";
import TechnologiesLinks from "@/Components/Nav/NavTechnologiesLinks";
import WorkLinks from "@/Components/Nav/NavWorkLinks";
import IndustriesLinks from "@/Components/Nav/NavIndustriesLinks";
import BorderHover from "@/Components/Hover/BorderHover";
import Footer from "@/Components/Footer/Footer";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

export default function Guest({ children }: PropsWithChildren) {
    // show drop-down menus
    let [showServices, setShowServices] = useState(false);
    let [showTechnologies, setShowTechnologies] = useState(false);
    let [showAbout, setShowAbout] = useState(false);
    let [showIndustries, setShowIndustries] = useState(false);
    let [showWork, setShowWork] = useState(false);
    let [showMobileNav, setShowMobileNav] = useState(false);
    let timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShow(true);
    };

    const handleMouseLeave = (
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        timeoutRef.current = setTimeout(() => {
            setShow(false);
        }, 10); // Adjust delay as needed
    };

    return (
        <div className="relative flex flex-col bg-[#f5f5f5] overflow-x-hidden">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div id="header" className="top-0 text-[#14151b] py-4">
                    <div className="flex  w-full  justify-between">
                        <div className="flex items-center w-full justify-between">
                            <Link href="/">
                                <ApplicationLogo />
                            </Link>

                            <div className="flex justify-between flex-row">
                                <div className="hidden md:flex flex-col md:flex-row gap-y-6 md:gap-x-6 xl:gap-x-14 font-medium text-sm xl:text-base items-center text-black hover:text-gray-400">
                                    <div
                                        className="relative hover:cursor-pointer"
                                        onMouseEnter={() =>
                                            handleMouseEnter(setShowServices)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(setShowServices)
                                        }
                                    >
                                        <BorderHover>
                                            <span className="hover:text-black">
                                                Services
                                            </span>
                                        </BorderHover>
                                        <div
                                            className={`${
                                                showServices
                                                    ? "block"
                                                    : "hidden"
                                            } absolute -left-40 grid min-w-max p-4 bg-white`}
                                        >
                                            <div className="grid mx-auto">
                                                <ServicesLinks />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="relative hover:cursor-pointer"
                                        onMouseEnter={() =>
                                            handleMouseEnter(
                                                setShowTechnologies
                                            )
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(
                                                setShowTechnologies
                                            )
                                        }
                                    >
                                        <BorderHover>
                                            <span className="hover:text-black">
                                                Technologies
                                            </span>
                                        </BorderHover>
                                        <div
                                            className={`${
                                                showTechnologies
                                                    ? "block"
                                                    : "hidden"
                                            } absolute -left-40 grid min-w-max p-4 bg-white`}
                                        >
                                            <div className="grid mx-auto">
                                                <TechnologiesLinks />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="relative hover:cursor-pointer"
                                        onMouseEnter={() =>
                                            handleMouseEnter(setShowIndustries)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(setShowIndustries)
                                        }
                                    >
                                        <BorderHover>
                                            <span className="hover:text-black">
                                                Industries
                                            </span>
                                        </BorderHover>
                                        <div
                                            className={`${
                                                showIndustries
                                                    ? "block"
                                                    : "hidden"
                                            } absolute grid min-w-max p-4 bg-white`}
                                        >
                                            <div className="grid mx-auto">
                                                <IndustriesLinks />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="relative hover:cursor-pointer"
                                        onMouseEnter={() =>
                                            handleMouseEnter(setShowWork)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(setShowWork)
                                        }
                                    >
                                        <BorderHover
                                            defBorderColor="bg-white"
                                            hovBorderColor="bg-black"
                                        >
                                            <span className="hover:text-black">
                                                Work
                                            </span>
                                        </BorderHover>

                                        <div
                                            className={`${
                                                showWork ? "block" : "hidden"
                                            } absolute grid min-w-max bg-white`}
                                        >
                                            <div className="grid mx-auto">
                                                <WorkLinks />
                                            </div>
                                        </div>
                                    </div>
                                    <p
                                        className="relative hover:cursor-pointer"
                                        onMouseEnter={() =>
                                            handleMouseEnter(setShowAbout)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeave(setShowAbout)
                                        }
                                    >
                                        <BorderHover>
                                            <span className="hover:text-black">
                                                About
                                            </span>
                                        </BorderHover>
                                        <div
                                            className={`${
                                                showAbout ? "block" : "hidden"
                                            } absolute grid min-w-max p-4 bg-white`}
                                        >
                                            <div className="grid mx-auto">
                                                <AboutLinks />
                                            </div>
                                        </div>
                                    </p>
                                </div>

                                <Link
                                    href={route("contact")}
                                    className={`ms-4 hidden md:block py-1 px-3 border-[1.5px] border-red-500 rounded-md text-red-500 text-sm xl:text-base font-medium hover:text-slate-100 hover:bg-red-500 transition-all duration-300 ease-in-out`}
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="block md:hidden">
                                <IoIosMenu
                                    style={{
                                        color: "#dc2626",
                                        fontSize: "30px",
                                    }}
                                    className={`${
                                        showMobileNav ? `hidden` : `block`
                                    }`}
                                    onMouseEnter={() => {
                                        setShowMobileNav(true);
                                    }}
                                />
                                <IoMdClose
                                    style={{
                                        color: "#dc2626",
                                        fontSize: "30px",
                                    }}
                                    className={`${
                                        showMobileNav ? `block` : `hidden`
                                    }`}
                                    onClick={() => {
                                        setShowMobileNav(false);
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${
                            showMobileNav ? `block` : `hidden`
                        } sticky top-0`}
                    >
                        <div className={`flex flex-col divide-y bg-slate-50`}>
                            <div>
                                <Link
                                    className={`p-4 flex justify-between`}
                                    href={route("landing")}
                                >
                                    <span className={`font-medium`}>
                                        Services
                                    </span>
                                    <IoIosArrowForward
                                        style={{
                                            color: "#dc2626",
                                            fontSize: "26px",
                                        }}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className={`p-4 flex justify-between`}
                                    href={route("landing")}
                                >
                                    <span className={`font-medium`}>
                                        Technologies
                                    </span>
                                    <IoIosArrowForward
                                        style={{
                                            color: "#dc2626",
                                            fontSize: "26px",
                                        }}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className={`p-4 flex justify-between`}
                                    href={route("landing")}
                                >
                                    <span className={`font-medium`}>
                                        Industries
                                    </span>
                                    <IoIosArrowForward
                                        style={{
                                            color: "#dc2626",
                                            fontSize: "26px",
                                        }}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className={`p-4 flex justify-between`}
                                    href={route("landing")}
                                >
                                    <span className={`font-medium`}>
                                        Our Work
                                    </span>
                                    <IoIosArrowForward
                                        style={{
                                            color: "#dc2626",
                                            fontSize: "26px",
                                        }}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className={`p-4 flex justify-between`}
                                    href={route("about-us")}
                                >
                                    <span className={`font-medium`}>
                                        About Us
                                    </span>
                                    <IoIosArrowForward
                                        style={{
                                            color: "#dc2626",
                                            fontSize: "26px",
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f5f5f5]">{children}</div>

            <Footer />
        </div>
    );
}
