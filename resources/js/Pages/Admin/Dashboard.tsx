import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";
import { 
    FaFileAlt, 
    FaFileInvoiceDollar, 
    FaEye, 
    FaChartLine,
    FaPlus,
    FaEdit,
    FaClock
} from "react-icons/fa";

interface Post {
    id: number;
    title: string;
    slug: string;
    views: number;
    category: {
        name: string;
    } | null;
    created_at: string;
}

interface Props {
    posts: Post[];
    stats?: {
        totalPosts: number;
        totalQuotes: number;
        totalViews: number;
        recentQuotes: number;
    };
}

const Dashboard: React.FC<Props> = ({ posts, stats }) => {
    // Calculate stats if not provided
    const totalPosts = stats?.totalPosts || posts.length;
    const totalViews = stats?.totalViews || posts.reduce((sum, post) => sum + post.views, 0);

    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back!
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Here's what's happening with your platform.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">
                                    Total Posts
                                </p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {totalPosts}
                                </p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaFileAlt className="text-blue-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">
                                    Total Views
                                </p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {totalViews.toLocaleString()}
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaEye className="text-green-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">
                                    Quote Requests
                                </p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {stats?.totalQuotes || 0}
                                </p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaFileInvoiceDollar className="text-purple-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">
                                    Recent Activity
                                </p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">
                                    {stats?.recentQuotes || 0}
                                </p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-full">
                                <FaChartLine className="text-red-600 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href={route("posts.create")}
                            className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                        >
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaPlus className="text-blue-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Create New Post
                                </p>
                                <p className="text-sm text-gray-500">
                                    Write a new blog post
                                </p>
                            </div>
                        </Link>

                        <Link
                            href={route("admin.posts")}
                            className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaEdit className="text-green-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Manage Posts
                                </p>
                                <p className="text-sm text-gray-500">
                                    Edit or delete posts
                                </p>
                            </div>
                        </Link>

                        <Link
                            href={route("admin.quotes.index")}
                            className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
                        >
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaFileInvoiceDollar className="text-purple-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Manage Quotes
                                </p>
                                <p className="text-sm text-gray-500">
                                    View quote requests
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">
                            Top Performing Posts
                        </h2>
                        <Link
                            href={route("admin.posts")}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Views
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Published
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {posts.slice(0, 10).map((post) => (
                                    <tr key={post.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {post.title}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {post.category?.name || "Uncategorized"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-900">
                                                <FaEye className="mr-2 text-gray-400" />
                                                {post.views.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FaClock className="mr-2 text-gray-400" />
                                                {new Date(post.created_at).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <Link
                                                href={route("posts.show", post.slug)}
                                                className="text-blue-600 hover:text-blue-900 mr-3"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={route("posts.edit", post.id)}
                                                className="text-yellow-600 hover:text-yellow-900"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {posts.length === 0 && (
                        <div className="px-6 py-12 text-center">
                            <FaFileAlt className="mx-auto text-gray-400 text-5xl mb-4" />
                            <p className="text-gray-500 text-lg">No posts yet</p>
                            <Link
                                href={route("posts.create")}
                                className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Create Your First Post
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
