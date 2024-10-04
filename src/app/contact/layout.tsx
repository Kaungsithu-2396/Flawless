import React from "react";
import Link from "next/link";
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-screen bg-[#353839] text-white p-5">
                <h1 className="">
                    <Link href={"/"}>Home </Link> /{" "}
                    <span className="font-bold">Contact</span>
                </h1>
            </div>
            {children}
        </>
    );
}
