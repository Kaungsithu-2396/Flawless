"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css/pagination";
import { data } from "../data";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import { product } from "../types";
export default function RelatedProducts() {
    const items: product[] = data;
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
                {items.map((el) => {
                    return (
                        <>
                            <SwiperSlide>
                                <div className="">
                                    <Link
                                        href={`/detail/${el.id}/?name=${el.name}`}
                                    >
                                        <Image
                                            src={"/product-detail-1.jpeg"}
                                            width={100}
                                            height={100}
                                            sizes="100vw"
                                            className=" rounded-md w-full xl:w-[80%] m-auto py-4  "
                                            alt="Image for product"
                                            priority={true}
                                        />
                                        <span className="text-center my-4">
                                            <h1 className="font-bold">
                                                Diamond Ring
                                            </h1>
                                            <p>30000 B</p>
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
