import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
};

type Props = {
    posts: Post[];
};

const Blogs: React.FC<Props> = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(6); // Number of posts per page

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <GuestLayout>
            <section className="py-12">
                <header className="text-center">
                    <h2 className="text-3xl font-bold">Blog</h2>
                </header>
                <div className="mt-8">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {currentPosts.map((post, index) => (
                            <li
                                key={post.id}
                                className="flex items-center justify-center py-4"
                            >
                                <a
                                    href="#"
                                    className="flex flex-col items-center justify-center text-center"
                                >
                                    <h3 className="text-lg font-bold">
                                        {post.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-700">
                                        {post.content}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Pagination */}
                <nav className="flex justify-center mt-8">
                    <ul className="flex">
                        <li
                            className={`mr-4 ${
                                currentPage === 1 ? "invisible" : ""
                            }`}
                        >
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from(
                            { length: Math.ceil(posts.length / postsPerPage) },
                            (_, index) => (
                                <li
                                    key={index}
                                    className={`mr-4 ${
                                        currentPage === index + 1
                                            ? "text-blue-600"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className="text-sm font-semibold hover:text-blue-600 focus:outline-none"
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            )
                        )}
                        <li
                            className={`${
                                currentPage ===
                                Math.ceil(posts.length / postsPerPage)
                                    ? "invisible"
                                    : ""
                            }`}
                        >
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                className="text-sm font-semibold text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
        </GuestLayout>
    );
};

export default Blogs;
