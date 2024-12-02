import React from "react";

import { Link } from "@inertiajs/react";
import { Pagination } from "@/Components/Pagination";
import GuestLayout from "@/Layouts/GuestLayout";
import { Post } from "@/types/types";

interface Props {
    posts: {
        data: Post[];
        links: any;
    };
}

const Index: React.FC<Props> = ({ posts }) => {
    return (
        <GuestLayout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Latest Posts
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.data.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    <Link
                                        href={route("posts.show", post.slug)}
                                        className="hover:text-indigo-600 transition duration-150 ease-in-out"
                                    >
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{post.user.name}</span>
                                    <span className="mx-2">•</span>
                                    <span>
                                        {new Date(
                                            post.created_at
                                        ).toLocaleDateString()}
                                    </span>
                                    {post.category && (
                                        <>
                                            <span className="mx-2">•</span>
                                            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                                                {post.category.name}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div className="mt-4 flex items-center">
                                    <span className="text-gray-500 mr-2">
                                        {post.views} views
                                    </span>
                                    <span className="text-gray-500 mr-2">
                                        •
                                    </span>
                                    <span className="text-green-500 mr-2">
                                        {post.thumbs_up} 👍
                                    </span>
                                    <span className="text-red-500">
                                        {post.thumbs_down} 👎
                                    </span>
                                </div>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <Link
                                    href={route("posts.show", post.slug)}
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-8">
                    <Pagination links={posts.links} />
                </div>
            </div>
        </GuestLayout>
    );
};

export default Index;
