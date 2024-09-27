"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";

export default function Carousel() {
    return (
        <>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                keyboard={true}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                ]}
            >
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-full w-full"
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-full w-full"
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-full w-full"
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-full w-full"
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover h-full w-full"
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
