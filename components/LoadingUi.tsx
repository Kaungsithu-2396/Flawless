import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function LoadingUi() {
    return (
        <>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 mx-5">
                {[...Array(6)].map((el, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-col gap-4">
                                <Skeleton className=" w-[158px] h-[227px] md:w-[230px] md:h-[330px]" />
                                <Skeleton className=" w-[158px] h-[60px] md:w-[230px]" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
