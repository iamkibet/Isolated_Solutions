import React from "react";
import { motion } from "framer-motion";
import BorderHover from "../Hover/BorderHover";

interface CardProps {
    title: string;
    description: string;
    image: string;
    hoverTitle: string;
    hoverContent: string[];
    p: string;
    className?: string;
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const HoverCard: React.FC<CardProps> = ({
    title,
    description,
    image,
    hoverContent,
    hoverTitle,
    p,
    className,
    imageProps = {},
}) => {
    return (
        <motion.div
            className={`relative w-full h-72 overflow-hidden border transition-all duration-300 ease-in-out hover:shadow-xl ${
                className || ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Default Content */}
            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 my-6">
                        <img
                            {...imageProps}
                            src={image}
                            alt={imageProps.alt || title}
                            className={`object-contain ${
                                imageProps.className || ""
                            }`}
                        />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
                <p className="flex justify-center gap-1 items-center text-sm text-red-500 text-center">
                    {p}{" "}
                    <span className="">
                        <svg
                            className="h-4"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="2"
                                points="7 2 17 12 7 22"
                            />
                        </svg>
                    </span>
                </p>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 bg-[#f5f5f5] opacity-0 text-black transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <div className="w-full h-full p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-red-500 mb-4 text-center">
                        {hoverTitle}
                    </h3>
                    <ul className="list-none text-sm overflow-y-auto flex-grow">
                        {hoverContent.map((item, index) => (
                            <li key={index} className="mb-4 flex items-start">
                                <span className="h-2 w-2 bg-red-500 mr-3 mt-1 flex-shrink-0"></span>
                                <a
                                    href="#"
                                    className="hover:text-red-500 transition-colors duration-300"
                                >
                                    <BorderHover hovBorderColor="bg-red-500">
                                        {item}
                                    </BorderHover>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default HoverCard;
