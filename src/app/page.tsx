import Link from "next/link";
import Carousel from "../../components/pages/Home/Carousel";
import Image from "next/image";
import { Key } from "react";
import { Button } from "@/components/ui/button";
import Payment from "../../components/pages/Home/Payment";
import axios from "axios";
import { product } from "../../types";
type categories = {
    _id: string;
    name: string;
    categoryImage: {
        url: string;
    };
};

export default async function Home() {
    async function getCategories() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/category`
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function getFeaturedProducts() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    const categories = (await getCategories()) || [];
    const productCol = (await getFeaturedProducts()) || [];
    const featuredItems = productCol.slice(0, 6);

    return (
        <>
            <Carousel />
            <section className="my-5 ">
                <span className="">
                    <h1 className="text-xl font-bold text-center">
                        Our <br />
                        Collections
                    </h1>
                </span>
                <section className="  md:w-auto py-5 mx-2 grid grid-cols-3 md:grid-cols-4  justify-center items-center gap-2 md:gap-4 md:mx-8">
                    {[...Array(4)].map((_, index) => {
                        return (
                            <div
                                className=" w-full xl:gap-0 flex flex-col justify-center items-center gap-3 rounded-md bg-[#f5f4f4] px-5 md:px-0 py-4 md:py-3 mx-0 md:mx-5"
                                key={index}
                            >
                                <Image
                                    src={"/category.png"}
                                    width={100}
                                    height={100}
                                    alt="Category image"
                                    className=" w-[50%] m-auto hover:scale-110 duration-200 delay-200 cursor-pointer xl:w-[40%] "
                                />
                                <p className="font-semibold ">Rings</p>
                                <p className="  text-center text-sm   text-orange-500 hover:font-bold transition-all duration-200 delay-150">
                                    {" "}
                                    <Link href={"/product/Rings"}>
                                        Explore More
                                    </Link>{" "}
                                </p>
                            </div>
                        );
                    })}
                    {/* {categories.map((el: categories, index: Key) => {
                        return (
                            <div className="">
                                <div
                                    className=" w-full xl:gap-0 flex flex-col justify-center items-center gap-3 rounded-md bg-[#f5f4f4] px-5 md:px-0 py-4 md:py-3 mx-0 md:mx-5"
                                    key={index}
                                >
                                    <Image
                                        src={el.categoryImage.url}
                                        width={100}
                                        height={100}
                                        alt="Category image"
                                        className=" w-[50%] m-auto hover:scale-110 duration-200 delay-200 cursor-pointer xl:w-[40%] "
                                    />
                                    <p className="font-semibold ">{el.name}</p>
                                    <p className="  text-center text-sm   text-orange-500 hover:font-bold transition-all duration-200 delay-150">
                                        {" "}
                                        <Link href={`/product/${el.name}`}>
                                            Explore More
                                        </Link>{" "}
                                    </p>
                                </div>
                            </div>
                        );
                    })} */}
                </section>
            </section>
            <section className=" my-8 relative">
                <img
                    src={"/banner_4.jpeg"}
                    width={100}
                    height={100}
                    className="object-cover h-[50%]  w-full "
                    alt="Image for product"
                />
                <div className="absolute w-full h-full bg-black/30 top-0"></div>
                <div className="absolute top-4 md:top-[20%] left-5 md:left-34 text-white">
                    <span className="text-white font-bold text-xs text-center my-2  md:text-2xl">
                        <p>Be Proud to wear</p>
                        Authentic Items
                    </span>
                    <br />
                    <Link href={"/product"}>
                        <button className="bg-white my-3 md:my-6 md:px-5 md:py-2 md:text-xl text-xs px-3 py-1 rounded-md hover:font-bold duration-300 delay-300 text-black">
                            Explore More
                        </button>
                    </Link>
                </div>
            </section>

            <section className="my-4">
                <h1 className="text-xl pb-3 font-bold text-center">
                    Featured Products
                </h1>
                <div>
                    <div className="  m-6 grid grid-cols-2 gap-2  md:grid-cols-3 xl:grid-cols-3 ">
                        {/* {[...Array(6)].map((_, index: Key) => {
                            return (
                                <div
                                    className=" flex flex-col justify-center items-center"
                                    key={index}
                                >
                                    <div className="bg-[#f5f5f4] w-full">
                                        <Image
                                            src={"/category.png"}
                                            width={100}
                                            height={100}
                                            className="  md:w-[50%] m-auto   px- py-3  object-cover text-center "
                                            alt="Product image"
                                        />
                                    </div>
                                    <p className="font-bold py-3 text-slate-500  text-sm  text-center">
                                        Diamond Ring
                                    </p>

                                    <div className="">
                                        <p className="font-bold   md:text-xl text-center">
                                            ฿ 30000
                                        </p>
                                    </div>
                                </div>
                            );
                        })} */}
                        {featuredItems.map((el: product) => {
                            return (
                                <Link href={`detail/${el._id}`}>
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
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex justify-center items-center pt-3">
                        <Link href={"/product"}>
                            <Button className="font-bold  p-5    rounded-md">
                                Explore More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
