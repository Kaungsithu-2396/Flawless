"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1200,
                }}
                mousewheel={true}
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
                            className="object-cover"
                            style={{ width: "100%", height: "auto" }}
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
                            className="object-cover"
                            style={{ width: "100%", height: "auto" }}
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover"
                            style={{ width: "100%", height: "auto" }}
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover"
                            style={{ width: "100%", height: "auto" }}
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <div className="">
                        <Image
                            src={"/slide-3.jpg"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover"
                            style={{ width: "100%", height: "auto" }}
                            alt="Image for product"
                            priority={true}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
