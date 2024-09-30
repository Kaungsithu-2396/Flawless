"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Product({ id, name }: { id: number; name: string }) {
    const [toggleImg, setToggleImg] = useState<boolean>(true);

    return (
        <>
            <Link href={`/detail/${id}?name=${name}`}>
                <div className="">
                    {toggleImg ? (
                        <Image
                            src={"/product-img-.jpg"}
                            width={250}
                            height={100}
                            alt="product image "
                            className="cursor-pointer rounded-md"
                            onMouseEnter={() => setToggleImg(false)}
                            onMouseLeave={() => setToggleImg(true)}
                        />
                    ) : (
                        <Image
                            src={"/product-img-1.jpeg"}
                            width={250}
                            height={100}
                            alt="product image "
                            className="cursor-pointer rounded-md"
                            onMouseEnter={() => setToggleImg(false)}
                            onMouseLeave={() => setToggleImg(true)}
                        />
                    )}
                    <div className="text-center my-5">
                        <p className="">Diamond Ring "Y27181"</p>
                        <p className="py-5 font-bold"> ฿ 45000</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
