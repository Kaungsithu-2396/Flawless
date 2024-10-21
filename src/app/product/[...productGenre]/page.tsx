import React from "react";
import Link from "next/link";
import { product } from "../../../../types";
import Product from "../../../../components/Product";
import PaginationList from "../../../../components/PaginationList";
import axios from "axios";
import { Key } from "react";
import ProductShows from "../../../../components/ProductShows";
export default async function page({
    params: { productGenre },
}: {
    params: { productGenre: String[] };
}) {
    console.log(productGenre);
    const [item, item2] = productGenre;
    let apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/genre?category=${item}`;
    if (item2) {
        apiUrl += `&subCategory=${item2}`;
    }
    async function getProductAsProductGenre() {
        try {
            const resp = await axios.get(apiUrl);
            return resp.data.products;
        } catch (error) {
            console.log(error);
        }
    }
    const products = (await getProductAsProductGenre()) || [];
    const totalItem = products.length;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
    return (
        // <section className="flex flex-col items-start md:items-end mx-9 gap ">
        //     <div className=" mb-5 md:m-0 md:absolute top-[-5.4rem]">
        //         <div className="">
        //             <select
        //                 name=""
        //                 id=""
        //                 className="p-3 bg-slate-100 rounded-md text-sm border-black"
        //             >
        //                 <option value="">Sort By latest order</option>
        //                 <option value="">Sort By Price Low to High</option>
        //                 <option value="">Sort By Price High to Low</option>
        //             </select>
        //         </div>
        //     </div>
        //     <div className="">
        //         <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5">
        //             {products.map((el: product, index: Key) => {
        //                 return <Product {...el} key={el._id} />;
        //             })}
        //         </div>

        //         <div className="my-5">
        //             <PaginationList dotCount={paginatedDotsCount} />
        //         </div>
        //     </div>
        // </section>
        <>
            <ProductShows
                products={products}
                paginatedDotsCount={paginatedDotsCount}
            />
        </>
    );
}
