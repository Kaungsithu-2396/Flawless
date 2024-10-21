import { configureStore } from "@reduxjs/toolkit";
import buyNowItemReducer from "../redux/slices/buyNowItemSlice";
import cartReducer from "../redux/slices/cartSlice";
import dynamicCheckoutReducer from "../redux/slices/dynamicCheckout";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        buyNow: buyNowItemReducer,
        dynamicCheckout: dynamicCheckoutReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
