"use client";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProductImageZoom from "./ProductImageZoom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { buyNow } from "../redux/slices/buyNowItemSlice";
import { useRouter } from "next/navigation";
import { addToCart } from "../redux/slices/cartSlice";
import { product } from "../types";
import { RootState } from "../redux/store";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ProductDetail({ product }: { product?: product }) {
    if (!product) {
        return;
    }
    const stock = product.stock;
    const router = useRouter();
    const [count, setCount] = useState<number>(1);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        if (count >= stock) {
            alert("you exceed our stock item");
            return;
        }
        setCount(count + 1);
    };
    const handleDecrease = () => {
        if (count <= 1) {
            return;
        }
        setCount(count - 1);
    };
    const handleAddToCart = () => {
        const itemToAdd = {
            ...product,
            count,
        };
        dispatch(addToCart(itemToAdd));
        toast("Add to Cart", {
            description: "Product  has successfully added",
            action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
            },
        });
    };
    const buyNowHandler = () => {
        dispatch(buyNow(product));
        router.push("/checkout");
    };
    return (
        <>
            <div className=" m-12   grid grid-cols-1  lg:grid-cols-2 justify-content-center    gap-10">
                <div className="">
                    <ProductImageZoom images={product.productImages} />
                </div>
                <div className=" flex flex-col gap-6">
                    <span>
                        <h1 className="font-bold text-xl">{product.name}</h1>
                        <h2 className="text-black/60">{product.productCode}</h2>
                    </span>

                    <p className="text-xl font-bold">{product.price} ฿</p>
                    <p className="text-xl">Stock : {product.stock} Item</p>
                    <div className="flex justify-start gap-10 items-center">
                        <button
                            className=" bg-[#D9d9d9] px-5 py-3 text-xl rounded-md"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <p className="  w-3 ">{count}</p>
                        <button
                            className=" bg-[#D9d9d9] px-5 py-3 text-xl rounded-md"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                    <span>
                        <h3 className=" font-bold text-xl">Description</h3>
                        <p className=" py-4 text-neutral-500 text-justify ">
                            {product.description}
                        </p>
                    </span>
                    <span className="  flex  flex-col gap-5 md:flex-row xl:gap-9">
                        <button
                            className="px-5 py-3 bg-[#228769] hover:font-bold duration-200 delay-200 text-white rounded-md"
                            onClick={handleAddToCart}
                        >
                            <span className="flex justify-center items-center gap-3">
                                <FaCartShopping /> Add to Cart
                            </span>
                        </button>

                        <button
                            className="px-8 py-3 hover:font-bold duration-200 delay-200 bg-black text-white rounded-md"
                            onClick={buyNowHandler}
                        >
                            Buy Now
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}
