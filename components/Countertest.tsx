"use client";
import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import {
    increment,
    decrement,
    incrementByValue,
} from "../redux/slices/counterslice";
export default function Countertest() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByValue(3))}>
                {" "}
                increment by 3
            </button>
        </>
    );
}
