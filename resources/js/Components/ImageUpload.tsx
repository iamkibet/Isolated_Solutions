
import { useCallback } from "react";

export const ImageUploadHandler = ({
    onUpload,
    children,
}: {
    onUpload: (file: File) => Promise<void>;
    children: React.ReactNode;
}) => {
    const handleDrop = useCallback(
        async (e: React.DragEvent) => {
            e.preventDefault();
            const files = Array.from(e.dataTransfer.files);
            await Promise.all(files.map(onUpload));
        },
        [onUpload]
    );

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed p-4 text-center"
        >
            {children}
        </div>
    );
};
