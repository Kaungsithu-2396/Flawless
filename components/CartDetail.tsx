"use client";
import React from "react";
import Image from "next/image";
import { product } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, removeFromCart } from "../redux/slices/cartSlice";
import { Button } from "@/components/ui/button";
import { RootState } from "../redux/store";
export default function CartDetail({ cart }: { cart: product }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className=" m-6 md-12 flex justify-center gap-5  items-center">
                <div
                    className=" cursor-pointer"
                    onClick={() => dispatch(removeFromCart({ id: cart.id }))}
                >
                    x
                </div>
                <div>
                    <Image
                        src={cart.productImages[0]}
                        width={150}
                        height={100}
                        className="rounded-md md:w-auto w-[100px] "
                        alt="product image"
                    />
                </div>

                <div className="flex justify-center gap-2 md:gap-10 items-center">
                    <button className=" bg-[#d9d9d9] px-3 py-1 md:px-5 md:py-3 rounded-md">
                        -
                    </button>
                    <p>{cart.count}</p>
                    <button
                        className="bg-[#d9d9d9] px-3 py-1 md:px-5 md:py-3 rounded-md"
                        onClick={() => dispatch(increaseCount({ id: cart.id }))}
                    >
                        +
                    </button>
                </div>

                <p className="text-sm md:text-base">
                    {cart.price * cart.count} B
                </p>
            </div>
            <hr />
          
        </>
    );
}
