import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { product } from "../types";
export default function ShoppingCart({ cartItems }: { cartItems: product[] }) {
    return (
        <>
            <FiShoppingCart />
            <span className=" text-center text-white flex justify-center items-center w-[20px] h-[20px]   font-bold md:w-[21px] md:h-[21px] text-sm absolute md:top-[-16px] top-[-12px] right-[-10px]  md:right-[-13px]  bg-red-400 rounded-full">
                {cartItems.length}
            </span>
        </>
    );
}
