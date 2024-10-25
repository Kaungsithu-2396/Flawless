"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import LoadingUi from "./LoadingUi";
export default function FeaturedProducts() {
    async function getFeaturedProducts() {
        setLoading(true);
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
            );
            setData(resp.data.data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        getFeaturedProducts();
    }, []);
    return (
        <>
            {data &&
                data.slice(0, 6).map((el: any) => {
                    <Link href={`detail/${el._id}`} key={el._id}>
                        <div className=" flex flex-col justify-center items-center w-full ">
                            <div className=" w-full">
                                <img
                                    src={el.productImageCol[0].url}
                                    width={100}
                                    height={100}
                                    className=" w-[90%] h-[90%] m-auto  px- py-3  object-cover text-center rounded-2xl "
                                    alt="Product image"
                                />
                            </div>
                            <p className="font-bold py-3 text-slate-500  text-sm  text-center">
                                {el.name} ({el.productCode})
                            </p>

                            <div className="">
                                <p className="font-bold   md:text-xl text-center">
                                    ฿ {el.price}
                                </p>
                            </div>
                        </div>
                    </Link>;
                })}
        </>
    );
}
