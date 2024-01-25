import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../css/app.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className="mt-1 py-2 px-1 h-24 text-xs font-light text-slate-200">
                    <p className="py-1">
                        Create and Deploy your business technology.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="mt-1 py-2 px-1 h-24 text-xs font-light text-slate-200">
                    <p className="py-1">
                        How eCommerce solutions redefines your business.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="mt-1 py-2 px-1 h-24 text-xs font-light text-slate-200">
                    <p className="py-1">
                        The only place with intuitive and feature-packed MVPs.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="mt-1 py-2 px-1 h-24 text-xs font-light text-slate-200">
                    <p className="py-1">
                        Fast-paced web and mobile developments.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="mt-1 py-2 px-1 h-24 text-xs font-light text-slate-200">
                    <p className="py-1">
                        Monitor sales and purchases; generate reports for data-driven planning.
                    </p>
                </div>
            </SwiperSlide>
            </Swiper>
            <style global>
                {`
                .swiper-pagination:{text-align: left;}
                .swiper-pagination-bullet {background-color: white;}
                .swiper-pagination-bullet-active {background-color: red;}
                `}
            </style>
        </>
    );
}
