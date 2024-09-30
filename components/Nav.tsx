"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathName = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    console.log("client side code is working on Nav");
    return (
        <>
            <nav className="flex md:flex-col relative gap-5 xl:flex-row justify-around  items-center mb-4 ">
                <div className=" mt-5  md:m-0 flex gap-5 flex-row-reverse justify-evenly md:justify-between md:my-4 xl:my-0 xl:w-auto md:w-full items-center">
                    <div className="xl:hidden block text-2xl md:text-4xl mx-3">
                        <FiShoppingCart />
                    </div>
                    <Link href={"/"}>
                        <Image
                            width={300}
                            height={108}
                            className=" w-[50%] xl:w-[70%] m-auto text-center lg:text-center "
                            src={"/flawlesslogo.png"}
                            alt="Logo for flawless"
                            priority={true}
                        />
                    </Link>

                    <div
                        className="xl:hidden block mx-3 text-2xl md:text-4xl peer"
                        onClick={() => setOpenMenu(true)}
                    >
                        <RxHamburgerMenu />
                    </div>
                </div>
                {/* mobile nav */}
                {openMenu && (
                    <div className=" xl:hidden ease-in duration-300 fixed top-0 z-50 left-0 delay-200">
                        <div
                            className="h-screen ease-in duration-200 top-0 left-0 w-screen fixed z-50 bg-black/50"
                            onClick={() => setOpenMenu(false)}
                        ></div>
                        <div className="">
                            <div className="h-screen w-[60vw] bg-white absolute left-0 top-0 z-50">
                                <div className="m-4">
                                    <input
                                        type="text"
                                        name=""
                                        placeholder="Search"
                                        id=""
                                        size={30}
                                        className="p-2 w-[90%] border-black border-2 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* mobile nav */}

                <div className="hidden xl:block md:flex md:justify-around  md:gap-6 md:items-center  w-[50%]">
                    {/* <div className="w-[300px] md:block hidden xl:hidden"></div> */}
                    <ul className="flex justify-center gap-11 items-center text-xl ">
                        <li className="hover:font-bold duration-200 delay-200">
                            {" "}
                            <Link
                                href={"/"}
                                className={` ${
                                    pathName === "/" && "font-bold"
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hover:font-bold duration-200 delay-200">
                            {" "}
                            <Link
                                href={"/product"}
                                className={`${
                                    pathName === "/product" && "font-bold"
                                }`}
                            >
                                Product
                            </Link>
                        </li>
                        <li className="hover:font-bold duration-200 delay-200">
                            <Link href={"/"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* //desktop */}
                <div className="hidden  mx-4 xl:block">
                    <ul className="flex gap-5  justify-center items-center">
                        <li className="text-xl flex justify-center items-center cursor-pointer relative">
                            {" "}
                            <input
                                type="text"
                                name=""
                                className=" w-[300px] px-9 py-3 border-2 broder-black rounded-md"
                                id=""
                                placeholder="search"
                            />
                            <IoIosSearch className="absolute left-2 text-2xl" />
                        </li>
                        <li className="text-3xl">
                            {" "}
                            <FiShoppingCart />
                        </li>
                    </ul>
                </div>
                {/* //desktop */}
            </nav>
        </>
    );
}
