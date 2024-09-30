import React from "react";
import Link from "next/link";
export default function page({
    params,
}: {
    params: { productGenre: String[] };
}) {
    console.log(params.productGenre);
    return (
        <>
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    {params.productGenre.map((el, index) => {
                        return <span> {el} /</span>;
                    })}
                </h1>
            </div>
        </>
    );
}
