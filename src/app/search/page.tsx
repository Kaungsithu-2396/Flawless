"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
function AccessSearchItem() {
    const router = useSearchParams();
    const name = router.get("name");
    return (
        <h2 className=" hidden md:block   my-3">
            search result for{" "}
            <span className="font-bold text-xl">"{name}"</span>
        </h2>
    );
}
function ShowSearchTerm() {
    const router = useSearchParams();
    const name = router.get("name");
    return <span className="font-bold">"{name}"</span>;
}
export default function page() {
    return (
        <Suspense fallback={<h1>Loading..</h1>}>
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="font-bold">Products /</span>
                    </Link>{" "}
                    <Suspense fallback={<h1>Loading..</h1>}>
                        <ShowSearchTerm />
                    </Suspense>
                </h1>
            </div>
            <div className="md:m-10 flex md:justify-between md:items-center flex-col gap-3 md:flex-row justify-start m-4  ">
                <h2 className="font-bold hidden md:block   my-3">
                    Product Categories
                </h2>
                <Suspense fallback={<h1>Loading..</h1>}>
                    <AccessSearchItem />
                </Suspense>
                <div className=""></div>
            </div>
        </Suspense>
    );
}
