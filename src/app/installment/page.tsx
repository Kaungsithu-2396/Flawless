import React from "react";

export default function page() {
    return (
        <section className="my-4 flex justify-center items-center flex-col md:h-screen">
            <h1 className="text-center text-xl font-bold  sticky top-0 bg-slate-400 md:bg-slate-300 py-4 w-full ">
                Agreement policy for installment
            </h1>
            <div className=" w-2/3 m-auto my-6">
                <ul className="list-decimal ">
                    <li className="my-4">
                        Any products (gold,jewelry,stone) from flawless can be
                        bought in installment plan of{" "}
                        <span className="font-bold">
                            1 month, 3 month and 6 month
                        </span>{" "}
                        without extra percent charge.{" "}
                    </li>
                    <li className="my-4">
                        Customer who take installment plan has to pay at least
                        15% Deposit on first purchase.
                    </li>
                    <li className="my-4">
                        The left 75% can be paid with installment Plan and once
                        the payment is finished, customer can take the purchased
                        item.
                    </li>
                    <li className="my-4">
                        Customer can choose the preferred installment plan for
                        monthly payment.
                    </li>
                    <li className="my-4">
                        If customer failed to pay the monthly payment,the
                        previous deposits are not going to be refunded.
                    </li>
                    <li className="my-4">
                        Only 3 days are allowed beyond the expiration date for
                        monthly payment.
                    </li>
                    <li className="my-4">
                        If customer wants to sell or exchange, the rate for sell
                        is 10% and exchange is 5%.
                    </li>
                    <li className="my-4">
                        Any products without the vocher are not going to be
                        accepted for selling.
                    </li>
                    <li className="my-4">
                        Those who have paid in installments will only be
                        refunded in installments.
                    </li>
                    <li className="my-4">
                        Charges may apply for damaged items
                    </li>
                </ul>
            </div>
        </section>
    );
}
