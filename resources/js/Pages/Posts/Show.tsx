import Footer from "@/Components/Footer/Footer";
import NewsLetter from "@/Components/NewsLetter";
import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

type Post = {
    title: string;
    body: string;
    created_at: string;
    category: {
        title: string;
        href: string;
    };
    user: {
        name: string;
        profile_img: string;
    };
};

type Props = {
    post: Post;
};

const Show: React.FC<Props> = ({ post }) => {
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const options = {
            day: "2-digit" as const,
            month: "long" as const,
            year: "numeric" as const,
        };
        return date.toLocaleDateString("en-US", options);
    }
    return (
        <GuestLayout>
            <div className="flex bg-white py-12 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div>
                        <div className="flex items-center gap-x-4 text-xs mt-6">
                            <time className="text-gray-500">
                                {formatDate(post.created_at)}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="antialiased text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                            {post.title}
                        </h2>
                        <div className="flex items-center mt-3">
                            <a href={post.user.profile_img}>
                                <img
                                    src={post.user.profile_img}
                                    alt="avatar"
                                    className="w-5 h-5 rounded-full"
                                />
                            </a>
                            <div className="ml-3">
                                <a
                                    href="#"
                                    className="font-semibold text-xs text-gray-500 hover:underline"
                                >
                                    {post.user.name}
                                </a>
                            </div>
                        </div>
                        <p className="mt-2 text-lg font-light leading-8 text-gray-600">
                            {post.body}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {post.title}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {post.body}
                        </p>
                        <div className="flex items-center gap-x-4 text-xs mt-6">
                            <time className="text-gray-500">
                                {formatDate(post.created_at)}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                        </div>
                        <div className="flex items-center mt-6">
                            <a href={post.author.href}>
                                <img
                                    src={post.author.imageUrl}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            </a>
                            <div className="ml-3">
                                <a
                                    href={post.author.href}
                                    className="font-semibold text-gray-900 hover:underline"
                                >
                                    {post.author.name}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <NewsLetter />
        </GuestLayout>
    );
};

export default Show;
