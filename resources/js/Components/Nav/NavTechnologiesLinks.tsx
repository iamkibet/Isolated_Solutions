import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "../BorderHover";

interface TechnologiesLinksProps {
    children?: ReactNode;
}

function TechnologiesLinks({ children }: TechnologiesLinksProps) {
    return (
        <div className="grid p-4">
            <div className="grid md:grid-cols-3 gap-5 lg:gap-x-10 text-xs font-medium">
                <NavCard title="Mobile">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-300"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                iOS App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Android App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                React Native App
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Flutter App
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Cloud">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                AWS
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Azure
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Google (GCP)
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="CMS">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                WordPress
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Shopify
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Drupal
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Frontend">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                React.js
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Vue.js
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Angular.js
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                jQuery
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Backend">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                PHP/Laravel
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Node.js
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                Python/Django
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Full Stack">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                MERN Stack
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                LAMP Stack
                            </a>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <a href="#" className="py-1 hover:text-black">
                                MERN Stack
                            </a>
                        </BorderHover>
                    </div>
                </NavCard>
            </div>
        </div>
    );
}

export default TechnologiesLinks;
