import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "../Hover/BorderHover";

interface ServicesLinksProps {
    children?: ReactNode;
}

function ServicesLinks({ children }: ServicesLinksProps) {
    return (
        <div className="grid">
            <div className="p-4 grid md:grid-cols-3 gap-5 lg:gap-x-10 text-xs font-medium">
                <NavCard title="Web Development">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Website Development
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Web Application Development
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Website Design
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Website maintenance
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="eCommerce">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                eCommerce Web App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                eCommerce Mobile App
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="App Development">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Mobile App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Web App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                App maintenance
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Consulting">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Digital Transformation
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                App Consulting
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Cloud migration
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Web-hosting
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Software Testing" />
                <NavCard title="DevOps" />
                <NavCard title="Cloud Integration" />
            </div>
        </div>
    );
}

export default ServicesLinks;
