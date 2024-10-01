"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "../types";
export default function Product({
    id,
    name,
    count,
    productCode,
    mainCategory,
    productImages,
    subCategory,
    stock,
    price,
    description,
}: product) {
    const [toggleImg, setToggleImg] = useState<boolean>(true);

    return (
        <>
            <Link href={`/detail/${id}?name=${name}`}>
                <div className="">
                    {toggleImg ? (
                        <Image
                            src={productImages[0]}
                            width={250}
                            height={100}
                            alt="product image "
                            className="cursor-pointer rounded-md"
                            onMouseEnter={() => setToggleImg(false)}
                            onMouseLeave={() => setToggleImg(true)}
                        />
                    ) : (
                        <Image
                            src={productImages[1]}
                            width={250}
                            height={100}
                            alt="product image "
                            className="cursor-pointer rounded-md"
                            onMouseEnter={() => setToggleImg(false)}
                            onMouseLeave={() => setToggleImg(true)}
                        />
                    )}
                    <div className="text-center my-5">
                        <p className="">
                            {name} {productCode}
                        </p>
                        <p className="py-5 font-bold"> ฿ {price}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
