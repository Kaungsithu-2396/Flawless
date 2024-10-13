"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "../types";
export default function Product({
    _id,
    name,
    count,
    productCode,
    mainCategory,
    productImageCol,
    subCategory,
    stock,
    price,
    description,
}: product) {
    const [toggleImg, setToggleImg] = useState<boolean>(true);

    return (
        <>
            <Link href={`/detail/${_id}`}>
                <div className="">
                    {toggleImg ? (
                        <Image
                            src={productImageCol[0].url}
                            width={250}
                            height={100}
                            alt="product image "
                            className="cursor-pointer rounded-md"
                            onMouseEnter={() => setToggleImg(false)}
                            onMouseLeave={() => setToggleImg(true)}
                        />
                    ) : (
                        <Image
                            //@ts-ignore
                            src={productImageCol[1]?.url}
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
                            {name}{" "}
                            <span className=" font-bold">({productCode})</span>
                        </p>
                        <p className="py-5 font-bold"> ฿ {price}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
