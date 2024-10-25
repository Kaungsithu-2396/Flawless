import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function LoadingHome() {
    return (
        <>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 mx-5">
                <>
                    <Skeleton className=" w-screen h-screen " />
                </>
            </div>
        </>
    );
}
