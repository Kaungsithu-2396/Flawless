"use client";
import React from "react";
import { product } from "../types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import ProductShows from "../components/ProductShows";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import LoadingUi from "./LoadingUi";
export default function Products() {
    const searchParams = useSearchParams();
    const pageNo = searchParams.get("page") || 0;
    const [refresh, setRefresh] = useState(false);
    const [products, setProducts] = useState<product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        getProducts();
        console.log(refresh);
    }, [pageNo]);
    async function getProducts() {
        setLoading(true);
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product?page=${pageNo}`
            );

            setProducts(resp.data.data);
            console.log(products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const totalItem = products.length;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
    return (
        <>
            {loading ? (
                <LoadingUi />
            ) : (
                <ProductShows
                    products={products}
                    paginatedDotsCount={paginatedDotsCount}
                />
            )}

            {/* {products.length > 0 ? (
                <ProductShows
                    products={products}
                    paginatedDotsCount={paginatedDotsCount}
                />
            ) : (
                <span>
                    <h1>No items</h1>
                    <Link
                        href={`/product/?page=0`}
                        onClick={() => setRefresh(true)}
                    >
                        Back to product
                    </Link>
                </span>
            )} */}
        </>
    );
}
