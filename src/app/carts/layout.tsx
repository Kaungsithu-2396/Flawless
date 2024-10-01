import React from "react";
import Link from "next/link";
export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className=" min-h-screen">
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <Link href={"/product"}>
                        {" "}
                        <span className="font-bold">Carts</span>
                    </Link>
                </h1>
            </div>
            {children}
        </section>
    );
}
