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
    <li className="mb-3 hover:text-red-600 transition-colors duration-200">
        <BorderHover>
            <a href={href} className="text-gray-600 hover:text-red-600">
                {children}
            </a>
        </BorderHover>
    </li>
);

const SocialIcon: React.FC<SocialLink> = ({ icon, href, label }) => (
    <BorderHover>
        <a
            href={href}
            className="text-gray-600 hover:text-red-600 hover:scale-110 transition-all duration-200"
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
        <div className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex justify-between items-center w-full text-left py-2"
                aria-expanded={isOpen}
            >
                <h2 className="text-base font-semibold text-gray-800">
                    {title}
                </h2>
                <span
                    className={classnames(
                        "text-xl transition-transform duration-200",
                        {
                            "rotate-0": isOpen,
                            "rotate-180": !isOpen,
                        }
                    )}
                >
                    {isOpen ? "-" : "+"}
                </span>
            </button>
            {isOpen && (
                <ul className="pl-4 space-y-2 text-base font-normal text-gray-600">
                    {children}
                </ul>
            )}
        </div>
    );
};

// ==================== Newsletter Subscription Component ====================
const NewsletterSubscription = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription here
        console.log("Newsletter subscription:", email);
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div>
                <label
                    htmlFor="newsletter-email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Subscribe to our newsletter
                </label>
                <div className="flex gap-2">
                    <input
                        type="email"
                        id="newsletter-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-colors"
                        placeholder="Enter your email"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 whitespace-nowrap"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </form>
    );
};

// ==================== Main Footer Component ====================
const Footer = () => {
    const renderDesktopSection = (section: FooterSection) => (
        <div key={section.title} className="col-span-1">
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 tracking-wider">
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
                    <a
                        href={item.href}
                        className="hover:text-red-600 transition-colors duration-200"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </MobileFooterAccordion>
    );

    return (
        <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
            <MaxWidthWrapper>
                {/* Desktop View */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-12 lg:py-12 md:grid-cols-5 border-b border-gray-200">
                        {FOOTER_SECTIONS.map(renderDesktopSection)}
                        <div className="col-span-1">
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 tracking-wider">
                                Newsletter
                            </h2>
                            <p className="text-sm font-medium text-gray-600 mb-4">
                                Stay updated with our latest news and updates.
                            </p>
                            <NewsletterSubscription />
                        </div>
                    </div>
                    <FooterLegalSection />
                </div>

                {/* Mobile View */}
                <div className="md:hidden py-8">
                    {FOOTER_SECTIONS.map(renderMobileSection)}
                    <MobileFooterAccordion title="Newsletter">
                        <p className="text-gray-600 mb-4">
                            Stay updated with our latest news and updates.
                        </p>
                        <NewsletterSubscription />
                    </MobileFooterAccordion>
                    <MobileFooterAccordion title="Socials">
                        <div className="flex gap-6 pt-4">
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
    <div className="py-8 md:flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-2/3">
            <span className="mb-4 md:mb-0 text-sm text-gray-600">
                © {new Date().getFullYear()}{" "}
                <a
                    href="https://isolatedsolutions.org/"
                    className="text-red-600 hover:text-red-700"
                >
                    IsolatedSolutions™
                </a>
                . All Rights Reserved.
            </span>
            <div className="space-x-6">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                    <BorderHover key={index}>
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                        >
                            {text}
                        </a>
                    </BorderHover>
                ))}
            </div>
        </div>
        <div className="flex mt-6 md:mt-0 space-x-6">
            {SOCIAL_LINKS.map((props, index) => (
                <SocialIcon key={index} {...props} />
            ))}
        </div>
    </div>
);

export default Footer;
