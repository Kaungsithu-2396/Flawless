import React from "react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import ProductDetail from "../../../../components/ProductDetail";
import RelatedProducts from "../../../../components/RelatedProducts";
import { redirect } from "next/navigation";
export async function generateStaticParams() {
    const product = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
    );
    const res = await product.json();

    return res.data.map((el: any) => {
        return {
            productId: el._id,
        };
    });
}
export const revalidate = 30;
export default async function page({
    params: { productId },
}: {
    params: {
        productId: string;
    };
}) {
    const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`
    );
    if (!resp.ok) {
        redirect("/errorDetail");
    }
    const data = await resp.json();

    const items = data.data;
    return (
        <section className="">
            <Toaster />
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"} prefetch={false}>
                        Home{" "}
                    </Link>{" "}
                    /{" "}
                    <Link href={"/product"} prefetch={false}>
                        {" "}
                        <span className="">Products /</span>
                    </Link>
                    <span> {items.name} </span>
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
