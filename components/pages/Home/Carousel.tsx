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
type image = {
    _id: string;
    image: {
        url: string;
        publicID: string;
    };
};
export default function Carousel({ images }: { images: [image] }) {
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
                {images.map((el: image) => {
                    return (
                        <>
                            <SwiperSlide>
                                <div className="">
                                    <Image
                                        src={el.image.url}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="object-cover h-full w-full"
                                        alt="Image for product"
                                        priority={true}
                                    />
                                </div>
                            </SwiperSlide>
                        </>
                    );
                })}
            </Swiper>
        </>
    );
}
