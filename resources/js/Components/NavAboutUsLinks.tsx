import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "./BorderHover";

interface AboutLinksProps {
    children?: ReactNode;
}

function AboutLinks({ children }: AboutLinksProps) {
    return (
        <div className="p-4 max-w-3xl grid text-xs font-medium">
            <NavCard>
                <div className="min-w-full flex flex-col gap-y-4 text-black hover:text-slate-400">
                    <BorderHover
                        defBorderColor="bg-slate-200"
                        hovBorderColor="bg-black"
                    >
                        <a href="/about" className="py-1 hover:text-black">
                            About Us
                        </a>
                    </BorderHover>
                    <BorderHover
                        defBorderColor="bg-slate-200"
                        hovBorderColor="bg-black"
                    >
                        <a href="#" className="py-1 hover:text-black">
                            Blog
                        </a>
                    </BorderHover>
                    <BorderHover
                        defBorderColor="bg-slate-200"
                        hovBorderColor="bg-black"
                    >
                        <a href="#" className="py-1 hover:text-black">
                            Our Services
                        </a>
                    </BorderHover>
                </div>
            </NavCard>
        </div>
    );
}

export default AboutLinks;
