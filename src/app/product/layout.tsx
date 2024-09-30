import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Product from "../../../components/Product";
import PaginationList from "../../../components/PaginationList";
export default function Layout({
    children,
    productShows,
}: Readonly<{
    children: React.ReactNode;
    productShows: React.ReactNode;
}>) {
    return (
        <section className="">
            {children}
            <div className="md:m-10 flex md:justify-between md:items-center flex-col md:flex-row justify-start m-4  ">
                <h2 className="font-bold text-xl  my-3">Product Categories</h2>
                <div className="">
                    <select
                        name=""
                        id=""
                        className="p-3 bg-slate-100 rounded-md border-black"
                    >
                        <option value="">Sort By latest order</option>
                        <option value="">Sort By Price Low to High</option>
                        <option value="">Sort By Price High to Low</option>
                    </select>
                </div>
            </div>
            <div className="flex xl:justify-start  justify-center items-start gap-10 ">
                <div className="w-[20%] mx-10 hidden xl:block sticky top-0">
                    {[...Array(6)].map((_, index) => {
                        return (
                            <Accordion type="multiple" key={index}>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-xl">
                                        Rings
                                    </AccordionTrigger>
                                    <Link href={"/product/Rings/GoldRings"}>
                                        <AccordionContent className="mx-5">
                                            Gold rings
                                        </AccordionContent>
                                    </Link>
                                    <AccordionContent className="mx-5">
                                        <Link href={"/"}>Diamond Rings</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        );
                    })}
                </div>
                {productShows}
                {/* here */}
            </div>
        </section>
    );
}
