import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadUser } from "./features/authSlice";
import cartReducer, { getTotal } from "./features/product/cartSlice";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
store.dispatch(getTotal());
store.dispatch(loadUser(null))