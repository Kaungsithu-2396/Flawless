"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";
export default function ProductSwiper({ items }: { items: any }) {
    const { productImageCol } = items;
    return (
        <div className="my-4 ">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                loop={true}
                keyboard={true}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                ]}
            >
                {items.map((el: any) => {
                    return (
                        <>
                            <SwiperSlide>
                                <div className="">
                                    <Link href={`/detail/${el._id}`}>
                                        <Image
                                            src={el.productImageCol[0].url}
                                            width={100}
                                            height={100}
                                            sizes="100vw"
                                            className=" rounded-md w-full xl:w-[80%] m-auto py-4  "
                                            alt="Image for product"
                                            priority={true}
                                        />
                                        <span className="text-center my-4">
                                            <h1 className="font-bold">
                                                {el.name}
                                            </h1>
                                            <p>{el.price} B</p>
                                        </span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </>
                    );
                })}
            </Swiper>
        </div>
    );
}
