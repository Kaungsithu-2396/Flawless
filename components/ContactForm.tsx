"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { contactForm } from "../types";
export default function ContactForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<contactForm>();
    const onSubmit: SubmitHandler<contactForm> = (data) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <>
            <form
                action=""
                method="post"
                className="flex flex-col gap-6 mx-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <span>
                    <label htmlFor="name">Name</label>
                    <Input
                        placeholder="Name"
                        id="name"
                        type="text"
                        {...register("name", {
                            required: "please provide the name",
                        })}
                        className="my-2"
                    />
                </span>
                {errors?.name?.type === "required" && (
                    <p className="text-red-500">{errors.name.message}</p>
                )}
                <span>
                    <label htmlFor="email">Email</label>
                    <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="my-2"
                        {...register("email", {
                            required: "please provide the email",
                        })}
                    />
                </span>
                {errors?.email?.type === "required" && (
                    <p className="text-red-500">{errors.email.message}</p>
                )}
                <span>
                    <label htmlFor="phone">Phone Number</label>
                    <Input
                        type="tel"
                        placeholder="Phone"
                        id="phone"
                        inputMode="numeric"
                        className="my-2"
                        {...register("phone", {
                            required: "please provide the phone",
                        })}
                    />
                </span>
                {errors?.phone?.type === "required" && (
                    <p className="text-red-500">{errors.phone.message}</p>
                )}
                <span>
                    <label htmlFor="message">Message</label>
                    <Textarea
                        placeholder="message"
                        id="message"
                        {...register("message", {
                            maxLength: {
                                value: 200,
                                message: "word count must be under 200",
                            },
                        })}
                    />
                </span>
                {errors?.message?.type === "maxLength" && (
                    <p className="text-red-500">{errors.message.message}</p>
                )}
                <span className="">
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </span>
            </form>
        </>
    );
}
