import { ReactNode } from "react";
import NavCard from "./NavCard";
import BorderHover from "../Hover/BorderHover";
import { Link } from "@inertiajs/react";

interface IndustriesLinksProps {
    children?: ReactNode;
}

function IndustriesLinks({ children }: IndustriesLinksProps) {
    return (
        <div className="max-w-3xl grid p-4">
            <div className="grid text-xs font-medium">
                <NavCard>
                    <div className="w-fit flex flex-col gap-y-4 text-black hover:text-slate-400">
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.ecommerce")}
                                className="py-1 hover:text-black"
                            >
                                eCommerce
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.saas")}
                                className="py-1 hover:text-black"
                            >
                                SaaS
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.fintech")}
                                className="py-1 hover:text-black"
                            >
                                FinTech
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.edtech")}
                                className="py-1 hover:text-black"
                            >
                                EdTech
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.wellness")}
                                className="py-1 hover:text-black"
                            >
                                Wellness
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.agritech")}
                                className="py-1 hover:text-black"
                            >
                                AgriTech
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.insurance")}
                                className="py-1 hover:text-black"
                            >
                                Insurance
                            </Link>
                        </BorderHover>
                        <BorderHover
                            defBorderColor="bg-slate-200"
                            hovBorderColor="bg-black"
                        >
                            <Link
                                href={route("industries.government")}
                                className="py-1 hover:text-black"
                            >
                                Government
                            </Link>
                        </BorderHover>
                    </div>
                </NavCard>
            </div>
        </div>
    );
}

export default IndustriesLinks;
