"use client";
import React from "react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { useSearchParams } from "next/navigation";
import ProductDetail from "../../../../components/ProductDetail";
import RelatedProducts from "../../../../components/RelatedProducts";
import { data } from "../../../../data";
export default function page({
    params,
}: {
    params: {
        productId: number;
    };
}) {
    const itemDetail =
        data.find((el) => el.id === Number(params.productId)) || undefined;
    console.log(itemDetail);
    return (
        <section className="">
            <Toaster />
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="">Products /</span>
                    </Link>
                    <span> "result fetch api" </span>
                </h1>
            </div>
            <div className=" xl:w-[80%] m-auto ">
                <ProductDetail product={itemDetail} />
            </div>
            <div className=" m-12 ">
                <p className="text-2xl font-bold">You might also like</p>
                <RelatedProducts />
            </div>
        </section>
    );
}
