import React from "react";
import Link from "next/link";
export default function page() {
    return (
        <>
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="font-bold">Products</span>
                    </Link>
                </h1>
            </div>
        
        </>
    );
}
