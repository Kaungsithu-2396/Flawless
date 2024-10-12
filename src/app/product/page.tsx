import React from "react";
import Link from "next/link";
import { data } from "../../../data";
import { product } from "../../../types";
import Product from "../../../components/Product";
import PaginationList from "../../../components/PaginationList";
import { Key } from "react";
export default function page() {
    const products: product[] = [...data];
    const totalItem = data.length;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
    return (
        <section>
            <div className=" mb-5 md:m-0 right-6 md:absolute top-[-5.4rem]">
                <div className="">
                    <select
                        name=""
                        id=""
                        className="p-3 bg-slate-100 rounded-md text-sm border-black"
                    >
                        <option value="">Sort By latest order</option>
                        <option value="">Sort By Price Low to High</option>
                        <option value="">Sort By Price High to Low</option>
                    </select>
                </div>
            </div>
            <div className="">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 mx-5">
                    {products.map((el: product, index: Key) => {
                        return <Product {...el} key={el.id} />;
                    })}
                </div>

                <div className="my-5">
                    <PaginationList dotCount={paginatedDotsCount} />
                </div>
            </div>
        </section>
    );
}
