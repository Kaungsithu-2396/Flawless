import React from "react";
import { FaFacebook, FaInstagram, FaCopyright } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="mt-4  ">
            <footer className="bg-white px-2 py-4  font-bold ">
                <div className=" ">
                    <p className="px-1 flex justify-center items-center gap-4">
                        <FaCopyright /> 2024 Flawless.org. All rights reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
