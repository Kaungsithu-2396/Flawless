// "use client";
// import React from "react";
// import { product } from "../types";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import ProductShows from "../components/ProductShows";
// import { Suspense, useEffect, useState } from "react";
// import Link from "next/link";
// import LoadingUi from "./LoadingUi";
// export default function Products() {
//     const searchParams = useSearchParams();
//     const pageNo = searchParams.get("page") || 0;
//     const [products, setProducts] = useState<product[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [total, setTotal] = useState([]);
//     useEffect(() => {
//         getProducts();
//         getTotalItems();
//     }, [pageNo]);
//     async function getProducts() {
//         setLoading(true);
//         try {
//             const resp = await axios.get(
//                 `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/allProduct?page=${pageNo}`
//             );

//             setProducts(resp.data.data);
//             console.log(products);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     }
//     async function getTotalItems() {
//         try {
//             const resp = await axios.get(
//                 `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
//             );
//             setTotal(resp.data.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const totalItem = total.length || 0;
//     const itemsPerPage = 12;
//     const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
//     return (
//         <>
//             {loading ? (
//                 <LoadingUi />
//             ) : (
//                 <ProductShows
//                     products={products}
//                     paginatedDotsCount={paginatedDotsCount}
//                 />
//             )}

//             {/* {products.length > 0 ? (
//                 <ProductShows
//                     products={products}
//                     paginatedDotsCount={paginatedDotsCount}
//                 />
//             ) : (
//                 <span>
//                     <h1>No items</h1>
//                     <Link
//                         href={`/product/?page=0`}
//                         onClick={() => setRefresh(true)}
//                     >
//                         Back to product
//                     </Link>
//                 </span>
//             )} */}
//         </>
//     );
// }
//optimized code
import React from "react";
import ProductShows from "../components/ProductShows";
import { draftMode } from "next/headers";
export default async function Products() {
    const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
        // {
        //     next: {
        //         tags: ["product"],
        //     },
        // }
    );
    const data = await resp.json();
    const products = data.data;
    return (
        <>
            <ProductShows products={products} />
        </>
    );
}
