"use client";
import React, { Key, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { product } from "../types";
import axios from "axios";
import Product from "../components/Product";
export default function SearchResult() {
    const router = useSearchParams();
    const name = router.get("name");

    async function getSearchResult() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?searchTerm=${searchTerm}`
            );
            setProducts(resp.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const [products, setProducts] = useState<product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string | null>(name);

    useEffect(() => {
        setSearchTerm(name);
    }, [name]);
    useEffect(() => {
        if (searchTerm) {
            getSearchResult();
        }
    }, [searchTerm]);
    return (
        <>
            <>
                <div className="">
                    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-6 mx-4">
                        {products?.length > 0 ? (
                            products?.map((el: product, index: Key) => {
                                return <Product {...el} key={el._id} />;
                            })
                        ) : (
                            <h1 className="h-screen  text-center">
                                No result found
                            </h1>
                        )}
                    </div>
                </div>
            </>
        </>
    );
}
