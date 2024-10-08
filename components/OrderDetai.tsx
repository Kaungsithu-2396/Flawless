"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { product } from "../types";
export default function OrderDetai() {
    const buyNowItems = useSelector(
        (state: RootState) => state.buyNow.buyNowItem
    );
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const itemToRender = buyNowItems ? [buyNowItems] : cartItems;
    const subtotalPrice = itemToRender.map(
        (el: product) => el.count * el.price
    );
    const totalAmount = subtotalPrice.reduce((acc, val) => acc + val, 0);

    return (
        <>
            <div className=" w-full h-fit mb-3   bg-[#d9d9d920] pb-5 rounded-md">
                <h1 className="font-bold text-center py-5 text-xl">
                    Order detail
                </h1>
                <div className=" bg-white w-[90%] md:w-[80%]  m-auto">
                    <span className="flex justify-around py-5">
                        <h1>Product</h1>
                        <h1>Sub-Total</h1>
                    </span>
                    <hr />

                    {itemToRender.map((el: product) => {
                        return (
                            <div className="" key={el.id}>
                                <div className=" my-3">
                                    <div className="  md:px-12 md:py-2 flex justify-around">
                                        <span className="">
                                            <p className="font-bold">
                                                {el.name}{" "}
                                                <span className="px-4">x</span>{" "}
                                                {el.count}
                                            </p>
                                            <p className="text-sm text-black/40">
                                                {el.productCode}
                                            </p>
                                        </span>
                                        <span>
                                            <p>{el.price * el.count} bhat</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <hr />
                    <div className=" py-6">
                        <div className=" px-12 py-2 flex justify-evenly  ">
                            <span className="">
                                <p className="font-bold">Total</p>
                            </span>
                            <span>
                                <p>{totalAmount} bhat</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
