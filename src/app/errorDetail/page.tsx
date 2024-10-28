import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="font-bold text-center h-screen flex justify-center items-center">
            <div className="">
                <p>This product is no longer exisit on our system</p>

                <Link
                    href={"/product"}
                    prefetch={false}
                    className="underline underline-offset-4 my-4"
                >
                    Explore Products{" "}
                </Link>
            </div>
        </div>
    );
}
