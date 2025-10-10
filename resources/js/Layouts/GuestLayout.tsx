import { PropsWithChildren, useEffect, useState } from "react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";
import CookieConsent from "@/Components/CookieConsent";

export default function Guest({ children }: PropsWithChildren) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <main className="flex-grow bg-[#f5f5f5]">{children}</main>

            <Footer />
            
            <CookieConsent />
        </div>
    );
}
