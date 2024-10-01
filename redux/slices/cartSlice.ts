//@ts-ignore
import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../types";
const initialState = {
    cartItems: [],
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: any, action) => {
            const itemIdx = state.cartItems.findIndex(
                (el: product) => el.id === action.payload.id
            );
            //@ts-ignore
            if (itemIdx >= 0) {
                state.cartItems[itemIdx].count += action.payload.count;
            } else {
                state.cartItems.push(action.payload);
            }
        },
    },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
