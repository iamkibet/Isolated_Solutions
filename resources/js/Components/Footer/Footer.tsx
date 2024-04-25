import React, { useState } from "react";
import BorderHover from "../BorderHover";
import classnames from "classnames";
import { FooterProps } from "@/types/CardWrap";

const MobileFooterAccordion: React.FC<FooterProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b pb-2 mb-2 last:border-0 last:pb-0">
            <button
                type="button"
                onClick={() => setIsOpen((prevValue) => !prevValue)}
                aria-expanded={isOpen}
                className="flex justify-between items-center w-full text-left focus:outline-none"
            >
                <h2 className="text-base font-semibold uppercase leading-tight text-gray-400">
                    {title}
                </h2>
                <span
                    className={classnames("inline-block align-middle", {
                        "text-xs": true,
                        "rotate-0": isOpen,
                        "rotate-180": !isOpen,
                        "fill-current": true,
                        "ml-2": true,
                        "w-7": true,
                        "h-7": true,
                        transform: true,
                        "duration-200": true,
                    })}
                >
                    {isOpen ? (
                        <span className="text-xl">-</span>
                    ) : (
                        <span className="text-xl">+</span>
                    )}
                </span>
            </button>
            {isOpen && (
                <ul className="pl-4 list-disc list-inside text-base font-normal text-black hover:text-gray-400">
                    {children}
                </ul>
            )}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className=" text-[#14151b] transition-transform border-t border-[#14151b] pt-6">
            <div className="mx-auto w-full hidden md:block">
                <div className="grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-4 border-b-2 border-black">
                    <div className="col-span-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                                Who we are
                            </h2>
                            <ul className="font-medium text-sm text-black hover:text-gray-400">
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="/about">About Us</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Founder</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">FAQs</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Careers</a>
                                    </BorderHover>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mt-6 text-sm font-semibold uppercase text-gray-400">
                                Dedicated Hiring
                            </h2>
                            <BorderHover>
                                <a href="/">
                                    Looking to hire for long-term or full-time
                                    assignments?
                                </a>
                            </BorderHover>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                                Resources
                            </h2>
                            <ul className="text-sm font-medium text-black hover:text-gray-400">
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Blog</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Guides</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Portfolio</a>
                                    </BorderHover>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                                Services
                            </h2>
                            <ul className="text-sm font-medium text-black hover:text-gray-400">
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Mobile App Development</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">iOS App Development</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Android App Development</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Web Design</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">Web Development</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">UI/UX Design</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">QA & Testing</a>
                                    </BorderHover>
                                </li>
                                <li className="mb-4 hover:text-black">
                                    <BorderHover>
                                        <a href="#">WordPress Development</a>
                                    </BorderHover>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                                Contact
                            </h2>
                            <h2>Eldoret Offices</h2>
                            <p>Daima Towers</p>
                        </div>
                    </div>
                </div>
                <div className="py-6 md:flex items-center md:justify-between">
                    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-1/2">
                        <span className="mb-4 text-sm md:text-center md:mb-0 sm:text-center">
                            © {new Date().getFullYear()}{" "}
                            <a href="https://isolatedsolutions.tech/">
                                IsolatedSolutions™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className="space-x-4 md:flex-col text-black hover:text-gray-400">
                            <BorderHover>
                                <a href="#" className="hover:text-black">
                                    Terms of Use
                                </a>
                            </BorderHover>
                            <BorderHover>
                                <a href="#" className="hover:text-black">
                                    Privacy Policy
                                </a>
                            </BorderHover>
                        </div>
                    </div>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <BorderHover>
                            <a
                                href="#"
                                className="text-black hover:text-blue-900 hover:scale-125"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 8 19"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                        </BorderHover>
                        <BorderHover>
                            <a
                                href="#"
                                className="text-black hover:text-blue-900 hover:scale-125"
                            >
                                <svg
                                    version="1.0"
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488.000000 459.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g
                                        transform="translate(0.000000,459.000000) scale(0.100000,-0.100000)"
                                        fill="#000000"
                                        stroke="none"
                                    >
                                        <path d="M14 4579 c-2 -3 160 -224 359 -490 199 -266 622 -832 940 -1257 l578 -773 -37 -42 c-21 -23 -446 -482 -944 -1020 -498 -539 -907 -983 -908 -988 -2 -5 85 -9 210 -8 l213 1 70 77 c39 42 401 433 805 870 404 437 746 807 760 823 l25 29 200 -268 c110 -147 413 -553 673 -901 l474 -632 725 0 c603 0 724 2 720 13 -3 8 -187 256 -409 553 -222 296 -476 636 -564 754 -89 118 -350 469 -582 778 -232 310 -422 568 -422 572 0 7 1226 1338 1643 1783 l119 127 -219 0 -218 -1 -255 -276 c-140 -152 -483 -524 -763 -825 l-507 -548 -615 822 -616 823 -725 5 c-399 3 -728 2 -730 -1z m1718 -886 c237 -318 603 -807 813 -1088 210 -280 676 -904 1036 -1385 360 -482 658 -881 663 -888 6 -9 -65 -12 -324 -12 l-331 0 -656 878 c-1514 2023 -2278 3045 -2287 3060 -6 9 62 12 323 12 l331 0 432 -577z"></path>
                                    </g>
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </BorderHover>
                        <BorderHover>
                            <a
                                href="#"
                                className="text-black hover:text-blue-900 hover:scale-125"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                        </BorderHover>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <MobileFooterAccordion title="Who We Are">
                    <li className="mb-4 hover:text-black">
                        <a href="#">About Us</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Founder</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">FAQs</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Careers</a>
                    </li>
                </MobileFooterAccordion>
                <MobileFooterAccordion title="Resources">
                    <li className="mb-4 hover:text-black">
                        <a href="#">Blog</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Guides</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Portfolio</a>
                    </li>
                </MobileFooterAccordion>
                <MobileFooterAccordion title="Services">
                    <li className="mb-4 hover:text-black">
                        <a href="#">Mobile App Development</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">iOS App Development</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Android App Development</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Web Design</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">Web Development</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">UI/UX Design</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">QA & Testing</a>
                    </li>
                    <li className="mb-4 hover:text-black">
                        <a href="#">WordPress Development</a>
                    </li>
                </MobileFooterAccordion>
                <MobileFooterAccordion title="Contact">
                    <p>Eldoret Offices Daima Towers</p>
                </MobileFooterAccordion>
                <MobileFooterAccordion title="Socials">
                    <div className="flex gap-3 pt-4">
                        <a
                            href="#"
                            className="text-black hover:text-blue-900 hover:scale-125"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="#"
                            className="text-black hover:text-blue-900 hover:scale-125"
                        >
                            <svg
                                version="1.0"
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 488.000000 459.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g
                                    transform="translate(0.000000,459.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none"
                                >
                                    <path d="M14 4579 c-2 -3 160 -224 359 -490 199 -266 622 -832 940 -1257 l578 -773 -37 -42 c-21 -23 -446 -482 -944 -1020 -498 -539 -907 -983 -908 -988 -2 -5 85 -9 210 -8 l213 1 70 77 c39 42 401 433 805 870 404 437 746 807 760 823 l25 29 200 -268 c110 -147 413 -553 673 -901 l474 -632 725 0 c603 0 724 2 720 13 -3 8 -187 256 -409 553 -222 296 -476 636 -564 754 -89 118 -350 469 -582 778 -232 310 -422 568 -422 572 0 7 1226 1338 1643 1783 l119 127 -219 0 -218 -1 -255 -276 c-140 -152 -483 -524 -763 -825 l-507 -548 -615 822 -616 823 -725 5 c-399 3 -728 2 -730 -1z m1718 -886 c237 -318 603 -807 813 -1088 210 -280 676 -904 1036 -1385 360 -482 658 -881 663 -888 6 -9 -65 -12 -324 -12 l-331 0 -656 878 c-1514 2023 -2278 3045 -2287 3060 -6 9 62 12 323 12 l331 0 432 -577z"></path>
                                </g>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="#"
                            className="text-black hover:text-blue-900 hover:scale-125"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </MobileFooterAccordion>
            </div>
        </footer>
    );
};

export default Footer;
