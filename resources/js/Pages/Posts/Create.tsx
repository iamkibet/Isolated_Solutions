import React, { useState } from "react";

import Layout from "@/Layouts/AdminLayout";
import ReactMarkdown from "react-markdown";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { Category, Tag } from "@/types/types";
import { router, usePage } from "@inertiajs/react";

interface Props {
    categories: Category[];
    tags: Tag[];
}

const Create: React.FC<Props> = ({ categories, tags }) => {
    const { errors } = usePage().props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [categoryId, setCategoryId] = useState("");
    const [previewMode, setPreviewMode] = useState(false);
    const [allTags, setAllTags] = useState<Tag[]>(tags);

    const [newCategory, setNewCategory] = useState("");

    const [newTag, setNewTag] = useState("");
    const [showTagForm, setShowTagForm] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post(route("posts.store"), {
            title,
            content,
            excerpt,
            category_id: selectedCategory,
            new_category: newCategory,
            tags: selectedTags,
            new_tags: newTag,
        });
    };

    const handleTagToggle = (tagId: number) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tagId)
                ? prevTags.filter((id) => id !== tagId)
                : [...prevTags, tagId]
        );
    };

    // const handleAddTag = () => {
    //     if (!newTag.trim()) return;
    //     router.post(
    //         route("tags.store"),
    //         { name: newTag },
    //         {
    //             preserveState: true,
    //             preserveScroll: true,
    //             onSuccess: (page) => {
    //                 const newTagData = page.props.tag as Tag;
    //                 if (newTagData && newTagData.id && newTagData.name) {
    //                     setAllTags([...allTags, newTagData]);
    //                     setSelectedTags([...selectedTags, newTagData.id]);
    //                     setNewTag("");
    //                 }
    //             },
    //         }
    //     );
    // };

    return (
        <Layout title="Create New Post">
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Title Input */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        />
                        {errors.title && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    {/* Excerpt Input */}
                    <div>
                        <label
                            htmlFor="excerpt"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Excerpt
                        </label>
                        <textarea
                            id="excerpt"
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            rows={3}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        />
                        {errors.excerpt && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.excerpt}
                            </p>
                        )}
                    </div>

                    {/* Category Selection */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Category
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="flex-1 block w-full rounded-none rounded-l-md border-gray-300"
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                placeholder="Or create new category"
                                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300"
                            />
                        </div>
                        {errors.category_id && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.category_id}
                            </p>
                        )}
                    </div>

                    {/* Tags Selection */}
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                        </span>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tags.map((tag) => (
                                <button
                                    key={tag.id}
                                    type="button"
                                    onClick={() => handleTagToggle(tag.id)}
                                    className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                                        selectedTags.includes(tag.id)
                                            ? "bg-indigo-100 text-indigo-800"
                                            : "bg-gray-100 text-gray-800"
                                    }`}
                                >
                                    {tag.name}
                                </button>
                            ))}
                        </div>
                        <div className="flex rounded-md shadow-sm">
                            <input
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                placeholder="Add new tags (comma-separated)"
                                className="flex-1 block w-full rounded-md border-gray-300"
                            />
                        </div>
                        {errors.tags && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.tags}
                            </p>
                        )}
                    </div>

                    {/* Markdown Content and Preview */}
                    <div className="flex space-x-4">
                        <div
                            className={`w-full ${
                                previewMode ? "hidden" : "block"
                            } md:w-1/2 md:block`}
                        >
                            <label
                                htmlFor="content"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Content (Markdown)
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={20}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                            />
                            {errors.content && (
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.content}
                                </p>
                            )}
                        </div>

                        <div
                            className={`w-full ${
                                previewMode ? "block" : "hidden"
                            } md:w-1/2 md:block`}
                        >
                            <div className="sticky top-0 bg-white p-4 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Preview
                                </h2>
                            </div>
                            <div className="prose max-w-none p-4">
                                <h1>{title}</h1>
                                <p className="text-gray-600 italic">
                                    {excerpt}
                                </p>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={() => setPreviewMode(!previewMode)}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            {previewMode ? (
                                <>
                                    <FaEyeSlash className="mr-2" /> Hide Preview
                                </>
                            ) : (
                                <>
                                    <FaEye className="mr-2" /> Show Preview
                                </>
                            )}
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
