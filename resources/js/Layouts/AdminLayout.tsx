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
    FaFileInvoiceDollar,
    FaCogs,
    FaHome,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

interface Props {
    children: ReactNode;
    title: string;
    
}

const AdminLayout: React.FC<Props> = ({ children, title}) => {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(true); // Open by default
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const sidebarItems = [
        { icon: FaChartLine, text: "Dashboard", route: "admin.dashboard" },
        { icon: FaNewspaper, text: "Posts", route: "admin.posts" },
        { icon: FaFileInvoiceDollar, text: "Quotes", route: "admin.quotes.index" },
        { icon: FaCogs, text: "Services", route: "admin.services.index" },
        // { icon: FaUsers, text: "Users", route: "admin.users" },
        // { icon: FaComments, text: "Comments", route: "admin.comments" },
    ];

    return (
        <>
            <Head title={title} />
            <FlashMessage />
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar - Always visible on desktop */}
                <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:static lg:inset-auto`}>
                    <div className="flex flex-col h-full">
                        {/* Logo/Brand */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <Link href={route('admin.dashboard')} className="flex items-center space-x-3">
                                <div className="bg-red-600 p-2 rounded-lg">
                                    <FaCogs className="text-white text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Admin</h2>
                                    <p className="text-xs text-gray-400">Isolated Solutions</p>
                                </div>
                            </Link>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-gray-400 hover:text-white"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                            {sidebarItems.map((item, index) => {
                                const isActive = route().current(item.route);
                                return (
                                    <Link
                                        key={index}
                                        href={route(item.route)}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                            isActive
                                                ? 'bg-red-600 text-white shadow-lg'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                    >
                                        <item.icon size={18} />
                                        <span className="font-medium">{item.text}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Bottom Section - Return to Site */}
                        <div className="p-4 border-t border-gray-700">
                            <Link
                                href={route('home')}
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                            >
                                <FaHome size={18} />
                                <span className="font-medium">View Site</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Bar */}
                    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
                        <div className="flex justify-between items-center px-6 py-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                    className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                                >
                                    <FaBars size={20} />
                                </button>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    {title}
                                </h1>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                {/* User Menu */}
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-full">
                                            <FaUser className="text-white" size={16} />
                                        </div>
                                        <div className="text-left hidden md:block">
                                            <div className="text-sm font-semibold text-gray-900">
                                                {(auth as any)?.user?.name || 'Admin'}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                Administrator
                                            </div>
                                        </div>
                                    </button>
                                    {userMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                                            <Link
                                                href={route("profile.edit")}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                <FaCog className="text-gray-400" />
                                                <span>Profile Settings</span>
                                            </Link>
                                            <div className="border-t border-gray-100 my-1" />
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                                            >
                                                <FaSignOutAlt className="text-red-500" />
                                                <span>Logout</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
