import React from "react";
import { categories } from "../../../data";
import { category } from "../../../types";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
export default function layout({
    children,
    searchResult,
}: Readonly<{
    children: React.ReactNode;
    searchResult: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <div className="flex xl:justify-start  justify-center items-start gap-10 ">
                <div className="w-[20%] mx-10 hidden xl:block sticky top-0">
                    {categories.map((el: category, index) => {
                        return (
                            <Accordion type="multiple" key={index}>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-sm">
                                        {el.name}
                                    </AccordionTrigger>
                                    {el.subCategories.map(
                                        (item: string, index) => {
                                            return (
                                                <>
                                                    <Link
                                                        href={`/product/${el.name}/${item}`}
                                                    >
                                                        <AccordionContent className="mx-5">
                                                            {item}
                                                        </AccordionContent>
                                                    </Link>
                                                </>
                                            );
                                        }
                                    )}
                                </AccordionItem>
                            </Accordion>
                        );
                    })}
                </div>
                {searchResult}
                {/* here */}
            </div>
        </div>
    );
}
