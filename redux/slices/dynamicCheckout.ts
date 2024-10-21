import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    checkoutCart: false,
};
export const dynamicCheckoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        checkoutCartItems: (state) => {
            state.checkoutCart = true;
        },
        resetCheckoutItem: (state) => {
            state.checkoutCart = false;
        },
    },
});
export const { checkoutCartItems, resetCheckoutItem } =
    dynamicCheckoutSlice.actions;
export default dynamicCheckoutSlice.reducer;
