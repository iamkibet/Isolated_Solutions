import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavCard from "@/Components/Nav/NavCard";
import BorderHover from "@/Components/Hover/BorderHover";
import ServicesLinks from "@/Components/Nav/NavServicesLinks";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-4 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                            <BorderHover
                                defBorderColor="bg-slate-300"
                                hovBorderColor="bg-gray-500"
                            >
                                <a href="/" className="py-4 hover:text-sky-600">
                                    {" "}
                                    - Go Home
                                </a>
                            </BorderHover>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
