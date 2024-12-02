import React, { useState, ReactNode } from "react";

import {
    FaBars,
    FaTimes,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaChartLine,
    FaNewspaper,
    FaUsers,
    FaComments,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";

interface Props {
    children: ReactNode;
    title: string;
    
}

const AdminLayout: React.FC<Props> = ({ children, title}) => {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const sidebarItems = [
        { icon: FaChartLine, text: "Dashboard", route: "admin.dashboard" },
        { icon: FaNewspaper, text: "Posts", route: "admin.posts" },
        { icon: FaUsers, text: "Users", route: "admin.users" },
        { icon: FaComments, text: "Comments", route: "admin.comments" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="fixed inset-y-0 left-0 z-50 w-64 bg-indigo-700 text-white p-4 shadow-lg md:relative md:translate-x-0"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold">Admin Panel</h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="md:hidden"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <nav>
                            <ul className="space-y-2">
                                {sidebarItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={route(item.route)}
                                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-indigo-600 transition duration-150"
                                        >
                                            <item.icon size={20} />
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="md:hidden"
                        >
                            <FaBars size={24} />
                        </button>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            {title}
                        </h1>
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                <FaUser size={20} />
                                {/* <span>{auth.user.name}</span> */}
                            </button>
                            {userMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    <Link
                                        href={route("profile.edit")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <FaCog className="inline-block mr-2" />{" "}
                                        Settings
                                    </Link>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <FaSignOutAlt className="inline-block mr-2" />{" "}
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
