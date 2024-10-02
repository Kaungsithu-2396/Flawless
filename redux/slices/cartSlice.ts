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
                state.cartItems[itemIdx].count += 1;
            } else {
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart: (state: any, action) => {
            const itemToDelete = state.cartItems.filter(
                (el: product) => el.id !== action.payload.id
            );
            state.cartItems = itemToDelete;
        },
        increaseCount: (state: any, action) => {
            const itemToIncrease: product = state.cartItems.find(
                (el: product) => el.id === action.payload.id
            );
            if (itemToIncrease && itemToIncrease.count < itemToIncrease.stock) {
                itemToIncrease.count++;
            } else {
                alert("exceed stock");
            }
        },
    },
});
export const { addToCart, removeFromCart, increaseCount } = cartSlice.actions;
export default cartSlice.reducer;
