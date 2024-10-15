import React, { Suspense } from "react";
import SearchResult from "../../../../components/SearchResult";

export default function Default({ params }: any) {
    return (
        <>
            <Suspense>
                <SearchResult />
            </Suspense>
        </>
    );
}
