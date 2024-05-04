import React from "react";

type Post = {
    id: number;
    title: string;
    excerpt: string;
    created_at: string;
    slug: string;
    category: {
        title: string;
        href: string;
    };
    author: {
        name: string;
        href: string;
        imageUrl: string;
    };
};

type Props = {
    posts: Post[];
};

const Index: React.FC<Props> = ({ posts }) => {
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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From our blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        We are always sharing our knowledge with you. Enjoy and
                        leave a comment.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center gap-x-4 text-xs">
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
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={`/posts/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="relative mt-8 flex items-center justify-between w-full">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={post.author.imageUrl}
                                        alt=""
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">CTO</p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center font-medium text-blue-500 hover:underline cursor-pointer hover:text-red-600"
                                >
                                    Read more
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
