import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productLoading: (state) => {
      state.loading = true;
    },
    productError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
  },
});
export const { productError, productLoading, productSuccess } =
  productSlice.actions;

export default productSlice.reducer;
