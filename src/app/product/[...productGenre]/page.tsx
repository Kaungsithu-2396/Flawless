import React from "react";
import Link from "next/link";
export default function page({
    params,
}: {
    params: { productGenre: String[] };
}) {
    const [item, item2] = params.productGenre;
    const letter = decodeURI(String(item2));
    console.log(letter);
    return (
        <>
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>Products</Link> /
                    {params.productGenre.map((el, index) => {
                        return <span> {decodeURI(String(el))} /</span>;
                    })}
                </h1>
            </div>
            <div className="md:m-10 flex md:justify-between md:items-center flex-col md:flex-row justify-start m-4  ">
                <h2 className="font-bold  hidden md:block  my-3">
                    Product Categories
                </h2>
                <div className="my-4">
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
        </>
    );
}
