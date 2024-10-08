import React, { Key } from "react";
import PaginationList from "../../../../components/PaginationList";
import Product from "../../../../components/Product";
import { product } from "../../../../types";
import { data } from "../../../../data";
export default function Default({ params }: any) {
    const totalItem = data.length;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
    const products: product[] = [...data];

    return (
        <>
            <div className="">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-6 mx-4">
                    {products.length > 0 ? (
                        products.map((el: product, index: Key) => {
                            return <Product {...el} key={el.id} />;
                        })
                    ) : (
                        <h1 className="h-screen  text-center">
                            No result found
                        </h1>
                    )}
                </div>

                <div className="my-5">
                    {products.length > 0 && (
                        <PaginationList dotCount={paginatedDotsCount} />
                    )}
                </div>
            </div>
        </>
    );
}
