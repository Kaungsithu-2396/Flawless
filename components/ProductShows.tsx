"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { product } from "../types";
import Product from "./Product";
import PaginationList from "./PaginationList";
import { Key } from "react";
export default function ProductShows({
    products,
    paginatedDotsCount,
}: {
    products: product[];
    paginatedDotsCount?: number;
}) {
    const [sortOptions, setSortOptions] = useState<string>("");
    const [sortedItems, setSortedItems] = useState<product[]>(products);
    const pathName = usePathname();
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOptions(e.target.value);
    };

    useEffect(() => {
        const sortProduct = () => {
            const sortedItem = [...products];
            if (sortOptions === "price-asc") {
                sortedItem.sort((a, b) => a.price - b.price);
            } else if (sortOptions === "price-desc") {
                sortedItem.sort((a, b) => b.price - a.price);
            }
            setSortedItems(sortedItem);
        };
        sortProduct();
    }, [sortOptions]);
    return (
        <section>
            <div className=" mb-5 md:m-0 right-6 md:absolute top-[-5.4rem]">
                <div className="">
                    <select
                        name=""
                        id=""
                        className="p-3 bg-slate-100 rounded-md text-sm border-black"
                        onChange={handleSortChange}
                    >
                        <option value="price-asc">
                            Sort By Price Low to High
                        </option>
                        <option value="price-desc">
                            Sort By Price High to Low
                        </option>
                    </select>
                </div>
            </div>
            <div className="">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 mx-5">
                    {sortedItems.map((el: product, index: Key) => {
                        return <Product {...el} key={el._id} />;
                    })}
                </div>
                {pathName === "/product" && (
                    <div className="my-5">
                        <PaginationList
                            dotCount={paginatedDotsCount as Number}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
