"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
export default function ProductImageZoom() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showZoomImage, setShowZoomImage] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: any) => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({ x, y });
        setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
    };
    console.log(showZoomImage);
    return (
        <>
            <div
                className="img-zoom-container"
                onMouseEnter={() => setShowZoomImage(true)}
                onMouseLeave={() => {
                    setShowZoomImage(false);
                }}
                onMouseMove={handleMouseMove}
            >
                <div className="">
                    <Image
                        src={"/product-detail-1.jpeg"}
                        width={800}
                        height={200}
                        sizes="100vw"
                        alt="Product detail image"
                        className="rounded-md xl:w-full  img-zoom cursor-zoom-in  "
                    />
                </div>

                {showZoomImage ? (
                    <div className="">
                        <div
                            className={`zoom-image  `}
                            style={{
                                position: "absolute",
                                left: `${cursorPosition.x - 50}px`,
                                top: `${cursorPosition.y - 50}px`,
                                backgroundImage:
                                    "url('/product-detail-1.jpeg')",
                                backgroundPosition: `${position.x}% ${position.y}%`,
                            }}
                        ></div>
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="my-3 flex justify-start gap-4 items-center">
                <Image
                    src={"/product-detail-1.jpeg"}
                    width={100}
                    height={200}
                    alt="Product detail image"
                    className="rounded-md cursor-pointer hover:opacity-50 duration-200 delay-200"
                />
                <Image
                    src={"/product-detail-1.jpeg"}
                    width={100}
                    height={200}
                    alt="Product detail image  "
                    className="rounded-md cursor-pointer hover:opacity-50 duration-200 delay-200"
                />
            </div>
        </>
    );
}
