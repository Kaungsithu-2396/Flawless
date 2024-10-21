// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     buyNowItem: null,
// };
// export const buyNowItemSlice = createSlice({
//     name: "buyNow",
//     initialState,
//     reducers: {
//         buyNow: (state: any, action) => {
//             state.buyNowItem = action.payload;
//         },
//         restItems: (state: any) => {
//             state.buyNowItem = [];
//         },
//     },
// });
// export const { buyNow, resetItems } = buyNowItemSlice.actions;
// export default buyNowItemSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buyNowItem: null,
};

export const buyNowItemSlice = createSlice({
    name: "buyNow",
    initialState,
    reducers: {
        buyNow: (state, action) => {
            state.buyNowItem = action.payload;
        },
        resetItems: (state: any) => {
            state.buyNowItem = [];
        },
    },
});

export const { buyNow, resetItems } = buyNowItemSlice.actions;
export default buyNowItemSlice.reducer;
