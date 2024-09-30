"use client";
import React from "react";
import Image from "next/image";
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
export default function Payment() {
    return (
        <>
            <div className=" grid grid-cols-3 xl:grid-cols-6 mx-6 md:gap-x-2 justify-items-center items-center gap-x-9 gap-y-4 ">
                <Image
                    src={"/logos/krungthai.png"}
                    width={50}
                    height={100}
                    alt={"Krungthai Bank logo"}
                    className="w-[90%] md:w-[50%]"
                />
                <Image
                    src={"/logos/Bkk_bank.jpg"}
                    width={200}
                    height={100}
                    alt={"Bangkok Bank logo"}
                    className=""
                />
                <Image
                    src={"/logos/SCB_logo.jpg"}
                    width={50}
                    height={100}
                    className="w-[80%] md:w-[40%]"
                    alt={"SCB logo"}
                />
                <Image
                    src={"/logos/kbank_logo.png"}
                    width={60}
                    height={100}
                    alt={"Kasikorn Bank  logo"}
                    className=" w-[50%] md:w-auto"
                />
                <Image
                    src={"/logos/kbz-logo.png"}
                    width={80}
                    height={100}
                    alt={"Kbz pay  logo "}
                    className=" w-[50%] md:w-[80px]"
                />
                <Image
                    src={"/logos/PromptPay-logo.png"}
                    width={100}
                    height={100}
                    alt={"Promptpay logo"}
                    className="md:w-[60%]"
                />
            </div>
        </>
    );
}
