"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useDispatch, UseDispatch } from "react-redux";
import { resetCheckoutItem } from "../redux/slices/dynamicCheckout";
import { useEffect } from "react";
export default function RouteChangeHandler({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();
    const dispatch = useDispatch();
    useEffect(() => {
        if (pathName !== "/checkout") {
            dispatch(resetCheckoutItem());
        }
    }, [pathName]);
    return <>{children}</>;
}
