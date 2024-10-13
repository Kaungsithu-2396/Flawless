"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
interface Image {
    url: string;
    publicID: string;
}
export default function ProductImageZoom({ images }: { images: [Image] }) {
    //@ts-ignore
    const [img1, img2, img3] = images;
    console.log(images);
    const [itemUrl, setItemUrl] = useState<string>(img1.url);
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
    const handleImageUrl = (e: any) => {
        setItemUrl(e.currentTarget.src);
    };

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
                <Image
                    src={itemUrl}
                    width={900}
                    height={200}
                    alt="Product detail image"
                    className="rounded-md  w-full h-auto img-zoom  "
                    onClick={handleImageUrl}
                />

                {showZoomImage ? (
                    <div
                        className={`zoom-image  `}
                        style={{
                            position: "absolute",
                            left: `${cursorPosition.x - 90}px`,
                            top: `${cursorPosition.y - 90}px`,
                            backgroundImage: `url(${itemUrl})`,
                            backgroundPosition: `${position.x}% ${position.y}%`,
                            pointerEvents: "none",
                        }}
                    ></div>
                ) : (
                    ""
                )}
            </div>

            <div className="my-3 flex justify-start gap-4 items-center">
                <img
                    src={img1.url}
                    alt=""
                    width={100}
                    height={100}
                    className="  rounded-md hover:opacity-50 duration-150 delay-150"
                    onClick={handleImageUrl}
                />
                <img
                    //@ts-ignore
                    src={img2?.url}
                    alt=""
                    width={100}
                    height={100}
                    className="  rounded-md hover:opacity-50 duration-150 delay-150"
                    onClick={handleImageUrl}
                />
                <img
                    //@ts-ignore
                    src={img3?.url}
                    alt=""
                    width={100}
                    height={100}
                    className="  rounded-md hover:opacity-50 duration-150 delay-150"
                    onClick={handleImageUrl}
                />
                {/* <Image
                    src={"/product-img-1.jpeg"}
                    width={100}
                    height={200}
                    alt="Product detail image"
                    className="rounded-md cursor-pointer hover:opacity-50 duration-200 delay-200"
                    onClick={handleImageUrl}
                />
                <Image
                    src={"/product-img-.jpg"}
                    width={100}
                    height={200}
                    alt="Product detail image  "
                    className="rounded-md cursor-pointer hover:opacity-50 duration-200 delay-200"
                    onClick={handleImageUrl}
                /> */}
            </div>
        </>
    );
}
