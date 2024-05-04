import React, { useState, useEffect } from "react";

interface Slide {
    title: string;
    description: string;
    imageUrl: string;
    imageDescription: string;
    imageCountry: string;
    name: string;
}

interface SliderProps {
    slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [slides]);

    return (
        <div className="relative flex flex-row">
            {slides.map((slide, index) => (
                <div
                    style={{
                        transform: `translateY(${
                            (index - currentSlide) * 100
                        }%)`,
                    }}
                    key={index}
                    className={`absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
                        index === currentSlide ? "block" : "hidden"
                    }`}
                >
                    <h1 className="text-2xl font-bold  mt-8 mb-4">
                        <span className="text-red-500">{slide.name} </span>
                        {slide.title}
                    </h1>
                    <div className="flex flex-row my-4 gap-x-4">
                        <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="object-cover rounded shadow-md h-10"
                        />
                        <p className="flex flex-col font-bold bg-black text-white p-2 text-sm gap-y-1">
                            {slide.imageDescription}{" "}
                            <span>{slide.imageCountry}</span>
                        </p>
                    </div>
                    <p className="text-lg leading-relaxed font-semibold mb-6">
                        {slide.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Slider;
