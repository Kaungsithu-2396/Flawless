import React from "react";
import ProductSwiper from "./ProductSwiper";
export default async function RelatedProducts({
    productId,
}: {
    productId: string;
}) {
    async function getProducts() {
        try {
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
                { next: { revalidate: 20 } }
            );
            const data = await resp.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function getSpecificProduct() {
        try {
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
                {
                    next: { revalidate: 20 },
                }
            );
            const data = await resp.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
    const allProducts = await getProducts();
    const specificProduct = await getSpecificProduct();
    const relatedProduct = allProducts.filter(
        (el: any) =>
            el.category === specificProduct.category &&
            el._id !== specificProduct._id
    );

    return (
        <>
            <ProductSwiper items={relatedProduct} />
        </>
    );
}
