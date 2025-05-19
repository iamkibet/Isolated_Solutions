import ApplicationLogo from "@/Components/Nav/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { IoIosMenu, IoIosArrowForward, IoMdClose } from "react-icons/io";
import ServicesLinks from "@/Components/Nav/NavServicesLinks";
import AboutLinks from "@/Components/Nav/NavAboutUsLinks";
import TechnologiesLinks from "@/Components/Nav/NavTechnologiesLinks";
import WorkLinks from "@/Components/Nav/NavWorkLinks";
import IndustriesLinks from "@/Components/Nav/NavIndustriesLinks";
import BorderHover from "@/Components/Hover/BorderHover";
import MaxWidthWrapper from "../../ui/MaxWidthWrapper";

interface DropdownMenuItemProps {
    title: string;
    children: React.ReactNode;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    show: boolean;
}

interface MobileMenuSectionProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const MobileMenuSection: React.FC<MobileMenuSectionProps> = ({
    title,
    children,
    isOpen,
    onToggle,
}) => (
    <div className="border-b border-gray-100">
        <button
            onClick={onToggle}
            className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:bg-gray-50"
        >
            <span className="font-medium">{title}</span>
            <IoIosArrowForward
                className={`text-red-600 h-5 w-5 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                }`}
            />
        </button>
        {isOpen && <div className="bg-gray-50">{children}</div>}
    </div>
);

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
    title,
    children,
    onMouseEnter,
    onMouseLeave,
    show,
}) => (
    <div
        className="relative group hover:cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <BorderHover>
            <span className="hover:text-red-600 transition-colors duration-200">
                {title}
            </span>
        </BorderHover>
        <div
            className={`${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } absolute -right-40 min-w-max p-6 bg-white shadow-xl rounded-lg transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto`}
        >
            <div className="grid gap-4">{children}</div>
        </div>
    </div>
);

export default function Navbar({ children }: PropsWithChildren) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openSections, setOpenSections] = useState<{
        [key: string]: boolean;
    }>({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const menuItems = [
        { title: "Services", Component: ServicesLinks },
        { title: "Technologies", Component: TechnologiesLinks },
        { title: "Industries", Component: IndustriesLinks },
        { title: "Work", Component: WorkLinks },
        { title: "About", Component: AboutLinks },
    ];

    const mobileMenuSections = [
        {
            title: "Services",
            items: [
                { title: "Web Development", route: "services.web-development" },
                { title: "App Development", route: "services.app-development" },
                { title: "E-commerce", route: "services.ecommerce" },
                { title: "Consulting", route: "services.consulting" },
                {
                    title: "Software Testing",
                    route: "services.software-testing",
                },
                { title: "DevOps", route: "services.devops" },
                {
                    title: "Cloud Integration",
                    route: "services.cloud-integration",
                },
            ],
        },
        {
            title: "Technologies",
            items: [
                { title: "Mobile", route: "technologies.mobile" },
                { title: "Cloud", route: "technologies.cloud" },
                { title: "CMS", route: "technologies.cms" },
                { title: "Frontend", route: "technologies.frontend" },
                { title: "Backend", route: "technologies.backend" },
                { title: "Full Stack", route: "technologies.fullstack" },
            ],
        },
        {
            title: "Industries",
            items: [
                { title: "eCommerce", route: "industries.ecommerce" },
                { title: "SaaS", route: "industries.saas" },
                { title: "FinTech", route: "industries.fintech" },
                { title: "EdTech", route: "industries.edtech" },
                { title: "Wellness", route: "industries.wellness" },
                { title: "AgriTech", route: "industries.agritech" },
                { title: "Insurance", route: "industries.insurance" },
                { title: "Government", route: "industries.government" },
            ],
        },
        {
            title: "Other",
            items: [
                { title: "Our Work", route: "work.index" },
                { title: "Portfolio", route: "work.portfolio" },
                { title: "Case Studies", route: "work.case-studies" },
                { title: "About Us", route: "about-us" },
                { title: "Products", route: "products" },
            ],
        },
    ];

    return (
        <div className="relative flex flex-col">
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "text-black bg-white shadow-md"
                        : "bg-transparent"
                }`}
            >
                <MaxWidthWrapper>
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex-shrink-0">
                            <ApplicationLogo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map(({ title, Component }) => (
                                <DropdownMenuItem
                                    key={title}
                                    title={title}
                                    onMouseEnter={() =>
                                        setActiveDropdown(title)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                    show={activeDropdown === title}
                                >
                                    <Component />
                                </DropdownMenuItem>
                            ))}
                            <Link
                                href={route("products")}
                                className="relative rounded-xl px-4 py-2 overflow-hidden group animate-pulse hover:animate-none"
                            >
                                Products
                                <span className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-r from-red-500 to-purple-600 transform origin-top transition-transform duration-300 scale-y-100"></span>
                                <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-r from-red-500 to-purple-600 transform origin-bottom transition-transform duration-300 scale-y-100"></span>
                            </Link>

                            <Link
                                href={route("contact")}
                                className="px-5 py-2.5 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <button
                            onClick={() => setShowMobileNav(!showMobileNav)}
                            className="md:hidden p-2 text-red-600 hover:text-red-700 transition-colors"
                        >
                            {showMobileNav ? (
                                <IoMdClose className="h-6 w-6" />
                            ) : (
                                <IoIosMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </MaxWidthWrapper>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`fixed top-16 inset-x-0 h-[calc(100vh-4rem)] bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
                    showMobileNav ? "translate-x-0" : "translate-x-full"
                } md:hidden z-40`}
            >
                <div className="divide-y divide-gray-100">
                    {mobileMenuSections.map((section) => (
                        <MobileMenuSection
                            key={section.title}
                            title={section.title}
                            isOpen={openSections[section.title] || false}
                            onToggle={() => toggleSection(section.title)}
                        >
                            {section.items.map((item) => (
                                <Link
                                    key={item.title}
                                    href={route(item.route)}
                                    className="flex items-center justify-between px-8 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <span className="font-medium">
                                        {item.title}
                                    </span>
                                    <IoIosArrowForward className="text-red-600 h-4 w-4" />
                                </Link>
                            ))}
                        </MobileMenuSection>
                    ))}
                    <div className="px-6 py-4">
                        <Link
                            href={route("contact")}
                            className="block w-full px-4 py-2.5 text-center bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div className="pt-6 md:pt-16">{children}</div>
        </div>
    );
}
