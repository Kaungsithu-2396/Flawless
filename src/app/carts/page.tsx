import React from "react";
import Image from "next/image";
export default function page() {
    return (
        <div className="w-2/3 m-auto">
            <div className="">
                <Image
                    src={"/product-detail-1.jpeg"}
                    width={100}
                    height={100}
                    alt="product image"
                />
            </div>
        </div>
    );
}
