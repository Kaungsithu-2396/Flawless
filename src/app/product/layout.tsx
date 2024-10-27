import React, { Key } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { category } from "../../../types";
import axios from "axios";
export default async function Layout({
    children,
    productNav,
}: Readonly<{
    children: React.ReactNode;
    productNav: React.ReactNode;
}>) {
    async function getCategories() {
        try {
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/category`,
                { next: { revalidate: 20 } }
            );
            if (!resp.ok) throw new Error("fetching product category error");
            const data = await resp.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
    async function getSubCategories() {
        try {
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/subCategory`,
                { next: { revalidate: 20 } }
            );
            if (!resp.ok) throw new Error("fetching product category error");
            const data = await resp.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }
    const categoryCol = (await getCategories()) || [];
    const subCategoryCol = (await getSubCategories()) || [];

    return (
        <section className="">
            {productNav}
            <div className="flex xl:justify-start  justify-center items-start gap-10 relative  ">
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
                                        <Link
                                            href={`/product/${el.name}`}
                                            prefetch={false}
                                        >
                                            {el.name}
                                        </Link>
                                    </AccordionTrigger>
                                    {subCategoryForCurrentCategory.map(
                                        (item: any, index: Key) => {
                                            return (
                                                <>
                                                    <Link
                                                        href={`/product/${el.name}/${item.name}`}
                                                        prefetch={false}
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
                {children}
            </div>
        </section>
    );
}
