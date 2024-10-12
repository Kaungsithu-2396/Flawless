"use client";
import React, { Key } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Default() {
    const pathName = usePathname();
    const urlArray = pathName.split("/");
    urlArray.splice(0, 1, "Home");
    const routeCol = urlArray.map((el) => decodeURI(el));
    console.log(routeCol.slice(2));
    return (
        <>
            <div className="w-screen bg-[#353839] text-white text-sm md:text-base p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="">Products /</span>
                    </Link>{" "}
                    {routeCol.slice(2).map((el: string, idx, array) => {
                        return (
                            <Link key={idx} href={`/product/${el}`}>
                                {el} /
                            </Link>
                        );
                    })}
                </h1>
            </div>
            <div className="md:m-10 flex md:justify-between md:items-center flex-col gap-3 md:flex-row justify-start m-4  ">
                <h2 className="font-bold hidden md:block   my-3">
                    Product Categories
                </h2>
            </div>
        </>
    );
}
