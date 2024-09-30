import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
export default function PaginationList({ dotCount }: { dotCount: Number }) {
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        {[...Array(dotCount)].map((_, index) => {
                            return (
                                <>
                                    <PaginationLink
                                        className="text-xl"
                                        href="#"
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </>
                            );
                        })}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
