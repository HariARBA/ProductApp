import { configureStore} from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./features/product/cartSlice";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart:cartReducer
  },
});
store.dispatch(getTotal())


