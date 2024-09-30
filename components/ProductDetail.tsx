import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import ProductImageZoom from "./ProductImageZoom";
import { useState } from "react";
export default function ProductDetail() {
    const [count, setCount] = useState<number>(0);
    return (
        <div className=" m-12   grid grid-cols-1 xl:grid-cols-2 justify-content-center    gap-10">
            <div className="">
                <ProductImageZoom />
            </div>
            <div className=" flex flex-col gap-6">
                <span>
                    <h1 className="font-bold text-2xl">Diamong Ring</h1>
                    <h2 className="text-black/60">Yx8291ck</h2>
                </span>

                <p className="text-2xl font-bold">350000 B</p>
                <p className="text-xl">Stock : 1 Item</p>
                <div className="flex justify-start gap-10 items-center my-4">
                    <button
                        className=" bg-[#D9d9d9] px-5 py-3 text-xl rounded-md"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                    <p className="  w-3 ">{count}</p>
                    <button
                        className=" bg-[#D9d9d9] px-5 py-3 text-xl rounded-md"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                <span>
                    <h3 className=" font-bold text-2xl">Description</h3>
                    <p className=" py-4 text-neutral-500 text-justify ">
                        Here is the brief description tested for developing the
                        design of flowless website which is going to be launched
                        on first week of October. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Magni, minus. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Consequatur
                        perferendis sequi enim eveniet ut molestias nulla
                        necessitatibus eos ipsam earum!
                    </p>
                </span>
                <span className="  flex  flex-col gap-5 md:flex-row xl:gap-9">
                    <button className="px-5 py-3 bg-[#228769] hover:font-bold duration-200 delay-200 text-white rounded-md">
                        <span className="flex justify-center items-center gap-3">
                            <FaCartShopping /> Add to Cart
                        </span>
                    </button>
                    <button className="px-8 py-3 hover:font-bold duration-200 delay-200 bg-black text-white rounded-md">
                        Buy Now
                    </button>
                </span>
            </div>
        </div>
    );
}
