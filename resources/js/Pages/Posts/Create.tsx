import React, { useState } from "react";
import Layout from "@/Layouts/AdminLayout";
import { router, usePage } from "@inertiajs/react";
import { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

import { TiptapEditor } from "@/Components/RichTextEditor";
import PrimaryButton from "@/Components/PrimaryButton";
import FormField from "@/Components/FormField";

const CreatePost: React.FC = () => {
    const { errors } = usePage().props;
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Configure rich text editor
    const editor = new Editor({
        extensions: [
            StarterKit,
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
    });

    // Handle image uploads
    const handleImageUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const { url } = await response.json();
            editor.chain().focus().setImage({ src: url }).run();
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    // Submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await router.post("/posts", {
                title,
                excerpt,
                content,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout title="Create New Post">
            <div className="max-w-4xl mx-auto p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Title */}
                    <FormField
                        label="Post Title"
                        value={title}
                        onValueChange={setTitle}
                        error={errors.title}
                        required
                        id="title"
                    />

                    {/* Excerpt */}
                    <FormField
                        label="Short Excerpt"
                        value={excerpt}
                        onValueChange={setExcerpt}
                        as="textarea"
                        rows={3}
                        error={errors.excerpt}
                        id="excerpt"
                    />

                    {/* Rich Text Editor */}
                    <div className="border rounded-lg overflow-hidden">
                        <TiptapEditor
                            editor={editor}
                            toolbarItems={[
                                "heading",
                                "bold",
                                "italic",
                                "bulletList",
                                "orderedList",
                                "blockquote",
                                "horizontalRule",
                                "image",
                            ]}
                            onImageUpload={handleImageUpload}
                            className="min-h-[400px] p-4"
                        />
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-4">
                        <PrimaryButton disabled={isSubmitting}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton type="submit" disabled={isSubmitting}>
                            Publish Post
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default CreatePost;
