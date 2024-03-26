import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
