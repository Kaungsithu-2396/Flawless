import Link from "next/link";
import Carousel from "../../components/pages/Home/Carousel";
import Image from "next/image";
import { Key } from "react";
import { Button } from "@/components/ui/button";
import Payment from "../../components/pages/Home/Payment";
export default function Home() {
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
                </section>
            </section>
            <section className=" my-8 relative">
                <Image
                    src={"/product-img.jpg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover h-full w-full md:w-[70%]"
                    alt="Image for product"
                    priority={true}
                />
                <div className="absolute w-full h-full bg-black/50 top-0"></div>
                <div className="absolute top-4 md:top-[40%] left-5 md:left-36 text-white">
                    <h1 className="text-white font-bold text-xl text-center my-2  md:text-2xl">
                        Space for video..
                    </h1>
                </div>
            </section>

            <section className="my-4">
                <h1 className="text-xl pb-3 font-bold text-center">
                    Featured Products
                </h1>
                <div>
                    <div className=" w-2/3 m-auto my-6 grid grid-cols-2 gap-4 md:gap-4 md:grid-cols-3 xl:grid-cols-4 ">
                        {[...Array(8)].map((_, index: Key) => {
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
            <hr />

            {/* <section className=" my-5 h-screen">
                <h1 className="font-bold text-2xl">Accepted payments</h1>
                <Image
                    src={"/logos/kbank_logo.png"}
                    width={100}
                    height={100}
                    alt="Accepted payments"
                />
                <Image
                    src={"/logos/Bkk_bank.jpg"}
                    width={200}
                    height={200}
                    alt="Accepted payments"
                    className="px-4"
                />
                <Image
                    src={"/logos/SCB_logo.jpg"}
                    width={200}
                    height={200}
                    alt="Accepted payments"
                    className="px-4"
                />
                <Image
                    src={"/logos/PromptPay-logo.png"}
                    width={200}
                    height={200}
                    alt="Accepted payments"
                    className="px-4"
                />
                <Image
                    src={"/logos/kbz-logo.png"}
                    width={200}
                    height={200}
                    alt="Accepted payments"
                    className="px-4"
                />
            </section> */}
        </>
    );
}
