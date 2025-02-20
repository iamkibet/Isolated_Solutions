
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import MenuBar from "./MenuBar";


export const TiptapEditor = ({
    editor,
    toolbarItems,
    onImageUpload,
    className,
}: {
    editor: Editor;
    toolbarItems: string[];
    onImageUpload: (file: File) => Promise<void>;
    className?: string;
}) => {
    const handleImageUpload = async (file: File) => {
        await onImageUpload(file);
    };

    return (
        <div className="space-y-2">
            <MenuBar
                editor={editor}
                items={toolbarItems}
                onImageUpload={handleImageUpload}
            />
            <EditorContent
                editor={editor}
                className={`prose max-w-none focus:outline-none ${className}`}
            />
        </div>
    );
};
