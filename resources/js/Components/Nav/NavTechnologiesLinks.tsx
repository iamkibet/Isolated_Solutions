import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "../Hover/BorderHover";
import { Link } from "@inertiajs/react";

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
                            <Link
                                href={route("technologies.mobile")}
                                className="py-1 hover:text-black"
                            >
                                iOS App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.mobile")}
                                className="py-1 hover:text-black"
                            >
                                Android App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.mobile")}
                                className="py-1 hover:text-black"
                            >
                                React Native App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.mobile")}
                                className="py-1 hover:text-black"
                            >
                                Flutter App
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Cloud">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cloud")}
                                className="py-1 hover:text-black"
                            >
                                AWS
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cloud")}
                                className="py-1 hover:text-black"
                            >
                                Azure
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cloud")}
                                className="py-1 hover:text-black"
                            >
                                Google (GCP)
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="CMS">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cms")}
                                className="py-1 hover:text-black"
                            >
                                WordPress
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cms")}
                                className="py-1 hover:text-black"
                            >
                                Shopify
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.cms")}
                                className="py-1 hover:text-black"
                            >
                                Drupal
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Frontend">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.frontend")}
                                className="py-1 hover:text-black"
                            >
                                React.js
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.frontend")}
                                className="py-1 hover:text-black"
                            >
                                Vue.js
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.frontend")}
                                className="py-1 hover:text-black"
                            >
                                Angular.js
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.frontend")}
                                className="py-1 hover:text-black"
                            >
                                jQuery
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Backend">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.backend")}
                                className="py-1 hover:text-black"
                            >
                                PHP/Laravel
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.backend")}
                                className="py-1 hover:text-black"
                            >
                                Node.js
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.backend")}
                                className="py-1 hover:text-black"
                            >
                                Python/Django
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Full Stack">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.fullstack")}
                                className="py-1 hover:text-black"
                            >
                                MERN Stack
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.fullstack")}
                                className="py-1 hover:text-black"
                            >
                                LAMP Stack
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("technologies.fullstack")}
                                className="py-1 hover:text-black"
                            >
                                MEAN Stack
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>
            </div>
        </div>
    );
}

export default TechnologiesLinks;
