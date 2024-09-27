import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Payment() {
    return (
        <>
            <div className=" grid grid-cols-3 md:grid-cols-6 mx-6 md:gap-x-2 justify-items-center items-center gap-x-9 gap-y-4 ">
                <Image
                    src={"/logos/Bkk_bank.jpg"}
                    width={200}
                    height={100}
                    alt={"Bangkok Bank logo"}
                    className="w-full"
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
                    width={50}
                    height={100}
                    alt={"Kasikorn Bank  logo"}
                />
                <Image
                    src={"/logos/kbz-logo.png"}
                    width={50}
                    height={100}
                    alt={"Kbz pay  logo"}
                />
                <Image
                    src={"/logos/PromptPay-logo.png"}
                    width={100}
                    height={100}
                    alt={"Promptpay logo"}
                    className="md:w-[50%]"
                />

                <Image
                    src={"/logos/krungthai.png"}
                    width={50}
                    height={100}
                    alt={"Krungthai Bank logo"}
                    className="w-[70%] md:w-[50%]"
                />
            </div>
        </>
    );
}
