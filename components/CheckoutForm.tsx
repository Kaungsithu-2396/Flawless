"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { checkoutForm } from "../types";
import { RootState } from "../redux/store";
export default function CheckoutForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const buyNowItems = useSelector(
        (state: RootState) => state.buyNow.buyNowItem
    );
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const orderItem = buyNowItems ? [buyNowItems] : cartItems;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<checkoutForm>({
        defaultValues: {
            additionalMessage: "",
        },
    });
    const onSubmit: SubmitHandler<checkoutForm> = async (data) => {
        const {
            name,
            email,
            phone,
            zipCode,
            additionalMessage,
            address,
            installmentPlan,
            lineId,
        } = data;

        setLoading(true);
        try {
            const submitResp = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/order`,
                {
                    name,
                    email,
                    phone,
                    zipCode,
                    message: additionalMessage,
                    address,
                    installmentPlan,
                    lineId,
                    order: orderItem,
                }
            );
            console.log(submitResp.data.data._id, "resp");
            router.push(`/checkout-success/${submitResp.data.data._id}`);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <form
                className=" w-full h-screen m-auto flex flex-col gap-4 "
                onSubmit={handleSubmit(onSubmit)}
            >
                <span>
                    <label className=" my-4">
                        Name <span className=" text-red-500">*</span>
                    </label>
                    <Input
                        type="text"
                        className="my-2 "
                        placeholder="Name"
                        {...register("name", {
                            required: "please provide the name",
                        })}
                    />
                    {errors.name?.type === "required" && (
                        <p className="text-red-500">{errors.name?.message}</p>
                    )}
                </span>
                <span>
                    <label className=" my-4">
                        Email <span className=" text-red-500">*</span>{" "}
                    </label>
                    <Input
                        type="email"
                        className="mt-2"
                        placeholder="Email"
                        {...register("email", {
                            required: "please provide the valid email",
                        })}
                    />
                    {errors.email?.type === "required" && (
                        <p className="text-red-500 py-2">
                            {errors.email?.message}
                        </p>
                    )}
                </span>
                <span className="">
                    <label className=" my-4">
                        Apply installment plan ?{" "}
                        <span className=" text-red-500">*</span>
                    </label>
                    <br />
                    <div className="flex  gap-5 py-3">
                        <span>
                            <input
                                type="radio"
                                className="px-3"
                                {...register("installmentPlan", {
                                    required:
                                        "please select one of the options",
                                })}
                                value={"yes"}
                                id=""
                            />
                            <label htmlFor="yes"> Yes</label>
                        </span>
                        <span>
                            <input
                                type="radio"
                                className="px-3"
                                {...register("installmentPlan", {
                                    required:
                                        "please select one of the options",
                                })}
                                value={"no"}
                                id=""
                            />
                            <label htmlFor="yes"> No</label>
                        </span>
                    </div>

                    <Link href={"/"} className="underline">
                        Detail about Installment
                    </Link>
                    {errors.installmentPlan?.type === "required" && (
                        <p className="text-red-500">
                            {errors.installmentPlan?.message}
                        </p>
                    )}
                </span>
                <span>
                    <label htmlFor="">
                        Phone No. <span className=" text-red-500">*</span>
                    </label>
                    <Input
                        type="tel"
                        placeholder="Phone"
                        className="mt-2"
                        inputMode="numeric"
                        {...register("phone", {
                            required: "please provide the phone number",
                            minLength: {
                                value: 10,
                                message: "Invalid phone number",
                            },
                            maxLength: {
                                value: 10,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                    {errors.phone?.type === "required" && (
                        <p className="text-red-500">{errors.phone?.message}</p>
                    )}
                    {errors.phone?.type === "minLength" && (
                        <p className="text-red-500">{errors.phone?.message}</p>
                    )}
                    {errors.phone?.type === "maxLength" && (
                        <p className="text-red-500">{errors.phone?.message}</p>
                    )}
                </span>
                <span>
                    <label htmlFor="">
                        {" "}
                        Address <span className=" text-red-500">*</span>{" "}
                    </label>
                    <Input
                        type="text"
                        placeholder="Address"
                        className="mt-2"
                        {...register("address", {
                            required: "invalid address",
                        })}
                    />
                    {errors.address?.type === "required" && (
                        <p className="text-red-500">
                            {errors.address?.message}
                        </p>
                    )}
                </span>
                <span>
                    <label htmlFor="">
                        {" "}
                        Zip Code <span className=" text-red-500">*</span>{" "}
                    </label>
                    <Input
                        type="text"
                        placeholder="10560 - 5 digits"
                        className="mt-2"
                        {...register("zipCode", {
                            required: "please provide the valid zipCode",
                            minLength: {
                                value: 5,
                                message: "zip code must have 5 digits",
                            },
                            maxLength: {
                                value: 5,
                                message: "zip code only have 5 digits",
                            },
                        })}
                    />
                    {errors.zipCode?.type === "required" && (
                        <p className="text-red-500">
                            {errors.zipCode?.message}
                        </p>
                    )}
                    {errors.zipCode?.type === "minLength" && (
                        <p className="text-red-500">
                            {errors.zipCode?.message}
                        </p>
                    )}
                    {errors.zipCode?.type === "maxLength" && (
                        <p className="text-red-500">
                            {errors.zipCode?.message}
                        </p>
                    )}
                </span>
                <span>
                    <label htmlFor="">
                        {" "}
                        Line Id <span className=" text-red-500">*</span>{" "}
                    </label>
                    <Input
                        type="text"
                        placeholder="@flawless"
                        className="mt-2"
                        {...register("lineId", {
                            required: "invalid line id",
                        })}
                    />
                    {errors.lineId?.type === "required" && (
                        <p className="text-red-500">{errors.lineId?.message}</p>
                    )}
                </span>
                <span>
                    <label htmlFor="addition">
                        Additional Message (optional){" "}
                    </label>
                    <Textarea
                        className="mt-2"
                        placeholder="Additional message"
                        id="addition"
                        {...register("additionalMessage", {
                            maxLength: {
                                value: 100,
                                message: "Content must be within 100 words",
                            },
                        })}
                    />
                    {errors.additionalMessage?.type === "maxLength" && (
                        <p className="text-red-500">
                            {errors.additionalMessage?.message}
                        </p>
                    )}
                </span>
                <Button type="submit">
                    {loading ? "loading..." : "Submit..."}
                </Button>
            </form>
        </>
    );
}
