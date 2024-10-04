import React from "react";
import ContactForm from "../../../components/ContactForm";
import IFrameComponent from "../../../components/IFrameComponent";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLine } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function page() {
    return (
        <>
            <div className="  mx-4  ">
                <div className="m-6">
                    <h1 className="font-bold text-xl">Contact Form</h1>
                    <p className=" text-neutral-400">
                        React out to us via this form
                    </p>
                </div>
                <div className="flex lg:flex-col xl:flex-row md:flex-col flex-col xl:justify-start justify-center   items-center md:mx-4  gap-4">
                    <section className=" w-screen m-6 flex flex-col gap-10 ">
                        <div className="">
                            <ContactForm />
                        </div>
                    </section>
                    <section className="  xl:w-screen m-auto ">
                        <IFrameComponent />
                        <div className="my-6 ">
                            <span className="text-2xl flex justify-start items-center">
                                <IoMdPhonePortrait />{" "}
                                <span className="text-base px-7 ">
                                    +0612983182
                                </span>
                            </span>
                            <span className="text-2xl my-5 flex justify-start items-center">
                                <FaLine />
                                <span className="text-base px-7 ">
                                    @flawless
                                </span>
                            </span>
                            <span className="text-2xl my-5 flex justify-start items-center">
                                <BiLogoGmail />
                                <span className="text-base px-7  ">
                                    <p className="">
                                        flawlessgemsandjewelry@gmail.com
                                    </p>
                                </span>
                            </span>
                            <span className="text-2xl my-5 flex justify-start items-start">
                                <FaHome />
                                <span className="text-base px-7  ">
                                    {" "}
                                    <p>
                                        119 Mahesak, Suriya Wong, Bang Rak,{" "}
                                        <br />
                                        Bangkok 10500
                                    </p>
                                </span>
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
