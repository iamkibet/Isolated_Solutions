import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const slidesData = [
    { text: "Create and Deploy your business technology." },
    { text: "How eCommerce solutions redefine your business." },
    { text: "The only place with intuitive and feature-packed MVPs." },
    { text: "Fast-paced web and mobile developments." },
    {
        text: "Monitor sales and purchases; generate reports for data-driven planning.",
    },
];

export default function Slide() {
    if (!slidesData || slidesData.length === 0) {
        return (
            <div className="flex items-center justify-center h-32 text-white">
                <p>No slides available.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="swiper-container"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-[9rem] p-4">
                            <p className="text-center text-white/80 text-sm font-semibold md:text-lg">
                                {slide.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>
                {`
                    .swiper-pagination-bullet {
                        background-color: #ffff;
                        transition: background-color 0.3s ease;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: #ff4757; /* Active bullet color */
                    }
                    .swiper-pagination {
                        bottom: 10px; /* Adjust position of pagination */
                    }
                `}
            </style>
        </div>
    );
}
