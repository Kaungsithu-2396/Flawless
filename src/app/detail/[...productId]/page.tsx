import React from "react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import ProductDetail from "../../../../components/ProductDetail";
import RelatedProducts from "../../../../components/RelatedProducts";
import axios from "axios";
export default async function page({
    params: { productId },
}: {
    params: {
        productId: string;
    };
}) {
    async function getSpecificItem() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
        }
    }
    const items = await getSpecificItem();

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
                <ProductDetail product={items} />
            </div>
            <div className=" m-12 ">
                <p className="text-2xl font-bold">You might also like</p>
                <RelatedProducts productId={productId} />
            </div>
        </section>
    );
}
