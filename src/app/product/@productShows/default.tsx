import React, { Key } from "react";
import PaginationList from "../../../../components/PaginationList";
import Product from "../../../../components/Product";
export default function Default({ params }: any) {
    const totalItem = 100;
    const itemsPerPage = 12;
    const paginatedDotsCount = Math.ceil(totalItem / itemsPerPage);
    console.log("params are", params);
    return (
        <>
            <div className="">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-6 mx-4">
                    {[...Array(12)].map((_, index) => {
                        return (
                            <div className="" key={index}>
                                <Product id={index + 1} name="Diamond Ring" />
                            </div>
                        );
                    })}
                </div>

                <div className="my-5">
                    <PaginationList dotCount={paginatedDotsCount} />
                </div>
            </div>
        </>
    );
}
