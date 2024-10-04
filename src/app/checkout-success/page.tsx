"use client";
import React, { useEffect } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import Link from "next/link";
export default function page() {
    const dispatch = useDispatch();

    return (
        <section className="h-screen flex flex-col justify-center md:justify-start items-center gap-12">
            <div className="bg-[#228769] mx-4 xl:mx-0  xl:w-[50%] rounded-md  mt-5">
                <h1 className="px-5 py-4 text-white font-bold md:text-xl  md:w-[55%] leading-8 m-auto text-center">
                    We successfully received your order. Our team will contact
                    you in very soon
                </h1>
            </div>
            <div className="xl:w-[50%] w-full px-8 xl:px-0   flex justify-between items-center gap-5">
                <span className="md:text-center">
                    <h1 className="md:text-xl">Order ID</h1>
                    <p className="text-sm py-3">1932982</p>
                </span>
                <div className="w-1 h-10 bg-black"></div>
                <span className="text-center">
                    <h1 className="md:text-xl">Date</h1>
                    <p className="text-sm py-3">19 Sept 2024</p>
                </span>
                <div className="w-1 h-10 bg-black"></div>
                <span className="text-center">
                    <h1 className="md:text-xl">Total Item</h1>
                    <p className="text-sm py-3">2</p>
                </span>
            </div>
            <div className="xl:w-[50%] w-full px-5 xl:px-0 ">
                <h1 className="font-bold text-xl mb-6">Order Detail</h1>
                <span className="flex justify-around md:justify-between font-semibold text-xl  items-center">
                    <h2>Product</h2>
                    <h2>Sub-Total</h2>
                </span>
                <div className="w-full h-[1px] my-4 bg-black"></div>
                <span className="flex my-3 justify-between items-center ">
                    <p>
                        Diamond Ring <span className="px-2"> x 1</span>
                    </p>
                    <p>
                        {" "}
                        <span className="font-bold">35000</span> bhat
                    </p>
                </span>
                <span className="flex justify-between items-center ">
                    <p>
                        Diamond Ring <span className="px-2"> x 1</span>
                    </p>
                    <p>
                        {" "}
                        <span className="font-bold">35000</span> bhat
                    </p>
                </span>
                <div className="w-full h-[1px] my-4 bg-black"></div>
                <span className="flex justify-between items-center ">
                    <p>Total</p>
                    <p>
                        <span className="font-bold">750000</span> bhat
                    </p>
                </span>
            </div>
            <div className=" xl:w-[50%] w-full px-4 :px-0">
                <h1 className="text-xl font-bold py-4">Customer Detail</h1>
                <span className="py-3">
                    <p>Min Min Zaw</p>
                    <p>minzaw@gmail.com</p>
                    <p>0643167239</p>
                    <p>Bangkok , 10560</p>
                </span>
            </div>
        </section>
    );
}
