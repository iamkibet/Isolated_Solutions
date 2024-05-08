import React, { useState, ChangeEvent, FormEvent } from "react";
import { router } from "@inertiajs/react";
import Markdown from "markdown-to-jsx";

interface FormData {
    title: string;
    body: string;
    excerpt: string;
    category_id: number;
}

const Create: React.FC = () => {
    const [formData, setFormData] = useState<any>({
        title: "",
        body: "",
        excerpt: "",
        category_id: 1,
    });

    const handleChange = (
        event: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = event.target;

        setFormData((prevFormData: any) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.post("/posts", formData);

        console.log(formData);
    };

    return (
        <div className="flex flex-col w-full p-8 h-screen mx-auto bg-gray-800 text-white">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex flex-col w-full md:w-1/2 space-y-2">
                        <label htmlFor="title" className="font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Write your blog post title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
                        />
                    </div>
                    <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleChange}
                        className="bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="#">1</option>
                    </select>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <label htmlFor="excerpt" className="font-medium">
                        Excerpt
                    </label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        placeholder="Write a short summary of your post"
                        value={formData.excerpt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700"
                    />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                    <label htmlFor="body" className="font-medium">
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        placeholder="Write your blog post in markdown"
                        value={formData.body}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-vertical bg-gray-700"
                        rows={10}
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <div className="border rounded-md p-4 bg-gray-800">
                        <h2 className="text-lg font-medium mb-2">Preview</h2>
                        <Markdown>{formData.body}</Markdown>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
