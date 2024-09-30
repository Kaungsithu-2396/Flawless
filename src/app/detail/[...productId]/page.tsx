"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductDetail from "../../../../components/ProductDetail";
import RelatedProducts from "../../../../components/RelatedProducts";
export default function page({
    params,
}: {
    params: {
        productId: number;
    };
}) {
    const searchParams = useSearchParams();
    const productName = searchParams.get("name");
    return (
        <section className="">
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="">Products /</span>
                    </Link>
                    <span> {productName}</span>
                </h1>
            </div>
            <div className=" xl:w-2/3 m-auto ">
                <ProductDetail />
            </div>
            <div className=" m-12 h-screen">
                <p className="text-2xl font-bold">You might also like</p>
                <RelatedProducts />
            </div>
        </section>
    );
}
