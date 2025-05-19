import React from "react";
import { router } from "@inertiajs/react";
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
    likes_count: number;
    dislikes_count: number;
    user_reaction: string;
}

const Show: React.FC<Props> = ({
    post,
    likes_count,
    dislikes_count,
    user_reaction,
}) => {
    const { auth } = usePage<{ auth: PageProps["auth"] }>().props;

    const handleThumbsUp = () => {
        router.post(route("posts.thumbsUp", { post: post.slug }));
    };

    const handleThumbsDown = () => {
        router.post(route("posts.thumbsDown", { post: post.slug }));
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

                <div
                    className="prose prose-lg max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <button
                                onClick={handleThumbsUp}
                                className={`flex items-center space-x-2 transition duration-150 ease-in-out ${
                                    user_reaction === "like"
                                        ? "text-green-500"
                                        : "text-gray-600 hover:text-green-500"
                                }`}
                            >
                                <FaThumbsUp className="text-xl" />
                                <span className="font-medium">
                                    {likes_count}
                                </span>
                            </button>
                            <button
                                onClick={handleThumbsDown}
                                className={`flex items-center space-x-2 transition duration-150 ease-in-out ${
                                    user_reaction === "dislike"
                                        ? "text-red-500"
                                        : "text-gray-600 hover:text-red-500"
                                }`}
                            >
                                <FaThumbsDown className="text-xl" />
                                <span className="font-medium">
                                    {dislikes_count}
                                </span>
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
