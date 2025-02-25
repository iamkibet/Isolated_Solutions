import React, { useState } from "react";
import BorderHover from "../Hover/BorderHover";
import classnames from "classnames";
import { FooterProps } from "@/types/CardWrap";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

// ==================== Shared Components ====================
interface FooterSection {
    title: string;
    items: { label: string; href: string }[];
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
}) => (
    <li className="mb-4 hover:text-red-500">
        <BorderHover>
            <a href={href}>{children}</a>
        </BorderHover>
    </li>
);

const SocialIcon: React.FC<SocialLink> = ({ icon, href, label }) => (
    <BorderHover>
        <a
            href={href}
            className="text-black hover:text-blue-900 hover:scale-125"
            aria-label={label}
        >
            {icon}
        </a>
    </BorderHover>
);

// ==================== Footer Data Config ====================
const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "Who we are",
        items: [
            { label: "About Us", href: "/about" },
            { label: "Founder", href: "#" },
            { label: "FAQs", href: "#" },
            { label: "Careers", href: "#" },
        ],
    },
    {
        title: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Guides", href: "#" },
            { label: "Portfolio", href: "#" },
        ],
    },
    {
        title: "Services",
        items: [
            { label: "Mobile App Development", href: "#" },
            { label: "iOS App Development", href: "#" },
            { label: "Android App Development", href: "#" },
            { label: "Web Design", href: "#" },
            { label: "Web Development", href: "#" },
            { label: "UI/UX Design", href: "#" },
            { label: "QA & Testing", href: "#" },
            { label: "WordPress Development", href: "#" },
        ],
    },
];

const SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Facebook page",
        href: "#",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                />
            </svg>
        ),
    },
    // Add other social links similarly
];

// ==================== Mobile Accordion ====================
const MobileFooterAccordion: React.FC<FooterProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b pb-2 mb-2 last:border-0 last:pb-0">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex justify-between items-center w-full text-left"
                aria-expanded={isOpen}
            >
                <h2 className="text-base font-semibold uppercase text-gray-400">
                    {title}
                </h2>
                <span
                    className={classnames("text-xl transition-transform", {
                        "rotate-0": isOpen,
                        "rotate-180": !isOpen,
                    })}
                >
                    {isOpen ? "-" : "+"}
                </span>
            </button>
            {isOpen && (
                <ul className="pl-4 list-disc text-base font-normal">
                    {children}
                </ul>
            )}
        </div>
    );
};

// ==================== Main Footer Component ====================
const Footer = () => {
    const renderDesktopSection = (section: FooterSection) => (
        <div key={section.title} className="col-span-1">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                {section.title}
            </h2>
            <ul className="text-sm font-medium">
                {section.items.map((item, index) => (
                    <FooterLink key={index} href={item.href}>
                        {item.label}
                    </FooterLink>
                ))}
            </ul>
        </div>
    );

    const renderMobileSection = (section: FooterSection) => (
        <MobileFooterAccordion key={section.title} title={section.title}>
            {section.items.map((item, index) => (
                <li key={index}>
                    <a href={item.href} className="hover:text-black">
                        {item.label}
                    </a>
                </li>
            ))}
        </MobileFooterAccordion>
    );

    return (
        <footer className="text-[#14151b] border-t border-[#14151b]">
            <MaxWidthWrapper>
                {/* Desktop View */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-4 border-b-2 border-black">
                        {FOOTER_SECTIONS.map(renderDesktopSection)}
                        <div className="col-span-1">
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-400">
                                Contact
                            </h2>
                            <p className="text-sm font-medium">
                                Eldoret Offices Daima Towers
                            </p>
                        </div>
                    </div>

                    <FooterLegalSection />
                </div>

                {/* Mobile View */}
                <div className="md:hidden">
                    {FOOTER_SECTIONS.map(renderMobileSection)}
                    <MobileFooterAccordion title="Contact">
                        <p>Eldoret Offices Daima Towers</p>
                    </MobileFooterAccordion>
                    <MobileFooterAccordion title="Socials">
                        <div className="flex gap-3 pt-4">
                            {SOCIAL_LINKS.map((props, index) => (
                                <SocialIcon key={index} {...props} />
                            ))}
                        </div>
                    </MobileFooterAccordion>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

// ==================== Sub Components ====================
const FooterLegalSection = () => (
    <div className="py-6 md:flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-1/2">
            <span className="mb-4 md:mb-0 text-sm">
                © {new Date().getFullYear()}{" "}
                <a href="https://isolatedsolutions.tech/">IsolatedSolutions™</a>
                . All Rights Reserved.
            </span>
            <div className="space-x-4">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                    <BorderHover key={index}>
                        <a href="#" className="hover:text-black">
                            {text}
                        </a>
                    </BorderHover>
                ))}
            </div>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-5">
            {SOCIAL_LINKS.map((props, index) => (
                <SocialIcon key={index} {...props} />
            ))}
        </div>
    </div>
);

export default Footer;
