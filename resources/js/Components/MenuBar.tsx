import { Editor } from "@tiptap/react";
import React, { useState, useRef } from "react";
import {
    FiImage,
    FiType,
    FiBold,
    FiItalic,
    FiList,
    FiDivide,
} from "react-icons/fi";
import clsx from "clsx";
import { FaQuoteLeft } from "react-icons/fa";

interface MenuBarProps {
    editor: Editor | null;
    items: string[];
    onImageUpload: (file: File) => Promise<void>;
}

const MenuBar = ({ editor, items, onImageUpload }: MenuBarProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [headingOpen, setHeadingOpen] = useState(false);

    if (!editor) return null;

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            await onImageUpload(file);
            e.target.value = ""; // Reset input
        }
    };

    const toggleHeading = (level: any) => {
        editor.chain().focus().toggleHeading({ level }).run();
        setHeadingOpen(false);
    };

    const menuItems = {
        heading: (
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setHeadingOpen(!headingOpen)}
                    className={clsx(
                        "p-2 hover:bg-gray-100 rounded-md",
                        editor.isActive("heading") && "bg-gray-100"
                    )}
                    aria-label="Headings"
                >
                    <FiType className="w-5 h-5" />
                </button>
                {headingOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg">
                        {[1, 2, 3].map((level) => (
                            <button
                                key={level}
                                type="button"
                                onClick={() => toggleHeading(level)}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                            >
                                Heading {level}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        ),
        bold: (
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={clsx(
                    "p-2 hover:bg-gray-100 rounded-md",
                    editor.isActive("bold") && "bg-gray-100"
                )}
                aria-label="Bold"
            >
                <FiBold className="w-5 h-5" />
            </button>
        ),
        italic: (
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={clsx(
                    "p-2 hover:bg-gray-100 rounded-md",
                    editor.isActive("italic") && "bg-gray-100"
                )}
                aria-label="Italic"
            >
                <FiItalic className="w-5 h-5" />
            </button>
        ),
        bulletList: (
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={clsx(
                    "p-2 hover:bg-gray-100 rounded-md",
                    editor.isActive("bulletList") && "bg-gray-100"
                )}
                aria-label="Bullet list"
            >
                <FiList className="w-5 h-5" />
            </button>
        ),
        orderedList: (
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={clsx(
                    "p-2 hover:bg-gray-100 rounded-md",
                    editor.isActive("orderedList") && "bg-gray-100"
                )}
                aria-label="Numbered list"
            >
                <FiList className="w-5 h-5" />
            </button>
        ),
        blockquote: (
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={clsx(
                    "p-2 hover:bg-gray-100 rounded-md",
                    editor.isActive("blockquote") && "bg-gray-100"
                )}
                aria-label="Blockquote"
            >
                <FaQuoteLeft className="w-5 h-5" />
            </button>
        ),
        horizontalRule: (
            <button
                type="button"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="p-2 hover:bg-gray-100 rounded-md"
                aria-label="Horizontal rule"
            >
                <FiDivide className="w-5 h-5" />
            </button>
        ),
        image: (
            <>
                <button
                    type="button"
                    onClick={handleImageClick}
                    className="p-2 hover:bg-gray-100 rounded-md"
                    aria-label="Insert image"
                >
                    <FiImage className="w-5 h-5" />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    accept="image/*"
                />
            </>
        ),
    };

    return (
        <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
            {items.map((item) => {
                const component = menuItems[item as keyof typeof menuItems];
                return component ? (
                    <div key={item} className="relative">
                        {component}
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default MenuBar;
