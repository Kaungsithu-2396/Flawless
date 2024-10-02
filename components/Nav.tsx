"use client";
import React, { useEffect, Key, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ShoppingCart from "./ShoppingCart";
import { RxCross1 } from "react-icons/rx";
import CartDetail from "./CartDetail";
import { product } from "../types";

export default function Nav() {
    const pathName = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const cartItems = useSelector((state: RootState) => state.cart.cartItems) ;

    return (
        <>
            <nav className="flex md:flex-col relative gap-5 xl:flex-row justify-around  items-center mb-4 ">
                <div className=" mt-5  md:m-0 flex gap-5 flex-row-reverse justify-evenly md:justify-between md:my-4 xl:my-0 xl:w-auto md:w-full items-center">
                    <div
                        className="xl:hidden relative cursor-pointer  block text-xl md:text-2xl mx-3"
                        onClick={() => setCartOpen(true)}
                    >
                        <ShoppingCart cartItems={cartItems} />
                    </div>

                    <Link href={"/"}>
                        <Image
                            width={300}
                            height={108}
                            className=" w-[50%] m-auto text-center lg:text-center "
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
                    <ul className="flex  justify-center gap-11 items-center ">
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
                <div className="hidden   m-4 xl:block">
                    <ul className="flex gap-5  justify-center items-center">
                        <li className=" flex justify-center items-center cursor-pointer relative">
                            {" "}
                            <input
                                type="text"
                                name=""
                                className="px-9 py-3 border-2 broder-black rounded-md"
                                id=""
                                placeholder="search"
                            />
                            <IoIosSearch className="absolute left-2 text-xl" />
                        </li>
                        <li className="text-2xl cursor-pointer ">
                            {" "}
                            <div
                                className="relative flex justify-center items-center "
                                onClick={() => setCartOpen(true)}
                            >
                                <ShoppingCart cartItems={cartItems} />
                            </div>
                        </li>
                    </ul>
                </div>
                {/* //desktop */}
            </nav>
            {/* Cart */}
            {cartOpen && (
                <>
                    {" "}
                    <div className="fixed top-0 w-[90%] xl:w-[40%] z-50 right-0 bg-white h-screen overflow-scroll">
                        <span className="flex justify-between  m-6 md:m-12 items-center">
                            <h1 className="font-bold  md:text-xl  ">
                                Shopping Cart ({cartItems.length})
                            </h1>
                            <span
                                onClick={() => setCartOpen(false)}
                                className="cursor-pointer"
                            >
                                <RxCross1 />
                            </span>
                        </span>
                        <hr />
                        {cartItems.length > 0 ? (
                            cartItems.map((el: product, index: Key) => {
                                return <CartDetail cart={el} />;
                            })
                        ) : (
                            <div className="flex flex-col h-screen justify-center items-center">
                                <h1 className="text-center">no item exisits</h1>
                                <Link href={"/product"} className="underline">
                                    Explore
                                </Link>
                            </div>
                        )}
                    </div>
                    <div
                        className=" fixed   top-0 z-50 w-[10%] xl:w-[60%] h-screen bg-black/30"
                        onClick={() => setCartOpen(false)}
                    ></div>
                </>
            )}
            {/* Cart */}
        </>
    );
}
