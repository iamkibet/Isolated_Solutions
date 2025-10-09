import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import AdminLayout from "@/Layouts/AdminLayout";
import { PaginatedData, Post } from "@/types/types";
import { Link, router, usePage, Head } from "@inertiajs/react";

interface Props {
    posts: PaginatedData<Post>;
}

const Index: React.FC<Props> = ({ posts }) => {
    const { auth } = usePage().props;
    const [sortColumn, setSortColumn] = useState<keyof Post>("created_at");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    const handleSort = (column: keyof Post) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }

        router.get(
            route("admin.posts"),
            {
                sort: column,
                direction: sortDirection === "asc" ? "desc" : "asc",
            },
            { preserveState: true }
        );
    };

    const handleDelete = (postId: number) => {
        if (confirm("Are you sure you want to delete this post?")) {
            router.delete(route("posts.destroy", postId));
        }
    };

    return (
        <AdminLayout title="Manage Posts">
            <Head title="Manage Posts" />
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Blog Posts
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Manage your blog content
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900">
                                {posts.total}
                            </div>
                            <div className="text-xs text-gray-500">
                                Total Posts
                            </div>
                        </div>
                        <Link
                            href={route("posts.create")}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            <FaPlus className="w-5 h-5" />
                            Create Post
                        </Link>
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {[
                                    "Title",
                                    "Author",
                                    "Category",
                                    "Views",
                                    "Created At",
                                    "Actions",
                                ].map((header) => (
                                    <th
                                        key={header}
                                        onClick={() =>
                                            handleSort(
                                                header
                                                    .toLowerCase()
                                                    .replace(
                                                        " ",
                                                        "_"
                                                    ) as keyof Post
                                            )
                                        }
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    >
                                        {header}
                                        {sortColumn ===
                                            header
                                                .toLowerCase()
                                                .replace(" ", "_") && (
                                            <span className="ml-2">
                                                {sortDirection === "asc"
                                                    ? "▲"
                                                    : "▼"}
                                            </span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {posts.data.map((post) => (
                                <tr key={post.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {post.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {post.user.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {post.category?.name ||
                                                "Uncategorized"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {post.views}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(
                                            post.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link
                                            href={route("posts.show", post.id)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-3"
                                        >
                                            <FaEye className="inline-block" />
                                        </Link>
                                        <Link
                                            href={route("posts.edit", post.id)}
                                            className="text-yellow-600 hover:text-yellow-900 mr-3"
                                        >
                                            <FaEdit className="inline-block" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(post.id)
                                            }
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            <FaTrash className="inline-block" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    {/* Add your pagination component here */}
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
