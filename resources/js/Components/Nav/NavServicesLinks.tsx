import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "../Hover/BorderHover";
import { Link } from "@inertiajs/react";

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
                            <Link
                                href={route("services.web-development")}
                                className="py-1 hover:text-black"
                            >
                                Website Development
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.web-development")}
                                className="py-1 hover:text-black"
                            >
                                Web Application Development
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.web-development")}
                                className="py-1 hover:text-black"
                            >
                                Website Design
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.web-development")}
                                className="py-1 hover:text-black"
                            >
                                Website maintenance
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="eCommerce">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.ecommerce")}
                                className="py-1 hover:text-black"
                            >
                                eCommerce Web App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.ecommerce")}
                                className="py-1 hover:text-black"
                            >
                                eCommerce Mobile App
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="App Development">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.app-development")}
                                className="py-1 hover:text-black"
                            >
                                Mobile App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.app-development")}
                                className="py-1 hover:text-black"
                            >
                                Web App
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.app-development")}
                                className="py-1 hover:text-black"
                            >
                                App maintenance
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Consulting">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.consulting")}
                                className="py-1 hover:text-black"
                            >
                                Digital Transformation
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.consulting")}
                                className="py-1 hover:text-black"
                            >
                                App Consulting
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.consulting")}
                                className="py-1 hover:text-black"
                            >
                                Cloud migration
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.consulting")}
                                className="py-1 hover:text-black"
                            >
                                Web-hosting
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Software Testing">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.software-testing")}
                                className="py-1 hover:text-black"
                            >
                                Learn More
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="DevOps">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.devops")}
                                className="py-1 hover:text-black"
                            >
                                Learn More
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>

                <NavCard title="Cloud Integration">
                    <div className="py-3 w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-100"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("services.cloud-integration")}
                                className="py-1 hover:text-black"
                            >
                                Learn More
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>
            </div>
        </div>
    );
}

export default ServicesLinks;
