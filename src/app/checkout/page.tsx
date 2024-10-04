import React from "react";
import Link from "next/link";
import OrderDetai from "../../../components/OrderDetai";
import CheckoutForm from "../../../components/CheckoutForm";
export default function page() {
    return (
        <div className="min-h-screen overflow-scroll">
            <div className="  bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="">Products /</span>
                    </Link>
                    <Link href={"/checkout"}>
                        {" "}
                        <span className=" font-bold">Checkout /</span>
                    </Link>
                </h1>
            </div>
            <div className=" min-h-screen m-4  md:m-12">
                <h1 className=" text-xl font-bold pb-6 ">Billing Details</h1>
                <div className="flex flex-col-reverse md:flex-row justify-start items-start md:gap-5">
                    <CheckoutForm />
                    <OrderDetai />
                </div>
            </div>
        </div>
    );
}
