"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
export default async function page({
    params: { orderID },
}: {
    params: {
        orderID: String;
    };
}) {
    const monthCol: string[] = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sept",
        "October",
        "Nov",
        "Dec",
    ];
    async function getSpecificOrder() {
        try {
            const orderResp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/order/${orderID}`
            );
            return orderResp.data.data;
        } catch (error) {
            console.log(error);
        }
    }
    const specificOrder = await getSpecificOrder();
    const { name, email, phone, address, zipCode, order } = specificOrder;
    const priceCol = order.map((el: any) => el.count * el.price);
    const total = priceCol.reduce((acc: number, val: number) => {
        return acc + val;
    }, 0);

    const orderRecDate = new Date(specificOrder.createdAt);

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
                    <p className="text-sm py-3">{orderID}</p>
                </span>
                <div className="w-1 h-10 bg-black"></div>
                <span className="text-center">
                    <h1 className="md:text-xl">Date</h1>
                    <p className="text-sm py-3">
                        {orderRecDate.getDate()} &nbsp;
                        {monthCol[orderRecDate.getMonth()]} &nbsp;
                        {orderRecDate.getFullYear()}
                    </p>
                </span>
                <div className="w-1 h-10 bg-black"></div>
                <span className="text-center">
                    <h1 className="md:text-xl">Total Item</h1>
                    <p className="text-sm py-3">{specificOrder.order.length}</p>
                </span>
            </div>
            <div className="xl:w-[50%] w-full px-5 xl:px-0 ">
                <h1 className="font-bold text-xl mb-6">Order Detail</h1>
                <span className="flex justify-around md:justify-between font-semibold text-xl  items-center">
                    <h2>Product</h2>
                    <h2>Sub-Total</h2>
                </span>
                <div className="w-full h-[1px] my-4 bg-black"></div>
                {order.map((el: any) => {
                    return (
                        <span
                            key={el._id}
                            className="flex my-3 justify-between items-center "
                        >
                            <p>
                                {el.name}{" "}
                                <span className="px-2"> x {el.count}</span>
                            </p>
                            <p>
                                {" "}
                                <span className="font-bold">
                                    {el.count * el.price}
                                </span>{" "}
                                bhat
                            </p>
                        </span>
                    );
                })}

                <div className="w-full h-[1px] my-4 bg-black"></div>
                <span className="flex justify-between items-center ">
                    <p>Total</p>
                    <p>
                        <span className="font-bold">{total}</span> bhat
                    </p>
                </span>
            </div>
            <div className=" xl:w-[50%] w-full px-4 :px-0">
                <h1 className="text-xl font-bold py-4">Customer Detail</h1>
                <span className="py-3">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>
                        {address} , {zipCode}
                    </p>
                </span>
            </div>
        </section>
    );
}
