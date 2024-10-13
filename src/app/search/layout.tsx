import React, { Key } from "react";
import { category } from "../../../types";
import axios from "axios";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
export default async function layout({
    children,
    searchResult,
}: Readonly<{
    children: React.ReactNode;
    searchResult: React.ReactNode;
}>) {
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
    async function getSubCategories() {
        try {
            const resp = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/subCategory`
            );
            return resp.data.data;
        } catch (error) {
            console.log(error);
        }
    }
    const categoryCol = await getCategories();
    const subCategoryCol = await getSubCategories();
    return (
        <div>
            {children}
            <div className="flex xl:justify-start  justify-center items-start gap-10 ">
                <div className="w-[20%] mx-10 hidden xl:block sticky top-0">
                    {categoryCol.map((el: category, index: Key) => {
                        const subCategoryForCurrentCategory =
                            subCategoryCol.filter(
                                (sub: any) => sub.mainCategory === el._id
                            );
                        return (
                            <Accordion type="multiple" key={index}>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-sm">
                                        <Link href={`/product/${el.name}`}>
                                            {el.name}
                                        </Link>
                                    </AccordionTrigger>
                                    {subCategoryForCurrentCategory.map(
                                        (item: any, index: Key) => {
                                            return (
                                                <>
                                                    <Link
                                                        href={`/product/${el.name}/${item.name}`}
                                                    >
                                                        <AccordionContent className="mx-5">
                                                            {item.name}
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
