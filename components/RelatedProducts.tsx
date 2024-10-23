import React from "react";
import { product } from "../types";
import ProductSwiper from "./ProductSwiper";
import axios from "axios";
export default async function RelatedProducts({
    productId,
}: {
    productId: string;
}) {
    async function getProducts() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function getSpecificProduct() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`
            );
            return resp.data.data;
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
