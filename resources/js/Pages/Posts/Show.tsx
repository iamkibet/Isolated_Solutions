import React from "react";
import { router } from "@inertiajs/react";
import ReactMarkdown from "react-markdown";
import {
    FaThumbsUp,
    FaThumbsDown,
    FaEye,
    FaCalendarAlt,
    FaUser,
    FaTag,
} from "react-icons/fa";
import GuestLayout from "@/Layouts/GuestLayout";
import { Post, PageProps } from "@/types/types";
import { usePage } from "@inertiajs/react";

interface Props {
    post: Post;
}

const Show: React.FC<Props> = ({ post }) => {
    const { auth } = usePage<{ auth: PageProps["auth"] }>().props;

    const handleThumbsUp = () => {
        router.post(route("posts.thumbsUp", post.id));
    };

    const handleThumbsDown = () => {
        router.post(route("posts.thumbsDown", post.id));
    };

    return (
        <GuestLayout>
            <article className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                        <span className="flex items-center mr-4 mb-2">
                            <FaUser className="mr-2" />
                            {post.user.name}
                        </span>
                        <span className="flex items-center mr-4 mb-2">
                            <FaCalendarAlt className="mr-2" />
                            {new Date(post.created_at).toLocaleDateString()}
                        </span>
                        {post.category && (
                            <span className="flex items-center mr-4 mb-2">
                                <FaTag className="mr-2" />
                                {post.category.name}
                            </span>
                        )}
                        <span className="flex items-center mb-2">
                            <FaEye className="mr-2" />
                            {post.views} views
                        </span>
                    </div>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="prose max-w-none mb-8">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                <footer className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleThumbsUp}
                                className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition duration-150 ease-in-out"
                            >
                                <FaThumbsUp />
                                <span>{post.thumbs_up}</span>
                            </button>
                            <button
                                onClick={handleThumbsDown}
                                className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition duration-150 ease-in-out"
                            >
                                <FaThumbsDown />
                                <span>{post.thumbs_down}</span>
                            </button>
                        </div>
                        {auth.user && auth.user.id === post.user.id && (
                            <a
                                href={route("posts.edit", post.id)}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Edit Post
                            </a>
                        )}
                    </div>
                </footer>
            </article>
        </GuestLayout>
    );
};

export default Show;
