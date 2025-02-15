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
            <span className=" hover:text-red-600 transition-colors duration-200">
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

    const menuItems = [
        { title: "Services", Component: ServicesLinks },
        { title: "Technologies", Component: TechnologiesLinks },
        { title: "Industries", Component: IndustriesLinks },
        { title: "Work", Component: WorkLinks },
        { title: "About", Component: AboutLinks },
    ];

    const mobileMenuItems = [
        { title: "Services", route: "home" },
        { title: "Technologies", route: "home" },
        { title: "Industries", route: "home" },
        { title: "Our Work", route: "home" },
    ];

    return (
        <div className="relative flex flex-col">
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white shadow-md"
                        : " text-white bg-transparent"
                }`}
            >
                <MaxWidthWrapper>
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
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
                    {mobileMenuItems.map(({ title, route }) => (
                        <Link
                            key={title}
                            href={route}
                            className="flex items-center justify-between px-6 py-4 text-gray-700 hover:bg-gray-50"
                        >
                            <span className="font-medium">{title}</span>
                            <IoIosArrowForward className="text-red-600 h-5 w-5" />
                        </Link>
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
            <div className="pt-16">{children}</div>
        </div>
    );
}
