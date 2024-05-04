import BorderHover from "@/Components/BorderHover";
import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
    content: string;
    author: string;
    slug: string;
    date: string;
};

type Props = {
    posts: Post[];
    relatedPosts: Post[];
};

const Blogs: React.FC<Props> = ({ posts, relatedPosts }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(6); // Number of posts per page

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <GuestLayout>
            <section className="py-12 container mx-auto">
                <header className="text-center">
                    <div>
                        <h2 className="text-3xl font-bold">Blog</h2>
                        <p className="text-start text-lg mt-4 mb-5">
                            Writing is the painting of the voice. It is the art
                            of expressing thoughts, emotions, and stories
                            through the strokes of words.
                        </p>
                    </div>
                    <div className="text-start">
                        <button className="border-2 border-[#02789e] px-5 py-3 font-medium hover:text-white text-[#14151b] hover:bg-[#02789e] bg-white rounded-lg cursor-pointer mb-8">
                            Become and Author
                        </button>
                    </div>
                </header>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {currentPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden border-2 hover:border-b-[#02789e] hover:bg-gray-50 group"
                        >
                            <a href={`/blog/${post.slug}`} className="relative">
                                <figure className="w-full h-200px rounded-lg overflow-hidden">
                                    <img
                                        src={post.thumbnail}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-110"
                                    />
                                </figure>
                                <div className="p-[15px]">
                                    <div className=" flex justify-start items-center gap-7 mb-4">
                                        <p className="text-light-gray-70 text-fs-6 text-[14px] text-gray-900 font-light">
                                            <span>{post.author}</span>{" "}
                                            <span className="px-2">|</span>
                                            <span>{post.category}</span>
                                        </p>
                                    </div>
                                    <h3 className="mb-5 leading-7 group-hover:text-[#02789e] font-bold text-xl">
                                        {post.title}
                                    </h3>
                                    <p className="blog-text text-gray-700">
                                        {post.content
                                            .split(".")
                                            .slice(0, 4)
                                            .join(".")}
                                    </p>
                                    <BorderHover
                                        defBorderColor="bg-slate-300"
                                        hovBorderColor="bg-black"
                                    >
                                        <a href="/" className="text-[#02789e]">
                                            Read More{" "}
                                            <span className="text-xl">...</span>
                                        </a>
                                    </BorderHover>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <nav className="">
                    <ul className="flex justify-center mt-[40px] list-none p-0">
                        <li
                            className={`mx-5 ${
                                currentPage === 1 ? "invisible" : ""
                            }`}
                        >
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                className="inline-block px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from(
                            { length: Math.ceil(posts.length / postsPerPage) },
                            (_, index) => (
                                <li
                                    key={index}
                                    className={`mx-2 ${
                                        currentPage === index + 1
                                            ? "text-blue-600"
                                            : "text-gray-600"
                                    }`}
                                >
                                    <button
                                        onClick={() => paginate(index + 1)}
                                        className={`inline-block px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300 ${
                                            currentPage === index + 1
                                                ? "bg-blue-500 text-white border-blue-500"
                                                : ""
                                        }`}
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
                                    : "mx-5"
                            }`}
                        >
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                className="inline-block px-4 py-2 bg-gray-200 border border-gray-300 rounded text-gray-700 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white"
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
