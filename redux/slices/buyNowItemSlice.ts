import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    buyNowItem: null,
};
export const buyNowItemSlice = createSlice({
    name: "buyNow",
    initialState,
    reducers: {
        buyNow: (state: any, action) => {
            state.buyNowItem = action.payload;
        },
    },
});
export const { buyNow } = buyNowItemSlice.actions;
export default buyNowItemSlice.reducer;
