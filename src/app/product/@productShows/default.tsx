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
    console.log(params, "params from product shows");
    return (
        <>
            <div className="">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-6 mx-4">
                    {products.map((el: product, index: Key) => {
                        return <Product {...el} key={el.id} />;
                    })}
                </div>

                <div className="my-5">
                    <PaginationList dotCount={paginatedDotsCount} />
                </div>
            </div>
        </>
    );
}
