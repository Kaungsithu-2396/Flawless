import React from "react";
import Link from "next/link";
import { data } from "../../../data";
import { product } from "../../../types";
import Product from "../../../components/Product";
import PaginationList from "../../../components/PaginationList";
import { Key } from "react";
import axios from "axios";
import ProductShows from "../../../components/ProductShows";

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

export default async function page() {
    const products: product[] = await getProducts();
    const totalItem = products.length;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);

    return (
        <ProductShows
            products={products}
            paginatedDotsCount={paginatedDotsCount}
        />
    );
}
// export async function getStaticProps() {
//     try {
//         const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`);
//         console.log(resp)
//     } catch (error) {}
// }
