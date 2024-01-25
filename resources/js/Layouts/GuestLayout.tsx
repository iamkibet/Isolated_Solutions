import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { IoIosMenu, IoIosArrowForward, IoMdClose } from "react-icons/io";
import ServicesLinks from '@/Components/NavServicesLinks';
import AboutLinks from '@/Components/NavAboutUsLinks';
import TechnologiesLinks from '@/Components/NavTechnologiesLinks';
import WorkLinks from '@/Components/NavWorkLinks';
import IndustriesLinks from '@/Components/NavIndustriesLinks';

export default function Guest({ children }: PropsWithChildren) {
    // show drop-down menus
    let [showServices, setShowServices] = useState(false);
    let [showTechnologies, setShowTechnologies] = useState(false);
    let [showAbout, setShowAbout] = useState(false);
    let [showIndustries, setShowIndustries] = useState(false);
    let [showWork, setShowWork] = useState(false);
    let [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className="relative flex flex-col sm:justify-center items-center bg-gray-100 dark:bg-gray-900">
            <div id="header" className="w-full z-10 sticky top-0 bg-white text-[#14151b] py-4">
                <div className="flex gap-x-5 place-items-center w-full relative">
                    <div className="mx-auto flex gap-x-6 lg:gap-x-14 px-4 items-center w-full justify-between">
                        <Link href="/">
                            <ApplicationLogo className="w-12 h-12 fill-current text-red-500" />
                        </Link>
                        <p className="text-[11px] hidden lg:block w-44">
                            Tech Solutions for your business.
                        </p>

                        <div className="hidden md:flex flex-col md:flex-row gap-y-4 md:gap-x-6 lg:gap-x-14 font-medium text-xs items-center">
                            <div className="relative hover:cursor-pointer"
                            onMouseEnter={()=>{setShowServices(true )}}
                            onMouseLeave={()=>{setShowServices(false )}}
                            >
                                Services
                                <div className={`${showServices ? "block" :"hidden"} absolute -left-40 grid min-w-max p-4 bg-white`}>
                                    <div className="grid mx-auto">
                                        <ServicesLinks />
                                    </div>
                                </div>
                            </div>
                            <div className="relative hover:cursor-pointer"
                            onMouseEnter={()=>{setShowTechnologies(true )}}
                            onMouseLeave={()=>{setShowTechnologies(false )}}
                            >
                                Technologies
                                <div className={`${showTechnologies ? "block" :"hidden"} absolute -left-40 grid min-w-max p-4 bg-white`}>
                                    <div className="grid mx-auto">
                                        <TechnologiesLinks />
                                    </div>
                                </div>
                            </div>
                            <div className="relative hover:cursor-pointer"
                            onMouseEnter={()=>{setShowIndustries(true )}}
                            onMouseLeave={()=>{setShowIndustries(false )}}
                            >
                                Industries
                                <div className={`${showIndustries ? "block" :"hidden"} absolute grid min-w-max p-4 bg-white`}
                                >
                                    <div className="grid mx-auto">
                                        <IndustriesLinks />
                                    </div>
                                </div>
                            </div>
                            <div className="relative hover:cursor-pointer"
                            onMouseEnter={()=>{setShowWork(true )}}
                            onMouseLeave={()=>{setShowWork(false )}}
                            >
                                Work

                                <div className={`${showWork ? "block" :"hidden"} absolute grid min-w-max bg-white`}>
                                    <div className="grid mx-auto">
                                        <WorkLinks />
                                    </div>
                                </div>
                            </div>
                            <p className="relative hover:cursor-pointer"
                            onMouseEnter={()=>{setShowAbout(true )}}
                            onMouseLeave={()=>{setShowAbout(false )}}
                            >
                                Who we Are
                                <div className={`${showAbout ? "block" :"hidden"} absolute grid min-w-max p-4 bg-white`}>
                                    <div className="grid mx-auto">
                                        <AboutLinks />
                                    </div>
                                </div>
                            </p>
                        </div>

                        <Link href={route('contact-us')}
                              className={`ms-4 hidden md:block py-1 px-3 border-[1.5px] border-red-500 rounded-md text-red-500 font-medium hover:text-slate-100 hover:bg-red-500 transition-all duration-300 ease-in-out`}
                        >
                            Contact Us
                        </Link>
                        <div className="block md:hidden"
                        >
                            <IoIosMenu style={{ color: '#dc2626', fontSize: '30px' }}
                                       className={`${showMobileNav ? `hidden` : `block`}`}
                                       onMouseEnter={()=>{setShowMobileNav(true )}}
                            />
                            <IoMdClose style={{ color: '#dc2626', fontSize: '30px' }}
                                       className={`${showMobileNav ? `block` : `hidden`}`}
                                       onClick={()=>{setShowMobileNav(false )}}
                            />
                        </div>
                    </div>
                </div>

                <div className={`${showMobileNav ? `block` : `hidden`} sticky top-0`}>
                    <div className={`flex flex-col divide-y bg-slate-50`}>
                        <div>
                            <Link className={`p-4 flex justify-between`} href={route('home')}>
                                <span className={`font-medium`}>
                                    Services
                                </span>
                                <IoIosArrowForward style={{ color: '#dc2626', fontSize: '26px' }} />
                            </Link>

                        </div>
                        <div >
                            <Link className={`p-4 flex justify-between`} href={route('home')}>
                                <span className={`font-medium`}>
                                    Technologies
                                </span>
                                <IoIosArrowForward style={{ color: '#dc2626', fontSize: '26px' }} />
                            </Link>
                        </div>
                        <div>
                            <Link className={`p-4 flex justify-between`} href={route('home')}>
                                <span className={`font-medium`}>
                                    Industries
                                </span>
                                <IoIosArrowForward style={{ color: '#dc2626', fontSize: '26px' }} />
                            </Link>
                        </div>
                        <div>
                            <Link className={`p-4 flex justify-between`} href={route('home')}>
                                <span className={`font-medium`}>
                                    Our Work
                                </span>
                                <IoIosArrowForward style={{ color: '#dc2626', fontSize: '26px' }} />
                            </Link>
                        </div>
                        <div>
                            <Link className={`p-4 flex justify-between`} href={route('home')}>
                                <span className={`font-medium`}>
                                    About Us
                                </span>
                                <IoIosArrowForward style={{ color: '#dc2626', fontSize: '26px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden min-h-screen">
                {children}
            </div>
        </div>
    );
}
