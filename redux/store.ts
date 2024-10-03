import { configureStore } from "@reduxjs/toolkit";
import buyNowItemReducer from "../redux/slices/buyNowItemSlice";
import cartReducer from "../redux/slices/cartSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        buyNow: buyNowItemReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
