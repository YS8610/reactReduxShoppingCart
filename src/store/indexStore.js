import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import cartContentSlice from "./cartContent";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartContent: cartContentSlice.reducer },
});

export default store;
