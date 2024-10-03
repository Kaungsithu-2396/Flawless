import React from "react";
import { FaFacebook, FaInstagram, FaCopyright } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-white px-2 py-4  mt-5 hidden md:block">
            <div className="flex justify-around items-center">
                <div className=" flex justify-center items-center gap-8">
                    <p>Installment Plan</p>
                    <Link href={"/contact"}>
                        <p>Contact</p>
                    </Link>
                </div>
                <div className="w-1 h-8 bg-black"></div>
                <div className="font-bold text-2xl flex justify-center items-center gap-8">
                    <p className="">
                        <FaFacebook />
                    </p>
                    <p>
                        <FaInstagram />
                    </p>
                </div>
                <div className="w-1 h-8 bg-black"></div>
                <div className=" flex justify-center items-center gap-8">
                    <p>
                        <FaCopyright />
                    </p>
                    <p>2024 Flawless.org. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
